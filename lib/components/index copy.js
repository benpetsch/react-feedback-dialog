import { Button, message, Spin } from 'antd';

import CanvasMenu from './menu';
import FeedbackModal from './modal';
import DynamicCanvas from './canvas';
import Email from '../utils/mail';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      screenshotPngUrl: null,
      isCanvasVisible: false,
      isCanvasActive: false,
      isFeedbackDialogVisible: false
    };

    this.html2canvas;

    this.onDone = this.onDone.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onOk = this.onOk.bind(this);
    this.editScreenshot = this.editScreenshot.bind(this);
  }

  async componentDidMount() {
    const result = await import('html2canvas');
    this.html2canvas = result.default;

    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = null;
  }

  takeScreenshot = () => {
    // Generate canvas from html
    this.html2canvas(document.body).then(canvas => {
      // // Generate blob from canvas
      // canvas.toBlob(blob => {
      //   // Generate file download
      //   saveAs(blob, 'tmp_screenshot.png');

      //   // todo send this to backend
      // });

      // // Generate base64 from canvas
      var jpegUrl = canvas.toDataURL('image/jpeg');
      var screenshotPngUrl = canvas.toDataURL();

      this.setState({ screenshotPngUrl });
    });
  };

  editScreenshot = ({ description }) => {
    this.setState({
      description,
      isCanvasVisible: true,
      isCanvasActive: true,
      isFeedbackDialogVisible: false
    });
  };

  onDone = () => {
    const screenshotPngUrl = this.takeScreenshot();

    this.setState({
      screenshotPngUrl,
      isCanvasActive: false,
      isFeedbackDialogVisible: true
    });
  };

  onCancel = () => {
    this.setState({
      isFeedbackDialogVisible: false,
      isCanvasActive: false,
      isCanvasVisible: false,
      description: '',
      screenshotPngUrl: null
    });
  };

  onOk = () => {
    const {
      EMAIL_SMTP_HOST,
      EMAIL_TO,
      EMAIL_USER,
      EMAIL_PASSWORD
    } = this.props.config;
    const { form } = this.formRef.props;

    form.validateFields((err, formValues) => {
      if (err) {
        return;
      }
      const { description } = formValues;

      const data = {
        screenshotPngUrl: this.state.screenshotPngUrl,
        description,
        url: window.location.pathname + window.location.search,
        timestamp: new Date().toUTCString(),
        system: {
          cookieEnabled: navigator.cookieEnabled,
          userAgent: navigator.userAgent,
          appVersion: navigator.appVersion,
          language: navigator.language,
          languages: navigator.languages
        }
      };

      Email.send({
        Host: EMAIL_SMTP_HOST,
        Username: EMAIL_USER,
        Password: EMAIL_PASSWORD,
        To: EMAIL_TO,
        From: 'Fedback@wenigerpendeln.de',
        Subject: 'New feedback submitted',
        Body: JSON.stringify(data)
      }).then(() =>
        message.success(
          'Vielen Dank! Dein Feedback wurde erfolgreich übermittelt.'
        )
      );

      form.resetFields();
      this.setState({
        description: '',
        screenshotPngUrl: null,
        isCanvasVisible: false,
        isCanvasActive: false,
        isFeedbackDialogVisible: false
      });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    const {
      description,
      isCanvasVisible,
      isCanvasActive,
      isFeedbackDialogVisible,
      screenshotPngUrl
    } = this.state;

    return (
      <div
        style={{
          backgroundColor: 'transparent'
        }}
      >
        {isCanvasVisible && <DynamicCanvas isCanvasActive={isCanvasActive} />}
        {isCanvasVisible && (
          <CanvasMenu isCanvasActive={isCanvasActive} onDone={this.onDone} />
        )}
        {isFeedbackDialogVisible && screenshotPngUrl === null && (
          <div
            style={{
              position: 'fixed',
              top: '50vh',
              textAlign: 'center',
              width: 50,
              height: 50,
              backgroundColor: 'rgb(255,255,255,0.3)'
            }}
          >
            <div style={{}}>
              <Spin size="large" />
            </div>
          </div>
        )}
        {isFeedbackDialogVisible && screenshotPngUrl !== null && (
          <FeedbackModal
            wrappedComponentRef={this.saveFormRef}
            onCancel={this.onCancel}
            onOk={this.onOk}
            editScreenshot={this.editScreenshot}
            screenshotPngUrl={screenshotPngUrl}
            description={description}
          />
        )}
        {/* {!isFeedbackDialogVisible && !isCanvasVisible && ( */}
        <Button
          style={{ padding: 0 }}
          type="link"
          onClick={() =>
            this.setState(
              {
                isCanvasVisible: false,
                isCanvasActive: false,
                isFeedbackDialogVisible: false
              },
              () => {
                this.takeScreenshot();
                this.setState({
                  isCanvasVisible: true,
                  isCanvasActive: false,
                  isFeedbackDialogVisible: true
                });
              }
            )
          }
        >
          Feedback geben
        </Button>
        {/* )} */}
      </div>
    );
  }
}

export default Index;

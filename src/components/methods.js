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

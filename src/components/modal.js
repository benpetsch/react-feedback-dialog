import React from 'react';
import styled from 'styled-components';
import { Form, Modal, Input, Button, Icon } from 'antd';
import TextTruncate from 'react-text-truncate';

const ImgContainer = styled.div`
  max-height: 200px;
  display: inline-block;
  overflow: hidden;
  border: 1px;
  border-color: #446aff;
  border-style: solid;
  border-radius: 4px;
`;

const ScreenshotImg = styled.img`
  /* type: block; */
  background: lightgrey;
  width: 100%;
  margin-bottom: 8px;
  opacity: 0.7;
  filter: alpha(opacity=40);
`;

const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 16px;
    padding-bottom: 12px;
  }

  @media (max-width: 375px) {
    .ant-modal-content {
      /* width: 100vw;
      max-width: 100vw;
      height: 100vh; */
      border-radius: 0px;
    }
  }
`;

class FeedbackModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textLines: 5
    };
  }

  render() {
    const {
      description,
      onCancel,
      onOk,
      editScreenshot,
      form,
      screenshotPngUrl
    } = this.props;
    const { getFieldDecorator } = form;
    const { textLines } = this.state;

    return (
      <StyledModal
        style={{ margin: 0, width: '100vw', maxWidth: '350px' }}
        title="Feedback geben"
        width={'100vw'}
        visible={true}
        centered={true}
        okText="senden"
        cancelText="abbrechen"
        onOk={onOk}
        onCancel={onCancel}
      >
        <Form layout="vertical" hideRequiredMark={true}>
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator('description', {
              initialValue: description,
              rules: [
                {
                  required: true,
                  message: 'Eine Beschreibung ist erforderlich!'
                }
              ]
            })(
              <Input.TextArea
                rows={3}
                placeholder="Feedback beschreiben oder Ideen einbringen"
              />
            )}
          </Form.Item>
        </Form>
        {screenshotPngUrl && (
          <ImgContainer>
            <ScreenshotImg
              src={screenshotPngUrl}
              alt="Current view screenshot"
              width="100%"
            />
          </ImgContainer>
        )}

        {/* TODO add media query component here -> only render WHEN ipad and larger */}

        <Button
          style={{ marginBottom: 8, width: '100%' }}
          type="primary"
          ghost={true}
          onClick={() =>
            editScreenshot({ description: form.getFieldValue('description') })
          }
        >
          Screenshot bearbeiten
          {/* Hier klicken, um Informationen zu markieren */}
        </Button>

        <div>
          <TextTruncate
            line={textLines}
            truncateText="…"
            text="
                Dein Feedback wird an den Betreiber dieser Seite gesendet. Wir
                erfassen zusätzlich zu den von Dir eingebrachten Angaben
                Systeminformationen (z.B. Browser, Betriebssystem, etc.)
                Mithilfe dieser Informationen können wir unter Einhaltung
                unserer Datenschutzbestimmungen und Nutzungsbedingungen 
                technische Probleme lösen und unsere Dienste verbessern.
              "
            textTruncateChild={
              <a href="#" onClick={() => this.setState({ textLines: 100 })}>
                Alles zeigen
              </a>
            }
          />
        </div>
      </StyledModal>
    );
  }
}

export default Form.create({ name: 'feedback_dialog' })(FeedbackModal);

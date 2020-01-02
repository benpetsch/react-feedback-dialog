import React, { useState } from 'react';

import Modal, { Header, Body, DefaultFooter } from 'components/ui/modal';
import FeedbackForm from 'components/react-feedback-dialog/feedback-form';
import { onOk } from 'components/react-feedback-dialog/utils/publish';

const FeedbackModal = ({
  onClose,
  description,
  setDescription,
  screenshot,
  publishConfig
}) => {
  const [message, setMessage] = useState(null);

  return (
    <Modal id="feedback-modal">
      <Header>
        <span>Give Feedback</span>
      </Header>
      <Body>
        <FeedbackForm
          screenshot={screenshot}
          description={description}
          setDescription={setDescription}
          message={message}
        />
      </Body>
      <DefaultFooter
        onCancel={() => {
          onClose();
        }}
        onOk={async () => {
          const result = await onOk({ description, screenshot, publishConfig });

          if (result.status == 'success') {
            setMessage({
              status: 'success',
              text: 'Success! Thank you for your feedback.'
            });
            setTimeout(() => onClose(), 1500);
          } else {
            console.log('result', result);
            setMessage({
              status: 'error',
              text: result.message
            });
          }
        }}
      />
    </Modal>
  );
};

export default FeedbackModal;

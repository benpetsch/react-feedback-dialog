import React, { useState } from 'react';

import Modal from './feedback-modal';
import Canvas from './canvas';

const FeedbackDialog = ({ onClose }) => {
  const [isCanvasVisible, setIsCanvasVisible] = useState(false);
  const [isCanvasActive, setIsCanvasActive] = useState(false);
  const [isFeedbackModalVisible, setIsFeedbackModalVisible] = useState(true);

  const [description, setDescription] = useState('');
  const [screenshotUrl, setScreenshotUrl] = useState(null);

  return (
    <div>
      {isFeedbackModalVisible && (
        <Modal
          onClose={onClose}
          description={description}
          setDescription={setDescription}
          screenshotUrl={screenshotUrl}
          setScreenshotUrl={setScreenshotUrl}
        />
      )}
      {/* {isCanvasVisible && (
        <Canvas
          isCanvasActive={isCanvasActive}
          description={description}
          setDescription={setDescription}
          screenshotUrl={screenshotUrl}
          setScreenshotUrl={setScreenshotUrl}
        />
      )} */}
    </div>
  );
};

export default FeedbackDialog;

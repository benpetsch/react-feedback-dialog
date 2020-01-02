import React, { useState, useEffect } from 'react';

import Modal from 'components/react-feedback-dialog/feedback-modal';
// import Canvas from 'components/react-feedback-dialog/canvas';
import { takeScreenshot } from 'components/react-feedback-dialog/utils/screenshot';

const FeedbackDialog = ({ onClose, publishConfig }) => {
  // const [isCanvasVisible, setIsCanvasVisible] = useState(false);
  // const [isCanvasActive, setIsCanvasActive] = useState(false);
  const [isFeedbackModalVisible, setIsFeedbackModalVisible] = useState(true);

  const [description, setDescription] = useState('');
  const [screenshot, setScreenshot] = useState(null);

  useEffect(() => {
    // take screenshot before react-feedback-modal is visible
    (async function helper(document) {
      const image = await takeScreenshot(document);
      setScreenshot(image);
    })(document);
  }, []);

  return (
    <div>
      {isFeedbackModalVisible && (
        <Modal
          onClose={onClose}
          description={description}
          setDescription={setDescription}
          screenshot={screenshot}
          publishConfig={publishConfig}
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

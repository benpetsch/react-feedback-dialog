import React, { useState } from 'react';
import styled from 'styled-components';

import { Modal } from './ui';
import { Header, Body, DefaultFooter } from './ui/modal';

// import { onOk, onCancel, editScreenshot } form './methods';

const FeedbackModal = ({ onClose }) => {
  return (
    <Modal>
      <Header>Give Feedback</Header>
      <Body>
        <div style={{ backgroundColor: 'red', height: 200 }}>
          Content of body
        </div>
      </Body>
      {/* <DefaultFooter
        onCancel={() => {
          console.log('cancel');
          onClose();
        }}
        onOk={() => {
          console.log('send');
          console.log('da1');
          onClose();
          console.log('da2');
        }}
      /> */}
    </Modal>
  );
};

export default FeedbackModal;

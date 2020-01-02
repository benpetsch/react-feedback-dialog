import React, { useState } from 'react';
import styled from 'styled-components';

import Disclaimer from './disclaimer';
import AddImage from './add-image';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: black;
  height: 100%;
  overflow: scroll;
`;

const FeedbackInput = styled.textarea`
  flex-grow: 1;
  font-size: 16px;
  resize: none;
  outline: none;
  border-width: 1px;
  border-color: transparent;
  margin-bottom: -4px;
  width: calc(100% - 2px - 40px);
  min-width: calc(100% - 2px - 40px);
  max-width: calc(100% - 2px - 40px);
  padding: 20px;

  :focus {
    /* TODO grow to 100% */
    /* flex-grow: 0; */
    /* height: calc(100% - 34px - 32px + 4px);
    max-height: calc(100% - 34px - 32px + 4px); */
    -ms-transform: max-height 0.5s ease-in; /* IE */
    -moz-transform: max-height 0.5s ease-in; /* FF */
    -webkit-transform: max-height 0.5s ease-in; /* Safari and Chrome */
    -o-transform: max-height 0.5s ease-in; /* Opera */
    transform: max-height 0.5s ease-in;
  }
`;

const Label = styled.label`
  color: ${props => (props.status === 'success' ? 'green' : 'red')};
  margin: 20px 20px 0px 20px;
  visibility: visible;
  opacity: 1;
`;

const FeedbackForm = ({ description, setDescription, screenshot, message }) => {
  return (
    <Container>
      {message !== null &&
        (message.status == 'success' || message.status == 'error') && (
          <Label status={message.status}>{message.text}</Label>
        )}
      <FeedbackInput
        onChange={event => setDescription(event.target.value)}
        placeholder="Problem or idea description"
      />
      <AddImage screenshot={screenshot}></AddImage>
      <Disclaimer />
    </Container>
  );
};

export default FeedbackForm;

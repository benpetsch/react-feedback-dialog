import React, { useState } from 'react';
import styled from 'styled-components';
import TextTruncate from 'react-text-truncate';

const DisclaimerContainer = styled.div`
  flex-grow: 0;
  padding: 0px 20px;
  padding-bottom: 10px;
`;

const DislcaimerReadMoreLink = styled.a`
  color: #1890ff;
  text-decoration: none;
`;

const Disclaimer = () => {
  const [lines, setLines] = useState(5);

  return (
    <DisclaimerContainer>
      <TextTruncate
        line={lines}
        truncateText="… "
        text="Your feedback will be sent to the operator of this site. In addition to the information you provide, we collect system information (e.g. browser, operating system, etc.). With the help of this information, we can solve technical problems and improve our services in compliance with our privacy policy and terms of use."
        textTruncateChild={
          <DislcaimerReadMoreLink href="#" onClick={() => setLines(100)}>
            Read more
          </DislcaimerReadMoreLink>
        }
      />
    </DisclaimerContainer>
  );
};

export default Disclaimer;

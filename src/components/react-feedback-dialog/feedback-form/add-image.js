import React, { useState } from 'react';
import styled from 'styled-components';

import Checkbox from 'components/ui/checkbox';
import Spinner from 'components/ui/spinner';

const AddImageContainer = styled.div`
  flex-grow: 0;
  display: flex;
  background-color: lightgrey;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
  margin-bottom: 20px;
  padding-left: 10px;
  height: 64px;
`;

const ImageContainer = styled.div`
  height: 64px;
  width: 64px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  /* object-fit: fill;  */
  height: auto;
  width: auto;
  min-height: 100%;
  max-height: 100%;
  min-width: 100%;
  max-width: 100%;
  font-size: 14px;
  overflow: hidden;
`;

const AddImage = ({ screenshot, setScreenshot }) => {
  const [isAddScreenshotChecked, setIsAddScreenshotChecked] = useState(false);

  return (
    <AddImageContainer>
      <Checkbox
        text="Add Screenshot"
        checked={isAddScreenshotChecked}
        onChange={() => setIsAddScreenshotChecked(!isAddScreenshotChecked)}
      />
      <ImageContainer visible={isAddScreenshotChecked}>
        {screenshot === null ? (
          <Spinner size={32} />
        ) : (
          <Image
            height="64"
            width="64"
            alt="Screenshot preview"
            src={screenshot}
          ></Image>
        )}
      </ImageContainer>
    </AddImageContainer>
  );
};

export default AddImage;

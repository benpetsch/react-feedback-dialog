import React from 'react';
import styled from 'styled-components';

// based on
// https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const CheckboxText = styled.span`
  margin-left: 10px;

  :hover {
    color: #1890ff;
    cursor: pointer;
  }
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Hide checkbox visually but remain accessible to screen readers. */
  /* Source: https://polished.js.org/docs/#hidevisually */
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? '#1890ff' : 'white')};
  border:  ${props =>
    props.checked ? '1px solid #1890ff' : '1px solid lightgrey'};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:hover + & {
    cursor: pointer;
    border: 1px solid #1890ff;
  }

  /* ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #096dd9;
  } */

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const StyledLabel = styled.label`
  color: black;
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
`;

const CheckboxInput = ({ checked, onChange }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

const Checkbox = ({ checked, onChange, text, ...props }) => {
  return (
    <StyledLabel {...props}>
      <CheckboxInput checked={checked} onChange={onChange} {...props} />
      <CheckboxText>{text}</CheckboxText>
    </StyledLabel>
  );
};

export default Checkbox;

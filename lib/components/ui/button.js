import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  outline: 0;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  touch-action: manipulation;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  padding: 0 15px;
  margin-right: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: ${props =>
    props.type === 'primary'
      ? '1px solid #1890ff'
      : '1px solid rgb(217, 217, 217)'};
  background-color: ${props => (props.type === 'primary' ? '#1890ff' : '#fff')};
  color: ${props => (props.type === 'primary' ? '#fff' : 'rgb(49, 70, 89)')};
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

  .active,
  :active {
    color: ${props => (props.type === 'primary' ? '#fff' : '#096dd9')};
    background-color: ${props =>
      props.type === 'primary' ? '#096dd9' : '#fff'};
    border-color: #096dd9;
  }
`;

const Button = ({ onClick, style, text, type }) => {
  return (
    <Container type={type} style={{ ...style }} onClick={onClick}>
      {text}
    </Container>
  );
};

export default Button;

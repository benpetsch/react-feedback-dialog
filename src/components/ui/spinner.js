import React from 'react';
import styled, { keyframes } from 'styled-components';

// generated by https://loading.io/

const Container = styled.div`
  width: ${props => (props.size ? props.size + 'px' : '64px')};
  height: ${props => (props.size ? props.size + 'px' : '64px')};
  display: inline-block;
  overflow: hidden;
`;

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Element = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */

  div {
    position: absolute;
    width: ${props => (props.size ? props.size * 0.64 + 'px' : '40.96px')};
    height: ${props => (props.size ? props.size * 0.64 + 'px' : '40.96px')};
    border: ${props =>
      props.size
        ? (props.size / 64) * 10.24 + 'px solid #a2b4bc'
        : '10.24px solid #a2b4bc'};
    border-top-color: transparent;
    border-radius: 50%;
    animation: ${rotate} 2.4390243902439024s linear infinite;
    top: ${props => (props.size ? props.size * 0.51 + 'px' : '33px')};
    left: ${props => (props.size ? props.size * 0.51 + 'px' : '33px')};
    box-sizing: content-box;
  }
`;

const Spinner = ({ size }) => {
  return (
    <Container size={size}>
      <Element size={size}>
        <div></div>
      </Element>
    </Container>
  );
};

export default Spinner;

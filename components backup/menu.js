import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const DoneButton = styled(Button)`
  display: inline;
  margin-left: 8px;
`;

const MenuContainer = styled.div`
  display: block;
  position: fixed;
  top: ${props => props.pos.y}px;
  left: ${props => props.pos.x}px;
  background: white;
  padding-left: 8px;
  padding-right: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: grab;
  z-index: 10;
`;

class CanvasMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false,
      pos: { x: 0, y: 0 },
      rel: null
    };
  }

  componentDidMount() {
    const x = (document.body.clientWidth - 219.594) / 2;
    const y = (document.body.clientHeight - 64) / 2;
    this.setState({ pos: { x, y } });
  }

  onMouseDown = event => {
    event.stopPropagation();
    event.preventDefault();

    // only left mouse button
    if (event.button !== 0) return;

    this.setState({
      dragging: true,
      rel: {
        x: event.pageX - this.state.pos.x,
        y: event.pageY - this.state.pos.y
      }
    });
  };

  onMouseUp = event => {
    event.stopPropagation();
    event.preventDefault();

    this.setState({ dragging: false });
  };

  onMouseMove = event => {
    if (!this.state.dragging) return;

    event.stopPropagation();
    event.preventDefault();

    // only left mouse button
    if (event.button !== 0) return;

    this.setState({
      pos: {
        x: event.pageX - this.state.rel.x,
        y: event.pageY - this.state.rel.y
      }
    });
  };

  render() {
    const { isCanvasActive, onDone } = this.props;
    const { pos } = this.state;

    if (!isCanvasActive) return null;

    return (
      <MenuContainer
        pos={pos}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
      >
        <p style={{ display: 'inline' }}>Information markieren</p>
        {/* <Icon
          style={{
            paddingLeft: 8,
            fontSize: '24px',
            color: 'black',
            cursor: 'pointer'
          }}
          type="rollback"
          onClick={onRollback}
        /> */}
        <DoneButton type="primary" onClick={onDone}>
          Fertig
        </DoneButton>
      </MenuContainer>
    );
  }
}

export default CanvasMenu;

import React from 'react';
import { Stage, Layer, Group, Rect } from 'react-konva';

import { includeNewMask } from '../../utils/canvas';
import HighlightShape from './highlight-shape';

class FeedbackDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawing: false,
      highlightMasks: [
        // [[100, 100], [100, 400], [200, 400], [200, 100], [100, 100]]
      ],
      currentStartX: -1,
      currentStartY: -1,
      currentEndX: -1,
      currentEndY: -1
    };

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseDown(event) {
    if (this.props.isCanvasActive && !this.state.isDrawing) {
      this.setState({
        isDrawing: true,
        currentStartX: event.evt.offsetX,
        currentStartY: event.evt.offsetY
      });
    }
  }

  onMouseUp(event) {
    if (this.props.isCanvasActive && this.state.isDrawing) {
      this.setState(prevState => {
        const { highlightMasks, currentStartX, currentStartY } = prevState;

        const startX =
          currentStartX >= event.evt.offsetX
            ? currentStartX
            : event.evt.offsetX;
        const startY =
          currentStartY >= event.evt.offsetY
            ? currentStartY
            : event.evt.offsetY;
        const endX =
          currentStartX < event.evt.offsetX ? currentStartX : event.evt.offsetX;
        const endY =
          currentStartY < event.evt.offsetY ? currentStartY : event.evt.offsetY;

        const newHighlightMask = [
          [startX, startY],
          [startX, endY],
          [endX, endY],
          [endX, startY],
          [startX, startY]
        ];

        const newHighlightMasks = includeNewMask({
          highlightMasks,
          newHighlightMask
        });

        return {
          isDrawing: false,
          currentStartX: -1,
          currentStartY: -1,
          currentEndX: -1,
          currentEndY: -1,
          highlightMasks: newHighlightMasks
        };
      });
    }
  }

  onMouseMove(event) {
    if (this.props.isCanvasActive && this.state.isDrawing) {
      this.setState({
        currentEndX: event.evt.offsetX,
        currentEndY: event.evt.offsetY
      });
    }
  }

  render() {
    var width = document.body.scrollWidth;
    var height = document.body.scrollHeight;

    const {
      highlightMasks,
      currentStartX,
      currentStartY,
      currentEndX,
      currentEndY
    } = this.state;

    return (
      <Stage
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1
        }}
        width={width}
        height={height}
      >
        <Layer>
          <Group>
            <HighlightShape
              masks={highlightMasks}
              currentMask={{
                startX: currentStartX,
                startY: currentStartY,
                endX: currentEndX,
                endY: currentEndY
              }}
              width={width}
              height={height}
            />

            <Rect
              id="fake-background"
              x={0}
              y={0}
              width={width}
              height={height}
              onMouseDown={this.onMouseDown}
              onMouseUp={this.onMouseUp}
              onMouseMove={this.onMouseMove}
            />
          </Group>
        </Layer>
      </Stage>
    );
  }
}

export default FeedbackDrawer;

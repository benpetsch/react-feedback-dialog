import React from 'react';
import { Shape } from 'react-konva';

const HighlightShape = ({ width, height, masks, currentMask }) => {
  return (
    <Shape
      x={0}
      y={0}
      width={width}
      height={height}
      sceneFunc={(ctx, shape) => {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(width, 0);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.lineTo(0, 0);
        ctx.closePath();

        masks.forEach(maskPoints => {
          const startPoint = maskPoints[0];
          ctx.moveTo(startPoint[0], startPoint[1]);

          maskPoints.forEach(point => {
            ctx.lineTo(point[0], point[1]);
          });
          ctx.closePath();
        });

        if (currentMask.startX != -1 && currentMask.endX !== -1) {
          ctx.moveTo(currentMask.startX, currentMask.startY);
          ctx.lineTo(currentMask.startX, currentMask.endY);
          ctx.lineTo(currentMask.endX, currentMask.endY);
          ctx.lineTo(currentMask.endX, currentMask.startY);
          ctx.lineTo(currentMask.startX, currentMask.startY);
          ctx.closePath();
        }

        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.strokeStyle = 'rgba(0.5,0.5,0.5,0.5)';
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
      }}
    />
  );
};

export default HighlightShape;

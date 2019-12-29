import polygonClipping from 'polygon-clipping';

const calcMasksIntersect = ({ mask1, mask2 }) => {
  return polygonClipping.intersection([mask1], [mask2]).length > 0;
};

const includeNewMask = ({ highlightMasks, newHighlightMask }) => {
  let isIntersection = false;
  let newHighlightMasks = [...highlightMasks];

  // Detect & union intersecting polygons
  for (var i = 0; i < highlightMasks.length; i++) {
    const tmpMask = highlightMasks[i];

    isIntersection = calcMasksIntersect({
      mask1: tmpMask,
      mask2: newHighlightMask
    });

    if (isIntersection) {
      const points = polygonClipping.union([tmpMask], [newHighlightMask])[0];

      // sort counter clow wise
      const ccwMask = points[0].reverse();

      newHighlightMasks[i] = ccwMask;
      break;
    }
  }

  if (!isIntersection) {
    newHighlightMasks = [...newHighlightMasks, newHighlightMask];
  }

  return newHighlightMasks;
};

export { calcMasksIntersect, includeNewMask };

const isClickInBox = ({ x1, x2, y1, y2 }, left, top) => {
  if (left >= x1 && left <= x2 && top <= y2 && top >= y1) {
    return true;
  }
  return false;
};

export default isClickInBox;

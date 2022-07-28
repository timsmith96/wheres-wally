const calcClickLocation = (e) => {
  const bcr = e.target.getBoundingClientRect();
  const x = ((e.clientX - bcr.left) / bcr.width) * 100;
  const y = ((e.clientY - bcr.top) / bcr.height) * 100;
  return { x, y };
};

export default calcClickLocation;

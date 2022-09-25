export function onMouseDelta(callback) {
  let prevMouseX = null;
  let prevMouseY = null;

  function isInitialized() {
    return prevMouseX !== null && prevMouseY !== null;
  }

  document.addEventListener("mousemove", (e) => {
    if (!isInitialized()) {
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      return;
    }

    const deltaX = e.clientX - prevMouseX;
    const deltaY = e.clientY - prevMouseY;

    prevMouseX = e.clientX;
    prevMouseY = e.clientY;

    callback(deltaX, deltaY);
  });
}

export function onMouseDelta(callback) {
  let prevMouseX = 0;
  let prevMouseY = 0;

  document.addEventListener("mousedown", (e) => {
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  });

  document.addEventListener("mousemove", (e) => {
    const deltaX = e.clientX - prevMouseX;
    const deltaY = e.clientY - prevMouseY;

    prevMouseX = e.clientX;
    prevMouseY = e.clientY;

    callback(deltaX, deltaY);
  });
}

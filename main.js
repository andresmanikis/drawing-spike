import { Box } from "./Box.js";
import { onMouseDelta } from "./onMouseDelta.js";

const box1 = new Box(200, 100);
const box2 = new Box(400, 200);

onMouseDelta((deltaX, deltaY) => {
  box1.handleMouseDelta(deltaX, deltaY);
  box2.handleMouseDelta(deltaX, deltaY);
});

document.addEventListener("mouseup", () => {
  box1.stopInteractions();
  box2.stopInteractions();
});

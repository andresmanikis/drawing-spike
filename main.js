import { Box } from "./Box.js";
import { onMouseDelta } from "./onMouseDelta.js";

const box = new Box(200, 100);

onMouseDelta((deltaX, deltaY) => {
  box.handleMouseDelta(deltaX, deltaY);
});

document.addEventListener("mouseup", () => {
  box.stopInteractions();
});

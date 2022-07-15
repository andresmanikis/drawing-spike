import { Box } from "./Box.js";
import { onMouseDelta } from "./onMouseDelta.js";

const box = new Box(200, 100);

onMouseDelta((deltaX, deltaY) => {
  if (box.moving) {
    box.x += deltaX;
    box.y += deltaY;

    box.update();
  }
});

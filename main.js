import { Box } from "./Box.js";
import { onMouseDelta } from "./onMouseDelta.js";

const boxes = [new Box(200, 100), new Box(400, 200)];

let movingObject = null;

onMouseDelta((deltaX, deltaY) => {
  movingObject?.move(deltaX, deltaY);
  movingObject.draw();
});

boxes.forEach((box) => {
  box.onMouseDown(() => {
    movingObject = box;
  });
});

document.addEventListener("mouseup", () => {
  movingObject = null;
});

import { Box } from "./Box.js";
import { onMouseDelta } from "./onMouseDelta.js";

const boxes = [new Box(200, 100), new Box(400, 200)];

let movingObject = null;

onMouseDelta((deltaX, deltaY) => {
  if (!movingObject) return;

  movingObject.move(deltaX, deltaY);
  movingObject.draw(document.body);
});

boxes.forEach((box) => {
  box.onMouseDown(() => {
    movingObject = box;
  });

  box.draw(document.body);
});

document.addEventListener("mouseup", () => {
  movingObject = null;
});

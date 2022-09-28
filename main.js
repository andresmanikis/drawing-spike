import { Box } from "./Box.js";
import { Handles } from "./Handles.js";
import { onMouseDelta } from "./onMouseDelta.js";

const boxes = [new Box(200, 100), new Box(400, 200)];
// const handles = new Handles(200, 100, 100, 100);

let movingObject = null;
let handles = null;

onMouseDelta((deltaX, deltaY) => {
  if (!movingObject) return;

  movingObject.move(deltaX, deltaY);
  movingObject.draw(document.body);
});

boxes.forEach((box) => {
  box.onMouseDown(() => {
    handles?.remove();
    const { x, y, width, height } = box.getBoundingBox();
    handles = new Handles(x, y, width, height);
  });

  box.draw(document.body);
});

document.addEventListener("mouseup", () => {
  movingObject = null;
});

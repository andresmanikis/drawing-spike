import { Box } from "./Box.js";
import { Handles } from "./Handles.js";
import { onMouseDelta } from "./onMouseDelta.js";

const boxes = [new Box(200, 100), new Box(400, 200)];

let handles = null;
let leftPressed = false;

onMouseDelta((deltaX, deltaY) => {
  if (!leftPressed) return;
  if (!handles) return;

  handles.move(deltaX, deltaY);
  handles.box.move(deltaX, deltaY);
});

boxes.forEach((box) => {
  box.onMouseDown(() => {
    handles?.remove();
    const { x, y, width, height } = box.getBoundingBox();
    handles = new Handles(x, y, width, height, box);
    leftPressed = true;

    handles.onMouseDown(() => (leftPressed = true));
  });
});

document.addEventListener("mouseup", () => {
  leftPressed = false;
});

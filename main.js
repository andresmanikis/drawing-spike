import { Box } from "./Box.js";
import { Handles } from "./Handles.js";
import { onMouseDelta } from "./onMouseDelta.js";

const boxes = [new Box(200, 100, "blue"), new Box(400, 200, "green")];

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
    leftPressed = true;

    handles?.remove();
    handles = null;

    const { x, y, width, height } = box.getBoundingBox();
    handles = new Handles(x, y, width, height, box);
    handles.onMouseDown(() => (leftPressed = true));
  });
});

document.addEventListener("mouseup", () => {
  leftPressed = false;
});

document.addEventListener("mousedown", (e) => {
  if (e.target === document.body) {
    handles?.remove();
    handles = null;
  }
});

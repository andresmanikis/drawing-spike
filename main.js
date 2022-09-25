import { Box } from "./Box.js";
import { onMouseDelta } from "./onMouseDelta.js";

const boxes = [new Box(200, 100), new Box(400, 200)];

let interactingObject = null;

onMouseDelta((deltaX, deltaY) => {
  interactingObject?.move(deltaX, deltaY);
});

boxes.forEach((box) => {
  box.onMouseDown(() => {
    interactingObject = box;
  });
});

document.addEventListener("mouseup", () => {
  interactingObject = null;
});

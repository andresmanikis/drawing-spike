import { Box } from "./Box.js";
import { Handles } from "./Handles.js";

const boxes = [new Box(200, 100, "blue"), new Box(400, 200, "green")];

let handles = null;

boxes.forEach((box) => {
  box.onMouseDown(() => {
    handles?.remove();
    handles = new Handles(box);
  });
});

document.addEventListener("mousedown", (e) => {
  if (e.target === document.body) {
    handles?.remove();
    handles = null;
  }
});

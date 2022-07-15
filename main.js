import { Box } from "./Box.js";

const box = new Box(document.querySelector("div"), 200, 100);

let prevMouseX = 0;
let prevMouseY = 0;

document.addEventListener("mousedown", (e) => {
  prevMouseX = e.clientX;
  prevMouseY = e.clientY;
});

document.addEventListener("mousemove", (e) => {
  const deltaX = e.clientX - prevMouseX;
  const deltaY = e.clientY - prevMouseY;

  prevMouseX = e.clientX;
  prevMouseY = e.clientY;

  if (box.moving) {
    box.x += deltaX;
    box.y += deltaY;

    box.update();
  }
});

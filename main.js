const box = document.querySelector("div");

let moving = false;

let boxX = 200;
let boxY = 100;

let prevMouseX = 0;
let prevMouseY = 0;

function updateBox() {
  box.style.left = boxX;
  box.style.top = boxY;
}

updateBox();

document.addEventListener("mousedown", (e) => {
  prevMouseX = e.clientX;
  prevMouseY = e.clientY;
});
box.addEventListener("mousedown", () => (moving = true));
box.addEventListener("mouseup", () => (moving = false));

document.addEventListener("mousemove", (e) => {
  if (!moving) return;

  const deltaX = e.clientX - prevMouseX;
  const deltaY = e.clientY - prevMouseY;

  boxX += deltaX;
  boxY += deltaY;

  updateBox();

  prevMouseX = e.clientX;
  prevMouseY = e.clientY;
});

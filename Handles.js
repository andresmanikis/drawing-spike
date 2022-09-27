export class Handles {
  constructor(x, y, width, height) {
    const el = document.createElement("div");

    el.style.border = "2px solid green";
    el.style.position = "fixed";
    el.style.left = x - 5;
    el.style.top = y - 5;
    el.style.width = width + 10;
    el.style.height = height + 10;

    document.body.appendChild(el);
  }
}

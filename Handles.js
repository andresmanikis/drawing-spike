const offset = 8;

export class Handles {
  constructor(x, y, width, height) {
    const el = document.createElement("div");

    el.style.border = "2px solid green";
    el.style.position = "fixed";
    el.style.left = x - offset / 2 - width / 2;
    el.style.top = y - offset / 2 - height / 2;
    el.style.width = width + offset;
    el.style.height = height + offset;

    document.body.appendChild(el);
  }
}

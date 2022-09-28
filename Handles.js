const offset = 0;

export class Handles {
  constructor(x, y, width, height) {
    const el = document.createElement("div");
    el.className = "handles";

    el.style.left = x - offset / 2 - width / 2;
    el.style.top = y - offset / 2 - height / 2;
    el.style.width = width + offset;
    el.style.height = height + offset;

    document.body.appendChild(el);
  }
}

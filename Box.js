export class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.moving = false;
    this.createElement();

    this.el.addEventListener("mousedown", () => (this.moving = true));
    this.el.addEventListener("mouseup", () => (this.moving = false));
  }

  createElement() {
    const el = document.createElement("div");
    el.className = "box";
    el.style.left = this.x;
    el.style.top = this.y;
    this.el = el;

    document.body.appendChild(el);
  }

  update() {
    this.el.style.left = this.x;
    this.el.style.top = this.y;
  }
}

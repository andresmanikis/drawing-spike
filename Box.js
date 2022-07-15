export class Box {
  constructor(el, x, y) {
    this.el = el;
    this.x = x;
    this.y = y;
    this.moving = false;
    this.update();

    this.el.addEventListener("mousedown", () => (this.moving = true));
    this.el.addEventListener("mouseup", () => (this.moving = false));
  }

  update() {
    this.el.style.left = this.x;
    this.el.style.top = this.y;
  }
}

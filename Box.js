export class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.moving = false;
    this.createElement();
  }

  createElement() {
    const boxEl = document.createElement("div");

    boxEl.className = "box";
    boxEl.style.left = this.x;
    boxEl.style.top = this.y;

    const handleEl = document.createElement("div");
    handleEl.className = "box__handle-right";

    boxEl.addEventListener("mousedown", () => (this.moving = true));
    boxEl.addEventListener("mouseup", () => (this.moving = false));

    handleEl.addEventListener("mousedown", (e) => e.stopPropagation());
    handleEl.addEventListener("mouseup", (e) => e.stopPropagation());

    boxEl.appendChild(handleEl);
    document.body.appendChild(boxEl);

    this.el = boxEl;
  }

  update() {
    this.el.style.left = this.x;
    this.el.style.top = this.y;
  }
}

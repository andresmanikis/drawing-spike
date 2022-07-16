export class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;

    this.moving = false;
    this.resizing = false;
    this.createElement();
  }

  stopInteractions() {
    this.moving = false;
    this.resizing = false;
  }

  handleMouseDelta(deltaX, deltaY) {
    if (this.moving) {
      this.x += deltaX;
      this.y += deltaY;

      this.update();
    }

    if (this.resizing) {
      this.width += deltaX;
      this.el.style.width = this.width;
    }
  }

  createElement() {
    const boxEl = document.createElement("div");

    boxEl.className = "box";
    boxEl.style.left = this.x;
    boxEl.style.top = this.y;
    boxEl.style.width = 100;
    boxEl.style.height = 100;

    const handleEl = document.createElement("div");
    handleEl.className = "box__handle-right";

    boxEl.addEventListener("mousedown", () => {
      if (this.resizing) return;
      this.moving = true;
    });

    handleEl.addEventListener("mousedown", (e) => {
      this.resizing = true;
    });

    boxEl.appendChild(handleEl);
    document.body.appendChild(boxEl);

    this.el = boxEl;
  }

  update() {
    this.el.style.left = this.x;
    this.el.style.top = this.y;
  }
}

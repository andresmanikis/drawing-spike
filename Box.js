export class Box {
  #mouseDownCallback = null;
  #x = null;
  #y = null;
  #width = 100;
  #height = 100;

  constructor(x, y, color) {
    this.#x = x;
    this.#y = y;

    this.createElement(color);
  }

  getBoundingBox() {
    return { x: this.#x, y: this.#y, width: this.#width, height: this.#height };
  }

  onMouseDown(mouseDownCallback) {
    this.#mouseDownCallback = mouseDownCallback;
  }

  move(deltaX, deltaY) {
    this.#x += deltaX;
    this.#y += deltaY;

    this.el.style.left = this.#x - this.#width / 2;
    this.el.style.top = this.#y - this.#height / 2;
  }

  createElement(color) {
    const boxEl = document.createElement("div");

    boxEl.style.backgroundColor = color;
    boxEl.className = "box";
    boxEl.style.left = this.#x - this.#width / 2;
    boxEl.style.top = this.#y - this.#height / 2;
    boxEl.style.width = 100;
    boxEl.style.height = 100;

    boxEl.addEventListener("mousedown", () => {
      this.#mouseDownCallback();
    });

    this.el = boxEl;
    document.body.appendChild(boxEl);
  }
}

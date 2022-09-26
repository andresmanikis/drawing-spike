export class Box {
  #mouseDownCallback = null;
  #x = null;
  #y = null;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
    this.width = 100;
    this.height = 100;

    this.createElement();
  }

  onMouseDown(mouseDownCallback) {
    this.#mouseDownCallback = mouseDownCallback;
  }

  move(deltaX, deltaY) {
    this.#x += deltaX;
    this.#y += deltaY;
  }

  createElement() {
    const boxEl = document.createElement("div");

    boxEl.className = "box";
    boxEl.style.left = this.#x;
    boxEl.style.top = this.#y;
    boxEl.style.width = 100;
    boxEl.style.height = 100;

    boxEl.addEventListener("mousedown", () => {
      this.#mouseDownCallback();
    });

    document.body.appendChild(boxEl);

    this.el = boxEl;
  }

  draw() {
    this.el.style.left = this.#x;
    this.el.style.top = this.#y;
  }
}

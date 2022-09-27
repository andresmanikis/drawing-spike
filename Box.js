export class Box {
  #mouseDownCallback = null;
  #x = null;
  #y = null;
  #width = 100;
  #height = 100;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;

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
    boxEl.style.left = this.#x - this.#width / 2;
    boxEl.style.top = this.#y - this.#height / 2;
    boxEl.style.width = 100;
    boxEl.style.height = 100;

    boxEl.addEventListener("mousedown", () => {
      this.#mouseDownCallback();
    });

    this.el = boxEl;
  }

  draw(body) {
    if (!body.contains(this.el)) {
      body.appendChild(this.el);
    }

    this.el.style.left = this.#x - this.#width / 2;
    this.el.style.top = this.#y - this.#height / 2;
  }
}

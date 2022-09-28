export class Handles {
  #el;
  #x;
  #y;
  #width;
  #height;
  #shape;
  #prevX;
  #prevY;

  constructor(shape) {
    const { x, y, width, height } = shape.getBoundingBox();

    this.#el = render(x, y, width, height);
    this.#x = x;
    this.#y = y;
    this.#width = width;
    this.#height = height;
    this.#shape = shape;

    this.#handleMouseDown();
  }

  #handleMouseDown = () => {
    this.#prevX = null;
    this.#prevY = null;

    document.addEventListener("mousemove", this.#handleMouseMove);
    document.addEventListener("mouseup", this.#handleMouseUp);
  };

  #handleMouseUp = () => {
    this.#el.addEventListener("mousedown", this.#handleMouseDown);
    document.removeEventListener("mouseup", this.#handleMouseUp);
    document.removeEventListener("mousemove", this.#handleMouseMove);
  };

  #handleMouseMove = (e) => {
    if (!this.#prevX || !this.#prevY) {
      this.#prevX = e.clientX;
      this.#prevY = e.clientY;

      return;
    }

    const dx = e.clientX - this.#prevX;
    const dy = e.clientY - this.#prevY;

    this.#prevX = e.clientX;
    this.#prevY = e.clientY;

    this.#move(dx, dy);
  };

  #move(dx, dy) {
    this.#x += dx;
    this.#y += dy;

    this.#el.style.left = this.#x - this.#width / 2;
    this.#el.style.top = this.#y - this.#height / 2;

    this.#shape.move(dx, dy);
  }

  remove() {
    document.body.removeChild(this.#el);
  }
}

function render(x, y, width, height) {
  const el = createBoundingBox(x, y, width, height);
  addTopHandle(el);
  addRightHandle(el);
  addBottomHandle(el);
  addLeftHandle(el);
  document.body.appendChild(el);

  return el;
}

function createBoundingBox(x, y, width, height) {
  const el = document.createElement("div");
  el.className = "handles";

  el.style.left = x - width / 2;
  el.style.top = y - height / 2;
  el.style.width = width;
  el.style.height = height;

  return el;
}

function addTopHandle(el) {
  const handle = createHandle();
  handle.style.top = -5;
  handle.style.left = parseInt(el.style.width) / 2 - 5;
  handle.style.cursor = "ns-resize";

  handle.addEventListener("mousedown", () => {
    console.log("top");
  });

  el.appendChild(handle);
}

function addRightHandle(el) {
  const handle = createHandle();
  handle.style.right = -5;
  handle.style.top = parseInt(el.style.height) / 2 - 5;
  handle.style.cursor = "ew-resize";

  el.appendChild(handle);
}

function addBottomHandle(el) {
  const handle = createHandle();
  handle.style.bottom = -5;
  handle.style.left = parseInt(el.style.width) / 2 - 5;
  handle.style.cursor = "ns-resize";

  el.appendChild(handle);
}

function addLeftHandle(el) {
  const handle = createHandle();
  handle.style.left = -5;
  handle.style.top = parseInt(el.style.height) / 2 - 5;
  handle.style.cursor = "ew-resize";

  el.appendChild(handle);
}

function createHandle() {
  const handle = document.createElement("div");
  handle.className = "handles__handle";
  return handle;
}

export class Handles {
  #el;
  #x;
  #y;
  #width;
  #height;
  #mouseDown;

  constructor(x, y, width, height, box) {
    const el = createBoundingBox(x, y, width, height);

    el.addEventListener("mousedown", () => {
      this.#mouseDown();
    });

    addTopHandle(el);
    addRightHandle(el);
    addBottomHandle(el);
    addLeftHandle(el);

    document.body.appendChild(el);

    this.#el = el;
    this.#x = x;
    this.#y = y;
    this.#width = width;
    this.#height = height;
    this.box = box;
  }

  onMouseDown(callback) {
    this.#mouseDown = callback;
  }

  move(deltaX, deltaY) {
    this.#x += deltaX;
    this.#y += deltaY;

    this.#el.style.left = this.#x - this.#width / 2;
    this.#el.style.top = this.#y - this.#height / 2;
  }

  remove() {
    document.body.removeChild(this.#el);
  }
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

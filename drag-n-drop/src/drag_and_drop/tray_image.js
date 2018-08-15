export default class TrayImage {
  constructor({ imageElement, tray }) {
    this.tray = tray;
    this.element = imageElement;
    this.cursorOffset = {};

    this.element.classList.add("tray-image");

    this.element.addEventListener("dragstart", this._dragStartHandler.bind(this));
    this.element.addEventListener("dragend", this._dragEndHandler.bind(this));
  }

  _dragStartHandler(event) {
    const image = event.currentTarget;
    const imagePosition = image.getBoundingClientRect();

    this.cursorOffset.x = imagePosition.x - event.clientX;
    this.cursorOffset.y = imagePosition.y - event.clientY;
  };

  _dragEndHandler(event) {
    const realX = event.pageX + this.cursorOffset.x;
    const realY = event.pageY + this.cursorOffset.y;

    if (this.tray.dragAndDrop.isWithinBounds({ x: event.pageX, y: event.pageY })) {
      this.element.style.left = realX;
      this.element.style.top = realY;
      this.element.style.position = "absolute"
    } else {
      this.element.style.left = "initial";
      this.element.style.top = "initial";
      this.element.style.position = "relative"
    }

    this.cursorOffset = {}
  };
}

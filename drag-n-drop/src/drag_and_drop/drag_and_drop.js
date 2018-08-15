import Tray from "./tray";

export default class DragAndDrop {
  constructor({ board, tray  }) {
    this.boardElement = board;
    this.trayElement = tray;

    this.tray = new Tray({ trayElement: this.trayElement, dragAndDrop: this })
    
    this.initialize();
  }
  
  initialize() {
    document.addEventListener("drop", this._dropHandler.bind(this));
    document.addEventListener("dragover", this._dragOverHandler.bind(this));
  }

  addImageToTray(imageElement) {
    this.tray.addImage(imageElement);
  }

  isWithinBounds({ x, y }) {
    return x > 0 && x < this.boardElement.clientWidth && y > 0 && y < this.boardElement.clientHeight
  }

// Private

  _dropHandler(event) {
    event.preventDefault();

    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      const image = new Image();
      image.src = event.srcElement.result;
      this.addImageToTray(image);
    }

    if (event.dataTransfer.files[0]) {
      fileReader.readAsDataURL(event.dataTransfer.files[0])
    }
  }

  _dragOverHandler(event) {
    event.preventDefault();
  }
}

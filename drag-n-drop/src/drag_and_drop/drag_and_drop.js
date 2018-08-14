export default class DragAndDrop {
  constructor({ board, tray  }) {
    this.board = board;
    this.tray = tray;
  }

  _getImagesFromTray() {
    return Array.from(this.tray.children);
  }
}
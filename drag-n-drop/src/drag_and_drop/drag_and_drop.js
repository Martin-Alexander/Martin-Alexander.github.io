import Tray from "./tray";

export default class DragAndDrop {
  constructor({ board, tray  }) {
    this.boardElement = board;
    this.trayElement = tray;

    this.tray = new Tray(this.trayElement)
  }
}
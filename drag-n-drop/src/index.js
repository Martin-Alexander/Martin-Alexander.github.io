import DragAndDrop from "./drag_and_drop/drag_and_drop.js";

const board = document.querySelector("#board");
const tray = document.querySelector("#tray");

global.dragAndDrop = new DragAndDrop({
  board: board,
  tray: tray
});

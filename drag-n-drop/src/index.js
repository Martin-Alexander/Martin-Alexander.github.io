const dropHandler = (event) => {
  event.preventDefault();

  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    uploaded.src = event.srcElement.result
  }

  if (event.dataTransfer.files[0]) {
    fileReader.readAsDataURL(event.dataTransfer.files[0])
  }

  console.log(event);
}

document.addEventListener("drop", dropHandler);

document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

import DragAndDrop from "./drag_and_drop/drag_and_drop.js";

const board = document.querySelector("#board");
const tray = document.querySelector("#tray");

global.dragAndDrop = new DragAndDrop({
  board: board,
  tray: tray
});

const dragMes = document.querySelectorAll(".dragMe");
const board = document.getElementById("board");
const uploaded = document.getElementById("uploaded");

const cursorOffset = {}

const dragMeDragStartHandler = (event) => {
  const image = event.currentTarget;
  const imagePosition = image.getBoundingClientRect();

  cursorOffset.x = imagePosition.x - event.clientX;
  cursorOffset.y = imagePosition.y - event.clientY;
};

const dragMeDragEndHandler =  (event) => {
  const image = event.currentTarget;
  
  image.style.left = event.pageX + cursorOffset.x;
  image.style.top = event.pageY + cursorOffset.y;
};

const dropHandler = (event) => {
  event.preventDefault();

  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    uploaded.src = event.srcElement.result
  }

  if (event.dataTransfer.files[0]) {
    fileReader.readAsDataURL(event.dataTransfer.files[0])
  }
}

const dragOverHandler = (event) => {
  event.preventDefault();
}

dragMes.forEach((dragMe) => {
  dragMe.addEventListener("dragstart", dragMeDragStartHandler);
  dragMe.addEventListener("dragend", dragMeDragEndHandler);
});

document.addEventListener("drop", dropHandler);
document.addEventListener("dragover", dragOverHandler);

import TrayImage from "./tray_image";

export default class Tray {
  constructor({ trayElement, dragAndDrop }) {
    this.dragAndDrop = dragAndDrop;
    this.element = trayElement;
    this.trayImages = Array.from(this.element.children).map((imageElement) => {
      return new TrayImage({ imageElement: imageElement, tray: this });
    });
  }

  addImage(imageElement) {
    this.trayImages.push(new TrayImage({ imageElement: imageElement, tray: this }));
    this.element.appendChild(imageElement);
  }
}

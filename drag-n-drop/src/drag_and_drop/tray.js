import TrayImage from "./tray_image";

export default class Tray {
  constructor(trayElement) {
    this.element = trayElement;
    this.trayImages = Array.from(this.element.children).map((imageElement) => {
      return new TrayImage(imageElement);
    });
  }
}

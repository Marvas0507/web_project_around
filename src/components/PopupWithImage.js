import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._popupElement.querySelector(".popup__content-title");
    this._image = this._popupElement.querySelector(".popup__content-image");
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen({ link, name }) {
    super.handleOpen();
    this._image.src = link;
    this._title.textContent = name;
  }
}

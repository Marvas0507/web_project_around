import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._captionElement = this._popupElement.querySelector(".popup__content-title");
        this._imageElement = this._popupElement.querySelector(".popup__content-image");
    }
    open({src, alt, caption}) {
        this._imageElement.src = src;
        this._imageElement.alt = alt;
        this._captionElement.textContent = caption;
        super.open();
    }
}
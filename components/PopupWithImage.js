import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._title = this._popupElement.querySelector(".popup__content-title");
        this._image = this._popupElement.querySelector(".popup__content-image");
        this.open = this.open.bind(this);
    }
    open({link, name}) {
        super.open();
        this._image.src =link;
        this._title.textContent = name;
    }
}
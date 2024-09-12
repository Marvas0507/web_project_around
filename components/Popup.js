export default class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector)        
    }

    open() {
        this._popupElement.classList.add("popup__show")
    }
    close () {
        this._popupElement.classList.remove("popup__show")
    }
    
    _handleEscClose(e) {
        if (e.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.querySelector("popup__button-close").addEventListener("click", () => {
            this.close();
        });
        this._popupElement.addEventListener("mousedown", (e) => {
            if (e.target.classList.contains("popup") && !e.target.closest("form")) {
                this.close();
            }
        })
    }

}
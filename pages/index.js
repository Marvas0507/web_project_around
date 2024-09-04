import Card from "../scripts/Card.js";
import FormValidator from "../scripts/validation.js";
import { handleEscapeKey, handleClosePopups, handleClickOutside } from "../scripts/Utils.js";
import { popupPhoto, handleOpenPopups } from "../scripts/Card.js";

import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForms.js";

// const popupProfile = document.querySelector("#popup-profile");
const formProfile = document.querySelector("#form-profile");
const inputName = document.querySelector("#input-name");
const inputAbout = document.querySelector("#input-about");
const formClose = document.querySelector("#form-button-close");
const profileName = document.querySelector(".profile__info-content-name");
const profileAbout = document.querySelector(".profile__info-paragraph");
const profileButton = document.querySelector(".profile__info-content-add-button");

const initialCards = [
    {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
];

const cardArea = document.querySelector(".element");
// const popupCards = document.querySelector("#popup-cards");
const formCard = document.querySelector("#form-cards");
const cardButton = document.querySelector(".profile__button-add");
const cardClose = document.querySelector("#card-button-close");
const inputTitle = document.querySelector("#input-title");
const inputUrl = document.querySelector("#input-url");
const buttonClosePopupPhoto = document.querySelector("#popup-photo-close");

initialCards.forEach((item) => {
    const initialCard = new Card(item.name, item.link).createCard();
    cardArea.append(initialCard);
});

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
    profileName.textContent = inputs.name;
    profileAbout.textContent = inputs.about;
});

const  popupCards = new PopupWithForm("#popup-cards", (inputs) => {
    const initialCard = new Card(inputs.title, inputs.link).createCard();
    cardArea.prepend(initialCard);
});

popupProfile.setEventListeners();

popupCards.setEventListeners();

// function handleProfileFormSubmit(e) {
//     e.preventDefault();
//     profileName.textContent = inputName.value;
//     profileAbout.textContent = inputAbout.value;
//     popupProfile.classList.remove("popup__show");
// }

// function handlePopupCardsSubmit(e) {
//     e.preventDefault();
//     const newCard = new Card(inputTitle.value, inputUrl.value).createCard();
//     handleClosePopups(popupCards);
//     cardArea.prepend(newCard);
// }



// inputName.value = profileName.textContent;
// inputAbout.value = profileAbout.textContent;

profileButton.addEventListener("click", () => {
    popupProfile.open();
});

cardButton.addEventListener("click", () => {
    popupCards.open();
});

formClose.addEventListener("click", () => {
    popupProfile.close();
});

cardClose.addEventListener("click", () => {
    popupCards.close();
});

buttonClosePopupPhoto.addEventListener("click", () => {
    popupCards.close();
});

document.addEventListener("keydown", () => {
    popupProfile.handleEscClose();
    popupCards.handleEscClose();
});

popupProfile.addEventListener("click", handleClickOutside);
popupCards.addEventListener("click", handleClickOutside);
popupPhoto.addEventListener("click", handleClickOutside);

// formProfile.addEventListener("submit", handleProfileFormSubmit);
// formCard.addEventListener("submit", handlePopupCardsSubmit);

const config = {
    formSelector: ".form",
    inputSelector: ".form__content-input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__content-input_type_error",
    inputErrorMessageClass: "form__error-message",
};

const profileFormValidator = new FormValidator(config, formProfile);
profileFormValidator.enableValidation();
const cardsFormValidator = new FormValidator(config, formCard);
cardsFormValidator.enableValidation();
// let someStr = "Programé. Guardé. Empaqueté.";
// console.log("Hello, World!")
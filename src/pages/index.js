import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
// import {
//   formProfile,
//   profileName,
//   profileAbout,
//   profileButton,
//   formClose,
//   cardArea,
//   formCard,
//   cardButton,
//   cardClose,
//   buttonClosePopupPhoto,
//   config,
// } from "../scripts/Utils.js";
const formProfile = document.querySelector("#form-profile");
const formClose = document.querySelector("#form-button-close");
const profileName = document.querySelector(".profile__info-content-name");
const profileAbout = document.querySelector(".profile__info-paragraph");
const profileButton = document.querySelector(
  ".profile__info-content-add-button"
);

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const cardArea = document.querySelector(".element");
const formCard = document.querySelector("#form-cards");
const cardButton = document.querySelector(".profile__button-add");
const cardClose = document.querySelector("#card-button-close");
const buttonClosePopupPhoto = document.querySelector("#popup-photo-close");

const section = new Section(
  {
    items: initialCards,
    renderer: function (item) {
      const initialCard = new Card(item.name, item.link, () => {
        popupImage.handleopen({ name: item.name, link: item.link });
      }).createCard();
      section.addItem(initialCard);
    },
  },
  ".element"
);

section.renderItems();

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
  profileName.textContent = inputs.name;
  profileAbout.textContent = inputs.about;
});

popupProfile.setEventListeners();

const popupCards = new PopupWithForm("#popup-cards", (inputs) => {
  const initialCard = new Card(inputs.title, inputs.link, () => {
    popupImage.handleopen({ name: inputs.title, link: inputs.link });
  }).createCard();
  cardArea.prepend(initialCard);
});

popupCards.setEventListeners();

const popupImage = new PopupWithImage("#popup-photo");

profileButton.addEventListener("click", () => {
  popupProfile.handleOpen();
});

cardButton.addEventListener("click", () => {
  popupCards.handleOpen();
});

formClose.addEventListener("click", () => {
  popupProfile.handleClose();
});

cardClose.addEventListener("click", () => {
  popupCards.handleClose();
});

buttonClosePopupPhoto.addEventListener("click", () => {
  popupCards.handleClose();
});

popupImage.setEventListeners();

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

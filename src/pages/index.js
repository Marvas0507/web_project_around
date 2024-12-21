import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import UserInfo from "../components/UserInfo.js";

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

inputNameUser.value = profileName.textContent;
inputAboutUser.value = profileAbout.textContent;

const userInfo = new UserInfo({
  nameSelector: ".profile__info-content-name",
  aboutSelector: ".profile__info-paragraph",
  avatarSelector: ".profile__avatar-image",
});

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_17",
  Headers: {
    authorization: "aca41053-935f-4980-ab7e-41af6eea4631",
    "Content-Type": "application/json",
  },
});

api.getUserInfo().then((result) => {
  userInfo.setUserInfo(result);
  api.getInitialCards().then((result) => {
    const cardList = new Section(
      {
        items: result,
        render: (item) => {
          const cardList = new Card(
            item,
            userInfo._userId,
            (cardId) => api.addLike(cardId),
            (cardId) => api.removeLike(cardId),
            popupImage.handleOpen,
            () => {
              PopupWithConfirmation.handleOpen(result._id);
            }
          );
          const cardElement = newCard.createCard();
          cardList.addItem(cardElement);
        },
      },
      ".element"
    );
    cardList.renderItems();
  });
});

const popupCards = new PopupWithForm("#popup-cards", (inputs, onClose) => {
  api.addCard(inputs).then((result) => {
    const newCard = new Card(
      result,
      userInfo._userId,
      (cardId) => api.addLike(cardId),
      (cardId) => api.removeLike(cardId),
      popupImage.handleOpen,
      () => {
        PopupWithConfirmation.handleOpen(result._id);
      }
    );
    const newCardElement = newCard.createCard();
    cardArea.prepend(newCardElement);
    popupCards.handleClose;
    onClose();
  });
});
popupCards.setEventListeners();

const popupImage = new PopupWithImage("#popup-photo");
popupImage.setEventListeners();

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
  profileName.textContent = inputs.name;
  profileAbout.textContent = inputs.about;
});

popupProfile.setEventListeners();

// const section = new Section(
//   {
//     items: initialCards,
//     renderer: function (item) {
//       const initialCard = new Card(item.name, item.link, () => {
//         popupImage.handleopen({ name: item.name, link: item.link });
//       }).createCard();
//       section.addItem(initialCard);
//     },
//   },
//   ".element"
// );

// section.renderItems();

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

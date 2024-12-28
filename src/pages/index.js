import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";

import {
  formProfile,
  inputNameUser,
  inputAboutUser,
  profileName,
  profileAbout,
  profileButton,
  profileAvatarContainer,
  profileAvatarForm,
  cardArea,
  popupCardsForm,
  addCardsButton,
  config,
} from "../scripts/Utils.js";

inputNameUser.value = profileName.textContent;
inputAboutUser.value = profileAbout.textContent;

const userInfo = new UserInfo({
  nameSelector: ".profile__info-content-name",
  jobSelector: ".profile__info-paragraph",
  avatarSelector: ".profile__avatar-image",
});

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-es-cohort-17",
  headers: {
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
        renderer: (item) => {
          const card = new Card(
            item,
            userInfo._userId,
            (cardId) => api.addLike(cardId),
            (cardId) => api.removeLike(cardId),
            popupImage.handleOpen,
            () => {
              popupWithConfirmation.handleOpen(result._id);
            }
          );
          const cardElement = card.createCard();
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
        popupWithConfirmation.handleOpen(result._id);
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

const popupProfile = new PopupWithForm("#popup-profile", (inputs, onClose) => {
  api.editProfile(inputs).then((result) => {
    userInfo.setUserInfo(result);
    popupProfile.handleClose();
    onClose();
  });
});
popupProfile.setEventListeners();

const popupAvatarProfile = new PopupWithForm("#popup-avatar", (inputs) => {
  api.editAvatarProfile(inputs).then((result) => {
    userInfo.setUserInfo(result);
    popupAvatarProfile.handleClose();
  });
});
popupAvatarProfile.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation(
  "#popup-delete-confirmation",
  (cardToDelete) => {
    api.deleteCard(cardToDelete).then(() => {
      popupWithConfirmation.handleClose();
      const card = document.querySelector(`#id_${cardToDelete}`);
      card.remove();
    });
  }
);
popupWithConfirmation.setEventListeners();

profileButton.addEventListener("click", () => {
  popupProfile.handleOpen(profileName.textContent, profileAbout.textContent);
  const profileFormValidator = new FormValidator(config, formProfile);
  profileFormValidator.enableValidation();
});

profileAvatarContainer.addEventListener("click", () => {
  popupAvatarProfile.handleOpen();
  const avatarProfileFormValidator = new FormValidator(
    config,
    profileAvatarForm
  );
  avatarProfileFormValidator.enableValidation();
});

addCardsButton.addEventListener("click", () => {
  popupCards.handleOpen();
  const cardsFormValidator = new FormValidator(config, popupCardsForm);
  cardsFormValidator.enableValidation();
});

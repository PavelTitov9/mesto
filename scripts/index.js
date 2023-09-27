import {FormValidator, settingsObject} from './FormValidator.js';
import {Card} from './Card.js'

const profileEditDialogButton =document.querySelector('.profile__open');
const profileButtonAdd =document.querySelector('.profile__btn');
const popupEdit = document.querySelector('.popup_edit');
const popupCloseButton =document.querySelector('.popup__close');
const profileFormElement =document.querySelector('.popup__form-edit');
const nameInput =document.querySelector('.popup__input_type_name');
const jobInput =document.querySelector('.popup__input_type_about');
const formAdd =document.querySelector('.popup__form-add');
const popupAdd =document.querySelector('.popup_add');
const inputUrlImage =document.querySelector('.popup__input_type_img');
const buttonCardClose =document.querySelector('.popup__close-add');
export const popupImage =document.querySelector('.popup_img');
export const imgCloseButton =document.querySelector('.popup__btn-img');
const profileName =document.querySelector('.profile__name');
const profileJob =document.querySelector('.profile__bio');
const popupImgName = document.querySelector('.popup__input_type_name-img');
const newCard = document.querySelector('.elements')



const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
},
];

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupFull);
  popup.addEventListener('click', closePopupOverlay);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupFull);
  popup.removeEventListener('click', closePopupOverlay);
}

imgCloseButton.addEventListener('click', () =>{
  closePopup(popupImage)
})

function closePopupFull(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function closePopupOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget)
  }
}

function openProfilePopup() {
    nameInput.value=profileName.textContent;
    jobInput.value=profileJob.textContent;
    openPopup(popupEdit)
}
function closeProfilePopup() {
  closePopup(popupEdit)
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value; 
    closeProfilePopup();
}

const openPopupAddImg = () =>{
  openPopup(popupAdd);
}
const closePopupAddImg = () =>{
  closePopup(popupAdd)
}
const addNewCard = (event) =>{
  event.preventDefault()
  const name = popupImgName.value
  const link = inputUrlImage.value
  
  const newCardData = {
    name , link,
  };

  renderCard(newCardData);
  closePopup(popupAdd);
  formAdd.reset();
  closePopupAddImg(popupAdd);
}
const renderCard = (data) => {
  const card = new Card(data, '.elements__card-template');
  newCard.prepend(card.createCard());
}

initialCards.forEach((Element)=>{
  renderCard(Element)
})

formAdd.addEventListener('submit',addNewCard)

const formArray = Array.from(document.querySelectorAll('.popup__form'));

formArray.forEach((formElement) => {
  new FormValidator(settingsObject, formElement).enableValidation();
});

profileEditDialogButton.addEventListener('click',openProfilePopup);
popupCloseButton.addEventListener('click',closeProfilePopup);
profileButtonAdd.addEventListener('click',openPopupAddImg);
formAdd.addEventListener('submit', addNewCard);
buttonCardClose.addEventListener('click',closePopupAddImg);
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

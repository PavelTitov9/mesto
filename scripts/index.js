const profileEditDialogButton =document.querySelector('.profile__open');
const profileButtonAdd =document.querySelector('.profile__btn');
const popup = document.querySelector('.popup');
const popupcloseButton =document.querySelector('.popup__close');
const formElement =document.querySelector('.popup__form');
const nameInput =document.querySelector('.popup__input_type_name');
const jobInput =document.querySelector('.popup__input_type_about');
const formAdd =document.querySelector('.popup__form-add');
const popupAdd =document.querySelector('.popup__add');
const inputUrlImage =document.querySelector('.popup__input_type_img');
const buttonCard =document.querySelector('.popup__btn-add');
const buttonCardClose =document.querySelector('.popup__close-add');
const popupImage =document.querySelector('.popup__img');
const imgScreen =document.querySelector('.popup__img-screen');
const imgName =document.querySelector('.popup__img-name');
const imgCloseButton =document.querySelector('.popup__btn-img');
const profileName =document.querySelector('.profile__name');
const profileJob =document.querySelector('.profile__bio');
const elementsTemplate =document.querySelector('.elements__card-template').content;
const element= document.querySelector('.elements');
const cardFormopen= document.querySelector('.profile__btn');
const popupImgName = document.querySelector('.popup__input_type_name-img');

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

const createCard = (name, link) => {
  
  const card = elementsTemplate.querySelector('.elements__card').cloneNode(true)

  const img = card.querySelector('.elements__image')
  const deleteBtn = card.querySelector('.elements__btn-delete')
  const h2 = card.querySelector('.elements__name')
  const likeBtn = card.querySelector('.elements__btn')

  img.addEventListener('click', () =>{
    popupImage.classList.add('popup_opened')
    imgScreen.src = link
    imgName.textContent = name
  })
  imgCloseButton.addEventListener('click', () =>{
    popupImage.classList.remove('popup_opened')
  })

  deleteBtn.addEventListener('click', () =>{
    card.remove()
  })

  likeBtn.addEventListener('click', () =>{
    likeBtn.classList.toggle('elements__btn_active') 
  })

  h2.textContent = name
  img.src = link

  element.prepend(card);
}

initialCards.forEach((item)=>{
  createCard(item.name, item.link)
})

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function togglePopup() {
    nameInput.value=profileName.textContent;
    jobInput.value=profileJob.textContent;
    popup.classList.toggle('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value; 
    togglePopup();
}

const openPopupAddImg = () =>{
  popupAdd.classList.toggle('popup_opened');
}
const closePopupAddImg = () =>{
  popupAdd.classList.toggle('popup_opened');
}
const addNewCard = (event) =>{
  event.preventDefault()
  const name = popupImgName.value
  const img = inputUrlImage.value
  createCard(name, img)
}

profileEditDialogButton.addEventListener('click',togglePopup);
popupcloseButton.addEventListener('click',togglePopup);
profileButtonAdd.addEventListener('click',openPopupAddImg);
formAdd.addEventListener('submit', addNewCard);
buttonCardClose.addEventListener('click',closePopupAddImg);
formElement.addEventListener('submit', handleFormSubmit);
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
const buttonCard =document.querySelector('.popup__btn-add');
const buttonCardClose =document.querySelector('.popup__close-add');
const popupImage =document.querySelector('.popup_img');
const imgScreen =document.querySelector('.popup__img-screen');
const imgName =document.querySelector('.popup__img-name');
const imgCloseButton =document.querySelector('.popup__btn-img');
const profileName =document.querySelector('.profile__name');
const profileJob =document.querySelector('.profile__bio');
const elementsTemplate =document.querySelector('.elements__card-template').content;
const cardsContainer= document.querySelector('.elements');
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
    openPopup(popupImage)
    imgScreen.src = link
    imgName.textContent = name
    imgScreen.alt = name
  })
  imgCloseButton.addEventListener('click', () =>{
    closePopup(popupImage)
  })

  deleteBtn.addEventListener('click', () =>{
    card.remove()
  })

  likeBtn.addEventListener('click', () =>{
    likeBtn.classList.toggle('elements__btn_active') 
  })

  h2.textContent = name
  img.src = link
  img.alt = name

  return card
}
function addCard(card) {
  cardsContainer.prepend(card);
}

initialCards.forEach((item)=>{
  const card = createCard(item.name, item.link)
  addCard(card)
})
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupFull);
  popup.addEventListener('click', closePopupOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupFull);
  popup.removeEventListener('click', closePopupOverlay);
}



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
  buttonCard.classList.add('popup__btn_inactive');
}
const closePopupAddImg = () =>{
  closePopup(popupAdd)
}
const addNewCard = (event) =>{
  event.preventDefault()
  const name = popupImgName.value
  const img = inputUrlImage.value
  const card = createCard(name, img)
  addCard(card)
  popupImgName.value =''
  inputUrlImage.value =''
  closePopup(popupAdd)
}


profileEditDialogButton.addEventListener('click',openProfilePopup);
popupCloseButton.addEventListener('click',closeProfilePopup);
profileButtonAdd.addEventListener('click',openPopupAddImg);
formAdd.addEventListener('submit', addNewCard);
buttonCardClose.addEventListener('click',closePopupAddImg);
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

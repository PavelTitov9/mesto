let buttonform =document.querySelector('.profile__open');
let formopen =document.querySelector('.profile__btn');
let popup = document.querySelector('.popup');
let close =document.querySelector('.popup__close');
let formElement =document.querySelector('.popup__form');
let nameInput =document.querySelector('.popup__input_type_name');
let jobInput =document.querySelector('.popup__input_type_about');
let name =document.querySelector('.profile__name');
let job =document.querySelector('.profile__bio');
let likes =document.querySelectorAll('.elements__btn');


for (let index = 0; index < likes.length; index++) {
    const element = likes[index];
    element.addEventListener('click',function(evt){
           evt.target.classList.toggle('elements__btn_active');
        })
}

function toggle(){
    if (popup.style.display ==='none'|| popup.style.display===''){
        popup.style.display='flex';
        nameInput.value=name.textContent;
        jobInput.value=job.textContent;
    }else{
        popup.style.display='none';
    }
    
}

buttonform.addEventListener('click',toggle);
close.addEventListener('click',toggle);
formopen.addEventListener('click',toggle);

formElement.addEventListener('submit', handleFormSubmit);
function handleFormSubmit (evt) {
    evt.preventDefault(); 
    let textName= nameInput.value;
    let textJob= jobInput.value;
    name.textContent=textName;
    job.textContent=textJob;
    toggle();
}
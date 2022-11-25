import {openModal, closeModal, setFocusToName} from './modules/modal.js';
import {handleButtonClick} from './modules/consultation.js';
import {buttonDetailsText, openContent} from './modules/additionally.js';
import initAccordion from './modules/accordion.js';
import IMask from 'imask';

initAccordion();
const buttonOpenModal = document.querySelector('.main-header__feedback-btn');
const buttonCloseModal = document.querySelector('.modal__close-btn');
const buttonMobileConsultation = document.querySelector('.intro__consultation-link-mobile');
const buttonTabletConsultation = document.querySelector('.intro__consultation-link');

buttonOpenModal.addEventListener('click', openModal);
buttonCloseModal.addEventListener('click', closeModal);
buttonOpenModal.addEventListener('click', setFocusToName);

buttonMobileConsultation.addEventListener('click', handleButtonClick);
buttonTabletConsultation.addEventListener('click', handleButtonClick);

buttonDetailsText.addEventListener('click', openContent);

const phoneInputs = document.querySelectorAll('.phone');

phoneInputs.forEach((phoneInput) => {
  const phoneMask = new IMask(phoneInput, {
    mask: '+{7} (000) 000-00-00',
  });
  phoneInput.addEventListener('input', phoneMask);
});

const modal = document.querySelector('#modalFeedback');
const body = document.querySelector('.body');
const app = document.querySelector('#app');
const modalBoxName = document.querySelector('#modal-name');

function onModalEscKeydown(evt) {
  if (evt.keyCode === 9 && evt.srcElement.tabIndex === 6) {
    modal.querySelector('.modal__feedback').focus();
  }
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModal();
  }
}

function openModal() {
  if (modal.classList.contains('modal-close')) {
    modal.classList.remove('modal-close');
    document.addEventListener('keydown', onModalEscKeydown);
    body.classList.add('scroll-lock');
    app.inert = true;
    modal.querySelector('.modal__feedback').focus();
  }
}

function closeModal() {
  if (!modal.classList.contains('modal-close')) {
    modal.classList.add('modal-close');
    document.removeEventListener('keydown', onModalEscKeydown);
    body.classList.remove('scroll-lock');
    app.inert = false;
  }
}

modal.addEventListener('click', function (evt) {
  if (evt.target.id === 'modalFeedback') {
    closeModal();
  }
});

function setFocusToName() {
  setTimeout(modalBoxName.focus(), 2000);
}

export {openModal, closeModal, setFocusToName};

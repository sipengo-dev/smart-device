const modal = document.querySelector('#modalFeedback');

function onModalEscKeydown(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModal();
  }
}
function openModal() {
  if (modal.classList.contains('modal__close')) {
    modal.classList.remove('modal__close');
    document.addEventListener('keydown', onModalEscKeydown);
  }
}

function closeModal() {
  if (!modal.classList.contains('modal__close')) {
    modal.classList.add('modal__close');
    document.removeEventListener('keydown', onModalEscKeydown);
  }
}

export {openModal, closeModal};

const modal = document.querySelector('#modalFeedback');

function onModalEscKeydown(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModal();
  }
}
function openModal() {
  if (modal.classList.contains('modal-close')) {
    modal.classList.remove('modal-close');
    document.addEventListener('keydown', onModalEscKeydown);
  }
}

function closeModal() {
  if (!modal.classList.contains('modal-close')) {
    modal.classList.add('modal-close');
    document.removeEventListener('keydown', onModalEscKeydown);
  }
}

export {openModal, closeModal};

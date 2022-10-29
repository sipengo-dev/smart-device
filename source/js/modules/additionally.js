// Кнопка подробнее

const readMoreContents = document.querySelectorAll('.info__text');
const buttonDetailsText = document.querySelector('.info__detail-btn');

function openContent() {
  for (let i = 0; i < readMoreContents.length; i++) {
    if (!readMoreContents[i].classList.contains('info__text--active')) {
      readMoreContents[i].classList.add('info__text--active');
    } else {
      readMoreContents[i].classList.remove('info__text--active');
    }
  }
}

buttonDetailsText.addEventListener('click', function (event) {
  event.preventDefault();
  buttonDetailsText.innerHTML = buttonDetailsText.innerHTML === 'Подробнее' ? 'Скрыть' : 'Подробнее';
});

export {buttonDetailsText, openContent};

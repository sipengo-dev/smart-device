const accordions = document.querySelectorAll('.accordion');


function closeAll() {
  for (let i = 0, len = accordions.length; i < len; i++) {
    accordions[i].classList.remove('open');
  }
}

function initAccordion() {
  for (let i = 0, len = accordions.length; i < len; i++) {
    accordions[i].querySelector('.accordion__header').addEventListener('click', function () {
      if (accordions[i].classList.contains('open')) {
        accordions[i].classList.remove('open');
      } else {
        closeAll();
        accordions[i].classList.add('open');
      }
    });
  }
}

export default initAccordion;

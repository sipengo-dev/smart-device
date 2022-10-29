// Аккордеон в подвале
const accordionButtonPoints = document.querySelector('.points__button');
const accordionButtonContacts = document.querySelector('.contacts__button');
const accordionContentPoints = document.querySelector('.points__list');
const accordionContentContacts = document.querySelector('.contacts__list');

function toggleAccordionPoints() {
  if (accordionButtonPoints.classList.contains('accordion__close')) {
    openAccordionPoints();
    closeAccordionContacts();
  } else {
    closeAccordionPoints();
  }
}

function toggleAccordionContacts() {
  if (accordionButtonContacts.classList.contains('accordion__close')) {
    openAccordionContacts();
    closeAccordionPoints();
  } else {
    closeAccordionContacts();
  }
}

function openAccordionPoints() {
  accordionButtonPoints.classList.remove('accordion__close');
  accordionButtonPoints.classList.add('accordion__open');
  accordionContentPoints.classList.remove('accordion__list--close');
}

function openAccordionContacts() {
  accordionButtonContacts.classList.remove('accordion__close');
  accordionButtonContacts.classList.add('accordion__open');
  accordionContentContacts.classList.remove('accordion__list--close');
}

function closeAccordionPoints() {
  accordionButtonPoints.classList.add('accordion__close');
  accordionButtonPoints.classList.remove('accordion__open');
  accordionContentPoints.classList.add('accordion__list--close');
}

function closeAccordionContacts() {
  accordionButtonContacts.classList.add('accordion__close');
  accordionButtonContacts.classList.remove('accordion__open');
  accordionContentContacts.classList.add('accordion__list--close');
}


export {toggleAccordionContacts, toggleAccordionPoints, accordionButtonContacts, accordionButtonPoints};

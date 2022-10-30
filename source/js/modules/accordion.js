// Аккордеон в подвале
const accordionButtonPoints = document.querySelector('.points__button');
const accordionButtonContacts = document.querySelector('.contacts__button');
const accordionContentPoints = document.querySelector('.points__list');
const accordionContentContacts = document.querySelector('.contacts__list');

function toggleAccordionPoints() {
  if (accordionButtonPoints.classList.contains('accordion-close')) {
    openAccordionPoints();
    closeAccordionContacts();
  } else {
    closeAccordionPoints();
  }
}

function toggleAccordionContacts() {
  if (accordionButtonContacts.classList.contains('accordion-close')) {
    openAccordionContacts();
    closeAccordionPoints();
  } else {
    closeAccordionContacts();
  }
}

function openAccordionPoints() {
  accordionButtonPoints.classList.remove('accordion-close');
  accordionButtonPoints.classList.add('accordion-open');
  accordionContentPoints.classList.remove('accordion-list-close');
}

function openAccordionContacts() {
  accordionButtonContacts.classList.remove('accordion-close');
  accordionButtonContacts.classList.add('accordion-open');
  accordionContentContacts.classList.remove('accordion-list-close');
}

function closeAccordionPoints() {
  accordionButtonPoints.classList.add('accordion-close');
  accordionButtonPoints.classList.remove('accordion-open');
  accordionContentPoints.classList.add('accordion-list-close');
}

function closeAccordionContacts() {
  accordionButtonContacts.classList.add('accordion-close');
  accordionButtonContacts.classList.remove('accordion-open');
  accordionContentContacts.classList.add('accordion-list-close');
}


export {toggleAccordionContacts, toggleAccordionPoints, accordionButtonContacts, accordionButtonPoints};

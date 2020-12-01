const stop = document.querySelector('.stop');
const popUp = document.querySelector('.pop-up');
const box = document.querySelector('.box');

play.addEventListener('click', () => {
  displayNone(play);
  displayFlex(stop);
})

stop.addEventListener('click', () => {
  // clearTimeout();
  displayFlex(popUp);
  displayNone(stop);
  displayFlex(box);
})

function displayNone(element) {
  addClassList(element, 'display-none');
}

function displayFlex(element) {
  removeClassList(element, 'display-none');
}

function addClassList(element, className) {
  element.classList.add(className);
}

function removeClassList(element, className) {
  element.classList.remove(className);
}
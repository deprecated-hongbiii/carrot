const stop = document.querySelector('.stop');

play.addEventListener('click', () => {
  displayNone(play);
  displayFlex(stop);
})

stop.addEventListener('click', () => {
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
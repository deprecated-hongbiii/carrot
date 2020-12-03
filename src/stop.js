const stop = document.querySelector('.stop');
const popUp = document.querySelector('.pop-up');
const box = document.querySelector('.box');
const popUpMessage = document.querySelector('.pop-up-message');

stop.addEventListener('click', () => {
  displayFlex(popUp);
  displayNone(stop);
  displayFlex(box);
  popUpMessage.textContent = `Replay 👻`;
})
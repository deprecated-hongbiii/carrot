import { displayNone, displayFlex, addClassList, removeClassList } from './util.js';

const background = document.querySelector('.background');
// const rect = background.getBoundingClientRect();

/* background.addEventListener('click', (e) => {
  console.log(`client: ${e.clientX}, ${e.clientY}`);
}); */

/* console.log(rect);
console.log((rect.bottom - rect.y) / 2); */

/* const minX = rect.x;
const maxX = rect.right;
const minY = (rect.bottom - rect.y) / 2 + rect.y;
const maxY = rect.bottom; */

const items = document.querySelector('.items');

const onPlay = () => {
  items.innerHTML = `
    <img src="../img/carrot.png" class="item carrot"/>
    <img src="../img/carrot.png" class="item carrot"/>
    <img src="../img/carrot.png" class="item carrot"/>
    <img src="../img/carrot.png" class="item carrot"/>
    <img src="../img/carrot.png" class="item carrot"/>
    <img src="../img/carrot.png" class="item carrot"/>
    <img src="../img/carrot.png" class="item carrot"/>
    <img src="../img/carrot.png" class="item carrot"/>
    <img src="../img/carrot.png" class="item carrot"/>
    <img src="../img/carrot.png" class="item carrot"/>
    <img src="../img/bug.png" class="item bug"/>
    <img src="../img/bug.png" class="item bug"/>
    <img src="../img/bug.png" class="item bug"/>
    <img src="../img/bug.png" class="item bug"/>
    <img src="../img/bug.png" class="item bug"/>
    <img src="../img/bug.png" class="item bug"/>
  `;

  const item = document.querySelectorAll('.item');

  for (let i = 0; i < item.length; i++) {
    item[i].style.transform = `translate(${randomCoordinates(
      minX,
      maxX
    )}px, ${randomCoordinates(minY, maxY)}px)`;
  }
};
const play = document.querySelector('.play');
const replay = document.querySelector('.replay');

play.addEventListener('click', onPlay);
play.addEventListener('click', () => {
  displayNone(play);
  displayFlex(stop);
  resetCount();
})
replay.addEventListener('click', onPlay);
replay.addEventListener('click', () => {
  displayNone(popUp);
  displayNone(box);
  displayFlex(stop);
  seconds = 9;
  resetTimer();
  timer();
  resetCount();
})
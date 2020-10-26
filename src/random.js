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

const minX = 0;
const maxX = 700;
const minY = 250;
const maxY = 400;

const randomCoordinates = (min, max) => {
  return Math.random() * (max - min) + min;
};

const items = document.querySelector('.items');
items.innerHTML = `
  <img src="../img/carrot.png" class="item"/>
  <img src="../img/carrot.png" class="item"/>
  <img src="../img/carrot.png" class="item"/>
  <img src="../img/bug.png" class="item"/>
  <img src="../img/bug.png" class="item"/>
`;

const item = document.querySelectorAll('.item');

for (let i = 0; i < item.length; i++) {
  item[i].style.transform = `translate(${randomCoordinates(
    minX,
    maxX
  )}px, ${randomCoordinates(minY, maxY)}px)`;
}

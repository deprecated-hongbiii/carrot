const leftoverBox = document.querySelector('.leftover');
let numOfCarrots = document.querySelectorAll('.carrot');
// leftoverBox.textContent = leftover;

items.addEventListener('click', (e) => {
  if(e.target.className === 'item carrot') {
    e.target.remove();
    const leftover = document.querySelectorAll('.carrot').length;
    leftoverBox.textContent = `${leftover}`;
  }

  if(e.target.className === 'item bug') {
    // 게임 오버
    displayFlex(popUp);
    displayNone(stop);
    displayFlex(box);
    popUpMessage.textContent = `You Lose 🤪`;
  }
})

// function resetCount() {
//   play.addEventListener('click', () => {
//     leftoverBox.textContent = `${numOfCarrots}`
//   })
// }
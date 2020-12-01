const leftoverBox = document.querySelector('.leftover');
const leftover = document.querySelectorAll('.carrot').length;

// leftoverBox.textContent = leftover;

items.addEventListener('click', (e) => {
  if(e.target.className === 'item carrot') {
    console.log('당근이 클릭됨');
    displayNone(e.target);
  }

  if(e.target.className === 'item bug') {
    // 게임 오버
    displayFlex(popUp);
    displayNone(stop);
    displayFlex(box);
    popUpMessage.textContent = `You Lose 🤪`;
  }
})

function countCarrot() {

}
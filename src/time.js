// play 버튼 클릭 시 10초 카운트 다운
const timerBox = document.querySelector('.timer');
let seconds = 9;
play.addEventListener('click', timer);

function timer() {
  const time = setTimeout(() => {
    if(seconds < 10) {
      timerBox.innerHTML = `00:0${seconds}`;
    } else {
      timerBox.innerHTML = `00:${seconds}`;
    }
    seconds -= 1;
    timer();
  }, 1000);

  if(seconds === -1) {
    clearTimeout(time);
    displayNone(stop);
    displayFlex(box);
    displayFlex(popUp);
    popUpMessage.textContent = `TIME OVER ⏰`;
  }
}
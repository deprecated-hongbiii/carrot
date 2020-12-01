// play 버튼 클릭 시 10초 카운트 다운
const timerBox = document.querySelector('.timer');
let seconds = 9;
play.addEventListener('click', () => {
  resetTimer();
  timer();
});

function resetTimer() {
  timerBox.textContent = `00:10`
}

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

  // 타이머가 멈추는 조건들
  // 1. 타임오버 시
  if(seconds === -1) {
    clearTimeout(time);
    displayNone(stop);
    displayFlex(box);
    displayFlex(popUp);
    popUpMessage.textContent = `TIME OVER ⏰`;
  }

  // 2. 벌레 클릭 시
  items.addEventListener('click', (e) => {
    if(e.target.className === 'item bug') {
      clearTimeout(time);
    }
  })

  // 3. 정지 버튼 클릭 시
  stop.addEventListener('click', () => {clearTimeout(time)});

  // 4. 시간 안에 당근을 모두 없앴을 때
  items.addEventListener('click', (e) => {
  if(e.target.className === 'item carrot') {
    e.target.remove();
    const leftover = document.querySelectorAll('.carrot').length;
    leftoverBox.textContent = `${leftover}`;
    if(leftover === 0) {
      // 게임 승리
      clearTimeout(time);
      displayFlex(popUp);
      displayNone(stop);
      displayFlex(box);
      popUpMessage.textContent = `You win 🎉`;
    }
  }

  if(e.target.className === 'item bug') {
    // 게임 오버
    displayFlex(popUp);
    displayNone(stop);
    displayFlex(box);
    popUpMessage.textContent = `You Lose 🤪`;
  }
})
}
const timerElement = document.getElementById("timer");

function countDown() {
  let time = parseInt(timerElement.textContent, 10);
  time--;
  timerElement.textContent = time;
  if (time === 0) {
    clearInterval(countDownTimer);
    alert('Вы победили в конкурсе!');
  }
}

const countDownTimer = setInterval(countDown, 1000);

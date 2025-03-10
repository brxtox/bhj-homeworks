(() => {
  let deadMoles = 0;
  let missedClicks = 0;

  const deadMoleCounter = document.getElementById("dead");
  const lostMoleCounter = document.getElementById("lost");

  const getHole = index => document.getElementById(`hole${index}`);

  const checkGameStatus = () => {
    if (deadMoles === 10) {
      alert("Вы победили!");
      gameReset();
    } else if (missedClicks === 5) {
      alert("Вы проиграли.");
      gameReset();
    }
  };

  const gameReset = () => {
    deadMoles = 0;
    missedClicks = 0;
    deadMoleCounter.textContent = deadMoles;
    lostMoleCounter.textContent = missedClicks;
  };

  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
      if (this.classList.contains("hole_has-mole")) {
        deadMoles++;
        deadMoleCounter.textContent = deadMoles;
      } else {
        missedClicks++;
        lostMoleCounter.textContent = missedClicks;
      }
      checkGameStatus();
    };
  }
})();

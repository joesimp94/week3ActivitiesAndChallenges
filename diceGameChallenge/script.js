let cube = document.getElementById("dice");
let rollBtn = document.getElementById("rollBtn");
let startScore = 0;
let winScore = 0;
let playerScore = document.getElementById("score");
let numbOfRolls = document.getElementById("rolls");
let numbOfWins = document.getElementById("winNumb");
rollBtn.addEventListener("click", diceRoll);

function randomNumberRoll(min, max) {
  min = Math.ceil(0);
  max = Math.floor(6);
  return Math.ceil(Math.random() * (max - min) + min);
}

function diceRoll() {
  let roll = randomNumberRoll(1, 6);
  startScore += roll;
  playerScore.innerHTML = "Your Score: " + startScore;
  if (roll == 1) {
    cube.style.transform = "rotateX(-0deg) rotateY(-0deg)";
  } else if (roll == 2) {
    cube.style.transform = "rotateX(0deg) rotateY(90deg)";
  } else if (roll == 3) {
    cube.style.transform = "rotateX(90deg) rotateY(90deg)";
  } else if (roll == 4) {
    cube.style.transform = "rotateX(-90deg) rotateY(-90deg)";
  } else if (roll == 5) {
    cube.style.transform = "rotateX(0deg) rotateY(-90deg)";
  } else if (roll == 6) {
    cube.style.transform = "rotateX(0deg) rotateY(0deg)";
  }
  if (roll == 1) {
    startScore = 0;
  }
  if (playerScore >= 20) {
    winScore + 1;
    numbOfWins.innerHTML = "Wins: " + winScore;
  }

  numbOfRolls = roll + 1;
}

diceRoll();

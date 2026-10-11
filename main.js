let rockButton = document.querySelector(".btn-rock");
let paperButton = document.querySelector(".btn-paper");
let scissorButton = document.querySelector(".btn-scissor");
let startButton = document.querySelector(".start-btn");
let exitButton = document.querySelector(".exit-btn");
let selectedMove = document.querySelectorAll(".move-btn");

let playerCard = document.querySelector("#player-card");
let computerCard = document.querySelector("#computer-card");
let winnerAnnouncement = document.querySelector(".winner-announcement");

let playerWeapon = document.querySelector("#player-weapon");
let compWeapon = document.querySelector("#comp-weapon");

let playerScore = document.querySelectorAll(".players-score");

let userScore = document.querySelector("#user-score");
let userWinCount = document.querySelector("#user-win-count");
let userLossCount = document.querySelector("#user-loss-count");
let userTieCount = document.querySelector("#user-tie-count");

let compScore = document.querySelector("#comp-score");
let compWinCount = document.querySelector("#comp-win-count");
let compLossCount = document.querySelector("#comp-loss-count");
let compTieCount = document.querySelector("#comp-tie-count");

let countUserScore = 0;
let countCompScore = 0;
let tieCount = 0;
let winUserCount = 0;
let lossUserCount = 0;
let winCompCount = 0;
let lossCompCount = 0;

let roundCount=document.querySelector("round-count");

console.log(userScore.innerText);

let resetScore = () => {
  playerScore.forEach((score) => {
    score.innerText = "";
    console.log("score reset");
  });
};

let resetText = () => {
  winnerAnnouncement.innerText = "READY";
  playerWeapon.innerText = "Choose Weapon";
  compWeapon.innerText = "Choose Weapon";
};

let gammeReset = () => {
  playerCard.classList.remove("winner-player", "winner-cpu");
  computerCard.classList.remove("winner-player", "winner-cpu");
  resetText();
  resetScore();
};

selectedMove.forEach((moveBtn) => {
  moveBtn.addEventListener("click", () => {
    let userChoice = moveBtn.innerText;
    playerWeapon.innerText = userChoice;
    playGame(userChoice);
  });
});

exitButton.addEventListener("click", gammeReset);

let gameDraw = () => {
  console.log("Tie");
  winnerAnnouncement.innerText = "It's a Draw!";
  tieCount++;
  userTieCount.innerText = `TIES:${tieCount}`;
  compTieCount.innerText = `TIES:${tieCount}`;
};

let playerWin = () => {
  winnerAnnouncement.innerText = "Player wins!!";
  countUserScore += 100;
  winUserCount++;
  lossCompCount++;
  userScore.innerText = `SCORE:${countUserScore}`;
  userWinCount.innerText = `WINS:${winUserCount}`;
  compLossCount.innerText = `LOSS:${lossCompCount}`;
};

let computerWin = () => {
  winnerAnnouncement.innerText = "Computer Wins !!";
  countCompScore += 100;
  winCompCount++;
  lossUserCount++;
  compScore.innerText = `SCORE:${countCompScore}`;
  compWinCount.innerText = `WINS:${winCompCount}`;
  userLossCount.innerText = `LOSS:${lossUserCount}`;
};

let highlightWinner = (userWin) => {
  //Resetting both the card as first
  playerCard.classList.remove("winner-player", "winner-cpu");
  computerCard.classList.remove("winner-player", "winner-cpu");

  if (userWin === true) {
    playerWin();
    playerCard.classList.add("winner-player");
  } else {
    computerWin();
    computerCard.classList.add("winner-cpu");
  }
};

let showWinner = (userWin) => {
  if (userWin == true) {
    console.log("you win");
    highlightWinner(true); // Passes true for player win
  } else {
    console.log("you lost");
    highlightWinner(false); // Passes false for computer win
  }
};

// change text of the weapon
let changeColor = (userChoice, compChoice) => {
  if (userChoice === "ROCK" || compChoice === "ROCK") {
    playerWeapon.classList.add("btn-rock");
    compWeapon.classList.add("btn-rock");
  } else if (userChoice === "PAPER" || compChoice === "PAPER") {
    playerWeapon.classList.add("btn-paper");
  } else {
    playerWeapon.classList.add("btn-scissor");
  }
};

const playGame = (userChoice) => {
  console.log("user choice", userChoice);
  const compChoice = genCompChoice();
  compWeapon.innerText = compChoice;
  console.log("computer choice", compChoice);
  //calling the change color function, while giving it arguments which the so that it can take the user's choice & comp's choice and change the color of the weapon selected accordingly
  changeColor(userChoice, compChoice);

  if (userChoice == compChoice) {
    gameDraw();
    // we've reduced the implimentation time of the fuction; by checking is the game is draw in the starting itself.
  } else {
    let userWin = true;
    if (userChoice === "ROCK") {
      // available choices for computer are paper, scissor
      userWin = compChoice === "PAPER" ? false : true;
    } else if (userChoice === "PAPER") {
      // available choices for computer are rock, scissor
      userWin = compChoice === "SCISSOR" ? false : true;
    } else {
      //user choice is "Scissor", so available choices for computer are rock, paper
      userWin = compChoice === "ROCK" ? false : true;
    }

    showWinner(userWin);
    // Here(above) we're passing userWin as an argument for showWinner function so that it can take boolean value as run if-else
  }
};

//Generation of random choice weapon by computer
const genCompChoice = () => {
  const options = ["ROCK", "PAPER", "SCISSOR"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};





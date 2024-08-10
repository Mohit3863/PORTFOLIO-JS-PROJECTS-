let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was Drawn! Play again";
  msg.style.backgroundColor = "#081b31";
};

const shwoWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("User choice =", userChoice);
  // Generate computer choice
  const compChoice = getCompChoice();
  console.log("Computer Choice =", compChoice);
  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors or paper to win or the mstvh will be draw if rock is there
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    shwoWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// getComputerChoice() function => random(rock, paper, scissors)
//choices = ['rock', 'paper', 'scissors']
//randomIndex = Math.floor(Math.random() * choices.length)
// return choices[randomIndex]
//
//

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose! Paper beats rock!";
    } else {
      return "You win! Rock beats scissors!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You lose! Scissors beats paper!";
    } else {
      return "You win! Paper beats rock!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock beats scissors!";
    } else {
      return "You win! Scissors beats paper!";
    }
  } else {
    return "Please enter a valid choice!";
  }
}

function game(rounds = 5) {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < rounds; i++) {
    const playerSelection = prompt(
      "Enter your choice: rock, paper, or scissors",
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    const score = playRound(playerSelection, computerSelection);
    alert(score);
    if (score.includes("win")) {
      playerScore += 1;
    } else if (score.includes("lose")) {
      computerScore += 1;
    } else {
      continue;
    }
  }

  alert(`computerScore is ${computerScore}`);
  alert(`player score is ${playerScore}`);

  if (computerScore > playerScore) {
    alert("Compter wins");
  } else if (playerScore > computerScore) {
  } else {
    alert("It's a tie");
  }
}

game(3);

const playerchoice = document.getElementById("playerchoice");
const computerchoice = document.getElementById("computerchoice");
const result = document.getElementById("result");
const arr = ["rock", "paper", "scissor"];
let r = "";
let pscore = 0;
let cscore = 0;
function play(choice) {
  const cc = arr[Math.floor(Math.random() * 3)];
  if (choice === cc) {
    r = "It's A Tie!";
  } else {
    switch (choice) {
      case "rock":
        r = cc == "paper" ? "You Lose!" : "You Win!";
        break;
      case "paper":
        r = cc == "rock" ? "You Win!" : "You Lose!";
        break;
      case "scissor":
        r = cc == "rock" ? "You Lose!" : "You Win!";
    }
  }
  playerchoice.textContent = `Player: ${choice}`;
  computerchoice.textContent = `Computer: ${cc}`;
  result.textContent = r;
  result.classList.remove("win", "lose");
  if (r == "You Win!") {
    result.classList.add("win");
    pscore++;
    document.getElementById("pss").textContent = pscore;
  } else if (r == "You Lose!") {
    cscore++;
    result.classList.add("lose");
    document.getElementById("css").textContent = cscore;
  }
}

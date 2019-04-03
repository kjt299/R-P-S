/* Rock, Paper, Scissors version 3
 * Date: 11/03/2019
 * Author: kjt299
*/

let myObj;
let opsObj;
let myScore = 0;
let opsScore = 0;

const paper =
{
  name: "paper",
  source: "images/paper.jpg"
};

const rock =
{
  name: "rock",
  source: "images/rock.jpg"
};

const scissors =
{
  name: "scissors",
  source: "images/scissors.jpg"
};

//creating oponent's move
function oponent() {
  const moves = [rock, paper, scissors];
  opsObj = moves[Math.floor(Math.random() * 3)];
  document.getElementById("oponent").src = opsObj.source;
  document.getElementById("oponent").style.display = "inline";
}

//updates oponent's score on the screen
function printOpsScore() {
  document.getElementById("ops-counter").innerHTML = "Oponent: " + opsScore;
}

//updates player's score on the screen
function printMyScore() {
  document.getElementById("my-counter").innerHTML = "You: " + myScore;
}

//prints result of the round: Lost
function printLost() {
  document.getElementById("result").innerHTML = "You have lost...";
}

//prints result of the round: Won
function printWin() {
  document.getElementById("result").innerHTML = "You have won!!!";
}

//prints result of the round: Draw
function printDraw() {
  document.getElementById("result").innerHTML = "It is a DRAW!!!";
}

//determines who won the round
function compare() {
  if (myObj === opsObj) {
    printDraw();
  } else {
    if (myObj === rock && opsObj === paper) {
      printLost();
      opsScore++;
      printOpsScore();
    }
    if (myObj === rock && opsObj === scissors) {
      printWin();
      myScore++;
      printMyScore();
    }
    if (myObj === paper && opsObj === rock) {
      printWin();
      myScore++;
      printMyScore();
    }
    if (myObj === paper && opsObj === scissors) {
      printLost();
      opsScore++;
      printOpsScore();
    }
    if (myObj === scissors && opsObj === paper) {
      printWin();
      myScore++;
      printMyScore();
    }
    if (myObj === scissors && opsObj === rock) {
      printLost();
      opsScore++;
      printOpsScore();
    }
  }
  whoWon();
}

//determines who won the game and whether the game is over
function whoWon() {
  if (myScore === 5) {
    alert("Congratulations! You have won :)");
    reset();
  }
  if (opsScore === 5) {
    alert("You have lost this time. Try again!");
    reset();
  }
}

//resets whole game
function reset() {
  document.getElementById("mine").src = "";
  document.getElementById("mine").style.display = "none";
  document.getElementById("oponent").src = "";
  document.getElementById("oponent").style.display = "none";
  document.getElementById("result").innerHTML = "";
  myScore = 0;
  opsScore = 0;
  printMyScore();
  printOpsScore();
  addInstructions();
}

document.getElementById("rock").addEventListener("click", function() {
  myObj = rock;
  main();
});

document.getElementById("paper").addEventListener("click", function() {
  myObj = paper;
  main();
});

document.getElementById("scissors").addEventListener("click", function() {
  myObj = scissors;
  main();
});

document.getElementById("reset").addEventListener("click", function() {
  reset();
});

//updates screen with player's move
function mine() {
  document.getElementById("mine").src = myObj.source;
  document.getElementById("mine").style.display = "inline";
}

//starts the game
function main() {
  removeInstructions();
  mine();
  oponent();
  compare();
}

//removes instructions from the screen
function removeInstructions() {
  if (document.getElementById("instructions") !== null) {
  document.getElementById("instructions").parentNode.removeChild(document.getElementById("instructions"));
  }
}

//adds instructions on the screen
function addInstructions() {
  if (document.getElementById("instructions") === null) {
    let element = document.createElement("p");
    element.id = "instructions";
    element.innerHTML =
      "Press a button to start a game. Whoever reaches score of 5 first wins the game. Good luck!";
    document.getElementById("sample").appendChild(element);
  }
}

//makes header disappear
$("header").click(function() {
  $("header").fadeOut();
});
let turn = "X";

let clicksound = new Audio("kick-bass.mp3");

let winsound = new Audio("crash.mp3");

let strtsound = new Audio("snare.mp3");
// srart function

let start = document.querySelector(".popup"); // game will start from  this button
function startbtn() {
  start.classList.add("open-start");
  strtsound.play();
}
let end = document.querySelector(".popup1"); // on win the winner popup will display
function closebtn() {
  end.classList.add("wingamee");
}
function restartbtn() {
  // it will resatrt the game and take you to home
  end.classList.add("open-start");
  strtsound.play();
  window.location.reload();
}

// making a function to change turn x to 0

const change = () => {
  return turn === "X" ? "0" : "X";
};

// logic of winner

const winner = () => {
  let box_text = document.getElementsByClassName("bb");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((pos) => {
    if (
      box_text[pos[0]].innerText === box_text[pos[1]].innerText &&
      box_text[pos[2]].innerText === box_text[pos[1]].innerText &&
      box_text[pos[0]].innerText !== ""
    ) {
      document.querySelector(".win").innerText =
        box_text[pos[0]].innerText + " won";
      winsound.play();
      closebtn();
    }
  });
};

// main logic of game

let box = document.querySelectorAll(".boxes"); //  box uthayega sare boxees 25 se lekr 33 tk

let boxtext = document.getElementsByClassName("bb");

Array.from(box).forEach((E) => {
  var box_Text = E.querySelector(".bb");
  E.addEventListener("click", () => {
    if (box_Text.innerText === "") {
      box_Text.innerText = turn;
      clicksound.play();
      turn = change();
      winner();
      document.querySelectorAll(".hh")[0].innerText = "your turn " + turn;
    }
  });
});

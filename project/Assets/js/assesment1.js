// The secret number we genrate from math is object that random is method by defalut 0 to 1 give value
// we declare two variable score is 20 because its score of game and highscore we take
// for the give high score to the user
let secretnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretnumber);
let score = 20;
let hightscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  // gueess is variable for user give the number
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = " 😓 💔💔 No number";
  }
  //  Number is equal to number
  else if (secretnumber === guess) {
    document.querySelector(".message").textContent =
      " Congratulation 😍👌 Your number is right !";
    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "blue";

    if (score > hightscore) {
      hightscore = score;
      document.querySelector(".highscore").textContent = hightscore;
    }
  }
  //  Number is too high the number
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        " Your number is Too High 😥😥⚠️⚠️ ";
      score--;
      document.querySelector(".highscore").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 💀💀 Game Over !!";
      document.querySelector(".score").textContent = 0;
    }
  }
  // For the low the number
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        " Your number is Too Loww 😓😓😓⚠️⚠️";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 🔫🔫Game Over !!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// For the Again  button
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#011e03e8";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = " ";
});

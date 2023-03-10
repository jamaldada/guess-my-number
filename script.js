let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
  };
  // when there is no input

  if (!guess) {
    //
    displayMessage("🤓 no number");
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 correct number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈too high" : "📉too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥you lost the Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//   else if (guess !== secretNumber) {
//     if (score > 1) {

//         document.querySelector(".message").textContent = "📈too high";
//         score--;
//         document.querySelector(".score").textContent = score;

//     } else {
//       document.querySelector(".message").textContent = "💥you lost the Game";
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "💥you lost the Game";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "start guessing .....";
  document.querySelector(".guess").value;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

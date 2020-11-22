const rightSound = new Audio("sounds/correct.mp3");
rightSound.loop = false;
var gameWonSnd = new Audio("sounds/gameWon.mp3");
gameWonSnd.loop = false;
var solvedChallenges = 0;

document.querySelectorAll("input[type=number]").forEach((input) => {
  input.addEventListener("change", () => {
    let expression = input.dataset.expression;
    let values = expression.split(" ");
    let product = values[0] * values[2];

    if (input.dataset.solved != "true") {
      if (
        input.value - product > -0.000000009 &&
        input.value - product < 0.000000009
      ) {
        rightSound.play();
        input.setAttribute("class", "solved");
        input.disabled = true;
        input.setAttribute("data-solved", "true");
        solvedChallenges++;
      } else {
        input.setAttribute("class", "false");
      }
    }
    if (solvedChallenges === 18) {
      gameWonSnd.play();
      document.querySelector(".gameWon").style.display = "block";

      document.querySelectorAll(".challenge").forEach((input) => {
        input.style.display = "none";
      });
    }
  });
});

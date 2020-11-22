let correctSound = new Audio("sounds/correct.mp3");
let gameFinnishedSound = new Audio("sounds/gameWon.mp3");
let solvedChallenges = 0;
document.querySelectorAll("input[type=text]").forEach((input) => {
  input.addEventListener("change", () => {
    let expression = input.dataset.expression;
    let numbers = expression.split(" ");
    let n1 = parseInt(numbers[0]);
    let n2 = parseInt(numbers[1]);
    switch (input.value) {
      case ">":
        if (n1 > n2) {
          rightAnswer(input);
        } else {
          input.setAttribute("class", "false");
        }
        break;
      case "<":
        if (n1 < n2) {
          rightAnswer(input);
        } else {
          input.setAttribute("class", "false");
        }
        break;
      case "=":
        if (n1 == n2) {
          rightAnswer(input);
        } else {
          input.setAttribute("class", "false");
        }
        break;
    }
  });
});
document.querySelectorAll("input[type=number]").forEach((input) => {
  input.addEventListener("change", () => {
    let expression = input.dataset.expression;
    let values = expression.split(" ");
    let number = parseInt(values[0]);
    let sim = values[1];
    let value = input.value;
    switch (sim) {
      case ">":
        if (number > value) {
          rightAnswer(input);
        }
        break;
      case "<":
        if (number < value) {
          rightAnswer(input);
        }
        break;
      case "=":
        if (number == value) {
          rightAnswer(input);
        }
        break;
    }
  });
});

function rightAnswer(input) {
  correctSound.play();
  input.disabled = true;
  input.setAttribute("class", "solved");
  solvedChallenges++;

  if(solvedChallenges == 24){
    gameFinnishedSound.play();
    document.querySelector(".gameWon").style.display = "block";

    document.querySelectorAll(".challenges, h1").forEach((input) => {
      input.style.display = "none";
    });
  }
}

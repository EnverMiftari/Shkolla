var elem = document.getElementById("ans");
var rightSound = new Audio("sounds/correct.mp3");
rightSound.loop = false;
elem.addEventListener("change", () => {
  let answer = elem.value.toLowerCase();
  if (answer == "bashkimi bën fuqinë" || answer == "bashkimi ben fuqine") {
    rightSound.play();
    elem.setAttribute("class", "solved");
    elem.disabled = true;
  } else {
    elem.setAttribute("class", "false");
  }
});

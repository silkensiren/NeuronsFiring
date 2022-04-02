// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
  if (name.charAt(0).toLowerCase() === "r") {
    log.innerText(name + " plays banjo");
  } else {
    log.innerText(name + " does not play banjo");
  }
}

const form = document.getElementById("form");
const result = document.getElementById("result");
form.addEventListener("submit", areYouPlayingBanjo(result));

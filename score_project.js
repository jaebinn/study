const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const reset = document.querySelector("#reset");

let p1Score = 0;
// let p2Score = 0;

p1Button.addEventListener("click", function () {
  p1Score += 1;
  p1Display.textContet = p1Score;
});

// p2Button.addEventListener("click", function () {
//   p2Score += 1;
//   p2Display.textContet = p2Score;
// });

const h1 = document.querySelector("h1");
const input = document.querySelector("input");

input.addEventListener("input", function () {
  const welcome = `welcome, ${input.value}`;
  h1.innerText = welcome;
  if (input.value === "") {
    h1.innerText = "Enter Your Username";
  }
});

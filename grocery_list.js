const form = document.querySelector("form");
const product = document.querySelector("#product");
const qty = document.querySelector("#qty");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const grocery = `${qty.value} ${product.value}`;
  const newLI = document.createElement("li");
  newLI.innerText = grocery;
  list.appendChild(newLI);
  product.value = "";
  qty.value = "";
});

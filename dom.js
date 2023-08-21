const container = document.querySelector("#container");
const baseurl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 152; i++) {
  const newImg = document.createElement("img");
  newImg.src = `${baseurl}${i}.png`;
  container.appendChild(newImg);
}

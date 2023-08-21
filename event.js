const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("You clicked me!");
  console.log("I hope it worked");
};

function scream() {
  console.log("AAAAAAAAAAHHHHHH");
  console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
  alert("you clicked the h1");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("mouseup", function () {
  alert("clicked");
});

function twist() {
  console.log("Twist!");
}

function shout() {
  console.log("shout!");
}

const tasButton = document.querySelector("#tas");
//onclick매소드를 중복으로 사용할 때 같이 한번에 반응하지않고 맨 마지막 값만 들어온다.
// tasButton.onclick = shout;
// tasButton.onclick = twist;

//addEventListener매소드는 한번에 반응함.
tasButton.addEventListener("click", twist);
tasButton.addEventListener("click", shout);

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
//onclick�żҵ带 �ߺ����� ����� �� ���� �ѹ��� ���������ʰ� �� ������ ���� ���´�.
// tasButton.onclick = shout;
// tasButton.onclick = twist;

//addEventListener�żҵ�� �ѹ��� ������.
tasButton.addEventListener("click", twist);
tasButton.addEventListener("click", shout);

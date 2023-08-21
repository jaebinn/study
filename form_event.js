const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault(); //매서드를 이벤트 객체에 사용하면 기본 동작을 방지
  //   const usernameInput = document.querySelectorAll("input")[0];
  //   const tweetInput = document.querySelectorAll("input")[1];
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = ""; //username 입력창 초기화
  tweetInput.value = ""; //tweet 입력창 초기화
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b"); //굵기
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
};

tweetsContainer.addEventListener("click", function (e) {
  // console.dir(e.target) //해당 target부분의 요소에 대한 정보를 확인할 수 있다.
  if (e.target.nodeName === "LI") {
    e.target.remove();
  }
});

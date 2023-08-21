const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault(); //�ż��带 �̺�Ʈ ��ü�� ����ϸ� �⺻ ������ ����
  //   const usernameInput = document.querySelectorAll("input")[0];
  //   const tweetInput = document.querySelectorAll("input")[1];
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = ""; //username �Է�â �ʱ�ȭ
  tweetInput.value = ""; //tweet �Է�â �ʱ�ȭ
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b"); //����
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`- ${tweet}`);
  tweetsContainer.append(newTweet);
};

tweetsContainer.addEventListener("click", function (e) {
  // console.dir(e.target) //�ش� target�κ��� ��ҿ� ���� ������ Ȯ���� �� �ִ�.
  if (e.target.nodeName === "LI") {
    e.target.remove();
  }
});

// function repeat(msg, num) {
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     result += msg;
//   }
//   console.log(result);
// }

// repeat("hi", 3);

// function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     return false;
//   } else {
//     let sum = x + y;
//     return sum;
//   }
// }

// function lastElement(arr) {
//   //�μ��� �迭�� �ƴҋ�
//   if (typeof arr !== "object") {
//     return false;
//   }
//   //�μ��� �迭�� ��
//   else {
//     if (arr.length == 0) {
//       let item = arr.slice(arr.length - 1).shift(); //�迭 ������ ��� ��������
//     } else if (arr.length !== 0) {
//       return null;
//     }
//   }
// }

// ù��° �ܾ �빮�ڷ� �ٲٱ�
// function capitalize(letter) {
//   let capLetter = letter[0].toUpperCase() + letter.slice(1);
//   return capLetter;
// }

// function sumArray(arr) {
//   let sum = 0;
//   if (typeof arr !== "object") {
//     return false;
//   } else if (typeof arr === "object") {
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum;
//   }
// }

// const day = {
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
//   7: "Sunday",
// };
// function returnDay(dayNum) {
//   let date = day[dayNum];
//   if (typeof date === "undefined") {
//     return null;
//   } else if (typeof date === "string") {
//     return date;
//   }
// }

// function add(x, y) {
//   return x + y;
// }
// //�Ѵ� ���� ǥ��
// const add = function (x, y) {
//   return x + y;
// };

// function callTwice(func) {
//   func();
//   func();
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }
// callTwice(rollDie);

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("Congrats!!");
//       console.log("Congrats!!");
//     };
//   } else {
//     return function () {
//       alert("you tying to close this window!!");
//       alert("you tying to close this window!!");
//       alert("you tying to close this window!!");
//       alert("you tying to close this window!!");
//     };
//   }
// }

// const myMath = {
//   PI: 3.141592,
//   square(num) {
//     // square: function(num)�� ���������� square(num)�̷��Ը� �ص� �������
//     return num * num;
//   },
//   cube(num) {
//     return num ** 3;
//   },
// };

// const hen = {
//   name: "Helen",
//   eggCount: 0,
//   layAnEgg() {
//     this.eggCount++;
//     return "EGG";
//   },
// };

// function yell(msg) {
//   try {
//     console.log(msg.toUpperCase().repeat(3));
//   } catch (e) {
//     console.log("please pass a string next time!");
//   }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// // numbers.forEach((element) => {
// //   if (element % 2 === 0) {
// //     console.log(element);
// //   }
// // });

// const doubles = numbers.map(function (num) {
//   //map�� �������� �Ϻθ� �������ų� �� ��� �ø��ٰų� �� �� ����.
//   return num * 2;
// });

// const fullNames = [
//   { first: "Albus", last: "Dumbledore" },
//   { first: "Harry", last: "Potter" },
//   { first: "Hermione", last: "Granger" },
//   { first: "Ron", last: "Weasley" },
//   { first: "Rubeus", last: "Hagrid" },
//   { first: "Minerva", last: "McGonagall" },
//   { first: "Severus", last: "Snape" },
// ];

// const firstNames = fullNames.map(function (fullName) {
//   return fullName.first;
// });

//ȭ��ǥ �Լ�
// const add = (x, y) => {
//   return x + y;
// };

// const square = (x) => {
//   return x * x;
// };

// const rollDie = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

// const rollDie = () =>  Math.floor(Math.random() * 6) + 1;

// const add = (a, b) => a + b;

// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//   },
//   {
//     title: "Stand By Me",
//     score: 85,
//   },
//   {
//     title: "Parasite",
//     score: 95,
//   },
//   {
//     title: "Alien",
//     score: 90,
//   },
// ];

// const newMovies = movies.map(function (movie) {
//   return `${movie.title}-${movie.score / 10}`;
// });

// const newMovies = movies.map(movie => {
//     return `${movie.title}-${movie.score / 10}`;
// })

//setTimeout�Լ�(������ �����Ŀ� ������)
// setTimeout(() => {
//   console.log("Hello");
// }, 3000);

//setInterval�Լ�(������ �ʸ��� ��� ������)
// const id = setInterval(() => {
//   console.log(Math.random());
// }, 2000);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const filterNum = numbers.filter((n) => n < 10);

// const validUserNames = (usernames) => {
//   const correct = usernames.filter((name) => name.length < 10);
//   return correct;
// };

// const exames = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];
// const cor = exames.some((score) => score > 99);

// const allEvens = (num) => num.every((num) => num % 2 === 0);

// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// const total = prices.reduce((total, price) => {
//   return (total += price);
// });

// const minPrice = prices.reduce((min, price) => {
//   if (price < min) {
//     return price;
//   }
//   return min;
// });

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Parasite",
    score: 95,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

// const higestRated = movies.reduce((bestMovie, currMoive) => {
//   if (currMoive.score > bestMovie.score) {
//     return currMoive;
//   }
//   return bestMovie;
// });

// const evens = [2, 4, 6, 8];
// evens.reduce((sum, num) => sum + num, 100);

// const person = {
//   firstName: "Viggo",
//   lastName: "Mortensen",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   shoutName: function () {
//     setTimeout(() => {
//       //   console.log(this);
//       console.log(this.fullName());
//     }, 3000);
//   },
// };

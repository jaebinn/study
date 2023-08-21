//spread
// const cats = ["Blue", "Scout", "Rocket"];
// const dogs = ["Rusty", "Wyatt"];

// const allPets = [...cats, ...dogs];

// const dataFromForm = {
//   email: "jaebinss@naver.com",
//   password: "**********",
//   username: "Shin",
// };
// const newUser = { ...dataFromForm, id: 1234, isAdmin: false };

//rest
// function raceResults(gold, silver, ...everyoneElse) {
//   console.log(`old MEDAL GOES TO: ${gold}`);
//   console.log(`SILVER MEDAL GOES TO: ${silver}`);
//   console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
// }

// const scores = [13415, 6742, 3521323, 4236346, 32536, 12512352, 53753];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// const [gold, silver, ...everyoneElse] = scores;

// const user = {
//   email: "jaebinss@naver.com",
//   password: "***********",
//   firstName: "jaebin",
//   lastName: "shin",
//   born: "1999",
//   bio: "jaebin shin is a man",
//   city: "icheon",
//   country: "republic of korea",
// };

// const { email, firstName, lastName, city, bio, died = NaN } = user;

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

movies.filter((movie) => movie.score >= 90);

movies.map((title, score, year) => {
  return `${title} (${year}) is rated ${score}`;
});

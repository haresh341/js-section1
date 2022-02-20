const country = "India";
const continent = "Asia";
let population = 1000000000;

// country = "Japan";

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language = "Gujarati";

console.info(typeof isIsland);
console.info(typeof country);
console.info(typeof population);
console.info(typeof language);
console.log(population / 2);
console.log(++population);

const finlandPopulation = 6000000;
const averagePopulation = 13000000;

console.log(population > finlandPopulation);
console.log(population < averagePopulation);

// 'Portugal is in Europe, and its 11 million people speak portuguese'

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;
console.log(description);

const descriptionUsingTemplate = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(descriptionUsingTemplate);

// population = 130;
if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  let difference = averagePopulation - population;
  console.log(`${country}'s population is ${difference} less than average`);
}

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours == 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

if (language === "english" && !isIsland && population < 50000000) {
  console.log(`${country} is best for you😀`);
} else {
  console.log(`${country} does't fit for you.!😶`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
// population = 130;
console.log(
  `${country}'s population is ${
    population > averagePopulation ? "above" : "below"
  } average`
);

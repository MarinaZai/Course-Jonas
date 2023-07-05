/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "programmer";
let myCurrentJob = "nothing";

let job1 = "programmer";
let job2 = "nothing";

console.log(myFirstJob);
 */

/* let javaScript = true;
console.log(javaScript);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "ssss"); */

//CODING CHALLENGE 1
/* let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let markBMI = (markWeight / markHeight ** 2).toFixed(1);
let johnBMI = (johnWeight / johnHeight ** 2).toFixed(1);
let markHigherBMI = markBMI > johnBMI;
//console.log(markBMI, johnBMI, markHigherBMI);
if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's");
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
} else {
  console.log("John's BMI is higher than Mark's");
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}

let markWeightTwoEx = 95;
let markHeightTwoEx = 1.88;
let johnWeightTwoEx = 85;
let johnHeightTwoEx = 1.76;
let markBMITwoEx = (markWeightTwoEx / markHeightTwoEx ** 2).toFixed(1);
let johnBMITwoEx = (johnWeightTwoEx / johnHeightTwoEx ** 2).toFixed(1);
let markHigherBMITwoEx = markBMITwoEx > johnBMITwoEx;
//console.log(markBMITwoEx, johnBMITwoEx, markHigherBMITwoEx);
if (markBMITwoEx > johnBMITwoEx) {
  console.log("Mark's BMI is higher than John's");
  console.log(
    `Mark's BMI ${markBMITwoEx} is higher than John's ${johnBMITwoEx}`
  );
} else {
  console.log("John's BMI is higher than Mark's");
  console.log(
    `John's BMI ${johnBMITwoEx} is higher than Mark's ${markBMITwoEx}`
  );
}

//Coding challenge 3
const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 91 + 110) / 3;
if (averageScoreDolphins > averageScoreKoalas) {
  console.log("Winner Dolphins");
} else if (averageScoreDolphins < averageScoreKoalas) {
  console.log("Winner Koalas");
} else {
  console.log("It is draw");
}

const averageScoreDolphinsBonus1 = (97 + 112 + 101) / 3;
const averageScoreKoalasBonus1 = (109 + 95 + 123) / 3;
if (
  averageScoreDolphinsBonus1 > averageScoreKoalasBonus1 &&
  averageScoreDolphinsBonus1 >= 100
) {
  console.log("Winner Dolphins");
} else if (
  averageScoreDolphinsBonus1 < averageScoreKoalasBonus1 &&
  averageScoreKoalasBonus1 >= 100
) {
  console.log("Winner Koalas");
} else {
  console.log("It is draw");
}

const averageScoreDolphinsBonus2 = (97 + 112 + 101) / 3;
const averageScoreKoalasBonus2 = (109 + 95 + 106) / 3;

if (
  averageScoreDolphinsBonus2 > averageScoreKoalasBonus2 &&
  averageScoreDolphinsBonus2 >= 100
) {
  console.log("Winner Dolphins");
} else if (
  averageScoreDolphinsBonus2 < averageScoreKoalasBonus2 &&
  averageScoreKoalasBonus2 >= 100
) {
  console.log("Winner Koalas");
} else if (
  averageScoreDolphinsBonus2 === averageScoreKoalasBonus2 &&
  averageScoreKoalasBonus2 >= 100 &&
  averageScoreDolphinsBonus2 >= 100
) {
  console.log("It is draw");
} else {
  console.log("No winner!");
}
 */

//CODDING CHALLENGE 4
let bill = 275;
let procent = bill >= 50 && bill <= 300 ? 15 : 20;
let tipResult = (bill * procent) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tipResult}, and the total value ${
    bill + tipResult
  }`
);

let billTwo = 40;
let procentTwo = billTwo >= 50 && billTwo <= 300 ? 15 : 20;
let tipResultTwo = (billTwo * procentTwo) / 100;

console.log(
  `The bill was ${billTwo}, the tip was ${tipResultTwo}, and the total value ${
    billTwo + tipResultTwo
  }`
);

let billThree = 430;
let procentThree = billThree >= 50 && billThree <= 300 ? 15 : 20;
let tipResultThree = (billThree * procentThree) / 100;

console.log(
  `The bill was ${billThree}, the tip was ${tipResultThree}, and the total value ${
    billThree + tipResultThree
  }`
);

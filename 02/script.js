//CODING CHALLENGE(02)-1
/* const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
  return (scoreOne + scoreTwo + scoreThree) / 3;
};

const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
//const avgDolhins = calcAverage(85, 54, 41);
//const avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolhins, avgKoalas);

const checkWinner = function () {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("Nobody win");
  }
};
checkWinner(); */

//CODING CHALLENGE(02)-2
/* const billsArray = [125, 555, 44];

let bill = billsArray[0];
let procent = bill >= 50 && bill <= 300 ? 15 : 20;
let tipResult = (bill * procent) / 100;
console.log(
  `The bill was ${bill}, the tip was ${tipResult}, and the total value ${
    bill + tipResult
  }`
);

let billTwo = billsArray[1];
let procentTwo = billTwo >= 50 && billTwo <= 300 ? 15 : 20;
let tipResultTwo = (billTwo * procentTwo) / 100;
console.log(
  `The bill was ${billTwo}, the tip was ${tipResultTwo}, and the total value ${
    billTwo + tipResultTwo
  }`
);

let billThree = billsArray[2];
let procentThree = billThree >= 50 && billThree <= 300 ? 15 : 20;
let tipResultThree = (billThree * procentThree) / 100;
console.log(
  `The bill was ${billThree}, the tip was ${tipResultThree}, and the total value ${
    billThree + tipResultThree
  }`
);

const tipsArray = [tipResult, tipResultTwo, tipResultThree];
const totalArray = [
  billsArray[0] + tipsArray[0],
  billsArray[1] + tipsArray[1],
  billsArray[2] + tipsArray[2],
];
console.log(tipsArray, totalArray);
 */

//CODING CHALLENGE(02)-3
const objectMark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.weight / this.height ** 2).toFixed(1);
  },
};
const objectJohn = {
  fullName: "Mark Miller",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.weight / this.height ** 2).toFixed(1);
  },
};

if (objectMark.calcBMI() > objectJohn.calcBMI()) {
  console.log(
    `Mark's BMI ${objectMark.calcBMI()} is higher than John's ${objectJohn.calcBMI()}`
  );
} else {
  console.log(
    `John's BMI ${objectJohn.calcBMI()} is higher than Mark's ${objectMark.calcBMI()}`
  );
}

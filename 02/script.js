//CODING CHALLENGE(02)-1
const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
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
checkWinner();

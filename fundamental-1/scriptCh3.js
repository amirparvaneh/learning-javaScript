let arrayScore = new Array();

let matchResult;

const ave = (arrayScore) => {
  let result = arrayScore[0] + arrayScore[1] + arrayScore[2];
  result = result / 3;
  return result;
};

const dolphine = {
  aveScore: Number,
};

const koalas = {
  aveScore: Number,
};

let dolphineScores = [3, 3, 3];
let koalasScores = [4, 4, 4];

dolphine.aveScore = ave(dolphineScores);
koalas.aveScore = ave(koalasScores);

console.log(dolphine.aveScore, koalas.aveScore);

if (dolphine.aveScore > koalas.aveScore) {
  console.log("dolphine is the winner");
} else if (dolphine.aveScore < koalas.aveScore) {
  console.log("koalas is the winner");
} else console.log("draw");

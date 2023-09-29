"use strict";

const calculateAvg = (t1, t2, t3) => {
  let result = (t1 + t2 + t3) / 3;
  return result;
};

let avgKoalas = calculateAvg(65, 54, 49);
let avgDolphins = calculateAvg(4444, 23, 71);

let gameStatus = "";
let winner;
const checkWinner = (x, y) => {
  x >= y * 2 ? (winner = "Koalas") : y > x * 2 ? (winner = "Dolphins") : null;
  return winner;
};

let result = checkWinner(avgKoalas, avgDolphins);

if (result === "Koalas") {
  gameStatus = `${winner} win ${avgKoalas}vs${avgDolphins}`;
} else if (result === "Dolphins") {
  gameStatus = `${winner} win ${avgDolphins}vs${avgKoalas}`;
} else {
  console.log("no winner");
}

console.log(gameStatus);

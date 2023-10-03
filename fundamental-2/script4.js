"use strict";

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = (billValue) => {
  let tip;
  billValue >= 50 && billValue <= 300
    ? (tip = billValue * 0.15)
    : (tip = billValue * 0.2);
  return tip;
};

for (let i = 0; i < 10; i++) {
  tips.push(calcTip(bill[i]));
  totals.push(tips[i] + bill[i]);
}
let totalAvg;
let tipAvg;

const calcAvg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
};

console.log(calcAvg(tips));
console.log(calcAvg(totals));
formatons;

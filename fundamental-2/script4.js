"use strict";

const bill = [22,295,176,440,37,105,10,1100,86,52];

const tips = [];
const totals = [];

const calcTip = (billValue) =>{
    let tip ;
    (billValue >= 50 && billValue <= 300) ? tip = billValue * 0.15 : tip = billValue * 0.2;
    return tip;
}

for(let i = 0 ; i < 10 ; i++){
    tips.push(calcTip(bill[i]));
    totals.push(tips[i] + bill[i]);
}
let totalAvg ;
let tipAvg ; 


const calcAvg = (x) =>{
    let sum = 0;
    for(let i = 0 ; i< x.length; i++){
        console.log(sum);
        sum += x[i];
    }
    let avg = sum/x.length;
    return avg;
}


console.log(tips + "  and total " + totals);

console.log(calcAvg(tips));
"use strict";

const calcTip = (billValue) => {
    let tip;
    (billValue <= 300 && billValue >= 50) ? tip = billValue*0.15 : tip = billValue*0.2;
    return tip;
}

let bills = [125,555,44]

const tips = [];
tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

const finalValue = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(tips);
console.log('the final value:' + finalValue)
const result = [bills,tips];
console.log(result);



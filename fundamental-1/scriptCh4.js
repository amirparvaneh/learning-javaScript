const bill = {
  value: Number,
  tip: Number,
};

bill.value = 275;

const calculateTip = (bill) => {
  bill.value >= 50 && bill.value <= 300
    ? (bill.tip = 0.15 * bill.value)
    : (bill.tip = 0.2 * bill.value);
};

calculateTip(bill);

let statusSen = `the bill is : ${bill.value} and the tip is ${
  bill.tip
} and the total will be : ${bill.value + bill.tip}`;

console.log(statusSen);

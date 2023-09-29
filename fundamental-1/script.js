const bmi = (weight, height) => {
  return weight / height ** 2;
};

let Mark = {
  weight: 78,
  height: 1.69,
};

let John = {
  weight: 92,
  height: 1.95,
};

let markBmi = bmi(Mark.weight, Mark.height);
let johnBmi = bmi(John.weight, John.height);

let markHigherBmi = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBmi);

let statusResult = "Mark's BMI is higher than John's!";

if (markHigherBmi) {
  console.log(statusResult);
} else {
  statusResult = "John's BMI is higher than Mark's!";
}

let statusWithTemplate = `Mark's BMI is ${markBmi} and is higher than john with BMI ${johnBmi}`;

if (markHigherBmi) {
  console.log(statusWithTemplate);
} else {
  statusWithTemplate = `John's BMI is ${johnBmi} and is higher than mark with BMI ${markBmi}`;
}

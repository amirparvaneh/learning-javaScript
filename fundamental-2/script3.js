"use strict";

const Mark = {
  fullName: "Mark Miller",
  mass: 75,
  height: 1.69,
  calcBmi: function () {
    this.bmiValue = this.mass / this.height ** 2;
    return this.bmiValue;
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmiValue = this.mass / this.height ** 2;
    return this.bmiValue;
  },
};

Mark.calcBmi();
John.calcBmi();

if (John.bmiValue > Mark.bmiValue) {
  console.log(
    `John's bmi(${John.bmiValue} is higher than Mark's bmi(${Mark.bmiValue})`
  );
} else {
  console.log(
    `Mark's bmi(${Mark.bmiValue} is higher than John's bmi(${John.bmiValue})`
  );
}

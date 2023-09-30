"use strict";

const printForcast = (arr) => {
  let day = 1;
  let message = "";
  for (let i = 0; i < arr.length; i++) {
    message = message + `${arr[i]} temparature in ${day} days.`;
    day += 1;
  }
  console.log(message);
};

printForcast([17, 21, 33]);

printForcast([12, 5, -5, 0, 4]);

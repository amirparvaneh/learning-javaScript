const bmi = (weight,height) => {
    return weight / (height ** 2);
}


let Mark = {
    weight : 78,
    height : 1.69
}

let John = {
    weight : 92,
    height : 1.95
}

let markBmi = bmi(Mark.weight,Mark.height);
let johnBmi = bmi(John.weight,John.height);

let markHigherBmi = markBmi > johnBmi;

console.log(markBmi,johnBmi,markHigherBmi);
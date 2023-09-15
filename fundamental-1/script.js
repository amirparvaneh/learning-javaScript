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

// let markBmi = Mark.weight / (Mark.height ** 2);
// let johnBmi = John.weight / (John.height ** 2);
// console.log('mark bmi : '+markBmi)

let markHigherBmi = true;

if (markBmi < johnBmi){
    markHigherBmi = false;
}
console.log(markBmi,johnBmi,markHigherBmi);
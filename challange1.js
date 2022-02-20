function bmiCalculate(mass, height) {
  return mass / height ** height;
}

function printMessage(markHigherBMI) {
  if (markHigherBMI) {
    console.log(
      `Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`
    );
  } else {
    console.log(
      `John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`
    );
  }
}

let massMark = 78;
let massJohn = 92;

let heightMark = 1.69;
let heightJohn = 1.95;

let marksBMI = bmiCalculate(massMark, heightMark);
let johnsBMI = bmiCalculate(massJohn, heightJohn);
let markHigherBMI = marksBMI > johnsBMI;

printMessage(markHigherBMI);

massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.86;

marksBMI = bmiCalculate(massMark, heightMark);
johnsBMI = bmiCalculate(massJohn, heightJohn);
markHigherBMI = marksBMI > johnsBMI;

printMessage(markHigherBMI);

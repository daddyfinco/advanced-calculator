"use strict";

// Declaring variable to be used in my calculator
let basicOperator;
let executableValue;
let specialFourOperator;
let operatorArray = ["+", "-", "*", "/", "Log(x)", "sin(x)", "cos(x)", "tan(x)"];
let solution;
let firstInput;
let secondInput;
let firstInputScreenValue;
let secondInputScreenValue;
let click = document.querySelectorAll(".btn");
let basic = document.querySelectorAll(".basic-operator");
let specialFour = document.querySelectorAll(".special-4-operator");
let sound = new Audio("Assets/Sounds/pin-pad-click-sound.wav");
let buttonClick = document.querySelectorAll(".all-btn");
let screenViewOneElement = document.querySelector("input#screen-1");
let screenViewTwoElement = document.querySelector("input#screen-2");
let clickedInput;

// Adding button click sound to my calculator
for (let i = 0; i < buttonClick.length; i++) {
  buttonClick[i].addEventListener("click", clickSound)
};

function clickSound() {
  sound.play()
};

// Adding display to my calculator
function numberAndBasicOperatorGetter(Event) {
  clickedInput = Event.target.value;
  screenViewOneElement.value += clickedInput;
};

for (let i = 0; i < click.length; i++) {
  click[i].addEventListener("click", numberAndBasicOperatorGetter);
};

//Adding "DE = Backspace" function to my calculator
document.querySelector(".delete").addEventListener("click", backspace);

function backspace() {
  screenViewOneElement.value = screenViewOneElement.value.slice(0, -1);
}

//Adding the "AC = All Clear" function button to my calculator
document.querySelector(".clear").addEventListener("click", clearScreen);

function clearScreen() {
  screenViewOneElement.value = "";
  screenViewTwoElement.value = "";
}

/*
BASIC
OPERATIONS
*/

for (let i = 0; i < basic.length; i++) {
  basic[i].addEventListener("click", basicGetter); //Adds a click listener to every operand.
};

// Once JS notice a click on the basic-operator, the "basicOperation" function below is executed.
function basicGetter(Event) {
  basicOperator = Event.target.value; //The value of the clicked basic button is stored and added to screen
};

firstInputScreenValue = screenViewOneElement.value.slice(0, (screenViewOneElement.value.length - 1)); //The screen value is saved as the first number value.

function basicOperation() {
  secondInputScreenValue = screenViewOneElement.value.slice(screenViewOneElement.value.length);
  firstInput = Number(firstInputScreenValue);
  secondInput = Number(secondInputScreenValue);

  if (basicOperator == '+') {
    solution = firstInput + secondInput;
    screenViewTwoElement.value = solution;
  } else if (basicOperator == '-') {
    solution = firstInput - secondInput;
    screenViewTwoElement.value = solution;
  } else if (basicOperator == '/') {
    solution = firstInput / secondInput;
    screenViewTwoElement.value = solution;
  } else if (basicOperator == '*') {
    solution = firstInput * secondInput;
    screenViewTwoElement.value = solution;
  }
  return solution;
};


/*
SPECIAL
FOUR
OPERATIONS
*/

for (let i = 0; i < specialFour.length; i++) {
  specialFour[i].addEventListener("click", specialFourGetter);
};

// Once JS notice a click on the special4-operator, the "special4_Operation" function below is executed.
function specialFourGetter(Event) {
  specialFourOperator = Event.target.value; //The value of the special operator is stored.
  screenViewOneElement.value = specialFourOperator.slice(0, 3) + " " + screenViewOneElement.value;
}

function specialFourCalculation() {
  executableValue = Number(screenViewOneElement.value.slice(4));
  if (specialFourOperator == "tan(x)") {
    solution = Math.tan(executableValue * Math.PI / 180);
    screenViewTwoElement.value = solution;
  } else if (specialFourOperator == "sin(x)") {
    solution = Math.sin(executableValue * Math.PI / 180);
    screenViewTwoElement.value = solution;
  } else if (specialFourOperator == "cos(x)") {
    solution = Math.cos(executableValue * Math.PI / 180);
    screenViewTwoElement.value = solution;
  } else if (specialFourOperator == "Log(x)") {
    solution = Math.log10(executableValue);
    screenViewTwoElement.value = solution;
  }
  return solution;
};


/*
SPECIAL
INVERSE
OPERATIONS
*/

document.querySelector(".special-inverse-operator").addEventListener("click", specialInverseGetter);

// Once JS notice a click on the special-Inverse-operator, the "specialInverseGetter" function below is executed.
function specialInverseGetter(Event) {
  specialInverse = Event.target.value; //The value of the special operator is stored.
  screenViewOneElement.value = "1/" + screenViewOneElement.value;
}

function specialInverseOperation() {
  executableValue = Number(screenViewOneElement.value.slice(2););
  solution = (1 / executableValue);
  screenViewTwoElement.value = solution;
  return solution;
}


/*
SPECIAL
SQUAREROOT
OPERATIONS
*/

document.querySelector(".special-sqrt-operator").addEventListener("click", specialSQRTGetter);

// Once JS notice a click on the special-sqrt-operator, the "specialSQRTGetter" function below is executed.
function specialSQRTGetter(Event) {
  specialSQRT = Event.target.value; //The value of the special operator is stored.
  screenViewOneElement.value = "√" + screenViewOneElement.value;
}

function specialSQRTOperation() {
  executableValue = Number(screenViewOneElement.value.slice(1));
  solution = Math.sqrt(executableValue);
  screenViewTwoElement.value = solution;
  return solution;
}


/*
SPECIAL
EXPONENTIAL
OPERATIONS
*/

document.querySelector(".special-exp-operator").addEventListener("click", specialExpGetter);

// Once JS notice a click on the special-exp-operator, the "specialExpGetter" function below is executed.
function specialExpGetter(Event) {
  specialExp = Event.target.value; //The value of the special operator is stored.
  screenViewOneElement.value = screenViewOneElement.value + "ˆ";
  return screenViewOneElement.value;
};

function specialExpOperation() {
  firstInputScreenValue = screenViewOneElement.value.slice(0, (screenViewOneElement.value.length - 1));
  secondInputScreenValue = screenViewOneElement.value.slice(screenViewOneElement.value.length);
  firstInput = Number(firstInputScreenValue);
  secondInput = Number(secondInputScreenValue);
  solution = (firstInput ** secondInput);
  screenViewTwoElement.value = solution;
  return solution;
};


/*
SPECIAL
PERCENTAGE
OPERATIONS
*/

document.querySelector(".special-percentage-operator").addEventListener("click", specialPercentGetter);

// Once JS notice a click on the special-percent-operator, the "specialPercentGetter" function below is executed.
function specialPercentGetter(Event) {
  specialPercent = Event.target.value; //The value of the special operator is stored.
  screenViewOneElement.value = screenViewOneElement.value + "%";
  return screenViewOneElement.value;
};

function specialPercentageOperation() {
  firstInputScreenValue = screenViewOneElement.value.slice(0, (screenViewOneElement.value.length - 1));
  secondInputScreenValue = screenViewOneElement.value.slice(screenViewOneElement.value.length);
  firstInput = Number(firstInputScreenValue);
  secondInput = Number(secondInputScreenValue);
  solution = (firstInput / 100) * secondInput;
  screenViewTwoElement.value = solution;
  return solution;
};

/*
SPECIAL
FACTORIAL
OPERATIONS
*/

document.querySelector(".special-factorial-operator").addEventListener("click", specialFactorialGetter);

// Once JS notice a click on the special-factorial-operator, the "specialFactorialGetter" function below is executed.
function specialFactorialGetter(Event) {
  specialFactorial = Event.target.value; //The value of the special operator is stored.
  console.log(specialFactorial);
  screenViewOneElement.value = screenViewOneElement.value + "!";
  return screenViewOneElement.value;
};


function specialFactorialOperation(firstInput) {
  firstInputScreenValue = screenViewOneElement.value.slice(0, (screenViewOneElement.value.length - 1));
  firstInput = Number(firstInputScreenValue);
  let factorial = firstInput;
  for (let i = firstInput; i > 1; i--) {
    factorial = factorial * (i - 1);
    return factorial;
  };
  screenViewTwoElement.value = factorial;
};


/*

PLUS
MINUS
TOGGLER

*/

let signToggler = document.querySelector(".plus-minus-toggler");

signToggler.addEventListener("click", toggleSign);

function toggleSign() {
  screenViewTwoElement.value = screenViewTwoElement.value * (-1);
};


/*

PRESENTING
THE
RESULT
WITH
THE
EQUAL
SIGN

*/


document.querySelector(".equal").addEventListener("click", calcSolution);

function calcSolution() {
  if (operatorArray.includes(basicOperator)) {
    basicOperation();
  } else if (operatorArray.includes(specialFourOperator)) {
    specialFourCalculation();
  } else if (specialInverse == "⅟x") {
    specialInverseOperation();
  } else if (specialSQRT == "√x") {
    specialSQRTOperation();
  } else if (specialExp == "exp") {
    specialExpOperation();
  } else if (specialPercent == "%") {
    specialPercentageOperation();
  } else if (specialFactorial == "x!") {
    specialFactorialOperation();
  } else if (screenViewTwoElement.value == "NaN") {
    screenViewTwoElement.value = "Error!";
  } else {
    screenViewTwoElement.value = solution;
  }
};

// The above line add an event listener to the equal button. when clicked, it executes the,
// "calSolution" funtion above. Here it is presumed that the equal sign will be clicked after
// all input value has been entered in the calculator for both the basic operations and special operations.


// Toggling between dark and light mode of the calculator

let calcMode = document.querySelector(".calculator");

let toggleSwitch = document.getElementById("switch-inner-border");

function switchMode() {

  calcMode.classList.toggle("lightmode");

}

toggleSwitch.addEventListener("click", switchMode);

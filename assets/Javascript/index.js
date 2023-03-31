"use strict";

// Adding button click sound to my calculator

let sound = new Audio("Assets/Sounds/pin-pad-click-sound.wav");

let buttonClick = document.querySelectorAll(".all-btn");

function clickSound() {
    sound.play()
};

for (let i = 0; i < buttonClick.length; i++) {
    buttonClick[i].addEventListener("click", clickSound)
};



// Adding display to my calculator

let click = document.querySelectorAll(".btn");

let screenView1 = document.querySelector("input#screen-1");

let screenView2 = document.querySelector("input#screen-2");

let clickedInput;

for (let i = 0; i < click.length; i++) {

    click[i].addEventListener("click", numberAndBasicOperatorInput);

    function numberAndBasicOperatorInput(Event) {

        clickedInput = Event.target.value;

        screenView1.value += clickedInput;

    }
};


//Adding "DE = Backspace" function to my calculator

document.querySelector(".delete").addEventListener("click", backspace);

function backspace() { screenView1.value = screenView1.value.slice(0, -1); }


//Adding the "AC = All Clear" function button to my calculator

document.querySelector(".clear").addEventListener("click", clearScreen);

function clearScreen() { screenView1.value = ""; screenView2.value = ""; }


// Declaring variable to be used in my calculator
let basicOperator;

let executableValue;

let executableInput;

let special4_Operator;

let specialTrigAndLogArray = ["Log(x)", "sin(x)", "cos(x)", "tan(x)"];

let specialPercentAndExpArray = ["%", "exp"];

let basicOperatorArray = ["+", "-", "*", "/"];

let solution;

let firstScreenView1;

let totalScreenValue;

let firstInput;

let secondInput;

let firstInputScreenValue;

let secondInputScreenValue;



/*

BASIC

OPERATIONS

*/

let basic = document.querySelectorAll(".basic-operator");

for (let i = 0; i < basic.length; i++) {

    basic[i].addEventListener("click", basicGetter); //Adds a click listener to every operand.
};

// Once JS notice a click on the basic-operator, the "basicOperation" function below is executed.

function basicGetter(Event) {

    basicOperator = Event.target.value; //The value of the clicked basic button is stored and added to screen

    firstScreenView1 = screenView1.value;//Note that at this point the basic operator has been clicked and its value has been added to screenView
};


function basicOperation() {

    firstInputScreenValue = firstScreenView1.slice(0, (firstScreenView1.length - 1));//The screen value is saved as the first number value.

    totalScreenValue = screenView1.value; //At this point all numbers have been inputed.

    secondInputScreenValue = totalScreenValue.slice(firstScreenView1.length);

    firstInput = Number(firstInputScreenValue);

    secondInput = Number(secondInputScreenValue);


    if (basicOperator == '+') {

        solution = firstInput + secondInput;

        screenView2.value = solution;

        if (screenView2.value == "NaN") {

            screenView2.value = "Error!";

        } else {

            screenView2.value = solution;

        }


    } else if (basicOperator == '-') {

        solution = firstInput - secondInput;

        screenView2.value = solution;

        if (screenView2.value == "NaN") {

            screenView2.value = "Error!";

        } else {

            screenView2.value = solution;

        }

    } else if (basicOperator == '/') {

        solution = firstInput / secondInput;

        screenView2.value = solution;

        if (screenView2.value == "NaN") {

            screenView2.value = "Error!";

        } else {

            screenView2.value = solution;

        }

    } else if (basicOperator == '*') {

        solution = firstInput * secondInput;

        screenView2.value = solution;

        if (screenView2.value == "NaN") {

            screenView2.value = "Error!";

        } else {

            screenView2.value = solution;

        }
    }

    return solution;

};


/*

SPECIAL

4

OPERATIONS

*/

let special4 = document.querySelectorAll(".special-4-operator");

for (let i = 0; i < special4.length; i++) {

    special4[i].addEventListener("click", special4Getter);

};



// Once JS notice a click on the special4-operator, the "special4_Operation" function below is executed.

function special4Getter(Event) {

    special4_Operator = Event.target.value; //The value of the special operator is stored.

    screenView1.value = special4_Operator.slice(0, 3) + " " + screenView1.value;
}


function special4_Operation() {

    if (special4_Operator == "tan(x)") {

        executableInput = screenView1.value.slice(4);

        executableValue = Number(executableInput);

        solution = Math.tan(executableValue * Math.PI / 180);

        screenView2.value = solution;

    } else if (special4_Operator == "sin(x)") {

        executableInput = screenView1.value.slice(4);

        executableValue = Number(executableInput);

        solution = Math.sin(executableValue * Math.PI / 180);

        screenView2.value = solution;

    } else if (special4_Operator == "cos(x)") {

        executableInput = screenView1.value.slice(4);

        executableValue = Number(executableInput);

        solution = Math.cos(executableValue * Math.PI / 180);

        screenView2.value = solution;

    } else if (special4_Operator == "Log(x)") {

        executableInput = screenView1.value.slice(4);

        executableValue = Number(executableInput);

        solution = Math.log10(executableValue);

        screenView2.value = solution;
    }

    return solution;
};


/*

SPECIAL

INVERSE

OPERATIONS

*/

let specialInverse = document.querySelector(".special-inverse-operator");

specialInverse.addEventListener("click", specialInverseGetter);


// Once JS notice a click on the special-Inverse-operator, the "specialInverseGetter" function below is executed.

function specialInverseGetter(Event) {

    specialInverse = Event.target.value; //The value of the special operator is stored.

    screenView1.value = "1/" + screenView1.value;
}

function specialInverseOperation() {

    executableInput = screenView1.value.slice(2);

    executableValue = Number(executableInput);

    solution = (1 / executableValue);

    screenView2.value = solution;

    return solution;

}


/*

SPECIAL

SQUAREROOT

OPERATIONS

*/

let specialSQRT = document.querySelector(".special-sqrt-operator");

specialSQRT.addEventListener("click", specialSQRTGetter);


// Once JS notice a click on the special-sqrt-operator, the "specialSQRTGetter" function below is executed.

function specialSQRTGetter(Event) {

    specialSQRT = Event.target.value; //The value of the special operator is stored.

    screenView1.value = "√" + screenView1.value;
}

function specialSQRTOperation() {

    executableInput = screenView1.value.slice(1);

    executableValue = Number(executableInput);

    solution = Math.sqrt(executableValue);

    screenView2.value = solution;

    return solution;

}


/*

SPECIAL

EXPONENTIAL

OPERATIONS

*/

let specialExp = document.querySelector(".special-exp-operator");

specialExp.addEventListener("click", specialExpGetter);

let executableInput1;

let executableValue1;

let executableInput2;

let executableValue2;

let firstExecutable;


// Once JS notice a click on the special-exp-operator, the "specialExpGetter" function below is executed.

function specialExpGetter(Event) {

    specialExp = Event.target.value; //The value of the special operator is stored.

    screenView1.value = screenView1.value + "ˆ";

    firstExecutable = screenView1.value;

}

function specialExpOperation() {

    executableInput1 = firstExecutable.slice(0, (firstExecutable.length - 1));

    executableInput2 = screenView1.value.slice(firstExecutable.length);

    executableValue1 = Number(executableInput1);

    executableValue2 = Number(executableInput2);

    solution = Math.pow(executableValue1, executableValue2);

    screenView2.value = solution;

    return solution;

}


/*

SPECIAL

PERCENTAGE

OPERATIONS

*/

let specialPercent = document.querySelector(".special-percentage-operator");

specialPercent.addEventListener("click", specialPercentGetter);


// Once JS notice a click on the special-percent-operator, the "specialPercentGetter" function below is executed.

function specialPercentGetter(Event) {

    specialPercent = Event.target.value; //The value of the special operator is stored.

    screenView1.value = screenView1.value + "%";

    firstExecutable = screenView1.value;

}

function specialPercentageOperation() {

    executableInput1 = screenView1.value.slice(0, (firstExecutable.length - 1));

    executableInput2 = screenView1.value.slice(firstExecutable.length);

    executableValue1 = Number(executableInput1);

    executableValue2 = Number(executableInput2);

    solution = (executableValue1 / executableValue2) * 100;

    screenView2.value = solution;

    return solution;

}


/*

SPECIAL

FACTORIAL

OPERATIONS

*/

let specialFactorial = document.querySelector(".special-factorial-operator");

specialFactorial.addEventListener("click", specialFactorialGetter);


// Once JS notice a click on the special-factorial-operator, the "specialFactorialGetter" function below is executed.

function specialFactorialGetter(Event) {

    specialFactorial = Event.target.value; //The value of the special operator is stored.

    screenView1.value = screenView1.value + "!";

    firstExecutable = screenView1.value;
    console.log(firstExecutable);

    executableInput = firstExecutable.slice(0, (firstExecutable.length - 1));

    executableValue = Number(executableInput);

}



function specialFactorialOperation() {


    for (let i = executableValue; i > 0; i--) {

        function factorial(n) {

            executableValue *= (n - 1);

            return executableValue;

        };

        solution = factorial();
    }

    screenView2.value = solution;

    return solution;

}


/*

PLUS
MINUS
TOGGLER

*/

let signToggler = document.querySelector(".plus-minus-toggler");

signToggler.addEventListener("click", toggleSign);

function toggleSign() {
  screenView2.value = screenView2.value * (-1);
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


let requester = document.querySelector(".equal");

requester.addEventListener("click", calcSolution);

function calcSolution() {

    if (basicOperatorArray.includes(basicOperator)) {

        basicOperation();

    } else if (specialTrigAndLogArray.includes(special4_Operator)) {

        special4_Operation();

    } else if (specialInverse == "⅟x") {

        specialInverseOperation();

    } else if (specialSQRT == "√x") {

        specialSQRTOperation();

    } else if (specialExp == "exp") {

        specialExpOperation();

    } else if (specialPercent == "%") {

        specialPercentageOperation();

    } else if (specialFactorial == "!") {

        specialFactorialOperation();

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

'use strict';

//JUST TESTING

let numSeq = [];
let opSeq = [];

// Declaring variable to be used in my calculator
let operatorValue;
let solution;
let firstInput;
let secondInput;
let firstInputValue;
let secondInputValue;
let operator_array = [
  '+',
  '-',
  '*',
  '/',
  'Log(x)',
  'sin(x)',
  'cos(x)',
  'tan(x)',
  '⅟x',
  '√x',
  'exp',
  '%',
  'x!',
  '!',
];
let operator_btn = document.querySelectorAll('.op-btn');
let numeric_btn = document.querySelectorAll('.numeric');
let sound = new Audio('Assets/sounds/pin-pad-click-sound.wav');
let view1 = document.querySelector('#screen-1');
let view2 = document.querySelector('#screen-2');
const allBtn = document.querySelectorAll('.all-btn');

// Adding button click sound to my calculator
// for (let i = 0; i < document.querySelectorAll(".all-btn").length; i++) {
//   document.querySelectorAll(".all-btn")[i].addEventListener("click", () => {
//     sound.play()
//   });
// };

allBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    sound.play();
  });
});

//Adding "DE = Backspace" function to my calculator
let backSpace = () => {
  view1.value = view1.value.slice(0, -1);
};

document.querySelector('.delete').addEventListener('click', backSpace);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') {
    sound.play();
    backSpace();
  }
  if (e.key === 'Delete') {
    sound.play();
    allClear();
  }
  if (!isNaN(e.key)) {
    sound.play();
    view1.value += e.key;
  }
  if (operator_array.includes(e.key)) {
    sound.play();
    view1.value += e.key;
  }
});

//Adding the "AC = All Clear" function button to my calculator
let allClear = () => {
  view1.value = '';
  view2.value = '';
};

document.querySelector('.clear').addEventListener('click', allClear);

// ADDING DISPLAY TO MY CALCULATOR

//Adding clicked input to the calculator display
numeric_btn.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    view1.value += event.target.value;
  });
});

for (let i = 0; i < operator_btn.length; i++) {
  operator_btn[i].addEventListener('click', (event) => {
    operatorValue = event.target.value;
    if (!view2.value == '') {
      switch (operatorValue) {
        case '+':
        case '-':
        case '*':
        case '/':
          view1.value = view2.value + operatorValue;
          view2.value = '';
          firstInputValue = view1.value.slice(0, view1.value.length - 1);
          break;
        case 'Log(x)':
        case 'sin(x)':
        case 'cos(x)':
        case 'tan(x)':
          view1.value = operatorValue.slice(0, 3) + ' ' + view2.value;
          view2.value = '';
          firstInputValue = view1.value.slice(4);
          break;
        case '⅟x':
          view1.value = '1/' + view2.value;
          view2.value = '';
          firstInputValue = view1.value.slice(2);
          break;
        case '√x':
          view1.value = '√' + view2.value;
          view2.value = '';
          firstInputValue = view1.value.slice(1);
          break;
        case 'exp':
          view1.value = view2.value + '^';
          view2.value = '';
          firstInputValue = view1.value.slice(0, view1.value.length - 1);
          break;
        case '%':
          view1.value = view2.value + '%';
          view2.value = '';
          firstInputValue = view1.value.slice(0, view1.value.length - 1);
          break;
        case 'x!':
          view1.value = view2.value + '!';
          firstInputValue = view1.value.slice(0, view1.value.length - 1);
          view2.value = '';
          break;
      }
    } else if (view2.value == '') {
      switch (operatorValue) {
        case '+':
        case '-':
        case '*':
        case '/':
          view1.value = view1.value + operatorValue;
          firstInputValue = view1.value.slice(0, view1.value.length - 1);
          break;
        case 'Log(x)':
        case 'sin(x)':
        case 'cos(x)':
        case 'tan(x)':
          view1.value = operatorValue.slice(0, 3) + ' ' + view1.value;
          firstInputValue = view1.value.slice(4);
          break;
        case '⅟x':
          view1.value = '1/' + view1.value;
          firstInputValue = view1.value.slice(2);
          break;
        case '√x':
          view1.value = '√' + view1.value;
          firstInputValue = view1.value.slice(1);
          break;
        case 'exp':
          view1.value = view1.value + '^';
          firstInputValue = view1.value.slice(0, view1.value.length - 1);
          break;
        case '%':
          view1.value = view1.value + '%';
          firstInputValue = view1.value.slice(0, view1.value.length - 1);
          break;
        case 'x!':
          view1.value = view1.value + '!';
          firstInputValue = view1.value.slice(0, view1.value.length - 1);
          break;
      }
    }
  });
}

/* BASIC OPERATIONS */
let basicOperation = () => {
  secondInputValue = view1.value.slice(firstInputValue.length + 1);
  firstInput = Number(firstInputValue);
  secondInput = Number(secondInputValue);
  switch (operatorValue) {
    case '+':
      solution = firstInput + secondInput;
      break;
    case '-':
      solution = firstInput - secondInput;
      break;
    case '/':
      solution = firstInput / secondInput;
      break;
    case '*':
      solution = firstInput * secondInput;
      break;
    default:
      solution = 'Error!';
      break;
  }
  view2.value = solution;
};

/* TRIGONOMETRY AND LOGARITHM OPERATIONS */
let trigAndLogOperation = () => {
  firstInput = Number(firstInputValue);
  switch (operatorValue) {
    case 'tan(x)':
      solution = Math.tan((firstInput * Math.PI) / 180);
      view2.value = solution;
      break;
    case 'sin(x)':
      solution = Math.sin((firstInput * Math.PI) / 180);
      view2.value = solution;
      break;
    case 'cos(x)':
      solution = Math.cos((firstInput * Math.PI) / 180);
      view2.value = solution;
      break;
    case 'Log(x)':
      solution = Math.log10(firstInput);
      view2.value = solution;
      break;
    default:
      view2.value = 'Error!';
  }
};

/* SPECIAL INVERSE OPERATIONS */
let inverseOperation = () => {
  firstInput = Number(firstInputValue);
  solution = 1 / firstInput;
  view2.value = solution;
};

/* SPECIAL SQUAREROOT OPERATIONS */
let squareRootOperation = () => {
  firstInput = Number(firstInputValue);
  solution = Math.sqrt(firstInput);
  view2.value = solution;
};

/* SPECIAL EXPONENTIAL OPERATIONS */
let exponentialOperation = () => {
  secondInputValue = view1.value.slice(firstInputValue.length + 1);
  firstInput = Number(firstInputValue);
  secondInput = Number(secondInputValue);
  view2.value = firstInput ** secondInput;
};

/* SPECIAL PERCENTAGE OPERATIONS */
let percentageOperation = () => {
  secondInputValue = view1.value.slice(firstInputValue.length + 1);
  firstInput = Number(firstInputValue);
  secondInput = Number(secondInputValue);
  view2.value = (firstInput / 100) * secondInput;
  solution = view2.value;
};

/* SPECIAL FACTORIAL OPERATIONS */
let factorialOperation = () => {
  let factorial = Number(firstInputValue);
  for (let i = factorial; i > 1; i--) {
    factorial *= i - 1;
  }
  view2.value = factorial;
};

/* PRESENTING THE RESULT WITH THE EQUAL SIGN */
document.querySelector('.equal').addEventListener('click', () => {
  switch (operatorValue) {
    case '+':
    case '-':
    case '*':
    case '/':
      basicOperation();
      break;
    case 'Log(x)':
    case 'sin(x)':
    case 'cos(x)':
    case 'tan(x)':
      trigAndLogOperation();
      break;
    case '⅟x':
      inverseOperation();
      break;
    case '√x':
      squareRootOperation();
      break;
    case 'exp':
      exponentialOperation();
      break;
    case '%':
      percentageOperation();
      break;
    case 'x!':
      factorialOperation();
      break;
  }
  return solution;
});

/* PLUS-MINUS TOGGLER */
document.querySelector('.sign-toggler').addEventListener('click', () => {
  !view2.value == ''
    ? (view2.value = Number(view2.value) * -1)
    : (view1.value = Number(view1.value) * -1);
});

// Toggling between dark and light mode of the calculator
document.querySelector('#switch-inner-border').addEventListener('click', () => {
  document.querySelector('.calculator').classList.toggle('lightmode');
});

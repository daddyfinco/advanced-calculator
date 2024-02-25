'use strict';

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
const btnDivs = document.querySelectorAll('.active');
const buttons = document.querySelectorAll('.btn');
const operator_btn = document.querySelectorAll('.active.operator');
const numeric_btn = document.querySelectorAll('.active.numeric');
const sound = new Audio('Assets/sounds/pin-pad-click-sound.wav');
const view1 = document.querySelector('#screen-1');
const view2 = document.querySelector('#screen-2');

btnDivs.forEach((btn) => {
  btn.addEventListener('click', () => {
    sound.play();
  });
});

//Adding "DE = Backspace" function to my calculator
let backSpace = () => {
  view1.value = view1.value.slice(0, -1);
};

document.querySelector('.active.delete').addEventListener('click', backSpace);

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
  if (isNaN(e.key)) {
    switch (e.key) {
      case '+':
      case '-':
      case '*':
      case '/':
        sound.play();
        view1.value += e.key;
        break;
    }
  }
});

//Adding the "AC = All Clear" function button to my calculator
let allClear = () => {
  view1.value = '';
  view2.value = '';
};

document.querySelector('.active.clear').addEventListener('click', allClear);

// ADDING DISPLAY TO MY CALCULATOR

//Adding clicked input to the calculator display
numeric_btn.forEach((btn) => {
  btn.addEventListener('click', () => {
    view1.value += btn.firstElementChild.value;
  });
});

operator_btn.forEach((operator) => {
  operator.addEventListener('click', () => {
    operatorValue = operator.firstElementChild.value;
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
});

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
document.querySelector('.active.equal').addEventListener('click', () => {
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
document.querySelector('.active.sign-toggler').addEventListener('click', () => {
  !view2.value == ''
    ? (view2.value = Number(view2.value) * -1)
    : (view1.value = Number(view1.value) * -1);
});

// Toggling between dark and light mode of the calculator
document.querySelector('#mode-switcher').addEventListener('click', () => {
  document.querySelector('.calculator').classList.toggle('lightmode');
});

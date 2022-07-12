let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");
let clearVal = document.querySelectorAll(".clear-val");
let numDisplay = document.querySelectorAll(".number-displayer");
let backspaceClass = document.getElementsByClassName("backspace");
let number1 = "";
let number2 = "";
let operator;
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (operator === undefined) {
      number1 += String(e.target.innerHTML);
      reRender(number1);
    } else {
      number2 += String(e.target.innerHTML);
      reRender(number2);
    }
  });
});
backspaceClass[0].addEventListener("click", () => {
  if (numDisplay[0].innerHTML.length === 1) {
    numDisplay[0].innerHTML = 0;
    resetVariables();
  } else {
    numDisplay[0].innerHTML = numDisplay[0].innerHTML.substring(
      0,
      numDisplay[0].innerHTML.length - 1
    );
  }
});
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    let operationType = e.target.classList[0];
    performOperation(operationType);
  });
});

clearVal[0].addEventListener("click", (e) => {
  resetVariables();
  reRender("0");
});

let performOperation = (type) => {
  if (number1 === "" && numDisplay[0].innerHTML !== 0) {
    number1 = numDisplay[0].innerHTML;
  }
  reRender("0");
  switch (type) {
    case "multiplication":
      operator = "*";
      break;
    case "addition":
      operator = "+";
      break;
    case "subtraction":
      operator = "-";
      break;
    case "division":
      operator = "/";
      break;
    case "equal":
      performCalculation();
    default:
      break;
  }
};

let performCalculation = () => {
  let num1 = number1.length > 0 ? parseInt(number1) : 0;
  let num2 = number2.length > 0 ? parseInt(number2) : 0;
  if (operator === "+") {
    reRender(num1 + num2);
  } else if (operator === "-") {
    reRender(num1 - num2);
  } else if (operator === "*") {
    reRender(num1 * num2);
  } else if (operator === "/") {
    reRender(num1 / num2);
  }
  resetVariables();
};

let reRender = (val) => {
  numDisplay[0].innerHTML = val;
};
let resetVariables = () => {
  number1 = "";
  number2 = "";
  operator = undefined;
  // reRender("0");
};

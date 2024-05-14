const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

let firstNum;
let secondNum;
let operator;
let result;

const numBtn = document.querySelectorAll(".num-button");
const opBtn = document.querySelectorAll(".op-button");
const inputDisplay = document.querySelector("#display");
const equalBtn = document.querySelector("#eq-button");
const delBtn = document.querySelector("#del-button");
const decBtn = document.querySelector("#dec-button");

function operate(operator, firstNum, secondNum) {
  return operator(Number(firstNum), Number(secondNum));
}

numBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNum == null) {
      firstNum = button.textContent;
      inputDisplay.textContent = firstNum;
    } else if (operator == null) {
      if (firstNum.toString().split("").length < 9) {
        firstNum += button.textContent;
        inputDisplay.textContent = firstNum;
      } else {
        inputDisplay.textContent = Number(firstNum).toExponential(4);
      }
    } else if (secondNum == null) {
      secondNum = button.textContent;
      inputDisplay.textContent = secondNum;
    } else {
      if (secondNum.toString().split("").length < 9) {
        secondNum += button.textContent;
        inputDisplay.textContent = secondNum;
      } else {
        inputDisplay.textContent = Number(secondNum).toExponential(4);
      }
    }
  });
});

opBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator == null) {
      if (button.id == "add-button") {
        operator = add;
      } else if (button.id == "sub-button") {
        operator = subtract;
      } else if (button.id == "mult-button") {
        operator = multiply;
      } else {
        operator = divide;
      }
    } else {
        let result = operate(operator, firstNum, secondNum);
        if (result.toString().split("").length < 13) {
          inputDisplay.textContent = result;
        } else {
          inputDisplay.textContent = result.toExponential(4);
        }
        firstNum = result;
        secondNum = null;
        operator = null;
        if (button.id == "add-button") {
            operator = add;
          } else if (button.id == "sub-button") {
            operator = subtract;
          } else if (button.id == "mult-button") {
            operator = multiply;
          } else {
            operator = divide;
          }
    }
  });
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  inputDisplay.textContent = "";
  firstNum = null;
  secondNum = null;
  operator = null;
});

equalBtn.addEventListener("click", () => {
  let result = operate(operator, firstNum, secondNum);
  if (result.toString().split("").length < 13) {
    inputDisplay.textContent = result;
  } else {
    inputDisplay.textContent = result.toExponential(4);
  }
  firstNum = result;
  secondNum = null;
  operator = null;
});

delBtn.addEventListener("click", () => {
  if (firstNum !== null && operator == null) {
    let updateNum = firstNum.toString().slice(0, -1);
    firstNum = parseInt(updateNum);
    inputDisplay.textContent = firstNum;
  } else if (secondNum !== null && operator !== null) {
    let updateSecondNum = secondNum.toString().slice(0, -1);
    secondNum = parseInt(updateSecondNum);
    inputDisplay.textContent = secondNum;
  }
});

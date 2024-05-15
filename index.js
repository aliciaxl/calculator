
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
    if (b == 0){
        return "ERROR";
    } else {
  return a / b;
    }
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
  return operator( Number(firstNum), Number(secondNum));
}
//number buttons
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
        inputDisplay.textContent = firstNum.toPrecision(6);
      }
    } else if (secondNum == null) {
      secondNum = button.textContent;
      inputDisplay.textContent = secondNum;
    } else {
      if (secondNum.toString().split("").length < 9) {
        secondNum += button.textContent;
        inputDisplay.textContent = secondNum;
      } else {
        inputDisplay.textContent = secondNum.toPrecision(6);
      }
    };
    if ((inputDisplay.textContent.includes('.'))){
        decBtn.disabled = true;
 } else { decBtn.disabled = false };
  });
});

//operator buttons 
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
        // if a second operator button is pressed, operate with result as new firstNum
        let result = operate(operator, firstNum, secondNum); 
        if (result.toString().split("").length < 11) {
          inputDisplay.textContent = result;
        } else {
          inputDisplay.textContent = result.toPrecision(6);
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

//clear button
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  inputDisplay.textContent = "";
  firstNum = null;
  secondNum = null;
  operator = null;
});

//equal button
equalBtn.addEventListener("click", () => {
  let result = operate(operator, firstNum, secondNum);
  if (result.toString().split("").length < 11) {
    inputDisplay.textContent = result;
  } else {
    inputDisplay.textContent = result.toPrecision(6);
  }
  firstNum = result;
  secondNum = null;
  operator = null;
});

//delete button
delBtn.addEventListener("click", () => {
  if (firstNum !== null && operator == null) {
    let updateNum = firstNum.toString().slice(0, -1);
    firstNum = updateNum;
    inputDisplay.textContent = firstNum;
  } else if (secondNum !== null && operator !== null) {
    let updateSecondNum = secondNum.toString().slice(0, -1);
    secondNum = updateSecondNum;
    inputDisplay.textContent = secondNum;
  } else { inputDisplay.textContent = null;
  }
});



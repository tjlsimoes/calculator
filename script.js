// Functions for all the basic math operators.

const add = function(a, b) {

  return +a + +b;	
};

const subtract = function(a, b) {
	
  return a - b;
};

const multiply = function(a, b) {

  return a * b;

};

const divide = function(a, b) {

  return a / b

};

const operate = function(operation, a, b) {

  if(operation == "+") return add(a, b);
  else if(operation == "-") return subtract(a, b);
  else if(operation == "*") return multiply(a, b);
  else if(operation == "/") {
    if (b == "0") {
      return "Error";
    } else {
      return divide(a, b);
    };
  };
}



let firstnum = "";
let signop = "";
let secnum = "";
let result = "";

const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");


const calcbuttons = document.querySelectorAll(".calcbutton");

calcbuttons.forEach(calcbutton => {

  calcbutton.addEventListener("click", () => {

  let calcbtext = calcbutton.textContent;

  if (result == "Error") {
    result = "";
    firstnum = "";
    signop = "";
    secnum = "";
    result = "";
  }

  switch (calcbtext) {
    case "C":
      firstnum = "";
      signop = "";
      secnum = "";
      result = "";
      return display.textContent = "";

      break;
      
    case "=":

    if (firstnum === "" || signop === "" || secnum === "") {
      return display.textContent = "Error";
    } else {
      result = operate(signop, firstnum, secnum);
      console.log(result);
      return display.textContent = operate(signop, firstnum, secnum);
    }

      break;

      case "×":
        if (firstnum !== "" && signop !== "" && secnum !== "") {
          result = operate(signop, firstnum, secnum);
          signop = "*";
          secnum = "";
          return display.textContent = result;
        } else return signop = "*";
        
        break; 

      case "÷":
        if (firstnum !== "" && signop !== "" && secnum !== "") {
          result = operate(signop, firstnum, secnum);
          signop = "/";
          secnum = "";
          return display.textContent = result;
        } else return signop = "/";

        break;

      case "-":
      case "+":

        if (firstnum !== "" && signop !== "" &&secnum !== "") {
          result = operate(signop, firstnum, secnum);
          signop = calcbutton.textContent;
          secnum = "";
          return display.textContent = result;
        } else return signop = calcbutton.textContent; 

        break;

      case "7":
      case "8":
      case "9":
      case "4":
      case "5":
      case "6":
      case "1":
      case "2":
      case "3":
      case ".":
      case "0":

        if (signop !== "" && firstnum !== "" && secnum !== "" && result !== "") {
          signop = "";
          firstnum = "";
          secnum = "";
          result = "";
          firstnum += calcbutton.textContent;
          return display.textContent = firstnum;
        } else if (signop !== "" && result !== "") {
          firstnum = result;
          secnum = "";
          secnum += calcbutton.textContent;
          return display.textContent = secnum;
        } else if (signop !== "") {
          secnum += calcbutton.textContent;
          return display.textContent = secnum;
        } else {
          firstnum += calcbutton.textContent;
          return display.textContent = firstnum;
        }

        break;

  }

  })
})
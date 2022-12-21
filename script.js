// Functions for all the basic math operators.

const add = function(a, b) {

  return a + b;	
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

// Function operate.

const operate = function(operation, a, b) {

  if(operation == "+") return add(a, b);
  else if(operation == "-") return subtract(a, b);
  else if(operation == "*") return multiply(a, b);
  else if(operation == "/") return divide(a, b);
}


// Function that populates the display when number buttons are clicked.

let firstnum = "";
let signop = "";
const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");

digits.forEach(digit => {

  digit.addEventListener("click", () => {
    firstnum += digit.textContent;
    return display.textContent = firstnum;
  });
});

// Add click listen to operators

const operators = document.querySelectorAll(".opersign");

operators.forEach(operator => {

  operator.addEventListener("click", () => {
    console.log(operator.textContent);
    return signop += operator.textContent; 
  })
});
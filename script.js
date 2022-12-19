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

const operate = function(operation, a, b) {

  if(operation == "+") return add(a, b);
  else if(operation == "-") return subtract(a, b);
  else if(operation == "*") return multiply(a, b);
  else if(operation == "/") return divide(a, b);
}
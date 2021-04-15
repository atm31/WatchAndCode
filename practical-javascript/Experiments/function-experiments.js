//Experiment 1-2 What are these variables equal to.

function demoFunction() {}

var experiment1 = demoFunction;  // the function code
var experiment2 = demoFunction(); // undefined

//Experiment 3-4 What are the variables equal to.
function demoFunctionThatReturnsAString() {
  return 'a string';
}

var experiment3 = demoFunctionThatReturnsAString; // function code
var experiment4 = demoFunctionThatReturnsAString(); // result of code running which is the string 'a string'

// return inserts a value where the function was called.


//Experiment 5-6
function demoFunctionThatReturnsUndefined () {
  return undefined;
}

var experiment5 = demoFunctionThatReturnsUndefined; // function code 
var experiment6 = demoFunctionThatReturnsUndefined(); // undefined any?


//Using debugger to check 'return' value
debugger;

function demoFunction() {

}

demoFunction();

function demoFunctionThatReturnsAString() {
  return 'a string';
}

demoFunctionThatReturnsAString();


//Experiment 7-8

function demoFunctionThatReturnsAString() {
  return 'a string';
}

function logThis(thing) {
  console.log(thing);
}

// Experiment 7:
logThis(demoFunctionThatReturnsAString); //What happens?
//It will log the function in the console (not the result of running function because it was not called). 


// Experiment 8:
logThis(demoFunctionThatReturnsAString()); //the return value of demoFunctionThatReturnsAString is passed into logThis and is printed to console.
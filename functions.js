// functions
// functions can have 0 or more parameters
// 1a. const binding
// function that takes 1 parameter
const square = function(n) {
    return n * n;
}; // note the semi-colon - just like any other statement

// calling the function and passing a single parameter
console.log(square(12)); // calls the square function and passes 12 as a parameter
// outputs 144

/************/
// 1b binding using let
let launchMissiles = function () {
    // do something
}; // note the semi-colon again

// let declarations allows you to redefine the function
launchMissiles = function() { 
    // do something else
};

/******************/
// 2. declaration notation
// also, using declaration notation allows functions to be defined after they are called:
console.log(square2(12));

function square2(n) {
    return n * n;
} // note: no semi-colon here;

/******************/
// 3. Arrow function notation
const square3a = (n) => {
    return n * n;
}; // semi-colon is back

const square3b = (n) => n * n; // is equivalent to above

/********************/
// notes on functions:
// the examples presented uses a return value. this is a common approach for code reusability
// e.g.,
function sayHello(x) {
    return "Hello " + x;
}

// after you call a function, it "returns" a value that you can store in a variable/console.log/etc
console.log(sayHello("Jonathan")); // this line has 2 parts: 1. it calls the sayHello() function, which returns a value. 2. it outputs that return value


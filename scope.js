/**************/
// scope - think of it in levels
let diameter = 10;
if (diameter > 0) {
    let pi = 3.14;
    let circumference = pi * diameter;
    // pi & circumference variables are locally visible in this if code block
    console.log("The circumference is: " + circumference); // 31.4...
} // exiting scope

// diameter variable exists here
// pi & circumference are no longer visible here, they are out of scope!


/*****************/
// example 2:

let myName = "Jonathan";

function greetMe() {
    let myGreeting = "Hello ";
    // myGreeting is visible in this function
    return myGreeting + myName;
    // myGreeting & myName are visible here
} // after the function call greetMe() completes/closes, myGreeting no longer exists

console.log(greetMe());

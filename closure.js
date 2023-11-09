/**************/
// closures

//function multiplier(factor){
//    return number => number * factor;
// }

const multiplier = (n) => {
    return number => number * n;
}

let twoTimes = multiplier(2); // will return 2 * n
let fiveTimes = multiplier(5); // will return 5 * n

console.log(twoTimes(5)); // returns 10 (5 * 2)
console.log(fiveTimes(10)); // returns 50 (10 * 5)
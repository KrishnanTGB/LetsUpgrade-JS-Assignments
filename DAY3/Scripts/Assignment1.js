console.log("Script Loaded For Day3 - Assignment1");

let tim = Number(prompt("Enter any number to check whether the number is ODD or EVEN"));

isOddOrEven(tim);

function isOddOrEven(tim) {
    if (tim % 2 == 0) {
        let result = `The number entered is ${tim} and it is EVEN.`;
        console.log(result);
    } else {
        let result = `The number entered is ${tim} and it is ODD.`;
        console.log(result);
    }
}


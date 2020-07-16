console.log("Script Loaded For Day3 - Assignment2");

let ding = prompt("Enter the OS name and its Version");

let dong = ding.split(" ");
console.log(`The OS name is ${dong[0].slice(0, 1).toUpperCase()+dong[0].slice(1).toLowerCase()} and Version is ${dong[1]}`);
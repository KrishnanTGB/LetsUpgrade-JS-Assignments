// var

//scope of var
var greeter = "hey hi";
    
function newFunction() {
    var hello = "hello";
}

var tester = "hey hi";

function newFunction() {
    var hello = "hello";
}
console.log(hello); // error: hello is not defined

//var variables can be re-declared and updated
var greeter = "hey hi";
var greeter = "say Hello instead";

var greeter = "hey hi";
greeter = "say Hello instead";

console.log (greeter);
var greeter = "say hello"

var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"

//problem with var
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter) // "say Hello instead"



//let

//let is block scoped
let greeting = "say Hi";
let times = 4;

if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
}
console.log(hello) // hello is not defined

//let can be updated but not re-declared.
let greeting = "say Hi";
greeting = "say Hello instead";

let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"



//const 

//const is block scoped

//const cannot be updated or re-declared
const greeting = "say Hi";
greeting = "say Hello instead";// error: Assignment to constant variable.

const greeting = "say Hi";
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

const greeting1 = {
    message: "say Hi",
    times: 4
}

const greeting1 = {
    words: "Hello",
    number: "five"
} // error:  Assignment to constant variable.

greeting1.message = "say Hello instead";

 
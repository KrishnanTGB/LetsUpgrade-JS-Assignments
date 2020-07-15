console.log("Script Loaded For Day2 - Assignment3");

let age = prompt("Please Enter Your Age To Confirm You Are Above 21?");

if (age > 21){
    console.log("Yes, you can drink!");
    document.getElementById("demo").innerHTML = "Your age is " + age + " and yes, you can drink.";
}
else{
    console.log("No, you can not drink!");
    document.getElementById("demo").innerHTML = "Your age is " + age + ". So, you can not drink.";
}

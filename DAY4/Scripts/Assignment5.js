console.log("Script Loaded For Day4 - Assignment5");

let sales = Number(prompt("Enter your sales count during this year : "));

console.log("RESULTS FROM SALES DEPARTMENT");

if(sales >= 0 && sales <= 5000){
    let reward = (sales/100)*2;
    console.log(`You got a reward ${reward}!`);
}
else if(sales >= 5001 && sales <= 10000){
    let reward = (sales/100)*5;
    console.log(`You got a reward ${reward}!`);
}
else if(sales >= 10001 && sales <= 20000){
    let reward = (sales/100)*7;
    console.log(`You got a reward ${reward}!`);
}
else if(sales > 20000){
    reward = (sales/100)*10;
    console.log(`You got a reward ${reward}!`);
}
else{
    console.log("Give correct sales count");
}
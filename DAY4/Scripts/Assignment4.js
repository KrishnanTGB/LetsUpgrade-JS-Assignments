console.log("Script Loaded For Day4 - Assignment4");

console.log("You can try this console as a calculator!");

//function that display value 
function dis(val) 
{ 
    document.getElementById("result").value+=val;
} 
  
//function that evaluates the digit and return result 
function solve() 
{ 
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
} 
  
//function that clear the display 
function clr() 
{ 
    document.getElementById("result").value = "";
}

function sqrt(){
    let x = document.getElementById("result").value;
    let result = Math.sqrt(x);
    document.getElementById("result").value = result;
}
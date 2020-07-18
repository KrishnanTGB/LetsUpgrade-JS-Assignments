console.log("Script Loaded For Day4 - Assignment8");

// function ask(question, yes, no){
//     if(confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     function() {alert("You agreed.");},
//     function() {alert("You cancelled the execution.");}
// );


//Arrow Function

let ask2 = (q, y, n) => {
    if(confirm(q)) y();
    else n();
}

ask2("Do you agree?",
    () => {alert("You agreed.");},
    () => {alert("You cancelled the  execution.");}
);


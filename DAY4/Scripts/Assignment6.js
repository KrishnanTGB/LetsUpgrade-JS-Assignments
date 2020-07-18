console.log("Script Loaded For Day4 - Assignment6");

// function Assignment6(){
//     while(true){
//         let input = prompt("Enter the number : ");
//         if(input>100){
//             console.log(input);
//             break;
//         }
//         else if(input==""){
//             continue;
//         }
//         else{
//             continue;
//         }
//     }
//     console.log("Done");
// }

// Using ? or ||
function Assignment6a(){
    while(1){
        let inp = prompt("Enter the number : ");
        if(inp>100 || inp==""){
        console.log(inp > 100 ? 'Done' : Assignment6a());
        }
    }
}

Assignment6a();
// Assignment6();
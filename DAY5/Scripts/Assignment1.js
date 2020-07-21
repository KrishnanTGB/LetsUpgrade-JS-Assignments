console.log("Script Loaded For Day5 - Assignment1");


var arr = [];

    


while(1){
    let input = Number(prompt("Enter the numbers :"));
    if(input != 0){
        arr.push(input);
        continue;
    }
    else{
        break;
    }
}

console.log(`Original Array: ${arr}`);

let odd = arr.filter(el=>el%2!=0);

let oddCubes = [];
oddCubes.push(arr.filter(el=>el%2!=0).map(el=>el**3));

console.log(`Filtered Array with Odd numbers : ${odd}`);
console.log(`The cubes of odd numbers are ${oddCubes}`);

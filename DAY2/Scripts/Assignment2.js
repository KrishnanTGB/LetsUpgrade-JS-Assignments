console.log("Script Loaded For Day2 - Assignment2");


//String Methods
console.log("***String Methods***");

//Search
console.log("SEARCH");
let str = "I am a student of LetsUpgrade";
let pos = str.search("LetsUpgrade");
console.log(pos);

//Slice
console.log("SLICE");
let str2 = "Ding, Dong, Dung";
let res = str2.slice(6, 12);
let res2 = str2.slice(-11, -5);
console.log(res);
console.log(res2);

//Substring
console.log("SUBSTRING")
let str3 = "Ping, Pong, Pung";
let res3 = str3.substring(6, 12);
let res4 = str3.substr(-4);
console.log(res3);
console.log(res4);

//Replace
console.log("REPLACE");
let str4 = "I am student of JavaScript Classes";
let res5 = str4.replace("JavaScript", "LetsUpgrade");
console.log(res5);

//Concat
console.log("CONCAT");
let str5 = "Its Me";
res6 = str5.concat(" ", "Krishnan");
console.log(res6);

//Trim
console.log("TRIM");
let str6 = "    Haha! Hehe!   ";
res7 = str6.trim();
console.log(res7);



//Array Methods
console.log("***Array Methods***");

//Converting Arrays to Strings using toString() and join()
console.log("ARRAYS TO STRINGS");
let items = ["Shoes", "Socks", "Bags"];
console.log(items);
//toString()
console.log(items.toString());
//join()
console.log(items.join(" , "));

//Push and Pop
console.log("POP");
let colors = ["red", "blue", "green", "orange"];
//pop
console.log(colors.pop());
console.log(colors);
//push
console.log(colors.push("yellow"));
console.log(colors);

//Shift and Unshift
let cars = ["MG", "Skoda", "Ford", "BMW"];
//shift
console.log("SHIFT");
console.log(cars.shift());
console.log(cars);
//unshift
console.log("UNSHIFT");
console.log(cars.unshift("Mercedes"));
console.log(cars);

//Splice and Slice
let phones = ["MI", "VIVO","OPPO"];
console.log(phones);
//splice
phones.splice(2, 0, "MOTO", "APPLE");
console.log(phones);
//slice
let phonesnew = phones.slice(2,5);
console.log(phonesnew);

//Concat
let allArrays = items.concat(cars, colors, phones);
console.log(allArrays);


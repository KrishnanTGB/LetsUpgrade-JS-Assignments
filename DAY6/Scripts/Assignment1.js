console.log("Script Loaded For Day6 - Assignment1");

// let colors = ["red", "blue", "green", "yellow"];
// function changeColor() {
//     setTimeout(function loop() {
//       document.bgColor = colors.shift();
//       if (colors.length!=0) {
//         setTimeout(loop, 5000);
//       }
//     }, 5000);
//   }


// function start() {
// setInterval(changeColor(), 20000);
// }
let c = ["red", "blue", "green", "yellow"];
  let currentColorIndex = 0;

  function changeColor() {
    document.bgColor = c[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % c.length;
    setTimeout(changeColor, 5000);
  }
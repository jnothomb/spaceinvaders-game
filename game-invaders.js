"use strict";

////////////////////////
// INVADERS
////////////////////////

function Invaders() {
  // this.position = 14;
}

// Invaders.prototype.moveRight = function() {
//   this.position++;
// };
//
// Invaders.prototype.moveLeft = function() {
//   this.position--;
// };

var a = ["s", "s", "i", "s", "i", "s", "i", "s", "s", "s"];
console.log(a.length);
console.log(a[a.length - 1]);

if (a[a.length - 1] === "s") {
  console.log("true");
} else {
  console.log("false");
}

console.log(" ");


//ADD TO THE GAME

//when moving to the right

if (a[a.length - 1] === "s") {
  a.pop();
  a.unshift("s");
} else if (a[a.length - 1] === "i") {
  console.log("move down");
}

console.log(a);
console.log(" ");

//when moving to the left

if (a[0] === "s") {
  a.push("s");
  a.shift();
} else if (a[0] == "i") {
  console.log("move down");
}

console.log(a);
console.log(" ");

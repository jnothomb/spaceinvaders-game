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


////////////
// WORK IN PROGRESS
///////////

//SUBSTITUTE THIS BY ARRAY[1] of the grid
var a = ["s", "s", "i", "s", "i", "s", "i", "s", "s", "s"];

//MOVING TO THE RIGHT THEN DOWN

if (a[a.length - 1] === "s") {
  a.pop();
  a.unshift("s");
} else if (a[a.length - 1] === "i") {
  console.log("move down");
  // SUBSTITUTE THIS BY ARRAY Y coordinate
}

//MOVING TO THE LEFT THEN DOWN

if (a[0] === "s") {
  a.push("s");
  a.shift();
} else if (a[0] == "i") {
  console.log("move down");
  // SUBSTITUTE THIS BY ARRAY Y coordinate
}

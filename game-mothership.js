"use strict";

////////////////////////
// MOTHERSHIP
////////////////////////

function Mothership() {
  this.position = 14;
}

Mothership.prototype.moveRight = function() {
  console.log(this.position);
  if (this.position !== 29) {
    this.position++;
  }
};

Mothership.prototype.moveLeft = function() {
  console.log(this.position);
  if (this.position !== 0) {
    this.position--;
  }
};

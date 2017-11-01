"use strict";

////////////////////////
// MOTHERSHIP
////////////////////////

function Mothership() {
  this.position = 14;
}

Mothership.prototype.moveRight = function() {
  this.position++;
};

Mothership.prototype.moveLeft = function() {
  this.position--;
};

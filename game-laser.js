"use strict";

////////////////////////
// LASER
////////////////////////

function Laser(gridElement, col, row) {
  var self = this;

  self.gridElement = gridElement;
  self.col = col;
  self.row = row;

  self.intervalId = window.setInterval(function() {
    self.moveUp();
  }, 105);
}

Laser.prototype.moveUp = function() {
  var self = this;

  // self.gridElement.children[self.row].children[self.col].classList.remove('laser');
  self.row--;
  if (self.row >= 0) {
    // self.gridElement.children[self.row].children[self.col].classList.add('laser');
  } else {
    window.clearInterval(self.intervalId);
    self.gone = true;
  }
};

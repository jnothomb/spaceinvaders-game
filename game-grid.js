"use strict";

////////////////////////
// GAME GRID
////////////////////////

function Game() {
  this.fullGame = [
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "i", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
  ];
  this.mothership = new Mothership();

  // Interval Setup and Keys
  this.intervalId = null;
  this.bindKeys();
  this.setupInterval();
}

// GRID KEY
// s = space
// i = invader
// m = mothership

////////////////////////
//ADD FUNCTION TO UPDATE
////////////////////////

Game.prototype.update = function() {
  // here executes every time before drawing
  this.fullGame[this.fullGame.length - 1].forEach(function(letter, index, row) {
    row[index] = "s";
  });
  this.fullGame[this.fullGame.length - 1][this.mothership.position] = "m";

};

////////////////////////
// GRID CONSTRUCTOR
////////////////////////

Game.prototype.draw = function() {
  this.update();

  //Erase the existing grid before each update
  if (document.getElementsByClassName('grid')[0]) {
    document.getElementsByClassName('grid')[0].remove();
  }

  //Creation of the grid
  var drawGame = document.createElement("div");
  drawGame.className = "grid";
  document.getElementsByClassName("container")[0].appendChild(drawGame);

  //Creation of the rows
  this.fullGame.forEach(function(row, index) {
    var drawRows = document.createElement("div");
    drawRows.className = "row";
    document.getElementsByClassName("grid")[0].appendChild(drawRows);

    //Creation of the cells
    row.forEach(function(cell) {
      var drawCells = document.createElement("div");
      drawCells.className = "cell";

      //Switch Statement to Rename the grid classes
      switch (cell) {
        case "s":
          drawCells.className += " " + "space";
          break;
        case "i":
          drawCells.className += " " + "invader";
          break;
        case "m":
          drawCells.className += " " + "mothership";
          break;
      }
      document.getElementsByClassName("row")[index].appendChild(drawCells);
    });
  });
};

////////////////////////
//ADDING MOVEMENT TO THE MOTHERSHIP
////////////////////////

//Function that binds keys to Mothership instructions
Game.prototype.bindKeys = function() {
  var self = this;

  document.addEventListener('keydown', function(event) {
    var keyName = event.which;
    if (keyName === 39) {
      self.mothership.moveRight();
    } else if (keyName === 37) {
      self.mothership.moveLeft();
    }
  });
};

////////////////////////
//INTERVALS
////////////////////////

Game.prototype.setupInterval = function() {
  var self = this;
  this.intervalId = setInterval(function() {
    self.draw();
  }, 100);

};

////////////////////////
//RUNNING THE GAME
////////////////////////

var space = new Game();

space.draw();

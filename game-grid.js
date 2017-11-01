"use strict";

//
// GAME GRID
//

function Grid() {
  this.fullGrid = [
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
  this.intervalId = null;

  this.bindKeys(); //added by byron
  this.setupInterval();
}

// s = space
// i = invader
// m = mothership

//
//ADD FUNCTION TO UPDATE
//

Grid.prototype.update = function() {
  // here executes every time before drawing
  this.fullGrid[this.fullGrid.length - 1].forEach(function(letter, index, row) {
    row[index] = "s";
  });
  this.fullGrid[this.fullGrid.length - 1][this.mothership.position] = "m";

};

//
// GRID CONSTRUCTOR
//

Grid.prototype.draw = function() {
  this.update();

  //Erase the existing grid before each update
  if (document.getElementsByClassName('grid')[0]) {
    document.getElementsByClassName('grid')[0].remove();
  }

  //Creation of the grid
  var drawGrid = document.createElement("div");
  drawGrid.className = "grid";
  document.getElementsByClassName("container")[0].appendChild(drawGrid);

  //Creation of the rows
  this.fullGrid.forEach(function(row, index) {
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

//
//ADDING MOVEMENT TO THE MOTHERSHIP
//
//Function that binds keys to Mothership instructions
Grid.prototype.bindKeys = function() {
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


// TEST TO SEE THE MOVE RIGHT
// Grid.prototype.moveR = function() {
//   this.mothership.moveRight();
//   this.draw();
// };
// TEST TO SEE THE MOVE LEFT
// Grid.prototype.moveL = function() {
//   this.mothership.moveLeft();
//   this.draw();
// };





//Need to Build a
Grid.prototype.setupInterval = function() {
  var self = this;
  this.intervalId = setInterval(function() {
    self.draw();
  }, 100);

};

//
// DRAW THE NEW GRID
//

var space = new Grid();

space.draw();

"use strict";

////////////////////////
// GAME GRID
////////////////////////

function Game() {
  var self = this;
  self.fullGame = [
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
    ["h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
    ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s"],
  ];

  self.motherShipRow = self.fullGame.length - 2;
  self.lastColumn = self.fullGame[0].length - 1;
  self.invadersRemainder = 60;

  // GRID KEY
  // h = home shield
  // s = space
  // i = invader
  // m = mothership

  // Creation of the Mothership
  self.mothership = new Mothership();

  // Interval Setup and Keys
  self.intervalId = null;
  // Interval for invaders
  self.invadersIntervalId = null;

  // Start Game Instruction
  self.startGame = function() {
    self.bindKeys();
    self.setupInterval();
    self.startMoveInvaders();
  };

  self.isMovingRight = true;

  ////////////////////////
  // PLACING THE MOTHERSHIP
  ////////////////////////

  //Adding Function to Update
  self.update = function() {
    // before drawing, replaces the entire last row by "s"
    self.fullGame[self.motherShipRow].forEach(function(letter, index, row) {
      row[index] = "s";
    });
    //Places the mothership at initial position
    self.fullGame[self.motherShipRow][self.mothership.position] = "m";
  };

  ////////////////////////
  // GRID CONSTRUCTOR
  ////////////////////////

  self.draw = function() {
    self.update();

    var gridElement = document.getElementsByClassName('grid')[0];

    //Erase the existing grid before each update
    if (gridElement) {
      gridElement.remove();
    }

    //Creation of the grid
    var drawGame = document.createElement("div");
    drawGame.className = "grid";
    document.getElementsByClassName("container")[0].appendChild(drawGame);

    //Creation of the rows
    self.fullGame.forEach(function(row, rowIndex) {
      var drawRows = document.createElement("div");
      drawRows.className = "row";
      document.getElementsByClassName("grid")[0].appendChild(drawRows);

      //Creation of the cells
      row.forEach(function(cell, colIndex) {
        var drawCells = document.createElement("div");
        drawCells.className = "cell";
        document.getElementsByClassName("row")[rowIndex].appendChild(drawCells);

        if (typeof cell === "number") {
          drawCells.className += " " + "explosion";
          self.fullGame[rowIndex][colIndex]--;
          if (!self.fullGame[rowIndex][colIndex]) {
            self.fullGame[rowIndex][colIndex] = "s";
          }
          return;
        }

        //Switch Statement to Rename the grid classes
        switch (cell) {
          case "h":
            drawCells.className += " " + "shield";
            break;
          case "i":
            drawCells.className += " " + "invader";
            break;
          case "m":
            drawCells.className += " " + "mothership";
            break;
        }
      });
    });

    if (self.shipLaser && !self.shipLaser.gone) {
      drawGame.children[self.shipLaser.row].children[self.shipLaser.col].classList.add('laser');

      if (self.fullGame[self.shipLaser.row][self.shipLaser.col] === 'i') {
        console.log('kill');
        self.invadersRemainder -= 1;
        self.shipLaser.done = true;
        //time that explosion lasts
        self.fullGame[self.shipLaser.row][self.shipLaser.col] = 2;
      }
    }
    if (self.invadersRemainder === 0) {
      console.log("Win!!");
    }
  };

  ////////////////////////
  // ADDING MOVEMENT TO THE MOTHERSHIP
  ////////////////////////

  //Function that binds keys to Mothership instructions & Shooting
  self.bindKeys = function() {

    document.addEventListener('keydown', function(event) {
      var keyName = event.which;
      if (keyName === 39) {
        self.mothership.moveRight();
      } else if (keyName === 37) {
        self.mothership.moveLeft();
      } else if (keyName === 32) {
        space.shootShipLaser();
      }
    });
  };

  ////////////////////////
  // MAKING THE MOTHERSHIP SHOOT
  ////////////////////////

  self.shootShipLaser = function() {
    if (self.shipLaser && !self.shipLaser.gone) {
      return;
    }
    var laserStartCol = self.mothership.position;
    var laserStartRow = self.motherShipRow;
    var gridElement = document.getElementsByClassName('grid')[0];
    self.shipLaser = new Laser(gridElement, laserStartCol, laserStartRow);
  };

  ////////////////////////
  // ADDING MOVEMENT TO THE INVADERS
  ////////////////////////

  //First Row (drivers)

  self.checkInvadersOnColumn = function(col) {
    for (var ix = 0; ix < self.motherShipRow; ix++) {
      if (self.fullGame[ix][col] === "i") {
        return true;
      }
    }
  };

  self.checkInvadersOnRow = function(row) {
    return false;
  };

  self.moveEveryoneRight = function() {

    // for var row from 0 to mothership row - 1
    for (var row = 0; row < self.motherShipRow - 1; row++) {
      //   for var col from lastColumn - 1 to >= 0; --
      for (var col = self.lastColumn - 1; col >= 0; col--) {
        //     copy value of [row][col] to [row][col +1]
        if (self.fullGame[row][col + 1]) {
          self.fullGame[row][col + 1] = self.fullGame[row][col];
          //     clean value of [row][col]
          self.fullGame[row][col] = "s";
        }
      }
    }
  };

  self.moveEveryoneLeft = function() {
    // for var row from 0 to mothership row - 1
    //   for var col from 1 to lastColumn
    //     copy value of [row][col] to [row][col -1]
    //     clean value of [row][col]

    // for var row from 0 to mothership row - 1
    for (var row = 0; row < self.motherShipRow - 1; row++) {
      //   for var col from 1 to lastColumn
      for (var col = 1; col <= self.lastColumn; col++) {
        //     copy value of [row][col] to [row][col -1]
        if (self.fullGame[row][col - 1]) {
          self.fullGame[row][col - 1] = self.fullGame[row][col];
          //     clean value of [row][col]
          self.fullGame[row][col] = "s";
        }
      }
    }

  };

  self.moveEveryoneDown = function() {
    // for var row from 1 to mothership row - 1
    //   for var col from 0 to lastColumn
    //     copy value of [row][col] to [row-1][col]
    //     clean value of [row][col]

    // for var row from 1 to mothership row - 1
    for (var row = self.motherShipRow - 3; row > 0; row--) {
      //   for var col from 0 to lastColumn
      for (var col = 0; col <= self.lastColumn; col++) {
        //     copy value of [row][col] to [row-1][col]
        if (self.fullGame[row + 1][col]) {
          self.fullGame[row + 1][col] = self.fullGame[row][col];
          //     clean value of [row][col]
          self.fullGame[row][col] = "s";
        }
      }
    }

  };


  self.moveInvaders = function() {
    console.log('move');

    if (self.isMovingRight) {
      if (!self.checkInvadersOnColumn(self.lastColumn)) {
        self.moveEveryoneRight();
      } else {
        self.moveEveryoneDown();
        self.isMovingRight = false;
      }
    } else {
      if (!self.checkInvadersOnColumn(0)) {
        self.moveEveryoneLeft();
      } else {
        self.moveEveryoneDown();
        self.isMovingRight = true;
      }
    }

    if (self.checkInvadersOnRow(18)) {
      console.log('game over');
      debugger;
    }

    self.invadersIntervalId = setTimeout(function() {
      self.moveInvaders();
    }, 500);
  };

  self.startMoveInvaders = function() {
    self.moveInvaders();
  };


  ////////////////////////
  //INTERVALS
  ////////////////////////

  self.setupInterval = function() {
    self.intervalId = setInterval(function() {
      self.draw();
    }, 100);

  };
}

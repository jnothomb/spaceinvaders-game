"use strict";

////////////////////////
// GAME GRID
////////////////////////

function Game() {
  var self = this;
  self.positionInvaderx = 0;
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
    self.moveInvaders();
  };

  ////////////////////////
  // PLACING THE MOTHERSHIP
  ////////////////////////

  //Adding Function to Update
  self.update = function() {
    // before drawing, replaces the entire last row by "s"
    self.fullGame[self.fullGame.length - 2].forEach(function(letter, index, row) {
      row[index] = "s";
    });
    //Places the mothership at initial position
    self.fullGame[self.fullGame.length - 2][self.mothership.position] = "m";
  };

  ////////////////////////
  // GRID CONSTRUCTOR
  ////////////////////////

  self.draw = function() {
    self.update();

    //Erase the existing grid before each update
    if (document.getElementsByClassName('grid')[0]) {
      document.getElementsByClassName('grid')[0].remove();
    }

    //Creation of the grid
    var drawGame = document.createElement("div");
    drawGame.className = "grid";
    document.getElementsByClassName("container")[0].appendChild(drawGame);

    //Creation of the rows
    self.fullGame.forEach(function(row, index) {
      var drawRows = document.createElement("div");
      drawRows.className = "row";
      document.getElementsByClassName("grid")[0].appendChild(drawRows);

      //Creation of the cells
      row.forEach(function(cell) {
        var drawCells = document.createElement("div");
        drawCells.className = "cell";

        //Switch Statement to Rename the grid classes
        switch (cell) {
          case "w":
            drawCells.className += " " + "wall";
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
  self.bindKeys = function() {

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
  //ADDING MOVEMENT TO THE INVADERS
  ////////////////////////

  //setInterval to move every 2sec

  // self.moveInvaders = function() {
  //   self.invadersIntervalId = setInterval(function() {
  //     self.positionInvaderx += 1;
  //     self.fullGame[1] = self.fullGame[1].map(function(el, index) {
  //       if (index >= self.positionInvaderx) {
  //         if (el === "s") {
  //           return "i";
  //         }
  //         if (el === "i") {
  //           return "s";
  //         }
  //       }
  //       return el;
  //     });
  //
  //   }, 2000);
  //
  // };

  //TAKE 2 WITH PUSH/POP/SHIFT/UNSHIFT

  self.moveInvaders = function() {
    self.invadersIntervalId = setInterval(function() {
      self.positionInvaderx += 1;
      self.fullGame[1] = self.fullGame[1].map(function(el, index) {
        if (index >= self.positionInvaderx) {
          if (el === "s") {
            return "i";
          }
          if (el === "i") {
            return "s";
          }
        }
        return el;
      });

    }, 2000);

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

"use strict";

////////////////////////
//RUNNING THE GAME
////////////////////////

var space = null;

function init() {
  space = new Game();
  space.startGame();
}

document.addEventListener("DOMContentLoaded", init);

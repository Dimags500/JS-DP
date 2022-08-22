var Player = require("./Player");
var Game = require("./Game");
var Coach = require("./Coach");

let game = new Game();
let player1 = new Player("Rock", game);
let coach = new Coach(game);

player1.score();
player1.score();
player1.score();
player1.score();

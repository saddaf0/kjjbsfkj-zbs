var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var fuelImage,coinImage
var fuelGroup,coinGroup;
var lifeImg

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  fuelImage=loadImage("assets/fuel.png");
  coinImage=loadImage("assets/goldCoin.png")
  lifeImg=loadImage("assets/life.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
var database;
var form;
var userCount=0;
var user;
var gameState=0;
var timetable;

function setup() {
  createCanvas(800,400);
  database=firebase.database();

  game= new Game();
  game.start();
}

function draw() {
    clear();
    
    
  
}
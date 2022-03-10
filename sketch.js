var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("teal");
  if(keyDown("Enter")){
    quiz.play();
  }
}
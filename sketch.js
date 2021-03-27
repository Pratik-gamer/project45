var boyPlayer, girlPlayer;
var boyPlayerImg;

function preload(){
  boyPlayerImg.loadImage("images/Player/Boy.jpg");
}
function setup() {
  createCanvas(800,400);
  boyPlayer=createSprite(400, 200, 50, 50);
  boyPlayer.addImage(boyPlayerImg);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
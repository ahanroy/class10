var sea,ship,ship_move,seaimg;

function preload(){
seaimg=loadImage("sea.png")
ship_move=loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png")


}

function setup(){
  createCanvas(400,400);
 ship=createSprite(20,200,100,300)
 ship.addAnimation(ship_move)
  sea.addAnimation(seaimg) 



}

function draw() {
  background("blue");
 if(sea.x<0){
   sea.x=sea.x/2;
 }

}
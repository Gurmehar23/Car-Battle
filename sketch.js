var PLAY = 1
var END = 0
var gameState = PLAY
var track 
var Mycar,car2
var carImg,car2Img
var trackImg 
var car3,car4,car5,car6,car7


function preload(){

carImg = loadImage("images/f2.png");
car2Img = loadImage("ford.png");
trackImg = loadImage("ttt.jpg")


}

function setup(){
 createCanvas(800,800); 



track = createSprite(400,400);
track.addImage(trackImg)


Mycar = createSprite(600,600,25,20);
Mycar.addImage(carImg)
Mycar.scale = 0.5;

car2Group= new Group();
car3Group= new Group();
car4Group= new Group();
car5Group= new Group();
car6Group= new Group();
car7Group= new Group();
}

function draw(){
background(0);

if(gameState===PLAY){

if(keyDown(UP_ARROW)){
    Mycar.velocityY = -2
  }
  if(keyDown(DOWN_ARROW)){
    Mycar.velocityY = 2
  }
if(keyDown(RIGHT_ARROW)){
    Mycar.velocityX = 2
}
if(keyDown(LEFT_ARROW)){
    Mycar.velocityX = -2
}

spawnCar2();
spawnCar3();
spawnCar4();
spawnCar5();
spawnCar6();
spawnCar7();

}
if(Mycar.isTouching(car2Group)){
    Mycar.destroy();
    
}
if(Mycar.isTouching(car3Group)){
    Mycar.destroy();
    
}
if(Mycar.isTouching(car4Group)){
    Mycar.destroy();
    
}
if(Mycar.isTouching(car5Group)){
    Mycar.destroy();
    
}
if(Mycar.isTouching(car6Group)){
    Mycar.destroy();
    
}
if(Mycar.isTouching(car7Group)){
    Mycar.destroy();
    
}
if(Mycar.isTouching(car2Group)||Mycar.isTouching(car3Group)||Mycar.isTouching(car4Group)||Mycar.isTouching(car5Group)||Mycar.isTouching(car6Group)||Mycar.isTouching(car7Group)){
    gameState = END();
}
    drawSprites();
}
function spawnCar2(){
    if(frameCount%250===0){
        car2 = createSprite(200,800,25,20); 
        car2.addImage(car2Img)
        car2.scale = .5;
        car2.velocityY = -10;
        
    }
}
function spawnCar3(){
    if(frameCount%200===0){
        car3 = createSprite(120,200,25,20); 
        car3.addImage(car2Img)
        car3.scale = .5;
        car3.velocityY = -10;
        
    }
}
function spawnCar4(){
    if(frameCount%180===0){
        car4 = createSprite(120,120,25,20); 
        car4.addImage(car2Img)
        car4.scale = .5;
        car4.velocityX = 10;
        
    }
}
function spawnCar5(){
    if(frameCount%220===0){
        car5 = createSprite(120,250,25,20); 
        car5.addImage(car2Img)
        car5.scale = .5;
        car5.velocityY = 10;
        
    }
}
function spawnCar6(){
    if(frameCount%210===0){
        car6 = createSprite(650,250,25,20); 
        car6.addImage(car2Img)
        car6.scale = .5;
        car6.velocityY = 10;
        
    }
}
function spawnCar7(){
    if(frameCount%210===0){
        car7 = createSprite(400,400,25,20); 
        car7.addImage(car2Img)
        car7.scale = .5;
        car7.velocityY = -10;
        
    }
}
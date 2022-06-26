var knight, knight_running;
var ground
var bg,bgimage
function preload()
{
  knight_running=loadAnimation("Run/Run (1).png","Run/Run (2).png","Run/Run (3).png","Run/Run (4).png","Run/Run (5).png","Run/Run (6).png","Run/Run (7).png","Run/Run (8).png","Run/Run (9).png","Run/Run (10).png")
  bgimage=loadImage("BG.png")
}

function setup(){
  createCanvas(600,200)
  bg=createSprite(200,180,400,200)
  bg.addImage(bgimage)
    bg.x=bg.width/2
  knight=createSprite(50,160, 20, 50);
  knight.addAnimation("running", knight_running);
  knight.scale=0.125
  knight.x=50
  
 
  ground=createSprite(200,210,600,20)
  ground.x=ground.width/2

}

function draw(){
  background("white")
  bg.velocityX=-2
  if(bg.x<0){
    bg.x=bg.width/2
  }
  //make knight jump
  if(keyDown("space"))
  {
    knight.velocityY=-10;
  }
  knight.velocityY=knight.velocityY+0.5
  knight.collide(ground)
  spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
  
}
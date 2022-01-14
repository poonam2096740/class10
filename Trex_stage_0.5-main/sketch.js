var trex, trex_running,trex_collided;
var edges;
var ground, invisibleGround, groundImage;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex1.png");
    groundImage = loadImage("ground2.png")
}

function setup() {
    createCanvas(800, 500);

    trex = createSprite(50, 160, 20, 50);
    trex.addAnimation("running", trex_running);
    
    edges = createEdgeSprites();
    trex.scale = 0.5;
    trex.x = 50;
    //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
    
}

function draw() {
    background("white");
    ground.velocityX = -2
    if (ground.x<0){
        ground.x = ground.width/2;
      }
      
      //jumping the trex on space key press
      if(keyDown("space")) {
        trex.velocityY = -10;
      }
      
      trex.velocityY = trex.velocityY + 0.8
      
     
     //stop trex from falling down 
      trex.collide(ground);
      drawSprites();
    }
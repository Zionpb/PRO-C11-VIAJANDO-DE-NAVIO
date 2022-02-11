
function preload(){
 var sea
  sea = createSprite(200,200,2,2);
 seaimg = loadImage("sea.png");
  var ship;
ship = createSprite (200,200,20,20);

shipimg = loadAnimation("ship-1.png, ship-2.png, ship-3.png, ship-4.png")
}

function setup(){
  createCanvas(400,400);
  ship.scale=0.2
 ship.addImage(shipimg);
 sea.addImage(seaimg);

  
}

function draw() {
  background("blue");
    drawSprites();
sea.velocityX=1;
if(sea.x < 0){
  sea.x = sea.width/2;
}
 
}

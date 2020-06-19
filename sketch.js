var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)

  speed =random(223,321);
  weight =random(30,52)
  
  wall = createSprite(1200,200,thickness,height/2);
  bullet = createSprite(50,200,5,10);
  bullet.velocityX = speed;
}


function draw() {
  background(255,255,255); 
  if (bullet.collide(wall)){
  Damage= (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  if (Damage>10){
    wall.shapeColor = "red";
  }
  
  
  else if (Damage<10){
    wall.shapeColor = "green";
  }

  } 
  
  drawSprites();
}
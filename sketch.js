var car,wall
var speed,weight
var bullet,



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

car=createSprite(50,200,50,50)
car.velocityX=speed;
wall=createSprite(1500,200,60,height/2)

  speed=Random(55,90)
  weight=Random(400,1500)
}

function draw() {
  background(255,255,255);  
  

  if (wall.x-car.x < (car. width+wall.width)/2)	
  {
  car . velocityX =0;
  var deformation=0.5*weight * speed* speed/22509;
  if (deformation>180)
  {
  car . shapeColor=color(255, 0,0);
  }
  if (deformation<180 && deformation>100)
  {
  car . shapeColor=color (230, 230, 0);
  }
  If (deformation <100)
  car . shapeColor=color(0, 255,0);
  }


  if(hasCollided(bullet, wall))
{
  bullet. velocityx= 0;
  var damage=0.5 * weight *speed * speed/(thickness *thickness *thickness);

  
  if(damage>10)
  {
  wall. shapeColor.color (255,0,0);
  
  }
  if(damage <10)
  {
  
  wall. shapeColor. color (0, 255, 8) ;
  




  drawSprites()
  }
  
  function hascollided(Lbullet,Lwall)
  {
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  
  {
  return true
  }
  return false;
  
}

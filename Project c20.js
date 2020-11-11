var car,wall
var speed,weight
var wall, thickness;
var bullet, speed, weight;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

car=createSprite(50,200,50,50)
car.velocityX=speed;
wall=createSprite(1200,200,thickness,height/2)

  speed=Random(223,3221)
  weight=Random(30,52)
  thickness=random(22,83)

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
  }
  
drawSprites()
}



function hasCollided(Lbullet, Lwall)
{
bulletRightEdge==1bullet.x +1bullet. width;
wallLeftEdge=1wall.x;
if (bulletRightEdge wallLeftEdge)
{

return true
}
return false;

}
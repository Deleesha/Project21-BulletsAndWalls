var bullet;
var wall,thickness;
var speed , weight;


function setup() {
  createCanvas(1000,400);

  speed = Math.round(random(200,250));

  weight = Math.round(random(30,52));
  
  thickness = Math.round(random(22,83));

  bullet = createSprite(50,200,50,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(750,200,thickness,300);
  wall.shapeColor = "black";

  


}

function draw() {
  background("lightBlue");  

console.log(bullet.velocityX);   


 if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);
 }

      if(damage > 10){
        
        wall.shapeColor = "green";

      }

      if(damage < 10 ){

        wall.shapeColor = "red";
          
      }

  drawSprites();
}

function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

      if(bulletRightEdge>=wallLeftEdge){
        return true
      }
      return false;

}
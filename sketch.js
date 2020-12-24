var R1, R2, R3;
function setup(){
  createCanvas(1200,800);
R2 = createSprite(100,400,40,40);
R2.shapeColor = "green"
R2.debug = true;

R1 = createSprite(400,400,40,40);
R1.shapeColor = "green"
R1.debug = true;

R3 = createSprite(600,400,40,40);
R3.shapeColor = "orange"
R3.visible = false;


R1.velocityX = -5;
R2.velocityX = +5;
}
function draw(){
background(0,0,0);
if(R1.x - R2.x < R1.width/2 + R2.width/2
  && R2.x - R1.x <R1.width/2 + R2.width/2 ){
  R1.velocityX = R1.velocityX * -1
  R2.velocityX = R2.velocityX * -1
  R3.visible = true;
  R1.visible = false;
  R2.visible = false;
};
drawSprites();
}
  
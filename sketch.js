var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400,100,50,20);
  rect2 = createSprite(400,400,10,90);
  rect1.velocityY = 2;
  rect2.velocityY = -2;
  rect1.debug = true;
  rect2.debug = true;
}

function draw() {
  background(255,255,255);  

    bounceOff(rect1,rect2);

    if(isTouching(rect1,rect2)){
      rect1.y = 100;
      rect2.y = 400;
    }
    else{
      rect1.shapeColor = "red";
      rect2.shapeColor = "green";
    }
  drawSprites();
}


var hr, hrAngle 
var mn, mnAngle
var sc, scAngle

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  hr=hour();
  mn=minute();
  sc=second();
}

function draw() {
  background(255,255,255);  
  drawSprites();

  angleMode(DEGREES)
  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr,0,60,0,360)

  push();
  rotate(scAngle)
  //translate(100,100)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle)
  //translate(100,100)
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,100);
  pop();

  push();
  rotate(hrAngle)
  //translate(100,100)
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,150);
  pop();
}
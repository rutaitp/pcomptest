function setup() {
  createCanvas (windowWidth, windowHeight);
  
}

function draw() {
  background (0, 6);
  fill (255);
  ellipse (mouseX, mouseY, 50, 50);
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
  
}
//Exercise 7: Manar Elbeshbishy
//Concept:

//image credits from: https://catskull.net/gameboy-boot-screen-logo.html

let startScreen;
let pressStart = false;
function preload() {
  startScreen = loadImage(
    "https://cdn.glitch.global/00137c6d-eede-4806-a2e0-5824a44fe180/V3qm8z5.gif?v=1701303773566"
  );
}
// runs once at the beginning
function setup() {
  createCanvas(600, 800);
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);

  textSize(20);
  textAlign(CENTER);
  textFont("Courier New");
  fill(121, 224, 121);
  text("press 's' to start", 285, 670);
  
  textSize(20);
  fill(223, 225, 223);
  textFont("Helvetica");
  text("NINTENDO", 300, 80);
  textSize(60);
  textStyle(BOLDITALIC);
  text("GAMEBOY", 300, 130);
  
  
}

// runs once each time the browser window is resized

// runs continuously - main render loop
function draw() {
  gameBoy();
  push();
  noFill();
  stroke(121, 224, 121);
  rect(300,400, 550, 750);
  pop();
  if(pressStart){
    image(startScreen, 218, 197, 165, 165);
  }
  
}

function gameBoy() {
  fill(223, 225, 223);
  rect(width / 2, height / 2, 325, 500, 5, 5, 50, 5);

  fill(65, 115, 142);
  noStroke();
  rect(width / 2, height / 2 - 120, 270, 210, 5, 5, 50, 5);

  fill(118, 184, 100);
  rect(width / 2, height / 2 - 120, 165);
  
  push();
  strokeWeight(2);
  
  stroke(42, 84, 137);
  line(175, 190, 250, 190);
  line(390, 190, 420, 190);
  
  stroke(137, 93, 116);
  line(175, 185, 250, 185);
  line(390, 185, 420, 185);
  pop();

  fill(234, 47, 61);
  ellipse(190, 260, 15);

  fill(203, 212, 207);
  ellipse(206, 490, 90);

  fill(69, 63, 63);
  rect(182, 490, 25, 25, 5, 0, 0, 5);
  rect(206, 490, 25);
  rect(230, 490, 25, 25, 0, 5, 5, 0);
  rect(206, 466, 25, 25, 5, 5, 0, 0);
  rect(206, 514, 25, 25, 0, 0, 5, 5);

  fill(55, 52, 51);
  ellipse(206, 490, 20);
  rect(188, 490, 7, 17, 5, 5, 5, 5);
  rect(179, 490, 7, 17, 5, 5, 5, 5);
  rect(225, 490, 7, 17, 5, 5, 5, 5);
  rect(234, 490, 7, 17, 5, 5, 5, 5);
  rect(206, 463, 17, 7, 5, 5, 5, 5);
  rect(206, 472, 17, 7, 5, 5, 5, 5);
  rect(206, 508, 17, 7, 5, 5, 5, 5);
  rect(206, 517, 17, 7, 5, 5, 5, 5);
  
  
  push();
  fill(203, 212, 207);
  translate(390, 490);
  rotate(60);
  rect(0, 0, 45, 120, 30, 30, 30, 30);
  pop();

  fill(249, 25, 122);
  ellipse(365, 505, 40);
  ellipse(415, 475, 40);
  
  fill(228, 19, 108);
  ellipse(365, 505, 20);
  ellipse(415, 475, 20);


  push();
  fill(103, 99, 96);
  translate(320, 570);
  rotate(65);
  rect(0, 0, 10, 55, 30, 30, 30, 30);
  pop();

  push();
  fill(103, 99, 96);
  translate(260, 570);
  rotate(65);
  rect(0, 0, 10, 55, 30, 30, 30, 30);
  pop();

  push();
  fill(148, 158, 150);
  translate(435, 585);
  rotate(330);
  rect(0, 0, 3, 60);
  pop();

  push();
  fill(148, 158, 150);
  translate(425, 590);
  rotate(330);
  rect(0, 0, 3, 60);
  pop();

  push();
  fill(148, 158, 150);
  translate(415, 595);
  rotate(330);
  rect(0, 0, 3, 60);
  pop();

  push();
  fill(148, 158, 150);
  translate(405, 600);
  rotate(330);
  rect(0, 0, 3, 60);
  pop();

  push();
  fill(148, 158, 150);
  translate(395, 605);
  rotate(330);
  rect(0, 0, 3, 60);
  pop();

  push();
  fill(148, 158, 150);
  translate(385, 610);
  rotate(330);
  rect(0, 0, 3, 60);
  pop();

  
  push();
  fill(101, 129, 138);
  textFont("Helvetica", 12);
  textAlign(CENTER);
  textStyle(BOLD);
  translate(407, 520);
  rotate(330);
  text("B               A ", 0, 0);
  pop();

  push();
  fill(101, 129, 138);
  textFont("Helvetica", 12);
  textAlign(CENTER);
  textStyle(BOLD);
  translate(267, 585);
  rotate(335);
  text("SELECT", 0, 0);
  pop();

  push();
  fill(101, 129, 138);
  textFont("Helvetica", 12);
  textAlign(CENTER);
  textStyle(BOLD);
  translate(330, 585);
  rotate(335);
  text("START", 0, 0);
  pop();
}

function keyPressed() {
  if (key === "S" || key === "s") {
    pressStart = true;
  }
}
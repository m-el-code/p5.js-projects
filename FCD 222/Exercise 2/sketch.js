//Exercise 2: Manar Elbeshbishy

/*The concept I had was to demonstrate the different techniques
required through the different depth and light options of a 
traffic light, as well as a different type and size of traffic
light. I used push and pop functions to isolate the different 
traffic lights and protect against any translations/rotation and
changes I made to each traffic light, and worked on the compostion
by making each traffic light individually*/

// runs once at the beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(153, 204, 255);
}

// runs once each time the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// runs continuously - main render loop
function draw() {
  noStroke();
  //first traffic light
  push();
  fill(253, 222, 18);
  rect(50, 50, 70, 200);
  
 
  rectMode(CENTER);
  fill('yellow');
  rect(85,90,50);
  rect(85, 150, 50);
  rect(85, 210, 50);
  
  
  strokeWeight(3);
  stroke(255);
  
  fill('black');
  ellipse(85, 90, 40);
  ellipse(85, 150, 40);
  
  fill('green');
  ellipse(85, 210, 40);
  pop();
  
  //second traffic light
  
  push();
  translate(200, 0);
  fill(253, 222, 18);
  rect(50, 50, 70, 200);
  
  rectMode(CENTER);
  fill('yellow');
  rect(85,90,50);
  rect(85, 150, 50);
  rect(85, 210, 50);
  
  strokeWeight(3);
  stroke(255);
  fill('black');
  ellipse(85, 90, 40);
  
  fill(255, 255, 51);
  ellipse(85, 150, 40);
  
  fill('black');
  ellipse(85, 210, 40);
  pop();
  
  //third traffic light
  push();
  translate(400, 0);
  fill(253, 222, 18);
  rect(50, 50, 70, 200);
  
  rectMode(CENTER);
  fill('yellow');
  rect(85,90,50);
  rect(85, 150, 50);
  rect(85, 210, 50);
  
  strokeWeight(3);
  stroke(255);
  
  fill('red');
  ellipse(85, 90, 40);
  
  fill('black');
  ellipse(85, 150, 40);
  ellipse(85, 210, 40);
  pop();
  
  //fourth traffic light
  push();
  translate(365, 300);
  rotate(radians(90));
  
  fill(253, 222, 18);
  rect(50, 50, 70, 260);
  
  rectMode(CENTER);
  fill('yellow');
  rect(85,90,50);
  rect(85, 150, 50);
  rect(85, 210, 50);
  rect(85, 270, 50);
  
  strokeWeight(3);
  stroke(255);
  
  fill('black');
  ellipse(85, 90, 40);
  ellipse(85, 150, 40);
  ellipse(85, 210, 40);
  
  fill('red');
  ellipse(85, 270, 40);
  pop();
  
  push();
  stroke('green');
  strokeWeight(4);
  line(265, 385, 285, 385);
  line(285, 385, 275, 375);
  line(285, 385, 275, 395);
  pop();
  
  //fifth traffic light
  
  push();
  
  translate(500, 300);
  rotate(radians(45));
  
  fill(253, 222, 18);
  rect(50, 50, 105, 270);
  
 
  rectMode(CENTER);
  fill('yellow');
  rect(103, 100, 75);
  rect(103, 185, 75);
  rect(103, 270, 75);
  
  
  strokeWeight(3);
  stroke(255);
  
  fill('red');
  ellipse(103, 100, 60);
  
  fill(255, 255, 51)
  ellipse(103, 185, 60);
  
  fill('green');
  ellipse(103, 270, 60);
  pop();
  
}
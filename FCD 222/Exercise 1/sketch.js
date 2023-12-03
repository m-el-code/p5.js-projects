// Exercise 1: Manar Elbeshbishy
//This piece involves a lot of different squared shapes in alignmenet with one another. I chose to create it
//following a certain sequence from the top left corner to the top right corner and going down in a snake pattern

// runs once at the beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
}

// runs once each time the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// runs continuously - main render loop
function draw() {
  
  noStroke();
  
  //row 1
  fill('white');
  rect(0,0, 50);
  rect(95, 0, 30, 50);
  rect(170, 0, 75, 50);
  rect(290, 0, 200, 50);
  
  fill('yellow');
  rect(50, 0, 45, 50);
  rect(245, 0, 45, 50);
  
  fill('red');
  rect(125, 0, 45, 50);
  rect(490, 0, 50);
  
  //row 2
  fill('yellow');
  rect(0, 50, 50);
  rect(95, 50, 225, 50);
  rect(370, 50, 70, 50);
  rect(490, 50, 50);
  
  fill('blue');
  rect(50, 50, 45, 50);
  rect(320, 50, 50);

  fill(251, 247, 245);
  rect(440, 50, 50);
  
  //row3 
  //column 1
  fill('white');
  rect(0, 100, 50, 250);
  
  //column 2
  fill(251, 247, 245);
  rect(50, 100, 45, 30);
  
  fill('yellow');
  rect(50, 130, 45, 80);
  rect(50, 260, 45, 90);
  
  fill('blue');
  rect(50, 210, 45, 50);
  
  //column 3
  fill('white');
  rect(95, 100, 30, 250);
  
  //column 4
  fill(251, 247, 245);
  rect(125, 100, 45, 30);
  rect(125, 320, 45, 30);
  
  fill('yellow');
  rect(125, 130, 45, 80);
  rect(125, 260, 45, 60);
  
  fill('red');
  rect(125, 210, 45, 50);
  
  //column 5 
  fill('white');
  rect(170, 100, 75, 250);
  
  //column 6
  fill('yellow');
  rect(245, 100, 45, 30);
  rect(245, 260, 45, 90);
  
  fill('251, 247, 245');
  rect(245, 130, 45, 80);
  
  fill('blue');
  rect(245, 210, 45, 50);
  
  //column 7
  fill('white');
  rect(290, 100, 40, 30);
  rect(290, 210, 40, 140);
  
  fill('yellow');
  rect(290, 130, 40, 80);
 
  //column 8
  fill('red');
  rect(330, 100, 110, 110);
  rect(330, 265, 110, 85);
  
  fill(251, 247, 245);
  rect(330, 210, 110, 55);
  
  //column 9
  fill('white');
  rect(440, 100, 50, 30);
  rect(440, 210, 50, 140);
  
  fill('yellow');
  rect(440, 130, 50, 80);
  
  //column 10
  fill(251, 247, 245);
  rect(490, 100, 50, 30);
  
  fill('yellow');
  rect(490, 130, 50, 80);
  rect(490, 260, 50, 60);
  
  fill('blue');
  rect(490, 210, 50);  
  rect(490, 320, 50, 30);
  
  //row 4
  fill('yellow');
  rect(0, 350, 50);
  rect(95, 350, 150, 50);
  rect(290, 350, 40, 50);
  rect(490, 350, 50);
  
  fill('red');
  rect(50, 350, 45, 50);
  rect(440, 350, 50);

  fill('blue');
  rect(245, 350, 45, 50);

  fill(251, 247, 245);
  rect(330, 350, 110, 50);

}

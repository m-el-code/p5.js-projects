//Exercise 4: Manar Elbeshbishy

//the concept for this design was using inspiraton from mandala or kaleidocope
//designs to portray the symmetry. I wanted to show that even with the visual 
//shape changing and moving, things will always refelct the same no matter which
//way you look at it.
//I did this through creating a circle made out of small ellipses by maniupulating
//the origin points of the ellipses using the cos and sin functions to create the 
//full circle. I then also wanted it to not be a static image, so in the cos and sin
//functions, I used the frameCount to make it move. I created a fucntion that would
//hold the repeated image, and in the main function, looped it 5 times to iterate the
//image while rotating it so it would be on a different axis each time.

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

// runs once each time the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// runs continuously - main render loop
function draw() {
  background("pink");
  translate(windowWidth / 2, windowHeight / 2);
  
  for(let i=0; i<5; i++){
    rotate(22.5);
    ellipseLoop();
  }
  
}

function ellipseLoop(){
  for (i = 0; i < 360; i += 0.25) {
    const x = (cos(i + frameCount*4) * windowWidth / 4);
    const y = (sin(i) * windowWidth) / 4;
    stroke(i, i, i);
    strokeWeight(2);
    ellipse(x, y, 1);
  }

  for (i = 0; i < 360; i += 0.25) {
    const x = (cos(i) * windowWidth) / 4;
    const y = (sin(i + frameCount*4) * windowWidth / 4);
    stroke(i, i, i);
    strokeWeight(2);
    ellipse(x, y, 1);
  }
}
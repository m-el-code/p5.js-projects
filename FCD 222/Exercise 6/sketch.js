//Exercise 6: Manar ELbeshbishy
//My concept follows the same concept of kaliedoscopes that I have been using. I wanted to create a shape that can be very dynamic, and and different depending on the variables changed. The different parameters can demonstrate complexity or simplicity, depeneding on size and number of points. 
//the code uses cos and sin again, as well as angles to create the shape, and the function takes in the number of points, and the size of the shape, which is how the shape is able to change
function setup() {
  createCanvas(1000, 700);
  angleMode(DEGREES);
  background(220);
}

function draw() {
  
  stroke(0);
  noFill();
  
  push();
  translate(670, 350);
  kaleidoscope(30, 325);
  pop();
  
  push();
  translate(250, 475);
  kaleidoscope(7, 100);
  pop();
  
  push();
  translate(180, 200);
  kaleidoscope(15, 175);
  pop();
  

}

function kaleidoscope(numPoints, radius) {
  for (let i = 0; i < numPoints; i++) {
    let xp1 = cos((360 / numPoints) * i) * radius;
    let yp1 = sin((360 / numPoints) * i) * radius;

    for (let j = i + 1; j < numPoints; j++) {
      let xp2 = cos((360 / numPoints) * j) * radius;
      let yp2 = sin((360 / numPoints) * j) * radius;
      
      line(xp1, yp1, xp2, yp2);
    }
  }
}

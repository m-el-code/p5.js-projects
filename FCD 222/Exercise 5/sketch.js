//Exercise 5: Manar Elbeshbishy
/*This compostion was inspired by the binary system of computers, and the complexity of how they work. The circles and squares represent the '0' and '1's and creating the basic shape of the square show how arranging them in certain position can create something larger than its basic components
I made this using arrays to hold and iterate through the coordinates of where each object should be drawn.*/



let verticalArray = new Array(100);
let horizontalArray = new Array(100);
let i = 0;

function setup() {
  createCanvas(800, 800);
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);

  frameRate(15);

  let coordV = 0;
  for (let i = 0; i < 100; i++) {
    verticalArray[i] = coordV;
    coordV += 5;
  }

  let coordH = 0;
  for (let j = 0; j < 100; j++) {
    horizontalArray[j] = coordH;
    coordH += 5;
  }
}

function draw() {
  translate(150, 150);
  noFill();
  stroke(255);

  for (let j = 0; j < 100; j += 5) {
    stroke(random(255));
    if (i % 2) {
      ellipse(verticalArray[j], horizontalArray[i], 20);
    } else {
      rect(verticalArray[j], horizontalArray[i], 20);
    }
  }

  if (i < 100) {
    i++;
  } else {
    i = 0;
  }
}

//Exercise 3: Manar Elbeshbishy

//the concept of my code is to represent duality in a way that involves contrasting colours
//it shows how things can change, and be opposite, even if you cant see it immediately and
//in the blink of an eye.
//if you move the cursor along the black arrow going through the circles, you will see
//the colours change to represent this duality

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(201, 201, 201);
}

// runs once each time the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// runs continuously - main render loop
function draw() {
  let x = width / 2;
  let y = height / 2;
  noStroke();
  if (mouseY > y - 10 && mouseY < y + 10) {
    if (
      (mouseX > x - 300 && mouseX < x - 250) ||
      (mouseX > x + 250 && mouseX < x + 300)
    ) {
      fill(45, 72, 91);
      ellipse(x, y, 600);
    } else {
      fill(250, 0, 111);
      ellipse(x, y, 600);
    }

    if (
      (mouseX > x - 250 && mouseX < x - 200) ||
      (mouseX > x + 200 && mouseX < x + 250)
    ) {
      fill(125, 155, 168);
      ellipse(x, y, 500);
    } else {
      fill(250, 109, 111);
      ellipse(x, y, 500);
    }

    if (
      (mouseX > x - 200 && mouseX < x - 150) ||
      (mouseX > x + 150 && mouseX < x + 200)
    ) {
      fill(143, 171, 179);
      ellipse(x, y, 400);
    } else {
      fill(250, 143, 111);
      ellipse(x, y, 400);
    }

    if (
      (mouseX > x - 150 && mouseX < x - 100) ||
      (mouseX > x + 100 && mouseX < x + 150)
    ) {
      fill(170, 188, 202);
      ellipse(x, y, 300);
    } else {
      fill(250, 185, 111);
      ellipse(x, y, 300);
    }

    if (
      (mouseX > x - 100 && mouseX < x - 50) ||
      (mouseX > x + 50 && mouseX < x + 100)
    ) {
      fill(197, 219, 241);
      ellipse(x, y, 200);
    } else {
      fill(250, 219, 111);
      ellipse(x, y, 200);
    }

    if ((mouseX > x - 50 && mouseX < x) || (mouseX > x && mouseX < x + 50)) {
      fill(225, 246, 255);
      ellipse(x, y, 100);
    } else {
      fill(250, 239, 111);
      ellipse(x, y, 100);
    }
  } else {
    fill(250, 0, 111);
    ellipse(x, y, 600);

    fill(250, 109, 111);
    ellipse(x, y, 500);

    fill(250, 143, 111);
    ellipse(x, y, 400);

    fill(250, 185, 111);
    ellipse(x, y, 300);

    fill(250, 219, 111);
    ellipse(x, y, 200);

    fill(250, 239, 111);
    ellipse(x, y, 100);
  }

  fill("black");
  rectMode(CENTER);
  rect(x, y, 680, 20);
  triangle(x + 360, y, x + 320, y - 20, x + 320, y + 20);
}

let wave = [];
let numPoints = 100;
let waveHeight = 100;
let isMouseMoving = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numPoints; i++) {
    wave[i] = createVector(i * width / (numPoints - 1), height / 2);
  }
}

function draw() {
  background("lightblue");


  let distance = dist(mouseX, mouseY, pmouseX, pmouseY);

  if (distance > 1) {
    isMouseMoving = true;
    for (let i = 0; i < numPoints; i++) {
      let dx = wave[i].x - mouseX;
      let dy = wave[i].y - mouseY;
      let d = dist(wave[i].x, wave[i].y, mouseX, mouseY);
      let offset = waveHeight * sin(d / 50) * (1 / (d + 1));
      wave[i].y += offset;
    }
  } else {
    isMouseMoving = false;
  }

  if (!isMouseMoving) {
    for (let i = 0; i < numPoints; i++) {
      wave[i].y = height / 2;
    }
  }

  noFill();
  stroke("white");
  strokeWeight(5);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();

  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();

  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();

  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
  translate(0,25);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    vertex(wave[i].x, wave[i].y);
  }
  endShape();
}
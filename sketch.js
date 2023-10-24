let wave = [];
let numPoints = 100;
let numLines = 10;
let waveHeight = 100;
let isMouseMoving = false;
let showImage = false;
let count = 0;

let boatImg;
let lightningImg;

function preload() {
  boatImg = loadImage("boat.jpg");
  lightningImg = loadImage("lightning.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // create wave vectors
  for (let i = 0; i < numPoints; i++) {
    wave[i] = createVector(i * width / (numPoints - 1), height / 2);
  }
  frameCount = 0

  // default rotation of 90 degrees
  imageRotation = PI / 180 * 90
  imageMode(CENTER);
  
}

function draw() {
  background("lightblue");
  
  frameCount = frameCount + 1
  // frame internal
  interval = 10
  
  
  // detect every 10 seconds
  if (frameCount >= interval) {
    frameCount = 0

    // detect if mouse moved
    let distance = dist(mouseX, mouseY, pmouseX, pmouseY);
    let isMouseMoving = false;
    if (distance > 0) {
      isMouseMoving = true;
    }

   
    if (isMouseMoving) {
      // if mouse moved, apply coscine function to the vectors
      for (let i = 0; i < numPoints; i++) {
        let offset = 10 * sin((i + mouseX) * 1 / 2) ;
        wave[i].y += offset;
      }

      // also randomly rotate image
      boatRotate = Math.random() * 100 - 50; // -50 to 50
      imageRotation = imageRotation + PI / 180 * boatRotate;
    } else {

      // if mouse is not moved, dedefault back to vestor and orginal rotation
      for (let i = 0; i < numPoints; i++) {
        wave[i].y = height / 2;
      }
      imageRotation = PI / 180 * 90
    }
    
  }

  
  // show lightning image only if mouse is clicked, show for 50 frames
  if (showImage) {
    image(lightningImg, width / 5, height / 5, 200, 200);
    image(lightningImg, width / 5 * 4, height / 5, 200, 200);
    count = count + 1
    if (count == 50) {
      showImage = false
      count = 0
    }
  }
  
  // show boat
  push();
  imageSize = 250
  translate(width / 2, height / 2 - imageSize / 2 + 10);
  rotate(imageRotation);
  image(boatImg, 0, 0, imageSize, imageSize);
  pop();

  
  // show wave with vertex
  noFill();
  stroke("white");
  strokeWeight(5);
  for (let j = 0; j < numLines; j++) {
    // make sure the lines don't cross connect
    beginShape();
    for (let i = 0; i < numPoints; i++) {
        vertex(wave[i].x, wave[i].y + j * 50);
    }
    endShape();
  }
} 

function mouseClicked() {
  // update show lightning image to true when mouse is clicked
  showImage = true
}
let slider = document.getElementsByClassName("slider");
let red = 200;
let green = 90;
let blue = 100;
let radius = 100;
let lines = 1;
let amount = 1;
document.addEventListener("keydown", (event) => {
  if (event.key == "s") {
    saveImage();
  }
});

slider.forEach((element) => {
  element.addEventListener("input", () => {
    switch (element.id) {
      case "red":
        red = element.value;
        break;
      case "green":
        green = element.value;
        break;
      case "blue":
        blue = element.value;
        break;
      case "lines":
        lines = element.value;
        break;
      case "amount":
        amount = element.value;
        break;
    }
  });
});

function setup() {
  frameRate(120);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  translate(windowWidth / 2, windowHeight / 2);
  clear();
  DrawSphere(radius, amount, true);
}

function saveImage() {
  saveCanvas("canvasImage", "png");
}

function DrawSphere(radius, amount, left) {
  if (amount > 0) {
    stroke(red, green, blue, 100);
    strokeWeight(2);
    noFill();
    for (let i = 0; i < lines; i++) {
      push();
      if (left) {
        rotate(
          ((sin(frameCount + ((i * 10) / 1080) * 1000) * 200) / 1000) * 200
        );
      } else {
        rotate(
          ((cos(frameCount + ((i * 10) / 1080) * 1000) * 200) / 1000) * 200
        );
      }
      rect(0, 0, radius, radius, radius / 5);
      pop();
    }
    DrawSphere(radius + 100, amount - 1, left ? false : true);
  }
}

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 900;
cnv.height = 700;

let frame = 0;

// ID
let rainbow = document.getElementById("rainbow");

// Clouds
function cloud(c, x, y, r) {
  ctx.fillStyle = c;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

// Balloons
function getBalloon() {
  var circle = {
    x: Math.random() * cnv.width,
    y: Math.random() * cnv.height,
    radius: Math.random() * 40 + 10,
    colour: "pink",
    ySpeed: 0.5,
  };
  return circle;
}

var allBalloons = [];

for (let i = 0; i < 100; i++) {
  allBalloons.push(getBalloon());
}

function drawBalloon(allBalloons) {
  for (let i = 0; i < allBalloons.length; i++) {
    ctx.fillStyle = allBalloons[i].colour;
    ctx.beginPath();
    ctx.arc(
      allBalloons[i].x,
      allBalloons[i].y,
      allBalloons[i].radius,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}

// Animation
requestAnimationFrame(draw);

function draw() {
  frame++;

  // Balloon
  ctx.fillStyle = "#8fb8de";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  drawBalloon(allBalloons);

  requestAnimationFrame(draw);

  if (frame == 360) {
    frame = 0;
    // console.log(frame);
  }

  for (let i = 0; i < allBalloons.length; i++) {
    allBalloons[i].y -= allBalloons[i].ySpeed;

    if (allBalloons[i].y <= -50) {
      allBalloons[i].y = 770;
    }
  }

  // Rainbow
  ctx.drawImage(rainbow, 100, 200, 700, 500);

  // Cloud
  cloud("#f7f7f7", 25, 302, 120);
  cloud("#f0f0f0", 75, 459, 120);
  cloud("#e1e4e6", 314, 663, 100);
  cloud("#f6f6f6", 200, 604, 125);
  cloud("white", 37, 618, 127);

  cloud("#edf5f5", 666, 29, 110);
  cloud("#fafafa", 832, 110, 129);
  cloud("#f0f2f2", 875, 237, 120);

  cloud("#f0f5f5", 790, 651, 125);
  cloud("#fafafa", 850, 506, 129);

  // Cloud Speed
  if (tDown) {
    for (let i = 0; i < allBalloons.length; i++) {
      allBalloons[i].ySpeed += 0.2;

      if (allBalloons[i].ySpeed > 2.0) {
        allBalloons[i].ySpeed == 2.0;
        break;
      }
    }
  }
}

// Keyboard Events
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  if (event.code == "KeyT") {
    tDown = true;
  }
}

document.addEventListener("keyup", keyupHandler);

function keyupHandler(event) {
  if (event.code == "KeyT") {
    tDown = false;
  }
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvas_width = window.innerWidth - 20;
const CANVAS_HEIGHT = 480;

let player;
const playerIMG = new Image();
playerIMG.src = "ballman.png";
let holes;
let gameOver;       //
let gameScore;      // Initialized in gameStart()
let gameSpeed;      //
let gameSpeedMultiplier;
let randProbability;

let spaceKey;
let keyPressed = false;

document.addEventListener("keydown", event => {
  if (event.key === " ") {
    spaceKey = true;
  }
}); 
document.addEventListener("keyup", event => {
  if (event.key === " ") {
    spaceKey = false;
  }
});

//Function pause, to use with 'async' and 'await'
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

async function asyncTyper(div, input) {
    for (let i = 0; i < input.length; i++)
    {
        div.innerHTML +=  input[i];
        await sleep(40);
    }
}

function decToBin(dec) {
  return (dec >>> 0).toString(2);
}

function Main() {
  let browserName;
  if(navigator.userAgent.match(/chrome|chromium|crios/i)){
      browserName = "chrome";
    }else if(navigator.userAgent.match(/firefox|fxios/i)){
      browserName = "firefox";
    }  else if(navigator.userAgent.match(/safari/i)){
      browserName = "safari";
    }else if(navigator.userAgent.match(/opr\//i)){
      browserName = "opera";
    } else if(navigator.userAgent.match(/edg/i)){
      browserName = "edge";
    }else{
      browserName="unknown";
    }

  document.getElementById("userAgent").innerHTML = browserName + "@";
  document.getElementById("userIP").innerHTML = "84.16.76.229";

  sleep(200).then(() => {
    gameStart();
  });
}

function gameStart() {
  player = new Player((canvas_width-playerIMG.width)/2, CANVAS_HEIGHT-240, playerIMG);
  holes = [];
  holes.push(new Hole());

  gameOver = false;
  gameScore = 0;
  gameSpeed = 10;
  gameSpeedMultiplier = 1;
  randProbability = 1;

  loop();
}

function loop() {
  let animReq = requestAnimationFrame(loop);

  gameSpeed += 0.001;
  randProbability += 0.001;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  canvas_width = window.innerWidth - 20;
  canvas.width = canvas_width;


  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1280, 720);

  ctx.fillStyle = "#1FC742";
  ctx.fillRect(0, CANVAS_HEIGHT-100, canvas_width, 2);

  gameSpeedMultiplier = canvas.width / 1900;
 
  if (holes.length > 0 && holes[holes.length-1].x < canvas.width - 192 * 2) {
    randomHoleGenerator();
  }

  for (let i = 0; i < holes.length; i++) {
    holes[i].update();
    if (holes[i].x < player.x + player.width / 2 &&
        holes[i].x + holes[i].width > player.x - player.width / 2 &&
        holes[i].y < player.y + player.height &&
        holes[i].height + holes[i].y > player.y) {
          player.falling = true;
        }
  }

  player.update();

  drawScore(128, 40);

  if (gameOver) {
    cancelAnimationFrame(animReq);
    alert("Score: " + gameScore);
    gameStart();
  }
}
function Player(x, y, img) {
  this.x = x;
  this.y = y;
  this.width = img.width;
  this.height = img.height;
  this.image = img;
  this.speedY = 0;
  this.maxSpeed = 16;
  this.jumping = false;
  this.isGrounded = false;
  this.timer = 0;
  this.rotation = 0;
  this.falling = false;

  this.update = function () {
      // Set player to center
      this.x = (canvas_width-playerIMG.width)/2;

      if (!this.falling) {
        // Movement
      if (spaceKey && !keyPressed && !this.jumping && this.isGrounded) {
        keyPressed = true;
        this.jumping = true;
      } else if (!spaceKey && keyPressed) {
        keyPressed = false;
      }
      this.jump();

      // Gravity
      if (!this.jumping && !this.isGrounded && this.y + this.height <= CANVAS_HEIGHT-110) {
        if (this.speedY < this.maxSpeed) {
          this.speedY++;
        } 
      } else if (!this.jumping && this.y + this.height >= CANVAS_HEIGHT-110) {
        this.speedY = 0;
        this.y = CANVAS_HEIGHT-100-this.height;
      }

      if (this.y + this.height >= CANVAS_HEIGHT-110) {
        this.isGrounded = true;
      } else {
        this.isGrounded = false;
      }
    } else {
      if (this.speedY < this.maxSpeed) {
        this.speedY++;
      } 
    }

    this.y += this.speedY;

    if (this.rotation < 360) {
      this.rotation += gameSpeed * gameSpeedMultiplier;
    } else {
      this.rotation = 0;
    }

    if (player.y > CANVAS_HEIGHT * 2) {
      gameOver = true;
    }

    this.draw();
  }

  this.draw = function() {
    drawImage(ctx, this.image, this.x, this.y, this.width, this.height, this.rotation);
  }

  this.jump = function() {
    if (this.jumping) {
      if (this.speedY > -this.maxSpeed) {
        this.speedY--;
        } else {
          this.jumping = false;
        }
    }
  }
}

function drawImage(ctx, image, x, y, w, h, degrees){
  ctx.save();
  ctx.translate(x+w/2, y+h/2);
  ctx.rotate(degrees*Math.PI/180.0);
  ctx.translate(-x-w/2, -y-h/2);
  ctx.drawImage(image, x, y, w, h);
  ctx.restore();
}

function Hole() {
  this.x = canvas_width;
  this.y = CANVAS_HEIGHT-101;
  this.width = 192;
  this.height = 12;
  this.speed = gameSpeed * gameSpeedMultiplier;
  this.jumpedOver = false;

  this.update = function () {
    this.speed = gameSpeed * gameSpeedMultiplier;
    this.x -= this.speed;

    if (!this.jumpedOver && player.x > this.x + this.width) {
      addScore(1);
      this.jumpedOver = true;
    }

    this.draw();
  }

  this.draw = function () {
    ctx.fillStyle = "#010101";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function randomHoleGenerator() {
  let rand = Math.floor(Math.random() * 100);
  if (rand < randProbability) {
    holes.push(new Hole());
  }
}

function addScore(points) {
  gameScore += points;
}

function drawScore(x, y) {
  ctx.fillStyle = "white";
  ctx.font = "48px Ubuntu";
  ctx.fillText(decToBin(gameScore).toString(), x, y);
}
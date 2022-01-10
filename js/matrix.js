let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;

let player;
let matrix = [];
let idCounter = 0;
let gameSpeed = 60;
let gameScore = [0, 0, 0, 0, 0, 0, 0, 0];

let leftArrow;
let rightArrow;
let enterKey;
let keyPressed;

let frames = 1;
let timer = 0;

document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") {
    leftArrow = true;
  } else if (event.key === "ArrowRight") {
    rightArrow = true;
  } else if (event.key === "Enter") {
    enterKey = true;
  }
}); 
document.addEventListener("keyup", event => {
  if (event.key === "ArrowLeft") {
    leftArrow = false;
  } else if (event.key === "ArrowRight") {
    rightArrow = false;
  } else if (event.key === "Enter") {
    enterKey = false;
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
  document.getElementById("userIP").innerHTML = "84.16.76.229 ~$";

  sleep(200).then(() => {
    player = new Player(640, 600);
    loop();
  });
}

function loop() {
  requestAnimationFrame(loop);
  if (!(frames%60)) {
    timer++;
  }
  if (frames > 600) {
    frames = 1;
  } else {
    frames++;
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1280, 720);

  player.update();

  if (!(frames%10)) {
    matrix.push(new MatrixLetter("0", Math.floor(Math.random() * 1280)));
    matrix.push(new MatrixLetter("1", Math.floor(Math.random() * 1280)));
  }

  matrix.forEach(element => {
    element.update();
    if (element.x < player.x + player.width &&
        element.x + element.width > player.x &&
        element.y < player.y + player.height &&
        element.y + element.height > player.y) {
          player.color = "red";
        }
  });

  for (let a = 0; a < matrix.length; a++) {
    for (let b = 0; b < matrix.length; b++) {
      if (matrix[a].id != matrix[b].id &&
          matrix[a].y - matrix[b].y < 16 &&
          matrix[a].y - matrix[b].y > -16 &&
          matrix[a].x - matrix[b].x < 16 &&
          matrix[a].x - matrix[b].x > -16) {
            matrix.splice(a, 1);
      }
    }
  }

  printArrayToCanvas(gameScore, 20, 40);
}

function incrementBinaryArray(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[array.length - i - 1] && !array[array.length - i - 2]) {
      array[array.length - i - 2] = 1;
      array[array.length - i - 1] = 0;
      break;
    } else if (!array[array.length - i - 1]) {
      array[array.length - i - 1] = 1;
      break;
    }
  }
}


function printArrayToCanvas(array, x, y) {
  ctx.font = "32px Ubuntu Mono";
  ctx.fillStyle = "white";

  for (let i = 0; i < array.length; i++) {
    ctx.fillText(array[i], x+16*i, y);
  }
}

function binaryToInt(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      sum += Math.pow(2, array.length-i)/2;
    }
  }
  console.log(sum);
}

function Player(x, y) {
  this.x = x;
  this.y = y;
  this.width = 24;
  this.height = 40;
  this.color = "yellow";

  this.update = function () {
    if (leftArrow && !rightArrow) {
        keyPressed = true;
        this.x -= 2;
    } else if (rightArrow && !leftArrow) {
        keyPressed = true;
        this.x += 2;
    }
    
    if (!leftArrow && !rightArrow) {
      keyPressed = false;
    }

    this.draw();
  }

  this.draw = function () {
    ctx.font = "16px Ubuntu Mono";
    ctx.fillStyle = this.color;
    ctx.fillText(" 0", this.x, this.y);
    ctx.fillText("/|\\", this.x, this.y+16);
    ctx.fillText("/ \\", this.x, this.y+32);
  }
}

function MatrixLetter(letter, x) {
  this.id = idCounter;
  idCounter++;
  this.x = x;
  this.y = 0;
  this.letter = letter;
  this.width = 16;
  this.height = 32;
  this.color = "green";
  this.speed = gameSpeed;

  this.update = function () {
    this.y += 4;

    if (this.y > CANVAS_HEIGHT) {
      matrix.shift();
    }

    this.draw();
  }

  this.draw = function () {
    ctx.fillStyle = this.color;
    ctx.font = this.height + "px Ubuntu Mono";
    ctx.fillText(this.letter, this.x, this.y);
  }
}
//Create drawing variables
var canvas;
const canvasWidth = 720;
const canvasHeight = 480;
var ctx;

//Create key input variables
let upKey = false;
let rightKey = false;
let downKey = false;
let leftKey = false;
let click = false;

//Create game variables
var player;

//Frame counter
var timer = false;
var timerTick = 0;
var frames = 0;
var framesNow = 0;
let gameStartFrames = 0;

const groundWidth = 40;

let gameSpeed = 6;
let gameScore = 0;

let playButtonPressed = false;
let gameRequestAnim;

let menuLoop = true;
let isReplay = false;

window.onload = start;

function start() {
    canvas = document.getElementById("game-canvas");
    //canvas.onselectstart = function () { return false; } // unables text select outside of canvas
    ctx = canvas.getContext("2d");
    
    menu()
}

function menu() {
    canvas.addEventListener('mousedown', clickOnCanvas);

    ctx.drawImage(MenuBackgroundIMG, 0, 0);

    roundRect(ctx, 215, 175, 300, 120, 20, 'rgba(0,0,0, 0.7)', 'rgba(0,0,0, 0.5)', 8);
    ctx.fillStyle = "white";
    ctx.font = 60 + "px 'Press Start 2P'";
    ctx.fillText("PLAY", 250, 270);

    if (!menuLoop) { gameStartAnimation();}
}

function replay() {
    roundRect(ctx, 195, 280, 342, 70, 20, 'rgba(50,50,50, 0.8)', 'rgba(50,50,50, 0.6)', 8);
    ctx.fillStyle = "white";
    ctx.font = 30 + "px 'Press Start 2P'";
    ctx.fillText("PLAY AGAIN", 220, 332); 
}

function gameStartAnimation() {
    canvas.removeEventListener('mousedown', clickOnCanvas);
    
    //setupInputs();

    gameRequestAnim = requestAnimationFrame(gameStartAnimation);
    ++gameStartFrames;
    let zoom = 1 + gameStartFrames*10;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.drawImage(MenuBackgroundIMG, 0, 0);

    roundRect(ctx, 215-zoom/2, 175-zoom/2, 300+zoom, 120+zoom, 20, 'rgba(0,0,0, ' + 0.7*zoom + ')', 'rgba(0,0,0, 0.5)', 8);  //Draws zooming button

    ctx.fillStyle = "white";
    ctx.font = (60+zoom*2) + "px 'Press Start 2P'";
    ctx.fillText("PLAY", 250-zoom*3-gameStartFrames, 270+zoom); //Draws zooming text

    if (gameStartFrames >= 110)
    {
        cancelAnimationFrame(gameRequestAnim);
        gameStart();
    }
}

function gameStart() {
    player = new Player("Me", 160, 320);
    background1 = new Background(0, 0);
    background2 = new Background(720, 0);
    foreground1 = new Foreground(0, 0, gameSpeed);
    foreground2 = new Foreground(720, 0, gameSpeed);


    canvas.addEventListener('mousedown', gameClicker);
    canvas.addEventListener('touchstart', gameClicker);
    document.addEventListener('keydown', spaceBar);

    mainLoop();
}

function mainLoop() {
    requestAnimationFrame(mainLoop);
    ++framesNow;
    ++frames;
    framesReset();
    //incrementGameSpeed(1, 5);

    ctx.setTransform(1,0,0,1,0,0);//reset the transform matrix as it is cumulative
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);//clear the viewport AFTER the matrix is reset
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight); //sets background to gray

    background1.step();
    background1.draw();
    background2.step();
    background2.draw();

    foreground1.step();
    foreground1.draw();
    foreground2.step();
    foreground2.draw();

    for (let i = 0; i < enemies.length; i++)
    {
        enemies[i].step();
        enemies[i].draw();
        enemies[i].autoDestroy();
    }

    randEnemyMaker(0);

    player.step();
    player.draw();

    //drawSeconds();

    if (player.active) {
        setScore();
        drawScore();
    } else {
        ++player.deathCounter;
    }
    click = false;
}

/*// Set input bools
function setupInputs() {
    // When key is pressed
    document.addEventListener("touchstart", function(event) {
        click = true;
    });
    // When key is released
    click = false;

}*/

// Resets frames to zero (60frames = 1 second)
function framesReset() {
    if (framesNow >= 60)
    {
        framesNow = 0;
    }
}

// Draw seconds to canvas
function drawSeconds(){
    ctx.font = "24px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(Math.ceil(frames/60), 30, 40);
}

// Draw seconds to canvas
function setScore(){
    if (framesNow === 0 || framesNow === 15 || framesNow === 30 || framesNow === 45)
    {
        gameScore++;
    }
}

// Draw score to canvas
function drawScore(){
    ctx.font = "20px 'Press Start 2P'";
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + gameScore, 260, 42);
}


// Returns a random integer
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


// Creates a roundRect
function roundRect(ctx, x, y, width, height, radius, fill, stroke, strokeWidth) {
    if (typeof stroke == "undefined" ) {
      stroke = true;
    }
    if (typeof strokeWidth == "undefined") {
       strokeWidth = true; 
    }

    if (typeof radius === "undefined") {
      radius = 5;
    }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    if (strokeWidth > 0) {
        ctx.lineWidth = strokeWidth;
    }     
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.stroke();
    }
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
}


// For collision detections
function checkCollision(r1, r2) {
    if (r1.x >= r2.x + r2.width) {
        return false;
    } else if (r1.x + r1.width <= r2.x) {
        return false;
    } else if (r1.y >= r2.y + r2.height) {
        return false;
    } else if (r1.y + r1.height <= r2.y) {
        return false;
    } else {
        return true;
    }
}

function clickOnCanvas(e) {
    playButtonClick(canvas, e);
}

// Executed on menu play button
function playButtonClick(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = Math.floor(event.clientY - rect.top);
    
    if (!playButtonPressed && x > 217 && x < 519 && y > 177 && y < 300)
    {
        gameStartAnimation();
    }
}

function gameClicker(e) {
    gameClick(canvas, e);
}

// Click to inverse grav control
function gameClick(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = Math.floor(event.clientY - rect.top);

    click = true;
}

function replayClicker(e) {
    replayClick(canvas, e);
}

function replayClick(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = Math.floor(event.clientY - rect.top);
    
    if (x > 195 && x < 195+342 && y > 280 && y < 280+70)
    {
        location.reload();
    }
}

function spaceBar(e) {
    if (e.code === 'Space') {
        click = true;
    }
}

// Logs cursor position on canvas in the console
function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = Math.floor(event.clientY - rect.top);
    console.log("x: " + x + " y: " + y);
}

// Increments gameSpeed by x every y seconds
function incrementGameSpeed(increment, seconds) {
    if (frames%(60*seconds) === 0 && player.active)
    {
        gameSpeed += increment;
    }
}

/*function randEnemyMaker(type) {
    enemies.push(new Enemy(type, 700, randomInt(67-30, 413-30), 30, 30));
}*/

function randEnemyMaker(type) {
    if (randomInt(0, 50) === 1) //If randomInt gives 1, execute code below (2% chance to execute below)
    {
        enemies.push(new Enemy(0, 800, randomInt(68, 400), 20, 20));
    }
}
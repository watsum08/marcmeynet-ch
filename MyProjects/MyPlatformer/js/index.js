//Create drawing variables
var canvas;
const canvasWidth = 1280;
const canvasHeight = 720;
var ctx;

//Create key input variables
let upKey = false;
let rightKey = false;
let downKey = false;
let leftKey = false;
let spaceBar = false;
let shiftKey = false;
let enterKey = false;

//Create game variables
var player;
var orangeEnemy;

//Frame counter
var timer = false;
var timerTick = 0;
var frames = 0;
var framesNow = 0;

const groundWidth = 40;

window.onload = start;

function start() {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    setupInputs();
    
    menu();
}

function gameStart() {
    //Sets/draws canvas to white
    clearInterval(t);

    //Creates a Player
    player = new Player("Zon", 500, 400);
    
    //Creates an Enemy
    orangeEnemy = new Enemy(1100, 300, 50, 50, 1);

    for(let i=0; i < 7; i++){
        waves.push(new Wave(i, i*-128-128, 860));
        console.log("Wave " + i + " created");
    }
    
    mapSetup(0);

    //Setup key listeners;
    setupInputs();

    //Starts game loop
    step();   
}

function step() {
    requestAnimationFrame(step);
    framesNow++;
    frames++;
    if (framesNow === 60){
        framesNow = 0;
        
    }

    player.step();
    if (timer) {
        timerTick++;
    }
    
    //Draw everything
    draw();
}

function clamp(value, min, max){
    if(value < min) return min;
    else if(value > max) return max;
    return value;
}

function draw() {
    ctx.setTransform(1,0,0,1,0,0);//reset the transform matrix as it is cumulative
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);//clear the viewport AFTER the matrix is reset

    var cameraX = clamp(-player.x + canvasWidth/2, -9999, map1width - canvasWidth);
    var cameraY = clamp(-player.y + canvasHeight/2, -200, map1height - canvasHeight);
    
    ctx.translate( cameraX, cameraY );

    console.log(cameraX);

    //Reset canvas to BG
    ctx.drawImage(ForestBG1, -900+cameraX/24, 0);
    ctx.drawImage(ForestBG1, 1020+cameraX/24, 0);
    ctx.drawImage(ForestBG1, 2940+cameraX/24, 0);
    ctx.drawImage(ForestBG1_Sky, -900+cameraX/24, -1080);
    ctx.drawImage(ForestBG1_Sky, 1020+cameraX/24, -1080);
    ctx.drawImage(ForestBG1_Sky, 2940+cameraX/24, -1080);

    drawFrames(cameraX, cameraY); //Draws timer

    player.draw();

    //Draw tilemap array
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].draw();
    }
    for (let i = 0; i < waves.length; i++) {
        waves[i].draw();
    }

    orangeEnemy.draw();
}


function drawFrames(camX, camY){
    ctx.font = "24px 'Press Start 2P'"
    ctx.fillStyle = "red";
    ctx.fillText(Math.ceil(frames/60), -camX + 30, -camY + 40);
    ctx.fillStyle = "blue";
    ctx.fillRect(-camX + 30, -camY + 60, (100-(player.shootTimerNow/player.shootTimerMS*100))*2, 20);
    if (player.shootTimer) {
        ctx.strokeStyle = "darkblue";
        ctx.lineWidth = 3;
        ctx.strokeRect(-camX + 30, -camY + 58, 200, 24);
    }
}

// Set input bools
function setupInputs() {
    // When key pressed
    document.addEventListener("keydown", function(event) {
        if(event.key === "ArrowUp") {
            upKey = true;
        } else if(event.key === "ArrowRight") {
            rightKey = true;
        } else if(event.key === "ArrowDown") {
            downKey = true;
        } else if(event.key === "ArrowLeft") {
            leftKey = true;
        }
        if (event.keyCode === 32) {
            spaceBar = true;
        }
        if (event.keyCode === 16) {
            shiftKey = true;
        }
        if (event.keyCode === 13) {
            enterKey = true;
        }
    });
    
    // When key released
    document.addEventListener("keyup", function(event) {
        if(event.key === "ArrowUp") {
            upKey = false;
        } else if(event.key === "ArrowRight") {
            rightKey = false;
        } else if(event.key === "ArrowDown") {
            downKey = false;
        } else if(event.key === "ArrowLeft") {
            leftKey = false;
        }
        if (event.keyCode === 32) {
            spaceBar = false;
        }
        if (event.keyCode === 16) {
            shiftKey = false;
        }
        if (event.keyCode === 13) {
            enterKey = false;
        }
    });
}

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

function enemySquish(r1, r2) {
    if ( r1.x <= r2.x + r2.width &&
        r1.x + r1.width >= r2.x &&
         r1.y <= r2.y + r2.height &&
         r2.y - r2.height - r1.y <= r2.height){
        return true;    
    } else {
        return false;
    }
}
function Player(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.friction = 0.6;
    this.maxSpeed = 16;
    this.width = 54;
    this.height = 96;
    this.active = true;
    this.touchGround = false;
    this.midAir = false;
    this.midAirReset = false;
    this.goingLeft = false;
    this.goingRight = true;
    this.shootTimer = false;
    this.shootTimerMS = 100;
    this.shootTimerNow = 0;

    this.scale = 1;
    this.spriteX = 32;
    this.spriteY = 48;

    this.crouching = false;

    this.spaceBar = false;

    this.shoot = function() {
            if (!this.shootTimer) {
                console.log("Shoot");
                if (this.goingRight) {
                    shots.push(new Shoot(this.x, this.y + 24, 8, 0));
                } else {
                    shots.push(new Shoot(this.x, this.y + 24, -8, 0));
                }
                this.shootTimer = true;
            } else {
                console.log("Shoot recharging : " + Math.floor(100-(this.shootTimerNow/this.shootTimerMS*100)) + " %");
            }
    }

    this.step = function() {
        //Movement
        if (this.active) {
            //Horizontal movement
            if (!leftKey && !rightKey || leftKey && rightKey) {
                //Slow down
                this.xSpeed *= this.friction; //Progressive acceleration
            } else if (!downKey) {
                if (rightKey) {
                    //Move right
                    this.goingRight = true;
                    this.goingLeft = false;
                    this.xSpeed++;
                } else if (leftKey) {
                    //Move left
                    this.goingLeft = true;
                    this.goingRight = false;
                    this.xSpeed--;
                }
            }
            if (shiftKey) {
                this.shoot();
                this.xSpeed = 0;
            }
    
            //Vertical movement
            if (upKey) {
                if (this.touchGround) {
                    this.ySpeed -= 15;
                    console.log(this.name + " jumps from the ground.");
                    this.midAir = true;
                }
            }
            if (!upKey) {
                this.midAirReset = true;
            }
            if (upKey && this.midAir && this.midAirReset) {
                this.ySpeed -= 17;
                console.log(this.name + " jumps mid air.");
                this.midAir = false;
            }
            this.touchGround = false;

            //Gravity
            this.ySpeed += 1;

            //Speed limit
            if (this.xSpeed > this.maxSpeed/4) {
                this.xSpeed = this.maxSpeed/4; //Right max speed
            } else if (this.xSpeed < -this.maxSpeed/4) {
                this.xSpeed = -this.maxSpeed/4; //Left max speed
            }
            if (this.ySpeed > this.maxSpeed) {
                this.ySpeed = this.maxSpeed; //Down max speed
            } else if (this.ySpeed < -this.maxSpeed) {
                this.ySpeed = -this.maxSpeed; //Up max speed
            }
            //Speed value precision, float to int
            if (this.xSpeed > 0) {
                this.xSpeed = Math.floor(this.xSpeed);
            } else {
                this.xSpeed = Math.ceil(this.xSpeed);
            }
            if (this.ySpeed > 0) {
                this.ySpeed = Math.floor(this.ySpeed);
            } else {
                this.ySpeed = Math.ceil(this.ySpeed);
            }

            //Horizontal Rectangle Collision
            let horizontalRect = {
                x: this.x + this.xSpeed,
                y: this.y,
                width: this.width,
                height: this.height
            }

            //Vertical Rectange Collision
            let verticalRect = {
                x: this.x,
                y: this.y + this.ySpeed,
                width: this.width,
                height: this.height
            }

            //Block speed at borders
            /*if (this.x + this.width >= canvasWidth) {
                this.x = canvasWidth-this.width;
            } else if (this.x <= 0) {
                this.x = 0;
            }*/

            //Check for collisions
            for (let i = 0; i <  obstacles.length; i++) {
                let obstacleRect = {
                    x: obstacles[i].x,
                    y: obstacles[i].y,
                    width: obstacles[i].width,
                    height: obstacles[i].height
                }
                if (checkCollision(horizontalRect, obstacleRect)) {
                    while (checkCollision(horizontalRect, obstacleRect)) {
                        horizontalRect.x -= Math.sign(this.xSpeed);
                    }
                    this.x = horizontalRect.x;
                    this.xSpeed = 0;
                }
                if (checkCollision(verticalRect, obstacleRect)) {
                    while (checkCollision(verticalRect, obstacleRect)) {
                        verticalRect.y -= Math.sign(this.ySpeed);
                        this.touchGround = true;
                        this.midAirReset = false;
                        this.midAir = false;
                    }
                    this.y = verticalRect.y;
                    this.ySpeed = 0;
                }
            }

            //Shoot timer delay/restart
            if (this.shootTimer) {
                ++this.shootTimerNow;
                if (this.shootTimerNow >= 100) {
                    this.shootTimerNow = 0;
                    this.shootTimer = false;
                }
            }

            //Enemy Collision
            if (enemySquish(horizontalRect, orangeEnemy)) {
                    orangeEnemy.type = 2;
                    this.ySpeed = -this.ySpeed; 
                    console.log("x: " + orangeEnemy.x + " y: " + orangeEnemy.height);
                    console.log(orangeEnemy.active);
                    console.log(timer);
                    console.log(timerTick);
                    orangeEnemy.destroy();
            }

            //Wave Collision
            for (let i = 0; i <  waves.length; i++) {
                let wavesRect = {
                    x: waves[i].x,
                    y: waves[i].y,
                    width: waves[i].width,
                    height: waves[i].height
                }
                if (checkCollision(horizontalRect, wavesRect)) {
                    this.animate(8);
                    this.xSpeed = this.ySpeed = 0;
                }
            }

            //Apply speed
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        
        }
    }
    
    this.animate = function(animationType) {
        switch (animationType) {
            case 0: //Idle R animation
                ctx.drawImage(playerSprite, 0, 16, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
            break;

            case 1: //Idle L animation
                ctx.drawImage(playerSpriteL, this.spriteX*9, 16, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
            break;
                
            case 2: //Right run animation
                if (framesNow >= 0 && framesNow <= 10){
                    ctx.drawImage(playerSprite, this.spriteX, 16, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 10 && framesNow <= 20) {
                    ctx.drawImage(playerSprite, this.spriteX*2, 16, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 20 && framesNow <= 30) {
                    ctx.drawImage(playerSprite, this.spriteX*3, 16, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 30 && framesNow <= 40) {
                    ctx.drawImage(playerSprite, this.spriteX*4, 16, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 40 && framesNow <= 50) {
                    ctx.drawImage(playerSprite, this.spriteX*5, 16, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 50 && framesNow <= 60) {
                    ctx.drawImage(playerSprite, this.spriteX*6, 16, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                }
            break;
            case 3: //Left run animation
                if (framesNow >= 0 && framesNow <= 10){
                    ctx.drawImage(playerSpriteL, this.spriteX*8, 16, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 10 && framesNow <= 20) {
                    ctx.drawImage(playerSpriteL, this.spriteX*7, 16, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 20 && framesNow <= 30) {
                    ctx.drawImage(playerSpriteL, this.spriteX*6, 16, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 30 && framesNow <= 40) {
                    ctx.drawImage(playerSpriteL, this.spriteX*5, 16, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 40 && framesNow <= 50) {
                    ctx.drawImage(playerSpriteL, this.spriteX*4, 16, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 50 && framesNow <= 60) {
                    ctx.drawImage(playerSpriteL, this.spriteX*3, 16, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
                }
            break;

            case 4: //Attack animation
                if (framesNow >= 0 && framesNow <= 20){
                    ctx.drawImage(playerSprite, this.spriteX*7, this.spriteY*2+48, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 20 && framesNow <= 60) {
                    ctx.drawImage(playerSprite, this.spriteX*8, this.spriteY*2+48, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                }
            break;
            case 5: //Attack L animation
                if (framesNow >= 0 && framesNow <= 30){
                    ctx.drawImage(playerSpriteL, 0, this.spriteY*2+48, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
                } else if (framesNow > 30 && framesNow <= 60) {
                    ctx.drawImage(playerSpriteL, this.spriteX, this.spriteY*2+48, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
                }
            break;

            case 6: //Crouch animation
                if (!this.crouching) {
                    if (framesNow >= 0 && framesNow <= 20){
                        ctx.drawImage(playerSprite, this.spriteX*7, 16, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                    } else if (framesNow > 20 && framesNow <= 40) {
                        ctx.drawImage(playerSprite, this.spriteX*8, 16, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                    } else if (framesNow > 40) {
                        ctx.drawImage(playerSprite, this.spriteX*9, 16, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                        this.height = 64;
                        this.y += 32;
                        this.crouching = true;
                    }
                } else {
                    this.height = 64;
                    ctx.drawImage(playerSprite, this.spriteX*9, 16, this.spriteX, this.spriteY, this.x, this.y, this.width * this.scale + 10, this.height * this.scale);
                }
            break;
            case 7: //Crouch L animation
                if (!this.crouching) {
                    if (framesNow >= 0 && framesNow <= 20){
                        ctx.drawImage(playerSpriteL, this.spriteX*2, 16, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
                    } else if (framesNow > 20 && framesNow <= 40) {
                        ctx.drawImage(playerSpriteL, this.spriteX, 16, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
                    } else if (framesNow > 40) {
                        this.height = 64;
                        this.y += 32;
                        this.crouching = true;
                    }
                } else {
                    this.height = 64;
                    ctx.drawImage(playerSpriteL, 0, 16, this.spriteX, this.spriteY, this.x - 10, this.y, this.width * this.scale + 10, this.height * this.scale);
                }
            break;

            case 8:
                if (framesNow >= 0 && framesNow <= 10){
                    ctx.drawImage(Shark, 0, 0, 128, 32, this.x, this.y+200, this.width * this.scale, this.height * this.scale);
                } else if (framesNow > 10 && framesNow <= 20) {
                    ctx.drawImage(Shark, 0, 0, 128, 32, this.x, this.y+160, this.width * this.scale, this.height * this.scale);
                } else if (framesNow > 20 && framesNow <= 30) {
                    ctx.drawImage(Shark, 0, 0, 128, 32, this.x, this.y+120, this.width * this.scale, this.height * this.scale);
                } else if (framesNow > 30 && framesNow <= 40) {
                    ctx.drawImage(Shark, 0, 0, 128, 32, this.x, this.y+80, this.width * this.scale, this.height * this.scale);
                } else if (framesNow > 40 && framesNow <= 50) {
                    ctx.drawImage(Shark, 0, 0, 128, 32, this.x, this.y+40, this.width * this.scale, this.height * this.scale);
                } else if (framesNow > 50 && framesNow <= 60) {
                    ctx.drawImage(Shark, 0, 0, 128, 32, this.x, this.y, this.width * this.scale, this.height * this.scale);
                }
                ctx.drawImage(Shark, 0, 0, 128, 32, this.x, this.y, this.width * this.scale, this.height * this.scale);
            break;
        }     
    }

    this.draw = function() {
        for (let i = 0; i < shots.length; i++) {
            shots[i].draw();
            let shotRect = {
                x: shots[i].x,
                y: shots[i].y,
                width: shots[i].radius*2,
                height: shots[i].radius*2
            }
            if (shots[i].x > map1width || shots[i].x < 0 ) {
                shots.splice(i, 1);
            } else if (shots[i].y > map1width || shots[i].y < 0) {
                shots.splice(i, 1);
            } for (let o = 0; o <  obstacles.length; o++) {
                let obsRect = {
                    x: obstacles[o].x,
                    y: obstacles[o].y,
                    width: obstacles[o].width,
                    height: obstacles[o].height
                }
                let orangeEnemyRect = {
                    x: orangeEnemy.x,
                    y: orangeEnemy.y,
                    width: orangeEnemy.x,
                    height: orangeEnemy.y
                }
                
                if (checkCollision(obsRect, shotRect)) {
                    shots.splice(i, 1);
                }
                if (checkCollision(orangeEnemyRect, shotRect)) {
                    shots.splice(i, 1);
                    orangeEnemy.destroy();
                }
            }
        }

        //Chooses animation
        if (!downKey && this.height === 64) {
            this.crouching = false;
            this.y -= 32;
            this.height = 96;
        }  

        if (leftKey && !this.crouching && !shiftKey) { 
            this.animate(3);
            console.log("this.animate(3);")
        } else if (rightKey && !this.crouching && !shiftKey) {
            this.animate(2);
            console.log("this.animate(2);")
        } else if (downKey && this.goingRight) {
            this.animate(6);
            console.log("this.animate(6);")
        } else if (downKey && this.goingLeft) {
            this.animate(7);
            console.log("this.animate(7);")
        } else if (shiftKey && this.shootTimerNow < 30) {
            if (this.goingRight) {
                this.animate(4);
                console.log("this.animate(4);")
            } else {
                this.animate(5);
                console.log("this.animate(5);")
            }
        } else if (!leftKey && !rightKey || leftKey && rightKey) {
            if (this.goingRight) {
                this.animate(0);
                console.log("this.animate(0);")
            } else {
                this.animate(1);
                console.log("this.animate(1);")
            }
        }
    }
}
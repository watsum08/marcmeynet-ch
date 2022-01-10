function Player(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.ySpeed = 0;
    this.width = 32;
    this.height = 32;
    this.radius = 8;
    this.active = true;
    this.destroyed = false;
    

    this.inverseGrav = false;
    this.touchGround = false;

    this.scale = 1;
    this.speed = gameSpeed;
    this.maxSpeed = 8;

    this.clickAvailable = true;

    this.rotateFrames = 0;
    this.rotationDegree = 0;

    this.blueRGB = 0;
    this.redRGB = 0;

    this.deathCounter = 0;

    console.log(this.name + " created");

    this.step = function() {
        //Movement
        if (this.active) {

            if (click && this.clickAvailable) {
                if (!this.inverseGrav)
                {
                    this.y -= 1;
                    this.inverseGrav = true;
                    this.clickAvailable = false;
                }
                else if (this.inverseGrav)
                {
                    this.y += 1;
                    this.inverseGrav = false;
                    this.clickAvailable = false;
                }
            } 
            else if (!click)
            {
                this.clickAvailable = true;
            }

            //Gravity
            if (!this.inverseGrav)
            {
                this.ySpeed += 1;
            } else if (this.inverseGrav){
                this.ySpeed -= 1;
            }

            //Block on ground
            if (this.y > 392)
            {
                this.y = 392;
                this.ySpeed = 0;
                this.touchGround = true;
            } else if (this.y < 88)
            {
                this.y = 88;
                this.ySpeed = 0;
                this.touchGround = true;
            } else
            {
                this.touchGround = false;
            }

            //Speed limit
            if (this.ySpeed > this.maxSpeed) {
                this.ySpeed = this.maxSpeed; //Down max speed
            } else if (this.ySpeed < -this.maxSpeed) {
                this.ySpeed = -this.maxSpeed; //Up max speed
            }

            //Speed value precision, float to int
            if (this.ySpeed > 0) {
                this.ySpeed = Math.floor(this.ySpeed);
            } else {
                this.ySpeed = Math.ceil(this.ySpeed);
            }

            //Rotate animation frames
            if (framesNow%(gameSpeed-1))
            {
                if (!this.inverseGrav)
                {
                    if (this.rotateFrames < 17)
                    {
                        ++this.rotateFrames;
                    } else {
                        this.rotateFrames = 0;
                    }
                }
                else
                {
                    if (this.rotateFrames > 0)
                    {
                        --this.rotateFrames;
                    } else {
                        this.rotateFrames = 17;
                    }
                }
            }

            //Create shadow trail effect
            shadows.push(new Shadow(this.x, this.y, 12));
            for (let i = 0; i < shadows.length; i++) {
                shadows[i].autoDestroy();
                shadows[i].step(this.blueRGB, this.redRGB);
                shadows[i].draw(this.width, this.height, this.radius, this.rotationDegree);
            }
            
            //Horizontal Rectangle Collision
            let horizontalRect = {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            }

            //Vertical Rectange Collision
            let verticalRect = {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            }

            //Check for collisions
            for (let i = 0; i <  enemies.length; i++) {
                let enemyRect = {
                    x: enemies[i].x,
                    y: enemies[i].y,
                    width: enemies[i].width,
                    height: enemies[i].height
                }
                if (checkCollision(horizontalRect, enemyRect)) {
                    this.destroy();
                    enemies[i].active = false;
                }
                if (checkCollision(verticalRect, enemyRect)) {
                    this.destroy();
                    enemies[i].active = false;
                }
            }

            //Apply vertical speed(acceleration)
            this.y += this.ySpeed;
        }
        else // When player is destroyed, it animates explosion below
        {
            for (let i = 0; i < 24; i++)
            {
                particles.push(new Particle(this.x, this.y, randomInt(2, 6), randomInt(1,3), randomInt(50, 80)));
                particles[i].step();
                particles[i].draw();
                particles[i].autoDestroy();
            }
        }
    }
    
    this.animate = function(animationType) {
        switch(animationType){
            case 0:
                this.rotationDegree = this.rotateFrames * 10;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotationDegree*Math.PI/180);
                ctx.translate(-this.x-this.width/2, -this.y-this.height/2);
                //ctx.strokeStyle = "rgb(255, 0, 0)";
                roundRect(ctx, this.x, this.y, this.width, this.height, this.radius, true, false);
                //ctx.fillStyle = backgroundColor;
                //ctx.fillRect(this.x+5, this.y+5, this.width-10, this.height-10);
                ctx.restore();
                break;
        }
    }
    //let minY = 197;
    this.draw = function() {
        if (!this.destroyed) {
            let valueColor = (Math.round((this.y/2)/197*100));
            this.redRGB = (Math.round(255/100*valueColor));
            this.blueRGB = (Math.round(255-205/100*valueColor));
            /*if (this.y < minY)
            {
                minY = Math.round(this.y/2);
            }*/
            //console.log(redColor);
            //console.log(blueColor);
            ctx.fillStyle = 'rgb(' + this.blueRGB + ', 0,' + this.redRGB + ')';
            this.animate(0);
        } else {
            if (this.deathCounter > 100) {
                ctx.fillStyle = "white";
                ctx.font = "26px 'Press Start 2P'";
                ctx.fillText("You are dead!", 200, 150);
            }

            if (this.deathCounter > 150) {
                ctx.fillText("Your score is : ", 110, 240);
                ctx.fillStyle = "green";
                ctx.fillText(gameScore, 540, 240);
            }

            if (this.deathCounter > 200) {
                replay();
            }
        }
    }

    this.destroy = function() {
        this.destroyed = true;
        gameSpeed = 0;
        this.active = false;
        canvas.removeEventListener('mousedown', gameClicker);
        canvas.removeEventListener('touchdown', gameClicker);
        document.removeEventListener('keydown', spaceBar);
        canvas.addEventListener('mousedown', replayClicker);
    }
}
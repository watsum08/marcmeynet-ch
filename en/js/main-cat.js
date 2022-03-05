class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.animFrame = 0;
    }

    update() {
        if (this.animFrame < 60) {
            this.animFrame++;
        } else {
            this.animFrame = 0;
        }
    }

    draw() {
        ctx.fillStyle = "#BBB";
        ctx.font = "bold 12px Ubuntu Mono";
        if (this.animFrame < 30) {
            ctx.fillText("/v\\", this.x, this.y);
        } else {
            ctx.fillText("-'v'-", this.x, this.y);
        }
    }
}

class Cat {
    constructor(x, y) {
        this.x = x;
        this.y = 120;
        this.size = 1;
        this.goingLeft;
        this.animFrame = 0;
        this.attacking = false;
        this.preattacking = false;
        this.preattackTimer = 0;
        this.goingDown = false;
        this.goDownTimer = 0;
        this.goDownTime = 0;
        this.movingTimer = 0;
    }

    update() {
        if (this.animFrame < 60) {
            this.animFrame++;
        } else {
            this.animFrame = 1;
        }

        if (bird !== undefined && !(this.animFrame % 6)) {
            if (this.x < bird.x && !this.goingDown) {
                this.goingLeft = false;
                this.x += 12; 
            } else if (this.x > bird.x && !this.goingDown) {
                this.goingLeft = true;
                this.x -= 12;
            } else {
                if (!this.goingDown) {
                    this.attackBird(getRandomInt(20, 40));
                } else {
                    this.goDown();
                }
            }
        }
    }

    draw() {
        ctx.fillStyle = "#EEE";
        ctx.font = "bold 12px Ubuntu Mono";
        if (this.goingLeft && !this.attacking && !this.preattacking && !this.goingDown) {
            ctx.fillText("                  ^'", this.x-48, this.y);
            ctx.fillText("__/|              ||", this.x-48, this.y+12);
            ctx.fillText(').  `,_.-""""-.  //', this.x-48, this.y+12*2);
            ctx.fillText('\\-  /          \\//', this.x-48, this.y+12*3);
            ctx.fillText('`"`\\       /    /', this.x-48, this.y+12*4);
            ctx.fillText('    |    \\ |   /', this.x-48, this.y+12*5);
            ctx.fillText('     \\   /- \\  \\', this.x-48, this.y+12*6);
            ctx.fillText('      || |  // /`', this.x-48, this.y+12*7);
            ctx.fillText('      ((_| ((_/ ', this.x-48, this.y+12*8);
        } else if (!this.goingLeft && !this.attacking && !this.preattacking && !this.goingDown) {
            ctx.fillText("'^                  ", this.x-48, this.y);
            ctx.fillText("||              |\\__", this.x-48, this.y+12);
            ctx.fillText(' \\\\  .-""""-._,´  .(', this.x-48, this.y+12*2);
            ctx.fillText('  \\\\/          \\  -/', this.x-48, this.y+12*3);
            ctx.fillText('   \\    \\       /´"´', this.x-48, this.y+12*4);
            ctx.fillText('    \\   | /    |', this.x-48, this.y+12*5);
            ctx.fillText('    /  / -\\   /', this.x-48, this.y+12*6);
            ctx.fillText('   ´\\ \\\\  | ||', this.x-48, this.y+12*7);
            ctx.fillText('     \\_)) |_))', this.x-48, this.y+12*8);
        } else if (this.preattacking || this.goingDown) {
            ctx.fillText(" |\\___/|", this.x-12, this.y);
            ctx.fillText(" )     (", this.x-12, this.y+12);
            ctx.fillText(' \\     /', this.x-12, this.y+12*2);
            ctx.fillText('  )===( ', this.x-12, this.y+12*3);
            ctx.fillText(' /     \\ ', this.x-12, this.y+12*4);
            ctx.fillText(' |     | ', this.x-12, this.y+12*5);
            ctx.fillText('/       \\', this.x-12, this.y+12*6);
            ctx.fillText('\\       / ', this.x-12, this.y+12*7);
            ctx.fillText('_\\_____/_', this.x-12, this.y+12*8);
        } else {
            ctx.fillText(',,,     ,,,', this.x-12, this.y-12);
            ctx.fillText('| |     | |', this.x-12, this.y);
            ctx.fillText('| |\\___/| |', this.x-12, this.y+12);
            ctx.fillText('| )     ( |', this.x-12, this.y+12*2);
            ctx.fillText('| \\     / |', this.x-12, this.y+12*3);
            ctx.fillText('\\  )===(  /', this.x-12, this.y+12*4);
            ctx.fillText(' \\/     \\/ ', this.x-12, this.y+12*5);
            ctx.fillText('  |     |', this.x-12, this.y+12*6);
            ctx.fillText('  |     |', this.x-12, this.y+12*7);
            ctx.fillText(' /       \\', this.x-12, this.y+12*8);
            ctx.fillText('|         |', this.x-12, this.y+12*9);
            ctx.fillText('|_       _|', this.x-12, this.y+12*10);
            ctx.fillText('\\   | |   /', this.x-12, this.y+12*11);
            ctx.fillText(' \\ \\| |/ /', this.x-12, this.y+12*12);
            ctx.fillText('  | | | |', this.x-12, this.y+12*13);
            ctx.fillText('  \\,/ \\,/', this.x-12, this.y+12*14);
            ctx.fillText("    '-'", this.x-12, this.y+12*15);
        }
    }

    attackBird(preatkTimeInSec) {
        if (!this.attacking && this.preattackTimer > preatkTimeInSec) {
            this.preattackTimer = 0;
            this.preattacking = false;
            this.attacking = true;
        } else if (!this.attacking) {
            this.preattacking = true;
            this.preattackTimer++;
        }

        if (this.attacking && !this.preattacking) {
            if (this.y+24 > bird.y) {
                this.y -= 24;   
            } else {
                bird.y = canvas.height + 72;
                this.attacking = this.preattacking = false;
                this.goDownTime = getRandomInt(6, 10);
                this.goingDown = true;
                this.movingTimer = 0;
            }
        }
    }

    goDown() {
        if (this.y < 120) {
            this.y += 24;
        } else {
            if (this.goDownTimer < this.goDownTime) {
                this.goDownTimer++;
            } else {
                if (this.movingTimer === this.goDownTimer)
                {
                    let randX;
                    do {
                        randX = getRandomInt(1, (canvas.width-24)/12)*12;
                        console.log("randX: " + randX);
                    } while (randX - bird.x < 72 && bird.x - randX < 72)
                    bird.x = randX;
                    console.log("bird.x: " + bird.x);
                    bird.y = getRandomInt(1,4)*12;
                } else if (this.movingTimer > this.goDownTime + getRandomInt(8,13)) {
                    this.goingDown = false;
                    if (this.x < bird.x) {
                        this.goingLeft = false;
                    } else {
                        this.goingLeft = true;
                    }
                    this.goDownTimer = 0;
                }
            }
            this.movingTimer++;
        }
    }
}
let particles = [];

function Particle(x, y, radius, speed, duration) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = randomInt(-8, 8)*speed;
    this.speedY = randomInt(-8, 8)*speed;
    this.duration = duration;
    this.active = true;
    this.transparency;
    this.isRed;

    if (randomInt(0,1) === 1) {
        this.isRed = true;
    }

    this.step = function() {
        if (this.active) {
            this.transparency = this.duration/duration;
            this.duration--;
            if (this.isRed){
                ctx.fillStyle = 'rgba(255, 0, 0,' + this.transparency + ')';
            } else {
                ctx.fillStyle = 'rgba(0, 0, 255,' + this.transparency + ')';
            }
            this.x -= this.speedX;
            this.y -= this.speedY;
        }
    }

    this.draw = function() {
        if (this.active) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    }

    this.autoDestroy = function(){
        if (this.duration <= 0) {
            this.active = false;
        }
    }
}
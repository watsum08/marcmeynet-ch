let shadows = [];

function Shadow(x, y, duration) {
    this.x = x;
    this.y = y;
    this.duration = duration;
    this.active = true;

    this.step = function(red, blue) {
        if (this.active) {
            //let colorValue = (180-(Math.round(180/100*(this.duration/duration*100))));
            let transparency = this.duration/duration/10;
            this.duration--;
            ctx.fillStyle = 'rgba(' + red + ',' + 0 + ',' + blue + ',' + transparency + ')';
        }
    }

    this.draw = function(playerWidth, playerHeight, playerRadius, rotateFrames) {
        if (this.active) {
            let angle = rotateFrames * 10;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(angle*Math.PI/180);
            ctx.translate(-this.x-playerWidth/2, -this.y-playerHeight/2);
            roundRect(ctx, this.x, this.y, playerWidth, playerHeight, playerRadius, true, false);
            ctx.restore();
        }
    }

    this.autoDestroy = function(){
        if (this.duration <= 0) {
            this.active = false;
            shadows.shift();
        }
    }
}
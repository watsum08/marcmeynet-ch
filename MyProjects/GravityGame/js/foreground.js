function Foreground(x, y) {
    this.x = x;
    this.y = y;
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.speed = gameSpeed;

    this.step = function() {

        if (this.x <= -720)
        {
            this.x = 720;
        }
        this.speed = gameSpeed;
        this.x -= this.speed;
    }
    
    this.animate = function(animationType) {
        
    }

    this.draw = function() {
        ctx.drawImage(ForegroundIMG, this.x, this.y, this.width, this.height);
    }
}
function Background(x, y) {
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
        if (gameSpeed > 0)
        {
            this.speed = gameSpeed;
        }
        else
        {
            this.speed = 0;
        }
        this.x -= this.speed;
    }
    
    this.animate = function(animationType) {
        
    }

    this.draw = function() {
        ctx.drawImage(BackgroundIMG, this.x, this.y, this.width, this.height);
    }
}
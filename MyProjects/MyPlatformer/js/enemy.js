function Enemy (x, y, width, height, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
    this.active = true;

    this.draw = function() {
        if (this.active){
            if (this.type === 1) {
                ctx.fillStyle = "brown";
            } else if (this.type === 2) {
                ctx.fillStyle = "orange";
            }
            ctx.fillRect(this.x, this.y, this.width, this.height);

            if (timerTick > 10) {
                this.x = this.y = this.width = this.height = this.type = null;
                this.active = false;
                timer = false;
                console.log(timer);
                }
        }
    }

    this.destroy = function() {
        timer = true; //Starts timer which starts timerTick incrementation. Once timerTick is 10, this will be destroyed (properties=null & active=false)
    }
}
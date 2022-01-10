const waves = [];

function Wave (id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = 128;
    this.height = 64;
    this.scale = 1;

    this.draw = function () {
        if (framesNow >= 0 && framesNow <= 15){
            ctx.drawImage(Wave1, 0, 0, this.width, this.height, this.x, this.y, this.width * this.scale, this.height * this.scale);
        } else if (framesNow > 15 && framesNow <= 30) {
            ctx.drawImage(Wave2, 0, 0, this.width, this.height, this.x, this.y, this.width * this.scale, this.height * this.scale);
        } else if (framesNow > 30 && framesNow <= 45) {
            ctx.drawImage(Wave3, 0, 0, this.width, this.height, this.x, this.y, this.width * this.scale, this.height * this.scale);
        } else if (framesNow > 45 && framesNow <= 60) {
            ctx.drawImage(Wave4, 0, 0, this.width, this.height, this.x, this.y, this.width * this.scale, this.height * this.scale);
        }
    }
}
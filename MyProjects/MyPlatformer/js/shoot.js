const shots = [];
let shotIdCounter = 0;

function Shoot (x, y, speedX, speedY) {
    this.id = shotIdCounter;
    shotIdCounter++;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.radius = 8;

    this.draw = function() {
        console.log("drawing Shoot Id: " + this.id + " x: " + this.x + " y: " + this.y);

        this.x += speedX;
        this.y += speedY;

        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

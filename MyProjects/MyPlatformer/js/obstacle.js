function Obstacle (id, x, y, width, height, type) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;

    this.draw = function() {
        if (this.type === 1) {
            ctx.drawImage(Tile1, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 2) {
            ctx.drawImage(Tile2, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 3) {
            ctx.drawImage(Tile3, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 4) {
            ctx.drawImage(Tile4, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 5) {
            ctx.drawImage(Tile5, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 6) {
            ctx.drawImage(Tile6, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 7) {
            ctx.drawImage(Tile7, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 8) {
            ctx.drawImage(Tile8, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 9) {
            ctx.drawImage(Tile9, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 10) {
            ctx.drawImage(Tile10, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 11) {
            ctx.drawImage(Tile11, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 12) {
            ctx.drawImage(Tile12, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 13) {
            ctx.drawImage(Tile13, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 14) {
            ctx.drawImage(Tile14, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 15) {
            ctx.drawImage(Tile15, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 16) {
            ctx.drawImage(Tile16, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 17) {
            ctx.drawImage(Tile17, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 18) {
            ctx.drawImage(Tile18, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 19) {
            ctx.drawImage(Tile19, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 20) {
            ctx.drawImage(Tile20, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 21) {
            ctx.drawImage(Tile21, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 22) {
            ctx.drawImage(Tile22, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 23) {
            ctx.drawImage(Tile23, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        } else if (this.type === 24) {
            ctx.drawImage(Tile24, 0, 0, tileSize, tileSize, this.x, this.y, this.width, this.height);
        }
    }
}

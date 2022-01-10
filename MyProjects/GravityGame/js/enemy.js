let enemies = [];
let enemyIDcounter = 0;

function Enemy(type, x, y, width, height) {
    this.id = enemyIDcounter;
    ++enemyIDcounter;

    this.type = type;
    this.active = true;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed;
    this.color;

    switch(this.type){
        case 0:
            this.speed = gameSpeed;
            this.color = 'rgb(220,100,50)';
            break;
    }

    this.step = function() {
        if (this.active) {
            switch(this.type) {
                case 0:
                    this.speed = gameSpeed;
                    break;
                case 1:
                    this.speed = gameSpeed+4;
                    break;
            }
            this.x -= this.speed;
        }
    }
    
    this.draw = function() {
        if (this.active) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    this.autoDestroy = function(){
        if (this.x <= -100) {
            this.active = false;
        }
    }
}
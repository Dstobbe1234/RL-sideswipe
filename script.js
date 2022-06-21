//RL sideswipe
let cnv = document.getElementById('canvas');
let ctx = cnv.getContext('2d');
cnv.width = 1000;
cnv.height = 1000;
const gravity = 10;
const bMass = 5;


class car {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 50, 20)
    }
    collision() {

    }

}


function ballPhysics() {

}

let redCar = new car(300, 900, 'red')
let blueCar = new car(700, 900, 'blue')


requestAnimationFrame(loop)
function loop() {
    ctx.fillStyle = "rgb(255, 255, 255)"
    ctx.fillRect(0, 0, cnv.width, cnv.height)
    //White background
    //ctx.fillStyle = 'rgb(255, 255, 255)'
    //ctx.fillRect(0, 0, cnv.width, cnv.height)
    redCar.draw()
    blueCar.draw()
    //Draw ball
    
    requestAnimationFrame(loop)
}
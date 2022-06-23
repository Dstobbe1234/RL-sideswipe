//RL sideswipe
let cnv = document.getElementById('canvas');
let ctx = cnv.getContext('2d');
cnv.width = 1000;
cnv.height = 650;
const gravity = 10;
const bMass = 5;
const ramp = document.getElementById('ramp');
const ball = document.getElementById('ball')
let rArrow = false
let lArrow = false
document.addEventListener('keydown', keydownListener)
document.addEventListener('keyup', keyupListener)

class car {
    constructor(x, y, velocity, color) {
        this.x = x;
        this.y = y;
        this.velocity = velocity
        this.color = color;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 50, 20)
    }

    move() {
        console.log(this.velocity)
        this.x += 0.1*this.velocity[0]
        this.y += 0.1*this.velocity[1]

        if(rArrow && this.velocity[0] < 30) {
            this.velocity[0]++
        } else if (!rArrow && this.velocity[0] > 0) {
            this.velocity[0]-= 0.5
        } else if(lArrow && this.velocity[0] > - 30) {
            this.velocity[0]--
        } else if (!lArrow && this.velocity[0] < 0) {
            this.velocity[0]+= 0.5
        }

    }
    collision() {
    }

}


let ballObj = {
    x: 500,
    y: 100,
    size: 50,
    velocity: [0, 0],
    draw: function() {
        ctx.drawImage(ball, this.x, this.y, this.size, this.size)
    },
    move: function() {
        this.x += this.velocity[0]
        this.y += this.velocity[1]
        
    },
    collision: function() {

    },


}


function keydownListener(event) {
    if(event.code === 'ArrowRight') {
        rArrow = true
    } else if(event.code === 'ArrowLeft') {
        lArrow = true
    }
}
function keyupListener(event) {
    if(event.code === 'ArrowRight') {
        rArrow = false
    } else if(event.code === 'ArrowLeft') {
        lArrow = false
    }
}
let redCar = new car(100, 600, [0,0], 'red')
let blueCar = new car(200, 600, [0,0], 'blue')


requestAnimationFrame(loop)
function loop() {
    //White background
    ctx.fillStyle = "rgb(255, 255, 255)"
    ctx.fillRect(0, 0, cnv.width, cnv.height)
    redCar.draw()
    blueCar.draw()
    ballObj.draw()
    ballObj.move()
    redCar.move()
    redCar.collision()

        
    
    














    //Draw ball
    
    requestAnimationFrame(loop)
}
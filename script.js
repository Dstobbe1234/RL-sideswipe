//RL sideswipe
let cnv = document.getElementById('canvas');
let ctx = cnv.getContext('2d');
cnv.width = 1000
cnv.height = 1000



function ballMovement() {

}


requestAnimationFrame(loop)
function loop() {
    //White background
    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.fillRect(0, 0, cnv.width, cnv.height)

    //Draw ball
    
    requestAnimationFrame(loop)
}
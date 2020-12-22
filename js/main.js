//Establish DOM References
//Explicitly defining for own sanity, movement is a defined separate variable
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')
let statusDisplay = document.getElementById('status')
//storing object/result of the variable into the var ctx, getting context for drawing on canvas
let ctx = game.getContext('2d')
// game.height = '400px'
// game.width = '800px'
game.setAttribute('height', getComputedStyle(game)['height'])
game.setAttribute('width', getComputedStyle(game)['width'])

//Ogre
let ogre = {
    x: 400,
    y: 150,
    color: '#bad155',
    width: 60,
    height: 120,
    alive: true,
    render: function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

game.addEventListener('click', (e) => {
    ctx.clearRect(0, 0, game.width, game.height)
    ogre.x = e.offsetX
    ogre.y = e.offsetY
    ogre.render()
}, { option: true })


//Hero

//Draw a filled box
//determines the fill color
// let drawBox = (x, y, size, color) => {
//     ctx.fillStyle = color
//     ctx.fillRect(x, y, size, size)
// }

//Draw a line box
//Establishing line aesthetics
// ctx.strokeStyle = 'red'
// ctx.lineWidth = 10;
// ctx.strokeRect(10, 10, 100, 100)
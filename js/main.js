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

//Draw a filled box
//determines the fill color
ctx.fillStyle = 'white'
ctx.fillRect(10, 10, 100, 100)

//Draw a line box
//Establishing line aesthetics
ctx.strokeStyle = 'red'
ctx.lineWidth = 10;
ctx.strokeRect(10, 10, 100, 100)
export const SNAKE_SPEED = 2;
const snakeBody =[{x:11,y:11}]

export function update(){
	console.log('update snake')

}

export function draw(gameBoard){
	snakeBody.forEach(segment=>{
		const snakeElement = document.createElement('div')
		snakeElement.style.gridRowStart = segmnt.x
		snakeElement.style.gridColumnStart = segmnt.y
		snakeElement.classList.add('snake')
		gameBoard.appendChild(snakeElement)
	})

}
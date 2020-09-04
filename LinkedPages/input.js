let inputDirection = {x:0,y:0}
let lastInputDirection = {x:0,y:0}

window.addEventListener('keydown',e=>{
	switch(e.key){
		case 'ArrowUp':
			if(lastInputDirection.y!==0)break
			inputDirection = {x:0,y:-1}
			break
		case 'ArrowDown':
			if(lastInputDirection.y!==0)break
			inputDirection = {x:0,y:1}
			break
		case 'ArrowLeft':
			if(lastInputDirection.x!==0)break
			inputDirection = {x:-1,y:0}
			break
		case 'ArrowRight':
			if(lastInputDirection.x!==0)break
			inputDirection = {x:1,y:0}
			break
	}
})
export function getInputDirection(){
	lastInputDirection = inputDirection
	return inputDirection
}

function swipedetect(el,callback){
	var touchsurface = el,
	swipedir,
	startX,
	startY,
	distX,
	distY,
	threshold=150,//required min distance to be considered swipe
	restraint = 100,//maximum distance allowed at same time in perpendicular direction
	allowedTime = 300,//maximum time allowed to travel that distance
	elapsedTime,startTime,
	handleswipe = callback||function(swipedir){}

	touchsurface.addEventListener('touchstart',function(e){
		var touchobj = e.changedTouches[0]
		swipedir = 'none'
		//dist = 0
		startX = touchobj.pageX
		startY = touchobj.pageY
		startTime = new Date().getTime()//record time when finger first makes contact with surface
		e.preventDefault()		
	},false)
	touchsurface.addEventListener('touchmove',function(e){
		e.preventDefault()//prevent scrolling when inside DIV
	},false)

	touchsurface.addEventListener('touchend',function(e){
		var touchobj = e.changedTouches[0]
		distX = touchobj.pageX - startX
		distY = touchobj.pageY - startY
		elapsedTime = new Date().getTime() - startTime
		if(elapsedTime <= allowedTime){
			if(Math.abs(distX)>=threshold && Math.abs(distY)<=restraint){
				swipedir = (distX<0)? 'left':'right'
			}else if(Math.abs(distY)>=threshold && Math.abs(distX)<=restraint){
				swipedir = (distY<0)? 'up':'down'
			}
		}
		handleswipe(swipedir)
		e.preventDefault()
	},false)
}

var el = document.getElementById('game-board')
swipedetect(el,function(swipedir){
	switch(swipedir){
		case 'left':
			if(lastInputDirection.x!==0)break
			inputDirection = {x:-1,y:0}
			break
		case 'right':
			if(lastInputDirection.x!==0)break
			inputDirection = {x:1,y:0}
			break
		case 'up':
			if(lastInputDirection.y!==0)break
			inputDirection = {x:0,y:-1}
			break
		case 'down':
			if(lastInputDirection.y!==0)break
			inputDirection = {x:0,y:1}
			break
	}
})



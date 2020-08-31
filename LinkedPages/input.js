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
};
window.addEventListener('touchstart',handleTouchStart,false);
window.addEventListener('touchmove',handleTouchMove,false);
var xDown=null;
var yDown =null;

function getTouches(evt){
	return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt){
	const firstTouch = getTouches(evt[0]);
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
};
function handleTouchMove(evt){
	if(!xDown||!yDown){
		return
	}
	var xUp = evt.touches[o].clientX;
	var yUp = evt.touches[0].clientY;
	var xDiff = xDown - xUp;
	var yDiff = yDown-yUp;

	if(Math.abs(xDiff)>Math.abs(yDiff)){
		if(xDiff>0){
			//left swipe
		}else{
			//right swipe
		}
	}else{
		if(yDiff>0){
			//upswipe
		}else{
			//down swipe
		}
	}
	xDown = null;
	yDown = null;
};
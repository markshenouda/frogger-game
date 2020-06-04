document.addEventListener('DOMContentLoaded', () => {
	const squares = document.querySelectorAll('.grid div')
	const timeleft = document.querySelector('#time-left')
	const startBtn = document.querySelector('#btn')
	const timeLeft = document.querySelector('#time-left')
	const squaresRight = document.querySelectorAll('.right')
	const squaresLeft = document.querySelectorAll('.left')
	const playground = document.querySelector('#playground')
	const control = document.querySelector('#control')
	const timeDisplay = document.querySelector('#time-display')
	const winDisplay = document.querySelector('#win-display')
	const loseDisplay = document.querySelector('#lose-display')
	let currentIndex = 110
	let currentTime = 20
	let timerId

	const loseSquares = [
		['r1', 's1'],
		['r1', 's5'],
		['r1', 's9'],
		['l', 's1'],
		['l', 's3'],
		['l', 's6'],
		['l', 's8'],
		['l', 's11'],
		['r2', 's4'],
		['r2', 's7'],
		['r2', 's10'],
		['r2', 's13'],
		['l1', 's4'],
		['l1', 's5'],
		['l1', 's9'],
		['l1', 's10'],
		['r', 's1'],
		['r', 's2'],
		['r', 's3'],
		['r', 's6'],
		['r', 's7'],
		['r', 's10'],
		['r', 's11'],
		['l2', 's1'],
		['l2', 's2'],
		['l2', 's5'],
		['l2', 's6'],
		['l2', 's7'],
		['l2', 's8'],
		['l2', 's11'],
		['l2', 's12'],
		['l2', 's13'],

	]





	squares[currentIndex].classList.add('frog')

	function moveFrog(e) {
		squares[currentIndex].classList.remove('frog')
		switch(e.keyCode) {
		  case 37: //Left
			if(currentIndex % 13 !== 0){
				currentIndex -= 1
			} 
			break
		  case 38: //Up
			if(currentIndex - 13 >= 0){
				currentIndex -= 13
			}
			break
		  case 39: //Right
			if(currentIndex % 13 < 13 - 1){
				currentIndex += 1
			}
			break
		  case 40: //Down
			if (currentIndex + 13 < 9 * 13){
				currentIndex += 13
			}
			break
		}
		squares[currentIndex].classList.add('frog')
		lose()
		win()
	  }

	  function moveRight(){
		  squaresRight.forEach( (e) => {
			  if(e.classList.contains('s13')){
				e.classList.remove('s13')
				e.classList.add('s12')
			  }
			  else if(e.classList.contains('s12')){
				e.classList.remove('s12')
				e.classList.add('s11')
			  }
			  else if(e.classList.contains('s11')){
				e.classList.remove('s11')
				e.classList.add('s10')
			  }
			  else if(e.classList.contains('s10')){
				e.classList.remove('s10')
				e.classList.add('s9')
			  }
			  else if(e.classList.contains('s9')){
				e.classList.remove('s9')
				e.classList.add('s8')
			  }
			  else if(e.classList.contains('s8')){
				e.classList.remove('s8')
				e.classList.add('s7')
			  }
			  else if(e.classList.contains('s7')){
				e.classList.remove('s7')
				e.classList.add('s6')
			  }
			  else if(e.classList.contains('s6')){
				e.classList.remove('s6')
				e.classList.add('s5')
			  }
			  else if(e.classList.contains('s5')){
				e.classList.remove('s5')
				e.classList.add('s4')
			  }
			  else if(e.classList.contains('s4')){
				e.classList.remove('s4')
				e.classList.add('s3')
			  }
			  else if(e.classList.contains('s3')){
				e.classList.remove('s3')
				e.classList.add('s2')
			  }
			  else if(e.classList.contains('s2')){
				e.classList.remove('s2')
				e.classList.add('s1')
			  }
			  else {
				e.classList.remove('s1')
				e.classList.add('s13')
			  }
		  })
	  }


	  function moveLeft(){
		squaresLeft.forEach( (e) => {
			if(e.classList.contains('s1')){
			  e.classList.remove('s1')
			  e.classList.add('s2')
			}
			else if(e.classList.contains('s2')){
			  e.classList.remove('s2')
			  e.classList.add('s3')
			}
			else if(e.classList.contains('s3')){
			  e.classList.remove('s3')
			  e.classList.add('s4')
			}
			else if(e.classList.contains('s4')){
			  e.classList.remove('s4')
			  e.classList.add('s5')
			}
			else if(e.classList.contains('s5')){
			  e.classList.remove('s5')
			  e.classList.add('s6')
			}
			else if(e.classList.contains('s6')){
			  e.classList.remove('s6')
			  e.classList.add('s7')
			}
			else if(e.classList.contains('s7')){
			  e.classList.remove('s7')
			  e.classList.add('s8')
			}
			else if(e.classList.contains('s8')){
			  e.classList.remove('s8')
			  e.classList.add('s9')
			}
			else if(e.classList.contains('s9')){
			  e.classList.remove('s9')
			  e.classList.add('s10')
			}
			else if(e.classList.contains('s10')){
			  e.classList.remove('s10')
			  e.classList.add('s11')
			}
			else if(e.classList.contains('s11')){
			  e.classList.remove('s11')
			  e.classList.add('s12')
			}
			else if(e.classList.contains('s12')){
			  e.classList.remove('s12')
			  e.classList.add('s13')
			}
			else {
			  e.classList.remove('s13')
			  e.classList.add('s1')
			}
		})
	  }

	  function moveWithLogLeft() {
		if ((currentIndex > 13 && currentIndex <= 25) || (currentIndex > 39 && currentIndex <= 51) ) {
		  squares[currentIndex].classList.remove('frog')
		  currentIndex -= 1
		  squares[currentIndex].classList.add('frog')
		}
	  }
	
	  function moveWithLogRight() {
		if (currentIndex >= 26 && currentIndex < 38) {
		  squares[currentIndex].classList.remove('frog')
		  currentIndex += 1
		  squares[currentIndex].classList.add('frog')
		}
	  }


	  function win() {
		if (squares[6].classList.contains('frog')) {
		  squares[currentIndex].classList.remove('frog')
		  clearInterval(timerId)
		  document.removeEventListener('keyup', moveFrog)
		  timeDisplay.classList.add('hide')
		  winDisplay.classList.remove('hide')
		}
	  }


	  function movePieces(){
		currentTime--
		timeLeft.textContent = currentTime
		moveRight()
		moveLeft()
		moveWithLogLeft()
		moveWithLogRight()
		lose()
	  }

	  function lose() {
		for(i = 0; i < loseSquares.length; i++){
			if((currentTime === 0 ) || (squares[currentIndex].classList.contains(loseSquares[i][0]) && squares[currentIndex].classList.contains(loseSquares[i][1]))){
				squares[currentIndex].classList.remove('frog')
				squares[currentIndex].classList.add('blood')
				clearInterval(timerId)
				document.removeEventListener('keyup', moveFrog)
				timeDisplay.classList.add('hide')
				loseDisplay.classList.remove('hide')
			}
		}
	  }

	  startBtn.addEventListener('click', () => {
		if(timerId) {
		  clearInterval(timerId)
		} else {
			control.classList.add('hide')
			playground.classList.remove('hide')
			
		  timerId = setInterval(movePieces, 1000)
		  document.addEventListener('keyup', moveFrog)
		}
	  })
})
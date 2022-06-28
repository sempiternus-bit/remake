const player1 = 'X'
const player2 = 'O'
let gameover = false
let turno = player1
let win = ''

vez()
marcar()

function vez(){

	let img = document.querySelector('header#turn img')

	if(gameover){

		return

	}else if(turno == player1){

		img.setAttribute( 'src', 'x.png')

	}else{

		img.setAttribute( 'src', 'circle.png')
			
	}
}

function marcar(){

	let space = document.getElementsByClassName('space')

	for (let i = 0; i < space.length; i++){

		space[i].addEventListener('click', function(){

			if(this.getElementsByTagName('img').length == 0){


				if(turno == player1){

					this.innerHTML = '<img src="x.png">'
					this.setAttribute('jogada', player1)
					turno = player2

				}else{

					this.innerHTML = '<img src="circle.png">'
					this.setAttribute('jogada', player2)
					turno = player1

				}

				vez()
				verification()

			}

		})
	}

}

async function verification(){

	let a1 = document.getElementById('a1').getAttribute('jogada')
	let a2 = document.getElementById('a2').getAttribute('jogada')
	let a3 = document.getElementById('a3').getAttribute('jogada')

	let b1 = document.getElementById('b1').getAttribute('jogada')
	let b2 = document.getElementById('b2').getAttribute('jogada')
	let b3 = document.getElementById('b3').getAttribute('jogada')

	let c1 = document.getElementById('c1').getAttribute('jogada')
	let c2 = document.getElementById('c2').getAttribute('jogada')
	let c3 = document.getElementById('c3').getAttribute('jogada')


	if((a1 == a2 & a1 == a3 & a1 != '') || (a1 == b1 && a1 == c1 && a1 != '') || (a1 == b2 && a1 == c3 && a1 != '')){

		win = a1

	}else if((b2 == b1 & b2 == b3 & b2 != '') || (b2 == a3 && b2 == c1 && b2 != '') || (b2 == a2 && b2 == c2 && b2 != '')){

		win = b2

	}else if((c3 == c2 && c3 == c1 && c3 != '') || (c3 && b3 && c3 == a3 && c3 != '')){

		win = c3

	}

	if(win != '' ){

		gameover == true
		await sleep(50)
		alert(`Vencedor foi o: "${win}"`)
		

	}

}

function sleep(ms){

	return new Promise( resolve => setTimeout(resolve, ms))

}
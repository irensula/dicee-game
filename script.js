//My version
		let allPictures = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
		
		let randomNumber1 = Math.floor(Math.random()*6);
		document.querySelectorAll('img')[0].setAttribute('src', allPictures[randomNumber1]);
		
		let randomNumber2 = Math.floor(Math.random()*6);
		document.querySelectorAll('img')[1].setAttribute('src', allPictures[randomNumber2]);
	
	if(randomNumber1 > randomNumber2){
		document.querySelector('h1').innerHTML = 'Player 1 wins!';
	} else if(randomNumber1 < randomNumber2){
		document.querySelector('h1').innerHTML = 'Player 2 wins!';
	}else if(randomNumber1 = randomNumber2){
		document.querySelector('h1').innerHTML = 'Draw!';
	}
/*
//Angela's version
let randomNumber1 = Math.floor(Math.random()*6) +1;
let randomImageSource1 = 'images/dice' + randomNumber1 + '.png';
document.querySelectorAll('img')[0].setAttribute('src', randomImageSource1);

let randomNumber2 = Math.floor(Math.random()*6) +1;
let randomImageSource2 = 'images/dice' + randomNumber2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

//If some player wins
if(randomNumber1 > randomNumber2){
	document.querySelector('h1').innerHTML = 'Player 1 wins!';
} else if(randomNumber1 < randomNumber2){
	document.querySelector('h1').innerHTML = 'Player 2 wins!';
}else if(randomNumber1 = randomNumber2){
	document.querySelector('h1').innerHTML = 'Draw!';
}
*/
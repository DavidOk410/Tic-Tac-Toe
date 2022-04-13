let buttons = document.querySelectorAll(".btn");
let x = true;

for(let i = 0; i < buttons.length; i++){
	buttons[i].addEventListener('click', click);
	buttons[i].dataset.isFull = false;
}

function click(){
	if(this.dataset.isFull == 'false'){
		this.dataset.isFull = true;
		if (x){
			this.innerText = 'X';
			x = false
		}	
		else if(x == false){
			this.innerText = 'O';
			x = true;
		}
		checkWin();
	}
}

function checkWin(){
	for(i = 0; i < 3; i++){
		console.log(buttons[3 * i].innerText, buttons[3 * i + 1].innerText, buttons[3 * i + 2].innerText);
		if(buttons[3 * i].innerText == buttons[3 * i + 1].innerText && buttons[3 * i + 1].innerText == buttons[3 * i + 2].innerText && buttons[3 * i].innerText != ''){
			console.log("Победил " + buttons[3 * i].innerText);
			break;
		}
	}
	for(i = 0; i < 3; i++){
		if(buttons[0 + i].innerText == buttons[3 + i].innerText && buttons[3 + i].innerText == buttons[6 + i].innerText && buttons[6 + i].innerText != ''){
			console.log("Победил " + buttons[0 + i].innerText);
			break;
		}
	}
	if(buttons[2].innerText == buttons[4].innerText && buttons[4].innerText == buttons[6].innerText && buttons[6].innerText != ''){
			console.log("Победил " + buttons[2].innerText);
		}
	if(buttons[0].innerText == buttons[4].innerText && buttons[4].innerText == buttons[8].innerText && buttons[8].innerText != ''){
			console.log("Победил " + buttons[0].innerText);
		}
}
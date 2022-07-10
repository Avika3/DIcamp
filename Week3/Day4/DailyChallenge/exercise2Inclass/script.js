let spanSeconds = document.getElementById("spanNumber");

let counter = 10;

let idInterval = setInterval(decreaseSecond, 1000);

function decreaseSecond () {
	if (counter == 0){
		clearInterval(idInterval)
	} else {
		counter --;
		spanSeconds.textContent = counter;
	}
}


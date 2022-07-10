
//After 2 seconds the user losts


// let Banner = document.getElementById("Banner");

// setTimeout(makeAppear, 3000);

// function makeAppear(){
// 		Banner.classList.remove("Disapper");
// }





//STOP Exe 2 


let spamSecond = document.getElementById("Banner");

let counter = 10;

let idInterval = setInterval (descreseSecond, 1000);

function descreseSecond(){

	if (counter == 0){
		clearInterval(idInterval)
	} else {
		counter --;
		spamSecond.textContent = counter;
	}
}
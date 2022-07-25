// //PROJECT WORD AND GIF

// function fetchWord () {
// 	fetch('http://random-word-api.herokuapp.com/word?number=1')
// 	.then(response => response.json())
// 	.then(result => {
// 		let [word] = result;
// 		fetchGif(word)
// 	})
// 	.catch(error => console.log("IN THE CATCH", error)) //catch an error if there is
// }

// function fetchGif (wordrandom) {
// 	fetch(`https://api.giphy.com/v1/gifs/random?tag=${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`) // return a promise with as a result a Response object
// 	.then(response => {
// 		if (response.status !== 200){
// 			throw new Error ("404 ERROR")	
// 		} else {
// 			return response.json(); //returns a promise
// 		}
// 	})
// 	.then(result => {
// 		console.log(result)
// 		if (result["data"] == []){
// 			throw new Error ("GIF NOT FOUND");
// 		} else {
// 			let gif = result["data"]["images"]["original"]["url"];
// 			let imageGif =  document.createElement("img");
// 			imageGif.setAttribute("src", gif);
// 			document.body.appendChild(imageGif)
// 		}

// 	})
// 	.catch(error => {
// 		let imageGif = document.createElement("img");
// 		imageGif.setAttribute("src", "https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif");
// 		document.body.appendChild(imageGif)
// 		console.log("IN THE CATCH", error)
// 	})
// }

// fetchWord()


// async function fetchWord (){
// 	let responseFetch = await fetch('http://random-word-api.herokuapp.com/word?number=1');
// 	console.log(responseFetch)
// 	if (responseFetch.status !== 200){
// 		throw new Error ("Not Good")
// 	}else {
// 		let word = responseFetch.json()
// 		return word[0];

// 	}
// }

// async function gifFetch (wordrandom){
// 	let gifUrlFetch = await fetch(`https://api.giphy.com/v1/gifs/random?tag=
// 		${wordrandom}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
// 	if (gifUrlFetch.status !== 200){
// 		throw new Error ("Not good Giff")
// 	}else {
// 		let gifLoad = await gifUrlFetch.json()
// 		return gifLoad;
// 	}
// }


// async function displayGIFF(){
// 	try {
// 		let word = await fetchWord();
// 		let gif = await gifFetch(word);
// 		if (gif["data"].length == 0){
// 			throw new Error ("GIF NOT FOUND")
// 			console.log(gif);
// 		}else {
// 			let url = gif["data"]["images"]["original"]["url"];
// 			let gifImage = document.createElement("img");
// 			gifImage.setAttribute("src", url);
// 			document.body.appendChild(gifImage);
// 		}


// 	} catch (error){
// 		console.log(error.message)
// 	}
// }
// displayGIFF()
// // gifFetch()
// // fetchWord()



// class Rabbit {
// 	constructor(type) {
// 		this.type = type;
// 	}
// 	speak(type) {
// 		console.log(`The ${this.type} rabbit says '${line}'`);
// 	}
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");



let Now = new Date.UTC ();
console.log(Now + 3);










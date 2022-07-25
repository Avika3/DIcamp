
// fetch("https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
// .then(resultRe =>{ 
// 	if (resultRe.status !== 200 ){
// 		throw new Error ("Let's try it again")
// 	} else {
// 		return resultRe.json()
// 	}
// })
// .then(objgif => console.log(objgif))
// .catch( error => console.log(error))

// # Promises
// # EXERCISE 1
// Create a function that takes in a single parameter
// and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either
// resolve or reject.
// If the input is a string, the promise resolves with that same string
// uppercased.
// If the input is anything but a string it rejects with that same input.
// Use `then` to repeat the string twice
// use `catch` to console.log the error
// finally call a function that console.log ("congratulation")


//let nameInfo = prompt("Please insert value:")

// const checkAll = function (nameInfo){
// 	const newPromise = new Promise ((resolve, reject)=>{
// 		setTimeout(() => {
// 		//let pricePromise = 5000; 

// 		if (typeof nameInfo === "string"){
// 			resolve(`${nameInfo.toUpperCase()}`)
// 		} else {
// 			reject( `${pricePromise.toUpperCase()}`)
// 		}
// 	},5000)

// 	})
// 	return newPromise;
// };

// checkAll("hello")

// .then(res => consolse.log(res + res))
// .catch (error => console.log(error))



// # PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then
// append the gif to the page. Use this documentation
//  https://developers.giphy.com/docs/api/endpoint#random
// https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My





fetch("https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
.then (function fetchGif (reposneData) {
	if (reposneData.status !== 200){
		throw new Error ("Do it until you success")
		return;
	}else 
	{
		return reposneData.json()
	}
})
.then(banana => {
	console.log(banana)
	const {data:
		{images:
			{original:
				{url}
			}
		}
	} = banana
	console.log(url)
	imageLoad(url)
	//call a function to append an image and 
	//the source of the image needs to be the url


})
.then(gifBanana => console.log(gifBanana))
.catch(error => console.log(error))

function imageLoad (data){
	let imggif = document.createElement("img");
	imggif.setAttribute("src", data)
	document.body.appendChild(imggif)

}



// const gifAppned = document.getElementById("searchBtn")
// searchBtn.addEventListener("click",fetchGif)


// const displayGif = (gifResult)=>{
// 	result = document.getElementById("resultsOne")
// 	gifResult.foreach()

// }















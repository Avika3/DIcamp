// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.


// (function addSum(numOne, numTwo){
// 	sumAll = numOne + numTwo;

// 	alert(`The sum of number is: ${sumAll}`)
// }) (15,20)



// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.

let getGram = prompt(`Insert the gilograms: `);
(function getKilogram (){

	getKG = getGram/1000 ;

	console.log(getKG);
})()

// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it

function selfInvoke (children, parntnerName, location, jobTitle){
	
	console.log (`You will be a ${jobTitle} in ${location}, and married to ${parntnerName} with ${children} kids`)
}
selfInvoke (4,"Rachel", "Tel-Aviv", "Developer");


// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


 	//EXERCISE 3
 	
 	(function userName (nameUser){
 		let dive = document.getElementById('container');
 		let divImg = document.createElement('div')
 		let htw = document.createElement('h1')
 		let textWord =document.createTextNode(nameUser)
 		let newImg = document.createElement("img")
 		htw.appendChild(textWord)
 		dive.appendChild(htw)
 		
 		newImg.classList.add("d-inline-block", "align-top");
 		newImg.setAttribute("src","https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png")
 		divImg.appendChild(newImg)
 		newImg.setAttribute('style','width:30px; height:40px;')
 	})
 	('john');
// exercise 4
function makeJuice (){
	let size = prompt('what size drink do you want?')
	addIngredients()
	function addIngredients (){
		
		let ingredientOne = prompt('#1 select the first ingredient')
		let ingredientTwo = prompt('#2 select the second ingredient')
		let ingredientThree = prompt('#3 select the third ingredient')
		let divDrink =document.createElement('div')
		let newH1 = document.createElement('h1')
		let drink = document.createTextNode(`The client wants a ${size} juice, containing ${ingredientOne}, ${ingredientTwo}, ${ingredientThree}"`)
		console.log(drink)
	}
}






















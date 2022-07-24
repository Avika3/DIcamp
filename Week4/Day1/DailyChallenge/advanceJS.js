


// //1. Create the let global variable 
// let text = "Hello";

// //2. Create the function
// function checkText (){
// 	//4.1 Print: In the function Hello
// 	console.log("In the function",text); 
// 	//4.2 Adding to text varible the world "Hello"
// 	text += " World";
// 	//4.3 Console log: Still in the function Hello World
// 	console.log("Still in the function",text);
// }
// //3. Print: before the function Hello
// console.log("before the function", text);

// //4. Invoke the function 
// checkText()

// //5. Console log: after the function Hello World
// console.log("after the function", text);


// // // --------------------
// // // --- Functions Declaration
// // // --------------------

// //1. Invoke
// squareOne(2)

// // 2. Create
// // HOISTED TO THE TOP OF THE SCOPE
// function squareOne (x){
// 	console.log("square")
// 	return x * x;
// }

// // 3. Invoke it again
// squareOne(2)


// // // // --------------------
// // // // --- Functions expression
// // // // --------------------

// // // // anonymous function 
// // // // assigned to a variable

// // squareTwo(2);//not possible

// // // // NOT HOISTED
// const squareTwo = function (x) {
// 	console.log("square")
// 	return x * x;
// }

// squareTwo(2);

// // // -- Use with callbacks
// // // function expression - anonymous 
// btn.addEventListener("click", 
// 	function () {
// 		alert("hello")
// 	}
// )


// // // --------------------
// // // --- Anonymous arrow function
// // // --------------------

//anonymous
// function (a) {
// 	return a + 100;
// }

// // // The same as
// (a) => {
//   return a + 100;
// }

// // in 1 line, the arrow function returns the value
// (a) => a + 100;

// a => a + 100;

// // // // --------------------
// // // // --- ES6 arrow functions
// // // // ---------

// //function declation 
squareOne(2);

// function declaration
function squareOne (x){
	return x * x;
}

//function expression
const squareOne = function (x) {
	return x * x;
}

//arrow function
const squareOne = (x) => x*x
let result = squareOne(2);
console.log(result)

// with different number of parameters
const squareA = (x) => x*x;
const squareB = x => x*x;
// more than 1 parameter
const squareC = (x,y) => x*y;
// no parameters
const squareD = () => "hello";

btn.addEventListener("click", 
	function () {
		alert("hello")
	}
)

// //same as
btn.addEventListener("click", () => alert("hello"))

//If the function has more than 1 line, we need square brackets and return
const squareOne = (x) => {
	x = x + 2
	return x*x
}



function welcome (username){
	alert (`Hello ${username}`)
}
welcome("Avi");


const WelcomeTwo = function (username)
	alert()



	// // // --- TERNARY OPERATOR

	function getTemp (temp) {
		if (temp > 20) {
			return "Summer";
		} else {
			return "Winter";
		}
	}

	getTemp(24)

// expression ? if the expression is true : if the expression is not true
function getTempTwo (temp) {
	let season = temp > 20 ? "Summer" : "Winter";
	return season;
}

getTempTwo(24)

const getTempThree = (temp) => temp > 20 ? "Summer" : "Winter";
getTempThree(24)


/// Execsrise 2 
let age = prompt("What you age?");

function allowToDrive (){
	if (age >= 18){
		return "You can drive";
	} else {
		return "You can't drive";
	}
}

console.log(`Hi User, ${allowToDrive()}`);

// Function exepression >> STOP >>>

let age = prompt("What you age?");

const getAllow = function (age) { 
	return age > 18 ? "You can drive":"You can't drive";

}

console.log(`Hi User ${getAllow()}`);


// Function exepression >> STOP >>>
let age = prompt("What you age?");
console.log(age);
const allowToDrive = (age) => age > 18 ? "You can drive":"You can't drive";


console.log(allowToDrive())











const gameInfo = [
{
	username: "john",
	team: "red",
	score: 5,
	items: ["ball", "book", "pen"]
},
{
	username: "becky",
	team: "blue",
	score: 10,
	items: ["tape", "backpack", "pen"]
},
{
	username: "susy",
	team: "red",
	score: 55,
	items: ["ball", "eraser", "pen"]
},
{
	username: "tyson",
	team: "green",
	score: 1,
	items: ["book", "pen"]
},
];
//1
let usernameStudents = [];
gameInfo.forEach((value) => { usernameStudents.push(`!${value["username"]}`)});
console.log(usernameStudents)
//2
let usernameScoreStudents = [];
gameInfo.forEach((value) => { value["score"] > 5 ? usernameScoreStudents.push(value["username"]) : null });
console.log(usernameScoreStudents)
// 3
let score = 0;
gameInfo.forEach((value) => {score = score + value["score"]});
console.log(score);




























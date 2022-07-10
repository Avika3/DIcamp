//Exerise one: 

let myArr = [10,11,12,15,20];

myArr.forEach((num, index) => { 

	if (num % 2 == 0) {
		console.log (`This numnber is pair ${num}`)
	} else {
		console.log(`This number is not PAIR ${num}`)
	}
	// console.log(`The number is: ${num}`)
	// console.log(`The index number is: ${index}`)

}) 

// /// XP STOP >>>>
// // Exercise 1 : Scope: 
// // Analyse the code below, and predict what will be the value of a in all the following functions.
// // Write your prediction as comments in a js file.


// #1
function q1() {
	var a = 5;
	if(a > 1) {
		a = 3;


	}
	alert(a);
}
q1()
// // Answer is 3   

// // run in the console:


//#2
var a = 0;
function q2() {
	a = 5;
}

function q22() {
	alert(a);
}

// run in the console:
q22()
q2()
q22()


// // Answer is 0,5, Undifined  




//#3
function q3() {
	window.a = "hello";
}


function q32() {
	alert(a);
}

// run in the console:
q3()
q32()

// // Answer is for the first function the value is "hello" amd the second function console undifned  


//#4
var a = 1;
function q4() {
	var a = "test";
	alert(a);
}


// run in the console:
q4()

//#5
var a = 2;
if (true) {
	var a = 5;
	alert(a);
}
alert(a);


// Answer the first conde print "test" the second will print undefined

// Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

let experiencePoints2 = 10;

function winBattleB (){
	if (experiencePoints2 === 10){
		return (`${experiencePoints2} equal to 10`);
	}
	else {
		return (`${experiencePoints2} equal to 1`);
	}
}
winBattleB ()


// Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output



let isItString1 = (value) => typeof value === 'string' ?  `Is True ${value}` : `Is False ${value}`;
isItString1 (2);


// 🌟 Exercise 4 : Colors
// Instructions
// // Using this array :

// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


colors.forEach((color , index) => {
	console.log (`The index number is ${index + 1} and the color type is ${color}`);
});



// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

let colorCheck3 = ["Blue", "Green", "Red", "Orange", "Indigo", "Yellow"];


let result1 = colorCheck3.some((color) => color === 'Violet')
if (result1 === true){
	console.log(`Yeah. Yeah ,Yeah `)
}else {
	console.log (`No...`)
}



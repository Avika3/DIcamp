// Exercise 1: Your Favorite Food 

let Ffood = ["Steak", "Chicken", "Ingera", "Burger", "Pizza"];
let Fmeal = ["Breakfast", "Lunch", "Dinner"]; 

console.log (`I eat ${Ffood[0]} at every ${Fmeal [1]}`);

//Exercise 2 : Series

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let	myWatchedSeriesLength = ["Queen of south", "Breaking bad", "Last Dance", "M.Jackson"]; 

console.log (`I watched ${myWatchedSeriesLength.length} series: ${myWatchedSeriesLength} 
	and My favorite one is ${myWatchedSeriesLength[1]}`);


//Exercise 2 : Series Part || 	
myWatchedSeriesLength.splice (2, 1, "Frineds");
myWatchedSeriesLength.push("The Old Man");

console.log (`I watched ${myWatchedSeriesLength.length} series: ${myWatchedSeriesLength}`);



// Add, at the beginning of the array, the name of your favorite series.

let MyNewWatchList = ["The Blacklist"];
let	myWatchedSeriesLength1 = ["black mirror", "money heist", "the big bang theory", "Breaking Bad"]; 

TotalNumSeries = myWatchedSeriesLength.length + MyNewWatchList.length;


console.log (`I watched ${TotalNumSeries} series: ${MyNewWatchList}, ${myWatchedSeriesLength}`);

 
// Add, at the beginning of the array, the name of your favorite series. 
//Suloation 2 

	let	myWatchedSeriesLength2 = ["black mirror", "money heist", "the big bang theory", "Breaking Bad"]; 
		myWatchedSeriesLength2 [0] = "The Black List";


console.log (`I watched ${myWatchedSeriesLength2.length} series: ${myWatchedSeriesLength2}`);

// A new way 

let	myWatchedSeriesLength3 = ["black mirror", "money heist", "the big bang theory", "Breaking Bad"]; 
		myWatchedSeriesLength3.splice(0,0, "The Black List");


console.log (`I watched ${myWatchedSeriesLength3.length} series: ${myWatchedSeriesLength3}`);

// Delete the series “black mirror”.

let	myWatchedSeriesDel = ["Black mirror", "money heist", "the big bang theory", "Breaking Bad"]; 

myWatchedSeriesDel.splice(0, 1);

console.log (`I watched ${myWatchedSeriesDel.length} series: ${myWatchedSeriesDel}`);


// Console.log the third letter of the series “money heist”.

let	myWatchedSeriesThird = ["Black mirror", "money heist", "the big bang theory", "Breaking Bad"]; 


 	console.log (`I watched ${myWatchedSeriesThird.length} series: ${new String(myWatchedSeriesThird [1][2]).toUpperCase()} `);




//  Exercise 3 : The Temperature Converter

	let TemperatureC = prompt("What the Clesius right now ?");

	TemperatureF = TemperatureC / 5 * 9 + 32;

	console.log  (`${TemperatureC} °C is ${TemperatureF}°F`);


//  Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

//What will be the outcome of a + b in the first expression ?
  
    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: --> 55
    // Actual:55

//3.What will be the outcome of a + b in the second expression ?
    a = 2;

    console.log(a+b) //second expression
    // Prediction: ---> 23 
    // Actual:23

//4. Analyse the code below, what will be the outcome? 

console.log(3 + 4 + '5'); 

//The outcome will be 75 



// // /Exercise 5 : Guess The Answers #2

typeof(15)
// Prediction: numbers
// Actual:

typeof(5.5)
// Prediction: float
// Actual:

typeof(NaN)
// Prediction: object 
// Actual:

typeof("hello")
// Prediction: String
// Actual:

typeof(true)
// Prediction: Boolan
// Actual:

typeof(1 != 2) 
// Prediction: 
// Actual:

"hamburger" + "s"
// Prediction: String
// Actual:

"hamburgers" - "s"
// Prediction: String
// Actual:

"1" + "3"
// Prediction: String 
// Actual:

"1" - "3"
// Prediction: String
// Actual:

"johnny" + 5
// Prediction: String, Numbers 
// Actual:

"johnny" - 5 
// Prediction: String, Numbers 
// Actual:

99 * "hello"
// Prediction: Number, String  
// Actual:

1 != 1
// Prediction: Number 
// Actual:

1 == "1"
// Prediction: Number, String 
// Actual:

1 === "1"
// Prediction: Number, String
// Actual:



// Exercise 6 : Guess The Answers


5 + "34"
// Prediction: 534
// Actual:

5 - "4"
// Prediction: 1 
// Actual:

10 % 5
// Prediction: 0
// Actual:

5 % 10
// Prediction: 5
// Actual:

"Java" + "Script"
// Prediction: JavaScript 
// Actual:

" " + " "
// Prediction: '  '
// Actual:

" " + 0
// Prediction: ' 0'
// Actual:

true + true
// Prediction: 2
// Actual:

true + false
// Prediction: 1 
// Actual:

false + true
// Prediction: 1 
// Actual:

false - true
// Prediction: 1 
// Actual:

!true
// Prediction: false
// Actual:

3 - 4
// Prediction: -1
// Actual:

"Bob" - "bill"
// Prediction:NaN
// Actual:



































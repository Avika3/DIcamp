// 1. Using the array above, use the map method, to create a new array that contains only the name of the actors
// 2. Use the map method, to create a new array, that contains objects, each object contains the name of the actor, and it's job
// 3. BONUS: Using the array you get from question2, use the for each method, to add the names and the job of the actors on the DOM
//  (in a paragraph, appended to a div with an id "container")


// let famousPeople = [
// {
// 	name: "Angelina Jolie",
// 	job: "actor",
// 	age: 80
// },
// {
// 	name: "Georges Clooney",
// 	job: "actor",
// 	age: 2
// },
// {
// 	name: "Paris Hilton",
// 	job: "actor",
// 	age: 5
// },
// {
// 	name: "Kayne West",
// 	job: "singer",
// 	age: 16
// },
// {
// 	name: "Britney Spears",
// 	job: "singer",
// 	age: 100
// }
// ];

// // const famousName = famousPeople.map((famousPeople)=> famousPeople["name"])
// // console.log(famousName);

// //>>>>>>>>STOP
// const famousName = famousPeople.map((famousPeople)=> {
// 	let OBJ = {
// 		name:famousPeople["name"],
// 		job: famousPeople["job"]
// 	}	
// 	return OBJ;
// })
// console.log(famousName);



// function famousAdd (name, job){
// 	//famousPeople.push(name,job)

// }
// famousAdd("Avi Kassa", "hollywood actor")

//>>>>>>>>STOP


// const studentsFootball = [
// {name: 'Rich', score: 33}, 
// {name: 'Peter', score: 55}
// ];


// 1. Create a new array of objects, containing the name, score and isAboveAverage
// if the students has a score bigger that 50, the key isAboveAverage will be true, else
// the key isAboveAverage will be false. Use ternary operator
// Result expected



// ## Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: The Next Generation.
// Use filter() to filter the array of characters below
// const characters = [
//    { name: 'James T. Kirk', series: ['Star Trek'] },
//    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
//    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
//    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
// ]; 
// ## Exercise 3 NOT MANDATORY - send me the result by slack
// let colors = ["blue", "red", "red", "blue", "yellow"]
// Use the filter method to create an array without duplicates. The result should be
// ["blue","red","yellow"]
// white_check_mark
// eyes
// raised_hands



//>>>>>>>>>>>>>>>>>>>STOP>>>>>>>>>>>>>>>>>

// # Filter
// ## Exercise 1:  create a new array that filters only the positive value
// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];


let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];


// const "Name" = arryname.theaction ((element, index) => the condition equal to);
// console.log()


const positiveNum = numbers.filter((value) => value > 0);

console.log(positiveNum)


//>>>>>>>>>>>>>>>>>>>>>STOP>>>>>>>>>>>>>>>>

// ## Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: The Next Generation.
// Use filter() to filter the array of characters below

const characters = 
[

{ name: 'James T. Kirk', series: ['Star Trek'] },
{ name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
{ name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
{ name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine']}
];



const starFirst = characters.filter((value) => value["series"].includes(`Star Trek: The Next Generation`));
console.log(starFirst);


const nameGood = starFirst.map((value)=>value["name"])
console.log(nameGood)
















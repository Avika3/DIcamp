// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?

const person = {
	name: 'John Doe',
	age: 25,
	location: {
		country: 'Canada',
		city: 'Vancouver',
		coordinates: [49.2827, -123.1207]
	}
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


///>>>>>>>>>ANSWER: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207) 
// 🌟 Exercise 2: Display Student Info
// Instructions

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'


class displayStudentInfo (firstName,lastName){
	this.first : firstName;
	this.last : lastName;
	console.log(`Yur full name is ${first} ${last}`)
}

let studentIn = new displayStudentInfo({first: 'Elie', last:'Schoppik'});










// let TVClass = new TVType ("SONY", 3, 7)
// console.log(TVClass.volume)

// // TVClass.incrseVOL()
// TVClass.decreseVOL()


// class SmartTv extends TVType{
// 	constructor(banrdName, channelTV=1, volumeTV=1, hasNetflix = true){
// 		super(banrdName, channelTV, volumeTV)
// 		this.netflix = hasNetflix
// 	}
// }

// const smartTVNew = new SmartTv ("Samsung", 23, 20, false)
// console.log(smartTVNew)





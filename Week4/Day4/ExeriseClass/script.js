// Exercise ## Objects
// ## Exercise 1
// # Part I
// 1) Create a TV function constructor with 3 parameters : brand, channel and volume
// Channel should be 1 by default. Volume should be 50 by default.
// 2) Create properties brandTV, channelTV and volumeTV equal to the 3 parameters value.
// 2) Add methods to increase and decrease volume. When the methods are called it will
 // increase or decrease the volume by 1.
// 3) Create an object for the LG TV
// 4) Call the inscrease method, and check if the volume changed
// ## Part II
// 5) Create a subclass for Smart TV
// 6) It overrides the method increase, so it increase the volume by 10 and not by 1
// 6) Add a attribute of Netflix that should be equal to true by default



// class TVType {
// 	constructor (banrdName, channelTV=1, volumeTV=1){
// 		this.brand = banrdName;
// 		this.channel = channelTV;
// 		this.volume = volumeTV;
// 	}


// 	incrseVOL (){
// 		this.volume ++
// 		console.log(`The new vol is ${this.volume}`)

// 	}

// 	decreseVOL (){
// 		this.volume --
// 		console.log(`The new vol is ${this.volume}`)
// 	}


// }



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




let myObj = {
	name : "John",
	lastName : "Doe",
	age : 25,
	friends : ["Mark", "Lucie", "Ana"]
}

function chooseName (){
	// this.name = firstName;
	// this.lastName = lastName;


	console.log(`The keys is ${Object.keys(myObj)} and the value 
		is ${Object.values(myObj)}`);
// console.log(Object.values(myObj.friends));


}

chooseName()













// // The nested (inner) function is private to its containing (outer) function.

function outer() {

    // private
    function inner(){
    	
    }

    inner()
}

outer()
// inner() //not defined because it was created in the local scope


// //---
// // Inner function has access to the outer function scope
// //---


// // // the outer func : checkName() is going to be ran once
// // //the inner func, addExclamation() is going to run 3 times
function checkName() {
	let name = "John";

	function addExclamation() {
		name += "!";
		console.log("in the addExclamation func", 
			name);
	};

    addExclamation(); // in the addExclamation func John!
    addExclamation(); // in the addExclamation func John!!
    addExclamation(); // in the addExclamation func John!!!
}

checkName(); 
// addExclamation(); //not possible




// function card (){

//     function createCard (){

//     }

//     function addColor (){

//     }

//     function appendPage(){

//     }

//     createCard()
//     addColor()
//     appendPage()

// }

// card()


// //firstClass = document.body.firstElementChild;
// 	//firstClass = document.body.children[0];
// 	//firstClass = document.body.children[0].firstElementChild
// 	firstClass = document.getElementsByTagName("ul")[1]
// console.log (firstClass);

// //Stop >>>

// let getValue = document.getElementById("blue1").innerHTML;
// let betValue = document.getElementById("red1").innerHTML;
// let getP = document.getElementsByTagName("p");
	
// 	alert(`Step by Step is starting work` + getP[0].innerHTML );


// //console.log(getP);
// //STOP >>>>

// inputCheck = document.getElementsByTagName("input")[0].value = "Aviv";
// console.log(inputCheck)

// //STOP  >>>> 

// 	let CreateElement = document.createElement(`div`).value = `A New div element added by JS file`;

// 	console.log(CreateElement);

// //STOP  >>>> 
// 	let newTextNode = document.createTextNode('Here I am');

// 	console.log(newTextNode);

// //STOP  >>>> 
	
// 	let newDiv = document.createElement('div');
// 		newDiv.appendChild(newTextNode);

// 		document.body.appendChild(newDiv);
// 			console.log(newDiv)

// //Stop >>>>

// 	let changeHeader = document.getElementById("header").style.display.textContent = "Hello World!";
// 	let PrintInner = document.getElementsByTagName("div")[0].innerHTML = "Hello World Twice!"


// 		console.log(changeHeader,PrintInner);


// //Stop >>>>



// let deleteIt = document.getElementById("letCheckDelete");//.innerHTML;
// let deleteItInner = document.getElementById("HeaderDelete");//.innerHTML;

// 	//console.log(deleteIt,deleteItInner);

// deleteIt.removeChild(deleteItInner);

// //Stop >>>>


// let liElemnt = document.querySelectorAll('ul > li:last-child');
// for (let lis of liElemnt){
// 	alert(lis.innerHTML);
// }


// //Stop >>> 
// let checkColor = document.getElementById("selector");
// checkColor.style.background = "skyblue";
//   checkColor.style.display = "block";

// //Stop >>> 

// let elements = document.querySelectorAll('ul > li:last-child');

// for (let elem of elements){
// 	alert(elem.innerHTML);
// }

// //Stop >>> 

// for (let elemLink of document.body.children){
// 	if (elemLink.matches('a[herf="zip"')){
// 		alert("The archive reference:" + elemLink.herf);
// 	}
// }


// //Stop >>> 
// 	let chapter = document.querySelector(`.chapter`);
// 	alert(chapter.closest(`.book`));
// 	alert(chapter.closest(`.content`));
// 	alert(chapter.closest(`h1`));


//let divIt = document.getElementsByTagName('div');
//let divIt = document.body.children.firstElementChild;
let firsItem = document.querySelectorAll('ul > li; first-child');
console.log(firsItem);



























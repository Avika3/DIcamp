// # Review on Javascript
// ​
// #### Basics
// ​
// 1. How to access the second element of the array `let arr = [3, 7, 10]`
// ​

// let arr = [3, 7, 10]
// console.log (arr[1]);

//2. For the code below, what does `arrNums.splice(2, 0)` return?
//​
   // ```javascript`

   // let arrNums = [1, 2, 3, 4, 5]


        // answer :
        // `arrNums.splice(2, 0)` starting from index 2 and changing 0 values 
        //output: Uncaught SyntaxError: Identifier 'arrNums' has already been declared


//​
// 3. What is the result of the following code :
// ​
    //javascript
    // const oneTwoThree = [1, 2, 3]
    // const sevenEightNine = [7, 8, 9]

    // const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
    // console.log(all)

        // Answer: 
        // Output is: (9) [4, 5, 6, 1, 2, 3, 7, 8, 9]
        // creating a new array of the two variables but adding the number 4,5,6 to the first array



// ​
// 4. What does the following code print to the console?
// ​
//    ```javascript
// let golf = {
//  type: "sport",
//  clubs: {
//    high_end: "taylor made",
//    low_end: "rusty basement clubs"
// }
// }  
// golf.clubs.high_end = "callaway";
// console.log(golf.clubs.high_end);

        // Answer: the output is: callaway 
        //The variable value changed by this golf.clubs.high_end = "callaway"; code  


// 5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.
// ​
    //javascript
   //  const x = function(a, b){
   //     return a*b;
   // } 

    //Answer: Yes we can, but we need to invoke it after the function 
    // We can invoke it by "const retrunsValue = x(3,3) console.log(retrunsValue);" 
    //for example and the output will be 9

// ​
// 6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain
// ​
//     ```javascript
// function x() {
//  a = 5;
// }
//     ```

        //Answer: No, if this created inside the function is called local variable 
        //and no one can access to it except to function blcok code


// ​
// #### Functions
// ​
// 7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?
// ​
//     ```javascript
// function sayHello() {
//    return "Hello, ";
// }
// function greeting(helloMessage, name) {
//   console.log(helloMessage() + name);
// }
// greeting(sayHello, "JavaScript!");
   // ```

    //Answer: It returns: "Hello, Javascript" because the Hello taken from anonymous function


// 8. Transform this function into an arrow function
// ​
//       ```javascript
// function sum(num1, num2){
//   return num1 + num2
// }

// sum(40,2)
// sum(42,0)
// console.log("the answer to everything is", sum(42,0))


// Answer: 
    // const sum = (num1,num2) => {
    //     return num1*num2;
    //   } 
    
    //  const outputValue = sum(40,2)
    //  const outputValue1 = sum(42,0)
    //   console.log(outputValue)
    //   console.log(outputValue1)

//       ```
// ​
// 9. What does the following code print to the console? Explain the process and concept behind it
// ​
//      ```javascript
// function foo () {
//    function bar() {
//      return "Poppin' bottles";
//  }
//  return bar();
// }
// console.log(foo());
//      ```

        // Answer: The inside function (Bar) returns the value "Poppin'bottles" and the function foo get/returns the 
        //returned values from bar function  and out of the function the console that printed is foo
        // (It means the values from bar in this case)


// ​
// #### DOM
// ​
// 10. Which of the following events will you add in the `addEventListener()`method? 
//       ☐ click
//       ☐ onclick

    //Answer: Click, it count the click.

// ​
// 11. Does the `addEventListener()` method allow you to add many events to the same element?
// ​
//     ```javascript
// x.addEventListener("mouseover", func1);
// x.addEventListener("click", func2);
// x.addEventListener("mouseout", func3);`
//     ```

        //Answer: Yes, but the events type should be differnt 

// ​
// 12. DOM exercise
// ​
//       1. Part I : Create a button in your HTML page, 
//          when the user will click the the button a paragraph will be added on the 
//          DOM with the content "New Paragraph". Use arrow functions

// let clickCount = document.getElementById("exBtn")
// let eventClick = addEventListener("click", clickCount)
// let newParagraph = document.createElement ("p")
// let text = document.createTextNode(eventClick)
// eventClick.appendChild(text) 

// const DOM = ()=> {
//     for (eventClick == true){
//         totalPar += newParagraph
//         return totalPar;
//     } else {

//         console.log ("Not Works")
//     }

// }

// console.log(DOM);



// ​
//       2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red
// ​



// #### Array Methods
// ​
// 14. What is the value of `passed` in the following code?
// ​
//      ```javascript
// let marks = [67, 60, 89, 90, 67, 42];

// let passed = marks.every(function(m) {
//     return m >= 50;
// });
//      ```

        //Answer: The passed value here is False" 

// ​
// 15. What does the following code log?
// ​
//    ```javascript
// let nums = [10, 50, 88];

// let bignums = nums.filter(function(n) {
//   return n > 10;
// });

// console.log(bignums);



        //Answer: the values that returns is : 50, 88. Bigger than 10 

//    ```
// ​
// 16. Use a javascript array method to square the value of every element in the array. 
// ​
//    ```javascript
// const input = [ 1, 2, 3, 4, 5 ];

// const calculator = ()=> {
//     for (let value of input){
//         let totalSum = value * value
//         console.log(totalSum);  // [ 1, 4, 9, 16, 25]
//     }
// } 
// calculator()



//    ```
// ​
// 16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 
// ​
//      ```javascript

// const secondInput = [ 1, -4, 12, 0, -3, 29, -150];;
// let postive = 0;
// const two = secondInput.map(total);

// function total(value, index, array) {
//     if (value > postive){
//       postive += value ;
//       console.log(postive);
//       //return postive;
//   }

// }

//      ```
// ​
// 17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.
// ​
//      ```javascript
// const input = 'George Raymond Richard Martin';


//Answer: 

// const initials = input.split(' ')[0]
//      console.log(initials)//'GRRM'

// const initials = input.split(' ').shift();
//           console.log(initials)//'GRRM'

// const initials = input.charAt(0)
//  console.log(initials)//'GRRM'


//      ```
// ​
// #### Object and Classes
// ​
// 18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example
// ​
//Answer: 

// function referenceOne (first, last, favoriteNum){
//     return `Hi my name is ${first} ${last} and my favorite number is ${favoriteNum}`;
// }

// referenceOne = referenceOne("Avi","kassa", 15 );
// console.log(referenceOne);


// 19. What will be printed in the console
// ​
//     ```javascript
// function Item(nameInfo, priceInfo) {
//  this.name = nameInfo;
//  this.price = priceInfo;
//  this.displayInfo = function() {
//      console.log(this.name + " is for $ " + this.price)
//  }
// } 
// //​
// const cake = new Item("Chocolate Cake", 10);
// cake.displayInfo();



//Answer: The console will print chocolate Cake is for $10 

//     ```
// ​
// 20. Refactor this code using Classes

//Answer: Refactor to class 
//         class item{
//     constructor (nameInfo, priceInfo){
//         this.name = nameInfo;
//         this.price = priceInfo;

//         console.log (this.name + "is for $" + this.price)
//     }
// }

// const DONE = new item ("Chocolate Cake", 10)
// console.log (DONE)

// ​
// #### Promises
// ​
// 21. What will be the output and why ? What will be the state of the promise ?
// ​
//     ```javascript


// Promise.resolve('Success!')
// .then(data => {
//     return data.toUpperCase()
// })
// .then(data => {
//     console.log(data)
// })


// Answer: The printed value is Success! on Upper Case

// ​
// 22. What log will be made by the following code, after 2 seconds?
// ​
//     ```javascript
    // const p = new Promise(function(resolve, reject) {
    //    setTimeout(function() {
    //       resolve("OK");
    //    }, 2000);
    // });

    // p.then().then(function(data) {
    //    console.log(data);
    // });
//     ```

        //Answer: Will be printed "OK"
// ​


// 23. Consider the following async function and its output. 
//What will be displayed to the console when calling the `f()` function? Explain the process
// ​
//     ```javascript
// async function f() {
//   let result = 'first!';
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000);
// });

//   result = await promise;

//   console.log(result);
// }

// f();
//     ```

        // Answer: Step 1: For the first time, promise function will run and transfer tthe result of promise (in this case "done!")
         //step 2: waiting untill await will completed and transfering the promise data to "result"
         //Step 3: printing the result data. (Which transfred from promise)

// ​
// 24. Use async await, and fetch a fact on cats and display it `https://catfact.ninja/fact`
//     1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
//     2. Make sure to use try and catch


async function cats (){
    const data = await fetch (`https://catfact.ninja/fact`);
    const result = data.json();
    console.log(result)

   //return result;

   function diplayCats(){
    result.forEach((value)=>{
        console.log(result);
        let div = document.getElementById("container");
        let text = document.createTextNode(value);
        div.appendChild(text);
        document.body.appendChild(div);
    })
}

diplayCats();
}

cats();















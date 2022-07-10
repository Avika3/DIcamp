function myAge(name, age) {
    let mumAge = age * 2;    
    let dadAge = age * 1.2;
    console.log(`My mum age is ${mumAge} and my daddy age is ${dadAge}`)
}

myAge("Avi", 25)

//Stop >>> 

function checkReturn (car , type){

    console.log(car,type)

}
checkReturn("Skoda", "Rapid")
checkReturn("Kia", "Picanto")
checkReturn("Mercedes", "c500")
checkReturn("Toyota", "corola")

//Stop >>> 

function David (){
    console.log ("Empty fuction let's check if this work")
}

David();

//Stop >>> 

var name = ("Debii");
const  Modern = ("Sara");
let nameOne = ("All");
console.log (`${name} ${Modern} ${nameOne}`) 

//Stop >>> 

    let boomCheck = "Works"
function boom(name, age){

    
    console.log(`Let check if it is work ${name} ${age} and it is ${boomCheck}`)

}
    boom('Aviv', 10);
    boom('Aviv2', 11);
    boom('Aviv3', 12);
    boom('Aviv4', 13);


//     console.log(boomCheck);

//Stop >>> 
    
    function myAge(name, ageNum){

        mAge = ageNum * 2;
        dAge = ageNum * 1.5;

        console.log(`My mum age is ${mAge} and my daddy age is ${dAge}`)

    }   

    // myAge("Avi", 13)

//  Stop >>> 
    function ageReturn (Nname, Anum){

        mAge = Anum * 2;
        dAge = Anum * 1.5;

        let resultWork = `My mum age is ${mAge} and my daddy age is ${dAge}`

        return resultWork
        
        
    }   

   let returnResult = ageReturn("Avi", 13)

    console.log (returnResult);



// Stop >>>     
    
     function fure (nameOne, ageOne){


            checkAfe = ageOne * 3

        if (checkAfe === 12){
            return checkAfe
        }

         return (`The number is wrong and differnt from the needed`)

    }

    fure ("Avi", 31);
    fure ("Avivit", 11);
    fure ("Aviv", 24);

    let danir = fure("Avivit", 4)

    console.log(danir);



// Stop >>> 

        let PersonObject = {
            name: "David",
            skin: "White",
            eyeColor: "Blue", 
            allDes: function(){
                console.log(`I Love all my peropertie and those my describe ${this.name} ${this.skin} ${this.eyeColor}`)
            }
        }
        PersonObject.allDes()


//Stop >>> 

//Create a function called infoAboutMe() that takes no parameter.
//The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
//Call the function.

        function infoAboutMe () {
            console.log ("My hobbie is play football and play foker")

        }
        infoAboutMe()



//Part II : function with three parameters

        function infoAboutPerson(personName, personAge, personFavoriteColor){

        console.log(`You name is ${personName}, you are ${personAge} 
            years old, your favorite color is ${personFavoriteColor}`)
        
        }
        
        infoAboutPerson("David", 45, "blue")
        infoAboutPerson("Josh", 12, "yellow")




//Stop >>> 



// Exercise 2 : Tips
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

       function calculateTip(name,Number){
       
        if(Number <= 50){
            let OneSum = Number * 0.20;
                console.log(`The bill is ${Number} and we need include 20% as service therefore the bill will be ${OneSum + Number}`)
            }
        if(Number >= 50){
            let twoSum = Number * 0.15;
                console.log(`The bill is ${Number} and we need include 20% as service therefore the bill will be ${twoSum + Number}`)
            }
        if(Number >= 50 && Number <= 200){
            let threeSum = Number * 0.10;
                console.log(`The bill is ${Number} and we need include 20% as service therefore the bill will be ${threeSum + Number}`)
            }
        }
       //  } 
                 

       
       calculateTip (`John`,900)
       calculateTip (`Dani`,700)
       calculateTip (`Bani`,201)




//Stop >>> 


//  Exercise 3 : Find The Numbers Divisible By 23 Instructions

                    
        function divisible(){    
        for (i = 0; i <= 500; i++)
    
        if (Number.isInteger(i / 23)){
            console.log (i)
        }
        }
        divisible();



//Stop >>> 


//At the end, console.log the sum of all numbers that are divisible by 23.
   
     
        function divisiblesum()
        {    
            let sum = 0 
        for (i = 1; i <= 500; i++)
    
        if (Number.isInteger(i / 23))
           
           sum += i    
           return (sum);        
        }
        
       
  let toatlSun =  divisiblesum()

console.log (toatlSun);



//Stop >>> 


     
        function divisiblesum()
        {    
            let sum = 0 
        for (i = 1; i < 50; i++)
    
        if (i % 25 == 0)
           
           sum += i    
           return (sum);        
        }
        
       
  let toatlSum =  divisiblesum()

console.log (toatlSum);


//Stop >>> //Stop >>> //Stop >>> 




        function isDivisible(divisor)
        {    
            let sum = 0 
        for (i = 1; i <= 500; i++)        
        if (Number.isInteger(i / divisor))
          
           sum += i    
          return (sum); 

        }
        

           isDivisible (3)
    
       
        let TotoSum =  isDivisible(3)

        console.log (TotoSum);





// //Exercise 4 : Shopping List


        let stock = { 
            "banana": 6, 
            "apple": 0,
            "pear": 12,
            "orange": 32,
            "blueberry":1
        }  

        let prices = {    
            "banana": 4, 
            "apple": 2, 
            "pear": 1,
            "orange": 1.5,
            "blueberry":10
        } 



        let shoppingList = stock["banana","apple", "orange"];
            console.log(shoppingList);



            function isInStock(item){
              if(stock[item] && stock[item]>0){
                return true;
              }
              return false;
            }

            function itemPrice(item) {
              return prices[item];
            }

            function updateStock(item){
              stock[item]--;
            }

            function myBill(){
              let sum = 0
              for (var i = 0; i < shoppingList.length; i++) {
                let item = shoppingList[i];
                if(isInStock(item)){
                  console.log(item, itemPrice(item));
                  updateStock(item);
                  sum += itemPrice(item)
                }
              }
              return sum;
            }
            console.log(myBill())

            console.log(stock);

// Stop >>>





// Stop >>>
            //Exercise 6 : Vacations Costs  Define a function called hotelCost() 


                    function hotelCost(getNights, ){

                    //let getNights = prompt("How many nights you would to stay?");                    
                    
                       while (isNaN(parseInt(getNights))){        
                        getNights = prompt("Please enter numbers!")
                        
                    } 
                        let getTotal = getNights * 140;
                        return (getTotal);
                    }     

// Stop >>>
            //2. Define a function called planeRideCost().

                function planRideCosts(getDestantion){

                    //let getDestantion = prompt("What your destantion ?");

                    while (!isNaN(parseInt(getDestantion))){        
                             getDestantion = prompt("What your destantion ?");
                    } 
                        if (getDestantion.toLowerCase() === 'london')
                    {
                            return (`The cohsen destination cost is: 183$`);                       
                    }
                        if (getDestantion.toLowerCase() === 'paris')
                    {
                             return (`The cohsen destination cost is: 220$`);
                    } return (`The cohsen destination cost is: 300$`);
                                                        
                    }
                

// Stop >>>
                // 3. Define a function called rentalCarCost()



                function rentalCarCost(rentalCarCost1){

                   // let rentalCarCost = prompt("Hello, How many days you want to rent the car?");

                    while (isNaN(parseInt(rentalCarCost1))){        
                         rentalCarCost1 = prompt("Hello, How many days you want to rent the car? Note: You can enter numbers only!")

                     }
                        if (rentalCarCost1 >= 10){
                        priceByDays = rentalCarCost1 * 40 
                        priceAfterDys = priceByDays * 0.05
                        totalSUm = priceByDays - priceAfterDys

                        return (`The rent cost for ${rentalCarCost1} days costs ${totalSUm}$ after discount of 5%`);
                     } 
                     priceByDays = rentalCarCost1 * 40
                     return (`The rent cost for ${rentalCarCost1} days, costs ${priceByDays}$`); 
                    }



// Stop >>>
             // Define a function called totalVacationCost() that returns the total cost 
             //of the user’s vacation by calling the 3 functions that you


             function totalVacationCost (){

                let getNights = prompt("How many nights you would to stay?");  
                let getDestantion = prompt("What your destantion ?");
                let rentalCarCost1 = prompt("Hello, How many days you want to rent the car?");
                console.log (`The hotel costs: ${hotelCost(getNights)}`)
                console.log (`The ticket costs: ${planRideCosts(getDestantion)}`)
                console.log (`The car cost: ${rentalCarCost(rentalCarCost1)}`)

             }


             totalVacationCost ();
        




































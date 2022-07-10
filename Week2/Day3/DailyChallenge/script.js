

// 🌟 Exercise 1 : List Of People
// Instructions
// 


// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
        

// Write code to replace “James” to “Jason”.


                    let peopleShift = ["Greg", "Mary", "Devon", "James"];
                    peopleShift.shift();
                    console.log (peopleShift);


// Write code to add your name to the end of the people array.

                let peoplePush = ["Greg", "Mary", "Devon", "James"];
                 peoplePush.splice(3,1,"AviKa")

                    console.log(peoplePush);



// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

    let peopleIndexOf = ["Greg", "Mary", "Devon", "James"];

        maryIndex = peopleIndexOf.indexOf("Mary");

        console.log(maryIndex);



// Write code to make a copy of the people array using the slice method.

    let peopleSlice = ["Greg", "Mary", "Devon", "James"];

           peopleSlice.slice();

            console.log(peopleSlice);



// Write code that gives the index of “Foo”. Why does it return -1 ?



             let peopleFoo = ["Greg", "Mary", "Devon", "James"];

                peopleFoo1 = peopleFoo.indexOf("Foo"); 

                console.log (peopleFoo1);

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

             let peopleLast = ["Greg", "Mary", "Devon", "James"];

                peopleLast1 = peopleLast[peopleLast.length - 1]; 

                console.log (peopleLast1);




// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.



        let peopleLoop = ["Greg", "Mary", "Devon", "James","Avi", "Liad", "Dvir", "Dani"];

                for ( Iloop = 0; Iloop < peopleLoop.length; Iloop++){
                    console.log(peopleLoop[Iloop]);
                    if (peopleLoop[Iloop] === 'Avi'){break}
                }; 



// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus


                let color = ["Black","Blue","Ornge","Yellow","Purple","Red"];

                        





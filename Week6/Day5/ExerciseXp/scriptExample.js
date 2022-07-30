

// function starWars(){
//     let characters = [];

//     function createCharacter(firstName, lastName = "Smith"){
//         let fullName = (`${firstName} ${lastName}`);
//         characters.push(fullName)


//     }

//     function displayCharacter (){
//         characters.forEach((element)=> {
//             console.log(createCharacter)
//             let div = document.getElementById("container");
//             let text = document.createTextNode(element);
//             div.appendChild(text);
//             document.body.appendChild(div);

//         })




//     }

//     createCharacter("Avi", "Kassa ");
//     createCharacter("Dani ");
//     displayCharacter ()
// }


// starWars()

// const posts = [
// {title: 'Post One', body: 'This is post one'},
// {title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts(){
//     setTimeout(()=> {
//         let ouptput = '';
//         posts.forEach((post,index) => {
//             ouptput += `<lis> ${post.title} </li>`

//         });
//         document.body.innerHTML = ouptput;
//     }, 1000);

// }
// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback();

//     },3000);
// }


// getPosts();
// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);



// const posts = [
// {title: 'Post One', body: 'This is post one'},
// {title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts(){
//     setTimeout(()=> {
//         let ouptput = '';
//         posts.forEach((post,index) => {
//             ouptput += `<lis> ${post.title} </li>`

//         });
//         document.body.innerHTML = ouptput;
//     }, 1000);

// }
// function createPost(post){
//     return new Promise ((resolve,reject) => {
//       setTimeout(() => {
//         posts.push(post);

//         const error = false; 

//         if (!error){
//             resolve();
//         }else {
//             reject(`Something went wrong`);
//         }

//     },3000);

//   });

// }



// // getPosts();
// createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts)
// .catch(err => console.log(err));

// // async / Await 
// async function avi (){
//     await createPost({title: 'Post Three', body: 'This is post three'});
//     getPosts();
// } 
// avi ();

//async / Await with fetch 

// async function fetchData() {
//     const result = await fetch('https://catfact.ninja/fact3');
//     const data = result.json();
//         console.log(data);        // body...
//     }

//     fetchData();

//catch(error => console.log(error));
// const promise1 = Promise.resolve(`Hello World`);
// const promise2 = 10;
// const promise3 = new Promise ((resolve, reject) => 
//     setTimeout(resolve,2000, `GoodBye`));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json());

// Promise.all([promise1, promise2, promise3,promise4]).then(values => console.log(values));

const robots = [
{
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  image: 'https://robohash.org/1?200x200'
},
{
  id: 2,
  name: 'Ervin Howell',
  username: 'Antonette',
  email: 'Shanna@melissa.tv',
  image: 'https://robohash.org/2?200x200'
},
{
  id: 3,
  name: 'Clementine Bauch',
  username: 'Samantha',
  email: 'Nathan@yesenia.net',
  image: 'https://robohash.org/3?200x200'
},
{
  id: 4,
  name: 'Patricia Lebsack',
  username: 'Karianne',
  email: 'Julianne.OConner@kory.org',
  image: 'https://robohash.org/4?200x200'
},
{
  id: 5,
  name: 'Chelsey Dietrich',
  username: 'Kamren',
  email: 'Lucio_Hettinger@annie.ca',
  image: 'https://robohash.org/5?200x200'
},
{
  id: 6,
  name: 'Mrs. Dennis Schulist',
  username: 'Leopoldo_Corkery',
  email: 'Karley_Dach@jasper.info',
  image: 'https://robohash.org/6?200x200'
},
{
  id: 7,
  name: 'Kurtis Weissnat',
  username: 'Elwyn.Skiles',
  email: 'Telly.Hoeger@billy.biz',
  image: 'https://robohash.org/7?200x200'
},
{
  id: 8,
  name: 'Nicholas Runolfsdottir V',
  username: 'Maxime_Nienow',
  email: 'Sherwood@rosamond.me',
  image: 'https://robohash.org/8?200x200'
},
{
  id: 9,
  name: 'Glenna Reichert',
  username: 'Delphine',
  email: 'Chaim_McDermott@dana.io',
  image:'https://robohash.org/9?200x200'
},
{
  id: 10,
  name: 'Clementina DuBuque',
  username: 'Moriah.Stanton',
  email: 'Rey.Padberg@karina.biz',
  image:'https://robohash.org/10?200x200'
}
];

class getCards {
  constructor(card,index,cardID,cardName,cardUserName,cardImage,cardEmail){
    this.id = cardID; 
    this.name = cardName;
    this.username = cardUserName;
    this.email = cardEmail;
    this.image = cardImage;

    robots.forEach((card,index)=>{
      let newRobot = document.createElement("div");
      newRobot.classList.add("card")
      newRobot.setAttribute("id", index+1)
      let robotText = document.createTextNode(card.name);
      newRobot.appendChild(robotText)
      document.querySelector("#root").appendChild(newRobot)


//       let newEmail = document.createElement("div");
//       newEmail.classList.add("emailInfo")
//       newEmail.setAttribute("id", index+10)
//       let emailText = document.createTextNode(card.email);
//       newEmail.appendChild(emailText)
//       document.querySelector("#root").appendChild(newEmail)

})
  }
}



let cardBox = new getCards()
// let setEmail = new getEmail()
// cardBox.setEmail()

//console.log(newObj.name)




//console.log(cardBox.cardName, cardBox.email)
//cardBox.fight()
//harryChar.powerDrink("yellow")

// let newObj = new Second()
// // {username:"John"}
// console.log(newObj.username)
// console.log(newObj.age)


// class Second extends getCards{
//   constructor(card,index){
//     //create attribute
//     super()
//     this.age = 12
//   }

// }



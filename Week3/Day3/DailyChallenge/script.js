
// 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)
 let colors = ["blue", "yellow", "green", "pink"];

function addButton (){
  let div = document.getElementById("container")
 
 for (let i = 0; i < colors.length; i++) {

  let btn = document.createElement("button");
  let text = document.createTextNode(colors[i]);
  btn.classList.add("btn-big");
  btn.addEventListener("click", changeBackGround)
  btn.appendChild(text);
  div.appendChild(btn);
   
 }

}
addButton()

function changeBackGround(event){
  console.log(colorBtn = event.target.textContent)
  document.body.style.backgroundColor = colorBtn;
}

//STOP >>>

let btnImage = document.getElementById("btnimg")
let div = document.getElementById("container")
btnImage.addEventListener("click", addImages)

btn


function addImages(){

  for (let img of pics){
    let newimg = document.createElement("img")
    newimg.setAttribute("src", pics[1]);
    div.appendChild(newimg);

  }
}
/*
* Excercise 1
*
*/
const colorblock = document.querySelector("#color-block");
colorblock.addEventListener("click", changeColor);
/*
* Then write a function that changes the text and the color inside the div
*
*/
function changeColor(){
    const color_1 = "#F08080";
    const color_2 = "#666666";
    var text = document.querySelector("#color-name");
    console.log(colorblock.style.backgroundColor);
    if(colorblock.style.backgroundColor === "rgb(240, 128, 128)"){
        colorblock.style.backgroundColor = color_2;
        text.innerHTML = color_2;
    }
    else{
        colorblock.style.backgroundColor = color_1;
        text.innerHTML=color_1;
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const buttn = document.querySelector("#convertbtn");
buttn.addEventListener("click", convertTemp);
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
function convertTemp(){
    var Fdegree = document.querySelector("#f-input").value;
    var Cdegree = ((Fdegree-32)*5)/9;
    document.querySelector("#c-output").innerHTML = Cdegree;
}



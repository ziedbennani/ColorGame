var numSquares = 6;
var colors = generateColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("message");
var button = document.getElementById("button");
var backColor = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

for (var i=0 ; i<squares.length ; i++){
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;  
        if (clickedColor == pickedColor){
            msgDisplay.textContent = "Correct"
            backColor.style.backgroundColor = pickedColor;
            changeColors(clickedColor);
            button.textContent ="Play Again ?";
        }
        else{
            this.style.backgroundColor = "#232323";
            msgDisplay.textContent = "Try Again"
        }
    });
}

button.addEventListener("click", function(){
    reset();
});


for (var i = 0; i < modeButtons.length; i++ ){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
}

function reset(){
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    button.textContent = "New Colors ?";
    msgDisplay.textContent="";
    backColor.style.backgroundColor = "lightseagreen";
    for (var i=0 ; i<squares.length ; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
         
    }
}

function changeColors(color){
    for (var i=0 ; i<colors.length ; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num){
    var arr = []
    for (var i = 0 ; i<num ; i++){
       arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
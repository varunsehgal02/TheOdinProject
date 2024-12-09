let color= "black";
let click = true;

function populateBoard(size) {  
    let board = document.querySelector('.board');
    let square = board.querySelectorAll('div');
    square.forEach((div) => div.remove()); // It remove all the divs and in next line we add new divs
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover',colorSquare);//we add an event listener to change the color
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", square);
    }
}

// Here is the function to call the size between 2 and 100
function changeSize(input){

    if (input >= 2 && input <= 100){
        populateBoard(input);
        document.querySelector('.error').style.display = "none";
    }
    else{
       document.querySelector('.error').textContent = "Please enter a number between 2 and 100";
    }
}
function changeColor(choice){   
    color = choice;
}
// Here is the function to change the color
function colorSquare() {
    if (click){
        if (color === "random"){
            this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        }
        else{
            this.style.backgroundColor = color;
        }
    }
}
function resetBoard(){
    let board = document.querySelector('.board');
    let square = board.querySelectorAll('div');

    square.forEach((div) => div.style.backgroundColor = 'white');
}
populateBoard(16);

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != "BUTTON" ){
        if(e.target.tagName != "INPUT"){
            click = !click;
            if (click){
                document.querySelector('.mode').textContent = "Mode: Coloring";
            }
            else{
                document.querySelector('.mode').textContent = "Mode: Not Coloring";
            }
        }        
    }
});

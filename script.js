
window.addEventListener('load', (event) => {
    generateGrid(25);
    drawBlack();
})


function generateGrid(num){

    const container = document.querySelector('.container')
    const squares = container.querySelectorAll('div');
    squares.forEach((div) => div.remove());
   
    for (let i = 0; i < (num); i++){
        let row = document.createElement('div');
        row.className = 'row';
            for(let x = 0; x < num; x++){
                let cell = document.createElement ('div');
                cell.className = 'gridSquare';
                row.appendChild(cell);
            }
        container.appendChild(row);

 }
 console.log(squares)
}
function changeSize(value){
    
    if (value <= 200 && value >= 10){
        generateGrid(value);
    }  else {
      const popup = prompt("That's a strange number, could you try something between 10 and 200?")
      changeSize(popup);
    }
}

function draw(color){
    console.log(color)
switch (color) {
    case 'black':
        drawBlack()
        break;
    case 'color':
        drawColor();
        break;
    
    case 'white':
        erase();
        break;
        
    default:
        break;
}
}


function drawBlack(){
    const container = document.querySelector('.container')
    const squares = container.querySelectorAll('div');
    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener('mouseenter', function(event) {
            squares[i].style.backgroundColor = "black";
        } )
}
}

function drawColor(){
    const container = document.querySelector('.container')
    const squares = container.querySelectorAll('div');
    for (let i = 0; i < squares.length; i++ ) {
        const color = '#'+Math.random().toString(16).substr(2,6)
        squares[i].addEventListener('mouseenter', function(event) {
            squares[i].style.backgroundColor = color;
        } )
    }
}

function erase(){
    const container = document.querySelector('.container')
    const squares = container.querySelectorAll('div');
    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener('mouseenter', function(event) {
            squares[i].style.backgroundColor = "white";
        } )
}

}


const rows = 10;// set grid rows and columns and the size of each square
const columns = 10;
const squareSize = 50;

const gameBoardBox = document.getElementById("gameboard");// get the container element

for (i = 0; i < columns; i++) {// make the grid columns and rows
	for (j = 0; j < rows; j++) {
		

		let square = document.createElement("div");	// create a new div HTML element for each grid square and make it the right size
		gameBoardBox.appendChild(square);

		square.id = 's' + j + i;//this gives the tiles an id based on their locations example s83			
		
		let topPosition = j * squareSize;
		let leftPosition = i * squareSize;			
		
		square.style.top = topPosition + 'px'; // I used this to trick the game into
		square.style.left = leftPosition + 'px';						
	}
}


let hits = 0;
let shotsFired = 0;
let plunder = 0;

const gameBoard = [
				[0,0,0,0,0,0,0,0,1,0],
				[0,0,0,0,0,0,0,0,1,0],
				[1,1,1,1,1,0,0,0,1,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,1,0,0,0,0,0],
				[0,0,0,0,1,0,0,0,0,0],
				[0,0,0,0,1,0,0,0,0,0],
				[0,0,0,0,1,0,0,1,1,1],
				[1,1,0,0,0,0,0,0,0,0]
				]

gameBoardBox.addEventListener("click", fireCannons, false);

function fireCannons(b) {

	if (b.target !== b.currentTarget) {

		let row = b.target.id.substring(1,2);//this chooses that targets based on their row and column id
		let column = b.target.id.substring(2,3);

				

		if (gameBoard[row][column] == 0) {
			b.target.style.background = '#e2e3e9';//this changes the tile to white
            gameBoard[row][column] = 3;//3 is a miss
            shotsFired++;//Each time you shoot the counter goes up
            console.log(shotsFired);
			

		} else if (gameBoard[row][column] == 1) {
			b.target.style.background = '#860606';//this changes the tile to red
            gameBoard[row][column] = 2;//2 is a hit
			shotsFired++;
            hits++;//this allows me to use an endgame function by counting the number of hits
            console.log(shotsFired);
			if (hits == 17) {
                    setTimeout(function() {alert("The merchant ships have been wrecked! Plunder awaits!"); }, 50);//I timed this out so it wouldn't interupt the tile changing color
                    plunder++;
            } 
        }
    }if (shotsFired == 40) {
        setTimeout(function() {alert("The merchant ships have escaped while we wasted our cannon shots!"); }, 50);
    }    
}
console.log(gameBoard);

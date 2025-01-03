const gameBoard = {
    board: [
            ["", "", ""],
            ["", "", ""], 
            ["", "", ""]
    ],
};

const players = function(){
function newPlayer(name, symbol) {
    return {
        name: name,
        symbol: symbol,
    };
}

const submitButton = document.querySelector(".player-form")


function createTwoPlayers() {
    submitButton.addEventListener('submit', function(event) {
        event.preventDefault();

        const playerOneName = document.getElementById('player1-name').value;
        const playerTwoName = document.getElementById('player2-name').value;
        const playerOneSymbol = document.getElementById('player1-symbol').value;
        const playerTwoSymbol = document.getElementById('player2-symbol').value;

        const playerOne = newPlayer(playerOneName, playerOneSymbol);
        const playerTwo = newPlayer(playerTwoName, playerTwoSymbol);

        
        gameState.playerOne = playerOne;
        gameState.playerTwo = playerTwo;


        
        gameController();
    })
}

    return {
       createTwoPlayers: createTwoPlayers
    }

}



const gameController = function(){
    let currentTurn = 0;

    const currentPlayer = function(){
        const players = [gameState.playerOne, gameState.playerTwo];
        return players[currentTurn];
    }

    const updateText = function(cell){
        const player = currentPlayer();
        cell.textContent = player.symbol; 
    }

    const switchPlayer = function(){
        currentTurn = (currentTurn + 1) % 2; 
    }

    const gameOver = function() {
        if (checkWinner()) {
            alert(`${currentPlayer().name} Wins!`);
            resetGame();
        } else if (checkDraw()) {
            alert("It's a Draw!");
            resetGame();
        }
    }

    const checkWinner = function() {
        for (let row = 0; row < 3; row++) {
            if (gameBoard.board[row][0] === gameBoard.board[row][1] && gameBoard.board[row][1] === gameBoard.board[row][2] && gameBoard.board[row][0] !== "") {
                return true; 
            }
        }
        for (let col = 0; col < 3; col++) {
            if (gameBoard.board[0][col] === gameBoard.board[1][col] && gameBoard.board[1][col] === gameBoard.board[2][col] && gameBoard.board[0][col] !== "") {
                return true; 
            }
        }
        if (gameBoard.board[0][0] === gameBoard.board[1][1] && gameBoard.board[1][1] === gameBoard.board[2][2] && gameBoard.board[0][0] !== "") {
            return true; 
        }
        if (gameBoard.board[0][2] === gameBoard.board[1][1] && gameBoard.board[1][1] === gameBoard.board[2][0] && gameBoard.board[0][2] !== "") {
            return true; 
        }
        return false; 
    }

    const checkDraw = function() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (gameBoard.board[row][col] === "") {
                    return false;  
                }
            }
        }
        return true;  
    }

    const resetGame = function() {
        gameState.playerOne = null;
        gameState.playerTwo = null;
        gameBoard.board = [
            ["", "", ""],
            ["", "", ""], 
            ["", "", ""]
        ];
        allCells.forEach(cell => cell.textContent = "");
    }

    cellOne.addEventListener("click", function() {
        if (cellOne.textContent === "") {
            updateText(cellOne);
            gameBoard.board[0][0] = currentPlayer().symbol;
            gameOver();
            if (!checkWinner() && !checkDraw()) {
                switchPlayer();
            }
        }
    });

    cellTwo.addEventListener("click", function() {
        if (cellTwo.textContent === "") {
            updateText(cellTwo);
            gameBoard.board[0][1] = currentPlayer().symbol;
            gameOver();
            if (!checkWinner() && !checkDraw()) {
                switchPlayer();
            }
        }
    });

    cellThree.addEventListener("click", function() {
        if (cellThree.textContent === "") {
            updateText(cellThree);
            gameBoard.board[0][2] = currentPlayer().symbol;
            gameOver();
            if (!checkWinner() && !checkDraw()) {
                switchPlayer();
            }
        }
    });

    cellFour.addEventListener("click", function() {
        if (cellFour.textContent === "") {
            updateText(cellFour);
            gameBoard.board[1][0] = currentPlayer().symbol;
            gameOver();
            if (!checkWinner() && !checkDraw()) {
                switchPlayer();
            }
        }
    });

    cellFive.addEventListener("click", function() {
        if (cellFive.textContent === "") {
            updateText(cellFive);
            gameBoard.board[1][1] = currentPlayer().symbol;
            gameOver();
            if (!checkWinner() && !checkDraw()) {
                switchPlayer();
            }
        }
    });

    cellSix.addEventListener("click", function() {
        if (cellSix.textContent === "") {
            updateText(cellSix);
            gameBoard.board[1][2] = currentPlayer().symbol;
            gameOver();
            if (!checkWinner() && !checkDraw()) {
                switchPlayer();
            }
        }
    });

    cellSeven.addEventListener("click", function() {
        if (cellSeven.textContent === "") {
            updateText(cellSeven);
            gameBoard.board[2][0] = currentPlayer().symbol;
            gameOver();
            if (!checkWinner() && !checkDraw()) {
                switchPlayer();
            }
        }
    });

    cellEight.addEventListener("click", function() {
        if (cellEight.textContent === "") {
            updateText(cellEight);
            gameBoard.board[2][1] = currentPlayer().symbol;
            gameOver();
            if (!checkWinner() && !checkDraw()) {
                switchPlayer();
            }
        }
    });

    cellNine.addEventListener("click", function() {
        if (cellNine.textContent === "") {
            updateText(cellNine);
            gameBoard.board[2][2] = currentPlayer().symbol;
            gameOver();
            if (!checkWinner() && !checkDraw()) {
                switchPlayer();
            }
        }
    });
}

const gameState = {
    playerOne: null,
    playerTwo: null,
}
const cellOne = document.getElementById('one');
const cellTwo = document.getElementById('two');
const cellThree = document.getElementById('three');
const cellFour = document.getElementById('four');
const cellFive = document.getElementById('five');
const cellSix = document.getElementById('six');
const cellSeven = document.getElementById('seven');
const cellEight = document.getElementById('eight');
const cellNine = document.getElementById('nine');
const allCells = document.querySelectorAll(".cell");

players().createTwoPlayers();

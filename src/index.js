import "./style.css"
import { Player } from "./player.js";
import { renderBoard } from "./dom.js";

const player = Player(false);
const computer = Player(true);

// For now, place ships manually
player.gameboard.placeShip(3, [
    [0, 0],
    [1, 0],
    [2, 0],
]);
computer.gameboard.placeShip(3, [
    [0, 0],
    [1, 0],
    [2, 0],
]);

const playerBoardDiv = document.getElementById("player-board");
const computerBoardDiv = document.getElementById("computer-board");

function refreshBoards() {
    renderBoard(playerBoardDiv, player.gameboard, false);
    renderBoard(computerBoardDiv, computer.gameboard, true, handlePlayerAttack);
}

function handlePlayerAttack(x, y) {
    const result = player.attack(computer.gameboard, x, y);
    refreshBoards();

    if (computer.gameboard.allShipsSunk()) {
        alert("You win!");
        return;
    }

    // computer's turn
    computer.randomAttack(player.gameboard);
    refreshBoards();

    if (player.gameboard.allShipsSunk()) {
        alert("Computer wins!");
    }
}

refreshBoards();

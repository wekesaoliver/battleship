import { Gameboard } from "./gameboard.js";

export function Player(isComputer = false, size = 10) {
    const gameboard = Gameboard(size);
    const previousMoves = [];

    function attack(opponentBoard, x, y) {
        // real player: uses given coordinates
        return opponentBoard.receiveAttack(x, y);
    }

    function randomAttack(opponentBoard) {
        let x, y;

        do {
            x = Math.floor(Math.random() * size);
            y = Math.floor(Math.random() * size);
        } while (previousMoves.some(([px, py]) => px === x && py === y));

        previousMoves.push([x, y]);

        return opponentBoard.receiveAttack(x, y);
    }

    return {
        isComputer,
        gameboard,
        attack,
        randomAttack,
        previousMoves,
    };
}

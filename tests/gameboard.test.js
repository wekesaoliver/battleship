import { Gameboard } from "../src/gameboard";

test("place a ship and check storage", () => {
    const board = Gameboard();
    const ship = board.placeShip(3, [
        [0, 0],
        [0, 1],
        [0, 2],
    ]);
    expect(board.ships).toContain(ship);
});

test("attack hits the ship", () => {
    const board = Gameboard();
    board.placeShip(2, [
        [1, 1],
        [1, 2],
    ]);
    const result = board.receiveAttack(5, 5);
    expect(result).toBe("miss");
    expect(board.missedAttacks).toContainEqual([5, 5]);
});

test("reports when all ships are sunk", () => {
    const board = Gameboard();
    const ship = board.placeShip(1, [[2, 2]]);
    board.receiveAttack(2, 2);
    expect(board.allShipsSunk()).toBe(true);
});

import Ship from "./ship.js";

export function Gameboard(size = 10) {
    const ships = [];
    const missedAttacks = [];

    // place a ship at coordinates
    function placeShip(length, coordinates) {
        const newShip = new Ship(length);
        newShip.coordinates = coordinates;
        ships.push(newShip);
        return newShip;
    }

    // receive an attack at [x, y]
    function receiveAttack(x, y) {
        // check all ships
        for (const ship of ships) {
            if (ship.coordinates.some(([sx, sy]) => sx === x && sy === y)) {
                ship.hit();
                return "hit";
            }
        }
        missedAttacks.push([x, y]);
        return "miss";
        console.log("Attacking:", x, y);
    }

    // check if every ship is sunk
    function allShipsSunk() {
        return ships.every((ship) => ship.isSunk());
    }

    return {
        placeShip,
        receiveAttack,
        allShipsSunk,
        missedAttacks,
        ships,
    };
}

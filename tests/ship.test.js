import Ship from "../src/ship";

describe("Ship", () => {
    test("hit() makes hits to go up by 1", () => {
        const ship = new Ship(3); // a ship of length 3
        expect(ship.hits).toBe(0); // starts at 0
        ship.hit();
        expect(ship.hits).toBe(1); // now 1
    });

    test("isSunk() returns true only when hits >= length", () => {
        const ship = new Ship(2);
        expect(ship.isSunk()).toBe(false);
        ship.hit();
        expect(ship.isSunk()).toBe(false);
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});

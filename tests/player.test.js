import { Player } from "../src/player";

test("player has a gameboard", () => {
    const player = Player();
    expect(player.gameboard).toBeDefined();
});

test("player can attack another board", () => {
    const player1 = Player();
    const player2 = Player();

    player2.gameboard.placeShip(1, [[0, 0]]);
    const result = player1.attack(player2.gameboard, 0, 0);
    expect(result).toBe("hit");
});

test("omputer makes random attacks without repeating", () => {
    const human = Player();
    const computer = Player(true);
    const result1 = computer.randomAttack(human.gameboard);
    const result2 = computer.randomAttack(human.gameboard);

    expect(computer.previousMoves.length).toBe(2);
    expect(computer.previousMoves[0]).not.toEqual(computer.previousMoves[1]);
});

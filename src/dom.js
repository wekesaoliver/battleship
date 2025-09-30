export function renderBoard(container, gameboard, isComputer = false, clickHandler = null) {
  container.innerHTML = ""; // clear before re-render

  for (let y = 0; y < 10; y++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let x = 0; x < 10; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      // check if there's a ship
      const hasShip = gameboard.ships.some(ship =>
        ship.coordinates.some(([sx, sy]) => sx === x && sy === y)
      );

      // check if missed
      const isMiss = gameboard.missedAttacks.some(([mx, my]) => mx === x && my === y);

      if (hasShip && !isComputer) cell.classList.add("ship");
      if (isMiss) cell.classList.add("miss");

      // check if hit
      if (hasShip) {
        const ship = gameboard.ships.find(ship =>
          ship.coordinates.some(([sx, sy]) => sx === x && sy === y)
        );
        if (ship && ship.hits >= 1 && ship.coordinates.some(([sx, sy]) => sx === x && sy === y)) {
          cell.classList.add("hit");
        }
      }

      if (isComputer && clickHandler) {
        cell.addEventListener("click", () => clickHandler(x, y));
      }

      row.appendChild(cell);
    }

    container.appendChild(row);
  }
}

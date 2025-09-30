## Battleship

A simple Battleship game built with modern JavaScript, Webpack, and Jest. It includes a playable UI with a player vs. computer flow and unit tests for core game logic.

### Features
- **Two boards**: Player and computer gameboards rendered as 10x10 grids
- **Manual ship placement**: Simple starter placement in code
- **Interactive attacks**: Click cells on the computer’s board to attack
- **State tracking**: Hit/miss indicators and win detection
- **Unit tests**: Ships and gameboard logic covered by Jest

### Tech Stack
- **Language**: JavaScript (ES Modules)
- **Bundler**: Webpack 5
- **Testing**: Jest + Babel
- **HTML/CSS**

### Getting Started

- **Install dependencies**:
```bash
npm install
```

- **Start the dev server**:
```bash
npm start
```

- **Run tests**:
```bash
npm test
```

### Configuration Notes
- The project uses ES Modules ("type": "module" in `package.json`).
- Ensure `webpack.config.js` is ESM-compatible. Recommended pattern:
```javascript
import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  // ... your config
};
```
- Import styles in your entry (`src/index.js`) so the grid displays:
```javascript
import "./style.css";
```

### Project Structure
```text
src/
  dom.js           # Renders the boards and handles cell rendering
  gameboard.js     # Gameboard factory with placeShip, receiveAttack, allShipsSunk
  index.js         # App entry: sets up players and mounts UI
  player.js        # Player/computer actions and AI attack
  ship.js          # Ship class with hit and isSunk
  style.css        # Styles for grid and cell states
  template.html    # HTML template used by HtmlWebpackPlugin
tests/
  gameboard.test.js
webpack.config.js  # Webpack configuration (ESM)
jest.config.js     # Jest configuration
babel.config.js    # Babel config for Jest
```

### Gameplay
- **Player turn**: Click a cell on the computer’s board to attack.
- **Feedback**: Hits and misses are highlighted; sunk logic checks all ships.
- **Win condition**: When all enemy ships are sunk, you win. The computer makes random attacks after each player move.

### Scripts
- **Build**:
```bash
npm run build
```
- **Start**:
```bash
npm start
```
- **Test**:
```bash
npm test
```

### Testing
- Unit tests live under `tests/`.
- Run with `npm test` (uses `--runInBand` for stability).

### Future Improvements
- Drag-and-drop ship placement UI
- Smarter computer AI
- Persistent game state and restart flow
- Mobile-friendly layout and accessibility

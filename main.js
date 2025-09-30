/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard)\n/* harmony export */ });\nfunction renderBoard(container, gameboard, isComputer = false, clickHandler = null) {\n  container.innerHTML = \"\"; // clear before re-render\n\n  for (let y = 0; y < 10; y++) {\n    const row = document.createElement(\"div\");\n    row.classList.add(\"row\");\n\n    for (let x = 0; x < 10; x++) {\n      const cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n\n      // check if there's a ship\n      const hasShip = gameboard.ships.some(ship =>\n        ship.coordinates.some(([sx, sy]) => sx === x && sy === y)\n      );\n\n      // check if missed\n      const isMiss = gameboard.missedAttacks.some(([mx, my]) => mx === x && my === y);\n\n      if (hasShip && !isComputer) cell.classList.add(\"ship\");\n      if (isMiss) cell.classList.add(\"miss\");\n\n      // check if hit\n      if (hasShip) {\n        const ship = gameboard.ships.find(ship =>\n          ship.coordinates.some(([sx, sy]) => sx === x && sy === y)\n        );\n        if (ship && ship.hits >= 1 && ship.coordinates.some(([sx, sy]) => sx === x && sy === y)) {\n          cell.classList.add(\"hit\");\n        }\n      }\n\n      if (isComputer && clickHandler) {\n        cell.addEventListener(\"click\", () => clickHandler(x, y));\n      }\n\n      row.appendChild(cell);\n    }\n\n    container.appendChild(row);\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQLDRCQUE0Qjs7QUFFNUIsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL3NyYy9kb20uanM/N2E5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmQoY29udGFpbmVyLCBnYW1lYm9hcmQsIGlzQ29tcHV0ZXIgPSBmYWxzZSwgY2xpY2tIYW5kbGVyID0gbnVsbCkge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjsgLy8gY2xlYXIgYmVmb3JlIHJlLXJlbmRlclxuXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcblxuICAgICAgLy8gY2hlY2sgaWYgdGhlcmUncyBhIHNoaXBcbiAgICAgIGNvbnN0IGhhc1NoaXAgPSBnYW1lYm9hcmQuc2hpcHMuc29tZShzaGlwID0+XG4gICAgICAgIHNoaXAuY29vcmRpbmF0ZXMuc29tZSgoW3N4LCBzeV0pID0+IHN4ID09PSB4ICYmIHN5ID09PSB5KVxuICAgICAgKTtcblxuICAgICAgLy8gY2hlY2sgaWYgbWlzc2VkXG4gICAgICBjb25zdCBpc01pc3MgPSBnYW1lYm9hcmQubWlzc2VkQXR0YWNrcy5zb21lKChbbXgsIG15XSkgPT4gbXggPT09IHggJiYgbXkgPT09IHkpO1xuXG4gICAgICBpZiAoaGFzU2hpcCAmJiAhaXNDb21wdXRlcikgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIGlmIChpc01pc3MpIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG5cbiAgICAgIC8vIGNoZWNrIGlmIGhpdFxuICAgICAgaWYgKGhhc1NoaXApIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGdhbWVib2FyZC5zaGlwcy5maW5kKHNoaXAgPT5cbiAgICAgICAgICBzaGlwLmNvb3JkaW5hdGVzLnNvbWUoKFtzeCwgc3ldKSA9PiBzeCA9PT0geCAmJiBzeSA9PT0geSlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHNoaXAgJiYgc2hpcC5oaXRzID49IDEgJiYgc2hpcC5jb29yZGluYXRlcy5zb21lKChbc3gsIHN5XSkgPT4gc3ggPT09IHggJiYgc3kgPT09IHkpKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0NvbXB1dGVyICYmIGNsaWNrSGFuZGxlcikge1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbGlja0hhbmRsZXIoeCwgeSkpO1xuICAgICAgfVxuXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dom.js\n\n}");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\nfunction Gameboard(size = 10) {\n    const ships = [];\n    const missedAttacks = [];\n\n    // place a ship at coordinates\n    function placeShip(length, coordinates) {\n        const newShip = new _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\n        newShip.coordinates = coordinates;\n        ships.push(newShip);\n        return newShip;\n    }\n\n    // receive an attack at [x, y]\n    function receiveAttack(x, y) {\n        // check all ships\n        for (const ship of ships) {\n            if (ship.coordinates.some(([sx, sy]) => sx === x && sy === y)) {\n                ship.hit();\n                return \"hit\";\n            }\n        }\n        missedAttacks.push([x, y]);\n        return \"miss\";\n        // removed by dead control flow\n\n    }\n\n    // check if every ship is sunk\n    function allShipsSunk() {\n        return ships.every((ship) => ship.isSunk());\n    }\n\n    return {\n        placeShip,\n        receiveAttack,\n        allShipsSunk,\n        missedAttacks,\n        ships,\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZWJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZCOztBQUV0QjtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixnREFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUFnQztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL3NyYy9nYW1lYm9hcmQuanM/NTBjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lYm9hcmQoc2l6ZSA9IDEwKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG5cbiAgICAvLyBwbGFjZSBhIHNoaXAgYXQgY29vcmRpbmF0ZXNcbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAobGVuZ3RoLCBjb29yZGluYXRlcykge1xuICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgbmV3U2hpcC5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICByZXR1cm4gbmV3U2hpcDtcbiAgICB9XG5cbiAgICAvLyByZWNlaXZlIGFuIGF0dGFjayBhdCBbeCwgeV1cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgLy8gY2hlY2sgYWxsIHNoaXBzXG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgICAgICAgaWYgKHNoaXAuY29vcmRpbmF0ZXMuc29tZSgoW3N4LCBzeV0pID0+IHN4ID09PSB4ICYmIHN5ID09PSB5KSkge1xuICAgICAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICAgICAgY29uc29sZS5sb2coXCJBdHRhY2tpbmc6XCIsIHgsIHkpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGV2ZXJ5IHNoaXAgaXMgc3Vua1xuICAgIGZ1bmN0aW9uIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFNoaXBzU3VuayxcbiAgICAgICAgbWlzc2VkQXR0YWNrcyxcbiAgICAgICAgc2hpcHMsXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/gameboard.js\n\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\nconst player = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.Player)(false);\nconst computer = (0,_player_js__WEBPACK_IMPORTED_MODULE_0__.Player)(true);\n\n// For now, place ships manually\nplayer.gameboard.placeShip(3, [\n    [0, 0],\n    [1, 0],\n    [2, 0],\n]);\ncomputer.gameboard.placeShip(3, [\n    [0, 0],\n    [1, 0],\n    [2, 0],\n]);\n\nconst playerBoardDiv = document.getElementById(\"player-board\");\nconst computerBoardDiv = document.getElementById(\"computer-board\");\n\nfunction refreshBoards() {\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(playerBoardDiv, player.gameboard, false);\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(computerBoardDiv, computer.gameboard, true, handlePlayerAttack);\n}\n\nfunction handlePlayerAttack(x, y) {\n    const result = player.attack(computer.gameboard, x, y);\n    refreshBoards();\n\n    if (computer.gameboard.allShipsSunk()) {\n        alert(\"You win!\");\n        return;\n    }\n\n    // computer's turn\n    computer.randomAttack(player.gameboard);\n    refreshBoards();\n\n    if (player.gameboard.allShipsSunk()) {\n        alert(\"Computer wins!\");\n    }\n}\n\nrefreshBoards();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXFDO0FBQ0U7O0FBRXZDLGVBQWUsa0RBQU07QUFDckIsaUJBQWlCLGtEQUFNOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG9EQUFXO0FBQ2YsSUFBSSxvREFBVztBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByYWN0aWNlLy4vc3JjL2luZGV4LmpzPzExMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJCb2FyZCB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoZmFsc2UpO1xuY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIodHJ1ZSk7XG5cbi8vIEZvciBub3csIHBsYWNlIHNoaXBzIG1hbnVhbGx5XG5wbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgzLCBbXG4gICAgWzAsIDBdLFxuICAgIFsxLCAwXSxcbiAgICBbMiwgMF0sXG5dKTtcbmNvbXB1dGVyLmdhbWVib2FyZC5wbGFjZVNoaXAoMywgW1xuICAgIFswLCAwXSxcbiAgICBbMSwgMF0sXG4gICAgWzIsIDBdLFxuXSk7XG5cbmNvbnN0IHBsYXllckJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItYm9hcmRcIik7XG5jb25zdCBjb21wdXRlckJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlci1ib2FyZFwiKTtcblxuZnVuY3Rpb24gcmVmcmVzaEJvYXJkcygpIHtcbiAgICByZW5kZXJCb2FyZChwbGF5ZXJCb2FyZERpdiwgcGxheWVyLmdhbWVib2FyZCwgZmFsc2UpO1xuICAgIHJlbmRlckJvYXJkKGNvbXB1dGVyQm9hcmREaXYsIGNvbXB1dGVyLmdhbWVib2FyZCwgdHJ1ZSwgaGFuZGxlUGxheWVyQXR0YWNrKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGxheWVyQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCByZXN1bHQgPSBwbGF5ZXIuYXR0YWNrKGNvbXB1dGVyLmdhbWVib2FyZCwgeCwgeSk7XG4gICAgcmVmcmVzaEJvYXJkcygpO1xuXG4gICAgaWYgKGNvbXB1dGVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBhbGVydChcIllvdSB3aW4hXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY29tcHV0ZXIncyB0dXJuXG4gICAgY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllci5nYW1lYm9hcmQpO1xuICAgIHJlZnJlc2hCb2FyZHMoKTtcblxuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIGFsZXJ0KFwiQ29tcHV0ZXIgd2lucyFcIik7XG4gICAgfVxufVxuXG5yZWZyZXNoQm9hcmRzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\n\nfunction Player(isComputer = false, size = 10) {\n    const gameboard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(size);\n    const previousMoves = [];\n\n    function attack(opponentBoard, x, y) {\n        // real player: uses given coordinates\n        return opponentBoard.receiveAttack(x, y);\n    }\n\n    function randomAttack(opponentBoard) {\n        let x, y;\n\n        do {\n            x = Math.floor(Math.random() * size);\n            y = Math.floor(Math.random() * size);\n        } while (previousMoves.some(([px, py]) => px === x && py === y));\n\n        previousMoves.push([x, y]);\n\n        return opponentBoard.receiveAttack(x, y);\n    }\n\n    return {\n        isComputer,\n        gameboard,\n        attack,\n        randomAttack,\n        previousMoves,\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDOztBQUVwQztBQUNQLHNCQUFzQix3REFBUztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL3NyYy9wbGF5ZXIuanM/ZjRiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcihpc0NvbXB1dGVyID0gZmFsc2UsIHNpemUgPSAxMCkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZChzaXplKTtcbiAgICBjb25zdCBwcmV2aW91c01vdmVzID0gW107XG5cbiAgICBmdW5jdGlvbiBhdHRhY2sob3Bwb25lbnRCb2FyZCwgeCwgeSkge1xuICAgICAgICAvLyByZWFsIHBsYXllcjogdXNlcyBnaXZlbiBjb29yZGluYXRlc1xuICAgICAgICByZXR1cm4gb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJhbmRvbUF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG4gICAgICAgIGxldCB4LCB5O1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcbiAgICAgICAgfSB3aGlsZSAocHJldmlvdXNNb3Zlcy5zb21lKChbcHgsIHB5XSkgPT4gcHggPT09IHggJiYgcHkgPT09IHkpKTtcblxuICAgICAgICBwcmV2aW91c01vdmVzLnB1c2goW3gsIHldKTtcblxuICAgICAgICByZXR1cm4gb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGlzQ29tcHV0ZXIsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgYXR0YWNrLFxuICAgICAgICByYW5kb21BdHRhY2ssXG4gICAgICAgIHByZXZpb3VzTW92ZXMsXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/player.js\n\n}");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n        this.length = length; // ow many hits needed to sink\n        this.hits = 0; //start wit no hits\n    }\n\n    hit() {\n        this.hits += 1; // add one hit\n    }\n\n    isSunk() {\n        return this.hits >= this.length; //true if hits are enough\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLDhCQUE4QjtBQUM5Qix1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJhY3RpY2UvLi9zcmMvc2hpcC5qcz9kMWY3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDsgLy8gb3cgbWFueSBoaXRzIG5lZWRlZCB0byBzaW5rXG4gICAgICAgIHRoaXMuaGl0cyA9IDA7IC8vc3RhcnQgd2l0IG5vIGhpdHNcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxOyAvLyBhZGQgb25lIGhpdFxuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aDsgLy90cnVlIGlmIGhpdHMgYXJlIGVub3VnaFxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ship.js\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const test_1 = __webpack_require__(1);
	test_1.test_mazeSearch();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const maze_1 = __webpack_require__(2);
	const search_1 = __webpack_require__(3);
	function test_mazeSearch() {
	    let maze = new maze_1.Maze([
	        ['v', '?', '|', ' ', '<'],
	        ['?', ' ', ' ', '?', ' '],
	        ['?', ' ', '?', ' ', '|'],
	        ['?', ' ', ' ', '-', ' '],
	        ['>', ' ', '^', '?', '<']
	    ]);
	    let searcher = new search_1.MazeSearch(maze);
	    console.log(searcher.countExits());
	}
	exports.test_mazeSearch = test_mazeSearch;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	class Maze {
	    constructor(layout) {
	        this.layout = layout;
	    }
	    getToken(position) {
	        return this.layout[position.row][position.column];
	    }
	    getLimits() {
	        return {
	            rows: this.layout.length,
	            columns: this.layout[0].length
	        };
	    }
	}
	exports.Maze = Maze;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const structures_1 = __webpack_require__(4);
	class MazeSearch {
	    constructor(maze) {
	        this.maze = maze;
	        this.exitPositions = [];
	    }
	    countExits() {
	        let currentPosition = { row: 0, column: 0 };
	        let currentToken = this.maze.getToken(currentPosition);
	        let nextDirections = structures_1.charDirections.get(currentToken);
	        this.next(currentPosition, nextDirections[0], []);
	        return this.exitPositions;
	    }
	    next(currentPosition, directionSource, path) {
	        path.push(currentPosition);
	        let currentToken = this.maze.getToken(currentPosition);
	        let nextDirections = structures_1.charDirections.get(currentToken);
	        for (let direction of nextDirections) {
	            if (direction == "CONTINUE") {
	                direction = directionSource;
	            }
	            else if (direction == structures_1.reverseDirection.get(directionSource)) {
	                continue;
	            }
	            let nextPosition = this.move(currentPosition, direction);
	            if (this.isCollision(nextPosition, path)) {
	                continue;
	            }
	            if (this.isExit(nextPosition)) {
	                this.addExit(currentPosition, currentToken);
	                continue;
	            }
	            this.next(Object.assign({}, nextPosition), direction, path.slice());
	        }
	    }
	    move(currentPosition, direction) {
	        switch (direction) {
	            case "UP":
	                return {
	                    row: currentPosition.row - 1,
	                    column: currentPosition.column
	                };
	            case "DOWN":
	                return {
	                    row: currentPosition.row + 1,
	                    column: currentPosition.column
	                };
	            case "LEFT":
	                return {
	                    row: currentPosition.row,
	                    column: currentPosition.column - 1
	                };
	            case "RIGHT":
	                return {
	                    row: currentPosition.row,
	                    column: currentPosition.column + 1
	                };
	        }
	        return currentPosition;
	    }
	    isExit(position) {
	        let limits = this.maze.getLimits();
	        if (position.column < 0 || position.column >= limits.columns)
	            return true;
	        if (position.row < 0 || position.row >= limits.rows)
	            return true;
	        return false;
	    }
	    isCollision(position, path) {
	        return path.some(p => p.row == position.row && p.column == position.column);
	    }
	    addExit(position, currentToken) {
	        let key = position.row + "-" + position.column;
	        if (this.exitPositions.indexOf(key) == -1) {
	            this.exitPositions.push(key);
	        }
	    }
	}
	exports.MazeSearch = MazeSearch;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.charDirections = new Map();
	exports.charDirections.set('^', ["UP"]);
	exports.charDirections.set('>', ["RIGHT"]);
	exports.charDirections.set('<', ["LEFT"]);
	exports.charDirections.set('v', ["DOWN"]);
	exports.charDirections.set('|', ["UP", "DOWN"]);
	exports.charDirections.set('-', ["LEFT", "RIGHT"]);
	exports.charDirections.set('?', ["UP", "RIGHT", "DOWN", "LEFT"]);
	exports.charDirections.set(' ', ["CONTINUE"]);
	exports.reverseDirection = new Map();
	exports.reverseDirection.set("UP", "DOWN");
	exports.reverseDirection.set("DOWN", "UP");
	exports.reverseDirection.set("RIGHT", "LEFT");
	exports.reverseDirection.set("LEFT", "RIGHT");


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
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
	test_1.test_lawnMower();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const lawnMower_1 = __webpack_require__(2);
	function test_lawnMower() {
	    let lawnMowerA = new lawnMower_1.LawnMower({
	        width: 5,
	        height: 5
	    });
	    console.log(lawnMowerA.mow({
	        initialPosition: {
	            x: 1,
	            y: 2,
	            direction: 'N'
	        },
	        moves: ['L', 'F', 'L', 'F', 'L', 'F', 'L', 'F', 'F']
	    }));
	    let lawnMowerB = new lawnMower_1.LawnMower({
	        width: 5,
	        height: 5
	    });
	    console.log(lawnMowerB.mow({
	        initialPosition: {
	            x: 3,
	            y: 3,
	            direction: 'E'
	        },
	        moves: ['F', 'F', 'R', 'F', 'F', 'R', 'F', 'R', 'R', 'F']
	    }));
	}
	exports.test_lawnMower = test_lawnMower;
	;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const structures_1 = __webpack_require__(3);
	class LawnMower {
	    constructor(lawn) {
	        this.lawn = lawn;
	    }
	    mow(path) {
	        let currentPosition = path.initialPosition;
	        for (let move of path.moves) {
	            let nextPosition = this.rotateOrMoveForward(currentPosition, move);
	            if (this.isOut(nextPosition)) {
	                continue;
	            }
	            else {
	                currentPosition = nextPosition;
	            }
	        }
	        return currentPosition;
	    }
	    rotateOrMoveForward(currentPosition, movement) {
	        switch (movement) {
	            case "L":
	                return {
	                    x: currentPosition.x,
	                    y: currentPosition.y,
	                    direction: structures_1.rotateAntiClockWise.get(currentPosition.direction)
	                };
	            case "R":
	                return {
	                    x: currentPosition.x,
	                    y: currentPosition.y,
	                    direction: structures_1.rotateClockWise.get(currentPosition.direction)
	                };
	            case "F":
	                return this.moveForward(currentPosition);
	        }
	    }
	    moveForward(currentPosition) {
	        switch (currentPosition.direction) {
	            case "N":
	                return {
	                    x: currentPosition.x,
	                    y: currentPosition.y + 1,
	                    direction: currentPosition.direction
	                };
	            case "E":
	                return {
	                    x: currentPosition.x + 1,
	                    y: currentPosition.y,
	                    direction: currentPosition.direction
	                };
	            case "S":
	                return {
	                    x: currentPosition.x,
	                    y: currentPosition.y - 1,
	                    direction: currentPosition.direction
	                };
	            case "W":
	                return {
	                    x: currentPosition.x - 1,
	                    y: currentPosition.y,
	                    direction: currentPosition.direction
	                };
	        }
	    }
	    isOut(position) {
	        if (position.y < 0 || position.y > this.lawn.height
	            || position.x < 0 || position.x > this.lawn.width) {
	            return true;
	        }
	        return false;
	    }
	}
	exports.LawnMower = LawnMower;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	;
	exports.rotateClockWise = new Map();
	exports.rotateClockWise.set("N", "E");
	exports.rotateClockWise.set("E", "S");
	exports.rotateClockWise.set("S", "W");
	exports.rotateClockWise.set("W", "N");
	exports.rotateAntiClockWise = new Map();
	exports.rotateAntiClockWise.set("N", "W");
	exports.rotateAntiClockWise.set("W", "S");
	exports.rotateAntiClockWise.set("S", "E");
	exports.rotateAntiClockWise.set("E", "N");


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
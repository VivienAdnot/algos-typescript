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
	test_1.test_lawnMowerDriver();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const drive_1 = __webpack_require__(2);
	function test_lawnMowerDriver() {
	    console.log("test_lawnMowerDriver start");
	    // let driver = new LawmMowerDriver({
	    //     rows: 5,
	    //     columns: 5,
	    //     initialPosition: {
	    //         row: 1,
	    //         column: 2,
	    //         direction: 'N'
	    //     },
	    //     path: ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A']
	    // });
	    let driver = new drive_1.LawmMowerDriver({
	        maxX: 5,
	        maxY: 5,
	        initialPosition: {
	            row: 3,
	            column: 3,
	            direction: 'E'
	        },
	        path: ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'D', 'D', 'A']
	    });
	    console.log(driver.start());
	}
	exports.test_lawnMowerDriver = test_lawnMowerDriver;
	;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const structures_1 = __webpack_require__(3);
	class LawmMowerDriver {
	    constructor(context) {
	        this.context = context;
	    }
	    start() {
	        this.currentPosition = this.context.initialPosition;
	        this.next();
	        return this.currentPosition;
	    }
	    next() {
	        for (let i = 0; i < this.context.path.length; i++) {
	            console.log("start for", i, this.currentPosition);
	            let nextPosition = this.moveForwardOrRotate(this.currentPosition, this.context.path[i]);
	            console.log("nextPosition", nextPosition);
	            if (this.isExit(nextPosition)) {
	                console.log("nextPosition is exit");
	                continue;
	            }
	            else {
	                this.currentPosition = nextPosition;
	            }
	        }
	    }
	    moveForwardOrRotate(currentPosition, movement) {
	        switch (movement) {
	            case "G":
	                return {
	                    row: currentPosition.row,
	                    column: currentPosition.column,
	                    direction: structures_1.rotateAntiClockWise.get(currentPosition.direction)
	                };
	            case "D":
	                return {
	                    row: currentPosition.row,
	                    column: currentPosition.column,
	                    direction: structures_1.rotateClockWise.get(currentPosition.direction)
	                };
	            case "A":
	                return this.moveForward(currentPosition);
	        }
	    }
	    moveForward(currentPosition) {
	        switch (currentPosition.direction) {
	            case "N":
	                return {
	                    row: currentPosition.row,
	                    column: currentPosition.column + 1,
	                    direction: currentPosition.direction
	                };
	            case "E":
	                return {
	                    row: currentPosition.row + 1,
	                    column: currentPosition.column,
	                    direction: currentPosition.direction
	                };
	            case "S":
	                return {
	                    row: currentPosition.row,
	                    column: currentPosition.column - 1,
	                    direction: currentPosition.direction
	                };
	            case "W":
	                return {
	                    row: currentPosition.row - 1,
	                    column: currentPosition.column,
	                    direction: currentPosition.direction
	                };
	        }
	    }
	    isExit(position) {
	        if (position.column < 0 || position.column > this.context.maxY)
	            return true;
	        if (position.row < 0 || position.row > this.context.maxX)
	            return true;
	        return false;
	    }
	}
	exports.LawmMowerDriver = LawmMowerDriver;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
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
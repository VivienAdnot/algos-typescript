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
	exports.__esModule = true;
	var binarySearch_1 = __webpack_require__(1);
	var random_1 = __webpack_require__(2);
	var random_2 = __webpack_require__(2);
	var length = 5;
	var array = random_1.generateRandomArray(length);
	console.log(array.join());
	var search = array[random_2.generateRandomNumber(length)];
	console.log("searching for: " + search);
	var result = binarySearch_1.binarySearch(array, search);
	console.log("==================");
	console.log(result);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	exports.__esModule = true;
	function binarySearch(array, element, startIndex, endIndex) {
	    if (startIndex === void 0) { startIndex = 0; }
	    if (endIndex === void 0) { endIndex = array.length - 1; }
	    console.group(startIndex.toString());
	    console.log("start binarySearch start " + startIndex + " end " + endIndex);
	    if (endIndex < startIndex) {
	        console.log("end " + endIndex + " < start " + startIndex + "\"");
	        return -1;
	    }
	    var middleIndex = Math.floor((startIndex + endIndex) / 2);
	    console.log("middleIndex = " + middleIndex);
	    if (element === array[middleIndex]) {
	        console.log("return middle " + middleIndex);
	        return middleIndex;
	    }
	    else {
	        if (element < array[middleIndex]) {
	            console.log("element " + element + " < array[middle] " + array[middleIndex]);
	            return binarySearch(array, element, startIndex, middleIndex - 1);
	        }
	        else {
	            console.log("element " + element + " >= array[middle] " + array[middleIndex]);
	            return binarySearch(array, element, middleIndex + 1, endIndex);
	        }
	    }
	}
	exports.binarySearch = binarySearch;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	exports.__esModule = true;
	function generateRandomArray(length, maximumValue) {
	    var result = [];
	    maximumValue = maximumValue || 50;
	    for (var i = 0; i < length; i++) {
	        result.push(generateRandomNumber(maximumValue));
	    }
	    return result;
	}
	exports.generateRandomArray = generateRandomArray;
	function generateRandomNumber(maximumValue) {
	    return Math.floor(Math.random() * maximumValue);
	}
	exports.generateRandomNumber = generateRandomNumber;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
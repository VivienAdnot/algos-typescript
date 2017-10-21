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
	var removeDuplicates_1 = __webpack_require__(1);
	removeDuplicates_1.test_removeDuplicates();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function removeDuplicates(tested) {
	    var testedArray = tested.split('');
	    var tail = 1;
	    for (var i = 1; i < testedArray.length; ++i) {
	        var j = void 0;
	        for (j = 0; j < tail; ++j) {
	            if (testedArray[j] == testedArray[i]) {
	                break;
	            }
	        }
	        if (j == tail) {
	            testedArray[tail] = testedArray[i];
	            ++tail;
	        }
	    }
	    return testedArray.slice(0, tail).join('');
	}
	exports.removeDuplicates = removeDuplicates;
	function test_removeDuplicates() {
	    console.log("aa", removeDuplicates("aa"));
	    console.log("viv", removeDuplicates("viv"));
	    console.log("vivien", removeDuplicates("vivien"));
	    console.log("vivieei", removeDuplicates("vivieei"));
	    console.log("aaabbb", removeDuplicates("aaabbb"));
	}
	exports.test_removeDuplicates = test_removeDuplicates;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
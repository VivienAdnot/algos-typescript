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
	var permuteString_1 = __webpack_require__(1);
	permuteString_1.permuteString("bruno");


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	//Design an algorithm to print all permutations of a string. For simplicity, assume all characters are unique.
	exports.__esModule = true;
	function permuteString(source) {
	    if (!source) {
	        throw "provide a valid non-empty string please";
	    }
	    if (source.length == 1) {
	        console.log(source);
	    }
	    var subArray = source.split('');
	    var newCharacter = subArray.pop();
	    console.log("end merge", merge(newCharacter, subArray.join('')));
	}
	exports.permuteString = permuteString;
	function merge(character, source) {
	    console.log("start merge", character, source);
	    var sourceArray = source.split('');
	    var combinations;
	    if (sourceArray.length > 1) {
	        var newCharacter = sourceArray.pop();
	        var subsetArray = sourceArray.join('');
	        combinations = merge(newCharacter, subsetArray);
	    }
	    else {
	        console.log("stop digging", sourceArray);
	        combinations = sourceArray;
	    }
	    var result = [];
	    for (var _i = 0, combinations_1 = combinations; _i < combinations_1.length; _i++) {
	        var combination = combinations_1[_i];
	        console.log("start working with combination", combination);
	        var combinationArray = combination.split('');
	        for (var i = 0; i < combinationArray.length; i++) {
	            combinationArray.splice(i, 0, character);
	            var r = combinationArray.join('');
	            console.log("push", r);
	            result.push(r);
	        }
	    }
	    return result;
	}
	exports.merge = merge;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
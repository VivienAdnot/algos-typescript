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
	var hasAllUniqueCharacters_1 = __webpack_require__(1);
	console.log("is bruno unique ?", hasAllUniqueCharacters_1.hasAllUniqueCharacters("bruno"));
	console.log("is vivien unique ?", hasAllUniqueCharacters_1.hasAllUniqueCharacters("vivien"));
	hasAllUniqueCharacters_1.getASCII("0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVXYZ[\]^_`abcdefgijklmnopqrstuvxwz{|}~");


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function hasAllUniqueCharacters(tested) {
	    var testedArray = tested.split('');
	    var uniqueCharacters = [];
	    for (var _i = 0, testedArray_1 = testedArray; _i < testedArray_1.length; _i++) {
	        var character = testedArray_1[_i];
	        if (uniqueCharacters.indexOf(character) !== -1) {
	            return false;
	        }
	        uniqueCharacters.push(character);
	    }
	    return true;
	}
	exports.hasAllUniqueCharacters = hasAllUniqueCharacters;
	function getASCII(source) {
	    for (var index = 0; index < source.length; index++) {
	        console.log(source[index], source.charCodeAt(index));
	    }
	}
	exports.getASCII = getASCII;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
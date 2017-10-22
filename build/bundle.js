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
	var areAnagrams_1 = __webpack_require__(1);
	areAnagrams_1.test_areAnagrams();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function areAnagrams(str1, str2) {
	    if (str1.length != str2.length)
	        return false;
	    var uniqueCharacters = 0;
	    var letters = []; //ascii table, 256 max length
	    for (var i = 0; i < str1.length; i++) {
	        var charCode = str1.charCodeAt(i);
	        if (!letters[charCode]) {
	            uniqueCharacters++;
	            letters[charCode] = 0;
	        }
	        letters[charCode]++;
	    }
	    var charactersCompleted = 0;
	    for (var i = 0; i < str2.length; i++) {
	        var charCode = str1.charCodeAt(i);
	        // found more of this character in str2 than in str1
	        if (!letters[charCode] || letters[charCode] == 0) {
	            return false;
	        }
	        letters[charCode]--;
	        if (letters[charCode] == 0) {
	            charactersCompleted++;
	            if (charactersCompleted == uniqueCharacters) {
	                return i == (str2.length - 1);
	            }
	        }
	    }
	    return false;
	}
	exports.areAnagrams = areAnagrams;
	function test_areAnagrams() {
	    var tests = [
	        { a: "vivien", b: "bruno" },
	        { a: "vivien", b: "vienvi" },
	        { a: "vivien", b: "nevivi" },
	        { a: "bruno", b: "bourn" },
	        { a: "zanzibar", b: "zibarzan" },
	        { a: "bob", b: "obbo" }
	    ];
	    for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
	        var test = tests_1[_i];
	        console.log(test.a, test.b, areAnagrams(test.a, test.b));
	    }
	}
	exports.test_areAnagrams = test_areAnagrams;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
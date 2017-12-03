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
	const asyncmap_1 = __webpack_require__(1);
	///////////////////
	const arr = [3, 2, 1];
	const iterator = (el, cb) => {
	    setTimeout(() => {
	        cb("", el * 2);
	    }, el * 1000);
	};
	asyncmap_1.async.map(arr, iterator, (error, results) => {
	    console.log(error, results);
	});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.async = {
	    map: (arr, iterator, finalCb) => {
	        let results = [];
	        let itCounter = 0;
	        for (let it = 0; it < arr.length; it++) {
	            iterator(arr[it], (err, result) => {
	                results[it] = result;
	                itCounter++;
	                if (itCounter === arr.length) {
	                    finalCb("", results);
	                }
	            });
	        }
	    }
	};


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
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
/***/ (function(module, exports) {

	import { hasAllUniqueCharacters } from "./algorithms/arraysAndStrings/hasAllUniqueCharacters";
	console.log("is bruno unique ?", hasAllUniqueCharacters("bruno"));
	console.log("is vivien unique ?", hasAllUniqueCharacters("vivien"));
	//getASCII("0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVXYZ[\]^_`abcdefgijklmnopqrstuvxwz{|}~");
	let myMap = new Map();
	myMap.set("ok", "ok");
	myMap.set("usher", "yeah");
	for (let key of myMap.keys()) {
	    console.log(myMap.get(key));
	}


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
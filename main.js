/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://works-list/./src/style/main.scss?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ \"./src/scripts/scroll.js\");\n/* harmony import */ var _load_gifs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-gifs */ \"./src/scripts/load-gifs.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  (0,_scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\r\nwindow.addEventListener('load', () => {\r\n  ;(0,_load_gifs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://works-list/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/load-gifs.js":
/*!**********************************!*\
  !*** ./src/scripts/load-gifs.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n\r\n   const gameImage = document.createElement('img');\r\n   gameImage.src = 'https://s10.gifyu.com/images/game-gif.gif';\r\n   document.querySelector('.game-image').appendChild(gameImage);\r\n\r\n   const wordsImage = document.createElement('img');\r\n   wordsImage.src = 'https://s10.gifyu.com/images/words-gif.gif';\r\n   document.querySelector('.words-image').appendChild(wordsImage); \r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://works-list/./src/scripts/load-gifs.js?");

/***/ }),

/***/ "./src/scripts/scroll.js":
/*!*******************************!*\
  !*** ./src/scripts/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n// ----------------------------------------------------\r\n// main title animation\r\nconst mainTitle = document.querySelector(\".title_main-title\");\r\nconst mainSubTitle = document.querySelector(\".sub-title_main-sub-title\");\r\nconst moveTitles = (move) => {\r\n    if (move > window.innerHeight) return;\r\n\r\n    mainTitle.style.cssText = `transform: translate(0, ${move/1.2}px);`\r\n    mainSubTitle.style.cssText = `transform: translate(0, ${move/1.3}px);`\r\n}\r\n\r\n\r\n// -------------------------------------------------------\r\n// elements animation\r\n\r\nconst elInSigth = (elements, className) => {\r\n    const addClass = (el) => {\r\n        const rect = el.getBoundingClientRect();\r\n        if (rect.top < window.innerHeight * (0.7)) {\r\n            el.classList.add(`${className}`);\r\n        }\r\n    }\r\n\r\n    if (!elements.length) {\r\n        addClass(elements);\r\n    \r\n    } else {\r\n        elements.forEach(elem => {\r\n            addClass(elem);\r\n        })\r\n    }\r\n\r\n}\r\n\r\nconst titles = document.querySelectorAll(\".title_simple\");\r\nconst subTitles = document.querySelectorAll(\".sub-title_simple\");\r\nconst containerElements = document.querySelectorAll(\".container__element\");\r\nconst descriptions = document.querySelectorAll('.description');\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() =>{\r\n    window.addEventListener(\"scroll\", () => {\r\n        moveTitles(window.scrollY);\r\n        elInSigth(titles, \"title_simple_in-sight\");\r\n        elInSigth(subTitles, \"sub-title_simple_in-sight\");\r\n        elInSigth(containerElements, \"container__element_in-sight\");\r\n        elInSigth(descriptions, \"description_in-sight\");\r\n    })\r\n});        \r\n\r\n\n\n//# sourceURL=webpack://works-list/./src/scripts/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/sw.js":
/*!***************************!*\
  !*** ./src/scripts/sw.js ***!
  \***************************/
/***/ (() => {

eval("const staticCacheName = 'st_cache_v1'\r\n\r\nconst baseAssets = [\r\n    './',\r\n    './index.html',\r\n    './main.js',\r\n    './main.css',\r\n]\r\n\r\nself.addEventListener('install', async () => {\r\n    const cache = await caches.open(staticCacheName);\r\n    await cache.addAll(baseAssets);\r\n})\r\n\r\n\r\n\r\nself.addEventListener('fetch', async event => {\r\n    event.respondWith(\r\n        caches.match(event.request).then(res => {\r\n            if (res) {\r\n                return res\r\n            }\r\n            return fetch(event.request);\r\n        })\r\n    );\r\n    \r\n})\r\n\n\n//# sourceURL=webpack://works-list/./src/scripts/sw.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/sw.js"]();
/******/ 	
/******/ })()
;
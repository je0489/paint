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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n\nvar canvas = document.getElementById(\"jsCanvas\");\nvar ctx = canvas.getContext(\"2d\");\nvar openBtn = document.getElementById(\"jsOpen\");\nvar saveBtn = document.getElementById(\"jsSave\");\nvar resetBtn = document.getElementById(\"jsReset\");\nvar paintBtn = document.getElementById(\"jsPaint\");\nvar fillBnt = document.getElementById(\"jsFill\");\nvar rangeBtn = document.getElementById(\"jsSelectRange\");\nvar rangeDiv = document.getElementById(\"jsRangeDiv\");\nvar range = document.getElementById(\"jsRange\");\nvar colors = document.getElementsByClassName(\"jsColor\");\nvar INITIAL_COLOR = \"#2c2c2c\",\n    SECECT_COLOR = \"#00eaa0\",\n    CANVAS_SIZE = 700,\n    SHOWING_CN = \"showing\";\nvar painting, filling;\nvar isFill = {\n  0: function _() {\n    filling = false;\n    paintBtn.style.color = SECECT_COLOR;\n    fillBnt.style.color = \"#000\";\n  },\n  1: function _() {\n    filling = true;\n    paintBtn.style.color = \"#000\";\n    fillBnt.style.color = SECECT_COLOR;\n  }\n};\n\nvar resetCanvas = function resetCanvas() {\n  ctx.fillStyle = \"white\";\n  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);\n  ctx.strokeStyle = ctx.fillStyle = INITIAL_COLOR;\n  canvas.width = canvas.height = CANVAS_SIZE;\n  ctx.lineWidth = range.value = 2.5;\n  rangeDiv.children[\"jsRange\"].setAttribute(\"data-before\", \"\".concat(range.value, \" |\"));\n  isFill[0]();\n  painting = false;\n};\n\nvar startPainting = function startPainting() {\n  return painting = true;\n};\n\nvar stopPainting = function stopPainting() {\n  return painting = false;\n};\n\nvar onMouseMove = function onMouseMove(_ref) {\n  var offsetX = _ref.offsetX,\n      offsetY = _ref.offsetY;\n  var x = offsetX,\n      y = offsetY;\n\n  if (!painting) {\n    ctx.beginPath();\n    ctx.moveTo(x, y);\n  } else {\n    ctx.lineTo(x, y);\n    ctx.stroke();\n  }\n};\n\nfunction handleColorClick(event) {\n  var color = event.target.style.backgroundColor;\n  ctx.strokeStyle = color;\n  ctx.fillStyle = color;\n}\n\nvar handleRangeChange = function handleRangeChange(_ref2) {\n  var target = _ref2.target;\n  var size = target.value;\n  ctx.lineWidth = size;\n  target.setAttribute(\"data-before\", \"\".concat(size, \" |\"));\n};\n\nvar handleRangeDivHidden = function handleRangeDivHidden(_ref3) {\n  var id = _ref3.target.parentNode.id;\n  if (!id.includes(\"Range\")) rangeDiv.classList.remove(SHOWING_CN);\n};\n\nvar handleCanvasClick = function handleCanvasClick() {\n  if (filling) ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);\n};\n\nvar handleImageOpenchange = function handleImageOpenchange(_ref4) {\n  var files = _ref4.target.files;\n  var file = files[0],\n      url = URL.createObjectURL(file),\n      img = new Image();\n\n  img.onload = function () {\n    URL.revokeObjectURL(this.src);\n    ctx.drawImage(this, 0, 0);\n  };\n\n  img.src = url;\n};\n\nvar handleSaveClick = function handleSaveClick() {\n  var image = canvas.toDataURL();\n  var link = document.createElement(\"a\");\n  link.href = image;\n  link.download = \"Paint\";\n  link.click();\n};\n\nif (canvas) {\n  resetCanvas();\n  canvas.addEventListener(\"mousemove\", onMouseMove);\n  canvas.addEventListener(\"mousedown\", startPainting);\n  canvas.addEventListener(\"mouseup\", stopPainting);\n  canvas.addEventListener(\"mouseleave\", stopPainting);\n  canvas.addEventListener(\"click\", handleCanvasClick);\n  canvas.addEventListener(\"contextmenu\", function (event) {\n    return event.preventDefault();\n  });\n}\n\nArray.from(colors).forEach(function (color) {\n  return color.addEventListener(\"click\", handleColorClick);\n});\nif (openBtn) openBtn.addEventListener(\"change\", handleImageOpenchange);\nif (saveBtn) saveBtn.addEventListener(\"click\", handleSaveClick);\nif (resetBtn) resetBtn.addEventListener(\"click\", function () {\n  return resetCanvas();\n});\nif (paintBtn) paintBtn.addEventListener(\"click\", isFill[0]);\nif (fillBnt) fillBnt.addEventListener(\"click\", isFill[1]);\n\nif (rangeBtn) {\n  rangeBtn.addEventListener(\"click\", function () {\n    return rangeDiv.classList.add(SHOWING_CN);\n  });\n  document.addEventListener(\"click\", handleRangeDivHidden);\n  if (range) range.addEventListener(\"input\", handleRangeChange);\n}\n\n//# sourceURL=webpack://paint/./src/js/main.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://paint/./src/scss/styles.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
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

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar config = {}; // canvas\n\nconfig.CANVAS_SIZE = 700;\nconfig.LINE_WIDTH = 2.5; // tools hover & action\n\nconfig.INITIAL_COLOR = \"#2c2c2c\";\nconfig.SECECT_COLOR = \"#00eaa0\"; // tools\n\nconfig.RANGE_SHOWING_CN = \"showing\";\nconfig.COLOR_CLICKED_CN = \"clicked\";\nconfig.COLORS = [\"#2c2c2c\", \"#fff\", \"#ff3b30\", \"#ff9500\", \"#ffcc00\", \"#4cd963\", \"#5ac8fa\", \"#0579ff\", \"#5856d6\", \"#ac3bee\"];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://paint/./src/js/config.js?");

/***/ }),

/***/ "./src/js/core/base-layers.js":
/*!************************************!*\
  !*** ./src/js/core/base-layers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Base_layers)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/js/config.js\");\n/* harmony import */ var _base_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-tools */ \"./src/js/core/base-tools.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/**\n * layers 핸들러 클래스\n */\n\nvar Base_layers = /*#__PURE__*/function () {\n  function Base_layers() {\n    var _this = this;\n\n    _classCallCheck(this, Base_layers);\n\n    _defineProperty(this, \"resetCanvas\", function () {\n      var ctx = _this.ctx,\n          canvas = _this.canvas,\n          tools = _this.tools;\n      ctx.fillStyle = \"white\";\n      ctx.fillRect(0, 0, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE);\n      ctx.strokeStyle = ctx.fillStyle = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INITIAL_COLOR;\n      canvas.width = canvas.height = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE;\n      ctx.lineWidth = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LINE_WIDTH;\n      tools.resetTools();\n      tools.mode().painting();\n      tools.toolMode = [\"painting\", false];\n    });\n\n    _defineProperty(this, \"startPainting\", function () {\n      return _this.tools.toolMode = [\"painting\", true];\n    });\n\n    _defineProperty(this, \"stopPainting\", function () {\n      return _this.tools.toolMode = [\"painting\", false];\n    });\n\n    _defineProperty(this, \"onMouseMove\", function (_ref) {\n      var offsetX = _ref.offsetX,\n          offsetY = _ref.offsetY;\n      var x = offsetX,\n          y = offsetY;\n\n      if (!_this.tools.toolMode.painting) {\n        _this.ctx.beginPath();\n\n        _this.ctx.moveTo(x, y);\n      } else {\n        _this.ctx.lineTo(x, y);\n\n        _this.ctx.stroke();\n      }\n    });\n\n    _defineProperty(this, \"handleCanvasClick\", function () {\n      if (_this.tools.toolMode.filling) _this.ctx.fillRect(0, 0, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS_SIZE);\n    });\n\n    this.canvas = document.getElementById(\"jsCanvas\");\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.resetBtn = document.getElementById(\"jsReset\");\n    this.tools = new _base_tools__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas, this.ctx);\n  }\n\n  _createClass(Base_layers, [{\n    key: \"event\",\n    value: function event() {\n      if (this.tools) this.tools.event();\n\n      if (this.canvas) {\n        this.resetCanvas();\n        this.canvas.addEventListener(\"mousemove\", this.onMouseMove);\n        this.canvas.addEventListener(\"mousedown\", this.startPainting);\n        this.canvas.addEventListener(\"mouseup\", this.stopPainting);\n        this.canvas.addEventListener(\"mouseleave\", this.stopPainting);\n        this.canvas.addEventListener(\"click\", this.handleCanvasClick);\n        this.canvas.addEventListener(\"contextmenu\", function (event) {\n          return event.preventDefault();\n        });\n      }\n\n      if (this.resetBtn) this.resetBtn.addEventListener(\"click\", this.resetCanvas);\n    }\n  }]);\n\n  return Base_layers;\n}();\n\n\n\n//# sourceURL=webpack://paint/./src/js/core/base-layers.js?");

/***/ }),

/***/ "./src/js/core/base-tools.js":
/*!***********************************!*\
  !*** ./src/js/core/base-tools.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Base_tools)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/js/config.js\");\n/* harmony import */ var _gui_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gui/colors */ \"./src/js/gui/colors.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/**\n * Tools 핸들러 클래스\n * @param canvas\n * @param ctx\n */\n\nvar Base_tools = /*#__PURE__*/function () {\n  function Base_tools(canvas, _ctx) {\n    var _this = this;\n\n    _classCallCheck(this, Base_tools);\n\n    _defineProperty(this, \"toolModes\", function () {\n      var modelist = {\n        filling: null,\n        painting: null\n      };\n      return function () {\n        return {\n          painting: function painting() {\n            modelist.filling = false;\n            _this.paintBtn.style.color = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SECECT_COLOR;\n            _this.fillBnt.style.color = \"#000\";\n          },\n          filling: function filling() {\n            modelist.filling = true;\n            _this.paintBtn.style.color = \"#000\";\n            _this.fillBnt.style.color = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SECECT_COLOR;\n          },\n          getCurMode: function getCurMode() {\n            return modelist;\n          },\n          setMode: function setMode(modes) {\n            Object.entries(modes).forEach(function (_ref) {\n              var _ref2 = _slicedToArray(_ref, 2),\n                  key = _ref2[0],\n                  value = _ref2[1];\n\n              if (typeof value === \"boolean\") modelist = _objectSpread(_objectSpread({}, modelist), _defineProperty({}, key, value));\n            });\n          }\n        };\n      };\n    });\n\n    _defineProperty(this, \"handleColorClick\", function (_ref3) {\n      var target = _ref3.target;\n      var bgColor = target.style.backgroundColor;\n\n      _this.resetPalette();\n\n      target.classList.add(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLOR_CLICKED_CN);\n      _this.ctx.strokeStyle = bgColor;\n      _this.ctx.fillStyle = bgColor;\n    });\n\n    _defineProperty(this, \"handleRangeChange\", function (_ref4) {\n      var target = _ref4.target;\n      var size = target.value;\n      _this.ctx.lineWidth = size;\n      target.setAttribute(\"data-before\", \"\".concat(size, \" |\"));\n    });\n\n    _defineProperty(this, \"handleRangeDivHiding\", function (_ref5) {\n      var id = _ref5.target.parentNode.id;\n      if (!id.includes(\"Range\")) _this.rangeDiv.classList.remove(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_SHOWING_CN);\n    });\n\n    _defineProperty(this, \"handleImageInsert\", function (_ref6) {\n      var files = _ref6.target.files;\n      var ctx = _this.ctx,\n          url = URL.createObjectURL(files[0]),\n          img = new Image();\n\n      img.onload = function () {\n        URL.revokeObjectURL(this.src);\n        ctx.drawImage(this, 0, 0);\n      };\n\n      img.src = url;\n    });\n\n    _defineProperty(this, \"handleCanvasSave\", function () {\n      var link = document.createElement(\"a\");\n      link.href = _this.canvas.toDataURL();\n      link.download = \"paint_\".concat(new Date().getTime());\n      link.click();\n    });\n\n    this.canvas = canvas;\n    this.ctx = _ctx;\n    this.openBtn = document.getElementById(\"jsOpen\");\n    this.saveBtn = document.getElementById(\"jsSave\");\n    this.rangeBtn = document.getElementById(\"jsSelectRange\");\n    this.rangeDiv = document.getElementById(\"jsRangeDiv\");\n    this.range = document.getElementById(\"jsRange\");\n    this.paintBtn = document.getElementById(\"jsPaint\");\n    this.fillBnt = document.getElementById(\"jsFill\");\n    _gui_colors__WEBPACK_IMPORTED_MODULE_1__[\"default\"].display();\n    this.colors = Array.from(document.getElementsByClassName(\"jsColor\"));\n    this.mode = new this.toolModes();\n  }\n\n  _createClass(Base_tools, [{\n    key: \"toolMode\",\n    get: function get() {\n      return this.mode().getCurMode();\n    },\n    set: function set(_ref7) {\n      var _ref8 = _slicedToArray(_ref7, 2),\n          key = _ref8[0],\n          value = _ref8[1];\n\n      this.mode().setMode(_defineProperty({}, key, value));\n    }\n  }, {\n    key: \"resetTools\",\n    value: function resetTools() {\n      this.range.value = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LINE_WIDTH;\n      this.rangeDiv.children[\"jsRange\"].setAttribute(\"data-before\", \"\".concat(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LINE_WIDTH, \" |\"));\n      this.resetPalette();\n      this.colors[0].classList.add(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLOR_CLICKED_CN);\n    }\n  }, {\n    key: \"resetPalette\",\n    value: function resetPalette() {\n      this.colors.forEach(function (color) {\n        return color.classList.remove(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLOR_CLICKED_CN);\n      });\n    }\n  }, {\n    key: \"event\",\n    value: function event() {\n      var _this2 = this;\n\n      if (this.openBtn) this.openBtn.addEventListener(\"change\", this.handleImageInsert);\n      if (this.saveBtn) this.saveBtn.addEventListener(\"click\", this.handleCanvasSave);\n\n      if (this.rangeBtn) {\n        this.rangeBtn.addEventListener(\"click\", function () {\n          return _this2.rangeDiv.classList.add(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RANGE_SHOWING_CN);\n        });\n        document.addEventListener(\"click\", this.handleRangeDivHiding);\n        if (this.range) this.range.addEventListener(\"input\", this.handleRangeChange);\n      }\n\n      if (this.paintBtn) this.paintBtn.addEventListener(\"click\", this.mode().painting);\n      if (this.fillBnt) this.fillBnt.addEventListener(\"click\", this.mode().filling);\n      if (this.colors) this.colors.forEach(function (color) {\n        return color.addEventListener(\"click\", _this2.handleColorClick);\n      });\n    }\n  }]);\n\n  return Base_tools;\n}();\n\n\n\n//# sourceURL=webpack://paint/./src/js/core/base-tools.js?");

/***/ }),

/***/ "./src/js/gui/colors.js":
/*!******************************!*\
  !*** ./src/js/gui/colors.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Colors)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/js/config.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Colors = /*#__PURE__*/function () {\n  function Colors() {\n    _classCallCheck(this, Colors);\n  }\n\n  _createClass(Colors, null, [{\n    key: \"display\",\n    value: function display() {\n      document.getElementById(\"jsColors\").innerHTML = _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].COLORS.map(function (color) {\n        return \"<div class=\\\"controls__color jsColor\\\" style=\\\"background-color: \".concat(color, \"\\\"></div>\");\n      }).join(\"\");\n    }\n  }]);\n\n  return Colors;\n}();\n\n\n\n//# sourceURL=webpack://paint/./src/js/gui/colors.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _core_base_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/base-layers */ \"./src/js/core/base-layers.js\");\n\n\nwindow.addEventListener(\"load\", function () {\n  var layers = new _core_base_layers__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  layers.event();\n});\n\n//# sourceURL=webpack://paint/./src/js/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;
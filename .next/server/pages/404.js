module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/404.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./atomic-ui/components/Button/index.js":
/*!**********************************************!*\
  !*** ./atomic-ui/components/Button/index.js ***!
  \**********************************************/
/*! exports provided: clearProperties, Wrap, Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearProperties", function() { return clearProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrap", function() { return Wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\dan82\\Documents\\workspace\\FREELANCE\\atomic\\atomic-frontend\\atomic-ui\\components\\Button\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const clearProperties = styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
  color: black;
  background: none;
  border: none;
  height: auto;
  padding: 0;

  &:hover {
    background: none;
    border: none;
    color: var(--default-color-accent);
  }
`;
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  font-family: var(--default-font-family);
  font-size: 0.875rem;
  color: black;

  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  background: none;

  margin: 0;
  padding: var(--input-offset-${({
  size
}) => size});
  width: auto;
  height: var(--input-height-${({
  size
}) => size});

  transition: all 150ms ease;

  ${({
  kind,
  size
}) => kind === 'icon' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      padding: 0;
      width: var(--input-height-${size});
      min-width: var(--input-height-${size});
    `}

  ${({
  appearance
}) => appearance === 'default' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: white;
      background: var(--default-color-accent);
      border: 1px solid var(--default-color-accent);

      &:hover {
        background: var(--default-color-accent__hover);
        border: 1px solid var(--default-color-accent__hover);
      }

      ${({
  revert
}) => revert && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
          color: var(--default-color-accent);
          background: var(--default-color-accent-dim);
          border: 1px solid var(--default-color-accent-dim);

          &:hover {
            background: var(--default-color-accent-dim__hover);
            border: 1px solid var(--default-color-accent-dim__hover);
          }
        `}
    `}

  ${({
  appearance
}) => appearance === 'green' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: white;
      background: var(--default-color-green);
      border: 1px solid var(--default-color-green)

      &:hover {
        background: var(--default-color-green__hover);
        border: 1px solid var(--default-color-green__hover);
      }

      ${({
  revert
}) => revert && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
          color: var(--default-color-green);
          background: var(--default-color-green-dim);
          border: 1px solid var(--default-color-green-dim);

          &:hover {
            background: var(--default-color-green-dim__hover);
            border: 1px solid var(--default-color-green-dim__hover);
          }
        `}
    `}

  ${({
  appearance
}) => appearance === 'red' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: white;
      background: var(--default-color-red);
      border: 1px solid var(--default-color-red)

      &:hover {
        background: var(--default-color-red__hover);
        border: 1px solid var(--default-color-red__hover);
      }

      ${({
  revert
}) => revert && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
          color: var(--default-color-red);
          background: var(--default-color-red-dim);
          border: 1px solid var(--default-color-red-dim);

          &:hover {
            background: var(--default-color-red-dim__hover);
            border: 1px solid var(--default-color-red-dim__hover);
          }
        `}
    `}
    
  ${({
  appearance
}) => appearance === 'ghost' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: var(--ghost-color-text);
      background: var(--ghost-color-background);
      border: 1px solid var(--ghost-color-background);

      &:hover {
        opacity: 0.75;
      }
    `}

  ${({
  appearance
}) => appearance === 'outlined' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: gray;
      border: 1px solid rgba(0, 0, 0, 15%);

      &:hover {
        color: var(--default-color-accent);
        border: 1px solid var(--default-color-accent);
      }
    `}

  ${({
  appearance
}) => appearance === 'clear' && clearProperties}

  ${({
  appearance
}) => appearance === 'link' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      ${clearProperties}
      color: var(--default-color-accent);
      text-align: left;
      padding: 0;
    `}

  ${({
  disabled
}) => disabled && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: var(--ghost-color-text);
      background: var(--ghost-color-background);
      border: 1px solid var(--ghost-color-background);
      cursor: default;

      &:hover {
        background: var(--ghost-color-background);
        border: 1px solid var(--ghost-color-background);
        opacity: 1;
      }
    `}
`;
const Button = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Wrap, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 51
    }
  }), children);
};
Button.defaultProps = {
  appearance: 'default',
  kind: 'default',
  size: 'm'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./layouts/error.js":
/*!**************************!*\
  !*** ./layouts/error.js ***!
  \**************************/
/*! exports provided: ErrorLayout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLayout", function() { return ErrorLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const Main = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.main.withConfig({
  displayName: "error__Main",
  componentId: "j0e2gj-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;grid-gap:var(--default-gap);width:100%;height:100vh;p{font-size:64px;font-weight:var(--font-weight-bold);color:var(--default-color-text);}"]);
const ErrorLayout = ({
  children,
  title = 'Error'
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: "next,javascript,nextjs,react"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "primar project description"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, null, children));
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorLayout);

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atomic-ui/components/Button */ "./atomic-ui/components/Button/index.js");
/* harmony import */ var _layouts_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/error */ "./layouts/error.js");





const ErrorNotFound = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_error__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: () => router.push('/')
  }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"));
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorNotFound);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXRvbWljLXVpL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xheW91dHMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvNDA0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImNsZWFyUHJvcGVydGllcyIsImNzcyIsIldyYXAiLCJzdHlsZWQiLCJidXR0b24iLCJzaXplIiwia2luZCIsImFwcGVhcmFuY2UiLCJyZXZlcnQiLCJkaXNhYmxlZCIsIkJ1dHRvbiIsImNoaWxkcmVuIiwicHJvcHMiLCJkZWZhdWx0UHJvcHMiLCJNYWluIiwibWFpbiIsIkVycm9yTGF5b3V0IiwidGl0bGUiLCJFcnJvck5vdEZvdW5kIiwicm91dGVyIiwidXNlUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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QUF4QjtBQUVBLHNCQUNFLDJEQUFDLHNEQUFELHFCQUNFLDRFQURGLGVBR0UsMkRBQUMsb0VBQUQ7QUFBUSxXQUFPLEVBQUUsTUFBTUQsTUFBTSxDQUFDRSxJQUFQLENBQVksR0FBWjtBQUF2QiwrREFIRixDQURGO0FBT0QsQ0FWRDs7QUFZZUgsNEVBQWYsRTs7Ozs7Ozs7Ozs7QUNuQkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvNDA0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy80MDQuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgY2xlYXJQcm9wZXJ0aWVzID0gY3NzYFxuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LWNvbG9yLWFjY2VudCk7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFdyYXAgPSBzdHlsZWQuYnV0dG9uYFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiBibGFjaztcblxuICBib3JkZXI6IHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3VyZmFjZS1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogbm9uZTtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LW9mZnNldC0keyh7IHNpemUgfSkgPT4gc2l6ZX0pO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiB2YXIoLS1pbnB1dC1oZWlnaHQtJHsoeyBzaXplIH0pID0+IHNpemV9KTtcblxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcblxuICAkeyh7IGtpbmQsIHNpemUgfSkgPT5cbiAgICBraW5kID09PSAnaWNvbicgJiZcbiAgICBjc3NgXG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IHZhcigtLWlucHV0LWhlaWdodC0ke3NpemV9KTtcbiAgICAgIG1pbi13aWR0aDogdmFyKC0taW5wdXQtaGVpZ2h0LSR7c2l6ZX0pO1xuICAgIGB9XG5cbiAgJHsoeyBhcHBlYXJhbmNlIH0pID0+XG4gICAgYXBwZWFyYW5jZSA9PT0gJ2RlZmF1bHQnICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnRfX2hvdmVyKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnRfX2hvdmVyKTtcbiAgICAgIH1cblxuICAgICAgJHsoeyByZXZlcnQgfSkgPT5cbiAgICAgICAgcmV2ZXJ0ICYmXG4gICAgICAgIGNzc2BcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRlZmF1bHQtY29sb3ItYWNjZW50LWRpbSk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQtZGltKTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQtZGltX19ob3Zlcik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWFjY2VudC1kaW1fX2hvdmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgYH1cblxuICAkeyh7IGFwcGVhcmFuY2UgfSkgPT5cbiAgICBhcHBlYXJhbmNlID09PSAnZ3JlZW4nICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1ncmVlbik7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWdyZWVuKVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1ncmVlbl9faG92ZXIpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWdyZWVuX19ob3Zlcik7XG4gICAgICB9XG5cbiAgICAgICR7KHsgcmV2ZXJ0IH0pID0+XG4gICAgICAgIHJldmVydCAmJlxuICAgICAgICBjc3NgXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRlZmF1bHQtY29sb3ItZ3JlZW4pO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRlZmF1bHQtY29sb3ItZ3JlZW4tZGltKTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWdyZWVuLWRpbSk7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRlZmF1bHQtY29sb3ItZ3JlZW4tZGltX19ob3Zlcik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWdyZWVuLWRpbV9faG92ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICBgfVxuXG4gICR7KHsgYXBwZWFyYW5jZSB9KSA9PlxuICAgIGFwcGVhcmFuY2UgPT09ICdyZWQnICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1yZWQpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVmYXVsdC1jb2xvci1yZWQpXG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZWZhdWx0LWNvbG9yLXJlZF9faG92ZXIpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLXJlZF9faG92ZXIpO1xuICAgICAgfVxuXG4gICAgICAkeyh7IHJldmVydCB9KSA9PlxuICAgICAgICByZXZlcnQgJiZcbiAgICAgICAgY3NzYFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LWNvbG9yLXJlZCk7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1yZWQtZGltKTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLXJlZC1kaW0pO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZWZhdWx0LWNvbG9yLXJlZC1kaW1fX2hvdmVyKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRlZmF1bHQtY29sb3ItcmVkLWRpbV9faG92ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICBgfVxuICAgIFxuICAkeyh7IGFwcGVhcmFuY2UgfSkgPT5cbiAgICBhcHBlYXJhbmNlID09PSAnZ2hvc3QnICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6IHZhcigtLWdob3N0LWNvbG9yLXRleHQpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ2hvc3QtY29sb3ItYmFja2dyb3VuZCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1naG9zdC1jb2xvci1iYWNrZ3JvdW5kKTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGFwcGVhcmFuY2UgfSkgPT5cbiAgICBhcHBlYXJhbmNlID09PSAnb3V0bGluZWQnICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDE1JSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWFjY2VudCk7XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGFwcGVhcmFuY2UgfSkgPT4gYXBwZWFyYW5jZSA9PT0gJ2NsZWFyJyAmJiBjbGVhclByb3BlcnRpZXN9XG5cbiAgJHsoeyBhcHBlYXJhbmNlIH0pID0+XG4gICAgYXBwZWFyYW5jZSA9PT0gJ2xpbmsnICYmXG4gICAgY3NzYFxuICAgICAgJHtjbGVhclByb3BlcnRpZXN9XG4gICAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgYH1cblxuICAkeyh7IGRpc2FibGVkIH0pID0+XG4gICAgZGlzYWJsZWQgJiZcbiAgICBjc3NgXG4gICAgICBjb2xvcjogdmFyKC0tZ2hvc3QtY29sb3ItdGV4dCk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1naG9zdC1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdob3N0LWNvbG9yLWJhY2tncm91bmQpO1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ2hvc3QtY29sb3ItYmFja2dyb3VuZCk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdob3N0LWNvbG9yLWJhY2tncm91bmQpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gPFdyYXAgey4uLnByb3BzfT57Y2hpbGRyZW59PC9XcmFwPlxuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gIGtpbmQ6ICdkZWZhdWx0JyxcbiAgc2l6ZTogJ20nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1nYXA6IHZhcigtLWRlZmF1bHQtZ2FwKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1jb2xvci10ZXh0KTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgRXJyb3JMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnRXJyb3InIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIm5leHQsamF2YXNjcmlwdCxuZXh0anMscmVhY3RcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicHJpbWFyIHByb2plY3QgZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxNYWluPntjaGlsZHJlbn08L01haW4+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckxheW91dFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYXRvbWljLXVpL2NvbXBvbmVudHMvQnV0dG9uJ1xuXG5pbXBvcnQgRXJyb3JMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9lcnJvcidcblxuY29uc3QgRXJyb3JOb3RGb3VuZCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICByZXR1cm4gKFxuICAgIDxFcnJvckxheW91dD5cbiAgICAgIDxwPjQwNDwvcD5cblxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT7QndCwINCz0LvQsNCy0L3Rg9GOPC9CdXR0b24+XG4gICAgPC9FcnJvckxheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvck5vdEZvdW5kXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
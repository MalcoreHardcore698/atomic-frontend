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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProperties\", function() { return clearProperties; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrap\", function() { return Wrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst clearProperties = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"color:black;background:none;border:none;height:auto;padding:0;&:hover{background:none;border:none;color:var(--default-color-accent);}\"]);\nconst Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({\n  displayName: \"Button__Wrap\",\n  componentId: \"sc-187wlp-0\"\n})([\"font-family:var(--default-font-family);font-size:0.875rem;color:black;border:var(--surface-border);border-radius:var(--surface-border-radius);background:none;margin:0;padding:var(--input-offset-\", \");width:auto;height:var(--input-height-\", \");transition:all 150ms ease;\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"\"], ({\n  size\n}) => size, ({\n  size\n}) => size, ({\n  kind,\n  size\n}) => kind === 'icon' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"padding:0;width:var(--input-height-\", \");min-width:var(--input-height-\", \");\"], size, size), ({\n  appearance\n}) => appearance === 'default' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"color:white;background:var(--default-color-accent);border:1px solid var(--default-color-accent);&:hover{background:var(--default-color-accent__hover);border:1px solid var(--default-color-accent__hover);}\", \"\"], ({\n  revert\n}) => revert && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"color:var(--default-color-accent);background:var(--default-color-accent-dim);border:1px solid var(--default-color-accent-dim);&:hover{background:var(--default-color-accent-dim__hover);border:1px solid var(--default-color-accent-dim__hover);}\"])), ({\n  appearance\n}) => appearance === 'green' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"color:white;background:var(--default-color-green);border:1px solid var(--default-color-green) &:hover{background:var(--default-color-green__hover);border:1px solid var(--default-color-green__hover);}\", \"\"], ({\n  revert\n}) => revert && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"color:var(--default-color-green);background:var(--default-color-green-dim);border:1px solid var(--default-color-green-dim);&:hover{background:var(--default-color-green-dim__hover);border:1px solid var(--default-color-green-dim__hover);}\"])), ({\n  appearance\n}) => appearance === 'red' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"color:white;background:var(--default-color-red);border:1px solid var(--default-color-red) &:hover{background:var(--default-color-red__hover);border:1px solid var(--default-color-red__hover);}\", \"\"], ({\n  revert\n}) => revert && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"color:var(--default-color-red);background:var(--default-color-red-dim);border:1px solid var(--default-color-red-dim);&:hover{background:var(--default-color-red-dim__hover);border:1px solid var(--default-color-red-dim__hover);}\"])), ({\n  appearance\n}) => appearance === 'ghost' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"color:var(--ghost-color-text);background:var(--ghost-color-background);border:1px solid var(--ghost-color-background);&:hover{opacity:0.75;}\"]), ({\n  appearance\n}) => appearance === 'outlined' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"color:gray;border:1px solid rgba(0,0,0,15%);&:hover{color:var(--default-color-accent);border:1px solid var(--default-color-accent);}\"]), ({\n  appearance\n}) => appearance === 'clear' && clearProperties, ({\n  appearance\n}) => appearance === 'link' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"\", \" color:var(--default-color-accent);text-align:left;padding:0;\"], clearProperties), ({\n  disabled\n}) => disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"color:var(--ghost-color-text);background:var(--ghost-color-background);border:1px solid var(--ghost-color-background);cursor:default;&:hover{background:var(--ghost-color-background);border:1px solid var(--ghost-color-background);opacity:1;}\"]));\nconst Button = ({\n  children,\n  ...props\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, props, children);\nButton.defaultProps = {\n  appearance: 'default',\n  kind: 'default',\n  size: 'm'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hdG9taWMtdWkvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanM/NjVlNiJdLCJuYW1lcyI6WyJjbGVhclByb3BlcnRpZXMiLCJjc3MiLCJXcmFwIiwic3R5bGVkIiwiYnV0dG9uIiwic2l6ZSIsImtpbmQiLCJhcHBlYXJhbmNlIiwicmV2ZXJ0IiwiZGlzYWJsZWQiLCJCdXR0b24iLCJjaGlsZHJlbiIsInByb3BzIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLGVBQWUsR0FBR0MsNkRBQUgsMklBQXJCO0FBY0EsTUFBTUMsSUFBSSxHQUFHQyx3REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLGtVQVVlLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWNBLElBVjdCLEVBWWMsQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FBY0EsSUFaNUIsRUFnQmIsQ0FBQztBQUFFQyxNQUFGO0FBQVFEO0FBQVIsQ0FBRCxLQUNBQyxJQUFJLEtBQUssTUFBVCxJQUNBTCw2REFEQSxtRkFHOEJJLElBSDlCLEVBSWtDQSxJQUpsQyxDQWpCYSxFQXdCYixDQUFDO0FBQUVFO0FBQUYsQ0FBRCxLQUNBQSxVQUFVLEtBQUssU0FBZixJQUNBTiw2REFEQSxzTkFXSSxDQUFDO0FBQUVPO0FBQUYsQ0FBRCxLQUNBQSxNQUFNLElBQ05QLDZEQURNLHVQQVpWLENBekJhLEVBa0RiLENBQUM7QUFBRU07QUFBRixDQUFELEtBQ0FBLFVBQVUsS0FBSyxPQUFmLElBQ0FOLDZEQURBLGtOQVdJLENBQUM7QUFBRU87QUFBRixDQUFELEtBQ0FBLE1BQU0sSUFDTlAsNkRBRE0sa1BBWlYsQ0FuRGEsRUE0RWIsQ0FBQztBQUFFTTtBQUFGLENBQUQsS0FDQUEsVUFBVSxLQUFLLEtBQWYsSUFDQU4sNkRBREEsME1BV0ksQ0FBQztBQUFFTztBQUFGLENBQUQsS0FDQUEsTUFBTSxJQUNOUCw2REFETSx3T0FaVixDQTdFYSxFQXNHYixDQUFDO0FBQUVNO0FBQUYsQ0FBRCxLQUNBQSxVQUFVLEtBQUssT0FBZixJQUNBTiw2REFEQSxrSkF2R2EsRUFrSGIsQ0FBQztBQUFFTTtBQUFGLENBQUQsS0FDQUEsVUFBVSxLQUFLLFVBQWYsSUFDQU4sNkRBREEsMElBbkhhLEVBOEhiLENBQUM7QUFBRU07QUFBRixDQUFELEtBQW9CQSxVQUFVLEtBQUssT0FBZixJQUEwQlAsZUE5SGpDLEVBZ0liLENBQUM7QUFBRU87QUFBRixDQUFELEtBQ0FBLFVBQVUsS0FBSyxNQUFmLElBQ0FOLDZEQURBLHdFQUVJRCxlQUZKLENBaklhLEVBeUliLENBQUM7QUFBRVM7QUFBRixDQUFELEtBQ0FBLFFBQVEsSUFDUlIsNkRBRFEsc1BBMUlLLENBQVY7QUF5SkEsTUFBTVMsTUFBTSxHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZLEtBQUdDO0FBQWYsQ0FBRCxrQkFBNEIsMkRBQUMsSUFBRCxFQUFVQSxLQUFWLEVBQWtCRCxRQUFsQixDQUEzQztBQUVQRCxNQUFNLENBQUNHLFlBQVAsR0FBc0I7QUFDcEJOLFlBQVUsRUFBRSxTQURRO0FBRXBCRCxNQUFJLEVBQUUsU0FGYztBQUdwQkQsTUFBSSxFQUFFO0FBSGMsQ0FBdEI7QUFNZUsscUVBQWYiLCJmaWxlIjoiLi9hdG9taWMtdWkvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgY2xlYXJQcm9wZXJ0aWVzID0gY3NzYFxuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LWNvbG9yLWFjY2VudCk7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFdyYXAgPSBzdHlsZWQuYnV0dG9uYFxuICBmb250LWZhbWlseTogdmFyKC0tZGVmYXVsdC1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiBibGFjaztcblxuICBib3JkZXI6IHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3VyZmFjZS1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogbm9uZTtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LW9mZnNldC0keyh7IHNpemUgfSkgPT4gc2l6ZX0pO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiB2YXIoLS1pbnB1dC1oZWlnaHQtJHsoeyBzaXplIH0pID0+IHNpemV9KTtcblxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcblxuICAkeyh7IGtpbmQsIHNpemUgfSkgPT5cbiAgICBraW5kID09PSAnaWNvbicgJiZcbiAgICBjc3NgXG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IHZhcigtLWlucHV0LWhlaWdodC0ke3NpemV9KTtcbiAgICAgIG1pbi13aWR0aDogdmFyKC0taW5wdXQtaGVpZ2h0LSR7c2l6ZX0pO1xuICAgIGB9XG5cbiAgJHsoeyBhcHBlYXJhbmNlIH0pID0+XG4gICAgYXBwZWFyYW5jZSA9PT0gJ2RlZmF1bHQnICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnRfX2hvdmVyKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnRfX2hvdmVyKTtcbiAgICAgIH1cblxuICAgICAgJHsoeyByZXZlcnQgfSkgPT5cbiAgICAgICAgcmV2ZXJ0ICYmXG4gICAgICAgIGNzc2BcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRlZmF1bHQtY29sb3ItYWNjZW50LWRpbSk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQtZGltKTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQtZGltX19ob3Zlcik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWFjY2VudC1kaW1fX2hvdmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgYH1cblxuICAkeyh7IGFwcGVhcmFuY2UgfSkgPT5cbiAgICBhcHBlYXJhbmNlID09PSAnZ3JlZW4nICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1ncmVlbik7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWdyZWVuKVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1ncmVlbl9faG92ZXIpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWdyZWVuX19ob3Zlcik7XG4gICAgICB9XG5cbiAgICAgICR7KHsgcmV2ZXJ0IH0pID0+XG4gICAgICAgIHJldmVydCAmJlxuICAgICAgICBjc3NgXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRlZmF1bHQtY29sb3ItZ3JlZW4pO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRlZmF1bHQtY29sb3ItZ3JlZW4tZGltKTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWdyZWVuLWRpbSk7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRlZmF1bHQtY29sb3ItZ3JlZW4tZGltX19ob3Zlcik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWdyZWVuLWRpbV9faG92ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICBgfVxuXG4gICR7KHsgYXBwZWFyYW5jZSB9KSA9PlxuICAgIGFwcGVhcmFuY2UgPT09ICdyZWQnICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1yZWQpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGVmYXVsdC1jb2xvci1yZWQpXG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZWZhdWx0LWNvbG9yLXJlZF9faG92ZXIpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLXJlZF9faG92ZXIpO1xuICAgICAgfVxuXG4gICAgICAkeyh7IHJldmVydCB9KSA9PlxuICAgICAgICByZXZlcnQgJiZcbiAgICAgICAgY3NzYFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LWNvbG9yLXJlZCk7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGVmYXVsdC1jb2xvci1yZWQtZGltKTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLXJlZC1kaW0pO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kZWZhdWx0LWNvbG9yLXJlZC1kaW1fX2hvdmVyKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRlZmF1bHQtY29sb3ItcmVkLWRpbV9faG92ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICBgfVxuICAgIFxuICAkeyh7IGFwcGVhcmFuY2UgfSkgPT5cbiAgICBhcHBlYXJhbmNlID09PSAnZ2hvc3QnICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6IHZhcigtLWdob3N0LWNvbG9yLXRleHQpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ2hvc3QtY29sb3ItYmFja2dyb3VuZCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1naG9zdC1jb2xvci1iYWNrZ3JvdW5kKTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGFwcGVhcmFuY2UgfSkgPT5cbiAgICBhcHBlYXJhbmNlID09PSAnb3V0bGluZWQnICYmXG4gICAgY3NzYFxuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDE1JSk7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kZWZhdWx0LWNvbG9yLWFjY2VudCk7XG4gICAgICB9XG4gICAgYH1cblxuICAkeyh7IGFwcGVhcmFuY2UgfSkgPT4gYXBwZWFyYW5jZSA9PT0gJ2NsZWFyJyAmJiBjbGVhclByb3BlcnRpZXN9XG5cbiAgJHsoeyBhcHBlYXJhbmNlIH0pID0+XG4gICAgYXBwZWFyYW5jZSA9PT0gJ2xpbmsnICYmXG4gICAgY3NzYFxuICAgICAgJHtjbGVhclByb3BlcnRpZXN9XG4gICAgICBjb2xvcjogdmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgYH1cblxuICAkeyh7IGRpc2FibGVkIH0pID0+XG4gICAgZGlzYWJsZWQgJiZcbiAgICBjc3NgXG4gICAgICBjb2xvcjogdmFyKC0tZ2hvc3QtY29sb3ItdGV4dCk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1naG9zdC1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdob3N0LWNvbG9yLWJhY2tncm91bmQpO1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ2hvc3QtY29sb3ItYmFja2dyb3VuZCk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdob3N0LWNvbG9yLWJhY2tncm91bmQpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gPFdyYXAgey4uLnByb3BzfT57Y2hpbGRyZW59PC9XcmFwPlxuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gIGtpbmQ6ICdkZWZhdWx0JyxcbiAgc2l6ZTogJ20nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./atomic-ui/components/Button/index.js\n");

/***/ }),

/***/ "./layouts/error.js":
/*!**************************!*\
  !*** ./layouts/error.js ***!
  \**************************/
/*! exports provided: ErrorLayout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorLayout\", function() { return ErrorLayout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.main.withConfig({\n  displayName: \"error__Main\",\n  componentId: \"j0e2gj-0\"\n})([\"display:flex;flex-direction:column;justify-content:center;align-items:center;grid-gap:var(--default-gap);width:100%;height:100vh;p{font-size:64px;font-weight:var(--font-weight-bold);color:var(--default-color-text);}\"]);\nconst ErrorLayout = ({\n  children,\n  title = 'Error'\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"keywords\",\n    content: \"next,javascript,nextjs,react\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"description\",\n    content: \"primar project description\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, null, children));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sYXlvdXRzL2Vycm9yLmpzPzg0OWIiXSwibmFtZXMiOlsiTWFpbiIsInN0eWxlZCIsIm1haW4iLCJFcnJvckxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLHdEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsK05BQVY7QUFnQk8sTUFBTUMsV0FBVyxHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQyxPQUFLLEdBQUc7QUFBcEIsQ0FBRCxLQUFtQztBQUM1RCxzQkFDRSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAscUJBQ0UsMkRBQUMsZ0RBQUQscUJBQ0U7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUM7QUFBOUIsSUFERixlQUVFO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDO0FBQWpDLElBRkYsZUFHRSwwRUFBUUEsS0FBUixDQUhGLENBREYsZUFPRSwyREFBQyxJQUFELFFBQU9ELFFBQVAsQ0FQRixDQURGO0FBV0QsQ0FaTTtBQWNRRCwwRUFBZiIsImZpbGUiOiIuL2xheW91dHMvZXJyb3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBNYWluID0gc3R5bGVkLm1haW5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWdhcDogdmFyKC0tZGVmYXVsdC1nYXApO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgIGNvbG9yOiB2YXIoLS1kZWZhdWx0LWNvbG9yLXRleHQpO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBFcnJvckxheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdFcnJvcicgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwibmV4dCxqYXZhc2NyaXB0LG5leHRqcyxyZWFjdFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJwcmltYXIgcHJvamVjdCBkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPE1haW4+e2NoaWxkcmVufTwvTWFpbj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yTGF5b3V0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layouts/error.js\n");

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atomic-ui/components/Button */ \"./atomic-ui/components/Button/index.js\");\n/* harmony import */ var _layouts_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/error */ \"./layouts/error.js\");\n\n\n\n\n\nconst ErrorNotFound = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"404\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onClick: () => router.push('/')\n  }, \"\\u041D\\u0430 \\u0433\\u043B\\u0430\\u0432\\u043D\\u0443\\u044E\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorNotFound);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy80MDQuanM/YjhkYyJdLCJuYW1lcyI6WyJFcnJvck5vdEZvdW5kIiwicm91dGVyIiwidXNlUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUMxQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsc0JBQ0UsMkRBQUMsc0RBQUQscUJBQ0UsNEVBREYsZUFHRSwyREFBQyxvRUFBRDtBQUFRLFdBQU8sRUFBRSxNQUFNRCxNQUFNLENBQUNFLElBQVAsQ0FBWSxHQUFaO0FBQXZCLCtEQUhGLENBREY7QUFPRCxDQVZEOztBQVllSCw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzLzQwNC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2F0b21pYy11aS9jb21wb25lbnRzL0J1dHRvbidcblxuaW1wb3J0IEVycm9yTGF5b3V0IGZyb20gJy4uL2xheW91dHMvZXJyb3InXG5cbmNvbnN0IEVycm9yTm90Rm91bmQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JMYXlvdXQ+XG4gICAgICA8cD40MDQ8L3A+XG5cbiAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+0J3QsCDQs9C70LDQstC90YPRjjwvQnV0dG9uPlxuICAgIDwvRXJyb3JMYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JOb3RGb3VuZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });
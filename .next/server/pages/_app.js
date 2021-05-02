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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apollo/client/index.js":
/*!********************************!*\
  !*** ./apollo/client/index.js ***!
  \********************************/
/*! exports provided: errorLink, requestLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorLink\", function() { return errorLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestLink\", function() { return requestLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createApolloClient; });\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ \"apollo-client\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache-inmemory */ \"apollo-cache-inmemory\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-upload-client */ \"apollo-upload-client\");\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link */ \"apollo-link\");\n/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-error */ \"apollo-link-error\");\n/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\n\n\n\n\n\nconst SSR = true;\nconst NODE_ENV = true;\nconst SERVER_URL = NODE_ENV ? _config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get('server-local-url') : _config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get('server-host-url');\nconst SECRET = _config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get('secret');\n\nconst request = async operation => {\n  const token = !SSR && (await localStorage.getItem(SECRET));\n  operation.setContext({\n    headers: {\n      authorization: token ? `Bearer ${token}` : ''\n    }\n  });\n};\n\nconst defaultOptions = {\n  watchQuery: {\n    fetchPolicy: 'no-cache',\n    errorPolicy: 'ignore'\n  },\n  query: {\n    fetchPolicy: 'no-cache',\n    errorPolicy: 'all'\n  }\n};\nconst errorLink = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_4__[\"onError\"])(({\n  graphQLErrors,\n  networkError\n}) => {\n  if (graphQLErrors) {\n    console.log('[graphQLErrors]', graphQLErrors);\n  }\n\n  if (networkError) {\n    console.log('[networkError]', networkError);\n  }\n});\nconst requestLink = new apollo_link__WEBPACK_IMPORTED_MODULE_3__[\"ApolloLink\"]((operation, forward) => new apollo_link__WEBPACK_IMPORTED_MODULE_3__[\"Observable\"](observer => {\n  let handle;\n  Promise.resolve(operation).then(result => request(result)).then(() => {\n    handle = forward(operation).subscribe({\n      next: observer.next.bind(observer),\n      error: observer.error.bind(observer),\n      complete: observer.complete.bind(observer)\n    });\n  }).catch(observer.error.bind(observer));\n  return () => {\n    if (handle) handle.unsubscribe();\n  };\n}));\nconst uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__[\"createUploadLink\"])({\n  uri: `${SERVER_URL}/graphql`,\n  credentials: 'same-origin'\n});\nfunction createApolloClient() {\n  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n    ssrMode: SSR,\n    link: apollo_link__WEBPACK_IMPORTED_MODULE_3__[\"ApolloLink\"].from([errorLink, requestLink, uploadLink]),\n    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__[\"InMemoryCache\"](),\n    defaultOptions\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8vY2xpZW50L2luZGV4LmpzP2FmZjAiXSwibmFtZXMiOlsiU1NSIiwiTk9ERV9FTlYiLCJTRVJWRVJfVVJMIiwiY29uZmlnIiwiZ2V0IiwiU0VDUkVUIiwicmVxdWVzdCIsIm9wZXJhdGlvbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5IiwiZXJyb3JQb2xpY3kiLCJxdWVyeSIsImVycm9yTGluayIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RMaW5rIiwiQXBvbGxvTGluayIsImZvcndhcmQiLCJPYnNlcnZhYmxlIiwib2JzZXJ2ZXIiLCJoYW5kbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZXN1bHQiLCJzdWJzY3JpYmUiLCJuZXh0IiwiYmluZCIsImVycm9yIiwiY29tcGxldGUiLCJjYXRjaCIsInVuc3Vic2NyaWJlIiwidXBsb2FkTGluayIsImNyZWF0ZVVwbG9hZExpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiZnJvbSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUEsR0FBRyxPQUFUO0FBQ0EsTUFBTUMsUUFBUSxPQUFkO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRCxRQUFRLEdBQUdFLCtDQUFNLENBQUNDLEdBQVAsQ0FBVyxrQkFBWCxDQUFILEdBQW9DRCwrQ0FBTSxDQUFDQyxHQUFQLENBQVcsaUJBQVgsQ0FBL0Q7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLCtDQUFNLENBQUNDLEdBQVAsQ0FBVyxRQUFYLENBQWY7O0FBRUEsTUFBTUUsT0FBTyxHQUFHLE1BQU9DLFNBQVAsSUFBcUI7QUFDbkMsUUFBTUMsS0FBSyxHQUFHLENBQUNSLEdBQUQsS0FBUyxNQUFNUyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJMLE1BQXJCLENBQWYsQ0FBZDtBQUNBRSxXQUFTLENBQUNJLFVBQVYsQ0FBcUI7QUFDbkJDLFdBQU8sRUFBRTtBQUNQQyxtQkFBYSxFQUFFTCxLQUFLLEdBQUksVUFBU0EsS0FBTSxFQUFuQixHQUF1QjtBQURwQztBQURVLEdBQXJCO0FBS0QsQ0FQRDs7QUFTQSxNQUFNTSxjQUFjLEdBQUc7QUFDckJDLFlBQVUsRUFBRTtBQUNWQyxlQUFXLEVBQUUsVUFESDtBQUVWQyxlQUFXLEVBQUU7QUFGSCxHQURTO0FBS3JCQyxPQUFLLEVBQUU7QUFDTEYsZUFBVyxFQUFFLFVBRFI7QUFFTEMsZUFBVyxFQUFFO0FBRlI7QUFMYyxDQUF2QjtBQVdPLE1BQU1FLFNBQVMsR0FBR0MsaUVBQU8sQ0FBQyxDQUFDO0FBQUVDLGVBQUY7QUFBaUJDO0FBQWpCLENBQUQsS0FBcUM7QUFDcEUsTUFBSUQsYUFBSixFQUFtQjtBQUNqQkUsV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JILGFBQS9CO0FBQ0Q7O0FBQ0QsTUFBSUMsWUFBSixFQUFrQjtBQUNoQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLFlBQTlCO0FBQ0Q7QUFDRixDQVArQixDQUF6QjtBQVNBLE1BQU1HLFdBQVcsR0FBRyxJQUFJQyxzREFBSixDQUN6QixDQUFDbkIsU0FBRCxFQUFZb0IsT0FBWixLQUNFLElBQUlDLHNEQUFKLENBQWdCQyxRQUFELElBQWM7QUFDM0IsTUFBSUMsTUFBSjtBQUVBQyxTQUFPLENBQUNDLE9BQVIsQ0FBZ0J6QixTQUFoQixFQUNHMEIsSUFESCxDQUNTQyxNQUFELElBQVk1QixPQUFPLENBQUM0QixNQUFELENBRDNCLEVBRUdELElBRkgsQ0FFUSxNQUFNO0FBQ1ZILFVBQU0sR0FBR0gsT0FBTyxDQUFDcEIsU0FBRCxDQUFQLENBQW1CNEIsU0FBbkIsQ0FBNkI7QUFDcENDLFVBQUksRUFBRVAsUUFBUSxDQUFDTyxJQUFULENBQWNDLElBQWQsQ0FBbUJSLFFBQW5CLENBRDhCO0FBRXBDUyxXQUFLLEVBQUVULFFBQVEsQ0FBQ1MsS0FBVCxDQUFlRCxJQUFmLENBQW9CUixRQUFwQixDQUY2QjtBQUdwQ1UsY0FBUSxFQUFFVixRQUFRLENBQUNVLFFBQVQsQ0FBa0JGLElBQWxCLENBQXVCUixRQUF2QjtBQUgwQixLQUE3QixDQUFUO0FBS0QsR0FSSCxFQVNHVyxLQVRILENBU1NYLFFBQVEsQ0FBQ1MsS0FBVCxDQUFlRCxJQUFmLENBQW9CUixRQUFwQixDQVRUO0FBV0EsU0FBTyxNQUFNO0FBQ1gsUUFBSUMsTUFBSixFQUFZQSxNQUFNLENBQUNXLFdBQVA7QUFDYixHQUZEO0FBR0QsQ0FqQkQsQ0FGdUIsQ0FBcEI7QUFzQlAsTUFBTUMsVUFBVSxHQUFHQyw2RUFBZ0IsQ0FBQztBQUNsQ0MsS0FBRyxFQUFHLEdBQUUxQyxVQUFXLFVBRGU7QUFFbEMyQyxhQUFXLEVBQUU7QUFGcUIsQ0FBRCxDQUFuQztBQUtlLFNBQVNDLGtCQUFULEdBQThCO0FBQzNDLFNBQU8sSUFBSUMsMERBQUosQ0FBaUI7QUFDdEJDLFdBQU8sRUFBRWhELEdBRGE7QUFFdEJpRCxRQUFJLEVBQUV2QixzREFBVSxDQUFDd0IsSUFBWCxDQUFnQixDQUFDL0IsU0FBRCxFQUFZTSxXQUFaLEVBQXlCaUIsVUFBekIsQ0FBaEIsQ0FGZ0I7QUFHdEJTLFNBQUssRUFBRSxJQUFJQyxtRUFBSixFQUhlO0FBSXRCdEM7QUFKc0IsR0FBakIsQ0FBUDtBQU1EIiwiZmlsZSI6Ii4vYXBvbGxvL2NsaWVudC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5J1xuaW1wb3J0IHsgY3JlYXRlVXBsb2FkTGluayB9IGZyb20gJ2Fwb2xsby11cGxvYWQtY2xpZW50J1xuaW1wb3J0IHsgQXBvbGxvTGluaywgT2JzZXJ2YWJsZSB9IGZyb20gJ2Fwb2xsby1saW5rJ1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ2Fwb2xsby1saW5rLWVycm9yJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZydcblxuY29uc3QgU1NSID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcbmNvbnN0IE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuY29uc3QgU0VSVkVSX1VSTCA9IE5PREVfRU5WID8gY29uZmlnLmdldCgnc2VydmVyLWxvY2FsLXVybCcpIDogY29uZmlnLmdldCgnc2VydmVyLWhvc3QtdXJsJylcbmNvbnN0IFNFQ1JFVCA9IGNvbmZpZy5nZXQoJ3NlY3JldCcpXG5cbmNvbnN0IHJlcXVlc3QgPSBhc3luYyAob3BlcmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gIVNTUiAmJiAoYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oU0VDUkVUKSlcbiAgb3BlcmF0aW9uLnNldENvbnRleHQoe1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJ1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHdhdGNoUXVlcnk6IHtcbiAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICBlcnJvclBvbGljeTogJ2lnbm9yZSdcbiAgfSxcbiAgcXVlcnk6IHtcbiAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICBlcnJvclBvbGljeTogJ2FsbCdcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXJyb3JMaW5rID0gb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xuICBpZiAoZ3JhcGhRTEVycm9ycykge1xuICAgIGNvbnNvbGUubG9nKCdbZ3JhcGhRTEVycm9yc10nLCBncmFwaFFMRXJyb3JzKVxuICB9XG4gIGlmIChuZXR3b3JrRXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnW25ldHdvcmtFcnJvcl0nLCBuZXR3b3JrRXJyb3IpXG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0TGluayA9IG5ldyBBcG9sbG9MaW5rKFxuICAob3BlcmF0aW9uLCBmb3J3YXJkKSA9PlxuICAgIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGhhbmRsZVxuXG4gICAgICBQcm9taXNlLnJlc29sdmUob3BlcmF0aW9uKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXF1ZXN0KHJlc3VsdCkpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBoYW5kbGUgPSBmb3J3YXJkKG9wZXJhdGlvbikuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2ZXIuY29tcGxldGUuYmluZChvYnNlcnZlcilcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlcikpXG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChoYW5kbGUpIGhhbmRsZS51bnN1YnNjcmliZSgpXG4gICAgICB9XG4gICAgfSlcbilcblxuY29uc3QgdXBsb2FkTGluayA9IGNyZWF0ZVVwbG9hZExpbmsoe1xuICB1cmk6IGAke1NFUlZFUl9VUkx9L2dyYXBocWxgLFxuICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogU1NSLFxuICAgIGxpbms6IEFwb2xsb0xpbmsuZnJvbShbZXJyb3JMaW5rLCByZXF1ZXN0TGluaywgdXBsb2FkTGlua10pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICAgIGRlZmF1bHRPcHRpb25zXG4gIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo/client/index.js\n");

/***/ }),

/***/ "./apollo/index.js":
/*!*************************!*\
  !*** ./apollo/index.js ***!
  \*************************/
/*! exports provided: initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client */ \"./apollo/client/index.js\");\n\n\n\nlet apolloClient;\nfunction initializeApollo(initialState = null) {\n  var _apolloClient2;\n\n  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : Object(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  if (initialState) {\n    const existingCache = _apolloClient.extract();\n\n    const data = deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(initialState, existingCache);\n\n    _apolloClient.cache.restore(data);\n  }\n\n  if (true) return _apolloClient;\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction useApollo(initialState) {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeApollo(initialState), [initialState]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcG9sbG8vaW5kZXguanM/YTcyNCJdLCJuYW1lcyI6WyJhcG9sbG9DbGllbnQiLCJpbml0aWFsaXplQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsImNyZWF0ZUFwb2xsb0NsaWVudCIsImV4aXN0aW5nQ2FjaGUiLCJleHRyYWN0IiwiZGF0YSIsIm1lcmdlIiwiY2FjaGUiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBLElBQUlBLFlBQUo7QUFFTyxTQUFTQyxnQkFBVCxDQUEwQkMsWUFBWSxHQUFHLElBQXpDLEVBQStDO0FBQUE7O0FBQ3BELFFBQU1DLGFBQWEscUJBQUdILFlBQUgsMkRBQW1CSSx1REFBa0IsRUFBeEQ7O0FBRUEsTUFBSUYsWUFBSixFQUFrQjtBQUNoQixVQUFNRyxhQUFhLEdBQUdGLGFBQWEsQ0FBQ0csT0FBZCxFQUF0Qjs7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLGdEQUFLLENBQUNOLFlBQUQsRUFBZUcsYUFBZixDQUFsQjs7QUFFQUYsaUJBQWEsQ0FBQ00sS0FBZCxDQUFvQkMsT0FBcEIsQ0FBNEJILElBQTVCO0FBQ0Q7O0FBRUQsWUFBbUMsT0FBT0osYUFBUDtBQUNuQyxNQUFJLENBQUNILFlBQUwsRUFBbUJBLFlBQVksR0FBR0csYUFBZjtBQUVuQixTQUFPQSxhQUFQO0FBQ0Q7QUFFTSxTQUFTUSxTQUFULENBQW1CVCxZQUFuQixFQUFpQztBQUN0QyxTQUFPVSxxREFBTyxDQUFDLE1BQU1YLGdCQUFnQixDQUFDQyxZQUFELENBQXZCLEVBQXVDLENBQUNBLFlBQUQsQ0FBdkMsQ0FBZDtBQUNEIiwiZmlsZSI6Ii4vYXBvbGxvL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcblxuaW1wb3J0IGNyZWF0ZUFwb2xsb0NsaWVudCBmcm9tICcuL2NsaWVudCdcblxubGV0IGFwb2xsb0NsaWVudFxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KClcblxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpXG4gICAgY29uc3QgZGF0YSA9IG1lcmdlKGluaXRpYWxTdGF0ZSwgZXhpc3RpbmdDYWNoZSlcblxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShkYXRhKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudFxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudFxuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./apollo/index.js\n");

/***/ }),

/***/ "./atomic-ui/assets/styles/styles.css":
/*!********************************************!*\
  !*** ./atomic-ui/assets/styles/styles.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2F0b21pYy11aS9hc3NldHMvc3R5bGVzL3N0eWxlcy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./atomic-ui/assets/styles/styles.css\n");

/***/ }),

/***/ "./atomic-ui/theme/default.css":
/*!*************************************!*\
  !*** ./atomic-ui/theme/default.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2F0b21pYy11aS90aGVtZS9kZWZhdWx0LmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./atomic-ui/theme/default.css\n");

/***/ }),

/***/ "./atomic-ui/theme/index.js":
/*!**********************************!*\
  !*** ./atomic-ui/theme/index.js ***!
  \**********************************/
/*! exports provided: list, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\nconst list = [{\n  name: 'default',\n  label: 'Темная'\n}, {\n  name: 'light',\n  label: 'Светлая'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  colors: {\n    primary: '#0070f3'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hdG9taWMtdWkvdGhlbWUvaW5kZXguanM/MDBlMCJdLCJuYW1lcyI6WyJsaXN0IiwibmFtZSIsImxhYmVsIiwiY29sb3JzIiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLE1BQU1BLElBQUksR0FBRyxDQUNsQjtBQUNFQyxNQUFJLEVBQUUsU0FEUjtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQURrQixFQUtsQjtBQUNFRCxNQUFJLEVBQUUsT0FEUjtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQUxrQixDQUFiO0FBV1E7QUFDYkMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRTtBQURIO0FBREssQ0FBZiIsImZpbGUiOiIuL2F0b21pYy11aS90aGVtZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBsaXN0ID0gW1xuICB7XG4gICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgIGxhYmVsOiAn0KLQtdC80L3QsNGPJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2xpZ2h0JyxcbiAgICBsYWJlbDogJ9Ch0LLQtdGC0LvQsNGPJ1xuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyMwMDcwZjMnXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./atomic-ui/theme/index.js\n");

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n  salt: 10,\n  secret: 'Bearer',\n  port: 3000,\n  'video-id': 'lV6dOFeHwqY',\n  'upload-dir': 'uploads',\n  'host-url': 'https://atomic.ru.com',\n  'local-url': 'http://localhost:3000',\n  'server-host-url': 'https://api.atomic.ru.com',\n  'server-local-url': 'http://localhost:5000',\n  'mongo-db-url': 'mongodb+srv://admin:xnCXyzVApMpHo6ee@cluster0.yjaue.mongodb.net/app?retryWrites=true&w=majority',\n  'google-client-id': '1008300307671-dvv5no8uimgk2lodr76m9rnnva8g0lii.apps.googleusercontent.com',\n  'google-client-secret': '5frE-oJIGm06KLUjcx3VcL9s',\n  'facebook-app-id': 317441829678268,\n  'facebook-app-secret': '3644f9d87f5a169d8196bc070b4fb146',\n  'tiny-key': '9vduzd1el74h2sf5a5744o3rnwmzmtsio2vbyjlrqlisy5u3'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  get: key => config[key]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanM/YWNlNyJdLCJuYW1lcyI6WyJjb25maWciLCJzYWx0Iiwic2VjcmV0IiwicG9ydCIsImdldCIsImtleSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFLEVBRE87QUFFYkMsUUFBTSxFQUFFLFFBRks7QUFHYkMsTUFBSSxFQUFFLElBSE87QUFJYixjQUFZLGFBSkM7QUFLYixnQkFBYyxTQUxEO0FBTWIsY0FBWSx1QkFOQztBQU9iLGVBQWEsdUJBUEE7QUFRYixxQkFBbUIsMkJBUk47QUFTYixzQkFBb0IsdUJBVFA7QUFVYixrQkFDRSxpR0FYVztBQVliLHNCQUFvQiwyRUFaUDtBQWFiLDBCQUF3QiwwQkFiWDtBQWNiLHFCQUFtQixlQWROO0FBZWIseUJBQXVCLGtDQWZWO0FBZ0JiLGNBQVk7QUFoQkMsQ0FBZjtBQW1CZTtBQUNiQyxLQUFHLEVBQUdDLEdBQUQsSUFBU0wsTUFBTSxDQUFDSyxHQUFEO0FBRFAsQ0FBZiIsImZpbGUiOiIuL2NvbmZpZy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcbiAgc2FsdDogMTAsXG4gIHNlY3JldDogJ0JlYXJlcicsXG4gIHBvcnQ6IDMwMDAsXG4gICd2aWRlby1pZCc6ICdsVjZkT0ZlSHdxWScsXG4gICd1cGxvYWQtZGlyJzogJ3VwbG9hZHMnLFxuICAnaG9zdC11cmwnOiAnaHR0cHM6Ly9hdG9taWMucnUuY29tJyxcbiAgJ2xvY2FsLXVybCc6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAnc2VydmVyLWhvc3QtdXJsJzogJ2h0dHBzOi8vYXBpLmF0b21pYy5ydS5jb20nLFxuICAnc2VydmVyLWxvY2FsLXVybCc6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnLFxuICAnbW9uZ28tZGItdXJsJzpcbiAgICAnbW9uZ29kYitzcnY6Ly9hZG1pbjp4bkNYeXpWQXBNcEhvNmVlQGNsdXN0ZXIwLnlqYXVlLm1vbmdvZGIubmV0L2FwcD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknLFxuICAnZ29vZ2xlLWNsaWVudC1pZCc6ICcxMDA4MzAwMzA3NjcxLWR2djVubzh1aW1nazJsb2RyNzZtOXJubnZhOGcwbGlpLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgJ2dvb2dsZS1jbGllbnQtc2VjcmV0JzogJzVmckUtb0pJR20wNktMVWpjeDNWY0w5cycsXG4gICdmYWNlYm9vay1hcHAtaWQnOiAzMTc0NDE4Mjk2NzgyNjgsXG4gICdmYWNlYm9vay1hcHAtc2VjcmV0JzogJzM2NDRmOWQ4N2Y1YTE2OWQ4MTk2YmMwNzBiNGZiMTQ2JyxcbiAgJ3Rpbnkta2V5JzogJzl2ZHV6ZDFlbDc0aDJzZjVhNTc0NG8zcm53bXptdHNpbzJ2YnlqbHJxbGlzeTV1Mydcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQ6IChrZXkpID0+IGNvbmZpZ1trZXldXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/index.js\n");

/***/ }),

/***/ "./node_modules/react-lazy-load-image-component/src/effects/opacity.css":
/*!******************************************************************************!*\
  !*** ./node_modules/react-lazy-load-image-component/src/effects/opacity.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50L3NyYy9lZmZlY3RzL29wYWNpdHkuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-lazy-load-image-component/src/effects/opacity.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_lazy_load_image_component_src_effects_opacity_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lazy-load-image-component/src/effects/opacity.css */ \"./node_modules/react-lazy-load-image-component/src/effects/opacity.css\");\n/* harmony import */ var react_lazy_load_image_component_src_effects_opacity_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component_src_effects_opacity_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _atomic_ui_theme_default_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../atomic-ui/theme/default.css */ \"./atomic-ui/theme/default.css\");\n/* harmony import */ var _atomic_ui_theme_default_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_atomic_ui_theme_default_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _atomic_ui_assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../atomic-ui/assets/styles/styles.css */ \"./atomic-ui/assets/styles/styles.css\");\n/* harmony import */ var _atomic_ui_assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_atomic_ui_assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _atomic_ui_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../atomic-ui/theme */ \"./atomic-ui/theme/index.js\");\n/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../apollo */ \"./apollo/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"]`\n  #nprogress {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: var(--z-override);\n    width: 100vw;\n    height: 100vh;\n    background: rgba(255, 255, 255, 0.45);\n    cursor: default;\n\n    .spinner, .spinner-icon {\n      display: none;\n    }\n  }\n`;\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  const client = Object(_apollo__WEBPACK_IMPORTED_MODULE_12__[\"useApollo\"])(pageProps.initialApolloState);\n  const store = Object(_store__WEBPACK_IMPORTED_MODULE_13__[\"useStore\"])(pageProps.initialReduxState);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__[\"ApolloProvider\"], {\n    client: client\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    charSet: 'utf-8'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: 'viewport',\n    content: 'minimum-scale=1, initial-scale=1, width=device-width'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: 'theme-color',\n    content: '#000000'\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: 'yandex-verification',\n    content: 'bfd04b96d30382f5'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n    theme: _atomic_ui_theme__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__[\"motion\"].div, {\n    key: router.route,\n    initial: 'pageInitial',\n    animate: 'pageAnimate',\n    variants: {\n      pageInitial: {\n        opacity: 0\n      },\n      pageAnimate: {\n        opacity: 1\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    color: 'var(--default-color-accent)',\n    startPosition: 0.3,\n    stopDelayMs: 200,\n    height: 3\n  }))));\n};\n\nconst getServerSideProps = async () => {\n  const store = Object(_store__WEBPACK_IMPORTED_MODULE_13__[\"initializeStore\"])();\n  const client = Object(_apollo__WEBPACK_IMPORTED_MODULE_12__[\"initializeApollo\"])();\n  return {\n    props: {\n      initialReduxState: store.getState(),\n      initialApolloState: client.cache.extract()\n    },\n    revalidate: 1\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInVzZUFwb2xsbyIsImluaXRpYWxBcG9sbG9TdGF0ZSIsInN0b3JlIiwidXNlU3RvcmUiLCJpbml0aWFsUmVkdXhTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInRoZW1lIiwicm91dGUiLCJwYWdlSW5pdGlhbCIsIm9wYWNpdHkiLCJwYWdlQW5pbWF0ZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImluaXRpYWxpemVTdG9yZSIsImluaXRpYWxpemVBcG9sbG8iLCJwcm9wcyIsImdldFN0YXRlIiwiY2FjaGUiLCJleHRyYWN0IiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZBOztBQWlCQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUN4QyxRQUFNQyxNQUFNLEdBQUdDLDBEQUFTLENBQUNGLFNBQVMsQ0FBQ0csa0JBQVgsQ0FBeEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLHdEQUFRLENBQUNMLFNBQVMsQ0FBQ00saUJBQVgsQ0FBdEI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsc0JBQ0UsMkRBQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVKO0FBQWpCLGtCQUNFLDJEQUFDLGtFQUFEO0FBQWdCLFVBQU0sRUFBRUg7QUFBeEIsa0JBQ0UsMkRBQUMsZ0RBQUQscUJBQ0U7QUFBTSxXQUFPLEVBQUU7QUFBZixJQURGLGVBRUU7QUFDRSxRQUFJLEVBQUUsVUFEUjtBQUVFLFdBQU8sRUFBRTtBQUZYLElBRkYsZUFNRTtBQUFNLFFBQUksRUFBRSxhQUFaO0FBQTJCLFdBQU8sRUFBRTtBQUFwQyxJQU5GLGVBT0U7QUFBTSxRQUFJLEVBQUUscUJBQVo7QUFBbUMsV0FBTyxFQUFFO0FBQTVDLElBUEYsQ0FERixlQVdFLDJEQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFUSx5REFBS0E7QUFBM0Isa0JBQ0UsMkRBQUMsV0FBRCxPQURGLGVBR0UsMkRBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsT0FBRyxFQUFFRixNQUFNLENBQUNHLEtBRGQ7QUFFRSxXQUFPLEVBQUUsYUFGWDtBQUdFLFdBQU8sRUFBRSxhQUhYO0FBSUUsWUFBUSxFQUFFO0FBQ1JDLGlCQUFXLEVBQUU7QUFDWEMsZUFBTyxFQUFFO0FBREUsT0FETDtBQUlSQyxpQkFBVyxFQUFFO0FBQ1hELGVBQU8sRUFBRTtBQURFO0FBSkw7QUFKWixrQkFZRSwyREFBQyxTQUFELEVBQWVaLFNBQWYsQ0FaRixDQUhGLGVBa0JFLDJEQUFDLHlEQUFEO0FBQ0UsU0FBSyxFQUFFLDZCQURUO0FBRUUsaUJBQWEsRUFBRSxHQUZqQjtBQUdFLGVBQVcsRUFBRSxHQUhmO0FBSUUsVUFBTSxFQUFFO0FBSlYsSUFsQkYsQ0FYRixDQURGLENBREY7QUF5Q0QsQ0E5Q0Q7O0FBZ0RPLE1BQU1jLGtCQUFrQixHQUFHLFlBQVk7QUFDNUMsUUFBTVYsS0FBSyxHQUFHVywrREFBZSxFQUE3QjtBQUNBLFFBQU1kLE1BQU0sR0FBR2UsaUVBQWdCLEVBQS9CO0FBRUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTFgsdUJBQWlCLEVBQUVGLEtBQUssQ0FBQ2MsUUFBTixFQURkO0FBRUxmLHdCQUFrQixFQUFFRixNQUFNLENBQUNrQixLQUFQLENBQWFDLE9BQWI7QUFGZixLQURGO0FBS0xDLGNBQVUsRUFBRTtBQUxQLEdBQVA7QUFPRCxDQVhNO0FBYVF2QixrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xuaW1wb3J0IE5leHROcHJvZ3Jlc3MgZnJvbSAnbmV4dGpzLXByb2dyZXNzYmFyJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuaW1wb3J0ICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50L3NyYy9lZmZlY3RzL29wYWNpdHkuY3NzJ1xuaW1wb3J0ICcuLi9hdG9taWMtdWkvdGhlbWUvZGVmYXVsdC5jc3MnXG5pbXBvcnQgJy4uL2F0b21pYy11aS9hc3NldHMvc3R5bGVzL3N0eWxlcy5jc3MnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vYXRvbWljLXVpL3RoZW1lJ1xuXG5pbXBvcnQgeyB1c2VBcG9sbG8sIGluaXRpYWxpemVBcG9sbG8gfSBmcm9tICcuLi9hcG9sbG8nXG5pbXBvcnQgeyB1c2VTdG9yZSwgaW5pdGlhbGl6ZVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICNucHJvZ3Jlc3Mge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiB2YXIoLS16LW92ZXJyaWRlKTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgIC5zcGlubmVyLCAuc3Bpbm5lci1pY29uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgY2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUpXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PXsndXRmLTgnfSAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPXsndmlld3BvcnQnfVxuICAgICAgICAgICAgY29udGVudD17J21pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT17J3RoZW1lLWNvbG9yJ30gY29udGVudD17JyMwMDAwMDAnfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9eyd5YW5kZXgtdmVyaWZpY2F0aW9uJ30gY29udGVudD17J2JmZDA0Yjk2ZDMwMzgyZjUnfSAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cblxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBrZXk9e3JvdXRlci5yb3V0ZX1cbiAgICAgICAgICAgIGluaXRpYWw9eydwYWdlSW5pdGlhbCd9XG4gICAgICAgICAgICBhbmltYXRlPXsncGFnZUFuaW1hdGUnfVxuICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgcGFnZUluaXRpYWw6IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBhZ2VBbmltYXRlOiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICA8TmV4dE5wcm9ncmVzc1xuICAgICAgICAgICAgY29sb3I9eyd2YXIoLS1kZWZhdWx0LWNvbG9yLWFjY2VudCknfVxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbj17MC4zfVxuICAgICAgICAgICAgc3RvcERlbGF5TXM9ezIwMH1cbiAgICAgICAgICAgIGhlaWdodD17M31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBpbml0aWFsaXplU3RvcmUoKVxuICBjb25zdCBjbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIGluaXRpYWxBcG9sbG9TdGF0ZTogY2xpZW50LmNhY2hlLmV4dHJhY3QoKVxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./store/reducers/index.js\");\n/* eslint-disable */\n\n\n\n\nlet store;\n\nfunction initStore(preloadedState = {}) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])()));\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState);\n\n  if (preloadedState && store) {\n    _store = initStore({ ...store.getState(),\n      ...preloadedState\n    });\n    store = undefined;\n  }\n\n  if (true) return _store;\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcz85MTAxIl0sIm5hbWVzIjpbInN0b3JlIiwiaW5pdFN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXJzIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImluaXRpYWxpemVTdG9yZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFJQSxLQUFKOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJDLGNBQWMsR0FBRyxFQUFwQyxFQUF3QztBQUN0QyxTQUFPQyx5REFBVyxDQUFDQyxpREFBRCxFQUFXRixjQUFYLEVBQTJCRyxvRkFBbUIsQ0FBQ0MsNkRBQWUsRUFBaEIsQ0FBOUMsQ0FBbEI7QUFDRDs7QUFFTSxNQUFNQyxlQUFlLEdBQUlMLGNBQUQsSUFBb0I7QUFBQTs7QUFDakQsTUFBSU0sTUFBTSxjQUFHUixLQUFILDZDQUFZQyxTQUFTLENBQUNDLGNBQUQsQ0FBL0I7O0FBRUEsTUFBSUEsY0FBYyxJQUFJRixLQUF0QixFQUE2QjtBQUMzQlEsVUFBTSxHQUFHUCxTQUFTLENBQUMsRUFDakIsR0FBR0QsS0FBSyxDQUFDUyxRQUFOLEVBRGM7QUFFakIsU0FBR1A7QUFGYyxLQUFELENBQWxCO0FBSUFGLFNBQUssR0FBR1UsU0FBUjtBQUNEOztBQUVELFlBQW1DLE9BQU9GLE1BQVA7QUFDbkMsTUFBSSxDQUFDUixLQUFMLEVBQVlBLEtBQUssR0FBR1EsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDRCxDQWZNO0FBaUJBLFNBQVNHLFFBQVQsQ0FBa0JDLFlBQWxCLEVBQWdDO0FBQ3JDLFFBQU1aLEtBQUssR0FBR2EscURBQU8sQ0FBQyxNQUFNTixlQUFlLENBQUNLLFlBQUQsQ0FBdEIsRUFBc0MsQ0FBQ0EsWUFBRCxDQUF0QyxDQUFyQjtBQUNBLFNBQU9aLEtBQVA7QUFDRCIsImZpbGUiOiIuL3N0b3JlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5cbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xuXG5sZXQgc3RvcmVcblxuZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0ge30pIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBwcmVsb2FkZWRTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSkpXG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcblxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlXG4gICAgfSlcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXG5cbiAgcmV0dXJuIF9zdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG4gIHJldHVybiBzdG9yZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./store/reducers/documents.js":
/*!*************************************!*\
  !*** ./store/reducers/documents.js ***!
  \*************************************/
/*! exports provided: documentReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"documentReducer\", function() { return documentReducer; });\n/* harmony import */ var _types_documents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/documents */ \"./store/types/documents.js\");\n\nconst initialState = null;\nconst documentReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _types_documents__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_DOCUMENTS:\n      return action.payload.documents;\n\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (documentReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9kb2N1bWVudHMuanM/MDA0ZiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJkb2N1bWVudFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDIiwiU0VUX0RPQ1VNRU5UUyIsInBheWxvYWQiLCJkb2N1bWVudHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsWUFBWSxHQUFHLElBQXJCO0FBRU8sTUFBTUMsZUFBZSxHQUFHLENBQUNDLEtBQUssR0FBR0YsWUFBVCxFQUF1QkcsTUFBdkIsS0FBa0M7QUFDL0QsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0Msd0RBQUMsQ0FBQ0MsYUFBUDtBQUNFLGFBQU9ILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxTQUF0Qjs7QUFDRjtBQUNFLGFBQU9OLEtBQVA7QUFKSjtBQU1ELENBUE07QUFTUUQsOEVBQWYiLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9kb2N1bWVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQyBmcm9tICcuLi90eXBlcy9kb2N1bWVudHMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IG51bGxcblxuZXhwb3J0IGNvbnN0IGRvY3VtZW50UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX0RPQ1VNRU5UUzpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5kb2N1bWVudHNcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9jdW1lbnRSZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/documents.js\n");

/***/ }),

/***/ "./store/reducers/drawer.js":
/*!**********************************!*\
  !*** ./store/reducers/drawer.js ***!
  \**********************************/
/*! exports provided: drawerReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawerReducer\", function() { return drawerReducer; });\n/* harmony import */ var _types_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/drawer */ \"./store/types/drawer.js\");\n\nconst HISTORY_LIMIT = 10;\nconst initialState = {\n  icon: '',\n  color: '',\n  title: '',\n  half: false,\n  side: 'right',\n  content: '',\n  history: []\n};\nconst drawerReducer = (state = initialState, action) => {\n  var _ref, _ref2, _ref3, _ref4, _ref5, _ref6;\n\n  switch (action.type) {\n    case _types_drawer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_DRAWER:\n      return {\n        icon: (_ref = action.payload && action.payload.icon) !== null && _ref !== void 0 ? _ref : '',\n        color: (_ref2 = action.payload && action.payload.color) !== null && _ref2 !== void 0 ? _ref2 : '',\n        title: (_ref3 = action.payload && action.payload.title) !== null && _ref3 !== void 0 ? _ref3 : '',\n        half: (_ref4 = action.payload && action.payload.half) !== null && _ref4 !== void 0 ? _ref4 : false,\n        side: (_ref5 = action.payload && action.payload.side) !== null && _ref5 !== void 0 ? _ref5 : 'right',\n        content: (_ref6 = action.payload && action.payload.content) !== null && _ref6 !== void 0 ? _ref6 : '',\n        history: action.payload && state.history.length < HISTORY_LIMIT ? [...state.history, action.payload] : [action.payload],\n        open: !!(action.payload && action.payload.content)\n      };\n\n    case _types_drawer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_BACK_DRAWER:\n      return { ...state.history[state.history.length - 2],\n        history: state.history.slice(0, state.history.length - 1),\n        open: true\n      };\n\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawerReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9kcmF3ZXIuanM/ZmY3NCJdLCJuYW1lcyI6WyJISVNUT1JZX0xJTUlUIiwiaW5pdGlhbFN0YXRlIiwiaWNvbiIsImNvbG9yIiwidGl0bGUiLCJoYWxmIiwic2lkZSIsImNvbnRlbnQiLCJoaXN0b3J5IiwiZHJhd2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkMiLCJTRVRfRFJBV0VSIiwicGF5bG9hZCIsImxlbmd0aCIsIm9wZW4iLCJTRVRfQkFDS19EUkFXRVIiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxhQUFhLEdBQUcsRUFBdEI7QUFFQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBRSxFQURhO0FBRW5CQyxPQUFLLEVBQUUsRUFGWTtBQUduQkMsT0FBSyxFQUFFLEVBSFk7QUFJbkJDLE1BQUksRUFBRSxLQUphO0FBS25CQyxNQUFJLEVBQUUsT0FMYTtBQU1uQkMsU0FBTyxFQUFFLEVBTlU7QUFPbkJDLFNBQU8sRUFBRTtBQVBVLENBQXJCO0FBVU8sTUFBTUMsYUFBYSxHQUFHLENBQUNDLEtBQUssR0FBR1QsWUFBVCxFQUF1QlUsTUFBdkIsS0FBa0M7QUFBQTs7QUFDN0QsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MscURBQUMsQ0FBQ0MsVUFBUDtBQUNFLGFBQU87QUFDTFosWUFBSSxVQUFHUyxNQUFNLENBQUNJLE9BQVAsSUFBa0JKLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlYixJQUFwQyx1Q0FBNkMsRUFENUM7QUFFTEMsYUFBSyxXQUFHUSxNQUFNLENBQUNJLE9BQVAsSUFBa0JKLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlWixLQUFwQyx5Q0FBOEMsRUFGOUM7QUFHTEMsYUFBSyxXQUFHTyxNQUFNLENBQUNJLE9BQVAsSUFBa0JKLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlWCxLQUFwQyx5Q0FBOEMsRUFIOUM7QUFJTEMsWUFBSSxXQUFHTSxNQUFNLENBQUNJLE9BQVAsSUFBa0JKLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlVixJQUFwQyx5Q0FBNkMsS0FKNUM7QUFLTEMsWUFBSSxXQUFHSyxNQUFNLENBQUNJLE9BQVAsSUFBa0JKLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlVCxJQUFwQyx5Q0FBNkMsT0FMNUM7QUFNTEMsZUFBTyxXQUFHSSxNQUFNLENBQUNJLE9BQVAsSUFBa0JKLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlUixPQUFwQyx5Q0FBZ0QsRUFObEQ7QUFPTEMsZUFBTyxFQUNMRyxNQUFNLENBQUNJLE9BQVAsSUFBa0JMLEtBQUssQ0FBQ0YsT0FBTixDQUFjUSxNQUFkLEdBQXVCaEIsYUFBekMsR0FDSSxDQUFDLEdBQUdVLEtBQUssQ0FBQ0YsT0FBVixFQUFtQkcsTUFBTSxDQUFDSSxPQUExQixDQURKLEdBRUksQ0FBQ0osTUFBTSxDQUFDSSxPQUFSLENBVkQ7QUFXTEUsWUFBSSxFQUFFLENBQUMsRUFBRU4sTUFBTSxDQUFDSSxPQUFQLElBQWtCSixNQUFNLENBQUNJLE9BQVAsQ0FBZVIsT0FBbkM7QUFYRixPQUFQOztBQWFGLFNBQUtNLHFEQUFDLENBQUNLLGVBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR1IsS0FBSyxDQUFDRixPQUFOLENBQWNFLEtBQUssQ0FBQ0YsT0FBTixDQUFjUSxNQUFkLEdBQXVCLENBQXJDLENBREU7QUFFTFIsZUFBTyxFQUFFRSxLQUFLLENBQUNGLE9BQU4sQ0FBY1csS0FBZCxDQUFvQixDQUFwQixFQUF1QlQsS0FBSyxDQUFDRixPQUFOLENBQWNRLE1BQWQsR0FBdUIsQ0FBOUMsQ0FGSjtBQUdMQyxZQUFJLEVBQUU7QUFIRCxPQUFQOztBQUtGO0FBQ0UsYUFBT1AsS0FBUDtBQXRCSjtBQXdCRCxDQXpCTTtBQTJCUUQsNEVBQWYiLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9kcmF3ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQyBmcm9tICcuLi90eXBlcy9kcmF3ZXInXG5cbmNvbnN0IEhJU1RPUllfTElNSVQgPSAxMFxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGljb246ICcnLFxuICBjb2xvcjogJycsXG4gIHRpdGxlOiAnJyxcbiAgaGFsZjogZmFsc2UsXG4gIHNpZGU6ICdyaWdodCcsXG4gIGNvbnRlbnQ6ICcnLFxuICBoaXN0b3J5OiBbXVxufVxuXG5leHBvcnQgY29uc3QgZHJhd2VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX0RSQVdFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGljb246IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5pY29uKSA/PyAnJyxcbiAgICAgICAgY29sb3I6IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jb2xvcikgPz8gJycsXG4gICAgICAgIHRpdGxlOiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQudGl0bGUpID8/ICcnLFxuICAgICAgICBoYWxmOiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuaGFsZikgPz8gZmFsc2UsXG4gICAgICAgIHNpZGU6IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5zaWRlKSA/PyAncmlnaHQnLFxuICAgICAgICBjb250ZW50OiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY29udGVudCkgPz8gJycsXG4gICAgICAgIGhpc3Rvcnk6XG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQgJiYgc3RhdGUuaGlzdG9yeS5sZW5ndGggPCBISVNUT1JZX0xJTUlUXG4gICAgICAgICAgICA/IFsuLi5zdGF0ZS5oaXN0b3J5LCBhY3Rpb24ucGF5bG9hZF1cbiAgICAgICAgICAgIDogW2FjdGlvbi5wYXlsb2FkXSxcbiAgICAgICAgb3BlbjogISEoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY29udGVudClcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0JBQ0tfRFJBV0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUuaGlzdG9yeVtzdGF0ZS5oaXN0b3J5Lmxlbmd0aCAtIDJdLFxuICAgICAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5LnNsaWNlKDAsIHN0YXRlLmhpc3RvcnkubGVuZ3RoIC0gMSksXG4gICAgICAgIG9wZW46IHRydWVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJhd2VyUmVkdWNlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/drawer.js\n");

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root */ \"./store/reducers/root.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./store/reducers/user.js\");\n/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawer */ \"./store/reducers/drawer.js\");\n/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stepper */ \"./store/reducers/stepper.js\");\n/* harmony import */ var _documents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documents */ \"./store/reducers/documents.js\");\n/* harmony import */ var _snacks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snacks */ \"./store/reducers/snacks.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal */ \"./store/reducers/modal.js\");\n/* eslint-disable */\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  root: _root__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  drawer: _drawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  stepper: _stepper__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  documents: _documents__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  snacks: _snacks__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  modal: _modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcz8zODM5Il0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInJvb3QiLCJyb290UmVkdWNlciIsInVzZXIiLCJ1c2VyUmVkdWNlciIsImRyYXdlciIsImRyYXdlclJlZHVjZXIiLCJzdGVwcGVyIiwic3RlcHBlclJlZHVjZXIiLCJkb2N1bWVudHMiLCJkb2N1bWVudHNSZWR1Y2VyIiwic25hY2tzIiwic25hY2tzUmVkdWNlciIsIm1vZGFsIiwibW9kYWxSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlQSw0SEFBZSxDQUFDO0FBQzdCQyxNQUFJLEVBQUVDLDZDQUR1QjtBQUU3QkMsTUFBSSxFQUFFQyw2Q0FGdUI7QUFHN0JDLFFBQU0sRUFBRUMsK0NBSHFCO0FBSTdCQyxTQUFPLEVBQUVDLGdEQUpvQjtBQUs3QkMsV0FBUyxFQUFFQyxrREFMa0I7QUFNN0JDLFFBQU0sRUFBRUMsK0NBTnFCO0FBTzdCQyxPQUFLLEVBQUVDLDhDQUFZQTtBQVBVLENBQUQsQ0FBOUIiLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdCdcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3VzZXInXG5pbXBvcnQgZHJhd2VyUmVkdWNlciBmcm9tICcuL2RyYXdlcidcbmltcG9ydCBzdGVwcGVyUmVkdWNlciBmcm9tICcuL3N0ZXBwZXInXG5pbXBvcnQgZG9jdW1lbnRzUmVkdWNlciBmcm9tICcuL2RvY3VtZW50cydcbmltcG9ydCBzbmFja3NSZWR1Y2VyIGZyb20gJy4vc25hY2tzJ1xuaW1wb3J0IG1vZGFsUmVkdWNlciBmcm9tICcuL21vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICByb290OiByb290UmVkdWNlcixcbiAgdXNlcjogdXNlclJlZHVjZXIsXG4gIGRyYXdlcjogZHJhd2VyUmVkdWNlcixcbiAgc3RlcHBlcjogc3RlcHBlclJlZHVjZXIsXG4gIGRvY3VtZW50czogZG9jdW1lbnRzUmVkdWNlcixcbiAgc25hY2tzOiBzbmFja3NSZWR1Y2VyLFxuICBtb2RhbDogbW9kYWxSZWR1Y2VyXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/index.js\n");

/***/ }),

/***/ "./store/reducers/modal.js":
/*!*********************************!*\
  !*** ./store/reducers/modal.js ***!
  \*********************************/
/*! exports provided: modalReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalReducer\", function() { return modalReducer; });\n/* harmony import */ var _types_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/modal */ \"./store/types/modal.js\");\n\nconst initialState = {\n  size: 's',\n  routes: null\n};\nconst modalReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _types_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_MODAL:\n      return {\n        routes: action.payload.routes,\n        size: action.payload.size\n      };\n\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9tb2RhbC5qcz83MTM2Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInNpemUiLCJyb3V0ZXMiLCJtb2RhbFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDIiwiU0VUX01PREFMIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBRSxHQURhO0FBRW5CQyxRQUFNLEVBQUU7QUFGVyxDQUFyQjtBQUtPLE1BQU1DLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUdKLFlBQVQsRUFBdUJLLE1BQXZCLEtBQWtDO0FBQzVELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG9EQUFDLENBQUNDLFNBQVA7QUFDRSxhQUFPO0FBQ0xOLGNBQU0sRUFBRUcsTUFBTSxDQUFDSSxPQUFQLENBQWVQLE1BRGxCO0FBRUxELFlBQUksRUFBRUksTUFBTSxDQUFDSSxPQUFQLENBQWVSO0FBRmhCLE9BQVA7O0FBSUY7QUFDRSxhQUFPRyxLQUFQO0FBUEo7QUFTRCxDQVZNO0FBWVFELDJFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvcmVkdWNlcnMvbW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQyBmcm9tICcuLi90eXBlcy9tb2RhbCdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzaXplOiAncycsXG4gIHJvdXRlczogbnVsbFxufVxuXG5leHBvcnQgY29uc3QgbW9kYWxSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfTU9EQUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZXM6IGFjdGlvbi5wYXlsb2FkLnJvdXRlcyxcbiAgICAgICAgc2l6ZTogYWN0aW9uLnBheWxvYWQuc2l6ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb2RhbFJlZHVjZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/modal.js\n");

/***/ }),

/***/ "./store/reducers/root.js":
/*!********************************!*\
  !*** ./store/reducers/root.js ***!
  \********************************/
/*! exports provided: rootReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootReducer\", function() { return rootReducer; });\n/* harmony import */ var _types_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/root */ \"./store/types/root.js\");\n/* eslint-disable */\n\nconst initialState = {\n  mutation: null,\n  settings: {\n    general: {\n      logotype: '' // /images/logo.png\n\n    },\n    meta: {\n      title: '',\n      description: ''\n    }\n  },\n  displayMethod: 'grid',\n  visibleFilters: false,\n  variables: null,\n  scrollTop: 0,\n  callback: () => {},\n  members: [],\n  companies: [],\n  categories: [],\n  statuses: [],\n  screenshots: [],\n  messages: [],\n  search: '',\n  files: []\n};\nconst rootReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_MUTATE:\n      return { ...state,\n        ...action.payload\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_SETTINGS:\n      return { ...state,\n        settings: action.payload.settings\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_MEMBERS:\n      return { ...state,\n        members: action.payload.members || []\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_SCREENSHOTS:\n      return { ...state,\n        screenshots: action.payload.screenshots || []\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_FILES:\n      return { ...state,\n        files: action.payload.files || []\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_SEARCH:\n      return { ...state,\n        search: action.payload.search || ''\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_FOLDER:\n      return { ...state,\n        folder: action.payload.folder || []\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_COMPANIES:\n      return { ...state,\n        companies: action.payload.companies || []\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_CATEGORIES:\n      return { ...state,\n        categories: action.payload.categories || []\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_STATUSES:\n      return { ...state,\n        statuses: action.payload.statuses || []\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_CHAT:\n      return { ...state,\n        chat: action.payload.chat\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_MESSAGES:\n      return { ...state,\n        messages: action.payload.messages\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_DISPLAY_METHOD:\n      return { ...state,\n        displayMethod: action.payload.displayMethod\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_VISIBLE_FILTERS:\n      return { ...state,\n        visibleFilters: action.payload.visibleFilters\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ADD_MEMBER:\n      return { ...state,\n        members: [...state.members, action.payload.member]\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ADD_SCREENSHOT:\n      return { ...state,\n        screenshots: [...state.screenshots, action.payload.screenshot]\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ADD_FILE:\n      return { ...state,\n        files: [...state.files, action.payload.file]\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].REMOVE_MEMBER:\n      return { ...state,\n        members: state.members.filter(member => {\n          var _member$value;\n\n          return (member.email || ((_member$value = member.value) === null || _member$value === void 0 ? void 0 : _member$value.email)) !== action.payload.email;\n        })\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].REMOVE_SCREENSHOT:\n      return { ...state,\n        screenshots: state.screenshots.filter(screenshot => screenshot.id !== action.payload.id)\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].REMOVE_FILE:\n      return { ...state,\n        files: state.files.filter(file => file.id !== action.payload.id)\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CLEAR_MEMBERS:\n      return { ...state,\n        members: []\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CLEAR_SCREENSHOTS:\n      return { ...state,\n        screenshots: []\n      };\n\n    case _types_root__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CLEAR_FILES:\n      return { ...state,\n        files: []\n      };\n\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9yb290LmpzPzBlMzgiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibXV0YXRpb24iLCJzZXR0aW5ncyIsImdlbmVyYWwiLCJsb2dvdHlwZSIsIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGlzcGxheU1ldGhvZCIsInZpc2libGVGaWx0ZXJzIiwidmFyaWFibGVzIiwic2Nyb2xsVG9wIiwiY2FsbGJhY2siLCJtZW1iZXJzIiwiY29tcGFuaWVzIiwiY2F0ZWdvcmllcyIsInN0YXR1c2VzIiwic2NyZWVuc2hvdHMiLCJtZXNzYWdlcyIsInNlYXJjaCIsImZpbGVzIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDIiwiU0VUX01VVEFURSIsInBheWxvYWQiLCJTRVRfU0VUVElOR1MiLCJTRVRfTUVNQkVSUyIsIlNFVF9TQ1JFRU5TSE9UUyIsIlNFVF9GSUxFUyIsIlNFVF9TRUFSQ0giLCJTRVRfRk9MREVSIiwiZm9sZGVyIiwiU0VUX0NPTVBBTklFUyIsIlNFVF9DQVRFR09SSUVTIiwiU0VUX1NUQVRVU0VTIiwiU0VUX0NIQVQiLCJjaGF0IiwiU0VUX01FU1NBR0VTIiwiU0VUX0RJU1BMQVlfTUVUSE9EIiwiU0VUX1ZJU0lCTEVfRklMVEVSUyIsIkFERF9NRU1CRVIiLCJtZW1iZXIiLCJBRERfU0NSRUVOU0hPVCIsInNjcmVlbnNob3QiLCJBRERfRklMRSIsImZpbGUiLCJSRU1PVkVfTUVNQkVSIiwiZmlsdGVyIiwiZW1haWwiLCJ2YWx1ZSIsIlJFTU9WRV9TQ1JFRU5TSE9UIiwiaWQiLCJSRU1PVkVfRklMRSIsIkNMRUFSX01FTUJFUlMiLCJDTEVBUl9TQ1JFRU5TSE9UUyIsIkNMRUFSX0ZJTEVTIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxVQUFRLEVBQUUsSUFEUztBQUVuQkMsVUFBUSxFQUFFO0FBQ1JDLFdBQU8sRUFBRTtBQUNQQyxjQUFRLEVBQUUsRUFESCxDQUNNOztBQUROLEtBREQ7QUFJUkMsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRSxFQURIO0FBRUpDLGlCQUFXLEVBQUU7QUFGVDtBQUpFLEdBRlM7QUFXbkJDLGVBQWEsRUFBRSxNQVhJO0FBWW5CQyxnQkFBYyxFQUFFLEtBWkc7QUFhbkJDLFdBQVMsRUFBRSxJQWJRO0FBY25CQyxXQUFTLEVBQUUsQ0FkUTtBQWVuQkMsVUFBUSxFQUFFLE1BQU0sQ0FBRSxDQWZDO0FBZ0JuQkMsU0FBTyxFQUFFLEVBaEJVO0FBaUJuQkMsV0FBUyxFQUFFLEVBakJRO0FBa0JuQkMsWUFBVSxFQUFFLEVBbEJPO0FBbUJuQkMsVUFBUSxFQUFFLEVBbkJTO0FBb0JuQkMsYUFBVyxFQUFFLEVBcEJNO0FBcUJuQkMsVUFBUSxFQUFFLEVBckJTO0FBc0JuQkMsUUFBTSxFQUFFLEVBdEJXO0FBdUJuQkMsT0FBSyxFQUFFO0FBdkJZLENBQXJCO0FBMEJPLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFLLEdBQUd0QixZQUFULEVBQXVCdUIsTUFBdkIsS0FBa0M7QUFDM0QsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsbURBQUMsQ0FBQ0MsVUFBUDtBQUNFLGFBQU8sRUFDTCxHQUFHSixLQURFO0FBRUwsV0FBR0MsTUFBTSxDQUFDSTtBQUZMLE9BQVA7O0FBSUYsU0FBS0YsbURBQUMsQ0FBQ0csWUFBUDtBQUNFLGFBQU8sRUFDTCxHQUFHTixLQURFO0FBRUxwQixnQkFBUSxFQUFFcUIsTUFBTSxDQUFDSSxPQUFQLENBQWV6QjtBQUZwQixPQUFQOztBQUlGLFNBQUt1QixtREFBQyxDQUFDSSxXQUFQO0FBQ0UsYUFBTyxFQUNMLEdBQUdQLEtBREU7QUFFTFQsZUFBTyxFQUFFVSxNQUFNLENBQUNJLE9BQVAsQ0FBZWQsT0FBZixJQUEwQjtBQUY5QixPQUFQOztBQUlGLFNBQUtZLG1EQUFDLENBQUNLLGVBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR1IsS0FERTtBQUVMTCxtQkFBVyxFQUFFTSxNQUFNLENBQUNJLE9BQVAsQ0FBZVYsV0FBZixJQUE4QjtBQUZ0QyxPQUFQOztBQUlGLFNBQUtRLG1EQUFDLENBQUNNLFNBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR1QsS0FERTtBQUVMRixhQUFLLEVBQUVHLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlUCxLQUFmLElBQXdCO0FBRjFCLE9BQVA7O0FBSUYsU0FBS0ssbURBQUMsQ0FBQ08sVUFBUDtBQUNFLGFBQU8sRUFDTCxHQUFHVixLQURFO0FBRUxILGNBQU0sRUFBRUksTUFBTSxDQUFDSSxPQUFQLENBQWVSLE1BQWYsSUFBeUI7QUFGNUIsT0FBUDs7QUFJRixTQUFLTSxtREFBQyxDQUFDUSxVQUFQO0FBQ0UsYUFBTyxFQUNMLEdBQUdYLEtBREU7QUFFTFksY0FBTSxFQUFFWCxNQUFNLENBQUNJLE9BQVAsQ0FBZU8sTUFBZixJQUF5QjtBQUY1QixPQUFQOztBQUlGLFNBQUtULG1EQUFDLENBQUNVLGFBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR2IsS0FERTtBQUVMUixpQkFBUyxFQUFFUyxNQUFNLENBQUNJLE9BQVAsQ0FBZWIsU0FBZixJQUE0QjtBQUZsQyxPQUFQOztBQUlGLFNBQUtXLG1EQUFDLENBQUNXLGNBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR2QsS0FERTtBQUVMUCxrQkFBVSxFQUFFUSxNQUFNLENBQUNJLE9BQVAsQ0FBZVosVUFBZixJQUE2QjtBQUZwQyxPQUFQOztBQUlGLFNBQUtVLG1EQUFDLENBQUNZLFlBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR2YsS0FERTtBQUVMTixnQkFBUSxFQUFFTyxNQUFNLENBQUNJLE9BQVAsQ0FBZVgsUUFBZixJQUEyQjtBQUZoQyxPQUFQOztBQUlGLFNBQUtTLG1EQUFDLENBQUNhLFFBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR2hCLEtBREU7QUFFTGlCLFlBQUksRUFBRWhCLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlWTtBQUZoQixPQUFQOztBQUlGLFNBQUtkLG1EQUFDLENBQUNlLFlBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR2xCLEtBREU7QUFFTEosZ0JBQVEsRUFBRUssTUFBTSxDQUFDSSxPQUFQLENBQWVUO0FBRnBCLE9BQVA7O0FBSUYsU0FBS08sbURBQUMsQ0FBQ2dCLGtCQUFQO0FBQ0UsYUFBTyxFQUNMLEdBQUduQixLQURFO0FBRUxkLHFCQUFhLEVBQUVlLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlbkI7QUFGekIsT0FBUDs7QUFJRixTQUFLaUIsbURBQUMsQ0FBQ2lCLG1CQUFQO0FBQ0UsYUFBTyxFQUNMLEdBQUdwQixLQURFO0FBRUxiLHNCQUFjLEVBQUVjLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlbEI7QUFGMUIsT0FBUDs7QUFJRixTQUFLZ0IsbURBQUMsQ0FBQ2tCLFVBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR3JCLEtBREU7QUFFTFQsZUFBTyxFQUFFLENBQUMsR0FBR1MsS0FBSyxDQUFDVCxPQUFWLEVBQW1CVSxNQUFNLENBQUNJLE9BQVAsQ0FBZWlCLE1BQWxDO0FBRkosT0FBUDs7QUFJRixTQUFLbkIsbURBQUMsQ0FBQ29CLGNBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR3ZCLEtBREU7QUFFTEwsbUJBQVcsRUFBRSxDQUFDLEdBQUdLLEtBQUssQ0FBQ0wsV0FBVixFQUF1Qk0sTUFBTSxDQUFDSSxPQUFQLENBQWVtQixVQUF0QztBQUZSLE9BQVA7O0FBSUYsU0FBS3JCLG1EQUFDLENBQUNzQixRQUFQO0FBQ0UsYUFBTyxFQUNMLEdBQUd6QixLQURFO0FBRUxGLGFBQUssRUFBRSxDQUFDLEdBQUdFLEtBQUssQ0FBQ0YsS0FBVixFQUFpQkcsTUFBTSxDQUFDSSxPQUFQLENBQWVxQixJQUFoQztBQUZGLE9BQVA7O0FBSUYsU0FBS3ZCLG1EQUFDLENBQUN3QixhQUFQO0FBQ0UsYUFBTyxFQUNMLEdBQUczQixLQURFO0FBRUxULGVBQU8sRUFBRVMsS0FBSyxDQUFDVCxPQUFOLENBQWNxQyxNQUFkLENBQ05OLE1BQUQ7QUFBQTs7QUFBQSxpQkFBWSxDQUFDQSxNQUFNLENBQUNPLEtBQVAsc0JBQWdCUCxNQUFNLENBQUNRLEtBQXZCLGtEQUFnQixjQUFjRCxLQUE5QixDQUFELE1BQTBDNUIsTUFBTSxDQUFDSSxPQUFQLENBQWV3QixLQUFyRTtBQUFBLFNBRE87QUFGSixPQUFQOztBQU1GLFNBQUsxQixtREFBQyxDQUFDNEIsaUJBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBRy9CLEtBREU7QUFFTEwsbUJBQVcsRUFBRUssS0FBSyxDQUFDTCxXQUFOLENBQWtCaUMsTUFBbEIsQ0FBMEJKLFVBQUQsSUFBZ0JBLFVBQVUsQ0FBQ1EsRUFBWCxLQUFrQi9CLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlMkIsRUFBMUU7QUFGUixPQUFQOztBQUlGLFNBQUs3QixtREFBQyxDQUFDOEIsV0FBUDtBQUNFLGFBQU8sRUFDTCxHQUFHakMsS0FERTtBQUVMRixhQUFLLEVBQUVFLEtBQUssQ0FBQ0YsS0FBTixDQUFZOEIsTUFBWixDQUFvQkYsSUFBRCxJQUFVQSxJQUFJLENBQUNNLEVBQUwsS0FBWS9CLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlMkIsRUFBeEQ7QUFGRixPQUFQOztBQUlGLFNBQUs3QixtREFBQyxDQUFDK0IsYUFBUDtBQUNFLGFBQU8sRUFDTCxHQUFHbEMsS0FERTtBQUVMVCxlQUFPLEVBQUU7QUFGSixPQUFQOztBQUlGLFNBQUtZLG1EQUFDLENBQUNnQyxpQkFBUDtBQUNFLGFBQU8sRUFDTCxHQUFHbkMsS0FERTtBQUVMTCxtQkFBVyxFQUFFO0FBRlIsT0FBUDs7QUFJRixTQUFLUSxtREFBQyxDQUFDaUMsV0FBUDtBQUNFLGFBQU8sRUFDTCxHQUFHcEMsS0FERTtBQUVMRixhQUFLLEVBQUU7QUFGRixPQUFQOztBQUlGO0FBQ0UsYUFBT0UsS0FBUDtBQXZISjtBQXlIRCxDQTFITTtBQTRIUUQsMEVBQWYiLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9yb290LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBDIGZyb20gJy4uL3R5cGVzL3Jvb3QnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbXV0YXRpb246IG51bGwsXG4gIHNldHRpbmdzOiB7XG4gICAgZ2VuZXJhbDoge1xuICAgICAgbG9nb3R5cGU6ICcnIC8vIC9pbWFnZXMvbG9nby5wbmdcbiAgICB9LFxuICAgIG1ldGE6IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgIH1cbiAgfSxcbiAgZGlzcGxheU1ldGhvZDogJ2dyaWQnLFxuICB2aXNpYmxlRmlsdGVyczogZmFsc2UsXG4gIHZhcmlhYmxlczogbnVsbCxcbiAgc2Nyb2xsVG9wOiAwLFxuICBjYWxsYmFjazogKCkgPT4ge30sXG4gIG1lbWJlcnM6IFtdLFxuICBjb21wYW5pZXM6IFtdLFxuICBjYXRlZ29yaWVzOiBbXSxcbiAgc3RhdHVzZXM6IFtdLFxuICBzY3JlZW5zaG90czogW10sXG4gIG1lc3NhZ2VzOiBbXSxcbiAgc2VhcmNoOiAnJyxcbiAgZmlsZXM6IFtdXG59XG5cbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX01VVEFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfU0VUVElOR1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2V0dGluZ3M6IGFjdGlvbi5wYXlsb2FkLnNldHRpbmdzXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9NRU1CRVJTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbWJlcnM6IGFjdGlvbi5wYXlsb2FkLm1lbWJlcnMgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1NDUkVFTlNIT1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNjcmVlbnNob3RzOiBhY3Rpb24ucGF5bG9hZC5zY3JlZW5zaG90cyB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfRklMRVM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsZXM6IGFjdGlvbi5wYXlsb2FkLmZpbGVzIHx8IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9TRUFSQ0g6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoOiBhY3Rpb24ucGF5bG9hZC5zZWFyY2ggfHwgJydcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0ZPTERFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmb2xkZXI6IGFjdGlvbi5wYXlsb2FkLmZvbGRlciB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfQ09NUEFOSUVTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBhbmllczogYWN0aW9uLnBheWxvYWQuY29tcGFuaWVzIHx8IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9DQVRFR09SSUVTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5wYXlsb2FkLmNhdGVnb3JpZXMgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1NUQVRVU0VTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXR1c2VzOiBhY3Rpb24ucGF5bG9hZC5zdGF0dXNlcyB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfQ0hBVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjaGF0OiBhY3Rpb24ucGF5bG9hZC5jaGF0XG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9NRVNTQUdFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogYWN0aW9uLnBheWxvYWQubWVzc2FnZXNcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0RJU1BMQVlfTUVUSE9EOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRpc3BsYXlNZXRob2Q6IGFjdGlvbi5wYXlsb2FkLmRpc3BsYXlNZXRob2RcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1ZJU0lCTEVfRklMVEVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlRmlsdGVyczogYWN0aW9uLnBheWxvYWQudmlzaWJsZUZpbHRlcnNcbiAgICAgIH1cbiAgICBjYXNlIEMuQUREX01FTUJFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZW1iZXJzOiBbLi4uc3RhdGUubWVtYmVycywgYWN0aW9uLnBheWxvYWQubWVtYmVyXVxuICAgICAgfVxuICAgIGNhc2UgQy5BRERfU0NSRUVOU0hPVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzY3JlZW5zaG90czogWy4uLnN0YXRlLnNjcmVlbnNob3RzLCBhY3Rpb24ucGF5bG9hZC5zY3JlZW5zaG90XVxuICAgICAgfVxuICAgIGNhc2UgQy5BRERfRklMRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxlczogWy4uLnN0YXRlLmZpbGVzLCBhY3Rpb24ucGF5bG9hZC5maWxlXVxuICAgICAgfVxuICAgIGNhc2UgQy5SRU1PVkVfTUVNQkVSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbWJlcnM6IHN0YXRlLm1lbWJlcnMuZmlsdGVyKFxuICAgICAgICAgIChtZW1iZXIpID0+IChtZW1iZXIuZW1haWwgfHwgbWVtYmVyLnZhbHVlPy5lbWFpbCkgIT09IGFjdGlvbi5wYXlsb2FkLmVtYWlsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICBjYXNlIEMuUkVNT1ZFX1NDUkVFTlNIT1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2NyZWVuc2hvdHM6IHN0YXRlLnNjcmVlbnNob3RzLmZpbHRlcigoc2NyZWVuc2hvdCkgPT4gc2NyZWVuc2hvdC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICB9XG4gICAgY2FzZSBDLlJFTU9WRV9GSUxFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGVzOiBzdGF0ZS5maWxlcy5maWx0ZXIoKGZpbGUpID0+IGZpbGUuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgfVxuICAgIGNhc2UgQy5DTEVBUl9NRU1CRVJTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbWJlcnM6IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLkNMRUFSX1NDUkVFTlNIT1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNjcmVlbnNob3RzOiBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5DTEVBUl9GSUxFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxlczogW11cbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/root.js\n");

/***/ }),

/***/ "./store/reducers/snacks.js":
/*!**********************************!*\
  !*** ./store/reducers/snacks.js ***!
  \**********************************/
/*! exports provided: snackReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snackReducer\", function() { return snackReducer; });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types_snacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/snacks */ \"./store/types/snacks.js\");\n\n\nconst LIMIT = 10;\nconst initialState = [];\nconst snackReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _types_snacks__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SET_ITEM:\n      return [...state, {\n        id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__[\"v4\"])(),\n        ...action.payload.item\n      }].slice(0, LIMIT);\n\n    case _types_snacks__WEBPACK_IMPORTED_MODULE_1__[\"default\"].REMOVE_ITEM:\n      return [...state.filter(item => item.id !== action.payload.id)];\n\n    case _types_snacks__WEBPACK_IMPORTED_MODULE_1__[\"default\"].CLEAR_ITEMS:\n      return [];\n\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (snackReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9zbmFja3MuanM/NWFmMSJdLCJuYW1lcyI6WyJMSU1JVCIsImluaXRpYWxTdGF0ZSIsInNuYWNrUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkMiLCJTRVRfSVRFTSIsImlkIiwidjQiLCJwYXlsb2FkIiwiaXRlbSIsInNsaWNlIiwiUkVNT1ZFX0lURU0iLCJmaWx0ZXIiLCJDTEVBUl9JVEVNUyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQSxNQUFNQSxLQUFLLEdBQUcsRUFBZDtBQUNBLE1BQU1DLFlBQVksR0FBRyxFQUFyQjtBQUVPLE1BQU1DLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUdGLFlBQVQsRUFBdUJHLE1BQXZCLEtBQWtDO0FBQzVELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLHFEQUFDLENBQUNDLFFBQVA7QUFDRSxhQUFPLENBQ0wsR0FBR0osS0FERSxFQUVMO0FBQ0VLLFVBQUUsRUFBRUMsK0NBQUUsRUFEUjtBQUVFLFdBQUdMLE1BQU0sQ0FBQ00sT0FBUCxDQUFlQztBQUZwQixPQUZLLEVBTUxDLEtBTkssQ0FNQyxDQU5ELEVBTUlaLEtBTkosQ0FBUDs7QUFPRixTQUFLTSxxREFBQyxDQUFDTyxXQUFQO0FBQ0UsYUFBTyxDQUFDLEdBQUdWLEtBQUssQ0FBQ1csTUFBTixDQUFjSCxJQUFELElBQVVBLElBQUksQ0FBQ0gsRUFBTCxLQUFZSixNQUFNLENBQUNNLE9BQVAsQ0FBZUYsRUFBbEQsQ0FBSixDQUFQOztBQUNGLFNBQUtGLHFEQUFDLENBQUNTLFdBQVA7QUFDRSxhQUFPLEVBQVA7O0FBQ0Y7QUFDRSxhQUFPWixLQUFQO0FBZEo7QUFnQkQsQ0FqQk07QUFtQlFELDJFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvcmVkdWNlcnMvc25hY2tzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJ1xuXG5pbXBvcnQgQyBmcm9tICcuLi90eXBlcy9zbmFja3MnXG5cbmNvbnN0IExJTUlUID0gMTBcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdXG5cbmV4cG9ydCBjb25zdCBzbmFja1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9JVEVNOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogdjQoKSxcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5pdGVtXG4gICAgICAgIH1cbiAgICAgIF0uc2xpY2UoMCwgTElNSVQpXG4gICAgY2FzZSBDLlJFTU9WRV9JVEVNOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKV1cbiAgICBjYXNlIEMuQ0xFQVJfSVRFTVM6XG4gICAgICByZXR1cm4gW11cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc25hY2tSZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/snacks.js\n");

/***/ }),

/***/ "./store/reducers/stepper.js":
/*!***********************************!*\
  !*** ./store/reducers/stepper.js ***!
  \***********************************/
/*! exports provided: stepperReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stepperReducer\", function() { return stepperReducer; });\n/* harmony import */ var _types_stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/stepper */ \"./store/types/stepper.js\");\n\nconst initialState = {\n  name: '',\n  content: null\n};\nconst stepperReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _types_stepper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_STEPPER:\n      return action.payload;\n\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (stepperReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9zdGVwcGVyLmpzPzhkY2YiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibmFtZSIsImNvbnRlbnQiLCJzdGVwcGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkMiLCJTRVRfU1RFUFBFUiIsInBheWxvYWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUUsRUFEYTtBQUVuQkMsU0FBTyxFQUFFO0FBRlUsQ0FBckI7QUFLTyxNQUFNQyxjQUFjLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHSixZQUFULEVBQXVCSyxNQUF2QixLQUFrQztBQUM5RCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxzREFBQyxDQUFDQyxXQUFQO0FBQ0UsYUFBT0gsTUFBTSxDQUFDSSxPQUFkOztBQUNGO0FBQ0UsYUFBT0wsS0FBUDtBQUpKO0FBTUQsQ0FQTTtBQVNRRCw2RUFBZiIsImZpbGUiOiIuL3N0b3JlL3JlZHVjZXJzL3N0ZXBwZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQyBmcm9tICcuLi90eXBlcy9zdGVwcGVyJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG5hbWU6ICcnLFxuICBjb250ZW50OiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBzdGVwcGVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX1NURVBQRVI6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RlcHBlclJlZHVjZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/stepper.js\n");

/***/ }),

/***/ "./store/reducers/user.js":
/*!********************************!*\
  !*** ./store/reducers/user.js ***!
  \********************************/
/*! exports provided: userReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userReducer\", function() { return userReducer; });\n/* harmony import */ var _types_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/user */ \"./store/types/user.js\");\n\nconst initialState = {\n  id: 0,\n  name: '',\n  about: '',\n  account: '',\n  email: '',\n  phone: '',\n  role: '',\n  folders: [],\n  projects: [],\n  articles: [],\n  likedProjects: [],\n  settings: [''],\n  token: '',\n  updatedAt: '',\n  createdAt: '',\n  register: false,\n  authenticated: false\n};\nconst userReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _types_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_USER:\n      return { ...action.payload,\n        authenticated: true\n      };\n\n    case _types_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_LOGOUT:\n      return {\n        authenticated: false\n      };\n\n    case _types_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_USER_FOLDERS:\n      return { ...state,\n        folders: action.payload\n      };\n\n    case _types_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SET_USER_FOLDER:\n      return { ...state,\n        folders: state.folders.map(folder => folder.id === action.payload.id ? action.payload : folder)\n      };\n\n    case _types_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].UPDATE_USER:\n      return { ...state,\n        ...action.payload\n      };\n\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (userReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c2VyLmpzPzA3ZDgiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaWQiLCJuYW1lIiwiYWJvdXQiLCJhY2NvdW50IiwiZW1haWwiLCJwaG9uZSIsInJvbGUiLCJmb2xkZXJzIiwicHJvamVjdHMiLCJhcnRpY2xlcyIsImxpa2VkUHJvamVjdHMiLCJzZXR0aW5ncyIsInRva2VuIiwidXBkYXRlZEF0IiwiY3JlYXRlZEF0IiwicmVnaXN0ZXIiLCJhdXRoZW50aWNhdGVkIiwidXNlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDIiwiU0VUX1VTRVIiLCJwYXlsb2FkIiwiU0VUX0xPR09VVCIsIlNFVF9VU0VSX0ZPTERFUlMiLCJTRVRfVVNFUl9GT0xERVIiLCJtYXAiLCJmb2xkZXIiLCJVUERBVEVfVVNFUiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLElBQUUsRUFBRSxDQURlO0FBRW5CQyxNQUFJLEVBQUUsRUFGYTtBQUduQkMsT0FBSyxFQUFFLEVBSFk7QUFJbkJDLFNBQU8sRUFBRSxFQUpVO0FBS25CQyxPQUFLLEVBQUUsRUFMWTtBQU1uQkMsT0FBSyxFQUFFLEVBTlk7QUFPbkJDLE1BQUksRUFBRSxFQVBhO0FBUW5CQyxTQUFPLEVBQUUsRUFSVTtBQVNuQkMsVUFBUSxFQUFFLEVBVFM7QUFVbkJDLFVBQVEsRUFBRSxFQVZTO0FBV25CQyxlQUFhLEVBQUUsRUFYSTtBQVluQkMsVUFBUSxFQUFFLENBQUMsRUFBRCxDQVpTO0FBYW5CQyxPQUFLLEVBQUUsRUFiWTtBQWNuQkMsV0FBUyxFQUFFLEVBZFE7QUFlbkJDLFdBQVMsRUFBRSxFQWZRO0FBZ0JuQkMsVUFBUSxFQUFFLEtBaEJTO0FBaUJuQkMsZUFBYSxFQUFFO0FBakJJLENBQXJCO0FBb0JPLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFLLEdBQUduQixZQUFULEVBQXVCb0IsTUFBdkIsS0FBa0M7QUFDM0QsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsbURBQUMsQ0FBQ0MsUUFBUDtBQUNFLGFBQU8sRUFDTCxHQUFHSCxNQUFNLENBQUNJLE9BREw7QUFFTFAscUJBQWEsRUFBRTtBQUZWLE9BQVA7O0FBSUYsU0FBS0ssbURBQUMsQ0FBQ0csVUFBUDtBQUNFLGFBQU87QUFDTFIscUJBQWEsRUFBRTtBQURWLE9BQVA7O0FBR0YsU0FBS0ssbURBQUMsQ0FBQ0ksZ0JBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR1AsS0FERTtBQUVMWCxlQUFPLEVBQUVZLE1BQU0sQ0FBQ0k7QUFGWCxPQUFQOztBQUlGLFNBQUtGLG1EQUFDLENBQUNLLGVBQVA7QUFDRSxhQUFPLEVBQ0wsR0FBR1IsS0FERTtBQUVMWCxlQUFPLEVBQUVXLEtBQUssQ0FBQ1gsT0FBTixDQUFjb0IsR0FBZCxDQUFtQkMsTUFBRCxJQUN6QkEsTUFBTSxDQUFDNUIsRUFBUCxLQUFjbUIsTUFBTSxDQUFDSSxPQUFQLENBQWV2QixFQUE3QixHQUFrQ21CLE1BQU0sQ0FBQ0ksT0FBekMsR0FBbURLLE1BRDVDO0FBRkosT0FBUDs7QUFNRixTQUFLUCxtREFBQyxDQUFDUSxXQUFQO0FBQ0UsYUFBTyxFQUNMLEdBQUdYLEtBREU7QUFFTCxXQUFHQyxNQUFNLENBQUNJO0FBRkwsT0FBUDs7QUFJRjtBQUNFLGFBQU9MLEtBQVA7QUE1Qko7QUE4QkQsQ0EvQk07QUFpQ1FELDBFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDIGZyb20gJy4uL3R5cGVzL3VzZXInXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaWQ6IDAsXG4gIG5hbWU6ICcnLFxuICBhYm91dDogJycsXG4gIGFjY291bnQ6ICcnLFxuICBlbWFpbDogJycsXG4gIHBob25lOiAnJyxcbiAgcm9sZTogJycsXG4gIGZvbGRlcnM6IFtdLFxuICBwcm9qZWN0czogW10sXG4gIGFydGljbGVzOiBbXSxcbiAgbGlrZWRQcm9qZWN0czogW10sXG4gIHNldHRpbmdzOiBbJyddLFxuICB0b2tlbjogJycsXG4gIHVwZGF0ZWRBdDogJycsXG4gIGNyZWF0ZWRBdDogJycsXG4gIHJlZ2lzdGVyOiBmYWxzZSxcbiAgYXV0aGVudGljYXRlZDogZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9MT0dPVVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfVVNFUl9GT0xERVJTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZvbGRlcnM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9VU0VSX0ZPTERFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmb2xkZXJzOiBzdGF0ZS5mb2xkZXJzLm1hcCgoZm9sZGVyKSA9PlxuICAgICAgICAgIGZvbGRlci5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQgPyBhY3Rpb24ucGF5bG9hZCA6IGZvbGRlclxuICAgICAgICApXG4gICAgICB9XG4gICAgY2FzZSBDLlVQREFURV9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/user.js\n");

/***/ }),

/***/ "./store/types/documents.js":
/*!**********************************!*\
  !*** ./store/types/documents.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SET_DOCUMENTS: 'SET_DOCUMENTS'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9kb2N1bWVudHMuanM/ZmNhZSJdLCJuYW1lcyI6WyJTRVRfRE9DVU1FTlRTIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2JBLGVBQWEsRUFBRTtBQURGLENBQWYiLCJmaWxlIjoiLi9zdG9yZS90eXBlcy9kb2N1bWVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9ET0NVTUVOVFM6ICdTRVRfRE9DVU1FTlRTJ1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/types/documents.js\n");

/***/ }),

/***/ "./store/types/drawer.js":
/*!*******************************!*\
  !*** ./store/types/drawer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SET_DRAWER: 'SET_DRAWER',\n  SET_BACK_DRAWER: 'SET_BACK_DRAWER'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9kcmF3ZXIuanM/OTlmOSJdLCJuYW1lcyI6WyJTRVRfRFJBV0VSIiwiU0VUX0JBQ0tfRFJBV0VSIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlO0FBQ2JBLFlBQVUsRUFBRSxZQURDO0FBRWJDLGlCQUFlLEVBQUU7QUFGSixDQUFmIiwiZmlsZSI6Ii4vc3RvcmUvdHlwZXMvZHJhd2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfRFJBV0VSOiAnU0VUX0RSQVdFUicsXG4gIFNFVF9CQUNLX0RSQVdFUjogJ1NFVF9CQUNLX0RSQVdFUidcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/types/drawer.js\n");

/***/ }),

/***/ "./store/types/modal.js":
/*!******************************!*\
  !*** ./store/types/modal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SET_MODAL: 'SET_MODAL'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9tb2RhbC5qcz8zMWRjIl0sIm5hbWVzIjpbIlNFVF9NT0RBTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiQSxXQUFTLEVBQUU7QUFERSxDQUFmIiwiZmlsZSI6Ii4vc3RvcmUvdHlwZXMvbW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9NT0RBTDogJ1NFVF9NT0RBTCdcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/types/modal.js\n");

/***/ }),

/***/ "./store/types/root.js":
/*!*****************************!*\
  !*** ./store/types/root.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SET_MUTATE: 'SET_MUTATE',\n  SET_SETTINGS: 'SET_SETTINGS',\n  SET_MEMBERS: 'SET_MEMBERS',\n  SET_SCREENSHOTS: 'SET_SCREENSHOTS',\n  SET_CHAT: 'SET_CHAT',\n  SET_SEARCH: 'SET_SEARCH',\n  SET_MESSAGES: 'SET_MESSAGES',\n  SET_FILES: 'SET_FILES',\n  SET_FOLDER: 'SET_FOLDER',\n  SET_COMPANIES: 'SET_COMPANIES',\n  SET_CATEGORIES: 'SET_CATEGORIES',\n  SET_STATUSES: 'SET_STATUSES',\n  SET_DISPLAY_METHOD: 'SET_DISPLAY_METHOD',\n  SET_VISIBLE_FILTERS: 'SET_VISIBLE_FILTERS',\n  ADD_MEMBER: 'ADD_MEMBER',\n  ADD_SCREENSHOT: 'ADD_SCREENSHOT',\n  ADD_FILE: 'ADD_FILE',\n  REMOVE_MEMBER: 'REMOVE_MEMBER',\n  REMOVE_SCREENSHOT: 'REMOVE_SCREENSHOT',\n  REMOVE_FILE: 'REMOVE_FILE',\n  CLEAR_MEMBERS: 'CLEAR_MEMBERS',\n  CLEAR_SCREENSHOTS: 'CLEAR_SCREENSHOTS',\n  CLEAR_FILES: 'CLEAR_FILES'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9yb290LmpzP2NkMjMiXSwibmFtZXMiOlsiU0VUX01VVEFURSIsIlNFVF9TRVRUSU5HUyIsIlNFVF9NRU1CRVJTIiwiU0VUX1NDUkVFTlNIT1RTIiwiU0VUX0NIQVQiLCJTRVRfU0VBUkNIIiwiU0VUX01FU1NBR0VTIiwiU0VUX0ZJTEVTIiwiU0VUX0ZPTERFUiIsIlNFVF9DT01QQU5JRVMiLCJTRVRfQ0FURUdPUklFUyIsIlNFVF9TVEFUVVNFUyIsIlNFVF9ESVNQTEFZX01FVEhPRCIsIlNFVF9WSVNJQkxFX0ZJTFRFUlMiLCJBRERfTUVNQkVSIiwiQUREX1NDUkVFTlNIT1QiLCJBRERfRklMRSIsIlJFTU9WRV9NRU1CRVIiLCJSRU1PVkVfU0NSRUVOU0hPVCIsIlJFTU9WRV9GSUxFIiwiQ0xFQVJfTUVNQkVSUyIsIkNMRUFSX1NDUkVFTlNIT1RTIiwiQ0xFQVJfRklMRVMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDYkEsWUFBVSxFQUFFLFlBREM7QUFFYkMsY0FBWSxFQUFFLGNBRkQ7QUFHYkMsYUFBVyxFQUFFLGFBSEE7QUFJYkMsaUJBQWUsRUFBRSxpQkFKSjtBQUtiQyxVQUFRLEVBQUUsVUFMRztBQU1iQyxZQUFVLEVBQUUsWUFOQztBQU9iQyxjQUFZLEVBQUUsY0FQRDtBQVFiQyxXQUFTLEVBQUUsV0FSRTtBQVNiQyxZQUFVLEVBQUUsWUFUQztBQVViQyxlQUFhLEVBQUUsZUFWRjtBQVdiQyxnQkFBYyxFQUFFLGdCQVhIO0FBWWJDLGNBQVksRUFBRSxjQVpEO0FBYWJDLG9CQUFrQixFQUFFLG9CQWJQO0FBY2JDLHFCQUFtQixFQUFFLHFCQWRSO0FBZWJDLFlBQVUsRUFBRSxZQWZDO0FBZ0JiQyxnQkFBYyxFQUFFLGdCQWhCSDtBQWlCYkMsVUFBUSxFQUFFLFVBakJHO0FBa0JiQyxlQUFhLEVBQUUsZUFsQkY7QUFtQmJDLG1CQUFpQixFQUFFLG1CQW5CTjtBQW9CYkMsYUFBVyxFQUFFLGFBcEJBO0FBcUJiQyxlQUFhLEVBQUUsZUFyQkY7QUFzQmJDLG1CQUFpQixFQUFFLG1CQXRCTjtBQXVCYkMsYUFBVyxFQUFFO0FBdkJBLENBQWYiLCJmaWxlIjoiLi9zdG9yZS90eXBlcy9yb290LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfTVVUQVRFOiAnU0VUX01VVEFURScsXG4gIFNFVF9TRVRUSU5HUzogJ1NFVF9TRVRUSU5HUycsXG4gIFNFVF9NRU1CRVJTOiAnU0VUX01FTUJFUlMnLFxuICBTRVRfU0NSRUVOU0hPVFM6ICdTRVRfU0NSRUVOU0hPVFMnLFxuICBTRVRfQ0hBVDogJ1NFVF9DSEFUJyxcbiAgU0VUX1NFQVJDSDogJ1NFVF9TRUFSQ0gnLFxuICBTRVRfTUVTU0FHRVM6ICdTRVRfTUVTU0FHRVMnLFxuICBTRVRfRklMRVM6ICdTRVRfRklMRVMnLFxuICBTRVRfRk9MREVSOiAnU0VUX0ZPTERFUicsXG4gIFNFVF9DT01QQU5JRVM6ICdTRVRfQ09NUEFOSUVTJyxcbiAgU0VUX0NBVEVHT1JJRVM6ICdTRVRfQ0FURUdPUklFUycsXG4gIFNFVF9TVEFUVVNFUzogJ1NFVF9TVEFUVVNFUycsXG4gIFNFVF9ESVNQTEFZX01FVEhPRDogJ1NFVF9ESVNQTEFZX01FVEhPRCcsXG4gIFNFVF9WSVNJQkxFX0ZJTFRFUlM6ICdTRVRfVklTSUJMRV9GSUxURVJTJyxcbiAgQUREX01FTUJFUjogJ0FERF9NRU1CRVInLFxuICBBRERfU0NSRUVOU0hPVDogJ0FERF9TQ1JFRU5TSE9UJyxcbiAgQUREX0ZJTEU6ICdBRERfRklMRScsXG4gIFJFTU9WRV9NRU1CRVI6ICdSRU1PVkVfTUVNQkVSJyxcbiAgUkVNT1ZFX1NDUkVFTlNIT1Q6ICdSRU1PVkVfU0NSRUVOU0hPVCcsXG4gIFJFTU9WRV9GSUxFOiAnUkVNT1ZFX0ZJTEUnLFxuICBDTEVBUl9NRU1CRVJTOiAnQ0xFQVJfTUVNQkVSUycsXG4gIENMRUFSX1NDUkVFTlNIT1RTOiAnQ0xFQVJfU0NSRUVOU0hPVFMnLFxuICBDTEVBUl9GSUxFUzogJ0NMRUFSX0ZJTEVTJ1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/types/root.js\n");

/***/ }),

/***/ "./store/types/snacks.js":
/*!*******************************!*\
  !*** ./store/types/snacks.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SET_ITEM: 'SET_ITEM',\n  REMOVE_ITEM: 'REMOVE_ITEM',\n  CLEAR_ITEMS: 'CLEAR_ITEMS'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9zbmFja3MuanM/YmEyYiJdLCJuYW1lcyI6WyJTRVRfSVRFTSIsIlJFTU9WRV9JVEVNIiwiQ0xFQVJfSVRFTVMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDYkEsVUFBUSxFQUFFLFVBREc7QUFFYkMsYUFBVyxFQUFFLGFBRkE7QUFHYkMsYUFBVyxFQUFFO0FBSEEsQ0FBZiIsImZpbGUiOiIuL3N0b3JlL3R5cGVzL3NuYWNrcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX0lURU06ICdTRVRfSVRFTScsXG4gIFJFTU9WRV9JVEVNOiAnUkVNT1ZFX0lURU0nLFxuICBDTEVBUl9JVEVNUzogJ0NMRUFSX0lURU1TJ1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/types/snacks.js\n");

/***/ }),

/***/ "./store/types/stepper.js":
/*!********************************!*\
  !*** ./store/types/stepper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SET_STEPPER: 'SET_STEPPER'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9zdGVwcGVyLmpzP2JmY2MiXSwibmFtZXMiOlsiU0VUX1NURVBQRVIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDYkEsYUFBVyxFQUFFO0FBREEsQ0FBZiIsImZpbGUiOiIuL3N0b3JlL3R5cGVzL3N0ZXBwZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9TVEVQUEVSOiAnU0VUX1NURVBQRVInXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/types/stepper.js\n");

/***/ }),

/***/ "./store/types/user.js":
/*!*****************************!*\
  !*** ./store/types/user.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SET_USER: 'SET_USER',\n  SET_LOGOUT: 'SET_LOGOUT',\n  SET_AUTH_USER: 'SET_AUTH_USER',\n  SET_USER_FOLDERS: 'SET_USER_FOLDERS',\n  SET_USER_FOLDER: 'SET_USER_FOLDER',\n  UPDATE_USER: 'UPDATE_USER'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy91c2VyLmpzPzAxYmUiXSwibmFtZXMiOlsiU0VUX1VTRVIiLCJTRVRfTE9HT1VUIiwiU0VUX0FVVEhfVVNFUiIsIlNFVF9VU0VSX0ZPTERFUlMiLCJTRVRfVVNFUl9GT0xERVIiLCJVUERBVEVfVVNFUiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiQSxVQUFRLEVBQUUsVUFERztBQUViQyxZQUFVLEVBQUUsWUFGQztBQUdiQyxlQUFhLEVBQUUsZUFIRjtBQUliQyxrQkFBZ0IsRUFBRSxrQkFKTDtBQUtiQyxpQkFBZSxFQUFFLGlCQUxKO0FBTWJDLGFBQVcsRUFBRTtBQU5BLENBQWYiLCJmaWxlIjoiLi9zdG9yZS90eXBlcy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfVVNFUjogJ1NFVF9VU0VSJyxcbiAgU0VUX0xPR09VVDogJ1NFVF9MT0dPVVQnLFxuICBTRVRfQVVUSF9VU0VSOiAnU0VUX0FVVEhfVVNFUicsXG4gIFNFVF9VU0VSX0ZPTERFUlM6ICdTRVRfVVNFUl9GT0xERVJTJyxcbiAgU0VUX1VTRVJfRk9MREVSOiAnU0VUX1VTRVJfRk9MREVSJyxcbiAgVVBEQVRFX1VTRVI6ICdVUERBVEVfVVNFUidcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/types/user.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-cache-inmemory\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIj80YmQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1jYWNoZS1pbm1lbW9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-cache-inmemory\n");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCI/NDI3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-client\n");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGlua1wiPzcxNGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXBvbGxvLWxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGlua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link\n");

/***/ }),

/***/ "apollo-link-error":
/*!************************************!*\
  !*** external "apollo-link-error" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-error\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1lcnJvclwiPzZjNzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXBvbGxvLWxpbmstZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1lcnJvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-error\n");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-upload-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiP2VlYWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXBvbGxvLXVwbG9hZC1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-upload-client\n");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"deepmerge\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWVwbWVyZ2VcIj9lMmJiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRlZXBtZXJnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlZXBtZXJnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///deepmerge\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"framer-motion\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCI/ZmY3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmcmFtZXItbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///framer-motion\n");

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

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nextjs-progressbar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIj8zM2E1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHRqcy1wcm9ncmVzc2Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHRqcy1wcm9ncmVzc2JhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nextjs-progressbar\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCI/MzcxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid\n");

/***/ })

/******/ });
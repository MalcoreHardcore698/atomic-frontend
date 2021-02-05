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
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorLink", function() { return errorLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestLink", function() { return requestLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApolloClient; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-error */ "apollo-link-error");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config/index.js");






const SSR = true;
const NODE_ENV = true;
const SERVER_URL = NODE_ENV ? _config__WEBPACK_IMPORTED_MODULE_5__["default"].get('server-local-url') : _config__WEBPACK_IMPORTED_MODULE_5__["default"].get('server-host-url');
const SECRET = _config__WEBPACK_IMPORTED_MODULE_5__["default"].get('secret');

const request = async operation => {
  const token = !SSR && (await localStorage.getItem(SECRET));
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });
};

const errorLink = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_4__["onError"])(({
  graphQLErrors,
  networkError
}) => {
  if (graphQLErrors) {
    console.log('[graphQLErrors]', graphQLErrors);
  }

  if (networkError) {
    console.log('[networkError]', networkError);
  }
});
const requestLink = new apollo_link__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"]((operation, forward) => new apollo_link__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
  let handle;
  Promise.resolve(operation).then(result => request(result)).then(() => {
    handle = forward(operation).subscribe({
      next: observer.next.bind(observer),
      error: observer.error.bind(observer),
      complete: observer.complete.bind(observer)
    });
  }).catch(observer.error.bind(observer));
  return () => {
    if (handle) handle.unsubscribe();
  };
}));
const uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__["createUploadLink"])({
  uri: `${SERVER_URL}/graphql`,
  credentials: 'same-origin'
});
function createApolloClient(cache = {}) {
  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    ssrMode: SSR,
    link: apollo_link__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"].from([errorLink, requestLink, uploadLink]),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]().restore(cache)
  });
}

/***/ }),

/***/ "./apollo/index.js":
/*!*************************!*\
  !*** ./apollo/index.js ***!
  \*************************/
/*! exports provided: initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApollo", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApollo", function() { return useApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deepmerge */ "deepmerge");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client */ "./apollo/client/index.js");



let apolloClient;
function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : Object(_client__WEBPACK_IMPORTED_MODULE_2__["default"])();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = deepmerge__WEBPACK_IMPORTED_MODULE_1___default()(initialState, existingCache);

    _apolloClient.cache.restore(data);
  }

  if (true) return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeApollo(initialState), [initialState]);
}

/***/ }),

/***/ "./assets/styles/styles.css":
/*!**********************************!*\
  !*** ./assets/styles/styles.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./atomic-ui/theme/default.css":
/*!*************************************!*\
  !*** ./atomic-ui/theme/default.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./atomic-ui/theme/index.js":
/*!**********************************!*\
  !*** ./atomic-ui/theme/index.js ***!
  \**********************************/
/*! exports provided: list, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
const list = [{
  name: 'default',
  label: 'Темная'
}, {
  name: 'light',
  label: 'Светлая'
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    primary: '#0070f3'
  }
});

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = {
  salt: 10,
  secret: 'Bearer',
  port: 3000,
  'video-id': 'lV6dOFeHwqY',
  'upload-dir': 'uploads',
  'host-url': 'http://atomic.ru.com',
  'local-url': 'http://localhost:3000',
  'server-host-url': 'http://api.atomic.ru.com',
  'server-local-url': 'http://localhost:5000',
  'mongo-db-url': 'mongodb+srv://admin:xnCXyzVApMpHo6ee@cluster0.yjaue.mongodb.net/app?retryWrites=true&w=majority',
  'google-client-id': '1008300307671-dvv5no8uimgk2lodr76m9rnnva8g0lii.apps.googleusercontent.com',
  'google-client-secret': '5frE-oJIGm06KLUjcx3VcL9s',
  'facebook-app-id': 317441829678268,
  'facebook-app-secret': '3644f9d87f5a169d8196bc070b4fb146',
  'tiny-key': '9vduzd1el74h2sf5a5744o3rnwmzmtsio2vbyjlrqlisy5u3'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  get: key => config[key]
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nextjs-progressbar */ "nextjs-progressbar");
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _atomic_ui_theme_default_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../atomic-ui/theme/default.css */ "./atomic-ui/theme/default.css");
/* harmony import */ var _atomic_ui_theme_default_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_atomic_ui_theme_default_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _atomic_ui_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../atomic-ui/theme */ "./atomic-ui/theme/index.js");
/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../apollo */ "./apollo/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/styles/styles.css */ "./assets/styles/styles.css");
/* harmony import */ var _assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_12__);














const App = ({
  Component,
  pageProps
}) => {
  const client = Object(_apollo__WEBPACK_IMPORTED_MODULE_10__["useApollo"])(pageProps.initialApolloState);
  const store = Object(_store__WEBPACK_IMPORTED_MODULE_11__["useStore"])(pageProps.initialReduxState);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["ApolloProvider"], {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: 'utf-8'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: 'viewport',
    content: 'minimum-scale=1, initial-scale=1, width=device-width'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: 'theme-color',
    content: '#000000'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: 'description',
    content: 'Атомик – портал для формирования новой сферы образования'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "\u0410\u0442\u043E\u043C\u0438\u043A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _atomic_ui_theme__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
    key: router.route,
    initial: 'pageInitial',
    animate: 'pageAnimate',
    variants: {
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: 'var(--default-color-accent)',
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 3
  }))));
};

const getServerSideProps = async () => {
  const store = Object(_store__WEBPACK_IMPORTED_MODULE_11__["initializeStore"])();
  const client = Object(_apollo__WEBPACK_IMPORTED_MODULE_10__["initializeApollo"])();
  return {
    props: {
      initialReduxState: store.getState(),
      initialApolloState: client.cache.extract()
    },
    revalidate: 1
  };
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");
/* eslint-disable */




let store;

function initStore(preloadedState = {}) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])()));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({ ...store.getState(),
      ...preloadedState
    });
    store = undefined;
  }

  if (true) return _store;
  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "./store/reducers/documents.js":
/*!*************************************!*\
  !*** ./store/reducers/documents.js ***!
  \*************************************/
/*! exports provided: documentReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentReducer", function() { return documentReducer; });
/* harmony import */ var _types_documents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/documents */ "./store/types/documents.js");

const initialState = null;
const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types_documents__WEBPACK_IMPORTED_MODULE_0__["default"].SET_DOCUMENTS:
      return action.payload.documents;

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (documentReducer);

/***/ }),

/***/ "./store/reducers/drawer.js":
/*!**********************************!*\
  !*** ./store/reducers/drawer.js ***!
  \**********************************/
/*! exports provided: drawerReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerReducer", function() { return drawerReducer; });
/* harmony import */ var _types_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/drawer */ "./store/types/drawer.js");

const HISTORY_LIMIT = 10;
const initialState = {
  icon: '',
  color: '',
  title: '',
  half: false,
  side: 'right',
  content: '',
  history: []
};
const drawerReducer = (state = initialState, action) => {
  var _ref, _ref2, _ref3, _ref4, _ref5, _ref6;

  switch (action.type) {
    case _types_drawer__WEBPACK_IMPORTED_MODULE_0__["default"].SET_DRAWER:
      return {
        icon: (_ref = action.payload && action.payload.icon) !== null && _ref !== void 0 ? _ref : '',
        color: (_ref2 = action.payload && action.payload.color) !== null && _ref2 !== void 0 ? _ref2 : '',
        title: (_ref3 = action.payload && action.payload.title) !== null && _ref3 !== void 0 ? _ref3 : '',
        half: (_ref4 = action.payload && action.payload.half) !== null && _ref4 !== void 0 ? _ref4 : false,
        side: (_ref5 = action.payload && action.payload.side) !== null && _ref5 !== void 0 ? _ref5 : 'right',
        content: (_ref6 = action.payload && action.payload.content) !== null && _ref6 !== void 0 ? _ref6 : '',
        history: action.payload && state.history.length < HISTORY_LIMIT ? [...state.history, action.payload] : [action.payload],
        open: !!(action.payload && action.payload.content)
      };

    case _types_drawer__WEBPACK_IMPORTED_MODULE_0__["default"].SET_BACK_DRAWER:
      return { ...state.history[state.history.length - 2],
        history: state.history.slice(0, state.history.length - 1),
        open: true
      };

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (drawerReducer);

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root */ "./store/reducers/root.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./store/reducers/user.js");
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawer */ "./store/reducers/drawer.js");
/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stepper */ "./store/reducers/stepper.js");
/* harmony import */ var _documents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./documents */ "./store/reducers/documents.js");
/* harmony import */ var _snacks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snacks */ "./store/reducers/snacks.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal */ "./store/reducers/modal.js");
/* eslint-disable */








/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  root: _root__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  drawer: _drawer__WEBPACK_IMPORTED_MODULE_3__["default"],
  stepper: _stepper__WEBPACK_IMPORTED_MODULE_4__["default"],
  documents: _documents__WEBPACK_IMPORTED_MODULE_5__["default"],
  snacks: _snacks__WEBPACK_IMPORTED_MODULE_6__["default"],
  modal: _modal__WEBPACK_IMPORTED_MODULE_7__["default"]
}));

/***/ }),

/***/ "./store/reducers/modal.js":
/*!*********************************!*\
  !*** ./store/reducers/modal.js ***!
  \*********************************/
/*! exports provided: modalReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalReducer", function() { return modalReducer; });
/* harmony import */ var _types_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/modal */ "./store/types/modal.js");

const initialState = {
  size: 's',
  routes: null
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types_modal__WEBPACK_IMPORTED_MODULE_0__["default"].SET_MODAL:
      return {
        routes: action.payload.routes,
        size: action.payload.size
      };

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (modalReducer);

/***/ }),

/***/ "./store/reducers/root.js":
/*!********************************!*\
  !*** ./store/reducers/root.js ***!
  \********************************/
/*! exports provided: rootReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _types_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/root */ "./store/types/root.js");
/* eslint-disable */

const initialState = {
  mutation: null,
  variables: null,
  callback: () => {},
  members: [],
  screenshots: [],
  messages: [],
  files: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_MUTATE:
      return { ...state,
        ...action.payload
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_MEMBERS:
      return { ...state,
        members: action.payload.members || []
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_SCREENSHOTS:
      return { ...state,
        screenshots: action.payload.screenshots || []
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_FILES:
      return { ...state,
        files: action.payload.files || []
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_MEMBER:
      return { ...state,
        members: [...state.members, action.payload.member]
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_FOLDER:
      return { ...state,
        folder: action.payload.folder || []
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_SCREENSHOT:
      return { ...state,
        screenshots: [...state.screenshots, action.payload.screenshot]
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CHAT:
      return { ...state,
        chat: action.payload.chat
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_MESSAGES:
      return { ...state,
        messages: action.payload.messages
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_FILE:
      return { ...state,
        files: [...state.files, action.payload.file]
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].REMOVE_MEMBER:
      return { ...state,
        members: state.members.filter(member => {
          var _member$value;

          return (member.email || ((_member$value = member.value) === null || _member$value === void 0 ? void 0 : _member$value.email)) !== action.payload.email;
        })
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].REMOVE_SCREENSHOT:
      return { ...state,
        screenshots: state.screenshots.filter(screenshot => screenshot.id !== action.payload.id)
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].REMOVE_FILE:
      return { ...state,
        files: state.files.filter(file => file.id !== action.payload.id)
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].CLEAR_MEMBERS:
      return { ...state,
        members: []
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].CLEAR_SCREENSHOTS:
      return { ...state,
        screenshots: []
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].CLEAR_FILES:
      return { ...state,
        files: []
      };

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./store/reducers/snacks.js":
/*!**********************************!*\
  !*** ./store/reducers/snacks.js ***!
  \**********************************/
/*! exports provided: snackReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snackReducer", function() { return snackReducer; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_snacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/snacks */ "./store/types/snacks.js");


const LIMIT = 10;
const initialState = [];
const snackReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types_snacks__WEBPACK_IMPORTED_MODULE_1__["default"].SET_ITEM:
      return [...state, {
        id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
        ...action.payload.item
      }].slice(0, LIMIT);

    case _types_snacks__WEBPACK_IMPORTED_MODULE_1__["default"].REMOVE_ITEM:
      return [...state.filter(item => item.id !== action.payload.id)];

    case _types_snacks__WEBPACK_IMPORTED_MODULE_1__["default"].CLEAR_ITEMS:
      return [];

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (snackReducer);

/***/ }),

/***/ "./store/reducers/stepper.js":
/*!***********************************!*\
  !*** ./store/reducers/stepper.js ***!
  \***********************************/
/*! exports provided: stepperReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepperReducer", function() { return stepperReducer; });
/* harmony import */ var _types_stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/stepper */ "./store/types/stepper.js");

const initialState = {
  name: '',
  content: null
};
const stepperReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types_stepper__WEBPACK_IMPORTED_MODULE_0__["default"].SET_STEPPER:
      return action.payload;

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (stepperReducer);

/***/ }),

/***/ "./store/reducers/user.js":
/*!********************************!*\
  !*** ./store/reducers/user.js ***!
  \********************************/
/*! exports provided: userReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _types_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/user */ "./store/types/user.js");

const initialState = {
  id: 0,
  name: '',
  about: '',
  account: '',
  email: '',
  phone: '',
  role: '',
  folders: [],
  projects: [],
  articles: [],
  likedProjects: [],
  settings: [''],
  token: '',
  updatedAt: '',
  createdAt: '',
  register: false,
  authenticated: false
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types_user__WEBPACK_IMPORTED_MODULE_0__["default"].SET_USER:
      return { ...action.payload,
        authenticated: true
      };

    case _types_user__WEBPACK_IMPORTED_MODULE_0__["default"].SET_LOGOUT:
      return {
        authenticated: false
      };

    case _types_user__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_USER:
      return { ...state,
        ...action.payload
      };

    case _types_user__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_USER_FOLDER:
      return { ...state,
        folders: action.payload
      };

    case _types_user__WEBPACK_IMPORTED_MODULE_0__["default"].REMOVE_USER_FOLDER:
      return { ...state,
        folders: action.payload
      };

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./store/types/documents.js":
/*!**********************************!*\
  !*** ./store/types/documents.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_DOCUMENTS: 'SET_DOCUMENTS'
});

/***/ }),

/***/ "./store/types/drawer.js":
/*!*******************************!*\
  !*** ./store/types/drawer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_DRAWER: 'SET_DRAWER',
  SET_BACK_DRAWER: 'SET_BACK_DRAWER'
});

/***/ }),

/***/ "./store/types/modal.js":
/*!******************************!*\
  !*** ./store/types/modal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_MODAL: 'SET_MODAL'
});

/***/ }),

/***/ "./store/types/root.js":
/*!*****************************!*\
  !*** ./store/types/root.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_MUTATE: 'SET_MUTATE',
  SET_MEMBERS: 'SET_MEMBERS',
  SET_SCREENSHOTS: 'SET_SCREENSHOTS',
  SET_CHAT: 'SET_CHAT',
  SET_MESSAGES: 'SET_MESSAGES',
  SET_FILES: 'SET_FILES',
  SET_FOLDER: 'SET_FOLDER',
  ADD_MEMBER: 'ADD_MEMBER',
  ADD_SCREENSHOT: 'ADD_SCREENSHOT',
  ADD_FILE: 'ADD_FILE',
  REMOVE_MEMBER: 'REMOVE_MEMBER',
  REMOVE_SCREENSHOT: 'REMOVE_SCREENSHOT',
  REMOVE_FILE: 'REMOVE_FILE',
  CLEAR_MEMBERS: 'CLEAR_MEMBERS',
  CLEAR_SCREENSHOTS: 'CLEAR_SCREENSHOTS',
  CLEAR_FILES: 'CLEAR_FILES'
});

/***/ }),

/***/ "./store/types/snacks.js":
/*!*******************************!*\
  !*** ./store/types/snacks.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_ITEM: 'SET_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEMS: 'CLEAR_ITEMS'
});

/***/ }),

/***/ "./store/types/stepper.js":
/*!********************************!*\
  !*** ./store/types/stepper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_STEPPER: 'SET_STEPPER'
});

/***/ }),

/***/ "./store/types/user.js":
/*!*****************************!*\
  !*** ./store/types/user.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_USER: 'SET_USER',
  SET_LOGOUT: 'SET_LOGOUT',
  SET_AUTH_USER: 'SET_AUTH_USER',
  UPDATE_USER: 'UPDATE_USER',
  ADD_USER_FOLDER: 'ADD_USER_FOLDER',
  REMOVE_USER_FOLDER: 'REMOVE_USER_FOLDER'
});

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

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-error":
/*!************************************!*\
  !*** external "apollo-link-error" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

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

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBvbGxvL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcG9sbG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXRvbWljLXVpL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2RvY3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9zbmFja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3R5cGVzL2RvY3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9zbmFja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy91c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1lcnJvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby11cGxvYWQtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVlcG1lcmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dGpzLXByb2dyZXNzYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiU1NSIiwiTk9ERV9FTlYiLCJTRVJWRVJfVVJMIiwiY29uZmlnIiwiZ2V0IiwiU0VDUkVUIiwicmVxdWVzdCIsIm9wZXJhdGlvbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImVycm9yTGluayIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RMaW5rIiwiQXBvbGxvTGluayIsImZvcndhcmQiLCJPYnNlcnZhYmxlIiwib2JzZXJ2ZXIiLCJoYW5kbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZXN1bHQiLCJzdWJzY3JpYmUiLCJuZXh0IiwiYmluZCIsImVycm9yIiwiY29tcGxldGUiLCJjYXRjaCIsInVuc3Vic2NyaWJlIiwidXBsb2FkTGluayIsImNyZWF0ZVVwbG9hZExpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsImNyZWF0ZUFwb2xsb0NsaWVudCIsImNhY2hlIiwiQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsImxpbmsiLCJmcm9tIiwiSW5NZW1vcnlDYWNoZSIsInJlc3RvcmUiLCJhcG9sbG9DbGllbnQiLCJpbml0aWFsaXplQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsImV4aXN0aW5nQ2FjaGUiLCJleHRyYWN0IiwiZGF0YSIsIm1lcmdlIiwidXNlQXBvbGxvIiwidXNlTWVtbyIsImxpc3QiLCJuYW1lIiwibGFiZWwiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2FsdCIsInNlY3JldCIsInBvcnQiLCJrZXkiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJpbml0aWFsQXBvbGxvU3RhdGUiLCJzdG9yZSIsInVzZVN0b3JlIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0aGVtZSIsInJvdXRlIiwicGFnZUluaXRpYWwiLCJvcGFjaXR5IiwicGFnZUFuaW1hdGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJpbml0aWFsaXplU3RvcmUiLCJwcm9wcyIsImdldFN0YXRlIiwicmV2YWxpZGF0ZSIsImluaXRTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VycyIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJfc3RvcmUiLCJ1bmRlZmluZWQiLCJkb2N1bWVudFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDIiwiU0VUX0RPQ1VNRU5UUyIsInBheWxvYWQiLCJkb2N1bWVudHMiLCJISVNUT1JZX0xJTUlUIiwiaWNvbiIsImNvbG9yIiwidGl0bGUiLCJoYWxmIiwic2lkZSIsImNvbnRlbnQiLCJoaXN0b3J5IiwiZHJhd2VyUmVkdWNlciIsIlNFVF9EUkFXRVIiLCJsZW5ndGgiLCJvcGVuIiwiU0VUX0JBQ0tfRFJBV0VSIiwic2xpY2UiLCJjb21iaW5lUmVkdWNlcnMiLCJyb290Iiwicm9vdFJlZHVjZXIiLCJ1c2VyIiwidXNlclJlZHVjZXIiLCJkcmF3ZXIiLCJzdGVwcGVyIiwic3RlcHBlclJlZHVjZXIiLCJkb2N1bWVudHNSZWR1Y2VyIiwic25hY2tzIiwic25hY2tzUmVkdWNlciIsIm1vZGFsIiwibW9kYWxSZWR1Y2VyIiwic2l6ZSIsInJvdXRlcyIsIlNFVF9NT0RBTCIsIm11dGF0aW9uIiwidmFyaWFibGVzIiwiY2FsbGJhY2siLCJtZW1iZXJzIiwic2NyZWVuc2hvdHMiLCJtZXNzYWdlcyIsImZpbGVzIiwiU0VUX01VVEFURSIsIlNFVF9NRU1CRVJTIiwiU0VUX1NDUkVFTlNIT1RTIiwiU0VUX0ZJTEVTIiwiQUREX01FTUJFUiIsIm1lbWJlciIsIlNFVF9GT0xERVIiLCJmb2xkZXIiLCJBRERfU0NSRUVOU0hPVCIsInNjcmVlbnNob3QiLCJTRVRfQ0hBVCIsImNoYXQiLCJTRVRfTUVTU0FHRVMiLCJBRERfRklMRSIsImZpbGUiLCJSRU1PVkVfTUVNQkVSIiwiZmlsdGVyIiwiZW1haWwiLCJ2YWx1ZSIsIlJFTU9WRV9TQ1JFRU5TSE9UIiwiaWQiLCJSRU1PVkVfRklMRSIsIkNMRUFSX01FTUJFUlMiLCJDTEVBUl9TQ1JFRU5TSE9UUyIsIkNMRUFSX0ZJTEVTIiwiTElNSVQiLCJzbmFja1JlZHVjZXIiLCJTRVRfSVRFTSIsInY0IiwiaXRlbSIsIlJFTU9WRV9JVEVNIiwiQ0xFQVJfSVRFTVMiLCJTRVRfU1RFUFBFUiIsImFib3V0IiwiYWNjb3VudCIsInBob25lIiwicm9sZSIsImZvbGRlcnMiLCJwcm9qZWN0cyIsImFydGljbGVzIiwibGlrZWRQcm9qZWN0cyIsInNldHRpbmdzIiwidXBkYXRlZEF0IiwiY3JlYXRlZEF0IiwicmVnaXN0ZXIiLCJhdXRoZW50aWNhdGVkIiwiU0VUX1VTRVIiLCJTRVRfTE9HT1VUIiwiVVBEQVRFX1VTRVIiLCJBRERfVVNFUl9GT0xERVIiLCJSRU1PVkVfVVNFUl9GT0xERVIiLCJTRVRfQVVUSF9VU0VSIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLEdBQUcsT0FBVDtBQUNBLE1BQU1DLFFBQVEsT0FBZDtBQUNBLE1BQU1DLFVBQVUsR0FBR0QsUUFBUSxHQUFHRSwrQ0FBTSxDQUFDQyxHQUFQLENBQVcsa0JBQVgs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REc7QUFFYkMsWUFBVSxFQUFFLFlBRkM7QUFHYkksZUFBYSxFQUFFLGVBSEY7QUFJYkgsYUFBVyxFQUFFLGFBSkE7QUFLYkMsaUJBQWUsRUFBRSxpQkFMSjtBQU1iQyxvQkFBa0IsRUFBRTtBQU5QLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCdcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknXG5pbXBvcnQgeyBjcmVhdGVVcGxvYWRMaW5rIH0gZnJvbSAnYXBvbGxvLXVwbG9hZC1jbGllbnQnXG5pbXBvcnQgeyBBcG9sbG9MaW5rLCBPYnNlcnZhYmxlIH0gZnJvbSAnYXBvbGxvLWxpbmsnXG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSAnYXBvbGxvLWxpbmstZXJyb3InXG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJ1xuXG5jb25zdCBTU1IgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuY29uc3QgTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG5jb25zdCBTRVJWRVJfVVJMID0gTk9ERV9FTlYgPyBjb25maWcuZ2V0KCdzZXJ2ZXItbG9jYWwtdXJsJykgOiBjb25maWcuZ2V0KCdzZXJ2ZXItaG9zdC11cmwnKVxuY29uc3QgU0VDUkVUID0gY29uZmlnLmdldCgnc2VjcmV0JylcblxuY29uc3QgcmVxdWVzdCA9IGFzeW5jIChvcGVyYXRpb24pID0+IHtcbiAgY29uc3QgdG9rZW4gPSAhU1NSICYmIChhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTRUNSRVQpKVxuICBvcGVyYXRpb24uc2V0Q29udGV4dCh7XG4gICAgaGVhZGVyczoge1xuICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZXJyb3JMaW5rID0gb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xuICBpZiAoZ3JhcGhRTEVycm9ycykge1xuICAgIGNvbnNvbGUubG9nKCdbZ3JhcGhRTEVycm9yc10nLCBncmFwaFFMRXJyb3JzKVxuICB9XG4gIGlmIChuZXR3b3JrRXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnW25ldHdvcmtFcnJvcl0nLCBuZXR3b3JrRXJyb3IpXG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0TGluayA9IG5ldyBBcG9sbG9MaW5rKFxuICAob3BlcmF0aW9uLCBmb3J3YXJkKSA9PlxuICAgIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGhhbmRsZVxuXG4gICAgICBQcm9taXNlLnJlc29sdmUob3BlcmF0aW9uKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXF1ZXN0KHJlc3VsdCkpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBoYW5kbGUgPSBmb3J3YXJkKG9wZXJhdGlvbikuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2ZXIuY29tcGxldGUuYmluZChvYnNlcnZlcilcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlcikpXG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChoYW5kbGUpIGhhbmRsZS51bnN1YnNjcmliZSgpXG4gICAgICB9XG4gICAgfSlcbilcblxuY29uc3QgdXBsb2FkTGluayA9IGNyZWF0ZVVwbG9hZExpbmsoe1xuICB1cmk6IGAke1NFUlZFUl9VUkx9L2dyYXBocWxgLFxuICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KGNhY2hlID0ge30pIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IFNTUixcbiAgICBsaW5rOiBBcG9sbG9MaW5rLmZyb20oW2Vycm9yTGluaywgcmVxdWVzdExpbmssIHVwbG9hZExpbmtdKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGNhY2hlKVxuICB9KVxufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcblxuaW1wb3J0IGNyZWF0ZUFwb2xsb0NsaWVudCBmcm9tICcuL2NsaWVudCdcblxubGV0IGFwb2xsb0NsaWVudFxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KClcblxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpXG4gICAgY29uc3QgZGF0YSA9IG1lcmdlKGluaXRpYWxTdGF0ZSwgZXhpc3RpbmdDYWNoZSlcblxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShkYXRhKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudFxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudFxuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG59XG4iLCJleHBvcnQgY29uc3QgbGlzdCA9IFtcbiAge1xuICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICBsYWJlbDogJ9Ci0LXQvNC90LDRjydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdsaWdodCcsXG4gICAgbGFiZWw6ICfQodCy0LXRgtC70LDRjydcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbG9yczoge1xuICAgIHByaW1hcnk6ICcjMDA3MGYzJ1xuICB9XG59XG4iLCJjb25zdCBjb25maWcgPSB7XG4gIHNhbHQ6IDEwLFxuICBzZWNyZXQ6ICdCZWFyZXInLFxuICBwb3J0OiAzMDAwLFxuICAndmlkZW8taWQnOiAnbFY2ZE9GZUh3cVknLFxuICAndXBsb2FkLWRpcic6ICd1cGxvYWRzJyxcbiAgJ2hvc3QtdXJsJzogJ2h0dHA6Ly9hdG9taWMucnUuY29tJyxcbiAgJ2xvY2FsLXVybCc6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAnc2VydmVyLWhvc3QtdXJsJzogJ2h0dHA6Ly9hcGkuYXRvbWljLnJ1LmNvbScsXG4gICdzZXJ2ZXItbG9jYWwtdXJsJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcsXG4gICdtb25nby1kYi11cmwnOlxuICAgICdtb25nb2RiK3NydjovL2FkbWluOnhuQ1h5elZBcE1wSG82ZWVAY2x1c3RlcjAueWphdWUubW9uZ29kYi5uZXQvYXBwP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScsXG4gICdnb29nbGUtY2xpZW50LWlkJzogJzEwMDgzMDAzMDc2NzEtZHZ2NW5vOHVpbWdrMmxvZHI3Nm05cm5udmE4ZzBsaWkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxuICAnZ29vZ2xlLWNsaWVudC1zZWNyZXQnOiAnNWZyRS1vSklHbTA2S0xVamN4M1ZjTDlzJyxcbiAgJ2ZhY2Vib29rLWFwcC1pZCc6IDMxNzQ0MTgyOTY3ODI2OCxcbiAgJ2ZhY2Vib29rLWFwcC1zZWNyZXQnOiAnMzY0NGY5ZDg3ZjVhMTY5ZDgxOTZiYzA3MGI0ZmIxNDYnLFxuICAndGlueS1rZXknOiAnOXZkdXpkMWVsNzRoMnNmNWE1NzQ0bzNybndtem10c2lvMnZieWpscnFsaXN5NXUzJ1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldDogKGtleSkgPT4gY29uZmlnW2tleV1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcbmltcG9ydCBOZXh0TnByb2dyZXNzIGZyb20gJ25leHRqcy1wcm9ncmVzc2JhcidcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmltcG9ydCAnLi4vYXRvbWljLXVpL3RoZW1lL2RlZmF1bHQuY3NzJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2F0b21pYy11aS90aGVtZSdcblxuaW1wb3J0IHsgdXNlQXBvbGxvLCBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSAnLi4vYXBvbGxvJ1xuaW1wb3J0IHsgdXNlU3RvcmUsIGluaXRpYWxpemVTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5jc3MnXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgY2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUpXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PXsndXRmLTgnfSAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPXsndmlld3BvcnQnfVxuICAgICAgICAgICAgY29udGVudD17J21pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT17J3RoZW1lLWNvbG9yJ30gY29udGVudD17JyMwMDAwMDAnfSAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPXsnZGVzY3JpcHRpb24nfVxuICAgICAgICAgICAgY29udGVudD17J9CQ0YLQvtC80LjQuiDigJMg0L/QvtGA0YLQsNC7INC00LvRjyDRhNC+0YDQvNC40YDQvtCy0LDQvdC40Y8g0L3QvtCy0L7QuSDRgdGE0LXRgNGLINC+0LHRgNCw0LfQvtCy0LDQvdC40Y8nfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHRpdGxlPtCQ0YLQvtC80LjQujwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBrZXk9e3JvdXRlci5yb3V0ZX1cbiAgICAgICAgICAgIGluaXRpYWw9eydwYWdlSW5pdGlhbCd9XG4gICAgICAgICAgICBhbmltYXRlPXsncGFnZUFuaW1hdGUnfVxuICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgcGFnZUluaXRpYWw6IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBhZ2VBbmltYXRlOiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICA8TmV4dE5wcm9ncmVzc1xuICAgICAgICAgICAgY29sb3I9eyd2YXIoLS1kZWZhdWx0LWNvbG9yLWFjY2VudCknfVxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbj17MC4zfVxuICAgICAgICAgICAgc3RvcERlbGF5TXM9ezIwMH1cbiAgICAgICAgICAgIGhlaWdodD17M31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBpbml0aWFsaXplU3RvcmUoKVxuICBjb25zdCBjbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIGluaXRpYWxBcG9sbG9TdGF0ZTogY2xpZW50LmNhY2hlLmV4dHJhY3QoKVxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5cbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xuXG5sZXQgc3RvcmVcblxuZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0ge30pIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBwcmVsb2FkZWRTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSkpXG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcblxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlXG4gICAgfSlcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXG5cbiAgcmV0dXJuIF9zdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG4gIHJldHVybiBzdG9yZVxufVxuIiwiaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvZG9jdW1lbnRzJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBudWxsXG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9ET0NVTUVOVFM6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuZG9jdW1lbnRzXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvY3VtZW50UmVkdWNlclxuIiwiaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvZHJhd2VyJ1xuXG5jb25zdCBISVNUT1JZX0xJTUlUID0gMTBcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpY29uOiAnJyxcbiAgY29sb3I6ICcnLFxuICB0aXRsZTogJycsXG4gIGhhbGY6IGZhbHNlLFxuICBzaWRlOiAncmlnaHQnLFxuICBjb250ZW50OiAnJyxcbiAgaGlzdG9yeTogW11cbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9EUkFXRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpY29uOiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuaWNvbikgPz8gJycsXG4gICAgICAgIGNvbG9yOiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY29sb3IpID8/ICcnLFxuICAgICAgICB0aXRsZTogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLnRpdGxlKSA/PyAnJyxcbiAgICAgICAgaGFsZjogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmhhbGYpID8/IGZhbHNlLFxuICAgICAgICBzaWRlOiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuc2lkZSkgPz8gJ3JpZ2h0JyxcbiAgICAgICAgY29udGVudDogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmNvbnRlbnQpID8/ICcnLFxuICAgICAgICBoaXN0b3J5OlxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkICYmIHN0YXRlLmhpc3RvcnkubGVuZ3RoIDwgSElTVE9SWV9MSU1JVFxuICAgICAgICAgICAgPyBbLi4uc3RhdGUuaGlzdG9yeSwgYWN0aW9uLnBheWxvYWRdXG4gICAgICAgICAgICA6IFthY3Rpb24ucGF5bG9hZF0sXG4gICAgICAgIG9wZW46ICEhKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmNvbnRlbnQpXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9CQUNLX0RSQVdFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLmhpc3Rvcnlbc3RhdGUuaGlzdG9yeS5sZW5ndGggLSAyXSxcbiAgICAgICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeS5zbGljZSgwLCBzdGF0ZS5oaXN0b3J5Lmxlbmd0aCAtIDEpLFxuICAgICAgICBvcGVuOiB0cnVlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyYXdlclJlZHVjZXJcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdCdcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3VzZXInXG5pbXBvcnQgZHJhd2VyUmVkdWNlciBmcm9tICcuL2RyYXdlcidcbmltcG9ydCBzdGVwcGVyUmVkdWNlciBmcm9tICcuL3N0ZXBwZXInXG5pbXBvcnQgZG9jdW1lbnRzUmVkdWNlciBmcm9tICcuL2RvY3VtZW50cydcbmltcG9ydCBzbmFja3NSZWR1Y2VyIGZyb20gJy4vc25hY2tzJ1xuaW1wb3J0IG1vZGFsUmVkdWNlciBmcm9tICcuL21vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICByb290OiByb290UmVkdWNlcixcbiAgdXNlcjogdXNlclJlZHVjZXIsXG4gIGRyYXdlcjogZHJhd2VyUmVkdWNlcixcbiAgc3RlcHBlcjogc3RlcHBlclJlZHVjZXIsXG4gIGRvY3VtZW50czogZG9jdW1lbnRzUmVkdWNlcixcbiAgc25hY2tzOiBzbmFja3NSZWR1Y2VyLFxuICBtb2RhbDogbW9kYWxSZWR1Y2VyXG59KVxuIiwiaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvbW9kYWwnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2l6ZTogJ3MnLFxuICByb3V0ZXM6IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IG1vZGFsUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX01PREFMOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGVzOiBhY3Rpb24ucGF5bG9hZC5yb3V0ZXMsXG4gICAgICAgIHNpemU6IGFjdGlvbi5wYXlsb2FkLnNpemVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxSZWR1Y2VyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvcm9vdCdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtdXRhdGlvbjogbnVsbCxcbiAgdmFyaWFibGVzOiBudWxsLFxuICBjYWxsYmFjazogKCkgPT4ge30sXG4gIG1lbWJlcnM6IFtdLFxuICBzY3JlZW5zaG90czogW10sXG4gIG1lc3NhZ2VzOiBbXSxcbiAgZmlsZXM6IFtdXG59XG5cbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX01VVEFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfTUVNQkVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZW1iZXJzOiBhY3Rpb24ucGF5bG9hZC5tZW1iZXJzIHx8IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9TQ1JFRU5TSE9UUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzY3JlZW5zaG90czogYWN0aW9uLnBheWxvYWQuc2NyZWVuc2hvdHMgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0ZJTEVTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGVzOiBhY3Rpb24ucGF5bG9hZC5maWxlcyB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5BRERfTUVNQkVSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbWJlcnM6IFsuLi5zdGF0ZS5tZW1iZXJzLCBhY3Rpb24ucGF5bG9hZC5tZW1iZXJdXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9GT0xERVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZm9sZGVyOiBhY3Rpb24ucGF5bG9hZC5mb2xkZXIgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuQUREX1NDUkVFTlNIT1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2NyZWVuc2hvdHM6IFsuLi5zdGF0ZS5zY3JlZW5zaG90cywgYWN0aW9uLnBheWxvYWQuc2NyZWVuc2hvdF1cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0NIQVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2hhdDogYWN0aW9uLnBheWxvYWQuY2hhdFxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfTUVTU0FHRVM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2VzXG4gICAgICB9XG4gICAgY2FzZSBDLkFERF9GSUxFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGVzOiBbLi4uc3RhdGUuZmlsZXMsIGFjdGlvbi5wYXlsb2FkLmZpbGVdXG4gICAgICB9XG4gICAgY2FzZSBDLlJFTU9WRV9NRU1CRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVtYmVyczogc3RhdGUubWVtYmVycy5maWx0ZXIoXG4gICAgICAgICAgKG1lbWJlcikgPT4gKG1lbWJlci5lbWFpbCB8fCBtZW1iZXIudmFsdWU/LmVtYWlsKSAhPT0gYWN0aW9uLnBheWxvYWQuZW1haWxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIGNhc2UgQy5SRU1PVkVfU0NSRUVOU0hPVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzY3JlZW5zaG90czogc3RhdGUuc2NyZWVuc2hvdHMuZmlsdGVyKChzY3JlZW5zaG90KSA9PiBzY3JlZW5zaG90LmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgIH1cbiAgICBjYXNlIEMuUkVNT1ZFX0ZJTEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsZXM6IHN0YXRlLmZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICB9XG4gICAgY2FzZSBDLkNMRUFSX01FTUJFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVtYmVyczogW11cbiAgICAgIH1cbiAgICBjYXNlIEMuQ0xFQVJfU0NSRUVOU0hPVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2NyZWVuc2hvdHM6IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLkNMRUFSX0ZJTEVTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGVzOiBbXVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxuIiwiaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJ1xuXG5pbXBvcnQgQyBmcm9tICcuLi90eXBlcy9zbmFja3MnXG5cbmNvbnN0IExJTUlUID0gMTBcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdXG5cbmV4cG9ydCBjb25zdCBzbmFja1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9JVEVNOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogdjQoKSxcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5pdGVtXG4gICAgICAgIH1cbiAgICAgIF0uc2xpY2UoMCwgTElNSVQpXG4gICAgY2FzZSBDLlJFTU9WRV9JVEVNOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKV1cbiAgICBjYXNlIEMuQ0xFQVJfSVRFTVM6XG4gICAgICByZXR1cm4gW11cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc25hY2tSZWR1Y2VyXG4iLCJpbXBvcnQgQyBmcm9tICcuLi90eXBlcy9zdGVwcGVyJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG5hbWU6ICcnLFxuICBjb250ZW50OiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBzdGVwcGVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX1NURVBQRVI6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RlcHBlclJlZHVjZXJcbiIsImltcG9ydCBDIGZyb20gJy4uL3R5cGVzL3VzZXInXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaWQ6IDAsXG4gIG5hbWU6ICcnLFxuICBhYm91dDogJycsXG4gIGFjY291bnQ6ICcnLFxuICBlbWFpbDogJycsXG4gIHBob25lOiAnJyxcbiAgcm9sZTogJycsXG4gIGZvbGRlcnM6IFtdLFxuICBwcm9qZWN0czogW10sXG4gIGFydGljbGVzOiBbXSxcbiAgbGlrZWRQcm9qZWN0czogW10sXG4gIHNldHRpbmdzOiBbJyddLFxuICB0b2tlbjogJycsXG4gIHVwZGF0ZWRBdDogJycsXG4gIGNyZWF0ZWRBdDogJycsXG4gIHJlZ2lzdGVyOiBmYWxzZSxcbiAgYXV0aGVudGljYXRlZDogZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9MT0dPVVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZVxuICAgICAgfVxuICAgIGNhc2UgQy5VUERBVEVfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIGNhc2UgQy5BRERfVVNFUl9GT0xERVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZm9sZGVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICBjYXNlIEMuUkVNT1ZFX1VTRVJfRk9MREVSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZvbGRlcnM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9ET0NVTUVOVFM6ICdTRVRfRE9DVU1FTlRTJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfRFJBV0VSOiAnU0VUX0RSQVdFUicsXG4gIFNFVF9CQUNLX0RSQVdFUjogJ1NFVF9CQUNLX0RSQVdFUidcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX01PREFMOiAnU0VUX01PREFMJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfTVVUQVRFOiAnU0VUX01VVEFURScsXG4gIFNFVF9NRU1CRVJTOiAnU0VUX01FTUJFUlMnLFxuICBTRVRfU0NSRUVOU0hPVFM6ICdTRVRfU0NSRUVOU0hPVFMnLFxuICBTRVRfQ0hBVDogJ1NFVF9DSEFUJyxcbiAgU0VUX01FU1NBR0VTOiAnU0VUX01FU1NBR0VTJyxcbiAgU0VUX0ZJTEVTOiAnU0VUX0ZJTEVTJyxcbiAgU0VUX0ZPTERFUjogJ1NFVF9GT0xERVInLFxuICBBRERfTUVNQkVSOiAnQUREX01FTUJFUicsXG4gIEFERF9TQ1JFRU5TSE9UOiAnQUREX1NDUkVFTlNIT1QnLFxuICBBRERfRklMRTogJ0FERF9GSUxFJyxcbiAgUkVNT1ZFX01FTUJFUjogJ1JFTU9WRV9NRU1CRVInLFxuICBSRU1PVkVfU0NSRUVOU0hPVDogJ1JFTU9WRV9TQ1JFRU5TSE9UJyxcbiAgUkVNT1ZFX0ZJTEU6ICdSRU1PVkVfRklMRScsXG4gIENMRUFSX01FTUJFUlM6ICdDTEVBUl9NRU1CRVJTJyxcbiAgQ0xFQVJfU0NSRUVOU0hPVFM6ICdDTEVBUl9TQ1JFRU5TSE9UUycsXG4gIENMRUFSX0ZJTEVTOiAnQ0xFQVJfRklMRVMnXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9JVEVNOiAnU0VUX0lURU0nLFxuICBSRU1PVkVfSVRFTTogJ1JFTU9WRV9JVEVNJyxcbiAgQ0xFQVJfSVRFTVM6ICdDTEVBUl9JVEVNUydcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX1NURVBQRVI6ICdTRVRfU1RFUFBFUidcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX1VTRVI6ICdTRVRfVVNFUicsXG4gIFNFVF9MT0dPVVQ6ICdTRVRfTE9HT1VUJyxcbiAgU0VUX0FVVEhfVVNFUjogJ1NFVF9BVVRIX1VTRVInLFxuICBVUERBVEVfVVNFUjogJ1VQREFURV9VU0VSJyxcbiAgQUREX1VTRVJfRk9MREVSOiAnQUREX1VTRVJfRk9MREVSJyxcbiAgUkVNT1ZFX1VTRVJfRk9MREVSOiAnUkVNT1ZFX1VTRVJfRk9MREVSJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1lcnJvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWVwbWVyZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dGpzLXByb2dyZXNzYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
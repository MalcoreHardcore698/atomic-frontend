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

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
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
function createApolloClient() {
  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    ssrMode: SSR,
    link: apollo_link__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"].from([errorLink, requestLink, uploadLink]),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"](),
    defaultOptions
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

/***/ "./atomic-ui/assets/styles/styles.css":
/*!********************************************!*\
  !*** ./atomic-ui/assets/styles/styles.css ***!
  \********************************************/
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

/***/ "./node_modules/react-lazy-load-image-component/src/effects/opacity.css":
/*!******************************************************************************!*\
  !*** ./node_modules/react-lazy-load-image-component/src/effects/opacity.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var react_lazy_load_image_component_src_effects_opacity_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lazy-load-image-component/src/effects/opacity.css */ "./node_modules/react-lazy-load-image-component/src/effects/opacity.css");
/* harmony import */ var react_lazy_load_image_component_src_effects_opacity_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component_src_effects_opacity_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _atomic_ui_theme_default_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../atomic-ui/theme/default.css */ "./atomic-ui/theme/default.css");
/* harmony import */ var _atomic_ui_theme_default_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_atomic_ui_theme_default_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _atomic_ui_assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../atomic-ui/assets/styles/styles.css */ "./atomic-ui/assets/styles/styles.css");
/* harmony import */ var _atomic_ui_assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_atomic_ui_assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _atomic_ui_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../atomic-ui/theme */ "./atomic-ui/theme/index.js");
/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../apollo */ "./apollo/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store */ "./store/index.js");














const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
  #nprogress {
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-override);
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.45);
    cursor: default;

    .spinner, .spinner-icon {
      display: none;
    }
  }
`;

const App = ({
  Component,
  pageProps
}) => {
  const client = Object(_apollo__WEBPACK_IMPORTED_MODULE_12__["useApollo"])(pageProps.initialApolloState);
  const store = Object(_store__WEBPACK_IMPORTED_MODULE_13__["useStore"])(pageProps.initialReduxState);
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
    name: 'yandex-verification',
    content: 'bfd04b96d30382f5'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _atomic_ui_theme__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_7__["motion"].div, {
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
  const store = Object(_store__WEBPACK_IMPORTED_MODULE_13__["initializeStore"])();
  const client = Object(_apollo__WEBPACK_IMPORTED_MODULE_12__["initializeApollo"])();
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
  settings: {
    general: {
      logotype: '' // /images/logo.png

    },
    meta: {
      title: '',
      description: ''
    }
  },
  variables: null,
  scrollTop: 0,
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

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_SETTINGS:
      return { ...state,
        settings: action.payload.settings
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

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_FOLDER:
      return { ...state,
        folder: action.payload.folder || []
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CHAT:
      return { ...state,
        chat: action.payload.chat
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_MESSAGES:
      return { ...state,
        messages: action.payload.messages
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_MEMBER:
      return { ...state,
        members: [...state.members, action.payload.member]
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_SCREENSHOT:
      return { ...state,
        screenshots: [...state.screenshots, action.payload.screenshot]
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

    case _types_user__WEBPACK_IMPORTED_MODULE_0__["default"].SET_USER_FOLDERS:
      return { ...state,
        folders: action.payload
      };

    case _types_user__WEBPACK_IMPORTED_MODULE_0__["default"].SET_USER_FOLDER:
      return { ...state,
        folders: state.folders.map(folder => folder.id === action.payload.id ? action.payload : folder)
      };

    case _types_user__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_USER:
      return { ...state,
        ...action.payload
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
  SET_SETTINGS: 'SET_SETTINGS',
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
  SET_USER_FOLDERS: 'SET_USER_FOLDERS',
  SET_USER_FOLDER: 'SET_USER_FOLDER',
  UPDATE_USER: 'UPDATE_USER'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBvbGxvL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcG9sbG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXRvbWljLXVpL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2RvY3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9zbmFja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3R5cGVzL2RvY3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9zbmFja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy91c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1lcnJvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby11cGxvYWQtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVlcG1lcmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dGpzLXByb2dyZXNzYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiU1NSIiwiTk9ERV9FTlYiLCJTRVJWRVJfVVJMIiwiY29uZmlnIiwiZ2V0IiwiU0VDUkVUIiwicmVxdWVzdCIsIm9wZXJhdGlvbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5IiwiZXJyb3JQb2xpY3kiLCJxdWVyeSIsImVycm9yTGluayIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RMaW5rIiwiQXBvbGxvTGluayIsImZvcndhcmQiLCJPYnNlcnZhYmxlIiwib2JzZXJ2ZXIiLCJoYW5kbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZXN1bHQiLCJzdWJzY3JpYmUiLCJuZXh0IiwiYmluZCIsImVycm9yIiwiY29tcGxldGUiLCJjYXRjaCIsInVuc3Vic2NyaWJlIiwidXBsb2FkTGluayIsImNyZWF0ZVVwbG9hZExpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiZnJvbSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJkYXRhIiwibWVyZ2UiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwidXNlTWVtbyIsImxpc3QiLCJuYW1lIiwibGFiZWwiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2FsdCIsInNlY3JldCIsInBvcnQiLCJrZXkiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwiaW5pdGlhbEFwb2xsb1N0YXRlIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidGhlbWUiLCJyb3V0ZSIsInBhZ2VJbml0aWFsIiwib3BhY2l0eSIsInBhZ2VBbmltYXRlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJvcHMiLCJnZXRTdGF0ZSIsInJldmFsaWRhdGUiLCJpbml0U3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlcnMiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiX3N0b3JlIiwidW5kZWZpbmVkIiwiZG9jdW1lbnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQyIsIlNFVF9ET0NVTUVOVFMiLCJwYXlsb2FkIiwiZG9jdW1lbnRzIiwiSElTVE9SWV9MSU1JVCIsImljb24iLCJjb2xvciIsInRpdGxlIiwiaGFsZiIsInNpZGUiLCJjb250ZW50IiwiaGlzdG9yeSIsImRyYXdlclJlZHVjZXIiLCJTRVRfRFJBV0VSIiwibGVuZ3RoIiwib3BlbiIsIlNFVF9CQUNLX0RSQVdFUiIsInNsaWNlIiwiY29tYmluZVJlZHVjZXJzIiwicm9vdCIsInJvb3RSZWR1Y2VyIiwidXNlciIsInVzZXJSZWR1Y2VyIiwiZHJhd2VyIiwic3RlcHBlciIsInN0ZXBwZXJSZWR1Y2VyIiwiZG9jdW1lbnRzUmVkdWNlciIsInNuYWNrcyIsInNuYWNrc1JlZHVjZXIiLCJtb2RhbCIsIm1vZGFsUmVkdWNlciIsInNpemUiLCJyb3V0ZXMiLCJTRVRfTU9EQUwiLCJtdXRhdGlvbiIsInNldHRpbmdzIiwiZ2VuZXJhbCIsImxvZ290eXBlIiwibWV0YSIsImRlc2NyaXB0aW9uIiwidmFyaWFibGVzIiwic2Nyb2xsVG9wIiwiY2FsbGJhY2siLCJtZW1iZXJzIiwic2NyZWVuc2hvdHMiLCJtZXNzYWdlcyIsImZpbGVzIiwiU0VUX01VVEFURSIsIlNFVF9TRVRUSU5HUyIsIlNFVF9NRU1CRVJTIiwiU0VUX1NDUkVFTlNIT1RTIiwiU0VUX0ZJTEVTIiwiU0VUX0ZPTERFUiIsImZvbGRlciIsIlNFVF9DSEFUIiwiY2hhdCIsIlNFVF9NRVNTQUdFUyIsIkFERF9NRU1CRVIiLCJtZW1iZXIiLCJBRERfU0NSRUVOU0hPVCIsInNjcmVlbnNob3QiLCJBRERfRklMRSIsImZpbGUiLCJSRU1PVkVfTUVNQkVSIiwiZmlsdGVyIiwiZW1haWwiLCJ2YWx1ZSIsIlJFTU9WRV9TQ1JFRU5TSE9UIiwiaWQiLCJSRU1PVkVfRklMRSIsIkNMRUFSX01FTUJFUlMiLCJDTEVBUl9TQ1JFRU5TSE9UUyIsIkNMRUFSX0ZJTEVTIiwiTElNSVQiLCJzbmFja1JlZHVjZXIiLCJTRVRfSVRFTSIsInY0IiwiaXRlbSIsIlJFTU9WRV9JVEVNIiwiQ0xFQVJfSVRFTVMiLCJTRVRfU1RFUFBFUiIsImFib3V0IiwiYWNjb3VudCIsInBob25lIiwicm9sZSIsImZvbGRlcnMiLCJwcm9qZWN0cyIsImFydGljbGVzIiwibGlrZWRQcm9qZWN0cyIsInVwZGF0ZWRBdCIsImNyZWF0ZWRBdCIsInJlZ2lzdGVyIiwiYXV0aGVudGljYXRlZCIsIlNFVF9VU0VSIiwiU0VUX0xPR09VVCIsIlNFVF9VU0VSX0ZPTERFUlMiLCJTRVRfVVNFUl9GT0xERVIiLCJtYXAiLCJVUERBVEVfVVNFUiIsIlNFVF9BVVRIX1VTRVIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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LFlBRkM7QUFHYkssZUFBYSxFQUFFLGVBSEY7QUFJYkosa0JBQWdCLEVBQUUsa0JBSkw7QUFLYkMsaUJBQWUsRUFBRSxpQkFMSjtBQU1iRSxhQUFXLEVBQUU7QUFOQSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5J1xuaW1wb3J0IHsgY3JlYXRlVXBsb2FkTGluayB9IGZyb20gJ2Fwb2xsby11cGxvYWQtY2xpZW50J1xuaW1wb3J0IHsgQXBvbGxvTGluaywgT2JzZXJ2YWJsZSB9IGZyb20gJ2Fwb2xsby1saW5rJ1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ2Fwb2xsby1saW5rLWVycm9yJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZydcblxuY29uc3QgU1NSID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcbmNvbnN0IE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuY29uc3QgU0VSVkVSX1VSTCA9IE5PREVfRU5WID8gY29uZmlnLmdldCgnc2VydmVyLWxvY2FsLXVybCcpIDogY29uZmlnLmdldCgnc2VydmVyLWhvc3QtdXJsJylcbmNvbnN0IFNFQ1JFVCA9IGNvbmZpZy5nZXQoJ3NlY3JldCcpXG5cbmNvbnN0IHJlcXVlc3QgPSBhc3luYyAob3BlcmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gIVNTUiAmJiAoYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oU0VDUkVUKSlcbiAgb3BlcmF0aW9uLnNldENvbnRleHQoe1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJ1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHdhdGNoUXVlcnk6IHtcbiAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICBlcnJvclBvbGljeTogJ2lnbm9yZSdcbiAgfSxcbiAgcXVlcnk6IHtcbiAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICBlcnJvclBvbGljeTogJ2FsbCdcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXJyb3JMaW5rID0gb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xuICBpZiAoZ3JhcGhRTEVycm9ycykge1xuICAgIGNvbnNvbGUubG9nKCdbZ3JhcGhRTEVycm9yc10nLCBncmFwaFFMRXJyb3JzKVxuICB9XG4gIGlmIChuZXR3b3JrRXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnW25ldHdvcmtFcnJvcl0nLCBuZXR3b3JrRXJyb3IpXG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0TGluayA9IG5ldyBBcG9sbG9MaW5rKFxuICAob3BlcmF0aW9uLCBmb3J3YXJkKSA9PlxuICAgIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGhhbmRsZVxuXG4gICAgICBQcm9taXNlLnJlc29sdmUob3BlcmF0aW9uKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXF1ZXN0KHJlc3VsdCkpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBoYW5kbGUgPSBmb3J3YXJkKG9wZXJhdGlvbikuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2ZXIuY29tcGxldGUuYmluZChvYnNlcnZlcilcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlcikpXG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChoYW5kbGUpIGhhbmRsZS51bnN1YnNjcmliZSgpXG4gICAgICB9XG4gICAgfSlcbilcblxuY29uc3QgdXBsb2FkTGluayA9IGNyZWF0ZVVwbG9hZExpbmsoe1xuICB1cmk6IGAke1NFUlZFUl9VUkx9L2dyYXBocWxgLFxuICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogU1NSLFxuICAgIGxpbms6IEFwb2xsb0xpbmsuZnJvbShbZXJyb3JMaW5rLCByZXF1ZXN0TGluaywgdXBsb2FkTGlua10pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICAgIGRlZmF1bHRPcHRpb25zXG4gIH0pXG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJ1xuXG5pbXBvcnQgY3JlYXRlQXBvbGxvQ2xpZW50IGZyb20gJy4vY2xpZW50J1xuXG5sZXQgYXBvbGxvQ2xpZW50XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwpIHtcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKVxuXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KClcbiAgICBjb25zdCBkYXRhID0gbWVyZ2UoaW5pdGlhbFN0YXRlLCBleGlzdGluZ0NhY2hlKVxuXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGRhdGEpXG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUpIHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcbn1cbiIsImV4cG9ydCBjb25zdCBsaXN0ID0gW1xuICB7XG4gICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgIGxhYmVsOiAn0KLQtdC80L3QsNGPJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2xpZ2h0JyxcbiAgICBsYWJlbDogJ9Ch0LLQtdGC0LvQsNGPJ1xuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyMwMDcwZjMnXG4gIH1cbn1cbiIsImNvbnN0IGNvbmZpZyA9IHtcbiAgc2FsdDogMTAsXG4gIHNlY3JldDogJ0JlYXJlcicsXG4gIHBvcnQ6IDMwMDAsXG4gICd2aWRlby1pZCc6ICdsVjZkT0ZlSHdxWScsXG4gICd1cGxvYWQtZGlyJzogJ3VwbG9hZHMnLFxuICAnaG9zdC11cmwnOiAnaHR0cDovL2F0b21pYy5ydS5jb20nLFxuICAnbG9jYWwtdXJsJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICdzZXJ2ZXItaG9zdC11cmwnOiAnaHR0cDovL2FwaS5hdG9taWMucnUuY29tJyxcbiAgJ3NlcnZlci1sb2NhbC11cmwnOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyxcbiAgJ21vbmdvLWRiLXVybCc6XG4gICAgJ21vbmdvZGIrc3J2Oi8vYWRtaW46eG5DWHl6VkFwTXBIbzZlZUBjbHVzdGVyMC55amF1ZS5tb25nb2RiLm5ldC9hcHA/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JyxcbiAgJ2dvb2dsZS1jbGllbnQtaWQnOiAnMTAwODMwMDMwNzY3MS1kdnY1bm84dWltZ2sybG9kcjc2bTlybm52YThnMGxpaS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXG4gICdnb29nbGUtY2xpZW50LXNlY3JldCc6ICc1ZnJFLW9KSUdtMDZLTFVqY3gzVmNMOXMnLFxuICAnZmFjZWJvb2stYXBwLWlkJzogMzE3NDQxODI5Njc4MjY4LFxuICAnZmFjZWJvb2stYXBwLXNlY3JldCc6ICczNjQ0ZjlkODdmNWExNjlkODE5NmJjMDcwYjRmYjE0NicsXG4gICd0aW55LWtleSc6ICc5dmR1emQxZWw3NGgyc2Y1YTU3NDRvM3Jud216bXRzaW8ydmJ5amxycWxpc3k1dTMnXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0OiAoa2V5KSA9PiBjb25maWdba2V5XVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcbmltcG9ydCBOZXh0TnByb2dyZXNzIGZyb20gJ25leHRqcy1wcm9ncmVzc2JhcidcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmltcG9ydCAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudC9zcmMvZWZmZWN0cy9vcGFjaXR5LmNzcydcbmltcG9ydCAnLi4vYXRvbWljLXVpL3RoZW1lL2RlZmF1bHQuY3NzJ1xuaW1wb3J0ICcuLi9hdG9taWMtdWkvYXNzZXRzL3N0eWxlcy9zdHlsZXMuY3NzJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2F0b21pYy11aS90aGVtZSdcblxuaW1wb3J0IHsgdXNlQXBvbGxvLCBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSAnLi4vYXBvbGxvJ1xuaW1wb3J0IHsgdXNlU3RvcmUsIGluaXRpYWxpemVTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAjbnByb2dyZXNzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogdmFyKC0tei1vdmVycmlkZSk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICAuc3Bpbm5lciwgLnNwaW5uZXItaWNvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMuaW5pdGlhbEFwb2xsb1N0YXRlKVxuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKHBhZ2VQcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD17J3V0Zi04J30gLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT17J3ZpZXdwb3J0J31cbiAgICAgICAgICAgIGNvbnRlbnQ9eydtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9eyd0aGVtZS1jb2xvcid9IGNvbnRlbnQ9eycjMDAwMDAwJ30gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPXsneWFuZGV4LXZlcmlmaWNhdGlvbid9IGNvbnRlbnQ9eydiZmQwNGI5NmQzMDM4MmY1J30gLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAga2V5PXtyb3V0ZXIucm91dGV9XG4gICAgICAgICAgICBpbml0aWFsPXsncGFnZUluaXRpYWwnfVxuICAgICAgICAgICAgYW5pbWF0ZT17J3BhZ2VBbmltYXRlJ31cbiAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgIHBhZ2VJbml0aWFsOiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwYWdlQW5pbWF0ZToge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgPE5leHROcHJvZ3Jlc3NcbiAgICAgICAgICAgIGNvbG9yPXsndmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpJ31cbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb249ezAuM31cbiAgICAgICAgICAgIHN0b3BEZWxheU1zPXsyMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gaW5pdGlhbGl6ZVN0b3JlKClcbiAgY29uc3QgY2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICBpbml0aWFsQXBvbGxvU3RhdGU6IGNsaWVudC5jYWNoZS5leHRyYWN0KClcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcblxubGV0IHN0b3JlXG5cbmZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IHt9KSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VycywgcHJlbG9hZGVkU3RhdGUsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpKVxufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpXG5cbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XG4gICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZVxuICAgIH0pXG4gICAgc3RvcmUgPSB1bmRlZmluZWRcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxuXG4gIHJldHVybiBfc3RvcmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxuICByZXR1cm4gc3RvcmVcbn1cbiIsImltcG9ydCBDIGZyb20gJy4uL3R5cGVzL2RvY3VtZW50cydcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gbnVsbFxuXG5leHBvcnQgY29uc3QgZG9jdW1lbnRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfRE9DVU1FTlRTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmRvY3VtZW50c1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudFJlZHVjZXJcbiIsImltcG9ydCBDIGZyb20gJy4uL3R5cGVzL2RyYXdlcidcblxuY29uc3QgSElTVE9SWV9MSU1JVCA9IDEwXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaWNvbjogJycsXG4gIGNvbG9yOiAnJyxcbiAgdGl0bGU6ICcnLFxuICBoYWxmOiBmYWxzZSxcbiAgc2lkZTogJ3JpZ2h0JyxcbiAgY29udGVudDogJycsXG4gIGhpc3Rvcnk6IFtdXG59XG5cbmV4cG9ydCBjb25zdCBkcmF3ZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfRFJBV0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWNvbjogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmljb24pID8/ICcnLFxuICAgICAgICBjb2xvcjogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmNvbG9yKSA/PyAnJyxcbiAgICAgICAgdGl0bGU6IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC50aXRsZSkgPz8gJycsXG4gICAgICAgIGhhbGY6IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5oYWxmKSA/PyBmYWxzZSxcbiAgICAgICAgc2lkZTogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLnNpZGUpID8/ICdyaWdodCcsXG4gICAgICAgIGNvbnRlbnQ6IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jb250ZW50KSA/PyAnJyxcbiAgICAgICAgaGlzdG9yeTpcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZCAmJiBzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA8IEhJU1RPUllfTElNSVRcbiAgICAgICAgICAgID8gWy4uLnN0YXRlLmhpc3RvcnksIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgICAgICAgOiBbYWN0aW9uLnBheWxvYWRdLFxuICAgICAgICBvcGVuOiAhIShhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jb250ZW50KVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfQkFDS19EUkFXRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZS5oaXN0b3J5W3N0YXRlLmhpc3RvcnkubGVuZ3RoIC0gMl0sXG4gICAgICAgIGhpc3Rvcnk6IHN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgc3RhdGUuaGlzdG9yeS5sZW5ndGggLSAxKSxcbiAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkcmF3ZXJSZWR1Y2VyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3QnXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi91c2VyJ1xuaW1wb3J0IGRyYXdlclJlZHVjZXIgZnJvbSAnLi9kcmF3ZXInXG5pbXBvcnQgc3RlcHBlclJlZHVjZXIgZnJvbSAnLi9zdGVwcGVyJ1xuaW1wb3J0IGRvY3VtZW50c1JlZHVjZXIgZnJvbSAnLi9kb2N1bWVudHMnXG5pbXBvcnQgc25hY2tzUmVkdWNlciBmcm9tICcuL3NuYWNrcydcbmltcG9ydCBtb2RhbFJlZHVjZXIgZnJvbSAnLi9tb2RhbCdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgcm9vdDogcm9vdFJlZHVjZXIsXG4gIHVzZXI6IHVzZXJSZWR1Y2VyLFxuICBkcmF3ZXI6IGRyYXdlclJlZHVjZXIsXG4gIHN0ZXBwZXI6IHN0ZXBwZXJSZWR1Y2VyLFxuICBkb2N1bWVudHM6IGRvY3VtZW50c1JlZHVjZXIsXG4gIHNuYWNrczogc25hY2tzUmVkdWNlcixcbiAgbW9kYWw6IG1vZGFsUmVkdWNlclxufSlcbiIsImltcG9ydCBDIGZyb20gJy4uL3R5cGVzL21vZGFsJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNpemU6ICdzJyxcbiAgcm91dGVzOiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBtb2RhbFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlczogYWN0aW9uLnBheWxvYWQucm91dGVzLFxuICAgICAgICBzaXplOiBhY3Rpb24ucGF5bG9hZC5zaXplXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsUmVkdWNlclxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBDIGZyb20gJy4uL3R5cGVzL3Jvb3QnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbXV0YXRpb246IG51bGwsXG4gIHNldHRpbmdzOiB7XG4gICAgZ2VuZXJhbDoge1xuICAgICAgbG9nb3R5cGU6ICcnIC8vIC9pbWFnZXMvbG9nby5wbmdcbiAgICB9LFxuICAgIG1ldGE6IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgIH1cbiAgfSxcbiAgdmFyaWFibGVzOiBudWxsLFxuICBzY3JvbGxUb3A6IDAsXG4gIGNhbGxiYWNrOiAoKSA9PiB7fSxcbiAgbWVtYmVyczogW10sXG4gIHNjcmVlbnNob3RzOiBbXSxcbiAgbWVzc2FnZXM6IFtdLFxuICBmaWxlczogW11cbn1cblxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfTVVUQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9TRVRUSU5HUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZXR0aW5nczogYWN0aW9uLnBheWxvYWQuc2V0dGluZ3NcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX01FTUJFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVtYmVyczogYWN0aW9uLnBheWxvYWQubWVtYmVycyB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfU0NSRUVOU0hPVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2NyZWVuc2hvdHM6IGFjdGlvbi5wYXlsb2FkLnNjcmVlbnNob3RzIHx8IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9GSUxFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxlczogYWN0aW9uLnBheWxvYWQuZmlsZXMgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0ZPTERFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmb2xkZXI6IGFjdGlvbi5wYXlsb2FkLmZvbGRlciB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfQ0hBVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjaGF0OiBhY3Rpb24ucGF5bG9hZC5jaGF0XG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9NRVNTQUdFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogYWN0aW9uLnBheWxvYWQubWVzc2FnZXNcbiAgICAgIH1cbiAgICBjYXNlIEMuQUREX01FTUJFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZW1iZXJzOiBbLi4uc3RhdGUubWVtYmVycywgYWN0aW9uLnBheWxvYWQubWVtYmVyXVxuICAgICAgfVxuICAgIGNhc2UgQy5BRERfU0NSRUVOU0hPVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzY3JlZW5zaG90czogWy4uLnN0YXRlLnNjcmVlbnNob3RzLCBhY3Rpb24ucGF5bG9hZC5zY3JlZW5zaG90XVxuICAgICAgfVxuICAgIGNhc2UgQy5BRERfRklMRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxlczogWy4uLnN0YXRlLmZpbGVzLCBhY3Rpb24ucGF5bG9hZC5maWxlXVxuICAgICAgfVxuICAgIGNhc2UgQy5SRU1PVkVfTUVNQkVSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbWJlcnM6IHN0YXRlLm1lbWJlcnMuZmlsdGVyKFxuICAgICAgICAgIChtZW1iZXIpID0+IChtZW1iZXIuZW1haWwgfHwgbWVtYmVyLnZhbHVlPy5lbWFpbCkgIT09IGFjdGlvbi5wYXlsb2FkLmVtYWlsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICBjYXNlIEMuUkVNT1ZFX1NDUkVFTlNIT1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2NyZWVuc2hvdHM6IHN0YXRlLnNjcmVlbnNob3RzLmZpbHRlcigoc2NyZWVuc2hvdCkgPT4gc2NyZWVuc2hvdC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICB9XG4gICAgY2FzZSBDLlJFTU9WRV9GSUxFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGVzOiBzdGF0ZS5maWxlcy5maWx0ZXIoKGZpbGUpID0+IGZpbGUuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgfVxuICAgIGNhc2UgQy5DTEVBUl9NRU1CRVJTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbWJlcnM6IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLkNMRUFSX1NDUkVFTlNIT1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNjcmVlbnNob3RzOiBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5DTEVBUl9GSUxFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxlczogW11cbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcbiIsImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCdcblxuaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvc25hY2tzJ1xuXG5jb25zdCBMSU1JVCA9IDEwXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXVxuXG5leHBvcnQgY29uc3Qgc25hY2tSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfSVRFTTpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuaXRlbVxuICAgICAgICB9XG4gICAgICBdLnNsaWNlKDAsIExJTUlUKVxuICAgIGNhc2UgQy5SRU1PVkVfSVRFTTpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCldXG4gICAgY2FzZSBDLkNMRUFSX0lURU1TOlxuICAgICAgcmV0dXJuIFtdXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNuYWNrUmVkdWNlclxuIiwiaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvc3RlcHBlcidcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBuYW1lOiAnJyxcbiAgY29udGVudDogbnVsbFxufVxuXG5leHBvcnQgY29uc3Qgc3RlcHBlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9TVEVQUEVSOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0ZXBwZXJSZWR1Y2VyXG4iLCJpbXBvcnQgQyBmcm9tICcuLi90eXBlcy91c2VyJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlkOiAwLFxuICBuYW1lOiAnJyxcbiAgYWJvdXQ6ICcnLFxuICBhY2NvdW50OiAnJyxcbiAgZW1haWw6ICcnLFxuICBwaG9uZTogJycsXG4gIHJvbGU6ICcnLFxuICBmb2xkZXJzOiBbXSxcbiAgcHJvamVjdHM6IFtdLFxuICBhcnRpY2xlczogW10sXG4gIGxpa2VkUHJvamVjdHM6IFtdLFxuICBzZXR0aW5nczogWycnXSxcbiAgdG9rZW46ICcnLFxuICB1cGRhdGVkQXQ6ICcnLFxuICBjcmVhdGVkQXQ6ICcnLFxuICByZWdpc3RlcjogZmFsc2UsXG4gIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfTE9HT1VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1VTRVJfRk9MREVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmb2xkZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfVVNFUl9GT0xERVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZm9sZGVyczogc3RhdGUuZm9sZGVycy5tYXAoKGZvbGRlcikgPT5cbiAgICAgICAgICBmb2xkZXIuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkID8gYWN0aW9uLnBheWxvYWQgOiBmb2xkZXJcbiAgICAgICAgKVxuICAgICAgfVxuICAgIGNhc2UgQy5VUERBVEVfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlclxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfRE9DVU1FTlRTOiAnU0VUX0RPQ1VNRU5UUydcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX0RSQVdFUjogJ1NFVF9EUkFXRVInLFxuICBTRVRfQkFDS19EUkFXRVI6ICdTRVRfQkFDS19EUkFXRVInXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9NT0RBTDogJ1NFVF9NT0RBTCdcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX01VVEFURTogJ1NFVF9NVVRBVEUnLFxuICBTRVRfU0VUVElOR1M6ICdTRVRfU0VUVElOR1MnLFxuICBTRVRfTUVNQkVSUzogJ1NFVF9NRU1CRVJTJyxcbiAgU0VUX1NDUkVFTlNIT1RTOiAnU0VUX1NDUkVFTlNIT1RTJyxcbiAgU0VUX0NIQVQ6ICdTRVRfQ0hBVCcsXG4gIFNFVF9NRVNTQUdFUzogJ1NFVF9NRVNTQUdFUycsXG4gIFNFVF9GSUxFUzogJ1NFVF9GSUxFUycsXG4gIFNFVF9GT0xERVI6ICdTRVRfRk9MREVSJyxcbiAgQUREX01FTUJFUjogJ0FERF9NRU1CRVInLFxuICBBRERfU0NSRUVOU0hPVDogJ0FERF9TQ1JFRU5TSE9UJyxcbiAgQUREX0ZJTEU6ICdBRERfRklMRScsXG4gIFJFTU9WRV9NRU1CRVI6ICdSRU1PVkVfTUVNQkVSJyxcbiAgUkVNT1ZFX1NDUkVFTlNIT1Q6ICdSRU1PVkVfU0NSRUVOU0hPVCcsXG4gIFJFTU9WRV9GSUxFOiAnUkVNT1ZFX0ZJTEUnLFxuICBDTEVBUl9NRU1CRVJTOiAnQ0xFQVJfTUVNQkVSUycsXG4gIENMRUFSX1NDUkVFTlNIT1RTOiAnQ0xFQVJfU0NSRUVOU0hPVFMnLFxuICBDTEVBUl9GSUxFUzogJ0NMRUFSX0ZJTEVTJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfSVRFTTogJ1NFVF9JVEVNJyxcbiAgUkVNT1ZFX0lURU06ICdSRU1PVkVfSVRFTScsXG4gIENMRUFSX0lURU1TOiAnQ0xFQVJfSVRFTVMnXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9TVEVQUEVSOiAnU0VUX1NURVBQRVInXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9VU0VSOiAnU0VUX1VTRVInLFxuICBTRVRfTE9HT1VUOiAnU0VUX0xPR09VVCcsXG4gIFNFVF9BVVRIX1VTRVI6ICdTRVRfQVVUSF9VU0VSJyxcbiAgU0VUX1VTRVJfRk9MREVSUzogJ1NFVF9VU0VSX0ZPTERFUlMnLFxuICBTRVRfVVNFUl9GT0xERVI6ICdTRVRfVVNFUl9GT0xERVInLFxuICBVUERBVEVfVVNFUjogJ1VQREFURV9VU0VSJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tbGluay1lcnJvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWVwbWVyZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dGpzLXByb2dyZXNzYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
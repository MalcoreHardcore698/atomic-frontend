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
  displayMethod: 'grid',
  visibleFilters: false,
  variables: null,
  scrollTop: 0,
  callback: () => {},
  members: [],
  companies: [],
  categories: [],
  statuses: [],
  screenshots: [],
  messages: [],
  search: '',
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

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_SEARCH:
      return { ...state,
        search: action.payload.search || ''
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_FOLDER:
      return { ...state,
        folder: action.payload.folder || []
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_COMPANIES:
      return { ...state,
        companies: action.payload.companies || []
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CATEGORIES:
      return { ...state,
        categories: action.payload.categories || []
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_STATUSES:
      return { ...state,
        statuses: action.payload.statuses || []
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CHAT:
      return { ...state,
        chat: action.payload.chat
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_MESSAGES:
      return { ...state,
        messages: action.payload.messages
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_DISPLAY_METHOD:
      return { ...state,
        displayMethod: action.payload.displayMethod
      };

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_VISIBLE_FILTERS:
      return { ...state,
        visibleFilters: action.payload.visibleFilters
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
  SET_SEARCH: 'SET_SEARCH',
  SET_MESSAGES: 'SET_MESSAGES',
  SET_FILES: 'SET_FILES',
  SET_FOLDER: 'SET_FOLDER',
  SET_COMPANIES: 'SET_COMPANIES',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_STATUSES: 'SET_STATUSES',
  SET_DISPLAY_METHOD: 'SET_DISPLAY_METHOD',
  SET_VISIBLE_FILTERS: 'SET_VISIBLE_FILTERS',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBvbGxvL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcG9sbG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXRvbWljLXVpL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2RvY3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9zbmFja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3R5cGVzL2RvY3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9zbmFja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy91c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1lcnJvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby11cGxvYWQtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVlcG1lcmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dGpzLXByb2dyZXNzYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiU1NSIiwiTk9ERV9FTlYiLCJTRVJWRVJfVVJMIiwiY29uZmlnIiwiZ2V0IiwiU0VDUkVUIiwicmVxdWVzdCIsIm9wZXJhdGlvbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5IiwiZXJyb3JQb2xpY3kiLCJxdWVyeSIsImVycm9yTGluayIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RMaW5rIiwiQXBvbGxvTGluayIsImZvcndhcmQiLCJPYnNlcnZhYmxlIiwib2JzZXJ2ZXIiLCJoYW5kbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZXN1bHQiLCJzdWJzY3JpYmUiLCJuZXh0IiwiYmluZCIsImVycm9yIiwiY29tcGxldGUiLCJjYXRjaCIsInVuc3Vic2NyaWJlIiwidXBsb2FkTGluayIsImNyZWF0ZVVwbG9hZExpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiZnJvbSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJkYXRhIiwibWVyZ2UiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwidXNlTWVtbyIsImxpc3QiLCJuYW1lIiwibGFiZWwiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2FsdCIsInNlY3JldCIsInBvcnQiLCJrZXkiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwiaW5pdGlhbEFwb2xsb1N0YXRlIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidGhlbWUiLCJyb3V0ZSIsInBhZ2VJbml0aWFsIiwib3BhY2l0eSIsInBhZ2VBbmltYXRlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJvcHMiLCJnZXRTdGF0ZSIsInJldmFsaWRhdGUiLCJpbml0U3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlcnMiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiX3N0b3JlIiwidW5kZWZpbmVkIiwiZG9jdW1lbnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQyIsIlNFVF9ET0NVTUVOVFMiLCJwYXlsb2FkIiwiZG9jdW1lbnRzIiwiSElTVE9SWV9MSU1JVCIsImljb24iLCJjb2xvciIsInRpdGxlIiwiaGFsZiIsInNpZGUiLCJjb250ZW50IiwiaGlzdG9yeSIsImRyYXdlclJlZHVjZXIiLCJTRVRfRFJBV0VSIiwibGVuZ3RoIiwib3BlbiIsIlNFVF9CQUNLX0RSQVdFUiIsInNsaWNlIiwiY29tYmluZVJlZHVjZXJzIiwicm9vdCIsInJvb3RSZWR1Y2VyIiwidXNlciIsInVzZXJSZWR1Y2VyIiwiZHJhd2VyIiwic3RlcHBlciIsInN0ZXBwZXJSZWR1Y2VyIiwiZG9jdW1lbnRzUmVkdWNlciIsInNuYWNrcyIsInNuYWNrc1JlZHVjZXIiLCJtb2RhbCIsIm1vZGFsUmVkdWNlciIsInNpemUiLCJyb3V0ZXMiLCJTRVRfTU9EQUwiLCJtdXRhdGlvbiIsInNldHRpbmdzIiwiZ2VuZXJhbCIsImxvZ290eXBlIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiZGlzcGxheU1ldGhvZCIsInZpc2libGVGaWx0ZXJzIiwidmFyaWFibGVzIiwic2Nyb2xsVG9wIiwiY2FsbGJhY2siLCJtZW1iZXJzIiwiY29tcGFuaWVzIiwiY2F0ZWdvcmllcyIsInN0YXR1c2VzIiwic2NyZWVuc2hvdHMiLCJtZXNzYWdlcyIsInNlYXJjaCIsImZpbGVzIiwiU0VUX01VVEFURSIsIlNFVF9TRVRUSU5HUyIsIlNFVF9NRU1CRVJTIiwiU0VUX1NDUkVFTlNIT1RTIiwiU0VUX0ZJTEVTIiwiU0VUX1NFQVJDSCIsIlNFVF9GT0xERVIiLCJmb2xkZXIiLCJTRVRfQ09NUEFOSUVTIiwiU0VUX0NBVEVHT1JJRVMiLCJTRVRfU1RBVFVTRVMiLCJTRVRfQ0hBVCIsImNoYXQiLCJTRVRfTUVTU0FHRVMiLCJTRVRfRElTUExBWV9NRVRIT0QiLCJTRVRfVklTSUJMRV9GSUxURVJTIiwiQUREX01FTUJFUiIsIm1lbWJlciIsIkFERF9TQ1JFRU5TSE9UIiwic2NyZWVuc2hvdCIsIkFERF9GSUxFIiwiZmlsZSIsIlJFTU9WRV9NRU1CRVIiLCJmaWx0ZXIiLCJlbWFpbCIsInZhbHVlIiwiUkVNT1ZFX1NDUkVFTlNIT1QiLCJpZCIsIlJFTU9WRV9GSUxFIiwiQ0xFQVJfTUVNQkVSUyIsIkNMRUFSX1NDUkVFTlNIT1RTIiwiQ0xFQVJfRklMRVMiLCJMSU1JVCIsInNuYWNrUmVkdWNlciIsIlNFVF9JVEVNIiwidjQiLCJpdGVtIiwiUkVNT1ZFX0lURU0iLCJDTEVBUl9JVEVNUyIsIlNFVF9TVEVQUEVSIiwiYWJvdXQiLCJhY2NvdW50IiwicGhvbmUiLCJyb2xlIiwiZm9sZGVycyIsInByb2plY3RzIiwiYXJ0aWNsZXMiLCJsaWtlZFByb2plY3RzIiwidXBkYXRlZEF0IiwiY3JlYXRlZEF0IiwicmVnaXN0ZXIiLCJhdXRoZW50aWNhdGVkIiwiU0VUX1VTRVIiLCJTRVRfTE9HT1VUIiwiU0VUX1VTRVJfRk9MREVSUyIsIlNFVF9VU0VSX0ZPTERFUiIsIm1hcCIsIlVQREFURV9VU0VSIiwiU0VUX0FVVEhfVVNFUiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7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YUFBVyxFQUFFLGFBcEJBO0FBcUJiQyxlQUFhLEVBQUUsZUFyQkY7QUFzQmJDLG1CQUFpQixFQUFFLG1CQXRCTjtBQXVCYkMsYUFBVyxFQUFFO0FBdkJBLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZTtBQUNiRyxVQUFRLEVBQUUsVUFERztBQUViRyxhQUFXLEVBQUUsYUFGQTtBQUdiQyxhQUFXLEVBQUU7QUFIQSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWU7QUFDYkMsYUFBVyxFQUFFO0FBREEsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFlO0FBQ2JhLFVBQVEsRUFBRSxVQURHO0FBRWJDLFlBQVUsRUFBRSxZQUZDO0FBR2JLLGVBQWEsRUFBRSxlQUhGO0FBSWJKLGtCQUFnQixFQUFFLGtCQUpMO0FBS2JDLGlCQUFlLEVBQUUsaUJBTEo7QUFNYkUsYUFBVyxFQUFFO0FBTkEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50J1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSdcbmltcG9ydCB7IGNyZWF0ZVVwbG9hZExpbmsgfSBmcm9tICdhcG9sbG8tdXBsb2FkLWNsaWVudCdcbmltcG9ydCB7IEFwb2xsb0xpbmssIE9ic2VydmFibGUgfSBmcm9tICdhcG9sbG8tbGluaydcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICdhcG9sbG8tbGluay1lcnJvcidcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnXG5cbmNvbnN0IFNTUiA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5jb25zdCBOT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbmNvbnN0IFNFUlZFUl9VUkwgPSBOT0RFX0VOViA/IGNvbmZpZy5nZXQoJ3NlcnZlci1sb2NhbC11cmwnKSA6IGNvbmZpZy5nZXQoJ3NlcnZlci1ob3N0LXVybCcpXG5jb25zdCBTRUNSRVQgPSBjb25maWcuZ2V0KCdzZWNyZXQnKVxuXG5jb25zdCByZXF1ZXN0ID0gYXN5bmMgKG9wZXJhdGlvbikgPT4ge1xuICBjb25zdCB0b2tlbiA9ICFTU1IgJiYgKGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNFQ1JFVCkpXG4gIG9wZXJhdGlvbi5zZXRDb250ZXh0KHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJydcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICB3YXRjaFF1ZXJ5OiB7XG4gICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgZXJyb3JQb2xpY3k6ICdpZ25vcmUnXG4gIH0sXG4gIHF1ZXJ5OiB7XG4gICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgZXJyb3JQb2xpY3k6ICdhbGwnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVycm9yTGluayA9IG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcbiAgaWYgKGdyYXBoUUxFcnJvcnMpIHtcbiAgICBjb25zb2xlLmxvZygnW2dyYXBoUUxFcnJvcnNdJywgZ3JhcGhRTEVycm9ycylcbiAgfVxuICBpZiAobmV0d29ya0Vycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ1tuZXR3b3JrRXJyb3JdJywgbmV0d29ya0Vycm9yKVxuICB9XG59KVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdExpbmsgPSBuZXcgQXBvbGxvTGluayhcbiAgKG9wZXJhdGlvbiwgZm9yd2FyZCkgPT5cbiAgICBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBoYW5kbGVcblxuICAgICAgUHJvbWlzZS5yZXNvbHZlKG9wZXJhdGlvbilcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVxdWVzdChyZXN1bHQpKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgaGFuZGxlID0gZm9yd2FyZChvcGVyYXRpb24pLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgZXJyb3I6IG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyLmNvbXBsZXRlLmJpbmQob2JzZXJ2ZXIpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpKVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoaGFuZGxlKSBoYW5kbGUudW5zdWJzY3JpYmUoKVxuICAgICAgfVxuICAgIH0pXG4pXG5cbmNvbnN0IHVwbG9hZExpbmsgPSBjcmVhdGVVcGxvYWRMaW5rKHtcbiAgdXJpOiBgJHtTRVJWRVJfVVJMfS9ncmFwaHFsYCxcbiAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IFNTUixcbiAgICBsaW5rOiBBcG9sbG9MaW5rLmZyb20oW2Vycm9yTGluaywgcmVxdWVzdExpbmssIHVwbG9hZExpbmtdKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgICBkZWZhdWx0T3B0aW9uc1xuICB9KVxufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcblxuaW1wb3J0IGNyZWF0ZUFwb2xsb0NsaWVudCBmcm9tICcuL2NsaWVudCdcblxubGV0IGFwb2xsb0NsaWVudFxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KClcblxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpXG4gICAgY29uc3QgZGF0YSA9IG1lcmdlKGluaXRpYWxTdGF0ZSwgZXhpc3RpbmdDYWNoZSlcblxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShkYXRhKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudFxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudFxuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG59XG4iLCJleHBvcnQgY29uc3QgbGlzdCA9IFtcbiAge1xuICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICBsYWJlbDogJ9Ci0LXQvNC90LDRjydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdsaWdodCcsXG4gICAgbGFiZWw6ICfQodCy0LXRgtC70LDRjydcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbG9yczoge1xuICAgIHByaW1hcnk6ICcjMDA3MGYzJ1xuICB9XG59XG4iLCJjb25zdCBjb25maWcgPSB7XG4gIHNhbHQ6IDEwLFxuICBzZWNyZXQ6ICdCZWFyZXInLFxuICBwb3J0OiAzMDAwLFxuICAndmlkZW8taWQnOiAnbFY2ZE9GZUh3cVknLFxuICAndXBsb2FkLWRpcic6ICd1cGxvYWRzJyxcbiAgJ2hvc3QtdXJsJzogJ2h0dHA6Ly9hdG9taWMucnUuY29tJyxcbiAgJ2xvY2FsLXVybCc6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAnc2VydmVyLWhvc3QtdXJsJzogJ2h0dHA6Ly9hcGkuYXRvbWljLnJ1LmNvbScsXG4gICdzZXJ2ZXItbG9jYWwtdXJsJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcsXG4gICdtb25nby1kYi11cmwnOlxuICAgICdtb25nb2RiK3NydjovL2FkbWluOnhuQ1h5elZBcE1wSG82ZWVAY2x1c3RlcjAueWphdWUubW9uZ29kYi5uZXQvYXBwP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScsXG4gICdnb29nbGUtY2xpZW50LWlkJzogJzEwMDgzMDAzMDc2NzEtZHZ2NW5vOHVpbWdrMmxvZHI3Nm05cm5udmE4ZzBsaWkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxuICAnZ29vZ2xlLWNsaWVudC1zZWNyZXQnOiAnNWZyRS1vSklHbTA2S0xVamN4M1ZjTDlzJyxcbiAgJ2ZhY2Vib29rLWFwcC1pZCc6IDMxNzQ0MTgyOTY3ODI2OCxcbiAgJ2ZhY2Vib29rLWFwcC1zZWNyZXQnOiAnMzY0NGY5ZDg3ZjVhMTY5ZDgxOTZiYzA3MGI0ZmIxNDYnLFxuICAndGlueS1rZXknOiAnOXZkdXpkMWVsNzRoMnNmNWE1NzQ0bzNybndtem10c2lvMnZieWpscnFsaXN5NXUzJ1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldDogKGtleSkgPT4gY29uZmlnW2tleV1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXG5pbXBvcnQgTmV4dE5wcm9ncmVzcyBmcm9tICduZXh0anMtcHJvZ3Jlc3NiYXInXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5pbXBvcnQgJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQvc3JjL2VmZmVjdHMvb3BhY2l0eS5jc3MnXG5pbXBvcnQgJy4uL2F0b21pYy11aS90aGVtZS9kZWZhdWx0LmNzcydcbmltcG9ydCAnLi4vYXRvbWljLXVpL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLmNzcydcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9hdG9taWMtdWkvdGhlbWUnXG5cbmltcG9ydCB7IHVzZUFwb2xsbywgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gJy4uL2Fwb2xsbydcbmltcG9ydCB7IHVzZVN0b3JlLCBpbml0aWFsaXplU3RvcmUgfSBmcm9tICcuLi9zdG9yZSdcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgI25wcm9ncmVzcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IHZhcigtLXotb3ZlcnJpZGUpO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgLnNwaW5uZXIsIC5zcGlubmVyLWljb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBjbGllbnQgPSB1c2VBcG9sbG8ocGFnZVByb3BzLmluaXRpYWxBcG9sbG9TdGF0ZSlcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZShwYWdlUHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9eyd1dGYtOCd9IC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9eyd2aWV3cG9ydCd9XG4gICAgICAgICAgICBjb250ZW50PXsnbWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aCd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPXsndGhlbWUtY29sb3InfSBjb250ZW50PXsnIzAwMDAwMCd9IC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT17J3lhbmRleC12ZXJpZmljYXRpb24nfSBjb250ZW50PXsnYmZkMDRiOTZkMzAzODJmNSd9IC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGtleT17cm91dGVyLnJvdXRlfVxuICAgICAgICAgICAgaW5pdGlhbD17J3BhZ2VJbml0aWFsJ31cbiAgICAgICAgICAgIGFuaW1hdGU9eydwYWdlQW5pbWF0ZSd9XG4gICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICBwYWdlSW5pdGlhbDoge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcGFnZUFuaW1hdGU6IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgIDxOZXh0TnByb2dyZXNzXG4gICAgICAgICAgICBjb2xvcj17J3ZhcigtLWRlZmF1bHQtY29sb3ItYWNjZW50KSd9XG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uPXswLjN9XG4gICAgICAgICAgICBzdG9wRGVsYXlNcz17MjAwfVxuICAgICAgICAgICAgaGVpZ2h0PXszfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGluaXRpYWxpemVTdG9yZSgpXG4gIGNvbnN0IGNsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgaW5pdGlhbEFwb2xsb1N0YXRlOiBjbGllbnQuY2FjaGUuZXh0cmFjdCgpXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcblxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnXG5cbmxldCBzdG9yZVxuXG5mdW5jdGlvbiBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUgPSB7fSkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHByZWxvYWRlZFN0YXRlLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKSlcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxuXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xuICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XG4gICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGVcbiAgICB9KVxuICAgIHN0b3JlID0gdW5kZWZpbmVkXG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcblxuICByZXR1cm4gX3N0b3JlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcbiAgcmV0dXJuIHN0b3JlXG59XG4iLCJpbXBvcnQgQyBmcm9tICcuLi90eXBlcy9kb2N1bWVudHMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IG51bGxcblxuZXhwb3J0IGNvbnN0IGRvY3VtZW50UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX0RPQ1VNRU5UUzpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5kb2N1bWVudHNcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9jdW1lbnRSZWR1Y2VyXG4iLCJpbXBvcnQgQyBmcm9tICcuLi90eXBlcy9kcmF3ZXInXG5cbmNvbnN0IEhJU1RPUllfTElNSVQgPSAxMFxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGljb246ICcnLFxuICBjb2xvcjogJycsXG4gIHRpdGxlOiAnJyxcbiAgaGFsZjogZmFsc2UsXG4gIHNpZGU6ICdyaWdodCcsXG4gIGNvbnRlbnQ6ICcnLFxuICBoaXN0b3J5OiBbXVxufVxuXG5leHBvcnQgY29uc3QgZHJhd2VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX0RSQVdFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGljb246IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5pY29uKSA/PyAnJyxcbiAgICAgICAgY29sb3I6IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jb2xvcikgPz8gJycsXG4gICAgICAgIHRpdGxlOiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQudGl0bGUpID8/ICcnLFxuICAgICAgICBoYWxmOiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuaGFsZikgPz8gZmFsc2UsXG4gICAgICAgIHNpZGU6IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5zaWRlKSA/PyAncmlnaHQnLFxuICAgICAgICBjb250ZW50OiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY29udGVudCkgPz8gJycsXG4gICAgICAgIGhpc3Rvcnk6XG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQgJiYgc3RhdGUuaGlzdG9yeS5sZW5ndGggPCBISVNUT1JZX0xJTUlUXG4gICAgICAgICAgICA/IFsuLi5zdGF0ZS5oaXN0b3J5LCBhY3Rpb24ucGF5bG9hZF1cbiAgICAgICAgICAgIDogW2FjdGlvbi5wYXlsb2FkXSxcbiAgICAgICAgb3BlbjogISEoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY29udGVudClcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0JBQ0tfRFJBV0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUuaGlzdG9yeVtzdGF0ZS5oaXN0b3J5Lmxlbmd0aCAtIDJdLFxuICAgICAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5LnNsaWNlKDAsIHN0YXRlLmhpc3RvcnkubGVuZ3RoIC0gMSksXG4gICAgICAgIG9wZW46IHRydWVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJhd2VyUmVkdWNlclxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290J1xuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlcidcbmltcG9ydCBkcmF3ZXJSZWR1Y2VyIGZyb20gJy4vZHJhd2VyJ1xuaW1wb3J0IHN0ZXBwZXJSZWR1Y2VyIGZyb20gJy4vc3RlcHBlcidcbmltcG9ydCBkb2N1bWVudHNSZWR1Y2VyIGZyb20gJy4vZG9jdW1lbnRzJ1xuaW1wb3J0IHNuYWNrc1JlZHVjZXIgZnJvbSAnLi9zbmFja3MnXG5pbXBvcnQgbW9kYWxSZWR1Y2VyIGZyb20gJy4vbW9kYWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHJvb3Q6IHJvb3RSZWR1Y2VyLFxuICB1c2VyOiB1c2VyUmVkdWNlcixcbiAgZHJhd2VyOiBkcmF3ZXJSZWR1Y2VyLFxuICBzdGVwcGVyOiBzdGVwcGVyUmVkdWNlcixcbiAgZG9jdW1lbnRzOiBkb2N1bWVudHNSZWR1Y2VyLFxuICBzbmFja3M6IHNuYWNrc1JlZHVjZXIsXG4gIG1vZGFsOiBtb2RhbFJlZHVjZXJcbn0pXG4iLCJpbXBvcnQgQyBmcm9tICcuLi90eXBlcy9tb2RhbCdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzaXplOiAncycsXG4gIHJvdXRlczogbnVsbFxufVxuXG5leHBvcnQgY29uc3QgbW9kYWxSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfTU9EQUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZXM6IGFjdGlvbi5wYXlsb2FkLnJvdXRlcyxcbiAgICAgICAgc2l6ZTogYWN0aW9uLnBheWxvYWQuc2l6ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb2RhbFJlZHVjZXJcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgQyBmcm9tICcuLi90eXBlcy9yb290J1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG11dGF0aW9uOiBudWxsLFxuICBzZXR0aW5nczoge1xuICAgIGdlbmVyYWw6IHtcbiAgICAgIGxvZ290eXBlOiAnJyAvLyAvaW1hZ2VzL2xvZ28ucG5nXG4gICAgfSxcbiAgICBtZXRhOiB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJydcbiAgICB9XG4gIH0sXG4gIGRpc3BsYXlNZXRob2Q6ICdncmlkJyxcbiAgdmlzaWJsZUZpbHRlcnM6IGZhbHNlLFxuICB2YXJpYWJsZXM6IG51bGwsXG4gIHNjcm9sbFRvcDogMCxcbiAgY2FsbGJhY2s6ICgpID0+IHt9LFxuICBtZW1iZXJzOiBbXSxcbiAgY29tcGFuaWVzOiBbXSxcbiAgY2F0ZWdvcmllczogW10sXG4gIHN0YXR1c2VzOiBbXSxcbiAgc2NyZWVuc2hvdHM6IFtdLFxuICBtZXNzYWdlczogW10sXG4gIHNlYXJjaDogJycsXG4gIGZpbGVzOiBbXVxufVxuXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9NVVRBVEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1NFVFRJTkdTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNldHRpbmdzOiBhY3Rpb24ucGF5bG9hZC5zZXR0aW5nc1xuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfTUVNQkVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZW1iZXJzOiBhY3Rpb24ucGF5bG9hZC5tZW1iZXJzIHx8IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9TQ1JFRU5TSE9UUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzY3JlZW5zaG90czogYWN0aW9uLnBheWxvYWQuc2NyZWVuc2hvdHMgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0ZJTEVTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGVzOiBhY3Rpb24ucGF5bG9hZC5maWxlcyB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfU0VBUkNIOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlYXJjaDogYWN0aW9uLnBheWxvYWQuc2VhcmNoIHx8ICcnXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9GT0xERVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZm9sZGVyOiBhY3Rpb24ucGF5bG9hZC5mb2xkZXIgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0NPTVBBTklFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wYW5pZXM6IGFjdGlvbi5wYXlsb2FkLmNvbXBhbmllcyB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfQ0FURUdPUklFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yaWVzIHx8IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9TVEFUVVNFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0dXNlczogYWN0aW9uLnBheWxvYWQuc3RhdHVzZXMgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0NIQVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2hhdDogYWN0aW9uLnBheWxvYWQuY2hhdFxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfTUVTU0FHRVM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2VzXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9ESVNQTEFZX01FVEhPRDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkaXNwbGF5TWV0aG9kOiBhY3Rpb24ucGF5bG9hZC5kaXNwbGF5TWV0aG9kXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9WSVNJQkxFX0ZJTFRFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZUZpbHRlcnM6IGFjdGlvbi5wYXlsb2FkLnZpc2libGVGaWx0ZXJzXG4gICAgICB9XG4gICAgY2FzZSBDLkFERF9NRU1CRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVtYmVyczogWy4uLnN0YXRlLm1lbWJlcnMsIGFjdGlvbi5wYXlsb2FkLm1lbWJlcl1cbiAgICAgIH1cbiAgICBjYXNlIEMuQUREX1NDUkVFTlNIT1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2NyZWVuc2hvdHM6IFsuLi5zdGF0ZS5zY3JlZW5zaG90cywgYWN0aW9uLnBheWxvYWQuc2NyZWVuc2hvdF1cbiAgICAgIH1cbiAgICBjYXNlIEMuQUREX0ZJTEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsZXM6IFsuLi5zdGF0ZS5maWxlcywgYWN0aW9uLnBheWxvYWQuZmlsZV1cbiAgICAgIH1cbiAgICBjYXNlIEMuUkVNT1ZFX01FTUJFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZW1iZXJzOiBzdGF0ZS5tZW1iZXJzLmZpbHRlcihcbiAgICAgICAgICAobWVtYmVyKSA9PiAobWVtYmVyLmVtYWlsIHx8IG1lbWJlci52YWx1ZT8uZW1haWwpICE9PSBhY3Rpb24ucGF5bG9hZC5lbWFpbFxuICAgICAgICApXG4gICAgICB9XG4gICAgY2FzZSBDLlJFTU9WRV9TQ1JFRU5TSE9UOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNjcmVlbnNob3RzOiBzdGF0ZS5zY3JlZW5zaG90cy5maWx0ZXIoKHNjcmVlbnNob3QpID0+IHNjcmVlbnNob3QuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgfVxuICAgIGNhc2UgQy5SRU1PVkVfRklMRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxlczogc3RhdGUuZmlsZXMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgIH1cbiAgICBjYXNlIEMuQ0xFQVJfTUVNQkVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZW1iZXJzOiBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5DTEVBUl9TQ1JFRU5TSE9UUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzY3JlZW5zaG90czogW11cbiAgICAgIH1cbiAgICBjYXNlIEMuQ0xFQVJfRklMRVM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsZXM6IFtdXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG4iLCJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbmltcG9ydCBDIGZyb20gJy4uL3R5cGVzL3NuYWNrcydcblxuY29uc3QgTElNSVQgPSAxMFxuY29uc3QgaW5pdGlhbFN0YXRlID0gW11cblxuZXhwb3J0IGNvbnN0IHNuYWNrUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX0lURU06XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiB2NCgpLFxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLml0ZW1cbiAgICAgICAgfVxuICAgICAgXS5zbGljZSgwLCBMSU1JVClcbiAgICBjYXNlIEMuUkVNT1ZFX0lURU06XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpXVxuICAgIGNhc2UgQy5DTEVBUl9JVEVNUzpcbiAgICAgIHJldHVybiBbXVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzbmFja1JlZHVjZXJcbiIsImltcG9ydCBDIGZyb20gJy4uL3R5cGVzL3N0ZXBwZXInXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbmFtZTogJycsXG4gIGNvbnRlbnQ6IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IHN0ZXBwZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfU1RFUFBFUjpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdGVwcGVyUmVkdWNlclxuIiwiaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvdXNlcidcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpZDogMCxcbiAgbmFtZTogJycsXG4gIGFib3V0OiAnJyxcbiAgYWNjb3VudDogJycsXG4gIGVtYWlsOiAnJyxcbiAgcGhvbmU6ICcnLFxuICByb2xlOiAnJyxcbiAgZm9sZGVyczogW10sXG4gIHByb2plY3RzOiBbXSxcbiAgYXJ0aWNsZXM6IFtdLFxuICBsaWtlZFByb2plY3RzOiBbXSxcbiAgc2V0dGluZ3M6IFsnJ10sXG4gIHRva2VuOiAnJyxcbiAgdXBkYXRlZEF0OiAnJyxcbiAgY3JlYXRlZEF0OiAnJyxcbiAgcmVnaXN0ZXI6IGZhbHNlLFxuICBhdXRoZW50aWNhdGVkOiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0xPR09VVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9VU0VSX0ZPTERFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZm9sZGVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1VTRVJfRk9MREVSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZvbGRlcnM6IHN0YXRlLmZvbGRlcnMubWFwKChmb2xkZXIpID0+XG4gICAgICAgICAgZm9sZGVyLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCA/IGFjdGlvbi5wYXlsb2FkIDogZm9sZGVyXG4gICAgICAgIClcbiAgICAgIH1cbiAgICBjYXNlIEMuVVBEQVRFX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXJcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX0RPQ1VNRU5UUzogJ1NFVF9ET0NVTUVOVFMnXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9EUkFXRVI6ICdTRVRfRFJBV0VSJyxcbiAgU0VUX0JBQ0tfRFJBV0VSOiAnU0VUX0JBQ0tfRFJBV0VSJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfTU9EQUw6ICdTRVRfTU9EQUwnXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9NVVRBVEU6ICdTRVRfTVVUQVRFJyxcbiAgU0VUX1NFVFRJTkdTOiAnU0VUX1NFVFRJTkdTJyxcbiAgU0VUX01FTUJFUlM6ICdTRVRfTUVNQkVSUycsXG4gIFNFVF9TQ1JFRU5TSE9UUzogJ1NFVF9TQ1JFRU5TSE9UUycsXG4gIFNFVF9DSEFUOiAnU0VUX0NIQVQnLFxuICBTRVRfU0VBUkNIOiAnU0VUX1NFQVJDSCcsXG4gIFNFVF9NRVNTQUdFUzogJ1NFVF9NRVNTQUdFUycsXG4gIFNFVF9GSUxFUzogJ1NFVF9GSUxFUycsXG4gIFNFVF9GT0xERVI6ICdTRVRfRk9MREVSJyxcbiAgU0VUX0NPTVBBTklFUzogJ1NFVF9DT01QQU5JRVMnLFxuICBTRVRfQ0FURUdPUklFUzogJ1NFVF9DQVRFR09SSUVTJyxcbiAgU0VUX1NUQVRVU0VTOiAnU0VUX1NUQVRVU0VTJyxcbiAgU0VUX0RJU1BMQVlfTUVUSE9EOiAnU0VUX0RJU1BMQVlfTUVUSE9EJyxcbiAgU0VUX1ZJU0lCTEVfRklMVEVSUzogJ1NFVF9WSVNJQkxFX0ZJTFRFUlMnLFxuICBBRERfTUVNQkVSOiAnQUREX01FTUJFUicsXG4gIEFERF9TQ1JFRU5TSE9UOiAnQUREX1NDUkVFTlNIT1QnLFxuICBBRERfRklMRTogJ0FERF9GSUxFJyxcbiAgUkVNT1ZFX01FTUJFUjogJ1JFTU9WRV9NRU1CRVInLFxuICBSRU1PVkVfU0NSRUVOU0hPVDogJ1JFTU9WRV9TQ1JFRU5TSE9UJyxcbiAgUkVNT1ZFX0ZJTEU6ICdSRU1PVkVfRklMRScsXG4gIENMRUFSX01FTUJFUlM6ICdDTEVBUl9NRU1CRVJTJyxcbiAgQ0xFQVJfU0NSRUVOU0hPVFM6ICdDTEVBUl9TQ1JFRU5TSE9UUycsXG4gIENMRUFSX0ZJTEVTOiAnQ0xFQVJfRklMRVMnXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9JVEVNOiAnU0VUX0lURU0nLFxuICBSRU1PVkVfSVRFTTogJ1JFTU9WRV9JVEVNJyxcbiAgQ0xFQVJfSVRFTVM6ICdDTEVBUl9JVEVNUydcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX1NURVBQRVI6ICdTRVRfU1RFUFBFUidcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX1VTRVI6ICdTRVRfVVNFUicsXG4gIFNFVF9MT0dPVVQ6ICdTRVRfTE9HT1VUJyxcbiAgU0VUX0FVVEhfVVNFUjogJ1NFVF9BVVRIX1VTRVInLFxuICBTRVRfVVNFUl9GT0xERVJTOiAnU0VUX1VTRVJfRk9MREVSUycsXG4gIFNFVF9VU0VSX0ZPTERFUjogJ1NFVF9VU0VSX0ZPTERFUicsXG4gIFVQREFURV9VU0VSOiAnVVBEQVRFX1VTRVInXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1saW5rLWVycm9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby11cGxvYWQtY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlZXBtZXJnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
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
  'host-url': 'https://atomic.ru.com',
  'local-url': 'http://localhost:3000',
  'server-host-url': 'https://api.atomic.ru.com',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBvbGxvL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcG9sbG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXRvbWljLXVpL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2RvY3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9zbmFja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3R5cGVzL2RvY3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9zbmFja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy91c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1lcnJvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby11cGxvYWQtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVlcG1lcmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dGpzLXByb2dyZXNzYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiU1NSIiwiTk9ERV9FTlYiLCJTRVJWRVJfVVJMIiwiY29uZmlnIiwiZ2V0IiwiU0VDUkVUIiwicmVxdWVzdCIsIm9wZXJhdGlvbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5IiwiZXJyb3JQb2xpY3kiLCJxdWVyeSIsImVycm9yTGluayIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RMaW5rIiwiQXBvbGxvTGluayIsImZvcndhcmQiLCJPYnNlcnZhYmxlIiwib2JzZXJ2ZXIiLCJoYW5kbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZXN1bHQiLCJzdWJzY3JpYmUiLCJuZXh0IiwiYmluZCIsImVycm9yIiwiY29tcGxldGUiLCJjYXRjaCIsInVuc3Vic2NyaWJlIiwidXBsb2FkTGluayIsImNyZWF0ZVVwbG9hZExpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiZnJvbSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJkYXRhIiwibWVyZ2UiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwidXNlTWVtbyIsImxpc3QiLCJuYW1lIiwibGFiZWwiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2FsdCIsInNlY3JldCIsInBvcnQiLCJrZXkiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwiaW5pdGlhbEFwb2xsb1N0YXRlIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidGhlbWUiLCJyb3V0ZSIsInBhZ2VJbml0aWFsIiwib3BhY2l0eSIsInBhZ2VBbmltYXRlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJvcHMiLCJnZXRTdGF0ZSIsInJldmFsaWRhdGUiLCJpbml0U3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlcnMiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiX3N0b3JlIiwidW5kZWZpbmVkIiwiZG9jdW1lbnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQyIsIlNFVF9ET0NVTUVOVFMiLCJwYXlsb2FkIiwiZG9jdW1lbnRzIiwiSElTVE9SWV9MSU1JVCIsImljb24iLCJjb2xvciIsInRpdGxlIiwiaGFsZiIsInNpZGUiLCJjb250ZW50IiwiaGlzdG9yeSIsImRyYXdlclJlZHVjZXIiLCJTRVRfRFJBV0VSIiwibGVuZ3RoIiwib3BlbiIsIlNFVF9CQUNLX0RSQVdFUiIsInNsaWNlIiwiY29tYmluZVJlZHVjZXJzIiwicm9vdCIsInJvb3RSZWR1Y2VyIiwidXNlciIsInVzZXJSZWR1Y2VyIiwiZHJhd2VyIiwic3RlcHBlciIsInN0ZXBwZXJSZWR1Y2VyIiwiZG9jdW1lbnRzUmVkdWNlciIsInNuYWNrcyIsInNuYWNrc1JlZHVjZXIiLCJtb2RhbCIsIm1vZGFsUmVkdWNlciIsInNpemUiLCJyb3V0ZXMiLCJTRVRfTU9EQUwiLCJtdXRhdGlvbiIsInNldHRpbmdzIiwiZ2VuZXJhbCIsImxvZ290eXBlIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiZGlzcGxheU1ldGhvZCIsInZpc2libGVGaWx0ZXJzIiwidmFyaWFibGVzIiwic2Nyb2xsVG9wIiwiY2FsbGJhY2siLCJtZW1iZXJzIiwiY29tcGFuaWVzIiwiY2F0ZWdvcmllcyIsInN0YXR1c2VzIiwic2NyZWVuc2hvdHMiLCJtZXNzYWdlcyIsInNlYXJjaCIsImZpbGVzIiwiU0VUX01VVEFURSIsIlNFVF9TRVRUSU5HUyIsIlNFVF9NRU1CRVJTIiwiU0VUX1NDUkVFTlNIT1RTIiwiU0VUX0ZJTEVTIiwiU0VUX1NFQVJDSCIsIlNFVF9GT0xERVIiLCJmb2xkZXIiLCJTRVRfQ09NUEFOSUVTIiwiU0VUX0NBVEVHT1JJRVMiLCJTRVRfU1RBVFVTRVMiLCJTRVRfQ0hBVCIsImNoYXQiLCJTRVRfTUVTU0FHRVMiLCJTRVRfRElTUExBWV9NRVRIT0QiLCJTRVRfVklTSUJMRV9GSUxURVJTIiwiQUREX01FTUJFUiIsIm1lbWJlciIsIkFERF9TQ1JFRU5TSE9UIiwic2NyZWVuc2hvdCIsIkFERF9GSUxFIiwiZmlsZSIsIlJFTU9WRV9NRU1CRVIiLCJmaWx0ZXIiLCJlbWFpbCIsInZhbHVlIiwiUkVNT1ZFX1NDUkVFTlNIT1QiLCJpZCIsIlJFTU9WRV9GSUxFIiwiQ0xFQVJfTUVNQkVSUyIsIkNMRUFSX1NDUkVFTlNIT1RTIiwiQ0xFQVJfRklMRVMiLCJMSU1JVCIsInNuYWNrUmVkdWNlciIsIlNFVF9JVEVNIiwidjQiLCJpdGVtIiwiUkVNT1ZFX0lURU0iLCJDTEVBUl9JVEVNUyIsIlNFVF9TVEVQUEVSIiwiYWJvdXQiLCJhY2NvdW50IiwicGhvbmUiLCJyb2xlIiwiZm9sZGVycyIsInByb2plY3RzIiwiYXJ0aWNsZXMiLCJsaWtlZFByb2plY3RzIiwidXBkYXRlZEF0IiwiY3JlYXRlZEF0IiwicmVnaXN0ZXIiLCJhdXRoZW50aWNhdGVkIiwiU0VUX1VTRVIiLCJTRVRfTE9HT1VUIiwiU0VUX1VTRVJfRk9MREVSUyIsIlNFVF9VU0VSX0ZPTERFUiIsIm1hcCIsIlVQREFURV9VU0VSIiwiU0VUX0FVVEhfVVNFUiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7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YUFBVyxFQUFFLGFBcEJBO0FBcUJiQyxlQUFhLEVBQUUsZUFyQkY7QUFzQmJDLG1CQUFpQixFQUFFLG1CQXRCTjtBQXVCYkMsYUFBVyxFQUFFO0FBdkJBLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZTtBQUNiRyxVQUFRLEVBQUUsVUFERztBQUViRyxhQUFXLEVBQUUsYUFGQTtBQUdiQyxhQUFXLEVBQUU7QUFIQSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWU7QUFDYkMsYUFBVyxFQUFFO0FBREEsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFlO0FBQ2JhLFVBQVEsRUFBRSxVQURHO0FBRWJDLFlBQVUsRUFBRSxZQUZDO0FBR2JLLGVBQWEsRUFBRSxlQUhGO0FBSWJKLGtCQUFnQixFQUFFLGtCQUpMO0FBS2JDLGlCQUFlLEVBQUUsaUJBTEo7QUFNYkUsYUFBVyxFQUFFO0FBTkEsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50J1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSdcbmltcG9ydCB7IGNyZWF0ZVVwbG9hZExpbmsgfSBmcm9tICdhcG9sbG8tdXBsb2FkLWNsaWVudCdcbmltcG9ydCB7IEFwb2xsb0xpbmssIE9ic2VydmFibGUgfSBmcm9tICdhcG9sbG8tbGluaydcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tICdhcG9sbG8tbGluay1lcnJvcidcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnXG5cbmNvbnN0IFNTUiA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5jb25zdCBOT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbmNvbnN0IFNFUlZFUl9VUkwgPSBOT0RFX0VOViA/IGNvbmZpZy5nZXQoJ3NlcnZlci1sb2NhbC11cmwnKSA6IGNvbmZpZy5nZXQoJ3NlcnZlci1ob3N0LXVybCcpXG5jb25zdCBTRUNSRVQgPSBjb25maWcuZ2V0KCdzZWNyZXQnKVxuXG5jb25zdCByZXF1ZXN0ID0gYXN5bmMgKG9wZXJhdGlvbikgPT4ge1xuICBjb25zdCB0b2tlbiA9ICFTU1IgJiYgKGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNFQ1JFVCkpXG4gIG9wZXJhdGlvbi5zZXRDb250ZXh0KHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJydcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICB3YXRjaFF1ZXJ5OiB7XG4gICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgZXJyb3JQb2xpY3k6ICdpZ25vcmUnXG4gIH0sXG4gIHF1ZXJ5OiB7XG4gICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgZXJyb3JQb2xpY3k6ICdhbGwnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVycm9yTGluayA9IG9uRXJyb3IoKHsgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yIH0pID0+IHtcbiAgaWYgKGdyYXBoUUxFcnJvcnMpIHtcbiAgICBjb25zb2xlLmxvZygnW2dyYXBoUUxFcnJvcnNdJywgZ3JhcGhRTEVycm9ycylcbiAgfVxuICBpZiAobmV0d29ya0Vycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ1tuZXR3b3JrRXJyb3JdJywgbmV0d29ya0Vycm9yKVxuICB9XG59KVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdExpbmsgPSBuZXcgQXBvbGxvTGluayhcbiAgKG9wZXJhdGlvbiwgZm9yd2FyZCkgPT5cbiAgICBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIGxldCBoYW5kbGVcblxuICAgICAgUHJvbWlzZS5yZXNvbHZlKG9wZXJhdGlvbilcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVxdWVzdChyZXN1bHQpKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgaGFuZGxlID0gZm9yd2FyZChvcGVyYXRpb24pLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgZXJyb3I6IG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyLmNvbXBsZXRlLmJpbmQob2JzZXJ2ZXIpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIpKVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoaGFuZGxlKSBoYW5kbGUudW5zdWJzY3JpYmUoKVxuICAgICAgfVxuICAgIH0pXG4pXG5cbmNvbnN0IHVwbG9hZExpbmsgPSBjcmVhdGVVcGxvYWRMaW5rKHtcbiAgdXJpOiBgJHtTRVJWRVJfVVJMfS9ncmFwaHFsYCxcbiAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IFNTUixcbiAgICBsaW5rOiBBcG9sbG9MaW5rLmZyb20oW2Vycm9yTGluaywgcmVxdWVzdExpbmssIHVwbG9hZExpbmtdKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgICBkZWZhdWx0T3B0aW9uc1xuICB9KVxufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcblxuaW1wb3J0IGNyZWF0ZUFwb2xsb0NsaWVudCBmcm9tICcuL2NsaWVudCdcblxubGV0IGFwb2xsb0NsaWVudFxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KClcblxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpXG4gICAgY29uc3QgZGF0YSA9IG1lcmdlKGluaXRpYWxTdGF0ZSwgZXhpc3RpbmdDYWNoZSlcblxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShkYXRhKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudFxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudFxuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8oaW5pdGlhbFN0YXRlKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG59XG4iLCJleHBvcnQgY29uc3QgbGlzdCA9IFtcbiAge1xuICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICBsYWJlbDogJ9Ci0LXQvNC90LDRjydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdsaWdodCcsXG4gICAgbGFiZWw6ICfQodCy0LXRgtC70LDRjydcbiAgfVxuXVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbG9yczoge1xuICAgIHByaW1hcnk6ICcjMDA3MGYzJ1xuICB9XG59XG4iLCJjb25zdCBjb25maWcgPSB7XG4gIHNhbHQ6IDEwLFxuICBzZWNyZXQ6ICdCZWFyZXInLFxuICBwb3J0OiAzMDAwLFxuICAndmlkZW8taWQnOiAnbFY2ZE9GZUh3cVknLFxuICAndXBsb2FkLWRpcic6ICd1cGxvYWRzJyxcbiAgJ2hvc3QtdXJsJzogJ2h0dHBzOi8vYXRvbWljLnJ1LmNvbScsXG4gICdsb2NhbC11cmwnOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgJ3NlcnZlci1ob3N0LXVybCc6ICdodHRwczovL2FwaS5hdG9taWMucnUuY29tJyxcbiAgJ3NlcnZlci1sb2NhbC11cmwnOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJyxcbiAgJ21vbmdvLWRiLXVybCc6XG4gICAgJ21vbmdvZGIrc3J2Oi8vYWRtaW46eG5DWHl6VkFwTXBIbzZlZUBjbHVzdGVyMC55amF1ZS5tb25nb2RiLm5ldC9hcHA/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JyxcbiAgJ2dvb2dsZS1jbGllbnQtaWQnOiAnMTAwODMwMDMwNzY3MS1kdnY1bm84dWltZ2sybG9kcjc2bTlybm52YThnMGxpaS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXG4gICdnb29nbGUtY2xpZW50LXNlY3JldCc6ICc1ZnJFLW9KSUdtMDZLTFVqY3gzVmNMOXMnLFxuICAnZmFjZWJvb2stYXBwLWlkJzogMzE3NDQxODI5Njc4MjY4LFxuICAnZmFjZWJvb2stYXBwLXNlY3JldCc6ICczNjQ0ZjlkODdmNWExNjlkODE5NmJjMDcwYjRmYjE0NicsXG4gICd0aW55LWtleSc6ICc5dmR1emQxZWw3NGgyc2Y1YTU3NDRvM3Jud216bXRzaW8ydmJ5amxycWxpc3k1dTMnXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0OiAoa2V5KSA9PiBjb25maWdba2V5XVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcbmltcG9ydCBOZXh0TnByb2dyZXNzIGZyb20gJ25leHRqcy1wcm9ncmVzc2JhcidcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmltcG9ydCAncmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudC9zcmMvZWZmZWN0cy9vcGFjaXR5LmNzcydcbmltcG9ydCAnLi4vYXRvbWljLXVpL3RoZW1lL2RlZmF1bHQuY3NzJ1xuaW1wb3J0ICcuLi9hdG9taWMtdWkvYXNzZXRzL3N0eWxlcy9zdHlsZXMuY3NzJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2F0b21pYy11aS90aGVtZSdcblxuaW1wb3J0IHsgdXNlQXBvbGxvLCBpbml0aWFsaXplQXBvbGxvIH0gZnJvbSAnLi4vYXBvbGxvJ1xuaW1wb3J0IHsgdXNlU3RvcmUsIGluaXRpYWxpemVTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAjbnByb2dyZXNzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogdmFyKC0tei1vdmVycmlkZSk7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICAuc3Bpbm5lciwgLnNwaW5uZXItaWNvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMuaW5pdGlhbEFwb2xsb1N0YXRlKVxuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKHBhZ2VQcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSlcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD17J3V0Zi04J30gLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT17J3ZpZXdwb3J0J31cbiAgICAgICAgICAgIGNvbnRlbnQ9eydtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9eyd0aGVtZS1jb2xvcid9IGNvbnRlbnQ9eycjMDAwMDAwJ30gLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPXsneWFuZGV4LXZlcmlmaWNhdGlvbid9IGNvbnRlbnQ9eydiZmQwNGI5NmQzMDM4MmY1J30gLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAga2V5PXtyb3V0ZXIucm91dGV9XG4gICAgICAgICAgICBpbml0aWFsPXsncGFnZUluaXRpYWwnfVxuICAgICAgICAgICAgYW5pbWF0ZT17J3BhZ2VBbmltYXRlJ31cbiAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgIHBhZ2VJbml0aWFsOiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwYWdlQW5pbWF0ZToge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgPE5leHROcHJvZ3Jlc3NcbiAgICAgICAgICAgIGNvbG9yPXsndmFyKC0tZGVmYXVsdC1jb2xvci1hY2NlbnQpJ31cbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb249ezAuM31cbiAgICAgICAgICAgIHN0b3BEZWxheU1zPXsyMDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gaW5pdGlhbGl6ZVN0b3JlKClcbiAgY29uc3QgY2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICBpbml0aWFsQXBvbGxvU3RhdGU6IGNsaWVudC5jYWNoZS5leHRyYWN0KClcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJ1xuXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2VycydcblxubGV0IHN0b3JlXG5cbmZ1bmN0aW9uIGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSA9IHt9KSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VycywgcHJlbG9hZGVkU3RhdGUsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpKVxufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpXG5cbiAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XG4gICAgX3N0b3JlID0gaW5pdFN0b3JlKHtcbiAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAuLi5wcmVsb2FkZWRTdGF0ZVxuICAgIH0pXG4gICAgc3RvcmUgPSB1bmRlZmluZWRcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxuICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxuXG4gIHJldHVybiBfc3RvcmVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxuICByZXR1cm4gc3RvcmVcbn1cbiIsImltcG9ydCBDIGZyb20gJy4uL3R5cGVzL2RvY3VtZW50cydcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gbnVsbFxuXG5leHBvcnQgY29uc3QgZG9jdW1lbnRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfRE9DVU1FTlRTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmRvY3VtZW50c1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb2N1bWVudFJlZHVjZXJcbiIsImltcG9ydCBDIGZyb20gJy4uL3R5cGVzL2RyYXdlcidcblxuY29uc3QgSElTVE9SWV9MSU1JVCA9IDEwXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaWNvbjogJycsXG4gIGNvbG9yOiAnJyxcbiAgdGl0bGU6ICcnLFxuICBoYWxmOiBmYWxzZSxcbiAgc2lkZTogJ3JpZ2h0JyxcbiAgY29udGVudDogJycsXG4gIGhpc3Rvcnk6IFtdXG59XG5cbmV4cG9ydCBjb25zdCBkcmF3ZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfRFJBV0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWNvbjogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmljb24pID8/ICcnLFxuICAgICAgICBjb2xvcjogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmNvbG9yKSA/PyAnJyxcbiAgICAgICAgdGl0bGU6IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC50aXRsZSkgPz8gJycsXG4gICAgICAgIGhhbGY6IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5oYWxmKSA/PyBmYWxzZSxcbiAgICAgICAgc2lkZTogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLnNpZGUpID8/ICdyaWdodCcsXG4gICAgICAgIGNvbnRlbnQ6IChhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jb250ZW50KSA/PyAnJyxcbiAgICAgICAgaGlzdG9yeTpcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZCAmJiBzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA8IEhJU1RPUllfTElNSVRcbiAgICAgICAgICAgID8gWy4uLnN0YXRlLmhpc3RvcnksIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgICAgICAgOiBbYWN0aW9uLnBheWxvYWRdLFxuICAgICAgICBvcGVuOiAhIShhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jb250ZW50KVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfQkFDS19EUkFXRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZS5oaXN0b3J5W3N0YXRlLmhpc3RvcnkubGVuZ3RoIC0gMl0sXG4gICAgICAgIGhpc3Rvcnk6IHN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgc3RhdGUuaGlzdG9yeS5sZW5ndGggLSAxKSxcbiAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkcmF3ZXJSZWR1Y2VyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3QnXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSAnLi91c2VyJ1xuaW1wb3J0IGRyYXdlclJlZHVjZXIgZnJvbSAnLi9kcmF3ZXInXG5pbXBvcnQgc3RlcHBlclJlZHVjZXIgZnJvbSAnLi9zdGVwcGVyJ1xuaW1wb3J0IGRvY3VtZW50c1JlZHVjZXIgZnJvbSAnLi9kb2N1bWVudHMnXG5pbXBvcnQgc25hY2tzUmVkdWNlciBmcm9tICcuL3NuYWNrcydcbmltcG9ydCBtb2RhbFJlZHVjZXIgZnJvbSAnLi9tb2RhbCdcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgcm9vdDogcm9vdFJlZHVjZXIsXG4gIHVzZXI6IHVzZXJSZWR1Y2VyLFxuICBkcmF3ZXI6IGRyYXdlclJlZHVjZXIsXG4gIHN0ZXBwZXI6IHN0ZXBwZXJSZWR1Y2VyLFxuICBkb2N1bWVudHM6IGRvY3VtZW50c1JlZHVjZXIsXG4gIHNuYWNrczogc25hY2tzUmVkdWNlcixcbiAgbW9kYWw6IG1vZGFsUmVkdWNlclxufSlcbiIsImltcG9ydCBDIGZyb20gJy4uL3R5cGVzL21vZGFsJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNpemU6ICdzJyxcbiAgcm91dGVzOiBudWxsXG59XG5cbmV4cG9ydCBjb25zdCBtb2RhbFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlczogYWN0aW9uLnBheWxvYWQucm91dGVzLFxuICAgICAgICBzaXplOiBhY3Rpb24ucGF5bG9hZC5zaXplXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsUmVkdWNlclxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBDIGZyb20gJy4uL3R5cGVzL3Jvb3QnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbXV0YXRpb246IG51bGwsXG4gIHNldHRpbmdzOiB7XG4gICAgZ2VuZXJhbDoge1xuICAgICAgbG9nb3R5cGU6ICcnIC8vIC9pbWFnZXMvbG9nby5wbmdcbiAgICB9LFxuICAgIG1ldGE6IHtcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgIH1cbiAgfSxcbiAgZGlzcGxheU1ldGhvZDogJ2dyaWQnLFxuICB2aXNpYmxlRmlsdGVyczogZmFsc2UsXG4gIHZhcmlhYmxlczogbnVsbCxcbiAgc2Nyb2xsVG9wOiAwLFxuICBjYWxsYmFjazogKCkgPT4ge30sXG4gIG1lbWJlcnM6IFtdLFxuICBjb21wYW5pZXM6IFtdLFxuICBjYXRlZ29yaWVzOiBbXSxcbiAgc3RhdHVzZXM6IFtdLFxuICBzY3JlZW5zaG90czogW10sXG4gIG1lc3NhZ2VzOiBbXSxcbiAgc2VhcmNoOiAnJyxcbiAgZmlsZXM6IFtdXG59XG5cbmV4cG9ydCBjb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX01VVEFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfU0VUVElOR1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2V0dGluZ3M6IGFjdGlvbi5wYXlsb2FkLnNldHRpbmdzXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9NRU1CRVJTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbWJlcnM6IGFjdGlvbi5wYXlsb2FkLm1lbWJlcnMgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1NDUkVFTlNIT1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNjcmVlbnNob3RzOiBhY3Rpb24ucGF5bG9hZC5zY3JlZW5zaG90cyB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfRklMRVM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsZXM6IGFjdGlvbi5wYXlsb2FkLmZpbGVzIHx8IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9TRUFSQ0g6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoOiBhY3Rpb24ucGF5bG9hZC5zZWFyY2ggfHwgJydcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0ZPTERFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmb2xkZXI6IGFjdGlvbi5wYXlsb2FkLmZvbGRlciB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfQ09NUEFOSUVTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBhbmllczogYWN0aW9uLnBheWxvYWQuY29tcGFuaWVzIHx8IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9DQVRFR09SSUVTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5wYXlsb2FkLmNhdGVnb3JpZXMgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1NUQVRVU0VTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHN0YXR1c2VzOiBhY3Rpb24ucGF5bG9hZC5zdGF0dXNlcyB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfQ0hBVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjaGF0OiBhY3Rpb24ucGF5bG9hZC5jaGF0XG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9NRVNTQUdFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZXNzYWdlczogYWN0aW9uLnBheWxvYWQubWVzc2FnZXNcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0RJU1BMQVlfTUVUSE9EOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRpc3BsYXlNZXRob2Q6IGFjdGlvbi5wYXlsb2FkLmRpc3BsYXlNZXRob2RcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1ZJU0lCTEVfRklMVEVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2aXNpYmxlRmlsdGVyczogYWN0aW9uLnBheWxvYWQudmlzaWJsZUZpbHRlcnNcbiAgICAgIH1cbiAgICBjYXNlIEMuQUREX01FTUJFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZW1iZXJzOiBbLi4uc3RhdGUubWVtYmVycywgYWN0aW9uLnBheWxvYWQubWVtYmVyXVxuICAgICAgfVxuICAgIGNhc2UgQy5BRERfU0NSRUVOU0hPVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzY3JlZW5zaG90czogWy4uLnN0YXRlLnNjcmVlbnNob3RzLCBhY3Rpb24ucGF5bG9hZC5zY3JlZW5zaG90XVxuICAgICAgfVxuICAgIGNhc2UgQy5BRERfRklMRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxlczogWy4uLnN0YXRlLmZpbGVzLCBhY3Rpb24ucGF5bG9hZC5maWxlXVxuICAgICAgfVxuICAgIGNhc2UgQy5SRU1PVkVfTUVNQkVSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbWJlcnM6IHN0YXRlLm1lbWJlcnMuZmlsdGVyKFxuICAgICAgICAgIChtZW1iZXIpID0+IChtZW1iZXIuZW1haWwgfHwgbWVtYmVyLnZhbHVlPy5lbWFpbCkgIT09IGFjdGlvbi5wYXlsb2FkLmVtYWlsXG4gICAgICAgIClcbiAgICAgIH1cbiAgICBjYXNlIEMuUkVNT1ZFX1NDUkVFTlNIT1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2NyZWVuc2hvdHM6IHN0YXRlLnNjcmVlbnNob3RzLmZpbHRlcigoc2NyZWVuc2hvdCkgPT4gc2NyZWVuc2hvdC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpXG4gICAgICB9XG4gICAgY2FzZSBDLlJFTU9WRV9GSUxFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGVzOiBzdGF0ZS5maWxlcy5maWx0ZXIoKGZpbGUpID0+IGZpbGUuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgfVxuICAgIGNhc2UgQy5DTEVBUl9NRU1CRVJTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG1lbWJlcnM6IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLkNMRUFSX1NDUkVFTlNIT1RTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNjcmVlbnNob3RzOiBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5DTEVBUl9GSUxFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxlczogW11cbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcbiIsImltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCdcblxuaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvc25hY2tzJ1xuXG5jb25zdCBMSU1JVCA9IDEwXG5jb25zdCBpbml0aWFsU3RhdGUgPSBbXVxuXG5leHBvcnQgY29uc3Qgc25hY2tSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfSVRFTTpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHY0KCksXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuaXRlbVxuICAgICAgICB9XG4gICAgICBdLnNsaWNlKDAsIExJTUlUKVxuICAgIGNhc2UgQy5SRU1PVkVfSVRFTTpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCldXG4gICAgY2FzZSBDLkNMRUFSX0lURU1TOlxuICAgICAgcmV0dXJuIFtdXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNuYWNrUmVkdWNlclxuIiwiaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvc3RlcHBlcidcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBuYW1lOiAnJyxcbiAgY29udGVudDogbnVsbFxufVxuXG5leHBvcnQgY29uc3Qgc3RlcHBlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9TVEVQUEVSOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0ZXBwZXJSZWR1Y2VyXG4iLCJpbXBvcnQgQyBmcm9tICcuLi90eXBlcy91c2VyJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlkOiAwLFxuICBuYW1lOiAnJyxcbiAgYWJvdXQ6ICcnLFxuICBhY2NvdW50OiAnJyxcbiAgZW1haWw6ICcnLFxuICBwaG9uZTogJycsXG4gIHJvbGU6ICcnLFxuICBmb2xkZXJzOiBbXSxcbiAgcHJvamVjdHM6IFtdLFxuICBhcnRpY2xlczogW10sXG4gIGxpa2VkUHJvamVjdHM6IFtdLFxuICBzZXR0aW5nczogWycnXSxcbiAgdG9rZW46ICcnLFxuICB1cGRhdGVkQXQ6ICcnLFxuICBjcmVhdGVkQXQ6ICcnLFxuICByZWdpc3RlcjogZmFsc2UsXG4gIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgYXV0aGVudGljYXRlZDogdHJ1ZVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfTE9HT1VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2VcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1VTRVJfRk9MREVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmb2xkZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfVVNFUl9GT0xERVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZm9sZGVyczogc3RhdGUuZm9sZGVycy5tYXAoKGZvbGRlcikgPT5cbiAgICAgICAgICBmb2xkZXIuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkID8gYWN0aW9uLnBheWxvYWQgOiBmb2xkZXJcbiAgICAgICAgKVxuICAgICAgfVxuICAgIGNhc2UgQy5VUERBVEVfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyUmVkdWNlclxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfRE9DVU1FTlRTOiAnU0VUX0RPQ1VNRU5UUydcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX0RSQVdFUjogJ1NFVF9EUkFXRVInLFxuICBTRVRfQkFDS19EUkFXRVI6ICdTRVRfQkFDS19EUkFXRVInXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9NT0RBTDogJ1NFVF9NT0RBTCdcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX01VVEFURTogJ1NFVF9NVVRBVEUnLFxuICBTRVRfU0VUVElOR1M6ICdTRVRfU0VUVElOR1MnLFxuICBTRVRfTUVNQkVSUzogJ1NFVF9NRU1CRVJTJyxcbiAgU0VUX1NDUkVFTlNIT1RTOiAnU0VUX1NDUkVFTlNIT1RTJyxcbiAgU0VUX0NIQVQ6ICdTRVRfQ0hBVCcsXG4gIFNFVF9TRUFSQ0g6ICdTRVRfU0VBUkNIJyxcbiAgU0VUX01FU1NBR0VTOiAnU0VUX01FU1NBR0VTJyxcbiAgU0VUX0ZJTEVTOiAnU0VUX0ZJTEVTJyxcbiAgU0VUX0ZPTERFUjogJ1NFVF9GT0xERVInLFxuICBTRVRfQ09NUEFOSUVTOiAnU0VUX0NPTVBBTklFUycsXG4gIFNFVF9DQVRFR09SSUVTOiAnU0VUX0NBVEVHT1JJRVMnLFxuICBTRVRfU1RBVFVTRVM6ICdTRVRfU1RBVFVTRVMnLFxuICBTRVRfRElTUExBWV9NRVRIT0Q6ICdTRVRfRElTUExBWV9NRVRIT0QnLFxuICBTRVRfVklTSUJMRV9GSUxURVJTOiAnU0VUX1ZJU0lCTEVfRklMVEVSUycsXG4gIEFERF9NRU1CRVI6ICdBRERfTUVNQkVSJyxcbiAgQUREX1NDUkVFTlNIT1Q6ICdBRERfU0NSRUVOU0hPVCcsXG4gIEFERF9GSUxFOiAnQUREX0ZJTEUnLFxuICBSRU1PVkVfTUVNQkVSOiAnUkVNT1ZFX01FTUJFUicsXG4gIFJFTU9WRV9TQ1JFRU5TSE9UOiAnUkVNT1ZFX1NDUkVFTlNIT1QnLFxuICBSRU1PVkVfRklMRTogJ1JFTU9WRV9GSUxFJyxcbiAgQ0xFQVJfTUVNQkVSUzogJ0NMRUFSX01FTUJFUlMnLFxuICBDTEVBUl9TQ1JFRU5TSE9UUzogJ0NMRUFSX1NDUkVFTlNIT1RTJyxcbiAgQ0xFQVJfRklMRVM6ICdDTEVBUl9GSUxFUydcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX0lURU06ICdTRVRfSVRFTScsXG4gIFJFTU9WRV9JVEVNOiAnUkVNT1ZFX0lURU0nLFxuICBDTEVBUl9JVEVNUzogJ0NMRUFSX0lURU1TJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfU1RFUFBFUjogJ1NFVF9TVEVQUEVSJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfVVNFUjogJ1NFVF9VU0VSJyxcbiAgU0VUX0xPR09VVDogJ1NFVF9MT0dPVVQnLFxuICBTRVRfQVVUSF9VU0VSOiAnU0VUX0FVVEhfVVNFUicsXG4gIFNFVF9VU0VSX0ZPTERFUlM6ICdTRVRfVVNFUl9GT0xERVJTJyxcbiAgU0VUX1VTRVJfRk9MREVSOiAnU0VUX1VTRVJfRk9MREVSJyxcbiAgVVBEQVRFX1VTRVI6ICdVUERBVEVfVVNFUidcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstZXJyb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVlcG1lcmdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHRqcy1wcm9ncmVzc2JhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
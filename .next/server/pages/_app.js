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
  var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;

  switch (action.type) {
    case _types_drawer__WEBPACK_IMPORTED_MODULE_0__["default"].SET_DRAWER:
      return {
        icon: (_ref = action.payload && action.payload.icon) !== null && _ref !== void 0 ? _ref : '',
        color: (_ref2 = action.payload && action.payload.color) !== null && _ref2 !== void 0 ? _ref2 : '',
        title: (_ref3 = action.payload && action.payload.title) !== null && _ref3 !== void 0 ? _ref3 : '',
        half: (_ref4 = action.payload && action.payload.half) !== null && _ref4 !== void 0 ? _ref4 : false,
        side: (_ref5 = action.payload && action.payload.side) !== null && _ref5 !== void 0 ? _ref5 : 'right',
        pdfName: (_ref6 = action.payload && action.payload.pdfName) !== null && _ref6 !== void 0 ? _ref6 : '',
        content: (_ref7 = action.payload && action.payload.content) !== null && _ref7 !== void 0 ? _ref7 : '',
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
  currentPage: 'projects',
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
  params: {},
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

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_PARAMS:
      return { ...state,
        params: action.payload.params || {}
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

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].SET_CURRENT_PAGE:
      return { ...state,
        currentPage: action.payload.currentPage
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

    case _types_root__WEBPACK_IMPORTED_MODULE_0__["default"].REMOVE_PROJECT_FROM_FOLDER:
      return { ...state,
        folder: { ...state.folder,
          projects: state.folder.projects.filter(projectId => projectId !== action.payload.id)
        }
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

    case _types_user__WEBPACK_IMPORTED_MODULE_0__["default"].REMOVE_PROJECT_FROM_USER_FOLDER:
      return { ...state,
        folders: state.folders.map(folder => folder.id === action.payload.folderId ? { ...folder,
          projects: folder.projects.filter(projectId => projectId !== action.payload.projectId)
        } : folder)
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
  SET_PARAMS: 'SET_PARAMS',
  SET_MESSAGES: 'SET_MESSAGES',
  SET_FILES: 'SET_FILES',
  SET_FOLDER: 'SET_FOLDER',
  SET_COMPANIES: 'SET_COMPANIES',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_STATUSES: 'SET_STATUSES',
  SET_DISPLAY_METHOD: 'SET_DISPLAY_METHOD',
  SET_VISIBLE_FILTERS: 'SET_VISIBLE_FILTERS',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  ADD_MEMBER: 'ADD_MEMBER',
  ADD_SCREENSHOT: 'ADD_SCREENSHOT',
  ADD_FILE: 'ADD_FILE',
  REMOVE_MEMBER: 'REMOVE_MEMBER',
  REMOVE_SCREENSHOT: 'REMOVE_SCREENSHOT',
  REMOVE_PROJECT_FROM_FOLDER: 'REMOVE_PROJECT_FROM_FOLDER',
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
  REMOVE_PROJECT_FROM_USER_FOLDER: 'REMOVE_PROJECT_FROM_USER_FOLDER',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBvbGxvL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcG9sbG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXRvbWljLXVpL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2RvY3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9zbmFja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3R5cGVzL2RvY3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy9zbmFja3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy91c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWxpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1lcnJvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby11cGxvYWQtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVlcG1lcmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dGpzLXByb2dyZXNzYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiU1NSIiwiTk9ERV9FTlYiLCJTRVJWRVJfVVJMIiwiY29uZmlnIiwiZ2V0IiwiU0VDUkVUIiwicmVxdWVzdCIsIm9wZXJhdGlvbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImRlZmF1bHRPcHRpb25zIiwid2F0Y2hRdWVyeSIsImZldGNoUG9saWN5IiwiZXJyb3JQb2xpY3kiLCJxdWVyeSIsImVycm9yTGluayIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RMaW5rIiwiQXBvbGxvTGluayIsImZvcndhcmQiLCJPYnNlcnZhYmxlIiwib2JzZXJ2ZXIiLCJoYW5kbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZXN1bHQiLCJzdWJzY3JpYmUiLCJuZXh0IiwiYmluZCIsImVycm9yIiwiY29tcGxldGUiLCJjYXRjaCIsInVuc3Vic2NyaWJlIiwidXBsb2FkTGluayIsImNyZWF0ZVVwbG9hZExpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiZnJvbSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJkYXRhIiwibWVyZ2UiLCJyZXN0b3JlIiwidXNlQXBvbGxvIiwidXNlTWVtbyIsImxpc3QiLCJuYW1lIiwibGFiZWwiLCJjb2xvcnMiLCJwcmltYXJ5Iiwic2FsdCIsInNlY3JldCIsInBvcnQiLCJrZXkiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwiaW5pdGlhbEFwb2xsb1N0YXRlIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwidGhlbWUiLCJyb3V0ZSIsInBhZ2VJbml0aWFsIiwib3BhY2l0eSIsInBhZ2VBbmltYXRlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJvcHMiLCJnZXRTdGF0ZSIsInJldmFsaWRhdGUiLCJpbml0U3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlcnMiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiX3N0b3JlIiwidW5kZWZpbmVkIiwiZG9jdW1lbnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQyIsIlNFVF9ET0NVTUVOVFMiLCJwYXlsb2FkIiwiZG9jdW1lbnRzIiwiSElTVE9SWV9MSU1JVCIsImljb24iLCJjb2xvciIsInRpdGxlIiwiaGFsZiIsInNpZGUiLCJjb250ZW50IiwiaGlzdG9yeSIsImRyYXdlclJlZHVjZXIiLCJTRVRfRFJBV0VSIiwicGRmTmFtZSIsImxlbmd0aCIsIm9wZW4iLCJTRVRfQkFDS19EUkFXRVIiLCJzbGljZSIsImNvbWJpbmVSZWR1Y2VycyIsInJvb3QiLCJyb290UmVkdWNlciIsInVzZXIiLCJ1c2VyUmVkdWNlciIsImRyYXdlciIsInN0ZXBwZXIiLCJzdGVwcGVyUmVkdWNlciIsImRvY3VtZW50c1JlZHVjZXIiLCJzbmFja3MiLCJzbmFja3NSZWR1Y2VyIiwibW9kYWwiLCJtb2RhbFJlZHVjZXIiLCJzaXplIiwicm91dGVzIiwiU0VUX01PREFMIiwibXV0YXRpb24iLCJzZXR0aW5ncyIsImdlbmVyYWwiLCJsb2dvdHlwZSIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsImN1cnJlbnRQYWdlIiwiZGlzcGxheU1ldGhvZCIsInZpc2libGVGaWx0ZXJzIiwidmFyaWFibGVzIiwic2Nyb2xsVG9wIiwiY2FsbGJhY2siLCJtZW1iZXJzIiwiY29tcGFuaWVzIiwiY2F0ZWdvcmllcyIsInN0YXR1c2VzIiwic2NyZWVuc2hvdHMiLCJtZXNzYWdlcyIsInNlYXJjaCIsInBhcmFtcyIsImZpbGVzIiwiU0VUX01VVEFURSIsIlNFVF9TRVRUSU5HUyIsIlNFVF9NRU1CRVJTIiwiU0VUX1NDUkVFTlNIT1RTIiwiU0VUX0ZJTEVTIiwiU0VUX1NFQVJDSCIsIlNFVF9QQVJBTVMiLCJTRVRfRk9MREVSIiwiZm9sZGVyIiwiU0VUX0NPTVBBTklFUyIsIlNFVF9DQVRFR09SSUVTIiwiU0VUX1NUQVRVU0VTIiwiU0VUX0NIQVQiLCJjaGF0IiwiU0VUX01FU1NBR0VTIiwiU0VUX0RJU1BMQVlfTUVUSE9EIiwiU0VUX1ZJU0lCTEVfRklMVEVSUyIsIlNFVF9DVVJSRU5UX1BBR0UiLCJBRERfTUVNQkVSIiwibWVtYmVyIiwiQUREX1NDUkVFTlNIT1QiLCJzY3JlZW5zaG90IiwiQUREX0ZJTEUiLCJmaWxlIiwiUkVNT1ZFX01FTUJFUiIsImZpbHRlciIsImVtYWlsIiwidmFsdWUiLCJSRU1PVkVfU0NSRUVOU0hPVCIsImlkIiwiUkVNT1ZFX1BST0pFQ1RfRlJPTV9GT0xERVIiLCJwcm9qZWN0cyIsInByb2plY3RJZCIsIlJFTU9WRV9GSUxFIiwiQ0xFQVJfTUVNQkVSUyIsIkNMRUFSX1NDUkVFTlNIT1RTIiwiQ0xFQVJfRklMRVMiLCJMSU1JVCIsInNuYWNrUmVkdWNlciIsIlNFVF9JVEVNIiwidjQiLCJpdGVtIiwiUkVNT1ZFX0lURU0iLCJDTEVBUl9JVEVNUyIsIlNFVF9TVEVQUEVSIiwiYWJvdXQiLCJhY2NvdW50IiwicGhvbmUiLCJyb2xlIiwiZm9sZGVycyIsImFydGljbGVzIiwibGlrZWRQcm9qZWN0cyIsInVwZGF0ZWRBdCIsImNyZWF0ZWRBdCIsInJlZ2lzdGVyIiwiYXV0aGVudGljYXRlZCIsIlNFVF9VU0VSIiwiU0VUX0xPR09VVCIsIlNFVF9VU0VSX0ZPTERFUlMiLCJTRVRfVVNFUl9GT0xERVIiLCJtYXAiLCJSRU1PVkVfUFJPSkVDVF9GUk9NX1VTRVJfRk9MREVSIiwiZm9sZGVySWQiLCJVUERBVEVfVVNFUiIsIlNFVF9BVVRIX1VTRVIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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QUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5J1xuaW1wb3J0IHsgY3JlYXRlVXBsb2FkTGluayB9IGZyb20gJ2Fwb2xsby11cGxvYWQtY2xpZW50J1xuaW1wb3J0IHsgQXBvbGxvTGluaywgT2JzZXJ2YWJsZSB9IGZyb20gJ2Fwb2xsby1saW5rJ1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ2Fwb2xsby1saW5rLWVycm9yJ1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZydcblxuY29uc3QgU1NSID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcbmNvbnN0IE5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJ1xuY29uc3QgU0VSVkVSX1VSTCA9IE5PREVfRU5WID8gY29uZmlnLmdldCgnc2VydmVyLWxvY2FsLXVybCcpIDogY29uZmlnLmdldCgnc2VydmVyLWhvc3QtdXJsJylcbmNvbnN0IFNFQ1JFVCA9IGNvbmZpZy5nZXQoJ3NlY3JldCcpXG5cbmNvbnN0IHJlcXVlc3QgPSBhc3luYyAob3BlcmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gIVNTUiAmJiAoYXdhaXQgbG9jYWxTdG9yYWdlLmdldEl0ZW0oU0VDUkVUKSlcbiAgb3BlcmF0aW9uLnNldENvbnRleHQoe1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJ1xuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHdhdGNoUXVlcnk6IHtcbiAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICBlcnJvclBvbGljeTogJ2lnbm9yZSdcbiAgfSxcbiAgcXVlcnk6IHtcbiAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICBlcnJvclBvbGljeTogJ2FsbCdcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXJyb3JMaW5rID0gb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xuICBpZiAoZ3JhcGhRTEVycm9ycykge1xuICAgIGNvbnNvbGUubG9nKCdbZ3JhcGhRTEVycm9yc10nLCBncmFwaFFMRXJyb3JzKVxuICB9XG4gIGlmIChuZXR3b3JrRXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnW25ldHdvcmtFcnJvcl0nLCBuZXR3b3JrRXJyb3IpXG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0TGluayA9IG5ldyBBcG9sbG9MaW5rKFxuICAob3BlcmF0aW9uLCBmb3J3YXJkKSA9PlxuICAgIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgbGV0IGhhbmRsZVxuXG4gICAgICBQcm9taXNlLnJlc29sdmUob3BlcmF0aW9uKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXF1ZXN0KHJlc3VsdCkpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBoYW5kbGUgPSBmb3J3YXJkKG9wZXJhdGlvbikuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICBjb21wbGV0ZTogb2JzZXJ2ZXIuY29tcGxldGUuYmluZChvYnNlcnZlcilcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2gob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlcikpXG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChoYW5kbGUpIGhhbmRsZS51bnN1YnNjcmliZSgpXG4gICAgICB9XG4gICAgfSlcbilcblxuY29uc3QgdXBsb2FkTGluayA9IGNyZWF0ZVVwbG9hZExpbmsoe1xuICB1cmk6IGAke1NFUlZFUl9VUkx9L2dyYXBocWxgLFxuICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogU1NSLFxuICAgIGxpbms6IEFwb2xsb0xpbmsuZnJvbShbZXJyb3JMaW5rLCByZXF1ZXN0TGluaywgdXBsb2FkTGlua10pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICAgIGRlZmF1bHRPcHRpb25zXG4gIH0pXG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJ1xuXG5pbXBvcnQgY3JlYXRlQXBvbGxvQ2xpZW50IGZyb20gJy4vY2xpZW50J1xuXG5sZXQgYXBvbGxvQ2xpZW50XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwpIHtcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKVxuXG4gIGlmIChpbml0aWFsU3RhdGUpIHtcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KClcbiAgICBjb25zdCBkYXRhID0gbWVyZ2UoaW5pdGlhbFN0YXRlLCBleGlzdGluZ0NhY2hlKVxuXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGRhdGEpXG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUpIHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcbn1cbiIsImV4cG9ydCBjb25zdCBsaXN0ID0gW1xuICB7XG4gICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgIGxhYmVsOiAn0KLQtdC80L3QsNGPJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ2xpZ2h0JyxcbiAgICBsYWJlbDogJ9Ch0LLQtdGC0LvQsNGPJ1xuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyMwMDcwZjMnXG4gIH1cbn1cbiIsImNvbnN0IGNvbmZpZyA9IHtcbiAgc2FsdDogMTAsXG4gIHNlY3JldDogJ0JlYXJlcicsXG4gIHBvcnQ6IDMwMDAsXG4gICd2aWRlby1pZCc6ICdsVjZkT0ZlSHdxWScsXG4gICd1cGxvYWQtZGlyJzogJ3VwbG9hZHMnLFxuICAnaG9zdC11cmwnOiAnaHR0cHM6Ly9hdG9taWMucnUuY29tJyxcbiAgJ2xvY2FsLXVybCc6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICAnc2VydmVyLWhvc3QtdXJsJzogJ2h0dHBzOi8vYXBpLmF0b21pYy5ydS5jb20nLFxuICAnc2VydmVyLWxvY2FsLXVybCc6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnLFxuICAnbW9uZ28tZGItdXJsJzpcbiAgICAnbW9uZ29kYitzcnY6Ly9hZG1pbjp4bkNYeXpWQXBNcEhvNmVlQGNsdXN0ZXIwLnlqYXVlLm1vbmdvZGIubmV0L2FwcD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknLFxuICAnZ29vZ2xlLWNsaWVudC1pZCc6ICcxMDA4MzAwMzA3NjcxLWR2djVubzh1aW1nazJsb2RyNzZtOXJubnZhOGcwbGlpLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgJ2dvb2dsZS1jbGllbnQtc2VjcmV0JzogJzVmckUtb0pJR20wNktMVWpjeDNWY0w5cycsXG4gICdmYWNlYm9vay1hcHAtaWQnOiAzMTc0NDE4Mjk2NzgyNjgsXG4gICdmYWNlYm9vay1hcHAtc2VjcmV0JzogJzM2NDRmOWQ4N2Y1YTE2OWQ4MTk2YmMwNzBiNGZiMTQ2JyxcbiAgJ3Rpbnkta2V5JzogJzl2ZHV6ZDFlbDc0aDJzZjVhNTc0NG8zcm53bXptdHNpbzJ2YnlqbHJxbGlzeTV1Mydcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQ6IChrZXkpID0+IGNvbmZpZ1trZXldXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xuaW1wb3J0IE5leHROcHJvZ3Jlc3MgZnJvbSAnbmV4dGpzLXByb2dyZXNzYmFyJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuaW1wb3J0ICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50L3NyYy9lZmZlY3RzL29wYWNpdHkuY3NzJ1xuaW1wb3J0ICcuLi9hdG9taWMtdWkvdGhlbWUvZGVmYXVsdC5jc3MnXG5pbXBvcnQgJy4uL2F0b21pYy11aS9hc3NldHMvc3R5bGVzL3N0eWxlcy5jc3MnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vYXRvbWljLXVpL3RoZW1lJ1xuXG5pbXBvcnQgeyB1c2VBcG9sbG8sIGluaXRpYWxpemVBcG9sbG8gfSBmcm9tICcuLi9hcG9sbG8nXG5pbXBvcnQgeyB1c2VTdG9yZSwgaW5pdGlhbGl6ZVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnXG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICNucHJvZ3Jlc3Mge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiB2YXIoLS16LW92ZXJyaWRlKTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgIC5zcGlubmVyLCAuc3Bpbm5lci1pY29uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgY2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5pbml0aWFsQXBvbGxvU3RhdGUpXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PXsndXRmLTgnfSAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPXsndmlld3BvcnQnfVxuICAgICAgICAgICAgY29udGVudD17J21pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT17J3RoZW1lLWNvbG9yJ30gY29udGVudD17JyMwMDAwMDAnfSAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9eyd5YW5kZXgtdmVyaWZpY2F0aW9uJ30gY29udGVudD17J2JmZDA0Yjk2ZDMwMzgyZjUnfSAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cblxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBrZXk9e3JvdXRlci5yb3V0ZX1cbiAgICAgICAgICAgIGluaXRpYWw9eydwYWdlSW5pdGlhbCd9XG4gICAgICAgICAgICBhbmltYXRlPXsncGFnZUFuaW1hdGUnfVxuICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgcGFnZUluaXRpYWw6IHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHBhZ2VBbmltYXRlOiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICA8TmV4dE5wcm9ncmVzc1xuICAgICAgICAgICAgY29sb3I9eyd2YXIoLS1kZWZhdWx0LWNvbG9yLWFjY2VudCknfVxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbj17MC4zfVxuICAgICAgICAgICAgc3RvcERlbGF5TXM9ezIwMH1cbiAgICAgICAgICAgIGhlaWdodD17M31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBpbml0aWFsaXplU3RvcmUoKVxuICBjb25zdCBjbGllbnQgPSBpbml0aWFsaXplQXBvbGxvKClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIGluaXRpYWxBcG9sbG9TdGF0ZTogY2xpZW50LmNhY2hlLmV4dHJhY3QoKVxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5cbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xuXG5sZXQgc3RvcmVcblxuZnVuY3Rpb24gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlID0ge30pIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBwcmVsb2FkZWRTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoKSkpXG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplU3RvcmUgPSAocHJlbG9hZGVkU3RhdGUpID0+IHtcbiAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcblxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlXG4gICAgfSlcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXG5cbiAgcmV0dXJuIF9zdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG4gIHJldHVybiBzdG9yZVxufVxuIiwiaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvZG9jdW1lbnRzJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBudWxsXG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9ET0NVTUVOVFM6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQuZG9jdW1lbnRzXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvY3VtZW50UmVkdWNlclxuIiwiaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvZHJhd2VyJ1xuXG5jb25zdCBISVNUT1JZX0xJTUlUID0gMTBcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpY29uOiAnJyxcbiAgY29sb3I6ICcnLFxuICB0aXRsZTogJycsXG4gIGhhbGY6IGZhbHNlLFxuICBzaWRlOiAncmlnaHQnLFxuICBjb250ZW50OiAnJyxcbiAgaGlzdG9yeTogW11cbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9EUkFXRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpY29uOiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuaWNvbikgPz8gJycsXG4gICAgICAgIGNvbG9yOiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY29sb3IpID8/ICcnLFxuICAgICAgICB0aXRsZTogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLnRpdGxlKSA/PyAnJyxcbiAgICAgICAgaGFsZjogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmhhbGYpID8/IGZhbHNlLFxuICAgICAgICBzaWRlOiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuc2lkZSkgPz8gJ3JpZ2h0JyxcbiAgICAgICAgcGRmTmFtZTogKGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLnBkZk5hbWUpID8/ICcnLFxuICAgICAgICBjb250ZW50OiAoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY29udGVudCkgPz8gJycsXG4gICAgICAgIGhpc3Rvcnk6XG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQgJiYgc3RhdGUuaGlzdG9yeS5sZW5ndGggPCBISVNUT1JZX0xJTUlUXG4gICAgICAgICAgICA/IFsuLi5zdGF0ZS5oaXN0b3J5LCBhY3Rpb24ucGF5bG9hZF1cbiAgICAgICAgICAgIDogW2FjdGlvbi5wYXlsb2FkXSxcbiAgICAgICAgb3BlbjogISEoYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY29udGVudClcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0JBQ0tfRFJBV0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUuaGlzdG9yeVtzdGF0ZS5oaXN0b3J5Lmxlbmd0aCAtIDJdLFxuICAgICAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5LnNsaWNlKDAsIHN0YXRlLmhpc3RvcnkubGVuZ3RoIC0gMSksXG4gICAgICAgIG9wZW46IHRydWVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZHJhd2VyUmVkdWNlclxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290J1xuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlcidcbmltcG9ydCBkcmF3ZXJSZWR1Y2VyIGZyb20gJy4vZHJhd2VyJ1xuaW1wb3J0IHN0ZXBwZXJSZWR1Y2VyIGZyb20gJy4vc3RlcHBlcidcbmltcG9ydCBkb2N1bWVudHNSZWR1Y2VyIGZyb20gJy4vZG9jdW1lbnRzJ1xuaW1wb3J0IHNuYWNrc1JlZHVjZXIgZnJvbSAnLi9zbmFja3MnXG5pbXBvcnQgbW9kYWxSZWR1Y2VyIGZyb20gJy4vbW9kYWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHJvb3Q6IHJvb3RSZWR1Y2VyLFxuICB1c2VyOiB1c2VyUmVkdWNlcixcbiAgZHJhd2VyOiBkcmF3ZXJSZWR1Y2VyLFxuICBzdGVwcGVyOiBzdGVwcGVyUmVkdWNlcixcbiAgZG9jdW1lbnRzOiBkb2N1bWVudHNSZWR1Y2VyLFxuICBzbmFja3M6IHNuYWNrc1JlZHVjZXIsXG4gIG1vZGFsOiBtb2RhbFJlZHVjZXJcbn0pXG4iLCJpbXBvcnQgQyBmcm9tICcuLi90eXBlcy9tb2RhbCdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzaXplOiAncycsXG4gIHJvdXRlczogbnVsbFxufVxuXG5leHBvcnQgY29uc3QgbW9kYWxSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfTU9EQUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZXM6IGFjdGlvbi5wYXlsb2FkLnJvdXRlcyxcbiAgICAgICAgc2l6ZTogYWN0aW9uLnBheWxvYWQuc2l6ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb2RhbFJlZHVjZXJcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgQyBmcm9tICcuLi90eXBlcy9yb290J1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG11dGF0aW9uOiBudWxsLFxuICBzZXR0aW5nczoge1xuICAgIGdlbmVyYWw6IHtcbiAgICAgIGxvZ290eXBlOiAnJyAvLyAvaW1hZ2VzL2xvZ28ucG5nXG4gICAgfSxcbiAgICBtZXRhOiB7XG4gICAgICB0aXRsZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJydcbiAgICB9XG4gIH0sXG4gIGN1cnJlbnRQYWdlOiAncHJvamVjdHMnLFxuICBkaXNwbGF5TWV0aG9kOiAnZ3JpZCcsXG4gIHZpc2libGVGaWx0ZXJzOiBmYWxzZSxcbiAgdmFyaWFibGVzOiBudWxsLFxuICBzY3JvbGxUb3A6IDAsXG4gIGNhbGxiYWNrOiAoKSA9PiB7fSxcbiAgbWVtYmVyczogW10sXG4gIGNvbXBhbmllczogW10sXG4gIGNhdGVnb3JpZXM6IFtdLFxuICBzdGF0dXNlczogW10sXG4gIHNjcmVlbnNob3RzOiBbXSxcbiAgbWVzc2FnZXM6IFtdLFxuICBzZWFyY2g6ICcnLFxuICBwYXJhbXM6IHt9LFxuICBmaWxlczogW11cbn1cblxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfTVVUQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9TRVRUSU5HUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZXR0aW5nczogYWN0aW9uLnBheWxvYWQuc2V0dGluZ3NcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX01FTUJFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVtYmVyczogYWN0aW9uLnBheWxvYWQubWVtYmVycyB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfU0NSRUVOU0hPVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2NyZWVuc2hvdHM6IGFjdGlvbi5wYXlsb2FkLnNjcmVlbnNob3RzIHx8IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9GSUxFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxlczogYWN0aW9uLnBheWxvYWQuZmlsZXMgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1NFQVJDSDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWFyY2g6IGFjdGlvbi5wYXlsb2FkLnNlYXJjaCB8fCAnJ1xuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfUEFSQU1TOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBhcmFtczogYWN0aW9uLnBheWxvYWQucGFyYW1zIHx8IHt9XG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9GT0xERVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZm9sZGVyOiBhY3Rpb24ucGF5bG9hZC5mb2xkZXIgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0NPTVBBTklFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wYW5pZXM6IGFjdGlvbi5wYXlsb2FkLmNvbXBhbmllcyB8fCBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfQ0FURUdPUklFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yaWVzIHx8IFtdXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9TVEFUVVNFUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdGF0dXNlczogYWN0aW9uLnBheWxvYWQuc3RhdHVzZXMgfHwgW11cbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0NIQVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2hhdDogYWN0aW9uLnBheWxvYWQuY2hhdFxuICAgICAgfVxuICAgIGNhc2UgQy5TRVRfTUVTU0FHRVM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVzc2FnZXM6IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2VzXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9ESVNQTEFZX01FVEhPRDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkaXNwbGF5TWV0aG9kOiBhY3Rpb24ucGF5bG9hZC5kaXNwbGF5TWV0aG9kXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9WSVNJQkxFX0ZJTFRFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmlzaWJsZUZpbHRlcnM6IGFjdGlvbi5wYXlsb2FkLnZpc2libGVGaWx0ZXJzXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9DVVJSRU5UX1BBR0U6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudFBhZ2U6IGFjdGlvbi5wYXlsb2FkLmN1cnJlbnRQYWdlXG4gICAgICB9XG4gICAgY2FzZSBDLkFERF9NRU1CRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWVtYmVyczogWy4uLnN0YXRlLm1lbWJlcnMsIGFjdGlvbi5wYXlsb2FkLm1lbWJlcl1cbiAgICAgIH1cbiAgICBjYXNlIEMuQUREX1NDUkVFTlNIT1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2NyZWVuc2hvdHM6IFsuLi5zdGF0ZS5zY3JlZW5zaG90cywgYWN0aW9uLnBheWxvYWQuc2NyZWVuc2hvdF1cbiAgICAgIH1cbiAgICBjYXNlIEMuQUREX0ZJTEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsZXM6IFsuLi5zdGF0ZS5maWxlcywgYWN0aW9uLnBheWxvYWQuZmlsZV1cbiAgICAgIH1cbiAgICBjYXNlIEMuUkVNT1ZFX01FTUJFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZW1iZXJzOiBzdGF0ZS5tZW1iZXJzLmZpbHRlcihcbiAgICAgICAgICAobWVtYmVyKSA9PiAobWVtYmVyLmVtYWlsIHx8IG1lbWJlci52YWx1ZT8uZW1haWwpICE9PSBhY3Rpb24ucGF5bG9hZC5lbWFpbFxuICAgICAgICApXG4gICAgICB9XG4gICAgY2FzZSBDLlJFTU9WRV9TQ1JFRU5TSE9UOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNjcmVlbnNob3RzOiBzdGF0ZS5zY3JlZW5zaG90cy5maWx0ZXIoKHNjcmVlbnNob3QpID0+IHNjcmVlbnNob3QuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgICAgfVxuICAgIGNhc2UgQy5SRU1PVkVfUFJPSkVDVF9GUk9NX0ZPTERFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmb2xkZXI6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5mb2xkZXIsXG4gICAgICAgICAgcHJvamVjdHM6IHN0YXRlLmZvbGRlci5wcm9qZWN0cy5maWx0ZXIoKHByb2plY3RJZCkgPT4gcHJvamVjdElkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGNhc2UgQy5SRU1PVkVfRklMRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWxlczogc3RhdGUuZmlsZXMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZClcbiAgICAgIH1cbiAgICBjYXNlIEMuQ0xFQVJfTUVNQkVSUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtZW1iZXJzOiBbXVxuICAgICAgfVxuICAgIGNhc2UgQy5DTEVBUl9TQ1JFRU5TSE9UUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzY3JlZW5zaG90czogW11cbiAgICAgIH1cbiAgICBjYXNlIEMuQ0xFQVJfRklMRVM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsZXM6IFtdXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG4iLCJpbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnXG5cbmltcG9ydCBDIGZyb20gJy4uL3R5cGVzL3NuYWNrcydcblxuY29uc3QgTElNSVQgPSAxMFxuY29uc3QgaW5pdGlhbFN0YXRlID0gW11cblxuZXhwb3J0IGNvbnN0IHNuYWNrUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEMuU0VUX0lURU06XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiB2NCgpLFxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLml0ZW1cbiAgICAgICAgfVxuICAgICAgXS5zbGljZSgwLCBMSU1JVClcbiAgICBjYXNlIEMuUkVNT1ZFX0lURU06XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWQpXVxuICAgIGNhc2UgQy5DTEVBUl9JVEVNUzpcbiAgICAgIHJldHVybiBbXVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzbmFja1JlZHVjZXJcbiIsImltcG9ydCBDIGZyb20gJy4uL3R5cGVzL3N0ZXBwZXInXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbmFtZTogJycsXG4gIGNvbnRlbnQ6IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IHN0ZXBwZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQy5TRVRfU1RFUFBFUjpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdGVwcGVyUmVkdWNlclxuIiwiaW1wb3J0IEMgZnJvbSAnLi4vdHlwZXMvdXNlcidcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpZDogMCxcbiAgbmFtZTogJycsXG4gIGFib3V0OiAnJyxcbiAgYWNjb3VudDogJycsXG4gIGVtYWlsOiAnJyxcbiAgcGhvbmU6ICcnLFxuICByb2xlOiAnJyxcbiAgZm9sZGVyczogW10sXG4gIHByb2plY3RzOiBbXSxcbiAgYXJ0aWNsZXM6IFtdLFxuICBsaWtlZFByb2plY3RzOiBbXSxcbiAgc2V0dGluZ3M6IFsnJ10sXG4gIHRva2VuOiAnJyxcbiAgdXBkYXRlZEF0OiAnJyxcbiAgY3JlYXRlZEF0OiAnJyxcbiAgcmVnaXN0ZXI6IGZhbHNlLFxuICBhdXRoZW50aWNhdGVkOiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDLlNFVF9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWVcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX0xPR09VVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgY2FzZSBDLlNFVF9VU0VSX0ZPTERFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZm9sZGVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH1cbiAgICBjYXNlIEMuU0VUX1VTRVJfRk9MREVSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZvbGRlcnM6IHN0YXRlLmZvbGRlcnMubWFwKChmb2xkZXIpID0+XG4gICAgICAgICAgZm9sZGVyLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCA/IGFjdGlvbi5wYXlsb2FkIDogZm9sZGVyXG4gICAgICAgIClcbiAgICAgIH1cbiAgICBjYXNlIEMuUkVNT1ZFX1BST0pFQ1RfRlJPTV9VU0VSX0ZPTERFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmb2xkZXJzOiBzdGF0ZS5mb2xkZXJzLm1hcCgoZm9sZGVyKSA9PlxuICAgICAgICAgIGZvbGRlci5pZCA9PT0gYWN0aW9uLnBheWxvYWQuZm9sZGVySWRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIC4uLmZvbGRlcixcbiAgICAgICAgICAgICAgICBwcm9qZWN0czogZm9sZGVyLnByb2plY3RzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChwcm9qZWN0SWQpID0+IHByb2plY3RJZCAhPT0gYWN0aW9uLnBheWxvYWQucHJvamVjdElkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZvbGRlclxuICAgICAgICApXG4gICAgICB9XG4gICAgY2FzZSBDLlVQREFURV9VU0VSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9ET0NVTUVOVFM6ICdTRVRfRE9DVU1FTlRTJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfRFJBV0VSOiAnU0VUX0RSQVdFUicsXG4gIFNFVF9CQUNLX0RSQVdFUjogJ1NFVF9CQUNLX0RSQVdFUidcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX01PREFMOiAnU0VUX01PREFMJ1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBTRVRfTVVUQVRFOiAnU0VUX01VVEFURScsXG4gIFNFVF9TRVRUSU5HUzogJ1NFVF9TRVRUSU5HUycsXG4gIFNFVF9NRU1CRVJTOiAnU0VUX01FTUJFUlMnLFxuICBTRVRfU0NSRUVOU0hPVFM6ICdTRVRfU0NSRUVOU0hPVFMnLFxuICBTRVRfQ0hBVDogJ1NFVF9DSEFUJyxcbiAgU0VUX1NFQVJDSDogJ1NFVF9TRUFSQ0gnLFxuICBTRVRfUEFSQU1TOiAnU0VUX1BBUkFNUycsXG4gIFNFVF9NRVNTQUdFUzogJ1NFVF9NRVNTQUdFUycsXG4gIFNFVF9GSUxFUzogJ1NFVF9GSUxFUycsXG4gIFNFVF9GT0xERVI6ICdTRVRfRk9MREVSJyxcbiAgU0VUX0NPTVBBTklFUzogJ1NFVF9DT01QQU5JRVMnLFxuICBTRVRfQ0FURUdPUklFUzogJ1NFVF9DQVRFR09SSUVTJyxcbiAgU0VUX1NUQVRVU0VTOiAnU0VUX1NUQVRVU0VTJyxcbiAgU0VUX0RJU1BMQVlfTUVUSE9EOiAnU0VUX0RJU1BMQVlfTUVUSE9EJyxcbiAgU0VUX1ZJU0lCTEVfRklMVEVSUzogJ1NFVF9WSVNJQkxFX0ZJTFRFUlMnLFxuICBTRVRfQ1VSUkVOVF9QQUdFOiAnU0VUX0NVUlJFTlRfUEFHRScsXG4gIEFERF9NRU1CRVI6ICdBRERfTUVNQkVSJyxcbiAgQUREX1NDUkVFTlNIT1Q6ICdBRERfU0NSRUVOU0hPVCcsXG4gIEFERF9GSUxFOiAnQUREX0ZJTEUnLFxuICBSRU1PVkVfTUVNQkVSOiAnUkVNT1ZFX01FTUJFUicsXG4gIFJFTU9WRV9TQ1JFRU5TSE9UOiAnUkVNT1ZFX1NDUkVFTlNIT1QnLFxuICBSRU1PVkVfUFJPSkVDVF9GUk9NX0ZPTERFUjogJ1JFTU9WRV9QUk9KRUNUX0ZST01fRk9MREVSJyxcbiAgUkVNT1ZFX0ZJTEU6ICdSRU1PVkVfRklMRScsXG4gIENMRUFSX01FTUJFUlM6ICdDTEVBUl9NRU1CRVJTJyxcbiAgQ0xFQVJfU0NSRUVOU0hPVFM6ICdDTEVBUl9TQ1JFRU5TSE9UUycsXG4gIENMRUFSX0ZJTEVTOiAnQ0xFQVJfRklMRVMnXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFVF9JVEVNOiAnU0VUX0lURU0nLFxuICBSRU1PVkVfSVRFTTogJ1JFTU9WRV9JVEVNJyxcbiAgQ0xFQVJfSVRFTVM6ICdDTEVBUl9JVEVNUydcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX1NURVBQRVI6ICdTRVRfU1RFUFBFUidcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgU0VUX1VTRVI6ICdTRVRfVVNFUicsXG4gIFNFVF9MT0dPVVQ6ICdTRVRfTE9HT1VUJyxcbiAgU0VUX0FVVEhfVVNFUjogJ1NFVF9BVVRIX1VTRVInLFxuICBTRVRfVVNFUl9GT0xERVJTOiAnU0VUX1VTRVJfRk9MREVSUycsXG4gIFNFVF9VU0VSX0ZPTERFUjogJ1NFVF9VU0VSX0ZPTERFUicsXG4gIFJFTU9WRV9QUk9KRUNUX0ZST01fVVNFUl9GT0xERVI6ICdSRU1PVkVfUFJPSkVDVF9GUk9NX1VTRVJfRk9MREVSJyxcbiAgVVBEQVRFX1VTRVI6ICdVUERBVEVfVVNFUidcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vcmVhY3QtaG9va3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNhY2hlLWlubWVtb3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstZXJyb3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVlcG1lcmdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHRqcy1wcm9ncmVzc2JhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
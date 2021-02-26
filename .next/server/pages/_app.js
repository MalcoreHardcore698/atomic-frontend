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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/K64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  SET_DOCUMENTS: 'SET_DOCUMENTS'
});

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "nextjs-progressbar"
var external_nextjs_progressbar_ = __webpack_require__("YVQ8");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_);

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// EXTERNAL MODULE: ./atomic-ui/theme/default.css
var theme_default = __webpack_require__("WY/V");

// EXTERNAL MODULE: ./atomic-ui/assets/styles/styles.css
var styles = __webpack_require__("3rmk");

// CONCATENATED MODULE: ./atomic-ui/theme/index.js
const list = [{
  name: 'default',
  label: 'Темная'
}, {
  name: 'light',
  label: 'Светлая'
}];
/* harmony default export */ var theme = ({
  colors: {
    primary: '#0070f3'
  }
});
// EXTERNAL MODULE: ./apollo/index.js + 1 modules
var apollo = __webpack_require__("pyQH");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: ./store/types/root.js
var root = __webpack_require__("zSN1");

// CONCATENATED MODULE: ./store/reducers/root.js
/* eslint-disable */

const root_initialState = {
  mutation: null,
  variables: null,
  callback: () => {},
  members: [],
  screenshots: [],
  messages: [],
  files: []
};
const rootReducer = (state = root_initialState, action) => {
  switch (action.type) {
    case root["a" /* default */].SET_MUTATE:
      return { ...state,
        ...action.payload
      };

    case root["a" /* default */].SET_MEMBERS:
      return { ...state,
        members: action.payload.members || []
      };

    case root["a" /* default */].SET_SCREENSHOTS:
      return { ...state,
        screenshots: action.payload.screenshots || []
      };

    case root["a" /* default */].SET_FILES:
      return { ...state,
        files: action.payload.files || []
      };

    case root["a" /* default */].ADD_MEMBER:
      return { ...state,
        members: [...state.members, action.payload.member]
      };

    case root["a" /* default */].SET_FOLDER:
      return { ...state,
        folder: action.payload.folder || []
      };

    case root["a" /* default */].ADD_SCREENSHOT:
      return { ...state,
        screenshots: [...state.screenshots, action.payload.screenshot]
      };

    case root["a" /* default */].SET_CHAT:
      return { ...state,
        chat: action.payload.chat
      };

    case root["a" /* default */].SET_MESSAGES:
      return { ...state,
        messages: action.payload.messages
      };

    case root["a" /* default */].ADD_FILE:
      return { ...state,
        files: [...state.files, action.payload.file]
      };

    case root["a" /* default */].REMOVE_MEMBER:
      return { ...state,
        members: state.members.filter(member => {
          var _member$value;

          return (member.email || ((_member$value = member.value) === null || _member$value === void 0 ? void 0 : _member$value.email)) !== action.payload.email;
        })
      };

    case root["a" /* default */].REMOVE_SCREENSHOT:
      return { ...state,
        screenshots: state.screenshots.filter(screenshot => screenshot.id !== action.payload.id)
      };

    case root["a" /* default */].REMOVE_FILE:
      return { ...state,
        files: state.files.filter(file => file.id !== action.payload.id)
      };

    case root["a" /* default */].CLEAR_MEMBERS:
      return { ...state,
        members: []
      };

    case root["a" /* default */].CLEAR_SCREENSHOTS:
      return { ...state,
        screenshots: []
      };

    case root["a" /* default */].CLEAR_FILES:
      return { ...state,
        files: []
      };

    default:
      return state;
  }
};
/* harmony default export */ var reducers_root = (rootReducer);
// EXTERNAL MODULE: ./store/types/user.js
var user = __webpack_require__("Ab4s");

// CONCATENATED MODULE: ./store/reducers/user.js

const user_initialState = {
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
const userReducer = (state = user_initialState, action) => {
  switch (action.type) {
    case user["a" /* default */].SET_USER:
      return { ...action.payload,
        authenticated: true
      };

    case user["a" /* default */].SET_LOGOUT:
      return {
        authenticated: false
      };

    case user["a" /* default */].UPDATE_USER:
      return { ...state,
        ...action.payload
      };

    case user["a" /* default */].ADD_USER_FOLDER:
      return { ...state,
        folders: action.payload
      };

    case user["a" /* default */].REMOVE_USER_FOLDER:
      return { ...state,
        folders: action.payload
      };

    default:
      return state;
  }
};
/* harmony default export */ var reducers_user = (userReducer);
// EXTERNAL MODULE: ./store/types/drawer.js
var drawer = __webpack_require__("mfnN");

// CONCATENATED MODULE: ./store/reducers/drawer.js

const HISTORY_LIMIT = 10;
const drawer_initialState = {
  icon: '',
  color: '',
  title: '',
  half: false,
  side: 'right',
  content: '',
  history: []
};
const drawerReducer = (state = drawer_initialState, action) => {
  var _ref, _ref2, _ref3, _ref4, _ref5, _ref6;

  switch (action.type) {
    case drawer["a" /* default */].SET_DRAWER:
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

    case drawer["a" /* default */].SET_BACK_DRAWER:
      return { ...state.history[state.history.length - 2],
        history: state.history.slice(0, state.history.length - 1),
        open: true
      };

    default:
      return state;
  }
};
/* harmony default export */ var reducers_drawer = (drawerReducer);
// EXTERNAL MODULE: ./store/types/stepper.js
var stepper = __webpack_require__("v8xy");

// CONCATENATED MODULE: ./store/reducers/stepper.js

const stepper_initialState = {
  name: '',
  content: null
};
const stepperReducer = (state = stepper_initialState, action) => {
  switch (action.type) {
    case stepper["a" /* default */].SET_STEPPER:
      return action.payload;

    default:
      return state;
  }
};
/* harmony default export */ var reducers_stepper = (stepperReducer);
// EXTERNAL MODULE: ./store/types/documents.js
var documents = __webpack_require__("/K64");

// CONCATENATED MODULE: ./store/reducers/documents.js

const documents_initialState = null;
const documentReducer = (state = documents_initialState, action) => {
  switch (action.type) {
    case documents["a" /* default */].SET_DOCUMENTS:
      return action.payload.documents;

    default:
      return state;
  }
};
/* harmony default export */ var reducers_documents = (documentReducer);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: ./store/types/snacks.js
var snacks = __webpack_require__("uiuK");

// CONCATENATED MODULE: ./store/reducers/snacks.js


const LIMIT = 10;
const snacks_initialState = [];
const snackReducer = (state = snacks_initialState, action) => {
  switch (action.type) {
    case snacks["a" /* default */].SET_ITEM:
      return [...state, {
        id: Object(external_uuid_["v4"])(),
        ...action.payload.item
      }].slice(0, LIMIT);

    case snacks["a" /* default */].REMOVE_ITEM:
      return [...state.filter(item => item.id !== action.payload.id)];

    case snacks["a" /* default */].CLEAR_ITEMS:
      return [];

    default:
      return state;
  }
};
/* harmony default export */ var reducers_snacks = (snackReducer);
// EXTERNAL MODULE: ./store/types/modal.js
var modal = __webpack_require__("Mdx/");

// CONCATENATED MODULE: ./store/reducers/modal.js

const modal_initialState = {
  size: 's',
  routes: null
};
const modalReducer = (state = modal_initialState, action) => {
  switch (action.type) {
    case modal["a" /* default */].SET_MODAL:
      return {
        routes: action.payload.routes,
        size: action.payload.size
      };

    default:
      return state;
  }
};
/* harmony default export */ var reducers_modal = (modalReducer);
// CONCATENATED MODULE: ./store/reducers/index.js
/* eslint-disable */








/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  root: reducers_root,
  user: reducers_user,
  drawer: reducers_drawer,
  stepper: reducers_stepper,
  documents: reducers_documents,
  snacks: reducers_snacks,
  modal: reducers_modal
}));
// CONCATENATED MODULE: ./store/index.js
/* eslint-disable */




let store_store;

function initStore(preloadedState = {}) {
  return Object(external_redux_["createStore"])(reducers, preloadedState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])()));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store_store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState);

  if (preloadedState && store_store) {
    _store = initStore({ ...store_store.getState(),
      ...preloadedState
    });
    store_store = undefined;
  }

  if (true) return _store;
  if (!store_store) store_store = _store;
  return _store;
};
function useStore(initialState) {
  const store = Object(external_react_["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
}
// CONCATENATED MODULE: ./pages/_app.js














const App = ({
  Component,
  pageProps
}) => {
  const client = Object(apollo["b" /* useApollo */])(pageProps.initialApolloState);
  const store = useStore(pageProps.initialReduxState);
  const router = Object(router_["useRouter"])();
  return /*#__PURE__*/external_react_default.a.createElement(external_react_redux_["Provider"], {
    store: store
  }, /*#__PURE__*/external_react_default.a.createElement(react_hooks_["ApolloProvider"], {
    client: client
  }, /*#__PURE__*/external_react_default.a.createElement(head_default.a, null, /*#__PURE__*/external_react_default.a.createElement("title", null, "\u0410\u0442\u043E\u043C\u0438\u043A"), /*#__PURE__*/external_react_default.a.createElement("meta", {
    charSet: 'utf-8'
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: 'viewport',
    content: 'minimum-scale=1, initial-scale=1, width=device-width'
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: 'theme-color',
    content: '#000000'
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: 'description',
    content: 'Атомик – портал для формирования новой сферы образования'
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: 'yandex-verification',
    content: 'bfd04b96d30382f5'
  })), /*#__PURE__*/external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/external_react_default.a.createElement(external_framer_motion_["motion"].div, {
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
  }, /*#__PURE__*/external_react_default.a.createElement(Component, pageProps)), /*#__PURE__*/external_react_default.a.createElement(external_nextjs_progressbar_default.a, {
    color: 'var(--default-color-accent)',
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 3
  }))));
};

const getServerSideProps = async () => {
  const store = initializeStore();
  const client = Object(apollo["a" /* initializeApollo */])();
  return {
    props: {
      initialReduxState: store.getState(),
      initialApolloState: client.cache.extract()
    },
    revalidate: 1
  };
};
/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "2rN0":
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),

/***/ "3rmk":
/***/ (function(module, exports) {



/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Ab4s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  SET_USER: 'SET_USER',
  SET_LOGOUT: 'SET_LOGOUT',
  SET_AUTH_USER: 'SET_AUTH_USER',
  UPDATE_USER: 'UPDATE_USER',
  ADD_USER_FOLDER: 'ADD_USER_FOLDER',
  REMOVE_USER_FOLDER: 'REMOVE_USER_FOLDER'
});

/***/ }),

/***/ "BPlj":
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Mdx/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  SET_MODAL: 'SET_MODAL'
});

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "P3Wl":
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "WY/V":
/***/ (function(module, exports) {



/***/ }),

/***/ "YVQ8":
/***/ (function(module, exports) {

module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mfnN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  SET_DRAWER: 'SET_DRAWER',
  SET_BACK_DRAWER: 'SET_BACK_DRAWER'
});

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "pyQH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ initializeApollo; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useApollo; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "deepmerge"
var external_deepmerge_ = __webpack_require__("2rN0");
var external_deepmerge_default = /*#__PURE__*/__webpack_require__.n(external_deepmerge_);

// EXTERNAL MODULE: external "apollo-client"
var external_apollo_client_ = __webpack_require__("Oyez");

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__("oz4i");

// EXTERNAL MODULE: external "apollo-upload-client"
var external_apollo_upload_client_ = __webpack_require__("BPlj");

// EXTERNAL MODULE: external "apollo-link"
var external_apollo_link_ = __webpack_require__("vuC2");

// EXTERNAL MODULE: external "apollo-link-error"
var external_apollo_link_error_ = __webpack_require__("P3Wl");

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// CONCATENATED MODULE: ./apollo/client/index.js






const SSR = true;
const NODE_ENV = false;
const SERVER_URL = NODE_ENV ? config["a" /* default */].get('server-local-url') : config["a" /* default */].get('server-host-url');
const SECRET = config["a" /* default */].get('secret');

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
const errorLink = Object(external_apollo_link_error_["onError"])(({
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
const requestLink = new external_apollo_link_["ApolloLink"]((operation, forward) => new external_apollo_link_["Observable"](observer => {
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
const uploadLink = Object(external_apollo_upload_client_["createUploadLink"])({
  uri: `${SERVER_URL}/graphql`,
  credentials: 'same-origin'
});
function createApolloClient() {
  return new external_apollo_client_["ApolloClient"]({
    ssrMode: SSR,
    link: external_apollo_link_["ApolloLink"].from([errorLink, requestLink, uploadLink]),
    cache: new external_apollo_cache_inmemory_["InMemoryCache"](),
    defaultOptions
  });
}
// CONCATENATED MODULE: ./apollo/index.js



let apolloClient;
function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = external_deepmerge_default()(initialState, existingCache);

    _apolloClient.cache.restore(data);
  }

  if (true) return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  return Object(external_react_["useMemo"])(() => initializeApollo(initialState), [initialState]);
}

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rOcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = ({
  get: key => config[key]
});

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "uiuK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  SET_ITEM: 'SET_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEMS: 'CLEAR_ITEMS'
});

/***/ }),

/***/ "v8xy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  SET_STEPPER: 'SET_STEPPER'
});

/***/ }),

/***/ "vuC2":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zSN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
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

/***/ })

/******/ });
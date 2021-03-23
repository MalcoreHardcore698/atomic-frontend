module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+EEm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ onMenu; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ onHelp; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ onNotification; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ onChat; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ onFileLink; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ onIndexVideoLink; });

// UNUSED EXPORTS: Presentation

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-youtube"
var external_react_youtube_ = __webpack_require__("oLQh");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_);

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Button/index.js
var Button = __webpack_require__("ZeZO");

// EXTERNAL MODULE: ./atomic-ui/components/Divider/index.js
var Divider = __webpack_require__("RKiZ");

// EXTERNAL MODULE: ./atomic-ui/components/Menu/index.js
var Menu = __webpack_require__("Tt38");

// CONCATENATED MODULE: ./atomic-ui/components/Menu/Dash/index.js
var __jsx = external_react_default.a.createElement;





const Wrap = external_styled_components_default()(Column["a" /* default */])``;
const Dash_Menu = external_styled_components_default()(Menu["b" /* default */])`
  ${Menu["a" /* List */]} {
    padding: 0;

    button p {
      color: var(--admin-color-accent);
    }

    span {
      display: none;
    }
  }
`;
const Dash = ({
  links
}) => __jsx(Wrap, null, __jsx(Divider["a" /* default */], {
  clear: true
}), __jsx(Dash_Menu, {
  links: links,
  appearance: 'clear'
}), __jsx(Divider["a" /* default */], {
  clear: true
}));
/* harmony default export */ var Menu_Dash = (Dash);
// EXTERNAL MODULE: ./atomic-ui/components/Text/index.js
var Text = __webpack_require__("QUga");

// EXTERNAL MODULE: ./components/FormTicket/index.js
var FormTicket = __webpack_require__("PYoj");

// EXTERNAL MODULE: ./atomic-ui/components/Alert/index.js
var Alert = __webpack_require__("ZwIX");

// EXTERNAL MODULE: ./atomic-ui/components/Notice/index.js
var Notice = __webpack_require__("Yi3Q");

// CONCATENATED MODULE: ./components/Notifications/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Notifications_Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "Notifications__Wrap",
  componentId: "sc-1luuv3g-0"
})([""]);
const Notifications = ({
  notifications,
  appearance
}) => /*#__PURE__*/external_react_default.a.createElement(Notifications_Wrap, null, notifications && notifications.length > 0 ? notifications.map(notification => {
  var _notification$author;

  return /*#__PURE__*/external_react_default.a.createElement(Notice["a" /* default */], _extends({
    key: notification.id
  }, notification.author ? {
    img: (_notification$author = notification.author) === null || _notification$author === void 0 ? void 0 : _notification$author.avatar.path
  } : {
    icon: 'infoCircle'
  }, {
    title: notification.title,
    message: notification.message,
    date: notification.createdAt,
    appearance: appearance
  }));
}) : /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
  style: {
    textAlign: 'center'
  },
  width: '100%'
}, "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 \u043D\u0435\u0442"));
Notifications.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ var components_Notifications = (Notifications);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./atomic-ui/components/Row/index.js
var Row = __webpack_require__("nShV");

// EXTERNAL MODULE: ./atomic-ui/components/Member/index.js
var Member = __webpack_require__("otXJ");

// EXTERNAL MODULE: ./atomic-ui/components/Search/index.js
var Search = __webpack_require__("t7jn");

// EXTERNAL MODULE: ./atomic-ui/components/Spinner/index.js
var Spinner = __webpack_require__("auMy");

// EXTERNAL MODULE: ./components/Styled/index.js
var Styled = __webpack_require__("586Q");

// EXTERNAL MODULE: ./components/Form/index.js
var Form = __webpack_require__("qoM+");

// EXTERNAL MODULE: ./atomic-ui/components/Message/index.js
var Message = __webpack_require__("7ni8");

// EXTERNAL MODULE: ./atomic-ui/components/Input/index.js
var Input = __webpack_require__("Gliw");

// EXTERNAL MODULE: ./atomic-ui/components/Icon/index.js + 109 modules
var Icon = __webpack_require__("feIE");

// CONCATENATED MODULE: ./components/MessengerChat/index.js
function MessengerChat_extends() { MessengerChat_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MessengerChat_extends.apply(this, arguments); }













const MessengerChat_Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "MessengerChat__Wrap",
  componentId: "sc-1qcfj1w-0"
})(["width:100%;flex-grow:1;"]);
const Messages = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "MessengerChat__Messages",
  componentId: "sc-1qcfj1w-1"
})(["background:#fbfbfb;border-radius:var(--surface-border-radius);padding:var(--default-gap);flex-grow:1;"]);
const Empty = external_styled_components_default()(Text["b" /* default */]).withConfig({
  displayName: "MessengerChat__Empty",
  componentId: "sc-1qcfj1w-2"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;flex-grow:1;"]);
const MessengerChat = ({
  chat,
  error,
  loading,
  appearance,
  className,
  onLink,
  onAttach,
  onSubmit,
  ...props
}) => {
  var _chat$messages, _chat$messages2;

  const [message, setMessage] = Object(external_react_["useState"])('');
  const messageRef = Object(external_react_["useRef"])(null);
  return /*#__PURE__*/external_react_default.a.createElement(MessengerChat_Wrap, MessengerChat_extends({}, props, {
    className: className
  }), /*#__PURE__*/external_react_default.a.createElement(Messages, null, !loading && (chat === null || chat === void 0 ? void 0 : (_chat$messages = chat.messages) === null || _chat$messages === void 0 ? void 0 : _chat$messages.length) > 0 ? chat.messages.map(item => {
    var _item$user, _item$user$avatar;

    return /*#__PURE__*/external_react_default.a.createElement(Message["a" /* default */], {
      key: item.id,
      avatar: (_item$user = item.user) === null || _item$user === void 0 ? void 0 : (_item$user$avatar = _item$user.avatar) === null || _item$user$avatar === void 0 ? void 0 : _item$user$avatar.path,
      side: item.side,
      name: item.name,
      text: item.text,
      time: item.createdAt,
      tails: {
        default: '/parts/tail.svg',
        owner: '/parts/tail-owner.svg'
      },
      onLink: onLink
    });
  }) : loading ? /*#__PURE__*/external_react_default.a.createElement(Styled["c" /* Loader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null)) : error ? /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    appearance: 'error',
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "\u0423\u043F\u0441! \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u0447\u0430\u0442\u0435") : /*#__PURE__*/external_react_default.a.createElement(Empty, null, (chat === null || chat === void 0 ? void 0 : (_chat$messages2 = chat.messages) === null || _chat$messages2 === void 0 ? void 0 : _chat$messages2.length) === 0 ? 'История сообщений пуста' : 'Выберите чат')), chat && /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    kind: 'icon',
    disabled: loading || !chat,
    onSubmit: onAttach
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'attach',
    stroke: 'white'
  })), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    name: 'text',
    ref: messageRef,
    placeholder: 'Отправьте сообщенение...',
    disabled: loading || !chat,
    appearance: appearance,
    onChange: e => {
      var _e$target;

      return setMessage((e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value) || '');
    },
    onKeyDown: e => {
      // Pressed ENTER
      if (e.keyCode === 13) {
        onSubmit(message);
        messageRef.current.value = '';
      }
    },
    tabIndex: -1
  }), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    kind: 'icon',
    disabled: loading || !chat,
    onClick: () => {
      onSubmit(message);
      messageRef.current.value = '';
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'send',
    stroke: 'white'
  }))));
};
/* harmony default export */ var components_MessengerChat = (MessengerChat);
// EXTERNAL MODULE: ./graphql/queries/index.js + 15 modules
var queries = __webpack_require__("u2Cb");

// CONCATENATED MODULE: ./components/Messenger/index.js
function Messenger_extends() { Messenger_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Messenger_extends.apply(this, arguments); }














const Messenger_Wrap = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "Messenger__Wrap",
  componentId: "sc-1hnkbvn-0"
})(["height:100%;flex-grow:1;", "{width:100%;padding:0;}@media only screen and (max-width:568px){flex-direction:column;}", " ", " ", ""], Form["a" /* Wrap */], ({
  appearance
}) => appearance === 'default' && Object(external_styled_components_["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const ChatsSearch = external_styled_components_default()(Search["a" /* default */]).withConfig({
  displayName: "Messenger__ChatsSearch",
  componentId: "sc-1hnkbvn-1"
})(["margin-bottom:10px;"]);
const Chats = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "Messenger__Chats",
  componentId: "sc-1hnkbvn-2"
})(["grid-gap:0;width:320px;@media only screen and (max-width:568px){width:100%;}"]);
const Chat = external_styled_components_default()(Member["a" /* default */]).withConfig({
  displayName: "Messenger__Chat",
  componentId: "sc-1hnkbvn-3"
})(["margin:0;padding:10px 0;border-radius:var(--surface-border-radius);transition:all 150ms ease;", ""], ({
  active
}) => active && Object(external_styled_components_["css"])(["background:var(--input-background);padding:10px;"]));
const getUnreadedMessages = (messages, sender) => (messages || []).reduce((acc, item) => {
  var _item$user;

  return acc + (item.type === 'UNREADED' && ((_item$user = item.user) === null || _item$user === void 0 ? void 0 : _item$user.email) !== sender ? 1 : 0);
}, 0);
const getLastMessage = (messages, sender) => {
  var _message$user;

  const list = messages || [];
  const message = list[list.length - 1];
  if (!message) return '';
  return `${((_message$user = message.user) === null || _message$user === void 0 ? void 0 : _message$user.email) === sender ? 'Вы: ' : ''}${message.text}`;
};
const getExtendMessages = (messages, sender) => messages.map(message => ({ ...message,
  side: sender === message.user.email ? 'owner' : 'observer'
}));
const Messenger = ({
  appearance,
  recipient,
  sender,
  onAttach,
  onMemberLink,
  ...props
}) => {
  const [currentChat, setCurrentChat] = Object(external_react_["useState"])(null);
  const [loading, setLoading] = Object(external_react_["useState"])(false);
  const [chats, setChats] = Object(external_react_["useState"])([]);
  const [userChats, setUserChats] = Object(external_react_["useState"])([]);
  const [ticketChats, setTicketChats] = Object(external_react_["useState"])([]);
  const [getChat, {
    data: chat,
    loading: loadingChat,
    error: errorChat,
    refetch: refetchChat
  }] = Object(react_hooks_["useLazyQuery"])(queries["a" /* default */].GET_CHAT);
  const [getTicket, {
    data: ticket,
    loading: loadingTicket,
    error: errorTicket,
    refetch: refetchTicket
  }] = Object(react_hooks_["useLazyQuery"])(queries["a" /* default */].GET_TICKET);
  const {
    data: dataUserChats,
    loading: loadingUserChats,
    error: errorUserChats,
    refetch: getUserChats
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_USER_CHATS);
  const {
    data: dataTicketChats,
    loading: loadingTicketChats,
    error: errorUserTickets,
    refetch: getUserTickets
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_USER_TICKETS);
  const [sendMessage, {
    data: dataSendMessage,
    loading: loadingSendMessage,
    error: errorSendMessage
  }] = Object(react_hooks_["useMutation"])(queries["a" /* default */].SEND_MESSAGE);
  const [sendTicketMessage, {
    data: dataUserSendMessage,
    loading: loadingUserSendMessage,
    error: errorUserSendMessage
  }] = Object(react_hooks_["useMutation"])(queries["a" /* default */].SEND_TICKET_MESSAGE);
  const [addUserChat] = Object(react_hooks_["useMutation"])(queries["a" /* default */].ADD_USER_CHAT);
  Object(external_react_["useEffect"])(() => {
    if (recipient) {
      addUserChat({
        variables: {
          recipient
        }
      }).then(() => {
        getUserChats();
        getUserTickets();
      });
    }
  }, [recipient, addUserChat]);
  Object(external_react_["useEffect"])(() => {
    if (recipient && !currentChat && !loadingUserChats && dataUserChats !== null && dataUserChats !== void 0 && dataUserChats.getUserChats) {
      var _dataUserChats$getUse;

      const id = (_dataUserChats$getUse = dataUserChats.getUserChats.find(userChat => userChat.chat.members.find(member => member.email === recipient))) === null || _dataUserChats$getUse === void 0 ? void 0 : _dataUserChats$getUse.chat.id;
      if (id) getChat({
        variables: {
          id
        }
      });
    }
  }, [recipient, dataUserChats, loadingUserChats]);
  Object(external_react_["useEffect"])(() => {
    if (!loadingChat && chat !== null && chat !== void 0 && chat.getChat) {
      setCurrentChat(chat.getChat);
    }
  }, [chat, loadingChat]);
  Object(external_react_["useEffect"])(() => {
    if (!loadingTicket && ticket !== null && ticket !== void 0 && ticket.getTicket) {
      setCurrentChat(ticket.getTicket);
    }
  }, [ticket, loadingTicket]);
  Object(external_react_["useEffect"])(() => {
    if (!loadingSendMessage && dataSendMessage) {
      setCurrentChat(prev => ({ ...prev,
        messages: getExtendMessages(dataSendMessage.sendMessage, sender)
      }));
    }
  }, [sender, dataSendMessage, loadingSendMessage]);
  Object(external_react_["useEffect"])(() => {
    if (!loadingUserSendMessage && dataUserSendMessage) {
      setCurrentChat(prev => ({ ...prev,
        messages: getExtendMessages(dataUserSendMessage.sendTicketMessage, sender)
      }));
    }
  }, [sender, dataUserSendMessage, loadingUserSendMessage]);
  Object(external_react_["useEffect"])(() => {
    if (!loadingUserChats && dataUserChats !== null && dataUserChats !== void 0 && dataUserChats.getUserChats) {
      setUserChats(dataUserChats.getUserChats);
    }
  }, [dataUserChats, loadingUserChats]);
  Object(external_react_["useEffect"])(() => {
    if (!loadingTicketChats && dataTicketChats !== null && dataTicketChats !== void 0 && dataTicketChats.getUserTickets) {
      setTicketChats(dataTicketChats.getUserTickets);
    }
  }, [dataTicketChats, loadingTicketChats]);
  Object(external_react_["useEffect"])(() => {
    setChats(userChats.concat(ticketChats));
  }, [userChats, ticketChats]);
  return /*#__PURE__*/external_react_default.a.createElement(Messenger_Wrap, Messenger_extends({}, props, {
    appearance: appearance
  }), /*#__PURE__*/external_react_default.a.createElement(Chats, null, /*#__PURE__*/external_react_default.a.createElement(ChatsSearch, {
    appearance: 'ghost'
  }), !loadingChat && !loadingTicket && !loadingUserChats && !loadingTicketChats && !loadingSendMessage && !loadingUserSendMessage && chats.length > 0 ? chats.map(chat => {
    var _chat$chat, _chat$chat2, _chat$counsellor, _chat$chat3, _chat$chat3$members$f, _chat$counsellor2, _chat$counsellor2$ava, _chat$chat4, _chat$chat5, _chat$chat6, _chat$chat7, _chat$chat10;

    return /*#__PURE__*/external_react_default.a.createElement(Chat, {
      key: ((_chat$chat = chat.chat) === null || _chat$chat === void 0 ? void 0 : _chat$chat.id) || chat.id,
      name: ((_chat$chat2 = chat.chat) === null || _chat$chat2 === void 0 ? void 0 : _chat$chat2.members.filter(member => member.email !== sender)[0].name) || ((_chat$counsellor = chat.counsellor) === null || _chat$counsellor === void 0 ? void 0 : _chat$counsellor.name),
      avatar: ((_chat$chat3 = chat.chat) === null || _chat$chat3 === void 0 ? void 0 : (_chat$chat3$members$f = _chat$chat3.members.filter(member => member.email !== sender)[0].avatar) === null || _chat$chat3$members$f === void 0 ? void 0 : _chat$chat3$members$f.path) || ((_chat$counsellor2 = chat.counsellor) === null || _chat$counsellor2 === void 0 ? void 0 : (_chat$counsellor2$ava = _chat$counsellor2.avatar) === null || _chat$counsellor2$ava === void 0 ? void 0 : _chat$counsellor2$ava.path) || '/images/avatar-default.png',
      budge: ((_chat$chat4 = chat.chat) === null || _chat$chat4 === void 0 ? void 0 : _chat$chat4.messages) && getUnreadedMessages((_chat$chat5 = chat.chat) === null || _chat$chat5 === void 0 ? void 0 : _chat$chat5.messages, sender) || chat.messages && getUnreadedMessages(chat.messages, sender) || null,
      position: ((_chat$chat6 = chat.chat) === null || _chat$chat6 === void 0 ? void 0 : _chat$chat6.messages) && getLastMessage((_chat$chat7 = chat.chat) === null || _chat$chat7 === void 0 ? void 0 : _chat$chat7.messages, sender) || chat.messages && getLastMessage(chat.messages, sender) || null,
      onClick: async () => {
        var _chat$chat8;

        setLoading(true);

        if ((_chat$chat8 = chat.chat) !== null && _chat$chat8 !== void 0 && _chat$chat8.id) {
          var _chat$chat9;

          const variables = {
            id: (_chat$chat9 = chat.chat) === null || _chat$chat9 === void 0 ? void 0 : _chat$chat9.id
          };
          if (refetchChat) await refetchChat(variables);else await getChat({
            variables
          });
          setCurrentChat(chat.chat);
        } else {
          const variables = {
            id: chat.id
          };
          if (refetchTicket) await refetchTicket(variables);else await getTicket({
            variables
          });
          setCurrentChat(chat);
        }

        setLoading(false);
      },
      active: currentChat && currentChat.id === (((_chat$chat10 = chat.chat) === null || _chat$chat10 === void 0 ? void 0 : _chat$chat10.id) || chat.id)
    });
  }) : loadingChat || loadingTicket || loadingUserChats || loadingTicketChats || loadingSendMessage || loadingUserSendMessage ? /*#__PURE__*/external_react_default.a.createElement(Styled["c" /* Loader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null)) : /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    style: {
      marginTop: 15
    }
  }, "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0447\u0430\u0442\u044B \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442")), /*#__PURE__*/external_react_default.a.createElement(components_MessengerChat, {
    chat: currentChat && { ...currentChat,
      messages: currentChat.messages.map(message => ({ ...message,
        side: sender === message.user.email ? 'owner' : 'observer'
      }))
    },
    appearance: 'ghost',
    error: errorChat || errorTicket || errorUserChats || errorUserTickets || errorSendMessage || errorUserSendMessage,
    loading: loading || loadingTicket || loadingChat || loadingUserChats || loadingTicketChats || loadingSendMessage || loadingUserSendMessage,
    onLink: onMemberLink,
    onAttach: onAttach,
    onSubmit: value => {
      if (currentChat.members) {
        const candidate = currentChat.members.find(member => member.email !== sender);
        sendMessage({
          variables: {
            sender,
            recipient: recipient || (candidate === null || candidate === void 0 ? void 0 : candidate.email),
            text: value
          }
        });
      } else {
        var _currentChat$author;

        sendTicketMessage({
          variables: {
            ticket: currentChat.id,
            recipient: (_currentChat$author = currentChat.author) === null || _currentChat$author === void 0 ? void 0 : _currentChat$author.email,
            text: value,
            isClient: true
          }
        });
      }
    }
  }));
};
Messenger.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ var components_Messenger = (Messenger);
// EXTERNAL MODULE: ./store/actions/drawer.js
var drawer = __webpack_require__("Ztxg");

// EXTERNAL MODULE: ./store/actions/modal.js
var modal = __webpack_require__("qOKH");

// EXTERNAL MODULE: ./store/helpers/user.js + 11 modules
var user = __webpack_require__("rP4V");

// EXTERNAL MODULE: ./store/actions/snacks.js
var snacks = __webpack_require__("9Xo6");

// CONCATENATED MODULE: ./store/helpers/index.js














const Presentation = external_styled_components_default()(external_react_youtube_default.a).withConfig({
  displayName: "helpers__Presentation",
  componentId: "t5pxc3-0"
})(["display:flex;flex-grow:1;width:100%;height:80vh;border-radius:var(--surface-border-radius);overflow:hidden;iframe{width:100%;height:100%;}"]);
function onMenu(dispatch, props) {
  const {
    links
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    side: 'left',
    half: true,
    content: /*#__PURE__*/external_react_default.a.createElement(Menu_Dash, {
      links: links
    })
  }));
}
function onHelp(dispatch, props) {
  const {
    mutation
  } = props;
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: 'Поддержка',
    component: () => /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
      style: {
        padding: '15px'
      }
    }, /*#__PURE__*/external_react_default.a.createElement(FormTicket["a" /* default */], {
      title: false,
      mutation: mutation,
      appearance: 'clear',
      onSubmit: async (form, action) => {
        try {
          var _form$category;

          await action({
            variables: {
              input: {
                title: form.title,
                message: form.message,
                category: (_form$category = form.category) === null || _form$category === void 0 ? void 0 : _form$category.value
              }
            }
          });
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Вопрос успешно отправлен'
          }));
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось отправить вопрос'
          }));
        } finally {
          dispatch(Object(modal["a" /* setModal */])(null));
        }
      },
      isClient: true
    }))
  }]));
}
function onNotification(dispatch, props) {
  const {
    notifications
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'notification',
    title: 'Уведомления',
    content: /*#__PURE__*/external_react_default.a.createElement(components_Notifications, {
      notifications: notifications,
      appearance: 'clear'
    })
  }));
}
function onChat(dispatch, props) {
  const {
    sender,
    recipient
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'chat',
    title: 'Мессенджер',
    content: /*#__PURE__*/external_react_default.a.createElement(components_Messenger, {
      recipient: recipient,
      sender: sender,
      appearance: 'clear',
      onMemberLink: () => Object(user["i" /* onUserLink */])(dispatch, props),
      onSubmit: async (form, action, recipient) => {
        try {
          const response = await action({
            variables: {
              recipient: recipient.email,
              text: form.text
            }
          });
          return response.data.sendMessage;
        } catch (err) {
          console.log(err);
        }
      }
    })
  }));
}
function onFileLink(dispatch) {
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: 'Информация о файле',
    component: () => /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
      style: {
        padding: '15px'
      }
    }, /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, "Bechtel \u043E\u0442\u0432\u0435\u0447\u0430\u043B \u0437\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u0437\u0430\u043A\u0443\u043F\u043A\u0438, \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E, \u0437\u0430\u043F\u0443\u0441\u043A \u0438 \u0432\u0432\u043E\u0434 \u0432 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E \u043D\u043E\u0432\u043E\u0433\u043E \u0433\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043F\u0430\u0440\u043E\u0433\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C\u044E 700 \u043C\u0435\u0433\u0430\u0432\u0430\u0442\u0442 \u0432 \u041E\u0433\u0430\u0439\u043E, \u0421\u0428\u0410 \u0438 \u0432\u0432\u043E\u0434 \u0432 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0438\u044E \u043D\u043E\u0432\u043E\u0433\u043E \u0433\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043F\u0430\u0440\u043E\u0433\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C\u044E 700 \u043C\u0435\u0433\u0430\u0432\u0430\u0442\u0442 \u0432 \u041E\u0433\u0430\u0439\u043E, \u0421\u0428\u0410"), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], null, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0444\u0430\u0439\u043B"))
  }]));
}
function onIndexVideoLink(dispatch, props) {
  const {
    video
  } = props;
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: '',
    component: () => /*#__PURE__*/external_react_default.a.createElement(Presentation, {
      videoId: video
    })
  }], 'l'));
}

/***/ }),

/***/ "+nv6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export DateText */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.time`
  font-size: var(--font-size-s);
`;
const DateText = (_ref) => {
  var _Date$toLocaleString;

  let {
    text,
    locales,
    options
  } = _ref,
      props = _objectWithoutProperties(_ref, ["text", "locales", "options"]);

  return __jsx(Wrap, props, (_Date$toLocaleString = new Date(parseInt(text) || text).toLocaleString(locales, options)) !== null && _Date$toLocaleString !== void 0 ? _Date$toLocaleString : 'Date Invalid');
};
DateText.defaultProps = {
  text: new Date(),
  locales: 'ru-RU',
  options: {
    hour: 'numeric',
    minute: '2-digit'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (DateText);

/***/ }),

/***/ "/K64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  SET_DOCUMENTS: 'SET_DOCUMENTS'
});

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "07fs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export FadeLoad */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "FadeLoad__Wrap",
  componentId: "sc-1rdnrub-0"
})(["opacity:0;transition:opacity 100ms ease;", ""], ({
  isVisible
}) => isVisible && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["opacity:1;"]));
const FadeLoad = ({
  children
}) => {
  const [isVisible, setVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const domRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    isVisible: isVisible,
    ref: domRef
  }, children);
};
/* harmony default export */ __webpack_exports__["a"] = (FadeLoad);

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "0RHc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7BXr");
/* harmony import */ var _atomic_ui_components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EJJs");
/* harmony import */ var _atomic_ui_components_Table_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("e3uv");
/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pyQH");
/* harmony import */ var _hooks_useHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ApjV");
/* harmony import */ var _hooks_useMutate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("lphG");
/* harmony import */ var _layouts_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("QX5T");
/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("1zqG");
/* harmony import */ var _components_LazyLoad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("VP1n");
/* harmony import */ var _components_FadeLoad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("07fs");
/* harmony import */ var _store_helpers_project__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("IxyI");
/* harmony import */ var _store_actions_documents__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("j8/+");
/* harmony import */ var _atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("NWnW");
/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("8ihE");
/* harmony import */ var _store_helpers_user__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("rP4V");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("u2Cb");


















const TITLE = 'Проекты';
const START_OFFSET = 12;
const LIMIT = 12;

const Projects = ({
  store
}) => {
  const recall = Object(_hooks_useHelper__WEBPACK_IMPORTED_MODULE_6__[/* useHelper */ "b"])();
  const mutate = Object(_hooks_useMutate__WEBPACK_IMPORTED_MODULE_7__[/* useMutate */ "a"])();
  const {
    user,
    documents
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => ({
    user: state.user,
    documents: state.documents
  }));
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const [displayMethod, onChangeDisplayMethod] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('grid');
  const canEditStatus = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => user && user.role.name === 'ADMIN', [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_store_actions_documents__WEBPACK_IMPORTED_MODULE_13__[/* setDocuments */ "a"])(null));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_content__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    title: TITLE,
    filters: [{
      type: 'DATEPICKER'
    }, {
      type: 'SELECT',
      options: store === null || store === void 0 ? void 0 : store.categories.map(category => ({
        value: category.id,
        label: Object(_atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_14__[/* getLabelCategory */ "d"])(category.name)
      }))
    }],
    options: [{
      label: 'Компания',
      value: 'company'
    }, {
      label: 'Участники',
      value: 'members'
    }, {
      label: 'Дата публикации',
      value: 'createdAt'
    }],
    handle: {
      icon: 'work',
      buttonCreateText: 'Создать проект',
      onCreate: recall(_store_helpers_project__WEBPACK_IMPORTED_MODULE_12__[/* onProjectCreate */ "b"], {
        companies: store.companies,
        categories: store.categories,
        statuses: store.statuses,
        canEditStatus,
        mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].CREATE_PROJECT,
        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].GET_USERS
      }),
      onChangeDisplayMethod: item => onChangeDisplayMethod(item.value)
    },
    limit: LIMIT,
    startOffset: START_OFFSET,
    bottomScrollOffset: 0,
    query: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].GET_PROJECTS,
    variables: {
      status: 'PUBLISHED'
    },
    store: {
      documents: documents || store.projects
    },
    dashboard: true
  }, ({
    documents
  }) => displayMethod === 'list' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Table__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"], {
    data: documents,
    template: _atomic_ui_components_Table_templates__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].project,
    onChecked: () => {},
    onClick: project => recall(_store_helpers_project__WEBPACK_IMPORTED_MODULE_12__[/* onProjectLink */ "e"], {
      id: project.id,
      auth: user
    })(),
    onDelete: project => recall(_store_helpers_project__WEBPACK_IMPORTED_MODULE_12__[/* onProjectDelete */ "c"], {
      id: project.id,
      project,
      auth: user,
      mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].DELETE_PROJECT
    })(),
    onEdit: project => recall(_store_helpers_project__WEBPACK_IMPORTED_MODULE_12__[/* onProjectEdit */ "d"], {
      id: project.id,
      companies: store.companies,
      categories: store.categories,
      statuses: store.statuses,
      canEditStatus,
      mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].UPDATE_PROJECT,
      query: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].GET_USERS,
      onCompanyInputChange: mutate(_graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].GET_USERS, {
        account: 'ENTITY'
      })
    })(),
    style: {
      overflowX: 'auto',
      width: 'calc(100vw - 290px)'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Grid__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, documents.map(project => {
    var _user$folders;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FadeLoad__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
      key: project.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_9__[/* default */ "c"], {
      project: project,
      onChecked: () => {},
      onScreenshotClick: (_, key) => recall(_store_helpers_project__WEBPACK_IMPORTED_MODULE_12__[/* onProjectScreenshot */ "g"], {
        screenshots: [project.preview, ...project.screenshots],
        key
      })(),
      onLink: recall(_store_helpers_project__WEBPACK_IMPORTED_MODULE_12__[/* onProjectLink */ "e"], {
        id: project.id,
        auth: user === null || user === void 0 ? void 0 : user.email,
        added: !!(user !== null && user !== void 0 && (_user$folders = user.folders) !== null && _user$folders !== void 0 && _user$folders.find(folder => !!(folder !== null && folder !== void 0 && folder.projects.find(item => item === project.id)))),
        liked: !!(project.rating || []).find(item => item.email === (user === null || user === void 0 ? void 0 : user.email)),
        onLike: user.email && mutate(_graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].LIKE_PROJECT, {
          id: project.id
        }, response => dispatch(Object(_store_actions_user__WEBPACK_IMPORTED_MODULE_15__[/* updateUser */ "e"])(response.data.likeProject))),
        onAdd: user.email && recall(_store_helpers_project__WEBPACK_IMPORTED_MODULE_12__[/* onProjectAdd */ "a"], {
          id: project.id,
          folders: user === null || user === void 0 ? void 0 : user.folders,
          mutations: {
            addProject: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].ADD_USER_PROJECT,
            createFolder: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].ADD_USER_FOLDER
          },
          callback: item => {
            const result = { ...item,
              projects: [...item.projects, project.id]
            };
            dispatch(Object(_store_actions_user__WEBPACK_IMPORTED_MODULE_15__[/* setUserFolder */ "c"])(result));
          }
        })
      }),
      onAboutMore: recall(_store_helpers_user__WEBPACK_IMPORTED_MODULE_16__[/* onUserAboutMore */ "a"], {
        user: project
      }),
      onDelete: recall(_store_helpers_project__WEBPACK_IMPORTED_MODULE_12__[/* onProjectDelete */ "c"], {
        id: project.id,
        project,
        auth: user,
        mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].DELETE_PROJECT
      }),
      onEdit: recall(_store_helpers_project__WEBPACK_IMPORTED_MODULE_12__[/* onProjectEdit */ "d"], {
        id: project.id,
        companies: store.companies,
        categories: store.categories,
        statuses: store.statuses,
        canEditStatus,
        mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].UPDATE_PROJECT,
        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].GET_USERS,
        onCompanyInputChange: mutate(_graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].GET_USERS, {
          account: 'ENTITY'
        })
      }),
      preview: true
    })));
  })));
};

async function getServerSideProps() {
  const client = Object(_apollo__WEBPACK_IMPORTED_MODULE_5__[/* initializeApollo */ "a"])();
  let projects = [];
  let companies = [];
  let categories = [];
  let statuses = [];

  try {
    const response = await client.query({
      query: _graphql_queries__WEBPACK_IMPORTED_MODULE_17__[/* default */ "a"].GET_META_DASHBOARD_PROJECTS,
      variables: {
        offset: 0,
        limit: LIMIT,
        account: ['ENTITY']
      }
    });

    if (response && response.data) {
      projects = response.data.getProjects;
      companies = response.data.getUsers;
      categories = response.data.getCategories;
      statuses = response.data.getPostStatus;
    }
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      store: {
        projects,
        companies,
        categories,
        statuses
      }
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0RHc");


/***/ }),

/***/ "1zqG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Poster; });
/* unused harmony export Wrap */
/* unused harmony export Content */
/* unused harmony export Screenshots */
/* unused harmony export Screenshot */
/* unused harmony export ScreenshotsCounter */
/* unused harmony export Header */
/* unused harmony export Actions */
/* unused harmony export Name */
/* unused harmony export About */
/* unused harmony export Company */
/* unused harmony export Footer */
/* unused harmony export Card */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("DTT8");
/* harmony import */ var _atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VWQm");
/* harmony import */ var _atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8CDE");
/* harmony import */ var _atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("7sPp");
/* harmony import */ var _atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("QUga");
/* harmony import */ var _atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("feIE");
/* harmony import */ var _atomic_ui_components_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("V0nP");
/* harmony import */ var _atomic_ui_components_Meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("aBfq");
/* harmony import */ var _atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("RKiZ");
/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("ZeZO");
/* harmony import */ var _atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("79b8");
/* harmony import */ var _hooks_useEntityQuery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("8UhZ");
/* harmony import */ var _Styled__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("586Q");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















const Media = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).withConfig({
  displayName: "ProjectCard__Media",
  componentId: "g3ik0u-0"
})(["grid-gap:5px;& > span{display:flex !important;justify-content:center;align-items:center;height:100%;border-radius:var(--surface-border-radius);border:1px solid var(--ghost-color-background);", "}& > figure{max-height:225px;min-height:170px;border-radius:var(--surface-border-radius);border:1px solid var(--ghost-color-background);}"], ({
  layout
}) => layout !== 'column' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["max-height:220px;"]));
const Poster = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Image__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]).withConfig({
  displayName: "ProjectCard__Poster",
  componentId: "g3ik0u-1"
})(["position:relative;width:100%;height:100%;border-radius:var(--surface-border-radius);overflow:hidden;object-fit:cover;transition:opacity 150ms ease;", " ", " @media only screen and (max-width:480px){min-height:128px;}"], ({
  layout
}) => layout !== 'column' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["min-height:128px;"]), ({
  onClick
}) => onClick && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["cursor:pointer;&:hover{opacity:0.65;}"]));
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).withConfig({
  displayName: "ProjectCard__Wrap",
  componentId: "g3ik0u-2"
})(["grid-gap:var(--default-gap);height:100%;", " ", " ", " ", ""], ({
  layout
}) => layout === 'column' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["display:flex;flex-wrap:wrap;"]), ({
  appearance
}) => appearance === 'default' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "ProjectCard__Content",
  componentId: "g3ik0u-3"
})(["display:grid;grid-template-columns:1fr 2fr;flex-grow:1000;width:100%;", " ", " @media only screen and (max-width:480px){grid-template-columns:1fr;grid-gap:var(--default-gap);width:100%;}"], ({
  clear
}) => clear && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["grid-template-columns:1fr;"]), ({
  layout
}) => layout === 'column' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["display:flex;flex-direction:column;grid-gap:var(--default-gap);"]));
const Screenshots = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "ProjectCard__Screenshots",
  componentId: "g3ik0u-4"
})(["justify-content:space-between;grid-gap:5px;"]);
const Screenshot = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ProjectCard__Screenshot",
  componentId: "g3ik0u-5"
})(["position:relative;z-index:var(--z-12);width:auto;height:var(--input-height-s);min-width:var(--input-height-s);min-height:var(--input-height-s);border-radius:var(--surface-border-radius);border:1px solid var(--ghost-color-background);flex-grow:1;transition:opacity 150ms ease;span,span > img{display:flex;justify-content:center;align-items:center;flex-grow:1;width:100%;height:100%;}img{width:100%;height:100%;object-fit:cover;}"]);
const ScreenshotsCounter = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"]).withConfig({
  displayName: "ProjectCard__ScreenshotsCounter",
  componentId: "g3ik0u-6"
})(["position:absolute;top:0;left:0;z-index:var(--z-10);display:flex;justify-content:center;align-items:center;width:100%;height:100%;span{position:relative;z-index:var(--z-12);color:white;}&::before{content:'';position:absolute;top:0;left:0;z-index:var(--z-10);display:flex;justify-content:center;align-items:center;width:100%;height:100%;background:var(--default-color-accent);border-radius:var(--surface-border-radius);opacity:0.65;}"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "ProjectCard__Header",
  componentId: "g3ik0u-7"
})(["justify-content:space-between;align-items:center;"]);
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "ProjectCard__Actions",
  componentId: "g3ik0u-8"
})(["grid-gap:5px;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).withConfig({
  displayName: "ProjectCard__Name",
  componentId: "g3ik0u-9"
})(["transition:opacity 150ms ease;", ""], ({
  onClick
}) => onClick && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["cursor:pointer;&:hover{opacity:0.45;}"]));
const About = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ProjectCard__About",
  componentId: "g3ik0u-10"
})(["font-size:var(--font-size-m);"]);
const Company = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"]).withConfig({
  displayName: "ProjectCard__Company",
  componentId: "g3ik0u-11"
})(["h4{max-width:250px;white-space:nowrap;font-size:var(--font-size-m);font-weight:var(--font-weight-bold);text-overflow:ellipsis;line-height:1;overflow:hidden;}"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "ProjectCard__Footer",
  componentId: "g3ik0u-12"
})(["justify-content:space-between;align-items:center;grid-gap:var(--default-gap);flex-grow:1;@media only screen and (max-width:480px){flex-direction:column;", "{flex-grow:1;width:100%;}", "{flex-grow:1;width:100%;", "{flex-grow:1;button{width:100%;}}}}"], _atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_3__[/* Wrap */ "a"], _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* Wrap */ "a"], _atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__[/* Wrap */ "a"]);
const Card = ({
  layout,
  project,
  eliminable,
  appearance,
  className,
  style,
  preview,
  slicedFactor = 4,
  liked,
  owned,
  onAdd,
  onRemove,
  onLink,
  onLike,
  onAboutMore,
  onScreenshotClick,
  onCompanyLink,
  onChecked,
  onEdit,
  onDelete
}) => {
  var _project$screenshots, _project$screenshots2, _project$preview, _project$screenshots3, _project$category, _project$category2, _project$description, _project$description2, _project$company, _project$company$avat, _project$company2, _project$company3, _project$company4;

  const {
    setQuery
  } = Object(_hooks_useEntityQuery__WEBPACK_IMPORTED_MODULE_14__[/* useEntityQuery */ "b"])();
  const [isLiked, setLike] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(liked);
  const screenshots = (project === null || project === void 0 ? void 0 : (_project$screenshots = project.screenshots) === null || _project$screenshots === void 0 ? void 0 : _project$screenshots.slice(0, slicedFactor)) || [];
  const residue = ((project === null || project === void 0 ? void 0 : (_project$screenshots2 = project.screenshots) === null || _project$screenshots2 === void 0 ? void 0 : _project$screenshots2.length) || slicedFactor) - slicedFactor;

  const onClickLike = () => {
    if (onLike) onLike();
    setLike(!isLiked);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLike(liked);
  }, [liked]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    className: className,
    style: style,
    appearance: appearance,
    layout: layout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    layout: layout,
    clear: !project.preview
  }, project.preview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Media, {
    layout: layout
  }, project.preview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Poster, {
    src: (_project$preview = project.preview) === null || _project$preview === void 0 ? void 0 : _project$preview.path,
    alt: project.title,
    onClick: () => {
      var _project$preview2;

      return onScreenshotClick && onScreenshotClick(project.preview, (_project$preview2 = project.preview) === null || _project$preview2 === void 0 ? void 0 : _project$preview2.id);
    }
  }), project.screenshots && ((_project$screenshots3 = project.screenshots) === null || _project$screenshots3 === void 0 ? void 0 : _project$screenshots3.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Screenshots, null, screenshots.map((screenshot, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Screenshot, {
    key: screenshot.id,
    onClick: () => onScreenshotClick && onScreenshotClick(screenshot, screenshot.id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Image__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    src: screenshot.path,
    alt: screenshot.name,
    bottomOffset: 300,
    layout: 'fill'
  }), index === (screenshots === null || screenshots === void 0 ? void 0 : screenshots.length) - 1 && residue > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScreenshotsCounter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "+", residue)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    style: {
      gridGap: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
    place: 'top',
    text: (_project$category = project.category) === null || _project$category === void 0 ? void 0 : _project$category.name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Meta__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    category: (_project$category2 = project.category) === null || _project$category2 === void 0 ? void 0 : _project$category2.name,
    short: true
  })), (onChecked || onEdit || onDelete) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Actions, null, onDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
    text: 'Удалить проект'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    appearance: 'red',
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    icon: 'delete',
    size: 'xs',
    stroke: 'white'
  }))), onEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
    text: 'Редактировать проект'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    onClick: onEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    icon: 'edit',
    size: 'xs',
    stroke: 'white'
  }))), onChecked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
    text: 'Отметить проект',
    self: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, {
    tag: 'h4',
    onClick: () => setQuery(project.id, 'project', onLink)
  }, project.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About, null, ((_project$description = project.description) === null || _project$description === void 0 ? void 0 : _project$description.length) > 135 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"], null, (_project$description2 = project.description) === null || _project$description2 === void 0 ? void 0 : _project$description2.slice(0, 135), "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styled__WEBPACK_IMPORTED_MODULE_15__[/* More */ "e"], {
    onClick: onAboutMore
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"], null, project.description || 'Описание не заполнено')))), !preview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    clear: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Company, _extends({}, project.company ? {
    img: (_project$company = project.company) === null || _project$company === void 0 ? void 0 : (_project$company$avat = _project$company.avatar) === null || _project$company$avat === void 0 ? void 0 : _project$company$avat.path
  } : {
    icon: 'work'
  }, {
    label: 'Компания',
    text: ((_project$company2 = project.company) === null || _project$company2 === void 0 ? void 0 : _project$company2.name) || '-',
    tooltip: (_project$company3 = project.company) === null || _project$company3 === void 0 ? void 0 : _project$company3.name,
    onLink: ((_project$company4 = project.company) === null || _project$company4 === void 0 ? void 0 : _project$company4.email) && onCompanyLink && (() => {
      var _project$company5;

      return setQuery((_project$company5 = project.company) === null || _project$company5 === void 0 ? void 0 : _project$company5.email, 'user', onCompanyLink);
    })
  })), !owned && (onLike || onAdd) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], null, !eliminable && onLike && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
    text: 'Мне нравится'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    type: 'button',
    kind: 'icon',
    onClick: onClickLike,
    revert: !isLiked
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    icon: 'heart',
    stroke: isLiked ? 'white' : 'var(--default-color-accent)'
  }))), !eliminable && onAdd && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
    text: 'Добавить проект к себе'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    type: 'button',
    kind: 'icon',
    onClick: onAdd,
    revert: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    icon: 'add',
    stroke: 'var(--default-color-accent)'
  }))), eliminable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
    text: 'Удалить проект из папки'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    type: 'button',
    kind: 'icon',
    appearance: 'red',
    onClick: onRemove,
    revert: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    icon: 'delete',
    stroke: 'var(--default-color-red)'
  })))))));
};
Card.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ __webpack_exports__["c"] = (Card);

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2qQv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CentralAlert */
/* unused harmony export Processed */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZwIX");
/* harmony import */ var _atomic_ui_components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("auMy");
/* harmony import */ var _Styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("586Q");





const CentralAlert = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Alert__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).withConfig({
  displayName: "Processed__CentralAlert",
  componentId: "z1pxe7-0"
})(["display:flex;justify-content:center;align-items:center;width:100%;text-align:center;flex-grow:1;"]);
const Processed = ({
  data,
  loading,
  error,
  children,
  errorMessage,
  emptyMessage
}) => !loading && data ? children : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CentralAlert, {
  appearance: 'error'
}, errorMessage) : loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styled__WEBPACK_IMPORTED_MODULE_4__[/* Loader */ "c"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Spinner__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CentralAlert, null, emptyMessage);
Processed.defaultProps = {
  errorMessage: 'Упс! Не удалось загрузить статистику',
  emptyMessage: 'Кажется тут ничего нет'
};
/* harmony default export */ __webpack_exports__["a"] = (Processed);

/***/ }),

/***/ "2rN0":
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3jgA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export TextArea */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea`
  font-family: var(--default-font-family);
  font-size: 0.875rem;
  resize: none;
  color: black;

  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  background: var(--surface-background);

  margin: 0;
  padding: 10px;

  width: 100%;
  height: 180px;
  max-width: 100%;

  &::placeholder {
    font-family: var(--default-font-family);
    color: var(--input-placeholder-color);
  }

  ${({
  appearance
}) => appearance === 'default' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: var(--surface-color);
      background: var(--surface-background);
      box-shadow: var(--surface-shadow);
    `}

  ${({
  appearance
}) => appearance === 'ghost' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: var(--input-color);
      background: var(--input-background);
    `}
`;
const TextArea = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref, ref) => {
  let {
    defaultValue
  } = _ref,
      props = _objectWithoutProperties(_ref, ["defaultValue"]);

  return __jsx(Wrap, _extends({}, props, {
    ref: ref,
    defaultValue: defaultValue
  }));
});
TextArea.defaultProps = {
  placeholder: 'Введите содержимое'
};
/* harmony default export */ __webpack_exports__["a"] = (TextArea);

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4NP5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Header */
/* unused harmony export Name */
/* unused harmony export Actions */
/* unused harmony export Permissions */
/* unused harmony export Card */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8CDE");
/* harmony import */ var _atomic_ui_components_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aBfq");
/* harmony import */ var _atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RKiZ");
/* harmony import */ var _atomic_ui_components_Chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("JyfY");
/* harmony import */ var _atomic_ui_components_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZwIX");
/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ZeZO");
/* harmony import */ var _atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("feIE");
/* harmony import */ var _atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("79b8");
/* harmony import */ var _atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("7sPp");
/* harmony import */ var _atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("VWQm");
/* harmony import */ var _atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("NWnW");
/* harmony import */ var _hooks_useEntityQuery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("8UhZ");















const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]).withConfig({
  displayName: "RoleCard__Wrap",
  componentId: "sc-1nltqyr-0"
})(["grid-gap:var(--default-gap);height:100%;", " ", " ", ""], ({
  appearance
}) => appearance === 'default' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "RoleCard__Header",
  componentId: "sc-1nltqyr-1"
})(["justify-content:space-between;align-items:center;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]).withConfig({
  displayName: "RoleCard__Name",
  componentId: "sc-1nltqyr-2"
})(["transition:opacity 150ms ease;", ""], ({
  onClick
}) => onClick && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["cursor:pointer;&:hover{opacity:0.45;}"]));
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "RoleCard__Actions",
  componentId: "sc-1nltqyr-3"
})(["grid-gap:5px;height:100%;"]);
const Permissions = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "RoleCard__Permissions",
  componentId: "sc-1nltqyr-4"
})(["flex-wrap:wrap;grid-gap:10px;"]);
const Card = ({
  role,
  style,
  appearance,
  className,
  limitPermissions,
  onLink,
  onChecked,
  onEdit,
  onDelete
}) => {
  const {
    setQuery
  } = Object(_hooks_useEntityQuery__WEBPACK_IMPORTED_MODULE_14__[/* useEntityQuery */ "b"])();
  const permissions = role.permissions.slice(0, limitPermissions);
  const residue = role.permissions.length - limitPermissions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    className: className,
    style: style,
    appearance: appearance
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      gridGap: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Meta__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    date: role.createdAt
  }), onChecked && onEdit && onDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Actions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "b"], {
    text: 'Удалить роль'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    appearance: 'red',
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    icon: 'delete',
    size: 'xs',
    stroke: 'white'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "b"], {
    text: 'Редактировать роль'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    onClick: onEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    icon: 'edit',
    size: 'xs',
    stroke: 'white'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "b"], {
    text: 'Отметить роль',
    self: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, {
    tag: 'h4',
    onClick: () => setQuery(role.id, 'role', onLink)
  }, Object(_atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_13__[/* getLabelRole */ "f"])(role.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    clear: true
  }), role && role.permissions.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Permissions, null, permissions.map(permission => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Chip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    key: permission,
    color: 'ghost',
    appearance: 'outlined'
  }, Object(_atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_13__[/* getLabelPermission */ "e"])(permission))), residue > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Chip__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    color: 'ghost',
    appearance: 'outlined'
  }, "+", residue)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Alert__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null, "\u041F\u0440\u0438\u0432\u0435\u043B\u0435\u0433\u0438\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"));
};
Card.defaultProps = {
  appearance: 'default',
  limitPermissions: 5
};
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4nJQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Header */
/* unused harmony export Actions */
/* unused harmony export Name */
/* unused harmony export Status */
/* unused harmony export Footer */
/* unused harmony export Card */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8CDE");
/* harmony import */ var _atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7sPp");
/* harmony import */ var _atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("QUga");
/* harmony import */ var _atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("feIE");
/* harmony import */ var _atomic_ui_components_Meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("aBfq");
/* harmony import */ var _atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("RKiZ");
/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ZeZO");
/* harmony import */ var _atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("DTT8");
/* harmony import */ var _atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("79b8");
/* harmony import */ var _atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("VWQm");
/* harmony import */ var _hooks_useEntityQuery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("8UhZ");














const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]).withConfig({
  displayName: "TicketCard__Wrap",
  componentId: "sc-3sqqk7-0"
})(["grid-gap:var(--default-gap);height:100%;", " ", " ", ""], ({
  appearance
}) => appearance === 'default' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "TicketCard__Header",
  componentId: "sc-3sqqk7-1"
})(["justify-content:space-between;align-items:center;"]);
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "TicketCard__Actions",
  componentId: "sc-3sqqk7-2"
})(["grid-gap:5px;height:100%;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]).withConfig({
  displayName: "TicketCard__Name",
  componentId: "sc-3sqqk7-3"
})(["transition:opacity 150ms ease;", ""], ({
  onClick
}) => onClick && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["cursor:pointer;&:hover{opacity:0.45;}"]));
const Status = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"]).withConfig({
  displayName: "TicketCard__Status",
  componentId: "sc-3sqqk7-4"
})(["color:", ";"], ({
  status
}) => `var(--default-color-${status === 'OPENED' ? 'accent' : 'red'})`);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "TicketCard__Footer",
  componentId: "sc-3sqqk7-5"
})(["justify-content:space-between;align-items:center;flex-grow:1;"]);
const Card = ({
  ticket,
  appearance,
  className,
  style,
  onLink,
  onAuthorLink,
  onChecked,
  onEdit,
  onDelete
}) => {
  var _ticket$category, _ticket$author, _ticket$author$avatar, _ticket$author2, _ticket$messages;

  const {
    setQuery
  } = Object(_hooks_useEntityQuery__WEBPACK_IMPORTED_MODULE_13__[/* useEntityQuery */ "b"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    className: className,
    style: style,
    appearance: appearance
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      gridGap: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Meta__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    date: ticket.createdAt,
    category: (_ticket$category = ticket.category) === null || _ticket$category === void 0 ? void 0 : _ticket$category.name
  }), onChecked && onEdit && onDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Actions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "b"], {
    text: 'Удалить обращение'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    appearance: 'red',
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    icon: 'delete',
    size: 'xs',
    stroke: 'white'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "b"], {
    text: 'Редактировать обращение'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    onClick: onEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    icon: 'edit',
    size: 'xs',
    stroke: 'white'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__[/* default */ "b"], {
    text: 'Отметить обращение',
    self: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, {
    tag: 'h4',
    onClick: () => setQuery(ticket.id, 'ticket', onLink)
  }, ticket.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], {
    style: {
      gridGap: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Status, {
    status: ticket.status
  }, ticket.status))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    clear: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"], {
    label: 'Автор',
    img: (_ticket$author = ticket.author) === null || _ticket$author === void 0 ? void 0 : (_ticket$author$avatar = _ticket$author.avatar) === null || _ticket$author$avatar === void 0 ? void 0 : _ticket$author$avatar.path,
    text: (_ticket$author2 = ticket.author) === null || _ticket$author2 === void 0 ? void 0 : _ticket$author2.name,
    onLink: onAuthorLink && (() => {
      var _ticket$author3;

      return onAuthorLink((_ticket$author3 = ticket.author) === null || _ticket$author3 === void 0 ? void 0 : _ticket$author3.email);
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"], {
    icon: 'chat',
    label: 'Сообщений',
    text: (_ticket$messages = ticket.messages) === null || _ticket$messages === void 0 ? void 0 : _ticket$messages.length
  })));
};
Card.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "586Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loaderStyles */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GridAside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return More; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LowerLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Loader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loaderStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;flex-grow:1;"]);
const GridAside = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.aside.withConfig({
  displayName: "Styled__GridAside",
  componentId: "sc-1e5p8xo-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(442px,1fr));grid-gap:var(--default-gap);@media only screen and (max-width:768px){grid-template-columns:repeat(auto-fit,minmax(285px,1fr));}"]);
const More = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Styled__More",
  componentId: "sc-1e5p8xo-1"
})(["color:var(--default-color-accent);cursor:pointer;"]);
const LowerLoader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Styled__LowerLoader",
  componentId: "sc-1e5p8xo-2"
})(["", " height:80px;"], loaderStyles);
const FixedLoader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Styled__FixedLoader",
  componentId: "sc-1e5p8xo-3"
})(["", " position:fixed;top:0;left:0;"], loaderStyles);
const Loader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Styled__Loader",
  componentId: "sc-1e5p8xo-4"
})(["", ""], loaderStyles);

/***/ }),

/***/ "6CQF":
/***/ (function(module, exports) {

module.exports = require("browser-image-compression");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "79b8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Box */
/* unused harmony export Container */
/* unused harmony export Check */
/* unused harmony export Label */
/* unused harmony export Input */
/* unused harmony export Wrap */
/* unused harmony export CheckBox */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("feIE");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Box = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 15%);
  border-radius: var(--surface-border-radius);
  transition: background-color 0.3s ease, border-color 0.3s ease;

  ${({
  size
}) => size === 'xs' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      border-radius: 6px;
    `}
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: normal;
  line-height: 1;
  cursor: pointer;
  user-select: none;

  ${({
  disabled
}) => disabled && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      opacity: 0.5;
      cursor: default;
    `}

  &:hover ${Box} {
    color: #fff;
  }
`;
const Check = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Icon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])`
  position: absolute;
  margin-left: -1px;
  opacity: 0;
  transform: scale(0.75);
  transition: opacity 0.3s ease;
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  display: inline-flex;
  padding-top: 2px;
  color: rgba(0, 0, 0, 75%);
  margin-left: 12px;

  ${({
  size
}) => size && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      font-size: var(--font-size-${size});
    `}

  ${({
  size
}) => size === 'xs' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      margin-left: 8px;
    `}

  ${({
  size
}) => size === 'm' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      margin-left: 15px;
    `}
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  opacity: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + ${Box} {
    border-color: var(--default-color-accent);
    background: var(--default-color-accent);

    .theme_light & {
      border-color: var(--buttonBorder);
    }
  }

  &:checked ~ ${Check} {
    opacity: 1;

    svg {
      path,
      circle,
      line,
      rect {
        stroke: white;
      }
    }
  }

  &:focus[data-focus-visible-added] + ${Box} {
    border-color: gray;
  }
`;
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;

  color: var(--primary);
  cursor: inherit;

  ${({
  size
}) => size === 'xs' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: 16px;
      height: 16px;
    `}

  ${({
  size
}) => size === 's' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: 22px;
      height: 22px;
    `}

  ${({
  size
}) => size === 'm' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: 26px;
      height: 26px;
    `}
`;
const CheckBox = (_ref) => {
  let {
    children,
    className,
    style,
    inputStyle,
    label,
    size,
    disabled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "style", "inputStyle", "label", "size", "disabled"]);

  const id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
  return __jsx(Container, {
    htmlFor: `checkbox-${id}`,
    className: className,
    style: style,
    disabled: disabled
  }, __jsx(Wrap, {
    size: size,
    style: inputStyle
  }, __jsx(Input, _extends({
    type: 'checkbox',
    id: `checkbox-${id}`,
    disabled: disabled
  }, props)), __jsx(Box, {
    size: size
  }), __jsx(Check, {
    icon: 'check',
    size: size
  })), label && __jsx(Label, {
    size: size
  }, label), children);
};
CheckBox.defaultProps = {
  size: 'm'
};
/* harmony default export */ __webpack_exports__["a"] = (CheckBox);

/***/ }),

/***/ "7BXr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Grid */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: grid;
  grid-gap: var(--default-gap);

  ${({
  length,
  percentage
}) => styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
    grid-template-columns: repeat(${length}, ${percentage});
  `}

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  }
`;
const Grid = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Wrap, props, children);
};
Grid.defaultProps = {
  length: 'auto-fill',
  percentage: 'minmax(445px, 1fr)'
};
/* harmony default export */ __webpack_exports__["a"] = (Grid);

/***/ }),

/***/ "7ni8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dispatchDateStyles */
/* unused harmony export Wrap */
/* unused harmony export MiniAvatar */
/* unused harmony export OpinionAvatar */
/* unused harmony export Opinion */
/* unused harmony export OpinionName */
/* unused harmony export OpinionTextArea */
/* unused harmony export OpinionText */
/* unused harmony export OpinionTail */
/* unused harmony export DispatchTime */
/* unused harmony export DispatchDate */
/* unused harmony export DispatchUpdatedDate */
/* unused harmony export Actions */
/* unused harmony export Message */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ThpJ");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7sPp");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("QUga");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("feIE");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZeZO");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("VWQm");
/* harmony import */ var _DateText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("+nv6");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("79b8");
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("3jgA");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const dispatchDateStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
  position: absolute;
  left: 0;
  bottom: 5px;
  font-size: var(--font-size-xs);
`;
const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-areas: 'avatar opinion';
  margin: 0;
  transition: opacity 150ms ease;

  & > span {
    grid-area: avatar;
    align-self: end;
    justify-self: start;
    cursor: pointer;
    transition: opacity 150ms ease;
  }

  ${({
  onClick
}) => onClick && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      & > span {
        cursor: pointer;

        &:hover {
          opacity: 0.65;
        }
      }
    `}

  ${({
  side
}) => side === 'owner' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      grid-template-columns: 1fr 64px;
      grid-template-areas: 'opinion avatar';

      & > span {
        justify-self: end;
      }
    `}

  ${({
  compact
}) => compact && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      display: flex;
    `}
    
  ${({
  checked
}) => checked && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      opacity: 0.45;
    `}
`;
const MiniAvatar = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Avatar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"])`
  width: var(--input-height-xs);
  height: var(--input-height-xs);
  min-width: var(--input-height-xs);
  min-height: var(--input-height-xs);
  border-radius: var(--surface-border-radius);
`;
const OpinionAvatar = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Avatar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"])`
  grid-area: avatar;
  align-self: end;
  transition: opacity 150ms ease;

  ${({
  side
}) => side === 'owner' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      justify-self: end;
    `}

  ${({
  onClick
}) => onClick && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`;
const Opinion = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  padding: 10px var(--default-gap) 25px var(--default-gap);
  border-radius: var(--surface-border-radius);
  color: white;
  width: fit-content;
  grid-area: opinion;

  ${({
  side
}) => side === 'observer' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      background: var(--ghost-color-background);
      color: var(--ghost-color-text);
    `}

  ${({
  side
}) => side === 'owner' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      justify-self: end;
      background: var(--default-color-accent);
      color: white;
    `}

  ${({
  compact
}) => compact && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      padding: 0 0 25px 0;
      background: none;
      color: black;
      width: 100%;
    `}
`;
const OpinionName = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Title__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])`
  color: inherit;
  transition: opacity 150ms ease;

  ${({
  compact
}) => compact && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      display: flex;
      align-items: center;
      grid-gap: 10px;
    `}

  ${({
  onClick
}) => onClick && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`;
const OpinionTextArea = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_TextArea__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])`
  margin-top: 10px;
  height: 128px;

  ${({
  height
}) => height && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      height: ${height}px;
    `}
`;
const OpinionText = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"])`
  color: inherit;

  ${({
  compact
}) => compact && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      margin-top: 10px;
    `}
`;
const OpinionTail = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  position: absolute;
  bottom: -6px;
  background-size: contain;
  background-repeat: no-repeat;
  width: 25px;
  height: 20px;

  ${({
  side,
  tails
}) => side === 'observer' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      left: -12px;
      background-image: url('${tails.default}');
    `}

  ${({
  side,
  tails
}) => side === 'owner' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      right: -12px;
      background-image: url('${tails.owner}');
      transform: scaleX(-1);
    `}
`;
const DispatchTime = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_DateText__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])`
  position: absolute;
  right: 10px;
  bottom: 5px;
  font-size: var(--font-size-xs);

  ${({
  compact
}) => compact && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      right: 0;
      font-size: var(--font-size-s);
      color: var(--default-color-text);
    `}
`;
const DispatchDate = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_DateText__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])`
  ${dispatchDateStyles}
  font-size: var(--font-size-s);
  color: var(--default-color-text);
`;
const DispatchUpdatedDate = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  ${dispatchDateStyles}
  font-size: var(--font-size-s);
  color: var(--default-color-text);
`;
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  position: absolute;
  top: 0;
  right: 0;
  grid-gap: 10px;
`;
const Message = ({
  avatar,
  side,
  name,
  text,
  time,
  tails,
  style,
  compact,
  className,
  isUpdated,
  isChecked,
  onEdit,
  onChecked,
  onDelete,
  onLink
}) => {
  const {
    0: updatedAt,
    1: setUpdatedAt
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isUpdated ? time : null);
  const {
    0: checked,
    1: setChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isChecked);
  const {
    0: isEdit,
    1: setEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(text);
  const textRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleToggleEdit = () => setEdit(prev => !prev);

  const handleChecked = e => {
    const value = e.target.checked;
    if (onChecked) onChecked(value);
    setChecked(value);
  };

  const handleApplyChanges = () => {
    var _textRef$current;

    const value = textRef === null || textRef === void 0 ? void 0 : (_textRef$current = textRef.current) === null || _textRef$current === void 0 ? void 0 : _textRef$current.value;

    if (value) {
      if (onEdit) onEdit(value);
      setUpdatedAt(new Date());
      setMessage(value);
    }

    handleToggleEdit();
  };

  return __jsx(Wrap, {
    side: side,
    compact: compact,
    checked: checked,
    style: style,
    className: className
  }, !compact && __jsx(OpinionAvatar, {
    side: side,
    src: avatar,
    onClick: onLink
  }), __jsx(Opinion, {
    side: side,
    compact: compact
  }, __jsx(OpinionName, {
    tag: 'h5',
    compact: compact,
    onClick: onLink
  }, compact && __jsx(MiniAvatar, {
    side: side,
    src: avatar,
    onClick: onLink
  }), name), !compact && __jsx(OpinionTail, {
    side: side,
    tails: tails
  }), isEdit ? __jsx(OpinionTextArea, {
    ref: textRef,
    defaultValue: message,
    appearance: 'ghost'
  }) : __jsx(OpinionText, {
    compact: compact
  }, message), __jsx(DispatchTime, {
    text: updatedAt || time,
    compact: compact
  }), compact && updatedAt && __jsx(DispatchUpdatedDate, null, "\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E", ' ', new Date(updatedAt).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })), compact && !updatedAt && __jsx(DispatchDate, {
    text: time,
    options: {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  }), compact && onEdit && onDelete && __jsx(Actions, null, !isEdit ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_8__[/* default */ "b"], {
    text: 'Удалить сообщение'
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    disabled: checked,
    appearance: 'red',
    onClick: onDelete
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    icon: 'delete',
    size: 'xs',
    stroke: 'white'
  }))), __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_8__[/* default */ "b"], {
    text: 'Редактировать сообщение'
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    disabled: checked,
    onClick: handleToggleEdit
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    icon: 'edit',
    size: 'xs',
    stroke: 'white'
  }))), __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_8__[/* default */ "b"], {
    text: 'Отметить сообщение',
    self: true
  }, __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    checked: checked,
    onChange: handleChecked
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_8__[/* default */ "b"], {
    text: 'Применить изменения',
    self: true
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    disabled: checked,
    appearance: 'green',
    onClick: handleApplyChanges
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    icon: 'check',
    size: 'xs',
    stroke: 'white'
  }))), __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_8__[/* default */ "b"], {
    text: 'Отменить изменения',
    self: true
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    disabled: checked,
    appearance: 'red',
    onClick: handleToggleEdit
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    icon: 'closeSquare',
    size: 'xs',
    stroke: 'white'
  })))))));
};
Message.defaultProps = {
  side: 'observer',
  text: 'Some Message',
  time: '15:00'
};
/* harmony default export */ __webpack_exports__["a"] = (Message);

/***/ }),

/***/ "7sPp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export H1 */
/* unused harmony export H2 */
/* unused harmony export H3 */
/* unused harmony export H4 */
/* unused harmony export H5 */
/* unused harmony export H6 */
/* unused harmony export Headline */
/* unused harmony export Title */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
  font-size: 36px;
  font-weight: 800;
`;
const H2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2`
  font-size: 22px;
  font-weight: 600;
`;
const H3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3`
  font-size: 20px;
  font-weight: 600;
`;
const H4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4`
  font-size: 18px;
  font-weight: 600;
`;
const H5 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h5`
  font-size: 14px;
  font-weight: 500;
`;
const H6 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h6`
  font-size: 10px;
  font-weight: 500;
`;
const Headline = (_ref) => {
  let {
    tag = 'h1',
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["tag", "children"]);

  const tagList = [{
    name: 'h1',
    component: H1
  }, {
    name: 'h2',
    component: H2
  }, {
    name: 'h3',
    component: H3
  }, {
    name: 'h4',
    component: H4
  }, {
    name: 'h5',
    component: H5
  }, {
    name: 'h6',
    component: H6
  }];

  for (let tagItem of tagList) {
    if (tagItem.name === tag) {
      const Component = tagItem.component;
      return __jsx(Component, props, children);
    }
  }

  return null;
};
const Title = (_ref2) => {
  let {
    tag,
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["tag", "children"]);

  return __jsx(Headline, _extends({}, props, {
    tag: tag
  }), children);
};
/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),

/***/ "8CDE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Column */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  flex-direction: column;
  grid-gap: var(--default-gap);
`;
const Column = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Wrap, props, children);
};
/* harmony default export */ __webpack_exports__["a"] = (Column);

/***/ }),

/***/ "8Esz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Label */
/* unused harmony export ArrowButton */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("feIE");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZeZO");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  ${({
  noMargin
}) => noMargin && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      margin: 0;
    `}
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  flex-grow: 1;
  height: var(--input-height-s);
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);

  ${({
  appearance
}) => appearance === 'clear' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      background: none;
      border: none;
    `}

  span {
    font-weight: 700;
    text-transform: uppercase;
  }
`;
const ArrowButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])``;

const Arrower = ({
  label,
  appearance,
  arrowLeft,
  arrowRight,
  noMargin,
  onChange
}) => {
  const onChangeMonth = sign => {
    if (onChange) onChange(sign);
  };

  const onPrevMonth = () => onChangeMonth(-1);

  const onNextMonth = () => onChangeMonth(1);

  return __jsx(Wrap, {
    noMargin: noMargin
  }, __jsx(ArrowButton, {
    type: 'button',
    size: 's',
    kind: 'icon',
    appearance: appearance,
    "aria-label": 'Назад',
    onMouseDown: onPrevMonth
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    icon: arrowLeft || 'arrowLeft',
    stroke: appearance !== 'clear' && 'white'
  })), __jsx(Label, {
    appearance: appearance
  }, label), __jsx(ArrowButton, {
    type: 'button',
    size: 's',
    kind: 'icon',
    appearance: appearance,
    "aria-label": 'Далее',
    onMouseDown: onNextMonth
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    icon: arrowRight || 'arrowRight',
    stroke: appearance !== 'clear' && 'white'
  })));
};

Arrower.defaultProps = {
  appearance: 'clear'
};
/* harmony default export */ __webpack_exports__["a"] = (Arrower);

/***/ }),

/***/ "8UhZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useEntityQuery; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ../atomic-ui/utils/functions.js
function createSelectOption(option) {
  return {
    value: option,
    label: option
  }
}

function createSelectOptions(options) {
  return options.map((option) => createSelectOption(option))
}

const getLabelStatus = (status) => {
  switch (status) {
    case 'PUBLISHED':
      return 'Опубликовано'
    case 'MODERATION':
      return 'На модерации'
    default:
      return status
  }
}

const getLabelRole = (role) => {
  switch (role) {
    case 'ADMIN':
      return 'Админ'
    case 'USER':
      return 'Пользователь'
    case 'MODERATOR':
      return 'Модератор'
    case 'OFICIAL':
      return 'Оф. лицо'
    case 'ENTITY':
      return 'Юр. лицо'
    case 'INDIVIDUAL':
      return 'Физ. лицо'
    default:
      return role
  }
}

const getLabelCategory = (category) => {
  switch (category) {
    case 'TICKET':
      return 'Тема обращения'
    case 'DIVISION':
      return 'Раздел проектов/статей'
    default:
      return category
  }
}

const getLabelPermission = (permission) => {
  switch (permission) {
    case 'ACCESS_CLIENT':
      return 'Доступ к сайту'
    case 'ACCESS_DASHBOARD':
      return 'Доступ к административной панели'
    case 'VIEW_USER':
      return 'Просмотр пользователя'
    case 'VIEW_CATEGORY':
      return 'Просмотр категории'
    case 'VIEW_ARTICLE':
      return 'Просмотр статьи'
    case 'VIEW_PROJECT':
      return 'Просмотр проекта'
    case 'VIEW_TICKET':
      return 'Просмотр обращения'
    case 'VIEW_ROLE':
      return 'Просмотр роли'
    case 'ADD_USER':
      return 'Создание пользователя'
    case 'ADD_CATEGORY':
      return 'Создание категории'
    case 'ADD_ARTICLE':
      return 'Создание статьи'
    case 'ADD_PROJECT':
      return 'Создание проекта'
    case 'EDIT_USER':
      return 'Редактирвоание пользователя'
    case 'EDIT_CATEGORY':
      return 'Редактирование категории'
    case 'EDIT_ARTICLE':
      return 'Редактирвоание статьи'
    case 'EDIT_PROJECT':
      return 'Редактирвоание проекта'
    case 'DELETE_USER':
      return 'Удаление пользователя'
    case 'DELETE_CATEGORY':
      return 'Удаление категории'
    case 'DELETE_ARTICLE':
      return 'Удаление статьи'
    case 'DELETE_PROJECT':
      return 'Удаление проекта'
    case 'COMMENT_ARTICLE':
      return 'Комментирование статьи'
    case 'COMMENT_PROJECT':
      return 'Комментирование проекта'
    case 'CHATTING':
      return 'Общение'
    default:
      return 'Не определено'
  }
}

const getFileSize = (size) => {
  if (!size) return 'Неизвестно'

  const limit = 1024
  const bytes = Number(size)
  const kilobytes = bytes / limit
  const megabytes = kilobytes / limit
  const gigabytes = megabytes / limit

  if (Math.trunc(gigabytes) > 0) return `${Math.round(gigabytes)} ГБ`
  if (Math.trunc(megabytes) > 0) return `${Math.round(megabytes)} МБ`
  if (Math.trunc(kilobytes) > 0) return `${Math.round(kilobytes)} КБ`
  return `${bytes} байт`
}

const b64EncodeUnicode = (str) => {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
      return String.fromCharCode('0x' + p1)
    })
  )
}

const b64DecodeUnicode = (str) => {
  return decodeURIComponent(
    atob(str)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )
}

// EXTERNAL MODULE: ./hooks/useHelper.js
var useHelper = __webpack_require__("ApjV");

// EXTERNAL MODULE: ./hooks/useMutate.js
var useMutate = __webpack_require__("lphG");

// EXTERNAL MODULE: ./store/helpers/article.js + 4 modules
var article = __webpack_require__("owvJ");

// EXTERNAL MODULE: ./store/helpers/category.js + 2 modules
var category = __webpack_require__("V9G2");

// EXTERNAL MODULE: ./store/helpers/project.js + 6 modules
var project = __webpack_require__("IxyI");

// EXTERNAL MODULE: ./store/helpers/role.js + 2 modules
var role = __webpack_require__("DF00");

// EXTERNAL MODULE: ./store/helpers/user.js + 11 modules
var helpers_user = __webpack_require__("rP4V");

// EXTERNAL MODULE: ./store/helpers/ticket.js + 2 modules
var ticket = __webpack_require__("ZbFR");

// EXTERNAL MODULE: ./store/actions/user.js
var actions_user = __webpack_require__("8ihE");

// EXTERNAL MODULE: ./graphql/queries/index.js + 15 modules
var queries = __webpack_require__("u2Cb");

// CONCATENATED MODULE: ./hooks/useEntityQuery.js















const getProjectLinkProps = (id, user, owned, dispatch, mutate, recall) => ({
  id,
  auth: user === null || user === void 0 ? void 0 : user.email,
  liked: !!((user === null || user === void 0 ? void 0 : user.likedProjects) || []).find(item => item.id === id),
  onLike: user.email && mutate(queries["a" /* default */].LIKE_PROJECT, {
    id
  }, response => dispatch(Object(actions_user["e" /* updateUser */])(response.data.likeProject))),
  onAdd: user.email && recall(project["a" /* onProjectAdd */], {
    id,
    folders: user === null || user === void 0 ? void 0 : user.folders,
    mutations: {
      addProject: queries["a" /* default */].ADD_USER_PROJECT,
      createFolder: queries["a" /* default */].ADD_USER_FOLDER
    }
  }),
  owned
});

const getUserLinkProps = (id, user, owned) => ({
  id,
  auth: user === null || user === void 0 ? void 0 : user.email,
  owned,
  queries: {
    userChats: queries["a" /* default */].GET_USER_CHATS,
    chat: queries["a" /* default */].GET_CHAT
  },
  mutations: {
    addUserChat: queries["a" /* default */].ADD_USER_CHAT,
    sendMessage: queries["a" /* default */].SEND_MESSAGE
  }
});

const useEntityQuery = () => {
  const recall = Object(useHelper["b" /* useHelper */])();
  const mutate = Object(useMutate["a" /* useMutate */])();
  const router = Object(router_["useRouter"])();
  const user = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const setQuery = async (str, entity, callback) => {
    await router.push({
      pathname: router.pathname,
      query: {
        [entity]: b64EncodeUnicode(str)
      }
    }, undefined, {
      shallow: true
    });
    if (callback) callback(str);
  };

  const useDetectQuery = () => {
    Object(external_react_["useEffect"])(() => {
      const query = router.query;

      if (query.article) {
        const id = b64DecodeUnicode(query.article);
        recall(article["d" /* onArticleLink */], {
          id
        })();
      }

      if (query.category) {
        const id = b64DecodeUnicode(query.category);
        recall(category["d" /* onCategoryLink */], {
          id
        })();
      }

      if (query.project) {
        var _user$projects;

        const id = b64DecodeUnicode(query.project);
        const owned = user === null || user === void 0 ? void 0 : (_user$projects = user.projects) === null || _user$projects === void 0 ? void 0 : _user$projects.find(candidate => candidate.id === id);
        recall(project["e" /* onProjectLink */], getProjectLinkProps(id, user, owned, dispatch, mutate, recall))();
      }

      if (query.role) {
        const id = b64DecodeUnicode(query.role);
        recall(role["d" /* onRoleLink */], {
          id
        })();
      }

      if (query.user) {
        const id = b64DecodeUnicode(query.user);
        const owned = id === (user === null || user === void 0 ? void 0 : user.name);
        recall(helpers_user["i" /* onUserLink */], getUserLinkProps(id, user, owned))();
      }

      if (query.ticket) {
        const id = b64DecodeUnicode(query.ticket);
        recall(ticket["d" /* onTicketLink */], {
          id,
          auth: user === null || user === void 0 ? void 0 : user.email
        })();
      }
    }, [router]);
  };

  return {
    setQuery,
    useDetectQuery
  };
};
/* harmony default export */ var hooks_useEntityQuery = __webpack_exports__["a"] = (useEntityQuery);

/***/ }),

/***/ "8ihE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setUserFolders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setUserFolder; });
/* harmony import */ var _types_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ab4s");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rOcY");


const SECRET = _config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get('secret') || 'secret';
function setUser(user) {
  if (user.token && false) {
    localStorage.setItem(SECRET, user.token);
  }

  return {
    type: _types_user__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_USER,
    payload: user
  };
}
function setLogout() {
  if (false) {}

  return {
    type: _types_user__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_LOGOUT
  };
}
function updateUser(user) {
  return {
    type: _types_user__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].UPDATE_USER,
    payload: user
  };
}
function setUserFolders(folders) {
  return {
    type: _types_user__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_USER_FOLDERS,
    payload: folders
  };
}
function setUserFolder(folder) {
  return {
    type: _types_user__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_USER_FOLDER,
    payload: folder
  };
}

/***/ }),

/***/ "9Xo6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearItems; });
/* harmony import */ var _types_snacks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uiuK");

function setItem(item) {
  return {
    type: _types_snacks__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_ITEM,
    payload: {
      item
    }
  };
}
function removeItem(id) {
  return {
    type: _types_snacks__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REMOVE_ITEM,
    payload: {
      id
    }
  };
}
function clearItems() {
  return {
    type: _types_snacks__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].CLEAR_ITEMS
  };
}

/***/ }),

/***/ "Ab4s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  SET_USER: 'SET_USER',
  SET_LOGOUT: 'SET_LOGOUT',
  SET_AUTH_USER: 'SET_AUTH_USER',
  SET_USER_FOLDERS: 'SET_USER_FOLDERS',
  SET_USER_FOLDER: 'SET_USER_FOLDER',
  UPDATE_USER: 'UPDATE_USER'
});

/***/ }),

/***/ "ApjV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useHelper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


const useHelper = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const recall = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((helper, ...props) => helper(dispatch, ...props), []);
  return (helper, ...props) => () => recall(helper, ...props);
};
/* harmony default export */ __webpack_exports__["a"] = (useHelper);

/***/ }),

/***/ "BPlj":
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "DF00":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ onRoleLink; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ onRoleCreate; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ onRoleEdit; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ onRoleDelete; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./atomic-ui/components/Row/index.js
var Row = __webpack_require__("nShV");

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Title/index.js
var Title = __webpack_require__("7sPp");

// EXTERNAL MODULE: ./atomic-ui/components/Input/index.js
var Input = __webpack_require__("Gliw");

// EXTERNAL MODULE: ./atomic-ui/components/Button/index.js
var Button = __webpack_require__("ZeZO");

// EXTERNAL MODULE: ./atomic-ui/components/Select/index.js
var Select = __webpack_require__("QclZ");

// EXTERNAL MODULE: ./atomic-ui/components/Alert/index.js
var Alert = __webpack_require__("ZwIX");

// EXTERNAL MODULE: ./atomic-ui/utils/functions.js
var functions = __webpack_require__("NWnW");

// EXTERNAL MODULE: ./components/Form/index.js
var Form = __webpack_require__("qoM+");

// CONCATENATED MODULE: ./components/FormRole/index.js










const Role = ({
  role,
  permissions,
  mutation,
  appearance,
  className,
  onSubmit
}) => {
  var _role$permissions;

  const [permissionsError, setPermissionsError] = Object(external_react_["useState"])(false);
  const [selectedPermissions, setSelectedPermissions] = Object(external_react_["useState"])((role === null || role === void 0 ? void 0 : (_role$permissions = role.permissions) === null || _role$permissions === void 0 ? void 0 : _role$permissions.map(permission => ({
    value: permission,
    label: Object(functions["e" /* getLabelPermission */])(permission)
  }))) || null);
  return /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
    className: className,
    appearance: appearance,
    mutation: mutation,
    onSubmit: (form, action) => {
      if ((selectedPermissions === null || selectedPermissions === void 0 ? void 0 : selectedPermissions.length) > 0) {
        onSubmit({ ...form,
          permissions: selectedPermissions
        }, action);
      } else {
        setPermissionsError(true);
      }
    }
  }, ({
    register,
    loading,
    errors,
    getValues
  }) => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h4'
  }, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435"), errors && errors.name && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    style: {
      width: '100%'
    },
    appearance: 'error'
  }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u043E\u043B\u0438 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u0438\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u044B"), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: 'text',
    name: 'name',
    ref: register({
      required: true,
      pattern: /[A-Za-z]/
    }),
    defaultValue: (role === null || role === void 0 ? void 0 : role.name) || getValues('name'),
    placeholder: 'Название',
    appearance: 'ghost',
    disabled: loading
  }), permissionsError && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    style: {
      width: '100%'
    },
    appearance: 'error'
  }, "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0438\u0432\u0438\u043B\u0435\u0433\u0438\u0439 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u044D\u043B\u0435\u043C\u0435\u043D\u0442"), /*#__PURE__*/external_react_default.a.createElement(Select["a" /* default */], {
    name: 'permissions',
    appearance: 'ghost',
    defaultValue: selectedPermissions,
    onChange: value => {
      setSelectedPermissions(value);
      setPermissionsError(false);
    },
    placeholder: 'Выберите привелегии',
    options: Object(functions["b" /* createSelectOptions */])(permissions).map(option => ({ ...option,
      label: Object(functions["e" /* getLabelPermission */])(option.label)
    })),
    isLoading: loading,
    isClearable: true,
    isMulti: true
  })), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      flexGrow: 1
    },
    type: 'submit',
    disabled: loading
  }, role ? 'Сохранить' : 'Создать'))));
};
/* harmony default export */ var FormRole = (Role);
// EXTERNAL MODULE: ./components/FormDelete/index.js
var FormDelete = __webpack_require__("xAqQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: ./atomic-ui/components/Meta/index.js
var Meta = __webpack_require__("aBfq");

// EXTERNAL MODULE: ./atomic-ui/components/Divider/index.js
var Divider = __webpack_require__("RKiZ");

// EXTERNAL MODULE: ./atomic-ui/components/Chip/index.js
var Chip = __webpack_require__("JyfY");

// EXTERNAL MODULE: ./components/Processed/index.js
var Processed = __webpack_require__("2qQv");

// EXTERNAL MODULE: ./graphql/queries/index.js + 15 modules
var queries = __webpack_require__("u2Cb");

// CONCATENATED MODULE: ./components/RoleView/index.js














const Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "RoleView__Wrap",
  componentId: "sc-3s69fr-0"
})(["grid-gap:var(--default-gap);height:max-content;flex-grow:1;", " ", " ", ""], ({
  appearance
}) => appearance === 'default' && Object(external_styled_components_["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Permissions = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "RoleView__Permissions",
  componentId: "sc-3s69fr-1"
})(["flex-wrap:wrap;grid-gap:10px;"]);
const View = ({
  role,
  appearance,
  className,
  style
}) => {
  var _data$getRole, _data$getRole2, _data$getRole3, _data$getRole3$permis, _data$getRole4, _data$getRole4$permis;

  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_ROLE, {
    variables: {
      id: role
    }
  });
  return /*#__PURE__*/external_react_default.a.createElement(Wrap, {
    className: className,
    style: style,
    appearance: appearance
  }, /*#__PURE__*/external_react_default.a.createElement(Processed["a" /* default */], {
    data: data === null || data === void 0 ? void 0 : data.getRole,
    loading: loading,
    error: error,
    errorMessage: 'Упс! Не удалось загрузить информацию о роли',
    emptyMessage: 'Кажется такой роли не существует'
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
    style: {
      gridGap: 0
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Meta["a" /* default */], {
    date: data === null || data === void 0 ? void 0 : (_data$getRole = data.getRole) === null || _data$getRole === void 0 ? void 0 : _data$getRole.createdAt
  }), /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h4'
  }, Object(functions["f" /* getLabelRole */])(data === null || data === void 0 ? void 0 : (_data$getRole2 = data.getRole) === null || _data$getRole2 === void 0 ? void 0 : _data$getRole2.name))), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
    clear: true
  }), data !== null && data !== void 0 && data.getRole && (data === null || data === void 0 ? void 0 : (_data$getRole3 = data.getRole) === null || _data$getRole3 === void 0 ? void 0 : (_data$getRole3$permis = _data$getRole3.permissions) === null || _data$getRole3$permis === void 0 ? void 0 : _data$getRole3$permis.length) > 0 ? /*#__PURE__*/external_react_default.a.createElement(Permissions, null, data === null || data === void 0 ? void 0 : (_data$getRole4 = data.getRole) === null || _data$getRole4 === void 0 ? void 0 : (_data$getRole4$permis = _data$getRole4.permissions) === null || _data$getRole4$permis === void 0 ? void 0 : _data$getRole4$permis.map(permission => /*#__PURE__*/external_react_default.a.createElement(Chip["a" /* default */], {
    key: Object(external_uuid_["v4"])(),
    color: 'ghost',
    appearance: 'outlined'
  }, Object(functions["e" /* getLabelPermission */])(permission)))) : /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], null, "\u041F\u0440\u0438\u0432\u0435\u043B\u0435\u0433\u0438\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"))));
};
View.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ var RoleView = (View);
// EXTERNAL MODULE: ./components/RoleCard/index.js
var RoleCard = __webpack_require__("4NP5");

// EXTERNAL MODULE: ./store/actions/documents.js
var documents = __webpack_require__("j8/+");

// EXTERNAL MODULE: ./store/actions/drawer.js
var drawer = __webpack_require__("Ztxg");

// EXTERNAL MODULE: ./store/actions/snacks.js
var snacks = __webpack_require__("9Xo6");

// CONCATENATED MODULE: ./store/helpers/role.js








function onRoleLink(dispatch, props) {
  const {
    id
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'lock',
    title: 'Роль',
    content: /*#__PURE__*/external_react_default.a.createElement(RoleView, {
      role: id,
      appearance: 'clear'
    })
  }));
}
function onRoleCreate(dispatch, props) {
  const {
    permissions,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'lock',
    title: 'Создание роли',
    content: /*#__PURE__*/external_react_default.a.createElement(FormRole, {
      mutation: mutation,
      permissions: permissions,
      appearance: 'clear',
      onSubmit: async (form, action) => {
        try {
          const roles = await action({
            variables: {
              input: {
                name: form.name,
                permissions: form.permissions.map(permission => permission.value)
              }
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(roles.data.createRole));
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Роль успешно создана'
          }));
        } catch (_unused) {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось создать роль'
          }));
        }
      }
    })
  }));
}
function onRoleEdit(dispatch, props) {
  const {
    role,
    permissions,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'lock',
    title: 'Редактирование роли',
    content: /*#__PURE__*/external_react_default.a.createElement(FormRole, {
      role: role,
      mutation: mutation,
      permissions: permissions,
      appearance: 'clear',
      onSubmit: async (form, action) => {
        try {
          const roles = await action({
            variables: {
              id: role.id,
              input: {
                name: form.name,
                permissions: form.permissions.map(permission => permission.value)
              }
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(roles.data.updateRole));
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Роль успешно отредактирована'
          }));
        } catch (_unused2) {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось отредактировать роль'
          }));
        }
      }
    })
  }));
}
function onRoleDelete(dispatch, props) {
  const {
    id,
    role,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'delete',
    color: 'red',
    title: 'Удаление роли',
    content: /*#__PURE__*/external_react_default.a.createElement(FormDelete["a" /* default */], {
      mutation: mutation,
      appearance: 'clear',
      onCancel: () => dispatch(Object(drawer["a" /* setDrawer */])(null)),
      onSubmit: async (_, action) => {
        try {
          const roles = await action({
            variables: {
              id
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(roles.data.deleteRole));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Роль успешно удалена'
          }));
        } catch (_unused3) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось удалить роль'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
        }
      }
    }, /*#__PURE__*/external_react_default.a.createElement(RoleCard["a" /* default */], {
      role: role,
      appearance: 'clear'
    }))
  }));
}

/***/ }),

/***/ "DTT8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrap; });
/* unused harmony export Content */
/* unused harmony export Image */
/* unused harmony export RoundedIcon */
/* unused harmony export Label */
/* unused harmony export Value */
/* unused harmony export getValue */
/* unused harmony export Difinition */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8CDE");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QUga");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7sPp");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("feIE");
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("JyfY");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("VWQm");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  transition: opacity 150ms ease;

  ${({
  clickable
}) => clickable && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])`
  justify-content: center;
  grid-gap: 0;
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img`
  width: var(--input-height-m);
  height: var(--input-height-m);
  min-width: var(--input-height-m);
  min-height: var(--input-height-m);
  border-radius: var(--surface-border-radius);
  object-fit: cover;
`;
const RoundedIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Icon__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])`
  width: var(--input-height-m);
  height: var(--input-height-m);
  min-width: var(--input-height-m);
  min-height: var(--input-height-m);
  background: var(--default-color-${({
  color
}) => color || 'accent'}-dim);
  border-radius: var(--surface-border-radius);

  ${({
  disabled
}) => disabled && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      background: var(--ghost-color-background);

      svg path {
        stroke: var(--ghost-color-text);
      }
    `}

  @media only screen and (max-width: 480px) {
    width: var(--input-height-s);
    height: var(--input-height-s);
    min-width: var(--input-height-s);
    min-height: var(--input-height-s);

    svg {
      transform: scale(0.85);
    }
  }
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"])`
  color: var(--ghost-color-text);
  font-size: var(--font-size-s);
  white-space: nowrap;
  width: 128px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({
  disabled
}) => disabled && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: var(--ghost-color-text);
    `}

  ${({
  stretch
}) => stretch && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: auto;
    `}
`;
const Value = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Title__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])`
  font-weight: var(--font-weight-bold);
  line-height: 1;

  @media only screen and (max-width: 480px) {
    font-size: var(--font-size-l);
  }
`;
const getValue = (label, text, disabled) => {
  const disabledStyle = disabled ? {
    color: 'var(--ghost-color-text)'
  } : {};

  if (Array.isArray(text)) {
    const slicedFactor = 3;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, text.slice(0, slicedFactor).map(item => __jsx(_Chip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])(),
      style: {
        display: 'inline-flex'
      },
      color: 'ghost',
      appearance: 'outlined',
      size: 'xs'
    }, item)), text.length > 5 && __jsx(_Chip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      style: {
        display: 'inline-flex'
      },
      color: 'ghost',
      appearance: 'outlined',
      size: 'xs'
    }, "+", text.slice(slicedFactor).length));
  } // eslint-disable-next-line valid-typeof


  if (typeof _Text__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"] === 'funciton') {
    const Text = text;
    return __jsx(Text, {
      style: disabledStyle
    });
  }

  return __jsx(Value, {
    style: disabledStyle,
    tag: !label ? 'h2' : 'h4'
  }, text);
};
const Difinition = ({
  img,
  color,
  icon,
  label,
  text,
  tooltip,
  className,
  style,
  stretch,
  disabled,
  revert,
  onLink
}) => {
  const renderLabel = () => label && __jsx(Label, {
    stretch: stretch,
    disabled: disabled
  }, label);

  const renderText = () => tooltip ? __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_9__[/* default */ "b"], {
    place: 'top',
    text: tooltip
  }, __jsx(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], null, getValue(label, text, disabled))) : __jsx(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], null, getValue(label, text, disabled));

  return __jsx(Wrap, {
    className: className,
    style: style,
    clickable: !disabled && !!onLink,
    onClick: () => !disabled && onLink && onLink()
  }, img && !icon && __jsx(Image, {
    src: img,
    alt: 'Avatar'
  }), !img && icon && __jsx(RoundedIcon, {
    icon: icon,
    color: color,
    disabled: disabled,
    stroke: `var(--default-color-${color || 'accent'})`
  }), __jsx(Content, null, !revert && renderLabel(), !revert && renderText(), revert && renderText(), revert && renderLabel()));
};
/* harmony default export */ __webpack_exports__["b"] = (Difinition);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "E8iq":
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),

/***/ "EJJs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Manage */
/* unused harmony export Headers */
/* unused harmony export Track */
/* unused harmony export Content */
/* unused harmony export Container */
/* unused harmony export Actions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
/* unused harmony export HeaderList */
/* unused harmony export CheckboxTooltip */
/* unused harmony export Table */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nShV");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8CDE");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("feIE");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ZeZO");
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("OXt0");
/* harmony import */ var _Difinition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("DTT8");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("79b8");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("VWQm");
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("vJvq");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Column__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])``;
const Manage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"])``;
const Headers = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Switch__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"])`
  ${({
  width
}) => width && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      span {
        width: ${width};
      }
    `}

  ${({
  first,
  width
}) => first && width && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      span:first-child {
        width: calc(${width} + 45px);
      }
    `}
`;
const Track = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"])`
  transition: opacity 150ms ease;

  ${({
  checked
}) => checked && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      opacity: 0.45;
    `}
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"])`
  padding: 5px 15px;
  width: calc(100% - 55px);

  ${({
  appearance
}) => appearance === 'default' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      border: 1px solid var(--surface-border);
      background: var(--surface-background);
      box-shadow: 1px solid var(--surface-shadow);
      border-radius: var(--surface-border-radius);
    `}

  ${({
  appearance
}) => appearance === 'clear' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      border: none;
      background: none;
      box-shadow: none;
      border-radius: 0;
    `}

  & > label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(var(--input-height-m) - 15px);
    margin-left: 5px;

    & > span {
      margin: 0;
    }
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"])`
  width: 100%;

  ${({
  onClick
}) => onClick && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      cursor: pointer;
    `}
`;
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Column__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])`
  padding: 5px;
  width: var(--input-height-m);
  grid-gap: 5px;

  button {
    width: 100%;
    flex-grow: 1;
  }

  ${({
  appearance
}) => appearance === 'default' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      border: 1px solid var(--surface-border);
      background: var(--surface-background);
      box-shadow: 1px solid var(--surface-shadow);
      border-radius: var(--surface-border-radius);
    `}

  ${({
  appearance
}) => appearance === 'clear' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      border: none;
      background: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    `}
`;
const Cell = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Difinition__WEBPACK_IMPORTED_MODULE_8__[/* default */ "b"])`
  align-items: center;
  flex-grow: 1;

  width: ${({
  width
}) => width};
  overflow: hidden;

  & > div {
    width: 100%;
  }

  h4 {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-bold);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const HeaderList = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Column__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])`
  border: 1px solid var(--surface-border);
  background: var(--surface-background);
  box-shadow: var(--surface-shadow);
  border-radius: var(--surface-border-radius);
  padding: 10px;
  grid-gap: 10px;
`;
const CheckboxTooltip = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"])`
  display: flex;
  align-items: center;
`;
const Table = ({
  data,
  template,
  className,
  style,
  appearance,
  onClick,
  onChecked,
  onDelete,
  onEdit
}) => {
  const {
    0: documents,
    1: setDocuments
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((data || []).map(item => _objectSpread(_objectSpread({}, item), {}, {
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    checked: false
  })));
  const defaultWidth = `${Math.floor(100 / template.length)}%`;
  /* eslint-disable-next-line */

  const {
    0: headers,
    1: setHeaders
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((template || []).map(item => ({
    value: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    label: item.header,
    width: item.width || defaultWidth,
    tooltip: item.tooltip || `Сортировка по «${item.header}‎»`,
    visible: !item.hidden
  })));
  /* eslint-disable-next-line */

  const {
    0: header,
    1: setHeader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(headers[0] || null);

  const handleChecked = document => {
    setDocuments(prev => prev.map(item => item.id === document.id ? _objectSpread(_objectSpread({}, document), {}, {
      checked: !item.checked
    }) : item));
  };

  return __jsx(Wrap, {
    className: className,
    style: style
  }, __jsx(Manage, null, __jsx(Headers, {
    defaultValue: headers[0],
    options: headers.filter(h => h.visible),
    onChange: item => setHeader(item),
    first: onChecked,
    stretch: true
  }), __jsx(_Popper__WEBPACK_IMPORTED_MODULE_11__[/* default */ "b"], {
    place: 'left',
    offset: {
      bottom: 80
    },
    body: __jsx(HeaderList, null, headers.map((header, index) => __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      key: index,
      size: 's',
      label: header.label,
      checked: header.visible
    }))),
    appearance: 'clear'
  }, __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"], {
    text: 'Отображение полей',
    place: 'left'
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    kind: 'icon'
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    icon: 'show',
    stroke: 'white'
  }))))), documents.map((document, index) => __jsx(Track, {
    key: index,
    checked: document.checked
  }, __jsx(Content, {
    appearance: appearance
  }, __jsx(CheckboxTooltip, {
    text: 'Отметить документ',
    self: true
  }, onChecked && __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    size: 's',
    onChange: () => handleChecked(document)
  })), __jsx(Container, {
    onClick: () => onClick(document)
  }, template.map((cell, index) => headers[index].visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(cell.content(document), {
    key: index,
    label: cell.header,
    width: (cell === null || cell === void 0 ? void 0 : cell.width) || defaultWidth
  }) : null))), (onEdit || onDelete) && __jsx(Actions, {
    appearance: appearance
  }, onEdit && __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"], {
    text: 'Редактирование',
    place: 'left'
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    size: 'xs',
    kind: 'icon',
    onClick: () => onEdit(document)
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    icon: 'edit',
    size: 'xs',
    stroke: 'white'
  }))), onDelete && __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"], {
    text: 'Удаление',
    place: 'left'
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    size: 'xs',
    kind: 'icon',
    appearance: 'red',
    onClick: () => onDelete(document)
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    icon: 'delete',
    size: 'xs',
    stroke: 'white'
  })))))));
};
Table.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ __webpack_exports__["b"] = (Table);

/***/ }),

/***/ "EYtC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export WrapSearchField */
/* unused harmony export WrapButton */
/* unused harmony export Search */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZeZO");
/* harmony import */ var _atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("feIE");
/* harmony import */ var _atomic_ui_components_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("t7jn");






const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "SearchBar__Wrap",
  componentId: "sc-1ruwjhl-0"
})(["width:100%;"]);
const WrapSearchField = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Search__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).withConfig({
  displayName: "SearchBar__WrapSearchField",
  componentId: "sc-1ruwjhl-1"
})(["flex-grow:100;"]);
const WrapButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]).withConfig({
  displayName: "SearchBar__WrapButton",
  componentId: "sc-1ruwjhl-2"
})(["background:var(--default-color-accent-dim);border:none;&:hover{svg{path,circle{stroke:white;}}}", ""], ({
  visibleFilter
}) => visibleFilter && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background:var(--default-color-accent);"]));
const Search = ({
  appearance,
  onChangeFilter,
  onSubmit
}) => {
  const [visibleFilter, setVisibleFilter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onClick = () => {
    setVisibleFilter(!visibleFilter);
    if (onChangeFilter) onChangeFilter(!visibleFilter);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapSearchField, {
    appearance: appearance,
    placeholder: 'Поиск',
    onSubmit: onSubmit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapButton, {
    type: 'button',
    kind: 'icon',
    onClick: onClick,
    visibleFilter: visibleFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    icon: 'filter2',
    stroke: visibleFilter ? 'white' : 'var(--default-color-accent)'
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (Search);

/***/ }),

/***/ "FHIK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Container */
/* unused harmony export FlexButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Content; });
/* unused harmony export SureDelete */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8CDE");
/* harmony import */ var _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nShV");
/* harmony import */ var _atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("QUga");
/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ZeZO");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("qoM+");







const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).withConfig({
  displayName: "FormSureDelete__Container",
  componentId: "agzc18-0"
})(["", ""], ({
  padding
}) => padding && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:15px;"]));
const FlexButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).withConfig({
  displayName: "FormSureDelete__FlexButton",
  componentId: "agzc18-1"
})(["flex-grow:1;"]);
const Content = ({
  type,
  text,
  loading,
  padding,
  onCancel,
  onSubmit
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
  padding: padding
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
  style: {
    textAlign: 'center'
  }
}, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexButton, {
  onClick: onCancel,
  disabled: loading
}, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexButton, {
  type: type,
  appearance: 'red',
  disabled: loading,
  onClick: onSubmit
}, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
const SureDelete = ({
  type,
  text,
  appearance,
  mutation,
  padding,
  className,
  onCancel,
  onSubmit
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_6__[/* default */ "b"], {
  appearance: appearance,
  className: className,
  mutation: mutation,
  onSubmit: onSubmit
}, ({
  loading
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
  type: type,
  text: text,
  loading: loading,
  padding: padding,
  onCancel: onCancel,
  onSubmit: onSubmit
}));
SureDelete.defaultProps = {
  type: 'submit',
  padding: true
};
/* harmony default export */ __webpack_exports__["b"] = (SureDelete);

/***/ }),

/***/ "G4lZ":
/***/ (function(module, exports) {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "Gliw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Input */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  font-family: var(--default-font-family);
  font-size: 0.875rem;
  color: black;

  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  background: var(--surface-background);

  margin: 0;
  padding: 10px;

  width: 100%;
  height: var(--input-height-m);
  max-width: 100%;

  &::placeholder {
    font-family: var(--default-font-family);
    color: var(--input-placeholder-color);

    ${({
  horizontalAlignment
}) => horizontalAlignment === 'center' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
        text-align: center;
      `}
  }

  ${({
  horizontalAlignment
}) => horizontalAlignment === 'center' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      text-align: center;
    `}

  ${({
  appearance
}) => appearance === 'default' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: var(--surface-color);
      background: var(--surface-background);
      box-shadow: var(--surface-shadow);
    `}

  ${({
  appearance
}) => appearance === 'ghost' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: var(--input-color);
      background: var(--input-background);
    `}

  ${({
  hidden
}) => hidden && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      display: none;
    `}
`;
const Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => __jsx(Wrap, _extends({}, props, {
  ref: ref
})));
Input.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ "IxyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ onProjectLink; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ onProjectCreate; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ onProjectEdit; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ onProjectDelete; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ onProjectAdd; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ onProjectRemove; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ onProjectScreenshot; });

// UNUSED EXPORTS: onMemberAdd, onScreenshotAdd, onFileAdd, onSureDelete

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./atomic-ui/components/Grid/index.js
var Grid = __webpack_require__("7BXr");

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Button/index.js
var Button = __webpack_require__("ZeZO");

// EXTERNAL MODULE: ./atomic-ui/components/Alert/index.js
var Alert = __webpack_require__("ZwIX");

// EXTERNAL MODULE: ./atomic-ui/components/Row/index.js
var Row = __webpack_require__("nShV");

// EXTERNAL MODULE: ./atomic-ui/components/Image/index.js
var Image = __webpack_require__("V0nP");

// EXTERNAL MODULE: ./atomic-ui/components/Text/index.js
var Text = __webpack_require__("QUga");

// EXTERNAL MODULE: ./atomic-ui/components/Icon/index.js + 109 modules
var Icon = __webpack_require__("feIE");

// CONCATENATED MODULE: ./atomic-ui/components/Screenshot/index.js
var __jsx = external_react_default.a.createElement;








const Wrap = external_styled_components_default()(Column["a" /* default */])`
  position: relative;
  padding: var(--default-gap);
`;
const Content = external_styled_components_default()(Image["a" /* default */])`
  width: 100%;
  max-height: 650px;
  object-fit: cover;
  border-radius: var(--surface-border-radius);
`;
const Navigation = external_styled_components_default()(Row["b" /* default */])`
  justify-content: space-between;
  align-items: center;
`;
const Screenshot = ({
  index,
  screenshot,
  screenshots,
  className,
  style,
  onClick
}) => {
  var _screenshots$id, _screenshots, _screenshots$id2, _screenshots2;

  const previousId = (_screenshots$id = (_screenshots = screenshots[index - 1]) === null || _screenshots === void 0 ? void 0 : _screenshots.id) !== null && _screenshots$id !== void 0 ? _screenshots$id : '';
  const nextId = (_screenshots$id2 = (_screenshots2 = screenshots[index + 1]) === null || _screenshots2 === void 0 ? void 0 : _screenshots2.id) !== null && _screenshots$id2 !== void 0 ? _screenshots$id2 : '';
  return __jsx(Wrap, {
    className: className,
    style: style
  }, __jsx(Content, {
    src: screenshot.path,
    alt: screenshot.filename
  }), screenshots.length > 1 && __jsx(Navigation, null, __jsx(Button["a" /* default */], {
    disabled: index === 0,
    onClick: () => onClick && onClick(`/${previousId}`),
    revert: true
  }, __jsx(Icon["a" /* default */], {
    icon: 'arrowLeft',
    stroke: index === 0 ? 'var(--ghost-color-text)' : 'var(--default-color-accent)'
  })), __jsx(Text["b" /* default */], null, index + 1, " / ", screenshots.length), __jsx(Button["a" /* default */], {
    disabled: screenshots.length - 1 === index,
    onClick: () => onClick && onClick(`/${nextId}`),
    revert: true
  }, __jsx(Icon["a" /* default */], {
    icon: 'arrowRight',
    stroke: screenshots.length - 1 === index ? 'var(--ghost-color-text)' : 'var(--default-color-accent)'
  }))));
};
/* harmony default export */ var components_Screenshot = (Screenshot);
// EXTERNAL MODULE: ./atomic-ui/components/Difinition/index.js
var Difinition = __webpack_require__("DTT8");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./atomic-ui/components/Select/index.js
var Select = __webpack_require__("QclZ");

// CONCATENATED MODULE: ./components/FormAddMember/index.js







const FormAddMember_Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "FormAddMember__Wrap",
  componentId: "kre4m5-0"
})(["padding:var(--default-gap);"]);
const AddMember = ({
  query,
  onSubmit
}) => {
  const members = Object(external_react_redux_["useSelector"])(state => state.root.members);
  const [selected, setSelected] = Object(external_react_["useState"])(null);
  const [load, {
    data,
    loading
  }] = Object(react_hooks_["useLazyQuery"])(query, {
    variables: {
      email: members.map(member => {
        var _member$value;

        return (member === null || member === void 0 ? void 0 : member.email) || ((_member$value = member.value) === null || _member$value === void 0 ? void 0 : _member$value.email);
      }),
      account: ['INDIVIDUAL', 'OFICIAL']
    }
  });
  Object(external_react_["useEffect"])(() => load(), []);
  return /*#__PURE__*/external_react_default.a.createElement(FormAddMember_Wrap, null, /*#__PURE__*/external_react_default.a.createElement(Select["a" /* default */], {
    options: !loading && data ? data.getUsers.map(user => ({
      value: user,
      label: user.name
    })) : [],
    appearance: 'ghost',
    defaultValue: selected,
    placeholder: 'Введите ФИО, Эл. почту или телефон',
    onChange: item => setSelected(item),
    isLoading: loading,
    isSearchable: true
  }), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    onClick: () => selected && onSubmit(selected),
    disabled: !selected || loading
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430"));
};
/* harmony default export */ var FormAddMember = (AddMember);
// EXTERNAL MODULE: ./atomic-ui/components/Dropzone/index.js
var Dropzone = __webpack_require__("kJLk");

// CONCATENATED MODULE: ./components/FormAddFile/index.js





const FormAddFile_Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "FormAddFile__Wrap",
  componentId: "sc-18zjfvs-0"
})(["padding:15px;", "{height:auto;}"], Dropzone["a" /* Wrap */]);
const AddFile = ({
  limit,
  accept,
  placeholder,
  submitText,
  className,
  onSubmit
}) => {
  const [files, setFiles] = Object(external_react_["useState"])();
  return /*#__PURE__*/external_react_default.a.createElement(FormAddFile_Wrap, {
    className: className
  }, /*#__PURE__*/external_react_default.a.createElement(Dropzone["b" /* default */], {
    name: 'file',
    accept: accept || 'image/*',
    placeholder: placeholder || `Перетащите сюда файлы (Не больше ${limit})`,
    onChange: files => setFiles(files),
    maxFiles: limit,
    multiple: true
  }), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    onClick: () => (files === null || files === void 0 ? void 0 : files.length) > 0 && onSubmit(files),
    disabled: (files === null || files === void 0 ? void 0 : files.length) === 0
  }, submitText || 'Добавить файлы'));
};
AddFile.defaultProps = {
  limit: 10
};
/* harmony default export */ var FormAddFile = (AddFile);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: ./atomic-ui/components/Title/index.js
var Title = __webpack_require__("7sPp");

// EXTERNAL MODULE: ./atomic-ui/components/Input/index.js
var Input = __webpack_require__("Gliw");

// EXTERNAL MODULE: ./atomic-ui/components/TextArea/index.js
var TextArea = __webpack_require__("3jgA");

// EXTERNAL MODULE: ./atomic-ui/components/TextEditor/index.js
var TextEditor = __webpack_require__("QWIf");

// EXTERNAL MODULE: ./atomic-ui/components/Tooltip/index.js
var Tooltip = __webpack_require__("VWQm");

// CONCATENATED MODULE: ./atomic-ui/components/ActionRow/index.js
var ActionRow_jsx = external_react_default.a.createElement;







const ActionRow_Wrap = external_styled_components_default()(Row["b" /* default */])`
  justify-content: space-between;
`;
const InfoIcon = external_styled_components_default()(Icon["a" /* default */])`
  opacity: 0.25;
  cursor: pointer;
  transition: opacity 450ms ease;

  &:hover {
    opacity: 0.65;
  }
`;
const AddTooltip = external_styled_components_default()(Tooltip["b" /* default */])`
  flex-grow: initial;
`;
const Name = external_styled_components_default()(Row["b" /* default */])`
  grid-gap: 5px;
`;
const ActionRow = ({
  title,
  info,
  action,
  onAdd
}) => ActionRow_jsx(ActionRow_Wrap, null, ActionRow_jsx(Name, null, ActionRow_jsx(Title["a" /* default */], {
  tag: 'h4'
}, title), info && ActionRow_jsx(Tooltip["b" /* default */], {
  text: info
}, ActionRow_jsx(InfoIcon, {
  size: 's',
  icon: 'infoCircle',
  stroke: 'black'
}))), action && ActionRow_jsx(AddTooltip, {
  place: 'left',
  text: 'Добавить'
}, ActionRow_jsx(Button["a" /* default */], {
  type: 'button',
  kind: 'icon',
  size: 'xs',
  onClick: onAdd
}, ActionRow_jsx(Icon["a" /* default */], {
  size: 'xs',
  icon: 'add',
  stroke: 'white'
}))));
/* harmony default export */ var components_ActionRow = (ActionRow);
// EXTERNAL MODULE: ./atomic-ui/components/Spinner/index.js
var Spinner = __webpack_require__("auMy");

// EXTERNAL MODULE: ./atomic-ui/components/Divider/index.js
var Divider = __webpack_require__("RKiZ");

// EXTERNAL MODULE: ./atomic-ui/utils/functions.js
var functions = __webpack_require__("NWnW");

// EXTERNAL MODULE: ./components/Form/index.js
var Form = __webpack_require__("qoM+");

// EXTERNAL MODULE: ./components/Styled/index.js
var Styled = __webpack_require__("586Q");

// EXTERNAL MODULE: ./store/actions/root.js
var root = __webpack_require__("Sza6");

// EXTERNAL MODULE: ./graphql/queries/index.js + 15 modules
var queries = __webpack_require__("u2Cb");

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// CONCATENATED MODULE: ./components/FormProject/index.js





























const AdaptiveRow = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "FormProject__AdaptiveRow",
  componentId: "sc-1t0r6a3-0"
})(["grid-gap:var(--default-gap);@media only screen and (max-width:768px){flex-wrap:wrap;}"]);
const Preview = external_styled_components_default()(Dropzone["b" /* default */]).withConfig({
  displayName: "FormProject__Preview",
  componentId: "sc-1t0r6a3-1"
})(["width:40%;height:289px;@media only screen and (max-width:768px){width:100%;height:256px;}"]);
const General = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "FormProject__General",
  componentId: "sc-1t0r6a3-2"
})(["width:60%;@media only screen and (max-width:768px){width:100%;}"]);
const DescriptionArea = external_styled_components_default()(TextArea["a" /* default */]).withConfig({
  displayName: "FormProject__DescriptionArea",
  componentId: "sc-1t0r6a3-3"
})(["height:100%;"]);
const RemoveTooltip = external_styled_components_default()(Tooltip["b" /* default */]).withConfig({
  displayName: "FormProject__RemoveTooltip",
  componentId: "sc-1t0r6a3-4"
})(["display:none;"]);
const AlignmentRow = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "FormProject__AlignmentRow",
  componentId: "sc-1t0r6a3-5"
})(["position:relative;justify-content:space-between;align-items:center;&:hover{", "{display:flex;}}"], RemoveTooltip);
const Project = ({
  project,
  companies,
  categories,
  statuses,
  mutation,
  appearance,
  className,
  canEditStatus,
  onMemberAdd,
  onScreenshotAdd,
  onFileAdd,
  onMemberRemove,
  onScreenshotRemove,
  onFileRemove,
  onSubmit
}) => {
  const {
    data,
    loading: loadingData,
    error
  } = project ? Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_PROJECT, {
    variables: {
      id: project
    }
  }) : {
    data: {
      getProject: {}
    },
    loading: false,
    error: false
  };
  const {
    members,
    screenshots,
    files
  } = Object(external_react_redux_["useSelector"])(state => ({
    members: state.root.members,
    screenshots: state.root.screenshots,
    files: state.root.files
  }));
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    if (!loadingData && data) {
      var _data$getProject, _data$getProject2, _data$getProject3;

      if ((_data$getProject = data.getProject) !== null && _data$getProject !== void 0 && _data$getProject.members) {
        dispatch(Object(root["m" /* setProjectMembers */])(data.getProject.members));
      }

      if ((_data$getProject2 = data.getProject) !== null && _data$getProject2 !== void 0 && _data$getProject2.screenshots) {
        dispatch(Object(root["n" /* setProjectScreenshots */])(data.getProject.screenshots));
      }

      if ((_data$getProject3 = data.getProject) !== null && _data$getProject3 !== void 0 && _data$getProject3.files) {
        dispatch(Object(root["l" /* setProjectFiles */])(data.getProject.files));
      }
    }
  }, [loadingData, data]);
  return /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
    className: className,
    appearance: appearance,
    mutation: mutation,
    onSubmit: (form, action) => onSubmit({ ...form,
      members,
      screenshots,
      files
    }, action)
  }, ({
    register,
    loading,
    errors,
    control,
    getValues
  }) => {
    var _data$getProject4, _data$getProject5, _data$getProject6, _data$getProject7, _data$getProject8, _data$getProject9, _data$getProject10, _data$getProject11;

    return !loading && !loadingData && data ? /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
      tag: 'h4'
    }, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435"), /*#__PURE__*/external_react_default.a.createElement(AdaptiveRow, null, errors && errors.preview && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u0435\u0432\u044C\u044E"), /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'preview',
      control: control,
      rules: {
        required: true
      },
      defaultValue: getValues('preview') || ((_data$getProject4 = data.getProject) === null || _data$getProject4 === void 0 ? void 0 : _data$getProject4.preview) || null,
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(Preview, {
        accept: 'image/*',
        defaultValue: value,
        onChange: onChange,
        placeholder: 'Перетащите сюда изображение для превью',
        tooltip: 'Разрешение: 700x600px. Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB'
      })
    }), /*#__PURE__*/external_react_default.a.createElement(General, null, errors && errors.title && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
      type: 'text',
      name: 'title',
      ref: register({
        required: true
      }),
      defaultValue: getValues('title') || ((_data$getProject5 = data.getProject) === null || _data$getProject5 === void 0 ? void 0 : _data$getProject5.title),
      placeholder: 'Название',
      appearance: 'ghost',
      disabled: loading
    }), /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'company',
      control: control,
      defaultValue: getValues('company') || ((_data$getProject6 = data.getProject) !== null && _data$getProject6 !== void 0 && _data$getProject6.company ? {
        value: data.getProject.company.id,
        label: data.getProject.company.name
      } : null),
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(Select["a" /* default */], {
        options: !loading && companies ? companies.map(user => ({
          value: user,
          label: user.name
        })) : [],
        appearance: 'ghost',
        defaultValue: value,
        placeholder: 'Выберите компанию',
        onChange: onChange,
        isLoading: loading,
        isSearchable: true
      })
    }), /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'category',
      control: control,
      defaultValue: getValues('category') || ((_data$getProject7 = data.getProject) !== null && _data$getProject7 !== void 0 && _data$getProject7.category ? {
        value: data.getProject.category.id,
        label: Object(functions["d" /* getLabelCategory */])(data.getProject.category.name)
      } : null),
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(Select["a" /* default */], {
        appearance: 'ghost',
        placeholder: 'Выберите раздел',
        options: categories.filter(category => category.type === 'DIVISION').map(item => ({
          value: item.id,
          label: Object(functions["d" /* getLabelCategory */])(item.name)
        })),
        onChange: onChange,
        defaultValue: value,
        isLoading: loading,
        isClearable: true
      })
    }), errors && errors.description && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"), /*#__PURE__*/external_react_default.a.createElement(DescriptionArea, {
      ref: register(),
      name: 'description',
      appearance: 'ghost',
      defaultValue: getValues('description') || ((_data$getProject8 = data.getProject) === null || _data$getProject8 === void 0 ? void 0 : _data$getProject8.description),
      placeholder: 'Описание',
      disabled: loading
    }))), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
      clear: true
    }), errors && errors.body && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"), /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'body',
      control: control,
      rules: {
        required: true
      },
      defaultValue: getValues('body') || ((_data$getProject9 = data.getProject) === null || _data$getProject9 === void 0 ? void 0 : _data$getProject9.body) || null,
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(TextEditor["a" /* default */], {
        apiKey: config["a" /* default */].get('tiny-key'),
        appearance: 'ghost',
        defaultValue: value,
        onChange: onChange
      })
    }), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
      clear: true
    }), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
      style: {
        flexGrow: 1
      }
    }, /*#__PURE__*/external_react_default.a.createElement(components_ActionRow, {
      title: 'Участники проeкта',
      onAdd: onMemberAdd || (() => {}),
      action: true
    }), (members === null || members === void 0 ? void 0 : members.length) > 0 ? /*#__PURE__*/external_react_default.a.createElement(Grid["a" /* default */], {
      percentage: 'minmax(320px, 1fr)'
    }, members.map(member => {
      var _member$value, _member$value2, _member$value2$avatar, _member$avatar, _member$value3, _member$value4;

      return /*#__PURE__*/external_react_default.a.createElement(AlignmentRow, {
        key: Object(external_uuid_["v4"])()
      }, /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], {
        key: ((_member$value = member.value) === null || _member$value === void 0 ? void 0 : _member$value.email) || (member === null || member === void 0 ? void 0 : member.email),
        img: ((_member$value2 = member.value) === null || _member$value2 === void 0 ? void 0 : (_member$value2$avatar = _member$value2.avatar) === null || _member$value2$avatar === void 0 ? void 0 : _member$value2$avatar.path) || ((_member$avatar = member.avatar) === null || _member$avatar === void 0 ? void 0 : _member$avatar.path) || '/images/avatar-default.png',
        label: Object(functions["f" /* getLabelRole */])((member === null || member === void 0 ? void 0 : (_member$value3 = member.value) === null || _member$value3 === void 0 ? void 0 : _member$value3.account) || (member === null || member === void 0 ? void 0 : member.account)),
        text: ((_member$value4 = member.value) === null || _member$value4 === void 0 ? void 0 : _member$value4.name) || (member === null || member === void 0 ? void 0 : member.name)
      }), /*#__PURE__*/external_react_default.a.createElement(RemoveTooltip, {
        place: 'left',
        text: 'Удалить'
      }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
        type: 'button',
        kind: 'icon',
        size: 'xs',
        onClick: () => {
          var _member$value5;

          return onMemberRemove((member === null || member === void 0 ? void 0 : (_member$value5 = member.value) === null || _member$value5 === void 0 ? void 0 : _member$value5.email) || (member === null || member === void 0 ? void 0 : member.email));
        }
      }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
        size: 'xs',
        icon: 'delete',
        stroke: 'white'
      }))));
    })) : /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        textAlign: 'center'
      },
      width: '100%'
    }, "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
      clear: true
    }), /*#__PURE__*/external_react_default.a.createElement(components_ActionRow, {
      title: 'Изображения',
      info: 'Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB',
      onAdd: !project && onScreenshotAdd || (() => {}),
      action: true
    }), (screenshots === null || screenshots === void 0 ? void 0 : screenshots.length) > 0 ? /*#__PURE__*/external_react_default.a.createElement(Grid["a" /* default */], {
      percentage: 'minmax(196px, 1fr)'
    }, screenshots.map(screenshot => {
      var _screenshot$file, _screenshot$file2, _screenshot$file3, _screenshot$file4;

      return /*#__PURE__*/external_react_default.a.createElement(AlignmentRow, {
        key: Object(external_uuid_["v4"])()
      }, /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], {
        key: screenshot.id,
        img: screenshot.blob || ((_screenshot$file = screenshot.file) === null || _screenshot$file === void 0 ? void 0 : _screenshot$file.path) || screenshot.path,
        label: (((_screenshot$file2 = screenshot.file) === null || _screenshot$file2 === void 0 ? void 0 : _screenshot$file2.name) || ((_screenshot$file3 = screenshot.file) === null || _screenshot$file3 === void 0 ? void 0 : _screenshot$file3.path) || (screenshot === null || screenshot === void 0 ? void 0 : screenshot.name) || (screenshot === null || screenshot === void 0 ? void 0 : screenshot.path)).split('/').slice(-1)[0],
        text: Object(functions["c" /* getFileSize */])(screenshot.size || ((_screenshot$file4 = screenshot.file) === null || _screenshot$file4 === void 0 ? void 0 : _screenshot$file4.size))
      }), !project && /*#__PURE__*/external_react_default.a.createElement(RemoveTooltip, {
        place: 'left',
        text: 'Удалить'
      }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
        type: 'button',
        kind: 'icon',
        size: 'xs',
        onClick: () => onScreenshotRemove(screenshot.id)
      }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
        size: 'xs',
        icon: 'delete',
        stroke: 'white'
      }))));
    })) : /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        textAlign: 'center'
      },
      width: '100%'
    }, "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
      clear: true
    }), /*#__PURE__*/external_react_default.a.createElement(components_ActionRow, {
      title: 'Файлы',
      info: 'Допустимые форматы: pdf, docx, .doc. Макс. размер: 15 MB',
      onAdd: onFileAdd || (() => {}),
      action: true
    }), (files === null || files === void 0 ? void 0 : files.length) > 0 ? /*#__PURE__*/external_react_default.a.createElement(Grid["a" /* default */], {
      percentage: 'minmax(196px, 1fr)'
    }, files.map(file => {
      var _file$file, _file$file2, _file$file3;

      return /*#__PURE__*/external_react_default.a.createElement(AlignmentRow, {
        key: Object(external_uuid_["v4"])()
      }, /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], {
        key: file.id,
        icon: 'document',
        label: (((_file$file = file.file) === null || _file$file === void 0 ? void 0 : _file$file.name) || ((_file$file2 = file.file) === null || _file$file2 === void 0 ? void 0 : _file$file2.path) || (file === null || file === void 0 ? void 0 : file.name) || (file === null || file === void 0 ? void 0 : file.path)).split('/').slice(-1)[0],
        text: Object(functions["c" /* getFileSize */])(file.size || ((_file$file3 = file.file) === null || _file$file3 === void 0 ? void 0 : _file$file3.size))
      }), !project && /*#__PURE__*/external_react_default.a.createElement(RemoveTooltip, {
        place: 'left',
        text: 'Удалить'
      }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
        type: 'button',
        kind: 'icon',
        size: 'xs',
        onClick: () => onFileRemove(file.id)
      }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
        size: 'xs',
        icon: 'delete',
        stroke: 'white'
      }))));
    })) : /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        textAlign: 'center'
      },
      width: '100%'
    }, "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0444\u0430\u0439\u043B\u044B"), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
      clear: true
    }), errors && errors.presentation && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0432\u0438\u0434\u0435\u043E"), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
      type: 'text',
      ref: register(),
      name: 'presentation',
      defaultValue: getValues('presentation') || ((_data$getProject10 = data.getProject) === null || _data$getProject10 === void 0 ? void 0 : _data$getProject10.presentation),
      placeholder: 'Вставьте ссылку на видео',
      appearance: 'ghost',
      disabled: loading
    }), canEditStatus && /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
      clear: true
    }), canEditStatus && /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'status',
      control: control,
      defaultValue: getValues('status') || ((_data$getProject11 = data.getProject) !== null && _data$getProject11 !== void 0 && _data$getProject11.status ? {
        value: data.getProject.status,
        label: Object(functions["g" /* getLabelStatus */])(data.getProject.status)
      } : null),
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(Select["a" /* default */], {
        appearance: 'ghost',
        placeholder: 'Выберите статус',
        options: statuses.map(item => ({
          value: item,
          label: Object(functions["g" /* getLabelStatus */])(item)
        })),
        onChange: onChange,
        defaultValue: value,
        menuPlacement: 'top',
        isLoading: loading,
        isClearable: true
      })
    }), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
      clear: true
    }), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
      style: {
        flexGrow: 1
      },
      type: 'submit',
      disabled: loading
    }, project ? 'Сохранить' : 'Создать'))) : error ? /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      appearance: 'error',
      style: {
        width: '100%',
        textAlign: 'center'
      }
    }, "\u0423\u043F\u0441! \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435") : /*#__PURE__*/external_react_default.a.createElement(Styled["c" /* Loader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null));
  });
};
/* harmony default export */ var FormProject = (Project);
// EXTERNAL MODULE: ./components/FormDelete/index.js
var FormDelete = __webpack_require__("xAqQ");

// EXTERNAL MODULE: ./components/FormSureDelete/index.js
var FormSureDelete = __webpack_require__("FHIK");

// EXTERNAL MODULE: ./components/ProjectCard/index.js
var ProjectCard = __webpack_require__("1zqG");

// EXTERNAL MODULE: external "react-youtube"
var external_react_youtube_ = __webpack_require__("oLQh");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_);

// EXTERNAL MODULE: ./atomic-ui/components/Meta/index.js
var Meta = __webpack_require__("aBfq");

// EXTERNAL MODULE: ./hooks/useEntityQuery.js + 1 modules
var useEntityQuery = __webpack_require__("8UhZ");

// EXTERNAL MODULE: ./components/HTMLView/index.js
var HTMLView = __webpack_require__("ji1G");

// EXTERNAL MODULE: ./components/Processed/index.js
var Processed = __webpack_require__("2qQv");

// CONCATENATED MODULE: ./components/ProjectView/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }























const ProjectView_Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "ProjectView__Wrap",
  componentId: "sc-1fg5jgh-0"
})(["flex-grow:1;", " ", " ", ""], ({
  appearance
}) => appearance === 'default' && Object(external_styled_components_["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Container = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "ProjectView__Container",
  componentId: "sc-1fg5jgh-1"
})(["@media only screen and (max-width:768px){flex-direction:column;grid-gap:var(--default-gap);}"]);
const Media = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "ProjectView__Media",
  componentId: "sc-1fg5jgh-2"
})(["grid-gap:5px;flex-basis:35%;& > span{display:flex;flex-grow:1;}@media only screen and (max-width:480px){flex-basis:100%;}"]);
const ProjectView_Content = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "ProjectView__Content",
  componentId: "sc-1fg5jgh-3"
})(["justify-content:space-between;flex-basis:65%;@media only screen and (max-width:480px){flex-basis:100%;}"]);
const Screenshots = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "ProjectView__Screenshots",
  componentId: "sc-1fg5jgh-4"
})(["justify-content:space-between;grid-gap:5px;"]);
const ProjectView_Screenshot = external_styled_components_default.a.div.withConfig({
  displayName: "ProjectView__Screenshot",
  componentId: "sc-1fg5jgh-5"
})(["position:relative;z-index:var(--z-12);width:auto;height:var(--input-height-s);min-width:var(--input-height-s);min-height:var(--input-height-s);border-radius:var(--surface-border-radius);overflow:hidden;transition:opacity 150ms ease;span,span > img{display:flex;justify-content:center;align-items:center;flex-grow:1;width:100%;height:100%;}img{width:100%;height:100%;object-fit:cover;}", ""], ({
  onClick
}) => onClick && Object(external_styled_components_["css"])(["cursor:pointer;&:hover{opacity:0.65;}"]));
const ScreenshotsCounter = external_styled_components_default()(Text["b" /* default */]).withConfig({
  displayName: "ProjectView__ScreenshotsCounter",
  componentId: "sc-1fg5jgh-6"
})(["position:absolute;top:0;left:0;z-index:var(--z-10);display:flex;justify-content:center;align-items:center;width:100%;height:100%;span{position:relative;z-index:var(--z-12);color:white;}&::before{content:'';position:absolute;top:0;left:0;z-index:var(--z-10);display:flex;justify-content:center;align-items:center;width:100%;height:100%;background:var(--default-color-accent);border-radius:var(--surface-border-radius);opacity:0.65;}"]);
const CentralAlert = external_styled_components_default()(Alert["a" /* default */]).withConfig({
  displayName: "ProjectView__CentralAlert",
  componentId: "sc-1fg5jgh-7"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;text-align:center;"]);
const Poster = external_styled_components_default()(Image["a" /* default */]).withConfig({
  displayName: "ProjectView__Poster",
  componentId: "sc-1fg5jgh-8"
})(["width:100%;height:100%;object-fit:cover;border-radius:var(--surface-border-radius);flex-grow:1;transition:opacity 150ms ease;", ""], ({
  onClick
}) => onClick && Object(external_styled_components_["css"])(["cursor:pointer;&:hover{opacity:0.65;}"]));
const Difinitions = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "ProjectView__Difinitions",
  componentId: "sc-1fg5jgh-9"
})(["flex-grow:100;justify-content:space-between;grid-gap:var(--default-gap);@media only screen and (max-width:480px){flex-direction:column;}"]);
const Presentation = external_styled_components_default()(external_react_youtube_default.a).withConfig({
  displayName: "ProjectView__Presentation",
  componentId: "sc-1fg5jgh-10"
})(["display:flex;flex-grow:1;width:100%;border-radius:var(--surface-border-radius);overflow:hidden;iframe{width:100%;}"]);
const Actions = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "ProjectView__Actions",
  componentId: "sc-1fg5jgh-11"
})(["@media only screen and (max-width:480px){", "{flex-grow:1;button{flex-grow:1;}}}"], Tooltip["a" /* Wrap */]);
const Files = external_styled_components_default()(Grid["a" /* default */]).withConfig({
  displayName: "ProjectView__Files",
  componentId: "sc-1fg5jgh-12"
})([""]);
const Members = external_styled_components_default()(Grid["a" /* default */]).withConfig({
  displayName: "ProjectView__Members",
  componentId: "sc-1fg5jgh-13"
})([""]);
const View = ({
  project,
  appearance,
  className,
  style,
  slicedFactor = 6,
  owned,
  liked,
  onAdd,
  onLike,
  onScreenshotClick,
  onFileLink,
  onMemberLink,
  onCompanyLink
}) => {
  var _data$getProject, _data$getProject2, _data$getProject2$pre, _data$getProject7, _data$getProject8, _data$getProject8$scr, _data$getProject11, _data$getProject11$ca, _data$getProject12, _data$getProject13, _data$getProject14, _data$getProject15, _data$getProject15$co, _data$getProject15$co2, _data$getProject16, _data$getProject16$co, _data$getProject18, _data$getProject19, _data$getProject20, _data$getProject21, _data$getProject22, _data$getProject22$me, _data$getProject23, _data$getProject24, _data$getProject25, _data$getProject25$me, _data$getProject26, _data$getProject27, _data$getProject27$fi, _data$getProject28, _data$getProject29, _data$getProject30, _data$getProject30$fi;

  const {
    setQuery
  } = Object(useEntityQuery["b" /* useEntityQuery */])();
  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_PROJECT, {
    variables: {
      id: project
    }
  });
  const [isLiked, setLike] = Object(external_react_["useState"])(liked);
  const [screenshots, setScreenshots] = Object(external_react_["useState"])([]);
  const [residue, setResidue] = Object(external_react_["useState"])(0);
  const [videoId, setVideoId] = Object(external_react_["useState"])(null);

  const onClickLike = () => {
    if (onLike) onLike();
    setLike(!isLiked);
  };

  Object(external_react_["useEffect"])(() => {
    if (!loading && data.getProject) {
      var _url$searchParams;

      const response = data.getProject;
      const images = [response.preview, ...response.screenshots];
      const slicedImages = images.slice(0, slicedFactor);
      const url = response.presentation && new URL(response.presentation);
      setResidue((images.length || slicedFactor) - slicedFactor);
      setVideoId(url === null || url === void 0 ? void 0 : (_url$searchParams = url.searchParams) === null || _url$searchParams === void 0 ? void 0 : _url$searchParams.get('v'));
      setScreenshots(slicedImages);
    }
  }, [loading, data, slicedFactor]);
  return /*#__PURE__*/external_react_default.a.createElement(ProjectView_Wrap, {
    className: className,
    style: style,
    appearance: appearance
  }, /*#__PURE__*/external_react_default.a.createElement(Processed["a" /* default */], {
    data: data === null || data === void 0 ? void 0 : data.getProject,
    loading: loading,
    error: error,
    errorMessage: 'Упс! Не удалось загрузить информацию о проекте',
    emptyMessage: 'Кажется такого проекта не существует'
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Container, null, /*#__PURE__*/external_react_default.a.createElement(Media, null, data !== null && data !== void 0 && (_data$getProject = data.getProject) !== null && _data$getProject !== void 0 && _data$getProject.preview ? /*#__PURE__*/external_react_default.a.createElement(Poster, {
    src: data === null || data === void 0 ? void 0 : (_data$getProject2 = data.getProject) === null || _data$getProject2 === void 0 ? void 0 : (_data$getProject2$pre = _data$getProject2.preview) === null || _data$getProject2$pre === void 0 ? void 0 : _data$getProject2$pre.path,
    onClick: () => {
      var _data$getProject3, _data$getProject4, _data$getProject4$pre, _data$getProject5, _data$getProject6;

      return onScreenshotClick && onScreenshotClick(data === null || data === void 0 ? void 0 : (_data$getProject3 = data.getProject) === null || _data$getProject3 === void 0 ? void 0 : _data$getProject3.preview, data === null || data === void 0 ? void 0 : (_data$getProject4 = data.getProject) === null || _data$getProject4 === void 0 ? void 0 : (_data$getProject4$pre = _data$getProject4.preview) === null || _data$getProject4$pre === void 0 ? void 0 : _data$getProject4$pre.id, [data === null || data === void 0 ? void 0 : (_data$getProject5 = data.getProject) === null || _data$getProject5 === void 0 ? void 0 : _data$getProject5.preview, ...(data === null || data === void 0 ? void 0 : (_data$getProject6 = data.getProject) === null || _data$getProject6 === void 0 ? void 0 : _data$getProject6.screenshots)]);
    }
  }) : /*#__PURE__*/external_react_default.a.createElement(CentralAlert, null, "\u041F\u0440\u0435\u0432\u044C\u044E \u043D\u0435\u0442"), (data === null || data === void 0 ? void 0 : (_data$getProject7 = data.getProject) === null || _data$getProject7 === void 0 ? void 0 : _data$getProject7.screenshots) && (data === null || data === void 0 ? void 0 : (_data$getProject8 = data.getProject) === null || _data$getProject8 === void 0 ? void 0 : (_data$getProject8$scr = _data$getProject8.screenshots) === null || _data$getProject8$scr === void 0 ? void 0 : _data$getProject8$scr.length) > 0 && /*#__PURE__*/external_react_default.a.createElement(Screenshots, null, screenshots.map((screenshot, index) => /*#__PURE__*/external_react_default.a.createElement(ProjectView_Screenshot, {
    key: screenshot.id,
    onClick: () => {
      var _data$getProject9, _data$getProject10;

      return onScreenshotClick && onScreenshotClick(screenshot, screenshot.id, [data === null || data === void 0 ? void 0 : (_data$getProject9 = data.getProject) === null || _data$getProject9 === void 0 ? void 0 : _data$getProject9.preview, ...(data === null || data === void 0 ? void 0 : (_data$getProject10 = data.getProject) === null || _data$getProject10 === void 0 ? void 0 : _data$getProject10.screenshots)]);
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Image["a" /* default */], {
    src: screenshot.path,
    alt: screenshot.name
  }), index === (screenshots === null || screenshots === void 0 ? void 0 : screenshots.length) - 1 && residue > 0 && /*#__PURE__*/external_react_default.a.createElement(ScreenshotsCounter, null, /*#__PURE__*/external_react_default.a.createElement("span", null, "+", residue)))))), /*#__PURE__*/external_react_default.a.createElement(ProjectView_Content, null, /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Meta["a" /* default */], {
    category: data === null || data === void 0 ? void 0 : (_data$getProject11 = data.getProject) === null || _data$getProject11 === void 0 ? void 0 : (_data$getProject11$ca = _data$getProject11.category) === null || _data$getProject11$ca === void 0 ? void 0 : _data$getProject11$ca.name
  }), /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h3',
    style: {
      marginTop: -5,
      marginBottom: 5
    }
  }, data === null || data === void 0 ? void 0 : (_data$getProject12 = data.getProject) === null || _data$getProject12 === void 0 ? void 0 : _data$getProject12.title), /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, data === null || data === void 0 ? void 0 : (_data$getProject13 = data.getProject) === null || _data$getProject13 === void 0 ? void 0 : _data$getProject13.description)), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
    clear: true
  }), /*#__PURE__*/external_react_default.a.createElement(Difinitions, null, /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], _extends({}, data !== null && data !== void 0 && (_data$getProject14 = data.getProject) !== null && _data$getProject14 !== void 0 && _data$getProject14.company ? {
    img: data === null || data === void 0 ? void 0 : (_data$getProject15 = data.getProject) === null || _data$getProject15 === void 0 ? void 0 : (_data$getProject15$co = _data$getProject15.company) === null || _data$getProject15$co === void 0 ? void 0 : (_data$getProject15$co2 = _data$getProject15$co.avatar) === null || _data$getProject15$co2 === void 0 ? void 0 : _data$getProject15$co2.path
  } : {
    icon: 'work'
  }, {
    label: 'Компания',
    text: (data === null || data === void 0 ? void 0 : (_data$getProject16 = data.getProject) === null || _data$getProject16 === void 0 ? void 0 : (_data$getProject16$co = _data$getProject16.company) === null || _data$getProject16$co === void 0 ? void 0 : _data$getProject16$co.name) || '-',
    onLink: () => {
      var _data$getProject17, _data$getProject17$co;

      return setQuery(data === null || data === void 0 ? void 0 : (_data$getProject17 = data.getProject) === null || _data$getProject17 === void 0 ? void 0 : (_data$getProject17$co = _data$getProject17.company) === null || _data$getProject17$co === void 0 ? void 0 : _data$getProject17$co.email, 'user', onCompanyLink);
    }
  })), !owned && (onLike || onAdd) && /*#__PURE__*/external_react_default.a.createElement(Actions, null, onLike && /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
    text: 'Мне нравится'
  }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    type: 'button',
    kind: 'icon',
    onClick: onClickLike,
    revert: !isLiked
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'heart',
    stroke: isLiked ? 'white' : 'var(--default-color-accent)'
  }))), onAdd && /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
    text: 'Добавить проект к себе'
  }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    type: 'button',
    kind: 'icon',
    onClick: onAdd,
    revert: true
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'add',
    stroke: 'var(--default-color-accent)'
  })))))))), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
    clear: true
  }), (data === null || data === void 0 ? void 0 : (_data$getProject18 = data.getProject) === null || _data$getProject18 === void 0 ? void 0 : _data$getProject18.body) && /*#__PURE__*/external_react_default.a.createElement(HTMLView["a" /* default */], {
    content: data === null || data === void 0 ? void 0 : (_data$getProject19 = data.getProject) === null || _data$getProject19 === void 0 ? void 0 : _data$getProject19.body
  }), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
    clear: true
  }), (data === null || data === void 0 ? void 0 : (_data$getProject20 = data.getProject) === null || _data$getProject20 === void 0 ? void 0 : _data$getProject20.presentation) && videoId && /*#__PURE__*/external_react_default.a.createElement(Presentation, {
    videoId: videoId
  }), /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h4'
  }, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"), (data === null || data === void 0 ? void 0 : (_data$getProject21 = data.getProject) === null || _data$getProject21 === void 0 ? void 0 : _data$getProject21.members) && (data === null || data === void 0 ? void 0 : (_data$getProject22 = data.getProject) === null || _data$getProject22 === void 0 ? void 0 : (_data$getProject22$me = _data$getProject22.members) === null || _data$getProject22$me === void 0 ? void 0 : _data$getProject22$me.length) > 0 && /*#__PURE__*/external_react_default.a.createElement(Members, {
    percentage: 'minmax(320px, 1fr)'
  }, data === null || data === void 0 ? void 0 : (_data$getProject23 = data.getProject) === null || _data$getProject23 === void 0 ? void 0 : _data$getProject23.members.map(member => {
    var _member$avatar;

    return /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], {
      key: member === null || member === void 0 ? void 0 : member.email,
      img: (member === null || member === void 0 ? void 0 : (_member$avatar = member.avatar) === null || _member$avatar === void 0 ? void 0 : _member$avatar.path) || '/images/avatar-default.png',
      label: Object(functions["f" /* getLabelRole */])(member === null || member === void 0 ? void 0 : member.account),
      text: member === null || member === void 0 ? void 0 : member.name,
      onLink: onMemberLink && (() => setQuery(member === null || member === void 0 ? void 0 : member.email, 'user', onMemberLink))
    });
  })), (!(data !== null && data !== void 0 && (_data$getProject24 = data.getProject) !== null && _data$getProject24 !== void 0 && _data$getProject24.members) || (data === null || data === void 0 ? void 0 : (_data$getProject25 = data.getProject) === null || _data$getProject25 === void 0 ? void 0 : (_data$getProject25$me = _data$getProject25.members) === null || _data$getProject25$me === void 0 ? void 0 : _data$getProject25$me.length) === 0) && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u043D\u0435\u0442"), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
    clear: true
  }), /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h4'
  }, "\u0424\u0430\u0439\u043B\u044B"), (data === null || data === void 0 ? void 0 : (_data$getProject26 = data.getProject) === null || _data$getProject26 === void 0 ? void 0 : _data$getProject26.files) && (data === null || data === void 0 ? void 0 : (_data$getProject27 = data.getProject) === null || _data$getProject27 === void 0 ? void 0 : (_data$getProject27$fi = _data$getProject27.files) === null || _data$getProject27$fi === void 0 ? void 0 : _data$getProject27$fi.length) > 0 && /*#__PURE__*/external_react_default.a.createElement(Files, {
    percentage: 'minmax(256px, 1fr)'
  }, data === null || data === void 0 ? void 0 : (_data$getProject28 = data.getProject) === null || _data$getProject28 === void 0 ? void 0 : _data$getProject28.files.map(file => /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], {
    key: file.id,
    icon: 'paper',
    label: file.filename,
    text: Object(functions["c" /* getFileSize */])(file.size),
    onLink: () => onFileLink && onFileLink(file)
  }))), (!(data !== null && data !== void 0 && (_data$getProject29 = data.getProject) !== null && _data$getProject29 !== void 0 && _data$getProject29.files) || (data === null || data === void 0 ? void 0 : (_data$getProject30 = data.getProject) === null || _data$getProject30 === void 0 ? void 0 : (_data$getProject30$fi = _data$getProject30.files) === null || _data$getProject30$fi === void 0 ? void 0 : _data$getProject30$fi.length) === 0) && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "\u0424\u0430\u0439\u043B\u043E\u0432 \u043D\u0435\u0442"))));
};
View.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ var ProjectView = (View);
// EXTERNAL MODULE: ./store/actions/documents.js
var documents = __webpack_require__("j8/+");

// EXTERNAL MODULE: ./store/actions/modal.js
var modal = __webpack_require__("qOKH");

// EXTERNAL MODULE: ./store/actions/drawer.js
var drawer = __webpack_require__("Ztxg");

// EXTERNAL MODULE: ./store/actions/snacks.js
var snacks = __webpack_require__("9Xo6");

// EXTERNAL MODULE: ./store/helpers/user.js + 11 modules
var helpers_user = __webpack_require__("rP4V");

// EXTERNAL MODULE: ./store/helpers/index.js + 4 modules
var helpers = __webpack_require__("+EEm");

// CONCATENATED MODULE: ./store/helpers/project.js























const CreateButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "project__CreateButton",
  componentId: "a72d83-0"
})(["display:flex;justify-content:center;align-items:center;grid-gap:10px;span{white-space:nowrap;}"]);
function onProjectLink(dispatch, props) {
  const {
    id,
    auth,
    liked,
    onAdd,
    onLike,
    owned
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'work',
    title: 'Проект',
    content: /*#__PURE__*/external_react_default.a.createElement(ProjectView, {
      appearance: 'clear',
      project: id,
      owned: owned,
      liked: liked,
      onLike: onLike,
      onAdd: onAdd,
      onFileLink: () => Object(helpers["b" /* onFileLink */])(dispatch, {
        id
      }),
      onAboutMore: project => Object(helpers_user["a" /* onUserAboutMore */])(dispatch, {
        project
      }),
      onMemberLink: member => Object(helpers_user["i" /* onUserLink */])(dispatch, {
        id: member,
        auth,
        owned
      }),
      onCompanyLink: company => Object(helpers_user["i" /* onUserLink */])(dispatch, {
        id: company,
        auth,
        owned
      }),
      onScreenshotClick: (_, key, screenshots) => onProjectScreenshot(dispatch, {
        screenshots,
        key
      })
    })
  }));
}
function onProjectCreate(dispatch, props) {
  const {
    companies,
    categories,
    statuses,
    canEditStatus,
    mutation,
    query,
    onCompanyInputChange
  } = props;
  dispatch(Object(root["e" /* clearProjectMembers */])());
  dispatch(Object(root["f" /* clearProjectScreenshots */])());
  dispatch(Object(root["d" /* clearProjectFiles */])());
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'work',
    title: 'Создание проекта',
    content: /*#__PURE__*/external_react_default.a.createElement(FormProject, {
      mutation: mutation,
      companies: companies,
      categories: categories,
      statuses: statuses,
      appearance: 'clear',
      canEditStatus: canEditStatus,
      onMemberAdd: () => project_onMemberAdd(dispatch, {
        query
      }),
      onScreenshotAdd: () => project_onScreenshotAdd(dispatch),
      onFileAdd: () => project_onFileAdd(dispatch),
      onMemberRemove: name => dispatch(Object(root["h" /* removeProjectMember */])(name)),
      onScreenshotRemove: id => onSureDelete(dispatch, {
        id,
        text: 'Вы действительно хотите удалить изображение?',
        removeAction: root["i" /* removeProjectScreenshot */]
      }),
      onFileRemove: id => onSureDelete(dispatch, {
        id,
        text: 'Вы действительно хотите удалить файл?',
        removeAction: root["g" /* removeProjectFile */]
      }),
      onCompanyInputChange: onCompanyInputChange,
      onSubmit: async (form, action) => {
        try {
          var _form$preview, _form$company, _form$company$value, _form$preview2, _form$preview2$file, _form$category, _form$status;

          const members = form.members.map(member => member.value.email);
          const files = form.files.map(file => file.file);
          const fileSizes = form.files.map(file => file.size);
          const screenshots = form.screenshots.map(screenshot => screenshot.file);
          const screenshotSizes = form.screenshots.map(screenshot => screenshot.size);
          const projects = await action({
            variables: {
              input: {
                title: form.title,
                body: form.body,
                description: form.description,
                preview: (_form$preview = form.preview) === null || _form$preview === void 0 ? void 0 : _form$preview.file,
                company: (_form$company = form.company) === null || _form$company === void 0 ? void 0 : (_form$company$value = _form$company.value) === null || _form$company$value === void 0 ? void 0 : _form$company$value.email,
                previewSize: (_form$preview2 = form.preview) === null || _form$preview2 === void 0 ? void 0 : (_form$preview2$file = _form$preview2.file) === null || _form$preview2$file === void 0 ? void 0 : _form$preview2$file.size,
                members: members.length > 0 ? members : [],
                files: files.length > 0 ? files : [],
                fileSizes: fileSizes.length > 0 ? fileSizes : [],
                screenshots: screenshots.length > 0 ? screenshots : [],
                screenshotSizes: screenshotSizes.length > 0 ? screenshotSizes : [],
                presentation: form.presentation,
                category: (_form$category = form.category) === null || _form$category === void 0 ? void 0 : _form$category.value,
                status: (_form$status = form.status) === null || _form$status === void 0 ? void 0 : _form$status.value
              }
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(projects.data.createProject));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Проект успешно создан'
          }));
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось создать проект'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(root["e" /* clearProjectMembers */])());
          dispatch(Object(root["f" /* clearProjectScreenshots */])());
          dispatch(Object(root["d" /* clearProjectFiles */])());
        }
      }
    })
  }));
}
function onProjectEdit(dispatch, props) {
  const {
    id,
    auth,
    companies,
    categories,
    statuses,
    canEditStatus,
    mutation,
    query
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'work',
    title: 'Редактирование проекта',
    content: /*#__PURE__*/external_react_default.a.createElement(FormProject, {
      project: id,
      mutation: mutation,
      companies: companies,
      categories: categories,
      statuses: statuses,
      appearance: 'clear',
      canEditStatus: canEditStatus,
      onMemberAdd: () => project_onMemberAdd(dispatch, {
        query
      }),
      onScreenshotAdd: () => project_onScreenshotAdd(dispatch),
      onFileAdd: () => project_onFileAdd(dispatch),
      onMemberRemove: name => dispatch(Object(root["h" /* removeProjectMember */])(name)),
      onScreenshotRemove: id => onSureDelete(dispatch, {
        id,
        text: 'Вы действительно хотите удалить изображение?',
        removeAction: root["i" /* removeProjectScreenshot */]
      }),
      onFileRemove: id => onSureDelete(dispatch, {
        id,
        text: 'Вы действительно хотите удалить файл?',
        removeAction: root["g" /* removeProjectFile */]
      }),
      onSubmit: async (form, action) => {
        try {
          var _form$preview3, _form$company2, _form$company2$value, _form$preview4, _form$preview4$file, _form$category2, _form$status2;

          const members = form.members.map(member => {
            var _member$value;

            return member.email || ((_member$value = member.value) === null || _member$value === void 0 ? void 0 : _member$value.email);
          });
          const files = form.files.filter(screenshot => {
            var _screenshot$file;

            return !((_screenshot$file = screenshot.file) !== null && _screenshot$file !== void 0 && _screenshot$file.id);
          }).map(file => {
            var _file$file;

            return (_file$file = file.file) !== null && _file$file !== void 0 && _file$file.type ? file.file : null;
          });
          const screenshots = form.screenshots.filter(screenshot => {
            var _screenshot$file2;

            return !((_screenshot$file2 = screenshot.file) !== null && _screenshot$file2 !== void 0 && _screenshot$file2.id);
          }).map(screenshot => {
            var _screenshot$file3;

            return (_screenshot$file3 = screenshot.file) !== null && _screenshot$file3 !== void 0 && _screenshot$file3.type ? screenshot.file : null;
          });
          const fileSizes = form.files.map(file => file.size);
          const screenshotSizes = form.screenshots.map(screenshot => screenshot.size);
          const projects = await action({
            variables: {
              id,
              input: {
                title: form.title,
                body: form.body,
                description: form.description,
                preview: (_form$preview3 = form.preview) === null || _form$preview3 === void 0 ? void 0 : _form$preview3.file,
                company: (_form$company2 = form.company) === null || _form$company2 === void 0 ? void 0 : (_form$company2$value = _form$company2.value) === null || _form$company2$value === void 0 ? void 0 : _form$company2$value.email,
                previewSize: (_form$preview4 = form.preview) === null || _form$preview4 === void 0 ? void 0 : (_form$preview4$file = _form$preview4.file) === null || _form$preview4$file === void 0 ? void 0 : _form$preview4$file.size,
                members: members,
                files: files,
                fileSizes: fileSizes,
                screenshots: screenshots,
                screenshotSizes: screenshotSizes,
                presentation: form.presentation,
                category: (_form$category2 = form.category) === null || _form$category2 === void 0 ? void 0 : _form$category2.value,
                status: (_form$status2 = form.status) === null || _form$status2 === void 0 ? void 0 : _form$status2.value
              }
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(projects.data.updateProject));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Проект успешно отредактирован'
          }));
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось отредактирвоать проект'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(root["e" /* clearProjectMembers */])());
          dispatch(Object(root["f" /* clearProjectScreenshots */])());
          dispatch(Object(root["d" /* clearProjectFiles */])());
        }
      },
      onCommentLink: user => Object(helpers_user["i" /* onUserLink */])(dispatch, {
        email: user,
        auth
      })
    })
  }));
}
function onProjectDelete(dispatch, props) {
  const {
    id,
    auth,
    project,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'delete',
    color: 'red',
    title: 'Удаление проекта',
    content: /*#__PURE__*/external_react_default.a.createElement(FormDelete["a" /* default */], {
      mutation: mutation,
      appearance: 'clear',
      onCancel: () => dispatch(Object(drawer["a" /* setDrawer */])(null)),
      onSubmit: async (_, action) => {
        try {
          const projects = await action({
            variables: {
              id
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(projects.data.deleteProject));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Проект успешно удален'
          }));
        } catch (_unused) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось удалить проект'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
        }
      }
    }, /*#__PURE__*/external_react_default.a.createElement(ProjectCard["c" /* default */], {
      project: project,
      appearance: 'clear',
      onLink: () => onProjectLink(dispatch, {
        id: project.id
      }),
      onAdd: () => onProjectAdd(dispatch, {
        id: project.id
      }),
      onCompanyLink: company => Object(helpers_user["i" /* onUserLink */])(dispatch, {
        id: company,
        auth
      }),
      onScreenshotClick: (_, key) => onProjectScreenshot(dispatch, {
        screenshots: [project.preview, ...project.screenshots],
        key
      })
    }))
  }));
}
function onProjectAdd(dispatch, props) {
  const {
    id,
    folders,
    mutations,
    callback
  } = props;
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: 'В какую папку добавить проект?',
    component: () => /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
      style: {
        padding: '15px'
      }
    }, folders && folders.length > 0 ? /*#__PURE__*/external_react_default.a.createElement(Grid["a" /* default */], {
      length: 'auto-fit',
      percentage: 'minmax(225px, 1fr)'
    }, folders.map(folder => {
      const length = folder.projects.length;
      const label = length === 1 ? 'проект' : length > 1 && length < 5 ? 'проекта' : 'проектов';
      const disabled = folder.projects.find(item => item === id);
      return /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], {
        key: folder.id,
        icon: 'paper',
        text: folder.name,
        label: `${length} ${label}${disabled ? ' (уже есть)' : ''}`,
        disabled: disabled,
        onLink: () => {
          dispatch(Object(root["k" /* setMutate */])(mutations.addProject, {
            project: id,
            folder: folder.id
          }));
          dispatch(Object(modal["a" /* setModal */])(null));
          if (callback) callback(folder);
        },
        revert: true
      });
    })) : /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        textAlign: 'center'
      },
      width: '100%'
    }, "\u041F\u0430\u043F\u043E\u043A \u043D\u0435\u0442"), /*#__PURE__*/external_react_default.a.createElement(CreateButton, {
      onClick: () => Object(helpers_user["g" /* onUserFolderAdd */])(dispatch, {
        mutation: mutations.createFolder,
        onCancel: () => onProjectAdd(dispatch, props),
        callback: items => onProjectAdd(dispatch, { ...props,
          folders: items || folders
        })
      })
    }, /*#__PURE__*/external_react_default.a.createElement("span", null, "\u041D\u043E\u0432\u0430\u044F \u043F\u0430\u043F\u043A\u0430"), /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
      icon: 'add',
      stroke: 'white'
    })))
  }]));
}
function onProjectRemove(dispatch, props) {
  const {
    id,
    folder,
    mutation,
    callback
  } = props;
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: 'Удаление проекта из папки',
    component: () => /*#__PURE__*/external_react_default.a.createElement(FormSureDelete["b" /* default */], {
      text: 'Вы действительно хотите удалить этот проект?',
      mutation: mutation,
      padding: false,
      onCancel: () => dispatch(Object(modal["a" /* setModal */])(null)),
      onSubmit: async (_, action) => {
        await action({
          variables: {
            project: id,
            folder: folder.id
          }
        });
        dispatch(Object(modal["a" /* setModal */])(null));
        if (callback) callback();
      }
    })
  }]));
}
function project_onMemberAdd(dispatch, props) {
  const {
    query
  } = props;
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: 'Добавление участника',
    component: () => /*#__PURE__*/external_react_default.a.createElement(FormAddMember, {
      query: query,
      onSubmit: member => {
        dispatch(Object(root["b" /* addProjectMember */])(member));
        dispatch(Object(modal["a" /* setModal */])(null));
      }
    })
  }]));
}
function project_onScreenshotAdd(dispatch) {
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: 'Добавление изображений',
    component: () => /*#__PURE__*/external_react_default.a.createElement(FormAddFile, {
      placeholder: 'Перетащите сюда изображения',
      submitText: 'Добавить изображения',
      onSubmit: files => {
        for (let file of files) {
          dispatch(Object(root["c" /* addProjectScreenshot */])(file));
        }

        dispatch(Object(modal["a" /* setModal */])(null));
      }
    })
  }]));
}
function project_onFileAdd(dispatch) {
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: 'Добавление файлов',
    component: () => /*#__PURE__*/external_react_default.a.createElement(FormAddFile, {
      accept: 'application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*',
      onSubmit: files => {
        for (let file of files) {
          dispatch(Object(root["a" /* addProjectFile */])(file));
        }

        dispatch(Object(modal["a" /* setModal */])(null));
      }
    })
  }]));
}
function onSureDelete(dispatch, props) {
  const {
    id,
    text,
    removeAction
  } = props;
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: 'Удаление',
    component: () => /*#__PURE__*/external_react_default.a.createElement(FormSureDelete["a" /* Content */], {
      text: text,
      type: 'button',
      onCancel: () => dispatch(Object(modal["a" /* setModal */])(null)),
      onSubmit: async () => {
        dispatch(removeAction(id));
        dispatch(Object(modal["a" /* setModal */])(null));
      },
      padding: true
    })
  }]));
}
function onProjectScreenshot(dispatch, props) {
  const {
    key,
    screenshots
  } = props;
  dispatch(Object(modal["a" /* setModal */])(screenshots.map((screenshot, index) => ({
    title: 'Изображение',
    path: `/${screenshot.id}`,
    home: screenshot.id === key,
    component: ({
      jump
    }) => /*#__PURE__*/external_react_default.a.createElement(components_Screenshot, {
      index: index,
      screenshot: screenshot,
      screenshots: screenshots,
      onClick: jump
    }),
    back: false
  })), 'l'));
}

/***/ }),

/***/ "JyfY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Chip */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  display: flex;
  align-items: center;

  font-weight: 400;
  color: white;
  line-height: 1;
  padding: 0 8px;

  border: 1px solid transparent;
  border-radius: 25rem;
  width: fit-content;

  cursor: pointer;
  transition: all 150ms ease;

  ${({
  size
}) => size && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      font-size: var(--font-size-${size});
      height: var(--chip-height-${size});
    `}

  ${({
  size
}) => size === 'xs' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      font-size: var(--font-size-${size});
      height: 18px;
    `}

  ${({
  appearance
}) => appearance === 'default' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: white;

      ${({
  color
}) => color === 'default' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
          background: var(--default-color-accent);
          border-color: var(--default-color-accent);

          &:hover {
            background: var(--default-color-accent__hover);
            border-color: var(--default-color-accent__hover);
          }
        `}

      ${({
  color
}) => color === 'orange' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
          background: var(--default-color-orange);
          border-color: var(--default-color-orange);

          &:hover {
            background: var(--default-color-orange);
            border-color: var(--default-color-orange);
          }
        `}

    ${({
  color
}) => color === 'red' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
          background: var(--default-color-red);
          border-color: var(--default-color-red);

          &:hover {
            background: var(--default-color-red);
            border-color: var(--default-color-red);
          }
        `}
    `}

  ${({
  appearance
}) => appearance === 'outlined' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      background: transparent;

      ${({
  color
}) => color === 'default' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
          border-color: var(--default-color-accent);
          color: var(--default-color-accent);

          &:hover {
            border-color: var(--default-color-accent__hover);
            color: var(--default-color-accent__hover);
          }
        `}

      ${({
  color
}) => color === 'ghost' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
          border-color: var(--default-color-text);
          color: var(--default-color-text);

          &:hover {
            border-color: var(--ghost-color-accent__hover);
            color: var(--ghost-color-accent__hover);
          }
        `}

      ${({
  color
}) => color === 'orange' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
          border-color: var(--default-color-orange);
          color: var(--default-color-orange);

          &:hover {
            border-color: var(--default-color-orange);
            color: var(--default-color-orange);
          }
        `}

    ${({
  color
}) => color === 'red' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
          border-color: var(--default-color-red);
          color: var(--default-color-red);

          &:hover {
            border-color: var(--default-color-red);
            color: var(--default-color-red);
          }
        `}
    `}
`;
const Chip = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Wrap, props, children);
};
Chip.defaultProps = {
  size: 's',
  color: 'default',
  appearance: 'default'
};
/* harmony default export */ __webpack_exports__["a"] = (Chip);

/***/ }),

/***/ "M71N":
/***/ (function(module, exports) {

module.exports = require("@tinymce/tinymce-react");

/***/ }),

/***/ "Mdx/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  SET_MODAL: 'SET_MODAL'
});

/***/ }),

/***/ "N0uN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Container */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin: 15px 0;
  padding: 0;
`;
const Container = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Wrap, props, children);
};
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "NWnW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createSelectOption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createSelectOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getLabelStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getLabelRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLabelCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getLabelPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return b64EncodeUnicode; });
/* unused harmony export b64DecodeUnicode */
function createSelectOption(option) {
  return {
    value: option,
    label: option
  };
}
function createSelectOptions(options) {
  return options.map(option => createSelectOption(option));
}
const getLabelStatus = status => {
  switch (status) {
    case 'PUBLISHED':
      return 'Опубликовано';

    case 'MODERATION':
      return 'На модерации';

    default:
      return status;
  }
};
const getLabelRole = role => {
  switch (role) {
    case 'ADMIN':
      return 'Админ';

    case 'USER':
      return 'Пользователь';

    case 'MODERATOR':
      return 'Модератор';

    case 'OFICIAL':
      return 'Оф. лицо';

    case 'ENTITY':
      return 'Юр. лицо';

    case 'INDIVIDUAL':
      return 'Физ. лицо';

    default:
      return role;
  }
};
const getLabelCategory = category => {
  switch (category) {
    case 'TICKET':
      return 'Тема обращения';

    case 'DIVISION':
      return 'Раздел проектов/статей';

    default:
      return category;
  }
};
const getLabelPermission = permission => {
  switch (permission) {
    case 'ACCESS_CLIENT':
      return 'Доступ к сайту';

    case 'ACCESS_DASHBOARD':
      return 'Доступ к административной панели';

    case 'VIEW_USER':
      return 'Просмотр пользователя';

    case 'VIEW_CATEGORY':
      return 'Просмотр категории';

    case 'VIEW_ARTICLE':
      return 'Просмотр статьи';

    case 'VIEW_PROJECT':
      return 'Просмотр проекта';

    case 'VIEW_TICKET':
      return 'Просмотр обращения';

    case 'VIEW_ROLE':
      return 'Просмотр роли';

    case 'ADD_USER':
      return 'Создание пользователя';

    case 'ADD_CATEGORY':
      return 'Создание категории';

    case 'ADD_ARTICLE':
      return 'Создание статьи';

    case 'ADD_PROJECT':
      return 'Создание проекта';

    case 'EDIT_USER':
      return 'Редактирвоание пользователя';

    case 'EDIT_CATEGORY':
      return 'Редактирование категории';

    case 'EDIT_ARTICLE':
      return 'Редактирвоание статьи';

    case 'EDIT_PROJECT':
      return 'Редактирвоание проекта';

    case 'DELETE_USER':
      return 'Удаление пользователя';

    case 'DELETE_CATEGORY':
      return 'Удаление категории';

    case 'DELETE_ARTICLE':
      return 'Удаление статьи';

    case 'DELETE_PROJECT':
      return 'Удаление проекта';

    case 'COMMENT_ARTICLE':
      return 'Комментирование статьи';

    case 'COMMENT_PROJECT':
      return 'Комментирование проекта';

    case 'CHATTING':
      return 'Общение';

    default:
      return 'Не определено';
  }
};
const getFileSize = size => {
  if (!size) return 'Неизвестно';
  const limit = 1024;
  const bytes = Number(size);
  const kilobytes = bytes / limit;
  const megabytes = kilobytes / limit;
  const gigabytes = megabytes / limit;
  if (Math.trunc(gigabytes) > 0) return `${Math.round(gigabytes)} ГБ`;
  if (Math.trunc(megabytes) > 0) return `${Math.round(megabytes)} МБ`;
  if (Math.trunc(kilobytes) > 0) return `${Math.round(kilobytes)} КБ`;
  return `${bytes} байт`;
};
const b64EncodeUnicode = str => {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
};
const b64DecodeUnicode = str => {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
};

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "NxHT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12 21.25a9.25 9.25 0 100-18.5 9.25 9.25 0 000 18.5z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M10.558 15.471L14.044 12l-3.486-3.471",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowRightCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["a"] = (SvgArrowRightCircle);

/***/ }),

/***/ "OXt0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Track; });
/* unused harmony export Label */
/* unused harmony export LabeledToggle */
/* unused harmony export Toggle */
/* unused harmony export Switch */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VWQm");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: space-between;
  width: min-content;
  min-width: 240px;
`;
const Track = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  display: flex;
  border-radius: var(--surface-border-radius);
  background: var(--ghost-color-background);
  padding: 3px;
  width: 100%;
  height: var(--input-height-m);

  ${({
  unary
}) => unary && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: 48px;
      height: 24px;
      border-radius: 25rem;
      cursor: pointer;
    `}

  ${({
  stretch
}) => stretch && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      flex-grow: 1;
      width: 100%;
    `}
  
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: auto;
  }
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-regular);
`;
const LabeledToggle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: var(--surface-border);
  background: none;
  box-shadow: none;
  color: var(--ghost-color-text);
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
  padding: 0 15px;
  cursor: pointer;
  flex-grow: 1;

  width: ${({
  width
}) => width};

  svg {
    path,
    circle {
      stroke: var(--ghost-color-text);
    }
  }

  ${({
  active
}) => active && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      border-radius: var(--surface-border-radius);
      background: var(--surface-background);
      box-shadow: var(--surface-box-shadow);
      color: var(--default-color-accent);

      svg {
        path,
        circle {
          stroke: var(--default-color-accent);
        }
      }
    `}

  @media only screen and (max-width: 480px) {
    height: var(--input-height-m);
  }
`;
const Toggle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  position: absolute;
  left: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;

  border-radius: 50%;
  background: var(--ghost-color-text);
  box-shadow: var(--surface-box-shadow);
  transition: left 150ms ease;

  ${({
  active
}) => active && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      left: 26px;
      background: var(--default-color-accent);
    `}
`;
const Switch = ({
  label,
  options,
  ltr,
  rtl,
  defaultValue,
  className,
  style,
  onChange
}) => {
  const list = options || [0, 1];
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue);

  const onClick = item => {
    setSelected(item);
    if (onChange) onChange(item);
  };

  const renderLabeledToggle = (item, key) => __jsx(LabeledToggle, {
    key: key,
    width: item.width || 'auto',
    active: selected && item.value === selected.value,
    onClick: () => onClick(item)
  }, item.label);

  return options && options.length > 0 ? __jsx(Track, {
    className: className,
    style: style
  }, list.map((item, index) => item.tooltip ? __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], {
    key: index,
    style: {
      flexGrow: 1
    },
    text: item.tooltip
  }, renderLabeledToggle(item)) : renderLabeledToggle(item, index))) : __jsx(Wrap, {
    className: className,
    style: style,
    onClick: () => onClick(!selected)
  }, ltr && !rtl && __jsx(Label, null, label), __jsx(Track, {
    unary: true
  }, __jsx(Toggle, {
    active: selected
  })), rtl && __jsx(Label, null, label));
};
Switch.defaultProps = {
  label: 'Enable good mood',
  ltr: true
};
/* harmony default export */ __webpack_exports__["b"] = (Switch);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "P3Wl":
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "PYoj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LIMIT_USERS */
/* unused harmony export Messages */
/* unused harmony export Header */
/* unused harmony export Ticket */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nShV");
/* harmony import */ var _atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8CDE");
/* harmony import */ var _atomic_ui_components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Gliw");
/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZeZO");
/* harmony import */ var _atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("7sPp");
/* harmony import */ var _atomic_ui_components_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ZwIX");
/* harmony import */ var _atomic_ui_components_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("QclZ");
/* harmony import */ var _atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("RKiZ");
/* harmony import */ var _atomic_ui_components_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("auMy");
/* harmony import */ var _atomic_ui_components_TextArea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("3jgA");
/* harmony import */ var _atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("79b8");
/* harmony import */ var _atomic_ui_components_Message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("7ni8");
/* harmony import */ var _atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("NWnW");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("qoM+");
/* harmony import */ var _Styled__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("586Q");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("u2Cb");




















const LIMIT_USERS = 15;
const Messages = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).withConfig({
  displayName: "FormTicket__Messages",
  componentId: "n5aw2g-0"
})(["grid-gap:5px;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"]).withConfig({
  displayName: "FormTicket__Header",
  componentId: "n5aw2g-1"
})(["justify-content:space-between;@media only screen and (max-width:480px){flex-direction:column;align-items:end;grid-gap:var(--default-gap);}"]);
const Ticket = ({
  title,
  ticket,
  appearance,
  mutation,
  className,
  isClient,
  onSubmit
}) => {
  const [checkedAll, setCheckedAll] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // const [offsetUsers, setOffsetUsers] = useState(0)
  // const [usersSelectInput, setUsersSelectInput] = useState('')

  const [messages, setMessages] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [users, setUsers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    data,
    loading: loadingTicket,
    error: errorTicket
  } = ticket ? Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].GET_TICKET, {
    variables: {
      id: ticket
    },
    fetchPolicy: 'no-cache'
  }) : {
    data: {
      getTicket: {}
    },
    loading: false,
    error: false
  };
  const {
    data: dataUsers,
    loading: loadingUsers // refetch: searchUsers,
    // fetchMore: updateUsers

  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].GET_USERS_FOR_TICKET, {
    variables: {
      // offset: offsetUsers,
      account: ['INDIVIDUAL', 'OFICIAL']
    }
  });
  const {
    data: dataCounsellors,
    loading: loadingCounsellors
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].GET_USERS_FOR_TICKET, {
    variables: {
      account: ['INDIVIDUAL', 'ADMIN']
    }
  });
  const {
    data: dataCategories,
    loading: loadingCategories
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"].GET_CATEGORIES, {
    variables: {
      type: 'TICKET'
    }
  });

  const handleCheckedMessages = e => {
    setCheckedAll(e.target.checked);
  };

  const handleCheckedMessage = (message, value) => {
    setMessages(prev => prev.map(item => item.id === message.id ? { ...item,
      checked: value
    } : item));
  };

  const handleDeleteChecked = () => {
    setMessages(prev => prev.filter(message => !message.checked));
  };

  const handleMessageEdit = (message, text) => {
    setMessages(prev => prev.map(item => item.id === message.id ? { ...item,
      updatedAt: new Date(),
      text
    } : item));
  };

  const handleMessageDelete = message => {
    setMessages(prev => prev.filter(item => item.id !== message.id));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (ticket && !loadingTicket && data) {
      setMessages(data.getTicket.messages.map(message => ({ ...message,
        checked: false
      })));
    }
  }, [ticket, data, loadingTicket]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!loadingUsers && dataUsers) {
      setUsers(prev => [...prev, ...dataUsers.getUsers]);
    }
  }, [dataUsers, loadingUsers]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_17__[/* default */ "b"], {
    className: className,
    appearance: appearance,
    mutation: mutation,
    onSubmit: (form, action) => onSubmit({ ...form,
      messages
    }, action)
  }, ({
    register,
    loading,
    errors,
    control,
    getValues
  }) => {
    var _data$getTicket, _data$getTicket2, _data$getTicket2$mess, _data$getTicket3, _data$getTicket4, _data$getTicket5;

    return !loadingTicket && data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      tag: 'h4'
    }, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435"), errors && errors.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Alert__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Input__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      type: 'text',
      name: 'title',
      ref: register({
        required: true
      }),
      defaultValue: getValues('title') || ((_data$getTicket = data.getTicket) === null || _data$getTicket === void 0 ? void 0 : _data$getTicket.title),
      placeholder: 'Краткое описание вашего вопроса',
      appearance: 'ghost',
      disabled: loading
    }), (!ticket || ((_data$getTicket2 = data.getTicket) === null || _data$getTicket2 === void 0 ? void 0 : (_data$getTicket2$mess = _data$getTicket2.messages) === null || _data$getTicket2$mess === void 0 ? void 0 : _data$getTicket2$mess.length) === 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_TextArea__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], {
      type: 'text',
      name: 'message',
      ref: register(),
      defaultValue: getValues('message') || '',
      placeholder: 'Расскройте все подробности вашего вопроса',
      disabled: loading,
      appearance: 'ghost'
    }), !isClient && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
      name: 'author',
      control: control,
      defaultValue: (_data$getTicket3 = data.getTicket) !== null && _data$getTicket3 !== void 0 && _data$getTicket3.author ? {
        value: data.getTicket.author.id,
        label: data.getTicket.author.name
      } : null,
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Select__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        options: users.map(user => ({
          value: user,
          label: user.name
        })),
        appearance: 'ghost',
        defaultValue: value // inputValue={usersSelectInput}
        ,
        placeholder: 'Выберите автора обращения',
        onChange: onChange // onInputChange={(input) => setUsersSelectInput(input)}
        // onKeyDown={(e) => {
        //   // Pressed ENTER
        //   if (e.keyCode === 13) {
        //     searchUsers({
        //       search: usersSelectInput
        //     })
        //   }
        // }}
        // onMenuScrollToBottom={async () => {
        //   await updateUsers({
        //     variables: {
        //       offset: offsetUsers,
        //       limit: LIMIT_USERS
        //     },
        //     updateQuery: (...props) => props
        //   })
        //   setOffsetUsers((prev) => prev + LIMIT_USERS)
        // }}
        ,
        isLoading: loadingUsers,
        isSearchable: true
      })
    }), !isClient && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
      name: 'counsellor',
      control: control,
      defaultValue: (_data$getTicket4 = data.getTicket) !== null && _data$getTicket4 !== void 0 && _data$getTicket4.counsellor ? {
        value: data.getTicket.counsellor.id,
        label: data.getTicket.counsellor.name
      } : null,
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Select__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        options: !loadingCounsellors && dataCounsellors ? dataCounsellors.getUsers.map(user => ({
          value: user,
          label: user.name
        })) : [],
        appearance: 'ghost',
        defaultValue: value,
        placeholder: 'Выберите советника',
        onChange: onChange,
        isLoading: loadingCounsellors,
        isSearchable: true
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
      name: 'category',
      control: control,
      defaultValue: (_data$getTicket5 = data.getTicket) !== null && _data$getTicket5 !== void 0 && _data$getTicket5.category ? {
        value: data.getTicket.category.id,
        label: Object(_atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_16__[/* getLabelCategory */ "d"])(data.getTicket.category.name)
      } : null,
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Select__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
        appearance: 'ghost',
        placeholder: 'Выберите раздел',
        options: !loadingCategories && dataCategories ? dataCategories.getCategories.filter(item => item.type === 'TICKET').map(item => ({
          value: item.id,
          label: Object(_atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_16__[/* getLabelCategory */ "d"])(item.name)
        })) : [],
        onChange: onChange,
        defaultValue: value,
        isLoading: loadingCategories,
        isClearable: true
      })
    })), !isClient && ticket && messages.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
      clear: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      tag: 'h4'
    }, "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], {
      label: 'Выделить все',
      checked: checkedAll,
      onChange: handleCheckedMessages
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      style: {
        color: 'var(--default-color-red)'
      },
      appearance: 'clear',
      onClick: handleDeleteChecked
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Messages, null, messages.map(message => {
      var _message$user, _message$user$avatar, _message$user2;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Message__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        key: message.id,
        avatar: (_message$user = message.user) === null || _message$user === void 0 ? void 0 : (_message$user$avatar = _message$user.avatar) === null || _message$user$avatar === void 0 ? void 0 : _message$user$avatar.path,
        name: (_message$user2 = message.user) === null || _message$user2 === void 0 ? void 0 : _message$user2.name,
        text: message.text,
        time: message.createdAt !== message.updatedAt ? message.updatedAt : message.createdAt,
        isChecked: message.checked,
        isUpdated: message.createdAt !== message.updatedAt,
        onChecked: value => handleCheckedMessage(message, value),
        onEdit: text => handleMessageEdit(message, text),
        onDelete: () => handleMessageDelete(message),
        compact: true
      });
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
      clear: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      style: {
        flexGrow: 1
      },
      type: 'submit',
      disabled: loading
    }, ticket ? 'Сохранить' : 'Создать'))) : errorTicket ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Alert__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      appearance: 'error',
      style: {
        width: '100%',
        textAlign: 'center'
      }
    }, "\u0423\u043F\u0441! \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0438") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styled__WEBPACK_IMPORTED_MODULE_18__[/* Loader */ "c"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Spinner__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null));
  });
};
Ticket.defaultProps = {
  title: true
};
/* harmony default export */ __webpack_exports__["a"] = (Ticket);

/***/ }),

/***/ "QUga":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrap; });
/* unused harmony export Text */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-regular);
  color: var(--default-color-text);

  ${({
  size
}) => size && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      font-size: var(--font-size-${size});
    `}
`;
const Text = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((_ref, ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Wrap, _extends({
    ref: ref
  }, props), children);
});
Text.defaultProps = {
  size: 'm'
};
/* harmony default export */ __webpack_exports__["b"] = (Text);

/***/ }),

/***/ "QWIf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TextEditor */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M71N");
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TextEditor = ({
  apiKey,
  defaultValue,
  onChange
}) => __jsx(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
  apiKey: apiKey,
  init: {
    height: 500,
    menubar: false,
    plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen table', 'insertdatetime media table paste code help wordcount'],
    toolbar: 'undo redo | formatselect | bold italic backcolor | \
        alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | table tabledelete | \
        tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | \
        tableinsertcolbefore tableinsertcolafter tabledeletecol | help'
  },
  value: defaultValue,
  onEditorChange: onChange
});
/* harmony default export */ __webpack_exports__["a"] = (TextEditor);

/***/ }),

/***/ "QX5T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Alert/index.js
var Alert = __webpack_require__("ZwIX");

// EXTERNAL MODULE: ./atomic-ui/components/DatePicker/index.js + 5 modules
var DatePicker = __webpack_require__("wZgm");

// EXTERNAL MODULE: ./atomic-ui/components/Spinner/index.js
var Spinner = __webpack_require__("auMy");

// EXTERNAL MODULE: ./atomic-ui/components/Select/index.js
var Select = __webpack_require__("QclZ");

// CONCATENATED MODULE: ./hooks/useInfiniteScroll.js

const useInfiniteScroll = ({
  callbackOnTop,
  callbackOnBottom,
  offset = 50
}) => {
  const [lastScrollTop, setLastScrollTop] = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    const scrollElement = document.documentElement;

    const onScroll = () => {
      if (!scrollElement) return;
      const dir = scrollElement.scrollTop - lastScrollTop;

      if (callbackOnBottom && dir > 0 && scrollElement.scrollTop + scrollElement.clientHeight >= scrollElement.scrollHeight - offset) {
        callbackOnBottom(scrollElement.scrollTop, scrollElement.scrollHeight);
      }

      if (callbackOnTop && dir < 0 && scrollElement.scrollTop <= offset) {
        callbackOnTop(scrollElement.scrollTop, scrollElement.scrollHeight);
      }

      setLastScrollTop(scrollElement.scrollTop);
    };

    if (scrollElement) {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      if (scrollElement) {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, [callbackOnTop, callbackOnBottom, offset]);
};
/* harmony default export */ var hooks_useInfiniteScroll = (useInfiniteScroll);
// EXTERNAL MODULE: ./layouts/default.js + 3 modules
var layouts_default = __webpack_require__("X+Rt");

// EXTERNAL MODULE: ./layouts/dashboard/index.js + 2 modules
var layouts_dashboard = __webpack_require__("p9yE");

// EXTERNAL MODULE: ./components/FilterBar/index.js
var FilterBar = __webpack_require__("RoTl");

// EXTERNAL MODULE: ./components/SearchBar/index.js
var SearchBar = __webpack_require__("EYtC");

// EXTERNAL MODULE: ./components/HandleBar/index.js
var HandleBar = __webpack_require__("coMr");

// EXTERNAL MODULE: ./components/Styled/index.js
var Styled = __webpack_require__("586Q");

// CONCATENATED MODULE: ./layouts/content.js
















const Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "content__Wrap",
  componentId: "sc-1afm75p-0"
})(["margin-top:120px;margin-bottom:80px;", " @media only screen and (max-width:480px){margin-top:0;}"], ({
  clear
}) => clear && Object(external_styled_components_["css"])(["margin:0;"]));

const ContentLayout = ({
  title,
  store,
  query,
  handle,
  filters,
  options,
  research,
  scaffold,
  dashboard,
  variables = {},
  limit = 6,
  startOffset = 6,
  initialize,
  children
}) => {
  const Layout = dashboard ? layouts_dashboard["a" /* default */] : layouts_default["a" /* default */];
  const [date, onChangeDate] = Object(external_react_["useState"])();
  const [select, onChangeSelect] = Object(external_react_["useState"])();
  const [search, setSearch] = Object(external_react_["useState"])(null);
  const [isFetching, setFetching] = Object(external_react_["useState"])(false);
  const [visibleFilter, setVisibleFilter] = Object(external_react_["useState"])(false);
  const [offset, setOffset] = Object(external_react_["useState"])(startOffset);
  const [documents, setDocuments] = Object(external_react_["useState"])((store === null || store === void 0 ? void 0 : store.documents) || []);
  const [loadDocumentsBySearch, {
    data: dataBySearch,
    loading: loadingBySearch,
    error: errorBySearch,
    refetch: refetchBySearch
  }] = Object(react_hooks_["useLazyQuery"])(query);
  const [loadDocuments, {
    data,
    loading,
    error,
    refetch
  }] = Object(react_hooks_["useLazyQuery"])(query);

  const getFilters = () => {
    return filters.map(filter => {
      switch (filter.type) {
        case 'DATEPICKER':
          return /*#__PURE__*/external_react_default.a.createElement(DatePicker["a" /* default */], {
            key: Object(external_uuid_["v4"])(),
            value: date,
            placeholder: filter.placeholder || 'Дата публикации',
            onChange: onChangeDate,
            withNavigate: true
          });

        case 'SELECT':
          return /*#__PURE__*/external_react_default.a.createElement(Select["a" /* default */], {
            key: Object(external_uuid_["v4"])(),
            options: filter.options,
            placeholder: filter.placeholder || 'Раздел',
            selected: select,
            onChange: item => onChangeSelect(item)
          });

        default:
          return null;
      }
    });
  };

  const onSearch = value => {
    setDocuments([]);

    if (value) {
      setSearch(value);
      loadDocumentsBySearch({
        variables: { ...variables,
          search: value,
          offset: 0,
          limit: startOffset
        }
      });
    } else {
      const result = { ...variables,
        offset: 0,
        limit
      };
      setSearch(null);
      if (refetch) refetch(result);else loadDocuments({
        variables: result
      });
    }

    setOffset(0);
  };

  useInfiniteScroll({
    callbackOnBottom: async () => {
      const updateOffset = () => setOffset(prev => prev + limit);

      if (!loading && !isFetching) {
        setFetching(true);
        const result = { ...variables,
          offset,
          limit
        };

        if (search) {
          await refetchBySearch(variables);
        } else {
          if (refetch) {
            await refetch(result);
            updateOffset();
          } else {
            await loadDocuments({
              variables: result
            });
          }
        }

        setFetching(false);
      }
    },
    offset: 850
  });
  Object(external_react_["useEffect"])(() => {
    if (initialize) loadDocuments({
      variables: {
        offset,
        limit
      }
    });
  }, [initialize]);
  Object(external_react_["useEffect"])(() => {
    if (research) onSearch(research);
  }, [research]);
  Object(external_react_["useEffect"])(() => {
    const isCommon = !search && !loading && data;
    const isSearch = search && !loadingBySearch && dataBySearch;
    const result = isCommon || isSearch;
    if (result) setDocuments(prev => [...prev, ...result[Object.keys(result)[0]]]);
  }, [search, loading, loadingBySearch, data, dataBySearch]);
  return /*#__PURE__*/external_react_default.a.createElement(Layout, {
    title: title,
    scaffold: scaffold
  }, /*#__PURE__*/external_react_default.a.createElement(Wrap, {
    clear: scaffold || dashboard
  }, !scaffold && !dashboard && /*#__PURE__*/external_react_default.a.createElement(SearchBar["a" /* default */], {
    onChangeFilter: () => setVisibleFilter(!visibleFilter),
    onSubmit: onSearch
  }), dashboard && handle && /*#__PURE__*/external_react_default.a.createElement(HandleBar["a" /* default */], {
    title: title,
    icon: handle.icon,
    buttonCreateText: handle.buttonCreateText,
    onCreate: handle.onCreate,
    onChangeVisibleFilter: () => setVisibleFilter(!visibleFilter),
    onChangeDisplayMethod: handle.onChangeDisplayMethod
  }), (filters || options) && /*#__PURE__*/external_react_default.a.createElement(FilterBar["a" /* default */], {
    isOpen: visibleFilter,
    filters: getFilters(),
    options: options
  }), typeof children === 'function' ? external_react_default.a.createElement(children, {
    documents
  }) : children, search && !loadingBySearch && documents.length === 0 && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "\u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"), (search && errorBySearch || !search && error) && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    appearance: 'error',
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435"), (isFetching || !error && loading || search && !errorBySearch && loadingBySearch) && /*#__PURE__*/external_react_default.a.createElement(Styled["d" /* LowerLoader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null))));
};

/* harmony default export */ var content = __webpack_exports__["a"] = (ContentLayout);

/***/ }),

/***/ "QclZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Menu */
/* unused harmony export Select */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vtRj");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  min-width: 128px;
`;
const surface = {
  background: 'white',
  border: 'var(--surface-border)',
  boxShadow: 'var(--surface-shadow)',
  borderRadius: 'var(--surface-border-radius)'
};
const ghost = {
  background: 'var(--input-background)',
  border: 'none',
  boxShadow: 'none',
  borderRadius: 'var(--surface-border-radius)'
};
const font = {
  fontSize: 'var(--font-size-m)',
  fontWeight: 'var(--font-weight-regular)',
  fontFamily: 'var(--font-family)'
};
const Menu = props => {
  return __jsx("div", {
    className: "ui-select-menu"
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2__["components"].Menu, props, props.children));
};
const Select = (_ref) => {
  let {
    appearance,
    className,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["appearance", "className", "style"]);

  return __jsx(Wrap, {
    className: className,
    style: style
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, props, {
    styles: {
      control: (provided, state) => _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, provided), appearance === 'ghost' ? ghost : surface), font), {}, {
        minHeight: '38px',
        padding: '0 5px',
        color: state.isFocused ? 'var(--default-color-accent)' : appearance === 'ghost' ? 'var(--input-color)' : 'var(--ghost-color-text)',
        cursor: 'pointer',
        transition: 'all 150ms ease'
      }),
      valueContainer: provided => _objectSpread(_objectSpread({}, provided), {}, {
        padding: '5px'
      }),
      singleValue: (provided, state) => _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, provided), appearance === 'ghost' ? ghost : surface), font), {}, {
        color: state.isFocused ? 'var(--default-color-accent)' : appearance === 'ghost' ? 'var(--input-color)' : 'var(--ghost-color-text)',
        transition: 'all 150ms ease'
      }),
      placeholder: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
        color: state.isFocused ? 'var(--default-color-accent)' : appearance === 'ghost' ? 'var(--input-placeholder-color)' : 'var(--ghost-color-text)',
        transition: 'all 150ms ease'
      }),
      menu: provided => _objectSpread(_objectSpread(_objectSpread({}, provided), surface), {}, {
        boxShadow: 'var(--default-shadow)',
        zIndex: 'var(--z-102)'
      }, font),
      option: (provided, state) => _objectSpread(_objectSpread(_objectSpread({}, provided), font), {}, {
        color: state.isFocused ? 'var(--default-color-accent)' : appearance === 'ghost' ? 'var(--input-color)' : 'rgba(0, 0, 0, 75%)',
        background: 'none !important',
        cursor: 'pointer',
        transition: 'all 150ms ease'
      }),
      multiValue: provided => _objectSpread(_objectSpread({}, provided), {}, {
        borderRadius: '5px',
        background: 'var(--default-color-accent)',
        color: 'white'
      }),
      multiValueLabel: provided => _objectSpread(_objectSpread(_objectSpread({}, provided), font), {}, {
        color: 'white',
        fontSize: 'var(--font-size-xs)'
      })
    },
    components: {
      Menu
    }
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),

/***/ "RKiZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Divider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  background: #efefef;

  ${({
  direction,
  thickness,
  margin
}) => direction === 'horizontal' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: 100%;
      height: ${thickness}px;
      margin: ${margin}px 0;
    `}

  ${({
  direction,
  thickness,
  margin
}) => direction === 'vertical' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      height: 100%;
      width: ${thickness}px;
      margin: 0 ${margin}px;
    `}

  ${({
  clear
}) => clear && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      margin: 0;
    `}
`;
const Divider = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Wrap, props, children);
};
Divider.defaultProps = {
  direction: 'horizontal',
  thickness: 1,
  margin: 15
};
/* harmony default export */ __webpack_exports__["a"] = (Divider);

/***/ }),

/***/ "RoTl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export List */
/* unused harmony export Filter */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8CDE");
/* harmony import */ var _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nShV");
/* harmony import */ var _atomic_ui_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("OXt0");
/* harmony import */ var _atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RKiZ");
/* harmony import */ var _atomic_ui_components_Transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("hYBG");







const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]).withConfig({
  displayName: "FilterBar__Wrap",
  componentId: "sc-1lvfs1u-0"
})(["display:flex;width:100%;&.fade-enter{opacity:0;}&.fade-enter-active{opacity:1;transition:opacity 100ms,blur 100ms;}&.fade-exit{opacity:1;}&.fade-exit-active{opacity:0;transition:opacity 100ms,blur 100ms;}"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"]).withConfig({
  displayName: "FilterBar__List",
  componentId: "sc-1lvfs1u-1"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(256px,1fr));@media only screen and (max-width:480px){grid-gap:var(--default-gap);}"]);
const Filter = ({
  isOpen = true,
  filters,
  options,
  duration
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Transition__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    in: isOpen,
    animation: 'fade',
    timeout: duration
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    clear: true
  }), filters && filters.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, null, filters.map(filter => filter)), options && options.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Switch__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
    defaultValue: options[0],
    options: options,
    stretch: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    clear: true
  })));
};
Filter.defaultProps = {
  duration: 150
};
/* harmony default export */ __webpack_exports__["a"] = (Filter);

/***/ }),

/***/ "Sza6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return setMutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return setSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return setProjectMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return setProjectScreenshots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return setProjectFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setFolder; });
/* unused harmony export setCurrentChat */
/* unused harmony export setMessages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addProjectMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addProjectScreenshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addProjectFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return removeProjectMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeProjectScreenshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return removeProjectFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return clearProjectMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return clearProjectScreenshots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return clearProjectFiles; });
/* harmony import */ var _types_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zSN1");

function setMutate(mutation, variables, callback) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_MUTATE,
    payload: {
      mutation,
      variables,
      callback
    }
  };
}
function setSettings(settings) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_SETTINGS,
    payload: {
      settings
    }
  };
}
function setProjectMembers(members) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_MEMBERS,
    payload: {
      members
    }
  };
}
function setProjectScreenshots(screenshots) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_SCREENSHOTS,
    payload: {
      screenshots
    }
  };
}
function setProjectFiles(files) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_FILES,
    payload: {
      files
    }
  };
}
function setFolder(folder) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_FOLDER,
    payload: {
      folder
    }
  };
}
function setCurrentChat(chat) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_CHAT,
    payload: {
      chat
    }
  };
}
function setMessages(messages) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_MESSAGES,
    payload: {
      messages
    }
  };
}
function addProjectMember(member) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ADD_MEMBER,
    payload: {
      member
    }
  };
}
function addProjectScreenshot(screenshot) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ADD_SCREENSHOT,
    payload: {
      screenshot
    }
  };
}
function addProjectFile(file) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ADD_FILE,
    payload: {
      file
    }
  };
}
function removeProjectMember(email) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REMOVE_MEMBER,
    payload: {
      email
    }
  };
}
function removeProjectScreenshot(id) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REMOVE_SCREENSHOT,
    payload: {
      id
    }
  };
}
function removeProjectFile(id) {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].REMOVE_FILE,
    payload: {
      id
    }
  };
}
function clearProjectMembers() {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].CLEAR_MEMBERS
  };
}
function clearProjectScreenshots() {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].CLEAR_SCREENSHOTS
  };
}
function clearProjectFiles() {
  return {
    type: _types_root__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].CLEAR_FILES
  };
}

/***/ }),

/***/ "ThpJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrap; });
/* unused harmony export Avatar */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("V0nP");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Image__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])`
  position: relative;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;

  ${({
  size
}) => size && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: var(--input-height-${size});
      height: var(--input-height-${size});
      min-width: var(--input-height-${size});
      min-height: var(--input-height-${size});
    `}
`;
const Avatar = (_ref) => {
  let props = Object.assign({}, _ref);
  return __jsx(Wrap, props);
};
Avatar.defaultProps = {
  size: 'm'
};
/* harmony default export */ __webpack_exports__["b"] = (Avatar);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "TsNn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Content */
/* unused harmony export Avatar */
/* unused harmony export Header */
/* unused harmony export Actions */
/* unused harmony export Name */
/* unused harmony export About */
/* unused harmony export Indicator */
/* unused harmony export Footer */
/* unused harmony export Card */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VWQm");
/* harmony import */ var _atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8CDE");
/* harmony import */ var _atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7sPp");
/* harmony import */ var _atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("QUga");
/* harmony import */ var _atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("feIE");
/* harmony import */ var _atomic_ui_components_Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("aBfq");
/* harmony import */ var _atomic_ui_components_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("V0nP");
/* harmony import */ var _atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("RKiZ");
/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ZeZO");
/* harmony import */ var _atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("DTT8");
/* harmony import */ var _atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("79b8");
/* harmony import */ var _atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("NWnW");
/* harmony import */ var _hooks_useEntityQuery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("8UhZ");
/* harmony import */ var _Styled__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("586Q");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]).withConfig({
  displayName: "UserCard__Wrap",
  componentId: "bx733i-0"
})(["grid-gap:var(--default-gap);", " ", " ", " ", ""], ({
  layout
}) => layout === 'column' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["display:flex;flex-wrap:wrap;"]), ({
  appearance
}) => appearance === 'default' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "UserCard__Content",
  componentId: "bx733i-1"
})(["display:grid;grid-template-columns:120px 1fr;grid-template-rows:175px;@media only screen and (max-width:480px){display:flex;flex-direction:column;grid-gap:var(--default-gap);}"]);
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Image__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]).withConfig({
  displayName: "UserCard__Avatar",
  componentId: "bx733i-2"
})(["position:relative;width:100%;height:100%;border-radius:var(--surface-border-radius);border:1px solid var(--ghost-color-background);overflow:hidden;object-fit:cover;"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "UserCard__Header",
  componentId: "bx733i-3"
})(["justify-content:space-between;align-items:center;"]);
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "UserCard__Actions",
  componentId: "bx733i-4"
})(["grid-gap:5px;height:100%;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).withConfig({
  displayName: "UserCard__Name",
  componentId: "bx733i-5"
})(["transition:opacity 150ms ease;", ""], ({
  onClick
}) => onClick && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["cursor:pointer;&:hover{opacity:0.45;}"]));
const About = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "UserCard__About",
  componentId: "bx733i-6"
})(["font-size:var(--font-size-m);"]);
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_12__[/* default */ "b"]).withConfig({
  displayName: "UserCard__Indicator",
  componentId: "bx733i-7"
})(["align-items:flex-end;flex-grow:10;height:100%;"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "UserCard__Footer",
  componentId: "bx733i-8"
})(["justify-content:space-between;grid-column:1 / 3;@media only screen and (max-width:480px){display:flex;flex-direction:column;grid-gap:var(--default-gap);", "{flex-grow:1;", "{flex-grow:1;button{width:100%;}}}}"], _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* Wrap */ "a"], _atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__[/* Wrap */ "a"]);
const Card = ({
  user,
  preview,
  owned,
  added,
  style,
  className,
  appearance,
  onAdd,
  onLink,
  onChat,
  onMembers,
  onAboutMore,
  onCompanyLink,
  onChecked,
  onEdit,
  onDelete
}) => {
  var _user$avatar, _user$about, _user$projects, _user$company, _user$company$avatar, _user$company2;

  const {
    setQuery
  } = Object(_hooks_useEntityQuery__WEBPACK_IMPORTED_MODULE_15__[/* useEntityQuery */ "b"])();
  const [isAdded, setAdded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(added);

  const onClickAdd = () => {
    if (onAdd) onAdd();
    setAdded(!isAdded);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    className: className,
    style: style,
    appearance: appearance
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Avatar, {
    src: (user === null || user === void 0 ? void 0 : (_user$avatar = user.avatar) === null || _user$avatar === void 0 ? void 0 : _user$avatar.path) || '/images/avatar-default.png',
    alt: user.name,
    effect: 'opacity',
    layout: 'fill'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    style: {
      gridGap: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Meta__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    category: Object(_atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_14__[/* getLabelRole */ "f"])(user.account)
  }), (onChecked || onEdit || onDelete) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Actions, null, onDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"], {
    text: 'Удалить пользователя'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    appearance: 'red',
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    icon: 'delete',
    size: 'xs',
    stroke: 'white'
  }))), onEdit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"], {
    text: 'Редактировать пользователя'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    onClick: onEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    icon: 'edit',
    size: 'xs',
    stroke: 'white'
  }))), onChecked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"], {
    text: 'Отметить пользователя',
    self: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, {
    tag: 'h4',
    onClick: () => setQuery(user.email, 'user', onLink)
  }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About, null, (user === null || user === void 0 ? void 0 : (_user$about = user.about) === null || _user$about === void 0 ? void 0 : _user$about.length) > 135 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_6__[/* default */ "b"], null, user.about.slice(0, 100), "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Styled__WEBPACK_IMPORTED_MODULE_16__[/* More */ "e"], {
    onClick: onAboutMore
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_6__[/* default */ "b"], null, user.about || 'Информация о себе не заполнена')), user.projects && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Indicator, {
    icon: 'work',
    label: 'Проекты',
    text: (_user$projects = user.projects) === null || _user$projects === void 0 ? void 0 : _user$projects.length
  }))), !preview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    clear: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, user.account === 'ENTITY' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_12__[/* default */ "b"], {
    icon: 'user2',
    label: 'Участники',
    text: user.members,
    onLink: user.members && onMembers
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_12__[/* default */ "b"], _extends({}, user.company ? {
    img: (_user$company = user.company) === null || _user$company === void 0 ? void 0 : (_user$company$avatar = _user$company.avatar) === null || _user$company$avatar === void 0 ? void 0 : _user$company$avatar.path
  } : {
    icon: 'work'
  }, {
    label: 'Компания',
    text: ((_user$company2 = user.company) === null || _user$company2 === void 0 ? void 0 : _user$company2.name) || '-',
    onLink: user.company && onCompanyLink && (() => setQuery(user.company.email, 'user', onCompanyLink))
  })), !owned && (onChat || onAdd) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"], null, onChat && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"], {
    text: 'Написать пользователю'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    type: 'button',
    kind: 'icon',
    appearance: 'green',
    onClick: onChat,
    revert: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    icon: 'chat',
    stroke: 'var(--default-color-green)'
  }))), onAdd && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"], {
    text: 'Подписаться на пользователя'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    type: 'button',
    kind: 'icon',
    onClick: onClickAdd,
    revert: !isAdded
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    icon: isAdded ? 'check' : 'add',
    stroke: isAdded ? 'white' : 'var(--default-color-accent)'
  })))))));
};
Card.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "Tt38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Header */
/* unused harmony export ManageButton */
/* unused harmony export ManageRow */
/* unused harmony export DangerButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* unused harmony export Menu */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8CDE");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZeZO");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("QUga");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("feIE");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("RKiZ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])`
  ${({
  appearance
}) => appearance === 'default' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      border: 1px solid var(--surface-border);
      background: var(--surface-background);
      box-shadow: var(--surface-shadow);
      border-radius: var(--surface-border-radius);
    `}

  ${({
  appearance
}) => appearance === 'clear' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      padding: 0;
      border: none;
      background: none;
      border-radius: 0;
      box-shadow: none;
    `}
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  justify-content: space-between;
  align-items: center;
  font-weight: var(--font-weight-medium);
  padding: var(--default-gap) var(--default-gap) 0 var(--default-gap);
  line-height: 1;
`;
const ManageButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])`
  color: var(--default-color-accent);
`;
const ManageRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  grid-gap: 0;
  align-items: center;

  span {
    font-weight: var(--font-weight-medium);
  }
`;
const DangerButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])`
  color: var(--default-color-red);
`;
const List = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])`
  text-align: left;
  align-items: flex-start;
  padding: 0 var(--default-gap) var(--default-gap) var(--default-gap);

  button {
    font-weight: var(--font-weight-medium);
    text-align: inherit;
  }
`;
const Menu = ({
  links,
  header,
  className,
  style,
  listStyle
}) => __jsx(Wrap, {
  className: className,
  style: style
}, header && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Header, null, __jsx(_Text__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"], null, header.title), header.link && __jsx(ManageButton, {
  appearance: 'clear',
  onClick: header.link.onClick
}, __jsx(ManageRow, null, __jsx("span", null, header.link.text), __jsx(_Icon__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
  icon: 'arrowRight',
  size: 'xs',
  stroke: 'var(--default-color-accent)'
})))), __jsx(_Divider__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
  clear: true
})), links && links.length && __jsx(List, {
  style: listStyle
}, links.map((link, index) => link !== 'danger' ? __jsx(_Button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
  key: index,
  style: {
    color: link.active ? 'var(--default-color-accent)' : 'black'
  },
  appearance: 'clear',
  onClick: link.onClick
}, link.text) : __jsx(DangerButton, {
  key: index,
  appearance: 'clear',
  onClick: link.onClick
}, link.text))));
Menu.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ __webpack_exports__["b"] = (Menu);

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UwjQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ArticleCard_Wrap; });

// UNUSED EXPORTS: Poster, Header, Actions, Name, HTMLView, ShortText, Card

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./atomic-ui/components/Row/index.js
var Row = __webpack_require__("nShV");

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Title/index.js
var Title = __webpack_require__("7sPp");

// EXTERNAL MODULE: ./atomic-ui/components/Meta/index.js
var Meta = __webpack_require__("aBfq");

// EXTERNAL MODULE: ./atomic-ui/components/Text/index.js
var Text = __webpack_require__("QUga");

// EXTERNAL MODULE: ./atomic-ui/components/Button/index.js
var Button = __webpack_require__("ZeZO");

// EXTERNAL MODULE: ./atomic-ui/components/Icon/index.js + 109 modules
var Icon = __webpack_require__("feIE");

// CONCATENATED MODULE: ./atomic-ui/components/More/index.js
var __jsx = external_react_default.a.createElement;






const Wrap = external_styled_components_default()(Row["b" /* default */])`
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const More = ({
  text,
  withText,
  withButton,
  onClick
}) => __jsx(Wrap, {
  onClick: onClick
}, withText && __jsx(Text["b" /* default */], {
  style: {
    color: 'var(--default-color-accent)'
  }
}, text), withButton && __jsx(Button["a" /* default */], {
  kind: 'icon'
}, __jsx(Icon["a" /* default */], {
  icon: 'arrowRight',
  stroke: 'white'
})));
More.defaultProps = {
  text: 'Подробнее',
  withText: true
};
/* harmony default export */ var components_More = (More);
// EXTERNAL MODULE: ./atomic-ui/components/Image/index.js
var Image = __webpack_require__("V0nP");

// EXTERNAL MODULE: ./atomic-ui/components/Checkbox/index.js
var Checkbox = __webpack_require__("79b8");

// EXTERNAL MODULE: ./atomic-ui/components/Tooltip/index.js
var Tooltip = __webpack_require__("VWQm");

// EXTERNAL MODULE: ./atomic-ui/utils/functions.js
var functions = __webpack_require__("NWnW");

// CONCATENATED MODULE: ./components/ArticleCard/index.js














const ArticleCard_Wrap = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "ArticleCard__Wrap",
  componentId: "sc-17tznl7-0"
})(["display:grid;grid-template-columns:1fr 2fr;padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);height:min-content;& > span{display:flex;}", " ", " ", " ", " @media only screen and (max-width:480px){display:flex;flex-direction:column;grid-gap:var(--default-gap);}"], ({
  layout
}) => layout === 'column' && Object(external_styled_components_["css"])(["display:flex;flex-wrap:wrap;grid-gap:var(--default-gap);& > span{height:128px;}"]), ({
  appearance
}) => appearance === 'default' && Object(external_styled_components_["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Poster = external_styled_components_default()(Image["a" /* default */]).withConfig({
  displayName: "ArticleCard__Poster",
  componentId: "sc-17tznl7-1"
})(["object-fit:cover;width:100%;height:100%;border-radius:var(--surface-border-radius);border:1px solid var(--ghost-color-background);", ""], ({
  layout
}) => layout === 'column' && Object(external_styled_components_["css"])(["height:128px;"]));
const Header = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "ArticleCard__Header",
  componentId: "sc-17tznl7-2"
})(["justify-content:space-between;align-items:center;"]);
const Actions = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "ArticleCard__Actions",
  componentId: "sc-17tznl7-3"
})(["grid-gap:5px;height:100%;"]);
const Name = external_styled_components_default()(Title["a" /* default */]).withConfig({
  displayName: "ArticleCard__Name",
  componentId: "sc-17tznl7-4"
})(["transition:opacity 150ms ease;", ""], ({
  onClick
}) => onClick && Object(external_styled_components_["css"])(["cursor:pointer;&:hover{opacity:0.45;}"]));
const HTMLView = ({
  content,
  className
}) => /*#__PURE__*/external_react_default.a.createElement("div", {
  className: className,
  dangerouslySetInnerHTML: {
    __html: content
  }
});
const ShortText = external_styled_components_default()(HTMLView).withConfig({
  displayName: "ArticleCard__ShortText",
  componentId: "sc-17tznl7-5"
})(["display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;p{font-size:var(--font-size-m);font-weight:var(--font-weight-regular);color:var(--default-color-text);strong,b,i{font-style:normal;font-weight:inherit;}}"]);
const Card = ({
  layout,
  article,
  preview,
  appearance,
  onLink,
  onChecked,
  onEdit,
  onDelete
}) => {
  var _article$preview, _article$category;

  const router = Object(router_["useRouter"])();

  const handleClick = async () => {
    await router.push({
      pathname: router.pathname,
      query: {
        article: Object(functions["a" /* b64EncodeUnicode */])(article.id)
      }
    }, undefined, {
      shallow: true
    });
    if (onLink) onLink();
  };

  return /*#__PURE__*/external_react_default.a.createElement(ArticleCard_Wrap, {
    appearance: appearance,
    layout: layout
  }, article.preview && /*#__PURE__*/external_react_default.a.createElement(Poster, {
    src: (_article$preview = article.preview) === null || _article$preview === void 0 ? void 0 : _article$preview.path,
    alt: article.title,
    effect: 'opacity',
    layout: layout
  }), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
    style: {
      gridGap: 5,
      width: '100%',
      gridColumn: !article.preview && '1 / 3'
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Header, null, /*#__PURE__*/external_react_default.a.createElement(Meta["a" /* default */], {
    date: article === null || article === void 0 ? void 0 : article.createdAt,
    category: article === null || article === void 0 ? void 0 : (_article$category = article.category) === null || _article$category === void 0 ? void 0 : _article$category.name,
    short: true
  }), (onChecked || onEdit || onDelete) && /*#__PURE__*/external_react_default.a.createElement(Actions, null, onDelete && /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
    text: 'Удалить статью'
  }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    kind: 'icon',
    size: 'xs',
    appearance: 'red',
    onClick: onDelete
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'delete',
    size: 'xs',
    stroke: 'white'
  }))), onEdit && /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
    text: 'Редактировать статью'
  }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    kind: 'icon',
    size: 'xs',
    onClick: onEdit
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'edit',
    size: 'xs',
    stroke: 'white'
  }))), onChecked && /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
    text: 'Отметить статью',
    self: true
  }, /*#__PURE__*/external_react_default.a.createElement(Checkbox["a" /* default */], null)))), /*#__PURE__*/external_react_default.a.createElement(Name, {
    tag: 'h4',
    onClick: handleClick
  }, article.title), article.body && /*#__PURE__*/external_react_default.a.createElement(ShortText, {
    content: article.body
  }), !preview && /*#__PURE__*/external_react_default.a.createElement(components_More, {
    onClick: onLink,
    withButton: true
  })));
};
Card.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ var ArticleCard = __webpack_exports__["b"] = (Card);

/***/ }),

/***/ "V0nP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Magnify */
/* unused harmony export Source */
/* unused harmony export Image */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.figure`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--surface-border-radius);
  cursor: crosshair;

  span,
  span > img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    height: 100%;
  }
`;
const Magnify = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-12);
  border-radius: var(--surface-border-radius);
  background-repeat: no-repeat;
  opacity: 1 !important;
  cursor: crosshair !important;

  ${({
  portal,
  scale,
  bottomOffset
}) => portal && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      top: calc(-${bottomOffset || 100}% - 15px);
      border: var(--surface-border);
      box-shadow: var(--default-shadow);
      border-radius: 2px;
      transform: scale(${scale});
    `}
`;
const Source = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImage"])`
  overflow: hidden;
  border-radius: var(--surface-border-radius);

  ${({
  magnify
}) => magnify && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      opacity: 1 !important;
      cursor: crosshair !important;
    `}
`;
const Image = (_ref) => {
  let {
    src,
    width,
    height,
    portal,
    magnify,
    scale,
    multiply,
    bottomOffset
  } = _ref,
      props = _objectWithoutProperties(_ref, ["src", "width", "height", "portal", "magnify", "scale", "multiply", "bottomOffset"]);

  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%',
    display: 'none'
  });
  const {
    0: opacity,
    1: setOpacity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);

  const handleMouseMove = e => {
    const {
      left,
      top,
      width,
      height
    } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    setOpacity(0);
    setState(prev => _objectSpread(_objectSpread({}, prev), {}, {
      backgroundSize: `${100 * multiply}%`,
      backgroundPosition: `${x}% ${y}%`,
      display: 'flex'
    }));
  };

  const handleMouseLeave = () => {
    setOpacity(1);
    setState(prev => _objectSpread(_objectSpread({}, prev), {}, {
      backgroundPosition: '0% 0%',
      backgroundSize: '100%',
      display: 'none'
    }));
  };

  return magnify ? __jsx(Wrap, {
    style: {
      width,
      height
    },
    onMouseMove: !portal ? handleMouseMove : () => {},
    onMouseLeave: !portal ? handleMouseLeave : () => {}
  }, __jsx(Magnify, _extends({}, props, {
    style: _objectSpread(_objectSpread({}, state), {}, {
      width,
      height
    }),
    bottomOffset: bottomOffset,
    portal: portal,
    scale: scale
  })), __jsx(Source, _extends({}, props, {
    src: src,
    onMouseMove: portal && handleMouseMove,
    onMouseLeave: portal && handleMouseLeave,
    style: {
      width,
      height,
      opacity
    },
    effect: 'opacity',
    magnify: magnify
  }))) : __jsx(Source, _extends({}, props, {
    src: src,
    effect: 'opacity',
    style: {
      width,
      height
    }
  }));
};
Image.defaultProps = {
  bottomOffset: 125,
  multiply: 3,
  scale: 2
};
/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),

/***/ "V9G2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ onCategoryLink; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ onCategoryCreate; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ onCategoryEdit; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ onCategoryDelete; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./atomic-ui/components/Row/index.js
var Row = __webpack_require__("nShV");

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Title/index.js
var Title = __webpack_require__("7sPp");

// EXTERNAL MODULE: ./atomic-ui/components/Input/index.js
var Input = __webpack_require__("Gliw");

// EXTERNAL MODULE: ./atomic-ui/components/Button/index.js
var Button = __webpack_require__("ZeZO");

// EXTERNAL MODULE: ./atomic-ui/components/Select/index.js
var Select = __webpack_require__("QclZ");

// EXTERNAL MODULE: ./atomic-ui/components/TextArea/index.js
var TextArea = __webpack_require__("3jgA");

// EXTERNAL MODULE: ./atomic-ui/components/Alert/index.js
var Alert = __webpack_require__("ZwIX");

// EXTERNAL MODULE: ./atomic-ui/utils/functions.js
var functions = __webpack_require__("NWnW");

// EXTERNAL MODULE: ./components/Form/index.js
var Form = __webpack_require__("qoM+");

// CONCATENATED MODULE: ./components/FormCategory/index.js











const Category = ({
  category,
  categoryTypes,
  mutation,
  appearance,
  className,
  onSubmit
}) => {
  const [typeError, setTypeError] = Object(external_react_["useState"])(false);
  const [type, setType] = Object(external_react_["useState"])(category && category.type && {
    value: category.type,
    label: Object(functions["d" /* getLabelCategory */])(category.type)
  } || null);
  return /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
    className: className,
    appearance: appearance,
    mutation: mutation,
    onSubmit: (form, action) => {
      if (type) {
        onSubmit({ ...form,
          type
        }, action);
      } else {
        setTypeError(true);
      }
    }
  }, ({
    register,
    loading,
    errors,
    getValues
  }) => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h4'
  }, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435"), errors && errors.name && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    style: {
      width: '100%'
    },
    appearance: 'error'
  }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: 'text',
    name: 'name',
    ref: register({
      required: true
    }),
    defaultValue: (category === null || category === void 0 ? void 0 : category.name) || getValues('name'),
    placeholder: 'Название',
    appearance: 'ghost',
    disabled: loading
  }), typeError && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    style: {
      width: '100%'
    },
    appearance: 'error'
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"), /*#__PURE__*/external_react_default.a.createElement(Select["a" /* default */], {
    name: 'type',
    appearance: 'ghost',
    defaultValue: type,
    onChange: value => {
      setType(value);
      setTypeError(false);
    },
    placeholder: 'Выберите тип',
    options: categoryTypes.map(type => ({
      value: type,
      label: Object(functions["d" /* getLabelCategory */])(type)
    })),
    isLoading: loading,
    isClearable: true
  }), /*#__PURE__*/external_react_default.a.createElement(TextArea["a" /* default */], {
    name: 'description',
    ref: register(),
    defaultValue: (category === null || category === void 0 ? void 0 : category.description) || getValues('description'),
    placeholder: 'Описание',
    appearance: 'ghost',
    disabled: loading
  })), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      flexGrow: 1
    },
    type: 'submit',
    disabled: loading
  }, category ? 'Сохранить' : 'Создать'))));
};
Category.defaultProps = {
  create: true
};
/* harmony default export */ var FormCategory = (Category);
// EXTERNAL MODULE: ./components/FormDelete/index.js
var FormDelete = __webpack_require__("xAqQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./atomic-ui/components/Text/index.js
var Text = __webpack_require__("QUga");

// EXTERNAL MODULE: ./atomic-ui/components/Image/index.js
var Image = __webpack_require__("V0nP");

// EXTERNAL MODULE: ./atomic-ui/components/Meta/index.js
var Meta = __webpack_require__("aBfq");

// EXTERNAL MODULE: ./components/Processed/index.js
var Processed = __webpack_require__("2qQv");

// EXTERNAL MODULE: ./graphql/queries/index.js + 15 modules
var queries = __webpack_require__("u2Cb");

// CONCATENATED MODULE: ./components/CategoryView/index.js











const Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "CategoryView__Wrap",
  componentId: "sc-1leuzf2-0"
})(["flex-grow:1;", " ", " ", ""], ({
  appearance
}) => appearance === 'default' && Object(external_styled_components_["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Poster = external_styled_components_default()(Image["a" /* default */]).withConfig({
  displayName: "CategoryView__Poster",
  componentId: "sc-1leuzf2-1"
})(["object-fit:cover;width:100%;height:512px;border-radius:var(--surface-border-radius);"]);
const Content = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "CategoryView__Content",
  componentId: "sc-1leuzf2-2"
})(["grid-gap:0;"]);
const View = ({
  category,
  appearance,
  className,
  style
}) => {
  var _data$getCategory, _data$getCategory2, _data$getCategory3, _data$getCategory4;

  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_CATEGORY, {
    variables: {
      id: category
    }
  });
  return /*#__PURE__*/external_react_default.a.createElement(Wrap, {
    className: className,
    style: style,
    appearance: appearance
  }, /*#__PURE__*/external_react_default.a.createElement(Processed["a" /* default */], {
    data: data === null || data === void 0 ? void 0 : data.getCategory,
    loading: loading,
    error: error,
    errorMessage: 'Упс! Не удалось загрузить информацию о категории',
    emptyMessage: 'Кажется такой категории не существует'
  }, /*#__PURE__*/external_react_default.a.createElement(Content, null, /*#__PURE__*/external_react_default.a.createElement(Meta["a" /* default */], {
    date: data === null || data === void 0 ? void 0 : (_data$getCategory = data.getCategory) === null || _data$getCategory === void 0 ? void 0 : _data$getCategory.createdAt,
    category: Object(functions["d" /* getLabelCategory */])(data === null || data === void 0 ? void 0 : (_data$getCategory2 = data.getCategory) === null || _data$getCategory2 === void 0 ? void 0 : _data$getCategory2.type)
  }), /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h4'
  }, data === null || data === void 0 ? void 0 : (_data$getCategory3 = data.getCategory) === null || _data$getCategory3 === void 0 ? void 0 : _data$getCategory3.name), /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, data === null || data === void 0 ? void 0 : (_data$getCategory4 = data.getCategory) === null || _data$getCategory4 === void 0 ? void 0 : _data$getCategory4.description))));
};
View.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ var CategoryView = (View);
// EXTERNAL MODULE: ./components/CategoryCard/index.js
var CategoryCard = __webpack_require__("yEVw");

// EXTERNAL MODULE: ./store/actions/documents.js
var documents = __webpack_require__("j8/+");

// EXTERNAL MODULE: ./store/actions/drawer.js
var drawer = __webpack_require__("Ztxg");

// EXTERNAL MODULE: ./store/actions/snacks.js
var snacks = __webpack_require__("9Xo6");

// CONCATENATED MODULE: ./store/helpers/category.js








function onCategoryLink(dispatch, props) {
  const {
    id
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'folder',
    title: 'Категория',
    content: /*#__PURE__*/external_react_default.a.createElement(CategoryView, {
      category: id,
      appearance: 'clear'
    })
  }));
}
function onCategoryCreate(dispatch, props) {
  const {
    types,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'folder',
    title: 'Создание категории',
    content: /*#__PURE__*/external_react_default.a.createElement(FormCategory, {
      mutation: mutation,
      categoryTypes: types,
      appearance: 'clear',
      onSubmit: async (form, action) => {
        try {
          const categories = await action({
            variables: {
              input: {
                name: form.name,
                type: form.type.value,
                description: form.description
              }
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(categories.data.createCategory));
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Категория успешно создана'
          }));
        } catch (_unused) {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось создать категорию'
          }));
        }
      }
    })
  }));
}
function onCategoryEdit(dispatch, props) {
  const {
    category,
    types,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'folder',
    title: 'Редактирование категории',
    content: /*#__PURE__*/external_react_default.a.createElement(FormCategory, {
      category: category,
      mutation: mutation,
      categoryTypes: types,
      appearance: 'clear',
      onSubmit: async (form, action) => {
        try {
          const categories = await action({
            variables: {
              id: category.id,
              input: {
                name: form.name,
                type: form.type.value,
                description: form.description
              }
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(categories.data.updateCategory));
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Категория успешно отредактирована'
          }));
        } catch (_unused2) {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось отредактировать категорию'
          }));
        }
      }
    })
  }));
}
function onCategoryDelete(dispatch, props) {
  const {
    id,
    category,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'delete',
    color: 'red',
    title: 'Удаление категории',
    content: /*#__PURE__*/external_react_default.a.createElement(FormDelete["a" /* default */], {
      mutation: mutation,
      appearance: 'clear',
      onCancel: () => dispatch(Object(drawer["a" /* setDrawer */])(null)),
      onSubmit: async (_, action) => {
        try {
          const categories = await action({
            variables: {
              id
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(categories.data.deleteCategory));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Категория успешно удалена'
          }));
        } catch (_unused3) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось удалить категорию'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
        }
      }
    }, /*#__PURE__*/external_react_default.a.createElement(CategoryCard["a" /* default */], {
      category: category,
      appearance: 'clear'
    }))
  }));
}

/***/ }),

/***/ "VP1n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);



const LazyLoad = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__["LazyLoadComponent"], null, children);

/* harmony default export */ __webpack_exports__["a"] = (Object(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__["trackWindowScroll"])(LazyLoad));

/***/ }),

/***/ "VWQm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrap; });
/* unused harmony export Content */
/* unused harmony export Tooltip */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("E8iq");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  display: inline-flex;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_tooltip__WEBPACK_IMPORTED_MODULE_2___default.a)`
  padding: 7px 10px !important;
  font-size: var(--font-size-s) !important;
  line-height: 14px !important;
  background: rgba(0, 0, 0, 0.7) !important;
  border-radius: var(--surface-border-radius) !important;
  border: none !important;
  color: white !important;
  opacity: 0.9;

  ${({
  maxWidth
}) => maxWidth && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      max-width: ${maxWidth}px !important;
    `}
`;
const Tooltip = (_ref) => {
  let {
    text,
    self,
    children,
    style,
    className,
    maxWidth
  } = _ref,
      props = _objectWithoutProperties(_ref, ["text", "self", "children", "style", "className", "maxWidth"]);

  const id = `tooltip-${Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])()}`;
  return __jsx(Wrap, {
    className: className,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(self ? __jsx("div", null, children) : children, _objectSpread({}, {
    'data-arrow-color': 'rgba(0, 0, 0, .7)',
    'data-tip': true,
    'data-for': id
  })), __jsx(Content, _extends({
    id: id
  }, props, {
    maxWidth: maxWidth
  }), __jsx("span", null, text)));
};
Tooltip.defaultProps = {
  place: 'top',
  effect: 'solid',
  delayShow: 500
};
/* harmony default export */ __webpack_exports__["b"] = (Tooltip);

/***/ }),

/***/ "X+Rt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: DefaultLayout

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: ./atomic-ui/components/Image/index.js
var Image = __webpack_require__("V0nP");

// EXTERNAL MODULE: ./atomic-ui/components/Spinner/index.js
var Spinner = __webpack_require__("auMy");

// EXTERNAL MODULE: ./hooks/useMutate.js
var useMutate = __webpack_require__("lphG");

// EXTERNAL MODULE: ./hooks/useHelper.js
var useHelper = __webpack_require__("ApjV");

// EXTERNAL MODULE: ./layouts/main.js + 4 modules
var main = __webpack_require__("wOhW");

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Search/index.js
var Search = __webpack_require__("t7jn");

// EXTERNAL MODULE: ./atomic-ui/components/Title/index.js
var Title = __webpack_require__("7sPp");

// EXTERNAL MODULE: ./components/ProjectCard/index.js
var ProjectCard = __webpack_require__("1zqG");

// CONCATENATED MODULE: ./components/Scaffold/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "Scaffold__Wrap",
  componentId: "sc-11xb1f4-0"
})(["position:relative;align-items:center;width:100%;padding:45px var(--main-offset-l);&::before{content:'';position:absolute;top:0;left:0;z-index:var(--z-11);width:100%;height:100%;background:rgba(0,0,0,0.15);}@media only screen and (max-width:996px){padding:45px var(--main-offset-m);}@media only screen and (max-width:768px){padding:45px var(--main-offset-s);}@media only screen and (max-width:480px){padding:45px var(--main-offset-xs);}"]);
const Background = external_styled_components_default.a.img.withConfig({
  displayName: "Scaffold__Background",
  componentId: "sc-11xb1f4-1"
})(["position:absolute;top:0;left:0;z-index:var(--z-10);width:100%;height:100%;object-fit:cover;"]);
const Header = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "Scaffold__Header",
  componentId: "sc-11xb1f4-2"
})(["padding:0 var(--main-offset-l);margin-bottom:30px;@media only screen and (max-width:996px){padding:0 var(--main-offset-m);}@media only screen and (max-width:768px){padding:0 var(--main-offset-s);}@media only screen and (max-width:480px){padding:0 var(--main-offset-xs);}"]);
const Container = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "Scaffold__Container",
  componentId: "sc-11xb1f4-3"
})(["position:relative;z-index:var(--z-12);justify-content:center;align-items:center;flex-grow:1;width:100%;height:100%;"]);
const MainTitle = external_styled_components_default()(Title["a" /* default */]).withConfig({
  displayName: "Scaffold__MainTitle",
  componentId: "sc-11xb1f4-4"
})(["text-align:center;color:white;@media only screen and (max-width:768px){font-size:26px;line-height:1.25;margin-bottom:15px;}@media only screen and (max-width:768px){font-size:22px;}"]);
const Projects = external_styled_components_default.a.div.withConfig({
  displayName: "Scaffold__Projects",
  componentId: "sc-11xb1f4-5"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(256px,1fr));grid-gap:var(--default-gap);@media only screen and (max-width:1280px){display:flex;flex-direction:column;}"]);
const PrimaryProject = external_styled_components_default()(ProjectCard["c" /* default */]).withConfig({
  displayName: "Scaffold__PrimaryProject",
  componentId: "sc-11xb1f4-6"
})(["flex-grow:1;height:100%;flex-basis:50%;", "{height:256px;}@media only screen and (max-width:768px){", "{img{height:256px;flex-basis:auto;}}}"], ProjectCard["b" /* Poster */], ProjectCard["a" /* Media */]);
const Residues = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "Scaffold__Residues",
  componentId: "sc-11xb1f4-7"
})(["flex-grow:1;@media only screen and (max-width:1280px){flex-direction:row;grid-gap:var(--default-gap);width:100%;}@media only screen and (max-width:768px){flex-direction:column;grid-gap:var(--default-gap);width:100%;}"]);
const Residue = external_styled_components_default()(ProjectCard["c" /* default */]).withConfig({
  displayName: "Scaffold__Residue",
  componentId: "sc-11xb1f4-8"
})(["flex-grow:1;@media only screen and (max-width:1280px){width:100%;}"]);
const detectOwnedProject = (projects, project) => projects === null || projects === void 0 ? void 0 : projects.find(candidate => candidate.id === project.id);
const Scaffold = ({
  user,
  title,
  image,
  background,
  primary,
  residues,
  className,
  style,
  onLike,
  onLink,
  onAdd,
  onSearch,
  onAboutMore,
  onCompanyLink,
  onScreenshotClick
}) => {
  const getProjectProps = Object(external_react_["useCallback"])((project, layout) => {
    var _user$folders;

    return {
      image,
      project,
      layout,
      slicedFactor: 5,
      owned: detectOwnedProject(user === null || user === void 0 ? void 0 : user.projects, project),
      added: !!(user !== null && user !== void 0 && (_user$folders = user.folders) !== null && _user$folders !== void 0 && _user$folders.find(folder => {
        var _folder$projects;

        return !!(folder !== null && folder !== void 0 && (_folder$projects = folder.projects) !== null && _folder$projects !== void 0 && _folder$projects.find(item => item === project.id));
      })),
      liked: !![...((project === null || project === void 0 ? void 0 : project.rating) || [])].find(item => item.email === user.email),
      onLike: onLike && (() => onLike(project)),
      onAdd: onAdd && (() => onAdd(project)),
      onLink: () => onLink(project, detectOwnedProject(user === null || user === void 0 ? void 0 : user.projects, project)),
      onAboutMore: () => onAboutMore(project),
      onCompanyLink: () => onCompanyLink(project),
      onScreenshotClick: (_, key) => onScreenshotClick(project, key)
    };
  }, [user, image, onLike, onAdd, onAboutMore, onCompanyLink, onScreenshotClick]);
  return /*#__PURE__*/external_react_default.a.createElement(Wrap, {
    className: className,
    style: style
  }, /*#__PURE__*/external_react_default.a.createElement(Background, {
    src: background,
    alt: 'Background'
  }), /*#__PURE__*/external_react_default.a.createElement(Container, null, /*#__PURE__*/external_react_default.a.createElement(Header, null, title && /*#__PURE__*/external_react_default.a.createElement(MainTitle, null, title), /*#__PURE__*/external_react_default.a.createElement(Search["a" /* default */], {
    onSubmit: onSearch
  })), (primary || residues && residues.length > 0) && /*#__PURE__*/external_react_default.a.createElement(Projects, null, primary && /*#__PURE__*/external_react_default.a.createElement(PrimaryProject, getProjectProps(primary, 'column')), residues && residues.length > 0 && /*#__PURE__*/external_react_default.a.createElement(Residues, null, residues.map((project, index) => /*#__PURE__*/external_react_default.a.createElement(Residue, _extends({
    key: index
  }, getProjectProps(project))))))));
};
/* harmony default export */ var components_Scaffold = (Scaffold);
// EXTERNAL MODULE: ./atomic-ui/components/Avatar/index.js
var Avatar = __webpack_require__("ThpJ");

// EXTERNAL MODULE: ./atomic-ui/components/Icon/index.js + 109 modules
var Icon = __webpack_require__("feIE");

// EXTERNAL MODULE: ./atomic-ui/components/Button/index.js
var Button = __webpack_require__("ZeZO");

// EXTERNAL MODULE: ./atomic-ui/components/Tooltip/index.js
var Tooltip = __webpack_require__("VWQm");

// EXTERNAL MODULE: ./atomic-ui/components/Popper/index.js
var Popper = __webpack_require__("vJvq");

// EXTERNAL MODULE: ./atomic-ui/components/Menu/index.js
var Menu = __webpack_require__("Tt38");

// CONCATENATED MODULE: ./components/AppBar/index.js
function AppBar_extends() { AppBar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AppBar_extends.apply(this, arguments); }










const AppBar_Wrap = external_styled_components_default.a.div.withConfig({
  displayName: "AppBar__Wrap",
  componentId: "vyjcbk-0"
})(["position:relative;z-index:var(--z-13);display:grid;grid-template-columns:128px 1fr 80px;grid-gap:calc(var(--default-gap) + 25px);align-content:center;margin:0;padding:0 var(--main-offset-l);width:100%;height:72px;min-height:72px;background:var(--surface-background);border:var(--surface-border);box-shadow:var(--surface-shadow);@media only screen and (max-width:996px){padding:0 var(--main-offset-m);}@media only screen and (max-width:768px){display:flex;align-items:center;grid-gap:var(--default-gap);padding:0 var(--main-offset-s);}@media only screen and (max-width:480px){padding:0 var(--main-offset-xs);}"]);
const MenuButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "AppBar__MenuButton",
  componentId: "vyjcbk-1"
})(["display:none;@media only screen and (max-width:768px){display:flex;}"]);
const HomeLinkContainer = external_styled_components_default.a.div.withConfig({
  displayName: "AppBar__HomeLinkContainer",
  componentId: "vyjcbk-2"
})(["position:relative;top:6px;"]);
const BrandLogo = external_styled_components_default.a.img.withConfig({
  displayName: "AppBar__BrandLogo",
  componentId: "vyjcbk-3"
})(["object-fit:contain;width:100%;height:100%;transform:scale(1.25);@media only screen and (max-width:786px){display:none;}"]);
const Navigation = external_styled_components_default.a.div.withConfig({
  displayName: "AppBar__Navigation",
  componentId: "vyjcbk-4"
})(["position:relative;display:flex;grid-gap:calc(var(--default-gap) + 15px);align-items:center;@media only screen and (max-width:768px){display:none;}"]);
const Label = external_styled_components_default.a.span.withConfig({
  displayName: "AppBar__Label",
  componentId: "vyjcbk-5"
})(["font-size:var(--font-size-m);font-weight:var(--font-weight-regular);", ""], ({
  link
}) => link && Object(external_styled_components_["css"])(["display:inline-flex;border-radius:25rem;padding:5px 15px;background:transparent;color:black;cursor:pointer;transition:all 150ms ease;&:hover{opacity:0.65;}", ""], ({
  active
}) => active && Object(external_styled_components_["css"])(["background:var(--default-color-accent-dim);color:var(--default-color-accent-link);&:hover{opacity:1;}"])));
const Actions = external_styled_components_default.a.div.withConfig({
  displayName: "AppBar__Actions",
  componentId: "vyjcbk-6"
})(["display:flex;grid-gap:var(--default-gap);align-items:center;justify-self:end;@media only screen and (max-width:768px){width:100%;justify-content:flex-end;", "{flex-grow:initial;}}"], Popper["a" /* Wrap */]);
const App = ({
  user,
  logotype,
  links,
  link: Link,
  style,
  className,
  onMenu,
  onHelp,
  onChat,
  onProfile,
  onSettings,
  onNotification,
  onLogout,
  onLogin
}) => {
  var _user$avatar;

  return /*#__PURE__*/external_react_default.a.createElement(AppBar_Wrap, {
    className: className,
    style: style
  }, /*#__PURE__*/external_react_default.a.createElement(MenuButton, {
    appearance: 'clear',
    kind: 'icon',
    onClick: onMenu
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'menu'
  })), logotype && /*#__PURE__*/external_react_default.a.createElement(HomeLinkContainer, null, /*#__PURE__*/external_react_default.a.createElement(Link, {
    href: '/'
  }, /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
    text: 'Атомик – портал для формирования новой сферы образования',
    offset: {
      bottom: 10
    },
    place: 'bottom',
    maxWidth: 256,
    multiline: true
  }, /*#__PURE__*/external_react_default.a.createElement(BrandLogo, {
    src: logotype,
    alt: 'Logotype'
  })))), links && links.length > 0 && /*#__PURE__*/external_react_default.a.createElement(Navigation, null, links.map(link => link.props.sublinks ? /*#__PURE__*/external_react_default.a.createElement(Popper["b" /* default */], {
    key: Object(external_uuid_["v4"])(),
    place: 'bottom',
    width: '265px',
    offset: {
      top: 5,
      right: 85
    },
    body: /*#__PURE__*/external_react_default.a.createElement(Menu["b" /* default */], {
      key: 'slinks',
      listStyle: {
        padding: 'var(--default-gap)'
      },
      links: link.props.sublinks.map(slink => ({
        text: slink.label,
        active: slink.props.active,
        onClick: slink.props.onClick
      }))
    }),
    appearance: 'clear'
  }, /*#__PURE__*/external_react_default.a.createElement(Label, {
    active: link.active,
    link: true
  }, link.label)) : /*#__PURE__*/external_react_default.a.createElement(Link, AppBar_extends({
    key: Object(external_uuid_["v4"])()
  }, link.props), /*#__PURE__*/external_react_default.a.createElement(Label, null, link.label)))), /*#__PURE__*/external_react_default.a.createElement(Actions, null, user ? /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    type: 'button',
    kind: 'icon',
    size: 'xs',
    onClick: onNotification
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    size: 'xs',
    icon: 'notification',
    stroke: 'white'
  })), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    type: 'button',
    kind: 'icon',
    size: 'xs',
    onClick: onChat
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    size: 'xs',
    icon: 'chat',
    stroke: 'white'
  })), /*#__PURE__*/external_react_default.a.createElement(Popper["b" /* default */], {
    place: 'bottom',
    width: '265px',
    offset: {
      top: 5,
      left: 100
    },
    body: /*#__PURE__*/external_react_default.a.createElement(Menu["b" /* default */], {
      key: 'menu',
      header: {
        title: 'Аккаунт',
        link: {
          text: 'Управление',
          onClick: onSettings
        }
      },
      links: [{
        text: 'Обзор профиля',
        onClick: onProfile
      }, {
        text: 'Пользовательские настройки',
        onClick: onSettings
      }, {
        text: 'Получить помощь',
        onClick: onHelp
      }, {
        text: 'Выход',
        onClick: onLogout
      }]
    }),
    appearance: 'clear'
  }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    type: 'button',
    appearance: 'clear'
  }, /*#__PURE__*/external_react_default.a.createElement(Avatar["b" /* default */], {
    src: ((_user$avatar = user.avatar) === null || _user$avatar === void 0 ? void 0 : _user$avatar.path) || '/images/avatar-default.png',
    alt: 'Avatar'
  })))) : /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    type: 'button',
    onClick: onLogin
  }, "\u0412\u043E\u0439\u0442\u0438")));
};
App.defaultProps = {
  link: ({
    children,
    ...props
  }) => /*#__PURE__*/external_react_default.a.createElement("a", AppBar_extends({}, props, {
    href: '/#'
  }), children)
};
/* harmony default export */ var AppBar = (App);
// CONCATENATED MODULE: ./components/Footer/index.js





const listProperties = Object(external_styled_components_["css"])(["margin:0;padding:0;list-style:none;"]);
const Footer_Wrap = external_styled_components_default.a.div.withConfig({
  displayName: "Footer__Wrap",
  componentId: "sc-1s8i38f-0"
})(["display:grid;grid-template-areas:'contacts socials' 'catalog support';grid-gap:calc(var(--default-gap) + 20px);background:var(--surface-background);border:var(--surface-border);box-shadow:var(--surface-shadow);margin:0;padding:calc(var(--default-gap) + 20px) var(--main-offset-l);@media only screen and (max-width:996px){padding:calc(var(--default-gap) + 20px) var(--main-offset-m);}@media only screen and (max-width:768px){grid-template-areas:'contacts contacts' 'socials socials' 'catelog support';padding:calc(var(--default-gap) + 20px) var(--main-offset-s);grid-gap:var(--default-gap);}@media only screen and (max-width:550px){display:flex;flex-direction:column;}@media only screen and (max-width:480px){padding:calc(var(--default-gap) + 20px) var(--main-offset-xs);}"]);
const Footer_Title = external_styled_components_default.a.h2.withConfig({
  displayName: "Footer__Title",
  componentId: "sc-1s8i38f-1"
})(["font-size:var(--font-h4);font-weight:var(--font-weight-bold);color:black;text-transform:uppercase;"]);
const Contacts = external_styled_components_default.a.ul.withConfig({
  displayName: "Footer__Contacts",
  componentId: "sc-1s8i38f-2"
})(["", " grid-area:contacts;display:grid;grid-template-columns:repeat(auto-fit,minmax(256px,256px));grid-gap:calc(var(--default-gap) + 15px);@media only screen and (max-width:768px){grid-template-columns:repeat(auto-fit,minmax(212px,1fr));grid-gap:var(--default-gap);}"], listProperties);
const Contact = external_styled_components_default.a.li.withConfig({
  displayName: "Footer__Contact",
  componentId: "sc-1s8i38f-3"
})(["flex-grow:1;display:grid;grid-template-columns:40px 1fr;grid-gap:var(--default-gap);align-content:center;cursor:pointer;"]);
const ContactIcon = external_styled_components_default()(Icon["a" /* default */]).withConfig({
  displayName: "Footer__ContactIcon",
  componentId: "sc-1s8i38f-4"
})(["width:var(--input-height-m);height:var(--input-height-m);background:var(--ghost-color-background);border-radius:var(--surface-border-radius);"]);
const ContactLabel = external_styled_components_default.a.span.withConfig({
  displayName: "Footer__ContactLabel",
  componentId: "sc-1s8i38f-5"
})(["display:flex;align-items:center;"]);
const Socials = external_styled_components_default.a.ul.withConfig({
  displayName: "Footer__Socials",
  componentId: "sc-1s8i38f-6"
})(["", " grid-area:socials;justify-self:end;display:flex;justify-content:space-between;grid-gap:var(--default-gap);width:150px;@media only screen and (max-width:768px){width:100%;flex-wrap:wrap;}"], listProperties);
const Social = external_styled_components_default.a.li.withConfig({
  displayName: "Footer__Social",
  componentId: "sc-1s8i38f-7"
})(["img{width:var(--input-height-m);height:var(--input-height-m);}"]);
const Catalog = external_styled_components_default.a.div.withConfig({
  displayName: "Footer__Catalog",
  componentId: "sc-1s8i38f-8"
})(["display:flex;flex-direction:column;grid-gap:var(--default-gap);"]);
const Support = external_styled_components_default.a.div.withConfig({
  displayName: "Footer__Support",
  componentId: "sc-1s8i38f-9"
})(["justify-self:end;display:flex;flex-direction:column;grid-gap:var(--default-gap);width:150px;"]);
const Links = external_styled_components_default.a.ul.withConfig({
  displayName: "Footer__Links",
  componentId: "sc-1s8i38f-10"
})(["", " display:flex;grid-gap:var(--default-gap) calc(var(--default-gap) + 15px);flex-wrap:wrap;"], listProperties);
const Footer_Link = external_styled_components_default.a.li.withConfig({
  displayName: "Footer__Link",
  componentId: "sc-1s8i38f-11"
})(["width:256px;color:black;opacity:0.35;transition:all 150ms ease;&:hover{color:var(--default-color-accent);opacity:1;}"]);
const Footer = ({
  contacts,
  socials,
  catalog,
  support,
  style,
  className
}) => {
  return /*#__PURE__*/external_react_default.a.createElement(Footer_Wrap, {
    className: className,
    style: style
  }, contacts && contacts.length > 0 && /*#__PURE__*/external_react_default.a.createElement(Contacts, null, contacts.map(contact => /*#__PURE__*/external_react_default.a.createElement(Contact, {
    key: Object(external_uuid_["v4"])()
  }, /*#__PURE__*/external_react_default.a.createElement(ContactIcon, {
    icon: contact.icon
  }), /*#__PURE__*/external_react_default.a.createElement(ContactLabel, null, contact.label)))), socials && socials.length > 0 && /*#__PURE__*/external_react_default.a.createElement(Socials, null, socials.map(social => /*#__PURE__*/external_react_default.a.createElement(Social, {
    key: Object(external_uuid_["v4"])(),
    src: social,
    alt: 'Social'
  }, /*#__PURE__*/external_react_default.a.createElement(Image["a" /* default */], {
    src: social,
    alt: 'Social'
  })))), catalog && catalog.links.length > 0 && /*#__PURE__*/external_react_default.a.createElement(Catalog, null, /*#__PURE__*/external_react_default.a.createElement(Footer_Title, null, catalog.title), /*#__PURE__*/external_react_default.a.createElement(Links, null, catalog.links.map(link => /*#__PURE__*/external_react_default.a.createElement(Footer_Link, {
    key: Object(external_uuid_["v4"])()
  }, link)))), support && support.links.length > 0 && /*#__PURE__*/external_react_default.a.createElement(Support, null, /*#__PURE__*/external_react_default.a.createElement(Footer_Title, null, support.title), /*#__PURE__*/external_react_default.a.createElement(Links, null, support.links.map(link => /*#__PURE__*/external_react_default.a.createElement(Footer_Link, {
    key: Object(external_uuid_["v4"])()
  }, link)))));
};
/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: ./components/Styled/index.js
var Styled = __webpack_require__("586Q");

// EXTERNAL MODULE: ./store/actions/user.js
var actions_user = __webpack_require__("8ihE");

// EXTERNAL MODULE: ./store/actions/drawer.js
var drawer = __webpack_require__("Ztxg");

// EXTERNAL MODULE: ./store/helpers/index.js + 4 modules
var helpers = __webpack_require__("+EEm");

// EXTERNAL MODULE: ./store/helpers/user.js + 11 modules
var helpers_user = __webpack_require__("rP4V");

// EXTERNAL MODULE: ./graphql/queries/index.js + 15 modules
var queries = __webpack_require__("u2Cb");

// EXTERNAL MODULE: ./__mock__/index.js
var _mock_ = __webpack_require__("wha1");

// CONCATENATED MODULE: ./layouts/default.js
function default_extends() { default_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return default_extends.apply(this, arguments); }
























const default_Wrap = external_styled_components_default.a.div.withConfig({
  displayName: "default__Wrap",
  componentId: "sc-2byuzg-0"
})(["position:relative;top:-20px;display:flex;flex-direction:column;justify-content:space-between;height:100vh;z-index:2;"]);
const default_Background = external_styled_components_default()(Image["a" /* default */]).withConfig({
  displayName: "default__Background",
  componentId: "sc-2byuzg-1"
})(["position:absolute;top:0;left:0;width:100%;height:auto;object-fit:contain;z-index:1;"]);
const Main = external_styled_components_default.a.main.withConfig({
  displayName: "default__Main",
  componentId: "sc-2byuzg-2"
})(["padding:50px var(--main-offset-l);flex-grow:100;@media only screen and (max-width:996px){padding:25px var(--main-offset-m);}@media only screen and (max-width:768px){padding:25px var(--main-offset-s);}@media only screen and (max-width:480px){padding:25px var(--main-offset-xs);}"]);
const Anchor = external_styled_components_default.a.a.withConfig({
  displayName: "default__Anchor",
  componentId: "sc-2byuzg-3"
})(["border-radius:25rem;padding:5px 15px;background:transparent;color:black;transition:all 150ms ease;", " ", ""], ({
  link
}) => link && Object(external_styled_components_["css"])(["&:hover{opacity:0.65;}"]), ({
  active,
  link
}) => active && link && Object(external_styled_components_["css"])(["background:var(--default-color-accent-dim);color:var(--default-color-accent-link);&:hover{opacity:1;}"]));
const DefaultLayout = ({
  children,
  title = 'Атомик',
  scaffold,
  background
}) => {
  var _root$settings$genera;

  const recall = Object(useHelper["b" /* useHelper */])();
  const mutate = Object(useMutate["a" /* useMutate */])();
  const router = Object(router_["useRouter"])();
  const {
    data,
    loading
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_CATEGORIES);
  const {
    root,
    user
  } = Object(external_react_redux_["useSelector"])(state => state);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const categories = Object(external_react_["useMemo"])(() => (data === null || data === void 0 ? void 0 : data.getCategories) || [], [data]);
  const isProjects = router.pathname.includes('projects');
  const categoryId = router.query.c;

  if (loading) {
    return /*#__PURE__*/external_react_default.a.createElement(Styled["a" /* FixedLoader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null));
  }

  return /*#__PURE__*/external_react_default.a.createElement(main["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(head_default.a, null, /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "keywords",
    content: "next,javascript,nextjs,react"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: "atomic project description"
  }), /*#__PURE__*/external_react_default.a.createElement("title", null, title)), /*#__PURE__*/external_react_default.a.createElement(default_Background, {
    src: background,
    alt: 'Background'
  }), /*#__PURE__*/external_react_default.a.createElement(default_Wrap, null, /*#__PURE__*/external_react_default.a.createElement(AppBar, {
    user: user.authenticated ? user : null,
    logotype: (_root$settings$genera = root.settings.general.logotype) === null || _root$settings$genera === void 0 ? void 0 : _root$settings$genera.path,
    link: ({
      children,
      href,
      ...props
    }) => /*#__PURE__*/external_react_default.a.createElement(link_default.a, default_extends({}, props, {
      href: href
    }), /*#__PURE__*/external_react_default.a.createElement(Anchor, {
      active: router.pathname === href,
      link: children.type.target === 'span'
    }, children)),
    links: [{
      label: 'Проекты',
      props: {
        sublinks: categories.filter(category => category.type === 'DIVISION').map(category => ({
          label: category.name,
          props: {
            active: categoryId === category.id,
            onClick: () => router.push(`/projects?c=${category.id}`)
          }
        }))
      },
      active: isProjects
    }, {
      label: 'Авторы',
      props: {
        href: '/creators'
      }
    }, {
      label: 'Новости',
      props: {
        href: '/articles'
      }
    }, {
      label: 'О ресурсе',
      props: {
        href: '/about'
      }
    }],
    onMenu: recall(helpers["e" /* onMenu */], {
      links: [{
        text: 'Проекты',
        onClick: () => {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          router.push('/projects');
        }
      }, {
        text: 'Авторы',
        onClick: () => {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          router.push('/creators');
        }
      }, {
        text: 'Новости',
        onClick: () => {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          router.push('/articles');
        }
      }, {
        text: 'О ресурсе',
        onClick: () => {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          router.push('/about');
        }
      }]
    }),
    onHelp: recall(helpers["c" /* onHelp */], {
      mutation: queries["a" /* default */].CREATE_USER_TICKET
    }),
    onChat: recall(helpers["a" /* onChat */], {
      sender: user,
      queries: {
        userChats: queries["a" /* default */].GET_USER_CHATS,
        chat: queries["a" /* default */].GET_CHAT
      },
      mutations: {
        addUserChat: queries["a" /* default */].ADD_USER_CHAT,
        sendMessage: queries["a" /* default */].SEND_MESSAGE
      }
    }),
    onSettings: recall(helpers_user["c" /* onUserClientEdit */], {
      user: user === null || user === void 0 ? void 0 : user.email,
      mutations: {
        update: queries["a" /* default */].UPDATE_CLIENT_USER,
        del: queries["a" /* default */].DELETE_USER,
        changePassword: queries["a" /* default */].UPDATE_CLIENT_USER
      }
    }),
    onNotification: recall(helpers["f" /* onNotification */], {
      notifications: user.notifications
    }),
    onProfile: () => router.push('/profile'),
    onLogin: () => router.push('/auth'),
    onLogout: mutate(queries["a" /* default */].LOGOUT, {}, () => dispatch(Object(actions_user["a" /* setLogout */])()))
  }), scaffold && /*#__PURE__*/external_react_default.a.createElement(components_Scaffold, scaffold), /*#__PURE__*/external_react_default.a.createElement(Main, {
    id: 'main'
  }, children), /*#__PURE__*/external_react_default.a.createElement(components_Footer, {
    contacts: _mock_["b" /* contacts */],
    socials: _mock_["d" /* socials */],
    catalog: {
      title: 'Каталог',
      links: categories.filter(category => category.type === 'DIVISION').map(link => /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
        key: Object(external_uuid_["v4"])(),
        href: `/projects?category=${link.id}`
      }, /*#__PURE__*/external_react_default.a.createElement("a", null, link.name)))
    },
    support: {
      title: 'О компании',
      links: _mock_["e" /* supportLinks */].map(link => /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
        key: Object(external_uuid_["v4"])(),
        href: link.path
      }, /*#__PURE__*/external_react_default.a.createElement("a", null, link.label)))
    }
  })));
};
/* harmony default export */ var layouts_default = __webpack_exports__["a"] = (DefaultLayout);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Yi3Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export CircleIcon */
/* unused harmony export Content */
/* unused harmony export Header */
/* unused harmony export Notice */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8CDE");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ThpJ");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("feIE");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("7sPp");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("QUga");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("aBfq");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  align-items: center;
  transition: opacity 150ms ease;

  ${({
  onClick
}) => onClick && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`;
const CircleIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])`
  width: var(--input-height-m);
  height: var(--input-height-m);
  min-width: var(--input-height-m);
  min-height: var(--input-height-m);
  background: var(--default-color-accent);
  border-radius: 50%;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])`
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  grid-gap: 0;
`;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  justify-content: space-between;
  width: 100%;

  h4 {
    font-size: var(--font-size-l);
  }
`;
const Notice = ({
  img,
  icon,
  title,
  message,
  date,
  onClick
}) => __jsx(Wrap, {
  onClick: onClick
}, img && !icon && __jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
  src: img
}), !img && icon && __jsx(CircleIcon, {
  icon: icon,
  stroke: 'white'
}), __jsx(Content, null, __jsx(Header, null, __jsx(_Title__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
  tag: 'h4'
}, title), __jsx(_Meta__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
  date: date
})), __jsx(_Text__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"], null, message)));
/* harmony default export */ __webpack_exports__["a"] = (Notice);

/***/ }),

/***/ "ZbFR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ onTicketLink; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ onTicketCreate; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ onTicketEdit; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ onTicketDelete; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/FormTicket/index.js
var FormTicket = __webpack_require__("PYoj");

// EXTERNAL MODULE: ./components/FormDelete/index.js
var FormDelete = __webpack_require__("xAqQ");

// EXTERNAL MODULE: ./components/TicketCard/index.js
var TicketCard = __webpack_require__("4nJQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./atomic-ui/components/Row/index.js
var Row = __webpack_require__("nShV");

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Member/index.js
var Member = __webpack_require__("otXJ");

// EXTERNAL MODULE: ./atomic-ui/components/Search/index.js
var Search = __webpack_require__("t7jn");

// EXTERNAL MODULE: ./atomic-ui/components/Difinition/index.js
var Difinition = __webpack_require__("DTT8");

// EXTERNAL MODULE: ./atomic-ui/components/Button/index.js
var Button = __webpack_require__("ZeZO");

// EXTERNAL MODULE: ./atomic-ui/components/Icon/index.js + 109 modules
var Icon = __webpack_require__("feIE");

// EXTERNAL MODULE: ./atomic-ui/components/Text/index.js
var Text = __webpack_require__("QUga");

// EXTERNAL MODULE: ./atomic-ui/components/DateText/index.js
var DateText = __webpack_require__("+nv6");

// EXTERNAL MODULE: ./atomic-ui/components/Message/index.js
var Message = __webpack_require__("7ni8");

// EXTERNAL MODULE: ./atomic-ui/components/Input/index.js
var Input = __webpack_require__("Gliw");

// EXTERNAL MODULE: ./atomic-ui/components/Spinner/index.js
var Spinner = __webpack_require__("auMy");

// EXTERNAL MODULE: ./atomic-ui/components/Alert/index.js
var Alert = __webpack_require__("ZwIX");

// EXTERNAL MODULE: ./components/Styled/index.js
var Styled = __webpack_require__("586Q");

// CONCATENATED MODULE: ./components/TicketChat/index.js














const Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "TicketChat__Wrap",
  componentId: "sc-3e5jur-0"
})(["width:100%;flex-grow:1;"]);
const Header = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "TicketChat__Header",
  componentId: "sc-3e5jur-1"
})(["justify-content:space-between;width:100%;"]);
const Messages = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "TicketChat__Messages",
  componentId: "sc-3e5jur-2"
})(["position:relative;background:#fbfbfb;border-radius:var(--surface-border-radius);padding:var(--default-gap);padding-top:55px;flex-grow:1;"]);
const Meta = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "TicketChat__Meta",
  componentId: "sc-3e5jur-3"
})(["position:absolute;top:0;left:0;width:100%;justify-content:space-between;padding:8px var(--default-gap);border-radius:var(--surface-border-radius) var(--surface-border-radius) 0 0;background:var(--ghost-color-background);time{font-size:var(--font-size-m);font-weight:var(--font-weight-regular);color:var(--default-color-text);}"]);
const AuthAlert = external_styled_components_default()(Alert["a" /* default */]).withConfig({
  displayName: "TicketChat__AuthAlert",
  componentId: "sc-3e5jur-4"
})(["width:100%;text-align:center;"]);
const Empty = external_styled_components_default()(Text["b" /* default */]).withConfig({
  displayName: "TicketChat__Empty",
  componentId: "sc-3e5jur-5"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;flex-grow:1;"]);
const TicketChat = ({
  auth,
  ticket,
  loading,
  onLink,
  onFinish,
  // onReport,
  onAttach,
  onSubmit,
  ...props
}) => {
  var _ticket$counsellor, _ticket$author, _ticket$messages, _ticket$counsellor3, _ticket$counsellor4;

  const [message, setMessage] = Object(external_react_["useState"])('');
  const messageRef = Object(external_react_["useRef"])(null);
  const isAccess = (ticket === null || ticket === void 0 ? void 0 : (_ticket$counsellor = ticket.counsellor) === null || _ticket$counsellor === void 0 ? void 0 : _ticket$counsellor.email) === auth;
  return /*#__PURE__*/external_react_default.a.createElement(Wrap, props, /*#__PURE__*/external_react_default.a.createElement(Header, null, /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], {
    label: 'Автор обращения',
    text: ticket !== null && ticket !== void 0 && (_ticket$author = ticket.author) !== null && _ticket$author !== void 0 && _ticket$author.name && !loading ? ticket.author.name : '-'
  }), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, (ticket === null || ticket === void 0 ? void 0 : ticket.status) !== 'CLOSED' && /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    onClick: onFinish,
    disabled: !isAccess || loading || !ticket
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435"))), /*#__PURE__*/external_react_default.a.createElement(Messages, null, /*#__PURE__*/external_react_default.a.createElement(Meta, null, /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, "\u0422\u0435\u043C\u0430: ", ticket !== null && ticket !== void 0 && ticket.title && !loading ? ticket.title : '-'), ticket !== null && ticket !== void 0 && ticket.createdAt && !loading ? /*#__PURE__*/external_react_default.a.createElement(DateText["a" /* default */], {
    text: ticket.createdAt,
    options: {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }
  }) : /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, "-")), !loading && (ticket === null || ticket === void 0 ? void 0 : (_ticket$messages = ticket.messages) === null || _ticket$messages === void 0 ? void 0 : _ticket$messages.length) > 0 ? ((ticket === null || ticket === void 0 ? void 0 : ticket.messages) || []).map(message => {
    var _message$user, _message$user$avatar, _message$user2, _ticket$counsellor2, _message$user3;

    return /*#__PURE__*/external_react_default.a.createElement(Message["a" /* default */], {
      key: message.id,
      avatar: (_message$user = message.user) === null || _message$user === void 0 ? void 0 : (_message$user$avatar = _message$user.avatar) === null || _message$user$avatar === void 0 ? void 0 : _message$user$avatar.path,
      side: ((_message$user2 = message.user) === null || _message$user2 === void 0 ? void 0 : _message$user2.email) === ((_ticket$counsellor2 = ticket.counsellor) === null || _ticket$counsellor2 === void 0 ? void 0 : _ticket$counsellor2.email) ? 'owner' : 'observer',
      name: (_message$user3 = message.user) === null || _message$user3 === void 0 ? void 0 : _message$user3.name,
      text: message.text,
      time: message.createdAt !== message.updatedAt ? message.updatedAt : message.createdAt,
      tails: {
        default: '/parts/tail.svg',
        owner: '/parts/tail-owner.svg'
      },
      onLink: () => onLink(message.user)
    });
  }) : loading ? /*#__PURE__*/external_react_default.a.createElement(Styled["c" /* Loader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null)) : !ticket ? /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    appearance: 'error',
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "\u0423\u043F\u0441! \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0438") : /*#__PURE__*/external_react_default.a.createElement(Empty, null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435")), isAccess ? /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    kind: 'icon',
    disabled: loading || !ticket,
    onSubmit: onAttach
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'attach',
    stroke: 'white'
  })), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    ref: messageRef,
    placeholder: 'Отправьте сообщенение...',
    disabled: loading || !ticket,
    appearance: 'ghost',
    onChange: e => {
      var _e$target;

      return setMessage((e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value) || '');
    },
    onKeyDown: e => {
      // Pressed ENTER
      if (e.keyCode === 13) {
        onSubmit(message);
        messageRef.current.value = '';
      }
    },
    tabIndex: -1
  }), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    kind: 'icon',
    disabled: loading || !ticket,
    onClick: () => {
      onSubmit(message);
      messageRef.current.value = '';
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'send',
    stroke: 'white'
  }))) : loading ? /*#__PURE__*/external_react_default.a.createElement(Styled["c" /* Loader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null)) : /*#__PURE__*/external_react_default.a.createElement(AuthAlert, null, "\u0414\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430 \u043D\u0430 \u044D\u0442\u043E \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u0435, \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u043F\u043E\u0434 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C ", ticket === null || ticket === void 0 ? void 0 : (_ticket$counsellor3 = ticket.counsellor) === null || _ticket$counsellor3 === void 0 ? void 0 : _ticket$counsellor3.name, " (", ticket === null || ticket === void 0 ? void 0 : (_ticket$counsellor4 = ticket.counsellor) === null || _ticket$counsellor4 === void 0 ? void 0 : _ticket$counsellor4.email, ")"));
};
/* harmony default export */ var components_TicketChat = (TicketChat);
// EXTERNAL MODULE: ./components/Processed/index.js
var Processed = __webpack_require__("2qQv");

// EXTERNAL MODULE: ./store/actions/documents.js
var actions_documents = __webpack_require__("j8/+");

// EXTERNAL MODULE: ./graphql/queries/index.js + 15 modules
var queries = __webpack_require__("u2Cb");

// CONCATENATED MODULE: ./components/TicketView/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const TicketView_Wrap = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "TicketView__Wrap",
  componentId: "sc-1wxiq0b-0"
})(["height:100%;flex-grow:1;@media only screen and (max-width:568px){flex-direction:column;}", " ", " ", ""], ({
  appearance
}) => appearance === 'default' && Object(external_styled_components_["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Tickets = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "TicketView__Tickets",
  componentId: "sc-1wxiq0b-1"
})(["grid-gap:0;width:320px;@media only screen and (max-width:568px){width:100%;}"]);
const Ticket = external_styled_components_default()(Member["a" /* default */]).withConfig({
  displayName: "TicketView__Ticket",
  componentId: "sc-1wxiq0b-2"
})(["margin:10px 0 0 0;padding:10px;border-radius:var(--surface-border-radius);", ""], ({
  active
}) => active && Object(external_styled_components_["css"])(["background:var(--input-background);"]));
const LIMIT_TICKETS = 36;
const View = ({
  auth,
  ticket,
  appearance,
  onMemberLink,
  onReport,
  onAttach,
  ...props
}) => {
  const [currentTicket, setCurrentTicket] = Object(external_react_["useState"])(null); // TODO: Fetch more tickets by scrolling
  // eslint-disable-next-line no-unused-vars

  const [offsetTickets, setOffsetTickets] = Object(external_react_["useState"])(0);
  const [loadingTicket, setLoadingTicket] = Object(external_react_["useState"])(false);
  const [tickets, setTickets] = Object(external_react_["useState"])([]);
  const documents = Object(external_react_redux_["useSelector"])(state => state.documents);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const variablesTickets = Object(external_react_["useMemo"])(() => ({
    offset: offsetTickets,
    limit: LIMIT_TICKETS
  }), [offsetTickets]);
  const {
    data,
    loading,
    error,
    refetch
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_TICKET, {
    variables: {
      id: ticket
    }
  });
  const [closeTicket, {
    data: dataCloseTicket,
    loading: loadingCloseTicket,
    error: errorCloseTicket
  }] = Object(react_hooks_["useMutation"])(queries["a" /* default */].CLOSE_TICKET);
  const [sendTicketMessage, {
    data: dataSendMessage,
    loading: loadingSendMessage
  }] = Object(react_hooks_["useMutation"])(queries["a" /* default */].SEND_TICKET_MESSAGE);
  const {
    data: dataTickets,
    loading: loadingTickets,
    error: errorTickets // fetchMore: updateTickets

  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_TICKETS, {
    variables: variablesTickets
  });
  Object(external_react_["useEffect"])(() => {
    if (!loading && data !== null && data !== void 0 && data.getTicket) {
      setCurrentTicket(data.getTicket);
    }

    if (!loadingCloseTicket && dataCloseTicket !== null && dataCloseTicket !== void 0 && dataCloseTicket.closeTicket) {
      const candidate = dataCloseTicket.closeTicket;
      setCurrentTicket(candidate);
      dispatch(Object(actions_documents["a" /* setDocuments */])((documents || []).map(document => document.id === candidate.id ? candidate : document)));
    }
  }, [data, dataCloseTicket, loading, loadingCloseTicket]);
  Object(external_react_["useEffect"])(() => {
    if (!loadingTickets && dataTickets) {
      setTickets(dataTickets.getTickets);
    }
  }, [dataTickets, loadingTickets]);
  Object(external_react_["useEffect"])(() => {
    if (!loadingSendMessage && dataSendMessage) {
      setCurrentTicket(prev => ({ ...prev,
        messages: dataSendMessage.sendTicketMessage
      }));
    }
  }, [dataSendMessage, loadingSendMessage]);
  return /*#__PURE__*/external_react_default.a.createElement(TicketView_Wrap, _extends({}, props, {
    appearance: appearance
  }), /*#__PURE__*/external_react_default.a.createElement(Processed["a" /* default */], {
    data: data === null || data === void 0 ? void 0 : data.getTicket,
    loading: loading,
    error: error,
    errorMessage: 'Упс! Не удалось загрузить информацию о обращении',
    emptyMessage: 'Кажется такого обращения не существует'
  }, /*#__PURE__*/external_react_default.a.createElement(Tickets, null, /*#__PURE__*/external_react_default.a.createElement(Search["a" /* default */], {
    appearance: 'ghost',
    onSubmit: () => {}
  }), /*#__PURE__*/external_react_default.a.createElement(Processed["a" /* default */], {
    data: dataTickets === null || dataTickets === void 0 ? void 0 : dataTickets.getTickets,
    loading: loadingTickets,
    error: errorTickets,
    errorMessage: 'Упс! Не удалось загрузить список обращений',
    emptyMessage: 'Список обращений пуст'
  }, tickets.map(item => {
    var _item$author;

    return /*#__PURE__*/external_react_default.a.createElement(Ticket, {
      key: item.id,
      name: item.title,
      position: (_item$author = item.author) === null || _item$author === void 0 ? void 0 : _item$author.name,
      active: currentTicket && currentTicket.id === item.id,
      onClick: async () => {
        setLoadingTicket(true);
        await refetch({
          id: item.id
        });
        setCurrentTicket(item);
        setLoadingTicket(false);
      }
    });
  }))), /*#__PURE__*/external_react_default.a.createElement(components_TicketChat, {
    auth: auth,
    ticket: currentTicket,
    loading: loading || loadingSendMessage || loadingTicket || loadingTickets || errorCloseTicket,
    onLink: onMemberLink,
    onFinish: () => closeTicket({
      variables: {
        id: ticket
      }
    }),
    onReport: onReport,
    onAttach: onAttach,
    onSubmit: value => {
      var _currentTicket$author;

      return sendTicketMessage({
        variables: {
          ticket: currentTicket.id,
          recipient: (_currentTicket$author = currentTicket.author) === null || _currentTicket$author === void 0 ? void 0 : _currentTicket$author.email,
          text: value
        }
      });
    }
  })));
};
View.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ var TicketView = (View);
// EXTERNAL MODULE: ./store/actions/drawer.js
var drawer = __webpack_require__("Ztxg");

// EXTERNAL MODULE: ./store/actions/snacks.js
var snacks = __webpack_require__("9Xo6");

// EXTERNAL MODULE: ./store/helpers/user.js + 11 modules
var user = __webpack_require__("rP4V");

// EXTERNAL MODULE: ./store/helpers/index.js + 4 modules
var helpers = __webpack_require__("+EEm");

// CONCATENATED MODULE: ./store/helpers/ticket.js










function onTicketLink(dispatch, props) {
  const {
    id,
    auth
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'ticket',
    title: 'Обращение',
    content: /*#__PURE__*/external_react_default.a.createElement(TicketView, {
      auth: auth,
      ticket: id,
      appearance: 'clear',
      onAttach: () => Object(helpers["b" /* onFileLink */])(dispatch),
      onMemberLink: member => Object(user["i" /* onUserLink */])(dispatch, {
        id: member.email,
        auth
      })
    })
  }));
}
function onTicketCreate(dispatch, props) {
  const {
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'ticket',
    title: 'Создание обращения',
    content: /*#__PURE__*/external_react_default.a.createElement(FormTicket["a" /* default */], {
      mutation: mutation,
      appearance: 'clear',
      onSubmit: async (form, action) => {
        try {
          var _form$author, _form$author$value, _form$counsellor, _form$counsellor$valu, _form$category;

          const tickets = await action({
            variables: {
              input: {
                title: form.title,
                message: form.message,
                author: (_form$author = form.author) === null || _form$author === void 0 ? void 0 : (_form$author$value = _form$author.value) === null || _form$author$value === void 0 ? void 0 : _form$author$value.email,
                counsellor: (_form$counsellor = form.counsellor) === null || _form$counsellor === void 0 ? void 0 : (_form$counsellor$valu = _form$counsellor.value) === null || _form$counsellor$valu === void 0 ? void 0 : _form$counsellor$valu.email,
                category: (_form$category = form.category) === null || _form$category === void 0 ? void 0 : _form$category.value
              }
            }
          });
          dispatch(Object(actions_documents["a" /* setDocuments */])(tickets.data.createTicket));
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Обращение успешно создано'
          }));
        } catch (err) {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось создать обращение'
          }));
        }
      }
    })
  }));
}
function onTicketEdit(dispatch, props) {
  const {
    id,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'ticket',
    title: 'Редактирование обращения',
    content: /*#__PURE__*/external_react_default.a.createElement(FormTicket["a" /* default */], {
      ticket: id,
      mutation: mutation,
      appearance: 'clear',
      onSubmit: async (form, action) => {
        try {
          var _form$author2, _form$author2$value, _form$counsellor2, _form$counsellor2$val, _form$category2;

          const tickets = await action({
            variables: {
              id,
              input: {
                title: form.title,
                message: form.message,
                messages: form.messages.map(message => ({
                  id: message.id,
                  text: message.text
                })),
                author: (_form$author2 = form.author) === null || _form$author2 === void 0 ? void 0 : (_form$author2$value = _form$author2.value) === null || _form$author2$value === void 0 ? void 0 : _form$author2$value.email,
                counsellor: (_form$counsellor2 = form.counsellor) === null || _form$counsellor2 === void 0 ? void 0 : (_form$counsellor2$val = _form$counsellor2.value) === null || _form$counsellor2$val === void 0 ? void 0 : _form$counsellor2$val.email,
                category: (_form$category2 = form.category) === null || _form$category2 === void 0 ? void 0 : _form$category2.value
              }
            }
          });
          dispatch(Object(actions_documents["a" /* setDocuments */])(tickets.data.updateTicket));
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Обращение успешно отредактировано'
          }));
        } catch (_unused) {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось отредактировать обращение'
          }));
        }
      }
    })
  }));
}
function onTicketDelete(dispatch, props) {
  const {
    ticket,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'delete',
    color: 'red',
    title: 'Удаление обращения',
    content: /*#__PURE__*/external_react_default.a.createElement(FormDelete["a" /* default */], {
      mutation: mutation,
      appearance: 'clear',
      onCancel: () => dispatch(Object(drawer["a" /* setDrawer */])(null)),
      onSubmit: async (_, action) => {
        try {
          const tickets = await action({
            variables: {
              id: ticket.id
            }
          });
          dispatch(Object(actions_documents["a" /* setDocuments */])(tickets.data.deleteTicket));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Обращение успешно удалено'
          }));
        } catch (_unused2) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось удалить обращение'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
        }
      }
    }, /*#__PURE__*/external_react_default.a.createElement(TicketCard["a" /* default */], {
      ticket: ticket,
      appearance: 'clear'
    }))
  }));
}

/***/ }),

/***/ "ZeZO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clearProperties */
/* unused harmony export Wrap */
/* unused harmony export Button */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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

  return __jsx(Wrap, props, children);
};
Button.defaultProps = {
  appearance: 'default',
  kind: 'default',
  size: 'm'
};
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "Ztxg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setDrawer; });
/* unused harmony export setBackDrawer */
/* harmony import */ var _types_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mfnN");

function setDrawer(drawer) {
  return {
    type: _types_drawer__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_DRAWER,
    payload: drawer
  };
}
function setBackDrawer() {
  return {
    type: _types_drawer__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_BACK_DRAWER
  };
}

/***/ }),

/***/ "ZwIX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Alert */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  padding: 15px;
  border-radius: 5px;
  color: white;

  ${({
  width
}) => width && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: ${width};
    `}

  ${({
  appearance
}) => appearance === 'default' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      border: 1px dashed var(--input-placeholder-color);
      background: none;
      color: var(--ghost-color-text);
    `}

  ${({
  appearance
}) => appearance === 'error' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      border: 1px solid var(--default-color-red);
      background: var(--default-color-red-dim);
      color: var(--default-color-red);
    `}

  ${({
  appearance
}) => appearance === 'warning' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      border: 1px solid var(--default-color-orange);
      background: var(--default-color-orange-dim);
      color: var(--default-color-orange);
    `}

  ${({
  appearance
}) => appearance === 'success' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      border: 1px solid var(--default-color-accent);
      background: var(--default-color-accent-dim);
      color: var(--default-color-accent);
    `}
`;
const Alert = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Wrap, props, children);
};
Alert.defaultProps = {
  appearance: 'default',
  width: '240px'
};
/* harmony default export */ __webpack_exports__["a"] = (Alert);

/***/ }),

/***/ "aBfq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export DateRow */
/* unused harmony export DateIcon */
/* unused harmony export Category */
/* unused harmony export Assessment */
/* unused harmony export Meta */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("feIE");
/* harmony import */ var _DateText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+nv6");
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JyfY");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fLIS");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("VWQm");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  flex-wrap: wrap;
`;
const DateRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  position: relative;
  top: -2px;
  align-items: center;
  grid-gap: var(--gap-xs);
  color: var(--ghost-color-text);
`;
const DateIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Icon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])`
  margin-left: -4px;
`;
const Category = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Chip__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])`
  ${({
  short
}) => short && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 1.75;
      width: auto;
    `}
`;
const Assessment = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 100;
`;
const Meta = ({
  date,
  category,
  rating,
  short,
  onChangeRating
}) => __jsx(Wrap, null, date && __jsx(DateRow, null, __jsx(DateIcon, {
  icon: 'calendar',
  size: 'xs',
  stroke: 'var(--ghost-color-text)'
}), __jsx(_DateText__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
  text: date,
  options: {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }
})), category && __jsx(_Tooltip__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"], {
  place: 'top',
  text: category
}, __jsx(Category, {
  short: short && category.length > 25,
  color: 'ghost',
  appearance: 'outlined',
  size: 'xs'
}, category)), (rating || rating === 0) && __jsx(Assessment, null, __jsx(_Rating__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
  defaultValue: rating,
  onChange: onChangeRating,
  size: 'xs',
  readOnly: true
})));
/* harmony default export */ __webpack_exports__["a"] = (Meta);

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "auMy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* unused harmony export Spinner */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/*
 * IMPORTANT: Don't use styled-components,
 * because it will cause problems at the build stage
 */

const styles = {
  display: 'inline-block',
  margin: 'auto',
  fontSize: '10px',
  position: 'relative',
  textIndent: '-9999em',
  border: '0.2em solid rgba(0, 0, 0, 0.2)',
  borderLeft: '0.2em solid var(--default-color-accent)',
  borderRadius: '50%',
  width: '3em',
  height: '3em',
  transform: 'translateZ(0)',
  animation: 'load 450ms infinite linear',
  '&::after': {
    borderRadius: '50%',
    width: '3em',
    height: '3em'
  }
};
const Spinner = () => __jsx("div", {
  style: styles
});
/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "coMr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Header */
/* unused harmony export ActionGroup */
/* unused harmony export CreateButton */
/* unused harmony export Footer */
/* unused harmony export Handle */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8CDE");
/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZeZO");
/* harmony import */ var _atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("feIE");
/* harmony import */ var _atomic_ui_components_Switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("OXt0");
/* harmony import */ var _atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("DTT8");
/* harmony import */ var _atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("79b8");
/* harmony import */ var _atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("RKiZ");
/* harmony import */ var _atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("VWQm");











const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]).withConfig({
  displayName: "HandleBar__Wrap",
  componentId: "phr6ix-0"
})([""]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "HandleBar__Header",
  componentId: "phr6ix-1"
})(["justify-content:space-between;grid-gap:var(--default-gap);flex-wrap:wrap;"]);
const ActionGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "HandleBar__ActionGroup",
  componentId: "phr6ix-2"
})(["justify-content:flex-end;@media only screen and (max-width:996px){width:100%;", "{width:auto;}}@media only screen and (max-width:480px){flex-wrap:wrap;grid-gap:var(--default-gap);", "{flex-direction:row;flex-grow:1;}", "{button{width:100%;height:100%;}}}"], _atomic_ui_components_Switch__WEBPACK_IMPORTED_MODULE_6__[/* Track */ "a"], _atomic_ui_components_Switch__WEBPACK_IMPORTED_MODULE_6__[/* Track */ "a"], _atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_10__[/* Wrap */ "a"]);
const CreateButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]).withConfig({
  displayName: "HandleBar__CreateButton",
  componentId: "phr6ix-3"
})(["display:flex;justify-content:center;align-items:center;grid-gap:10px;span{white-space:nowrap;}@media only screen and (max-width:996px){width:100%;}"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "HandleBar__Footer",
  componentId: "phr6ix-4"
})(["justify-content:space-between;@media only screen and (max-width:480px){flex-direction:column;align-items:end;grid-gap:var(--default-gap);}"]);
const displayMethods = [{
  label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    icon: 'menu'
  }),
  value: 'list',
  tooltip: 'Отображение списком'
}, {
  label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    icon: 'category'
  }),
  value: 'grid',
  tooltip: 'Отображение сеткой'
}];
const Handle = ({
  icon,
  title,
  buttonCreateText,
  onCreate,
  onDeleteChecked,
  onChangeVisibleFilter,
  onChangeDisplayMethod
}) => {
  const [visibleFilter, setVisibleFilter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [displayMethod, setDisplayMethod] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const onVisibleFilter = () => {
    setVisibleFilter(!visibleFilter);
    if (onChangeVisibleFilter) onChangeVisibleFilter();
  };

  const onDisplayMethod = item => {
    setDisplayMethod(item);
    if (onChangeDisplayMethod) onChangeDisplayMethod(item);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Difinition__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"], {
    icon: icon,
    text: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionGroup, null, onCreate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateButton, {
    type: 'button',
    onClick: onCreate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, buttonCreateText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    icon: 'add',
    stroke: 'white'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"], {
    text: 'Отображение фильтров'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    type: 'button',
    kind: 'icon',
    onClick: onVisibleFilter,
    revert: !visibleFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    icon: 'filter2',
    stroke: !visibleFilter ? 'var(--default-color-accent)' : 'white'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Switch__WEBPACK_IMPORTED_MODULE_6__[/* default */ "b"], {
    defaultValue: displayMethod || displayMethods[1],
    options: displayMethods,
    onChange: item => onDisplayMethod(item)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Divider__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    clear: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    label: 'Выделить все'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    style: {
      color: 'var(--default-color-red)'
    },
    appearance: 'clear',
    onClick: onDeleteChecked
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435")));
};
/* harmony default export */ __webpack_exports__["a"] = (Handle);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "e3uv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: category, article, project, ticket, role, user

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./atomic-ui/components/Table/index.js
var Table = __webpack_require__("EJJs");

// CONCATENATED MODULE: ./atomic-ui/components/Table/templates/category.js
var __jsx = external_react_default.a.createElement;


const category = [{
  header: 'Наименование',
  content: item => __jsx(Table["a" /* Cell */], {
    text: item.name || '-'
  }),
  width: '15%'
}, {
  header: 'Описание',
  content: item => __jsx(Table["a" /* Cell */], {
    text: item.description || '-'
  }),
  width: '70%'
}, {
  header: 'Дата создания',
  content: item => __jsx(Table["a" /* Cell */], {
    text: item.createdAt || '-'
  }),
  width: '15%'
}];
/* harmony default export */ var templates_category = (category);
// CONCATENATED MODULE: ./atomic-ui/components/Table/templates/article.js
var article_jsx = external_react_default.a.createElement;


const article = [{
  header: 'Наименование',
  content: item => {
    var _item$preview;

    return article_jsx(Table["a" /* Cell */], {
      img: (_item$preview = item.preview) === null || _item$preview === void 0 ? void 0 : _item$preview.path,
      text: item.title || '-'
    });
  }
}, {
  header: 'Описание',
  content: item => article_jsx(Table["a" /* Cell */], {
    text: item.body || '-'
  })
}, {
  header: 'Раздел',
  content: item => {
    var _item$category;

    return article_jsx(Table["a" /* Cell */], {
      text: ((_item$category = item.category) === null || _item$category === void 0 ? void 0 : _item$category.name) || '-'
    });
  }
}, {
  header: 'Автор',
  content: item => {
    var _item$author, _item$author$avatar, _item$author2;

    return article_jsx(Table["a" /* Cell */], {
      img: (_item$author = item.author) === null || _item$author === void 0 ? void 0 : (_item$author$avatar = _item$author.avatar) === null || _item$author$avatar === void 0 ? void 0 : _item$author$avatar.path,
      text: ((_item$author2 = item.author) === null || _item$author2 === void 0 ? void 0 : _item$author2.name) || '-'
    });
  }
}, {
  header: 'Дата публикации',
  content: item => article_jsx(Table["a" /* Cell */], {
    text: item.publishedAt || '-'
  })
}, {
  header: 'Дата создания',
  content: item => article_jsx(Table["a" /* Cell */], {
    text: item.createdAt || '-'
  }),
  hidden: true
}];
/* harmony default export */ var templates_article = (article);
// CONCATENATED MODULE: ./atomic-ui/components/Table/templates/project.js
var project_jsx = external_react_default.a.createElement;


const project = [{
  header: 'Наименование',
  content: item => {
    var _item$preview;

    return project_jsx(Table["a" /* Cell */], {
      img: (_item$preview = item.preview) === null || _item$preview === void 0 ? void 0 : _item$preview.path,
      text: item.title || '-'
    });
  }
}, {
  header: 'Описание',
  content: item => project_jsx(Table["a" /* Cell */], {
    text: item.body || '-'
  })
}, {
  header: 'Раздел',
  content: item => {
    var _item$category;

    return project_jsx(Table["a" /* Cell */], {
      text: ((_item$category = item.category) === null || _item$category === void 0 ? void 0 : _item$category.name) || '-'
    });
  }
}, {
  header: 'Компания',
  content: item => {
    var _item$company, _item$company$avatar, _item$company2;

    return project_jsx(Table["a" /* Cell */], {
      img: (_item$company = item.company) === null || _item$company === void 0 ? void 0 : (_item$company$avatar = _item$company.avatar) === null || _item$company$avatar === void 0 ? void 0 : _item$company$avatar.path,
      text: ((_item$company2 = item.company) === null || _item$company2 === void 0 ? void 0 : _item$company2.name) || '-'
    });
  }
}, {
  header: 'Дата публикации',
  content: item => project_jsx(Table["a" /* Cell */], {
    text: item.publishedAt || '-'
  })
}, {
  header: 'Дата создания',
  content: item => project_jsx(Table["a" /* Cell */], {
    text: item.createdAt || '-'
  }),
  hidden: true
}];
/* harmony default export */ var templates_project = (project);
// CONCATENATED MODULE: ./atomic-ui/components/Table/templates/ticket.js
var ticket_jsx = external_react_default.a.createElement;


const ticket = [{
  header: 'Номер',
  content: item => ticket_jsx(Table["a" /* Cell */], {
    text: item.token || '-'
  })
}, {
  header: 'Автор',
  content: item => {
    var _item$author, _item$author2;

    return ticket_jsx(Table["a" /* Cell */], {
      img: (_item$author = item.author) === null || _item$author === void 0 ? void 0 : _item$author.avatar,
      text: ((_item$author2 = item.author) === null || _item$author2 === void 0 ? void 0 : _item$author2.name) || '-'
    });
  }
}, {
  header: 'Наименование',
  content: item => {
    var _item$avatar;

    return ticket_jsx(Table["a" /* Cell */], {
      img: (_item$avatar = item.avatar) === null || _item$avatar === void 0 ? void 0 : _item$avatar.path,
      text: item.title || '-'
    });
  }
}, {
  header: 'Категория',
  content: item => {
    var _item$category;

    return ticket_jsx(Table["a" /* Cell */], {
      text: ((_item$category = item.category) === null || _item$category === void 0 ? void 0 : _item$category.name) || '-'
    });
  }
}, {
  header: 'Сообщения',
  content: item => {
    var _item$messages;

    return ticket_jsx(Table["a" /* Cell */], {
      text: ((_item$messages = item.messages) === null || _item$messages === void 0 ? void 0 : _item$messages.length) || '-'
    });
  }
}, {
  header: 'Дата регистрации',
  content: item => ticket_jsx(Table["a" /* Cell */], {
    text: item.createdAt || '-'
  }),
  hidden: true
}];
/* harmony default export */ var templates_ticket = (ticket);
// CONCATENATED MODULE: ./atomic-ui/components/Table/templates/role.js
var role_jsx = external_react_default.a.createElement;


const role = [{
  header: 'Наименование',
  content: item => role_jsx(Table["a" /* Cell */], {
    text: item.name || '-'
  }),
  width: '15%'
}, {
  header: 'Привелегии',
  content: item => {
    var _item$permissions;

    return role_jsx(Table["a" /* Cell */], {
      text: ((_item$permissions = item.permissions) === null || _item$permissions === void 0 ? void 0 : _item$permissions.length) || '-'
    });
  },
  width: '75%'
}, {
  header: 'Дата создания',
  content: item => role_jsx(Table["a" /* Cell */], {
    text: item.createdAt || '-'
  }),
  width: '10%'
}];
/* harmony default export */ var templates_role = (role);
// CONCATENATED MODULE: ./atomic-ui/components/Table/templates/user.js
var user_jsx = external_react_default.a.createElement;



const getLabelRole = role => {
  switch (role) {
    case 'ADMIN':
      return 'Админ';

    case 'MODERATOR':
      return 'Модератор';

    case 'OFICIAL':
      return 'Оф. лицо';

    case 'ENTITY':
      return 'Юр. лицо';

    default:
      return 'Физ. лицо';
  }
};

const user = [{
  header: 'Наименование',
  content: item => {
    var _item$avatar;

    return user_jsx(Table["a" /* Cell */], {
      img: (_item$avatar = item.avatar) === null || _item$avatar === void 0 ? void 0 : _item$avatar.path,
      text: item.name || '-'
    });
  }
}, {
  header: 'Аккаунт',
  content: item => user_jsx(Table["a" /* Cell */], {
    text: item.account && getLabelRole(item.account) || '-'
  })
}, {
  header: 'О себе',
  content: item => user_jsx(Table["a" /* Cell */], {
    text: item.about || '-'
  })
}, {
  header: 'Проекты',
  content: item => {
    var _item$projects;

    return user_jsx(Table["a" /* Cell */], {
      text: ((_item$projects = item.projects) === null || _item$projects === void 0 ? void 0 : _item$projects.length) || '-'
    });
  }
}, {
  header: 'Дата регистрации',
  content: item => user_jsx(Table["a" /* Cell */], {
    text: item.createdAt || '-'
  }),
  hidden: true
}];
/* harmony default export */ var templates_user = (user);
// CONCATENATED MODULE: ./atomic-ui/components/Table/templates/index.js






const Table_templates_category = templates_category;
const Table_templates_article = templates_article;
const Table_templates_project = templates_project;
const Table_templates_ticket = templates_ticket;
const Table_templates_role = templates_role;
const Table_templates_user = templates_user;
/* harmony default export */ var templates = __webpack_exports__["a"] = ({
  category: Table_templates_category,
  article: Table_templates_article,
  project: Table_templates_project,
  ticket: Table_templates_ticket,
  role: Table_templates_role,
  user: Table_templates_user
});

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fLIS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Rate */
/* unused harmony export Rating */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("feIE");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  grid-gap: 5px;
  background: var(--default-color-accent-dim);
  border-radius: 25rem;
  padding: var(--space-offset-xs);
  width: min-content;
  height: fit-content;

  ${({
  disabled
}) => disabled && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      background: var(--ghost-color-background);
    `}
`;
const Rate = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({
  size
}) => size === 'xs' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: 8px;
      height: 8px;
    `}

  ${({
  size
}) => size === 's' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: 12px;
      height: 12px;
    `}

  ${({
  readOnly,
  disabled
}) => (readOnly || disabled) && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      cursor: default;
    `}

  svg {
    path {
      stroke: none;
      transition: fill 150ms linear;
    }
  }
`;
const Rating = (_ref) => {
  let {
    max,
    icon,
    size,
    icons,
    readOnly,
    disabled,
    defaultValue,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, ["max", "icon", "size", "icons", "readOnly", "disabled", "defaultValue", "onChange"]);

  const list = new Array(max).fill(null).map((_, i) => i + 1);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue);
  const {
    0: rate,
    1: setRate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const onMouseEnter = item => {
    if (!readOnly && !disabled) setRate(item);
  };

  const onMouseLeave = () => {
    if (!readOnly && !disabled) setRate(null);
  };

  const onClick = item => {
    if (!readOnly && !disabled) setValue(item);
    if (onChange && !readOnly && !disabled) onChange(item);
  };

  return __jsx(Wrap, _extends({}, props, {
    size: size,
    disabled: disabled
  }), list.map((item, index) => __jsx(Rate, {
    key: item,
    size: size,
    onMouseEnter: () => onMouseEnter(item),
    onMouseLeave: onMouseLeave,
    onClick: () => onClick(item),
    readOnly: readOnly,
    disabled: disabled
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    icon: icons && icons.length === max ? icons[index] : icon,
    fill: item <= value || item <= rate ? 'var(--default-color-accent)' : disabled ? 'var(--default-color-text)' : 'var(--default-color-accent-gray)',
    style: size === 'xs' ? {
      transform: 'scale(.85)'
    } : {},
    size: 'xs'
  }))));
};
Rating.defaultProps = {
  icon: 'star',
  size: 's',
  defaultValue: 0,
  max: 5
};
/* harmony default export */ __webpack_exports__["a"] = (Rating);

/***/ }),

/***/ "feIE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: library, Wrap, Error, Icon

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/add.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M8.3.8v5.9h-.6V.8a.3.3 0 01.6 0zm-.6 6.9h.6v.6h-.6v-.6zm1.6.6v-.6h5.9a.3.3 0 110 .6H9.3zm-1.6 1h.6v5.9a.3.3 0 11-.6 0V9.3zm-1-1.6v.6H.8a.3.3 0 010-.6h5.9z",
  stroke: "#200E32"
});

function SvgAdd(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    width: 16,
    height: 16,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ var add = (SvgAdd);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/attach.svg
function attach_extends() { attach_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return attach_extends.apply(this, arguments); }



var attach_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M17.263 3.436h0a3.493 3.493 0 00-5.179-.255l-8.676 8.677c-1.868 1.867-2.147 4.879-.5 6.872a5.005 5.005 0 007.408.361l7.602-7.601a.256.256 0 000-.354.256.256 0 00-.354 0l-7.48 7.482c-1.641 1.64-4.328 1.924-6.16.414l13.34-15.596zm0 0c1.149 1.393.966 3.5-.35 4.815L9.61 15.556a2 2 0 01-2.971-.154c-.642-.784-.53-2.002.242-2.774l6.088-6.088a.256.256 0 01.354 0 .256.256 0 010 .354L7.135 13.08a1.503 1.503 0 000 2.121 1.503 1.503 0 002.12 0l7.425-7.424a3 3 0 00-.227-4.453c-1.239-1.013-3.033-.772-4.114.309l-8.74 8.74a4.498 4.498 0 00.325 6.658l13.34-15.596z",
  stroke: "#200E32"
});

function SvgAttach(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", attach_extends({
    width: 20,
    height: 23,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), attach_ref);
}

/* harmony default export */ var attach = (SvgAttach);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/activity.svg
function activity_extends() { activity_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return activity_extends.apply(this, arguments); }



var activity_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M7.245 14.781l2.993-3.89 3.414 2.682 2.93-3.78",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var _ref2 = /*#__PURE__*/external_react_["createElement"]("circle", {
  cx: 19.995,
  cy: 4.2,
  r: 1.922,
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var _ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M14.925 3.12H7.657c-3.012 0-4.879 2.133-4.879 5.144v8.083c0 3.011 1.83 5.135 4.879 5.135h8.604c3.011 0 4.879-2.124 4.879-5.135v-7.04",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgActivity(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", activity_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), activity_ref, _ref2, _ref3);
}

/* harmony default export */ var activity = (SvgActivity);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/add_user.svg
function add_user_extends() { add_user_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return add_user_extends.apply(this, arguments); }



var add_user_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M9.877 15.206c-3.844 0-7.127.581-7.127 2.91 0 2.326 3.262 2.93 7.127 2.93 3.844 0 7.127-.583 7.127-2.91s-3.262-2.93-7.127-2.93zM9.877 11.886a4.552 4.552 0 004.568-4.568A4.551 4.551 0 009.877 2.75 4.552 4.552 0 005.31 7.318a4.553 4.553 0 004.568 4.568z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var add_user_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M19.204 8.67v4.01M21.25 10.674h-4.09",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgAddUser(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", add_user_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), add_user_ref, add_user_ref2);
}

/* harmony default export */ var add_user = (SvgAddUser);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_down.svg
function arrow_down_extends() { arrow_down_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_down_extends.apply(this, arguments); }



var arrow_down_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M12.274 19.75v-15M18.299 13.7l-6.024 6.05L6.25 13.7",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowDown(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_down_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_down_ref);
}

/* harmony default export */ var arrow_down = (SvgArrowDown);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_down_2.svg
function arrow_down_2_extends() { arrow_down_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_down_2_extends.apply(this, arguments); }



var arrow_down_2_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M19 8.5l-7 7-7-7",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowDown2(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_down_2_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_down_2_ref);
}

/* harmony default export */ var arrow_down_2 = (SvgArrowDown2);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_down_3.svg
function arrow_down_3_extends() { arrow_down_3_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_down_3_extends.apply(this, arguments); }



var arrow_down_3_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M12.251 12.7V3.75",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var arrow_down_3_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M7.25 12.7l5.001 7.937 5.001-7.937H7.25z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowDown3(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_down_3_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_down_3_ref, arrow_down_3_ref2);
}

/* harmony default export */ var arrow_down_3 = (SvgArrowDown3);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_down_circle.svg
function arrow_down_circle_extends() { arrow_down_circle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_down_circle_extends.apply(this, arguments); }



var arrow_down_circle_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M2.75 12a9.25 9.25 0 1018.5 0 9.25 9.25 0 00-18.5 0z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var arrow_down_circle_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M8.53 10.558L12 14.044l3.471-3.486",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowDownCircle(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_down_circle_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_down_circle_ref, arrow_down_circle_ref2);
}

/* harmony default export */ var arrow_down_circle = (SvgArrowDownCircle);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_down_square.svg
function arrow_down_square_extends() { arrow_down_square_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_down_square_extends.apply(this, arguments); }



var arrow_down_square_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M7.666 21.25h8.669c3.02 0 4.915-2.139 4.915-5.166V7.916c0-3.027-1.885-5.166-4.915-5.166h-8.67c-3.03 0-4.915 2.139-4.915 5.166v8.168c0 3.027 1.886 5.166 4.916 5.166z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var arrow_down_square_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M12 16.086V7.914M15.748 12.322L12 16.086l-3.748-3.764",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowDownSquare(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_down_square_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_down_square_ref, arrow_down_square_ref2);
}

/* harmony default export */ var arrow_down_square = (SvgArrowDownSquare);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_down_carret.svg
function arrow_down_carret_extends() { arrow_down_carret_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_down_carret_extends.apply(this, arguments); }



var arrow_down_carret_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M5.286 6a1 1 0 01-1.572 0L.27 1.617A1 1 0 011.057 0h6.886a1 1 0 01.786 1.618L5.286 5.999z",
  fill: "#200E32"
});

function SvgArrowDownCarret(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_down_carret_extends({
    width: 9,
    height: 7,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_down_carret_ref);
}

/* harmony default export */ var arrow_down_carret = (SvgArrowDownCarret);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_left.svg
function arrow_left_extends() { arrow_left_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_left_extends.apply(this, arguments); }



var arrow_left_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M4.25 12.274h15M10.3 18.299l-6.05-6.024L10.3 6.25",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowLeft(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_left_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_left_ref);
}

/* harmony default export */ var arrow_left = (SvgArrowLeft);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_left_2.svg
function arrow_left_2_extends() { arrow_left_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_left_2_extends.apply(this, arguments); }



var arrow_left_2_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.5 19l-7-7 7-7",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowLeft2(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_left_2_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_left_2_ref);
}

/* harmony default export */ var arrow_left_2 = (SvgArrowLeft2);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_left_3.svg
function arrow_left_3_extends() { arrow_left_3_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_left_3_extends.apply(this, arguments); }



var arrow_left_3_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M11.3 12.251h8.95",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var arrow_left_3_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M11.3 7.25l-7.937 5.001 7.937 5.001V7.25z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowLeft3(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_left_3_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_left_3_ref, arrow_left_3_ref2);
}

/* harmony default export */ var arrow_left_3 = (SvgArrowLeft3);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_left_circle.svg
function arrow_left_circle_extends() { arrow_left_circle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_left_circle_extends.apply(this, arguments); }



var arrow_left_circle_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var arrow_left_circle_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M13.442 8.529L9.956 12l3.486 3.471",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowLeftCircle(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_left_circle_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_left_circle_ref, arrow_left_circle_ref2);
}

/* harmony default export */ var arrow_left_circle = (SvgArrowLeftCircle);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_left_square.svg
function arrow_left_square_extends() { arrow_left_square_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_left_square_extends.apply(this, arguments); }



var arrow_left_square_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M2.75 7.666v8.669c0 3.02 2.139 4.915 5.166 4.915h8.168c3.027 0 5.166-1.885 5.166-4.915v-8.67c0-3.03-2.139-4.915-5.166-4.915H7.916c-3.027 0-5.166 1.886-5.166 4.916z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var arrow_left_square_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M7.914 12h8.172M11.678 15.748L7.914 12l3.764-3.748",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowLeftSquare(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_left_square_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_left_square_ref, arrow_left_square_ref2);
}

/* harmony default export */ var arrow_left_square = (SvgArrowLeftSquare);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_right.svg
function arrow_right_extends() { arrow_right_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_right_extends.apply(this, arguments); }



var arrow_right_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M19.75 11.726h-15M13.7 5.701l6.05 6.024-6.05 6.025",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowRight(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_right_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_right_ref);
}

/* harmony default export */ var arrow_right = (SvgArrowRight);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_right_2.svg
function arrow_right_2_extends() { arrow_right_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_right_2_extends.apply(this, arguments); }



var arrow_right_2_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M8.5 5l7 7-7 7",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowRight2(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_right_2_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_right_2_ref);
}

/* harmony default export */ var arrow_right_2 = (SvgArrowRight2);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_right_3.svg
function arrow_right_3_extends() { arrow_right_3_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_right_3_extends.apply(this, arguments); }



var arrow_right_3_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M12.7 11.749H3.75",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var arrow_right_3_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12.7 16.75l7.937-5.001L12.7 6.748V16.75z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowRight3(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_right_3_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_right_3_ref, arrow_right_3_ref2);
}

/* harmony default export */ var arrow_right_3 = (SvgArrowRight3);
// EXTERNAL MODULE: ./atomic-ui/assets/images/icons/arrow_right_circle.svg
var arrow_right_circle = __webpack_require__("NxHT");

// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_right_square.svg
function arrow_right_square_extends() { arrow_right_square_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_right_square_extends.apply(this, arguments); }



var arrow_right_square_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M21.25 16.334V7.665c0-3.02-2.139-4.915-5.166-4.915H7.916c-3.027 0-5.166 1.885-5.166 4.915v8.67c0 3.03 2.139 4.915 5.166 4.915h8.168c3.027 0 5.166-1.886 5.166-4.916z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var arrow_right_square_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M16.086 12H7.914M12.322 8.252L16.086 12l-3.764 3.748",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowRightSquare(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_right_square_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_right_square_ref, arrow_right_square_ref2);
}

/* harmony default export */ var arrow_right_square = (SvgArrowRightSquare);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_up.svg
function arrow_up_extends() { arrow_up_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_up_extends.apply(this, arguments); }



var arrow_up_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M11.726 4.25v15M5.701 10.3l6.024-6.05 6.025 6.05",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowUp(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_up_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_up_ref);
}

/* harmony default export */ var arrow_up = (SvgArrowUp);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_up_2.svg
function arrow_up_2_extends() { arrow_up_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_up_2_extends.apply(this, arguments); }



var arrow_up_2_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M5 15.5l7-7 7 7",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowUp2(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_up_2_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_up_2_ref);
}

/* harmony default export */ var arrow_up_2 = (SvgArrowUp2);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_up_3.svg
function arrow_up_3_extends() { arrow_up_3_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_up_3_extends.apply(this, arguments); }



var arrow_up_3_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M11.749 11.3v8.95",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var arrow_up_3_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.75 11.3l-5.001-7.937L6.748 11.3H16.75z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowUp3(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_up_3_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_up_3_ref, arrow_up_3_ref2);
}

/* harmony default export */ var arrow_up_3 = (SvgArrowUp3);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_up_circle.svg
function arrow_up_circle_extends() { arrow_up_circle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_up_circle_extends.apply(this, arguments); }



var arrow_up_circle_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M21.25 12a9.25 9.25 0 10-18.5 0 9.25 9.25 0 0018.5 0z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var arrow_up_circle_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.47 13.442L12 9.956l-3.471 3.486",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowUpCircle(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_up_circle_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_up_circle_ref, arrow_up_circle_ref2);
}

/* harmony default export */ var arrow_up_circle = (SvgArrowUpCircle);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_up_square.svg
function arrow_up_square_extends() { arrow_up_square_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_up_square_extends.apply(this, arguments); }



var arrow_up_square_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.334 2.75H7.665c-3.02 0-4.915 2.139-4.915 5.166v8.168c0 3.027 1.885 5.166 4.915 5.166h8.67c3.03 0 4.915-2.139 4.915-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var arrow_up_square_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M12 7.914v8.172M8.252 11.678L12 7.914l3.748 3.764",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgArrowUpSquare(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_up_square_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_up_square_ref, arrow_up_square_ref2);
}

/* harmony default export */ var arrow_up_square = (SvgArrowUpSquare);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/arrow_up_carret.svg
function arrow_up_carret_extends() { arrow_up_carret_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return arrow_up_carret_extends.apply(this, arguments); }



var arrow_up_carret_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M3.714 1a1 1 0 011.572 0L8.73 5.383A1 1 0 017.943 7H1.057a1 1 0 01-.786-1.618l3.443-4.381z",
  fill: "#200E32"
});

function SvgArrowUpCarret(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", arrow_up_carret_extends({
    width: 9,
    height: 7,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), arrow_up_carret_ref);
}

/* harmony default export */ var arrow_up_carret = (SvgArrowUpCarret);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/bag.svg
function bag_extends() { bag_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return bag_extends.apply(this, arguments); }



var bag_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M7.486 21.5h8.348c3.066 0 5.419-1.108 4.75-5.565l-.777-6.041c-.412-2.225-1.831-3.076-3.076-3.076H6.553c-1.264 0-2.6.915-3.076 3.076l-.778 6.04C2.132 19.89 4.42 21.5 7.486 21.5z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var bag_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M7.349 6.598a4.32 4.32 0 014.32-4.32v0a4.32 4.32 0 014.339 4.32v0M8.704 11.102h.045M14.534 11.102h.046",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgBag(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", bag_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), bag_ref, bag_ref2);
}

/* harmony default export */ var bag = (SvgBag);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/bag_2.svg
function bag_2_extends() { bag_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return bag_2_extends.apply(this, arguments); }



var bag_2_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.773 9.305V6.273A3.772 3.772 0 0012 2.5a3.773 3.773 0 00-3.79 3.756v3.049",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var bag_2_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.742 21H7.258A4.256 4.256 0 013 16.745V11.23a4.256 4.256 0 014.258-4.255h9.484A4.256 4.256 0 0121 11.23v5.516A4.256 4.256 0 0116.742 21z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgBag2(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", bag_2_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), bag_2_ref, bag_2_ref2);
}

/* harmony default export */ var bag_2 = (SvgBag2);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/bookmark.svg
function bookmark_extends() { bookmark_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return bookmark_extends.apply(this, arguments); }



var bookmark_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M11.665 18.632L5.733 21.88a.989.989 0 01-1.318-.394v0a1.043 1.043 0 01-.119-.466V6.622c0-2.746 1.877-3.844 4.577-3.844h6.343c2.618 0 4.577 1.025 4.577 3.661v14.582a.98.98 0 01-.98.979 1.08 1.08 0 01-.476-.119l-5.967-3.25a.741.741 0 00-.705 0z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var bookmark_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M8.37 9.323h7.295",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgBookmark(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", bookmark_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), bookmark_ref, bookmark_ref2);
}

/* harmony default export */ var bookmark = (SvgBookmark);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/buy.svg
function buy_extends() { buy_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return buy_extends.apply(this, arguments); }



var buy_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M7.422 19.82a.766.766 0 010 1.53.764.764 0 110-1.53zM18.675 19.82a.766.766 0 11-.002 1.532.766.766 0 01.002-1.532z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var buy_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M2.75 3.25l2.08.36.963 11.473a1.802 1.802 0 001.797 1.653h10.912c.896 0 1.656-.658 1.785-1.546l.949-6.558a1.34 1.34 0 00-1.327-1.533H5.164M14.125 10.795h2.773",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgBuy(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", buy_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), buy_ref, buy_ref2);
}

/* harmony default export */ var buy = (SvgBuy);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/calendar.svg
function calendar_extends() { calendar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return calendar_extends.apply(this, arguments); }



var calendar_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M3.093 9.404h17.824M16.442 13.31h.01M12.005 13.31h.009M7.558 13.31h.01M16.442 17.196h.01M12.005 17.196h.009M7.558 17.196h.01M16.044 2v3.29M7.965 2v3.29",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var calendar_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.238 3.58H7.771C4.834 3.58 3 5.214 3 8.221v9.05C3 20.326 4.834 22 7.771 22h8.458C19.175 22 21 20.355 21 17.348V8.222c.01-3.007-1.816-4.643-4.762-4.643z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgCalendar(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", calendar_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), calendar_ref, calendar_ref2);
}

/* harmony default export */ var calendar = (SvgCalendar);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/call.svg
function call_extends() { call_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return call_extends.apply(this, arguments); }



var call_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M2.99 4.873c.317-.524 2.06-2.43 3.303-2.372.372.031.7.256.968.517.613.599 2.368 2.863 2.468 3.34.242 1.168-1.15 1.842-.724 3.02 1.086 2.659 2.958 4.53 5.618 5.616 1.177.427 1.851-.966 3.02-.723.475.1 2.74 1.855 3.34 2.468.26.266.485.596.516.967.046 1.31-1.977 3.077-2.371 3.303-.93.666-2.145.654-3.624-.034-4.13-1.718-10.73-8.193-12.48-12.478-.67-1.472-.716-2.694-.034-3.624z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgCall(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", call_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), call_ref);
}

/* harmony default export */ var call = (SvgCall);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/call_missed.svg
function call_missed_extends() { call_missed_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return call_missed_extends.apply(this, arguments); }



var call_missed_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M2.99 4.874c.317-.525 2.06-2.43 3.303-2.373.372.032.7.256.968.517.613.6 2.368 2.863 2.468 3.34.242 1.168-1.15 1.842-.724 3.02 1.086 2.658 2.958 4.53 5.618 5.616 1.177.427 1.851-.965 3.02-.723.475.1 2.74 1.855 3.34 2.468.26.266.485.595.516.967.046 1.31-1.977 3.077-2.371 3.303-.93.666-2.145.654-3.624-.034-4.13-1.718-10.73-8.193-12.48-12.478-.67-1.472-.716-2.694-.034-3.623z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var call_missed_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M21.25 2.75l-6 6M15.25 2.75l6 6",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgCallMissed(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", call_missed_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), call_missed_ref, call_missed_ref2);
}

/* harmony default export */ var call_missed = (SvgCallMissed);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/call_silent.svg
function call_silent_extends() { call_silent_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return call_silent_extends.apply(this, arguments); }



var call_silent_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M6.287 13.225C4.935 11.608 3.842 9.98 3.27 8.59c-.66-1.44-.7-2.63-.04-3.53.31-.51 2.01-2.37 3.22-2.31.36.03.68.25.94.5.3.29.88.99 1.39 1.67.51.68.97 1.35 1.01 1.58.24 1.14-1.12 1.8-.7 2.94.093.228.19.449.297.663M2.75 21.251l18.5-18.5M8.44 15.562c2.32 2.319 4.95 4.34 6.98 5.18 1.44.67 2.62.679 3.52.03.39-.221 2.36-1.94 2.31-3.221-.03-.36-.25-.68-.5-.94-.58-.6-2.79-2.31-3.25-2.4-1.14-.24-1.8 1.12-2.94.7-1.29-.53-2.4-1.25-3.31-2.16",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgCallSilent(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", call_silent_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), call_silent_ref);
}

/* harmony default export */ var call_silent = (SvgCallSilent);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/calling.svg
function calling_extends() { calling_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return calling_extends.apply(this, arguments); }



var calling_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M2.99 4.874c.316-.525 2.06-2.43 3.303-2.373.372.032.7.256.967.517h.001c.613.6 2.369 2.863 2.467 3.34.244 1.168-1.15 1.842-.724 3.02 1.087 2.658 2.96 4.53 5.62 5.616 1.176.427 1.85-.965 3.019-.723.476.1 2.74 1.855 3.34 2.468v0c.26.266.485.595.516.967.046 1.31-1.977 3.077-2.371 3.303-.93.666-2.145.654-3.625-.034-4.13-1.718-10.73-8.193-12.48-12.478-.669-1.472-.714-2.694-.033-3.623z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var calling_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M14.565 2.75a7.97 7.97 0 017.041 7.032M14.565 6.293a4.426 4.426 0 013.498 3.498",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgCalling(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", calling_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), calling_ref, calling_ref2);
}

/* harmony default export */ var calling = (SvgCalling);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/camera.svg
function camera_extends() { camera_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return camera_extends.apply(this, arguments); }



var camera_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M17.638 7.11v0a.962.962 0 01-.87-.551c-.287-.608-.652-1.385-.868-1.808-.32-.63-.836-.995-1.552-1H9.652c-.716.005-1.232.37-1.552 1-.215.423-.58 1.2-.867 1.808a.963.963 0 01-.87.55v0a3.612 3.612 0 00-3.613 3.613v5.936a3.613 3.613 0 003.613 3.612h11.275a3.612 3.612 0 003.612-3.612v-5.936a3.612 3.612 0 00-3.612-3.612z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var camera_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M8.821 13.335a3.19 3.19 0 003.18 3.185 3.19 3.19 0 003.177-3.178 3.186 3.186 0 00-3.175-3.19c-1.762-.002-3.196 1.454-3.182 3.183z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var camera_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M16.902 10.995a1.009 1.009 0 01-.62-.3 1.02 1.02 0 01-.282-.694c0-.137.028-.272.082-.394.055-.124.12-.229.236-.342.089-.078.18-.14.304-.195a1.023 1.023 0 011.082.215.961.961 0 01.19.262l.023.058c.055.124.083.26.083.396 0 .261-.102.503-.292.705a.996.996 0 01-.609.29L17 11l-.098-.005z",
  fill: "#200E32"
});

function SvgCamera(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", camera_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), camera_ref, camera_ref2, camera_ref3);
}

/* harmony default export */ var camera = (SvgCamera);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/category.svg
function category_extends() { category_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return category_extends.apply(this, arguments); }



var category_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.285 2h3.267A2.46 2.46 0 0122 4.47v3.294c0 1.363-1.096 2.47-2.448 2.47h-3.267a2.46 2.46 0 01-2.448-2.47V4.47A2.46 2.46 0 0116.285 2zM4.449 2h3.265a2.46 2.46 0 012.45 2.47v3.294a2.46 2.46 0 01-2.45 2.47H4.45A2.46 2.46 0 012 7.764V4.47A2.46 2.46 0 014.449 2zM4.449 13.766h3.265a2.46 2.46 0 012.45 2.47v3.294A2.46 2.46 0 017.713 22H4.45A2.46 2.46 0 012 19.53v-3.293a2.46 2.46 0 012.449-2.471zM16.285 13.766h3.267c1.352 0 2.448 1.106 2.448 2.47v3.294A2.46 2.46 0 0119.552 22h-3.267a2.46 2.46 0 01-2.448-2.47v-3.293a2.46 2.46 0 012.448-2.471z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgCategory(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", category_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), category_ref);
}

/* harmony default export */ var category = (SvgCategory);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/chart.svg
function chart_extends() { chart_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return chart_extends.apply(this, arguments); }



var chart_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M7.371 10.202v6.86M12.038 6.92v10.142M16.629 13.827v3.235",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var chart_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.686 2H7.314C4.048 2 2 4.312 2 7.585v8.83C2 19.688 4.038 22 7.314 22h9.372C19.962 22 22 19.688 22 16.415v-8.83C22 4.312 19.962 2 16.686 2z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgChart(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", chart_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), chart_ref, chart_ref2);
}

/* harmony default export */ var chart = (SvgChart);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/check.svg
function check_extends() { check_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return check_extends.apply(this, arguments); }



var check_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M4.95 10.434l-.354-.354L1.26 6.74l-.003-.002h0a.437.437 0 00-.622 0l-.002.002h0a.44.44 0 000 .63l3.994 3.997c.176.177.46.177.636 0h0L15.367 1.262 4.95 10.434zm0 0l.353-.354m-.353.354l.353-.354m0 0L14.74.632h0l.003-.002a.437.437 0 01.622 0h0M5.303 10.08L15.365.63m0 0l.002.002M15.365.63l.002.002m0 0a.44.44 0 010 .63v-.63zM1.613 6.386a.937.937 0 00-1.334 0 .94.94 0 000 1.336l3.994 3.999a.949.949 0 001.344 0L1.613 6.386z",
  stroke: "#200E32"
});

function SvgCheck(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", check_extends({
    width: 16,
    height: 12,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), check_ref);
}

/* harmony default export */ var check = (SvgCheck);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/chat.svg
function chat_extends() { chat_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return chat_extends.apply(this, arguments); }



var chat_ref = /*#__PURE__*/external_react_["createElement"]("mask", {
  id: "chat_svg__a",
  fill: "#fff"
}, /*#__PURE__*/external_react_["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6.695 12.39a1.17 1.17 0 01-1.168-1.168 1.169 1.169 0 012.337 0 1.17 1.17 0 01-1.169 1.169zm4.543 0a1.17 1.17 0 01-1.168-1.168 1.169 1.169 0 012.337 0 1.17 1.17 0 01-1.169 1.169zm3.375-1.168a1.17 1.17 0 002.337 0 1.169 1.169 0 00-2.337 0z"
}));

var chat_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M1.027 11.222a5.67 5.67 0 005.668 5.669v-9a3.33 3.33 0 013.332 3.331h-9zm5.668-5.666a5.669 5.669 0 00-5.668 5.666h9a3.331 3.331 0 01-3.332 3.334v-9zm5.669 5.666a5.669 5.669 0 00-5.669-5.666v9a3.331 3.331 0 01-3.331-3.334h9zm-5.669 5.669a5.67 5.67 0 005.669-5.669h-9a3.33 3.33 0 013.331-3.331v9zM5.57 11.222a5.67 5.67 0 005.668 5.669v-9a3.33 3.33 0 013.332 3.331h-9zm5.668-5.666a5.669 5.669 0 00-5.668 5.666h9a3.331 3.331 0 01-3.332 3.334v-9zm5.669 5.666a5.669 5.669 0 00-5.669-5.666v9a3.331 3.331 0 01-3.331-3.334h9zm-5.669 5.669a5.67 5.67 0 005.669-5.669h-9a3.33 3.33 0 013.331-3.331v9zm4.543-9a3.33 3.33 0 013.332 3.331h-9a5.67 5.67 0 005.668 5.669v-9zm-3.331 3.331a3.33 3.33 0 013.331-3.331v9a5.67 5.67 0 005.669-5.669h-9zm3.331 3.334a3.331 3.331 0 01-3.331-3.334h9a5.669 5.669 0 00-5.669-5.666v9zm3.332-3.334a3.331 3.331 0 01-3.332 3.334v-9a5.669 5.669 0 00-5.668 5.666h9z",
  fill: "#200E32",
  mask: "url(#chat_svg__a)"
});

var chat_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M11.02 1C5.21 1 1 5.746 1 11.015c0 1.682.49 3.414 1.35 4.997.16.26.18.59.07.902l-.67 2.243c-.15.541.31.94.82.78l2.02-.6c.55-.18.98.05 1.49.361C7.54 20.558 9.36 21 11 21c4.96 0 10-3.836 10-10.015C21 5.656 16.7 1 11.02 1z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgChat(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", chat_extends({
    width: 22,
    height: 22,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), chat_ref, chat_ref2, chat_ref3);
}

/* harmony default export */ var chat = (SvgChat);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/close_square.svg
function close_square_extends() { close_square_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return close_square_extends.apply(this, arguments); }



var close_square_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M14.396 9.595l-4.792 4.792M14.397 14.39L9.601 9.593",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var close_square_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.334 2.75H7.665c-3.02 0-4.915 2.14-4.915 5.166v8.168c0 3.027 1.885 5.166 4.915 5.166h8.669c3.03 0 4.916-2.139 4.916-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgCloseSquare(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", close_square_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), close_square_ref, close_square_ref2);
}

/* harmony default export */ var close_square = (SvgCloseSquare);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/danger.svg
function danger_extends() { danger_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return danger_extends.apply(this, arguments); }



var danger_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M11.25 16.27c0-.414.336-.756.75-.756s.75.33.75.745v.01a.75.75 0 01-1.5 0z",
  fill: "#200E32"
});

var danger_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M4.796 20.418h14.482a2.08 2.08 0 001.819-2.86L13.82 4.824a2.078 2.078 0 00-3.64 0L2.905 17.559a2.08 2.08 0 001.819 2.859M11.99 13.396v-3.1",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgDanger(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", danger_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), danger_ref, danger_ref2);
}

/* harmony default export */ var danger = (SvgDanger);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/delete.svg
function delete_extends() { delete_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return delete_extends.apply(this, arguments); }



var delete_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M19.325 9.468s-.543 6.735-.858 9.572c-.15 1.355-.987 2.15-2.358 2.174-2.61.047-5.221.05-7.83-.005-1.318-.027-2.141-.83-2.288-2.162-.317-2.862-.857-9.579-.857-9.579M20.708 6.24H3.75M17.44 6.24a1.648 1.648 0 01-1.614-1.324L15.583 3.7a1.28 1.28 0 00-1.237-.95h-4.233a1.28 1.28 0 00-1.237.95l-.243 1.216A1.648 1.648 0 017.018 6.24",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgDelete(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", delete_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), delete_ref);
}

/* harmony default export */ var icons_delete = (SvgDelete);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/discount.svg
function discount_extends() { discount_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return discount_extends.apply(this, arguments); }



var discount_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M4.794 7.056a2.262 2.262 0 012.261-2.262h1.03c.595 0 1.168-.236 1.592-.657l.72-.72a2.262 2.262 0 013.197-.008l.01.008.72.72c.422.42.995.657 1.592.657h1.028a2.262 2.262 0 012.262 2.262v1.027c0 .598.236 1.17.657 1.594l.72.72c.885.88.89 2.312.01 3.198l-.01.009-.72.72a2.256 2.256 0 00-.657 1.592v1.029a2.261 2.261 0 01-2.262 2.26h-1.028a2.26 2.26 0 00-1.593.659l-.72.719a2.26 2.26 0 01-3.198.009l-.009-.01-.719-.718a2.263 2.263 0 00-1.593-.658H7.055a2.261 2.261 0 01-2.26-2.261v-1.03c0-.595-.238-1.17-.659-1.591l-.719-.72a2.26 2.26 0 01-.009-3.198l.01-.01.718-.72c.421-.423.658-.995.658-1.593V7.056M9.43 14.57l5.14-5.14",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var discount_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M14.567 15.322a.75.75 0 01-.53-.22.821.821 0 01-.16-.25.717.717 0 010-.57c.04-.09.09-.17.16-.24.28-.28.78-.28 1.06 0 .07.07.13.15.17.24.03.09.05.19.05.29 0 .101-.02.19-.05.28-.04.09-.1.18-.17.25a.75.75 0 01-.53.22zM9.427 10.183c-.1 0-.19-.021-.28-.061a.818.818 0 01-.25-.16.963.963 0 01-.16-.25.714.714 0 010-.57c.04-.09.09-.18.16-.24a.772.772 0 011.06 0c.14.14.22.33.22.53 0 .1-.01.19-.05.28-.04.09-.1.17-.17.25a.773.773 0 01-.53.22z",
  fill: "#200E32"
});

function SvgDiscount(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", discount_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), discount_ref, discount_ref2);
}

/* harmony default export */ var discount = (SvgDiscount);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/discovery.svg
function discovery_extends() { discovery_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return discovery_extends.apply(this, arguments); }



var discovery_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M8.27 14.952l1.593-5.09 5.089-1.592-1.593 5.09-5.089 1.592z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var discovery_ref2 = /*#__PURE__*/external_react_["createElement"]("circle", {
  cx: 11.611,
  cy: 11.611,
  r: 9.611,
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgDiscovery(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", discovery_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), discovery_ref, discovery_ref2);
}

/* harmony default export */ var discovery = (SvgDiscovery);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/document.svg
function document_extends() { document_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return document_extends.apply(this, arguments); }



var document_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.716 16.223h-7.22M15.716 12.037h-7.22M11.251 7.86H8.496",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var document_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M15.909 2.75l-7.69.004c-2.76.017-4.468 1.833-4.468 4.603v9.196c0 2.784 1.722 4.607 4.506 4.607l7.689-.003c2.76-.017 4.47-1.834 4.47-4.604V7.357c0-2.784-1.723-4.607-4.507-4.607z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgDocument(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", document_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), document_ref, document_ref2);
}

/* harmony default export */ var icons_document = (SvgDocument);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/download.svg
function download_extends() { download_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return download_extends.apply(this, arguments); }



var download_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M12.122 15.436V3.396M15.038 12.508l-2.916 2.928-2.916-2.928",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var download_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M16.755 8.128h.933a3.684 3.684 0 013.684 3.685v4.884a3.675 3.675 0 01-3.675 3.675H6.557a3.685 3.685 0 01-3.685-3.685v-4.885a3.675 3.675 0 013.675-3.674h.942",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgDownload(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", download_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), download_ref, download_ref2);
}

/* harmony default export */ var download = (SvgDownload);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/edit.svg
function edit_extends() { edit_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return edit_extends.apply(this, arguments); }



var edit_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M13.7 19.898h6.377",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var edit_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12.855 4.956c.737-.94 1.928-.89 2.868-.153l1.39 1.09c.94.737 1.273 1.88.536 2.82L9.359 19.29a1.48 1.48 0 01-1.15.568l-3.196.04-.724-3.114c-.102-.437 0-.897.277-1.252l8.289-10.575z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var edit_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M11.303 6.936l4.794 3.758",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgEdit(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", edit_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), edit_ref, edit_ref2, edit_ref3);
}

/* harmony default export */ var edit = (SvgEdit);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/edit_square.svg
function edit_square_extends() { edit_square_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return edit_square_extends.apply(this, arguments); }



var edit_square_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M11.492 2.789H7.753c-3.075 0-5.003 2.177-5.003 5.259v8.314c0 3.082 1.92 5.259 5.003 5.259h8.824c3.085 0 5.004-2.177 5.004-5.259v-4.028",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var edit_square_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M8.828 10.92L16.3 3.449c.93-.93 2.44-.93 3.37 0l1.218 1.217a2.383 2.383 0 010 3.37l-7.51 7.51a2.17 2.17 0 01-1.534.636H8.099l.094-3.78a2.17 2.17 0 01.635-1.48z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var edit_square_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.165 4.603l4.566 4.566",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgEditSquare(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", edit_square_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), edit_square_ref, edit_square_ref2, edit_square_ref3);
}

/* harmony default export */ var edit_square = (SvgEditSquare);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/facebook.svg
function facebook_extends() { facebook_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return facebook_extends.apply(this, arguments); }



var facebook_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M17 2.819C17 1.32 15.679 0 14.181 0H2.82C1.32 0 0 1.321 0 2.819V14.18C0 15.68 1.321 17 2.819 17h5.725v-6.43H6.43V7.75h2.114V6.606c0-1.938 1.41-3.611 3.171-3.611h2.29v2.818h-2.29c-.264 0-.528.265-.528.793v1.145h2.818v2.819h-2.819V17h2.995C15.68 17 17 15.679 17 14.181V2.82z",
  fill: "#200E32"
});

function SvgFacebook(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", facebook_extends({
    width: 17,
    height: 17,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), facebook_ref);
}

/* harmony default export */ var facebook = (SvgFacebook);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/filter.svg
function filter_extends() { filter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return filter_extends.apply(this, arguments); }



var filter_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M10.117 17.987H2.883",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var filter_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M21.118 17.987a2.88 2.88 0 11-5.76 0 2.88 2.88 0 015.76 0z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var filter_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M13.883 6.262h7.235",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var _ref4 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M2.883 6.262a2.88 2.88 0 105.76 0 2.88 2.88 0 10-5.76 0z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgFilter(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", filter_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), filter_ref, filter_ref2, filter_ref3, _ref4);
}

/* harmony default export */ var filter = (SvgFilter);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/filter_2.svg
function filter_2_extends() { filter_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return filter_2_extends.apply(this, arguments); }



var filter_2_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M9.293 22l4.777-2.248V13.86l7.49-7.595c.282-.285.44-.676.44-1.085V3.518C22 2.678 21.342 2 20.53 2H3.47C2.658 2 2 2.679 2 3.518v1.7c0 .386.142.757.397 1.038l6.896 7.604V22z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgFilter2(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", filter_2_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), filter_2_ref);
}

/* harmony default export */ var filter_2 = (SvgFilter2);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/folder.svg
function folder_extends() { folder_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return folder_extends.apply(this, arguments); }



var folder_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M21.445 15.758c0 3.578-2.109 5.687-5.687 5.687H7.972c-3.588 0-5.696-2.109-5.696-5.687V7.963c0-3.579 1.314-5.687 4.892-5.687h2c.718 0 1.394.338 1.825.913l.913 1.214a2.291 2.291 0 001.825.912h2.83c3.587 0 4.911 1.826 4.911 5.477l-.027 4.966z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var folder_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M7.059 14.49h9.593",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgFolder(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", folder_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), folder_ref, folder_ref2);
}

/* harmony default export */ var folder = (SvgFolder);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/flag.svg
function flag_extends() { flag_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return flag_extends.apply(this, arguments); }



var flag_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M11.845 3.118a1 1 0 01-.98-.803l-.094-.468A1.062 1.062 0 009.725 1H2.067C1.48 1 1 1.476 1 2.059V17.94C1 18.523 1.48 19 2.067 19c.586 0 1.066-.477 1.066-1.059v-5.353a1 1 0 011-1h4.155a1 1 0 01.98.803l.095.468c.096.498.533.847 1.045.847h5.525c.587 0 1.067-.477 1.067-1.059v-8.47c0-.583-.48-1.06-1.067-1.06h-4.088z",
  stroke: "#200E32",
  strokeWidth: 1.45
});

function SvgFlag(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", flag_extends({
    width: 18,
    height: 20,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), flag_ref);
}

/* harmony default export */ var flag = (SvgFlag);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/game.svg
function game_extends() { game_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return game_extends.apply(this, arguments); }



var game_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M8.848 12.314v3.745M10.759 14.187H6.938M15.366 12.428h-.107M17.18 16.003h-.107M8.072 2c0 .74.613 1.34 1.368 1.34h1.057c1.165.005 2.11.93 2.115 2.073v.675",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var game_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.428 21.963c-3.005.05-5.955.048-8.855 0C4.353 21.963 2 19.666 2 16.51v-4.65c0-3.154 2.354-5.45 5.573-5.45 2.916-.05 5.868-.05 8.855 0 3.22 0 5.572 2.297 5.572 5.45v4.65c0 3.155-2.352 5.452-5.572 5.452z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgGame(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", game_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), game_ref, game_ref2);
}

/* harmony default export */ var game = (SvgGame);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/graph.svg
function graph_extends() { graph_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return graph_extends.apply(this, arguments); }



var graph_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M21.524 9.753a8.311 8.311 0 00-7.963-6.975.714.714 0 00-.742.687v.064l.449 6.709c.03.452.417.795.87.769l6.727-.449a.714.714 0 00.659-.769v-.036z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var graph_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M8.902 6.769a.915.915 0 011.043.522.824.824 0 01.082.302c.092 1.3.284 4.146.394 5.684a1.043 1.043 0 001.117.97v0l5.647-.348a.916.916 0 01.97.916v0A7.698 7.698 0 013.73 18.009a7.323 7.323 0 01-.915-2.8 4.725 4.725 0 01-.055-.916 7.707 7.707 0 016.132-7.524",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgGraph(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", graph_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), graph_ref, graph_ref2);
}

/* harmony default export */ var graph = (SvgGraph);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/google.svg
function google_extends() { google_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return google_extends.apply(this, arguments); }



var google_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M9.342 7.442V11.4h5.383c-.792 2.137-2.85 3.563-5.225 3.563A5.508 5.508 0 013.958 9.42 5.508 5.508 0 019.5 3.879c1.188 0 2.296.396 3.246 1.03l.316.237 2.376-3.088-.317-.237C13.458.633 11.558 0 9.5 0 4.275 0 0 4.275 0 9.5S4.275 19 9.5 19 19 14.725 19 9.5V7.52H9.342v-.078z",
  fill: "#200E32"
});

function SvgGoogle(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", google_extends({
    width: 19,
    height: 19,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), google_ref);
}

/* harmony default export */ var google = (SvgGoogle);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/heart.svg
function heart_extends() { heart_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return heart_extends.apply(this, arguments); }



var heart_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M11.761 20.854a34.845 34.845 0 01-6.022-4.689 11.99 11.99 0 01-2.866-4.57c-1.076-3.345.18-7.174 3.698-8.307a5.978 5.978 0 015.425.913 5.987 5.987 0 015.425-.913c3.517 1.133 4.783 4.962 3.707 8.307a11.99 11.99 0 01-2.866 4.57 34.844 34.844 0 01-6.022 4.689l-.235.146-.244-.146z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var heart_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.74 7.053a2.782 2.782 0 011.916 2.422",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgHeart(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", heart_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), heart_ref, heart_ref2);
}

/* harmony default export */ var heart = (SvgHeart);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/hide.svg
function hide_extends() { hide_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return hide_extends.apply(this, arguments); }



var hide_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M9.76 14.367a3.123 3.123 0 01-.924-2.23A3.16 3.16 0 0112 8.973c.867 0 1.665.35 2.23.925M15.105 12.699a3.158 3.158 0 01-2.537 2.542",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var hide_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M6.655 17.472c-1.587-1.246-2.931-3.066-3.905-5.335.984-2.279 2.337-4.109 3.934-5.365C8.27 5.516 10.102 4.834 12 4.834c1.909 0 3.739.692 5.336 1.957M19.448 8.99a15.359 15.359 0 011.802 3.147c-1.967 4.557-5.443 7.302-9.25 7.302-.863 0-1.714-.14-2.532-.413M19.887 4.25L4.113 20.024",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgHide(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", hide_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), hide_ref, hide_ref2);
}

/* harmony default export */ var hide = (SvgHide);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/home.svg
function home_extends() { home_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return home_extends.apply(this, arguments); }



var home_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M9.157 20.771v-3.066c0-.78.636-1.414 1.424-1.42h2.886c.792 0 1.433.636 1.433 1.42v3.076c0 .662.534 1.204 1.203 1.219h1.924c1.918 0 3.473-1.54 3.473-3.438v0-8.724a2.44 2.44 0 00-.962-1.905l-6.58-5.248a3.18 3.18 0 00-3.945 0L3.462 7.943A2.42 2.42 0 002.5 9.847v8.715C2.5 20.46 4.055 22 5.973 22h1.924c.685 0 1.241-.55 1.241-1.229v0",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgHome(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", home_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), home_ref);
}

/* harmony default export */ var home = (SvgHome);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/image.svg
function image_extends() { image_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return image_extends.apply(this, arguments); }



var image_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M21.21 7.9v8.15c0 3.02-1.89 5.15-4.91 5.15H7.65c-3.02 0-4.9-2.13-4.9-5.15V7.9c0-3.02 1.89-5.15 4.9-5.15h8.65c3.02 0 4.91 2.13 4.91 5.15z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var image_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M5.281 16.432l1.53-1.613a1.405 1.405 0 012.031-.008l.885.903c.597.61 1.59.565 2.131-.094l2.23-2.71a1.687 1.687 0 012.514-.105l2.076 2.142",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var image_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M10.313 9.134a1.754 1.754 0 11-3.506 0 1.754 1.754 0 013.506 0z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgImage(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", image_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), image_ref, image_ref2, image_ref3);
}

/* harmony default export */ var icons_image = (SvgImage);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/image_2.svg
function image_2_extends() { image_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return image_2_extends.apply(this, arguments); }



var image_2_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.303 2.75H7.654C4.64 2.75 2.75 4.884 2.75 7.904v8.15c0 3.02 1.881 5.153 4.904 5.153h8.648c3.024 0 4.905-2.134 4.905-5.154V7.904c0-3.02-1.88-5.154-4.904-5.154z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var image_2_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M10.703 8.786a1.847 1.847 0 11-3.693-.002 1.847 1.847 0 013.693.002z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var image_2_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M21.207 14.95c-.994-.864-1.86-1.905-3-2.592-1.141-.688-2.368-.264-3.16.761-.765.992-1.243 2.325-2.398 2.95-1.423.77-2.26-.472-3.446-.97-1.325-.556-2.331.442-3.105 1.401-.775.96-1.56 1.91-2.348 2.86",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgImage2(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", image_2_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), image_2_ref, image_2_ref2, image_2_ref3);
}

/* harmony default export */ var image_2 = (SvgImage2);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/info_circle.svg
function info_circle_extends() { info_circle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return info_circle_extends.apply(this, arguments); }



var info_circle_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12 2.75a9.25 9.25 0 110 18.5 9.25 9.25 0 010-18.5z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var info_circle_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M11.995 8.204v4.42M11.995 15.796h.01",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgInfoCircle(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", info_circle_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), info_circle_ref, info_circle_ref2);
}

/* harmony default export */ var info_circle = (SvgInfoCircle);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/info_square.svg
function info_square_extends() { info_square_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return info_square_extends.apply(this, arguments); }



var info_square_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M11.99 15.796v-4.419M11.99 8.204H12",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var info_square_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.335 2.75h-8.67c-3.02 0-4.914 2.14-4.914 5.166v8.168c0 3.027 1.885 5.166 4.915 5.166h8.668c3.03 0 4.917-2.139 4.917-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgInfoSquare(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", info_square_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), info_square_ref, info_square_ref2);
}

/* harmony default export */ var info_square = (SvgInfoSquare);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/link.svg
function link_extends() { link_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return link_extends.apply(this, arguments); }



var link_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M5.017 8.006a.706.706 0 01-.996 0 .706.706 0 010-.996L7.01 4.02a.706.706 0 01.996 0 .706.706 0 010 .997l-2.989 2.99zm1.803.319a.698.698 0 00-.308.18L5.017 9.999a2.12 2.12 0 01-2.99 0 2.12 2.12 0 010-2.989l1.495-1.495a.712.712 0 000-.996.707.707 0 00-.996 0L1.031 6.014a3.524 3.524 0 000 4.982 3.524 3.524 0 004.983 0L7.508 9.5a.707.707 0 00-.265-1.163.712.712 0 00-.423-.013zM4.353 3.257a.698.698 0 00.43.432.712.712 0 00.732-.167L7.01 2.028a2.12 2.12 0 012.99 0 2.12 2.12 0 010 2.99L8.504 6.511a.712.712 0 000 .996.707.707 0 00.996 0l1.495-1.494a3.524 3.524 0 000-4.983 3.524 3.524 0 00-4.982 0L4.519 2.526a.707.707 0 00-.166.731z",
  fill: "#200E32"
});

function SvgLink(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", link_extends({
    width: 13,
    height: 13,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), link_ref);
}

/* harmony default export */ var icons_link = (SvgLink);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/location.svg
function location_extends() { location_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return location_extends.apply(this, arguments); }



var location_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M4.24 10.391a7.678 7.678 0 1115.356.053v.086c-.052 2.757-1.592 5.305-3.479 7.296a20.187 20.187 0 01-3.59 2.957.93.93 0 01-1.218 0 19.82 19.82 0 01-5.052-4.73 9.826 9.826 0 01-2.018-5.636v-.026z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var location_ref2 = /*#__PURE__*/external_react_["createElement"]("circle", {
  cx: 11.917,
  cy: 10.539,
  r: 2.461,
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgLocation(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", location_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), location_ref, location_ref2);
}

/* harmony default export */ var icons_location = (SvgLocation);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/lock.svg
function lock_extends() { lock_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return lock_extends.apply(this, arguments); }



var lock_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M16.423 9.448V7.3a4.552 4.552 0 00-4.55-4.551 4.55 4.55 0 00-4.57 4.53v2.168",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var lock_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M15.683 21.25h-7.64a3.792 3.792 0 01-3.793-3.792v-4.29a3.792 3.792 0 013.792-3.791h7.641a3.792 3.792 0 013.792 3.792v4.289a3.792 3.792 0 01-3.792 3.792z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var lock_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M11.863 14.203v2.22",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgLock(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", lock_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), lock_ref, lock_ref2, lock_ref3);
}

/* harmony default export */ var lock = (SvgLock);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/login.svg
function login_extends() { login_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return login_extends.apply(this, arguments); }



var login_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.813 12.022H3.77M12.885 9.106l2.928 2.916-2.928 2.916",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var login_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M8.504 7.389v-.933a3.684 3.684 0 013.685-3.684h4.884a3.675 3.675 0 013.675 3.675v11.14a3.685 3.685 0 01-3.685 3.685h-4.885a3.675 3.675 0 01-3.674-3.675v-.942",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgLogin(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", login_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), login_ref, login_ref2);
}

/* harmony default export */ var login = (SvgLogin);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/logout.svg
function logout_extends() { logout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return logout_extends.apply(this, arguments); }



var logout_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.016 7.39v-.933a3.685 3.685 0 00-3.685-3.685H6.456a3.685 3.685 0 00-3.684 3.685v11.13a3.685 3.685 0 003.684 3.684h4.885a3.675 3.675 0 003.675-3.674v-.943M21.81 12.021H9.768M18.881 9.106l2.928 2.915-2.928 2.916",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgLogout(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", logout_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), logout_ref);
}

/* harmony default export */ var logout = (SvgLogout);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/menu.svg
function menu_extends() { menu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return menu_extends.apply(this, arguments); }



var menu_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15 1.167H.833a.333.333 0 010-.667H15a.333.333 0 010 .667zM15 7.833H.833a.333.333 0 010-.667H15a.333.333 0 010 .667zM15 14.5H.833a.333.333 0 010-.666H15a.333.333 0 110 .666z",
  stroke: "#200E32",
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgMenu(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", menu_extends({
    width: 16,
    height: 15,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), menu_ref);
}

/* harmony default export */ var menu = (SvgMenu);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/message.svg
function message_extends() { message_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return message_extends.apply(this, arguments); }



var message_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M17.268 9.061l-4.266 3.434a2.223 2.223 0 01-2.746 0L5.954 9.061",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var message_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M6.888 3.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 011.326 3.704v6.528a5.017 5.017 0 01-1.326 3.704 4.957 4.957 0 01-3.58 1.59H6.888C3.968 20.616 2 18.241 2 15.322V8.794C2 5.875 3.968 3.5 6.888 3.5z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgMessage(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", message_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), message_ref, message_ref2);
}

/* harmony default export */ var message = (SvgMessage);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/more_circle.svg
function more_circle_extends() { more_circle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return more_circle_extends.apply(this, arguments); }



var more_circle_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12 2.75A9.25 9.25 0 1112 21.252 9.25 9.25 0 0112 2.75z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var more_circle_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M7.52 13.197a1.199 1.199 0 010-2.395 1.199 1.199 0 010 2.395zM12 13.197a1.199 1.199 0 010-2.395 1.199 1.199 0 010 2.395zM16.48 13.197a1.199 1.199 0 010-2.395 1.199 1.199 0 010 2.395z",
  fill: "#200E32"
});

function SvgMoreCircle(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", more_circle_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), more_circle_ref, more_circle_ref2);
}

/* harmony default export */ var more_circle = (SvgMoreCircle);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/more_square.svg
function more_square_extends() { more_square_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return more_square_extends.apply(this, arguments); }



var more_square_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.335 2.75h-8.67c-3.02 0-4.914 2.14-4.914 5.166v8.168c0 3.027 1.884 5.166 4.915 5.166h8.668c3.03 0 4.917-2.139 4.917-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var more_square_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M7.52 13.197a1.199 1.199 0 010-2.395 1.199 1.199 0 010 2.395zM12 13.197a1.199 1.199 0 010-2.395 1.199 1.199 0 010 2.395zM16.48 13.197a1.199 1.199 0 010-2.395 1.199 1.199 0 010 2.395z",
  fill: "#200E32"
});

function SvgMoreSquare(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", more_square_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), more_square_ref, more_square_ref2);
}

/* harmony default export */ var more_square = (SvgMoreSquare);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/notification.svg
function notification_extends() { notification_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return notification_extends.apply(this, arguments); }



var notification_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M3.5 13.787v-.219a3.6 3.6 0 01.602-1.818 4.87 4.87 0 001.194-2.314c0-.666 0-1.342.058-2.009C5.654 4.218 8.827 2 11.96 2h.078c3.133 0 6.306 2.218 6.617 5.427.058.667 0 1.343.048 2.009a4.955 4.955 0 001.193 2.323c.365.538.573 1.164.602 1.81v.209c.022.87-.278 1.719-.844 2.39a4.505 4.505 0 01-2.853 1.37c-3.195.343-6.419.343-9.614 0a4.554 4.554 0 01-2.853-1.37 3.604 3.604 0 01-.834-2.38z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var notification_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M9.555 20.852a3.088 3.088 0 004.288.505c.196-.146.372-.316.524-.505",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgNotification(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", notification_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), notification_ref, notification_ref2);
}

/* harmony default export */ var notification = (SvgNotification);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/paper.svg
function paper_extends() { paper_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return paper_extends.apply(this, arguments); }



var paper_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M14.737 2.762H8.084c-2.06 0-3.834 1.669-3.834 3.729v10.713c0 2.176 1.659 3.91 3.834 3.91h7.989c2.06 0 3.729-1.85 3.729-3.91V8.038l-5.065-5.276z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var paper_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M14.474 2.75v2.91a2.574 2.574 0 002.568 2.574c1.317.003 2.664.004 2.755-.002M14.284 15.558H8.887M12.242 10.606H8.887",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgPaper(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", paper_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), paper_ref, paper_ref2);
}

/* harmony default export */ var paper = (SvgPaper);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/paper_download.svg
function paper_download_extends() { paper_download_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return paper_download_extends.apply(this, arguments); }



var paper_download_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M14.736 2.762H8.084C6.025 2.762 4.25 4.43 4.25 6.49v10.737c0 2.176 1.658 3.887 3.834 3.887h7.988c2.06 0 3.73-1.827 3.73-3.887v-9.19l-5.066-5.276z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var paper_download_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M14.474 2.75v2.91a2.575 2.575 0 002.569 2.574c1.316.003 2.663.004 2.754-.002M11.64 16.014V9.44M8.802 13.163l2.838 2.851 2.84-2.85",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgPaperDownload(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", paper_download_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), paper_download_ref, paper_download_ref2);
}

/* harmony default export */ var paper_download = (SvgPaperDownload);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/paper_fail.svg
function paper_fail_extends() { paper_fail_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return paper_fail_extends.apply(this, arguments); }



var paper_fail_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M14.737 2.762H7.979a3.729 3.729 0 00-3.73 3.729V17.34c0 2.176 1.765 3.775 3.94 3.775h7.884c2.06 0 3.729-1.715 3.729-3.775V8.038l-5.065-5.276z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var paper_fail_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M14.474 2.75v2.91a2.574 2.574 0 002.568 2.574c1.317.003 2.664.004 2.755-.002M13.576 14.648l-3.466-3.466M10.11 14.648l3.467-3.466",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgPaperFail(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", paper_fail_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), paper_fail_ref, paper_fail_ref2);
}

/* harmony default export */ var paper_fail = (SvgPaperFail);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/paper_negative.svg
function paper_negative_extends() { paper_negative_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return paper_negative_extends.apply(this, arguments); }



var paper_negative_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M14.736 2.762H8.084c-2.06 0-3.834 1.669-3.834 3.729V17.34c0 2.176 1.658 3.775 3.834 3.775h7.989c2.06 0 3.73-1.715 3.73-3.775V8.038l-5.067-5.276z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var paper_negative_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M14.474 2.75v2.91a2.575 2.575 0 002.569 2.574c1.316.003 2.663.004 2.754-.002M14.294 13.747h-4.9",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgPaperNegative(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", paper_negative_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), paper_negative_ref, paper_negative_ref2);
}

/* harmony default export */ var paper_negative = (SvgPaperNegative);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/paper_plus.svg
function paper_plus_extends() { paper_plus_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return paper_plus_extends.apply(this, arguments); }



var paper_plus_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M14.736 2.762H8.084C6.025 2.762 4.25 4.43 4.25 6.49V17.34c0 2.176 1.658 3.775 3.834 3.775h7.988c2.06 0 3.73-1.715 3.73-3.775V8.038l-5.066-5.276z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var paper_plus_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M14.474 2.75v2.91a2.575 2.575 0 002.569 2.574c1.316.003 2.663.004 2.754-.002M14.294 12.914h-4.9M11.844 15.365v-4.9",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgPaperPlus(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", paper_plus_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), paper_plus_ref, paper_plus_ref2);
}

/* harmony default export */ var paper_plus = (SvgPaperPlus);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/paper_upload.svg
function paper_upload_extends() { paper_upload_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return paper_upload_extends.apply(this, arguments); }



var paper_upload_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M14.736 2.762H8.084C6.025 2.762 4.25 4.43 4.25 6.49v10.737c0 2.176 1.658 3.887 3.834 3.887h7.988c2.06 0 3.73-1.827 3.73-3.887v-9.19l-5.066-5.276z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var paper_upload_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M14.474 2.75v2.91a2.575 2.575 0 002.569 2.574c1.316.003 2.663.004 2.754-.002M11.64 9.44v6.574M8.802 12.291l2.838-2.85 2.84 2.85",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgPaperUpload(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", paper_upload_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), paper_upload_ref, paper_upload_ref2);
}

/* harmony default export */ var paper_upload = (SvgPaperUpload);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/password.svg
function password_extends() { password_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return password_extends.apply(this, arguments); }



var password_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.334 2.75H7.665c-3.02 0-4.915 2.14-4.915 5.166v8.168c0 3.027 1.885 5.166 4.915 5.166h8.668c3.031 0 4.917-2.139 4.917-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var password_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M10.692 12a1.852 1.852 0 11-3.705 0 1.852 1.852 0 013.705 0z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var password_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M10.692 12h6.318v1.852M14.182 13.852V12",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgPassword(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", password_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), password_ref, password_ref2, password_ref3);
}

/* harmony default export */ var icons_password = (SvgPassword);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/play.svg
function play_extends() { play_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return play_extends.apply(this, arguments); }



var play_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var play_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M15.05 12.467c-.729.786-2.713 2.116-3.728 2.543-.162.068-.575.212-.664.214a.504.504 0 01-.459-.27c-.034-.066-.134-.497-.166-.69-.095-.583-.144-1.49-.143-2.402 0-.957.052-1.907.158-2.485.028-.156.11-.515.134-.573a.498.498 0 01.226-.246.494.494 0 01.25-.06c.09.002.451.129.575.178.978.38 3.047 1.758 3.807 2.568.068.073.255.269.286.309a.497.497 0 01.011.602c-.033.045-.224.245-.287.312z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgPlay(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", play_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), play_ref, play_ref2);
}

/* harmony default export */ var play = (SvgPlay);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/plus.svg
function plus_extends() { plus_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return plus_extends.apply(this, arguments); }



var plus_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M12 8.327v7.327M15.667 11.99H8.333",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var plus_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.686 2H7.314C4.048 2 2 4.312 2 7.585v8.83C2 19.688 4.038 22 7.314 22h9.372C19.962 22 22 19.688 22 16.415v-8.83C22 4.312 19.962 2 16.686 2z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgPlus(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", plus_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), plus_ref, plus_ref2);
}

/* harmony default export */ var plus = (SvgPlus);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/profile.svg
function profile_extends() { profile_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return profile_extends.apply(this, arguments); }



var profile_ref = /*#__PURE__*/external_react_["createElement"]("circle", {
  cx: 11.579,
  cy: 7.278,
  r: 4.778,
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var profile_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M4 18.701a2.215 2.215 0 01.22-.97c.457-.915 1.748-1.4 2.819-1.62a16.778 16.778 0 012.343-.33 25.04 25.04 0 014.385 0c.787.056 1.57.166 2.343.33 1.07.22 2.361.659 2.82 1.62a2.27 2.27 0 010 1.95c-.459.96-1.75 1.4-2.82 1.61-.772.172-1.555.286-2.343.34-1.188.1-2.38.118-3.57.054-.275 0-.54 0-.815-.055a15.417 15.417 0 01-2.334-.338c-1.08-.21-2.361-.65-2.828-1.611A2.28 2.28 0 014 18.7z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgProfile(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", profile_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), profile_ref, profile_ref2);
}

/* harmony default export */ var profile = (SvgProfile);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/scan.svg
function scan_extends() { scan_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return scan_extends.apply(this, arguments); }



var scan_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M22.631 13.014H1.5M20.75 8.778V6.825A3.335 3.335 0 0017.425 3.5h-1.644M3.382 8.778V6.82a3.32 3.32 0 013.316-3.32l1.68-.001M20.75 13.014v4.531a3.335 3.335 0 01-3.325 3.325h-1.644M3.382 13.014v4.535a3.32 3.32 0 003.316 3.32l1.68.002",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgScan(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", scan_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), scan_ref);
}

/* harmony default export */ var scan = (SvgScan);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/search.svg
function search_extends() { search_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return search_extends.apply(this, arguments); }



var search_ref = /*#__PURE__*/external_react_["createElement"]("circle", {
  cx: 11.767,
  cy: 11.767,
  r: 8.989,
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var search_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M18.018 18.485L21.542 22",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgSearch(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", search_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), search_ref, search_ref2);
}

/* harmony default export */ var search = (SvgSearch);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/send.svg
function send_extends() { send_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return send_extends.apply(this, arguments); }



var send_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.855 8.121l-5.663 5.702L3.56 9.74c-.87-.534-.693-1.854.286-2.138l15.655-4.556c.89-.257 1.714.577 1.447 1.472l-4.645 15.64c-.291.978-1.596 1.147-2.123.274l-3.99-6.61",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgSend(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", send_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), send_ref);
}

/* harmony default export */ var send = (SvgSend);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/setting.svg
function setting_extends() { setting_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return setting_extends.apply(this, arguments); }



var setting_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M20.807 7.624l-.623-1.08a1.913 1.913 0 00-2.608-.705v0a1.904 1.904 0 01-2.61-.678 1.832 1.832 0 01-.255-.915v0a1.913 1.913 0 00-1.914-1.968h-1.254A1.904 1.904 0 009.64 4.191v0a1.913 1.913 0 01-1.913 1.886 1.83 1.83 0 01-.916-.257v0a1.913 1.913 0 00-2.608.705l-.669 1.099a1.913 1.913 0 00.696 2.608v0a1.913 1.913 0 010 3.314v0a1.904 1.904 0 00-.696 2.6v0l.632 1.089a1.913 1.913 0 002.609.741v0a1.894 1.894 0 012.6.696c.164.277.252.593.255.915v0c0 1.056.857 1.913 1.913 1.913h1.255c1.053 0 1.908-.85 1.912-1.904v0a1.904 1.904 0 011.914-1.913c.321.009.636.097.915.256v0a1.913 1.913 0 002.609-.695v0l.659-1.099a1.904 1.904 0 00-.696-2.608v0a1.904 1.904 0 01-.696-2.61c.166-.289.406-.529.696-.695v0a1.913 1.913 0 00.696-2.6v0-.008z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var setting_ref2 = /*#__PURE__*/external_react_["createElement"]("circle", {
  cx: 12.175,
  cy: 11.889,
  r: 2.636,
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgSetting(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", setting_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), setting_ref, setting_ref2);
}

/* harmony default export */ var setting = (SvgSetting);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/shield_done.svg
function shield_done_extends() { shield_done_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return shield_done_extends.apply(this, arguments); }



var shield_done_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M18.865 5.124c.437.153.729.565.729 1.028v6.773c0 1.893-.688 3.7-1.903 5.1-.611.705-1.384 1.254-2.205 1.698l-3.558 1.922-3.564-1.923c-.822-.444-1.596-.992-2.208-1.698A7.783 7.783 0 014.25 12.92V6.15c0-.462.292-.874.729-1.027l6.582-2.313a1.09 1.09 0 01.722 0l6.582 2.313z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var shield_done_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M9.323 11.918l1.891 1.893 3.899-3.898",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgShieldDone(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", shield_done_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), shield_done_ref, shield_done_ref2);
}

/* harmony default export */ var shield_done = (SvgShieldDone);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/shield_fail.svg
function shield_fail_extends() { shield_fail_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return shield_fail_extends.apply(this, arguments); }



var shield_fail_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M18.865 5.124c.437.153.73.565.73 1.028v6.773c0 1.893-.69 3.7-1.904 5.1-.612.705-1.384 1.254-2.205 1.698l-3.558 1.922-3.564-1.923c-.823-.444-1.596-.992-2.208-1.698A7.783 7.783 0 014.25 12.92V6.15c0-.462.292-.874.73-1.027L11.56 2.81a1.09 1.09 0 01.722 0l6.582 2.313z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var shield_fail_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M13.801 13.846l-3.758-3.758M10.043 13.846l3.758-3.758",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgShieldFail(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", shield_fail_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), shield_fail_ref, shield_fail_ref2);
}

/* harmony default export */ var shield_fail = (SvgShieldFail);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/show.svg
function show_extends() { show_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return show_extends.apply(this, arguments); }



var show_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M15.162 12.053a3.162 3.162 0 11-6.324-.001 3.162 3.162 0 016.324.001z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var show_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M11.998 19.355c3.808 0 7.291-2.738 9.252-7.302-1.961-4.564-5.444-7.302-9.252-7.302h.004c-3.808 0-7.291 2.738-9.252 7.302 1.961 4.564 5.444 7.302 9.252 7.302h-.004z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgShow(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", show_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), show_ref, show_ref2);
}

/* harmony default export */ var show = (SvgShow);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/star.svg
function star_extends() { star_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return star_extends.apply(this, arguments); }



var star_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12.714 3.44L15.03 8.1c.116.235.34.399.6.437l5.185.749c.21.028.4.138.528.306a.77.77 0 01-.085 1.032L17.5 14.258a.762.762 0 00-.226.7l.9 5.129a.787.787 0 01-.652.892.868.868 0 01-.516-.08l-4.618-2.421a.776.776 0 00-.742 0l-4.652 2.434a.812.812 0 01-1.077-.33.796.796 0 01-.08-.5l.9-5.128a.788.788 0 00-.227-.7L2.732 10.62a.785.785 0 01-.003-1.112l.003-.004a.91.91 0 01.452-.222l5.186-.75a.812.812 0 00.6-.437l2.314-4.655a.787.787 0 01.458-.4.798.798 0 01.61.044.82.82 0 01.362.356z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgStar(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", star_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), star_ref);
}

/* harmony default export */ var star = (SvgStar);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/swap.svg
function swap_extends() { swap_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return swap_extends.apply(this, arguments); }



var swap_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M16.84 20.164V6.546M20.917 16.068l-4.078 4.097-4.077-4.097M6.911 3.833V17.45M2.833 7.929l4.078-4.097L10.99 7.93",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgSwap(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", swap_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), swap_ref);
}

/* harmony default export */ var swap = (SvgSwap);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/tick_square.svg
function tick_square_extends() { tick_square_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return tick_square_extends.apply(this, arguments); }



var tick_square_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.334 2.75H7.665c-3.02 0-4.915 2.14-4.915 5.166v8.168c0 3.027 1.885 5.166 4.915 5.166h8.668c3.031 0 4.917-2.139 4.917-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var tick_square_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M8.44 12l2.374 2.373 4.746-4.746",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgTickSquare(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", tick_square_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), tick_square_ref, tick_square_ref2);
}

/* harmony default export */ var tick_square = (SvgTickSquare);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/ticket.svg
function ticket_extends() { ticket_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ticket_extends.apply(this, arguments); }



var ticket_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M13.85 4.25v2.42M13.85 17.76v2.024M13.85 14.325V9.504",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var ticket_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M18.702 20C20.524 20 22 18.543 22 16.743v-2.592A2.159 2.159 0 0119.823 12c0-1.19.971-2.15 2.177-2.15l-.001-2.594c0-1.8-1.477-3.257-3.298-3.257H5.3C3.478 4 2 5.457 2 7.257L2 9.935c1.206 0 2.177.875 2.177 2.066 0 1.19-.971 2.15-2.177 2.15v2.592C2 18.543 3.476 20 5.298 20h13.404z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgTicket(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", ticket_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ticket_ref, ticket_ref2);
}

/* harmony default export */ var ticket = (SvgTicket);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/ticket_star.svg
function ticket_star_extends() { ticket_star_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ticket_star_extends.apply(this, arguments); }



var ticket_star_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M17.857 20.417a3.392 3.392 0 003.393-3.393v-2.7c-1.24 0-2.24-1-2.24-2.24 0-1.24 1-2.238 2.24-2.238l-.002-2.703a3.392 3.392 0 00-3.392-3.393H6.144a3.393 3.393 0 00-3.393 3.393v2.79c1.238 0 2.238.912 2.238 2.152 0 1.239-1 2.239-2.239 2.239v2.7a3.392 3.392 0 003.392 3.393h11.715z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var ticket_star_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12 13.854l1.74.915a.223.223 0 00.323-.234l-.333-1.939 1.409-1.37a.222.222 0 00-.123-.38l-1.946-.283-.871-1.764a.222.222 0 00-.398 0l-.871 1.764-1.945.283a.222.222 0 00-.123.38l1.408 1.37-.333 1.94a.223.223 0 00.323.233l1.74-.915z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgTicketStar(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", ticket_star_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), ticket_star_ref, ticket_star_ref2);
}

/* harmony default export */ var ticket_star = (SvgTicketStar);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/time_circle.svg
function time_circle_extends() { time_circle_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return time_circle_extends.apply(this, arguments); }



var time_circle_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M21.25 12A9.25 9.25 0 0112 21.25 9.25 9.25 0 012.75 12 9.25 9.25 0 0112 2.75 9.25 9.25 0 0121.25 12z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var time_circle_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.431 14.943l-3.77-2.25V7.848",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgTimeCircle(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", time_circle_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), time_circle_ref, time_circle_ref2);
}

/* harmony default export */ var time_circle = (SvgTimeCircle);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/time_square.svg
function time_square_extends() { time_square_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return time_square_extends.apply(this, arguments); }



var time_square_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M16.335 2.75h-8.67c-3.02 0-4.914 2.14-4.914 5.166v8.168c0 3.027 1.884 5.166 4.915 5.166h8.668c3.03 0 4.917-2.139 4.917-5.166V7.916c0-3.027-1.886-5.166-4.916-5.166z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var time_square_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.391 14.018l-3.39-2.023V7.634",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgTimeSquare(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", time_square_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), time_square_ref, time_square_ref2);
}

/* harmony default export */ var time_square = (SvgTimeSquare);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/unlock.svg
function unlock_extends() { unlock_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return unlock_extends.apply(this, arguments); }



var unlock_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M16.424 5.562A4.554 4.554 0 0012.122 2.5a4.551 4.551 0 00-4.57 4.531v2.167",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var unlock_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M15.933 21H8.292A3.793 3.793 0 014.5 17.207V12.92a3.793 3.793 0 013.792-3.793h7.641a3.793 3.793 0 013.792 3.793v4.288A3.793 3.793 0 0115.933 21z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var unlock_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M12.113 13.953v2.222",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgUnlock(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", unlock_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), unlock_ref, unlock_ref2, unlock_ref3);
}

/* harmony default export */ var unlock = (SvgUnlock);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/upload.svg
function upload_extends() { upload_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return upload_extends.apply(this, arguments); }



var upload_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M7.39 8.984h-.934a3.685 3.685 0 00-3.685 3.685v4.875a3.685 3.685 0 003.685 3.684h11.13a3.685 3.685 0 003.686-3.684v-4.885a3.675 3.675 0 00-3.674-3.675h-.944M12.021 2.19v12.042M9.106 5.119l2.915-2.928 2.916 2.928",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgUpload(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", upload_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), upload_ref);
}

/* harmony default export */ var upload = (SvgUpload);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/user.svg
function user_extends() { user_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return user_extends.apply(this, arguments); }



var user_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M16.02 10.913a3.297 3.297 0 100-6.594M17.536 14.496a10.9 10.9 0 011.617.233c.74.147 1.63.45 1.945 1.113.202.425.202.92 0 1.345-.315.663-1.206.966-1.945 1.118",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var user_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M9.591 15.206c3.69 0 6.842.56 6.842 2.792 0 2.234-3.132 2.812-6.842 2.812-3.69 0-6.84-.558-6.84-2.792s3.13-2.812 6.84-2.812zM9.591 12.019a4.369 4.369 0 01-4.384-4.385A4.368 4.368 0 019.591 3.25a4.37 4.37 0 014.385 4.384 4.37 4.37 0 01-4.385 4.385z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgUser(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", user_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), user_ref, user_ref2);
}

/* harmony default export */ var user = (SvgUser);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/user_2.svg
function user_2_extends() { user_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return user_2_extends.apply(this, arguments); }



var user_2_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M17.595 10.932a2.902 2.902 0 100-5.803M18.93 14.085c.478.033.953.1 1.422.206.65.127 1.433.394 1.712.978.178.374.178.81 0 1.184-.278.584-1.061.85-1.712.984M6.29 10.932a2.902 2.902 0 110-5.803M4.956 14.085c-.479.033-.954.1-1.423.206-.65.127-1.434.394-1.711.978-.18.374-.18.81 0 1.184.277.584 1.06.85 1.711.984",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var user_2_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M11.938 14.71c3.247 0 6.02.49 6.02 2.457 0 1.965-2.755 2.475-6.02 2.475-3.248 0-6.021-.491-6.021-2.457 0-1.967 2.756-2.475 6.02-2.475zM11.938 11.905a3.845 3.845 0 01-3.859-3.86 3.845 3.845 0 013.859-3.857 3.845 3.845 0 013.858 3.858 3.845 3.845 0 01-3.858 3.859z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgUser2(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", user_2_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), user_2_ref, user_2_ref2);
}

/* harmony default export */ var user_2 = (SvgUser2);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/video.svg
function video_extends() { video_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return video_extends.apply(this, arguments); }



var video_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M15.816 15.62c0 1.993-1.358 3.401-3.53 3.401H6.07c-2.17 0-3.519-1.408-3.519-3.4V8.66c0-1.993 1.35-3.41 3.53-3.41h6.206c2.172 0 3.53 1.417 3.53 3.41v6.96z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var video_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M15.816 11.277l4.097-3.354c.65-.535 1.637-.07 1.637.777v6.872c0 .848-.987 1.31-1.637.777l-4.097-3.354",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgVideo(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", video_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), video_ref, video_ref2);
}

/* harmony default export */ var video = (SvgVideo);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/voice.svg
function voice_extends() { voice_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return voice_extends.apply(this, arguments); }



var voice_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M4.714 10.932a7.403 7.403 0 007.404 7.404 7.403 7.403 0 007.404-7.404M12.119 21.147v-2.81",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var voice_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12.245 14.584h-.253a3.66 3.66 0 01-3.66-3.66v-4.55a3.66 3.66 0 013.66-3.66h.253a3.66 3.66 0 013.66 3.66v4.55a3.66 3.66 0 01-3.66 3.66z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgVoice(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", voice_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), voice_ref, voice_ref2);
}

/* harmony default export */ var voice = (SvgVoice);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/voice_2.svg
function voice_2_extends() { voice_2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return voice_2_extends.apply(this, arguments); }



var voice_2_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M4.714 10.932a7.403 7.403 0 007.404 7.404 7.404 7.404 0 007.405-7.404M12.119 21.147v-2.81",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var voice_2_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12.245 14.584h-.253a3.66 3.66 0 01-3.66-3.66v-4.55a3.66 3.66 0 013.66-3.66h.253a3.66 3.66 0 013.66 3.66v4.55a3.66 3.66 0 01-3.66 3.66z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var voice_2_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M14.002 6.877h1.902M13.05 10.049h2.854",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgVoice2(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", voice_2_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), voice_2_ref, voice_2_ref2, voice_2_ref3);
}

/* harmony default export */ var voice_2 = (SvgVoice2);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/volume_down.svg
function volume_down_extends() { volume_down_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return volume_down_extends.apply(this, arguments); }



var volume_down_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M14.871 16.892c-.071.586-.092 1.162-.252 1.759-.255.85-.92 1.37-1.639 1.348-.34.009-.82-.199-1.143-.47l-3.767-3.06H5.97c-1.01 0-1.693-.69-1.83-1.825-.197-1.398-.179-3.924 0-5.35.137-.986.82-1.762 1.83-1.762H8.07l3.689-3.007c.323-.274.88-.532 1.221-.524.719-.021 1.384.5 1.639 1.348.142.543.18 1.174.252 1.76.172 1.37.172 8.413 0 9.783z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var volume_down_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M18.717 6.574c.961 1.383 1.538 3.238 1.538 5.303 0 2.064-.577 3.918-1.538 5.301",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgVolumeDown(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", volume_down_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), volume_down_ref, volume_down_ref2);
}

/* harmony default export */ var volume_down = (SvgVolumeDown);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/volume_off.svg
function volume_off_extends() { volume_off_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return volume_off_extends.apply(this, arguments); }



var volume_off_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M7.89 16.383H5.779c-1.017 0-1.703-.696-1.842-1.844-.198-1.412-.179-3.964 0-5.406.139-.996.825-1.779 1.842-1.779h2.113l3.713-3.038c.325-.276.887-.537 1.23-.53.723-.021 1.393.505 1.65 1.363.142.548.181 1.186.253 1.777.072.575.114.523.126 2.257M14.86 14.191c-.02 1.337-.065 2.15-.123 2.619-.072.59-.093 1.174-.253 1.776-.257.86-.928 1.385-1.65 1.362-.343.009-.827-.2-1.152-.475l-1.396-1.14M20.996 3.294L3.848 20.442",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgVolumeOff(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", volume_off_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), volume_off_ref);
}

/* harmony default export */ var volume_off = (SvgVolumeOff);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/volume_up.svg
function volume_up_extends() { volume_up_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return volume_up_extends.apply(this, arguments); }



var volume_up_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M12.471 17.142c-.071.586-.092 1.162-.252 1.759-.255.85-.92 1.37-1.639 1.348-.34.009-.82-.199-1.143-.47l-3.767-3.06H3.572c-1.012 0-1.694-.69-1.831-1.825-.197-1.398-.178-3.924 0-5.35.137-.986.819-1.762 1.83-1.762h2.1l3.688-3.007c.323-.274.88-.532 1.221-.524.719-.021 1.384.5 1.639 1.348.142.543.18 1.174.252 1.76.172 1.37.172 8.413 0 9.783z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var volume_up_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M16.443 7.06c.908 1.306 1.453 3.058 1.453 5.009 0 1.95-.545 3.7-1.453 5.007M19.875 4c1.462 2.104 2.34 4.926 2.34 8.068 0 3.142-.878 5.965-2.34 8.069",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgVolumeUp(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", volume_up_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), volume_up_ref, volume_up_ref2);
}

/* harmony default export */ var volume_up = (SvgVolumeUp);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/wallet.svg
function wallet_extends() { wallet_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return wallet_extends.apply(this, arguments); }



var wallet_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M21.639 14.396H17.59a2.692 2.692 0 010-5.383h4.048M18.049 11.643h-.312",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var wallet_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M7.748 3h8.643a5.248 5.248 0 015.248 5.248v7.177a5.248 5.248 0 01-5.248 5.247H7.748A5.248 5.248 0 012.5 15.425V8.248A5.248 5.248 0 017.748 3z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var wallet_ref3 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M7.036 7.538h5.399",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgWallet(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", wallet_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), wallet_ref, wallet_ref2, wallet_ref3);
}

/* harmony default export */ var wallet = (SvgWallet);
// CONCATENATED MODULE: ./atomic-ui/assets/images/icons/work.svg
function work_extends() { work_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return work_extends.apply(this, arguments); }



var work_ref = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M2.804 15.477s.142 1.738.175 2.286c.044.735.328 1.556.802 2.126.67.808 1.457 1.093 2.51 1.095 1.236.002 10.231.002 11.468 0 1.052-.002 1.84-.287 2.51-1.095.473-.57.757-1.391.802-2.126.032-.548.174-2.286.174-2.286M8.496 5.33v-.372c0-1.22.988-2.208 2.208-2.208h2.582c1.219 0 2.208.988 2.208 2.208l.001.371M11.995 16.678v-1.294",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

var work_ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  clipRule: "evenodd",
  d: "M2.75 8.39v3.466c1.918 1.265 4.216 2.151 6.738 2.502a2.584 2.584 0 012.502-1.908c1.188 0 2.2.807 2.483 1.918 2.532-.35 4.839-1.237 6.767-2.512V8.39a3.05 3.05 0 00-3.057-3.058H5.817A3.06 3.06 0 002.75 8.39z",
  stroke: "#200E32",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
});

function SvgWork(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", work_extends({
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), work_ref, work_ref2);
}

/* harmony default export */ var work = (SvgWork);
// CONCATENATED MODULE: ./atomic-ui/components/Icon/index.js
var __jsx = external_react_default.a.createElement;

function Icon_extends() { Icon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Icon_extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















































































































const library = {
  add: add,
  attach: attach,
  activity: activity,
  addUser: add_user,
  arrowDown: arrow_down,
  arrowDown2: arrow_down_2,
  arrowDown3: arrow_down_3,
  arrowDownCircle: arrow_down_circle,
  arrowDownSquare: arrow_down_square,
  arrowDownCarret: arrow_down_carret,
  arrowLeft: arrow_left,
  arrowLeft2: arrow_left_2,
  arrowLeft3: arrow_left_3,
  arrowLeftCircle: arrow_left_circle,
  arrowLeftSquare: arrow_left_square,
  arrowRight: arrow_right,
  arrowRight2: arrow_right_2,
  arrowRight3: arrow_right_3,
  arrowRightCircle: arrow_right_circle["a" /* default */],
  arrowRightSquare: arrow_right_square,
  arrowUp: arrow_up,
  arrowUp2: arrow_up_2,
  arrowUp3: arrow_up_3,
  arrowUpCircle: arrow_up_circle,
  arrowUpSquare: arrow_up_square,
  arrowUpCarret: arrow_up_carret,
  bag: bag,
  bag2: bag_2,
  bookmark: bookmark,
  buy: buy,
  calendar: calendar,
  call: call,
  callMissed: call_missed,
  callSilent: call_silent,
  calling: calling,
  camera: camera,
  category: category,
  chart: chart,
  check: check,
  chat: chat,
  closeSquare: close_square,
  danger: danger,
  delete: icons_delete,
  discount: discount,
  discovery: discovery,
  document: icons_document,
  download: download,
  edit: edit,
  editSquare: edit_square,
  facebook: facebook,
  filter: filter,
  filter2: filter_2,
  folder: folder,
  flag: flag,
  game: game,
  graph: graph,
  google: google,
  heart: heart,
  hide: hide,
  home: home,
  image: icons_image,
  image_2: image_2,
  infoCircle: info_circle,
  infoSquare: info_square,
  link: icons_link,
  location: icons_location,
  lock: lock,
  login: login,
  logout: logout,
  menu: menu,
  message: message,
  moreCircle: more_circle,
  moreSquare: more_square,
  notification: notification,
  paper: paper,
  paperDownload: paper_download,
  paperFail: paper_fail,
  paperNegative: paper_negative,
  paperPlus: paper_plus,
  paperUpload: paper_upload,
  password: icons_password,
  play: play,
  plus: plus,
  profile: profile,
  scan: scan,
  search: search,
  send: send,
  setting: setting,
  shieldDone: shield_done,
  shieldFail: shield_fail,
  show: show,
  star: star,
  swap: swap,
  tickSquare: tick_square,
  ticket: ticket,
  ticketStar: ticket_star,
  timeCircle: time_circle,
  timeSquare: time_square,
  unlock: unlock,
  upload: upload,
  user: user,
  user2: user_2,
  video: video,
  voice: voice,
  voice2: voice_2,
  volumeDown: volume_down,
  volumeOff: volume_off,
  volumeUp: volume_up,
  wallet: wallet,
  work: work
};
const Wrap = external_styled_components_default.a.i`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms ease;

  ${({
  size
}) => size === 'xs' && external_styled_components_["css"]`
      svg {
        transform: scale(0.65);
      }
    `}
  ${({
  size
}) => size === 'x' && external_styled_components_["css"]`
      svg {
        transform: scale(0.85);
      }
    `}
  ${({
  size
}) => size === 'm' && external_styled_components_["css"]`
      svg {
        transform: scale(1);
      }
    `}

  svg {
    path,
    circle,
    line,
    rect {
      transition: stroke 150ms ease;

      ${({
  stroke
}) => stroke && external_styled_components_["css"]`
          stroke: ${stroke};
        `}
      ${({
  fill
}) => fill && external_styled_components_["css"]`
          fill: ${fill};
        `}
    }
  }
`;
const Error = external_styled_components_default.a.p`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.65rem;
  border: 1px solid #dedede;
  border-radius: 0.25rem;
  color: red;

  ${({
  width,
  height
}) => width && height && external_styled_components_["css"]`
      width: ${width}px;
      height: ${height}px;
    `}
`;
const Icon = (_ref) => {
  let {
    icon,
    size
  } = _ref,
      props = _objectWithoutProperties(_ref, ["icon", "size"]);

  const IconSVG = library[icon];

  if (!IconSVG) {
    return __jsx(Error, props, "Not Found");
  }

  return __jsx(Wrap, Icon_extends({}, props, {
    icon: icon,
    size: size
  }), __jsx(IconSVG, null));
};
Icon.defaultProps = {
  size: 'm',
  width: 20,
  height: 20,
  stroke: null,
  fill: null
};
/* harmony default export */ var components_Icon = __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g8bt":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hYBG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Transition */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CSOn");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Transition = (_ref) => {
  let {
    children,
    animation
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "animation"]);

  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["CSSTransition"], _extends({}, props, {
    classNames: animation
  }), children);
};
Transition.defaultProps = {
  animation: 'fade',
  timeout: 100,
  unmountOnExit: true,
  onEnter: null,
  onExited: null
};
/* harmony default export */ __webpack_exports__["a"] = (Transition);

/***/ }),

/***/ "hfch":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Badge */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25rem;
  font-weight: var(--font-weight-regular);

  ${({
  size
}) => size === 'xs' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: 16px;
      height: 16px;
      font-size: var(--font-size-xs);
    `}

  ${({
  size
}) => size === 's' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: 20px;
      height: 20px;
      font-size: var(--font-size-s);
    `}

  ${({
  size
}) => size === 'm' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: 25px;
      height: 25px;
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
`;
const Badge = (_ref) => {
  let {
    count
  } = _ref,
      props = _objectWithoutProperties(_ref, ["count"]);

  return __jsx(Wrap, props, count);
};
Badge.defaultProps = {
  count: 0,
  size: 's',
  appearance: 'default'
};
/* harmony default export */ __webpack_exports__["a"] = (Badge);

/***/ }),

/***/ "j8/+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setDocuments; });
/* harmony import */ var _types_documents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/K64");

function setDocuments(documents) {
  return {
    type: _types_documents__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_DOCUMENTS,
    payload: {
      documents
    }
  };
}

/***/ }),

/***/ "ji1G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HTMLContent */
/* unused harmony export HTMLView */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const HTMLContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HTMLView__HTMLContent",
  componentId: "sc-1ik0rfa-0"
})(["display:flex;flex-direction:column;grid-gap:var(--default-gap);table,th,td{border:1px solid rgba(0,0,0,0.125);}table td{padding:10px;}img{border-radius:var(--surface-border-radius);}"]);
const HTMLView = ({
  content
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HTMLContent, {
  dangerouslySetInnerHTML: {
    __html: content
  }
});
/* harmony default export */ __webpack_exports__["a"] = (HTMLView);

/***/ }),

/***/ "kJLk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrap; });
/* unused harmony export InfoTooltip */
/* unused harmony export InfoIcon */
/* unused harmony export Container */
/* unused harmony export Area */
/* unused harmony export PreviewList */
/* unused harmony export Preview */
/* unused harmony export Placeholder */
/* unused harmony export getFile */
/* unused harmony export compressedUpload */
/* unused harmony export Dropzone */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6CQF");
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(browser_image_compression__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("aNEW");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("V0nP");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("QUga");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7BXr");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("VWQm");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("feIE");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;

  width: 100%;
  height: 256px;
  min-height: 256px;
`;
const InfoTooltip = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Tooltip__WEBPACK_IMPORTED_MODULE_8__[/* default */ "b"])`
  position: absolute;
  right: var(--default-gap);
  bottom: var(--default-gap);
  z-index: var(--z-15);
`;
const InfoIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Icon__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])`
  cursor: pointer;
  transition: opacity 450ms ease;

  &:hover {
    opacity: 0.65;
  }
`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: var(--z-12);

  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-s);
  font-family: var(--font-family);
  color: var(--input-placeholder-color);

  width: 100%;
  height: 100%;
  border-radius: var(--surface-border-radius);
  border: 2px dashed var(--input-placeholder-color);
  outline: none;
  overflow: hidden;
  flex-grow: 1;

  cursor: pointer;
  transition: all 150ms ease;

  ${({
  error
}) => error && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      color: var(--default-color-red);
      border: 2px dashed var(--default-color-red);
    `}

  &:hover {
    color: var(--default-color-accent);
    border: 2px dashed var(--default-color-accent);

    ${({
  error
}) => error && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
        color: var(--default-color-red);
        border: 2px dashed var(--default-color-red);
      `}
  }
`;
const Area = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > span {
    height: 100%;
  }
`;
const PreviewList = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Grid__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])`
  img {
    height: 128px;
  }
`;
const Preview = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Image__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--surface-border-radius);
`;
const Placeholder = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_6__[/* default */ "b"])`
  color: inherit;
  padding: var(--default-gap);
  text-align: center;
`;
function getFile(file) {
  var _file$type;

  return {
    file,
    id: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
    blob: ((_file$type = file.type) === null || _file$type === void 0 ? void 0 : _file$type.includes('image')) && URL.createObjectURL(file)
  };
}
async function compressedUpload(file, maxWidthOrHeight = 1366) {
  try {
    return await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(file, {
      maxSizeMB: 1,
      maxWidthOrHeight,
      useWebWorker: true
    });
  } catch (error) {
    console.log(error);
  }
}
const Dropzone = ({
  style,
  accept,
  className,
  defaultValue,
  placeholder,
  tooltip,
  multiple,
  maxFiles,
  onChange
}) => {
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const onDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async droppedFiles => {
    setError(false);

    if (droppedFiles.length > maxFiles || droppedFiles.length === 0) {
      setError(true);
      return false;
    }

    const candidate = multiple ? [] : await compressedUpload(droppedFiles[0]);

    if (multiple) {
      for (let file of droppedFiles) {
        var _file$type2;

        let compressedFile;
        let miniature;

        if ((_file$type2 = file.type) !== null && _file$type2 !== void 0 && _file$type2.includes('image')) {
          compressedFile = await compressedUpload(file);
          miniature = await compressedUpload(file, 185);
        } else {
          compressedFile = file;
        }

        if (compressedFile) {
          candidate.push(_objectSpread(_objectSpread({}, getFile(compressedFile)), {}, {
            size: compressedFile.size,
            miniature: _objectSpread(_objectSpread({}, getFile(miniature)), {}, {
              size: miniature.size
            })
          }));
        }
      }
    }

    const result = candidate.length > 1 ? candidate : _objectSpread(_objectSpread({}, getFile(candidate)), {}, {
      size: droppedFiles[0].size
    });
    setImages(result);

    if (onChange) {
      onChange(result);
    }
  }, [setImages]);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["useDropzone"])({
    onDrop,
    multiple,
    accept
  });
  return __jsx(Wrap, {
    className: className,
    style: style
  }, tooltip && __jsx(InfoTooltip, {
    text: tooltip,
    maxWidth: 215
  }, __jsx(InfoIcon, {
    size: 's',
    icon: 'infoCircle',
    stroke: (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.length) > 0 ? 'white' : 'var(--default-color-accent)'
  })), __jsx(Container, _extends({
    className: 'dropzone-container'
  }, getRootProps(), {
    error: error
  }), __jsx("input", _extends({
    accept: accept
  }, getInputProps(), {
    hidden: true
  })), __jsx(Area, {
    className: 'dropzone-area',
    active: isDragActive
  }, !defaultValue && images.length === 0 && __jsx(Placeholder, null, error ? `Файлов не может быть больше ${maxFiles} или равно нулю` : placeholder), multiple && (Array.isArray(images) && images.length > 1 || Array.isArray(defaultValue) && (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.length) > 1) && __jsx(PreviewList, {
    percentage: 'minmax(196px, 1fr)'
  }, (defaultValue || images).map(file => __jsx(Preview, {
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
    src: (file === null || file === void 0 ? void 0 : file.blob) || file,
    alt: file.id
  }))), !multiple && (!Array.isArray(images) || defaultValue) && __jsx(Preview, {
    src: images.blob || (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.path) || (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.blob),
    alt: defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.name
  }))));
};
Dropzone.defaultProps = {
  maxFiles: 1,
  multiple: false
};
/* harmony default export */ __webpack_exports__["b"] = (Dropzone);

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "lphG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMutate; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_actions_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Sza6");


const useMutate = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  return (mutation, variables, callback) => () => dispatch(Object(_store_actions_root__WEBPACK_IMPORTED_MODULE_1__[/* setMutate */ "k"])(mutation, variables, callback));
};
/* unused harmony default export */ var _unused_webpack_default_export = (useMutate);

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

/***/ "mqli":
/***/ (function(module, exports) {

module.exports = require("generate-password");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nShV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrap; });
/* unused harmony export Row */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  grid-gap: 0 var(--default-gap);
`;
const Row = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(Wrap, props, children);
};
/* harmony default export */ __webpack_exports__["b"] = (Row);

/***/ }),

/***/ "oLQh":
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),

/***/ "otXJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Content */
/* unused harmony export NameRow */
/* unused harmony export Name */
/* unused harmony export Position */
/* unused harmony export Counter */
/* unused harmony export Member */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8CDE");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ThpJ");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7sPp");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("QUga");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("fLIS");
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hfch");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  align-items: center;
  width: 100%;
  transition: opacity 150ms ease;

  ${({
  onClick
}) => onClick && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])`
  position: relative;
  grid-gap: 5px;
  width: 100%;
`;
const NameRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  justify-content: space-between;
  transition: opacity 150ms ease;

  ${({
  onClick
}) => onClick && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`;
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Title__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])`
  line-height: 1;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-right: 15px;
`;
const Position = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Text__WEBPACK_IMPORTED_MODULE_6__[/* default */ "b"])`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-right: 15px;
`;
const Counter = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Badge__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])`
  position: absolute;
  top: 10px;
  right: 0;
`;
const Member = ({
  name,
  avatar,
  budge,
  position,
  rating,
  className,
  style,
  onLink,
  onClick
}) => __jsx(Wrap, {
  className: className,
  style: style,
  onClick: onClick
}, avatar && __jsx(_Avatar__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], {
  src: avatar,
  alt: 'Avatar'
}), __jsx(Content, null, __jsx(NameRow, {
  onClick: onLink
}, __jsx(Name, {
  tag: 'h5'
}, name), rating && __jsx(_Rating__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
  defaultValue: rating,
  size: 'xs',
  readOnly: true
})), __jsx(Position, null, position), budge && __jsx(Counter, {
  count: budge
})));
/* harmony default export */ __webpack_exports__["a"] = (Member);

/***/ }),

/***/ "owvJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ onArticleLink; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ onArticleCreate; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ onArticleEdit; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ onArticleDelete; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./atomic-ui/components/Row/index.js
var Row = __webpack_require__("nShV");

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Title/index.js
var Title = __webpack_require__("7sPp");

// EXTERNAL MODULE: ./atomic-ui/components/Input/index.js
var Input = __webpack_require__("Gliw");

// EXTERNAL MODULE: ./atomic-ui/components/Button/index.js
var Button = __webpack_require__("ZeZO");

// EXTERNAL MODULE: ./atomic-ui/components/Select/index.js
var Select = __webpack_require__("QclZ");

// EXTERNAL MODULE: ./atomic-ui/components/TextEditor/index.js
var TextEditor = __webpack_require__("QWIf");

// EXTERNAL MODULE: ./atomic-ui/components/Dropzone/index.js
var Dropzone = __webpack_require__("kJLk");

// EXTERNAL MODULE: ./atomic-ui/components/Alert/index.js
var Alert = __webpack_require__("ZwIX");

// EXTERNAL MODULE: ./atomic-ui/components/Avatar/index.js
var Avatar = __webpack_require__("ThpJ");

// EXTERNAL MODULE: ./atomic-ui/components/Text/index.js
var Text = __webpack_require__("QUga");

// EXTERNAL MODULE: ./atomic-ui/components/DateText/index.js
var DateText = __webpack_require__("+nv6");

// EXTERNAL MODULE: ./atomic-ui/components/Icon/index.js + 109 modules
var Icon = __webpack_require__("feIE");

// EXTERNAL MODULE: ./atomic-ui/components/Tooltip/index.js
var Tooltip = __webpack_require__("VWQm");

// EXTERNAL MODULE: ./atomic-ui/components/Checkbox/index.js
var Checkbox = __webpack_require__("79b8");

// EXTERNAL MODULE: ./atomic-ui/components/TextArea/index.js
var TextArea = __webpack_require__("3jgA");

// CONCATENATED MODULE: ./atomic-ui/components/Comment/index.js
var __jsx = external_react_default.a.createElement;












const Wrap = external_styled_components_default()(Row["b" /* default */])`
  position: relative;
  margin: 0;
  padding: 0;

  ${({
  checked
}) => checked && external_styled_components_["css"]`
      opacity: 0.45;
    `}
`;
const MiniAvatar = external_styled_components_default()(Avatar["b" /* default */])`
  width: var(--input-height-xs);
  height: var(--input-height-xs);
  min-width: var(--input-height-xs);
  min-height: var(--input-height-xs);
  border-radius: var(--surface-border-radius);
`;
const Name = external_styled_components_default()(Text["b" /* default */])`
  font-weight: var(--font-weight-medium);
  color: var(--default-color-accent);
  transition: opacity 150ms ease;

  ${({
  compact
}) => compact && external_styled_components_["css"]`
      display: flex;
      align-items: center;
      grid-gap: 10px;
      margin-bottom: 5px;
    `}

  ${({
  onClick
}) => onClick && external_styled_components_["css"]`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`;
const MessageTextArea = external_styled_components_default()(TextArea["a" /* default */])`
  height: 128px;
`;
const MessageText = external_styled_components_default()(Text["b" /* default */])`
  color: black;
`;
const Content = external_styled_components_default()(Column["a" /* default */])`
  grid-gap: 0;
  width: 100%;
`;
const Meta = external_styled_components_default()(Row["b" /* default */])`
  grid-gap: 5px;
`;
const Line = external_styled_components_default()(Row["b" /* default */])`
  justify-content: space-between;
  align-items: center;
`;
const Actions = external_styled_components_default()(Row["b" /* default */])`
  position: absolute;
  top: 0;
  right: 0;
  grid-gap: 10px;
`;
const DispatchUpdatedDate = external_styled_components_default()(DateText["a" /* default */])`
  font-size: var(--font-size-s);
  color: var(--default-color-text);
`;
const DispatchTime = external_styled_components_default()(DateText["a" /* default */])`
  font-size: var(--font-size-s);
  color: var(--default-color-text);
`;
const ReplyButton = external_styled_components_default()(Button["a" /* default */])`
  color: var(--default-color-accent);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-regular);
`;
const Likes = external_styled_components_default()(Row["b" /* default */])`
  align-items: center;
  grid-gap: 0;
`;
const LikesButton = external_styled_components_default()(Button["a" /* default */])`
  span {
    color: var(--default-color-text);
    transition: color 150ms ease;
  }

  &:hover {
    span {
      color: var(--default-color-accent);
    }
  }
`;
const LikeButton = external_styled_components_default()(Button["a" /* default */])`
  &:hover {
    svg {
      path,
      circle {
        stroke: var(--default-color-accent);
      }
    }
  }
`;
const Comment = ({
  user,
  message,
  likes,
  time,
  className,
  style,
  compact,
  isLiked: initialLiked,
  isUpdated,
  isChecked,
  onLink,
  onReply,
  onChecked,
  onShowLikes,
  onDelete,
  onEdit,
  onLike
}) => {
  var _user$avatar$path, _user$avatar, _user$avatar$path2, _user$avatar2;

  const {
    0: updatedAt,
    1: setUpdatedAt
  } = Object(external_react_["useState"])(isUpdated ? time : null);
  const {
    0: checked,
    1: setChecked
  } = Object(external_react_["useState"])(isChecked);
  const {
    0: count,
    1: setCount
  } = Object(external_react_["useState"])(likes);
  const {
    0: isEdit,
    1: setEdit
  } = Object(external_react_["useState"])(false);
  const {
    0: isLiked,
    1: setLiked
  } = Object(external_react_["useState"])(initialLiked);
  const color = Object(external_react_["useMemo"])(() => isLiked ? 'var(--default-color-accent)' : 'var(--default-color-text)', [isLiked]);
  const textLikes = Object(external_react_["useMemo"])(() => count === 1 ? 'человеку' : 'людям', [count]);
  const {
    0: comment,
    1: setComment
  } = Object(external_react_["useState"])(message);
  const commentRef = Object(external_react_["useRef"])(null);

  const onClick = () => {
    const value = !isLiked;
    if (onLike) onLike(value);
    setCount(prev => prev + (value ? 1 : -1));
    setLiked(value);
  };

  const handleToggleEdit = () => setEdit(prev => !prev);

  const handleChecked = e => {
    const value = e.target.checked;
    if (onChecked) onChecked(value);
    setChecked(value);
  };

  const handleApplyChanges = () => {
    var _commentRef$current;

    const value = commentRef === null || commentRef === void 0 ? void 0 : (_commentRef$current = commentRef.current) === null || _commentRef$current === void 0 ? void 0 : _commentRef$current.value;

    if (value) {
      if (onEdit) onEdit(value);
      setUpdatedAt(new Date());
      setComment(value);
    }

    handleToggleEdit();
  };

  return __jsx(Wrap, {
    checked: checked,
    style: style,
    className: className
  }, !compact && __jsx(Avatar["b" /* default */], {
    src: (_user$avatar$path = user === null || user === void 0 ? void 0 : (_user$avatar = user.avatar) === null || _user$avatar === void 0 ? void 0 : _user$avatar.path) !== null && _user$avatar$path !== void 0 ? _user$avatar$path : ''
  }), __jsx(Content, null, __jsx(Name, {
    compact: compact,
    onClick: onLink
  }, compact && __jsx(MiniAvatar, {
    src: (_user$avatar$path2 = user === null || user === void 0 ? void 0 : (_user$avatar2 = user.avatar) === null || _user$avatar2 === void 0 ? void 0 : _user$avatar2.path) !== null && _user$avatar$path2 !== void 0 ? _user$avatar$path2 : ''
  }), user.name), isEdit ? __jsx(MessageTextArea, {
    ref: commentRef,
    defaultValue: comment,
    appearance: 'ghost'
  }) : __jsx(MessageText, null, comment), compact && onEdit && onDelete && __jsx(Actions, null, !isEdit ? __jsx(external_react_default.a.Fragment, null, __jsx(Tooltip["b" /* default */], {
    text: 'Удалить комментарий'
  }, __jsx(Button["a" /* default */], {
    kind: 'icon',
    size: 'xs',
    disabled: checked,
    appearance: 'red',
    onClick: onDelete
  }, __jsx(Icon["a" /* default */], {
    icon: 'delete',
    size: 'xs',
    stroke: 'white'
  }))), __jsx(Tooltip["b" /* default */], {
    text: 'Редактировать комментарий'
  }, __jsx(Button["a" /* default */], {
    kind: 'icon',
    size: 'xs',
    disabled: checked,
    onClick: handleToggleEdit
  }, __jsx(Icon["a" /* default */], {
    icon: 'edit',
    size: 'xs',
    stroke: 'white'
  }))), __jsx(Tooltip["b" /* default */], {
    text: 'Отметить комментарий',
    self: true
  }, __jsx(Checkbox["a" /* default */], {
    checked: checked,
    onChange: handleChecked
  }))) : __jsx(external_react_default.a.Fragment, null, __jsx(Tooltip["b" /* default */], {
    text: 'Применить изменения',
    self: true
  }, __jsx(Button["a" /* default */], {
    kind: 'icon',
    size: 'xs',
    disabled: checked,
    appearance: 'green',
    onClick: handleApplyChanges
  }, __jsx(Icon["a" /* default */], {
    icon: 'check',
    size: 'xs',
    stroke: 'white'
  }))), __jsx(Tooltip["b" /* default */], {
    text: 'Отменить изменения',
    self: true
  }, __jsx(Button["a" /* default */], {
    kind: 'icon',
    size: 'xs',
    disabled: checked,
    appearance: 'red',
    onClick: handleToggleEdit
  }, __jsx(Icon["a" /* default */], {
    icon: 'closeSquare',
    size: 'xs',
    stroke: 'white'
  }))))), __jsx(Line, null, __jsx(Meta, null, updatedAt ? __jsx(DispatchUpdatedDate, null, "\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E", ' ', new Date(updatedAt).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })) : __jsx(DispatchTime, {
    text: time
  }), onReply && __jsx(ReplyButton, {
    appearance: 'clear',
    onClick: onReply
  }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")), __jsx(Likes, null, count > 0 && __jsx(Tooltip["b" /* default */], {
    text: `${count} ${textLikes} это нравится`
  }, __jsx(LikesButton, {
    type: 'button',
    onClick: onShowLikes,
    appearance: 'clear',
    size: 'xs'
  }, __jsx("span", {
    style: {
      color
    }
  }, count))), __jsx(Tooltip["b" /* default */], {
    text: 'Мне нравится'
  }, __jsx(LikeButton, {
    type: 'button',
    onClick: onClick,
    appearance: 'clear',
    size: 'xs'
  }, __jsx(Icon["a" /* default */], {
    icon: 'heart',
    size: 'xs',
    stroke: color,
    fill: isLiked ? 'var(--default-color-accent)' : 'none'
  })))))));
};
/* harmony default export */ var components_Comment = (Comment);
// EXTERNAL MODULE: ./atomic-ui/components/Divider/index.js
var Divider = __webpack_require__("RKiZ");

// EXTERNAL MODULE: ./atomic-ui/components/Spinner/index.js
var Spinner = __webpack_require__("auMy");

// EXTERNAL MODULE: ./atomic-ui/utils/functions.js
var functions = __webpack_require__("NWnW");

// EXTERNAL MODULE: ./components/Form/index.js
var Form = __webpack_require__("qoM+");

// EXTERNAL MODULE: ./components/Styled/index.js
var Styled = __webpack_require__("586Q");

// EXTERNAL MODULE: ./graphql/queries/index.js + 15 modules
var queries = __webpack_require__("u2Cb");

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// CONCATENATED MODULE: ./components/FormArticle/index.js























const Header = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "FormArticle__Header",
  componentId: "sc-1ftxonu-0"
})(["justify-content:space-between;@media only screen and (max-width:480px){flex-direction:column;align-items:end;grid-gap:var(--default-gap);}"]);
const Comments = ({
  article,
  setValue
}) => {
  const [comments, setComments] = Object(external_react_["useState"])([]);
  const user = Object(external_react_redux_["useSelector"])(state => state.user);
  const [checkedAll, setCheckedAll] = Object(external_react_["useState"])(false);
  const {
    data: dataComments,
    loading: loadingComments
  } = article ? Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_COMMENTS, {
    variables: {
      id: article
    }
  }) : {
    data: [],
    loading: false
  };

  const handleCheckedComments = e => {
    setCheckedAll(e.target.checked);
    setComments(prev => prev.map(item => ({ ...item,
      checked: !item.checked
    })));
  };

  const handleCheckedComment = (message, value) => {
    setComments(prev => prev.map(item => item.id === message.id ? { ...item,
      checked: value
    } : item));
  };

  const handleDeleteChecked = () => {
    setComments(prev => prev.filter(message => !message.checked));
  };

  const handleCommentEdit = (message, text) => {
    setComments(prev => prev.map(item => item.id === message.id ? { ...item,
      updatedAt: new Date(),
      text
    } : item));
  };

  const handleCommentDelete = message => {
    setComments(prev => prev.filter(item => item.id !== message.id));
  };

  Object(external_react_["useEffect"])(() => {
    if (article && !loadingComments && dataComments) {
      setComments(dataComments.getComments.map(comment => ({ ...comment,
        checked: false
      })));
    }
  }, [article, dataComments, loadingComments]);
  Object(external_react_["useEffect"])(() => {
    setValue('comments', comments);
  }, [comments]);

  if (!article || comments.length === 0) {
    return null;
  }

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
    clear: true
  }), /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h4'
  }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"), /*#__PURE__*/external_react_default.a.createElement(Header, null, /*#__PURE__*/external_react_default.a.createElement(Checkbox["a" /* default */], {
    label: 'Выделить все',
    checked: checkedAll,
    onChange: handleCheckedComments
  }), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      color: 'var(--default-color-red)'
    },
    appearance: 'clear',
    onClick: handleDeleteChecked
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435")), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
    style: {
      gridGap: 5
    }
  }, comments.map(comment => {
    var _comment$likes;

    return /*#__PURE__*/external_react_default.a.createElement(components_Comment, {
      key: `${comment.id}_${comment.checked}`,
      user: comment.author,
      message: comment.text,
      likes: (_comment$likes = comment.likes) === null || _comment$likes === void 0 ? void 0 : _comment$likes.length,
      time: comment.createdAt !== comment.updatedAt ? comment.updatedAt : comment.createdAt,
      isLiked: comment.likes.find(likedUser => likedUser.email === user.email),
      isChecked: comment.checked,
      isUpdated: comment.createdAt !== comment.updatedAt,
      onChecked: value => handleCheckedComment(comment, value),
      onEdit: text => handleCommentEdit(comment, text),
      onDelete: () => handleCommentDelete(comment),
      compact: true
    });
  })));
};
const Article = ({
  article,
  categories,
  statuses,
  mutation,
  appearance,
  className,
  canEditStatus,
  onSubmit
}) => {
  const {
    data,
    loading: loadingArticle,
    error: errorArticle
  } = article ? Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_ARTICLE, {
    variables: {
      id: article
    }
  }) : {
    data: {
      getArticle: {}
    },
    loading: false,
    error: false
  };
  return /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
    className: className,
    appearance: appearance,
    mutation: mutation,
    onSubmit: onSubmit
  }, ({
    register,
    loading,
    errors,
    control,
    getValues,
    setValue
  }) => {
    var _data$getArticle, _data$getArticle2, _data$getArticle3, _data$getArticle4, _data$getArticle5;

    return !loadingArticle && data ? /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
      tag: 'h4'
    }, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435"), errors && errors.preview && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u0435\u0432\u044C\u044E"), /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'preview',
      control: control,
      rules: {
        required: true
      },
      defaultValue: ((_data$getArticle = data.getArticle) === null || _data$getArticle === void 0 ? void 0 : _data$getArticle.preview) || null,
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(Dropzone["b" /* default */], {
        accept: 'image/*',
        defaultValue: value,
        onChange: onChange,
        placeholder: 'Перетащите сюда изображение для превью',
        tooltip: 'Разрешение: 960x480px. Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB'
      })
    }), errors && errors.title && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0430\u0442\u044C\u0438"), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
      type: 'text',
      name: 'title',
      ref: register({
        required: true
      }),
      defaultValue: getValues('title') || ((_data$getArticle2 = data.getArticle) === null || _data$getArticle2 === void 0 ? void 0 : _data$getArticle2.title),
      placeholder: 'Название',
      appearance: 'ghost',
      disabled: loading
    }), /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'category',
      control: control,
      defaultValue: (_data$getArticle3 = data.getArticle) !== null && _data$getArticle3 !== void 0 && _data$getArticle3.category ? {
        value: data.getArticle.category.id,
        label: Object(functions["d" /* getLabelCategory */])(data.getArticle.category.name)
      } : null,
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(Select["a" /* default */], {
        appearance: 'ghost',
        placeholder: 'Выберите раздел',
        options: categories.filter(item => item.type === 'DIVISION').map(item => ({
          value: item.id,
          label: Object(functions["d" /* getLabelCategory */])(item.name)
        })),
        onChange: onChange,
        defaultValue: value,
        isLoading: loading,
        isClearable: true
      })
    }), errors && errors.body && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"), /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'body',
      control: control,
      defaultValue: getValues('body') || ((_data$getArticle4 = data.getArticle) === null || _data$getArticle4 === void 0 ? void 0 : _data$getArticle4.body) || null,
      rules: {
        required: true
      },
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(TextEditor["a" /* default */], {
        apiKey: config["a" /* default */].get('tiny-key'),
        appearance: 'ghost',
        defaultValue: value,
        onChange: onChange
      })
    }), /*#__PURE__*/external_react_default.a.createElement(Comments, {
      article: article,
      setValue: setValue
    }), canEditStatus && /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
      clear: true
    }), canEditStatus && /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'status',
      control: control,
      defaultValue: (_data$getArticle5 = data.getArticle) !== null && _data$getArticle5 !== void 0 && _data$getArticle5.status ? {
        value: data.getArticle.status,
        label: Object(functions["g" /* getLabelStatus */])(data.getArticle.status)
      } : null,
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(Select["a" /* default */], {
        appearance: 'ghost',
        placeholder: 'Выберите статус',
        options: statuses.map(item => ({
          value: item,
          label: Object(functions["g" /* getLabelStatus */])(item)
        })),
        onChange: onChange,
        defaultValue: value,
        menuPlacement: 'top',
        isLoading: loading,
        isClearable: true
      })
    })), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
      clear: true
    }), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
      style: {
        flexGrow: 1
      },
      type: 'submit',
      disabled: loading
    }, article ? 'Сохранить' : 'Создать'))) : errorArticle ? /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      appearance: 'error',
      style: {
        width: '100%',
        textAlign: 'center'
      }
    }, "\u0423\u043F\u0441! \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0441\u0442\u0430\u0442\u044C\u0435") : /*#__PURE__*/external_react_default.a.createElement(Styled["c" /* Loader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null));
  });
};
/* harmony default export */ var FormArticle = (Article);
// EXTERNAL MODULE: ./components/FormDelete/index.js
var FormDelete = __webpack_require__("xAqQ");

// EXTERNAL MODULE: ./components/ArticleCard/index.js + 1 modules
var ArticleCard = __webpack_require__("UwjQ");

// EXTERNAL MODULE: ./atomic-ui/components/Image/index.js
var Image = __webpack_require__("V0nP");

// EXTERNAL MODULE: ./atomic-ui/components/Meta/index.js
var components_Meta = __webpack_require__("aBfq");

// EXTERNAL MODULE: ./components/HTMLView/index.js
var HTMLView = __webpack_require__("ji1G");

// CONCATENATED MODULE: ./components/Comments/index.js










const Comments_Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "Comments__Wrap",
  componentId: "sc-6rcmxi-0"
})(["flex-grow:1;"]);
const CentralAlert = external_styled_components_default()(Alert["a" /* default */]).withConfig({
  displayName: "Comments__CentralAlert",
  componentId: "sc-6rcmxi-1"
})(["display:flex;justify-content:center;align-items:center;text-align:center;width:100%;flex-grow:1;"]);
const Comments_Comments = ({
  comments,
  loading,
  appearance,
  onLink,
  onReply,
  onLike,
  onAttach,
  onSubmit
}) => {
  const user = Object(external_react_redux_["useSelector"])(state => state.user);
  const [message, setMessage] = Object(external_react_["useState"])('');
  const messageRef = Object(external_react_["useRef"])(null);
  return /*#__PURE__*/external_react_default.a.createElement(Comments_Wrap, null, comments && comments.length > 0 ? comments.map(comment => {
    var _comment$likes;

    return /*#__PURE__*/external_react_default.a.createElement(components_Comment, {
      key: comment.id,
      user: comment.author,
      message: comment.text,
      likes: (_comment$likes = comment.likes) === null || _comment$likes === void 0 ? void 0 : _comment$likes.length,
      time: comment.time,
      isLiked: comment.likes.find(likedUser => likedUser.email === user.email),
      onLink: onLink,
      onReply: onReply,
      onLike: liked => onLike(comment.id, liked)
    });
  }) : /*#__PURE__*/external_react_default.a.createElement(CentralAlert, null, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043F\u0435\u0440\u0432\u044B\u043C"), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    kind: 'icon',
    disabled: loading || !comments,
    onSubmit: onAttach
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'attach',
    stroke: 'white'
  })), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    name: 'text',
    ref: messageRef,
    placeholder: 'Отправьте комментарий...',
    disabled: loading && !comments,
    appearance: appearance,
    onChange: e => {
      var _e$target;

      return setMessage((e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value) || '');
    },
    onKeyDown: e => {
      // Pressed ENTER
      if (e.keyCode === 13) {
        onSubmit(message);
        messageRef.current.value = '';
      }
    },
    tabIndex: -1
  }), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    kind: 'icon',
    onClick: () => {
      onSubmit(message);
      messageRef.current.value = '';
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'send',
    stroke: 'white'
  }))));
};
Comments_Comments.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ var components_Comments = (Comments_Comments);
// EXTERNAL MODULE: ./components/Processed/index.js
var Processed = __webpack_require__("2qQv");

// CONCATENATED MODULE: ./components/ArticleView/index.js












const ArticleView_Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "ArticleView__Wrap",
  componentId: "sc-12lysue-0"
})(["flex-grow:1;", " ", " ", ""], ({
  appearance
}) => appearance === 'default' && Object(external_styled_components_["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Poster = external_styled_components_default()(Image["a" /* default */]).withConfig({
  displayName: "ArticleView__Poster",
  componentId: "sc-12lysue-1"
})(["object-fit:cover;width:100%;height:512px;border-radius:var(--surface-border-radius);@media only screen and (max-width:480px){height:256px;}"]);
const ArticleView_Content = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "ArticleView__Content",
  componentId: "sc-12lysue-2"
})(["grid-gap:0;"]);
const View = ({
  article,
  appearance,
  className,
  style,
  onLink,
  onCommentLink,
  onCommentReply
}) => {
  var _data$getArticle, _data$getArticle2, _data$getArticle2$pre, _data$getArticle3, _data$getArticle4, _data$getArticle4$cat, _data$getArticle5, _data$getArticle6, _data$getArticle7;

  const [comments, setComments] = Object(external_react_["useState"])([]);
  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_ARTICLE, {
    variables: {
      id: article
    }
  });
  const {
    data: dataComments,
    loading: loadingComments,
    error: errorComments
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_COMMENTS, {
    variables: {
      id: article
    }
  });
  const [sendComment, {
    data: dataSendComment,
    loading: loadingSendComment,
    error: errorSendComment
  }] = Object(react_hooks_["useMutation"])(queries["a" /* default */].SEND_COMMENT);
  const [likeComment] = Object(react_hooks_["useMutation"])(queries["a" /* default */].LIKE_COMMENT);
  Object(external_react_["useEffect"])(() => {
    if (!loadingComments && dataComments) {
      setComments(dataComments.getComments);
    }
  }, [dataComments, loadingComments]);
  Object(external_react_["useEffect"])(() => {
    if (!loadingSendComment && dataSendComment) {
      setComments(dataSendComment.sendComment);
    }
  }, [dataSendComment, loadingSendComment]);
  return /*#__PURE__*/external_react_default.a.createElement(ArticleView_Wrap, {
    className: className,
    style: style,
    appearance: appearance
  }, /*#__PURE__*/external_react_default.a.createElement(Processed["a" /* default */], {
    data: data === null || data === void 0 ? void 0 : data.getArticle,
    loading: loading,
    error: error,
    errorMessage: 'Упс! Не удалось загрузить информацию о статье',
    emptyMessage: 'Кажется такой статьи не существует'
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, (data === null || data === void 0 ? void 0 : (_data$getArticle = data.getArticle) === null || _data$getArticle === void 0 ? void 0 : _data$getArticle.preview) && /*#__PURE__*/external_react_default.a.createElement(Poster, {
    src: data === null || data === void 0 ? void 0 : (_data$getArticle2 = data.getArticle) === null || _data$getArticle2 === void 0 ? void 0 : (_data$getArticle2$pre = _data$getArticle2.preview) === null || _data$getArticle2$pre === void 0 ? void 0 : _data$getArticle2$pre.path
  }), /*#__PURE__*/external_react_default.a.createElement(ArticleView_Content, null, /*#__PURE__*/external_react_default.a.createElement(components_Meta["a" /* default */], {
    date: data === null || data === void 0 ? void 0 : (_data$getArticle3 = data.getArticle) === null || _data$getArticle3 === void 0 ? void 0 : _data$getArticle3.createdAt,
    category: data === null || data === void 0 ? void 0 : (_data$getArticle4 = data.getArticle) === null || _data$getArticle4 === void 0 ? void 0 : (_data$getArticle4$cat = _data$getArticle4.category) === null || _data$getArticle4$cat === void 0 ? void 0 : _data$getArticle4$cat.name
  }), /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h3',
    onClick: onLink,
    style: {
      marginTop: -5,
      marginBottom: 5
    }
  }, data === null || data === void 0 ? void 0 : (_data$getArticle5 = data.getArticle) === null || _data$getArticle5 === void 0 ? void 0 : _data$getArticle5.title), (data === null || data === void 0 ? void 0 : (_data$getArticle6 = data.getArticle) === null || _data$getArticle6 === void 0 ? void 0 : _data$getArticle6.body) && /*#__PURE__*/external_react_default.a.createElement(HTMLView["a" /* default */], {
    content: data === null || data === void 0 ? void 0 : (_data$getArticle7 = data.getArticle) === null || _data$getArticle7 === void 0 ? void 0 : _data$getArticle7.body
  })), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
    clear: true
  }), /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h4'
  }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"), /*#__PURE__*/external_react_default.a.createElement(components_Comments, {
    comments: comments,
    appearance: 'ghost',
    error: errorComments || errorSendComment,
    loading: loadingComments || loadingSendComment,
    onLink: onCommentLink,
    onReply: onCommentReply,
    onLike: (id, liked) => likeComment({
      variables: {
        comment: id,
        liked
      }
    }),
    onSubmit: value => sendComment({
      variables: {
        article: data.getArticle.id,
        text: value
      }
    })
  }))));
};
View.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ var ArticleView = (View);
// EXTERNAL MODULE: ./store/actions/documents.js
var documents = __webpack_require__("j8/+");

// EXTERNAL MODULE: ./store/actions/drawer.js
var drawer = __webpack_require__("Ztxg");

// EXTERNAL MODULE: ./store/actions/snacks.js
var snacks = __webpack_require__("9Xo6");

// EXTERNAL MODULE: ./store/helpers/user.js + 11 modules
var helpers_user = __webpack_require__("rP4V");

// CONCATENATED MODULE: ./store/helpers/article.js









function onArticleLink(dispatch, props) {
  const {
    id,
    auth
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'document',
    title: 'Статья',
    content: /*#__PURE__*/external_react_default.a.createElement(ArticleView, {
      article: id,
      appearance: 'clear',
      onCommentLink: user => Object(helpers_user["i" /* onUserLink */])(dispatch, {
        email: user,
        auth
      })
    })
  }));
}
function onArticleCreate(dispatch, props) {
  const {
    categories,
    statuses,
    canEditStatus,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'document',
    title: 'Создание статьи',
    content: /*#__PURE__*/external_react_default.a.createElement(FormArticle, {
      mutation: mutation,
      categories: categories,
      statuses: statuses,
      appearance: 'clear',
      canEditStatus: canEditStatus,
      onSubmit: async (form, action) => {
        try {
          var _form$preview, _form$preview2, _form$category, _form$status;

          const articles = await action({
            variables: {
              input: {
                title: form.title,
                body: form.body,
                preview: (_form$preview = form.preview) === null || _form$preview === void 0 ? void 0 : _form$preview.file,
                previewSize: (_form$preview2 = form.preview) === null || _form$preview2 === void 0 ? void 0 : _form$preview2.file.size,
                category: (_form$category = form.category) === null || _form$category === void 0 ? void 0 : _form$category.value,
                status: (_form$status = form.status) === null || _form$status === void 0 ? void 0 : _form$status.value
              }
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(articles.data.createArticle));
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Статья успешно создана'
          }));
        } catch (err) {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось создать статью'
          }));
        }
      }
    })
  }));
}
function onArticleEdit(dispatch, props) {
  const {
    id,
    auth,
    categories,
    statuses,
    canEditStatus,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'document',
    title: 'Редактирование статьи',
    content: /*#__PURE__*/external_react_default.a.createElement(FormArticle, {
      article: id,
      mutation: mutation,
      categories: categories,
      statuses: statuses,
      appearance: 'clear',
      canEditStatus: canEditStatus,
      onSubmit: async (form, action) => {
        try {
          var _form$preview3, _form$preview4, _form$preview4$file, _form$category2, _form$status2;

          const articles = await action({
            variables: {
              id,
              input: {
                title: form.title,
                body: form.body,
                preview: (_form$preview3 = form.preview) === null || _form$preview3 === void 0 ? void 0 : _form$preview3.file,
                previewSize: (_form$preview4 = form.preview) === null || _form$preview4 === void 0 ? void 0 : (_form$preview4$file = _form$preview4.file) === null || _form$preview4$file === void 0 ? void 0 : _form$preview4$file.size,
                category: (_form$category2 = form.category) === null || _form$category2 === void 0 ? void 0 : _form$category2.value,
                status: (_form$status2 = form.status) === null || _form$status2 === void 0 ? void 0 : _form$status2.value
              }
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(articles.data.updateArticle));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Статья успешно отредактирована'
          }));
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось отредактировать статью'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
        }
      },
      onCommentLink: user => Object(helpers_user["i" /* onUserLink */])(dispatch, {
        email: user,
        auth
      })
    })
  }));
}
function onArticleDelete(dispatch, props) {
  const {
    id,
    article,
    auth,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'delete',
    color: 'red',
    title: 'Удаление статьи',
    content: /*#__PURE__*/external_react_default.a.createElement(FormDelete["a" /* default */], {
      mutation: mutation,
      appearance: 'clear',
      onCancel: () => dispatch(Object(drawer["a" /* setDrawer */])(null)),
      onSubmit: async (_, action) => {
        try {
          const articles = await action({
            variables: {
              id
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(articles.data.deleteArticle));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Статья успешно удалена'
          }));
        } catch (_unused) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось удалить статью'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
        }
      }
    }, /*#__PURE__*/external_react_default.a.createElement(ArticleCard["b" /* default */], {
      article: article,
      appearance: 'clear',
      onLink: () => onArticleLink(dispatch, {
        id: article.id
      }),
      onCommentLink: user => Object(helpers_user["i" /* onUserLink */])(dispatch, {
        email: user,
        auth
      })
    }))
  }));
}

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "p9yE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: DashboardLayout

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./atomic-ui/components/Row/index.js
var Row = __webpack_require__("nShV");

// EXTERNAL MODULE: ./atomic-ui/components/Container/index.js
var Container = __webpack_require__("N0uN");

// EXTERNAL MODULE: ./atomic-ui/components/Spinner/index.js
var Spinner = __webpack_require__("auMy");

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Button/index.js
var Button = __webpack_require__("ZeZO");

// EXTERNAL MODULE: ./atomic-ui/components/Image/index.js
var Image = __webpack_require__("V0nP");

// EXTERNAL MODULE: ./atomic-ui/components/Search/index.js
var Search = __webpack_require__("t7jn");

// EXTERNAL MODULE: ./atomic-ui/components/Tooltip/index.js
var Tooltip = __webpack_require__("VWQm");

// EXTERNAL MODULE: ./atomic-ui/components/Icon/index.js + 109 modules
var Icon = __webpack_require__("feIE");

// EXTERNAL MODULE: ./hooks/useHelper.js
var useHelper = __webpack_require__("ApjV");

// EXTERNAL MODULE: ./layouts/main.js + 4 modules
var main = __webpack_require__("wOhW");

// EXTERNAL MODULE: ./components/Styled/index.js
var Styled = __webpack_require__("586Q");

// EXTERNAL MODULE: ./atomic-ui/components/Avatar/index.js
var Avatar = __webpack_require__("ThpJ");

// EXTERNAL MODULE: ./atomic-ui/components/Divider/index.js
var Divider = __webpack_require__("RKiZ");

// EXTERNAL MODULE: ./atomic-ui/components/Title/index.js
var Title = __webpack_require__("7sPp");

// EXTERNAL MODULE: ./atomic-ui/components/Text/index.js
var Text = __webpack_require__("QUga");

// EXTERNAL MODULE: ./atomic-ui/components/Badge/index.js
var Badge = __webpack_require__("hfch");

// EXTERNAL MODULE: ./atomic-ui/utils/functions.js
var functions = __webpack_require__("NWnW");

// CONCATENATED MODULE: ./components/SideBar/index.js











const defaultColor = 'rgba(255, 255, 255, 25%)';
const activeColor = 'var(--default-color-accent)';
const Wrap = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "SideBar__Wrap",
  componentId: "sc-158a552-0"
})(["--padding-offset:15px;display:flex;flex-direction:column;width:240px;height:100vh;background:var(--admin-color-accent);color:white;overflow:hidden;overflow-y:auto;@media only screen and (max-width:996px){width:62px;}"]);
const Profile = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "SideBar__Profile",
  componentId: "sc-158a552-1"
})(["padding:var(--default-gap) var(--default-gap) 5px var(--default-gap);@media only screen and (max-width:996px){padding:var(--default-gap) var(--default-gap) 0 var(--default-gap);", "{max-width:var(--input-height-s);max-height:var(--input-height-s);min-width:var(--input-height-s);min-height:var(--input-height-s);width:var(--input-height-s);height:var(--input-height-s);}}"], Avatar["a" /* Wrap */]);
const Info = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "SideBar__Info",
  componentId: "sc-158a552-2"
})(["grid-gap:0;"]);
const Name = external_styled_components_default()(Title["a" /* default */]).withConfig({
  displayName: "SideBar__Name",
  componentId: "sc-158a552-3"
})(["font-size:var(--font-h4);font-weight:var(--font-weight-medium);"]);
const Role = external_styled_components_default()(Text["b" /* default */]).withConfig({
  displayName: "SideBar__Role",
  componentId: "sc-158a552-4"
})(["color:", ";"], defaultColor);
const Strip = external_styled_components_default.a.div.withConfig({
  displayName: "SideBar__Strip",
  componentId: "sc-158a552-5"
})(["display:flex;justify-content:space-between;align-items:center;padding:5px var(--default-gap);a{position:relative;padding:0 15px;transition:background 150ms ease;&.active,&:hover{background:#10151c;}}@media only screen and (max-width:480px){padding:5px 0;}"]);
const Label = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "SideBar__Label",
  componentId: "sc-158a552-6"
})(["align-items:center;"]);
const LabelIcon = external_styled_components_default()(Icon["a" /* default */]).withConfig({
  displayName: "SideBar__LabelIcon",
  componentId: "sc-158a552-7"
})(["width:var(--input-height-s);height:var(--input-height-s);background:var(--admin-color-accent-dim);border-radius:var(--surface-border-radius);", " @media only screen and (max-width:480px){background:var(--default-color-accent-dim);", " svg{path{stroke:var(--default-color-accent);", "}}}"], ({
  active
}) => active && Object(external_styled_components_["css"])(["background:white;"]), ({
  active
}) => active && Object(external_styled_components_["css"])(["background:var(--default-color-accent);"]), ({
  active
}) => active && Object(external_styled_components_["css"])(["stroke:white;"]));
const LabelText = external_styled_components_default()(Text["b" /* default */]).withConfig({
  displayName: "SideBar__LabelText",
  componentId: "sc-158a552-8"
})(["color:", ";font-weight:var(--font-weight-medium);", ""], defaultColor, ({
  active
}) => active && Object(external_styled_components_["css"])(["color:white;"]));
const LinkStrip = ({
  active,
  icon,
  text,
  count
}) => /*#__PURE__*/external_react_default.a.createElement(Strip, null, /*#__PURE__*/external_react_default.a.createElement(Label, null, /*#__PURE__*/external_react_default.a.createElement(LabelIcon, {
  icon: icon,
  size: 'xs',
  stroke: active ? activeColor : defaultColor,
  active: active
}), /*#__PURE__*/external_react_default.a.createElement(LabelText, {
  active: active
}, text)), count && /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], {
  count: count,
  size: 'xs',
  style: !active ? {
    background: defaultColor,
    borderColor: 'transparent',
    color: 'var(--admin-color-accent)'
  } : {}
}));
const Side = ({
  user,
  link: Link,
  links,
  ...props
}) => /*#__PURE__*/external_react_default.a.createElement(Wrap, props, /*#__PURE__*/external_react_default.a.createElement(Profile, null, /*#__PURE__*/external_react_default.a.createElement(Avatar["b" /* default */], {
  src: user.avatar,
  alt: 'Avatar',
  size: 'm'
}), /*#__PURE__*/external_react_default.a.createElement(Info, null, /*#__PURE__*/external_react_default.a.createElement(Name, null, user.name), /*#__PURE__*/external_react_default.a.createElement(Role, null, Object(functions["f" /* getLabelRole */])(user.role)))), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
  style: {
    background: 'var(--admin-color-accent-dim)',
    margin: '10px 0'
  }
}), links && links.length > 0 && links.map((link, index) => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, {
  key: index
}, link.divide && /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
  style: {
    background: 'var(--admin-color-accent-dim)',
    margin: '10px 0'
  }
}), /*#__PURE__*/external_react_default.a.createElement(Link, {
  href: link.path
}, link.component))));
Side.defaultProps = {
  link: ({
    children,
    ...props
  }) => /*#__PURE__*/external_react_default.a.createElement("a", props, children)
};
/* harmony default export */ var SideBar = (Side);
// EXTERNAL MODULE: ./store/helpers/index.js + 4 modules
var helpers = __webpack_require__("+EEm");

// EXTERNAL MODULE: ./store/actions/user.js
var actions_user = __webpack_require__("8ihE");

// CONCATENATED MODULE: ./layouts/dashboard/links.js


const getLinks = permissions => {
  const getAccess = value => permissions.find(permission => permission === value);

  const result = [{
    path: '/',
    component: /*#__PURE__*/external_react_default.a.createElement(LinkStrip, {
      icon: 'activity',
      text: 'Главная'
    })
  }];
  const isHasAccessToUsers = getAccess('VIEW_USER');
  const isHasAccessToCategories = getAccess('VIEW_CATEGORY');
  const isHasAccessToArticles = getAccess('VIEW_ARTICLE');
  const isHasAccessToProjects = getAccess('VIEW_PROJECT');
  const isHasAccessToTickets = getAccess('VIEW_TICKET');
  const isHasAccessToRoles = getAccess('VIEW_ROLE');
  const isHasAccessToSettings = getAccess('VIEW_USER');

  if (isHasAccessToUsers) {
    result.push({
      path: '/users',
      component: /*#__PURE__*/external_react_default.a.createElement(LinkStrip, {
        icon: 'user2',
        text: 'Пользователи'
      })
    });
  }

  if (isHasAccessToCategories) {
    result.push({
      path: '/categories',
      component: /*#__PURE__*/external_react_default.a.createElement(LinkStrip, {
        icon: 'folder',
        text: 'Категории'
      })
    });
  }

  if (isHasAccessToArticles) {
    result.push({
      path: '/articles',
      component: /*#__PURE__*/external_react_default.a.createElement(LinkStrip, {
        icon: 'document',
        text: 'Статьи'
      })
    });
  }

  if (isHasAccessToProjects) {
    result.push({
      path: '/projects',
      component: /*#__PURE__*/external_react_default.a.createElement(LinkStrip, {
        icon: 'work',
        text: 'Проекты'
      })
    });
  }

  if (isHasAccessToTickets) {
    result.push({
      path: '/tickets',
      component: /*#__PURE__*/external_react_default.a.createElement(LinkStrip, {
        icon: 'ticket',
        text: 'Обращения'
      })
    });
  }

  if (isHasAccessToRoles) {
    result.push({
      divide: true,
      path: '/roles',
      component: /*#__PURE__*/external_react_default.a.createElement(LinkStrip, {
        icon: 'lock',
        text: 'Роли'
      })
    });
  }

  if (isHasAccessToSettings) {
    result.push({
      path: '/settings',
      component: /*#__PURE__*/external_react_default.a.createElement(LinkStrip, {
        icon: 'setting',
        text: 'Настройки'
      })
    });
  }

  return result;
};
/* harmony default export */ var dashboard_links = (getLinks);
// EXTERNAL MODULE: ./graphql/queries/index.js + 15 modules
var queries = __webpack_require__("u2Cb");

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// CONCATENATED MODULE: ./layouts/dashboard/index.js

























const Main = external_styled_components_default.a.main.withConfig({
  displayName: "dashboard__Main",
  componentId: "sc-9r28sr-0"
})(["display:flex;grid-gap:var(--default-gap);width:100%;"]);
const Header = external_styled_components_default.a.header.withConfig({
  displayName: "dashboard__Header",
  componentId: "sc-9r28sr-1"
})(["position:fixed;top:0;left:0;z-index:var(--z-15);display:flex;grid-gap:var(--default-gap);background:var(--surface-background);border:var(--surface-border);box-shadow:var(--surface-shadow);padding:var(--default-gap);width:100%;flex-grow:100;"]);
const dashboard_SideBar = external_styled_components_default()(SideBar).withConfig({
  displayName: "dashboard__SideBar",
  componentId: "sc-9r28sr-2"
})(["position:fixed;top:70px;left:0;height:calc(100vh - 70px);z-index:var(--z-12);@media only screen and (max-width:480px){display:none;}"]);
const MenuButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "dashboard__MenuButton",
  componentId: "sc-9r28sr-3"
})(["display:none;@media only screen and (max-width:768px){display:flex;justify-content:center;align-items:center;}"]);
const LogoZone = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "dashboard__LogoZone",
  componentId: "sc-9r28sr-4"
})(["justify-content:space-between;@media only screen and (max-width:996px){width:auto;}"]);
const Logotype = external_styled_components_default.a.div.withConfig({
  displayName: "dashboard__Logotype",
  componentId: "sc-9r28sr-5"
})(["display:flex;justify-content:flex-start;align-items:center;img{height:30px;object-fit:contain;}@media only screen and (max-width:996px){min-width:auto;}@media only screen and (max-width:480px){display:none;}"]);
const Content = external_styled_components_default()(Container["a" /* default */]).withConfig({
  displayName: "dashboard__Content",
  componentId: "sc-9r28sr-6"
})(["padding:70px 15px 15px 255px;flex-grow:1;@media only screen and (max-width:996px){padding:70px 15px 15px 80px;}@media only screen and (max-width:480px){padding:70px 15px 15px 15px;}"]);
const DashboardLayout = ({
  children,
  title = 'Панель администрирования'
}) => {
  var _root$settings$genera, _user$avatar;

  const recall = Object(useHelper["b" /* useHelper */])();
  const router = Object(router_["useRouter"])();
  const {
    root,
    user
  } = Object(external_react_redux_["useSelector"])(state => state);
  const [getUser, {
    data,
    loading
  }] = Object(react_hooks_["useLazyQuery"])(queries["a" /* default */].GET_USER);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    if (false) {}
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (data && data.getUser) {
      var _data$getUser$role;

      const isAccept = (_data$getUser$role = data.getUser.role) === null || _data$getUser$role === void 0 ? void 0 : _data$getUser$role.permissions.find(permission => permission === 'ACCESS_DASHBOARD');

      if (isAccept) {
        dispatch(Object(actions_user["b" /* setUser */])(data.getUser));
      } else {
        router.push('/');
      }
    }
  }, [data, dispatch]);

  if (loading || !user.authenticated) {
    return /*#__PURE__*/external_react_default.a.createElement(Styled["a" /* FixedLoader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null));
  }

  return /*#__PURE__*/external_react_default.a.createElement(main["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(head_default.a, null, /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "keywords",
    content: "next,javascript,nextjs,react"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: root.settings.meta.description
  }), /*#__PURE__*/external_react_default.a.createElement("title", null, title)), /*#__PURE__*/external_react_default.a.createElement(Header, null, /*#__PURE__*/external_react_default.a.createElement(MenuButton, {
    kind: 'icon',
    appearance: 'clear',
    onClick: recall(helpers["e" /* onMenu */], {
      links: dashboard_links((user === null || user === void 0 ? void 0 : user.role.permissions) || []).map((link, index) => ({
        id: index,
        text: link.component,
        onClick: () => router.push(`/dashboard${link.path}`)
      }))
    })
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'menu'
  })), /*#__PURE__*/external_react_default.a.createElement(LogoZone, null, /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
    text: root.settings.meta.description,
    offset: {
      bottom: 5
    },
    place: 'bottom',
    maxWidth: 256,
    multiline: true
  }, /*#__PURE__*/external_react_default.a.createElement(Logotype, null, /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
    href: '/'
  }, /*#__PURE__*/external_react_default.a.createElement("a", null, /*#__PURE__*/external_react_default.a.createElement(Image["a" /* default */], {
    src: (_root$settings$genera = root.settings.general.logotype) === null || _root$settings$genera === void 0 ? void 0 : _root$settings$genera.path,
    alt: 'Logotype'
  })))))), /*#__PURE__*/external_react_default.a.createElement(Search["a" /* default */], {
    appearance: 'ghost'
  })), /*#__PURE__*/external_react_default.a.createElement(Main, null, /*#__PURE__*/external_react_default.a.createElement(dashboard_SideBar, {
    user: {
      name: user.name,
      role: user.role.name,
      avatar: (user === null || user === void 0 ? void 0 : (_user$avatar = user.avatar) === null || _user$avatar === void 0 ? void 0 : _user$avatar.path) || '/images/avatar-default.png'
    },
    link: link_default.a,
    links: dashboard_links((user === null || user === void 0 ? void 0 : user.role.permissions) || []).map((link, index) => {
      const path = `/dashboard${link.path.length > 1 ? link.path : ''}`;
      return { ...link,
        path,
        component: /*#__PURE__*/external_react_default.a.createElement("a", {
          key: index,
          className: router.pathname === path ? 'active' : ''
        }, external_react_default.a.cloneElement(link.component, {
          active: router.pathname === path
        }))
      };
    })
  }), /*#__PURE__*/external_react_default.a.createElement(Content, null, /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, children))));
};
/* harmony default export */ var dashboard = __webpack_exports__["a"] = (DashboardLayout);

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

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "qOKH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setModal; });
/* harmony import */ var _types_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Mdx/");

function setModal(routes, size = 's') {
  return {
    type: _types_modal__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SET_MODAL,
    payload: {
      routes,
      size
    }
  };
}

/***/ }),

/***/ "qoM+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrap; });
/* unused harmony export Form */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BTiB");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "Form__Wrap",
  componentId: "wqhajt-0"
})(["display:flex;flex-direction:column;grid-gap:var(--default-gap);padding:var(--default-gap);flex-grow:1;", " ", ""], ({
  appearance
}) => appearance === 'default' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["border:1px solid var(--surface-border);background:var(--surface-background);box-shadow:1px solid var(--surface-shadow);border-radius:var(--surface-border-radius);"]), ({
  appearance
}) => appearance === 'clear' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["border:none;background:none;box-shadow:none;border-radius:0;padding:0;"]));
const Form = ({
  children,
  onSubmit,
  mutation,
  ...props
}) => {
  if (mutation) {
    const [action, {
      data,
      loading,
      error
    }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(mutation);
    const methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])();
    const Children = children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, _extends({}, props, {
      onSubmit: methods.handleSubmit(form => onSubmit(form, action))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Children, _extends({}, methods, {
      data: data,
      loading: loading,
      error: error
    })));
  }

  return null;
};
Form.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ __webpack_exports__["b"] = (Form);

/***/ }),

/***/ "rCsO":
/***/ (function(module, exports) {

module.exports = require("react-google-login");

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

/***/ "rP4V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ onUserCheckin; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ onUserLink; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ onUserCreate; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ onUserClientEdit; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ onUserEdit; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ onUserMembers; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ onUserDelete; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ onUserAboutMore; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ onUserFolderAdd; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ onUserFolderDelete; });

// UNUSED EXPORTS: onUserLogin, onUserRegister, onUserForgotEmail, onUserForgotPassword, onUserChangePassword

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "generate-password"
var external_generate_password_ = __webpack_require__("mqli");
var external_generate_password_default = /*#__PURE__*/__webpack_require__.n(external_generate_password_);

// EXTERNAL MODULE: ./atomic-ui/components/Tooltip/index.js
var Tooltip = __webpack_require__("VWQm");

// EXTERNAL MODULE: ./atomic-ui/components/Row/index.js
var Row = __webpack_require__("nShV");

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Title/index.js
var Title = __webpack_require__("7sPp");

// EXTERNAL MODULE: ./atomic-ui/components/Text/index.js
var Text = __webpack_require__("QUga");

// EXTERNAL MODULE: ./atomic-ui/components/Input/index.js
var Input = __webpack_require__("Gliw");

// EXTERNAL MODULE: ./atomic-ui/components/Button/index.js
var Button = __webpack_require__("ZeZO");

// EXTERNAL MODULE: ./atomic-ui/components/TextArea/index.js
var TextArea = __webpack_require__("3jgA");

// EXTERNAL MODULE: ./atomic-ui/components/Dropzone/index.js
var Dropzone = __webpack_require__("kJLk");

// EXTERNAL MODULE: ./atomic-ui/components/DatePicker/index.js + 5 modules
var DatePicker = __webpack_require__("wZgm");

// EXTERNAL MODULE: ./atomic-ui/components/Spinner/index.js
var Spinner = __webpack_require__("auMy");

// EXTERNAL MODULE: ./atomic-ui/components/Switch/index.js
var Switch = __webpack_require__("OXt0");

// EXTERNAL MODULE: ./atomic-ui/components/Icon/index.js + 109 modules
var Icon = __webpack_require__("feIE");

// EXTERNAL MODULE: ./atomic-ui/components/Alert/index.js
var Alert = __webpack_require__("ZwIX");

// EXTERNAL MODULE: ./atomic-ui/components/Select/index.js
var Select = __webpack_require__("QclZ");

// EXTERNAL MODULE: ./atomic-ui/components/Divider/index.js
var Divider = __webpack_require__("RKiZ");

// EXTERNAL MODULE: ./atomic-ui/utils/functions.js
var functions = __webpack_require__("NWnW");

// EXTERNAL MODULE: ./components/Form/index.js
var Form = __webpack_require__("qoM+");

// EXTERNAL MODULE: ./components/Styled/index.js
var Styled = __webpack_require__("586Q");

// EXTERNAL MODULE: ./graphql/queries/index.js + 15 modules
var queries = __webpack_require__("u2Cb");

// CONCATENATED MODULE: ./components/FormUser/index.js

























const TAB_TYPES = [{
  label: 'Основное',
  value: 'GENERAL'
}, {
  label: 'Безопасность',
  value: 'SECURITY'
}];
const ACCOUNT_TYPES = [{
  label: 'Физ. лицо',
  value: 'INDIVIDUAL',
  tooltip: 'Любое лицо'
}, {
  label: 'Оф. лицо',
  value: 'OFICIAL',
  tooltip: 'Государственный деятель'
}, {
  label: 'Юр. лицо',
  value: 'ENTITY',
  tooltip: 'Организация'
}];
const GENDER_TYPES = [{
  label: 'Мужской',
  value: 'MALE'
}, {
  label: 'Женский',
  value: 'FEMALE'
}];
const AdaptiveDropzone = external_styled_components_default()(Dropzone["b" /* default */]).withConfig({
  displayName: "FormUser__AdaptiveDropzone",
  componentId: "c1ieix-0"
})(["width:196px;height:276px;@media only screen and (max-width:575px){width:100% !important;height:256px;}"]);
const AdaptiveRow = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "FormUser__AdaptiveRow",
  componentId: "c1ieix-1"
})(["@media only screen and (max-width:575px){flex-direction:column;grid-gap:var(--default-gap);", "{flex-grow:1;button{width:100%;}}}"], Tooltip["a" /* Wrap */]);
const Tab = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "FormUser__Tab",
  componentId: "c1ieix-2"
})(["display:none;", ""], ({
  active
}) => active && Object(external_styled_components_["css"])(["display:flex;"]));
const detect = (list, value) => {
  return list.find(item => item.value === value);
};
const detectAccountType = (types, user) => detect(types, user === null || user === void 0 ? void 0 : user.account);
const detectGender = (types, user) => detect(types, user === null || user === void 0 ? void 0 : user.gender);
const getAccountType = role => {
  if (role) {
    return ACCOUNT_TYPES.find(type => type.value === role);
  }

  return ACCOUNT_TYPES[0];
};
const getLabelGender = gender => {
  if (gender) {
    return GENDER_TYPES.find(type => type.value === gender);
  }

  return GENDER_TYPES[0];
};
const User = ({
  user,
  roles,
  mutation,
  appearance,
  className,
  accountTypes,
  genderTypes,
  canEditRole,
  onSubmit,
  onChangePassword
}) => {
  const {
    data,
    loading: loadingData,
    error
  } = user ? Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_USER, {
    variables: {
      email: user
    }
  }) : {
    data: {
      getUser: {}
    },
    loading: false,
    error: false
  };
  const {
    data: dataCompanies,
    loading: loadingCompanies
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_USERS, {
    variables: {
      account: ['ENTITY']
    }
  });
  const [tab, setTab] = Object(external_react_["useState"])(TAB_TYPES[0]);
  const [account, setAccount] = Object(external_react_["useState"])(null);
  const [isShowPassword, setShowPassword] = Object(external_react_["useState"])(false);

  const onTogglePassword = () => setShowPassword(!isShowPassword);

  return /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
    className: className,
    appearance: appearance,
    mutation: mutation,
    onSubmit: (form, action) => {
      var _data$getUser;

      return onSubmit({ ...form,
        account: account || getAccountType(data === null || data === void 0 ? void 0 : (_data$getUser = data.getUser) === null || _data$getUser === void 0 ? void 0 : _data$getUser.account)
      }, action);
    }
  }, ({
    register,
    control,
    loading,
    errors,
    setValue,
    getValues
  }) => {
    var _data$getUser2, _data$getUser3, _data$getUser3$role, _data$getUser4, _data$getUser5, _data$getUser6, _data$getUser7, _data$getUser8, _data$getUser8$role, _data$getUser9, _data$getUser9$role, _data$getUser10, _data$getUser11, _data$getUser12, _data$getUser14, _data$getUser15, _data$getUser15$role, _data$getUser16, _data$getUser17, _data$getUser18, _data$getUser18$role, _data$getUser19, _data$getUser20, _data$getUser20$role, _data$getUser21, _data$getUser22, _data$getUser23, _data$getUser24, _data$getUser25, _data$getUser26, _data$getUser27, _data$getUser28, _data$getUser28$role;

    return !loading && !loadingData && data && data.getUser ? /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Switch["b" /* default */], {
      defaultValue: tab,
      options: TAB_TYPES,
      onChange: setTab,
      stretch: true
    }), /*#__PURE__*/external_react_default.a.createElement(Tab, {
      active: tab.value === 'GENERAL'
    }, /*#__PURE__*/external_react_default.a.createElement(AdaptiveRow, null, /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'avatar',
      control: control,
      defaultValue: getValues('avatar') || user && (((_data$getUser2 = data.getUser) === null || _data$getUser2 === void 0 ? void 0 : _data$getUser2.avatar) || {
        path: '/images/avatar-default.png'
      }) || null,
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(AdaptiveDropzone, {
        accept: 'image/*',
        defaultValue: value,
        onChange: onChange,
        placeholder: 'Перетащите сюда изображение для превью',
        tooltip: 'Разрешение: 675x590px. Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB'
      })
    }), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
      style: {
        flexGrow: 1
      }
    }, ((_data$getUser3 = data.getUser) === null || _data$getUser3 === void 0 ? void 0 : (_data$getUser3$role = _data$getUser3.role) === null || _data$getUser3$role === void 0 ? void 0 : _data$getUser3$role.name) !== 'ADMIN' && /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
      tag: 'h4'
    }, "\u0410\u043A\u043A\u0430\u0443\u043D\u0442"), /*#__PURE__*/external_react_default.a.createElement(Switch["b" /* default */], {
      defaultValue: account !== null && account !== void 0 && account.value ? account : getAccountType((_data$getUser4 = data.getUser) === null || _data$getUser4 === void 0 ? void 0 : _data$getUser4.account),
      options: (accountTypes === null || accountTypes === void 0 ? void 0 : accountTypes.length) > 1 && accountTypes || ACCOUNT_TYPES,
      onChange: value => setAccount(value),
      disabled: loading,
      stretch: true
    })), /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
      tag: 'h4'
    }, account !== null && account !== void 0 && account.value && (account === null || account === void 0 ? void 0 : account.value) === 'ENTITY' || !(account !== null && account !== void 0 && account.value) && ((_data$getUser5 = data.getUser) === null || _data$getUser5 === void 0 ? void 0 : _data$getUser5.account) === 'ENTITY' ? 'Название компании' : 'ФИО'), canEditRole && errors && errors.name && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0424\u0418\u041E"), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
      type: 'text',
      name: 'name',
      ref: register({
        required: !user
      }),
      defaultValue: getValues('name') || ((_data$getUser6 = data.getUser) === null || _data$getUser6 === void 0 ? void 0 : _data$getUser6.name),
      placeholder: account !== null && account !== void 0 && account.value && (account === null || account === void 0 ? void 0 : account.value) === 'ENTITY' || !(account !== null && account !== void 0 && account.value) && ((_data$getUser7 = data.getUser) === null || _data$getUser7 === void 0 ? void 0 : _data$getUser7.account) === 'ENTITY' ? 'Название компании' : 'ФИО',
      appearance: 'ghost',
      disabled: loading
    }), ((_data$getUser8 = data.getUser) === null || _data$getUser8 === void 0 ? void 0 : (_data$getUser8$role = _data$getUser8.role) === null || _data$getUser8$role === void 0 ? void 0 : _data$getUser8$role.name) === 'ADMIN' && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%',
        textAlign: 'center'
      }
    }, "\u0423 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430"), ((_data$getUser9 = data.getUser) === null || _data$getUser9 === void 0 ? void 0 : (_data$getUser9$role = _data$getUser9.role) === null || _data$getUser9$role === void 0 ? void 0 : _data$getUser9$role.name) !== 'ADMIN' && /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
      tag: 'h4'
    }, account !== null && account !== void 0 && account.value && (account === null || account === void 0 ? void 0 : account.value) === 'ENTITY' || !(account !== null && account !== void 0 && account.value) && ((_data$getUser10 = data.getUser) === null || _data$getUser10 === void 0 ? void 0 : _data$getUser10.account) === 'ENTITY' ? 'Дата основания' : 'Дата рождения'), /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'dateOfBirth',
      control: control,
      defaultValue: getValues('dateOfBirth') || ((_data$getUser11 = data.getUser) === null || _data$getUser11 === void 0 ? void 0 : _data$getUser11.dateOfBirth) && new Date((_data$getUser12 = data.getUser) === null || _data$getUser12 === void 0 ? void 0 : _data$getUser12.dateOfBirth) || null,
      render: ({
        value,
        onChange
      }) => {
        var _data$getUser13;

        return /*#__PURE__*/external_react_default.a.createElement(DatePicker["a" /* default */], {
          value: value,
          onChange: onChange,
          placeholder: account !== null && account !== void 0 && account.value && (account === null || account === void 0 ? void 0 : account.value) === 'ENTITY' || !(account !== null && account !== void 0 && account.value) && ((_data$getUser13 = data.getUser) === null || _data$getUser13 === void 0 ? void 0 : _data$getUser13.account) === 'ENTITY' ? 'Дата основания' : 'Дата рождения',
          appearance: 'ghost',
          withYearDisplay: false,
          withNavigate: true,
          canEditYear: true
        });
      }
    })))), ((account === null || account === void 0 ? void 0 : account.value) && (account === null || account === void 0 ? void 0 : account.value) !== 'ENTITY' || !(account !== null && account !== void 0 && account.value) && ((_data$getUser14 = data.getUser) === null || _data$getUser14 === void 0 ? void 0 : _data$getUser14.account) !== 'ENTITY') && ((_data$getUser15 = data.getUser) === null || _data$getUser15 === void 0 ? void 0 : (_data$getUser15$role = _data$getUser15.role) === null || _data$getUser15$role === void 0 ? void 0 : _data$getUser15$role.name) !== 'ADMIN' && /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
      style: {
        flexGrow: 1
      }
    }, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
      tag: 'h4'
    }, "\u041F\u043E\u043B"), /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'gender',
      control: control,
      defaultValue: getValues('gender') || getLabelGender((_data$getUser16 = data.getUser) === null || _data$getUser16 === void 0 ? void 0 : _data$getUser16.gender),
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(Switch["b" /* default */], {
        defaultValue: value,
        onChange: onChange,
        options: (genderTypes === null || genderTypes === void 0 ? void 0 : genderTypes.length) > 1 && genderTypes || GENDER_TYPES,
        disabled: loading,
        stretch: true
      })
    })), ((account === null || account === void 0 ? void 0 : account.value) && (account === null || account === void 0 ? void 0 : account.value) !== 'ENTITY' || !(account !== null && account !== void 0 && account.value) && ((_data$getUser17 = data.getUser) === null || _data$getUser17 === void 0 ? void 0 : _data$getUser17.account) !== 'ENTITY') && ((_data$getUser18 = data.getUser) === null || _data$getUser18 === void 0 ? void 0 : (_data$getUser18$role = _data$getUser18.role) === null || _data$getUser18$role === void 0 ? void 0 : _data$getUser18$role.name) !== 'ADMIN' && /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
      tag: 'h4'
    }, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"), /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'company',
      control: control,
      defaultValue: getValues('company') || ((_data$getUser19 = data.getUser) !== null && _data$getUser19 !== void 0 && _data$getUser19.company ? {
        value: data.getUser.company.id,
        label: data.getUser.company.name
      } : null),
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(Select["a" /* default */], {
        appearance: 'ghost',
        defaultValue: value,
        placeholder: 'Выберите компанию',
        options: ((dataCompanies === null || dataCompanies === void 0 ? void 0 : dataCompanies.getUsers) || []).map(company => ({
          value: company.email,
          label: company.name
        })),
        onChange: onChange,
        isLoading: loadingCompanies || loading,
        isSearchable: true,
        cacheOptions: true
      })
    })), ((_data$getUser20 = data.getUser) === null || _data$getUser20 === void 0 ? void 0 : (_data$getUser20$role = _data$getUser20.role) === null || _data$getUser20$role === void 0 ? void 0 : _data$getUser20$role.name) !== 'ADMIN' && /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
      tag: 'h4'
    }, account !== null && account !== void 0 && account.value && (account === null || account === void 0 ? void 0 : account.value) === 'ENTITY' || !(account !== null && account !== void 0 && account.value) && ((_data$getUser21 = data.getUser) === null || _data$getUser21 === void 0 ? void 0 : _data$getUser21.account) === 'ENTITY' ? 'О компании' : 'О себе'), /*#__PURE__*/external_react_default.a.createElement(TextArea["a" /* default */], {
      type: 'text',
      name: 'about',
      ref: register(),
      defaultValue: getValues('about') || ((_data$getUser22 = data.getUser) === null || _data$getUser22 === void 0 ? void 0 : _data$getUser22.about) || '',
      placeholder: 'Расскажите о себе пару слов',
      disabled: loading,
      appearance: 'ghost'
    }))), /*#__PURE__*/external_react_default.a.createElement(Tab, {
      active: tab.value === 'SECURITY'
    }, canEditRole && errors && (errors.email || errors.phone) && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, errors.email && /*#__PURE__*/external_react_default.a.createElement("p", null, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u044D\u043B. \u043F\u043E\u0447\u0442\u0430"), errors.phone && /*#__PURE__*/external_react_default.a.createElement("p", null, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D")), /*#__PURE__*/external_react_default.a.createElement(AdaptiveRow, null, /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
      style: {
        flexGrow: 1
      }
    }, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
      tag: 'h4'
    }, "\u042D\u043B. \u043F\u043E\u0447\u0442\u0430"), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
      type: 'email',
      name: 'email',
      ref: register({
        required: !user
      }),
      defaultValue: getValues('email') || ((_data$getUser23 = data.getUser) === null || _data$getUser23 === void 0 ? void 0 : _data$getUser23.email),
      placeholder: 'Эл. почта',
      appearance: 'ghost',
      disabled: loading
    })), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
      style: {
        flexGrow: 1
      }
    }, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
      tag: 'h4'
    }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
      type: 'tel',
      name: 'phone',
      ref: register({
        required: !user
      }),
      defaultValue: getValues('phone') || ((_data$getUser24 = data.getUser) === null || _data$getUser24 === void 0 ? void 0 : _data$getUser24.phone),
      placeholder: 'Телефон',
      appearance: 'ghost',
      disabled: loading
    }))), /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
      tag: 'h4'
    }, "\u041F\u0430\u0440\u043E\u043B\u044C"), canEditRole && errors && errors.password && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u043F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/external_react_default.a.createElement(AdaptiveRow, null, /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
      name: 'password',
      ref: register({
        required: !user
      }),
      type: isShowPassword ? 'text' : 'password',
      defaultValue: getValues('password') || ((_data$getUser25 = data.getUser) === null || _data$getUser25 === void 0 ? void 0 : _data$getUser25.password),
      appearance: 'ghost',
      placeholder: 'Пароль',
      readOnly: !canEditRole
    }), canEditRole && /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
      text: 'Генерация пароля'
    }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
      type: 'button',
      kind: 'icon',
      disabled: loading,
      onClick: () => setValue('password', external_generate_password_default.a.generate())
    }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
      icon: 'password',
      stroke: 'white'
    }))), canEditRole && /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
      text: 'Отображение пароля'
    }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
      type: 'button',
      kind: 'icon',
      disabled: loading,
      onClick: onTogglePassword,
      revert: !isShowPassword
    }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
      icon: isShowPassword ? 'hide' : 'show',
      stroke: isShowPassword ? 'white' : 'var(--default-color-accent)'
    }))), !canEditRole && /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
      text: 'Смена пароля'
    }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
      type: 'button',
      kind: 'icon',
      disabled: loading,
      onClick: onChangePassword
    }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
      icon: 'edit',
      stroke: 'white'
    })))), /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 \u0432\u043E\u0441\u044C\u043C\u0438 \u0437\u043D\u0430\u043A\u043E\u0432, \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0431\u0443\u043A\u0432\u044B, \u0446\u0438\u0444\u0440\u044B \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u044B")), canEditRole && /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
      clear: true
    }), canEditRole && errors && errors.role && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      style: {
        width: '100%'
      },
      appearance: 'error'
    }, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0440\u043E\u043B\u044C"), canEditRole && /*#__PURE__*/external_react_default.a.createElement(external_react_hook_form_["Controller"], {
      name: 'role',
      control: control,
      defaultValue: getValues('role') || ((_data$getUser26 = data.getUser) === null || _data$getUser26 === void 0 ? void 0 : _data$getUser26.role) && {
        value: (_data$getUser27 = data.getUser) === null || _data$getUser27 === void 0 ? void 0 : _data$getUser27.role.id,
        label: Object(functions["f" /* getLabelRole */])((_data$getUser28 = data.getUser) === null || _data$getUser28 === void 0 ? void 0 : (_data$getUser28$role = _data$getUser28.role) === null || _data$getUser28$role === void 0 ? void 0 : _data$getUser28$role.name)
      } || null,
      render: ({
        value,
        onChange
      }) => /*#__PURE__*/external_react_default.a.createElement(Select["a" /* default */], {
        appearance: 'ghost',
        defaultValue: value,
        onChange: onChange,
        placeholder: 'Выберите роль',
        options: (roles || []).map(item => ({
          value: item.id,
          label: Object(functions["f" /* getLabelRole */])(item.name)
        })),
        menuPlacement: 'top',
        isLoading: loading,
        isClearable: true
      })
    }), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
      clear: true
    }), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
      type: 'submit',
      style: {
        flexGrow: 1
      },
      disabled: loading
    }, user ? 'Сохранить' : 'Создать'))) : error ? /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
      appearance: 'error',
      style: {
        width: '100%',
        textAlign: 'center'
      }
    }, "\u0423\u043F\u0441! \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435") : /*#__PURE__*/external_react_default.a.createElement(Styled["c" /* Loader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null));
  });
};
User.defaultProps = {
  canEditAccount: true
};
/* harmony default export */ var FormUser = (User);
// EXTERNAL MODULE: external "react-google-login"
var external_react_google_login_ = __webpack_require__("rCsO");

// EXTERNAL MODULE: external "react-facebook-login/dist/facebook-login-render-props"
var facebook_login_render_props_ = __webpack_require__("G4lZ");
var facebook_login_render_props_default = /*#__PURE__*/__webpack_require__.n(facebook_login_render_props_);

// EXTERNAL MODULE: ./atomic-ui/components/Container/index.js
var Container = __webpack_require__("N0uN");

// CONCATENATED MODULE: ./components/FormCheckin/index.js















const GOOGLE_CLIENT_ID = '1008300307671-dvv5no8uimgk2lodr76m9rnnva8g0lii.apps.googleusercontent.com';
const FACEBOOK_APP_ID = 697333197849130;
const SocialButtons = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "FormCheckin__SocialButtons",
  componentId: "sc-115b6b6-0"
})(["justify-content:center;"]);
const GoogleButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "FormCheckin__GoogleButton",
  componentId: "sc-115b6b6-1"
})(["background:#c5331e;height:var(--input-height-m);min-height:var(--input-height-m);&:hover{background:#c5331e;opacity:0.65;}"]);
const FacebookButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "FormCheckin__FacebookButton",
  componentId: "sc-115b6b6-2"
})(["background:#4e6297;height:var(--input-height-m);min-height:var(--input-height-m);&:hover{background:#4e6297;opacity:0.65;}"]);
const GoogleAuthButton = ({
  mutation,
  onError,
  onFinally,
  onSubmit
}) => {
  const [isLoading, setLoading] = external_react_default.a.useState(false);
  const [auth, {
    data,
    error
  }] = Object(react_hooks_["useMutation"])(mutation);
  Object(external_react_["useEffect"])(() => {
    if (data && data.googleAuth && data.googleAuth) {
      setLoading(false);
      if (onFinally) onFinally(data.googleAuth);
    }
  }, [data, onFinally]);
  Object(external_react_["useEffect"])(() => {
    if (error) {
      console.log('GoogleAuthButton error', error);
      setLoading(false);
    }
  }, [error]);
  return /*#__PURE__*/external_react_default.a.createElement(external_react_google_login_["GoogleLogin"], {
    clientId: GOOGLE_CLIENT_ID,
    onSuccess: response => onSubmit(response, auth),
    onFailure: onError,
    onRequest: () => setLoading(true),
    cookiePolicy: 'single_host_origin',
    render: ({
      onClick
    }) => /*#__PURE__*/external_react_default.a.createElement(GoogleButton, {
      type: 'button',
      kind: 'icon',
      appearance: 'clear',
      onClick: onClick,
      disabled: isLoading
    }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
      icon: 'google',
      stroke: 'none',
      fill: 'white'
    }))
  });
};
const FacebookAuthButton = ({
  mutation,
  onError,
  onFinally,
  onSubmit
}) => {
  const [isLoading, setLoading] = external_react_default.a.useState(false);
  const [auth, {
    error,
    data
  }] = Object(react_hooks_["useMutation"])(mutation);
  Object(external_react_["useEffect"])(() => {
    if (data && data.facebookAuth && data.facebookAuth) {
      setLoading(false);
      if (onFinally) onFinally(data.facebookAuth);
    }
  }, [data, onFinally]);
  Object(external_react_["useEffect"])(() => {
    if (error) {
      console.log('FacebookAuthButton error', error);
      setLoading(false);
      if (onError) onError(error);
    }
  }, [error, onError]);

  const onClick = (event, renderProps) => {
    event.preventDefault();
    renderProps.onClick(event);
    setLoading(true);
  };

  return /*#__PURE__*/external_react_default.a.createElement(facebook_login_render_props_default.a, {
    appId: FACEBOOK_APP_ID,
    autoLoad: false,
    callback: response => onSubmit(response, auth),
    render: props => /*#__PURE__*/external_react_default.a.createElement(FacebookButton, {
      type: 'button',
      kind: 'icon',
      appearance: 'clear',
      onClick: event => onClick(event, props),
      disabled: isLoading
    }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
      icon: 'facebook',
      stroke: 'none',
      fill: 'white'
    }))
  });
};
const Checkin = ({
  title = true,
  mutations,
  appearance,
  className,
  onGoogleError,
  onFacebookError,
  onGoogleFinally,
  onFacebookFinally,
  onGoogleSubmit,
  onFacebookSubmit,
  onForgot,
  onCreate,
  onSubmit
}) => /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
  className: className,
  appearance: appearance,
  mutation: mutations.checkin,
  onSubmit: onSubmit
}, ({
  register,
  errors,
  loading
}) => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, title && /*#__PURE__*/external_react_default.a.createElement(Container["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
  style: {
    textAlign: 'center'
  },
  tag: 'h4'
}, "\u0412\u0445\u043E\u0434")), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, errors && errors.login && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
  style: {
    width: '100%'
  },
  appearance: 'error'
}, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D/\u044D\u043B. \u043F\u043E\u0447\u0442\u0430"), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
  type: 'text',
  name: 'login',
  ref: register({
    required: true
  }),
  placeholder: 'Телефон или адрес эл. почты',
  appearance: 'ghost',
  disabled: loading,
  required: true
}), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
  type: 'button',
  appearance: 'link',
  onClick: onForgot
}, "\u0417\u0430\u0431\u044B\u043B\u0438 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B?")), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
  style: {
    flexGrow: 1
  },
  type: 'button',
  disabled: loading,
  onClick: onCreate
}, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
  style: {
    flexGrow: 1
  },
  type: 'submit',
  disabled: loading
}, "\u0414\u0430\u043B\u0435\u0435")), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(SocialButtons, null, /*#__PURE__*/external_react_default.a.createElement(GoogleAuthButton, {
  mutation: mutations.googleAuth,
  onError: onGoogleError,
  onFinally: onGoogleFinally,
  onSubmit: onGoogleSubmit
}), /*#__PURE__*/external_react_default.a.createElement(FacebookAuthButton, {
  mutation: mutations.facebookAuth,
  onError: onFacebookError,
  onFinally: onFacebookFinally,
  onSubmit: onFacebookSubmit
}))));
/* harmony default export */ var FormCheckin = (Checkin);
// CONCATENATED MODULE: ./components/FormLogin/index.js











const Email = external_styled_components_default()(Text["b" /* default */]).withConfig({
  displayName: "FormLogin__Email",
  componentId: "ph30l6-0"
})(["font-size:var(--font-size-m);font-weight:var(--font-weight-regular);color:var(--ghost-color-text);text-align:center;"]);
const Login = ({
  title = true,
  email,
  mutation,
  appearance,
  className,
  onBack,
  onForgot,
  onSubmit
}) => /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
  className: className,
  appearance: appearance,
  mutation: mutation,
  onSubmit: onSubmit
}, ({
  register,
  errors,
  loading
}) => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, title && /*#__PURE__*/external_react_default.a.createElement(Container["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
  style: {
    textAlign: 'center'
  },
  tag: 'h4'
}, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C!"), /*#__PURE__*/external_react_default.a.createElement(Email, null, "(", email, ")")), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, errors && errors.password && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
  style: {
    width: '100%'
  },
  appearance: 'error'
}, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u043F\u0430\u0440\u043E\u043B\u044C"), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
  type: 'password',
  name: 'password',
  ref: register({
    required: true
  }),
  placeholder: 'Введите пароль',
  appearance: 'ghost',
  disabled: loading
}), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
  type: 'button',
  appearance: 'link',
  loading: loading.toString(),
  onClick: onForgot
}, "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?")), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
  style: {
    flexGrow: 1
  },
  type: 'button',
  disabled: loading,
  onClick: onBack
}, "\u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
  style: {
    flexGrow: 1
  },
  disabled: loading,
  type: 'submit'
}, "\u0414\u0430\u043B\u0435\u0435"))));
Login.defaultProps = {
  email: 'admin@example.com'
};
/* harmony default export */ var FormLogin = (Login);
// CONCATENATED MODULE: ./components/FormRegister/index.js















const FormRegister_ACCOUNT_TYPES = [{
  label: 'Физ. лицо',
  value: 'INDIVIDUAL',
  tooltip: 'Любое лицо'
}, {
  label: 'Оф. лицо',
  value: 'OFICIAL',
  tooltip: 'Государственный деятель'
}, {
  label: 'Юр. лицо',
  value: 'ENTITY',
  tooltip: 'Организация'
}];
const FormRegister_AdaptiveRow = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "FormRegister__AdaptiveRow",
  componentId: "sc-56g8v2-0"
})(["@media only screen and (max-width:575px){flex-direction:column;grid-gap:var(--default-gap);", "{flex-grow:1;button{width:100%;}}}"], Tooltip["a" /* Wrap */]);
const Register = ({
  title = true,
  accountTypes,
  mutation,
  appearance,
  className,
  onLogin,
  onSubmit
}) => {
  const [typeAccount, setTypeAccount] = Object(external_react_["useState"])(FormRegister_ACCOUNT_TYPES[0]);
  const [isShowPassword, setShowPassword] = Object(external_react_["useState"])(false);
  const [generatedPassword, setGeneratedPassword] = Object(external_react_["useState"])('');
  const [disabled, setDisabled] = Object(external_react_["useState"])(true);

  const onTogglePassword = () => setShowPassword(!isShowPassword);

  const onGeneratePassword = () => {
    const password = external_generate_password_default.a.generate();
    setGeneratedPassword(password);
  };

  return /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
    className: className,
    appearance: appearance,
    mutation: mutation,
    onSubmit: (form, action) => onSubmit({ ...form,
      account: typeAccount
    }, action)
  }, ({
    register,
    loading,
    errors,
    getValues
  }) => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, title && /*#__PURE__*/external_react_default.a.createElement(Container["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    style: {
      textAlign: 'center'
    },
    tag: 'h4'
  }, "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442")), (errors.name || errors.tin || errors.email || errors.phone || errors.password || errors.confirmPassword || errors.confirmPassword) && /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    style: {
      width: '100%'
    },
    appearance: 'error'
  }, errors.name && /*#__PURE__*/external_react_default.a.createElement("p", null, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0424\u0418\u041E"), errors.tin && /*#__PURE__*/external_react_default.a.createElement("p", null, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u0418\u041D\u041D"), errors.email && /*#__PURE__*/external_react_default.a.createElement("p", null, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u044D\u043B. \u043F\u043E\u0447\u0442\u0430"), errors.phone && /*#__PURE__*/external_react_default.a.createElement("p", null, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D"), errors.password && /*#__PURE__*/external_react_default.a.createElement("p", null, "\u041D\u0435\u0432\u0435\u0440\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u043D \u0438\u043B\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u043F\u0430\u0440\u043E\u043B\u044C"), !errors.confirmPassword && errors.confirmPassword && /*#__PURE__*/external_react_default.a.createElement("p", null, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442")), /*#__PURE__*/external_react_default.a.createElement(Switch["b" /* default */], {
    onChange: item => setTypeAccount(item),
    defaultValue: getValues('account') || typeAccount,
    options: (accountTypes === null || accountTypes === void 0 ? void 0 : accountTypes.length) > 1 && accountTypes || FormRegister_ACCOUNT_TYPES,
    disabled: loading,
    stretch: true
  }), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: 'text',
    name: 'name',
    ref: register({
      required: true
    }),
    onChange: () => setDisabled(false),
    defaultValue: getValues('name'),
    placeholder: typeAccount.value === 'ENTITY' ? 'Название компании' : 'ФИО',
    appearance: 'ghost',
    disabled: loading
  }), typeAccount.value !== 'INDIVIDUAL' && /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: 'text',
    name: 'tin',
    ref: register({
      required: true
    }),
    onChange: () => setDisabled(false),
    defaultValue: getValues('tin'),
    appearance: 'ghost',
    placeholder: 'ИНН',
    disabled: loading
  }), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: 'email',
    name: 'email',
    ref: register({
      required: true,
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }),
    onChange: () => setDisabled(false),
    defaultValue: getValues('email'),
    placeholder: 'Эл. почта',
    appearance: 'ghost',
    disabled: loading
  }), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: 'tel',
    name: 'phone',
    ref: register({
      required: true,
      maxLength: 11,
      minLength: 8
    }),
    onChange: () => setDisabled(false),
    defaultValue: getValues('phone'),
    appearance: 'ghost',
    placeholder: 'Телефон',
    disabled: loading
  })), /*#__PURE__*/external_react_default.a.createElement(FormRegister_AdaptiveRow, null, /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: isShowPassword ? 'text' : 'password',
    name: 'password',
    ref: register({
      required: true,
      minLength: 8
    }),
    defaultValue: generatedPassword || getValues('password'),
    appearance: 'ghost',
    placeholder: 'Пароль',
    onChange: () => {
      setGeneratedPassword('');
      setDisabled(false);
    },
    disabled: loading
  }), /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: isShowPassword ? 'text' : 'password',
    name: 'confirmPassword',
    ref: register({
      required: true,
      minLength: 8
    }),
    defaultValue: generatedPassword || getValues('confirmPassword'),
    appearance: 'ghost',
    placeholder: 'Подтвердить',
    onChange: () => {
      setGeneratedPassword('');
      setDisabled(false);
    },
    disabled: loading
  })), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
    text: 'Генерация пароля'
  }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    type: 'button',
    kind: 'icon',
    disabled: loading,
    onClick: () => {
      onGeneratePassword();
      setDisabled(false);
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'password',
    stroke: 'white'
  }))), /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
    text: 'Отображение пароля'
  }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    type: 'button',
    kind: 'icon',
    disabled: loading,
    onClick: onTogglePassword,
    revert: !isShowPassword
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: isShowPassword ? 'hide' : 'show',
    stroke: isShowPassword ? 'white' : 'var(--default-color-accent)'
  }))))), /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 \u0432\u043E\u0441\u044C\u043C\u0438 \u0437\u043D\u0430\u043A\u043E\u0432, \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0431\u0443\u043A\u0432\u044B, \u0446\u0438\u0444\u0440\u044B \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u044B"), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      flexGrow: 1
    },
    type: 'button',
    disabled: loading,
    onClick: onLogin
  }, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      flexGrow: 1
    },
    type: 'submit',
    disabled: disabled || loading
  }, "\u0414\u0430\u043B\u0435\u0435"))));
};
/* harmony default export */ var FormRegister = (Register);
// CONCATENATED MODULE: ./components/FormForgotEmail/index.js









const ForgotEmail = ({
  title = true,
  appearance,
  className,
  onBack,
  onSubmit
}) => {
  return /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
    className: className,
    appearance: appearance,
    onSubmit: onSubmit
  }, ({
    register,
    loading
  }) => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, title && /*#__PURE__*/external_react_default.a.createElement(Container["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    style: {
      textAlign: 'center'
    },
    tag: 'h4'
  }, "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u044D\u043B. \u043F\u043E\u0447\u0442\u044B")), /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, "\u041A\u0430\u043A\u043E\u0435 \u0432\u0430\u0448\u0435 \u043B\u044E\u0431\u0438\u043C\u043E\u0435 \u0431\u043B\u044E\u0434\u043E?"), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: 'text',
    name: 'answer',
    inputRef: register({
      required: true
    }),
    placeholder: 'Введите ответ на контрольный вопрос',
    loading: loading.toString(),
    appearance: 'ghost',
    required: true
  })), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, onBack && /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      flexGrow: 1
    },
    type: 'button',
    appearance: 'ghost',
    loading: loading.toString(),
    onClick: onBack
  }, "\u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      flexGrow: 1
    },
    type: 'submit',
    loading: loading.toString()
  }, "\u0414\u0430\u043B\u0435\u0435"))));
};
/* harmony default export */ var FormForgotEmail = (ForgotEmail);
// CONCATENATED MODULE: ./components/FormForgotPassword/index.js









const ForgotPassword = ({
  title = true,
  appearance,
  className,
  onBack,
  onSubmit
}) => {
  return /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
    className: className,
    appearance: appearance,
    onSubmit: onSubmit
  }, ({
    register,
    loading
  }) => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, title && /*#__PURE__*/external_react_default.a.createElement(Container["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    style: {
      textAlign: 'center'
    },
    tag: 'h4'
  }, "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F")), /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u044D\u0442\u043E\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043C\u043D\u0438\u0442\u0435"), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: 'password',
    name: 'forgotPassword',
    inputRef: register({
      required: true
    }),
    placeholder: 'Введите последний пароль',
    appearance: 'ghost',
    loading: loading.toString(),
    required: true
  })), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, onBack && /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      flexGrow: 1
    },
    type: 'button',
    appearance: 'ghost',
    loading: loading.toString(),
    onClick: onBack
  }, "\u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      flexGrow: 1
    },
    type: 'submit',
    loading: loading.toString()
  }, "\u0414\u0430\u043B\u0435\u0435"))));
};
/* harmony default export */ var FormForgotPassword = (ForgotPassword);
// CONCATENATED MODULE: ./components/FormChangePassword/index.js








const ChangePassword = ({
  title = true,
  appearance,
  className,
  mutation,
  onSubmit
}) => {
  return /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
    className: className,
    appearance: appearance,
    mutation: mutation,
    onSubmit: onSubmit
  }, ({
    register,
    loading
  }) => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, title && /*#__PURE__*/external_react_default.a.createElement(Container["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    style: {
      textAlign: 'center'
    },
    tag: 'h4'
  }, "\u0421\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F")), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: 'password',
    name: 'password',
    inputRef: register({
      required: true
    }),
    placeholder: 'Введите новый пароль',
    appearance: 'ghost',
    loading: loading.toString(),
    required: true
  })), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      flexGrow: 1
    },
    type: 'submit',
    loading: loading.toString()
  }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"))));
};
/* harmony default export */ var FormChangePassword = (ChangePassword);
// CONCATENATED MODULE: ./components/FormAddUserFolder/index.js








const AddUserFolder = ({
  title = true,
  mutation,
  appearance,
  className,
  onCancel,
  onSubmit
}) => {
  return /*#__PURE__*/external_react_default.a.createElement(Form["b" /* default */], {
    className: className,
    appearance: appearance,
    mutation: mutation,
    onSubmit: onSubmit
  }, ({
    register,
    loading
  }) => /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, title && /*#__PURE__*/external_react_default.a.createElement(Container["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    style: {
      textAlign: 'center'
    },
    tag: 'h4'
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438")), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Input["a" /* default */], {
    type: 'text',
    name: 'name',
    ref: register({
      required: true
    }),
    placeholder: 'Введите название папки',
    appearance: 'ghost',
    disabled: loading,
    autoComplete: 'off'
  })), /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, onCancel && /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      flexGrow: 1
    },
    type: 'button',
    appearance: 'ghost',
    disabled: loading,
    onClick: onCancel
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    style: {
      flexGrow: 1
    },
    type: 'submit',
    disabled: loading
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))));
};
/* harmony default export */ var FormAddUserFolder = (AddUserFolder);
// EXTERNAL MODULE: ./components/FormSureDelete/index.js
var FormSureDelete = __webpack_require__("FHIK");

// EXTERNAL MODULE: ./components/FormDelete/index.js
var FormDelete = __webpack_require__("xAqQ");

// EXTERNAL MODULE: ./components/UserCard/index.js
var UserCard = __webpack_require__("TsNn");

// EXTERNAL MODULE: ./atomic-ui/components/Image/index.js
var Image = __webpack_require__("V0nP");

// EXTERNAL MODULE: ./atomic-ui/components/Meta/index.js
var Meta = __webpack_require__("aBfq");

// EXTERNAL MODULE: ./atomic-ui/components/Difinition/index.js
var Difinition = __webpack_require__("DTT8");

// EXTERNAL MODULE: ./hooks/useEntityQuery.js + 1 modules
var useEntityQuery = __webpack_require__("8UhZ");

// EXTERNAL MODULE: ./components/ProjectCard/index.js
var ProjectCard = __webpack_require__("1zqG");

// EXTERNAL MODULE: ./components/Processed/index.js
var Processed = __webpack_require__("2qQv");

// CONCATENATED MODULE: ./components/UserView/index.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






















const Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "UserView__Wrap",
  componentId: "ph8qrp-0"
})(["grid-gap:0;flex-grow:1;", " ", " ", ""], ({
  appearance
}) => appearance === 'default' && Object(external_styled_components_["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const RoundedAvatar = external_styled_components_default()(Image["a" /* default */]).withConfig({
  displayName: "UserView__RoundedAvatar",
  componentId: "ph8qrp-1"
})(["width:196px;height:196px;border-radius:var(--surface-border-radius);border:1px solid var(--ghost-color-background);object-fit:cover;@media only screen and (max-width:480px){width:100%;height:256px;}"]);
const Content = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "UserView__Content",
  componentId: "ph8qrp-2"
})(["grid-gap:0;width:100%;"]);
const Difinitions = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "UserView__Difinitions",
  componentId: "ph8qrp-3"
})(["justify-content:space-between;@media only screen and (max-width:480px){flex-direction:column;grid-gap:var(--default-gap);}"]);
const About = external_styled_components_default.a.div.withConfig({
  displayName: "UserView__About",
  componentId: "ph8qrp-4"
})(["flex-grow:100;p{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;}"]);
const Projects = external_styled_components_default.a.div.withConfig({
  displayName: "UserView__Projects",
  componentId: "ph8qrp-5"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(442px,1fr));grid-gap:var(--default-gap);grid-auto-rows:max-content;@media only screen and (max-width:768px){grid-template-columns:repeat(auto-fit,minmax(285px,1fr));}"]);
const Actions = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "UserView__Actions",
  componentId: "ph8qrp-6"
})(["@media only screen and (max-width:480px){", "{flex-grow:1;button{flex-grow:1;}}}"], Tooltip["a" /* Wrap */]);
const View = ({
  user,
  owned,
  appearance,
  className,
  style,
  onChat,
  onAdd,
  onMembers,
  onAboutMore,
  onProjectAdd,
  onProjectLink,
  onCompanyLink,
  onProjectCompanyLink,
  onProjectScreenshotClick
}) => {
  var _data$getUser, _data$getUser$avatar, _data$getUser2, _data$getUser3, _data$getUser4, _data$getUser5, _data$getUser6, _data$getUser6$about, _data$getUser7, _data$getUser8, _data$getUser9, _data$getUser10, _data$getUser11, _data$getUser12, _data$getUser13, _data$getUser13$compa, _data$getUser13$compa2, _data$getUser14, _data$getUser14$compa, _data$getUser15, _dataParticipatingUse, _dataParticipatingUse2, _dataParticipatingUse3;

  const {
    setQuery
  } = Object(useEntityQuery["b" /* useEntityQuery */])();
  const [isAdded, setAdded] = Object(external_react_["useState"])(false);
  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_USER, {
    variables: {
      email: user
    }
  });
  const {
    data: dataParticipatingUserProjects,
    loading: loadingParticipatingUserProjects,
    error: errorParticipatingUserProjects
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_USER_PARTICIPANT_PROJECTS, {
    variables: {
      member: user
    }
  });

  const onClickAdd = () => {
    if (onAdd) onAdd();
    setAdded(!isAdded);
  };

  return /*#__PURE__*/external_react_default.a.createElement(Wrap, {
    className: className,
    style: style,
    appearance: appearance
  }, /*#__PURE__*/external_react_default.a.createElement(Processed["a" /* default */], {
    data: data === null || data === void 0 ? void 0 : data.getUser,
    loading: loading,
    error: error,
    errorMessage: 'Упс! Не удалось загрузить информацию о пользователе',
    emptyMessage: 'Кажется такого пользователя не существует'
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Row["b" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(RoundedAvatar, {
    src: (data === null || data === void 0 ? void 0 : (_data$getUser = data.getUser) === null || _data$getUser === void 0 ? void 0 : (_data$getUser$avatar = _data$getUser.avatar) === null || _data$getUser$avatar === void 0 ? void 0 : _data$getUser$avatar.path) || '/images/avatar-default.png'
  }), /*#__PURE__*/external_react_default.a.createElement(Content, null, (data === null || data === void 0 ? void 0 : (_data$getUser2 = data.getUser) === null || _data$getUser2 === void 0 ? void 0 : _data$getUser2.account) && /*#__PURE__*/external_react_default.a.createElement(Meta["a" /* default */], {
    category: Object(functions["f" /* getLabelRole */])(data === null || data === void 0 ? void 0 : (_data$getUser3 = data.getUser) === null || _data$getUser3 === void 0 ? void 0 : _data$getUser3.account)
  }), (data === null || data === void 0 ? void 0 : (_data$getUser4 = data.getUser) === null || _data$getUser4 === void 0 ? void 0 : _data$getUser4.name) && /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h3'
  }, data === null || data === void 0 ? void 0 : (_data$getUser5 = data.getUser) === null || _data$getUser5 === void 0 ? void 0 : _data$getUser5.name), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(About, null, (data === null || data === void 0 ? void 0 : (_data$getUser6 = data.getUser) === null || _data$getUser6 === void 0 ? void 0 : (_data$getUser6$about = _data$getUser6.about) === null || _data$getUser6$about === void 0 ? void 0 : _data$getUser6$about.length) > 255 ? /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, data === null || data === void 0 ? void 0 : (_data$getUser7 = data.getUser) === null || _data$getUser7 === void 0 ? void 0 : _data$getUser7.about.slice(0, 255), "..."), /*#__PURE__*/external_react_default.a.createElement(Styled["e" /* More */], {
    onClick: () => onAboutMore(data === null || data === void 0 ? void 0 : data.getUser)
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")) : /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, (data === null || data === void 0 ? void 0 : (_data$getUser8 = data.getUser) === null || _data$getUser8 === void 0 ? void 0 : _data$getUser8.about) || 'Информация о себе не заполнена')))), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(Difinitions, null, (data === null || data === void 0 ? void 0 : (_data$getUser9 = data.getUser) === null || _data$getUser9 === void 0 ? void 0 : _data$getUser9.account) === 'ENTITY' ? /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], {
    icon: 'chart',
    label: 'Участники',
    text: (data === null || data === void 0 ? void 0 : (_data$getUser10 = data.getUser) === null || _data$getUser10 === void 0 ? void 0 : _data$getUser10.members) || '-',
    onLink: (data === null || data === void 0 ? void 0 : (_data$getUser11 = data.getUser) === null || _data$getUser11 === void 0 ? void 0 : _data$getUser11.members) && onMembers
  }) : /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], _extends({}, data !== null && data !== void 0 && (_data$getUser12 = data.getUser) !== null && _data$getUser12 !== void 0 && _data$getUser12.company ? {
    img: data === null || data === void 0 ? void 0 : (_data$getUser13 = data.getUser) === null || _data$getUser13 === void 0 ? void 0 : (_data$getUser13$compa = _data$getUser13.company) === null || _data$getUser13$compa === void 0 ? void 0 : (_data$getUser13$compa2 = _data$getUser13$compa.avatar) === null || _data$getUser13$compa2 === void 0 ? void 0 : _data$getUser13$compa2.path
  } : {
    icon: 'chart'
  }, {
    label: 'Компания',
    text: (data === null || data === void 0 ? void 0 : (_data$getUser14 = data.getUser) === null || _data$getUser14 === void 0 ? void 0 : (_data$getUser14$compa = _data$getUser14.company) === null || _data$getUser14$compa === void 0 ? void 0 : _data$getUser14$compa.name) || '-',
    onLink: (data === null || data === void 0 ? void 0 : (_data$getUser15 = data.getUser) === null || _data$getUser15 === void 0 ? void 0 : _data$getUser15.company) && (() => {
      var _data$getUser16, _data$getUser16$compa;

      return setQuery(data === null || data === void 0 ? void 0 : (_data$getUser16 = data.getUser) === null || _data$getUser16 === void 0 ? void 0 : (_data$getUser16$compa = _data$getUser16.company) === null || _data$getUser16$compa === void 0 ? void 0 : _data$getUser16$compa.email, 'user', onCompanyLink);
    })
  })), /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], {
    icon: 'work',
    label: 'Проекты',
    text: (dataParticipatingUserProjects === null || dataParticipatingUserProjects === void 0 ? void 0 : (_dataParticipatingUse = dataParticipatingUserProjects.getProjects) === null || _dataParticipatingUse === void 0 ? void 0 : _dataParticipatingUse.length) || '-'
  }), !owned && (onChat || onAdd) && /*#__PURE__*/external_react_default.a.createElement(Actions, null, onChat && /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
    text: 'Написать пользователю'
  }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    type: 'button',
    kind: 'icon',
    appearance: 'green',
    onClick: onChat,
    revert: true
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'chat',
    stroke: 'var(--default-color-green)'
  }))), onAdd && /*#__PURE__*/external_react_default.a.createElement(Tooltip["b" /* default */], {
    text: 'Подписаться на пользователя'
  }, /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    type: 'button',
    kind: 'icon',
    onClick: onClickAdd,
    revert: !isAdded
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: isAdded ? 'check' : 'add',
    stroke: isAdded ? 'white' : 'var(--default-color-accent)'
  }))))), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], null, /*#__PURE__*/external_react_default.a.createElement(Title["a" /* default */], {
    tag: 'h4'
  }, "\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"), /*#__PURE__*/external_react_default.a.createElement(Processed["a" /* default */], {
    data: dataParticipatingUserProjects === null || dataParticipatingUserProjects === void 0 ? void 0 : dataParticipatingUserProjects.getProjects,
    loading: loadingParticipatingUserProjects,
    error: errorParticipatingUserProjects,
    errorMessage: 'Упс! Не удалось загрузить информацию о проектах',
    emptyMessage: 'Пользователь не реализовал(-а) ни одного проекта'
  }, /*#__PURE__*/external_react_default.a.createElement(Projects, null, (dataParticipatingUserProjects === null || dataParticipatingUserProjects === void 0 ? void 0 : (_dataParticipatingUse2 = dataParticipatingUserProjects.getProjects) === null || _dataParticipatingUse2 === void 0 ? void 0 : _dataParticipatingUse2.length) === 0 ? /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043B(-\u0430) \u043D\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430") : dataParticipatingUserProjects === null || dataParticipatingUserProjects === void 0 ? void 0 : (_dataParticipatingUse3 = dataParticipatingUserProjects.getProjects) === null || _dataParticipatingUse3 === void 0 ? void 0 : _dataParticipatingUse3.map(project => /*#__PURE__*/external_react_default.a.createElement(ProjectCard["c" /* default */], {
    key: project.id,
    owned: owned,
    project: project,
    appearance: 'clear',
    onAdd: () => onProjectAdd(project),
    onLink: () => onProjectLink(project),
    onAboutMore: () => onAboutMore(project),
    onCompanyLink: project.company && (() => onProjectCompanyLink(project.company)),
    onScreenshotClick: (_, key) => onProjectScreenshotClick && onProjectScreenshotClick(_, key, [project.preview, ...project.screenshots])
  }))))))));
};
View.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ var UserView = (View);
// EXTERNAL MODULE: ./atomic-ui/components/Grid/index.js
var Grid = __webpack_require__("7BXr");

// CONCATENATED MODULE: ./components/Members/index.js












const Members_Wrap = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "Members__Wrap",
  componentId: "sc-2k8qnt-0"
})(["grid-gap:0;flex-grow:1;", " ", " ", ""], ({
  appearance
}) => appearance === 'default' && Object(external_styled_components_["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(external_styled_components_["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Members = ({
  user,
  style,
  appearance,
  className,
  onMemberLink
}) => {
  const {
    setQuery
  } = Object(useEntityQuery["b" /* useEntityQuery */])();
  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_USER_MEMBERS, {
    variables: {
      email: user
    }
  });
  return /*#__PURE__*/external_react_default.a.createElement(Members_Wrap, {
    className: className,
    style: style,
    appearance: appearance
  }, !loading && data ? /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(Grid["a" /* default */], {
    percentage: 'minmax(320px, 1fr)'
  }, data.getUserMembers.map(member => {
    var _member$avatar;

    return /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], {
      key: member.email,
      img: ((_member$avatar = member.avatar) === null || _member$avatar === void 0 ? void 0 : _member$avatar.path) || '/images/avatar-default.png',
      label: Object(functions["f" /* getLabelRole */])(member.about),
      text: member.name,
      onLink: () => setQuery(member.email, 'user', onMemberLink),
      stretch: true
    });
  }))) : error ? /*#__PURE__*/external_react_default.a.createElement(Alert["a" /* default */], {
    appearance: 'error',
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "\u0423\u043F\u0441! \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u0445") : /*#__PURE__*/external_react_default.a.createElement(Styled["c" /* Loader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null)));
};
Members.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ var components_Members = (Members);
// EXTERNAL MODULE: ./store/types/stepper.js
var types_stepper = __webpack_require__("v8xy");

// CONCATENATED MODULE: ./store/actions/stepper.js

function setStepper(stepper) {
  return {
    type: types_stepper["a" /* default */].SET_STEPPER,
    payload: stepper
  };
}
// EXTERNAL MODULE: ./store/actions/drawer.js
var drawer = __webpack_require__("Ztxg");

// EXTERNAL MODULE: ./store/actions/modal.js
var modal = __webpack_require__("qOKH");

// EXTERNAL MODULE: ./store/actions/user.js
var actions_user = __webpack_require__("8ihE");

// EXTERNAL MODULE: ./store/actions/documents.js
var documents = __webpack_require__("j8/+");

// EXTERNAL MODULE: ./store/actions/snacks.js
var snacks = __webpack_require__("9Xo6");

// EXTERNAL MODULE: ./store/helpers/project.js + 6 modules
var helpers_project = __webpack_require__("IxyI");

// EXTERNAL MODULE: ./store/helpers/index.js + 4 modules
var helpers = __webpack_require__("+EEm");

// CONCATENATED MODULE: ./store/helpers/user.js
























function onUserCheckin(dispatch, props) {
  const {
    mutations
  } = props;
  dispatch(setStepper({
    name: 'checkin',
    content: /*#__PURE__*/external_react_default.a.createElement(FormCheckin, {
      mutations: mutations,
      onCreate: () => onUserRegister(dispatch, props),
      onForgot: () => onUserForgotEmail(dispatch, props),
      onGoogleError: () => {},
      onFacebookError: () => {},
      onGoogleFinally: user => dispatch(Object(actions_user["b" /* setUser */])(user)),
      onFacebookFinally: user => dispatch(Object(actions_user["b" /* setUser */])(user)),
      onGoogleSubmit: async (response, action) => {
        const {
          accessToken
        } = response;
        await action({
          variables: {
            accessToken
          }
        });
      },
      onFacebookSubmit: async (response, action) => {
        const {
          accessToken
        } = response;
        await action({
          variables: {
            accessToken
          }
        });
      },
      onSubmit: async (form, action) => {
        try {
          var _response$data;

          const response = await action({
            variables: {
              login: form.login
            }
          });

          if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.checkin) {
            dispatch(Object(actions_user["e" /* updateUser */])({
              login: form.login
            }));
            onUserLogin(dispatch, {
              login: form.login,
              mutations
            });
          }
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось пройти проверку'
          }));
        }
      }
    })
  }));
}
function onUserLogin(dispatch, props) {
  const {
    login,
    mutations
  } = props;
  dispatch(setStepper({
    name: 'login',
    content: /*#__PURE__*/external_react_default.a.createElement(FormLogin, {
      email: login,
      mutation: mutations.login,
      onBack: () => onUserCheckin(dispatch, {
        mutations
      }),
      onForgot: () => onUserForgotPassword(dispatch, {
        mutations
      }),
      onSubmit: async (form, action) => {
        try {
          const response = await action({
            variables: {
              login,
              password: form.password
            }
          });
          const user = response.data.login;
          dispatch(Object(actions_user["b" /* setUser */])(user));
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось авторизоваться'
          }));
        } finally {
          dispatch(setStepper(null));
        }
      }
    })
  }));
}
function onUserRegister(dispatch, props) {
  const {
    mutations
  } = props;
  dispatch(setStepper({
    name: 'register',
    content: /*#__PURE__*/external_react_default.a.createElement(FormRegister, {
      mutation: mutations.register,
      onLogin: () => onUserCheckin(dispatch, {
        mutations
      }),
      onSubmit: async (form, action) => {
        try {
          const response = await action({
            variables: {
              input: {
                name: form.name,
                account: (form === null || form === void 0 ? void 0 : form.account.value) || 'INDIVIDUAL',
                email: form.email,
                phone: form.phone,
                password: form.password,
                confirmPassword: form.confirmPassword
              }
            }
          });
          const user = response.data.register;
          dispatch(Object(actions_user["b" /* setUser */])({ ...user,
            register: true
          }));
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось зарегистрировать пользователя'
          }));
        }
      }
    })
  }));
}
function onUserForgotEmail(dispatch, props) {
  const {
    mutations
  } = props;
  dispatch(setStepper({
    name: 'forgotEmail',
    content: /*#__PURE__*/external_react_default.a.createElement(FormForgotEmail, {
      mutation: mutations.forgotEmail,
      onBack: () => onUserLogin(dispatch, {
        mutations
      }),
      onSubmit: async (form, action) => {
        try {
          await action(form);
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось восстановить эл. почту'
          }));
        }
      }
    })
  }));
}
function onUserForgotPassword(dispatch, props) {
  const {
    mutations
  } = props;
  dispatch(setStepper({
    name: 'forgotPassword',
    content: /*#__PURE__*/external_react_default.a.createElement(FormForgotPassword, {
      mutation: mutations.forgotPassword,
      onBack: () => onUserLogin(dispatch, {
        mutations
      }),
      onSubmit: async (form, action) => {
        try {
          await action(form);
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось восстановить пароль'
          }));
        }
      }
    })
  }));
}
function onUserChangePassword(dispatch, props) {
  const {
    user,
    mutation
  } = props;
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    home: true,
    title: 'Смена пароля',
    component: () => /*#__PURE__*/external_react_default.a.createElement(FormChangePassword, {
      mutation: mutation,
      title: false,
      appearance: 'ghost',
      onSubmit: async (form, action) => {
        try {
          await action({
            variables: {
              id: user.id,
              input: {
                password: form.password
              }
            }
          });
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось изменить пароль'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
        }
      }
    })
  }]));
}
function onUserLink(dispatch, props) {
  const {
    id,
    auth,
    owned
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'user2',
    title: 'Пользователь',
    content: /*#__PURE__*/external_react_default.a.createElement(UserView, {
      user: id,
      owned: owned,
      appearance: 'clear',
      onChat: id !== auth && (() => Object(helpers["a" /* onChat */])(dispatch, props)),
      onMembers: () => onUserMembers(dispatch, {
        id,
        auth
      }),
      onAboutMore: user => onUserAboutMore(dispatch, {
        user
      }),
      onCompanyLink: company => onUserLink(dispatch, {
        id: company.email,
        auth
      }),
      onProjectLink: project => Object(helpers_project["e" /* onProjectLink */])(dispatch, {
        id: project.id,
        project,
        auth,
        owned
      }),
      onProjectAdd: id !== auth && (project => Object(helpers_project["a" /* onProjectAdd */])(dispatch, {
        id: project.id,
        project
      })),
      onProjectCompanyLink: company => auth !== company && onUserLink(dispatch, {
        id: company.email,
        auth,
        owned
      }),
      onProjectScreenshotClick: (_, key, screenshots) => Object(helpers_project["g" /* onProjectScreenshot */])(dispatch, {
        screenshots,
        key
      })
    })
  }));
}
function onUserCreate(dispatch, props) {
  const {
    roles,
    canEditRole,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'user2',
    title: 'Создание пользователя',
    content: /*#__PURE__*/external_react_default.a.createElement(FormUser, {
      roles: roles,
      mutation: mutation,
      appearance: 'clear',
      canEditRole: canEditRole,
      onSubmit: async (form, action) => {
        try {
          var _form$company, _form$account, _form$avatar, _form$avatar2, _form$avatar2$file, _form$gender, _form$role;

          const users = await action({
            variables: {
              input: {
                name: form.name,
                email: form.email,
                phone: form.phone,
                password: form.password,
                company: (_form$company = form.company) === null || _form$company === void 0 ? void 0 : _form$company.value,
                account: (_form$account = form.account) === null || _form$account === void 0 ? void 0 : _form$account.value,
                avatar: (_form$avatar = form.avatar) === null || _form$avatar === void 0 ? void 0 : _form$avatar.file,
                avatarSize: (_form$avatar2 = form.avatar) === null || _form$avatar2 === void 0 ? void 0 : (_form$avatar2$file = _form$avatar2.file) === null || _form$avatar2$file === void 0 ? void 0 : _form$avatar2$file.size,
                about: form.about,
                gender: (_form$gender = form.gender) === null || _form$gender === void 0 ? void 0 : _form$gender.value,
                dateOfBirth: form.dateOfBirth,
                role: (_form$role = form.role) === null || _form$role === void 0 ? void 0 : _form$role.value
              }
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(users.data.createUser));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Пользователь успешно создан'
          }));
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось создать пользователя'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
        }
      }
    })
  }));
}
function onUserClientEdit(dispatch, props) {
  const {
    user,
    mutations
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'user2',
    title: 'Редактирование пользователя',
    content: /*#__PURE__*/external_react_default.a.createElement(FormUser, {
      user: user,
      mutation: mutations.update,
      appearance: 'clear',
      onSubmit: async (form, action) => {
        try {
          var _form$account2, _form$avatar3, _form$avatar4, _form$avatar4$file, _form$company2, _form$gender2, _form$role2;

          const result = await action({
            variables: {
              input: {
                name: form === null || form === void 0 ? void 0 : form.name,
                account: form === null || form === void 0 ? void 0 : (_form$account2 = form.account) === null || _form$account2 === void 0 ? void 0 : _form$account2.value,
                avatar: form === null || form === void 0 ? void 0 : (_form$avatar3 = form.avatar) === null || _form$avatar3 === void 0 ? void 0 : _form$avatar3.file,
                avatarSize: form === null || form === void 0 ? void 0 : (_form$avatar4 = form.avatar) === null || _form$avatar4 === void 0 ? void 0 : (_form$avatar4$file = _form$avatar4.file) === null || _form$avatar4$file === void 0 ? void 0 : _form$avatar4$file.size,
                company: form === null || form === void 0 ? void 0 : (_form$company2 = form.company) === null || _form$company2 === void 0 ? void 0 : _form$company2.value,
                about: form === null || form === void 0 ? void 0 : form.about,
                gender: form === null || form === void 0 ? void 0 : (_form$gender2 = form.gender) === null || _form$gender2 === void 0 ? void 0 : _form$gender2.value,
                phone: form === null || form === void 0 ? void 0 : form.phone,
                email: form === null || form === void 0 ? void 0 : form.email,
                dateOfBirth: form === null || form === void 0 ? void 0 : form.dateOfBirth,
                role: form === null || form === void 0 ? void 0 : (_form$role2 = form.role) === null || _form$role2 === void 0 ? void 0 : _form$role2.value
              }
            }
          });
          dispatch(Object(actions_user["e" /* updateUser */])(result.data.updateClientUser));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Данные успешно отредактированы'
          }));
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось отредактировать данные'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
        }
      },
      onDelete: () => onUserDelete(dispatch, {
        id: user,
        mutation: mutations.del
      }),
      onChangePassword: () => onUserChangePassword(dispatch, {
        mutation: mutations.changePassword
      })
    })
  }));
}
function onUserEdit(dispatch, props) {
  const {
    user,
    roles,
    canEditAccount,
    canEditRole,
    mutations
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'user2',
    title: 'Редактирование пользователя',
    content: /*#__PURE__*/external_react_default.a.createElement(FormUser, {
      user: user,
      roles: roles,
      mutation: mutations.update,
      appearance: 'clear',
      canEditAccount: canEditAccount,
      canEditRole: canEditRole,
      onSubmit: async (form, action) => {
        try {
          var _form$account3, _form$avatar5, _form$avatar6, _form$avatar6$file, _form$company3, _form$gender3, _form$role3;

          const users = await action({
            variables: {
              email: user,
              input: {
                name: form.name,
                account: (_form$account3 = form.account) === null || _form$account3 === void 0 ? void 0 : _form$account3.value,
                avatar: (_form$avatar5 = form.avatar) === null || _form$avatar5 === void 0 ? void 0 : _form$avatar5.file,
                avatarSize: (_form$avatar6 = form.avatar) === null || _form$avatar6 === void 0 ? void 0 : (_form$avatar6$file = _form$avatar6.file) === null || _form$avatar6$file === void 0 ? void 0 : _form$avatar6$file.size,
                company: (_form$company3 = form.company) === null || _form$company3 === void 0 ? void 0 : _form$company3.value,
                about: form.about,
                gender: (_form$gender3 = form.gender) === null || _form$gender3 === void 0 ? void 0 : _form$gender3.value,
                phone: form.phone,
                email: form.email,
                dateOfBirth: form.dateOfBirth,
                role: (_form$role3 = form.role) === null || _form$role3 === void 0 ? void 0 : _form$role3.value
              }
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(users.data.updateUser));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Пользователь успешно отредактирован'
          }));
        } catch (err) {
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось отредактировать пользователя'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
        }
      },
      onDelete: () => onUserDelete(dispatch, {
        id: user,
        mutation: mutations.del
      }),
      onChangePassword: () => onUserChangePassword(dispatch, {
        mutation: mutations.changePassword
      })
    })
  }));
}
function onUserMembers(dispatch, props) {
  const {
    id,
    auth
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'user2',
    title: 'Участники компании',
    content: /*#__PURE__*/external_react_default.a.createElement(components_Members, {
      user: id,
      appearance: 'clear',
      onMemberLink: member => onUserLink(dispatch, {
        id: member,
        auth
      })
    })
  }));
}
function onUserDelete(dispatch, props) {
  const {
    id,
    user,
    mutation
  } = props;
  dispatch(Object(drawer["a" /* setDrawer */])({
    icon: 'delete',
    color: 'red',
    title: 'Удаление пользователя',
    content: /*#__PURE__*/external_react_default.a.createElement(FormDelete["a" /* default */], {
      mutation: mutation,
      appearance: 'clear',
      onCancel: () => dispatch(Object(drawer["a" /* setDrawer */])(null)),
      onSubmit: async (_, action) => {
        try {
          const users = await action({
            variables: {
              email: id
            }
          });
          dispatch(Object(documents["a" /* setDocuments */])(users.data.deleteUser));
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'success',
            message: 'Пользователь успешно удален'
          }));
        } catch (err) {
          console.log(err);
          dispatch(Object(snacks["c" /* setItem */])({
            type: 'error',
            message: 'Не удалось удалить пользователя'
          }));
        } finally {
          dispatch(Object(drawer["a" /* setDrawer */])(null));
        }
      }
    }, /*#__PURE__*/external_react_default.a.createElement(UserCard["a" /* default */], {
      user: user,
      appearance: 'clear'
    }))
  }));
}
function onUserAboutMore(dispatch, props) {
  const {
    user
  } = props;
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: user.about ? 'О себе' : 'Описание',
    component: () => /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
      style: {
        padding: '15px'
      }
    }, /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, user.about || user.description))
  }]));
}
function onUserFolderAdd(dispatch, props) {
  const {
    mutation,
    onCancel,
    callback
  } = props;
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: 'Создание папки',
    component: () => /*#__PURE__*/external_react_default.a.createElement(FormAddUserFolder, {
      title: false,
      mutation: mutation,
      onCancel: () => onCancel ? onCancel() : dispatch(Object(modal["a" /* setModal */])(null)),
      onSubmit: async (form, action) => {
        const response = await action({
          variables: {
            name: form.name
          }
        });
        const folders = response.data.addUserFolder;
        dispatch(Object(actions_user["d" /* setUserFolders */])(folders));
        dispatch(Object(modal["a" /* setModal */])(null));
        if (callback) callback(folders);
      }
    })
  }]));
}
function onUserFolderDelete(dispatch, props) {
  const {
    id,
    mutation,
    callback
  } = props;
  dispatch(Object(modal["a" /* setModal */])([{
    path: '/',
    title: 'Удаление папки',
    component: () => /*#__PURE__*/external_react_default.a.createElement(FormSureDelete["b" /* default */], {
      mutation: mutation,
      appearance: 'clear',
      text: 'Вы действительно хотите удалить папку?',
      onCancel: () => dispatch(Object(modal["a" /* setModal */])(null)),
      onSubmit: async (_, action) => {
        const response = await action({
          variables: {
            id
          }
        });
        dispatch(Object(actions_user["d" /* setUserFolders */])(response.data.deleteUserFolder));
        dispatch(Object(modal["a" /* setModal */])(null));
        if (callback) callback();
      }
    })
  }]));
}

/***/ }),

/***/ "t7jn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Search */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Gliw");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZeZO");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("feIE");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"])`
  width: 100%;
`;
const Search = (_ref) => {
  let {
    onSubmit,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["onSubmit", "className"]);

  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return __jsx(Wrap, {
    className: className
  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _extends({
    type: 'text',
    placeholder: 'Поиск'
  }, props, {
    value: value,
    onChange: e => setValue(e.target.value)
  })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    kind: 'icon',
    onClick: () => onSubmit(value)
  }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    icon: 'search',
    stroke: 'white'
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (Search);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "u2Cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: ./graphql/queries/User/index.js
var User_namespaceObject = {};
__webpack_require__.r(User_namespaceObject);
__webpack_require__.d(User_namespaceObject, "GOOGLE_AUTH", function() { return GOOGLE_AUTH; });
__webpack_require__.d(User_namespaceObject, "FACEBOOK_AUTH", function() { return FACEBOOK_AUTH; });
__webpack_require__.d(User_namespaceObject, "CHECKIN", function() { return CHECKIN; });
__webpack_require__.d(User_namespaceObject, "LOGIN", function() { return LOGIN; });
__webpack_require__.d(User_namespaceObject, "REGISTER", function() { return REGISTER; });
__webpack_require__.d(User_namespaceObject, "LOGOUT", function() { return LOGOUT; });
__webpack_require__.d(User_namespaceObject, "CHECK_USER", function() { return CHECK_USER; });
__webpack_require__.d(User_namespaceObject, "GET_USER", function() { return GET_USER; });
__webpack_require__.d(User_namespaceObject, "GET_USERS", function() { return GET_USERS; });
__webpack_require__.d(User_namespaceObject, "GET_USERS_FOR_TICKET", function() { return GET_USERS_FOR_TICKET; });
__webpack_require__.d(User_namespaceObject, "GET_USER_MEMBERS", function() { return GET_USER_MEMBERS; });
__webpack_require__.d(User_namespaceObject, "GET_USER_PARTICIPANT_PROJECTS", function() { return GET_USER_PARTICIPANT_PROJECTS; });
__webpack_require__.d(User_namespaceObject, "GET_USER_PROJECTS", function() { return GET_USER_PROJECTS; });
__webpack_require__.d(User_namespaceObject, "CREATE_USER", function() { return CREATE_USER; });
__webpack_require__.d(User_namespaceObject, "UPDATE_CLIENT_USER", function() { return UPDATE_CLIENT_USER; });
__webpack_require__.d(User_namespaceObject, "UPDATE_USER", function() { return UPDATE_USER; });
__webpack_require__.d(User_namespaceObject, "DELETE_USER", function() { return DELETE_USER; });
__webpack_require__.d(User_namespaceObject, "ADD_USER_PROJECT", function() { return ADD_USER_PROJECT; });
__webpack_require__.d(User_namespaceObject, "REMOVE_USER_PROJECT", function() { return REMOVE_USER_PROJECT; });
__webpack_require__.d(User_namespaceObject, "ADD_USER_FOLDER", function() { return ADD_USER_FOLDER; });
__webpack_require__.d(User_namespaceObject, "DELETE_USER_FOLDER", function() { return DELETE_USER_FOLDER; });
__webpack_require__.d(User_namespaceObject, "GET_USER_CHATS", function() { return GET_USER_CHATS; });

// NAMESPACE OBJECT: ./graphql/queries/Meta/index.js
var Meta_namespaceObject = {};
__webpack_require__.r(Meta_namespaceObject);
__webpack_require__.d(Meta_namespaceObject, "GET_META", function() { return GET_META; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_SCAFFOLD", function() { return GET_META_SCAFFOLD; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_INDEX", function() { return GET_META_INDEX; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_AUTHORS", function() { return GET_META_AUTHORS; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_ARTICLES", function() { return GET_META_ARTICLES; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_PROJECTS", function() { return GET_META_PROJECTS; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_SETTINGS_PROJECTS", function() { return GET_META_SETTINGS_PROJECTS; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_DASHBOARD_STATISTICS", function() { return GET_META_DASHBOARD_STATISTICS; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_DASHBOARD_ACTIVITIES", function() { return GET_META_DASHBOARD_ACTIVITIES; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_DASHBOARD_SETTINGS", function() { return GET_META_DASHBOARD_SETTINGS; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_DASHBOARD_PREVIEW_ARTICLES", function() { return GET_META_DASHBOARD_PREVIEW_ARTICLES; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_DASHBOARD_PREVIEW_PROJECTS", function() { return GET_META_DASHBOARD_PREVIEW_PROJECTS; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_DASHBOARD_ARTICLES", function() { return GET_META_DASHBOARD_ARTICLES; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_DASHBOARD_PROJECTS", function() { return GET_META_DASHBOARD_PROJECTS; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_DASHBOARD_CATEGORIES", function() { return GET_META_DASHBOARD_CATEGORIES; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_DASHBOARD_TICKETS", function() { return GET_META_DASHBOARD_TICKETS; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_DASHBOARD_USERS", function() { return GET_META_DASHBOARD_USERS; });
__webpack_require__.d(Meta_namespaceObject, "GET_META_DASHBOARD_ROLES", function() { return GET_META_DASHBOARD_ROLES; });
__webpack_require__.d(Meta_namespaceObject, "UPDATE_META_DASHBOARD_SETTINGS", function() { return UPDATE_META_DASHBOARD_SETTINGS; });

// NAMESPACE OBJECT: ./graphql/queries/Chat/index.js
var Chat_namespaceObject = {};
__webpack_require__.r(Chat_namespaceObject);
__webpack_require__.d(Chat_namespaceObject, "GET_CHAT", function() { return GET_CHAT; });

// NAMESPACE OBJECT: ./graphql/queries/Role/index.js
var Role_namespaceObject = {};
__webpack_require__.r(Role_namespaceObject);
__webpack_require__.d(Role_namespaceObject, "GET_ROLE", function() { return GET_ROLE; });
__webpack_require__.d(Role_namespaceObject, "GET_ROLES", function() { return GET_ROLES; });
__webpack_require__.d(Role_namespaceObject, "CREATE_ROLE", function() { return CREATE_ROLE; });
__webpack_require__.d(Role_namespaceObject, "UPDATE_ROLE", function() { return UPDATE_ROLE; });
__webpack_require__.d(Role_namespaceObject, "DELETE_ROLE", function() { return DELETE_ROLE; });

// NAMESPACE OBJECT: ./graphql/queries/File/index.js
var File_namespaceObject = {};
__webpack_require__.r(File_namespaceObject);
__webpack_require__.d(File_namespaceObject, "GET_FILES", function() { return GET_FILES; });
__webpack_require__.d(File_namespaceObject, "CREATE_FILE", function() { return CREATE_FILE; });
__webpack_require__.d(File_namespaceObject, "DELETE_FILE", function() { return DELETE_FILE; });

// NAMESPACE OBJECT: ./graphql/queries/Image/index.js
var Image_namespaceObject = {};
__webpack_require__.r(Image_namespaceObject);
__webpack_require__.d(Image_namespaceObject, "GET_FILES", function() { return Image_GET_FILES; });
__webpack_require__.d(Image_namespaceObject, "CREATE_IMAGE", function() { return CREATE_IMAGE; });
__webpack_require__.d(Image_namespaceObject, "DELETE_IMAGE", function() { return DELETE_IMAGE; });

// NAMESPACE OBJECT: ./graphql/queries/Ticket/index.js
var Ticket_namespaceObject = {};
__webpack_require__.r(Ticket_namespaceObject);
__webpack_require__.d(Ticket_namespaceObject, "GET_TICKET", function() { return GET_TICKET; });
__webpack_require__.d(Ticket_namespaceObject, "GET_TICKETS", function() { return GET_TICKETS; });
__webpack_require__.d(Ticket_namespaceObject, "GET_USER_TICKETS", function() { return GET_USER_TICKETS; });
__webpack_require__.d(Ticket_namespaceObject, "CREATE_USER_TICKET", function() { return CREATE_USER_TICKET; });
__webpack_require__.d(Ticket_namespaceObject, "CREATE_TICKET", function() { return CREATE_TICKET; });
__webpack_require__.d(Ticket_namespaceObject, "UPDATE_TICKET", function() { return UPDATE_TICKET; });
__webpack_require__.d(Ticket_namespaceObject, "DELETE_TICKET", function() { return DELETE_TICKET; });
__webpack_require__.d(Ticket_namespaceObject, "CLOSE_TICKET", function() { return CLOSE_TICKET; });

// NAMESPACE OBJECT: ./graphql/queries/UserChat/index.js
var UserChat_namespaceObject = {};
__webpack_require__.r(UserChat_namespaceObject);
__webpack_require__.d(UserChat_namespaceObject, "GET_USER_CHATS", function() { return UserChat_GET_USER_CHATS; });
__webpack_require__.d(UserChat_namespaceObject, "ADD_USER_CHAT", function() { return ADD_USER_CHAT; });

// NAMESPACE OBJECT: ./graphql/queries/Message/index.js
var Message_namespaceObject = {};
__webpack_require__.r(Message_namespaceObject);
__webpack_require__.d(Message_namespaceObject, "SEND_MESSAGE", function() { return SEND_MESSAGE; });

// NAMESPACE OBJECT: ./graphql/queries/TicketMessage/index.js
var TicketMessage_namespaceObject = {};
__webpack_require__.r(TicketMessage_namespaceObject);
__webpack_require__.d(TicketMessage_namespaceObject, "SEND_TICKET_MESSAGE", function() { return SEND_TICKET_MESSAGE; });

// NAMESPACE OBJECT: ./graphql/queries/Article/index.js
var Article_namespaceObject = {};
__webpack_require__.r(Article_namespaceObject);
__webpack_require__.d(Article_namespaceObject, "GET_ARTICLE", function() { return GET_ARTICLE; });
__webpack_require__.d(Article_namespaceObject, "GET_ARTICLES", function() { return GET_ARTICLES; });
__webpack_require__.d(Article_namespaceObject, "CREATE_ARTICLE", function() { return CREATE_ARTICLE; });
__webpack_require__.d(Article_namespaceObject, "UPDATE_ARTICLE", function() { return UPDATE_ARTICLE; });
__webpack_require__.d(Article_namespaceObject, "DELETE_ARTICLE", function() { return DELETE_ARTICLE; });

// NAMESPACE OBJECT: ./graphql/queries/Project/index.js
var Project_namespaceObject = {};
__webpack_require__.r(Project_namespaceObject);
__webpack_require__.d(Project_namespaceObject, "GET_PROJECT", function() { return GET_PROJECT; });
__webpack_require__.d(Project_namespaceObject, "GET_PROJECTS", function() { return GET_PROJECTS; });
__webpack_require__.d(Project_namespaceObject, "GET_PROJECTS_BY_IDS", function() { return GET_PROJECTS_BY_IDS; });
__webpack_require__.d(Project_namespaceObject, "LIKE_PROJECT", function() { return LIKE_PROJECT; });
__webpack_require__.d(Project_namespaceObject, "CREATE_PROJECT", function() { return CREATE_PROJECT; });
__webpack_require__.d(Project_namespaceObject, "UPDATE_PROJECT", function() { return UPDATE_PROJECT; });
__webpack_require__.d(Project_namespaceObject, "DELETE_PROJECT", function() { return DELETE_PROJECT; });

// NAMESPACE OBJECT: ./graphql/queries/Category/index.js
var Category_namespaceObject = {};
__webpack_require__.r(Category_namespaceObject);
__webpack_require__.d(Category_namespaceObject, "GET_CATEGORY", function() { return GET_CATEGORY; });
__webpack_require__.d(Category_namespaceObject, "GET_CATEGORIES", function() { return GET_CATEGORIES; });
__webpack_require__.d(Category_namespaceObject, "CREATE_CATEGORY", function() { return CREATE_CATEGORY; });
__webpack_require__.d(Category_namespaceObject, "UPDATE_CATEGORY", function() { return UPDATE_CATEGORY; });
__webpack_require__.d(Category_namespaceObject, "DELETE_CATEGORY", function() { return DELETE_CATEGORY; });

// NAMESPACE OBJECT: ./graphql/queries/Comment/index.js
var Comment_namespaceObject = {};
__webpack_require__.r(Comment_namespaceObject);
__webpack_require__.d(Comment_namespaceObject, "GET_COMMENTS", function() { return GET_COMMENTS; });
__webpack_require__.d(Comment_namespaceObject, "SEND_COMMENT", function() { return SEND_COMMENT; });
__webpack_require__.d(Comment_namespaceObject, "LIKE_COMMENT", function() { return LIKE_COMMENT; });
__webpack_require__.d(Comment_namespaceObject, "CREATE_COMMENT", function() { return CREATE_COMMENT; });
__webpack_require__.d(Comment_namespaceObject, "UPDATE_COMMENT", function() { return UPDATE_COMMENT; });
__webpack_require__.d(Comment_namespaceObject, "DELETE_COMMENT", function() { return DELETE_COMMENT; });

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./graphql/fragments/index.js

const UserFields = external_graphql_tag_default.a`
  fragment UserFields on User {
    name
    about
    avatar {
      path
    }
    account
    email
    phone
    members
    company {
      name
      email
      avatar {
        path
      }
    }
    role {
      id
      name
      permissions
    }
    folders {
      id
      name
      projects
    }
    token
    gender
    register
    settings
    dateOfBirth
    updatedAt
    createdAt
  }
`;
const ProjectFields = external_graphql_tag_default.a`
  fragment ProjectFields on Project {
    id
    author {
      name
      avatar {
        path
      }
    }
    title
    description
    body
    company {
      name
      email
      avatar {
        path
      }
    }
    preview {
      id
      path
    }
    members {
      name
      about
      avatar {
        path
      }
      account
      email
    }
    files {
      id
      filename
      size
      path
    }
    screenshots {
      id
      filename
      size
      path
    }
    presentation
    category {
      id
      name
    }
    rating {
      email
      phone
    }
    status
    updatedAt
    createdAt
  }
`;
const ArticleFields = external_graphql_tag_default.a`
  fragment ArticleFields on Article {
    id
    author {
      name
      avatar {
        path
      }
    }
    title
    body
    preview {
      path
    }
    category {
      id
      name
    }
    status
    updatedAt
    createdAt
  }
`;
const CategoryFields = external_graphql_tag_default.a`
  fragment CategoryFields on Category {
    id
    name
    type
    description
    createdAt
  }
`;
const MessageFields = external_graphql_tag_default.a`
  fragment MessageFields on Message {
    id
    user {
      name
      email
      avatar {
        path
      }
    }
    text
    type
    updatedAt
    createdAt
  }
`;
const TicketMessageFields = external_graphql_tag_default.a`
  fragment TicketMessageFields on TicketMessage {
    id
    user {
      name
      email
      avatar {
        path
      }
    }
    ticket {
      id
    }
    text
    type
    updatedAt
    createdAt
  }
`;
const ChatFields = external_graphql_tag_default.a`
  fragment ChatFields on Chat {
    id
    type
    title
    members {
      name
      email
      avatar {
        path
      }
    }
  }
`;
const ImageFields = external_graphql_tag_default.a`
  fragment ImageFields on Image {
    id
    path
    filename
    updatedAt
    createdAt
  }
`;
const FileFields = external_graphql_tag_default.a`
  fragment FileFields on File {
    id
    path
    filename
    updatedAt
    createdAt
  }
`;
const RoleFields = external_graphql_tag_default.a`
  fragment RoleFields on Role {
    id
    name
    permissions
    createdAt
  }
`;
const TicketFields = external_graphql_tag_default.a`
  fragment TicketFields on Ticket {
    id
    title
    author {
      name
      email
      avatar {
        path
      }
    }
    counsellor {
      name
      email
      avatar {
        path
      }
    }
    messages {
      id
      text
      user {
        name
        email
        avatar {
          path
        }
      }
      updatedAt
      createdAt
    }
    category {
      id
      name
    }
    status
    updatedAt
    createdAt
  }
`;
const CommentFields = external_graphql_tag_default.a`
  fragment CommentFields on Comment {
    id
    author {
      name
      avatar {
        id
        path
        filename
      }
    }
    likes {
      email
      name
    }
    text
    updatedAt
    createdAt
  }
`;
const DashboardSettingsFields = external_graphql_tag_default.a`
  fragment DashboardSettingsFields on DashboardSettings {
    general {
      logotype {
        path
        size
      }
    }
    scaffold {
      title
      primary {
        id
        title
      }
      residues{
        id
        title
      }
      background {
        path
        size
      }
    }
    meta {
      title
      description
    }
  }
`;
// CONCATENATED MODULE: ./graphql/queries/User/index.js


const GOOGLE_AUTH = external_graphql_tag_default.a`
  mutation googleAuth($accessToken: String!) {
    googleAuth(accessToken: $accessToken) {
      ...UserFields
    }
  }
  ${UserFields}
`;
const FACEBOOK_AUTH = external_graphql_tag_default.a`
  mutation facebookAuth($accessToken: String!) {
    facebookAuth(accessToken: $accessToken) {
      ...UserFields
    }
  }
  ${UserFields}
`;
const CHECKIN = external_graphql_tag_default.a`
  mutation checkin($login: String!) {
    checkin(login: $login)
  }
`;
const LOGIN = external_graphql_tag_default.a`
  mutation login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      ...UserFields
    }
  }
  ${UserFields}
`;
const REGISTER = external_graphql_tag_default.a`
  mutation register($input: RegisterInput) {
    register(input: $input) {
      ...UserFields
    }
  }
  ${UserFields}
`;
const LOGOUT = external_graphql_tag_default.a`
  mutation logout {
    logout
  }
`;
const CHECK_USER = external_graphql_tag_default.a`
  query checkUser($search: String!) {
    checkUser(search: $search) {
      status
      message
    }
  }
`;
const GET_USER = external_graphql_tag_default.a`
  query getUser($email: String) {
    getUser(email: $email) {
      ...UserFields
    }
  }
  ${UserFields}
`;
const GET_USERS = external_graphql_tag_default.a`
  query getUsers(
    $offset: Int
    $limit: Int
    $search: String
    $email: [String]
    $account: [AccountType]
    $company: String
  ) {
    getUsers(
      offset: $offset
      limit: $limit
      search: $search
      email: $email
      account: $account
      company: $company
    ) {
      name
      about
      email
      avatar {
        path
      }
      account
      members
      company {
        name
        email
        avatar {
          path
        }
      }
      role {
        id
        name
      }
    }
  }
`;
const GET_USERS_FOR_TICKET = external_graphql_tag_default.a`
  query getUsers(
    $offset: Int
    $limit: Int
    $search: String
    $email: [String]
    $account: [AccountType]
    $company: String
  ) {
    getUsers(
      offset: $offset
      limit: $limit
      search: $search
      email: $email
      account: $account
      company: $company
    ) {
      name
      email
    }
  }
`;
const GET_USER_MEMBERS = external_graphql_tag_default.a`
  query getUserMembers($email: String!) {
    getUserMembers(email: $email) {
      name
      about
      avatar {
        id
        path
      }
      account
      email
    }
  }
`;
const GET_USER_PARTICIPANT_PROJECTS = external_graphql_tag_default.a`
  query getProjects($member: String) {
    getProjects(member: $member) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`;
const GET_USER_PROJECTS = external_graphql_tag_default.a`
  query getProjects($author: String) {
    getProjects(author: $author) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`;
const CREATE_USER = external_graphql_tag_default.a`
  mutation createUser($input: UserCreateInput!) {
    createUser(input: $input) {
      ...UserFields
    }
  }
  ${UserFields}
`;
const UPDATE_CLIENT_USER = external_graphql_tag_default.a`
  mutation updateClientUser($input: UserUpdateInput!) {
    updateClientUser(input: $input) {
      ...UserFields
    }
  }
  ${UserFields}
`;
const UPDATE_USER = external_graphql_tag_default.a`
  mutation updateUser($email: String!, $input: UserUpdateInput!) {
    updateUser(email: $email, input: $input) {
      ...UserFields
    }
  }
  ${UserFields}
`;
const DELETE_USER = external_graphql_tag_default.a`
  mutation deleteUser($email: String!) {
    deleteUser(email: $email) {
      ...UserFields
    }
  }
  ${UserFields}
`;
const ADD_USER_PROJECT = external_graphql_tag_default.a`
  mutation addUserProject($project: ID!, $folder: ID!) {
    addUserProject(project: $project, folder: $folder)
  }
`;
const REMOVE_USER_PROJECT = external_graphql_tag_default.a`
  mutation removeUserProject($project: ID!, $folder: ID!) {
    removeUserProject(project: $project, folder: $folder)
  }
`;
const ADD_USER_FOLDER = external_graphql_tag_default.a`
  mutation addUserFolder($name: String!) {
    addUserFolder(name: $name) {
      id
      name
      projects
    }
  }
`;
const DELETE_USER_FOLDER = external_graphql_tag_default.a`
  mutation deleteUserFolder($id: ID!) {
    deleteUserFolder(id: $id) {
      id
      name
      projects
    }
  }
`;
const GET_USER_CHATS = external_graphql_tag_default.a`
  query getUserChats {
    getUserChats {
      chat {
        id
        type
        title
        members {
          name
          avatar {
            path
          }
        }
        messages {
          ...MessageFields
        }
      }
      status
      updatedAt
      createdAt
    }
  }
  ${MessageFields}
`;
// CONCATENATED MODULE: ./graphql/queries/Meta/index.js


const GET_META = external_graphql_tag_default.a`
  query getDashboardSettings {
    getDashboardSettings {
      general {
        logotype {
          path
        }
      }
      meta {
        title
        description
      }
    }
  }
`;
const GET_META_SCAFFOLD = external_graphql_tag_default.a`
  query getDashboardSettings {
    getDashboardSettings {
      scaffold {
        title
        primary {
          ...ProjectFields
        }
        residues {
          ...ProjectFields
        }
        background {
          id
          filename
          size
          path
        }
      }
    }
  }
  ${ProjectFields}
`;
const GET_META_INDEX = external_graphql_tag_default.a`
  query getMetaIndex($offset: Int, $limit: Int, $status: PostStatus) {
    getUsers {
      ...UserFields
    }
    getArticles(status: $status) {
      ...ArticleFields
    }
    getProjects(offset: $offset, limit: $limit, status: $status) {
      ...ProjectFields
    }
  }
  ${UserFields}
  ${ArticleFields}
  ${ProjectFields}
`;
const GET_META_AUTHORS = external_graphql_tag_default.a`
  query getMetaAuthors($offset: Int, $limit: Int, $search: String) {
    getUsers(offset: $offset, limit: $limit, search: $search) {
      ...UserFields
    }
  }
  ${UserFields}
`;
const GET_META_ARTICLES = external_graphql_tag_default.a`
  query getMetaArticles($offset: Int, $limit: Int, $search: String, $status: PostStatus) {
    getArticles(offset: $offset, limit: $limit, search: $search, status: $status) {
      ...ArticleFields
    }
    getCategories {
      ...CategoryFields
    }
  }
  ${ArticleFields}
  ${CategoryFields}
`;
const GET_META_PROJECTS = external_graphql_tag_default.a`
  query getMetaProjects(
    $offset: Int
    $limit: Int
    $search: String
    $category: ID
    $status: PostStatus
  ) {
    getProjects(
      offset: $offset
      limit: $limit
      search: $search
      category: $category
      status: $status
    ) {
      ...ProjectFields
    }
    getCategories {
      ...CategoryFields
    }
    getPostStatus
  }
  ${ProjectFields}
  ${CategoryFields}
`;
const GET_META_SETTINGS_PROJECTS = external_graphql_tag_default.a`
  query getProjects(
    $offset: Int
    $limit: Int
    $search: String
    $category: ID
    $status: PostStatus
  ) {
    getProjects(
      offset: $offset
      limit: $limit
      search: $search
      category: $category
      status: $status
    ) {
      id
      title
    }
  }
`;
const GET_META_DASHBOARD_STATISTICS = external_graphql_tag_default.a`
  query getDashboardStatistics {
    getDashboardStatistics {
      title
      total
      graph {
        count
        createdAt
      }
    }
  }
`;
const GET_META_DASHBOARD_ACTIVITIES = external_graphql_tag_default.a`
  query getDashboardActivities {
    getDashboardActivities {
      id
      user {
        name
        email
        avatar {
          path
        }
      }
      message
      entityType
      identityString
      createdAt
    }
  }
`;
const GET_META_DASHBOARD_SETTINGS = external_graphql_tag_default.a`
  query getDashboardSettings {
    getDashboardSettings {
      ...DashboardSettingsFields
    }
  }
  ${DashboardSettingsFields}
`;
const GET_META_DASHBOARD_PREVIEW_ARTICLES = external_graphql_tag_default.a`
  query getMetaDashboardPreviewArticles($offset: Int, $limit: Int) {
    getArticles(offset: $offset, limit: $limit) {
      id
      author {
        name
        avatar {
          path
        }
      }
      title
      body
      category {
        id
        name
      }
    }
  }
`;
const GET_META_DASHBOARD_PREVIEW_PROJECTS = external_graphql_tag_default.a`
  query getMetaDashboardPreviewProjects($offset: Int, $limit: Int) {
    getProjects(offset: $offset, limit: $limit) {
      id
      title
      description
      company {
        name
        email
        avatar {
          path
        }
      }
      category {
        id
        name
      }
      status
    }
  }
`;
const GET_META_DASHBOARD_ARTICLES = external_graphql_tag_default.a`
  query getMetaDashboardArticles($offset: Int, $limit: Int, $search: String, $status: PostStatus) {
    getArticles(offset: $offset, limit: $limit, search: $search, status: $status) {
      ...ArticleFields
    }
    getCategories {
      ...CategoryFields
    }
    getPostStatus
  }
  ${ArticleFields}
  ${CategoryFields}
`;
const GET_META_DASHBOARD_PROJECTS = external_graphql_tag_default.a`
  query getMetaDashboardProjects(
    $offset: Int
    $limit: Int
    $search: String
    $category: ID
    $status: PostStatus
    $account: [AccountType]
  ) {
    getProjects(
      offset: $offset
      limit: $limit
      search: $search
      category: $category
      status: $status
    ) {
      ...ProjectFields
    }
    getUsers(account: $account) {
      ...UserFields
    }
    getCategories {
      ...CategoryFields
    }
    getPostStatus
  }
  ${UserFields}
  ${ProjectFields}
  ${CategoryFields}
`;
const GET_META_DASHBOARD_CATEGORIES = external_graphql_tag_default.a`
  query getMetaDashboardCategories($offset: Int, $limit: Int) {
    getCategories(offset: $offset, limit: $limit) {
      ...CategoryFields
    }
    getCategoryTypes
  }
  ${CategoryFields}
`;
const GET_META_DASHBOARD_TICKETS = external_graphql_tag_default.a`
  query getMetaDashboardTickets($offset: Int, $limit: Int) {
    getTickets(offset: $offset, limit: $limit) {
      ...TicketFields
    }
  }
  ${TicketFields}
`;
const GET_META_DASHBOARD_USERS = external_graphql_tag_default.a`
  query getMetaDashboardUsers($offset: Int, $limit: Int) {
    getUsers(offset: $offset, limit: $limit) {
      name
      email
      phone
      avatar {
        id
        path
        size
      }
      about
      members
      company {
        name
        email
        avatar {
          path
        }
      }
      account
      role {
        id
        name
      }
    }
    getRoles {
      ...RoleFields
    }
  }
  ${RoleFields}
`;
const GET_META_DASHBOARD_ROLES = external_graphql_tag_default.a`
  query getMetaDashboardRoles($offset: Int, $limit: Int) {
    getRoles(offset: $offset, limit: $limit) {
      ...RoleFields
    }
    getPermissions
  }
  ${RoleFields}
`;
const UPDATE_META_DASHBOARD_SETTINGS = external_graphql_tag_default.a`
  mutation updateMetaDashboardSettings($input: DashboardSettingsInput!) {
    updateDashboardSettings(input: $input) {
      ...DashboardSettingsFields
    }
  }
  ${DashboardSettingsFields}
`;
// CONCATENATED MODULE: ./graphql/queries/Chat/index.js


const GET_CHAT = external_graphql_tag_default.a`
  query getChat($id: ID!) {
    getChat(id: $id) {
      ...ChatFields
      messages {
        ...MessageFields
      }
    }
  }
  ${ChatFields}
  ${MessageFields}
`;
// CONCATENATED MODULE: ./graphql/queries/Role/index.js


const GET_ROLE = external_graphql_tag_default.a`
  query getRole($id: ID!) {
    getRole(id: $id) {
      ...RoleFields
    }
  }
  ${RoleFields}
`;
const GET_ROLES = external_graphql_tag_default.a`
  query getRoles($search: String) {
    getRoles(search: $search) {
      ...RoleFields
    }
  }
  ${RoleFields}
`;
const CREATE_ROLE = external_graphql_tag_default.a`
  mutation createRole($input: RoleCreateInput!) {
    createRole(input: $input) {
      ...RoleFields
    }
  }
  ${RoleFields}
`;
const UPDATE_ROLE = external_graphql_tag_default.a`
  mutation updateRole($id: ID!, $input: RoleUpdateInput!) {
    updateRole(id: $id, input: $input) {
      ...RoleFields
    }
  }
  ${RoleFields}
`;
const DELETE_ROLE = external_graphql_tag_default.a`
  mutation deleteRole($id: ID!) {
    deleteRole(id: $id) {
      ...RoleFields
    }
  }
  ${RoleFields}
`;
// CONCATENATED MODULE: ./graphql/queries/File/index.js


const GET_FILES = external_graphql_tag_default.a`
  mutation getFiles($search: String) {
    getFiles(search: $search) {
      ...FileFields
    }
  }
  ${FileFields}
`;
const CREATE_FILE = external_graphql_tag_default.a`
  mutation createFile($file: Upload!) {
    createFile(file: $file) {
      ...FileFields
    }
  }
  ${FileFields}
`;
const DELETE_FILE = external_graphql_tag_default.a`
  mutation deleteFile($id: ID!) {
    deleteFile(id: $id) {
      ...FileFields
    }
  }
  ${FileFields}
`;
// CONCATENATED MODULE: ./graphql/queries/Image/index.js


const Image_GET_FILES = external_graphql_tag_default.a`
  mutation getImages($search: String) {
    getImages(search: $search) {
      ...ImageFields
    }
  }
  ${ImageFields}
`;
const CREATE_IMAGE = external_graphql_tag_default.a`
  mutation createImage($file: Upload!) {
    createImage(file: $file) {
      ...ImageFields
    }
  }
  ${ImageFields}
`;
const DELETE_IMAGE = external_graphql_tag_default.a`
  mutation deleteImage($id: ID!) {
    deleteImage(id: $id) {
      ...ImageFields
    }
  }
  ${ImageFields}
`;
// CONCATENATED MODULE: ./graphql/queries/Ticket/index.js


const GET_TICKET = external_graphql_tag_default.a`
  query getTicket($id: ID!) {
    getTicket(id: $id) {
      ...TicketFields
    }
  }
  ${TicketFields}
`;
const GET_TICKETS = external_graphql_tag_default.a`
  query getTickets($offset: Int, $limit: Int, $search: String) {
    getTickets(offset: $offset, limit: $limit, search: $search) {
      ...TicketFields
    }
  }
  ${TicketFields}
`;
const GET_USER_TICKETS = external_graphql_tag_default.a`
  query getUserTickets {
    getUserTickets {
      ...TicketFields
    }
  }
  ${TicketFields}
`;
const CREATE_USER_TICKET = external_graphql_tag_default.a`
  mutation createUserTicket($input: UserTicketCreateInput!) {
    createUserTicket(input: $input)
  }
`;
const CREATE_TICKET = external_graphql_tag_default.a`
  mutation createTicket($input: TicketCreateInput!) {
    createTicket(input: $input) {
      ...TicketFields
    }
  }
  ${TicketFields}
`;
const UPDATE_TICKET = external_graphql_tag_default.a`
  mutation updateTicket($id: ID!, $input: TicketUpdateInput!) {
    updateTicket(id: $id, input: $input) {
      ...TicketFields
    }
  }
  ${TicketFields}
`;
const DELETE_TICKET = external_graphql_tag_default.a`
  mutation deleteTicket($id: ID!) {
    deleteTicket(id: $id) {
      ...TicketFields
    }
  }
  ${TicketFields}
`;
const CLOSE_TICKET = external_graphql_tag_default.a`
  mutation closeTicket($id: ID!) {
    closeTicket(id: $id) {
      ...TicketFields
    }
  }
  ${TicketFields}
`;
// CONCATENATED MODULE: ./graphql/queries/UserChat/index.js


const UserChat_GET_USER_CHATS = external_graphql_tag_default.a`
  query getUserChats {
    getUserChats {
      chat {
        ...ChatFields
        messages {
          ...MessageFields
        }
      }
      status
      updatedAt
      createdAt
    }
  }
  ${ChatFields}
  ${MessageFields}
`;
const ADD_USER_CHAT = external_graphql_tag_default.a`
  mutation addUserChat($recipient: String!) {
    addUserChat(recipient: $recipient)
  }
`;
// CONCATENATED MODULE: ./graphql/queries/Message/index.js


const SEND_MESSAGE = external_graphql_tag_default.a`
  mutation sendMessage($recipient: String!, $text: String!) {
    sendMessage(recipient: $recipient, text: $text) {
      ...MessageFields
    }
  }
  ${MessageFields}
`;
// CONCATENATED MODULE: ./graphql/queries/TicketMessage/index.js


const SEND_TICKET_MESSAGE = external_graphql_tag_default.a`
  mutation sendTicketMessage(
    $ticket: ID!
    $recipient: String!
    $text: String!
    $isClient: Boolean
  ) {
    sendTicketMessage(ticket: $ticket, recipient: $recipient, text: $text, isClient: $isClient) {
      ...TicketMessageFields
    }
  }
  ${TicketMessageFields}
`;
// CONCATENATED MODULE: ./graphql/queries/Article/index.js


const GET_ARTICLE = external_graphql_tag_default.a`
  query getArticle($id: ID!) {
    getArticle(id: $id) {
      ...ArticleFields
    }
  }
  ${ArticleFields}
`;
const GET_ARTICLES = external_graphql_tag_default.a`
  query getArticles($offset: Int, $limit: Int, $search: String, $status: PostStatus) {
    getArticles(offset: $offset, limit: $limit, search: $search, status: $status) {
      id
      author {
        name
        avatar {
          path
        }
      }
      title
      body
      preview {
        path
      }
      category {
        id
        name
      }
    }
  }
`;
const CREATE_ARTICLE = external_graphql_tag_default.a`
  mutation createArticle($input: ArticleCreateInput!, $status: PostStatus) {
    createArticle(input: $input, status: $status) {
      ...ArticleFields
    }
  }
  ${ArticleFields}
`;
const UPDATE_ARTICLE = external_graphql_tag_default.a`
  mutation updateArticle($id: ID!, $input: ArticleUpdateInput!, $status: PostStatus) {
    updateArticle(id: $id, input: $input, status: $status) {
      ...ArticleFields
    }
  }
  ${ArticleFields}
`;
const DELETE_ARTICLE = external_graphql_tag_default.a`
  mutation deleteArticle($id: ID!, $status: PostStatus) {
    deleteArticle(id: $id, status: $status) {
      ...ArticleFields
    }
  }
  ${ArticleFields}
`;
// CONCATENATED MODULE: ./graphql/queries/Project/index.js


const GET_PROJECT = external_graphql_tag_default.a`
  query getProject($id: ID!) {
    getProject(id: $id) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`;
const GET_PROJECTS = external_graphql_tag_default.a`
  query getProjects(
    $offset: Int
    $limit: Int
    $category: ID
    $rating: [String]
    $author: String
    $status: PostStatus
  ) {
    getProjects(
      offset: $offset
      limit: $limit
      category: $category
      rating: $rating
      author: $author
      status: $status
    ) {
      id
      title
      description
      company {
        name
        email
        avatar {
          path
        }
      }
      preview {
        id
        path
      }
      screenshots {
        id
        path
      }
      category {
        id
        name
      }
      rating {
        email
        phone
      }
      status
    }
  }
`;
const GET_PROJECTS_BY_IDS = external_graphql_tag_default.a`
  query getProjectsByIds($projects: [ID]!, $status: PostStatus) {
    getProjectsByIds(projects: $projects, status: $status) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`;
const LIKE_PROJECT = external_graphql_tag_default.a`
  mutation likeProject($id: ID!) {
    likeProject(id: $id) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`;
const CREATE_PROJECT = external_graphql_tag_default.a`
  mutation createProject($input: ProjectCreateInput!, $status: PostStatus) {
    createProject(input: $input, status: $status) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`;
const UPDATE_PROJECT = external_graphql_tag_default.a`
  mutation updateProject($id: ID!, $input: ProjectUpdateInput!, $status: PostStatus) {
    updateProject(id: $id, input: $input, status: $status) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`;
const DELETE_PROJECT = external_graphql_tag_default.a`
  mutation deleteProject($id: ID!, $status: PostStatus) {
    deleteProject(id: $id, status: $status) {
      ...ProjectFields
    }
  }
  ${ProjectFields}
`;
// CONCATENATED MODULE: ./graphql/queries/Category/index.js


const GET_CATEGORY = external_graphql_tag_default.a`
  query getCategory($id: ID!) {
    getCategory(id: $id) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`;
const GET_CATEGORIES = external_graphql_tag_default.a`
  query getCategories($offset: Int, $limit: Int, $type: CategoryType, $search: String) {
    getCategories(offset: $offset, limit: $limit, type: $type, search: $search) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`;
const CREATE_CATEGORY = external_graphql_tag_default.a`
  mutation createCategory($input: CategoryCreateInput!) {
    createCategory(input: $input) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`;
const UPDATE_CATEGORY = external_graphql_tag_default.a`
  mutation updateCategory($id: ID!, $input: CategoryUpdateInput!) {
    updateCategory(id: $id, input: $input) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`;
const DELETE_CATEGORY = external_graphql_tag_default.a`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      ...CategoryFields
    }
  }
  ${CategoryFields}
`;
// CONCATENATED MODULE: ./graphql/queries/Comment/index.js


const GET_COMMENTS = external_graphql_tag_default.a`
  query getComments($id: ID!) {
    getComments(id: $id) {
      ...CommentFields
    }
  }
  ${CommentFields}
`;
const SEND_COMMENT = external_graphql_tag_default.a`
  mutation sendComment($article: ID!, $text: String!) {
    sendComment(article: $article, text: $text) {
      ...CommentFields
    }
  }
  ${CommentFields}
`;
const LIKE_COMMENT = external_graphql_tag_default.a`
  mutation likeComment($comment: ID!, $likedUser: String, $liked: Boolean!) {
    likeComment(comment: $comment, likedUser: $likedUser, liked: $liked) {
      ...CommentFields
    }
  }
  ${CommentFields}
`;
const CREATE_COMMENT = external_graphql_tag_default.a`
  mutation createComment($input: CommentCreateInput!) {
    createComment(input: $input) {
      ...CommentFields
    }
  }
  ${CommentFields}
`;
const UPDATE_COMMENT = external_graphql_tag_default.a`
  mutation updateComment($id: ID!, $input: CommentUpdateInput!) {
    updateComment(id: $id, input: $input) {
      ...CommentFields
    }
  }
  ${CommentFields}
`;
const DELETE_COMMENT = external_graphql_tag_default.a`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
      ...CommentFields
    }
  }
  ${CommentFields}
`;
// CONCATENATED MODULE: ./graphql/queries/index.js














/* harmony default export */ var queries = __webpack_exports__["a"] = ({ ...User_namespaceObject,
  ...Meta_namespaceObject,
  ...Chat_namespaceObject,
  ...Role_namespaceObject,
  ...File_namespaceObject,
  ...Image_namespaceObject,
  ...Ticket_namespaceObject,
  ...UserChat_namespaceObject,
  ...Message_namespaceObject,
  ...TicketMessage_namespaceObject,
  ...Article_namespaceObject,
  ...Project_namespaceObject,
  ...Category_namespaceObject,
  ...Comment_namespaceObject
});

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

/***/ "vJvq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrap; });
/* unused harmony export Content */
/* unused harmony export Popper */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("E8iq");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  display: inline-flex;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_tooltip__WEBPACK_IMPORTED_MODULE_2___default.a)`
  padding: var(--default-gap) !important;
  border: 1px solid var(--surface-border) !important;
  background: var(--surface-background) !important;
  box-shadow: var(--default-shadow) !important;
  border-radius: var(--surface-border-radius) !important;
  border: none !important;
  pointer-events: initial !important;

  ${({
  appearance
}) => appearance === 'clear' && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      padding: 0 !important;
      border: none !important;
      box-shadow: var(--default-shadow) !important;
    `}

  &.show {
    opacity: 1 !important;
  }

  &::after {
    display: none !important;
  }

  ${({
  width
}) => width && styled_components__WEBPACK_IMPORTED_MODULE_1__["css"]`
      width: ${width || 'auto'} !important;
    `}
`;
const Popper = (_ref) => {
  let {
    body,
    appearance,
    children,
    width
  } = _ref,
      props = _objectWithoutProperties(_ref, ["body", "appearance", "children", "width"]);

  const id = `popper-${Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])()}`;
  return __jsx(Wrap, null, __jsx("div", {
    "data-event": 'click focus',
    "data-for": id,
    "data-tip": true
  }, children), __jsx(Content, _extends({}, props, {
    id: id,
    width: width,
    globalEventOff: 'click',
    appearance: appearance
  }), body));
};
Popper.defaultProps = {
  place: 'top',
  effect: 'solid',
  appearance: 'default'
};
/* harmony default export */ __webpack_exports__["b"] = (Popper);

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "vuC2":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "wOhW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: BrandLogo, MainLayout

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
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./atomic-ui/components/Row/index.js
var Row = __webpack_require__("nShV");

// EXTERNAL MODULE: ./atomic-ui/components/Column/index.js
var Column = __webpack_require__("8CDE");

// EXTERNAL MODULE: ./atomic-ui/components/Transition/index.js
var Transition = __webpack_require__("hYBG");

// EXTERNAL MODULE: ./atomic-ui/components/Text/index.js
var Text = __webpack_require__("QUga");

// EXTERNAL MODULE: ./atomic-ui/components/Button/index.js
var Button = __webpack_require__("ZeZO");

// EXTERNAL MODULE: ./atomic-ui/components/Icon/index.js + 109 modules
var Icon = __webpack_require__("feIE");

// CONCATENATED MODULE: ./atomic-ui/components/Snack/index.js
var __jsx = external_react_default.a.createElement;








const getInfo = (type, tag) => {
  if (type === 'success') {
    if (tag === 'color') return 'green';
    if (tag === 'icon') return 'check';
    return 'var(--default-color-green)';
  }

  if (type === 'warning') {
    if (tag === 'color') return 'orange';
    if (tag === 'icon') return 'danger';
    return 'var(--default-color-orange)';
  }

  if (tag === 'color') return 'red';
  if (tag === 'icon') return 'danger';
  return 'var(--default-color-red)';
};

const Wrap = external_styled_components_default()(Row["b" /* default */])`
  align-items: center;
  justify-content: space-between;
  width: 320px;
  cursor: pointer;
  background: white;
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  box-shadow: var(--surface-shadow);
  padding: var(--default-gap) calc(var(--default-gap) + 5px);
  transition: opacity 150ms ease;

  ${({
  type
}) => type && external_styled_components_["css"]`
      background: ${getInfo(type)};
    `}

  &:hover {
    opacity: 0.85;
  }

  ${Text["a" /* Wrap */]} {
    color: white;
  }

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms, blur 100ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 100ms, blur 100ms;
  }
`;
const MarkButton = external_styled_components_default()(Button["a" /* default */])`
  background: white;
  border-radius: 50%;
  border: none;

  &:hover {
    background: white;
    border: none;
  }
`;
const Snack = ({
  type,
  message,
  style,
  className,
  onRemove
}) => __jsx(Transition["a" /* default */], {
  in: true,
  appear: true,
  animation: 'fade'
}, __jsx(Wrap, {
  type: type,
  className: className,
  style: style,
  onClick: onRemove
}, __jsx(Text["b" /* default */], null, message), __jsx(MarkButton, {
  kind: 'icon',
  size: 'xs'
}, __jsx(Icon["a" /* default */], {
  icon: getInfo(type, 'icon'),
  stroke: getInfo(type),
  size: 'xs'
}))));
/* harmony default export */ var components_Snack = (Snack);
// CONCATENATED MODULE: ./atomic-ui/components/Snacks/index.js
var Snacks_jsx = external_react_default.a.createElement;




const Snacks_Wrap = external_styled_components_default()(Column["a" /* default */])`
  position: fixed;
  left: calc(50% - 185px);
  bottom: 0;
  z-index: var(--z-override);
  padding: 25px;
  max-height: 768px;
  overflow-y: auto;
`;
const Snacks = ({
  snacks,
  onRemove
}) => {
  const {
    0: list,
    1: setList
  } = Object(external_react_["useState"])([]);

  const onItemRemove = item => {
    if (onRemove) onRemove(item);
    setList(prev => prev.filter(el => el.id !== item.id));
  };

  return Snacks_jsx(Snacks_Wrap, null, (snacks || list).map(item => Snacks_jsx(components_Snack, {
    key: item.id,
    type: item.type,
    message: item.message,
    onRemove: () => onItemRemove(item)
  })));
};
Snacks.defaultProps = {
  snacks: []
};
/* harmony default export */ var components_Snacks = (Snacks);
// EXTERNAL MODULE: ./atomic-ui/components/Difinition/index.js
var Difinition = __webpack_require__("DTT8");

// EXTERNAL MODULE: ./atomic-ui/components/Spinner/index.js
var Spinner = __webpack_require__("auMy");

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");
var external_react_custom_scrollbars_default = /*#__PURE__*/__webpack_require__.n(external_react_custom_scrollbars_);

// CONCATENATED MODULE: ./atomic-ui/components/Drawer/index.js
var Drawer_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Overlay = external_styled_components_default.a.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--default-color-overlay);
  transition: opacity 0.2s;
`;
const Side = external_styled_components_default.a.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: auto;
  max-width: 989px;
  height: 100vh;
  background: white;
  transition: transform 0.3s;

  @media only screen and (max-width: 1098px) {
    width: calc(100% - 60px);

    ${({
  half
}) => half && external_styled_components_["css"]`
        width: 196px;
      `}
  }

  @media only screen and (max-width: 480px) {
    width: 100%;

    ${({
  half
}) => half && external_styled_components_["css"]`
        width: 196px;
      `}
  }

  ${({
  half
}) => half && external_styled_components_["css"]`
      width: 196px;
      margin-left: 0;
    `}
`;
const BackButton = external_styled_components_default()(Icon["a" /* default */])`
  position: absolute;
  top: 40px;
  right: calc(100% + 30px);
  z-index: var(--z-15);
  width: 40px;
  cursor: pointer;
  transform: translateY(-50%);
  transition: opacity 0.3s;

  @media only screen and (max-width: 1098px) {
    right: calc(100% + 12px);
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Content = external_styled_components_default.a.div`
  display: flex;
  flex-direction: column;
  padding: var(--default-gap);
  min-height: 100%;
`;
const Wrapper = external_styled_components_default.a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  &.slide-left-enter,
  &.slide-left-appear {
    ${Overlay} {
      opacity: 0;
    }

    ${Side} {
      transform: translateX(-100%);
    }

    ${BackButton} {
      opacity: 0;
    }
  }

  &.slide-left-enter-active,
  &.slide-left-appear-active {
    ${Overlay} {
      opacity: 1;
    }

    ${Side} {
      transform: initial;
      transition-delay: 150ms;
    }

    ${BackButton} {
      opacity: 1;
    }
  }

  &.slide-left-exit {
    ${Overlay} {
      opacity: 1;
    }

    ${Side} {
      transform: initial;
    }

    ${BackButton} {
      opacity: 1;
    }
  }

  &.slide-left-exit-active {
    ${Overlay} {
      opacity: 0;
    }

    ${Side} {
      transform: translateX(-100%);
    }

    ${BackButton} {
      opacity: 0;
    }
  }

  &.slide-right-enter,
  &.slide-right-appear {
    ${Overlay} {
      opacity: 0;
    }

    ${Side} {
      transform: translateX(100%);
    }

    ${BackButton} {
      opacity: 0;
    }
  }

  &.slide-right-enter-active,
  &.slide-right-appear-active {
    ${Overlay} {
      opacity: 1;
    }

    ${Side} {
      transform: initial;
      transition-delay: 150ms;
    }

    ${BackButton} {
      opacity: 1;
    }
  }

  &.slide-right-exit {
    ${Overlay} {
      opacity: 1;
    }

    ${Side} {
      transform: initial;
    }

    ${BackButton} {
      opacity: 1;
    }
  }

  &.slide-right-exit-active {
    ${Overlay} {
      opacity: 0;
    }

    ${Side} {
      transform: translateX(100%);
    }

    ${BackButton} {
      opacity: 0;
    }
  }
`;
const Loader = external_styled_components_default.a.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  flex-grow: 1;
`;
const Drawer = (_ref) => {
  let {
    children,
    side,
    half,
    isOpen,
    onBack
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "side", "half", "isOpen", "onBack"]);

  return Drawer_jsx(Transition["a" /* default */], _extends({
    in: isOpen,
    timeout: {
      appear: 500,
      enter: 500,
      exit: 300
    },
    animation: side === 'right' ? 'slide-right' : 'slide-left',
    unmountOnExit: true,
    appear: true
  }, props), Drawer_jsx(Wrapper, props, Drawer_jsx(Overlay, {
    onClick: onBack
  }), Drawer_jsx(Side, {
    half: half
  }, Drawer_jsx(BackButton, {
    onClick: onBack,
    icon: 'arrowLeft',
    size: 64,
    stroke: 'white'
  }), Drawer_jsx(external_react_custom_scrollbars_default.a, null, Drawer_jsx(Content, null, Drawer_jsx(external_react_["Suspense"], {
    fallback: Drawer_jsx(Loader, null, Drawer_jsx(Spinner["a" /* default */], null))
  }, children))))));
};
/* harmony default export */ var components_Drawer = (Drawer);
// EXTERNAL MODULE: ./atomic-ui/components/Divider/index.js
var Divider = __webpack_require__("RKiZ");

// EXTERNAL MODULE: ./atomic-ui/components/Title/index.js
var Title = __webpack_require__("7sPp");

// CONCATENATED MODULE: ./atomic-ui/components/Modal/index.js
var Modal_jsx = external_react_default.a.createElement;

function Modal_extends() { Modal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Modal_extends.apply(this, arguments); }







const DURATION = 100;
function getPath(navigator) {
  if (!navigator || navigator.length === 0) return null;
  return navigator[navigator.length - 1];
}
const Modal_Wrap = external_styled_components_default.a.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-override);
  overflow: auto;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms, blur 100ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 100ms, blur 100ms;
  }
`;
const Modal_Overlay = external_styled_components_default.a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-100);
  background: var(--default-color-overlay);
  cursor: pointer;
`;
const Modal_Content = external_styled_components_default.a.div`
  position: relative;
  top: 15%;
  left: 0;
  right: 0;
  z-index: var(--z-101);

  min-width: 480px;
  max-width: 80%;
  width: min-content;

  margin-block-end: 150px;
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  box-shadow: var(--surface-shadow);

  &.swing-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.swing-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 100ms, transform 100ms;
  }

  &.swing-exit {
    opacity: 1;
  }

  &.swing-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 100ms, transform 100ms;
  }

  ${({
  size
}) => size === 'l' && external_styled_components_["css"]`
      top: 5%;
      min-width: 65%;
    `}

  @media only screen and (max-width: 768px) {
    min-width: 320px;
  }

  @media only screen and (max-width: 480px) {
    min-width: 285px;
    max-width: 100%;
    width: auto;
    margin: 0 var(--default-gap);
  }
`;
const Headline = external_styled_components_default.a.div`
  position: relative;
  display: flex;
  border-bottom: var(--default-border);
  padding: var(--default-gap);
  line-height: 1;
`;
const Modal_BackButton = external_styled_components_default()(Button["a" /* default */])`
  position: absolute;
  top: 0;
  left: 10px;
  height: 100%;
`;
const StyledTitle = external_styled_components_default()(Title["a" /* default */])`
  text-align: center;
  width: 100%;

  @media only screen and (max-width: 480px) {
    font-size: var(--font-size-l);
  }
`;
const Switch = props => {
  const Childrens = props.children;
  if (!Childrens) return null;
  const path = props.path;
  let Child = null;

  for (const child of Childrens) {
    if (path === child.props.path) {
      Child = child;
      break;
    }
  }

  return Child;
};
const Route = ({
  component,
  close,
  back,
  jump
}) => {
  const Compoent = component;
  return Modal_jsx(Compoent, {
    close: close,
    back: back,
    jump: jump
  });
};
const Modal = ({
  size,
  routes,
  closeByBackground,
  onHide
}) => {
  const {
    0: navigator,
    1: setNavigator
  } = Object(external_react_["useState"])(['/']);
  const {
    0: content,
    1: setContent
  } = Object(external_react_["useState"])(false);
  const {
    0: animation,
    1: setAnimation
  } = Object(external_react_["useState"])(null);
  const transitions = {
    fade: {
      in: routes ? true : false,
      animation: 'fade',
      onEnter: () => setContent(true),
      onExited: () => setContent(false),
      timeout: DURATION
    },
    swing: {
      in: content,
      animation: 'swing',
      timeout: DURATION
    }
  };

  const getTitle = () => {
    var _routes$find;

    function compare(route) {
      return route.path === getPath(navigator);
    }

    const title = routes === null || routes === void 0 ? void 0 : (_routes$find = routes.find(route => compare(route))) === null || _routes$find === void 0 ? void 0 : _routes$find.title;
    return title || '';
  };

  const getRoute = () => {
    const defaultState = {
      back: true
    };
    const current = navigator[navigator.length - 1];
    const candidate = routes.find(route => route.path === current);

    if (candidate) {
      var _candidate$back;

      return (_candidate$back = candidate === null || candidate === void 0 ? void 0 : candidate.back) !== null && _candidate$back !== void 0 ? _candidate$back : defaultState;
    }

    return defaultState;
  };

  const handleBack = () => {
    setAnimation('slideOutRight');
    setTimeout(() => {
      setNavigator([...navigator.filter((e, i) => i !== navigator.length - 1)]);
      setAnimation('slideInLeft');
    }, DURATION);
  };

  const handleJump = path => {
    setAnimation('slideOutLeft');
    setTimeout(() => {
      setNavigator([...navigator, path]);
      setAnimation('slideInRight');
    }, DURATION);
  };

  const handleClose = () => {
    setContent(false);
    setAnimation(null);
    setTimeout(() => {
      setNavigator(['/']);
      onHide();
    }, DURATION);
  };

  Object(external_react_["useEffect"])(() => {
    if (routes && routes.length > 0) {
      const route = routes.find(route => route.home);
      setNavigator([(route === null || route === void 0 ? void 0 : route.path) || '/']);
    }
  }, [routes]);
  return Modal_jsx(Transition["a" /* default */], transitions.fade, Modal_jsx(Modal_Wrap, null, Modal_jsx(Modal_Overlay, {
    className: !closeByBackground ? 'clear' : '',
    onClick: closeByBackground ? handleClose : () => {}
  }), Modal_jsx(Transition["a" /* default */], transitions.swing, Modal_jsx(Modal_Content, {
    className: `animate${animation ? ` ${animation}` : ''}`,
    size: size
  }, getTitle() && Modal_jsx(Headline, null, navigator.length > 1 && getRoute().back && Modal_jsx(Modal_BackButton, {
    onClick: handleBack,
    appearance: 'clear'
  }, Modal_jsx(Icon["a" /* default */], {
    icon: 'arrowLeft'
  })), Modal_jsx(StyledTitle, {
    tag: 'h3'
  }, getTitle())), Modal_jsx(Switch, {
    path: getPath(navigator)
  }, (routes || []).map((props, key) => Modal_jsx(Route, Modal_extends({
    key: key
  }, props, {
    close: handleClose,
    back: handleBack,
    jump: handleJump
  }))))))));
};
Modal.defaultProps = {
  title: 'Modal Title',
  routes: [],
  onHide: () => {},
  closeByBackground: true
};
/* harmony default export */ var components_Modal = (Modal);
// EXTERNAL MODULE: ./hooks/useEntityQuery.js + 1 modules
var useEntityQuery = __webpack_require__("8UhZ");

// EXTERNAL MODULE: ./components/Styled/index.js
var Styled = __webpack_require__("586Q");

// EXTERNAL MODULE: ./store/actions/snacks.js
var actions_snacks = __webpack_require__("9Xo6");

// EXTERNAL MODULE: ./store/actions/user.js
var actions_user = __webpack_require__("8ihE");

// EXTERNAL MODULE: ./store/actions/drawer.js
var actions_drawer = __webpack_require__("Ztxg");

// EXTERNAL MODULE: ./store/actions/modal.js
var actions_modal = __webpack_require__("qOKH");

// EXTERNAL MODULE: ./store/actions/root.js
var actions_root = __webpack_require__("Sza6");

// EXTERNAL MODULE: ./graphql/queries/index.js + 15 modules
var queries = __webpack_require__("u2Cb");

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// CONCATENATED MODULE: ./layouts/main.js


























const LIFETIME_OF_SNACK = 3000;
const Container = external_styled_components_default()(Column["a" /* default */]).withConfig({
  displayName: "main__Container",
  componentId: "r90a11-0"
})(["height:100%;flex-grow:1;&.fade-enter{opacity:0;}&.fade-enter-active{opacity:1;transition:opacity 100ms,blur 100ms;}&.fade-exit{opacity:1;}&.fade-exit-active{opacity:0;transition:opacity 100ms,blur 100ms;}"]);
const BrandLogo = external_styled_components_default.a.img.withConfig({
  displayName: "main__BrandLogo",
  componentId: "r90a11-1"
})(["object-fit:contain;width:100%;height:100%;"]);
const Header = external_styled_components_default()(Row["b" /* default */]).withConfig({
  displayName: "main__Header",
  componentId: "r90a11-2"
})(["display:flex;grid-gap:var(--default-gap);"]);
const GuideButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "main__GuideButton",
  componentId: "r90a11-3"
})(["display:flex;justify-content:center;align-items:center;color:var(--default-color-accent);"]);
const main_BackButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "main__BackButton",
  componentId: "r90a11-4"
})(["display:none;@media only screen and (max-width:480px){display:flex;justify-content:center;align-items:center;}"]);

const Welcome = ({
  close
}) => {
  const router = Object(router_["useRouter"])();
  return /*#__PURE__*/external_react_default.a.createElement(Column["a" /* default */], {
    style: {
      padding: '15px'
    }
  }, /*#__PURE__*/external_react_default.a.createElement(Text["b" /* default */], null, "Atomic - \u0441\u0432\u043E\u0435\u043E\u0431\u0440\u0430\u0437\u043D\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u043E\u0432 \u043C\u0435\u0436\u0434\u0443 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F\u043C\u0438 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438. \u0410\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0435\u0441\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u044B, \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432 \u0438 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u0432, \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u0442\u044C \u0438\u0445 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B \u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B, \u043E\u0431\u0449\u0430\u0442\u044C\u0441\u044F \u043C\u0435\u0436\u0434\u0443 \u0441\u043E\u0431\u043E\u0439 \u0438 \u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u043D\u0430 \u043B\u044E\u0431\u044B\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430\u0445."), /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    onClick: close
  }, "\u0412\u043F\u0435\u0440\u0435\u0434!"), /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
    clear: true
  }), /*#__PURE__*/external_react_default.a.createElement(GuideButton, {
    onClick: () => {
      close();
      return router.push('/guide');
    },
    appearance: 'clear'
  }, "\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F"));
};

const Mutator = ({
  mutation,
  variables,
  callback
}) => {
  const [action] = Object(react_hooks_["useMutation"])(mutation);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    async function mutate() {
      const response = await action({
        variables
      });
      dispatch(Object(actions_root["k" /* setMutate */])(null, null));
      if (callback) await callback(response);
    }

    mutate().then();
  }, [action, dispatch, variables, callback]);
  return null;
};

const MainLayout = ({
  children
}) => {
  var _root$settings$genera;

  const router = Object(router_["useRouter"])();
  const {
    useDetectQuery
  } = Object(useEntityQuery["a" /* default */])();
  const [getUser, {
    data,
    loading
  }] = Object(react_hooks_["useLazyQuery"])(queries["a" /* default */].GET_USER);
  const {
    data: dataMeta,
    loading: loadingMeta
  } = Object(react_hooks_["useQuery"])(queries["a" /* default */].GET_META);
  const {
    root,
    user,
    drawer,
    snacks,
    modal
  } = Object(external_react_redux_["useSelector"])(state => state);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const onDrawerBack = async () => {
    await router.push({
      pathname: router.pathname,
      query: {}
    }, undefined, {
      shallow: true
    });
    dispatch(Object(actions_drawer["a" /* setDrawer */])(null));
  };

  const onModalHide = () => {
    dispatch(Object(actions_modal["a" /* setModal */])(null));
  };

  Object(external_react_["useEffect"])(() => {
    if (!loadingMeta && dataMeta !== null && dataMeta !== void 0 && dataMeta.getDashboardSettings) {
      dispatch(Object(actions_root["o" /* setSettings */])(dataMeta === null || dataMeta === void 0 ? void 0 : dataMeta.getDashboardSettings));
    }
  }, [dataMeta, loadingMeta]);
  Object(external_react_["useEffect"])(() => {
    if ((snacks === null || snacks === void 0 ? void 0 : snacks.length) > 0) {
      setTimeout(() => dispatch(Object(actions_snacks["a" /* clearItems */])()), LIFETIME_OF_SNACK);
    }
  }, [snacks]);
  Object(external_react_["useEffect"])(() => {
    if (false) {}
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (data && data.getUser) {
      dispatch(Object(actions_user["b" /* setUser */])(data.getUser));
    }
  }, [data, dispatch]);
  Object(external_react_["useEffect"])(() => {
    if (user.authenticated && user.register) {
      dispatch(Object(actions_modal["a" /* setModal */])([{
        path: '/',
        title: 'Добро пожаловать!',
        component: ({
          close
        }) => /*#__PURE__*/external_react_default.a.createElement(Welcome, {
          close: close
        })
      }]));
    }
  }, [user, dispatch]);
  useDetectQuery();
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(head_default.a, null, /*#__PURE__*/external_react_default.a.createElement("title", null, root.settings.meta.title), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: 'description',
    content: root.settings.meta.description
  })), loading ? /*#__PURE__*/external_react_default.a.createElement(Styled["a" /* FixedLoader */], null, /*#__PURE__*/external_react_default.a.createElement(Spinner["a" /* default */], null)) : children, /*#__PURE__*/external_react_default.a.createElement(components_Drawer, {
    key: drawer.history.length,
    side: drawer.side,
    half: drawer.half,
    isOpen: drawer.open,
    onBack: onDrawerBack
  }, /*#__PURE__*/external_react_default.a.createElement(Container, null, /*#__PURE__*/external_react_default.a.createElement(Header, null, drawer.side === 'left' && drawer.half ? /*#__PURE__*/external_react_default.a.createElement(Button["a" /* default */], {
    appearance: 'clear',
    onClick: () => router.push('/')
  }, /*#__PURE__*/external_react_default.a.createElement(BrandLogo, {
    src: (_root$settings$genera = root.settings.general.logotype) === null || _root$settings$genera === void 0 ? void 0 : _root$settings$genera.path,
    alt: 'Logotype'
  })) : /*#__PURE__*/external_react_default.a.createElement(main_BackButton, {
    size: 's',
    kind: 'icon',
    onClick: onDrawerBack,
    revert: true
  }, /*#__PURE__*/external_react_default.a.createElement(Icon["a" /* default */], {
    icon: 'arrowLeft',
    size: 's',
    stroke: 'var(--default-color-accent)'
  })), drawer.title && /*#__PURE__*/external_react_default.a.createElement(Difinition["b" /* default */], {
    color: drawer.color,
    icon: drawer.icon,
    text: drawer.title
  })), drawer.title && /*#__PURE__*/external_react_default.a.createElement(Divider["a" /* default */], {
    clear: true
  }), drawer.content)), /*#__PURE__*/external_react_default.a.createElement(components_Snacks, {
    snacks: snacks,
    onRemove: snack => dispatch(Object(actions_snacks["b" /* removeItem */])(snack.id))
  }), /*#__PURE__*/external_react_default.a.createElement(components_Modal, {
    size: modal === null || modal === void 0 ? void 0 : modal.size,
    routes: modal === null || modal === void 0 ? void 0 : modal.routes,
    onHide: onModalHide
  }), root.mutation && /*#__PURE__*/external_react_default.a.createElement(Mutator, {
    mutation: root.mutation,
    variables: root.variables,
    callback: root.callback
  }));
};
/* harmony default export */ var main = __webpack_exports__["a"] = (MainLayout);

/***/ }),

/***/ "wZgm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Wrap, TextField, Popout, DateIcon, DatePicker

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./atomic-ui/assets/scripts/date.js
/**
 * @return {Date[]} List with date objects for each day of the month
 */
const getDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];
  const day = date.getDay();
  let spaces = 0;
  if (day === 0) spaces = 6;else spaces = day - 1;

  while (spaces > 0) {
    days.push(null);
    spaces -= 1;
  }

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
};
const getDaysInMonthUTC = (year, month) => {
  const date = new Date(Date.UTC(year, month, 1));
  const days = [];

  while (date.getUTCMonth() === month) {
    days.push(new Date(date));
    date.setUTCDate(date.getUTCDate() + 1);
  }

  return days;
};
/**
 * @return {Date[]} List with date objects for each day of the week
 */

const getDaysInWeek = date => {
  const week = [];
  const day = date.getDay();
  const mondayCorrection = day === 0 ? -6 : 1;
  date.setDate(date.getDate() - day + mondayCorrection);

  for (let i = 0; i < 7; i += 1) {
    week.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return week;
};
/**
 * @return {string[]} List with internalization months
 */

const getIntlMonths = lang => {
  return new Array(12).fill(null).map((_, index) => new Date(new Date().getFullYear(), index)).map(month => month.toLocaleDateString(lang, {
    month: 'short'
  }));
};
/**
 * @return {string[]} List with internalization weekdays
 */

const getIntlWeekdays = (lang, repr) => {
  return new Array(7).fill(null).map((_, index) => new Date(new Date().getFullYear(), 0, index - 1)).map(weekDay => weekDay.toLocaleDateString(lang, {
    weekday: repr
  }));
};
const isWeekDay = date => date.getDay() !== 0 && date.getDay() !== 6;
const isSame = (_date1, _date2) => {
  const date1 = new Date(_date1);
  date1.setHours(0, 0, 0, 0);
  const date2 = new Date(_date2);
  date2.setHours(0, 0, 0, 0);
  return new Date(date1).getTime() === new Date(date2).getTime();
};
const parseDate = date => {
  if (!date) return null;
  return new Date(date) || null;
};
const getDateLabel = date => {
  var _Date;

  if (!date) return null;
  return ((_Date = new Date(date)) === null || _Date === void 0 ? void 0 : _Date.toLocaleDateString()) || null;
};
// CONCATENATED MODULE: ./atomic-ui/hooks/useClickOutside.js

const useClickOutside = callBack => {
  const rootRef = Object(external_react_["useRef"])(null);
  const onClickOutside = Object(external_react_["useCallback"])(e => {
    if (rootRef.current && !rootRef.current.contains(e.target)) {
      callBack();
    }
  }, [rootRef, callBack]);
  Object(external_react_["useEffect"])(() => {
    window.addEventListener('click', onClickOutside);
    return () => {
      window.removeEventListener('click', onClickOutside);
    };
  }, [onClickOutside]);
  return [rootRef];
};
/* harmony default export */ var hooks_useClickOutside = (useClickOutside);
// EXTERNAL MODULE: ./atomic-ui/components/Transition/index.js
var Transition = __webpack_require__("hYBG");

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");

// EXTERNAL MODULE: ./atomic-ui/components/Arrower/index.js
var Arrower = __webpack_require__("8Esz");

// CONCATENATED MODULE: ./atomic-ui/components/DateDay/index.js
var __jsx = external_react_default.a.createElement;



const Wrap = external_styled_components_default.a.div`
  --cell-size: 35px;
  --cell-offset: 2.5px;
  --cell-color: #fff;
  --badge-size: 5px;
  --badge-bottom-offset: 2px;
  --side-left-radius: 10rem 0 0 10rem;
  --side-right-radius: 0 10rem 10rem 0;
  --transition: all 150ms ease;

  display: flex;
  align-items: center;

  align-self: center;
  justify-content: center;

  width: var(--cell-size);
  height: var(--cell-size);

  margin: var(--cell-offset) 0;
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  transition: var(--transition);
  justify-self: center;

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--cell-size);
    height: var(--cell-size);

    font-size: var(--font-size-s);
    font-weight: 400;
    color: var(--default-color-text);
    border-radius: 50%;
    transition: var(--transition);

    i {
      position: absolute;
      bottom: var(--badge-bottom-offset);
      width: var(--badge-size);
      height: var(--badge-size);
      background: var(--default-color-text);
      border-radius: 50%;
    }

    ${({
  current
}) => current && external_styled_components_["css"]`
        color: var(--default-color-accent);
        background: transparent;
        border: 1px solid var(--default-color-accent);

        i {
          display: none;
        }
      `}

    ${({
  selected
}) => selected && external_styled_components_["css"]`
        color: var(--cell-color);
        background: var(--default-color-accent);

        i {
          background: var(--cell-color);
        }
      `}
  }
`;

const DateDay = ({
  value,
  selectedDate,
  withMarkers,
  onCompare,
  onChange
}) => {
  const [date, month, year] = [value.getDate(), value.getMonth(), value.getFullYear()];
  const [cDate, cMonth, cYear] = [new Date().getDate(), new Date().getMonth(), new Date().getFullYear()];
  const isSelectedDate = selectedDate && selectedDate && isSame(value, selectedDate);
  const isCurrent = cDate === date && cMonth === month && cYear === year;
  return __jsx(Wrap, {
    role: 'button',
    tabIndex: 0,
    onMouseDown: onChange,
    selected: isSelectedDate,
    current: isCurrent
  }, __jsx("span", null, value.getDate(), withMarkers && onCompare(value) && __jsx("i", null)));
};

/* harmony default export */ var components_DateDay = (DateDay);
// CONCATENATED MODULE: ./atomic-ui/components/DateMonth/index.js
var DateMonth_jsx = external_react_default.a.createElement;






const DateMonth_Wrap = external_styled_components_default.a.div`
  display: flex;
  flex-direction: column;
  width: 252px;
`;
const MonthLabel = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
`;
const Headers = external_styled_components_default.a.div`
  display: grid;
  align-content: center;
  justify-content: center;

  margin-bottom: 10px;
  user-select: none;
  grid-template-columns: repeat(auto-fit, minmax(35px, 35px));
`;
const Header = external_styled_components_default.a.div`
  align-self: center;
  font-size: var(--size-text-xs);
  font-weight: 500;
  color: var(--ghost-color-text);
  text-transform: uppercase;
  justify-self: center;
`;
const Days = external_styled_components_default.a.div`
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(35px, 35px));
`;
const Day = external_styled_components_default.a.div``;
const DateMonth = /*#__PURE__*/Object(external_react_["memo"])(({
  lang,
  month,
  value,
  filterDate,
  setFilterDate,
  withNavigate,
  withMarkers,
  withYearDisplay,
  onCompare,
  onChange
}) => {
  const weekDays = Object(external_react_["useMemo"])(() => getIntlWeekdays(lang, 'short'), [lang]);
  return DateMonth_jsx(DateMonth_Wrap, null, withNavigate ? DateMonth_jsx(Arrower["a" /* default */], {
    label: DateMonth_jsx(external_react_default.a.Fragment, null, DateMonth_jsx("span", null, month.label), withYearDisplay && DateMonth_jsx("span", null, filterDate.getFullYear())),
    defaultValue: filterDate,
    onChange: sign => setFilterDate(new Date(filterDate.getFullYear(), filterDate.getMonth() + sign))
  }) : DateMonth_jsx(MonthLabel, null, month.label, withYearDisplay && value && DateMonth_jsx("span", null, new Date(value).getFullYear())), DateMonth_jsx(Headers, null, weekDays.map(weekDay => DateMonth_jsx(Header, {
    key: Object(external_uuid_["v4"])()
  }, weekDay))), DateMonth_jsx(Days, null, month.days.map(dateDay => dateDay ? DateMonth_jsx(components_DateDay, {
    key: Object(external_uuid_["v4"])(),
    value: dateDay,
    selectedDate: value,
    withMarkers: withMarkers,
    onCompare: onCompare,
    onChange: () => onChange(dateDay)
  }) : DateMonth_jsx(Day, {
    key: Object(external_uuid_["v4"])()
  }))));
});
/* harmony default export */ var components_DateMonth = (DateMonth);
// EXTERNAL MODULE: ./atomic-ui/components/Divider/index.js
var Divider = __webpack_require__("RKiZ");

// EXTERNAL MODULE: ./atomic-ui/components/Input/index.js
var Input = __webpack_require__("Gliw");

// CONCATENATED MODULE: ./atomic-ui/components/DateSheet/index.js
var DateSheet_jsx = external_react_default.a.createElement;







const DateSheet_Wrap = external_styled_components_default.a.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
`;
const defaultYear = new Date().getFullYear();
const DateSheet = ({
  lang,
  value,
  style,
  sheets,
  className,
  canEditYear,
  withMarkers,
  withNavigate,
  withYearDisplay,
  onCompare,
  onChange
}) => {
  const date = parseDate(value);
  const {
    0: months,
    1: setMonths
  } = Object(external_react_["useState"])([]);
  const {
    0: filterDate,
    1: setFilterDate
  } = Object(external_react_["useState"])(new Date());
  Object(external_react_["useEffect"])(() => {
    setMonths(new Array(sheets || 1).fill(null).map((_, index) => {
      const startDate = new Date(filterDate);
      const current = new Date(startDate.getFullYear(), startDate.getMonth() + index);
      const month = current.getMonth();
      const label = current.toLocaleString(lang, {
        month: 'long'
      });
      return {
        label,
        days: getDaysInMonth(current.getFullYear(), month)
      };
    }));
  }, [filterDate, sheets, lang]);
  return DateSheet_jsx(DateSheet_Wrap, {
    className: className,
    style: style
  }, canEditYear && DateSheet_jsx(Input["a" /* default */], {
    type: 'number',
    name: 'year',
    defaultValue: date && date.getFullYear() || defaultYear,
    onChange: e => setFilterDate(new Date(e.target.value, filterDate.getMonth(), filterDate.getDate())),
    horizontalAlignment: 'center',
    placeholder: defaultYear,
    appearance: 'ghost',
    min: 1920,
    max: 2100,
    required: true
  }), canEditYear && DateSheet_jsx(Divider["a" /* default */], {
    clear: true
  }), months.map(month => DateSheet_jsx(components_DateMonth, {
    key: Object(external_uuid_["v4"])(),
    value: date,
    lang: lang,
    month: month,
    filterDate: filterDate,
    setFilterDate: setFilterDate,
    withNavigate: !!withNavigate,
    withMarkers: withMarkers !== null && withMarkers !== void 0 ? withMarkers : true,
    withYearDisplay: withYearDisplay !== null && withYearDisplay !== void 0 ? withYearDisplay : months.length === 1,
    onCompare: onCompare || isWeekDay,
    onChange: onChange
  })));
};
/* harmony default export */ var components_DateSheet = (DateSheet);
// EXTERNAL MODULE: ./atomic-ui/components/Icon/index.js + 109 modules
var Icon = __webpack_require__("feIE");

// CONCATENATED MODULE: ./atomic-ui/components/DatePicker/index.js
var DatePicker_jsx = external_react_default.a.createElement;








const DURATION = 100;
const DatePicker_Wrap = external_styled_components_default.a.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`;
const TextField = external_styled_components_default.a.div`
  position: relative;
  flex-grow: 1;
`;
const Popout = external_styled_components_default()(Transition["a" /* default */])`
  position: absolute;
  top: calc(var(--input-height-m) + 10px);
  left: 0;
  z-index: 15;
  padding: var(--default-gap);
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  box-shadow: var(--default-shadow);

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms, blur 100ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 100ms, blur 100ms;
  }
`;
const DateIcon = external_styled_components_default()(Icon["a" /* default */])`
  position: absolute;
  top: 10px;
  right: 10px;
`;
const DatePicker = ({
  id,
  name,
  style,
  sheets,
  inputRef,
  placeholder,
  value = null,
  className,
  appearance,
  canEditYear,
  withNavigate,
  withMarkers,
  withYearDisplay,
  onChange,
  onCompare
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: selected,
    1: setSelected
  } = Object(external_react_["useState"])(parseDate(value));
  const [label] = hooks_useClickOutside(() => setIsOpen(false));

  const handleChange = newVal => {
    setSelected(newVal);
    if (onChange) onChange(newVal);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  return DatePicker_jsx(DatePicker_Wrap, {
    ref: label,
    className: className,
    style: style
  }, DatePicker_jsx(TextField, {
    onClick: handleInputClick,
    className: className,
    style: style
  }, DatePicker_jsx(Input["a" /* default */], {
    id: id,
    name: name,
    type: 'text',
    inputRef: inputRef !== null && inputRef !== void 0 ? inputRef : null,
    defaultValue: getDateLabel(selected),
    placeholder: placeholder || 'Выберите дату',
    appearance: appearance,
    readOnly: true
  }), DatePicker_jsx(DateIcon, {
    icon: 'calendar',
    stroke: 'var(--ghost-color-text)'
  })), DatePicker_jsx(Popout, {
    in: isOpen,
    animation: 'fade',
    timeout: DURATION
  }, DatePicker_jsx(components_DateSheet, {
    value: selected,
    sheets: sheets,
    style: {
      width: 282
    },
    canEditYear: canEditYear,
    withNavigate: withNavigate,
    withMarkers: withMarkers,
    withYearDisplay: withYearDisplay,
    onChange: handleChange,
    onCompare: onCompare
  })));
};
/* harmony default export */ var components_DatePicker = __webpack_exports__["a"] = (DatePicker);

/***/ }),

/***/ "wha1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return supportLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return socials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return contacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return profilePages; });
/* unused harmony export notifications */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categories; });
/* unused harmony export filters */
const supportLinks = [{
  label: 'О ресурсе',
  path: '/about'
}, {
  label: 'Люди ресурса',
  path: '/creators'
}, {
  label: 'Поддержка',
  path: '/support'
}, {
  label: 'Справочник',
  path: '/guide'
}];
const socials = ['/images/socials/gmail.png', '/images/socials/vk.png', '/images/socials/facebook.png'];
const contacts = [{
  label: 'г. Екатеринбург, ул. Декабристов 20а, оф. 302',
  icon: 'location'
}, {
  label: '+7 (499) 222-54-86',
  icon: 'call'
}, {
  label: 'info@mail.ru',
  icon: 'message'
}];
const profilePages = [{
  label: 'Мои проекты',
  value: '/projects'
}, {
  label: 'Нравится',
  value: '/liked'
}, {
  label: 'В работе',
  value: '/feed'
}];
const notifications = [{
  img: '/images/avatar.png',
  title: 'Владислав',
  message: 'Прокомментировал(а) ваш проект',
  date: '12.12.2020'
}, {
  img: '/images/avatar.png',
  title: 'Владислав',
  message: 'Прокомментировал(а) ваш проект',
  date: '12.12.2020'
}, {
  icon: 'infoCircle',
  title: 'Система',
  message: 'Добро пожаловать!',
  date: '12.12.2020'
}];
const categories = [{
  value: 0,
  label: 'Строительство'
}, {
  value: 1,
  label: 'Реконструкция'
}, {
  value: 2,
  label: 'Капитальный ремонт'
}, {
  value: 3,
  label: 'Цифровая среда'
}];
const filters = [{
  label: 'Рейтинг',
  value: 'rating'
}, {
  label: 'Подписчики',
  value: 'followers'
}, {
  label: 'Дата',
  value: 'date'
}];

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xAqQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Delete */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nShV");
/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZeZO");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qoM+");
/* harmony import */ var _Processed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2qQv");





const Delete = ({
  children,
  mutation,
  appearance,
  className,
  onCancel,
  onSubmit
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"], {
    className: className,
    appearance: appearance,
    mutation: mutation,
    onSubmit: onSubmit
  }, ({
    loading,
    error
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Processed__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    data: children,
    loading: loading,
    error: error,
    errorMessage: 'Упс! Не удалось удалить документ',
    emptyMessage: 'Не указан документ для удаления'
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    type: 'button',
    style: {
      flexGrow: 1
    },
    onClick: onCancel
  }, "\u041E\u0442\u043C\u0435\u043D\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    type: 'submit',
    disabled: loading,
    appearance: 'red',
    style: {
      flexGrow: 1
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")))));
};
/* harmony default export */ __webpack_exports__["a"] = (Delete);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yEVw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Wrap */
/* unused harmony export Poster */
/* unused harmony export Header */
/* unused harmony export Actions */
/* unused harmony export Content */
/* unused harmony export Name */
/* unused harmony export Card */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nShV");
/* harmony import */ var _atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8CDE");
/* harmony import */ var _atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7sPp");
/* harmony import */ var _atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("QUga");
/* harmony import */ var _atomic_ui_components_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("V0nP");
/* harmony import */ var _atomic_ui_components_Meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("aBfq");
/* harmony import */ var _atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ZeZO");
/* harmony import */ var _atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("feIE");
/* harmony import */ var _atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("79b8");
/* harmony import */ var _atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("VWQm");
/* harmony import */ var _atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("NWnW");
/* harmony import */ var _hooks_useEntityQuery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("8UhZ");














const Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]).withConfig({
  displayName: "CategoryCard__Wrap",
  componentId: "sc-10psc0b-0"
})(["height:100%;", " ", " ", ""], ({
  appearance
}) => appearance === 'default' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"]), ({
  appearance
}) => appearance === 'ghost' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]), ({
  appearance
}) => appearance === 'clear' && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]));
const Poster = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Image__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]).withConfig({
  displayName: "CategoryCard__Poster",
  componentId: "sc-10psc0b-1"
})(["object-fit:cover;width:100%;height:512px;border-radius:var(--surface-border-radius);"]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "CategoryCard__Header",
  componentId: "sc-10psc0b-2"
})(["justify-content:space-between;align-items:center;"]);
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Row__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]).withConfig({
  displayName: "CategoryCard__Actions",
  componentId: "sc-10psc0b-3"
})(["grid-gap:5px;height:100%;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Column__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]).withConfig({
  displayName: "CategoryCard__Content",
  componentId: "sc-10psc0b-4"
})(["grid-gap:0;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_atomic_ui_components_Title__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]).withConfig({
  displayName: "CategoryCard__Name",
  componentId: "sc-10psc0b-5"
})(["transition:opacity 150ms ease;", ""], ({
  onClick
}) => onClick && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["cursor:pointer;&:hover{opacity:0.45;}"]));
const Card = ({
  category,
  appearance,
  className,
  style,
  onLink,
  onChecked,
  onDelete,
  onEdit
}) => {
  const {
    setQuery
  } = Object(_hooks_useEntityQuery__WEBPACK_IMPORTED_MODULE_13__[/* useEntityQuery */ "b"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrap, {
    className: className,
    style: style,
    appearance: appearance
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Meta__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    date: category.createdAt,
    category: Object(_atomic_ui_utils_functions__WEBPACK_IMPORTED_MODULE_12__[/* getLabelCategory */ "d"])(category.type)
  }), onChecked && onEdit && onDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Actions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__[/* default */ "b"], {
    text: 'Удалить категорию'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    appearance: 'red',
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    icon: 'delete',
    size: 'xs',
    stroke: 'white'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__[/* default */ "b"], {
    text: 'Редактировать категорию'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Button__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    kind: 'icon',
    size: 'xs',
    onClick: onEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Icon__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    icon: 'edit',
    size: 'xs',
    stroke: 'white'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Tooltip__WEBPACK_IMPORTED_MODULE_11__[/* default */ "b"], {
    text: 'Отметить категорию',
    self: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Checkbox__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, {
    tag: 'h4',
    onClick: () => setQuery(category.id, 'category', onLink)
  }, category.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atomic_ui_components_Text__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"], null, category.description)));
};
Card.defaultProps = {
  appearance: 'default'
};
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "zSN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
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

/***/ })

/******/ });
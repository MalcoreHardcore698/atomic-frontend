(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{EJJs:function(n,e,t){"use strict";t.d(e,"a",(function(){return W}));var r=t("rePB"),a=t("h4VS"),c=t("q1tI"),o=t.n(c),i=t("vOnD"),u=t("7Cbv"),d=t("nShV"),f=t("8CDE"),l=t("feIE"),b=t("ZeZO"),s=t("OXt0"),h=t("DTT8"),v=t("79b8"),p=t("VWQm"),O=t("vJvq"),x=o.a.createElement;function w(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function j(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?w(Object(t),!0).forEach((function(e){Object(r.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function g(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return g=function(){return n},n}function m(){var n=Object(a.a)(["\n  border: 1px solid var(--surface-border);\n  background: var(--surface-background);\n  box-shadow: var(--surface-shadow);\n  border-radius: var(--surface-border-radius);\n  padding: 10px;\n  grid-gap: 10px;\n"]);return m=function(){return n},n}function k(){var n=Object(a.a)(["\n  align-items: center;\n  flex-grow: 1;\n\n  width: ",";\n  overflow: hidden;\n\n  & > div {\n    width: 100%;\n  }\n\n  h4 {\n    font-size: var(--font-size-m);\n    font-weight: var(--font-weight-bold);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]);return k=function(){return n},n}function y(){var n=Object(a.a)(["\n      border: none;\n      background: none;\n      box-shadow: none;\n      border-radius: 0;\n      padding: 0;\n    "]);return y=function(){return n},n}function E(){var n=Object(a.a)(["\n      border: 1px solid var(--surface-border);\n      background: var(--surface-background);\n      box-shadow: 1px solid var(--surface-shadow);\n      border-radius: var(--surface-border-radius);\n    "]);return E=function(){return n},n}function A(){var n=Object(a.a)(["\n  padding: 5px;\n  width: var(--input-height-m);\n  grid-gap: 5px;\n\n  button {\n    width: 100%;\n    flex-grow: 1;\n  }\n\n  ","\n\n  ","\n"]);return A=function(){return n},n}function C(){var n=Object(a.a)(["\n      cursor: pointer;\n    "]);return C=function(){return n},n}function D(){var n=Object(a.a)(["\n  width: 100%;\n\n  ","\n"]);return D=function(){return n},n}function P(){var n=Object(a.a)(["\n      border: none;\n      background: none;\n      box-shadow: none;\n      border-radius: 0;\n    "]);return P=function(){return n},n}function z(){var n=Object(a.a)(["\n      border: 1px solid var(--surface-border);\n      background: var(--surface-background);\n      box-shadow: 1px solid var(--surface-shadow);\n      border-radius: var(--surface-border-radius);\n    "]);return z=function(){return n},n}function I(){var n=Object(a.a)(["\n  padding: 5px 15px;\n  width: calc(100% - 55px);\n\n  ","\n\n  ","\n\n  & > label {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: calc(var(--input-height-m) - 15px);\n    margin-left: 5px;\n\n    & > span {\n      margin: 0;\n    }\n  }\n"]);return I=function(){return n},n}function J(){var n=Object(a.a)(["\n      opacity: 0.45;\n    "]);return J=function(){return n},n}function S(){var n=Object(a.a)(["\n  transition: opacity 150ms ease;\n\n  ","\n"]);return S=function(){return n},n}function N(){var n=Object(a.a)(["\n      span:first-child {\n        width: calc("," + 45px);\n      }\n    "]);return N=function(){return n},n}function T(){var n=Object(a.a)(["\n      span {\n        width: ",";\n      }\n    "]);return T=function(){return n},n}function V(){var n=Object(a.a)(["\n  ","\n\n  ","\n"]);return V=function(){return n},n}function _(){var n=Object(a.a)([""]);return _=function(){return n},n}function q(){var n=Object(a.a)([""]);return q=function(){return n},n}var M=Object(i.c)(f.a)(q()),R=Object(i.c)(d.b)(_()),Z=Object(i.c)(s.b)(V(),(function(n){var e=n.width;return e&&Object(i.b)(T(),e)}),(function(n){var e=n.first,t=n.width;return e&&t&&Object(i.b)(N(),t)})),B=Object(i.c)(d.b)(S(),(function(n){return n.checked&&Object(i.b)(J())})),F=Object(i.c)(d.b)(I(),(function(n){return"default"===n.appearance&&Object(i.b)(z())}),(function(n){return"clear"===n.appearance&&Object(i.b)(P())})),L=Object(i.c)(d.b)(D(),(function(n){return n.onClick&&Object(i.b)(C())})),Q=Object(i.c)(f.a)(A(),(function(n){return"default"===n.appearance&&Object(i.b)(E())}),(function(n){return"clear"===n.appearance&&Object(i.b)(y())})),W=Object(i.c)(h.b)(k(),(function(n){return n.width})),X=Object(i.c)(f.a)(m()),Y=Object(i.c)(p.b)(g()),G=function(n){var e=n.data,t=n.template,r=n.className,a=n.style,i=n.appearance,d=n.onClick,f=n.onChecked,s=n.onDelete,h=n.onEdit,w=Object(c.useState)((e||[]).map((function(n){return j(j({},n),{},{id:Object(u.a)(),checked:!1})}))),g=w[0],m=w[1],k="".concat(Math.floor(100/t.length),"%"),y=Object(c.useState)((t||[]).map((function(n){return{value:Object(u.a)(),label:n.header,width:n.width||k,tooltip:n.tooltip||"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \xab".concat(n.header,"\u200e\xbb"),visible:!n.hidden}}))),E=y[0],A=(y[1],Object(c.useState)(E[0]||null)),C=(A[0],A[1]);return x(M,{className:r,style:a},x(R,null,x(Z,{defaultValue:E[0],options:E.filter((function(n){return n.visible})),onChange:function(n){return C(n)},first:f,stretch:!0}),x(O.b,{place:"left",offset:{bottom:80},body:x(X,null,E.map((function(n,e){return x(v.a,{key:e,size:"s",label:n.label,checked:n.visible})}))),appearance:"clear"},x(p.b,{text:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0435\u0439",place:"left"},x(b.a,{kind:"icon"},x(l.a,{icon:"show",stroke:"white"}))))),g.map((function(n,e){return x(B,{key:e,checked:n.checked},x(F,{appearance:i},x(Y,{text:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442",self:!0},f&&x(v.a,{size:"s",onChange:function(){return function(n){m((function(e){return e.map((function(e){return e.id===n.id?j(j({},n),{},{checked:!e.checked}):e}))}))}(n)}})),x(L,{onClick:function(){return d(n)}},t.map((function(e,t){return E[t].visible?o.a.cloneElement(e.content(n),{key:t,label:e.header,width:(null===e||void 0===e?void 0:e.width)||k}):null})))),(h||s)&&x(Q,{appearance:i},h&&x(p.b,{text:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",place:"left"},x(b.a,{size:"xs",kind:"icon",onClick:function(){return h(n)}},x(l.a,{icon:"edit",size:"xs",stroke:"white"}))),s&&x(p.b,{text:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435",place:"left"},x(b.a,{size:"xs",kind:"icon",appearance:"red",onClick:function(){return s(n)}},x(l.a,{icon:"delete",size:"xs",stroke:"white"})))))})))};G.defaultProps={appearance:"default"},e.b=G},e3uv:function(n,e,t){"use strict";var r=t("q1tI"),a=t.n(r),c=t("EJJs"),o=a.a.createElement,i=[{header:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",content:function(n){return o(c.a,{text:n.name||"-"})},width:"15%"},{header:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",content:function(n){return o(c.a,{text:n.description||"-"})},width:"70%"},{header:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",content:function(n){return o(c.a,{text:n.createdAt||"-"})},width:"15%"}],u=a.a.createElement,d=[{header:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",content:function(n){var e;return u(c.a,{img:null===(e=n.preview)||void 0===e?void 0:e.path,text:n.title||"-"})}},{header:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",content:function(n){return u(c.a,{text:n.body||"-"})}},{header:"\u0420\u0430\u0437\u0434\u0435\u043b",content:function(n){var e;return u(c.a,{text:(null===(e=n.category)||void 0===e?void 0:e.name)||"-"})}},{header:"\u0410\u0432\u0442\u043e\u0440",content:function(n){var e,t,r;return u(c.a,{img:null===(e=n.author)||void 0===e||null===(t=e.avatar)||void 0===t?void 0:t.path,text:(null===(r=n.author)||void 0===r?void 0:r.name)||"-"})}},{header:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",content:function(n){return u(c.a,{text:n.publishedAt||"-"})}},{header:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",content:function(n){return u(c.a,{text:n.createdAt||"-"})},hidden:!0}],f=a.a.createElement,l=[{header:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",content:function(n){var e;return f(c.a,{img:null===(e=n.preview)||void 0===e?void 0:e.path,text:n.title||"-"})}},{header:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",content:function(n){return f(c.a,{text:n.body||"-"})}},{header:"\u0420\u0430\u0437\u0434\u0435\u043b",content:function(n){var e;return f(c.a,{text:(null===(e=n.category)||void 0===e?void 0:e.name)||"-"})}},{header:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",content:function(n){var e,t,r;return f(c.a,{img:null===(e=n.company)||void 0===e||null===(t=e.avatar)||void 0===t?void 0:t.path,text:(null===(r=n.company)||void 0===r?void 0:r.name)||"-"})}},{header:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",content:function(n){return f(c.a,{text:n.publishedAt||"-"})}},{header:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",content:function(n){return f(c.a,{text:n.createdAt||"-"})},hidden:!0}],b=a.a.createElement,s=[{header:"\u041d\u043e\u043c\u0435\u0440",content:function(n){return b(c.a,{text:n.token||"-"})}},{header:"\u0410\u0432\u0442\u043e\u0440",content:function(n){var e,t;return b(c.a,{img:null===(e=n.author)||void 0===e?void 0:e.avatar,text:(null===(t=n.author)||void 0===t?void 0:t.name)||"-"})}},{header:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",content:function(n){var e;return b(c.a,{img:null===(e=n.avatar)||void 0===e?void 0:e.path,text:n.title||"-"})}},{header:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",content:function(n){var e;return b(c.a,{text:(null===(e=n.category)||void 0===e?void 0:e.name)||"-"})}},{header:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",content:function(n){var e;return b(c.a,{text:(null===(e=n.messages)||void 0===e?void 0:e.length)||"-"})}},{header:"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",content:function(n){return b(c.a,{text:n.createdAt||"-"})},hidden:!0}],h=a.a.createElement,v=[{header:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",content:function(n){return h(c.a,{text:n.name||"-"})},width:"15%"},{header:"\u041f\u0440\u0438\u0432\u0435\u043b\u0435\u0433\u0438\u0438",content:function(n){var e;return h(c.a,{text:(null===(e=n.permissions)||void 0===e?void 0:e.length)||"-"})},width:"75%"},{header:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",content:function(n){return h(c.a,{text:n.createdAt||"-"})},width:"10%"}],p=a.a.createElement,O=function(n){switch(n){case"ADMIN":return"\u0410\u0434\u043c\u0438\u043d";case"MODERATOR":return"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440";case"OFICIAL":return"\u041e\u0444. \u043b\u0438\u0446\u043e";case"ENTITY":return"\u042e\u0440. \u043b\u0438\u0446\u043e";default:return"\u0424\u0438\u0437. \u043b\u0438\u0446\u043e"}},x=i,w=d,j=l,g=s,m=v,k=[{header:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",content:function(n){var e;return p(c.a,{img:null===(e=n.avatar)||void 0===e?void 0:e.path,text:n.name||"-"})}},{header:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442",content:function(n){return p(c.a,{text:n.account&&O(n.account)||"-"})}},{header:"\u041e \u0441\u0435\u0431\u0435",content:function(n){return p(c.a,{text:n.about||"-"})}},{header:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",content:function(n){var e;return p(c.a,{text:(null===(e=n.projects)||void 0===e?void 0:e.length)||"-"})}},{header:"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",content:function(n){return p(c.a,{text:n.createdAt||"-"})},hidden:!0}];e.a={category:x,article:w,project:j,ticket:g,role:m,user:k}}}]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{D85t:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return o("RHEb")}])},EYtC:function(e,t,o){"use strict";var a=o("q1tI"),n=o.n(a),r=o("vOnD"),i=o("nShV"),l=o("ZeZO"),s=o("feIE"),c=o("t7jn");const u=Object(r.d)(i.b).withConfig({displayName:"SearchBar__Wrap",componentId:"sc-1ruwjhl-0"})(["width:100%;"]),d=Object(r.d)(c.a).withConfig({displayName:"SearchBar__WrapSearchField",componentId:"sc-1ruwjhl-1"})(["flex-grow:100;"]),p=Object(r.d)(l.a).withConfig({displayName:"SearchBar__WrapButton",componentId:"sc-1ruwjhl-2"})(["background:var(--default-color-accent-dim);border:none;&:hover{svg{path,circle{stroke:white;}}}",""],(({visibleFilter:e})=>e&&Object(r.c)(["background:var(--default-color-accent);"])));t.a=({appearance:e,onChangeFilter:t,onSubmit:o})=>{const[r,i]=Object(a.useState)(!1);return n.a.createElement(u,null,n.a.createElement(d,{appearance:e,placeholder:"\u041f\u043e\u0438\u0441\u043a",onSubmit:o}),n.a.createElement(p,{type:"button",kind:"icon",onClick:()=>{i(!r),t&&t(!r)},visibleFilter:r},n.a.createElement(s.a,{icon:"filter2",stroke:r?"white":"var(--default-color-accent)"})))}},LSTS:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),n=o("q1tI"),r=l(n),i=l(o("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.scrollListener=o.scrollListener.bind(o),o.eventListenerOptions=o.eventListenerOptions.bind(o),o.mousewheelListener=o.mousewheelListener.bind(o),o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var e=!1,t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch(o){}return e}},{key:"eventListenerOptions",value:function(){var e=this.props.useCapture;return this.isPassiveSupported()&&(e={useCapture:this.props.useCapture,passive:!0}),e}},{key:"setDefaultLoader",value:function(e){this.defaultLoader=e}},{key:"detachMousewheelListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var e=window;!1===this.props.useWindow&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(e){var t=this.props.getScrollParent&&this.props.getScrollParent();return null!=t?t:e&&e.parentNode}},{key:"filterProps",value:function(e){return e}},{key:"attachScrollListener",value:function(){var e=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&e){var t=window;!1===this.props.useWindow&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(e){1!==e.deltaY||this.isPassiveSupported()||e.preventDefault()}},{key:"scrollListener",value:function(){var e=this.scrollComponent,t=window,o=this.getParentElement(e),a=void 0;if(this.props.useWindow){var n=document.documentElement||document.body.parentNode||document.body,r=void 0!==t.pageYOffset?t.pageYOffset:n.scrollTop;a=this.props.isReverse?r:this.calculateOffset(e,r)}else a=this.props.isReverse?o.scrollTop:e.scrollHeight-o.scrollTop-o.clientHeight;a<Number(this.props.threshold)&&e&&null!==e.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=o.scrollHeight,this.beforeScrollTop=o.scrollTop,"function"===typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}},{key:"calculateTopPosition",value:function(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}},{key:"render",value:function(){var e=this,t=this.filterProps(this.props),o=t.children,a=t.element,n=t.hasMore,i=(t.initialLoad,t.isReverse),l=t.loader,s=(t.loadMore,t.pageStart,t.ref),c=(t.threshold,t.useCapture,t.useWindow,t.getScrollParent,function(e,t){var o={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(o[a]=e[a]);return o}(t,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]));c.ref=function(t){e.scrollComponent=t,s&&s(t)};var u=[o];return n&&(l?i?u.unshift(l):u.push(l):this.defaultLoader&&(i?u.unshift(this.defaultLoader):u.push(this.defaultLoader))),r.default.createElement(a,c,u)}}]),t}(n.Component);s.propTypes={children:i.default.node.isRequired,element:i.default.node,hasMore:i.default.bool,initialLoad:i.default.bool,isReverse:i.default.bool,loader:i.default.node,loadMore:i.default.func.isRequired,pageStart:i.default.number,ref:i.default.func,getScrollParent:i.default.func,threshold:i.default.number,useCapture:i.default.bool,useWindow:i.default.bool},s.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},t.default=s,e.exports=t.default},QX5T:function(e,t,o){"use strict";var a=o("q1tI"),n=o.n(a),r=o("20a2"),i=o("vOnD"),l=o("VX74"),s=o("RotF"),c=o.n(s),u=o("7Cbv"),d=o("8CDE"),p=o("wZgm"),h=o("auMy"),f=o("QclZ"),m=o("X+Rt"),v=o("p9yE"),b=o("RoTl"),E=o("EYtC"),y=o("coMr"),g=o("586Q"),O=o("/MKj");const w=Object(i.d)(d.a).withConfig({displayName:"content__Wrap",componentId:"sc-1afm75p-0"})(["margin-top:120px;margin-bottom:80px;"," @media only screen and (max-width:480px){margin-top:0;}"],(({clear:e})=>e&&Object(i.c)(["margin:0;"])));t.a=({title:e,store:t,query:o,handle:i,filters:s,options:d,scaffold:j,dashboard:L,variables:S={},limit:C=6,startOffset:_=6,initialize:P,children:k})=>{const T=Object(r.useRouter)(),R=Object(O.c)((e=>e.root.search)),M=L?v.a:m.a,[D,x]=Object(a.useState)(),[I,N]=Object(a.useState)(),[q,A]=Object(a.useState)(null),[W,F]=Object(a.useState)(!1),[H,J]=Object(a.useState)(_+1),[Q,U]=Object(a.useState)((null===t||void 0===t?void 0:t.documents)||[]),[V,X]=Object(a.useState)(!1),z=Object(a.useMemo)((()=>{var e;return Number(null===(e=T.query)||void 0===e?void 0:e.page)||1}),[T]),[B,{data:G,loading:K,refetch:Y}]=Object(l.useLazyQuery)(o),[Z,{data:$,loading:ee,refetch:te}]=Object(l.useLazyQuery)(o),oe=e=>{if(U([]),e)A(e),B({variables:{...S,search:e,offset:0,limit:_*z}});else{const e={...S,offset:0,limit:C};A(null),te?te(e):Z({variables:e})}J(0)};return Object(a.useEffect)((()=>{P&&Z({variables:{offset:H,limit:C}})}),[P]),Object(a.useEffect)((()=>{R&&oe(R)}),[R]),Object(a.useEffect)((()=>{const e=!q&&!ee&&$||q&&!K&&G;if(e){const t=e[Object.keys(e)[0]];t.length>0&&U((e=>[...e,...t])),0===t.length&&X(!0)}}),[q,ee,K,$,G,X]),n.a.createElement(M,{title:e,scaffold:j},n.a.createElement(w,{clear:j||L},!j&&!L&&n.a.createElement(E.a,{onChangeFilter:()=>F(!W),onSubmit:oe}),L&&i&&n.a.createElement(y.a,{title:e,icon:i.icon,buttonCreateText:i.buttonCreateText,onCreate:i.onCreate,onChangeVisibleFilter:()=>F(!W),onChangeDisplayMethod:i.onChangeDisplayMethod}),(s||d)&&n.a.createElement(b.a,{isOpen:W,filters:s.map((e=>{switch(e.type){case"DATEPICKER":return n.a.createElement(p.a,{key:Object(u.a)(),value:D,placeholder:e.placeholder||"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",onChange:x,withNavigate:!0});case"SELECT":return n.a.createElement(f.a,{key:Object(u.a)(),options:e.options,placeholder:e.placeholder||"\u0420\u0430\u0437\u0434\u0435\u043b",selected:I,onChange:e=>N(e)});default:return null}})),options:d}),n.a.createElement(c.a,{pageStart:z||0,loadMore:async e=>{const t={...S,offset:H,limit:C};q&&Y?await Y(S):te?(await te(t),J(C*e+_+1)):await Z({variables:t})},hasMore:!V,loader:n.a.createElement(g.d,{key:"loader"},n.a.createElement(h.a,null))},"function"===typeof k?n.a.createElement(k,{documents:Q}):k)))}},RHEb:function(e,t,o){"use strict";o.r(t);var a=o("q1tI"),n=o.n(a),r=o("20a2"),i=o("VX74"),l=o("auMy"),s=o("NWnW"),c=o("QX5T"),u=o("qF4B"),d=o("586Q"),p=o("u2Cb");t.default=()=>{var e;const t=Object(r.useRouter)(),[o,{data:h,loading:f}]=Object(i.useLazyQuery)(p.a.GET_META_PROJECTS);return Object(a.useEffect)((()=>{var e,a;const n=null===(e=t.query)||void 0===e?void 0:e.page,r=null===(a=t.query)||void 0===a?void 0:a.c;r&&o({variables:{offset:n?6*n:0,limit:6,status:"PUBLISHED",category:r}})}),[t]),f?n.a.createElement(d.a,null,n.a.createElement(l.a,null)):n.a.createElement(c.a,{title:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",filters:[{type:"DATEPICKER"},{type:"SELECT",options:null===h||void 0===h?void 0:h.getCategories.map((e=>({value:e.id,label:Object(s.e)(e.name)})))}],options:[{label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",value:"company"},{label:"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438",value:"members"},{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",value:"createdAt"}],query:p.a.GET_PROJECTS,variables:{category:null===(e=t.query)||void 0===e?void 0:e.c,status:"PUBLISHED"},store:{documents:null===h||void 0===h?void 0:h.getProjects}},(({documents:e})=>n.a.createElement(d.b,null,n.a.createElement(u.a,{initialList:e,layout:!0}))))}},RotF:function(e,t,o){e.exports=o("LSTS")},qF4B:function(e,t,o){"use strict";var a=o("q1tI"),n=o.n(a),r=o("vOnD"),i=o("VX74"),l=o("/MKj"),s=o("ZwIX"),c=o("auMy"),u=o("586Q"),d=o("VP1n"),p=o("1zqG"),h=o("ApjV"),f=o("lphG"),m=o("8ihE"),v=o("rP4V"),b=o("IxyI"),E=o("u2Cb");const y=r.d.div.withConfig({displayName:"ProjectList__Wrap",componentId:"zcwfmw-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(442px,1fr));grid-gap:var(--default-gap);grid-auto-rows:max-content;@media only screen and (max-width:768px){grid-template-columns:repeat(auto-fit,minmax(285px,1fr));}"]),g=({variables:e,layout:t,eliminable:o,initialList:r,initialRefetch:g,emptyMessage:O})=>{const w=Object(h.b)(),j=Object(f.a)(),{user:L,folder:S}=Object(l.c)((e=>({user:e.user,folder:e.root.folder}))),[C,_]=Object(a.useState)(r||[]),P=Object(l.b)(),{data:k,loading:T,error:R}=r?{data:null,loading:!1,error:!1}:Object(i.useQuery)(E.a.GET_PROJECTS,{variables:e}),M=Object(a.useCallback)((e=>w(b.a,{id:e.id,folders:null===L||void 0===L?void 0:L.folders,mutations:{addProject:E.a.ADD_USER_PROJECT,createFolder:E.a.ADD_USER_FOLDER},callback:t=>{const o={...t,projects:[...t.projects,e.id]};P(Object(m.c)(o))}})()),[L]),D=Object(a.useCallback)((e=>w(b.f,{id:e.id,folder:S,mutation:E.a.REMOVE_USER_PROJECT,callback:()=>g&&g(C.filter((t=>t.id!==e.id)).map((e=>e.id)))})()),[L]);return Object(a.useEffect)((()=>{!T&&k&&_(k.getProjects)}),[k,T]),Object(a.useEffect)((()=>{!T&&(null===r||void 0===r?void 0:r.length)>0&&_(r)}),[T,r]),n.a.createElement(y,null,C.length>0?C.map((e=>{var a,r,i,l;const s=null===L||void 0===L||null===(a=L.projects)||void 0===a?void 0:a.find((t=>t.id===e.id));return n.a.createElement(d.a,{key:e.id},n.a.createElement(p.c,{project:e,eliminable:o,layout:t||"column",owned:s,added:!(null===L||void 0===L||null===(r=L.folders)||void 0===r||!r.find((t=>!(null===t||void 0===t||!t.projects.find((t=>t===e.id)))))),liked:!!(e.rating||[]).find((e=>e.email===L.email)),onLink:w(b.e,{id:e.id,auth:null===L||void 0===L?void 0:L.email,added:!(null===L||void 0===L||null===(i=L.folders)||void 0===i||!i.find((t=>!(null===t||void 0===t||!t.projects.find((t=>t===e.id)))))),liked:!!(e.rating||[]).find((e=>e.email===L.email)),onLike:L.email&&j(E.a.LIKE_PROJECT,{id:e.id},(e=>P(Object(m.e)(e.data.likeProject)))),onAdd:L.email&&w(b.a,{id:e.id,folders:null===L||void 0===L?void 0:L.folders,mutations:{addProject:E.a.ADD_USER_PROJECT,createFolder:E.a.ADD_USER_FOLDER},callback:t=>{const o={...t,projects:[...t.projects,e.id]};P(Object(m.c)(o))}}),owned:s}),onLike:L.email&&j(E.a.LIKE_PROJECT,{id:e.id},(e=>P(Object(m.e)(e.data.likeProject)))),onAdd:L.email&&(()=>M(e)),onRemove:L.email&&(()=>D(e)),onAboutMore:w(v.a,{user:e}),onCompanyLink:w(v.i,{id:null===(l=e.company)||void 0===l?void 0:l.email,auth:null===L||void 0===L?void 0:L.email,recipient:e.author,query:E.a.GET_USER_CHATS,mutation:E.a.SEND_MESSAGE}),onScreenshotClick:(t,o)=>w(b.g,{screenshots:[e.preview,...e.screenshots],key:o})()}))})):R?n.a.createElement(s.a,{appearance:"error",style:{width:"100%",textAlign:"center"}},"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"):T?n.a.createElement(u.c,null,n.a.createElement(c.a,null)):n.a.createElement(s.a,{style:{width:"100%",textAlign:"center"}},O))};g.defaultProps={emptyMessage:"\u041f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u043d\u0435\u0442"},t.a=g}},[["D85t",0,2,1,3,4,5,6,7]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"6bB6":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"f",(function(){return n})),a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return i}));var r={};a.r(r),a.d(r,"sort",(function(){return d})),a.d(r,"filter",(function(){return b})),a.d(r,"default",(function(){return p}));var n={};a.r(n),a.d(n,"sort",(function(){return f})),a.d(n,"filter",(function(){return E})),a.d(n,"default",(function(){return y}));var l={};a.r(l),a.d(l,"sort",(function(){return m})),a.d(l,"filter",(function(){return v})),a.d(l,"default",(function(){return T}));var c={};a.r(c),a.d(c,"sort",(function(){return C})),a.d(c,"filter",(function(){return g})),a.d(c,"default",(function(){return h}));var o={};a.r(o),a.d(o,"sort",(function(){return S})),a.d(o,"filter",(function(){return O})),a.d(o,"default",(function(){return I}));var i={};a.r(i),a.d(i,"sort",(function(){return w})),a.d(i,"filter",(function(){return _})),a.d(i,"default",(function(){return A}));var u=a("NWnW"),s=a("u2Cb");const d=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}],b=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438",name:"permissions",type:"MULTISELECT",selectLabelDecorator:u.f,query:s.a.GET_PERMISSIONS,queryType:"getPermissions"}];var p={sort:d,filter:b};const f=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"account",label:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"},{value:"company",label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"}],E=[{label:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442",name:"account",type:"SELECT",selectRestrictions:["ADMIN"],selectLabelDecorator:u.g,query:s.a.GET_ACCOUNT_TYPES,queryType:"getAccountTypes"},{label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",name:"company",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{account:["ENTITY"],role:"USER"}}];var y={sort:f,filter:E};const m=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"category",label:"\u0420\u0430\u0437\u0434\u0435\u043b"},{value:"author",label:"\u0410\u0432\u0442\u043e\u0440"},{value:"counsellor",label:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442"},{value:"status",label:"\u0421\u0442\u0430\u0442\u0443\u0441"}],v=[{label:"\u0414\u0430\u0442\u0430 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f",name:"createdAt",type:"DATEPICKER"},{label:"\u0420\u0430\u0437\u0434\u0435\u043b",name:"category",type:"SELECT",selectValueField:"id",selectLabelField:"name",query:s.a.GET_CATEGORIES,queryType:"getCategories",variables:{type:"TICKET"}},{label:"\u0410\u0432\u0442\u043e\u0440",name:"author",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{account:["INDIVIDUAL","ENTITY","OFICIAL"],role:"USER"}},{label:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442",name:"counsellor",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{role:"MODERATOR"}},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",name:"status",type:"SELECT",selectLabelDecorator:u.i,query:s.a.GET_STATUS_TICKET_TYPES,queryType:"getStatusTicketTypes"}];var T={sort:m,filter:v};const C=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"category",label:"\u0420\u0430\u0437\u0434\u0435\u043b"}],g=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u0420\u0430\u0437\u0434\u0435\u043b",name:"category",type:"SELECT",selectValueField:"id",selectLabelField:"name",query:s.a.GET_CATEGORIES,queryType:"getCategories",variables:{type:"DIVISION"}}];var h={sort:C,filter:g};const S=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"description",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},{value:"category",label:"\u0420\u0430\u0437\u0434\u0435\u043b"},{value:"company",label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"}],O=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u0420\u0430\u0437\u0434\u0435\u043b",name:"category",type:"SELECT",selectValueField:"id",selectLabelField:"name",query:s.a.GET_CATEGORIES,queryType:"getCategories",variables:{type:"DIVISION"}},{label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",name:"company",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{account:["ENTITY"],role:"USER"}}];var I={sort:S,filter:O};const w=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"description",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},{value:"type",label:"\u0422\u0438\u043f"}],_=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u0422\u0438\u043f",name:"type",type:"SELECT",selectLabelDecorator:u.e,query:s.a.GET_CATEGORY_TYPES,queryType:"getCategoryTypes"}];var A={sort:w,filter:_}},EYtC:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("/MKj"),c=a("vOnD"),o=a("nShV"),i=a("feIE"),u=a("ZeZO"),s=a("t7jn"),d=a("coMr"),b=a("Sza6"),p=a("IZrO");const f=Object(c.d)(o.b).withConfig({displayName:"SearchBar__Wrap",componentId:"sc-1ruwjhl-0"})(["width:100%;"]),E=Object(c.d)(s.a).withConfig({displayName:"SearchBar__WrapSearchField",componentId:"sc-1ruwjhl-1"})(["flex-grow:100;"]),y=Object(c.d)(u.a).withConfig({displayName:"SearchBar__WrapButton",componentId:"sc-1ruwjhl-2"})(["background:var(--default-color-accent-dim);border:none;&:hover{svg{path,circle{stroke:white;}}}",""],(({visibleFilter:e})=>e&&Object(c.c)(["background:var(--default-color-accent);"])));t.a=({appearance:e,buttonCreateText:t,withoutFilters:a,onCreate:r})=>{const[c]=Object(p.a)(),{search:o,visibleFilters:u}=Object(l.c)((e=>({search:e.root.search,visibleFilters:e.root.visibleFilters}))),s=Object(l.b)();return n.a.createElement(f,null,n.a.createElement(E,{placeholder:"\u041f\u043e\u0438\u0441\u043a",appearance:e,defaultValue:o,onSubmit:c}),!a&&n.a.createElement(y,{type:"button",kind:"icon",onClick:()=>s(Object(b.u)(!u)),visibleFilter:u},n.a.createElement(i.a,{icon:"filter2",stroke:u?"white":"var(--default-color-accent)"})),r&&n.a.createElement(d.a,{type:"button",onClick:r},n.a.createElement("span",null,t),n.a.createElement(i.a,{type:"button",icon:"add",stroke:"white"})))}},Ht1R:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("UwjQ");const c=({style:e,layout:t,article:a,preview:r,checked:c,className:o,appearance:i,withSocials:u,hasOwned:s,onLink:d,onChecked:b,onDelete:p,onEdit:f})=>n.a.createElement(l.a,{style:e,layout:t,article:a,preview:r,checked:c,className:o,appearance:i,withSocials:u,owned:s&&s(a),onLink:d&&(()=>d(a)),onChecked:b,onDelete:p,onEdit:f});c.defaultProps={withSocials:!0},t.a=c},QX5T:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a("q1tI"),n=a.n(r),l=a("/MKj"),c=a("vOnD"),o=a("8CDE"),i=a("p9yE"),u=a("X+Rt"),s=a("RoTl"),d=a("EYtC"),b=a("coMr"),p=a("OqOz"),f=a("/y2W");function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const y="grid",m=Object(c.d)(o.a).withConfig({displayName:"content__Wrap",componentId:"sc-1afm75p-0"})(["margin-top:120px;margin-bottom:80px;"," @media only screen and (max-width:480px){margin-top:0;}"],(({clear:e})=>e&&Object(c.c)(["margin:0;"]))),v=c.d.div.withConfig({displayName:"content__Container",componentId:"sc-1afm75p-1"})(["display:grid;grid-template-columns:1fr min-content;grid-gap:var(--default-gap);margin-bottom:80px;"," @media only screen and (max-width:1196px){grid-template-columns:1fr;}"],(({stretch:e})=>e&&Object(c.c)(["grid-template-columns:1fr;"])));t.b=({limit:e,title:t,aside:a,store:c,handle:o,render:T,getType:C,getQuery:g,dashboard:h,variables:S,filterConfig:O,emptyMessage:I,startOffset:w,onLink:_})=>{const A=Object(l.c)((e=>e.root.search)),L=h?i.a:u.a,[j,R]=Object(r.useState)(!1);return n.a.createElement(L,{title:t,scaffold:null===c||void 0===c?void 0:c.scaffold},n.a.createElement(m,{clear:(null===c||void 0===c?void 0:c.scaffold)||h},!(null!==c&&void 0!==c&&c.scaffold)&&!h&&n.a.createElement(d.a,null),h&&o&&n.a.createElement(b.b,{title:t,icon:o.icon,onCreate:o.onCreate,buttonCreateText:o.buttonCreateText,onChangeVisibleFilter:()=>R(!j),onChangeDisplayMethod:o.onChangeDisplayMethod}),n.a.createElement(s.a,E({},O||{},{isOpen:j})),n.a.createElement(v,{stretch:A&&!a||!a},n.a.createElement(f.a,{limit:e,type:C,query:g,variables:S,startOffset:w,emptyMessage:I,component:e=>(e=>n.a.createElement(p.a,{item:e,component:T(e),onLink:_&&(e=>_(e)),withoutChecked:!0}))(e),initialDisplayMethod:y,onClick:_&&(e=>_(e))}),a)))}},RkzV:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("q1tI"),n=a("/MKj"),l=a("owvJ"),c=a("ApjV"),o=a("u2Cb");const i=({isManage:e}={})=>{const t=Object(c.b)(),a=Object(n.c)((e=>e.user)),i=Object(r.useMemo)((()=>{var e;return a&&"ADMIN"===(null===a||void 0===a||null===(e=a.role)||void 0===e?void 0:e.name)}),[a]),u=Object(r.useCallback)((e=>{var t;return null===a||void 0===a||null===(t=a.articles)||void 0===t?void 0:t.find((t=>t.id===e.id))}),[a]),s=Object(r.useCallback)((e=>{t(l.d,{id:e.id,auth:null===a||void 0===a?void 0:a.email})}),[a,t]);return{user:a,hasOwned:u,onLink:s,onEdit:e&&((e,a)=>t(l.c,{id:e.id,canEditStatus:i,mutation:o.a.UPDATE_ARTICLE,onAfter:a})()),onCreate:e&&(e=>t(l.a,{canEditStatus:i,mutation:o.a.CREATE_ARTICLE,onAfter:e})())}}},hDBf:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return a("yRol")}])},v0uu:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return c}));const r=0,n=4,l=12,c=12},yRol:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("QX5T"),c=a("Ht1R"),o=a("RkzV"),i=a("6bB6"),u=a("v0uu"),s=a("u2Cb");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}t.default=()=>{const e=Object(o.a)();return n.a.createElement(l.b,{title:"\u0421\u0442\u0430\u0442\u044c\u0438",getType:"getArticles",limit:u.a,filterConfig:i.a,emptyMessage:"\u0421\u0442\u0430\u0442\u0435\u0439 \u043d\u0435\u0442",getQuery:s.a.GET_ARTICLES,startOffsett:u.b,variables:{status:"PUBLISHED"},render:t=>n.a.createElement(c.a,d({},e,{article:t,layout:"row"}))})}}},[["hDBf",0,2,6,7,1,3,4,5,8,9]]]);
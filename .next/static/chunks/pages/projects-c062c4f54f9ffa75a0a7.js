_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"6bB6":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"f",(function(){return n})),a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return i}));var r={};a.r(r),a.d(r,"sort",(function(){return d})),a.d(r,"filter",(function(){return b})),a.d(r,"default",(function(){return p}));var n={};a.r(n),a.d(n,"sort",(function(){return f})),a.d(n,"filter",(function(){return y})),a.d(n,"default",(function(){return m}));var l={};a.r(l),a.d(l,"sort",(function(){return E})),a.d(l,"filter",(function(){return v})),a.d(l,"default",(function(){return T}));var c={};a.r(c),a.d(c,"sort",(function(){return g})),a.d(c,"filter",(function(){return C})),a.d(c,"default",(function(){return h}));var o={};a.r(o),a.d(o,"sort",(function(){return O})),a.d(o,"filter",(function(){return S})),a.d(o,"default",(function(){return I}));var i={};a.r(i),a.d(i,"sort",(function(){return _})),a.d(i,"filter",(function(){return j})),a.d(i,"default",(function(){return L}));var u=a("NWnW"),s=a("u2Cb");const d=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}],b=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438",name:"permissions",type:"MULTISELECT",selectLabelDecorator:u.g,query:s.a.GET_PERMISSIONS,queryType:"getPermissions"}];var p={sort:d,filter:b};const f=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"account",label:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"},{value:"company",label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"}],y=[{label:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442",name:"account",type:"SELECT",selectRestrictions:["ADMIN"],selectLabelDecorator:u.h,query:s.a.GET_ACCOUNT_TYPES,queryType:"getAccountTypes"},{label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",name:"company",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{account:["ENTITY"],role:"USER"}}];var m={sort:f,filter:y};const E=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"category",label:"\u0420\u0430\u0437\u0434\u0435\u043b"},{value:"author",label:"\u0410\u0432\u0442\u043e\u0440"},{value:"counsellor",label:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442"},{value:"status",label:"\u0421\u0442\u0430\u0442\u0443\u0441"}],v=[{label:"\u0414\u0430\u0442\u0430 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f",name:"createdAt",type:"DATEPICKER"},{label:"\u0420\u0430\u0437\u0434\u0435\u043b",name:"category",type:"SELECT",selectValueField:"id",selectLabelField:"name",query:s.a.GET_CATEGORIES,queryType:"getCategories",variables:{type:"TICKET"}},{label:"\u0410\u0432\u0442\u043e\u0440",name:"author",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{account:["INDIVIDUAL","ENTITY","OFICIAL"],role:"USER"}},{label:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442",name:"counsellor",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{role:"MODERATOR"}},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",name:"status",type:"SELECT",selectLabelDecorator:u.j,query:s.a.GET_STATUS_TICKET_TYPES,queryType:"getStatusTicketTypes"}];var T={sort:E,filter:v};const g=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"category",label:"\u0420\u0430\u0437\u0434\u0435\u043b"}],C=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u0420\u0430\u0437\u0434\u0435\u043b",name:"category",type:"SELECT",selectValueField:"id",selectLabelField:"name",query:s.a.GET_CATEGORIES,queryType:"getCategories",variables:{type:"DIVISION"}}];var h={sort:g,filter:C};const O=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"description",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},{value:"category",label:"\u0420\u0430\u0437\u0434\u0435\u043b"},{value:"company",label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"}],S=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u0420\u0430\u0437\u0434\u0435\u043b",name:"category",type:"SELECT",selectValueField:"id",selectLabelField:"name",query:s.a.GET_CATEGORIES,queryType:"getCategories",variables:{type:"DIVISION"}},{label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",name:"company",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{account:["ENTITY"],role:"USER"}}];var I={sort:O,filter:S};const _=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"description",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},{value:"type",label:"\u0422\u0438\u043f"}],j=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u0422\u0438\u043f",name:"type",type:"SELECT",selectLabelDecorator:u.f,query:s.a.GET_CATEGORY_TYPES,queryType:"getCategoryTypes"}];var L={sort:_,filter:j}},D85t:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return a("RHEb")}])},EYtC:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("/MKj"),c=a("vOnD"),o=a("nShV"),i=a("feIE"),u=a("ZeZO"),s=a("t7jn"),d=a("coMr"),b=a("Sza6"),p=a("IZrO");const f=Object(c.d)(o.b).withConfig({displayName:"SearchBar__Wrap",componentId:"sc-1ruwjhl-0"})(["width:100%;"]),y=Object(c.d)(s.a).withConfig({displayName:"SearchBar__WrapSearchField",componentId:"sc-1ruwjhl-1"})(["flex-grow:100;"]),m=Object(c.d)(u.a).withConfig({displayName:"SearchBar__WrapButton",componentId:"sc-1ruwjhl-2"})(["background:var(--default-color-accent-dim);border:none;&:hover{svg{path,circle{stroke:white;}}}",""],(({visibleFilter:e})=>e&&Object(c.c)(["background:var(--default-color-accent);"])));t.a=({appearance:e,buttonCreateText:t,withoutFilters:a,onCreate:r})=>{const[c]=Object(p.a)(),{search:o,visibleFilters:u}=Object(l.c)((e=>({search:e.root.search,visibleFilters:e.root.visibleFilters}))),s=Object(l.b)();return n.a.createElement(f,null,n.a.createElement(y,{placeholder:"\u041f\u043e\u0438\u0441\u043a",appearance:e,defaultValue:o,onSubmit:c}),!a&&n.a.createElement(m,{type:"button",kind:"icon",onClick:()=>s(Object(b.v)(!u)),visibleFilter:u},n.a.createElement(i.a,{icon:"filter2",stroke:u?"white":"var(--default-color-accent)"})),r&&n.a.createElement(d.a,{type:"button",onClick:r},n.a.createElement("span",null,t),n.a.createElement(i.a,{type:"button",icon:"add",stroke:"white"})))}},QX5T:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("q1tI"),n=a.n(r),l=a("/MKj"),c=a("vOnD"),o=a("8CDE"),i=a("p9yE"),u=a("X+Rt"),s=a("RoTl"),d=a("EYtC"),b=a("coMr"),p=a("OqOz"),f=a("/y2W");function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const m="grid",E=Object(c.d)(o.a).withConfig({displayName:"content__Wrap",componentId:"sc-1afm75p-0"})(["margin-top:120px;margin-bottom:80px;"," @media only screen and (max-width:480px){margin-top:0;}"],(({clear:e})=>e&&Object(c.c)(["margin:0;"]))),v=c.d.div.withConfig({displayName:"content__Container",componentId:"sc-1afm75p-1"})(["display:grid;grid-template-columns:1fr min-content;grid-gap:var(--default-gap);margin-bottom:80px;"," @media only screen and (max-width:1196px){grid-template-columns:1fr;}"],(({stretch:e})=>e&&Object(c.c)(["grid-template-columns:1fr;"]))),T=Object(r.memo)((({filterConfig:e})=>{const t=Object(l.c)((e=>e.root.visibleFilters));return n.a.createElement(s.a,y({},e||{},{isOpen:t}))})),g=({limit:e,aside:t,render:a,getType:r,getQuery:c,variables:o,emptyMessage:i,startOffset:u,onLink:s})=>{const d=Object(l.c)((e=>e.root.search));return n.a.createElement(v,{stretch:d&&!t||!t},n.a.createElement(f.a,{limit:e,type:r,query:c,variables:o,startOffset:u,emptyMessage:i,component:e=>n.a.createElement(p.a,{item:e,component:a(e),onLink:s&&(e=>s(e)),withoutChecked:!0}),initialDisplayMethod:m,onClick:s&&(e=>s(e))}),t)},C=Object(r.memo)((({limit:e,title:t,aside:a,store:r,handle:l,render:c,getType:o,getQuery:s,dashboard:p,variables:f,filterConfig:y,emptyMessage:m,startOffset:v,onLink:C})=>{const h=p?i.a:u.a;return n.a.createElement(h,{title:t,scaffold:null===r||void 0===r?void 0:r.scaffold},n.a.createElement(E,{clear:(null===r||void 0===r?void 0:r.scaffold)||p},!(null!==r&&void 0!==r&&r.scaffold)&&!p&&n.a.createElement(d.a,null),p&&l&&n.a.createElement(b.b,{title:t,icon:l.icon,onCreate:l.onCreate,buttonCreateText:l.buttonCreateText,onChangeDisplayMethod:l.onChangeDisplayMethod}),n.a.createElement(T,{filterConfig:y}),n.a.createElement(g,{limit:e,aside:a,render:c,getType:o,getQuery:s,variables:f,emptyMessage:m,startOffset:v,onLink:C})))}));t.b=C},RHEb:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("20a2"),c=a("QX5T"),o=a("WpSk"),i=a("QfFT"),u=a("6bB6"),s=a("v0uu"),d=a("u2Cb");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}t.default=()=>{var e;const t=Object(l.useRouter)(),a=Object(i.a)();return n.a.createElement(c.b,{title:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",getType:"getProjects",limit:s.a,filterConfig:u.c,emptyMessage:"\u041f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u043d\u0435\u0442",getQuery:d.a.GET_PROJECTS,startOffsett:s.b,variables:{category:null===(e=t.query)||void 0===e?void 0:e.c,status:"PUBLISHED"},render:e=>n.a.createElement(o.a,b({},a,{project:e}))})}},v0uu:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return c}));const r=0,n=4,l=12,c=12}},[["D85t",0,2,6,7,1,3,4,5,8,9]]]);
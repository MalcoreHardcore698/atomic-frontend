_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"17Xh":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),n=a("/MKj"),u=a("+nv6"),i=a("EJJs");var o=[{header:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",content:e=>r.a.createElement(i.a,{text:e.name||"-"}),width:"15%"},{header:"\u041f\u0440\u0438\u0432\u0435\u043b\u0435\u0433\u0438\u0438",content:e=>{var t;return r.a.createElement(i.a,{text:(null===(t=e.permissions)||void 0===t?void 0:t.length)||"-"})},width:"75%"},{header:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",content:e=>r.a.createElement(i.a,{text:r.a.createElement(u.a,{text:e.createdAt,options:{year:"numeric",month:"2-digit",day:"2-digit"}})||"-"}),width:"10%"}],c=a("4NP5"),s=a("OqOz"),E=a("6bB6"),d=a("DF00"),y=a("j8/+"),T=a("ApjV"),b=a("u2Cb");t.default=()=>{const e=Object(T.b)(),t=Object(n.b)();return Object(l.useEffect)((()=>{t(Object(y.a)(null))}),[]),r.a.createElement(s.b,{title:"\u0420\u043e\u043b\u0438",limit:12,icon:"lock",template:o,startOffset:0,emptyMessage:"\u0420\u043e\u043b\u0435\u0439 \u043d\u0435\u0442",filterConfig:E.d,buttonCreateText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u043e\u043b\u044c",entityType:"role",getType:"getRoles",getQuery:b.a.GET_ROLES,deleteQuery:b.a.DELETE_ROLE,deleteEntityMultiText:"\u0440\u043e\u043b\u0438",deleteEntitySingleText:"\u0440\u043e\u043b\u044c",onLink:t=>e(d.d,{id:t.id,role:t})(),onEdit:(t,a)=>e(d.c,{id:t.id,role:t,mutation:b.a.UPDATE_ROLE,onAfter:a})(),onCreate:t=>e(d.a,{mutation:b.a.CREATE_ROLE,onAfter:t})(),render:e=>r.a.createElement(c.a,{role:e})})}},"6bB6":function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"f",(function(){return r})),a.d(t,"e",(function(){return n})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o}));var l={};a.r(l),a.d(l,"sort",(function(){return E})),a.d(l,"filter",(function(){return d})),a.d(l,"default",(function(){return y}));var r={};a.r(r),a.d(r,"sort",(function(){return T})),a.d(r,"filter",(function(){return b})),a.d(r,"default",(function(){return f}));var n={};a.r(n),a.d(n,"sort",(function(){return p})),a.d(n,"filter",(function(){return m})),a.d(n,"default",(function(){return v}));var u={};a.r(u),a.d(u,"sort",(function(){return S})),a.d(u,"filter",(function(){return C})),a.d(u,"default",(function(){return A}));var i={};a.r(i),a.d(i,"sort",(function(){return g})),a.d(i,"filter",(function(){return L})),a.d(i,"default",(function(){return _}));var o={};a.r(o),a.d(o,"sort",(function(){return I})),a.d(o,"filter",(function(){return R})),a.d(o,"default",(function(){return q}));var c=a("NWnW"),s=a("u2Cb");const E=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}],d=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438",name:"permissions",type:"MULTISELECT",selectLabelDecorator:c.f,query:s.a.GET_PERMISSIONS,queryType:"getPermissions"}];var y={sort:E,filter:d};const T=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"account",label:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442"},{value:"company",label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"}],b=[{label:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442",name:"account",type:"SELECT",selectRestrictions:["ADMIN"],selectLabelDecorator:c.g,query:s.a.GET_ACCOUNT_TYPES,queryType:"getAccountTypes"},{label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",name:"company",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{account:["ENTITY"],role:"USER"}}];var f={sort:T,filter:b};const p=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"category",label:"\u0420\u0430\u0437\u0434\u0435\u043b"},{value:"author",label:"\u0410\u0432\u0442\u043e\u0440"},{value:"counsellor",label:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442"},{value:"status",label:"\u0421\u0442\u0430\u0442\u0443\u0441"}],m=[{label:"\u0414\u0430\u0442\u0430 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f",name:"createdAt",type:"DATEPICKER"},{label:"\u0420\u0430\u0437\u0434\u0435\u043b",name:"category",type:"SELECT",selectValueField:"id",selectLabelField:"name",query:s.a.GET_CATEGORIES,queryType:"getCategories",variables:{type:"TICKET"}},{label:"\u0410\u0432\u0442\u043e\u0440",name:"author",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{account:["INDIVIDUAL","ENTITY","OFICIAL"],role:"USER"}},{label:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u043d\u0442",name:"counsellor",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{role:"MODERATOR"}},{label:"\u0421\u0442\u0430\u0442\u0443\u0441",name:"status",type:"SELECT",selectLabelDecorator:c.i,query:s.a.GET_STATUS_TICKET_TYPES,queryType:"getStatusTicketTypes"}];var v={sort:p,filter:m};const S=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"category",label:"\u0420\u0430\u0437\u0434\u0435\u043b"}],C=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u0420\u0430\u0437\u0434\u0435\u043b",name:"category",type:"SELECT",selectValueField:"id",selectLabelField:"name",query:s.a.GET_CATEGORIES,queryType:"getCategories",variables:{type:"DIVISION"}}];var A={sort:S,filter:C};const g=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"description",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},{value:"category",label:"\u0420\u0430\u0437\u0434\u0435\u043b"},{value:"company",label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f"}],L=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u0420\u0430\u0437\u0434\u0435\u043b",name:"category",type:"SELECT",selectValueField:"id",selectLabelField:"name",query:s.a.GET_CATEGORIES,queryType:"getCategories",variables:{type:"DIVISION"}},{label:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",name:"company",type:"SELECT",selectValueField:"email",selectLabelField:"name",query:s.a.GET_USERS,queryType:"getUsers",variables:{account:["ENTITY"],role:"USER"}}];var _={sort:g,filter:L};const I=[{value:"createdAt",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"},{value:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},{value:"description",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},{value:"type",label:"\u0422\u0438\u043f"}],R=[{label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",name:"createdAt",type:"DATEPICKER"},{label:"\u0422\u0438\u043f",name:"type",type:"SELECT",selectLabelDecorator:c.e,query:s.a.GET_CATEGORY_TYPES,queryType:"getCategoryTypes"}];var q={sort:I,filter:R}},"98EU":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/roles",function(){return a("17Xh")}])}},[["98EU",0,2,6,7,1,3,4,5,8]]]);
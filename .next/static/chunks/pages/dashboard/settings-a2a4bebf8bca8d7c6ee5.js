_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"+fJr":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),c=t.n(n),r=t("DTT8"),i=t("p9yE");const o="\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438";a.default=()=>c.a.createElement(i.a,{title:o},c.a.createElement(r.b,{icon:"setting",text:o}))},EYtC:function(e,a,t){"use strict";var n=t("q1tI"),c=t.n(n),r=t("vOnD"),i=t("nShV"),o=t("ZeZO"),l=t("feIE"),d=t("t7jn");const s=Object(r.c)(i.b).withConfig({displayName:"SearchBar__Wrap",componentId:"sc-1ruwjhl-0"})(["width:100%;"]),p=Object(r.c)(d.a).withConfig({displayName:"SearchBar__WrapSearchField",componentId:"sc-1ruwjhl-1"})(["flex-grow:100;"]),m=Object(r.c)(o.a).withConfig({displayName:"SearchBar__WrapButton",componentId:"sc-1ruwjhl-2"})(["background:var(--default-color-accent-dim);border:none;&:hover{svg{path,circle{stroke:white;}}}",""],(({visibleFilter:e})=>e&&Object(r.b)(["background:var(--default-color-accent);"])));a.a=({appearance:e,onChangeFilter:a,onSubmit:t})=>{const[r,i]=Object(n.useState)(!1);return c.a.createElement(s,null,c.a.createElement(p,{appearance:e,placeholder:"\u041f\u043e\u0438\u0441\u043a",onSubmit:t}),c.a.createElement(m,{type:"button",kind:"icon",onClick:()=>{i(!r),a&&a(!r)},visibleFilter:r},c.a.createElement(l.a,{icon:"filter2",stroke:r?"white":"var(--default-color-accent)"})))}},NWnW:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return c}));const n=e=>{switch(e){case"ADMIN":return"\u0410\u0434\u043c\u0438\u043d";case"USER":return"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c";case"MODERATOR":return"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440";case"OFICIAL":return"\u041e\u0444. \u043b\u0438\u0446\u043e";case"ENTITY":return"\u042e\u0440. \u043b\u0438\u0446\u043e";case"INDIVIDUAL":return"\u0424\u0438\u0437. \u043b\u0438\u0446\u043e";default:return e}},c=e=>{switch(e){case"TICKET":return"\u0422\u0435\u043c\u0430 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f";case"DIVISION":return"\u0420\u0430\u0437\u0434\u0435\u043b \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432/\u0441\u0442\u0430\u0442\u0435\u0439";default:return e}}},RaRx:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/settings",function(){return t("+fJr")}])},p9yE:function(e,a,t){"use strict";var n=t("q1tI"),c=t.n(n),r=t("g4pe"),i=t.n(r),o=t("YFqc"),l=t.n(o),d=t("20a2"),s=t("vOnD"),p=t("VX74"),m=t("/MKj"),h=t("nShV"),u=t("N0uN"),g=t("auMy"),f=t("8CDE"),E=t("ZeZO"),b=t("V0nP"),v=t("feIE"),x=t("VWQm"),w=t("ApjV"),_=t("wOhW"),y=t("586Q"),I=t("ThpJ"),j=t("RKiZ"),O=t("7sPp"),C=t("QUga"),k=t("hfch"),N=t("NWnW");const S="rgba(255, 255, 255, 25%)",R=Object(s.c)(h.b).withConfig({displayName:"SideBar__Wrap",componentId:"sc-158a552-0"})(["--padding-offset:15px;display:flex;flex-direction:column;width:240px;height:100vh;background:var(--admin-color-accent);color:white;overflow:hidden;overflow-y:auto;@media only screen and (max-width:996px){width:62px;}"]),W=Object(s.c)(h.b).withConfig({displayName:"SideBar__Profile",componentId:"sc-158a552-1"})(["padding:var(--default-gap) var(--default-gap) 5px var(--default-gap);@media only screen and (max-width:996px){padding:var(--default-gap) var(--default-gap) 0 var(--default-gap);","{max-width:var(--input-height-s);max-height:var(--input-height-s);min-width:var(--input-height-s);min-height:var(--input-height-s);width:var(--input-height-s);height:var(--input-height-s);}}"],I.a),T=Object(s.c)(f.a).withConfig({displayName:"SideBar__Info",componentId:"sc-158a552-2"})(["grid-gap:0;"]),B=Object(s.c)(O.a).withConfig({displayName:"SideBar__Name",componentId:"sc-158a552-3"})(["font-size:var(--font-h4);font-weight:var(--font-weight-medium);"]),V=Object(s.c)(C.b).withConfig({displayName:"SideBar__Role",componentId:"sc-158a552-4"})(["color:",";"],S),A=s.c.div.withConfig({displayName:"SideBar__Strip",componentId:"sc-158a552-5"})(["display:flex;justify-content:space-between;align-items:center;padding:5px var(--default-gap);a{position:relative;padding:0 15px;transition:background 150ms ease;&.active,&:hover{background:#10151c;}}@media only screen and (max-width:480px){padding:5px 0;}"]),D=Object(s.c)(h.b).withConfig({displayName:"SideBar__Label",componentId:"sc-158a552-6"})(["align-items:center;"]),L=Object(s.c)(v.a).withConfig({displayName:"SideBar__LabelIcon",componentId:"sc-158a552-7"})(["width:var(--input-height-s);height:var(--input-height-s);background:var(--admin-color-accent-dim);border-radius:var(--surface-border-radius);",""],(({active:e})=>e&&Object(s.b)(["background:white;"]))),z=Object(s.c)(C.b).withConfig({displayName:"SideBar__LabelText",componentId:"sc-158a552-8"})(["color:",";font-weight:var(--font-weight-medium);",""],S,(({active:e})=>e&&Object(s.b)(["color:white;"]))),U=({active:e,icon:a,text:t,count:n})=>c.a.createElement(A,null,c.a.createElement(D,null,c.a.createElement(L,{icon:a,size:"xs",stroke:e?"var(--default-color-accent)":S,active:e}),c.a.createElement(z,{active:e},t)),n&&c.a.createElement(k.a,{count:n,size:"xs",style:e?{}:{background:S,borderColor:"transparent",color:"var(--admin-color-accent)"}})),F=({user:e,link:a,links:t,...n})=>c.a.createElement(R,n,c.a.createElement(W,null,c.a.createElement(I.b,{src:e.avatar,alt:"Avatar",size:"m"}),c.a.createElement(T,null,c.a.createElement(B,null,e.name),c.a.createElement(V,null,Object(N.b)(e.role)))),c.a.createElement(j.a,{style:{background:"var(--admin-color-accent-dim)",margin:"10px 0"}}),t&&t.length>0&&t.map(((e,t)=>c.a.createElement(c.a.Fragment,{key:t},e.divide&&c.a.createElement(j.a,{style:{background:"var(--admin-color-accent-dim)",margin:"10px 0"}}),c.a.createElement(a,{href:e.path},e.component)))));F.defaultProps={link:({children:e,...a})=>c.a.createElement("a",a,e)};var P=F,J=t("EYtC"),M=t("+EEm"),Y=t("8ihE");var Z=e=>{const a=a=>e.find((e=>e===a)),t=[{path:"/",component:c.a.createElement(U,{icon:"activity",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}],n=a("VIEW_USER"),r=a("VIEW_CATEGORY"),i=a("VIEW_ARTICLE"),o=a("VIEW_PROJECT"),l=a("VIEW_TICKET"),d=a("VIEW_ROLE"),s=a("VIEW_USER");return n&&t.push({path:"/users",component:c.a.createElement(U,{icon:"user2",text:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),r&&t.push({path:"/categories",component:c.a.createElement(U,{icon:"folder",text:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"})}),i&&t.push({path:"/articles",component:c.a.createElement(U,{icon:"document",text:"\u0421\u0442\u0430\u0442\u044c\u0438"})}),o&&t.push({path:"/projects",component:c.a.createElement(U,{icon:"work",text:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"})}),l&&t.push({path:"/tickets",component:c.a.createElement(U,{icon:"ticket",text:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f"})}),d&&t.push({divide:!0,path:"/roles",component:c.a.createElement(U,{icon:"lock",text:"\u0420\u043e\u043b\u0438"})}),s&&t.push({path:"/settings",component:c.a.createElement(U,{icon:"setting",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})}),t},q=t("u2Cb"),K=t("rOcY");const Q=s.c.main.withConfig({displayName:"dashboard__Main",componentId:"sc-9r28sr-0"})(["display:flex;grid-gap:var(--default-gap);width:100%;"]),X=s.c.header.withConfig({displayName:"dashboard__Header",componentId:"sc-9r28sr-1"})(["position:fixed;top:0;left:0;z-index:var(--z-15);display:flex;grid-gap:var(--default-gap);background:var(--surface-background);border:var(--surface-border);box-shadow:var(--surface-shadow);padding:var(--default-gap);width:100%;flex-grow:100;"]),G=Object(s.c)(P).withConfig({displayName:"dashboard__SideBar",componentId:"sc-9r28sr-2"})(["position:fixed;top:70px;left:0;height:calc(100vh - 70px);z-index:var(--z-12);@media only screen and (max-width:480px){display:none;}"]),H=Object(s.c)(E.a).withConfig({displayName:"dashboard__MenuButton",componentId:"sc-9r28sr-3"})(["display:none;@media only screen and (max-width:768px){display:flex;justify-content:center;align-items:center;}"]),$=Object(s.c)(h.b).withConfig({displayName:"dashboard__LogoZone",componentId:"sc-9r28sr-4"})(["justify-content:space-between;@media only screen and (max-width:996px){width:auto;}"]),ee=s.c.div.withConfig({displayName:"dashboard__Logotype",componentId:"sc-9r28sr-5"})(["display:flex;justify-content:flex-start;align-items:center;img{height:30px;object-fit:contain;}@media only screen and (max-width:996px){min-width:auto;}@media only screen and (max-width:480px){display:none;}"]),ae=Object(s.c)(u.a).withConfig({displayName:"dashboard__Content",componentId:"sc-9r28sr-6"})(["padding:70px 15px 15px 255px;flex-grow:1;@media only screen and (max-width:996px){padding:70px 15px 15px 80px;}@media only screen and (max-width:480px){padding:70px 15px 15px 15px;}"]);a.a=({children:e,title:a="\u041f\u0430\u043d\u0435\u043b\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"})=>{var t;const r=Object(w.b)(),o=Object(d.useRouter)(),s=Object(m.c)((e=>e.user)),[h,{data:u,loading:E}]=Object(p.useLazyQuery)(q.a.GET_USER),I=Object(m.b)();return Object(n.useEffect)((()=>{localStorage.getItem(K.a.get("secret"))?h():o.push("/")}),[]),Object(n.useEffect)((()=>{if(u&&u.getUser){var e;(null===(e=u.getUser.role)||void 0===e?void 0:e.permissions.find((e=>"ACCESS_DASHBOARD"===e)))?I(Object(Y.d)(u.getUser)):o.push("/")}}),[u,I]),E||!s.authenticated?c.a.createElement(y.a,null,c.a.createElement(g.a,null)):c.a.createElement(_.a,null,c.a.createElement(i.a,null,c.a.createElement("meta",{name:"keywords",content:"next,javascript,nextjs,react"}),c.a.createElement("meta",{name:"description",content:"primar project description"}),c.a.createElement("title",null,a)),c.a.createElement(X,null,c.a.createElement(H,{appearance:"clear",kind:"icon",onClick:r(M.e,{links:Z((null===s||void 0===s?void 0:s.role.permissions)||[]).map(((e,a)=>({id:a,text:e.component,onClick:()=>o.push(e.path)})))})},c.a.createElement(v.a,{icon:"menu"})),c.a.createElement($,null,c.a.createElement(ee,null,c.a.createElement(l.a,{href:"/"},c.a.createElement("a",null,c.a.createElement(x.b,{text:"\u0410\u0442\u043e\u043c\u0438\u043a \u2013 \u043f\u043e\u0440\u0442\u0430\u043b \u0434\u043b\u044f \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0441\u0444\u0435\u0440\u044b \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f",offset:{bottom:5},place:"bottom",maxWidth:256,multiline:!0},c.a.createElement(b.a,{src:"/images/logo.png",alt:"Logotype"})))))),c.a.createElement(J.a,{appearance:"ghost"})),c.a.createElement(Q,null,c.a.createElement(G,{user:{name:s.name,role:s.role.name,avatar:(null===s||void 0===s||null===(t=s.avatar)||void 0===t?void 0:t.path)||"/images/avatar-default.png"},link:l.a,links:Z((null===s||void 0===s?void 0:s.role.permissions)||[]).map(((e,a)=>{const t=`/dashboard${e.path.length>1?e.path:""}`;return{...e,path:t,component:c.a.createElement("a",{key:a,className:o.pathname===t?"active":""},c.a.cloneElement(e.component,{active:o.pathname===t}))}}))}),c.a.createElement(ae,null,c.a.createElement(f.a,null,e))))}}},[["RaRx",0,2,1,3,4,5]]]);
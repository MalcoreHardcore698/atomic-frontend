(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"07fs":function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),c=t("vOnD");const r=c.c.div.withConfig({displayName:"FadeLoad__Wrap",componentId:"sc-1rdnrub-0"})(["opacity:0;transition:opacity 100ms ease;",""],(({isVisible:e})=>e&&Object(c.b)(["opacity:1;"])));a.a=({children:e})=>{const[a,t]=Object(n.useState)(!0),c=Object(n.useRef)();return Object(n.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>t(e.isIntersecting)))}));return e.observe(c.current),()=>e.unobserve(c.current)}),[]),i.a.createElement(r,{isVisible:a,ref:c},e)}},EYtC:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),c=t("vOnD"),r=t("nShV"),o=t("ZeZO"),l=t("feIE"),d=t("t7jn");const s=Object(c.c)(r.b).withConfig({displayName:"SearchBar__Wrap",componentId:"sc-1ruwjhl-0"})(["width:100%;"]),p=Object(c.c)(d.a).withConfig({displayName:"SearchBar__WrapSearchField",componentId:"sc-1ruwjhl-1"})(["flex-grow:100;"]),m=Object(c.c)(o.a).withConfig({displayName:"SearchBar__WrapButton",componentId:"sc-1ruwjhl-2"})(["background:var(--default-color-accent-dim);border:none;&:hover{svg{path,circle{stroke:white;}}}",""],(({visibleFilter:e})=>e&&Object(c.b)(["background:var(--default-color-accent);"])));a.a=({appearance:e,onChangeFilter:a,onSubmit:t})=>{const[c,r]=Object(n.useState)(!1);return i.a.createElement(s,null,i.a.createElement(p,{appearance:e,placeholder:"\u041f\u043e\u0438\u0441\u043a",onSubmit:t}),i.a.createElement(m,{type:"button",kind:"icon",onClick:()=>{r(!c),a&&a(!c)},visibleFilter:c},i.a.createElement(l.a,{icon:"filter2",stroke:c?"white":"var(--default-color-accent)"})))}},RoTl:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),c=t("vOnD"),r=t("8CDE"),o=t("nShV"),l=t("OXt0"),d=t("RKiZ"),s=t("hYBG");const p=Object(c.c)(r.a).withConfig({displayName:"FilterBar__Wrap",componentId:"sc-1lvfs1u-0"})(["display:flex;width:100%;&.fade-enter{opacity:0;}&.fade-enter-active{opacity:1;transition:opacity 100ms,blur 100ms;}&.fade-exit{opacity:1;}&.fade-exit-active{opacity:0;transition:opacity 100ms,blur 100ms;}"]),m=Object(c.c)(o.b).withConfig({displayName:"FilterBar__List",componentId:"sc-1lvfs1u-1"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(256px,1fr));@media only screen and (max-width:480px){grid-gap:var(--default-gap);}"]),h=({isOpen:e=!0,filters:a,options:t,duration:n})=>i.a.createElement(s.a,{in:e,animation:"fade",timeout:n},i.a.createElement(p,null,i.a.createElement(d.a,{clear:!0}),a&&a.length>0&&i.a.createElement(m,null,a.map((e=>e))),t&&t.length>0&&i.a.createElement(o.b,null,i.a.createElement(l.b,{defaultValue:t[0],options:t,stretch:!0})),i.a.createElement(d.a,{clear:!0})));h.defaultProps={duration:150},a.a=h},VP1n:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),c=t("UUyv");a.a=Object(c.trackWindowScroll)((({children:e})=>i.a.createElement(c.LazyLoadComponent,null,e)))},coMr:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),c=t("vOnD"),r=t("nShV"),o=t("8CDE"),l=t("ZeZO"),d=t("feIE"),s=t("OXt0"),p=t("DTT8"),m=t("79b8"),h=t("RKiZ"),u=t("VWQm");const g=Object(c.c)(o.a).withConfig({displayName:"HandleBar__Wrap",componentId:"phr6ix-0"})([""]),f=Object(c.c)(r.b).withConfig({displayName:"HandleBar__Header",componentId:"phr6ix-1"})(["justify-content:space-between;grid-gap:var(--default-gap);flex-wrap:wrap;"]),b=Object(c.c)(r.b).withConfig({displayName:"HandleBar__ActionGroup",componentId:"phr6ix-2"})(["justify-content:flex-end;@media only screen and (max-width:996px){width:100%;","{width:auto;}}@media only screen and (max-width:480px){flex-wrap:wrap;grid-gap:var(--default-gap);","{flex-direction:row;flex-grow:1;}","{button{width:100%;height:100%;}}}"],s.a,s.a,u.a),E=Object(c.c)(l.a).withConfig({displayName:"HandleBar__CreateButton",componentId:"phr6ix-3"})(["display:flex;justify-content:center;align-items:center;grid-gap:10px;span{white-space:nowrap;}@media only screen and (max-width:996px){width:100%;}"]),x=Object(c.c)(r.b).withConfig({displayName:"HandleBar__Footer",componentId:"phr6ix-4"})(["justify-content:space-between;@media only screen and (max-width:480px){flex-direction:column;align-items:end;grid-gap:var(--default-gap);}"]),v=[{label:i.a.createElement(d.a,{icon:"menu"}),value:"list",tooltip:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u043e\u043c"},{label:i.a.createElement(d.a,{icon:"category"}),value:"grid",tooltip:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0435\u0442\u043a\u043e\u0439"}];a.a=({icon:e,title:a,buttonCreateText:t,onCreate:c,onDeleteChecked:r,onChangeVisibleFilter:o,onChangeDisplayMethod:w})=>{const[y,_]=Object(n.useState)(!1),[j,O]=Object(n.useState)(null);return i.a.createElement(g,null,i.a.createElement(f,null,i.a.createElement(p.b,{icon:e,text:a}),i.a.createElement(b,null,c&&i.a.createElement(E,{type:"button",onClick:c},i.a.createElement("span",null,t),i.a.createElement(d.a,{icon:"add",stroke:"white"})),i.a.createElement(u.b,{text:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432"},i.a.createElement(l.a,{type:"button",kind:"icon",onClick:()=>{_(!y),o&&o()},revert:!y},i.a.createElement(d.a,{icon:"filter2",stroke:y?"white":"var(--default-color-accent)"}))),i.a.createElement(s.b,{defaultValue:j||v[1],options:v,onChange:e=>(e=>{O(e),w&&w(e)})(e)}))),i.a.createElement(h.a,{clear:!0}),i.a.createElement(x,null,i.a.createElement(m.a,{label:"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0441\u0435"}),i.a.createElement(l.a,{style:{color:"var(--default-color-red)"},appearance:"clear",onClick:r},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435")))}},p9yE:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),c=t("g4pe"),r=t.n(c),o=t("YFqc"),l=t.n(o),d=t("20a2"),s=t("vOnD"),p=t("VX74"),m=t("/MKj"),h=t("nShV"),u=t("N0uN"),g=t("auMy"),f=t("8CDE"),b=t("ZeZO"),E=t("V0nP"),x=t("feIE"),v=t("VWQm"),w=t("ApjV"),y=t("wOhW"),_=t("586Q"),j=t("ThpJ"),O=t("RKiZ"),C=t("7sPp"),I=t("QUga"),k=t("hfch"),N=t("NWnW");const S="rgba(255, 255, 255, 25%)",B=Object(s.c)(h.b).withConfig({displayName:"SideBar__Wrap",componentId:"sc-158a552-0"})(["--padding-offset:15px;display:flex;flex-direction:column;width:240px;height:100vh;background:var(--admin-color-accent);color:white;overflow:hidden;overflow-y:auto;@media only screen and (max-width:996px){width:62px;}"]),V=Object(s.c)(h.b).withConfig({displayName:"SideBar__Profile",componentId:"sc-158a552-1"})(["padding:var(--default-gap) var(--default-gap) 5px var(--default-gap);@media only screen and (max-width:996px){padding:var(--default-gap) var(--default-gap) 0 var(--default-gap);","{max-width:var(--input-height-s);max-height:var(--input-height-s);min-width:var(--input-height-s);min-height:var(--input-height-s);width:var(--input-height-s);height:var(--input-height-s);}}"],j.a),W=Object(s.c)(f.a).withConfig({displayName:"SideBar__Info",componentId:"sc-158a552-2"})(["grid-gap:0;"]),R=Object(s.c)(C.a).withConfig({displayName:"SideBar__Name",componentId:"sc-158a552-3"})(["font-size:var(--font-h4);font-weight:var(--font-weight-medium);"]),D=Object(s.c)(I.b).withConfig({displayName:"SideBar__Role",componentId:"sc-158a552-4"})(["color:",";"],S),L=s.c.div.withConfig({displayName:"SideBar__Strip",componentId:"sc-158a552-5"})(["display:flex;justify-content:space-between;align-items:center;padding:5px var(--default-gap);a{position:relative;padding:0 15px;transition:background 150ms ease;&.active,&:hover{background:#10151c;}}@media only screen and (max-width:480px){padding:5px 0;}"]),T=Object(s.c)(h.b).withConfig({displayName:"SideBar__Label",componentId:"sc-158a552-6"})(["align-items:center;"]),F=Object(s.c)(x.a).withConfig({displayName:"SideBar__LabelIcon",componentId:"sc-158a552-7"})(["width:var(--input-height-s);height:var(--input-height-s);background:var(--admin-color-accent-dim);border-radius:var(--surface-border-radius);",""],(({active:e})=>e&&Object(s.b)(["background:white;"]))),z=Object(s.c)(I.b).withConfig({displayName:"SideBar__LabelText",componentId:"sc-158a552-8"})(["color:",";font-weight:var(--font-weight-medium);",""],S,(({active:e})=>e&&Object(s.b)(["color:white;"]))),Z=({active:e,icon:a,text:t,count:n})=>i.a.createElement(L,null,i.a.createElement(T,null,i.a.createElement(F,{icon:a,size:"xs",stroke:e?"var(--default-color-accent)":S,active:e}),i.a.createElement(z,{active:e},t)),n&&i.a.createElement(k.a,{count:n,size:"xs",style:e?{}:{background:S,borderColor:"transparent",color:"var(--admin-color-accent)"}})),U=({user:e,link:a,links:t,...n})=>i.a.createElement(B,n,i.a.createElement(V,null,i.a.createElement(j.b,{src:e.avatar,alt:"Avatar",size:"m"}),i.a.createElement(W,null,i.a.createElement(R,null,e.name),i.a.createElement(D,null,Object(N.e)(e.role)))),i.a.createElement(O.a,{style:{background:"var(--admin-color-accent-dim)",margin:"10px 0"}}),t&&t.length>0&&t.map(((e,t)=>i.a.createElement(i.a.Fragment,{key:t},e.divide&&i.a.createElement(O.a,{style:{background:"var(--admin-color-accent-dim)",margin:"10px 0"}}),i.a.createElement(a,{href:e.path},e.component)))));U.defaultProps={link:({children:e,...a})=>i.a.createElement("a",a,e)};var A=U,H=t("EYtC"),q=t("+EEm"),P=t("8ihE");var M=e=>{const a=a=>e.find((e=>e===a)),t=[{path:"/",component:i.a.createElement(Z,{icon:"activity",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}],n=a("VIEW_USER"),c=a("VIEW_CATEGORY"),r=a("VIEW_ARTICLE"),o=a("VIEW_PROJECT"),l=a("VIEW_TICKET"),d=a("VIEW_ROLE"),s=a("VIEW_USER");return n&&t.push({path:"/users",component:i.a.createElement(Z,{icon:"user2",text:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),c&&t.push({path:"/categories",component:i.a.createElement(Z,{icon:"folder",text:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"})}),r&&t.push({path:"/articles",component:i.a.createElement(Z,{icon:"document",text:"\u0421\u0442\u0430\u0442\u044c\u0438"})}),o&&t.push({path:"/projects",component:i.a.createElement(Z,{icon:"work",text:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"})}),l&&t.push({path:"/tickets",component:i.a.createElement(Z,{icon:"ticket",text:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f"})}),d&&t.push({divide:!0,path:"/roles",component:i.a.createElement(Z,{icon:"lock",text:"\u0420\u043e\u043b\u0438"})}),s&&t.push({path:"/settings",component:i.a.createElement(Z,{icon:"setting",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})}),t},Y=t("u2Cb"),K=t("rOcY");const Q=s.c.main.withConfig({displayName:"dashboard__Main",componentId:"sc-9r28sr-0"})(["display:flex;grid-gap:var(--default-gap);width:100%;"]),G=s.c.header.withConfig({displayName:"dashboard__Header",componentId:"sc-9r28sr-1"})(["position:fixed;top:0;left:0;z-index:var(--z-15);display:flex;grid-gap:var(--default-gap);background:var(--surface-background);border:var(--surface-border);box-shadow:var(--surface-shadow);padding:var(--default-gap);width:100%;flex-grow:100;"]),J=Object(s.c)(A).withConfig({displayName:"dashboard__SideBar",componentId:"sc-9r28sr-2"})(["position:fixed;top:70px;left:0;height:calc(100vh - 70px);z-index:var(--z-12);@media only screen and (max-width:480px){display:none;}"]),X=Object(s.c)(b.a).withConfig({displayName:"dashboard__MenuButton",componentId:"sc-9r28sr-3"})(["display:none;@media only screen and (max-width:768px){display:flex;justify-content:center;align-items:center;}"]),$=Object(s.c)(h.b).withConfig({displayName:"dashboard__LogoZone",componentId:"sc-9r28sr-4"})(["justify-content:space-between;@media only screen and (max-width:996px){width:auto;}"]),ee=s.c.div.withConfig({displayName:"dashboard__Logotype",componentId:"sc-9r28sr-5"})(["display:flex;justify-content:flex-start;align-items:center;img{height:30px;object-fit:contain;}@media only screen and (max-width:996px){min-width:auto;}@media only screen and (max-width:480px){display:none;}"]),ae=Object(s.c)(u.a).withConfig({displayName:"dashboard__Content",componentId:"sc-9r28sr-6"})(["padding:70px 15px 15px 255px;flex-grow:1;@media only screen and (max-width:996px){padding:70px 15px 15px 80px;}@media only screen and (max-width:480px){padding:70px 15px 15px 15px;}"]);a.a=({children:e,title:a="\u041f\u0430\u043d\u0435\u043b\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"})=>{var t;const c=Object(w.b)(),o=Object(d.useRouter)(),s=Object(m.c)((e=>e.user)),[h,{data:u,loading:b}]=Object(p.useLazyQuery)(Y.a.GET_USER),j=Object(m.b)();return Object(n.useEffect)((()=>{localStorage.getItem(K.a.get("secret"))?h():o.push("/")}),[]),Object(n.useEffect)((()=>{if(u&&u.getUser){var e;(null===(e=u.getUser.role)||void 0===e?void 0:e.permissions.find((e=>"ACCESS_DASHBOARD"===e)))?j(Object(P.d)(u.getUser)):o.push("/")}}),[u,j]),b||!s.authenticated?i.a.createElement(_.a,null,i.a.createElement(g.a,null)):i.a.createElement(y.a,null,i.a.createElement(r.a,null,i.a.createElement("meta",{name:"keywords",content:"next,javascript,nextjs,react"}),i.a.createElement("meta",{name:"description",content:"primar project description"}),i.a.createElement("title",null,a)),i.a.createElement(G,null,i.a.createElement(X,{appearance:"clear",kind:"icon",onClick:c(q.e,{links:M((null===s||void 0===s?void 0:s.role.permissions)||[]).map(((e,a)=>({id:a,text:e.component,onClick:()=>o.push(e.path)})))})},i.a.createElement(x.a,{icon:"menu"})),i.a.createElement($,null,i.a.createElement(v.b,{text:"\u0410\u0442\u043e\u043c\u0438\u043a \u2013 \u043f\u043e\u0440\u0442\u0430\u043b \u0434\u043b\u044f \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0441\u0444\u0435\u0440\u044b \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f",offset:{bottom:5},place:"bottom",maxWidth:256,multiline:!0},i.a.createElement(ee,null,i.a.createElement(l.a,{href:"/"},i.a.createElement("a",null,i.a.createElement(E.a,{src:"/images/logo.png",alt:"Logotype"})))))),i.a.createElement(H.a,{appearance:"ghost"})),i.a.createElement(Q,null,i.a.createElement(J,{user:{name:s.name,role:s.role.name,avatar:(null===s||void 0===s||null===(t=s.avatar)||void 0===t?void 0:t.path)||"/images/avatar-default.png"},link:l.a,links:M((null===s||void 0===s?void 0:s.role.permissions)||[]).map(((e,a)=>{const t=`/dashboard${e.path.length>1?e.path:""}`;return{...e,path:t,component:i.a.createElement("a",{key:a,className:o.pathname===t?"active":""},i.a.cloneElement(e.component,{active:o.pathname===t}))}}))}),i.a.createElement(ae,null,i.a.createElement(f.a,null,e))))}}}]);
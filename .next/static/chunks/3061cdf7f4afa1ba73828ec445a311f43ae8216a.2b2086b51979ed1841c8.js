(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{QfFT:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("q1tI"),i=t("/MKj"),o=t("IxyI"),l=t("rP4V"),c=(t("+EEm"),t("8ihE")),r=t("8UhZ"),d=t("ApjV"),s=t("lphG"),p=t("u2Cb");const m=({isManage:e}={})=>{const a=Object(d.b)(),t=Object(s.a)(),{user:m,folder:f}=Object(i.c)((e=>({user:e.user,folder:e.root.folder}))),u=Object(i.b)(),g=Object(n.useMemo)((()=>{var e;return m&&"ADMIN"===(null===m||void 0===m||null===(e=m.role)||void 0===e?void 0:e.name)}),[m]),h=Object(n.useCallback)((e=>{var a;return!(null===m||void 0===m||null===(a=m.folders)||void 0===a||!a.find((a=>!(null===a||void 0===a||!a.projects.find((a=>a===e.id))))))}),[m]),b=Object(n.useCallback)((e=>!!(e.rating||[]).find((e=>(null===e||void 0===e?void 0:e.email)===(null===m||void 0===m?void 0:m.email)))),[m]),x=Object(n.useCallback)((e=>a(o.a,{id:e.id,folders:null===m||void 0===m?void 0:m.folders,mutations:{addProject:p.a.ADD_USER_PROJECT,createFolder:p.a.ADD_USER_FOLDER},callback:a=>{const t={...a,projects:[...a.projects,e.id]};u(Object(c.d)(t))}})()),[m,a,u]),v=Object(n.useCallback)((e=>{null!==m&&void 0!==m&&m.email&&t(p.a.LIKE_PROJECT,{id:e.id},(e=>u(Object(c.f)(e.data.likeProject))))}),[m,t,u]),y=Object(n.useCallback)((e=>{var n;const i=null===m||void 0===m||null===(n=m.projects)||void 0===n?void 0:n.find((a=>a.id===e.id));a(o.e,Object(r.b)(e.id,m,i,u,t,a,(a=>{const t={...a,projects:[...a.projects,e.id]};u(Object(c.d)(t))})))()}),[m,u,t,a]),E=Object(n.useCallback)((e=>a(o.f,{id:e.id,folder:f,mutation:p.a.REMOVE_USER_PROJECT})()),[m,a]),k=Object(n.useCallback)((e=>{a(l.a,{user:e})()}),[a]),w=Object(n.useCallback)((e=>{var t;a(l.i,{id:null===(t=e.company)||void 0===t?void 0:t.email,auth:null===m||void 0===m?void 0:m.email,recipient:e.author,query:p.a.GET_USER_CHATS,mutation:p.a.SEND_MESSAGE})()}),[m,a]),j=Object(n.useCallback)(((e,t)=>{a(o.g,{screenshots:[e.preview,...e.screenshots],key:t})()}),[a]);return{user:m,hasAdded:h,hasLiked:b,onAdd:x,onLike:v,onLink:y,onRemove:E,onAboutMore:k,onCompanyLink:w,onScreenshotClick:j,onEdit:e&&((e,n)=>a(o.d,{id:e.id,canEditStatus:g,mutation:p.a.UPDATE_PROJECT,query:p.a.GET_USERS,onCompanyInputChange:t(p.a.GET_USERS,{account:"ENTITY"}),onAfter:n})()),onCreate:e&&(e=>a(o.b,{canEditStatus:g,mutation:p.a.CREATE_PROJECT,query:p.a.GET_USERS,onAfter:e})())}}},WpSk:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),o=t("1zqG");const l=({user:e,style:a,layout:t,preview:n,project:l,checked:c,canRemove:r,appearance:d,withSocials:s,className:p,hasAdded:m,hasLiked:f,onAdd:u,onLike:g,onLink:h,onRemove:b,onAboutMore:x,onCompanyLink:v,onScreenshotClick:y,onChecked:E,onDelete:k,onEdit:w})=>i.a.createElement(o.b,{style:a,layout:t,project:l,preview:n,checked:c,className:p,canRemove:r,appearance:d,withSocials:s,added:m&&m(l),liked:f&&f(l),onLink:()=>h&&h(l),onAdd:(null===e||void 0===e?void 0:e.email)&&(()=>u&&u(l)),onAboutMore:()=>x&&x(l),onLike:(null===e||void 0===e?void 0:e.email)&&(()=>g&&g(l)),onCompanyLink:()=>v&&v(l),onRemove:(null===e||void 0===e?void 0:e.email)&&(()=>b&&b(l)),onScreenshotClick:(e,a)=>y&&y(l,a),onChecked:E,onDelete:k,onEdit:w});l.defaultProps={withSocials:!0},a.a=l},"X+Rt":function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),o=t("g4pe"),l=t.n(o),c=t("YFqc"),r=t.n(c),d=t("20a2"),s=t("VX74"),p=t("/MKj"),m=t("vOnD"),f=t("7Cbv"),u=t("V0nP"),g=t("auMy"),h=t("wOhW"),b=t("lphG"),x=t("ApjV"),v=t("8CDE"),y=t("t7jn"),E=t("7sPp"),k=t("WpSk"),w=t("1zqG"),j=t("IZrO"),C=t("QfFT");function _(){return(_=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const O=Object(m.d)(v.a).withConfig({displayName:"Scaffold__Wrap",componentId:"sc-11xb1f4-0"})(["position:relative;align-items:center;width:100%;padding:45px var(--main-offset-l);&::before{content:'';position:absolute;top:0;left:0;z-index:var(--z-11);width:100%;height:100%;background:rgba(0,0,0,0.15);}@media only screen and (max-width:996px){padding:45px var(--main-offset-m);}@media only screen and (max-width:768px){padding:45px var(--main-offset-s);}@media only screen and (max-width:480px){padding:45px var(--main-offset-xs);}"]),S=m.d.img.withConfig({displayName:"Scaffold__Background",componentId:"sc-11xb1f4-1"})(["position:absolute;top:0;left:0;z-index:var(--z-10);width:100%;height:100%;object-fit:cover;"]),I=Object(m.d)(y.a).withConfig({displayName:"Scaffold__GlobalSearch",componentId:"sc-11xb1f4-2"})(["min-width:815px;@media only screen and (max-width:996px){min-width:480px;}@media only screen and (max-width:768px){min-width:320px;}@media only screen and (max-width:480px){min-width:285px;}"]),N=Object(m.d)(v.a).withConfig({displayName:"Scaffold__Header",componentId:"sc-11xb1f4-3"})(["padding:0 var(--main-offset-l);margin-bottom:30px;@media only screen and (max-width:996px){padding:0 var(--main-offset-m);}@media only screen and (max-width:768px){padding:0 var(--main-offset-s);}@media only screen and (max-width:480px){padding:0 var(--main-offset-xs);}"]),T=Object(m.d)(v.a).withConfig({displayName:"Scaffold__Container",componentId:"sc-11xb1f4-4"})(["position:relative;z-index:var(--z-12);justify-content:center;align-items:center;flex-grow:1;width:100%;height:100%;"]),A=Object(m.d)(E.a).withConfig({displayName:"Scaffold__MainTitle",componentId:"sc-11xb1f4-5"})(["text-align:center;color:white;@media only screen and (max-width:768px){font-size:26px;line-height:1.25;margin-bottom:15px;}@media only screen and (max-width:768px){font-size:22px;}"]),R=m.d.div.withConfig({displayName:"Scaffold__Projects",componentId:"sc-11xb1f4-6"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(256px,1fr));grid-gap:var(--default-gap);@media only screen and (max-width:1280px){display:flex;flex-direction:column;}"]),L=Object(m.d)(k.a).withConfig({displayName:"Scaffold__PrimaryProject",componentId:"sc-11xb1f4-7"})(["flex-grow:1;height:100%;flex-basis:50%;","{max-height:345px;}@media only screen and (max-width:768px){","{img{height:256px;flex-basis:auto;}}}"],w.a,w.a),P=Object(m.d)(v.a).withConfig({displayName:"Scaffold__Residues",componentId:"sc-11xb1f4-8"})(["flex-grow:1;@media only screen and (max-width:1280px){flex-direction:row;grid-gap:var(--default-gap);width:100%;}@media only screen and (max-width:768px){flex-direction:column;grid-gap:var(--default-gap);width:100%;}"]),z=Object(m.d)(k.a).withConfig({displayName:"Scaffold__Residue",componentId:"sc-11xb1f4-9"})(["flex-grow:1;@media only screen and (max-width:1280px){width:100%;}"]);var D=({scaffold:e,style:a,className:t})=>{const o=Object(C.a)(),[l]=Object(j.a)(),c=Object(p.c)((e=>e.root.search)),{title:r,background:d,primary:s,residues:m}=Object(n.useMemo)((()=>({...e,background:e.background.path})),[e]);return i.a.createElement(O,{className:t,style:a},i.a.createElement(S,{src:d,alt:"Background"}),i.a.createElement(T,null,i.a.createElement(N,null,!c&&r&&i.a.createElement(A,null,r),i.a.createElement(I,{defaultValue:c,onSubmit:l})),!c&&(s||m&&m.length>0)&&i.a.createElement(R,null,s&&i.a.createElement(L,_({},o,{project:s,layout:"column"})),m&&m.length>0&&i.a.createElement(P,null,m.map(((e,a)=>i.a.createElement(z,_({key:a},o,{project:e}))))))))},M=t("ThpJ"),U=t("feIE"),F=t("ZeZO"),G=t("VWQm"),B=t("vJvq"),q=t("Tt38");function V(){return(V=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const H=m.d.div.withConfig({displayName:"AppBar__Wrap",componentId:"vyjcbk-0"})(["position:relative;z-index:var(--z-13);display:grid;grid-template-columns:128px 1fr 80px;grid-gap:calc(var(--default-gap) + 25px);align-content:center;margin:0;padding:0 var(--main-offset-l);width:100%;height:72px;min-height:72px;background:var(--surface-background);border:var(--surface-border);box-shadow:var(--surface-shadow);@media only screen and (max-width:996px){padding:0 var(--main-offset-m);}@media only screen and (max-width:768px){display:flex;align-items:center;grid-gap:var(--default-gap);padding:0 var(--main-offset-s);}@media only screen and (max-width:480px){padding:0 var(--main-offset-xs);}"]),J=Object(m.d)(F.a).withConfig({displayName:"AppBar__MenuButton",componentId:"vyjcbk-1"})(["display:none;@media only screen and (max-width:768px){display:flex;}"]),W=m.d.div.withConfig({displayName:"AppBar__HomeLinkContainer",componentId:"vyjcbk-2"})(["position:relative;top:6px;"]),K=m.d.img.withConfig({displayName:"AppBar__BrandLogo",componentId:"vyjcbk-3"})(["object-fit:contain;width:100%;height:100%;transform:scale(1.25);@media only screen and (max-width:786px){display:none;}"]),Q=m.d.div.withConfig({displayName:"AppBar__Navigation",componentId:"vyjcbk-4"})(["position:relative;display:flex;grid-gap:calc(var(--default-gap) + 15px);align-items:center;@media only screen and (max-width:768px){display:none;}"]),Z=m.d.span.withConfig({displayName:"AppBar__Label",componentId:"vyjcbk-5"})(["font-size:var(--font-size-m);font-weight:var(--font-weight-regular);",""],(({link:e})=>e&&Object(m.c)(["display:inline-flex;border-radius:25rem;padding:5px 15px;background:transparent;color:black;cursor:pointer;transition:all 150ms ease;&:hover{opacity:0.65;}",""],(({active:e})=>e&&Object(m.c)(["background:var(--default-color-accent-dim);color:var(--default-color-accent-link);&:hover{opacity:1;}"]))))),X=m.d.div.withConfig({displayName:"AppBar__Actions",componentId:"vyjcbk-6"})(["display:flex;grid-gap:var(--default-gap);align-items:center;justify-self:end;@media only screen and (max-width:768px){width:100%;justify-content:flex-end;","{flex-grow:initial;}}"],B.a),Y=({user:e,logotype:a,links:t,link:n,style:o,className:l,onMenu:c,onHelp:r,onChat:d,onProfile:s,onSettings:p,onNotification:m,onLogout:u,onLogin:g})=>{var h;return i.a.createElement(H,{className:l,style:o},i.a.createElement(J,{appearance:"clear",kind:"icon",onClick:c},i.a.createElement(U.a,{icon:"menu"})),a&&i.a.createElement(W,null,i.a.createElement(n,{href:"/"},i.a.createElement(G.b,{text:"\u0410\u0442\u043e\u043c\u0438\u043a \u2013 \u043f\u043e\u0440\u0442\u0430\u043b \u0434\u043b\u044f \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0441\u0444\u0435\u0440\u044b \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f",offset:{bottom:10},place:"bottom",maxWidth:256,multiline:!0},i.a.createElement(K,{src:a,alt:"Logotype"})))),t&&t.length>0&&i.a.createElement(Q,null,t.map((e=>e.props.sublinks?i.a.createElement(B.b,{key:Object(f.a)(),place:"bottom",width:"265px",offset:{top:5,right:85},body:i.a.createElement(q.b,{key:"slinks",listStyle:{padding:"var(--default-gap)"},links:e.props.sublinks.map((e=>({text:e.label,active:e.props.active,onClick:e.props.onClick})))}),appearance:"clear"},i.a.createElement(Z,{active:e.active,link:!0},e.label)):i.a.createElement(n,V({key:Object(f.a)()},e.props),i.a.createElement(Z,null,e.label))))),i.a.createElement(X,null,e?i.a.createElement(i.a.Fragment,null,i.a.createElement(F.a,{type:"button",kind:"icon",size:"xs",onClick:m},i.a.createElement(U.a,{size:"xs",icon:"notification",stroke:"white"})),i.a.createElement(F.a,{type:"button",kind:"icon",size:"xs",onClick:d},i.a.createElement(U.a,{size:"xs",icon:"chat",stroke:"white"})),i.a.createElement(B.b,{place:"bottom",width:"265px",offset:{top:5,left:100},body:i.a.createElement(q.b,{key:"menu",header:{title:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442",link:{text:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",onClick:p}},links:[{text:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442",onClick:s},{text:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",onClick:p},{text:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u043c\u043e\u0449\u044c",onClick:r},{text:"\u0412\u044b\u0445\u043e\u0434",onClick:u}]}),appearance:"clear"},i.a.createElement(F.a,{type:"button",appearance:"clear"},i.a.createElement(M.b,{src:(null===(h=e.avatar)||void 0===h?void 0:h.path)||"/images/avatar-default.png",alt:"Avatar"})))):i.a.createElement(F.a,{type:"button",onClick:g},"\u0412\u043e\u0439\u0442\u0438")))};Y.defaultProps={link:({children:e,...a})=>i.a.createElement("a",V({},a,{href:"/#"}),e)};var $=Y;const ee=Object(m.c)(["margin:0;padding:0;list-style:none;"]),ae=m.d.div.withConfig({displayName:"Footer__Wrap",componentId:"sc-1s8i38f-0"})(["display:grid;grid-template-areas:'contacts socials' 'catalog support';grid-gap:calc(var(--default-gap) + 20px);background:var(--surface-background);border:var(--surface-border);box-shadow:var(--surface-shadow);margin:0;padding:calc(var(--default-gap) + 20px) var(--main-offset-l);@media only screen and (max-width:996px){padding:calc(var(--default-gap) + 20px) var(--main-offset-m);}@media only screen and (max-width:768px){grid-template-areas:'contacts contacts' 'socials socials' 'catelog support';padding:calc(var(--default-gap) + 20px) var(--main-offset-s);grid-gap:var(--default-gap);}@media only screen and (max-width:550px){display:flex;flex-direction:column;}@media only screen and (max-width:480px){padding:calc(var(--default-gap) + 20px) var(--main-offset-xs);}"]),te=m.d.h2.withConfig({displayName:"Footer__Title",componentId:"sc-1s8i38f-1"})(["font-size:var(--font-h4);font-weight:var(--font-weight-bold);color:black;text-transform:uppercase;"]),ne=m.d.ul.withConfig({displayName:"Footer__Contacts",componentId:"sc-1s8i38f-2"})([""," grid-area:contacts;display:grid;grid-template-columns:repeat(auto-fit,minmax(256px,256px));grid-gap:calc(var(--default-gap) + 15px);@media only screen and (max-width:768px){grid-template-columns:repeat(auto-fit,minmax(212px,1fr));grid-gap:var(--default-gap);}"],ee),ie=m.d.li.withConfig({displayName:"Footer__Contact",componentId:"sc-1s8i38f-3"})(["flex-grow:1;display:grid;grid-template-columns:40px 1fr;grid-gap:var(--default-gap);align-content:center;cursor:pointer;"]),oe=Object(m.d)(U.a).withConfig({displayName:"Footer__ContactIcon",componentId:"sc-1s8i38f-4"})(["width:var(--input-height-m);height:var(--input-height-m);background:var(--ghost-color-background);border-radius:var(--surface-border-radius);"]),le=m.d.span.withConfig({displayName:"Footer__ContactLabel",componentId:"sc-1s8i38f-5"})(["display:flex;align-items:center;"]),ce=m.d.ul.withConfig({displayName:"Footer__Socials",componentId:"sc-1s8i38f-6"})([""," grid-area:socials;justify-self:end;display:flex;justify-content:space-between;grid-gap:var(--default-gap);width:150px;@media only screen and (max-width:768px){width:100%;flex-wrap:wrap;}"],ee),re=m.d.li.withConfig({displayName:"Footer__Social",componentId:"sc-1s8i38f-7"})(["img{width:var(--input-height-m);height:var(--input-height-m);}"]),de=m.d.div.withConfig({displayName:"Footer__Catalog",componentId:"sc-1s8i38f-8"})(["display:flex;flex-direction:column;grid-gap:var(--default-gap);"]),se=m.d.div.withConfig({displayName:"Footer__Support",componentId:"sc-1s8i38f-9"})(["justify-self:end;display:flex;flex-direction:column;grid-gap:var(--default-gap);width:150px;"]),pe=m.d.ul.withConfig({displayName:"Footer__Links",componentId:"sc-1s8i38f-10"})([""," display:flex;grid-gap:var(--default-gap) calc(var(--default-gap) + 15px);flex-wrap:wrap;"],ee),me=m.d.li.withConfig({displayName:"Footer__Link",componentId:"sc-1s8i38f-11"})(["width:256px;color:black;opacity:0.35;transition:all 150ms ease;"," &:hover{color:var(--default-color-accent);opacity:1;}"],(({onClick:e})=>e&&Object(m.c)(["cursor:pointer;"])));var fe=({contacts:e,socials:a,catalog:t,support:n,style:o,className:l})=>i.a.createElement(ae,{className:l,style:o},e&&e.length>0&&i.a.createElement(ne,null,e.map((e=>i.a.createElement(ie,{key:Object(f.a)()},i.a.createElement(oe,{icon:e.icon}),i.a.createElement(le,null,e.label))))),a&&a.length>0&&i.a.createElement(ce,null,a.map((e=>i.a.createElement(re,{key:Object(f.a)(),src:e,alt:"Social"},i.a.createElement(u.a,{src:e,alt:"Social"}))))),t&&t.links.length>0&&i.a.createElement(de,null,i.a.createElement(te,null,t.title),i.a.createElement(pe,null,t.links.map((e=>i.a.createElement(me,{key:Object(f.a)()},e))))),n&&n.links.length>0&&i.a.createElement(se,null,i.a.createElement(te,null,n.title),i.a.createElement(pe,null,n.links.map((e=>i.a.createElement(me,{key:Object(f.a)(),onClick:e.onClick||(()=>{})},e.render())))))),ue=t("586Q"),ge=t("8ihE"),he=t("Ztxg"),be=t("wha1"),xe=t("+EEm"),ve=t("rP4V"),ye=t("u2Cb");function Ee(){return(Ee=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const ke=m.d.div.withConfig({displayName:"default__Wrap",componentId:"sc-2byuzg-0"})(["position:relative;top:-20px;display:flex;flex-direction:column;justify-content:space-between;height:100vh;z-index:2;"]),we=Object(m.d)(u.a).withConfig({displayName:"default__Background",componentId:"sc-2byuzg-1"})(["position:absolute;top:0;left:0;width:100%;height:auto;object-fit:contain;z-index:1;"]),je=m.d.main.withConfig({displayName:"default__Main",componentId:"sc-2byuzg-2"})(["padding:50px var(--main-offset-l);flex-grow:100;@media only screen and (max-width:996px){padding:25px var(--main-offset-m);}@media only screen and (max-width:768px){padding:25px var(--main-offset-s);}@media only screen and (max-width:480px){padding:25px var(--main-offset-xs);}"]),Ce=m.d.a.withConfig({displayName:"default__Anchor",componentId:"sc-2byuzg-3"})(["border-radius:25rem;padding:5px 15px;background:transparent;color:black;transition:all 150ms ease;"," ",""],(({link:e})=>e&&Object(m.c)(["&:hover{opacity:0.65;}"])),(({active:e,link:a})=>e&&a&&Object(m.c)(["background:var(--default-color-accent-dim);color:var(--default-color-accent-link);&:hover{opacity:1;}"])));a.a=({children:e,title:a="\u0410\u0442\u043e\u043c\u0438\u043a",scaffold:t,background:o})=>{var c;const m=Object(x.b)(),u=Object(b.a)(),v=Object(d.useRouter)(),{data:y,loading:E}=Object(s.useQuery)(ye.a.GET_CATEGORIES),{root:k,user:w}=Object(p.c)((e=>e)),j=Object(p.b)(),C=Object(n.useMemo)((()=>(null===y||void 0===y?void 0:y.getCategories)||[]),[y]),_=v.pathname.includes("projects"),O=v.query.c,S=m(xe.b,{mutation:ye.a.CREATE_USER_TICKET});return E?i.a.createElement(ue.b,null,i.a.createElement(g.a,null)):i.a.createElement(h.a,null,i.a.createElement(l.a,null,i.a.createElement("meta",{name:"keywords",content:"next,javascript,nextjs,react"}),i.a.createElement("meta",{name:"description",content:"atomic project description"}),i.a.createElement("title",null,a)),i.a.createElement(we,{src:o,alt:"Background"}),i.a.createElement(ke,null,i.a.createElement($,{user:w.authenticated?w:null,logotype:null===(c=k.settings.general.logotype)||void 0===c?void 0:c.path,link:({children:e,href:a,...t})=>i.a.createElement(r.a,Ee({},t,{href:a}),i.a.createElement(Ce,{active:v.pathname===a,link:"span"===e.type.target},e)),links:[{label:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",props:{sublinks:C.filter((e=>"DIVISION"===e.type)).map((e=>({label:e.name,props:{active:O===e.id,onClick:()=>v.push(`/projects?c=${e.id}`)}})))},active:_},{label:"\u0410\u0432\u0442\u043e\u0440\u044b",props:{href:"/creators"}},{label:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",props:{href:"/articles"}},{label:"\u041e \u0440\u0435\u0441\u0443\u0440\u0441\u0435",props:{href:"/about"}}],onMenu:m(xe.d,{links:[{text:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",onClick:()=>{j(Object(he.a)(null)),v.push("/projects")}},{text:"\u0410\u0432\u0442\u043e\u0440\u044b",onClick:()=>{j(Object(he.a)(null)),v.push("/creators")}},{text:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",onClick:()=>{j(Object(he.a)(null)),v.push("/articles")}},{text:"\u041e \u0440\u0435\u0441\u0443\u0440\u0441\u0435",onClick:()=>{j(Object(he.a)(null)),v.push("/about")}}]}),onHelp:S,onChat:m(xe.a,{sender:w,queries:{userChats:ye.a.GET_USER_CHATS,chat:ye.a.GET_CHAT},mutations:{addUserChat:ye.a.ADD_USER_CHAT,sendMessage:ye.a.SEND_MESSAGE}}),onSettings:m(ve.c,{user:null===w||void 0===w?void 0:w.email,mutations:{del:ye.a.DELETE_USER,forgotEmail:ye.a.LOGIN,forgotPassword:ye.a.RESET,changePassword:ye.a.UPDATE_CLIENT_USER,checkResetToken:ye.a.CHECK_RESET_TOKEN,update:ye.a.UPDATE_CLIENT_USER}}),onNotification:m(xe.e,{user:w.email}),onProfile:()=>v.push("/profile"),onLogin:()=>v.push("/auth"),onLogout:u(ye.a.LOGOUT,{},(()=>j(Object(ge.b)())))}),t&&i.a.createElement(D,{scaffold:t}),i.a.createElement(je,{id:"main"},e),i.a.createElement(fe,{contacts:be.a,socials:be.d,catalog:{title:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433",links:C.filter((e=>"DIVISION"===e.type)).map((e=>i.a.createElement(r.a,{key:Object(f.a)(),href:`/projects?c=${e.id}`},i.a.createElement("a",null,e.name))))},support:{title:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",links:Object(be.b)(S).map((e=>({...e,render:()=>e.path?i.a.createElement(r.a,{key:Object(f.a)(),href:e.path},i.a.createElement("a",null,e.label)):e.label})))}})))}},wha1:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"d",(function(){return i})),t.d(a,"a",(function(){return o})),t.d(a,"c",(function(){return l}));const n=e=>[{label:"\u041e \u0440\u0435\u0441\u0443\u0440\u0441\u0435",path:"/about"},{label:"\u041b\u044e\u0434\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",path:"/creators"},{label:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",onClick:e},{label:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",path:"/guide"}],i=["/images/socials/gmail.png","/images/socials/vk.png","/images/socials/facebook.png"],o=[{label:"\u0433. \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433, \u0443\u043b. \u0414\u0435\u043a\u0430\u0431\u0440\u0438\u0441\u0442\u043e\u0432 20\u0430, \u043e\u0444. 302",icon:"location"},{label:"+7 (499) 222-54-86",icon:"call"},{label:"info@mail.ru",icon:"message"}],l=[{label:"\u041c\u043e\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",value:"projects"},{label:"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",value:"liked"},{label:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",value:"feed"},{label:"\u0421\u0442\u0430\u0442\u044c\u0438",value:"articles"}]}}]);
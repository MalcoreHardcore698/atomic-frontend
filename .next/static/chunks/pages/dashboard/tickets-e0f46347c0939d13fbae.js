_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"07fs":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("vOnD");const o=r.c.div.withConfig({displayName:"FadeLoad__Wrap",componentId:"sc-1rdnrub-0"})(["opacity:0;transition:opacity 100ms ease;",""],(({isVisible:e})=>e&&Object(r.b)(["opacity:1;"])));t.a=({children:e})=>{const[t,n]=Object(a.useState)(!0),r=Object(a.useRef)();return Object(a.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>n(e.isIntersecting)))}));return e.observe(r.current),()=>e.unobserve(r.current)}),[]),i.a.createElement(o,{isVisible:t,ref:r},e)}},IUYj:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/tickets",function(){return n("dsNT")}])},dsNT:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return T}));var a=n("q1tI"),i=n.n(a),r=n("/MKj"),o=n("7BXr"),c=n("ZwIX"),l=n("wZgm"),u=n("QclZ"),d=n("EJJs"),s=n("e3uv"),b=n("ApjV"),p=n("p9yE"),f=n("coMr"),v=n("RoTl"),m=n("4nJQ"),h=n("VP1n"),E=n("07fs"),w=n("ZbFR"),j=n("j8/+"),O=n("rP4V"),g=n("u2Cb"),k=n("wha1");const _="\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f";var T=!0;t.default=({store:e})=>{const t=Object(b.b)(),{user:n,documents:T}=Object(r.c)((e=>({user:e.user,documents:e.documents}))),C=Object(r.b)(),[y,I]=Object(a.useState)(),[N,D]=Object(a.useState)(),[x,P]=Object(a.useState)(!1),[S,V]=Object(a.useState)("grid"),A=Object(a.useMemo)((()=>T||e.tickets),[T,e]);return Object(a.useEffect)((()=>{C(Object(j.a)(null))}),[]),i.a.createElement(p.a,{title:_},i.a.createElement(f.a,{icon:"ticket",title:_,buttonCreateText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435",onCreate:t(w.a,{mutation:g.a.CREATE_TICKET}),onChangeVisibleFilter:()=>P(!x),onChangeDisplayMethod:e=>V(e.value)}),i.a.createElement(v.a,{isOpen:x,filters:[i.a.createElement(l.a,{key:0,value:y,placeholder:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",onChange:I,withNavigate:!0}),i.a.createElement(u.a,{key:1,options:k.a,placeholder:"\u0420\u0430\u0437\u0434\u0435\u043b",selected:N,onChange:e=>D(e)})],options:"list"===S?[]:s.a.ticket.map(((e,t)=>({label:e.header,value:t})))}),0===A.length&&i.a.createElement(c.a,{style:{width:"100%",textAlign:"center"}},"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0439 \u043d\u0435\u0442"),"list"===S&&i.a.createElement(d.b,{data:A,template:s.a.ticket,onChecked:()=>{},onClick:e=>t(w.d,{id:e.id,auth:null===n||void 0===n?void 0:n.email})(),onDelete:e=>t(w.b,{ticket:e,mutation:g.a.DELETE_TICKET})(),onEdit:e=>t(w.c,{id:e.id,mutation:g.a.UPDATE_TICKET})(),style:{overflowX:"auto",width:"calc(100vw - 290px)"}}),"grid"===S&&i.a.createElement(o.a,null,A.map((e=>i.a.createElement(E.a,{key:e.id},i.a.createElement(h.a,null,i.a.createElement(m.a,{ticket:e,onChecked:()=>{},onLink:t(w.d,{id:e.id,auth:null===n||void 0===n?void 0:n.email}),onAuthorLink:e=>t(O.i,{id:e,auth:null===n||void 0===n?void 0:n.email,owned:e===n.name})(),onDelete:t(w.b,{ticket:e,mutation:g.a.DELETE_TICKET}),onEdit:t(w.c,{id:e.id,mutation:g.a.UPDATE_TICKET})})))))))}},vJvq:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("wx14"),i=n("Ff2n"),r=n("h4VS"),o=n("q1tI"),c=n.n(o),l=n("vOnD"),u=n("cpGi"),d=n("7Cbv"),s=c.a.createElement;function b(){var e=Object(r.a)(["\n      width: "," !important;\n    "]);return b=function(){return e},e}function p(){var e=Object(r.a)(["\n      padding: 0 !important;\n      border: none !important;\n      box-shadow: var(--default-shadow) !important;\n    "]);return p=function(){return e},e}function f(){var e=Object(r.a)(["\n  padding: var(--default-gap) !important;\n  border: 1px solid var(--surface-border) !important;\n  background: var(--surface-background) !important;\n  box-shadow: var(--default-shadow) !important;\n  border-radius: var(--surface-border-radius) !important;\n  border: none !important;\n  pointer-events: initial !important;\n\n  ","\n\n  &.show {\n    opacity: 1 !important;\n  }\n\n  &::after {\n    display: none !important;\n  }\n\n  ","\n"]);return f=function(){return e},e}function v(){var e=Object(r.a)(["\n  position: relative;\n  display: inline-flex;\n"]);return v=function(){return e},e}var m=l.c.div(v()),h=Object(l.c)(u.a)(f(),(function(e){return"clear"===e.appearance&&Object(l.b)(p())}),(function(e){var t=e.width;return t&&Object(l.b)(b(),t||"auto")})),E=function(e){var t=e.body,n=e.appearance,r=e.children,o=e.width,c=Object(i.a)(e,["body","appearance","children","width"]),l="popper-".concat(Object(d.a)());return s(m,null,s("div",{"data-event":"click focus","data-for":l,"data-tip":!0},r),s(h,Object(a.a)({},c,{id:l,width:o,globalEventOff:"click",appearance:n}),t))};E.defaultProps={place:"top",effect:"solid",appearance:"default"},t.b=E},wha1:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c}));const a=[{label:"\u041e \u0440\u0435\u0441\u0443\u0440\u0441\u0435",path:"/about"},{label:"\u041b\u044e\u0434\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",path:"/creators"},{label:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",path:"/support"},{label:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",path:"/guide"}],i=["/images/socials/gmail.png","/images/socials/vk.png","/images/socials/facebook.png"],r=[{label:"\u0433. \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433, \u0443\u043b. \u0414\u0435\u043a\u0430\u0431\u0440\u0438\u0441\u0442\u043e\u0432 20\u0430, \u043e\u0444. 302",icon:"location"},{label:"+7 (499) 222-54-86",icon:"call"},{label:"info@mail.ru",icon:"message"}],o=[{label:"\u041c\u043e\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",value:"/projects"},{label:"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",value:"/liked"},{label:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",value:"/feed"}],c=[{value:0,label:"\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"},{value:1,label:"\u0420\u0435\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"},{value:2,label:"\u041a\u0430\u043f\u0438\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043c\u043e\u043d\u0442"},{value:3,label:"\u0426\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u0441\u0440\u0435\u0434\u0430"}]}},[["IUYj",0,2,1,3,4,5,7,8]]]);
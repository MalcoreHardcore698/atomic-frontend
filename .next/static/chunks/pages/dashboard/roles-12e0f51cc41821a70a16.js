_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"07fs":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("vOnD");const i=o.d.div.withConfig({displayName:"FadeLoad__Wrap",componentId:"sc-1rdnrub-0"})(["opacity:0;transition:opacity 100ms ease;",""],(({isVisible:e})=>e&&Object(o.c)(["opacity:1;"])));t.a=({children:e})=>{const[t,a]=Object(n.useState)(!0),o=Object(n.useRef)();return Object(n.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>a(e.isIntersecting)))}));return e.observe(o.current),()=>e.unobserve(o.current)}),[]),r.a.createElement(i,{isVisible:t,ref:o},e)}},"17Xh":function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSP",(function(){return k}));var n=a("q1tI"),r=a.n(n),o=a("/MKj"),i=a("7BXr"),c=a("ZwIX"),l=a("wZgm"),s=a("QclZ"),u=a("EJJs"),d=a("e3uv"),p=a("ApjV"),b=a("p9yE"),f=a("coMr"),m=a("RoTl"),v=a("4NP5"),E=a("VP1n"),h=a("07fs"),O=a("DF00"),w=a("j8/+"),j=a("wha1"),g=a("u2Cb");const _="\u0420\u043e\u043b\u0438";var k=!0;t.default=({store:e,permissions:t})=>{const a=Object(p.b)(),k=Object(o.c)((e=>e.documents)),y=Object(o.b)(),[C,N]=Object(n.useState)(),[D,L]=Object(n.useState)(),[T,x]=Object(n.useState)(!1),[P,R]=Object(n.useState)("grid"),S=Object(n.useMemo)((()=>k||e.roles),[k,e]);return Object(n.useEffect)((()=>{y(Object(w.a)(null))}),[]),r.a.createElement(b.a,{title:_},r.a.createElement(f.a,{icon:"lock",title:_,buttonCreateText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0440\u043e\u043b\u044c",onCreate:a(O.a,{permissions:t,mutation:g.a.CREATE_ROLE}),onChangeVisibleFilter:()=>x(!T),onChangeDisplayMethod:e=>R(e.value)}),r.a.createElement(m.a,{isOpen:T,filters:[r.a.createElement(l.a,{key:0,value:C,placeholder:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",onChange:N,withNavigate:!0}),r.a.createElement(s.a,{key:1,options:j.a,placeholder:"\u0420\u0430\u0437\u0434\u0435\u043b",selected:D,onChange:e=>L(e)})],options:"list"===P?[]:d.a.role.map(((e,t)=>({label:e.header,value:t})))}),0===S.length&&r.a.createElement(c.a,{style:{width:"100%",textAlign:"center"}},"\u0420\u043e\u043b\u0435\u0439 \u043d\u0435\u0442"),"list"===P&&r.a.createElement(u.b,{data:S,template:d.a.role,onChecked:()=>{},onClick:e=>a(O.d,{id:e.id,role:e})(),onDelete:e=>a(O.b,{id:e.id,role:e,mutation:g.a.DELETE_ROLE})(),onEdit:e=>a(O.c,{id:e.id,role:e,permissions:t,mutation:g.a.UPDATE_ROLE})(),style:{overflowX:"auto",width:"calc(100vw - 290px)"}}),"grid"===P&&r.a.createElement(i.a,null,S.map((e=>r.a.createElement(h.a,{key:e.id},r.a.createElement(E.a,null,r.a.createElement(v.a,{role:e,onChecked:()=>{},onLink:a(O.d,{id:e.id,role:e}),onDelete:a(O.b,{id:e.id,role:e,mutation:g.a.DELETE_ROLE}),onEdit:a(O.c,{id:e.id,role:e,permissions:t,mutation:g.a.UPDATE_ROLE})})))))))}},"98EU":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/roles",function(){return a("17Xh")}])},vJvq:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a("wx14"),r=a("Ff2n"),o=a("h4VS"),i=a("q1tI"),c=a.n(i),l=a("vOnD"),s=a("cpGi"),u=a("7Cbv"),d=c.a.createElement;function p(){var e=Object(o.a)(["\n      width: "," !important;\n    "]);return p=function(){return e},e}function b(){var e=Object(o.a)(["\n      padding: 0 !important;\n      border: none !important;\n      box-shadow: var(--default-shadow) !important;\n    "]);return b=function(){return e},e}function f(){var e=Object(o.a)(["\n  padding: var(--default-gap) !important;\n  border: 1px solid var(--surface-border) !important;\n  background: var(--surface-background) !important;\n  box-shadow: var(--default-shadow) !important;\n  border-radius: var(--surface-border-radius) !important;\n  border: none !important;\n  pointer-events: initial !important;\n\n  ","\n\n  &.show {\n    opacity: 1 !important;\n  }\n\n  &::after {\n    display: none !important;\n  }\n\n  ","\n"]);return f=function(){return e},e}function m(){var e=Object(o.a)(["\n  position: relative;\n  display: inline-flex;\n"]);return m=function(){return e},e}var v=l.d.div(m()),E=Object(l.d)(s.a)(f(),(function(e){return"clear"===e.appearance&&Object(l.c)(b())}),(function(e){var t=e.width;return t&&Object(l.c)(p(),t||"auto")})),h=function(e){var t=e.body,a=e.appearance,o=e.children,i=e.width,c=e.className,l=Object(r.a)(e,["body","appearance","children","width","className"]),s="popper-".concat(Object(u.a)());return d(v,{className:c},d("div",{"data-event":"click focus","data-for":s,"data-tip":!0},o),d(E,Object(n.a)({},l,{id:s,className:c,width:i,globalEventOff:"click",appearance:a}),t))};h.defaultProps={place:"top",effect:"solid",appearance:"default"},t.b=h},wha1:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return c}));const n=[{label:"\u041e \u0440\u0435\u0441\u0443\u0440\u0441\u0435",path:"/about"},{label:"\u041b\u044e\u0434\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",path:"/creators"},{label:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",path:"/support"},{label:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",path:"/guide"}],r=["/images/socials/gmail.png","/images/socials/vk.png","/images/socials/facebook.png"],o=[{label:"\u0433. \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433, \u0443\u043b. \u0414\u0435\u043a\u0430\u0431\u0440\u0438\u0441\u0442\u043e\u0432 20\u0430, \u043e\u0444. 302",icon:"location"},{label:"+7 (499) 222-54-86",icon:"call"},{label:"info@mail.ru",icon:"message"}],i=[{label:"\u041c\u043e\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",value:"/projects"},{label:"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",value:"/liked"},{label:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",value:"/feed"}],c=[{value:0,label:"\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"},{value:1,label:"\u0420\u0435\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"},{value:2,label:"\u041a\u0430\u043f\u0438\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043c\u043e\u043d\u0442"},{value:3,label:"\u0426\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u0441\u0440\u0435\u0434\u0430"}]}},[["98EU",0,2,1,3,4,5,7,8]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{IUYj:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/tickets",function(){return a("dsNT")}])},dsNT:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSP",(function(){return Ee}));var n=a("q1tI"),i=a.n(n),r=a("/MKj"),c=a("7BXr"),o=a("ZwIX"),l=a("wZgm"),d=a("QclZ"),u=a("EJJs"),s=a("e3uv"),b=a("ApjV"),p=a("p9yE"),m=a("coMr"),v=a("RoTl"),g=a("vOnD"),h=a("nShV"),f=a("8CDE"),E=a("7sPp"),k=a("QUga"),j=a("feIE"),w=a("aBfq"),O=a("RKiZ"),y=a("ZeZO"),C=a("DTT8"),T=a("79b8"),x=a("VWQm");const _=Object(g.c)(f.a).withConfig({displayName:"TicketCard__Wrap",componentId:"sc-3sqqk7-0"})(["grid-gap:var(--default-gap);height:100%;"," "," ",""],(({appearance:e})=>"default"===e&&Object(g.b)(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"])),(({appearance:e})=>"ghost"===e&&Object(g.b)(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"])),(({appearance:e})=>"clear"===e&&Object(g.b)(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]))),I=Object(g.c)(h.b).withConfig({displayName:"TicketCard__Header",componentId:"sc-3sqqk7-1"})(["justify-content:space-between;align-items:center;"]),N=Object(g.c)(h.b).withConfig({displayName:"TicketCard__Actions",componentId:"sc-3sqqk7-2"})(["grid-gap:5px;"]),S=Object(g.c)(E.a).withConfig({displayName:"TicketCard__Name",componentId:"sc-3sqqk7-3"})(["transition:opacity 150ms ease;",""],(({onClick:e})=>e&&Object(g.b)(["cursor:pointer;&:hover{opacity:0.45;}"]))),A=Object(g.c)(k.b).withConfig({displayName:"TicketCard__Status",componentId:"sc-3sqqk7-4"})(["color:",";"],(({status:e})=>`var(--default-color-${"OPENED"===e?"accent":"red"})`)),q=Object(g.c)(h.b).withConfig({displayName:"TicketCard__Footer",componentId:"sc-3sqqk7-5"})(["justify-content:space-between;align-items:center;flex-grow:1;"]),D=({ticket:e,appearance:t,className:a,style:n,onLink:r,onAuthorLink:c,onChecked:o,onEdit:l,onDelete:d})=>{var u,s,b,p,m;return i.a.createElement(_,{className:a,style:n,appearance:t},i.a.createElement(f.a,{style:{gridGap:0}},i.a.createElement(I,null,i.a.createElement(w.a,{date:e.createdAt,category:null===(u=e.category)||void 0===u?void 0:u.name}),o&&l&&d&&i.a.createElement(N,null,i.a.createElement(x.b,{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435"},i.a.createElement(y.a,{kind:"icon",size:"xs",appearance:"red",onClick:d},i.a.createElement(j.a,{icon:"delete",size:"xs",stroke:"white"}))),i.a.createElement(x.b,{text:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435"},i.a.createElement(y.a,{kind:"icon",size:"xs",onClick:l},i.a.createElement(j.a,{icon:"edit",size:"xs",stroke:"white"}))),i.a.createElement(x.b,{text:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435",self:!0},i.a.createElement(T.a,null)))),i.a.createElement(S,{tag:"h4",onClick:r},e.title),i.a.createElement(h.b,{style:{gridGap:5}},i.a.createElement(A,{status:e.status},e.status))),i.a.createElement(O.a,{clear:!0}),i.a.createElement(q,null,i.a.createElement(C.b,{label:"\u0410\u0432\u0442\u043e\u0440",img:null===(s=e.author)||void 0===s||null===(b=s.avatar)||void 0===b?void 0:b.path,text:null===(p=e.author)||void 0===p?void 0:p.name,onLink:c&&(()=>{var t;return c(null===(t=e.author)||void 0===t?void 0:t.email)})}),i.a.createElement(C.b,{icon:"chat",label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439",text:null===(m=e.messages)||void 0===m?void 0:m.length})))};D.defaultProps={appearance:"default"};var L=D,M=a("VP1n"),P=a("07fs"),K=a("PYoj"),V=a("xAqQ"),X=a("VX74"),G=a("otXJ"),Q=a("t7jn"),Z=a("auMy"),z=a("+nv6"),J=a("7ni8"),R=a("Gliw"),F=a("586Q");const U=Object(g.c)(f.a).withConfig({displayName:"TicketChat__Wrap",componentId:"sc-3e5jur-0"})(["width:100%;flex-grow:1;"]),W=Object(g.c)(h.b).withConfig({displayName:"TicketChat__Header",componentId:"sc-3e5jur-1"})(["justify-content:space-between;width:100%;"]),Y=Object(g.c)(f.a).withConfig({displayName:"TicketChat__Messages",componentId:"sc-3e5jur-2"})(["position:relative;background:#fbfbfb;border-radius:var(--surface-border-radius);padding:var(--default-gap);padding-top:55px;flex-grow:1;"]),B=Object(g.c)(h.b).withConfig({displayName:"TicketChat__Meta",componentId:"sc-3e5jur-3"})(["position:absolute;top:0;left:0;width:100%;justify-content:space-between;padding:8px var(--default-gap);border-radius:var(--surface-border-radius) var(--surface-border-radius) 0 0;background:var(--ghost-color-background);time{font-size:var(--font-size-m);font-weight:var(--font-weight-regular);color:var(--default-color-text);}"]),H=Object(g.c)(o.a).withConfig({displayName:"TicketChat__AuthAlert",componentId:"sc-3e5jur-4"})(["width:100%;text-align:center;"]),$=Object(g.c)(k.b).withConfig({displayName:"TicketChat__Empty",componentId:"sc-3e5jur-5"})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;flex-grow:1;"]);var ee=({auth:e,ticket:t,loading:a,onLink:r,onFinish:c,onAttach:l,onSubmit:d,...u})=>{var s,b,p,m,v;const[g,f]=Object(n.useState)(""),E=Object(n.useRef)(null),w=(null===t||void 0===t||null===(s=t.counsellor)||void 0===s?void 0:s.email)===e;return i.a.createElement(U,u,i.a.createElement(W,null,i.a.createElement(C.b,{label:"\u0410\u0432\u0442\u043e\u0440 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f",text:null!==t&&void 0!==t&&null!==(b=t.author)&&void 0!==b&&b.name&&!a?t.author.name:"-"}),i.a.createElement(h.b,null,"CLOSED"!==(null===t||void 0===t?void 0:t.status)&&i.a.createElement(y.a,{onClick:c,disabled:!w||a||!t},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435"))),i.a.createElement(Y,null,i.a.createElement(B,null,i.a.createElement(k.b,null,"\u0422\u0435\u043c\u0430: ",null!==t&&void 0!==t&&t.title&&!a?t.title:"-"),null!==t&&void 0!==t&&t.createdAt&&!a?i.a.createElement(z.a,{text:t.createdAt,options:{day:"2-digit",month:"2-digit",year:"numeric"}}):i.a.createElement(k.b,null,"-")),!a&&(null===t||void 0===t||null===(p=t.messages)||void 0===p?void 0:p.length)>0?((null===t||void 0===t?void 0:t.messages)||[]).map((e=>{var a,n,c,o,l;return i.a.createElement(J.a,{key:e.id,avatar:null===(a=e.user)||void 0===a||null===(n=a.avatar)||void 0===n?void 0:n.path,side:(null===(c=e.user)||void 0===c?void 0:c.email)===(null===(o=t.counsellor)||void 0===o?void 0:o.email)?"owner":"observer",name:null===(l=e.user)||void 0===l?void 0:l.name,text:e.text,time:e.createdAt!==e.updatedAt?e.updatedAt:e.createdAt,tails:{default:"/parts/tail.svg",owner:"/parts/tail-owner.svg"},onLink:()=>r(e.user)})})):a?i.a.createElement(F.c,null,i.a.createElement(Z.a,null)):t?i.a.createElement($,null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435"):i.a.createElement(o.a,{appearance:"error",style:{width:"100%",textAlign:"center"}},"\u0423\u043f\u0441! \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438")),w?i.a.createElement(h.b,null,i.a.createElement(y.a,{kind:"icon",disabled:a||!t,onSubmit:l},i.a.createElement(j.a,{icon:"attach",stroke:"white"})),i.a.createElement(R.a,{ref:E,placeholder:"\u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0435\u043d\u0438\u0435...",disabled:a||!t,appearance:"ghost",onChange:e=>{var t;return f((null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)||"")},onKeyDown:e=>{13===e.keyCode&&(d(g),E.current.value="")},tabIndex:-1}),i.a.createElement(y.a,{kind:"icon",disabled:a||!t,onClick:()=>{d(g),E.current.value=""}},i.a.createElement(j.a,{icon:"send",stroke:"white"}))):a?i.a.createElement(F.c,null,i.a.createElement(Z.a,null)):i.a.createElement(H,null,"\u0414\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u044d\u0442\u043e \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435, \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043f\u043e\u0434 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c ",null===t||void 0===t||null===(m=t.counsellor)||void 0===m?void 0:m.name," (",null===t||void 0===t||null===(v=t.counsellor)||void 0===v?void 0:v.email,")"))},te=a("j8/+"),ae=a("u2Cb");function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const ie=Object(g.c)(h.b).withConfig({displayName:"TicketView__Wrap",componentId:"sc-1wxiq0b-0"})(["height:100%;flex-grow:1;@media only screen and (max-width:568px){flex-direction:column;}"," "," ",""],(({appearance:e})=>"default"===e&&Object(g.b)(["padding:var(--default-gap);background:var(--surface-background);border:var(--surface-border);border-radius:var(--surface-border-radius);box-shadow:var(--surface-shadow);"])),(({appearance:e})=>"ghost"===e&&Object(g.b)(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"])),(({appearance:e})=>"clear"===e&&Object(g.b)(["padding:0;border:none;background:none;border-radius:0;box-shadow:none;"]))),re=Object(g.c)(f.a).withConfig({displayName:"TicketView__Tickets",componentId:"sc-1wxiq0b-1"})(["grid-gap:0;width:320px;@media only screen and (max-width:568px){width:100%;}"]),ce=Object(g.c)(G.a).withConfig({displayName:"TicketView__Ticket",componentId:"sc-1wxiq0b-2"})(["margin:10px 0 0 0;padding:10px;border-radius:var(--surface-border-radius);",""],(({active:e})=>e&&Object(g.b)(["background:var(--input-background);"]))),oe=({auth:e,ticket:t,appearance:a,onMemberLink:c,onReport:l,onAttach:d,...u})=>{const[s,b]=Object(n.useState)(null),[p,m]=Object(n.useState)(0),[v,g]=Object(n.useState)(!1),[h,f]=Object(n.useState)([]),E=Object(r.c)((e=>e.documents)),k=Object(r.b)(),j=Object(n.useMemo)((()=>({offset:p,limit:36})),[p]),{data:w,loading:O,refetch:y}=Object(X.useQuery)(ae.a.GET_TICKET,{variables:{id:t}}),[C,{data:T,loading:x,error:_}]=Object(X.useMutation)(ae.a.CLOSE_TICKET),[I,{data:N,loading:S}]=Object(X.useMutation)(ae.a.SEND_TICKET_MESSAGE),{data:A,loading:q,error:D}=Object(X.useQuery)(ae.a.GET_TICKETS,{variables:j});return Object(n.useEffect)((()=>{if(!O&&null!==w&&void 0!==w&&w.getTicket&&b(w.getTicket),!x&&null!==T&&void 0!==T&&T.closeTicket){const e=T.closeTicket;b(e),k(Object(te.a)((E||[]).map((t=>t.id===e.id?e:t))))}}),[w,T,O,x]),Object(n.useEffect)((()=>{!q&&A&&f(A.getTickets)}),[A,q]),Object(n.useEffect)((()=>{!S&&N&&b((e=>({...e,messages:N.sendTicketMessage})))}),[N,S]),i.a.createElement(ie,ne({},u,{appearance:a}),i.a.createElement(re,null,i.a.createElement(Q.a,{appearance:"ghost",onSubmit:()=>{}}),q?D?i.a.createElement(o.a,{appearance:"error",style:{marginTop:15,width:"100%",textAlign:"center"}},"\u0423\u043f\u0441! \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438"):i.a.createElement(F.c,null,i.a.createElement(Z.a,null)):h.map((e=>{var t;return i.a.createElement(ce,{key:e.id,name:e.title,position:null===(t=e.author)||void 0===t?void 0:t.name,active:s&&s.id===e.id,onClick:async()=>{g(!0),await y({id:e.id}),b(e),g(!1)}})}))),i.a.createElement(ee,{auth:e,ticket:s,loading:O||S||v||q||_,onLink:c,onFinish:()=>C({variables:{id:t}}),onReport:l,onAttach:d,onSubmit:e=>{var t;return I({variables:{ticket:s.id,recipient:null===(t=s.author)||void 0===t?void 0:t.email,text:e}})}}))};oe.defaultProps={appearance:"default"};var le=oe,de=a("Ztxg"),ue=a("9Xo6"),se=a("rP4V"),be=a("+EEm");function pe(e,t){const{id:a,auth:n}=t;e(Object(de.a)({icon:"ticket",title:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435",content:i.a.createElement(le,{auth:n,ticket:a,appearance:"clear",onAttach:()=>Object(be.b)(e),onMemberLink:t=>Object(se.i)(e,{id:t.email,auth:n})})}))}function me(e,t){const{mutation:a}=t;e(Object(de.a)({icon:"ticket",title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f",content:i.a.createElement(K.a,{mutation:a,appearance:"clear",onSubmit:async(t,a)=>{try{var n,i,r,c,o;const l=await a({variables:{input:{title:t.title,message:t.message,author:null===(n=t.author)||void 0===n||null===(i=n.value)||void 0===i?void 0:i.email,counsellor:null===(r=t.counsellor)||void 0===r||null===(c=r.value)||void 0===c?void 0:c.email,category:null===(o=t.category)||void 0===o?void 0:o.value}}});e(Object(te.a)(l.data.createTicket)),e(Object(de.a)(null)),e(Object(ue.c)({type:"success",message:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u043e"}))}catch(l){e(Object(de.a)(null)),e(Object(ue.c)({type:"error",message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435"}))}}})}))}function ve(e,t){const{id:a,mutation:n}=t;e(Object(de.a)({icon:"ticket",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f",content:i.a.createElement(K.a,{ticket:a,mutation:n,appearance:"clear",onSubmit:async(t,n)=>{try{var i,r,c,o,l;const d=await n({variables:{id:a,input:{title:t.title,message:t.message,messages:t.messages.map((e=>({id:e.id,text:e.text}))),author:null===(i=t.author)||void 0===i||null===(r=i.value)||void 0===r?void 0:r.email,counsellor:null===(c=t.counsellor)||void 0===c||null===(o=c.value)||void 0===o?void 0:o.email,category:null===(l=t.category)||void 0===l?void 0:l.value}}});e(Object(te.a)(d.data.updateTicket)),e(Object(de.a)(null)),e(Object(ue.c)({type:"success",message:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e"}))}catch(d){e(Object(de.a)(null)),e(Object(ue.c)({type:"error",message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435"}))}}})}))}function ge(e,t){const{ticket:a,mutation:n}=t;e(Object(de.a)({icon:"delete",color:"red",title:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f",content:i.a.createElement(V.a,{mutation:n,appearance:"clear",onCancel:()=>e(Object(de.a)(null)),onSubmit:async(t,n)=>{try{const t=await n({variables:{id:a.id}});e(Object(te.a)(t.data.deleteTicket)),e(Object(ue.c)({type:"success",message:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e"}))}catch(i){e(Object(ue.c)({type:"error",message:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435"}))}finally{e(Object(de.a)(null))}}},i.a.createElement(L,{ticket:a,appearance:"clear"}))}))}var he=a("wha1");const fe="\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f";var Ee=!0;t.default=({store:e})=>{const t=Object(b.b)(),{user:a,documents:g}=Object(r.c)((e=>({user:e.user,documents:e.documents}))),h=Object(r.b)(),[f,E]=Object(n.useState)(),[k,j]=Object(n.useState)(),[w,O]=Object(n.useState)(!1),[y,C]=Object(n.useState)("grid"),T=Object(n.useMemo)((()=>g||e.tickets),[g,e]);return Object(n.useEffect)((()=>{h(Object(te.a)(null))}),[]),i.a.createElement(p.a,{title:fe},i.a.createElement(m.a,{icon:"ticket",title:fe,buttonCreateText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435",onCreate:t(me,{mutation:ae.a.CREATE_TICKET}),onChangeVisibleFilter:()=>O(!w),onChangeDisplayMethod:e=>C(e.value)}),i.a.createElement(v.a,{isOpen:w,filters:[i.a.createElement(l.a,{key:0,value:f,placeholder:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438",onChange:E,withNavigate:!0}),i.a.createElement(d.a,{key:1,options:he.a,placeholder:"\u0420\u0430\u0437\u0434\u0435\u043b",selected:k,onChange:e=>j(e)})],options:"list"===y?[]:s.a.ticket.map(((e,t)=>({label:e.header,value:t})))}),0===T.length&&i.a.createElement(o.a,{style:{width:"100%",textAlign:"center"}},"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0439 \u043d\u0435\u0442"),"list"===y&&i.a.createElement(u.b,{data:T,template:s.a.ticket,onChecked:()=>{},onClick:e=>t(pe,{id:e.id,auth:null===a||void 0===a?void 0:a.email})(),onDelete:e=>t(ge,{ticket:e,mutation:ae.a.DELETE_TICKET})(),onEdit:e=>t(ve,{id:e.id,mutation:ae.a.UPDATE_TICKET})(),style:{overflowX:"auto",width:"calc(100vw - 290px)"}}),"grid"===y&&i.a.createElement(c.a,null,T.map((e=>i.a.createElement(P.a,{key:e.id},i.a.createElement(M.a,null,i.a.createElement(L,{ticket:e,onChecked:()=>{},onLink:t(pe,{id:e.id,auth:null===a||void 0===a?void 0:a.email}),onAuthorLink:e=>t(se.i,{id:e,auth:null===a||void 0===a?void 0:a.email,owned:e===a.name})(),onDelete:t(ge,{ticket:e,mutation:ae.a.DELETE_TICKET}),onEdit:t(ve,{id:e.id,mutation:ae.a.UPDATE_TICKET})})))))))}},vJvq:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("wx14"),i=a("Ff2n"),r=a("h4VS"),c=a("q1tI"),o=a.n(c),l=a("vOnD"),d=a("cpGi"),u=a("7Cbv"),s=o.a.createElement;function b(){var e=Object(r.a)(["\n      width: "," !important;\n    "]);return b=function(){return e},e}function p(){var e=Object(r.a)(["\n      padding: 0 !important;\n      border: none !important;\n      box-shadow: var(--default-shadow) !important;\n    "]);return p=function(){return e},e}function m(){var e=Object(r.a)(["\n  padding: var(--default-gap) !important;\n  border: 1px solid var(--surface-border) !important;\n  background: var(--surface-background) !important;\n  box-shadow: var(--default-shadow) !important;\n  border-radius: var(--surface-border-radius) !important;\n  border: none !important;\n  pointer-events: initial !important;\n\n  ","\n\n  &.show {\n    opacity: 1 !important;\n  }\n\n  &::after {\n    display: none !important;\n  }\n\n  ","\n"]);return m=function(){return e},e}function v(){var e=Object(r.a)(["\n  position: relative;\n  display: inline-flex;\n"]);return v=function(){return e},e}var g=l.c.div(v()),h=Object(l.c)(d.a)(m(),(function(e){return"clear"===e.appearance&&Object(l.b)(p())}),(function(e){var t=e.width;return t&&Object(l.b)(b(),t||"auto")})),f=function(e){var t=e.body,a=e.appearance,r=e.children,c=e.width,o=Object(i.a)(e,["body","appearance","children","width"]),l="popper-".concat(Object(u.a)());return s(g,null,s("div",{"data-event":"click focus","data-for":l,"data-tip":!0},r),s(h,Object(n.a)({},o,{id:l,width:c,globalEventOff:"click",appearance:a}),t))};f.defaultProps={place:"top",effect:"solid",appearance:"default"},t.b=f},wha1:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return o}));const n=[{label:"\u041e \u0440\u0435\u0441\u0443\u0440\u0441\u0435",path:"/about"},{label:"\u041b\u044e\u0434\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430",path:"/creators"},{label:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430",path:"/support"},{label:"\u0421\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a",path:"/guide"}],i=["/images/socials/gmail.png","/images/socials/vk.png","/images/socials/facebook.png"],r=[{label:"\u0433. \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433, \u0443\u043b. \u0414\u0435\u043a\u0430\u0431\u0440\u0438\u0441\u0442\u043e\u0432 20\u0430, \u043e\u0444. 302",icon:"location"},{label:"+7 (499) 222-54-86",icon:"call"},{label:"info@mail.ru",icon:"message"}],c=[{label:"\u041c\u043e\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",value:"/projects"},{label:"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",value:"/liked"},{label:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435",value:"/feed"}],o=[{value:0,label:"\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"},{value:1,label:"\u0420\u0435\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f"},{value:2,label:"\u041a\u0430\u043f\u0438\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043c\u043e\u043d\u0442"},{value:3,label:"\u0426\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u0441\u0440\u0435\u0434\u0430"}]}},[["IUYj",0,2,1,3,4,5,7,8]]]);
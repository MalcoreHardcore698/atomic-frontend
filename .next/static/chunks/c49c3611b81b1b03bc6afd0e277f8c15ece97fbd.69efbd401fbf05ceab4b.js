(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/y2W":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("VX74"),c=a("/MKj"),r=a("20a2"),o=a("vOnD"),d=a("nShV"),s=a("7BXr"),p=a("ZwIX"),u=a("auMy"),m=a("RKiZ"),h=a("ZeZO"),b=a("EJJs"),g=a("586Q"),f=a("VP1n");const E=o.d.div.withConfig({displayName:"List__Wrap",componentId:"sc-1jo6mxw-0"})(["width:100%;","{width:calc(100vw - 280px);}"],b.b),y=(Object(o.d)(p.a).withConfig({displayName:"List__CenterAlert",componentId:"sc-1jo6mxw-1"})(["width:100%;text-align:center;"]),()=>l.a.createElement(g.d,{key:"loader"},l.a.createElement(u.a,null))),v=({type:e,search:t,params:a,refetch:i,loading:o,template:p,component:u,variables:v,limit:x=6,emptyMessage:w,initialList:O,initialDisplayMethod:j,setCheckedList:k,gridOptions:C,withoutMore:_,onChecked:T,onClick:I,onEdit:S,onDelete:D})=>{var N;const M=Object(r.useRouter)(),L=Object(c.c)((e=>e.root.displayMethod)),[V,z]=Object(n.useState)(O||[]),[A,F]=Object(n.useState)(Number(null===(N=M.query)||void 0===N?void 0:N.page)||1),[q,R]=Object(n.useState)(!1),[P,B]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{(null===V||void 0===V?void 0:V.length)>0&&k&&k(V)}),[V,k]),l.a.createElement(E,null,"grid"===(j||L)&&l.a.createElement(s.a,C,V.map((e=>l.a.createElement(f.a,{key:e.id||e.email},u(e))))),"list"===(j||L)&&l.a.createElement(b.c,{data:V,template:p,onChecked:T,onClick:I,onEdit:S,onDelete:D}),(o||q)&&!_&&l.a.createElement(y,null),!o&&!q&&0===V.length&&l.a.createElement(g.a,null,w),V.length>0&&!P&&!o&&!_&&l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null),l.a.createElement(d.b,{style:{justifyContent:"center"}},l.a.createElement(h.a,{type:"button",disabled:q,style:{width:245},onClick:async()=>{if(!P&&!o&&i){R(!0);const n=await i({...v,...a,offset:x*A,search:t,limit:x});if(null!==n&&void 0!==n&&n.data){const t=n.data[e];0===t.length&&B(!0),t.length>0&&z((e=>[...e,...t])),F((e=>e+1))}R(!1)}}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"))))},x=({type:e,query:t,limit:a,template:n,component:r,variables:o,startOffset:d,emptyMessage:s,initialDisplayMethod:p,setCheckedList:u,withoutSearch:m,withoutMore:h,gridOptions:b,onChecked:g,onDelete:f,onClick:E,onEdit:x})=>{const{search:w,params:O}=Object(c.c)((e=>({search:m?"":e.root.search,params:m?{}:e.root.params}))),{data:j,loading:k,refetch:C}=Object(i.useQuery)(t,{variables:{...o,...O,offset:d,search:w,limit:a}});return k?l.a.createElement(y,null):l.a.createElement(v,{type:e,limit:a,query:t,search:w,params:O,refetch:C,template:n,component:r,emptyMessage:s,initialList:e&&j&&j[e],initialDisplayMethod:p,setCheckedList:u,withoutMore:h,gridOptions:b,onChecked:g,onDelete:f,onClick:E,onEdit:x})};x.defaultProps={startOffset:0},t.a=x},EJJs:function(e,t,a){"use strict";a.d(t,"b",(function(){return g})),a.d(t,"a",(function(){return j}));var n=a("q1tI"),l=a.n(n),i=a("vOnD"),c=a("7Cbv"),r=a("nShV"),o=a("8CDE"),d=a("feIE"),s=a("ZeZO"),p=a("OXt0"),u=a("DTT8"),m=a("79b8"),h=a("VWQm"),b=a("vJvq");const g=Object(i.d)(o.a).withConfig({displayName:"Table__Wrap",componentId:"gzldu8-0"})([""]),f=Object(i.d)(r.b).withConfig({displayName:"Table__Manage",componentId:"gzldu8-1"})(["display:grid;grid-template-columns:36px 1fr 70px;",""],(({checkable:e})=>e&&Object(i.c)(["grid-template-columns:1fr 40px;"]))),E=Object(i.d)(p.b).withConfig({displayName:"Table__Headers",componentId:"gzldu8-2"})([""," ",""],(({width:e})=>e&&Object(i.c)(["span{width:",";}"],e)),(({first:e,width:t})=>e&&t&&Object(i.c)(["span:first-child{width:calc("," + 45px);}"],t))),y=(Object(i.d)(r.b).withConfig({displayName:"Table__Header",componentId:"gzldu8-3"})(["display:flex;justify-content:flex-start;align-items:center;width:100%;height:30px;color:#959595;&:last-child{justify-content:flex-end;}"]),Object(i.d)(r.b).withConfig({displayName:"Table__Track",componentId:"gzldu8-4"})(["transition:opacity 150ms ease;",""],(({checked:e})=>e&&Object(i.c)(["opacity:0.45;"])))),v=Object(i.d)(r.b).withConfig({displayName:"Table__Content",componentId:"gzldu8-5"})(["padding:5px 15px;width:calc(100% - 85px);"," "," "," "," & > label{display:flex;justify-content:center;align-items:center;width:calc(var(--input-height-m) - 15px);margin-left:5px;& > span{margin:0;}}"],(({checkable:e})=>e&&Object(i.c)(["width:100%;"])),(({editable:e})=>e&&Object(i.c)(["width:calc(100% - 55px);"])),(({appearance:e})=>"default"===e&&Object(i.c)(["border:1px solid var(--surface-border);background:var(--surface-background);box-shadow:1px solid var(--surface-shadow);border-radius:var(--surface-border-radius);"])),(({appearance:e})=>"clear"===e&&Object(i.c)(["border:none;background:none;box-shadow:none;border-radius:0;"]))),x=Object(i.d)(r.b).withConfig({displayName:"Table__Container",componentId:"gzldu8-6"})(["width:100%;",""],(({onClick:e})=>e&&Object(i.c)(["cursor:pointer;"]))),w=Object(i.d)(o.a).withConfig({displayName:"Table__Actions",componentId:"gzldu8-7"})(["justify-content:center;align-items:center;width:70px;padding:5px;grid-gap:5px;button{width:100%;flex-grow:1;}","{width:100%;}"," "," "," ",""],h.a,(({checkable:e})=>e&&Object(i.c)(["width:40px;"])),(({horizontal:e})=>e&&Object(i.c)(["flex-direction:row;"])),(({appearance:e})=>"default"===e&&Object(i.c)(["border:1px solid var(--surface-border);background:var(--surface-background);box-shadow:1px solid var(--surface-shadow);border-radius:var(--surface-border-radius);"])),(({appearance:e})=>"clear"===e&&Object(i.c)(["border:none;background:none;box-shadow:none;border-radius:0;padding:0;"]))),O=Object(i.d)(b.b).withConfig({displayName:"Table__FieldsPopper",componentId:"gzldu8-8"})(["display:flex;align-items:center;& > div{display:flex;}"]),j=Object(i.d)(u.d).withConfig({displayName:"Table__Cell",componentId:"gzldu8-9"})(["align-items:center;flex-grow:1;width:",";overflow:hidden;& > div{width:100%;}h4{font-size:var(--font-size-m);font-weight:var(--font-weight-bold);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}"],(({width:e})=>e)),k=Object(i.d)(o.a).withConfig({displayName:"Table__HeaderList",componentId:"gzldu8-10"})(["border:1px solid var(--surface-border);background:var(--surface-background);box-shadow:var(--surface-shadow);border-radius:var(--surface-border-radius);padding:10px;grid-gap:10px;"]),C=Object(i.d)(h.b).withConfig({displayName:"Table__CheckboxTooltip",componentId:"gzldu8-11"})(["display:flex;justify-content:flex-end;align-items:center;"]),_=e=>{var t;return"ADMIN"===(null===(t=e.name)||void 0===t?void 0:t.toUpperCase())},T=({data:e,template:t,className:a,style:i,appearance:r,onClick:o,onChecked:p,onDelete:u,onEdit:b})=>{const[j,T]=Object(n.useState)(!1),[I,S]=Object(n.useState)((e||[]).map((e=>({...e,id:e.id||Object(c.a)(),checked:!1})))),D=Object(n.useMemo)((()=>!I.find((e=>e.checked))),[I]),N=`${Math.floor(100/t.length)}%`,M=Object(n.useMemo)((()=>(t||[]).map((e=>({value:Object(c.a)(),label:e.header,tooltip:e.tooltip||`\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \xab${e.header}\xbb`,visible:!e.hidden})))),[]);return Object(n.useEffect)((()=>{const e=I.reduce(((e,t)=>e+(t.checked?1:0)),0);I.length>0&&e===I.length&&T(!0)}),[I]),l.a.createElement(g,{className:a,style:i},l.a.createElement(f,{checkable:!p},p&&l.a.createElement(C,{text:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435",self:!0},l.a.createElement(m.a,{size:"s",checked:j,onChange:()=>{const e=!j;S((t=>t.map((t=>({...t,checked:!_(t)&&e}))))),T(e)}})),l.a.createElement(E,{defaultValue:M[0],options:M.filter((e=>e.visible)),first:p,stretch:!0}),l.a.createElement(w,{appearance:r,checkable:!p,horizontal:!0},u&&l.a.createElement(h.b,{text:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e",place:"left"},l.a.createElement(s.a,{size:"xs",kind:"icon",appearance:D?"ghost":"red",disabled:D,onClick:()=>u(I.filter((e=>e.checked)))},l.a.createElement(d.a,{icon:"delete",size:"xs",stroke:D?"var(--ghost-color-text)":"white"}))),l.a.createElement(O,{place:"left",offset:{bottom:80},body:l.a.createElement(k,null,M.map(((e,t)=>l.a.createElement(m.a,{key:t,size:"s",label:e.label,checked:e.visible})))),appearance:"clear"},l.a.createElement(h.b,{text:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0435\u0439",place:"left"},l.a.createElement(s.a,{size:"xs",kind:"icon"},l.a.createElement(d.a,{icon:"show",size:"xs",stroke:"white"})))))),I.map(((e,a)=>l.a.createElement(y,{key:a,checked:e.checked},l.a.createElement(v,{appearance:r,checkable:!p,editable:!p&&b},p&&l.a.createElement(C,{text:"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442",self:!0},l.a.createElement(m.a,{size:"s",checked:!_(e)&&(j||e.checked),onChange:!_(e)&&(()=>(e=>{S((t=>{const a=t=>t.id===e.id;return t.find(a)?t.map((t=>a(t)?{...e,checked:!t.checked}:{...t,checked:j||t.checked})):[...t,{...e,checked:!0}]})),T(!1)})(e))})),l.a.createElement(x,{onClick:()=>o(e)},t.map(((t,a)=>M[a].visible?l.a.cloneElement(t.content(e),{key:a,label:t.header,width:(null===t||void 0===t?void 0:t.width)||N}):null)))),(b||u)&&l.a.createElement(w,{appearance:r,checkable:!p},b&&l.a.createElement(h.b,{text:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",place:"left"},l.a.createElement(s.a,{size:"xs",kind:"icon",disabled:_(e)||e.checked,onClick:()=>b(e)},l.a.createElement(d.a,{icon:"edit",size:"xs",stroke:"white",fill:_(e)||e.checked?"var(--ghost-color-text)":"var(--default-color-accent)"}))),u&&l.a.createElement(h.b,{text:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435",place:"left"},l.a.createElement(s.a,{size:"xs",kind:"icon",appearance:"red",disabled:_(e)||e.checked,onClick:()=>u(e)},l.a.createElement(d.a,{icon:"delete",size:"xs",stroke:"white",fill:_(e)||e.checked?"var(--ghost-color-text)":"var(--default-color-red)"}))))))))};T.defaultProps={appearance:"default"},t.c=T},OqOz:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a("q1tI"),l=a.n(n),i=a("/MKj"),c=a("7Cbv"),r=a("8CDE"),o=a("7BXr"),d=a("p9yE"),s=a("/y2W"),p=a("RoTl"),u=a("coMr"),m=a("xAqQ"),h=a("Sza6"),b=a("Ztxg"),g=a("9Xo6"),f=a("NWnW");function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const y=e=>{var t;return"ADMIN"!==(null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.toUpperCase())},v=({item:e,query:t,component:a,entityMultiText:c,entitySingleText:r,onSubmit:d})=>{const s=Object(n.useMemo)((()=>Array.isArray(e)),[e]),p=Object(i.b)(),u=a;return l.a.createElement(m.a,{mutation:t,appearance:"clear",onCancel:()=>p(Object(b.a)(null)),onSubmit:async(t,a)=>{try{await a({variables:{id:s?e.map((e=>e.id)):[e.id]}}),p(Object(g.c)({type:"success",message:s?`${c} \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u044b`:`${r} \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d`}))}catch(n){n&&p(Object(g.c)({type:"error",message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}))}finally{p(Object(b.a)(null)),d&&d()}}},s?l.a.createElement(o.a,{length:"auto-fit"},e.map((e=>l.a.createElement(u,{key:e.id,item:e})))):l.a.createElement(u,{item:e}))},x=({item:e,checked:t,appearance:a,component:n,withoutActions:i,withoutChecked:c,onChecked:r,onLink:o,onEdit:d,onDelete:s})=>l.a.cloneElement(n,{checked:t,appearance:a,onLink:o&&(()=>o(e)),onEdit:!i&&d&&(()=>d(e)),onChecked:!c&&r&&(t=>r({...e,checked:t})),onDelete:!i&&s&&(()=>s(e))}),w=({render:e,title:t,icon:a,field:o,template:m,limit:g=6,startOffset:w=6,buttonCreateText:O,filterConfig:j,getType:k,getQuery:C,entityType:_,deleteQuery:T,deleteEntityMultiText:I,deleteEntitySingleText:S,onLink:D,onEdit:N,onCreate:M,emptyMessage:L,withoutChecked:V})=>{const{displayMethod:z,visibleFilters:A}=Object(i.c)((e=>({displayMethod:e.root.displayMethod,visibleFilters:e.root.visibleFilters}))),{isAccessibleForView:F,isAccessibleForAdd:q,isAccessibleForEdit:R,isAccessibleForDelete:P}=((e="")=>{const t=Object(i.c)((e=>e.user)),a=Object(n.useCallback)((a=>Object(f.j)(t,`${a}_${e}`.toUpperCase())),[t,e]);return{isAccessibleForView:Object(n.useMemo)((()=>a("view")),[a]),isAccessibleForAdd:Object(n.useMemo)((()=>a("add")),[a]),isAccessibleForEdit:Object(n.useMemo)((()=>a("edit")),[a]),isAccessibleForDelete:Object(n.useMemo)((()=>a("delete")),[a]),getAccess:a}})(_),B=Object(i.b)(),[W,Q]=Object(n.useState)(!1),[Z,H]=Object(n.useState)([]),[U,G]=Object(n.useState)("list"),J=Object(n.useCallback)((e=>{var t;return null===(t=Z.find((t=>t[o]===e[o])))||void 0===t?void 0:t.checked}),[Z]),K=()=>G(Object(c.a)()),X=e=>{H((t=>{const a=t=>t[o]===e[o];return t.find(a)?t.map((t=>a(t)?{...e,checked:!t.checked}:{...t,checked:W||t.checked})):[...t,{...e,checked:!0}]})),Q(!1)},$=()=>{const e=!W;H((t=>t.map((t=>({...t,checked:!!y(t)&&e}))))),Q(e)},Y=t=>B(Object(b.a)({icon:"delete",color:"red",title:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435",content:l.a.createElement(v,{item:t,query:T,component:t=>l.a.cloneElement(e(t.item),{appearance:"clear",onEdit:null,onDelete:null}),entityMultiText:I,entitySingleText:S,onSubmit:()=>G(Object(c.a)())})}));return Object(n.useEffect)((()=>{const e=Z.reduce(((e,t)=>e+(t.checked?1:0)),0);Z.length>0&&e===Z.length&&Q(!0)}),[Z]),l.a.createElement(d.a,{title:t},l.a.createElement(r.a,null,l.a.createElement(u.b,{title:t,icon:a,checked:W,defaultDisplayMethod:z,defaultVisibleFilters:A,buttonDeleteDisabled:!Z.find((e=>e.checked)),buttonCreateText:O,onCreate:q&&(()=>M&&M(K)),onChecked:P&&(()=>"grid"===z&&$&&$()),onChangeVisibleFilter:()=>B(Object(h.u)(!A)),onChangeDisplayMethod:e=>B(Object(h.l)(e.value)),onDeleteAll:P&&(()=>Y(Z.filter((e=>e.checked)))),withoutFooter:!P||"list"===z,withFilters:j}),l.a.createElement(p.a,E({},j||{},{isOpen:A,withoutDivider:!0})),l.a.createElement(s.a,{key:U,limit:g,type:k,query:C,template:m,startOffset:w,emptyMessage:L,setCheckedList:H,component:t=>l.a.createElement(x,{item:t,component:e(t),withoutChecked:!P&&V,withoutActions:!R&&!P,checked:y(t)&&(W||J(t)),onLink:D&&F&&(e=>D(e)),onEdit:N&&R&&(e=>N(e,K)),onChecked:P&&X,onDelete:P&&Y}),onClick:D&&F&&(e=>D(e)),onEdit:N&&R&&(e=>N(e,K)),onChecked:P&&X,onDelete:P&&Y})))};w.defaultProps={field:"id"};t.b=w},RoTl:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("NKCw"),c=a("/MKj"),r=a("vOnD"),o=a("8CDE"),d=a("nShV"),s=a("OXt0"),p=a("RKiZ"),u=a("hYBG"),m=a("wZgm"),h=a("IZrO"),b=a("VX74"),g=a("QclZ");var f=({type:e,name:t,query:a,variables:i={},defaultValue:r,placeholder:o,selectValueField:d,selectLabelField:s,selectRestrictions:p,selectLabelDecorator:u,isMulti:m,onChange:h})=>{const f=Object(c.c)((e=>e.root.params)),{data:E,loading:y}=Object(b.useQuery)(a,{variables:i}),v=Object(n.useCallback)((e=>{if(s){const t=e[s];return u?u(t):t}return!s&&u?u(e):e}),[s,u]),x=Object(n.useMemo)((()=>{const t=e&&E&&E[e]||[];return t.filter((e=>Boolean(p?!(e=>(Array.isArray(p)?p:[]).includes(e))(e):e))).map((e=>({value:d?e[d]:e,label:v(e)})))}),[e,E,d,p,v]);return l.a.createElement(g.a,{options:x,placeholder:o,defaultValue:x.find((e=>(null===e||void 0===e?void 0:e.value)===f[t]))||r,onChange:h,isLoading:y,isMulti:m,isSearchable:!0,isClearable:!0})};const E=Object(r.d)(o.a).withConfig({displayName:"FilterBar__Wrap",componentId:"sc-1lvfs1u-0"})(["width:100%;&.fade-enter{opacity:0;}&.fade-enter-active{opacity:1;transition:opacity 100ms,blur 100ms;}&.fade-exit{opacity:1;}&.fade-exit-active{opacity:0;transition:opacity 100ms,blur 100ms;}"]),y=r.d.form.withConfig({displayName:"FilterBar__Form",componentId:"sc-1lvfs1u-1"})(["display:flex;flex-direction:column;grid-gap:var(--default-gap);width:100%;"]),v=Object(r.d)(d.b).withConfig({displayName:"FilterBar__List",componentId:"sc-1lvfs1u-2"})(["display:flex;flex-wrap:wrap;grid-gap:var(--default-gap);& > div{min-width:256px;flex-grow:1;}"]),x=({isOpen:e=!0,duration:t,sort:a,filter:r,withoutDivider:o})=>{const{search:b,params:g}=Object(c.c)((e=>({search:e.root.search,params:e.root.params}))),{control:x,getValues:w}=Object(i.b)(),[O]=Object(h.a)(),j=Object(n.useCallback)((e=>t=>{e&&e(t),O(b,(e=>{const t=e=>e instanceof Date?e.getTime().toString():Array.isArray(e)?e.map((e=>e.value)):(null===e||void 0===e?void 0:e.value)||e;return Object.entries(e).filter((([e,t])=>t)).reduce(((e,[a,n])=>({...e,[a]:t(n)})),{})})(w()))}),[b,w,O]),k=Object(n.useMemo)((()=>(r||[]).map((e=>{switch(e.type){case"DATEPICKER":return l.a.createElement(i.a,{key:e.name,control:x,name:e.name,defaultValue:w(e.name)||g&&g[(null===e||void 0===e?void 0:e.name)||""]||null,render:({value:t,onChange:a})=>l.a.createElement(m.a,{defaultValue:t,placeholder:e.label,onChange:j(a),withNavigate:!0})});case"SELECT":return l.a.createElement(i.a,{key:e.name,control:x,name:e.name,defaultValue:w(e.name)||null,render:({value:t,onChange:a})=>l.a.createElement(f,{name:e.name,query:e.query,defaultValue:t,type:e.queryType,placeholder:e.label,variables:e.variables,selectValueField:e.selectValueField,selectLabelField:e.selectLabelField,selectRestrictions:e.selectRestrictions,selectLabelDecorator:e.selectLabelDecorator,onChange:j(a)})});case"MULTISELECT":return l.a.createElement(i.a,{key:e.name,control:x,name:e.name,defaultValue:w(e.name)||null,render:({value:t,onChange:a})=>l.a.createElement(f,{name:e.name,query:e.query,defaultValue:t,type:e.queryType,placeholder:e.label,variables:e.variables,selectValueField:e.selectValueField,selectLabelField:e.selectLabelField,selectRestrictions:e.selectRestrictions,selectLabelDecorator:e.selectLabelDecorator,onChange:j(a),isMulti:!0})});default:return null}}))),[g,x,r,j,w]),C=Object(n.useMemo)((()=>a||[]),[a]);return l.a.createElement(u.a,{in:e,animation:"fade",timeout:t},l.a.createElement(E,null,l.a.createElement(y,null,!o&&l.a.createElement(p.a,{clear:!0}),k&&k.length>0&&l.a.createElement(v,null,k.map((e=>e))),C&&C.length>0&&l.a.createElement(d.b,null,l.a.createElement(i.a,{name:"sort",control:x,defaultValue:w("sort")||(null===g||void 0===g?void 0:g.sort)&&C.find((e=>(null===e||void 0===e?void 0:e.value)===g.sort))||C[0]||null,render:({value:e,onChange:t})=>l.a.createElement(s.b,{defaultValue:e,onChange:j(t),options:C,stretch:!0})})),l.a.createElement(p.a,{clear:!0}))))};x.defaultProps={duration:150};t.a=x},VP1n:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("UUyv");t.a=Object(i.trackWindowScroll)((({children:e})=>l.a.createElement(i.LazyLoadComponent,null,e)))},coMr:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a("q1tI"),l=a.n(n),i=a("/MKj"),c=a("vOnD"),r=a("nShV"),o=a("8CDE"),d=a("ZeZO"),s=a("feIE"),p=a("OXt0"),u=a("DTT8"),m=a("79b8"),h=a("RKiZ"),b=a("VWQm"),g=a("Sza6");const f=Object(c.d)(o.a).withConfig({displayName:"HandleBar__Wrap",componentId:"phr6ix-0"})([""]),E=Object(c.d)(r.b).withConfig({displayName:"HandleBar__Header",componentId:"phr6ix-1"})(["justify-content:space-between;grid-gap:var(--default-gap);flex-wrap:wrap;"]),y=Object(c.d)(r.b).withConfig({displayName:"HandleBar__ActionGroup",componentId:"phr6ix-2"})(["justify-content:flex-end;@media only screen and (max-width:996px){width:100%;","{width:auto;}}@media only screen and (max-width:480px){flex-wrap:wrap;grid-gap:var(--default-gap);","{flex-direction:row;flex-grow:1;}","{button{width:100%;height:100%;}}}"],p.a,p.a,b.a),v=Object(c.d)(d.a).withConfig({displayName:"HandleBar__CreateButton",componentId:"phr6ix-3"})(["display:flex;justify-content:center;align-items:center;grid-gap:10px;span{white-space:nowrap;}@media only screen and (max-width:996px){width:100%;}"]),x=Object(c.d)(r.b).withConfig({displayName:"HandleBar__Footer",componentId:"phr6ix-4"})(["justify-content:space-between;@media only screen and (max-width:480px){flex-direction:column;align-items:end;grid-gap:var(--default-gap);}"]),w=Object(c.d)(d.a).withConfig({displayName:"HandleBar__DeleteButton",componentId:"phr6ix-5"})(["color:var(--default-color-red);background:none;border:none;&:hover{background:none;border:none;color:var(--default-color-red);}",""],(({disabled:e})=>e&&Object(c.c)(["color:var(--ghost-color-text);&:hover{color:var(--ghost-color-text);}"]))),O=[{label:l.a.createElement(s.a,{icon:"menu"}),value:"list",tooltip:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u043e\u043c"},{label:l.a.createElement(s.a,{icon:"category"}),value:"grid",tooltip:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u0435\u0442\u043a\u043e\u0439"}],j=({icon:e,title:t,buttonCreateText:a,buttonDeleteDisabled:c,defaultDisplayMethod:r,withoutFooter:o,withFilters:j,checked:k,onCreate:C,onChecked:_,onDeleteAll:T,onChangeDisplayMethod:I})=>{const[S,D]=Object(n.useState)(k),[N,M]=Object(n.useState)(O.find((e=>e.value===r))),L=Object(i.c)((e=>e.root.visibleFilters)),V=Object(i.b)();return Object(n.useEffect)((()=>{D(k)}),[k]),l.a.createElement(f,null,l.a.createElement(E,null,l.a.createElement(u.d,{icon:e,text:t}),l.a.createElement(y,null,C&&l.a.createElement(v,{type:"button",onClick:C},l.a.createElement("span",null,a),l.a.createElement(s.a,{icon:"add",stroke:"white"})),j&&l.a.createElement(b.b,{text:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432"},l.a.createElement(d.a,{type:"button",kind:"icon",onClick:()=>V(Object(g.u)(!L)),revert:!L},l.a.createElement(s.a,{icon:"filter2",stroke:L?"white":"var(--default-color-accent)"}))),l.a.createElement(p.b,{defaultValue:N||O[1],options:O,onChange:e=>(e=>{M(e),I&&I(e)})(e)}))),l.a.createElement(h.a,{clear:!0}),!o&&l.a.createElement(x,null,l.a.createElement(m.a,{label:"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0441\u0435",checked:S,onChange:e=>{const t=e.target.checked;D(t),_&&_(t)}}),l.a.createElement(w,{appearance:"clear",disabled:c,onClick:T},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435")))};j.defaultProps={buttonCreateText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",buttonDeleteDisabled:!0},t.b=j},p9yE:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("g4pe"),c=a.n(i),r=a("YFqc"),o=a.n(r),d=a("20a2"),s=a("vOnD"),p=a("VX74"),u=a("/MKj"),m=a("nShV"),h=a("N0uN"),b=a("t7jn"),g=a("VWQm"),f=a("auMy"),E=a("8CDE"),y=a("ZeZO"),v=a("V0nP"),x=a("feIE"),w=a("wOhW"),O=a("ApjV"),j=a("586Q"),k=a("ThpJ"),C=a("RKiZ"),_=a("7sPp"),T=a("QUga"),I=a("hfch"),S=a("NWnW");const D="rgba(255, 255, 255, 25%)",N=Object(s.d)(m.b).withConfig({displayName:"SideBar__Wrap",componentId:"sc-158a552-0"})(["--padding-offset:15px;display:flex;flex-direction:column;width:240px;height:100vh;background:var(--admin-color-accent);color:white;overflow:hidden;overflow-y:auto;@media only screen and (max-width:996px){width:62px;}"]),M=Object(s.d)(m.b).withConfig({displayName:"SideBar__Profile",componentId:"sc-158a552-1"})(["padding:var(--default-gap) var(--default-gap) 5px var(--default-gap);@media only screen and (max-width:996px){padding:var(--default-gap) var(--default-gap) 0 var(--default-gap);","{max-width:var(--input-height-s);max-height:var(--input-height-s);min-width:var(--input-height-s);min-height:var(--input-height-s);width:var(--input-height-s);height:var(--input-height-s);}}"],k.a),L=Object(s.d)(E.a).withConfig({displayName:"SideBar__Info",componentId:"sc-158a552-2"})(["grid-gap:0;"]),V=Object(s.d)(_.a).withConfig({displayName:"SideBar__Name",componentId:"sc-158a552-3"})(["font-size:var(--font-h4);font-weight:var(--font-weight-medium);"]),z=Object(s.d)(T.b).withConfig({displayName:"SideBar__Role",componentId:"sc-158a552-4"})(["color:",";"],D),A=s.d.div.withConfig({displayName:"SideBar__Strip",componentId:"sc-158a552-5"})(["display:flex;justify-content:space-between;align-items:center;padding:5px var(--default-gap);a{position:relative;padding:0 15px;transition:background 150ms ease;&.active,&:hover{background:#10151c;}}@media only screen and (max-width:480px){padding:5px 0;}"]),F=Object(s.d)(m.b).withConfig({displayName:"SideBar__Label",componentId:"sc-158a552-6"})(["align-items:center;"]),q=Object(s.d)(x.a).withConfig({displayName:"SideBar__LabelIcon",componentId:"sc-158a552-7"})(["width:var(--input-height-s);height:var(--input-height-s);background:var(--admin-color-accent-dim);border-radius:var(--surface-border-radius);"," @media only screen and (max-width:480px){background:var(--default-color-accent-dim);"," svg{path{stroke:var(--default-color-accent);","}}}"],(({active:e})=>e&&Object(s.c)(["background:white;"])),(({active:e})=>e&&Object(s.c)(["background:var(--default-color-accent);"])),(({active:e})=>e&&Object(s.c)(["stroke:white;"]))),R=Object(s.d)(T.b).withConfig({displayName:"SideBar__LabelText",componentId:"sc-158a552-8"})(["color:",";font-weight:var(--font-weight-medium);",""],D,(({active:e})=>e&&Object(s.c)(["color:white;"]))),P=({active:e,icon:t,text:a,count:n})=>l.a.createElement(A,null,l.a.createElement(F,null,l.a.createElement(q,{icon:t,size:"xs",stroke:e?"var(--default-color-accent)":D,active:e}),l.a.createElement(R,{active:e},a)),n&&l.a.createElement(I.a,{count:n,size:"xs",style:e?{}:{background:D,borderColor:"transparent",color:"var(--admin-color-accent)"}})),B=({user:e,link:t,links:a,...n})=>l.a.createElement(N,n,l.a.createElement(M,null,l.a.createElement(k.b,{src:e.avatar,alt:"Avatar",size:"m"}),l.a.createElement(L,null,l.a.createElement(V,null,e.name),l.a.createElement(z,null,Object(S.g)(e.role)))),l.a.createElement(C.a,{style:{background:"var(--admin-color-accent-dim)",margin:"10px 0"}}),a&&a.length>0&&a.map(((e,a)=>l.a.createElement(l.a.Fragment,{key:a},e.divide&&l.a.createElement(C.a,{style:{background:"var(--admin-color-accent-dim)",margin:"10px 0"}}),l.a.createElement(t,{href:e.path},e.component)))));B.defaultProps={link:({children:e,...t})=>l.a.createElement("a",t,e)};var W=B,Q=a("QclZ"),Z=a("ZwIX");const H=Object(s.d)(E.a).withConfig({displayName:"GlobalSearch__Wrap",componentId:"sc-1i2qzsl-0"})(["padding:var(--default-gap);"]),U=s.d.div.withConfig({displayName:"GlobalSearch__Loader",componentId:"sc-1i2qzsl-1"})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;flex-grow:1;"]),G=({result:e,search:t,loading:a,entities:i,initialEntity:c,appearance:r,style:o,className:d,onChange:s,onSubmit:p})=>{const[u,m]=Object(n.useState)(c),h=Object(n.useRef)(null);return Object(n.useEffect)((()=>{s&&s(u)}),[u,s]),l.a.createElement(H,{style:o,className:d,appearance:r},l.a.createElement(Q.a,{appearance:"ghost",defaultValue:u,placeholder:"\u0413\u0434\u0435 \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043a\u0430\u0442\u044c?",label:"\u0417\u043e\u043d\u0430 \u043f\u043e\u0438\u0441\u043a\u0430",options:i,onChange:e=>{m(e),null!==h&&void 0!==h&&h.current&&(h.current.value="",p&&p(""))},isLoading:a,isSearchable:!0,isClearable:!0}),!a&&u&&l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{ref:h,appearance:"ghost",placeholder:"\u041f\u043e\u0438\u0441\u043a",defaultValue:t,onSubmit:p}),(null===e||void 0===e?void 0:e.length)>0?e.map((e=>u.render&&l.a.createElement(l.a.Fragment,{key:e.id||e.email},u.render(e)))):l.a.createElement(Z.a,{style:{width:"100%",textAlign:"center",flexGrow:1}},"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")),a&&l.a.createElement(U,null,l.a.createElement(f.a,null)))};G.defaultProps={appearance:"clear"};var J=G,K=a("OqOz"),X=a("qOKH");const $=Object(n.memo)((({data:e,loading:t,search:a,entity:n,entities:i,onChange:c,onSubmit:r})=>{const o=Object(u.b)(),d=()=>o(Object(X.a)(null));return l.a.createElement(J,{search:a,loading:t,initialEntity:n,result:a&&e&&n&&e[null===n||void 0===n?void 0:n.value],entities:(i||[]).map((e=>({...e,render:t=>l.a.createElement(K.a,{key:t.id||t.email,item:t,appearance:"clear",component:e.render(t),onLink:d,onEdit:d,onDelete:d,withoutChecked:!0})}))),onSubmit:r,onChange:c})}));var Y=Object(n.memo)((({search:e,entity:t,entities:a,setSearch:n,onHide:i,onChange:c})=>{const[r,{data:o,loading:d,refetch:s}]=t?Object(p.useLazyQuery)(t.query):[null,{data:null,loading:!1,refetch:null}];return l.a.createElement($,{data:o,entity:t,search:e,loading:d,entities:a,onHide:i,onChange:c,onSubmit:e=>{const t={search:e};n&&n(e),e&&(s&&s(t),r&&r({variables:t}))}})})),ee=a("TsNn"),te=a("yEVw"),ae=a("UwjQ"),ne=a("1zqG"),le=a("4nJQ"),ie=a("4NP5"),ce=a("u2Cb");const re=[{value:"getUsers",label:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",singlePath:"user",originPath:"users",query:ce.a.GET_USERS,deleteQuery:ce.a.DELETE_USER,deleteEntityMultiText:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",deleteEntitySingleText:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",render:e=>l.a.createElement(ee.a,{user:e})},{value:"getCategories",label:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",singlePath:"category",originPath:"categories",query:ce.a.GET_CATEGORIES,deleteQuery:ce.a.DELETE_CATEGORY,deleteEntityMultiText:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",deleteEntitySingleText:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",render:e=>l.a.createElement(te.a,{category:e})},{value:"getArticles",label:"\u0421\u0442\u0430\u0442\u044c\u0438",singlePath:"article",originPath:"articles",query:ce.a.GET_ARTICLES,deleteQuery:ce.a.DELETE_ARTICLE,deleteEntityMultiText:"\u0421\u0442\u0430\u0442\u044c\u0438",deleteEntitySingleText:"\u0421\u0442\u0430\u0442\u044c\u044f",render:e=>l.a.createElement(ae.a,{article:e})},{value:"getProjects",label:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",singlePath:"project",originPath:"projects",query:ce.a.GET_PROJECTS,deleteQuery:ce.a.DELETE_PROJECT,deleteEntityMultiText:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",deleteEntitySingleText:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442",render:e=>l.a.createElement(ne.b,{project:e,preview:!0})},{value:"getTickets",label:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f",singlePath:"ticket",originPath:"tickets",query:ce.a.GET_TICKETS,deleteQuery:ce.a.DELETE_TICKET,deleteEntityMultiText:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f",deleteEntitySingleText:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435",render:e=>l.a.createElement(le.a,{ticket:e})},{value:"getRoles",label:"\u0420\u043e\u043b\u0438",singlePath:"role",originPath:"roles",query:ce.a.GET_ROLES,deleteQuery:ce.a.DELETE_ROLE,deleteEntityMultiText:"\u0420\u043e\u043b\u0438",deleteEntitySingleText:"\u0420\u043e\u043b\u044c",render:e=>l.a.createElement(ie.a,{role:e})}];var oe=({onJump:e,onHide:t})=>{const[a,i]=Object(n.useState)(null),[c,r]=Object(n.useState)(null);return l.a.createElement(Y,{search:c,entity:a,entities:re,setSearch:r,onChange:i,onJump:e,onHide:t})},de=a("+EEm"),se=a("8ihE"),pe=a("rOcY");var ue=e=>{const t=t=>e.find((e=>e===t)),a=[{path:"/",component:l.a.createElement(P,{icon:"activity",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}],n=t("VIEW_USER"),i=t("VIEW_CATEGORY"),c=t("VIEW_ARTICLE"),r=t("VIEW_PROJECT"),o=t("VIEW_TICKET"),d=t("VIEW_ROLE"),s=t("VIEW_USER");return n&&a.push({path:"/users",component:l.a.createElement(P,{icon:"user2",text:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),i&&a.push({path:"/categories",component:l.a.createElement(P,{icon:"folder",text:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"})}),c&&a.push({path:"/articles",component:l.a.createElement(P,{icon:"document",text:"\u0421\u0442\u0430\u0442\u044c\u0438"})}),r&&a.push({path:"/projects",component:l.a.createElement(P,{icon:"work",text:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"})}),o&&a.push({path:"/tickets",component:l.a.createElement(P,{icon:"ticket",text:"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f"})}),d&&a.push({divide:!0,path:"/roles",component:l.a.createElement(P,{icon:"lock",text:"\u0420\u043e\u043b\u0438"})}),s&&a.push({path:"/settings",component:l.a.createElement(P,{icon:"setting",text:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})}),a};const me=s.d.main.withConfig({displayName:"dashboard__Main",componentId:"sc-9r28sr-0"})(["display:flex;grid-gap:var(--default-gap);width:100%;"]),he=s.d.header.withConfig({displayName:"dashboard__Header",componentId:"sc-9r28sr-1"})(["position:fixed;top:0;left:0;z-index:var(--z-15);display:flex;grid-gap:var(--default-gap);background:var(--surface-background);border:var(--surface-border);box-shadow:var(--surface-shadow);padding:var(--default-gap);width:100%;flex-grow:100;"]),be=Object(s.d)(W).withConfig({displayName:"dashboard__SideBar",componentId:"sc-9r28sr-2"})(["position:fixed;top:70px;left:0;height:calc(100vh - 70px);z-index:var(--z-12);@media only screen and (max-width:480px){display:none;}"]),ge=Object(s.d)(y.a).withConfig({displayName:"dashboard__MenuButton",componentId:"sc-9r28sr-3"})(["display:none;@media only screen and (max-width:768px){display:flex;justify-content:center;align-items:center;}"]),fe=Object(s.d)(m.b).withConfig({displayName:"dashboard__LogoZone",componentId:"sc-9r28sr-4"})(["justify-content:space-between;@media only screen and (max-width:996px){width:auto;}"]),Ee=s.d.div.withConfig({displayName:"dashboard__Logotype",componentId:"sc-9r28sr-5"})(["display:flex;justify-content:flex-start;align-items:center;img{height:30px;object-fit:contain;}@media only screen and (max-width:996px){min-width:auto;}@media only screen and (max-width:480px){display:none;}"]),ye=Object(s.d)(h.a).withConfig({displayName:"dashboard__Content",componentId:"sc-9r28sr-6"})(["padding:70px 15px 15px 255px;flex-grow:1;@media only screen and (max-width:996px){padding:70px 15px 15px 80px;}@media only screen and (max-width:480px){padding:70px 15px 15px 15px;}"]);t.a=({children:e,title:t="\u041f\u0430\u043d\u0435\u043b\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"})=>{var a,i;const r=Object(O.b)(),s=Object(d.useRouter)(),{root:m,user:h}=Object(u.c)((e=>e)),[y,{data:k,loading:C}]=Object(p.useLazyQuery)(ce.a.GET_USER),_=Object(u.b)();return Object(n.useEffect)((()=>{localStorage.getItem(pe.a.get("secret"))?y():s.push("/")}),[]),Object(n.useEffect)((()=>{if(k&&k.getUser){var e;(null===(e=k.getUser.role)||void 0===e?void 0:e.permissions.find((e=>"ACCESS_DASHBOARD"===e)))?_(Object(se.c)(k.getUser)):s.push("/")}}),[k,_]),C||!h.authenticated?l.a.createElement(j.b,null,l.a.createElement(f.a,null)):l.a.createElement(w.a,null,l.a.createElement(c.a,null,l.a.createElement("meta",{name:"keywords",content:"next,javascript,nextjs,react"}),l.a.createElement("meta",{name:"description",content:m.settings.meta.description}),l.a.createElement("title",null,t)),l.a.createElement(he,null,l.a.createElement(ge,{kind:"icon",appearance:"clear",onClick:r(de.d,{links:ue((null===h||void 0===h?void 0:h.role.permissions)||[]).map(((e,t)=>({id:t,text:e.component,onClick:()=>s.push(`/dashboard${e.path}`)})))})},l.a.createElement(x.a,{icon:"menu"})),l.a.createElement(fe,null,l.a.createElement(g.b,{text:m.settings.meta.description,offset:{bottom:5},place:"bottom",maxWidth:256,multiline:!0},l.a.createElement(Ee,null,l.a.createElement(o.a,{href:"/"},l.a.createElement("a",null,l.a.createElement(v.a,{src:null===(a=m.settings.general.logotype)||void 0===a?void 0:a.path,alt:"Logotype"})))))),l.a.createElement(b.a,{appearance:"ghost",onClick:()=>_(Object(X.a)([{path:"/",title:"\u041f\u043e\u0438\u0441\u043a",component:({jump:e,close:t})=>l.a.createElement(oe,{onJump:e,onHide:t})}],"l")),disable:!0})),l.a.createElement(me,null,l.a.createElement(be,{user:{name:h.name,role:h.role.name,avatar:(null===h||void 0===h||null===(i=h.avatar)||void 0===i?void 0:i.path)||"/images/avatar-default.png"},link:o.a,links:ue((null===h||void 0===h?void 0:h.role.permissions)||[]).map(((e,t)=>{const a=`/dashboard${e.path.length>1?e.path:""}`;return{...e,path:a,component:l.a.createElement("a",{key:t,className:s.pathname===a?"active":""},l.a.cloneElement(e.component,{active:s.pathname===a}))}}))}),l.a.createElement(ye,null,l.a.createElement(E.a,null,e))))}}}]);
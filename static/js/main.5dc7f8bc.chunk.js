(this["webpackJsonpreact-scheduler-example"]=this["webpackJsonpreact-scheduler-example"]||[]).push([[0],{178:function(e,t,a){},269:function(e,t,a){e.exports=a(483)},454:function(e,t,a){},483:function(e,t,a){"use strict";a.r(t);a(178);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),i=a(176),o=a(256),s=a(498),u=a(49),d=a(492),m=a(125),f=a(494),h=a(499),p=a(491),v=a(489),y=a(219),E=a(500),g=a(501),D=a(502),S=a(503),b=a(26),w=a.n(b),x=a(495),N=a(496),C=a(490),A=a(144),O=a(497),T=a(171);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var k="_2YM-1",W={FullWidth:"_2QLmX",DateContainer:"_3ATJZ",icon:"_1CK_t",TaskCard:"_zW5Iq"},I=function(){var e=Object(n.useContext)(ue),t=e.updateConfig,a=e.config.currentDate,c=Object(n.useState)(a),l=c[0],i=c[1];return Object(n.useEffect)((function(){t({currentDate:l})}),[l]),r.a.createElement(s.a,null,r.a.createElement(u.a,{onClick:function(){i((function(e){return w()(e).subtract(1,"week")}))},style:{border:"none"},icon:r.a.createElement(D.a,null)}),r.a.createElement(d.a,{picker:"week",className:W.input,bordered:!1,value:l,onChange:function(e){i(e)},suffixIcon:null,allowClear:!1}),r.a.createElement(u.a,{onClick:function(){i((function(e){return w()(e).add(1,"week")}))},style:{border:"none"},icon:r.a.createElement(S.a,null)}))},M=function(){var e=Object(n.useState)("week"),t=e[0],a=e[1],c=Object(n.useContext)(ue).config.view;return r.a.createElement(s.a,null,r.a.createElement(m.default.Group,{onChange:function(e){var t=e.target.value;a(t)},value:t,style:{marginBottom:8}},c.map((function(e){return r.a.createElement(m.default.Button,{key:e.viewType,value:e.viewType},e.viewName)}))))},_=function(e){var t=e.shiftType,a=e.id,n=e.start,c=e.end,l=Object(x.a)({item:{type:"shift",id:a,shiftType:t,start:n,end:c},collect:function(e){return{isDragging:!!e.isDragging()}}})[1];return r.a.createElement("div",{className:W.TaskCard,ref:l},t)},H=function(){var e=Object(n.useContext)(ue).shiftTypes;return r.a.createElement(r.a.Fragment,null,!!e&&e.map((function(e){return r.a.createElement(_,{key:e.id,shiftType:e.name,id:e.id,start:e.start,end:e.end})})))},Y=f.a.Title,B=function(){var e=Object(n.useContext)(ue).config.schedulerTitle;return r.a.createElement(h.a,{className:W.FullWidth},r.a.createElement(Y,{className:W.Title},e),r.a.createElement(h.a,{justify:"space-between",className:W.FullWidth},r.a.createElement(h.a,{justify:"start",className:W.FullWidth},r.a.createElement(H,null)),r.a.createElement(h.a,{justify:"space-between",className:W.DateContainer},r.a.createElement(I,null),r.a.createElement(M,null))))},P="_1UjRX",V="_3AS-A",L="_3HC-T",F="_37gP-",z="_3DrwO",R="_3u4Yw",J="_13jgX",X=function(){var e=Object(n.useContext)(ue).config,t=e.resourceTitle,a=e.resourcesViewWidth;return r.a.createElement("div",{className:z,style:{width:a+"px"}},r.a.createElement("div",{className:J},r.a.createElement(p.a,{columns:[{title:t}],className:R,bordered:!1})))},U=function(e){var t=e.text,a=e.record,c=Object(n.useContext)(ue),l=c.config.cellHeight,i=c.displayAvatar,o=c.resourceCellContent,u={height:l+"px"},d=o(a,c.resources,c.events),m=r.a.createElement(s.a,null,r.a.createElement("p",null,t),o?d:null),f=i?r.a.createElement(s.a,{style:{marginRight:"1em"}},r.a.createElement(v.a,{size:"default"},t[0])):null;return r.a.createElement(h.a,{style:u,className:V,align:"middle",justify:"start"},f,m)},q=function(){var e=[{title:"",dataIndex:"name",key:"id",render:function(e,t){return r.a.createElement(U,{text:e,record:t})}}],t=Object(n.useContext)(ue),a=t.resources,c=t.config.resourcesViewWidth;return r.a.createElement(A.ScrollSyncPane,{group:"1"},r.a.createElement("div",{className:L,style:{width:c+"px",maxHeight:"360px"}},r.a.createElement("div",{className:F},r.a.createElement(p.a,{columns:e,pagination:!1,size:"large",dataSource:a,bordered:!1}))))},G=function(){var e=Object(n.useContext)(ue).config.resourcesViewWidth;return r.a.createElement("div",{className:P,style:{width:e+"px"}},r.a.createElement(X,null),r.a.createElement(q,null))},K="_YR-ji",Q="_3t4xf",Z="_12EAv",$="_3U-7D",ee="_2062W",te="_1ajfu",ae="_1vXVj",ne="_2BneO",re=function(e){var t=e.days,a=Object(n.useContext)(ue).config.schedulerViewWidth,c=t.map((function(e){return{title:e.format("ddd DD/MM"),width:a/7}}));return r.a.createElement("div",{className:te},r.a.createElement("div",{className:ne},r.a.createElement("div",{style:{width:a+"px"}},r.a.createElement(p.a,{columns:c,pagination:!1,bordered:!1,className:ae}))))},ce=function(e){return e+"px"},le=function(e){var t,a=e.cellData,c=void 0===a?{}:a,l=e.children,i=e.date,o=c.slotId,s=c.resource,u=Object(n.useContext)(ue),d=u.config,m=d.cellBgColor,f=d.cellBgHoverColor,h=d.cellHeight,p=d.cellPadding,v=d.dateFormat,E=d.schedulerViewWidth,g=u.onShiftDrop,D=Object(N.a)({accept:"shift",drop:function(e,t){var a={id:Object(O.a)(),event:{date:i.format(v),start:e.start,end:e.end,shiftType:e.shiftType},slotId:o,resource:s},n=0!==c.event.filter((function(e){return e.date===i.format(v)})).length;0===c.length||!1===n?g(a):y.a.error("Employee already had a shift")},collect:function(e){return{isOver:!!e.isOver()}}}),S=D[0].isOver,b=D[1],w={backgroundColor:S?f:m,height:ce(h),padding:(t=p,t[0]+"px "+t[1]+"px "+t[2]+"px "+t[3]+"px"),width:E/7};return r.a.createElement("div",{ref:b,style:w,className:K},l)},ie=function(e){var t=e.event,a=Object(n.useContext)(ue),c=a.config.cellPopoverWidth,l=a.firstAction,i=a.secondAction,o=a.firstActionName,s=void 0===o?"Action 1":o,d=a.secondActionName,m=void 0===d?"Action 2":d,f=t.shiftType,p=t.start,v=t.end,y={width:c};return r.a.createElement(h.a,{style:y},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"blue"}),""+f),r.a.createElement("p",{className:Z},p+" - "+v),r.a.createElement(h.a,null,r.a.createElement(u.a,{type:"text",onClick:l},s),r.a.createElement(u.a,{type:"text",onClick:i},m)))},oe=function(e){for(var t=e.days,a=Object(n.useContext)(ue),c=a.config,l=c.dateFormat,i=c.schedulerViewWidth,o=a.events,s=a.resources,u=a.resourcesList,d=[],m=0;m<s.length;m++)d.push({slotId:m,event:[],resource:u[m]});return o.forEach((function(e){d[e.slotId].event.push(j({},e.event,{id:e.id,slotId:e.slotId,resource:e.resource}))})),r.a.createElement(A.ScrollSyncPane,{group:"1"},r.a.createElement("div",{className:ee},r.a.createElement("div",{style:{width:i+"px",maxHeight:"360px"}},r.a.createElement(p.a,{size:"large",columns:t.map((function(e){return{title:"",key:e.format(l),dataIndex:"event",render:function(t,a,n){var c=a.event;return 0!==c.filter((function(t){return t.date===e.format(l)})).length?c.map((function(t,c){try{return t.date===e.format(l)&&t.slotId===n?r.a.createElement(g.a,{content:r.a.createElement(ie,{event:t}),placement:"bottom",trigger:"hover"},r.a.createElement("div",null,r.a.createElement(le,{key:n,cellData:a,date:e},t.shiftType))):null}catch(i){}})):r.a.createElement(le,{key:n,cellData:a,date:e})}}})),dataSource:d,pagination:!1,bordered:!1,className:$}))))},se=function(){for(var e=Object(n.useContext)(ue).config,t=e.currentDate,a=e.schedulerViewWidth,c=w()(t).startOf("week"),l=[],i=0;i<=6;i++)l.push(w()(c).add(i,"days"));return r.a.createElement("div",{className:Q,style:{width:a+1+"px"}},r.a.createElement(re,{days:l}),r.a.createElement(oe,{days:l}))},ue=Object(n.createContext)(null),de={Day:"day",Week:"week",Month:"month"},me=function(e){var t=e.resources,a=e.shiftTypes,c=e.events,l=e.resourceCellContent,i=e.displayAvatar,o=e.config,s=e.firstAction,u=e.secondAction,d=e.firstActionName,m=e.secondActionName,f=e.onShiftDrop,h=e.getSchedulerData,p=Object(n.useState)(window.innerWidth),v=p[0],y=p[1];window.addEventListener("resize",(function(){return y(Math.floor(window.innerWidth))}));var E=t.map((function(e){return e.name})),g=!!c&&c.map((function(e){return j({},e,{slotId:E.indexOf(e.resource)})})),D=.9*v,S=Math.floor(.9*v)-7*Math.floor(.9*v*.8/7),b=7*Math.floor(.9*v*.8/7),x=Object(n.useState)(j({currentDate:w()(),locale:"en",schedulerTitle:"React simple scheduler",schedulerWidth:.9*v,resourcesViewWidth:S,schedulerViewWidth:b,cellBgColor:"#ffffff",cellBgHoverColor:"#fafafa",cellHeight:55,cellPadding:[8,12,8,12],dateFormat:"DD/MM/YYYY",cellPopoverWidth:"200px",resourceTitle:"Resources",view:[{viewName:"Week",viewType:de.Week}]},o)),N=x[0],O=x[1];w.a.locale(N.locale);var W={config:N,resources:t,events:g,shiftTypes:a,resourcesList:E,displayAvatar:i,windowWidth:v,updateConfig:function(e){O((function(t){return j({},t,e)}))},onShiftDrop:f,resourceCellContent:l,firstAction:s,secondAction:u,firstActionName:d||"Action 1",secondActionName:m||"Action 2"};return Object(n.useEffect)((function(){h(W)}),[W]),r.a.createElement(C.a,{backend:T.a},r.a.createElement(ue.Provider,{value:W},r.a.createElement(A.ScrollSync,null,r.a.createElement("div",{className:k,style:{width:D+"px"}},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2"},r.a.createElement(B,null)))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{width:S+"px"}},r.a.createElement(G,null)),r.a.createElement("td",{style:{width:b+"px"}},r.a.createElement(se,null)))))))))},fe=(a(454),a(455),a(493));const he=[{id:0,event:{date:"05/08/2020",shiftType:"Shift 1",start:"19:00",end:"23:30"},resource:"Pham Duc Minh Pham Duc Minh Pham Duc Minh"},{id:1,event:{date:"05/08/2020",start:"06:30",end:"11:30",shiftType:"Shift 2"},resource:"Huynh Lam"},{id:2,event:{date:"06/08/2020",start:"06:30",end:"11:30",shiftType:"Shift 3"},resource:"Huynh Lam"},{id:3,event:{date:"06/07/2020",start:"06:30",end:"11:30",shiftType:"Shift 1"},resource:"Huynh Lam"},{id:4,event:{date:"09/08/2020",start:"06:30",end:"11:30",shiftType:"Shift 2"},resource:"Hoang Thi Thu Hien"},{id:5,event:{date:"07/08/2020",start:"06:30",end:"11:30",shiftType:"Shift 3"},resource:"Hoang Thi Thu Hien"}],pe=[{id:0,name:"Shift 1",start:"6:30",end:"11:30"},{id:1,name:"Shift 2",start:"11:00",end:"16:00"},{id:2,name:"Shift 3",start:"15:00",end:"20:00"},{id:3,name:"Shift 4",start:"19:00",end:"23:30"}],ve=[{name:"Pham Duc Minh Pham Duc Minh Pham Duc Minh",role:"Team Lead",id:0},{name:"Huynh Lam",id:1,role:"DevOps Engineer"},{name:"Hoang Thi Thu Hien",id:2,role:"Admin"},{name:"Ngo Duc Duy",id:3,role:"BASIS"},{name:"Ngo Duc Duy",id:4,role:"BASIS"},{name:"Ngo Duc Duy",id:5,role:"BASIS"},{name:"Ngo Duc Duy",id:6,role:"BASIS"},{name:"Ngo Duc Duy",id:7,role:"BASIS"},{name:"Ngo Duc Duy",id:8,role:"BASIS"},{name:"Ngo Duc Duy",id:9,role:"BASIS"},{name:"Ngo Duc Duy",id:10,role:"BASIS"},{name:"Ngo Duc Duy",id:11,role:"BASIS"},{name:"Ngo Duc Duy",id:12,role:"BASIS"}];var ye=()=>{const e={cellHeight:"65",currentDate:w()("05/08/2020","DD/MM/YYYY")},t=Object(n.useState)({events:he,shiftTypes:pe,resources:ve}),a=Object(o.a)(t,2),c=a[0],l=a[1],s=c.events,u=c.shiftTypes,d=c.resources;return r.a.createElement("div",{className:"ScheudlerContainer"},r.a.createElement(me,{events:s,resources:d,shiftTypes:u,displayAvatar:!0,resourceCellContent:(e,t,a)=>{const n=w()().startOf("month"),c=w()().endOf("month"),l={margin:"0"},i=a.filter(t=>t.resource===e.name&&n<w()(t.event.start,"DD/MM/YYYY")&&w()(t.event.start,"DD/MM/YYYY")<c);return r.a.createElement("div",{style:{fontSize:"10px",display:"block"}},r.a.createElement("p",{style:l},e.role),r.a.createElement("p",{style:l},"S\u1ed1 ca trong th\xe1ng: ".concat(i.length)))},config:e,firstAction:()=>{fe.b.success("Action 1")},secondAction:()=>{fe.b.success("Action 2")},firstActionName:"Delete",secondActionName:"Swap",onShiftDrop:e=>{fe.b.success(JSON.stringify(e)),l(t=>Object(i.a)(Object(i.a)({},t),{},{events:[...t.events,e]}))},getSchedulerData:e=>{console.log(e)}}))};l.a.render(r.a.createElement(ye,null),document.getElementById("root"))}},[[269,1,2]]]);
//# sourceMappingURL=main.5dc7f8bc.chunk.js.map
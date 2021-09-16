(this.webpackJsonprectangles=this.webpackJsonprectangles||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var r,a=n(0),i=n.n(a),c=n(19),o=n.n(c),s=(n(33),n(34),n(16)),h=n(3),d=n(17),u=n(18),j=u.c,l=n(9),b=n(12),x=n.n(b),p=n(20),g=n(11),f=function(t){return t.project&&t.project.items&&!t.project.items.some((function(t){return!Number.isInteger(t.width)||!Number.isInteger(t.height)||!Number.isInteger(t.rotation)}))};!function(t){t.idle="idle",t.loading="loading",t.failed="failed"}(r||(r={}));var m,O={id:"",project:{id:"",name:"",width:0,height:0,items:[]}},v={error:0,message:""},w={projectData:O,status:r.idle,error:v},y=Object(g.b)("projects/fetchById",function(){var t=Object(p.a)(x.a.mark((function t(e,n){var r,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://recruitment01.vercel.app/api/project/".concat(e));case 2:if((r=t.sent).ok){t.next=5;break}return t.abrupt("return",n.rejectWithValue({error:1,message:r.statusText}));case 5:return t.next=7,r.json();case 7:if(a=t.sent,f(a)){t.next=10;break}return t.abrupt("return",n.rejectWithValue({error:1,message:"Invalid project data"}));case 10:return t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),k=(Object(g.b)("projects/init",Object(p.a)(x.a.mark((function t(){var e;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://recruitment01.vercel.app/api/init");case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))),Object(g.b)("projects/initAndFetch",function(){var t=Object(p.a)(x.a.mark((function t(e,n){var r,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://recruitment01.vercel.app/api/init");case 3:return r=t.sent,t.next=6,r.json();case 6:a=t.sent,n.dispatch(y(a.id)),t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",n.rejectWithValue(t.t0));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}())),D=Object(g.c)({name:"canvas",initialState:w,reducers:{updateProject:function(t,e){t.projectData=e.payload}},extraReducers:function(t){t.addCase(y.pending,(function(t){t.status=r.loading,t.error=v})).addCase(y.fulfilled,(function(t,e){t.status=r.idle,t.error=v,t.projectData=e.payload})).addCase(y.rejected,(function(t,e){t.error=e.payload,t.projectData=Object(l.a)({},O)}))}}),S=(D.actions.updateProject,function(t){return t.canvas.projectData.project}),C=function(t){return t.canvas.status},I=function(t){return t.canvas.error},M=D.reducer,W=n(1);!function(t){t.width="width",t.height="height"}(m||(m={}));var z=function(t,e){var n=t.rotation-360*Math.floor(t.rotation/360),r=t.width,a=t.height,i=Math.abs(Math.cos(Math.PI*n/180)),c=Math.abs(Math.sin(Math.PI*n/180));return e===m.height?r*c+a*i:r*i+a*c};function B(t){var e,n=t.rectData,r=n.x,a=n.y,i=n.width,c=n.height,o=n.rotation,s=n.color,h=function(t,e){return"translate(".concat(t,", ").concat(e,")")},d=Object(l.a)(Object(l.a)({},t.rectData),{},{width:z(t.rectData,m.width),height:z(t.rectData,m.height)}),u=function(t){var e=t.substring(1,7);return.299*parseInt(e.substring(0,2),16)+.587*parseInt(e.substring(2,4),16)+.114*parseInt(e.substring(4,6),16)>186?"#000000":"#ffffff"}(s);return Object(W.jsxs)("g",{children:[Object(W.jsx)("rect",{fill:"none",strokeWidth:"2",stroke:"red",x:r,y:a,width:d.width,height:d.height,transform:h(-d.width/2,-d.height/2)}),Object(W.jsx)("rect",{fill:s,width:i,height:c,transform:(e=t.rectData,"".concat(h(e.x,e.y)," ").concat(function(t){return"rotate(".concat(t,")")}(e.rotation)," ").concat(h(-e.width/2,-e.height/2)))}),Object(W.jsx)("circle",{cx:r,cy:a,r:"4",fill:u}),Object(W.jsxs)("text",{x:r+10,y:a+10,fill:u,children:[o,"\xb0"]})]})}function F(t){var e=t.viewData,n=e.width,r=e.height;return Object(W.jsx)("svg",{viewBox:function(t,e){return"0 0 ".concat(t," ").concat(e)}(n,r),width:"100%",height:"100%",children:t.items.map((function(t){return Object(W.jsx)(B,{rectData:t},t.id)}))})}var P,N,V,A,J,R,T=n(13),E=n(14),H=E.a.div(P||(P=Object(T.a)(["\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),L=E.a.div(N||(N=Object(T.a)(["\n    width: auto;\n    height: 70%;\n    background: white;\n    border: 1px solid #777;\n    box-shadow: 0 0 20px #ddd;\n    margin: 1em;\n\n    @media (max-width: 768px) {\n        height: 50%;\n    }\n"]))),$=E.a.button(V||(V=Object(T.a)(["\n    padding: 10px 24px;\n    background: #55aa88;\n    border: none;\n    color: black;\n    border-radius: 0 7px 7px 0;\n    font-size: 1.1em;\n    cursor: pointer;\n    margin-right: 1em;\n\n    &:hover {\n        opacity: 0.8;\n    }\n"]))),q=E.a.input(A||(A=Object(T.a)(["\n    padding: 10px;\n    border: 1px #888 solid;\n    border-radius: 7px 0 0 7px;\n"]))),G=E.a.div(J||(J=Object(T.a)(['\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 50%;\n    margin: 0 auto;\n\n    @media (max-width: 768px) {\n        margin: 0;\n        width: 100%;\n    \n        & input[type="number"] {\n            width: 30%;\n        }\n    }\n']))),K=E.a.div(R||(R=Object(T.a)(["\n    background: white;\n    margin: 2em auto;\n    width: 80vw;\n    height: 60vh;\n    border: 1px solid #777;\n    box-shadow: 0 0 20px #ddd;\n\n    @media (max-width: 768px) {\n        & h3 {\n            margin: 0.3em auto;\n        }\n    }\n"])));function Q(){var t=j(S),e=j(C),n=j(I),i=Object(u.b)(),c=Object(a.useState)(""),o=Object(d.a)(c,2),h=o[0],l=o[1];return Object(W.jsxs)(H,{children:[Object(W.jsx)(s.b,{to:"/playground",children:"Playground"}),Object(W.jsxs)("div",{style:{display:"flex"},children:[Object(W.jsx)(q,{type:"text",placeholder:"enter project id",value:h,onChange:function(t){return l(t.target.value)}}),Object(W.jsx)($,{onClick:function(){i(h?y(h):k())},children:"Fetch"})]}),n&&n.message?Object(W.jsx)("h2",{style:{color:"red"},children:n.message}):e===r.loading?Object(W.jsx)("h2",{children:"Loading..."}):Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("span",{style:{margin:"10px auto",fontWeight:700},children:t.name}),Object(W.jsx)(L,{children:Object(W.jsx)(F,{items:t.items,viewData:{width:t.width,height:t.height}})})]})]})}function U(){var t=Object(a.useState)(0),e=Object(d.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)(200),c=Object(d.a)(i,2),o=c[0],h=c[1],u=Object(a.useState)(300),j=Object(d.a)(u,2),b=j[0],x=j[1],p=function(t,e,n){return!t||t<e?e:t>n?n:t},g=function(t){r(p(t.target.value,0,360))},f=function(t){h(p(t.target.value,100,400))},O=function(t){x(p(t.target.value,100,400))},v={id:"1",width:o,height:b,x:300,y:300,color:"#33ca90",rotation:n},w=Object(l.a)(Object(l.a)({},v),{},{width:z(v,m.width),height:z(v,m.height)});return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(s.b,{style:{marginTop:"20px"},to:"/",children:"Back"}),Object(W.jsxs)(K,{children:[Object(W.jsxs)("svg",{viewBox:"0 0 600 600",width:"100%",height:"100%",children:[Object(W.jsx)(B,{rectData:v}),Object(W.jsx)("text",{x:"-500",y:"100",fontSize:"1.4em",fill:"black",children:"border width"}),Object(W.jsx)("text",{x:"-500",y:"130",fontSize:"1.2em",fill:"black",children:"width*cos(alpha) + height*sin(alpha)"}),Object(W.jsx)("text",{x:"-300",y:"100",fontSize:"1.2em",fill:"red",children:w.width.toFixed(2)}),Object(W.jsx)("text",{x:"-500",y:"210",fontSize:"1.4em",fill:"black",children:"border height"}),Object(W.jsx)("text",{x:"-500",y:"240",fontSize:"1.2em",fill:"black",children:"width*sin(alpha) + height*cos(alpha)"}),Object(W.jsx)("text",{x:"-300",y:"210",fontSize:"1.2em",fill:"red",children:w.height.toFixed(2)})]}),Object(W.jsx)("h3",{children:"Rotation"}),Object(W.jsxs)(G,{children:[Object(W.jsx)("input",{type:"range",id:"rotation",name:"rotation",min:"0",max:"360",value:n,step:"1",onChange:g}),Object(W.jsx)(q,{type:"number",value:n,min:"0",max:"360",onChange:g})]}),Object(W.jsx)("h3",{children:"Width"}),Object(W.jsxs)(G,{children:[Object(W.jsx)("input",{type:"range",id:"width",name:"width",min:"100",max:"400",value:o,step:"1",onChange:f}),Object(W.jsx)(q,{type:"number",value:o,min:"100",max:"400",onChange:f})]}),Object(W.jsx)("h3",{children:"Height"}),Object(W.jsxs)(G,{children:[Object(W.jsx)("input",{type:"range",id:"height",name:"height",min:"100",max:"400",value:b,step:"1",onChange:O}),Object(W.jsx)(q,{type:"number",value:b,min:"100",max:"400",onChange:O})]})]})]})}var X=function(){return Object(W.jsx)("div",{className:"App",children:Object(W.jsx)(s.a,{children:Object(W.jsxs)(h.d,{children:[Object(W.jsx)(h.a,{exact:!0,from:"/",to:"/rectangles"}),Object(W.jsx)(h.b,{path:"/playground",children:Object(W.jsx)(U,{})}),Object(W.jsx)(h.b,{path:"/rectangles",children:Object(W.jsx)(Q,{})})]})})})},Y=Object(g.a)({reducer:{canvas:M}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(W.jsx)(i.a.StrictMode,{children:Object(W.jsx)(u.a,{store:Y,children:Object(W.jsx)(X,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.4377ffda.chunk.js.map
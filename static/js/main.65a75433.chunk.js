(this["webpackJsonptodo-manager"]=this["webpackJsonptodo-manager"]||[]).push([[0],{185:function(e,t){},187:function(e,t){},201:function(e,t){},203:function(e,t){},231:function(e,t){},233:function(e,t){},234:function(e,t){},239:function(e,t){},241:function(e,t){},247:function(e,t){},249:function(e,t){},268:function(e,t){},280:function(e,t){},283:function(e,t){},301:function(e,t,n){},304:function(e,t,n){},305:function(e,t,n){},306:function(e,t,n){},307:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(166),r=n.n(i),s=n(11),o=n(1),l=a.a.createContext();function j(e){var t=null===JSON.parse(localStorage.getItem("todo-settings"))?{displayCompleted:!0,itemsPerPage:3}:JSON.parse(localStorage.getItem("todo-settings"));console.log("retrieved values",t);var n=Object(c.useState)(t.displayCompleted),a=Object(s.a)(n,2),i=a[0],r=a[1],j=Object(c.useState)(t.itemsPerPage||3),d=Object(s.a)(j,2),u=d[0],b=d[1];Object(c.useEffect)((function(){var e={displayCompleted:i,itemsPerPage:u};console.log(e),localStorage.setItem("todo-settings",JSON.stringify(e))}));var O={displayCompleted:i,itemsPerPage:u,setDisplayCompleted:r,setItemsPerPage:b};return Object(o.jsx)(l.Provider,{value:O,children:e.children})}var d=n(101),u=n.n(d),b=n(102),O=n.n(b),f={admin:{password:"password",name:"Administrator",role:"admin",capabilities:["create","read","update","delete"]},editor:{password:"password",name:"Editor",role:"editor",capabilities:["read","update"]},writer:{password:"password",name:"Writer",role:"writer",capabilities:["read","create"]},guest:{password:"password",name:"Guest",role:"guest",capabilities:["read"]}},h=a.a.createContext();function p(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(null),l=Object(s.a)(r,2),j=(l[0],l[1]),d=Object(c.useState)({username:"",token:"",capabilities:[]}),b=Object(s.a)(d,2),p=b[0],m=b[1];function x(e){try{g(!0,u.a.verify(e,Object({NODE_ENV:"production",PUBLIC_URL:"/todo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SECRET),e)}catch(t){g(!1,{},null),console.log("token verification failed",t)}}function g(e,t,n){O.a.save("auth",n),i(e),m(t),j(n)}Object(c.useEffect)((function(){var e=new URLSearchParams(window.location.search),t=O.a.load("auth");x(e.get("token")||t||null)}),[]);var v={loggedIn:a,login:function(e){if(e.username){var t=f[e.username];x(u.a.sign(t,Object({NODE_ENV:"production",PUBLIC_URL:"/todo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SECRET))}},logout:function(){g(!1,{},null)},can:function(e){var t;return null===p||void 0===p||null===(t=p.capabilities)||void 0===t?void 0:t.includes(e)}};return Object(o.jsx)(h.Provider,{value:v,children:e.children})}n(301);var m=n(4),x=n(32),g=n(343),v=n(55);function S(){var e=Object(c.useContext)(h),t=Object(c.useState)({}),n=Object(s.a)(t,2),a=n[0],i=n[1],r=function(e){i((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(m.a)({},e.target.name,e.target.value))}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(v.a,{condition:e.loggedIn,children:Object(o.jsx)(g.a,{color:"success",variant:"contained",onClick:e.logout,children:"Log Out"})}),Object(o.jsx)(v.a,{condition:!e.loggedIn,children:Object(o.jsxs)("form",{onSubmit:function(t){t&&t.preventDefault(),e.login(a)},children:[Object(o.jsx)("input",{onChange:r,name:"username",placeholder:"username"})," ",Object(o.jsx)("input",{onChange:r,name:"password",placefolder:"password"})," ",Object(o.jsx)(g.a,{color:"success",variant:"contained",type:"submit",children:"LOG IN"})]})})]})}var C=function(){return Object(o.jsxs)("header",{children:[Object(o.jsx)("h1",{children:"Header"}),Object(o.jsx)(S,{})]})},y=n(15),P=n(345),E=n(344),T=function(e){var t=Object(c.useState)({}),n=Object(s.a)(t,2),a=n[0],i=n[1];return{handleChange:function(e){i((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(m.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(Object(x.a)(Object(x.a)({},a),{},{difficulty:t.target.difficulty.value})),console.log(t.target.difficulty.value),i((function(e){return{text:e.text,assignee:e.assignee}}))},values:a}};function _(e){var t=Object(c.useContext)(h),n=t.loggedIn,a=t.can(e.capability);return Object(o.jsx)(v.a,{condition:n&&a,children:e.children})}var I=n(339),w=n(338),D=n(335);n(304);function N(e){var t=e.list,n=e.toggleComplete,a=e.deleteItem,i=Object(c.useContext)(l).itemsPerPage,r=Object(c.useState)(0),j=Object(s.a)(r,2),d=j[0],u=j[1],b=Object(c.useState)([]),O=Object(s.a)(b,2),f=O[0],h=O[1],p=Object(c.useState)([]),m=Object(s.a)(p,2),x=m[0],v=m[1],S=Object(c.useState)(1),C=Object(s.a)(S,2),y=C[0],P=C[1];function T(e){for(var n=[],c=0;c<t.length/i;c++)n.push(c+1);v(n);var a=t.slice(d,d+i);0===a.length&&t.length&&I(d-i),"startover"===e&&I(0),h(a)}function I(e){u(e),P(e/i+1)}return Object(c.useEffect)((function(){T("stay")}),[t,d]),Object(c.useEffect)((function(){u(0),T("startover")}),[i]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"results",children:f.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"item-delete",children:[Object(o.jsx)("p",{children:e.text}),Object(o.jsx)(_,{capability:"delete",children:Object(o.jsx)(g.a,{color:"error",size:"small",onClick:function(){return a(e.id)},children:"X"})})]}),Object(o.jsx)("p",{children:Object(o.jsxs)("small",{children:["Assigned to: ",e.assignee]})}),Object(o.jsx)("p",{children:Object(o.jsxs)("small",{children:["Difficulty: ",e.difficulty]})}),Object(o.jsx)(_,{capability:"update",children:Object(o.jsxs)("button",{onClick:function(){return n(e.id)},children:["Complete: ",e.complete.toString()]})}),Object(o.jsx)("hr",{})]},t)}))}),Object(o.jsx)(E.a,{alignSelf:"center",children:0===t.length?"":Object(o.jsx)(D.a,{spacing:2,children:Object(o.jsx)(w.a,{sx:{margin:"auto"},count:x.length,page:y,onChange:function(e,t){I((t-1)*i)}})})})]})}n(305);function A(e){var t=e.handleSubmit,n=e.handleChange;return Object(o.jsx)(P.a,{children:Object(o.jsx)(E.a,{p:2,children:Object(o.jsxs)("form",{className:"input-form",onSubmit:t,children:[Object(o.jsx)("h2",{children:"Add To Do Item"}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("p",{children:"To Do Item"}),Object(o.jsx)("input",{onChange:n,name:"text",type:"text",placeholder:"Item Details"})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("p",{children:"Assigned To"}),Object(o.jsx)("input",{onChange:n,name:"assignee",type:"text",placeholder:"Assignee Name"})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("p",{children:"Difficulty"}),Object(o.jsx)("input",{onChange:n,defaultValue:3,type:"range",min:1,max:5,name:"difficulty"})]})}),Object(o.jsx)("div",{children:Object(o.jsx)(g.a,{type:"submit",variant:"outlined",children:"Add Item"})})]})})})}var R=n(341),k=n(340);function L(){var e=Object(c.useContext)(l);return Object(o.jsx)(R.a,{label:"Show Completed",control:Object(o.jsx)(k.a,{checked:e.displayCompleted,onChange:function(){e.setDisplayCompleted(!e.displayCompleted)},inputProps:{"aria-label":"controlled"}})})}var F=n(346);function H(){var e=Object(c.useContext)(l);function t(t){e.setItemsPerPage(Number(t.target.value))}return Object(o.jsx)(R.a,{label:"Items Per Page",control:Object(o.jsx)(F.a,{color:"primary","aria-label":"outlined primary button group",children:[3,5,7,10].map((function(n,c){return Object(o.jsx)(E.a,{m:1,children:Object(o.jsx)(g.a,{variant:n==e.itemsPerPage?"outlined":"contained",onClick:t,value:n,children:n})},c)}))})})}var W=n(347);function K(){return Object(o.jsx)(E.a,{sx:{width:"fit-content"},children:Object(o.jsx)(P.a,{children:Object(o.jsx)(E.a,{p:2,children:Object(o.jsxs)(W.a,{children:[Object(o.jsx)(L,{}),Object(o.jsx)(H,{})]})})})})}n(306);var J=function(){var e=Object(c.useContext)(l),t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),j=Object(s.a)(r,2),d=j[0],u=j[1],b=T((function(e){e.id=Object(I.a)(),e.complete=!1,i([].concat(Object(y.a)(a),[e]))})),O=b.handleChange,f=b.handleSubmit;return Object(c.useEffect)((function(){var e=a.filter((function(e){return!e.complete})).length;u(e)}),[a]),Object(c.useEffect)((function(){document.title="To Do List: ".concat(d)}),[d]),Object(o.jsxs)("div",{className:"main-box",children:[Object(o.jsxs)("h1",{className:"list-heading",children:["To Do List: ",d," items pending"]}),Object(o.jsxs)("div",{className:"todo-box",children:[Object(o.jsxs)("div",{className:"input-settings",children:[Object(o.jsx)(_,{capability:"create",children:Object(o.jsx)(A,{handleSubmit:f,handleChange:O})}),Object(o.jsx)(K,{})]}),Object(o.jsx)("div",{className:"my-list",children:Object(o.jsx)(P.a,{children:Object(o.jsx)(E.a,{p:2,children:Object(o.jsx)(N,{list:e.displayCompleted?a:a.filter((function(e){return!e.complete})),toggleComplete:function(e){var t=a.map((function(t){return t.id===e&&(t.complete=!t.complete),t}));i(t)},deleteItem:function(e){var t=a.filter((function(t){return t.id!==e}));i(t)}})})})})]})]})};function U(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j,{children:Object(o.jsxs)(p,{children:[Object(o.jsx)(C,{}),Object(o.jsx)(_,{capability:"read",children:Object(o.jsx)(J,{})})]})})})}function B(){return Object(o.jsx)(U,{})}var V=document.getElementById("root");r.a.render(Object(o.jsx)(B,{}),V)}},[[307,1,2]]]);
//# sourceMappingURL=main.65a75433.chunk.js.map
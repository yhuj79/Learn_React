(()=>{"use strict";var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};require("react");const r=require("react-dom/client");var t=e.n(r);const n=require("react-router-dom"),s=require("react/jsx-runtime"),i=function(){return(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(n.Link,{to:"/red",children:"Red"})}),(0,s.jsx)("li",{children:(0,s.jsx)(n.Link,{to:"/blue",children:"Blue"})})]})},o=function(){return(0,s.jsx)("div",{className:"Red",children:"Red"})},u=function(){return(0,s.jsx)("div",{className:"Blue",children:"Blue"})},c=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(i,{}),(0,s.jsx)("hr",{}),(0,s.jsxs)(n.Routes,{children:[(0,s.jsx)(n.Route,{path:"/red",element:(0,s.jsx)(o,{})}),(0,s.jsx)(n.Route,{path:"/blue",element:(0,s.jsx)(u,{})})]})]})};t().createRoot(document.getElementById("root")).render((0,s.jsx)(n.BrowserRouter,{children:(0,s.jsx)(c,{})}))})();
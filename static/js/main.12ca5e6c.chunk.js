(this.webpackJsonpmy_calculator=this.webpackJsonpmy_calculator||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},37:function(t,e){},38:function(t,e,n){"use strict";n.r(e);var c=n(6),a=n.n(c),o=n(19),s=n.n(o),i=(n(26),n(27),n(5)),l=n(40),r=n(1);var j=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),s=Object(i.a)(o,2),j=s[0],b=s[1],u=Object(c.useState)(!0),d=Object(i.a)(u,2),m=d[0],O=d[1],x=function(t){"operators"===t.target.className&&!1===m&&""!==n||("operators"===t.target.className?O(!1):O(!0),b((function(e){return e+t.target.name})))};return Object(c.useEffect)((function(){!1!==m&&(isNaN(Number(j.charAt(j.length-1)))?a(l.a(j.substring(0,j.length-1))):a(l.a(j)))}),[j,m]),Object(r.jsxs)("div",{className:"work-box",children:[Object(r.jsx)("input",{type:"text",id:"data",value:j}),""===j?Object(r.jsx)("input",{type:"text",id:"data",value:j}):Object(r.jsx)("input",{type:"text",value:n}),Object(r.jsx)("button",{className:"operators",id:"clearClass",onClick:function(){b(""),a("")},children:"AC"}),Object(r.jsx)("button",{className:"operators",id:"delId",onClick:function(){b(j.substring(0,j.length-1))},children:"C"}),Object(r.jsx)("button",{name:"+/-",className:"operators",onClick:function(){},children:"+/-"}),Object(r.jsx)("button",{name:"/",className:"operators",onClick:x,children:"/"}),Object(r.jsx)("button",{name:"7",onClick:x,children:"7"}),Object(r.jsx)("button",{name:"8",onClick:x,children:"8"}),Object(r.jsx)("button",{name:"9",onClick:x,children:"9"}),Object(r.jsx)("button",{name:"*",className:"operators",onClick:x,children:"x"}),Object(r.jsx)("button",{name:"4",onClick:x,children:"4"}),Object(r.jsx)("button",{name:"5",onClick:x,children:"5"}),Object(r.jsx)("button",{name:"6",onClick:x,children:"6"}),Object(r.jsx)("button",{name:"-",className:"operators",onClick:x,children:"-"}),Object(r.jsx)("button",{name:"1",onClick:x,children:"1"}),Object(r.jsx)("button",{name:"2",onClick:x,children:"2"}),Object(r.jsx)("button",{name:"3",onClick:x,children:"3"}),Object(r.jsx)("button",{name:"+",className:"operators",onClick:x,children:"+"}),Object(r.jsx)("button",{name:".",className:"operators",onClick:x,children:"."}),Object(r.jsx)("button",{name:"0",onClick:x,children:"0"}),Object(r.jsx)("button",{name:"=",className:"equals",onClick:function(){b(n),O(!1),a("")},children:"="})]})};var b=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(j,{})})},u=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),o(t),s(t)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),u()}},[[38,1,2]]]);
//# sourceMappingURL=main.12ca5e6c.chunk.js.map
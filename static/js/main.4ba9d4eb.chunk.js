(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(15),i=n.n(s),o=(n(25),n.p+"static/media/logo.6ce24c58.svg"),a=(n(26),n(0)),j=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["Hello ",e.name," aka ",e.heroName]}),e.children]})},l=function(e){return Object(a.jsx)("p",{children:"This is a props children"})},d=n(16),h=n(17),u=n(20),b=n(19),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).addCount=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:this.addCount,children:"click me!"}),Object(a.jsxs)("p",{children:["counting = ",this.state.count]})]})}}]),n}(r.a.Component),p=n(5),f=n(18),x=n.n(f).a.create({baseURL:"http://localhost:8080/api/v1/",headers:{"Content-Type":"application/json"}}),m=function(){return x.get("/greet/hello")},g=function(){var e=Object(c.useState)("test"),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){m().then((function(e){r(e.data)})).catch((function(e){console.log("something went wrong")}))})),n},v=function(){return x.get("employee/employees")},k=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){v().then((function(e){r(e.data)})).catch((function(){console.log("something went wrong")}))})),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"List of Employees"}),Object(a.jsxs)("table",{border:"1",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Name"}),Object(a.jsx)("td",{children:"Department"}),Object(a.jsx)("td",{children:"Location"})]}),n.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.department}),Object(a.jsx)("td",{children:e.location})]},e.id)}))]})]})};var y=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(a.jsxs)("p",{children:["Edit ",Object(a.jsx)("code",{children:"src/App.js"})," and save to reload. -jm1"]}),Object(a.jsx)("p",{children:k()}),Object(a.jsx)("p",{children:g()}),Object(a.jsxs)(j,{name:"Peter",heroName:"spiderman",children:[Object(a.jsx)(l,{}),Object(a.jsx)(O,{})]}),Object(a.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),C()}},[[46,1,2]]]);
//# sourceMappingURL=main.4ba9d4eb.chunk.js.map
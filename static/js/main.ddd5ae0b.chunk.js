(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(1),c=n.n(a),s=n(18),i=n.n(s),o=n(9),u=n(10),j=n.n(u),l=n(16),p=(n(38),{login:function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/login",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:if(401===(n=e.sent).status){e.next=11;break}return e.next=6,n.json();case 6:return r=e.sent,localStorage.setItem("auth_token",r.token),e.abrupt("return",r);case 11:return a={isAuthenticated:!1,user:{username:"",role:""}},e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),register:function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/register",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logout:function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/logout");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),isAuthenticated:function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/authenticated",{method:"get",headers:{"Content-Type":"application/json",auth_token:localStorage.getItem("auth_token")}});case 2:if(401===(t=e.sent).status){e.next=10;break}return console.log(t.status),e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",{isAuthenticated:!1,user:{username:"",role:""}});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),h=Object(a.createContext)(),b=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(o.a)(n,2),s=c[0],i=c[1],u=Object(a.useState)(!1),j=Object(o.a)(u,2),l=j[0],b=j[1],d=Object(a.useState)(!1),O=Object(o.a)(d,2),m=O[0],x=O[1];return Object(a.useEffect)((function(){p.isAuthenticated().then((function(e){i(e.user),b(e.isAuthenticated),x(!0)}))}),[]),Object(r.jsx)("div",{children:m?Object(r.jsx)(h.Provider,{value:{user:s,setUser:i,isAuthenticated:l,setIsAuthenticated:b},children:t}):Object(r.jsx)("h1",{children:"Loading"})})},d=n(11),O=(n(39),n(59)),m=n(60),x=n(61),f=n(62),v=n(63),g=n(69),y=n(64);var k=function(){var e=Object(a.useContext)(h),t=e.user,n=e.setUser,c=e.isAuthenticated,s=e.setIsAuthenticated,i=Object(a.useState)(!1),u=Object(o.a)(i,2),j=u[0],l=u[1],b=function(){p.logout().then((function(e){e.success&&(n(e.user),s(!1))}))};return Object(r.jsx)("div",{children:Object(r.jsxs)(x.a,{color:"light",light:!0,expand:"md",children:[Object(r.jsx)(d.b,{to:"/Giphy-app",children:Object(r.jsx)(f.a,{children:"Logo"})}),Object(r.jsx)(v.a,{onClick:function(){return l(!j)}}),Object(r.jsx)(g.a,{isOpen:j,navbar:!0,children:Object(r.jsx)(y.a,{className:"mr-auto",navbar:!0,children:c?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O.a,{children:Object(r.jsx)(d.b,{to:"/Giphy-app",children:"Home"})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(d.b,{to:"/Giphy-app/favorites",children:"Favorites"})}),"admin"===t.role?Object(r.jsx)(O.a,{children:Object(r.jsx)(d.b,{to:"/Giphy-app/admin",children:"Admin"})}):null,Object(r.jsx)(m.a,{onClick:b,children:"Logout"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O.a,{children:Object(r.jsx)(d.b,{to:"/Giphy-app",children:"Home"})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(d.b,{to:"/Giphy-app/login",children:"Login"})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(d.b,{to:"/Giphy-app/register",children:"Register"})})]})})})]})})},w=n(7);n(52);var S=function(e){var t=e.data,n=e.handleOnClick;return Object(r.jsxs)("div",{className:"item-container",children:[Object(r.jsx)("div",{className:"img-box",children:Object(r.jsx)("img",{src:t})}),Object(r.jsx)("div",{className:"btn-add",children:Object(r.jsx)(m.a,{onClick:function(){n(t)},children:"Add to favorite"})})]})},A={getFavorite:function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/favorites",{method:"get",headers:{"Content-Type":"application/json",auth_token:localStorage.getItem("auth_token")}});case 2:if(t=e.sent,console.log(t),401===t.status){e.next=10;break}return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",{message:{msgBody:"UnAuthorized",msgError:!0}});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),postFavorite:function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/favorite",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json",auth_token:localStorage.getItem("auth_token")}});case 2:if(401===(n=e.sent).status){e.next=9;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",{message:{msgBody:"UnAuthorized",msgError:!0}});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var C=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(1),i=Object(o.a)(s,2);i[0],i[1],Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.giphy.com/v1/gifs/trending?api_key=JjiRVm3bXZXAkfwAccSJB7bGELIXtT11&limit=".concat(15));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),c(n.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=Object(a.useContext)(h),p=Object(a.useState)(null),b=Object(o.a)(p,2),d=(b[0],b[1]),O=function(e){var t={url:e};A.postFavorite(t).then((function(e){var t=e.message;t.msgError?"UnAuthorzied"===t.msgBody?(d(t),u.setUser({username:"",role:""}),u.setIsAuthenticated(!1)):d(t):A.getFavorite().then((function(e){d(t)}))}))};return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"ListItems",children:n.map((function(e){return Object(r.jsx)(S,{data:e.images.original.url,handleOnClick:O},e.id)}))})})};n(53);var N=function(){return Object(r.jsxs)("div",{className:"home-page",children:[Object(r.jsx)("h1",{children:"Top Trending Giphy"}),Object(r.jsx)(C,{})]})},G=n(17),E=n(12),I=n(65),T=n(66),U=n(67),_=n(68);var F=function(e){return Object(r.jsx)("div",{className:function(e){var t="alert ";return e.message.msgError?t+="alert-danger":t+="alert-primary",t}(e),role:"alert",children:e.message.msgBody})};n(54);var P=function(){var e=Object(a.useState)({username:"",password:""}),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),i=Object(o.a)(s,2),u=i[0],j=i[1],l=function(e){c(Object(E.a)(Object(E.a)({},n),{},Object(G.a)({},e.target.name,e.target.value)))},b=Object(a.useContext)(h),d=Object(w.f)();return Object(r.jsx)("div",{className:"login-container",children:Object(r.jsxs)(I.a,{onSubmit:function(e){e.preventDefault(),p.login(n).then((function(e){var t=e.isAuthenticated,n=e.user,r=e.message;t?(b.setUser(n),b.setIsAuthenticated(t),d.push("/Giphy-app")):j(r)}))},children:[Object(r.jsxs)(T.a,{children:[Object(r.jsx)(U.a,{for:"exampleEmail",children:"Username"}),Object(r.jsx)(_.a,{type:"text",name:"username",id:"exampleEmail",placeholder:"username",onChange:l})]}),Object(r.jsxs)(T.a,{children:[Object(r.jsx)(U.a,{for:"examplePassword",children:"Password"}),Object(r.jsx)(_.a,{type:"password",name:"password",id:"examplePassword",placeholder:"password",onChange:l})]}),Object(r.jsx)(m.a,{children:"Login"}),u?Object(r.jsx)(F,{message:u}):null]})})};n(55);var R=function(){var e=Object(a.useState)({username:"",password:"",role:""}),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),i=Object(o.a)(s,2),u=i[0],j=i[1],l=Object(a.useRef)(null),h=Object(w.f)();Object(a.useEffect)((function(){return function(){clearTimeout(l)}}),[]);var b=function(e){c(Object(E.a)(Object(E.a)({},n),{},Object(G.a)({},e.target.name,e.target.value)))};return Object(r.jsx)("div",{className:"register-container",children:Object(r.jsxs)(I.a,{onSubmit:function(e){e.preventDefault(),p.register(n).then((function(e){var t=e.message;j(t),c({username:"",password:"",role:""}),t.msgError||(l=setTimeout((function(){h.push("/Giphy-app/login")}),2e3))}))},children:[Object(r.jsxs)(T.a,{children:[Object(r.jsx)(U.a,{for:"exampleEmail",children:"User"}),Object(r.jsx)(_.a,{type:"text",name:"username",id:"exampleEmail",value:n.username,placeholder:"username",onChange:b})]}),Object(r.jsxs)(T.a,{children:[Object(r.jsx)(U.a,{for:"examplePassword",children:"Password"}),Object(r.jsx)(_.a,{type:"password",name:"password",id:"examplePassword",value:n.password,placeholder:"password",onChange:b})]}),Object(r.jsxs)(T.a,{children:[Object(r.jsx)(U.a,{for:"exampleRole",children:"Role"}),Object(r.jsx)(_.a,{type:"text",name:"role",id:"exampleRole",value:n.role,placeholder:"Role (admin/user)",onChange:b})]}),Object(r.jsx)(m.a,{children:"Register"}),u?Object(r.jsx)(F,{message:u}):null]})})};var J=function(e){var t=e.listfavorite.url;return Object(r.jsx)("div",{className:"item-container",children:Object(r.jsx)("div",{className:"img-box",children:Object(r.jsx)("img",{src:t})})})};n(56);var L=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){A.getFavorite().then((function(e){c(e.favorites)}))}),[]),Object(r.jsx)("div",{className:"favorite-container",children:n.map((function(e){return Object(r.jsx)(J,{listfavorite:e},e._id)}))})};var B=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Admin Page"})})},z=n(19);var X=function(e){var t=e.component,n=e.roles,c=Object(z.a)(e,["component","roles"]),s=Object(a.useContext)(h),i=s.isAuthenticated,o=s.user;return Object(r.jsx)(w.b,Object(E.a)(Object(E.a)({},c),{},{render:function(e){return i?n.includes(o.role)?Object(r.jsx)(t,Object(E.a)({},e)):Object(r.jsx)(w.a,{to:{pathname:"/",state:{from:e.location}}}):Object(r.jsx)(w.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var D=function(e){var t=e.component,n=Object(z.a)(e,["component"]),c=Object(a.useContext)(h).isAuthenticated;return Object(r.jsx)(w.b,Object(E.a)(Object(E.a)({},n),{},{render:function(e){return c?Object(r.jsx)(w.a,{to:{pathname:"/",state:{from:e.location}}}):Object(r.jsx)(t,Object(E.a)({},e))}}))};var H=function(){return Object(r.jsxs)(d.a,{children:[Object(r.jsx)(k,{}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(w.b,{exact:!0,path:"/Giphy-app",component:N}),Object(r.jsx)(w.b,{path:"/Giphy-app/login",component:P}),Object(r.jsx)(D,{path:"/Giphy-app/register",component:R}),Object(r.jsx)(X,{path:"/Giphy-app/favorites",roles:["user","admin"],component:L}),Object(r.jsx)(X,{path:"/Giphy-app/admin",roles:["admin"],component:B})]})]})};n(57);i.a.render(Object(r.jsx)(b,{children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(H,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.ddd5ae0b.chunk.js.map
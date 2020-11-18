(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{152:function(e,t,r){},154:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(2),s=r.n(a),c=r(23),i=r.n(c),o=r(8),u=r(11),j=r.n(u),l=r(17),d=(r(59),{login:function(){var e=Object(l.a)(j.a.mark((function e(t){var r,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/login",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:if(401===(r=e.sent).status){e.next=11;break}return e.next=6,r.json();case 6:return n=e.sent,localStorage.setItem("auth_token",n.token),e.abrupt("return",n);case 11:return a={isAuthenticated:!1,user:{username:"",role:""}},e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),register:function(){var e=Object(l.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/register",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logout:function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/logout",{method:"get",headers:{"Content-Type":"application/json",auth_token:localStorage.getItem("auth_token")}});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),isAuthenticated:function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/authenticated",{method:"get",headers:{"Content-Type":"application/json",auth_token:localStorage.getItem("auth_token")}});case 2:if(401===(t=e.sent).status){e.next=10;break}return console.log(t.status),e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",{isAuthenticated:!1,user:{username:"",role:""}});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),p=Object(a.createContext)(),h=function(e){var t=e.children,r=Object(a.useState)(null),s=Object(o.a)(r,2),c=s[0],i=s[1],u=Object(a.useState)(!1),j=Object(o.a)(u,2),l=j[0],h=j[1],b=Object(a.useState)(!1),m=Object(o.a)(b,2),O=m[0],f=m[1];return Object(a.useEffect)((function(){d.isAuthenticated().then((function(e){i(e.user),h(e.isAuthenticated),f(!0)}))}),[]),Object(n.jsx)("div",{children:O?Object(n.jsx)(p.Provider,{value:{user:c,setUser:i,isAuthenticated:l,setIsAuthenticated:h},children:t}):Object(n.jsx)("h1",{children:"Loading"})})},b=r(12),m=(r(60),r(155)),O=r(156),f=r(157),x=r(158),g=r(170),v=r(159);var y=function(){var e=Object(a.useContext)(p),t=e.user,r=e.setUser,s=e.isAuthenticated,c=e.setIsAuthenticated,i=Object(a.useState)(!1),u=Object(o.a)(i,2),j=u[0],l=u[1],h=function(){d.logout().then((function(e){e.success&&(console.log("remove"),localStorage.removeItem("auth_token"),r(e.user),c(!1))}))};return Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{color:"light",light:!0,expand:"md",children:[Object(n.jsx)(b.b,{to:"/Giphy-app",children:Object(n.jsx)(f.a,{children:"Logo"})}),Object(n.jsx)(x.a,{onClick:function(){return l(!j)}}),Object(n.jsx)(g.a,{isOpen:j,navbar:!0,children:Object(n.jsx)(v.a,{className:"mr-auto",navbar:!0,children:s?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(b.b,{to:"/Giphy-app",children:"Home"})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(b.b,{to:"/Giphy-app/favorites",children:"Favorites"})}),"admin"===t.role?Object(n.jsx)(m.a,{children:Object(n.jsx)(b.b,{to:"/Giphy-app/admin",children:"Admin"})}):null,Object(n.jsx)(m.a,{children:Object(n.jsx)("a",{href:" # ",onClick:h,style:{cursor:"pointer",position:"absolute",right:20},children:"Logout"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{children:Object(n.jsx)(b.b,{to:"/Giphy-app",children:"Home"})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(b.b,{to:"/Giphy-app/login",children:"Login"})}),Object(n.jsx)(m.a,{children:Object(n.jsx)(b.b,{to:"/Giphy-app/register",children:"Register"})})]})})})]})})},w=r(9),k=r(160),S=r(161),A=(r(73),{getFavorite:function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/favorites",{method:"get",headers:{"Content-Type":"application/json",auth_token:localStorage.getItem("auth_token")}});case 2:if(401===(t=e.sent).status){e.next=9;break}return e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",{message:{msgBody:"UnAuthorized",msgError:!0}});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),postFavorite:function(){var e=Object(l.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/favorite",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json",auth_token:localStorage.getItem("auth_token")}});case 2:if(401===(r=e.sent).status){e.next=9;break}return e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",{message:{msgBody:"UnAuthorized",msgError:!0}});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),delete:function(){var e=Object(l.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://server-giphy.herokuapp.com/user/delete",{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json",auth_token:localStorage.getItem("auth_token")}});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});var P=function(e){var t=e.data,r=Object(a.useState)(!1),s=Object(o.a)(r,2),c=s[0],i=s[1],u=Object(a.useState)(null),j=Object(o.a)(u,2),l=(j[0],j[1]),d=Object(w.f)(),h=Object(a.useContext)(p);return Object(n.jsxs)("div",{className:"item-container",children:[Object(n.jsx)("div",{className:"img-box",children:Object(n.jsx)("img",{src:t})}),Object(n.jsx)("div",{className:"btn-add",children:Object(n.jsxs)(k.a,{color:"primary",onClick:function(){h.isAuthenticated&&i(!0);var e={url:t};A.postFavorite(e).then((function(e){var t=e.message;t.msgError?"UnAuthorzied"===t.msgBody?(l(t),h.setUser({username:"",role:""}),h.setIsAuthenticated(!1)):l(t):A.getFavorite().then((function(e){l(t)})),i(!1)})),h.isAuthenticated||d.push("/Giphy-app/login")},children:["Add to favorite",c?Object(n.jsx)(S.a,{color:"light",size:"sm",style:{marginLeft:10}}):""]})})]})},C=r(162),N=r(163),E=r(164);r(74);var G=function(e){for(var t=e.total,r=e.changePage,a=e.itemPerPage,s=[],c=1;c<=Math.ceil(t/a);c++)s.push(c);return Object(n.jsx)("div",{className:"pagination",children:Object(n.jsx)(C.a,{children:s.map((function(e){return Object(n.jsx)(N.a,{children:Object(n.jsx)(E.a,{href:"#",onClick:function(){return function(e){r(e)}(e)},children:e})})}))})})};var T=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),r=t[0],s=t[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),u=i[0],d=i[1],p=Object(a.useState)(15),h=Object(o.a)(p,2),b=h[0],m=(h[1],Object(a.useState)(1)),O=Object(o.a)(m,2),f=O[0],x=O[1],g=b*f,v=g-b;Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("http://api.giphy.com/v1/gifs/trending?api_key=JjiRVm3bXZXAkfwAccSJB7bGELIXtT11&limit=".concat(50));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,d(!1),s(r.data);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var y=r.slice(v,g);return Object(n.jsx)("div",{className:"container",children:u?Object(n.jsx)("h1",{children:"Loading"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"ListItems",children:y.map((function(e){return Object(n.jsx)(P,{data:e.images.original.url},e.id)}))}),Object(n.jsx)(G,{total:50,changePage:function(e){x(e)},itemPerPage:b})]})})};r(75);var I=function(){return Object(n.jsxs)("div",{className:"home-page",children:[Object(n.jsx)("h1",{children:"Top Trending Giphy"}),Object(n.jsx)(T,{})]})},_=r(19),L=r(13),B=r(165),F=r(166),R=r(167),U=r(168),J=r(169);var z=function(e){return Object(n.jsx)("div",{className:function(e){var t="alert ";return e.message.msgError?t+="alert-danger":t+="alert-primary",t}(e),role:"alert",children:e.message.msgBody})},q=r(24),D=r.n(q);r(76);var X=function(){var e=Object(a.useState)({username:"",password:""}),t=Object(o.a)(e,2),r=t[0],s=t[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),u=i[0],j=i[1],l=Object(a.useState)(null),h=Object(o.a)(l,2),b=h[0],m=h[1],O=Object(a.useState)(""),f=Object(o.a)(O,2),x=f[0],g=f[1],v=function(e){s(Object(L.a)(Object(L.a)({},r),{},Object(_.a)({},e.target.name,e.target.value)))},y=Object(a.useContext)(p),A=Object(w.f)(),P=function(){var e={};return D()(r.username)&&(e.username="username is required"),D()(r.password)&&(e.password="password is required"),g(e),!(Object.keys(e).length>0)},C=!!x.username,N=!!x.password;return Object(n.jsx)("div",{className:"container-detail",children:Object(n.jsxs)("div",{className:"login-container",children:[Object(n.jsx)("h1",{style:{marginBottom:20},children:"Login"}),Object(n.jsxs)(B.a,{onSubmit:function(e){e.preventDefault(),P()&&(j(!0),d.login(r).then((function(e){var t=e.isAuthenticated,r=e.user,n=e.message;j(!1),t?(y.setUser(r),y.setIsAuthenticated(t),A.push("/Giphy-app")):m(n.msgBody)})))},children:[Object(n.jsxs)(F.a,{children:[Object(n.jsx)(R.a,{for:"exampleEmail",children:"Username"}),Object(n.jsx)(U.a,{type:"text",name:"username",id:"exampleEmail",placeholder:"username",onChange:v,invalid:C}),Object(n.jsx)(J.a,{children:x.username})]}),Object(n.jsxs)(F.a,{children:[Object(n.jsx)(R.a,{for:"examplePassword",children:"Password"}),Object(n.jsx)(U.a,{type:"password",name:"password",id:"examplePassword",placeholder:"password",onChange:v,invalid:N}),Object(n.jsx)(J.a,{children:x.password})]}),Object(n.jsxs)(k.a,{color:"primary",style:{marginTop:20},children:["Login",u?Object(n.jsx)(S.a,{color:"light",size:"sm",style:{marginLeft:10}}):""]}),b?Object(n.jsx)(z,{message:b}):null]})]})})},H=r(27),M=r.n(H);r(77);var V=function(){var e=Object(a.useState)({username:"",password:"",confirmPassword:"",role:""}),t=Object(o.a)(e,2),r=t[0],s=t[1],c=Object(a.useState)(null),i=Object(o.a)(c,2),u=i[0],j=i[1],l=Object(a.useState)(!1),p=Object(o.a)(l,2),h=p[0],b=p[1],m=Object(a.useState)(""),O=Object(o.a)(m,2),f=O[0],x=O[1],g=Object(a.useRef)(null),v=Object(w.f)();Object(a.useEffect)((function(){return function(){clearTimeout(g)}}),[]);var y=function(e){s(Object(L.a)(Object(L.a)({},r),{},Object(_.a)({},e.target.name,e.target.value)))},A=function(){var e={};return M.a.isEmpty(r.username)&&(e.username="username is required"),M.a.isEmpty(r.password)&&(e.password="password is required"),M.a.equals(r.password,r.confirmPassword)||(e.confirmPassword="confirm password is not true"),x(e),!(Object.keys(e).length>0)},P=!!f.username,C=!!f.password,N=!!f.confirmPassword;return Object(n.jsx)("div",{className:"container-detail",children:Object(n.jsxs)("div",{className:"register-container",children:[Object(n.jsx)("h1",{style:{marginBottom:20},children:"Register"}),Object(n.jsxs)(B.a,{onSubmit:function(e){if(e.preventDefault(),A()){var t={username:r.username,password:r.password,role:r.role};b(!0),d.register(t).then((function(e){var t=e.message;j(t),s({username:"",password:"",confirmPassword:"",role:""}),t.msgError||(b(!1),g=setTimeout((function(){v.push("/Giphy-app/login")}),2e3)),b(!1)}))}},children:[Object(n.jsxs)(F.a,{children:[Object(n.jsx)(R.a,{for:"exampleEmail",children:"User"}),Object(n.jsx)(U.a,{type:"text",name:"username",id:"exampleEmail",value:r.username,placeholder:"username",onChange:y,invalid:P}),Object(n.jsx)(J.a,{children:f.username})]}),Object(n.jsxs)(F.a,{children:[Object(n.jsx)(R.a,{for:"examplePassword",children:"Password"}),Object(n.jsx)(U.a,{type:"password",name:"password",id:"examplePassword",value:r.password,placeholder:"password",onChange:y,invalid:C}),Object(n.jsx)(J.a,{children:f.password})]}),Object(n.jsxs)(F.a,{children:[Object(n.jsx)(R.a,{for:"confirmPassword",children:"Password"}),Object(n.jsx)(U.a,{type:"password",name:"confirmPassword",id:"confirmPassword",value:r.confirmPassword,placeholder:"confirm password",onChange:y,invalid:N}),Object(n.jsx)(J.a,{children:f.confirmPassword})]}),Object(n.jsxs)(F.a,{children:[Object(n.jsx)(R.a,{for:"exampleRole",children:"Role"}),Object(n.jsx)(U.a,{type:"text",name:"role",id:"exampleRole",value:r.role,placeholder:"Role (admin/user)",onChange:y})]}),Object(n.jsxs)(k.a,{color:"primary",style:{marginTop:20,marginBottom:20},children:["Register",h?Object(n.jsx)(S.a,{color:"light",size:"sm",style:{marginLeft:10}}):""]}),u?Object(n.jsx)(z,{message:u}):null]})]})})};var Y=function(e){var t=e.listfavorite,r=e.render,s=Object(a.useState)(null),c=Object(o.a)(s,2),i=(c[0],c[1]),u=Object(a.useState)(!1),j=Object(o.a)(u,2),l=j[0],d=j[1],p=t.url;return Object(n.jsxs)("div",{className:"item-container",children:[Object(n.jsx)("div",{className:"img-box",children:Object(n.jsx)("img",{src:p})}),Object(n.jsx)("div",{className:"btn-delete",children:Object(n.jsxs)(k.a,{color:"danger",onClick:function(){var e={url:p};d(!0),A.delete(e).then((function(e){var t=e.message;t.msgError&&i(t.msgError),r(p)}))},children:["Delete",l?Object(n.jsx)(S.a,{color:"light",size:"sm",style:{marginLeft:10}}):""]})})]})};r(152);var Z=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),r=t[0],s=t[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),u=i[0],j=i[1];Object(a.useEffect)((function(){A.getFavorite().then((function(e){s(e.favorites)}))}),[u]);var l=function(){j(!u)};return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{style:{marginBottom:30,textAlign:"center",marginTop:20},children:"Your favorite list"}),Object(n.jsx)("div",{className:"favorite-container",children:r.map((function(e){return Object(n.jsx)(Y,{listfavorite:e,render:l},e._id)}))})]})};var K=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Admin Page"})})},Q=r(25);var W=function(e){var t=e.component,r=e.roles,s=Object(Q.a)(e,["component","roles"]),c=Object(a.useContext)(p),i=c.isAuthenticated,o=c.user;return Object(n.jsx)(w.b,Object(L.a)(Object(L.a)({},s),{},{render:function(e){return i?r.includes(o.role)?Object(n.jsx)(t,Object(L.a)({},e)):Object(n.jsx)(w.a,{to:{pathname:"/",state:{from:e.location}}}):Object(n.jsx)(w.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var $=function(e){var t=e.component,r=Object(Q.a)(e,["component"]),s=Object(a.useContext)(p).isAuthenticated;return Object(n.jsx)(w.b,Object(L.a)(Object(L.a)({},r),{},{render:function(e){return s?Object(n.jsx)(w.a,{to:{pathname:"/",state:{from:e.location}}}):Object(n.jsx)(t,Object(L.a)({},e))}}))};var ee=function(){return Object(n.jsxs)(b.a,{children:[Object(n.jsx)(y,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(w.b,{exact:!0,path:"/Giphy-app",component:I}),Object(n.jsx)(w.b,{path:"/Giphy-app/login",component:X}),Object(n.jsx)($,{path:"/Giphy-app/register",component:V}),Object(n.jsx)(W,{path:"/Giphy-app/favorites",roles:["user","admin"],component:Z}),Object(n.jsx)(W,{path:"/Giphy-app/admin",roles:["admin"],component:K})]})]})};r(153);i.a.render(Object(n.jsx)(h,{children:Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(ee,{})})}),document.getElementById("root"))},60:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){},77:function(e,t,r){}},[[154,1,2]]]);
//# sourceMappingURL=main.635e838a.chunk.js.map
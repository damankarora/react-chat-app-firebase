(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),r=n.n(c),i=n(31),a=n.n(i),s=(n(39),n(10)),o=(n(40),n(32)),u=(n(18),n(21)),j=n(33),b=n(0),d=n.n(b),O=n(2),p=n(20),h=n(34),l=n(11),f=function(e){var t=e.data,n=e.currentUser,c=t.text,r=t.uid,i=t.photoURL,a=r===n.uid?"sent":"received";return Object(l.jsxs)("div",{className:"message ".concat(a),children:[Object(l.jsx)("img",{src:i,alt:"sender"}),Object(l.jsx)("p",{children:c})]})},x=function(e){var t=e.app,n=e.currentUser;Object(c.useEffect)((function(){v.current.scrollIntoView({behavior:"smooth"})}));var r=Object(p.i)(t),i=Object(p.a)(r,"testing"),a=Object(p.b)(i),o=Object(p.m)(i,Object(p.j)(25),Object(p.l)("createdAt")),u=Object(c.useState)(""),j=Object(s.a)(u,2),b=j[0],x=j[1],g=Object(h.a)(o,{idField:"id"}),m=Object(s.a)(g,1)[0],v=Object(c.useRef)(),I=function(){var e=Object(O.a)(d.a.mark((function e(t){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=n.uid,r=n.photoURL,e.next=4,Object(p.q)(a,{text:b,createdAt:Object(p.p)(),uid:c,photoURL:r});case 4:x(""),v.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("main",{children:[m&&m.map((function(e){return Object(l.jsx)(f,{data:e,currentUser:n},e.id)})),Object(l.jsx)("div",{ref:v})]}),Object(l.jsxs)("form",{onSubmit:I,children:[Object(l.jsx)("input",{type:"text",value:b,onChange:function(e){return x(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"=>"})]})]})},g=new u.a,m=Object(o.a)({apiKey:"AIzaSyCdG-ELH84hYImRKZ4MiGxScred7g2Bi8I",authDomain:"fir-try-a9c75.firebaseapp.com",projectId:"fir-try-a9c75",storageBucket:"fir-try-a9c75.appspot.com",messagingSenderId:"407189812932",appId:"1:407189812932:web:13dc8d988e0494ad76bb91"}),v=Object(u.c)(m);function I(){return Object(l.jsx)("button",{onClick:function(){v.signOut().then((function(){console.log("Sign out")}))},children:"Log Out"})}function w(){return Object(l.jsx)("button",{onClick:function(){Object(u.g)(v,g).then((function(e){console.log(e.user)}))},children:"Sign in with Google"})}var y=function(){var e=Object(j.a)(v),t=Object(s.a)(e,1)[0];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{className:"App-header",children:[t&&Object(l.jsx)(I,{}),Object(l.jsx)("br",{})]}),Object(l.jsx)("section",{children:t?Object(l.jsx)(x,{app:m,currentUser:t}):Object(l.jsx)(w,{})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),S()}},[[44,1,2]]]);
//# sourceMappingURL=main.40c53694.chunk.js.map
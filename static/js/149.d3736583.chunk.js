"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[149],{388:function(t,n,r){r.d(n,{r:function(){return i}});var e=r(689),u=r(87),a=r(184),i=function(t){var n=t.movies,r=(0,e.TH)();return(0,a.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.title;return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{to:"/movies/".concat(n.toString()),state:{from:r},children:e})},n)}))})}},149:function(t,n,r){r.r(n),r.d(n,{default:function(){return p}});var e=r(439),u=r(791),a=r(184),i=function(t){var n=t.onSubmit,r=(0,u.useState)(""),i=(0,e.Z)(r,2),c=i[0],s=i[1];return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n(c),s("")},children:[(0,a.jsx)("input",{type:"text",name:"query",value:c,onChange:function(t){s(t.target.value)}}),(0,a.jsx)("button",{type:"submit",children:"Search"})]})})},c=r(87),s=r(273),o=r(388),p=function(){var t=(0,u.useState)(null),n=(0,e.Z)(t,2),r=n[0],p=n[1],f=(0,c.lr)(),h=(0,e.Z)(f,2),l=h[0],v=h[1],m=l.get("query");return(0,u.useEffect)((function(){(0,s.V0)(m).then(p)}),[m]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{onSubmit:function(t){v({query:t})}}),r&&(0,a.jsx)(o.r,{movies:r})]})}},273:function(t,n,r){r.d(n,{IQ:function(){return h},Jh:function(){return v},V0:function(){return d},_L:function(){return s},t2:function(){return p}});var e=r(861),u=r(757),a=r.n(u),i=r(243),c="3b8f6a8ecb92c393de5009c015f6a411";function s(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("trending/movie/day",{params:{api_key:c}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("/movie/".concat(n),{params:{api_key:c}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("/movie/".concat(n,"/credits"),{params:{api_key:c}});case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("/movie/".concat(n,"/reviews"),{params:{api_key:c}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Z)("/search/movie",{params:{api_key:c,query:n}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=149.d3736583.chunk.js.map
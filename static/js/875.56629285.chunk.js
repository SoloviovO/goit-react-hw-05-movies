"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[875],{875:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var n=t(439),a=t(791),s=t(87),i=t(689),c=t(273),u=t(184),o=function(e){var r,t,n=e.movieInfo,a=(0,i.TH)(),c=n.poster_path,o=n.title,p=n.release_date,l=n.vote_average,d=n.overview,f=n.genres;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.rU,{to:null!==(r=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==r?r:"/",children:"Go back"}),(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c),alt:o}),(0,u.jsx)("p",{children:o}),(0,u.jsx)("p",{children:p.slice(0,4)}),(0,u.jsxs)("p",{children:["User Score: ",Math.round(10*l),"%"]}),(0,u.jsx)("p",{children:"Overview"}),(0,u.jsx)("p",{children:d}),(0,u.jsx)("p",{children:"Genres"}),(0,u.jsx)("p",{children:f.map((function(e){return(0,u.jsx)("span",{children:e.name},e.id)}))})]})},p=function(){var e,r,t=(0,a.useState)(null),p=(0,n.Z)(t,2),l=p[0],d=p[1],f=(0,i.UO)().movieId,h=(0,i.TH)();return(0,a.useEffect)((function(){(0,c.t2)(f).then(d)}),[f]),(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(o,{movieInfo:l}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"cast",state:null!==(e=h.state)&&void 0!==e?e:"/",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"reviews",state:null!==(r=h.state)&&void 0!==r?r:"/",children:"Reviwers"})}),(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(i.j3,{})})]})]})}},273:function(e,r,t){t.d(r,{IQ:function(){return d},Jh:function(){return h},V0:function(){return x},_L:function(){return u},t2:function(){return p}});var n=t(861),a=t(757),s=t.n(a),i=t(243),c="3b8f6a8ecb92c393de5009c015f6a411";function u(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("trending/movie/day",{params:{api_key:c}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(r),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/search/movie",{params:{api_key:c,query:r}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=875.56629285.chunk.js.map
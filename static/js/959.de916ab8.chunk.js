"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[959],{959:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(439),a=n(791),s=n(87),i=n(689),c=n(273),u="MovieInfo_Btn__TVE44",o="MovieInfo_Wrapper__40G5+",p="MovieInfo_Box__PRd6m",l="MovieInfo_Title__TexLD",d=n(184),f=function(e){var t,n,r=e.movieInfo,a=(0,i.TH)(),c=r.poster_path,f=r.title,h=r.release_date,v=r.vote_average,x=r.overview,m=r.genres;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.rU,{className:u,to:null!==(t=null===(n=a.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/",children:"Go back"}),(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c),alt:f,width:"200"}),(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("span",{className:l,children:f}),(0,d.jsxs)("span",{children:["(",h.slice(0,4),")"]}),(0,d.jsxs)("p",{children:["User Score: ",Math.round(10*v),"%"]}),(0,d.jsx)("p",{children:"Overview"}),(0,d.jsx)("p",{children:x}),(0,d.jsx)("p",{children:"Genres"}),(0,d.jsx)("p",{children:m.map((function(e){return(0,d.jsx)("span",{children:e.name},e.id)}))})]})]})]})},h=function(){var e,t,n=(0,a.useState)(null),u=(0,r.Z)(n,2),o=u[0],p=u[1],l=(0,i.UO)().movieId,h=(0,i.TH)();return(0,a.useEffect)((function(){(0,c.t2)(l).then(p)}),[l]),(0,d.jsxs)(d.Fragment,{children:[o&&(0,d.jsx)(f,{movieInfo:o}),(0,d.jsxs)("ul",{style:{listStyle:"none"},children:[(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{style:{textDecoration:"none",color:"black"},to:"cast",state:null!==(e=h.state)&&void 0!==e?e:"/",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{style:{textDecoration:"none",color:"black"},to:"reviews",state:null!==(t=h.state)&&void 0!==t?t:"/",children:"Reviwers"})}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(i.j3,{})})]})]})}},273:function(e,t,n){n.d(t,{IQ:function(){return d},Jh:function(){return h},V0:function(){return x},_L:function(){return u},t2:function(){return p}});var r=n(861),a=n(757),s=n.n(a),i=n(243),c="3b8f6a8ecb92c393de5009c015f6a411";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("trending/movie/day",{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t),{params:{api_key:c}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/search/movie",{params:{api_key:c,query:t}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=959.de916ab8.chunk.js.map
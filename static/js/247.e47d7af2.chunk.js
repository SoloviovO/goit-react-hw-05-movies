"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(t,r,n){n.r(r);var e=n(439),a=n(791),u=n(689),c=n(273),s=n(184);r.default=function(){var t=(0,a.useState)(null),r=(0,e.Z)(t,2),n=r[0],i=r[1],p=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,c.IQ)(p).then(i)}),[p]),(0,s.jsx)(s.Fragment,{children:n&&(0,s.jsx)("ul",{children:n.map((function(t){var r=t.id,n=t.profile_path,e=t.character,a=t.name;return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:"name"}),(0,s.jsx)("p",{children:e}),(0,s.jsx)("p",{children:a})]},r)}))})})}},273:function(t,r,n){n.d(r,{IQ:function(){return h},Jh:function(){return d},V0:function(){return v},_L:function(){return i},t2:function(){return o}});var e=n(861),a=n(757),u=n.n(a),c=n(243),s="3b8f6a8ecb92c393de5009c015f6a411";function i(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("trending/movie/day",{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(r),{params:{api_key:s}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(r,"/credits"),{params:{api_key:s}});case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/movie/".concat(r,"/reviews"),{params:{api_key:s}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Z)("/search/movie",{params:{api_key:s,query:r}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=247.e47d7af2.chunk.js.map
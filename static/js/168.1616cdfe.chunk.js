"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(t,r,n){n.r(r),n.d(r,{default:function(){return p}});var e=n(439),a=n(791),u=n(689),s=n(273),c="Reviews_List__nBL+4",i="Reviews_Item__+uUiw",o=n(184),p=function(){var t=(0,a.useState)(null),r=(0,e.Z)(t,2),n=r[0],p=r[1],f=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,s.Jh)(f).then(p)}),[f]),(0,o.jsx)(o.Fragment,{children:n&&(0,o.jsx)("ul",{className:c,children:n.map((function(t){var r=t.id,n=t.author,e=t.content;return(0,o.jsxs)("li",{className:i,children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"Author:"})," ",n]}),(0,o.jsx)("p",{children:e})]},r)}))})})}},273:function(t,r,n){n.d(r,{IQ:function(){return h},Jh:function(){return d},V0:function(){return m},_L:function(){return i},t2:function(){return p}});var e=n(861),a=n(757),u=n.n(a),s=n(243),c="3b8f6a8ecb92c393de5009c015f6a411";function i(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("trending/movie/day",{params:{api_key:c}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(r),{params:{api_key:c}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return _.apply(this,arguments)}function _(){return(_=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/search/movie",{params:{api_key:c,query:r}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=168.1616cdfe.chunk.js.map
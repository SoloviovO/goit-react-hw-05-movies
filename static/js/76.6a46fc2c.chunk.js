"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(t,r,n){n.r(r),n.d(r,{default:function(){return o}});var e=n(439),a=n(791),u=n(689),s=n(273),c="Cast_List__AZLS7",i="Cast_Item__NILYu",p=n(184),o=function(){var t=(0,a.useState)(null),r=(0,e.Z)(t,2),n=r[0],o=r[1],f=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,s.IQ)(f).then(o)}),[f]),(0,p.jsx)(p.Fragment,{children:n&&(0,p.jsx)("ul",{className:c,children:n.map((function(t){var r=t.id,n=t.profile_path,e=t.character,a=t.name;return(0,p.jsxs)("li",{className:i,children:[(0,p.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://vaksi.by/design/verona/images/no_image.png",alt:"name",width:"100"}),(0,p.jsx)("p",{children:e}),(0,p.jsx)("p",{children:a})]},r)}))})})}},273:function(t,r,n){n.d(r,{IQ:function(){return h},Jh:function(){return l},V0:function(){return v},_L:function(){return i},t2:function(){return o}});var e=n(861),a=n(757),u=n.n(a),s=n(243),c="3b8f6a8ecb92c393de5009c015f6a411";function i(){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("trending/movie/day",{params:{api_key:c}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(r),{params:{api_key:c}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return _.apply(this,arguments)}function _(){return(_=(0,e.Z)(u().mark((function t(r){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/search/movie",{params:{api_key:c,query:r}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=76.6a46fc2c.chunk.js.map
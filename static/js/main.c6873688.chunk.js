(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(4),o=e.n(r),c=e(6),u=e(1),i=(e(11),e(5)),s=e(3),a=e.n(s),d=function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))},f=function(){return d().then((function(t){return t.splice(0,5)}))},l=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},b=function(){var t=Object(i.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"green"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=e(0),h=function(t){var n=t.goods;return Object(j.jsx)("ul",{children:n.map((function(t){return Object(j.jsxs)("li",{style:{color:t.color},children:[t.id," ",t.name]},t.id)}))})},p=function(){var t=Object(u.useState)([]),n=Object(c.a)(t,2),e=n[0],r=n[1],o=function(t){t().then((function(t){return r(t)}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Dynamic list of Goods"}),Object(j.jsx)("button",{type:"button",onClick:function(){return o(d)},children:"Load All goods"}),Object(j.jsx)("button",{type:"button",onClick:function(){return o(f)},children:"Load 5 first goods"}),Object(j.jsx)("button",{type:"button",onClick:function(){return o(l)},children:"Load red goods"}),Object(j.jsx)("button",{type:"button",onClick:function(){return o(b)},children:"Load green goods"}),Object(j.jsx)(h,{goods:e})]})};o.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c6873688.chunk.js.map
(this.webpackJsonpalfa=this.webpackJsonpalfa||[]).push([[0],{31:function(t,e,c){},55:function(t,e,c){},57:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c(8),s=c.n(n),i=(c(31),c(15)),a=c(13),o=c.n(a),l=c(25),u=c(16),d=c(5),j=c(26),p=c.n(j),f=(c(55),"SET_PRODUCTS"),b="SELECTED_PRODUCTS",O="REMOVE_PRODUCT",m=function(t){return{type:f,payload:t}},h=function(t){return{type:b,payload:t}},v=c(1),g=function(t){var e=t.likedItems,c=t.removeItem,r=t.title,n=t.poster,s=t.id;return Object(v.jsxs)("div",{className:"item",children:[Object(v.jsx)("p",{className:"item-title",children:r}),Object(v.jsx)("img",{className:"item-img",src:n,alt:"Poster"}),Object(v.jsxs)("div",{className:"item-svg",children:[Object(v.jsx)("div",{className:"item-svg-like",children:Object(v.jsx)("svg",{onClick:function(t){t.target.classList.contains("liked")?t.target.classList.remove("liked"):t.target.classList.add("liked"),e(t.target.parentElement.id)},id:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",children:Object(v.jsx)("path",{d:"M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"})})}),Object(v.jsx)("div",{className:"item-svg-remove",children:Object(v.jsx)("svg",{onClick:function(){return c(s)},fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"50px",height:"50px",children:Object(v.jsx)("path",{d:"M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"})})})]})]},s)},x=function(t){var e=t.showLikedItems;return Object(v.jsx)("div",{id:"filter-block",children:Object(v.jsx)("button",{onClick:e,id:"filter",children:"\u0424\u0438\u043b\u044c\u0442\u0440"})})};var L=function(){var t=Object(d.c)((function(t){return t.allProducts.products})),e=Object(d.b)(),c=Object(r.useState)([]),n=Object(u.a)(c,2),s=n[0],a=n[1],j=Object(r.useState)(!1),f=Object(u.a)(j,2),b=f[0],L=f[1],k=function(){var t=Object(l.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://floating-sierra-20135.herokuapp.com/api/movies").catch((function(t){console.log("Err",t)}));case 2:c=t.sent,e(m(c.data.data));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){k()}),[]);var w=function(t){e(function(t){return{type:O,payload:t}}(t))},y=function(t){if(0===s.length)a([].concat(Object(i.a)(s),[t]));else if(!1===s.some((function(e){return e===t})))a([].concat(Object(i.a)(s),[t]));else{var e=s.filter((function(e){return e!==t}));a(e)}};return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(x,{showLikedItems:function(t){if(0===s.length)return!0;!1===b?(t.target.classList.add("filter-color"),e(h(s)),L(!0)):(a([]),e(h([])),t.target.classList.remove("filter-color"),k(),L(!1))}}),Object(v.jsx)("div",{className:"wrapper",children:t.map((function(t){return Object(v.jsx)(g,{likedItems:y,removeItem:w,title:t.title,poster:t.poster,id:t.id})}))})]})},k=c(10),w=c(3),y={products:[],likedProducts:[]},E=Object(k.a)({allProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0,c=e.type,r=e.payload;switch(c){case f:return Object(w.a)(Object(w.a)({},t),{},{products:r});case b:return 0===r.length&&(t.likedProducts=[]),r.map((function(e){t.products.map((function(c){c.id===parseInt(e)&&t.likedProducts.push(c)}))})),Object(w.a)(Object(w.a)({},t),{},{products:t.likedProducts});case O:return Object(w.a)(Object(w.a)({},t),{},{products:t.products.filter((function(t){return t.id!==r}))});default:return t}}}),P=E,C=Object(k.b)(P,{});s.a.render(Object(v.jsx)(d.a,{store:C,children:Object(v.jsx)(L,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.d3dce8f9.chunk.js.map
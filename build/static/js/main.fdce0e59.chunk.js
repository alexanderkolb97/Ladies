(this.webpackJsonpladies=this.webpackJsonpladies||[]).push([[0],{28:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(16),n=c.n(r),i=c(6),l=c(10),o=c(0);var j=function(){var e=Object(a.useContext)(h),t=e.setSearchstatus,c=e.cartNumber;return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("img",{src:"./logo.png",alt:"logo"})})}),Object(o.jsxs)("div",{className:"search_wrapper",children:[Object(o.jsx)("input",{onChange:function(e){e.target.value.length<3?t(""):t(e.target.value)},type:"text",name:"search",placeholder:"Search"}),Object(o.jsx)("span",{className:"search_icon"})]}),Object(o.jsxs)(l.b,{to:"/cart",className:"cart",children:[Object(o.jsx)("span",{className:"cart_amount",children:c}),Object(o.jsx)("img",{src:"cart.png",alt:"cart"})]})]})};var d=function(){var e=Object(a.useContext)(h),t=e.dataStatus,c=e.sortStatus,s=e.searchStatus,r=e.setCartNumber,n=e.itemsIds,l=Object(a.useState)(""),j=Object(i.a)(l,2),d=j[0],u=j[1],b=Object(a.useState)(),m=Object(i.a)(b,2),O=m[0],x=m[1],p=[],g=function(e){x(e.target.closest("li").id),n.push(e.target.closest("li").id)},f=function(){0===p.length&&(p=JSON.parse(localStorage.getItem("data")));var e=p.map((function(e,t){return Object(o.jsxs)("li",{id:t+1,className:"list_item",children:[Object(o.jsx)("img",{src:e.image,alt:"item_img"}),Object(o.jsxs)("div",{className:"list_item_info",children:[Object(o.jsx)("p",{className:"info_title",children:e.title}),Object(o.jsx)("p",{className:"info_category",children:e.category}),Object(o.jsxs)("p",{className:"info_price",children:["$",e.price]}),Object(o.jsx)("button",{onClick:g,className:"info_add_btn",children:"+"})]})]},t)}));u(e)};return Object(a.useEffect)((function(e){var a,i;t&&f(),""!==c&&(a=c,(p=JSON.parse(localStorage.getItem("data"))).sort((function(e,t){return+e.price-+t.price})),"desc"===a&&p.reverse(),f()),""!==s?(i=s,p=(p=JSON.parse(localStorage.getItem("data"))).filter((function(e){if(-1!==e.title.indexOf(i))return e})),f()):t&&f(),r(n.length)}),[t,c,s,O]),document.cookie="data=".concat(n),Object(o.jsx)("ul",{className:"list",children:d})};var u=function(){var e=Object(a.useContext)(h),t=e.sortStatus,c=e.setSortstatus,s=0,r=function(e){var t=e.target.dataset.dir,c=document.querySelector(".list"),a=c.querySelectorAll(".list_item"),r=c.querySelector(".list_item"),n=parseInt(window.getComputedStyle(r,null).getPropertyValue("padding-right"))+parseInt(window.getComputedStyle(r,null).getPropertyValue("padding-left"))+r.offsetWidth,i=n,l=0;"prev"===t?function(){s--,l=r.style.marginLeft||0,l=Math.abs(parseInt(l));var e="-"+(l-=n)+"px";r.style.marginLeft=e}():s!==a.length-5&&(l=r.style.marginLeft||0,l=Math.abs(parseInt(l)),l+=i,r.style.marginLeft="-".concat(l,"px"),s++)};return Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h1",{children:"Best Sellers"}),Object(o.jsx)("button",{onClick:function(){c("desc"!==t?"desc":"asc")},className:"btn_sort",children:Object(o.jsx)("span",{className:"btn_sort_icon"})}),Object(o.jsxs)("div",{className:"slider_arrows",children:[Object(o.jsx)("button",{"data-dir":"prev",onClick:r,className:"arrow_left",children:"\u2039"}),Object(o.jsx)("button",{"data-dir":"next",onClick:r,className:"arrow_right",children:"\u203a"})]})]})};var b=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsx)("div",{className:"catalog",children:Object(o.jsx)(d,{})})]})};var m=function(){var e=Object(a.useContext)(h),t=e.setCartNumber,c=e.itemsIds,s=e.setItemsIds,r=JSON.parse(localStorage.getItem("data")),n=function(e){var a=e.target.closest("li").id,r=c;r.push(a),document.cookie="data=".concat(r.join()),s(r),t(r.length),f(d())},l=function(e){j(e)},j=function(e){var a=c;console.log(a);var r=e.target.closest("li").id,n=a.indexOf(r);-1!==n&&a.splice(n,1),s(a),t(a.length),f(d())},d=function(){return r.filter((function(e){return-1!==c.indexOf(String(e.id))&&e})).map((function(e,t){var a=function(e){var t=0;return c.forEach((function(c){+c===+e&&t++})),t}(e.id)||0;return Object(o.jsxs)("li",{id:e.id,className:"item",children:[Object(o.jsx)("img",{src:e.image,className:"cart_img",alt:"cart_img"}),Object(o.jsxs)("div",{className:"list_item_info",children:[Object(o.jsx)("p",{className:"info_title",children:e.title}),Object(o.jsx)("p",{className:"info_category",children:e.category}),Object(o.jsxs)("p",{className:"info_price",children:["$",e.price*a]})]}),Object(o.jsxs)("div",{className:"quantity",children:[Object(o.jsx)("div",{className:"quantity_field",children:a}),Object(o.jsx)("button",{onClick:n,className:"plus",children:"+"}),Object(o.jsx)("button",{onClick:l,className:"minus",children:"-"})]}),Object(o.jsx)("button",{onClick:j,className:"item_remove",children:"Remove from cart"})]},t)}))},u=Object(a.useState)(!1),b=Object(i.a)(u,2),m=b[0],O=b[1],x=Object(a.useState)((function(){return d()})),p=Object(i.a)(x,2),g=p[0],f=p[1];return Object(a.useEffect)((function(){g.length>0?O(!0):O(!1),console.log(c),c&&c.length>0?document.cookie="data=".concat(c.join()):document.cookie="data="}),[g,c]),Object(o.jsxs)("div",{className:"cart",children:[Object(o.jsxs)("h1",{className:"cart_header",children:["Cart ",m?"products are displayed below":"is empty"]}),Object(o.jsx)("ul",{className:"items_list",children:g})]})},O=c(2),h=s.a.createContext();var x=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(""),d=Object(i.a)(n,2),u=d[0],x=d[1],p=Object(a.useState)(""),g=Object(i.a)(p,2),f=g[0],N=g[1],v=Object(a.useState)(0),S=Object(i.a)(v,2),_=S[0],y=S[1],C=Object(a.useState)(J("data")?J("data").split(","):[]),I=Object(i.a)(C,2),k=I[0],w=I[1];function J(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}return localStorage.getItem("data")?c||r(!0):fetch("https://fakestoreapi.com/products").then((function(e){return e.text()})).then((function(e){localStorage.setItem("data",e),r(!0)})),Object(o.jsx)(s.a.Fragment,{children:Object(o.jsx)(h.Provider,{value:{dataStatus:c,sortStatus:u,setSortstatus:x,searchStatus:f,setSearchstatus:N,cartNumber:_,setCartNumber:y,itemsIds:k,setItemsIds:w},children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(O.c,{children:Object(o.jsx)(O.a,{exact:!0,path:"/",component:b})}),Object(o.jsx)(O.c,{children:Object(o.jsx)(O.a,{path:"/cart",component:m})})]})})})};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("app"))}},[[28,1,2]]]);
//# sourceMappingURL=main.fdce0e59.chunk.js.map
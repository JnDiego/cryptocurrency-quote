(this["webpackJsonpcryptocurrency-quote"]=this["webpackJsonpcryptocurrency-quote"]||[]).push([[0],{20:function(e,n,t){e.exports=t.p+"static/media/cryptomonedas.96e45d69.png"},22:function(e,n,t){e.exports=t(49)},27:function(e,n,t){},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(17),o=t.n(c),u=(t(27),t(5)),i=t.n(u),l=t(6),s=t(3),m=t(1),f=t(2),p=t(20),d=t.n(p);function b(){var e=Object(m.a)(["\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  -webkit-appearance: none;\n  border-radius: 10px;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n"]);return b=function(){return e},e}function v(){var e=Object(m.a)(["\n  font-family: 'Bebas Neue', cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n"]);return v=function(){return e},e}var y=f.a.label(v()),g=f.a.select(b()),E=function(e,n,t){var c=Object(a.useState)(n),o=Object(s.a)(c,2),u=o[0],i=o[1];return[u,function(){return r.a.createElement(a.Fragment,null,r.a.createElement(y,{htmlFor:"currency"},e),r.a.createElement(g,{name:"currency",id:"currency",onChange:function(e){return i(e.target.value)},value:u},r.a.createElement("option",{value:""},"- Select -"),t.map((function(e){return r.a.createElement("option",{key:e.code,value:e.code},e.name)})),";"))},i]};function h(){var e=Object(m.a)(["\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  -webkit-appearance: none;\n  border-radius: 10px;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n"]);return h=function(){return e},e}function O(){var e=Object(m.a)(["\n  font-family: 'Bebas Neue', cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n"]);return O=function(){return e},e}var j=f.a.label(O()),k=f.a.select(h()),x=function(e,n,t){var c=Object(a.useState)(n),o=Object(s.a)(c,2),u=o[0],i=o[1];return[u,function(){return r.a.createElement(a.Fragment,null,r.a.createElement(j,{htmlFor:"currency"},e),r.a.createElement(k,{name:"currency",id:"currency",onChange:function(e){return i(e.target.value)},value:u},r.a.createElement("option",{value:""},"- Select -"),t.map((function(e){return r.a.createElement("option",{key:e.CoinInfo.Id,value:e.CoinInfo.Name},e.CoinInfo.FullName)})),";"))},i]},w=t(7),S=t.n(w),C=t(21),N=t.n(C);function D(){var e=Object(m.a)(["\n  background-color: #b7322c;\n  padding: 1rem;\n  color: #fff;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  font-family: 'Bebas Neue', cursive;\n"]);return D=function(){return e},e}var z=f.a.p(D());z.propTypes={message:N.a.string.isRequired};var P=function(e){var n=e.message;return r.a.createElement(z,null,n)};function A(){var e=Object(m.a)(["\n  margin-top: 20px;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 10px;\n  background-color: #66a2fe;\n  border: none;\n  width: 100%;\n  border-radius: 10px;\n  color: #fff;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #326ac0;\n    cursor: pointer;\n  }\n"]);return A=function(){return e},e}var I=f.a.input(A()),B=function(e){var n=e.setCurrency,t=e.setCryptocurrency,c=Object(a.useState)([]),o=Object(s.a)(c,2),u=o[0],m=o[1],f=Object(a.useState)(!1),p=Object(s.a)(f,2),d=p[0],b=p[1],v=E("Select your currency","",[{code:"USD",name:"US Dollar"},{code:"MXN",name:"Mexican Peso"},{code:"COP",name:"Colombian Peso"},{code:"EUR",name:"Euro"},{code:"GBP",name:"Pound Sterling"}]),y=Object(s.a)(v,2),g=y[0],h=y[1],O=x("Select your cryptocurrency","",u),j=Object(s.a)(O,2),k=j[0],w=j[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",e.next=3,S.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:n=e.sent,m(n.data.Data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),""!==g.trim()&&""!==k.trim()?(b(!1),n(g),t(k)):b(!0)}},d?r.a.createElement(P,{message:"All fields are required."}):null,r.a.createElement(h,null),r.a.createElement(w,null),r.a.createElement(I,{type:"submit",value:"Calculate"}))};function U(){var e=Object(m.a)(["\n  font-size: 30px;\n"]);return U=function(){return e},e}function H(){var e=Object(m.a)(["\n  font-size: 18px;\n"]);return H=function(){return e},e}function T(){var e=Object(m.a)(["\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n  span {\n    font-weight: bold;\n  }\n"]);return T=function(){return e},e}var F=f.a.div(T()),L=f.a.p(H()),q=f.a.p(U()),R=function(e){var n=e.result;return 0===Object.keys(n).length?null:r.a.createElement(F,null,r.a.createElement(q,null,"The price is: ",r.a.createElement("span",null,n.PRICE)),r.a.createElement(L,null,"Highest price of the day: ",r.a.createElement("span",null,n.HIGHDAY)),r.a.createElement(L,null,"Lowest price of the day: ",r.a.createElement("span",null,n.LOWDAY)),r.a.createElement(L,null,"Variation last 24 hours: ",r.a.createElement("span",null,n.CHANGEPCT24HOUR)),r.a.createElement(L,null,"Last update: ",r.a.createElement("span",null,n.LASTUPDATE)))},G=(t(48),function(){return r.a.createElement("div",{className:"sk-folding-cube"},r.a.createElement("div",{className:"sk-cube1 sk-cube"}),r.a.createElement("div",{className:"sk-cube2 sk-cube"}),r.a.createElement("div",{className:"sk-cube4 sk-cube"}),r.a.createElement("div",{className:"sk-cube3 sk-cube"}))});function M(){var e=Object(m.a)(["\n  font-family: 'Bebas Neue', cursive;\n  color: #fff;\n  text-align: left;\n  font-weight: 700;\n  font-size: 50px;\n  margin-bottom: 50px;\n  margin-top: 80px;\n\n  &::after {\n    content: '';\n    width: 100px;\n    height: 6px;\n    background-color: #66a2fe;\n    display: block;\n  }\n"]);return M=function(){return e},e}function W(){var e=Object(m.a)(["\n  max-width: 100%;\n  margin-top: 5rem;\n"]);return W=function(){return e},e}function Y(){var e=Object(m.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  @media (min-width: 992px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 2rem;\n  }\n"]);return Y=function(){return e},e}var J=f.a.div(Y()),Q=f.a.img(W()),V=f.a.h1(M());var X=function(){var e=Object(a.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),m=u[0],f=u[1],p=Object(a.useState)({}),b=Object(s.a)(p,2),v=b[0],y=b[1],g=Object(a.useState)(!1),E=Object(s.a)(g,2),h=E[0],O=E[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return");case 2:return n="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(m,"&tsyms=").concat(t),e.next=5,S.a.get(n);case 5:a=e.sent,O(!0),setTimeout((function(){O(!1),y(a.data.DISPLAY[m][t])}),3e3);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,m]);var j=h?r.a.createElement(G,null):r.a.createElement(R,{result:v});return r.a.createElement(J,null,r.a.createElement("div",{className:""},r.a.createElement(Q,{src:d.a,alt:"crypto image"})),r.a.createElement("div",{className:""},r.a.createElement(V,null,"Quote cryptocurrencies instantly"),r.a.createElement(B,{setCurrency:c,setCryptocurrency:f}),j))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.cb67253a.chunk.js.map
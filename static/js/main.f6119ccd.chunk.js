(this["webpackJsonpsimple-react-app"]=this["webpackJsonpsimple-react-app"]||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(1),c=n(2),u=r.a.createContext({isAuthorised:!1}),s=function(){return Object(a.useContext)(u)},d=(JSON.stringify({result:"error",error:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),JSON.stringify({result:"ok"})),f=function(e){var t=e.children,n=Object(a.useState)(!0),i=Object(l.a)(n,2),o=i[0],c=i[1],s=Object(a.useState)(""),f=Object(l.a)(s,2),p=f[0],m=f[1];return r.a.createElement(u.Provider,{value:{isAuthorised:o,setIsAuthorised:c,login:function(e){e.email,e.password;Promise.resolve(d).then((function(e){var t=JSON.parse(e);t.error?(m(t.error),c(!1)):c(!0)}))},logout:function(e){e.email,e.password;Promise.resolve(d).then((function(e){JSON.parse(e).error||(m(""),c(!1))})),c(!1),m("")},loginError:p,resetLoginError:function(){m("")}}},t)},p=n(3);function m(){var e=Object(c.a)(["\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #fff;\n  height: 136px;\n  padding-top: 30px;\n\n  button {\n    width: 165px;\n    height: 40px;\n    text-align: center;\n    color: #f0f0f6;\n    border-radius: 20px;\n    background-color: #1a237e;\n\n    font-size: 18px;\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    margin: 0 auto;\n    box-sizing: content-box;\n    span {\n      margin-left: 10px;\n    }\n  }\n  p {\n    margin: 0px;\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    color: #d32f2f;\n    text-align: center;\n  }\n"]);return m=function(){return e},e}function h(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  box-sizing: content-box;\n\n  p:last-child {\n    color: #d32f2f;\n  }\n  .form-input {\n    display: block;\n    border: 2px solid #1a237e;\n    border-radius: 6px;\n    height: 40px;\n    padding: 10px;\n    width: 245px;\n    font-size: 18px;\n    color: #a0a0a0;\n    :focus {\n      outline: 0;\n    }\n  }\n  .error {\n    border-color: #d32f2f;\n  }\n"]);return h=function(){return e},e}function b(){var e=Object(c.a)(["\n  position: sticky;\n  display: flex;\n  height: 100px;\n  justify-content: space-around;\n  margin-bottom: 20px;\n"]);return b=function(){return e},e}function x(){var e=Object(c.a)(["\n  height: 250px;\n  background-color: #fff;\n  position: relative;\n  padding-top: 50px;\n"]);return x=function(){return e},e}function g(){var e=Object(c.a)(['\n  height: 60px;\n  background-color: #1a237e;\n  color: #f0f0f6;\n  text-align: center;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n\n  span {\n    display: block;\n    box-sizing: border-box;\n    font-size: 20pt;\n    font-family: "Open Sans", sans-serif;\n    padding: 15px;\n  }\n']);return g=function(){return e},e}function D(){var e=Object(c.a)(['\n  margin: 0 auto;\n  width: 480px;\n  font-family: "Open Sans", sans-serif;\n']);return D=function(){return e},e}var v=p.a.div(D()),E=p.a.div(g()),w=p.a.div(x()),O=p.a.div(b()),j=p.a.div(h()),S=p.a.div(m()),y=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(""),c=Object(l.a)(o,2),u=c[0],d=c[1],f=Object(a.useState)(!0),p=Object(l.a)(f,2),m=p[0],h=p[1],b=Object(a.useState)(!0),x=Object(l.a)(b,2),g=x[0],D=x[1],y=s(),Q=y.login,k=y.loginError,C=y.resetLoginError,U=function(e){var t=e.target.value;i(t),h(function(e){var t=document.createElement("input");return t.type="email",t.setAttribute("value",e),t.validity.valid}(t)),C()};return r.a.createElement(v,null,r.a.createElement(E,null,r.a.createElement("span",null,"\u0412\u0445\u043e\u0434 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442")),r.a.createElement(w,null,r.a.createElement(O,null,r.a.createElement(j,null,r.a.createElement("p",null," \u041b\u043e\u0433\u0438\u043d "),r.a.createElement("input",{className:"form-input ".concat(!m&&"error"),type:"text",value:n,onChange:function(e){return U(e)},id:"email"}),r.a.createElement("p",{id:"email-error"},!m&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email","\xa0"))),r.a.createElement(O,null,r.a.createElement(j,null,r.a.createElement("p",null," \u041f\u0430\u0440\u043e\u043b\u044c "),r.a.createElement("input",{className:"form-input ".concat(!g&&"error"),type:"password",value:u,onChange:function(e){return function(e){var t,n=e.target.value;d(n),D(!(t=n).match(/[0-9]/i)&&!!t.match(/([A-Z_a-z]{7,})+?/i)),C()}(e)},id:"password"}),r.a.createElement("p",{id:"password-error"},!g&&"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c","\xa0")))),r.a.createElement(S,null,r.a.createElement("button",{onClick:function(e){return function(e){Q({email:n,password:u}),e.preventDefault()}(e)}},"\u0412\u0445\u043e\u0434 ",r.a.createElement("span",null,"\u2192")),r.a.createElement("p",{id:"form-error"},k)))},Q=(n(31),function(){var e=s();return r.a.createElement(r.a.Fragment,null,!(null===e||void 0===e?void 0:e.isAuthorised)&&r.a.createElement("div",{className:"grid-container"},r.a.createElement(y,null)))}),k=function(e){var t=e.children;return s().isAuthorised?r.a.createElement(r.a.Fragment,null,t," "):null},C=n(5),U=[{favorite:!1,asset:"EUR/USD",quote:"1.12",date:new Date("2019-04-08")},{favorite:!1,asset:"USD/JPY",quote:"107.95",date:new Date("2019-04-11")},{favorite:!1,asset:"GBP/USD",quote:"1.238",date:new Date("2019-04-18")},{favorite:!1,asset:"AUD/USD",quote:"0.7048",date:new Date("2020-04-28")},{favorite:!1,asset:"USD/CHF",quote:"0.9888",date:new Date("2020-04-08")},{favorite:!1,asset:"USD/CAD",quote:"1.31",date:new Date("2019-02-08")}],A=r.a.createContext({currencyList:[]}),P=function(){return Object(a.useContext)(A)},N=new Set,L=new Set,z=function(e){var t=e.children,n=Object(a.useState)(U),i=Object(l.a)(n,2),o=i[0],c=i[1],u=Object(a.useState)([]),s=Object(l.a)(u,2),d=s[0],f=s[1],p=Object(a.useState)([]),m=Object(l.a)(p,2),h=m[0],b=m[1],x=Object(a.useState)([]),g=Object(l.a)(x,2),D=g[0],v=g[1],E=Object(a.useState)([]),w=Object(l.a)(E,2),O=w[0],j=w[1],S=Object(a.useState)(null),y=Object(l.a)(S,2),Q=y[0],k=y[1],P=Object(a.useState)(0),z=Object(l.a)(P,2),F=z[0],J=z[1],Y=Object(a.useState)(["USD",{disabled:!1}]),T=Object(l.a)(Y,2),B=T[0],q=T[1],H=Object(a.useState)(["USD",{disabled:!1}]),M=Object(l.a)(H,2),R=M[0],G=M[1];Object(a.useEffect)((function(){U.forEach((function(e){var t=e.asset,n=e.quote,a=t.split("/"),r=Object(l.a)(a,2),i=r[0],o=r[1];L.add([i,o,parseFloat(n)]),L.add([o,i,parseFloat((1/n).toFixed(4))]),N.add(i),N.add(o)})),f(Object(C.a)(N.values())),b(Object(C.a)(L.values())),v(Object(C.a)(N.values()).map((function(e){return[e,{disabled:!1}]}))),j(Object(C.a)(N.values()).map((function(e){return[e,{disabled:!1}]})))}),[]);return r.a.createElement(A.Provider,{value:{data:o,setFavorite:function(e){U[e]&&(U[e].favorite=!U[e].favorite,c(Object(C.a)(U.sort((function(e,t){return t.favorite-e.favorite})))))},currencyListOne:D,currencyListTwo:O,currencyList:d,currencyListData:h,calculateExchange:function(){var e=function(e){var t=e.currencyListData,n=e.exchangeOne,a=e.exchangeTwo;if(n[0]===a[0])return 1;var r=t.filter((function(e){var t=Object(l.a)(e,2),r=t[0],i=t[1];return r===n[0]&&i===a[0]}));return r.length?r[0][2]:null}({currencyListData:h,exchangeOne:B,exchangeTwo:R});k((e*F).toFixed(2))},exchangeSummary:Q,exchangeAmount:F,setExchangeAmount:J,setExchangeOne:q,setExchangeTwo:G,exchangeTwo:R,exchangeOne:B,validateExchangeOne:function(e){var t=h.filter((function(t){return Object(l.a)(t,2)[0]===e})).map((function(e){return Object(l.a)(e,2)[1]})),n=O.map((function(n){var a=Object(l.a)(n,2),r=a[0],i=a[1];return t.includes(r)||r===e?i.disabled=!1:i.disabled=!0,n}));q([e,{disabled:!1}]),G(n[n.findIndex((function(e){return!Object(l.a)(e,2)[1].disabled}))]),j(Object(C.a)(n))},validateExchangeTwo:function(e){return G([e,{disabled:!1}])}}},t)},F=n(9),J=n.n(F);function Y(){var e=Object(c.a)(["\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-spacing: 0;\n  background-color: white;\n  max-width: 750px;\n  overflow: hidden;\n  border-top-right-radius: 10px;\n  width: 100%;\n\n  thead {\n    background-color: #1a237e;\n  }\n  th,\n  td {\n    padding: 20px 0;\n    text-align: left;\n  }\n  th {\n    color: white;\n  }\n  td {\n    border-bottom: 1px solid #e5e5e5;\n    width: 200px;\n  }\n  td:first-child,\n  td:last-child {\n    border: 0;\n  }\n  td:first-child {\n    width: 60px;\n    color: #1a237e;\n    text-align: right;\n    padding-right: 10px;\n  }\n  td:last-child {\n    width: 40px;\n  }\n  tr:first-child td {\n    padding-top: 40px;\n  }\n  tr:last-child td {\n    padding-bottom: 40px;\n    border: 0;\n  }\n"]);return Y=function(){return e},e}var T=p.a.table(Y()),B=function(){var e=P(),t=e.data,n=e.setFavorite,a=function(){return r.a.createElement(r.a.Fragment,null,"\u2606")},i=function(){return r.a.createElement(r.a.Fragment,null,"\u2605")};return r.a.createElement(T,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\xa0"),r.a.createElement("th",null,"\u0412\u0430\u043b\u044e\u0442\u043d\u0430\u044f \u041f\u0430\u0440\u0430"),r.a.createElement("th",null,"\u041a\u0430\u0442\u0438\u0440\u043e\u0432\u043a\u0430"),r.a.createElement("th",null,"\u0414\u0430\u0442\u0430 \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f"),r.a.createElement("th",null,"\xa0"))),r.a.createElement("tbody",null,t.map((function(e,t){var o=e.favorite,l=e.asset,c=e.quote,u=e.date;return r.a.createElement("tr",{key:t,onClick:function(e){return n(t)}},r.a.createElement("td",null,o?r.a.createElement(i,null):r.a.createElement(a,null)),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,r.a.createElement(J.a,{format:"YYYY-MM-DD"},u)),r.a.createElement("td",null,"\xa0"))}))))};function q(){var e=Object(c.a)(["\n  border-radius: 30px;\n  background-color: ",";\n  color: ",";\n  padding: 15px 30px;\n  font-size: 18px;\n  :focus {\n    outline: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"]);return q=function(){return e},e}var H=p.a.button(q(),(function(e){return e.disabled?"#e1e1e1":"#1a237e"}),(function(e){return e.disabled?"#1a237e":"white"})),M=function(e){var t=e.disabled,n=e.children,a=P().calculateExchange;return r.a.createElement(H,{disabled:t,onClick:function(e){e.preventDefault(),a()}},n)},R=n(6),G=n(23);function I(){var e=Object(c.a)(["\n  position: relative;\n  display: inline-flex;\n\n  select {\n    max-width: 98px;\n    width: 100%;\n    border-radius: 10px;\n    border: 2px solid #1a237e;\n    padding: 10px;\n    color: back;\n    font-size: 18px;\n    margin-right: 30px;\n    :focus {\n      outline: none;\n    }\n  }\n"]);return I=function(){return e},e}var V=p.a.div(I()),Z=r.a.memo((function(e){var t=e.defaultValue,n=e.optionsList,a=e.onChangeHandler,i=[];n.map((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];return i.push({value:n,label:n,disabled:a.disabled})}));var o={control:function(e){return Object(R.a)({},e,{border:0,boxShadow:0,"&:focus":{outline:0}})},option:function(e,t){return Object(R.a)({},e,{border:"none"})},container:function(e,t){return Object(R.a)({},e,{border:"2px solid #1a237e",borderRadius:15,padding:5,marginRight:20})},indicatorSeparator:function(e,t){return Object(R.a)({},e,{display:"none"})},placeholder:function(e,t){return Object(R.a)({},e)},menu:function(e,t){return Object(R.a)({},e,{width:"100%",padding:0,marginLeft:-5,marginTop:-2,marginRight:0,marginButtom:0,borderBottomLeftRadius:15,borderBottomRightRadius:15,border:"2px solid #1a237e",boxShadow:0,zIndex:1e3})}};return r.a.createElement(V,null,r.a.createElement(G.a,{styles:o,defaultValue:t,options:i,placeholder:t,onChange:a,isOptionDisabled:function(e){return e.disabled}}))}));function _(){var e=Object(c.a)(["\n  input {\n    max-width: 98px;\n    width: 100%;\n    border-radius: 10px;\n    border: 2px solid #1a237e;\n    padding: 10px;\n    color: back;\n    font-size: 18px;\n    margin-right: 30px;\n    :focus {\n      outline: none;\n    }\n  }\n"]);return _=function(){return e},e}var K=p.a.form(_()),W=function(){var e=P(),t=e.currencyListOne,n=e.currencyListTwo,a=e.exchangeOne,i=e.exchangeTwo,o=e.exchangeAmount,l=e.setExchangeAmount,c=e.validateExchangeOne,u=e.validateExchangeTwo;return r.a.createElement(K,null,r.a.createElement("input",{type:"text",value:o,onChange:function(e){return l(parseFloat(e.target.value))}}),r.a.createElement(Z,{defaultValue:a[0],optionsList:t,onChangeHandler:function(e){var t=e.value;return c(t)}}),r.a.createElement(Z,{defaultValue:i[0],optionsList:n,onChangeHandler:function(e){var t=e.value;return u(t)}}),r.a.createElement(M,{disabled:!o},"\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c"))};function X(){var e=Object(c.a)(['\n  background-color: #e1e1e1;\n  width: 760px;\n\n  /* overflow: hidden; */\n  .calc-header {\n    display: flex;\n    background-color: #1a237e;\n    color: #e1e1e1;\n    font-family: "Open Sans", sans-serif;\n    font-size: 18px;\n    font-weight: 300;\n    padding: 20px 50px;\n    border-top-right-radius: 20px;\n  }\n\n  .calc-body {\n    background-color: white;\n    border-bottom-right-radius: 20px;\n    border-bottom-left-radius: 20px;\n  }\n  .calc-body p {\n    margin: 0;\n    padding: 20px 0 10px;\n    font-family: "Open Sans", sans-serif;\n  }\n  .calc-row {\n    padding: 0 0 70px;\n    margin: 0 70px;\n    p.calc-result {\n      font-size: 30px;\n      font-family: "Open Sans", sans-serif;\n      padding: 0;\n      margin: 0;\n    }\n  }\n  .calc-row:first-child {\n    border-bottom: 1px solid #e1e1e1;\n  }\n']);return X=function(){return e},e}var $=p.a.div(X()),ee=function(){var e=P().exchangeSummary;return r.a.createElement($,{className:"calc-container"},r.a.createElement("div",{className:"calc-header"},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0432\u0430\u043b\u044e\u0442"),r.a.createElement("div",{className:"calc-body"},r.a.createElement("div",{className:"calc-row"},r.a.createElement("p",null,"\u0421\u0443\u043c\u043c\u0430"),r.a.createElement(W,null)),r.a.createElement("div",{className:"calc-row"},r.a.createElement("p",null,"\u0418\u0442\u043e\u0433\u043e"),r.a.createElement("p",{className:"calc-result"},e,"\xa0"))))},te=[{asset:"USD/JPD",startDate:new Date("2019-04-08 04:30:00"),startQuote:"1.12222",finishDate:new Date("2019-04-08 06:30:00"),finishQuote:"1.2312",profit:"+1"},{asset:"CAD/JPD",startDate:new Date("2019-02-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2019-04-08 06:30:00"),finishQuote:"1.2312",profit:"+10.08"},{asset:"CAD/USD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2019-03-08 05:30:00"),finishQuote:"1.2312",profit:"-10.08"},{asset:"USD/CAD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2020-05-08 05:30:00"),finishQuote:"1.2312",profit:"4"},{asset:"USD/CAD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2020-05-08 05:30:00"),finishQuote:"1.2312",profit:"4"},{asset:"USD/CAD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2020-05-08 05:30:00"),finishQuote:"1.2312",profit:"4"},{asset:"USD/CAD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2020-05-08 05:30:00"),finishQuote:"1.2312",profit:"4"},{asset:"GBP/USD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2019-03-08 02:30:00"),finishQuote:"1.2312",profit:"-0.08"},{asset:"USD/JPD",startDate:new Date("2019-04-08 04:30:00"),startQuote:"1.12222",finishDate:new Date("2019-04-08 06:30:00"),finishQuote:"1.2312",profit:"+0.08"},{asset:"CAD/JPD",startDate:new Date("2019-02-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2019-04-08 06:30:00"),finishQuote:"1.2312",profit:"-1.08"},{asset:"CAD/USD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2019-03-08 05:30:00"),finishQuote:"1.2312",profit:"-10.08"},{asset:"USD/CAD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2019-05-08 05:30:00"),finishQuote:"1.2312",profit:"1.08"},{asset:"GBP/USD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2019-03-08 02:30:00"),finishQuote:"1.2312",profit:"-0.08"},{asset:"USD/JPD",startDate:new Date("2019-04-08 04:30:00"),startQuote:"1.12222",finishDate:new Date("2019-04-08 06:30:00"),finishQuote:"1.2312",profit:"+0.08"},{asset:"CAD/JPD",startDate:new Date("2019-02-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2019-04-08 06:30:00"),finishQuote:"1.2312",profit:"+10.08"},{asset:"CAD/USD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2019-03-08 05:30:00"),finishQuote:"1.2312",profit:"-10.08"},{asset:"USD/CAD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2019-05-08 05:30:00"),finishQuote:"1.2312",profit:"1.08"},{asset:"GBP/USD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2019-03-08 02:30:00"),finishQuote:"1.2312",profit:"-0.08"},{asset:"GBP/USD",startDate:new Date("2018-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2018-02-08 02:30:00"),finishQuote:"1.2312",profit:"102.08"},{asset:"GBP/USD",startDate:new Date("2019-03-08 06:30:00"),startQuote:"1.12222",finishDate:new Date("2018-03-08 02:30:00"),finishQuote:"1.2312",profit:"100.08"}],ne=n(22),ae=n.n(ne),re=r.a.createContext(),ie=function(){return Object(a.useContext)(re)},oe=function(e){var t=e.children,n=Object(a.useState)([]),i=Object(l.a)(n,2),o=(i[0],i[1]),c=Object(a.useState)([]),u=Object(l.a)(c,2),s=(u[0],u[1]),d=Object(a.useState)([]),f=Object(l.a)(d,2),p=f[0],m=f[1],h=Object(a.useState)(0),b=Object(l.a)(h,2),x=b[0],g=b[1],D=Object(a.useState)(0),v=Object(l.a)(D,2),E=v[0],w=v[1];Object(a.useEffect)((function(){var e={result:"ok",deals:te},t=[];return Promise.resolve(e).then((function(e){if("ok"===e.result){var n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.sort((function(e,t){var n=e.finishDate,a=t.finishDate;return new Date(a).getTime()-new Date(n).getTime()})),a=[],r=0;r<n.length;r++)for(var i=n[r],o=0,l=0;l<n.length;l++)ae.a.isEqual(i,n[l])&&(o<2?o++:delete n[l]);a=n.filter((function(e){return void 0!==e}));var c=0,u=a.map((function(e){return Number.parseFloat(e.profit)<0?c<2?(c++,e):void 0:e})).filter((function(e){return void 0!==e})),s=u.findIndex((function(e){var t=e.profit;return Number.parseFloat(t)>100}));if(s>10*t+10){var d=10*t+10-1,f=s,p=[u[d],u[f]];u[f]=p[0],u[d]=p[1]}return u}(e.deals,x);t=n.splice(10*x,10),w(Math.floor(e.deals.length/10)),o(e.deals),s(n),m(t)}})),function(){return m(t)}}),[x]);return r.a.createElement(re.Provider,{value:{data:p,backward:function(){g(x-1)},forward:function(){g(x+1)},currentPage:x,totalPages:E}},t)},le=function(){var e=ie(),t=e.currentPage,n=e.totalPages,a=e.forward,i=e.backward;return r.a.createElement("div",{className:"pagination-container"},t>0&&r.a.createElement("span",{onClick:i},"\u2190")," ",t+1," / ",n,t+1<n&&r.a.createElement("span",{onClick:a},"\u2192"))};function ce(){var e=Object(c.a)(['\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-spacing: 0;\n  background-color: white;\n  overflow: hidden;\n  border-top-right-radius: 10px;\n  width: 100%;\n  font-family: "Open Sans", sans-serif;\n  font-size: 18px;\n\n  thead {\n    background-color: #1a237e;\n  }\n  th,\n  td {\n    padding: 20px 0;\n    text-align: center;\n    width: 300px;\n    :nth-child(2) {\n      text-align: left;\n    }\n  }\n  th {\n    color: white;\n  }\n  td {\n    border-bottom: 1px solid #e5e5e5;\n    padding: 20px 10px;\n    :first-child {\n      padding-left: 10px;\n      border: 0;\n    }\n    :last-child {\n      padding-right: 10px;\n      border: 0;\n    }\n    :nth-child(2) {\n      padding-left: 0;\n    }\n  }\n\n  tr:last-child td {\n    border: 0;\n  }\n  tfoot {\n    td {\n      padding: 20px;\n      span {\n        text-decoration: none;\n        cursor: pointer;\n        color: #1a237e;\n        padding: 10px;\n      }\n    }\n  }\n']);return ce=function(){return e},e}var ue=p.a.table(ce()),se=function(){var e=ie().data;return r.a.createElement(ue,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\xa0"),r.a.createElement("th",null,"\u0410\u043a\u0442\u0438\u0432"),r.a.createElement("th",null,"\u041d\u0430\u0447\u0430\u043b\u043e"),r.a.createElement("th",null,"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0430"),r.a.createElement("th",null,"\u041a\u043e\u043d\u0435\u0446"),r.a.createElement("th",null,"\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0430"),r.a.createElement("th",null,"\u041f\u0440\u0438\u0431\u044b\u043b\u044c"),r.a.createElement("th",null,"\xa0"))),r.a.createElement("tbody",null,e.map((function(e,t){var n=e.startDate,a=e.asset,i=e.startQuote,o=e.finishDate,l=e.finishQuote,c=e.profit;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,"\xa0"),r.a.createElement("td",null,a),r.a.createElement("td",null,r.a.createElement(J.a,{format:"YYYY-MM-DD HH:mm:ss"},n)),r.a.createElement("td",null,i),r.a.createElement("td",null,r.a.createElement(J.a,{format:"YYYY-MM-DD HH:mm:ss"},o)),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,"\xa0"))}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:8},r.a.createElement(le,null)))))};function de(){var e=Object(c.a)(["\n  padding: 12px 50px;\n  margin: 0;\n  border: 2px solid #1a237e;\n  border-right: none;\n  border-bottom: none;\n\n  color: ",";\n  background: ",";\n\n  :last-child {\n    border-top-right-radius: 20px;\n    border-right: 2px solid #1a237e;\n  }\n  :first-child {\n    border-top-left-radius: 20px;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"]);return de=function(){return e},e}function fe(){var e=Object(c.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background: #e1e1e1;\n  justify-content: center;\n\n  .stretcher {\n    max-width: 1100px;\n    display: flex;\n    flex-direction: column;\n    margin-top: 100px;\n\n    .tab-wrapper {\n      display: flex;\n      align-items: center;\n      justify-content: left;\n      flex-direction: row;\n      padding: 0;\n      margin: 0;\n    }\n  }\n"]);return fe=function(){return e},e}var pe=p.a.div(fe()),me=p.a.a(de(),(function(e){return e.active?"white":"#1a237e"}),(function(e){return e.active?"#1a237e":"white"})),he=function(){var e=Object(a.useState)("currency"),t=Object(l.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)([!0,!1,!1]),c=Object(l.a)(o,2),u=c[0],s=c[1];return r.a.createElement(pe,null,r.a.createElement("div",{className:"stretcher"},r.a.createElement("div",{className:"tab-wrapper"},r.a.createElement(me,{onClick:function(e){i("currency"),s([1,0,0])},active:u[0]},"\u041a\u0443\u0440\u0441\u044b \u0432\u0430\u043b\u044e\u0442"),r.a.createElement(me,{onClick:function(e){i("calculator"),s([0,1,0])},active:u[1]},"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"),r.a.createElement(me,{onClick:function(e){i("history"),s([0,0,1])},active:u[2]},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f")),r.a.createElement(z,null,"currency"===n&&r.a.createElement(B,null),"calculator"===n&&r.a.createElement(ee,null),"history"===n&&r.a.createElement(oe,null,r.a.createElement(se,null)))))};function be(){var e=Object(c.a)(["\n  display: flex;\n  align-self: flex-end;\n  margin: 50px 110px 50px 0;\n  button {\n    padding: 10px 30px;\n    width: 150px;\n    color: #1a237e;\n    background-color: #e1e1e1;\n    border: 2px solid #1a237e;\n    cursor: pointer;\n    border-radius: 25px;\n    font-size: 18px;\n    justify-content: center;\n    :focus {\n      outline: none;\n    }\n  }\n"]);return be=function(){return e},e}var xe=p.a.div(be()),ge=function(){var e=s().logout;return r.a.createElement(xe,null,r.a.createElement("button",{id:"logout",onClick:function(t){return e(t)}},"\u0412\u044b\u0445\u043e\u0434"))},De=function(){return r.a.createElement(f,null,r.a.createElement(Q,null),r.a.createElement(k,null,r.a.createElement(he,null),r.a.createElement(ge,null)))};o.a.render(r.a.createElement(De,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f6119ccd.chunk.js.map
(this.webpackJsonpphoneinfo=this.webpackJsonpphoneinfo||[]).push([[0],{21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(2),u=t(15),a=t.n(u),o=(t(21),t(6)),i=t(3),s=t(4),l=t.n(s),d="/api/persons",h=function(e){return l.a.post(d,e).then((function(e){return e.data}))},j=function(){return l.a.get(d).then((function(e){return e.data}))},f=function(e){return l.a.delete("".concat(d,"/").concat(e))},b=function(e,n){return l.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},m=function(e){var n=e.message,t={color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBoottom:"10px"};return"err"===e.type&&(t.color="red"),null===n?null:Object(r.jsx)("div",{style:t,children:n})},O=function(e){var n=e.filter,t=e.handleChangeFilter;return Object(r.jsxs)("p",{children:["Filter shown with ",Object(r.jsx)("input",{value:n,onChange:t})]})},p=function(e){var n=e.newName,t=e.newNumber,c=e.handleChangeName,u=e.handleChangeNumber,a=e.handleSubmit;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Add a new"}),Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:n,onChange:c})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:t,onChange:u})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",onClick:a,children:"add"})})]})]})},x=function(e){var n=e.person,t=e.handleDelete;return Object(r.jsxs)("div",{children:[n.name,"  ",n.number,Object(r.jsx)("button",{onClick:t,children:"Delete"})]})},v=function(e){var n=e.filteredPersons,t=e.handleDelete;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Numbers"}),0===n.length?"...":n.map((function(e){return Object(r.jsx)(x,{person:e,handleDelete:t(e.id)})}))]})},g=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],a=Object(c.useState)(t),s=Object(i.a)(a,2),l=s[0],d=s[1],x=Object(c.useState)(""),g=Object(i.a)(x,2),w=g[0],C=g[1],S=Object(c.useState)(""),y=Object(i.a)(S,2),N=y[0],k=y[1],D=Object(c.useState)(""),T=Object(i.a)(D,2),E=T[0],F=T[1],P=Object(c.useState)([null,""]),A=Object(i.a)(P,2),B=A[0],I=A[1];return Object(c.useEffect)((function(){return d(t.filter((function(e){return e.name.startsWith(E)})))}),[t,E]),Object(c.useEffect)((function(){j().then((function(e){return u(e)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(m,{message:B[0],type:B[1]}),Object(r.jsx)(O,{filter:E,handleChangeFilter:function(e){return F(e.target.value)}}),Object(r.jsx)(p,{newName:w,newNumber:N,handleChangeName:function(e){return C(e.target.value)},handleChangeNumber:function(e){return k(e.target.value)},handleSubmit:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(w)){if(window.confirm("".concat(w," is already added to the phonebook, replace the older?"))){var n=Object(o.a)(Object(o.a)({},t.filter((function(e){return e.name===w}))[0]),{},{number:N});b(n.id,n).then((function(e){return u(t.map((function(t){return t.id!==n.id?t:e})))})).catch((function(e){e.response.data.error?(I([e.response.data.error,"err"]),setTimeout((function(){I([null,""])}),2e3)):(I(["Information of ".concat(w," has already been removed from server"),"err"]),setTimeout((function(){I([null,""])}),2e3))}))}}else{var r={name:w,number:N};h(r).then((function(e){if(!e.error)return u(t.concat(e)),r.name;I(["Error : ".concat(e.error),"err"]),setTimeout((function(){return I([null,""])}),2e3)})).then((function(e){e&&(I(["Added ".concat(e),""]),setTimeout((function(){return I([null,""])}),2e3))})).catch((function(e){I([e.response.data.error,"err"]),setTimeout((function(){return I([null,""])}),2e3)}))}C(""),k("")}}),Object(r.jsx)(v,{filteredPersons:l,handleDelete:function(e){return function(n){f(e).then((function(){return j()})).then((function(e){return u(e)}))}}})]})};a.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7415c9e0.chunk.js.map
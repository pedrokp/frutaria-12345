(this.webpackJsonpfrutaria=this.webpackJsonpfrutaria||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(4),c=n.n(u),l=n(1),i=(n(25),n(9)),o="ADICIONAR_FRUTA",f="REMOVER_FRUTA",d=function(e){return{type:o,payload:e}},m=function(e){return{type:f,payload:e}},s=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(0),o=Object(i.a)(c,2),f=o[0],m=o[1],s=Object(l.b)();return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:new Date,nome:n,quantidade:f};s(d(t))}},r.a.createElement("input",{type:"text",name:n,placeholder:"Fruta",required:!0,onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{type:"number",name:f,placeholder:"Quantidade",required:!0,onChange:function(e){return m(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Adicionar"))},E=function(e){var t=e.fruta,n=Object(l.b)();return r.a.createElement("div",{className:"fruta"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Fruta: ")," ",t.nome),r.a.createElement("li",null,r.a.createElement("strong",null,"Quantidade: ")," ",t.quantidade)),r.a.createElement("button",{onClick:function(){return n(m(t))}},"\xd7"))},p=function(){var e=Object(l.c)((function(e){return e.frutaReducers.frutas}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Lista de Frutas"),r.a.createElement(s,null),e.map((function(e){return r.a.createElement(E,{key:e.id,fruta:e})})))};var b=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(p,null))},O=(n(26),n(2)),v=n(13),_=n(12),y={frutas:[]},h=Object(O.b)({frutaReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return{frutas:[].concat(Object(_.a)(e.frutas),[Object(v.a)({},t.payload)])};case f:return{frutas:e.frutas.filter((function(e){return e.id!==t.payload.id}))};default:return e}}}),j=Object(O.c)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(l.a,{store:j},r.a.createElement(b,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9f6c42ef.chunk.js.map
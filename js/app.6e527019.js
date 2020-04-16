(function(t){function e(e){for(var n,i,c=e[0],d=e[1],u=e[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var d=o[i];0!==r[d]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"26da722c"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var a,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t);var u=new Error;a=function(e){d.onerror=d.onload=null,clearTimeout(s);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,o[1](u)}r[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:d})}),12e4);d.onerror=d.onload=a,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/deploy-vue-todolist/",c.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var s=0;s<d.length;s++)e(d[s]);var l=u;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},2086:function(t,e,o){"use strict";var n=o("577b"),r=o.n(n);r.a},"2a8b":function(t,e,o){"use strict";var n=o("a4a3"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e),o.d(e,"eventBus",(function(){return U}));o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header",[o("div",{attrs:{slot:"header-routes",id:"nav"},slot:"header-routes"},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("| "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)]),o("transition",{attrs:{appear:"",name:"slide-fade",mode:"out-in"}},[o("router-view")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("Todo List")]),t._t("header-routes")],2)},c=[],d={name:"Header"},u=d,s=(o("8aee"),o("2877")),l=Object(s["a"])(u,i,c,!1,null,"ee4f00fe",null),p=l.exports,f={name:"app",components:{Header:p}},m=f,h=(o("034f"),Object(s["a"])(m,r,a,!1,null,null,null)),v=h.exports,b=(o("d3b7"),o("8c4f")),y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.delTodo}})],1)},_=[],g=(o("99af"),o("4de4"),o("2909")),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":t.delTodo}})],1)})),0)},j=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounce","leave-active-class":"animated slideOutRight"}},[t.show?o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{click:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:t.delTodo}},[t._v("x")])])]):t._e()])],1)},O=[],x={name:"TodoItem",props:{todo:{type:Object}},data:function(){return{show:!0}},methods:{markComplete:function(){this.todo.completed=!this.todo.completed},delTodo:function(){this.$emit("del-todo",this.todo.id),this.show=!this.show}},created:function(){U.$on("addItemEventBus",(function(t){console.log("addItemEventBus: ",t)}))}},k=x,E=(o("2086"),Object(s["a"])(k,w,O,!1,null,"7994cf17",null)),$=E.exports,P={name:"Todos",components:{TodoItem:$},props:{todos:{type:Array}},methods:{delTodo:function(t){this.$emit("del-todo",t)}}},A=P,C=Object(s["a"])(A,T,j,!1,null,"51ad6936",null),H=C.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo ..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},S=[],B={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(){var t={title:this.title,completed:!1};this.$emit("add-todo",t),U.$emit("addItemEventBus",!0),this.title=""}}},M=B,L=(o("2a8b"),Object(s["a"])(M,I,S,!1,null,"294be446",null)),J=L.exports,q=o("bc3a"),D=o.n(q),N={name:"Home",components:{Todos:H,AddTodo:J},data:function(){return{todos:[]}},methods:{delTodo:function(t){var e=this;D.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(o){return e.todos=e.todos.filter((function(e){return e.id!==t}))})).catch((function(t){return console.log(t)}))},addTodo:function(t){var e=this,o=t.title,n=t.completed;D.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then((function(t){return e.todos=[].concat(Object(g["a"])(e.todos),[t.data])})).catch((function(t){return console.log(t)}))}},created:function(){var t=this;D.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return t.todos=e.data})).catch((function(t){return console.log(t)}))}},R=N,z=(o("cccb"),Object(s["a"])(R,y,_,!1,null,null,null)),F=z.exports;n["a"].use(b["a"]);var G=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],K=new b["a"]({routes:G}),Q=K;n["a"].config.productionTip=!1;var U=new n["a"];new n["a"]({router:Q,render:function(t){return t(v)}}).$mount("#app")},"577b":function(t,e,o){},"5ced":function(t,e,o){},"85ec":function(t,e,o){},"8aee":function(t,e,o){"use strict";var n=o("916d"),r=o.n(n);r.a},"916d":function(t,e,o){},a4a3:function(t,e,o){},cccb:function(t,e,o){"use strict";var n=o("5ced"),r=o.n(n);r.a}});
//# sourceMappingURL=app.6e527019.js.map
(function(t){function e(e){for(var n,a,o=e[0],s=e[1],u=e[2],i=0,b=[];i<o.length;i++)a=o[i],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(b.length)b.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var t,e=0;e<l.length;e++){for(var r=l[e],n=!0,a=1;a<r.length;a++){var o=r[a];0!==c[o]&&(n=!1)}n&&(l.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},c={app:0},l=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-492f7a5b":"572b6cd0","chunk-64b85985":"42163e4b","chunk-74eabf8b":"09b43282"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={"chunk-492f7a5b":1,"chunk-64b85985":1,"chunk-74eabf8b":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-492f7a5b":"5ef01214","chunk-64b85985":"5ef01214","chunk-74eabf8b":"5ef01214"}[t]+".css",c=s.p+n,l=document.getElementsByTagName("link"),o=0;o<l.length;o++){var u=l[o],i=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(i===n||i===c))return e()}var b=document.getElementsByTagName("style");for(o=0;o<b.length;o++){u=b[o],i=u.getAttribute("data-href");if(i===n||i===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||c,l=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=n,delete a[t],d.parentNode.removeChild(d),r(l)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var n=c[t];if(0!==n)if(n)e.push(n[2]);else{var l=new Promise((function(e,r){n=c[t]=[e,r]}));e.push(n[2]=l);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=o(t);var b=new Error;u=function(e){i.onerror=i.onload=null,clearTimeout(d);var r=c[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",b.name="ChunkLoadError",b.type=n,b.request=a,r[1](b)}c[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var b=0;b<u.length;b++)e(u[b]);var d=i;l.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0f13":function(t,e,r){var n={"./boolean.vue":["7a88","chunk-74eabf8b"],"./select.vue":["9773","chunk-492f7a5b"],"./text.vue":["b75f","chunk-64b85985"]};function a(t){if(!r.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],a=e[0];return r.e(e[1]).then((function(){return r(a)}))}a.keys=function(){return Object.keys(n)},a.id="0f13",t.exports=a},"1fa0":function(t,e,r){},"26cd":function(t,e,r){},"2d6d":function(t,e,r){"use strict";r("26cd")},"4ecc":function(t,e,r){"use strict";r("1fa0")},"51ed":function(t,e,r){},5326:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},c=Object(n["g"])("Mailerlite"),l=Object(n["h"])("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-toggle":"collapse","data-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),o={class:"container-fluid"},s={class:"row"},u={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},i={class:"position-sticky pt-3"},b={class:"nav flex-column"},d={class:"nav-item"},f=Object(n["g"])("Dashboard"),h={class:"nav-item"},O=Object(n["g"])("Subscribers"),j={class:"nav-item"},p=Object(n["g"])("Fields"),m={class:"col-md-9 ml-sm-auto col-lg-10 px-md-4"};function v(t,e,r,v,y,g){var k=Object(n["y"])("router-link"),x=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["d"])("div",null,[Object(n["h"])("header",a,[Object(n["h"])(k,{class:"navbar-brand col-md-3 col-lg-2 mr-0 px-3",to:"/"},{default:Object(n["G"])((function(){return[c]})),_:1}),l]),Object(n["h"])("div",o,[Object(n["h"])("div",s,[Object(n["h"])("nav",u,[Object(n["h"])("div",i,[Object(n["h"])("ul",b,[Object(n["h"])("li",d,[Object(n["h"])(k,{class:"nav-link",to:"/",tag:"a"},{default:Object(n["G"])((function(){return[f]})),_:1})]),Object(n["h"])("li",h,[Object(n["h"])(k,{class:"nav-link",to:"/subscribers",tag:"a"},{default:Object(n["G"])((function(){return[O]})),_:1})]),Object(n["h"])("li",j,[Object(n["h"])(k,{class:"nav-link",to:"/fields",tag:"a"},{default:Object(n["G"])((function(){return[p]})),_:1})])])])]),Object(n["h"])("main",m,[Object(n["h"])(x)])])])])}var y={};y.render=v;var g=y,k=r("6c02"),x=Object(n["J"])("data-v-2310484b");Object(n["u"])("data-v-2310484b");var E=Object(n["h"])("h1",null,"Mailerlite test",-1);Object(n["s"])();var _=x((function(t,e,r,a,c,l){return Object(n["r"])(),Object(n["d"])("div",null,[E])})),V={name:"Home"};r("e6a7");V.render=_,V.__scopeId="data-v-2310484b";var w=V,S=Object(n["J"])("data-v-0cfa1c84");Object(n["u"])("data-v-0cfa1c84");var C=Object(n["h"])("h1",null,"Subscribers",-1),B={class:"text-right my-3"},F=Object(n["g"])("Create subscriber"),A={class:"table-responsive"},I={class:"table table-striped table-sm"},T=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",null,"#"),Object(n["h"])("th",null,"Name"),Object(n["h"])("th",null,"Email"),Object(n["h"])("th",null,"Address"),Object(n["h"])("th",null,"State"),Object(n["h"])("th",null,"Actions")])],-1),U={class:"btn-group btn-group-sm",role:"group","aria-label":"Actions"},M=Object(n["g"])("View"),L=Object(n["g"])("Edit");Object(n["s"])();var P=S((function(t,e,r,a,c,l){var o=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["d"])(n["a"],null,[C,Object(n["h"])("div",B,[Object(n["h"])(o,{class:"btn btn-outline-success",to:"/subscribers/create",tag:"a"},{default:S((function(){return[F]})),_:1})]),Object(n["h"])("div",A,[Object(n["h"])("table",I,[T,Object(n["h"])("tbody",null,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.subscribers,(function(t,e){return Object(n["r"])(),Object(n["d"])("tr",{key:t.id},[Object(n["h"])("td",null,Object(n["B"])(t.id),1),Object(n["h"])("td",null,Object(n["B"])(l.getFieldValue("name",e)),1),Object(n["h"])("td",null,Object(n["B"])(l.getFieldValue("email",e)),1),Object(n["h"])("td",null,Object(n["B"])(l.getFieldValue("address",e)),1),Object(n["h"])("td",null,Object(n["B"])(l.getFieldValue("state",e)),1),Object(n["h"])("td",null,[Object(n["h"])("div",U,[Object(n["h"])(o,{class:"btn btn-info",to:"/subscribers/".concat(t.id),tag:"button"},{default:S((function(){return[M]})),_:2},1032,["to"]),Object(n["h"])(o,{class:"btn btn-primary",to:"/subscribers/edit/".concat(t.id),tag:"button"},{default:S((function(){return[L]})),_:2},1032,["to"]),Object(n["h"])("button",{type:"button",class:"btn btn-danger",onClick:Object(n["I"])((function(r){return l.destroy(e,t.id)}),["stop","prevent"])},"Delete",8,["onClick"])])])])})),128))])])])],64)})),H=(r("4160"),r("a630"),r("a434"),r("3ca3"),r("159b"),r("bc3a")),N=r.n(H),D=r("8f99"),J=r.n(D),$={name:"Subscribers.vue",mounted:function(){var t=this;N.a.get("http://localhost:8000/api/subscribers").then((function(e){"success"===e.data.status&&Array.from(e.data.data).forEach((function(e){t.subscribers.push(e)}))}))},data:function(){return{subscribers:[]}},methods:{destroy:function(t,e){var r=this;N.a.delete("http://localhost:8000/api/subscribers/"+e).then((function(){return r.subscribers.splice(t,1)}))},getFieldValue:function(t,e){var r,n=J()(this.subscribers[e].fields).firstWhere("alias",t);return n&&(r="array"===n.type&&n.value?J()(n.extra).firstWhere("key",n.value).value:n.value),""!==r||r?r:"-"}}};r("addc");$.render=P,$.__scopeId="data-v-0cfa1c84";var W=$,G=Object(n["J"])("data-v-6c60ff58");Object(n["u"])("data-v-6c60ff58");var q=Object(n["h"])("h1",null,"Create subscriber",-1),z={key:0,class:"alert alert-danger"},R={key:0},K=Object(n["h"])("div",{class:"form-group"},[Object(n["h"])("button",{class:"btn btn-success",type:"submit"}," Save ")],-1);Object(n["s"])();var Q=G((function(t,e,r,a,c,l){return Object(n["r"])(),Object(n["d"])("div",null,[q,Object(n["h"])("form",{onSubmit:e[1]||(e[1]=Object(n["I"])((function(){return l.store.apply(l,arguments)}),["prevent","stop"]))},[c.errors?(Object(n["r"])(),Object(n["d"])("div",z,[c.errorMessage?(Object(n["r"])(),Object(n["d"])("h5",R,Object(n["B"])(c.errorMessage),1)):Object(n["e"])("",!0),Object(n["h"])("ul",null,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(l.validationErrors,(function(t,e,r){return Object(n["r"])(),Object(n["d"])("li",{key:r},Object(n["B"])(t),1)})),128))])])):Object(n["e"])("",!0),(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.fields,(function(t){return Object(n["r"])(),Object(n["d"])("div",{class:"form-group",key:t.id},[(Object(n["r"])(),Object(n["d"])(Object(n["z"])(l.currentFieldComponent(t)),{field:t,modelValue:c.form.fields[t.alias].value,"onUpdate:modelValue":function(e){return c.form.fields[t.alias].value=e}},null,8,["field","modelValue","onUpdate:modelValue"]))])})),128)),K],32)])})),X=(r("0481"),r("4069"),r("d3b7"),r("07ac"),{name:"CreateSubscriber",data:function(){return{fields:[],form:{fields:[]},errors:null,errorMessage:null}},mounted:function(){var t=this;N.a.get("http://localhost:8000/api/fields").then((function(e){var r={};Array.from(e.data.data).forEach((function(e){t.fields.push(e),r[e.alias]={id:e.id,alias:e.alias,value:null}})),t.form.fields=r}))},computed:{validationErrors:function(){if(!this.errors)return[];var t=Object.values(this.errors);return t=t.flat(),t}},methods:{store:function(){var t=this;N.a.post("http://localhost:8000/api/subscribers",this.form).then((function(){t.$router.push("/subscribers")})).catch((function(e){422===e.response.status?(t.errors=e.response.data.data,t.errorMessage=e.response.data.message):(t.errors=null,t.errorMessage=null)}))},currentFieldComponent:function(t){var e;switch(t.type){case"boolean":e="boolean";break;case"array":e="select";break;case"date":case"number":case"string":default:e="text"}return Object(n["i"])((function(){return r("0f13")("./"+e+".vue")}))}}});r("946d");X.render=Q,X.__scopeId="data-v-6c60ff58";var Y=X,Z=Object(n["J"])("data-v-612fc12f");Object(n["u"])("data-v-612fc12f");var tt=Object(n["h"])("h1",null,"Show subscriber",-1),et={key:0},rt=Object(n["h"])("dt",null,"Name",-1),nt=Object(n["h"])("dt",null,"Email",-1),at=Object(n["h"])("dt",null,"Address",-1),ct=Object(n["h"])("dt",null,"State",-1),lt=Object(n["g"])("Edit");Object(n["s"])();var ot=Z((function(t,e,r,a,c,l){var o=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["d"])("div",null,[tt,c.subscriber?(Object(n["r"])(),Object(n["d"])("dl",et,[rt,Object(n["h"])("dd",null,Object(n["B"])(l.getFieldValue("name")),1),nt,Object(n["h"])("dd",null,Object(n["B"])(l.getFieldValue("email")),1),at,Object(n["h"])("dd",null,Object(n["B"])(l.getFieldValue("address")),1),ct,Object(n["h"])("dd",null,Object(n["B"])(l.getFieldValue("state")),1)])):Object(n["e"])("",!0),c.subscriber?(Object(n["r"])(),Object(n["d"])(o,{key:1,class:"btn btn-primary",to:"/subscribers/edit/".concat(c.subscriber.id),tag:"button"},{default:Z((function(){return[lt]})),_:1},8,["to"])):Object(n["e"])("",!0)])})),st={name:"Subscriber",data:function(){return{subscriber:null}},mounted:function(){var t=this;N.a.get("http://localhost:8000/api/subscribers/"+this.$route.params.id).then((function(e){t.subscriber=e.data.data}))},computed:{getExtraFields:function(){return J()(this.subscriber.fields).whereNotIn("alias",["name","email","address","state"])}},methods:{getFieldValue:function(t){var e,r=J()(this.subscriber.fields).firstWhere("alias",t);return e="array"===r.type?J()(r.extra).firstWhere("key",r.value).value:r.value,""!==e||e?e:"-"}}};r("ea07");st.render=ot,st.__scopeId="data-v-612fc12f";var ut=st,it=Object(n["J"])("data-v-8767741e");Object(n["u"])("data-v-8767741e");var bt=Object(n["h"])("h1",null,"Edit subscriber",-1),dt={key:0,class:"alert alert-danger"},ft={key:0},ht=Object(n["h"])("div",{class:"form-group"},[Object(n["h"])("button",{class:"btn btn-success",type:"submit"}," Save ")],-1);Object(n["s"])();var Ot=it((function(t,e,r,a,c,l){return Object(n["r"])(),Object(n["d"])("div",null,[bt,Object(n["h"])("form",{onSubmit:e[1]||(e[1]=Object(n["I"])((function(){return l.store.apply(l,arguments)}),["prevent","stop"]))},[c.errors?(Object(n["r"])(),Object(n["d"])("div",dt,[c.errorMessage?(Object(n["r"])(),Object(n["d"])("h5",ft,Object(n["B"])(c.errorMessage),1)):Object(n["e"])("",!0),Object(n["h"])("ul",null,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(l.validationErrors,(function(t,e,r){return Object(n["r"])(),Object(n["d"])("li",{key:r},Object(n["B"])(t),1)})),128))])])):Object(n["e"])("",!0),(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.fields,(function(t){return Object(n["r"])(),Object(n["d"])("div",{class:"form-group",key:t.id},[(Object(n["r"])(),Object(n["d"])(Object(n["z"])(l.currentFieldComponent(t)),{field:t,modelValue:c.form.fields[t.alias].value,"onUpdate:modelValue":function(e){return c.form.fields[t.alias].value=e}},null,8,["field","modelValue","onUpdate:modelValue"]))])})),128)),ht],32)])})),jt={name:"EditSubscriber",data:function(){return{fields:[],form:{id:null,fields:[]},errors:null,errorMessage:null}},mounted:function(){var t=this;this.getFields().then((function(){return t.getSubscriber()})).then((function(e){t.form.id=e.id,Array.from(e.fields).forEach((function(e){var r=J()(t.form.fields).firstWhere("alias",e.alias);if(r){var n;switch(e.type){case"boolean":n=!!e.value&&e.value;break;default:n=e.value}r.value=n,r.subscriber_field_id=e.subscriber_field_id}}))}))},computed:{validationErrors:function(){if(!this.errors)return[];var t=Object.values(this.errors);return t=t.flat(),t}},methods:{getFields:function(){var t=this;return new Promise((function(e,r){N.a.get("http://localhost:8000/api/fields").then((function(r){var n={};Array.from(r.data.data).forEach((function(e){t.fields.push(e),n[e.alias]={id:e.id,alias:e.alias,value:"boolean"!==e.type&&null}})),t.form.fields=n,e()})).catch((function(t){r(t)}))}))},getSubscriber:function(){var t=this;return new Promise((function(e,r){N.a.get("http://localhost:8000/api/subscribers/"+t.$route.params.id).then((function(t){e(t.data.data)})).catch((function(t){r(t)}))}))},store:function(){var t=this;N.a.put("http://localhost:8000/api/subscribers/"+this.form.id,this.form).then((function(){t.$router.push("/subscribers")})).catch((function(e){422===e.response.status?(t.errors=e.response.data.data,t.errorMessage=e.response.data.message):(t.errors=null,t.errorMessage=null)}))},currentFieldComponent:function(t){var e;switch(t.type){case"boolean":e="boolean";break;case"array":e="select";break;case"date":case"number":case"string":default:e="text"}return Object(n["i"])((function(){return r("0f13")("./"+e+".vue")}))}}};r("2d6d");jt.render=Ot,jt.__scopeId="data-v-8767741e";var pt=jt,mt=Object(n["J"])("data-v-76e86db5");Object(n["u"])("data-v-76e86db5");var vt=Object(n["h"])("h1",null,"Fields",-1),yt={class:"text-right my-3"},gt=Object(n["g"])("Create field"),kt={class:"table-responsive"},xt={class:"table table-striped table-sm"},Et=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",null,"#"),Object(n["h"])("th",null,"Title"),Object(n["h"])("th",null,"Alias"),Object(n["h"])("th",null,"Type"),Object(n["h"])("th",null,"Actions")])],-1),_t={class:"btn-group btn-group-sm",role:"group","aria-label":"Actions"},Vt=Object(n["g"])("View"),wt=Object(n["g"])("Edit");Object(n["s"])();var St=mt((function(t,e,r,a,c,l){var o=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["d"])(n["a"],null,[vt,Object(n["h"])("div",yt,[Object(n["h"])(o,{class:"btn btn-outline-success",to:"/fields/create",tag:"a"},{default:mt((function(){return[gt]})),_:1})]),Object(n["h"])("div",kt,[Object(n["h"])("table",xt,[Et,Object(n["h"])("tbody",null,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.fields,(function(t,e){return Object(n["r"])(),Object(n["d"])("tr",{key:t.id},[Object(n["h"])("td",null,Object(n["B"])(t.id),1),Object(n["h"])("td",null,Object(n["B"])(t.title),1),Object(n["h"])("td",null,Object(n["B"])(t.alias),1),Object(n["h"])("td",null,Object(n["B"])(t.type),1),Object(n["h"])("td",null,[Object(n["h"])("div",_t,[Object(n["h"])(o,{class:"btn btn-info",to:"/fields/".concat(t.id),tag:"button"},{default:mt((function(){return[Vt]})),_:2},1032,["to"]),Object(n["h"])(o,{class:"btn btn-primary",to:"/fields/edit/".concat(t.id),tag:"button"},{default:mt((function(){return[wt]})),_:2},1032,["to"]),Object(n["h"])("button",{type:"button",class:"btn btn-danger",onClick:Object(n["I"])((function(r){return l.destroy(e,t.id)}),["stop","prevent"])},"Delete",8,["onClick"])])])])})),128))])])])],64)})),Ct={name:"Fields.vue",mounted:function(){var t=this;N.a.get("http://localhost:8000/api/fields").then((function(e){"success"===e.data.status&&(t.fields=e.data.data)}))},data:function(){return{fields:[]}},methods:{destroy:function(t,e){var r=this;N.a.delete("http://localhost:8000/api/fields/"+e).then((function(){return r.fields.splice(t,1)}))}}};r("4ecc");Ct.render=St,Ct.__scopeId="data-v-76e86db5";var Bt=Ct,Ft=Object(n["J"])("data-v-20bf39c0");Object(n["u"])("data-v-20bf39c0");var At=Object(n["h"])("h1",null,"Create field",-1),It={key:0,class:"alert alert-danger"},Tt={class:"form-group"},Ut=Object(n["h"])("label",{for:"title"},"Title",-1),Mt={class:"form-group"},Lt=Object(n["h"])("label",{for:"key"},"Alias",-1),Pt={class:"form-group"},Ht=Object(n["h"])("label",{for:"type"},"Type",-1),Nt=Object(n["f"])('<option value="date" data-v-20bf39c0>Date</option><option value="number" data-v-20bf39c0>Number</option><option value="string" data-v-20bf39c0>String</option><option value="boolean" data-v-20bf39c0>Boolean</option><option value="array" data-v-20bf39c0>List</option>',5),Dt={key:1,class:"form-group"},Jt=Object(n["h"])("label",{for:"type"},"Extra",-1),$t={class:"text-right my-3"},Wt={class:"table  table-sm"},Gt=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",null,"#"),Object(n["h"])("th",null,"key"),Object(n["h"])("th",null,"value"),Object(n["h"])("th",null,"Actions")])],-1),qt=Object(n["h"])("div",{class:"form-group"},[Object(n["h"])("button",{class:"btn btn-success",type:"submit"}," Save ")],-1);Object(n["s"])();var zt=Ft((function(t,e,r,a,c,l){return Object(n["r"])(),Object(n["d"])("div",null,[At,Object(n["h"])("form",{onSubmit:e[5]||(e[5]=Object(n["I"])((function(){return l.store.apply(l,arguments)}),["prevent","stop"]))},[c.errors?(Object(n["r"])(),Object(n["d"])("div",It,[Object(n["h"])("ul",null,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(l.validationErrors,(function(t,e,r){return Object(n["r"])(),Object(n["d"])("li",{key:r},Object(n["B"])(t),1)})),128))])])):Object(n["e"])("",!0),Object(n["h"])("div",Tt,[Ut,Object(n["H"])(Object(n["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.form.title=t}),id:"title",type:"text",class:"form-control",name:"title",placeholder:"Insert field's title",autocomplete:"off"},null,512),[[n["E"],c.form.title]])]),Object(n["h"])("div",Mt,[Lt,Object(n["H"])(Object(n["h"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.form.alias=t}),id:"alias",type:"text",class:"form-control",name:"alias",placeholder:"Insert field's alias",autocomplete:"off"},null,512),[[n["E"],c.form.alias]])]),Object(n["h"])("div",Pt,[Ht,Object(n["H"])(Object(n["h"])("select",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return c.form.type=t}),name:"type",id:"type",class:"form-control"},[Nt],512),[[n["D"],c.form.type]])]),"array"===c.form.type?(Object(n["r"])(),Object(n["d"])("div",Dt,[Jt,Object(n["h"])("div",$t,[Object(n["h"])("button",{class:"btn btn-sm btn-outline-success",onClick:e[4]||(e[4]=Object(n["I"])((function(){return l.addToList.apply(l,arguments)}),["stop","prevent"]))},"Add")]),Object(n["h"])("table",Wt,[Gt,Object(n["h"])("tbody",null,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.form.extra,(function(t,e){return Object(n["r"])(),Object(n["d"])("tr",{key:e},[Object(n["h"])("td",null,Object(n["B"])(e+1),1),Object(n["h"])("td",null,[Object(n["H"])(Object(n["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(t){return c.form.extra[e].key=t}},null,8,["onUpdate:modelValue"]),[[n["E"],c.form.extra[e].key]])]),Object(n["h"])("td",null,[Object(n["H"])(Object(n["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(t){return c.form.extra[e].value=t}},null,8,["onUpdate:modelValue"]),[[n["E"],c.form.extra[e].value]])]),Object(n["h"])("td",null,[Object(n["h"])("button",{class:"btn btn-sm btn-danger",onClick:Object(n["I"])((function(r){return l.removeFromList(t,e)}),["stop","prevent"])}," Remove ",8,["onClick"])])])})),128))])])])):Object(n["e"])("",!0),qt],32)])})),Rt={name:"CreateField",data:function(){return{form:{title:null,alias:null,type:null,extra:null},errors:null}},computed:{validationErrors:function(){var t=Object.values(this.errors);return t=t.flat(),t}},methods:{addToList:function(){null===this.form.extra&&(this.form.extra=[]),this.form.extra.push({key:null,value:null})},removeFromList:function(t,e){this.form.extra.splice(e,1)},store:function(){var t=this;N.a.post("http://localhost:8000/api/fields",this.form).then((function(){t.$router.push("/fields")})).catch((function(e){422===e.response.status?t.errors=e.response.data.data:t.errors=null}))}}};r("7e05");Rt.render=zt,Rt.__scopeId="data-v-20bf39c0";var Kt=Rt,Qt=Object(n["J"])("data-v-6a40e0f5");Object(n["u"])("data-v-6a40e0f5");var Xt=Object(n["h"])("h1",null,"Show field",-1),Yt={key:0},Zt=Object(n["h"])("dt",null,"Title",-1),te=Object(n["h"])("dt",null,"Alias",-1),ee=Object(n["h"])("dt",null,"Type",-1),re=Object(n["g"])("Edit");Object(n["s"])();var ne=Qt((function(t,e,r,a,c,l){var o=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["d"])("div",null,[Xt,c.field?(Object(n["r"])(),Object(n["d"])("dl",Yt,[Zt,Object(n["h"])("dd",null,Object(n["B"])(c.field.title),1),te,Object(n["h"])("dd",null,Object(n["B"])(c.field.alias),1),ee,Object(n["h"])("dd",null,Object(n["B"])(c.field.type),1)])):Object(n["e"])("",!0),c.field?(Object(n["r"])(),Object(n["d"])(o,{key:1,class:"btn btn-primary",to:"/fields/edit/".concat(c.field.id),tag:"button"},{default:Qt((function(){return[re]})),_:1},8,["to"])):Object(n["e"])("",!0)])})),ae={name:"Field",data:function(){return{field:null}},mounted:function(){var t=this;N.a.get("http://localhost:8000/api/fields/"+this.$route.params.id).then((function(e){t.field=e.data.data}))}};r("bd36");ae.render=ne,ae.__scopeId="data-v-6a40e0f5";var ce=ae,le=Object(n["J"])("data-v-ab3404dc");Object(n["u"])("data-v-ab3404dc");var oe=Object(n["h"])("h1",null,"Edit field",-1),se={key:0,class:"alert alert-danger"},ue={class:"form-group"},ie=Object(n["h"])("label",{for:"title"},"Title",-1),be={class:"form-group"},de=Object(n["h"])("label",{for:"key"},"Alias",-1),fe={class:"form-group"},he=Object(n["h"])("label",{for:"type"},"Type",-1),Oe=Object(n["f"])('<option value="date" data-v-ab3404dc>Date</option><option value="number" data-v-ab3404dc>Number</option><option value="string" data-v-ab3404dc>String</option><option value="boolean" data-v-ab3404dc>Boolean</option><option value="array" data-v-ab3404dc>List</option>',5),je={key:1,class:"form-group"},pe=Object(n["h"])("label",{for:"type"},"Extra",-1),me={class:"text-right my-3"},ve={class:"table  table-sm"},ye=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",null,"#"),Object(n["h"])("th",null,"key"),Object(n["h"])("th",null,"value"),Object(n["h"])("th",null,"Actions")])],-1),ge=Object(n["h"])("div",{class:"form-group"},[Object(n["h"])("button",{class:"btn btn-success",type:"submit"}," Save ")],-1);Object(n["s"])();var ke=le((function(t,e,r,a,c,l){return Object(n["r"])(),Object(n["d"])("div",null,[oe,Object(n["h"])("form",{onSubmit:e[5]||(e[5]=Object(n["I"])((function(){return l.update.apply(l,arguments)}),["prevent","stop"]))},[c.errors?(Object(n["r"])(),Object(n["d"])("div",se,[Object(n["h"])("ul",null,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(l.validationErrors,(function(t,e,r){return Object(n["r"])(),Object(n["d"])("li",{key:r},Object(n["B"])(t),1)})),128))])])):Object(n["e"])("",!0),Object(n["h"])("div",ue,[ie,Object(n["H"])(Object(n["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.form.title=t}),id:"title",type:"text",class:"form-control",name:"title",placeholder:"Insert field's title",autocomplete:"off"},null,512),[[n["E"],c.form.title]])]),Object(n["h"])("div",be,[de,Object(n["H"])(Object(n["h"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.form.alias=t}),id:"alias",type:"text",class:"form-control",name:"alias",placeholder:"Insert field's alias",autocomplete:"off"},null,512),[[n["E"],c.form.alias]])]),Object(n["h"])("div",fe,[he,Object(n["H"])(Object(n["h"])("select",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return c.form.type=t}),name:"type",id:"type",class:"form-control"},[Oe],512),[[n["D"],c.form.type]])]),"array"===c.form.type?(Object(n["r"])(),Object(n["d"])("div",je,[pe,Object(n["h"])("div",me,[Object(n["h"])("button",{class:"btn btn-sm btn-outline-success",onClick:e[4]||(e[4]=Object(n["I"])((function(){return l.addToList.apply(l,arguments)}),["stop","prevent"]))},"Add")]),Object(n["h"])("table",ve,[ye,Object(n["h"])("tbody",null,[(Object(n["r"])(!0),Object(n["d"])(n["a"],null,Object(n["x"])(c.form.extra,(function(t,e){return Object(n["r"])(),Object(n["d"])("tr",{key:e},[Object(n["h"])("td",null,Object(n["B"])(e+1),1),Object(n["h"])("td",null,[Object(n["H"])(Object(n["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(t){return c.form.extra[e].key=t}},null,8,["onUpdate:modelValue"]),[[n["E"],c.form.extra[e].key]])]),Object(n["h"])("td",null,[Object(n["H"])(Object(n["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(t){return c.form.extra[e].value=t}},null,8,["onUpdate:modelValue"]),[[n["E"],c.form.extra[e].value]])]),Object(n["h"])("td",null,[Object(n["h"])("button",{class:"btn btn-sm btn-danger",onClick:Object(n["I"])((function(r){return l.removeFromList(t,e)}),["stop","prevent"])}," Remove ",8,["onClick"])])])})),128))])])])):Object(n["e"])("",!0),ge],32)])})),xe={name:"EditField",data:function(){return{form:{id:null,title:null,type:null,alias:null,extra:null},errors:null}},mounted:function(){var t=this;N.a.get("http://localhost:8000/api/fields/"+this.$route.params.id).then((function(e){var r=e.data.data;t.form.id=r.id,t.form.title=r.title,t.form.type=r.type,t.form.alias=r.alias,r.extra&&(t.form.extra=r.extra)}))},computed:{validationErrors:function(){var t=Object.values(this.errors);return t=t.flat(),t}},methods:{addToList:function(){null===this.form.extra&&(this.form.extra=[]),this.form.extra.push({key:null,value:null})},removeFromList:function(t,e){this.form.extra.splice(e,1)},update:function(){var t=this;N.a.put("http://localhost:8000/api/fields/"+this.form.id,this.form).then((function(){t.$router.push("/fields")})).catch((function(e){422===e.response.status?t.errors=e.response.data.data:t.errors=null}))}}};r("c012");xe.render=ke,xe.__scopeId="data-v-ab3404dc";var Ee=xe,_e=Object(k["b"])(),Ve=[{path:"/",name:"home",component:w},{path:"/subscribers",name:"subscribers",component:W},{path:"/subscribers/create",name:"create-subscriber",component:Y},{path:"/subscribers/:id",name:"subscriber",component:ut},{path:"/subscribers/edit/:id",name:"edit-subscriber",component:pt},{path:"/fields",name:"fields",component:Bt},{path:"/fields/create",name:"create-field",component:Kt},{path:"/fields/:id",name:"field",component:ce},{path:"/fields/edit/:id",name:"edit-field",component:Ee}],we=Object(k["a"])({history:_e,routes:Ve,linkActiveClass:"active",linkExactActiveClass:"active"}),Se=we,Ce=Object(n["c"])(g).use(Se);Ce.mount("#app")},6633:function(t,e,r){},7011:function(t,e,r){},"7e05":function(t,e,r){"use strict";r("980c")},"946d":function(t,e,r){"use strict";r("5326")},"980c":function(t,e,r){},addc:function(t,e,r){"use strict";r("6633")},bd36:function(t,e,r){"use strict";r("7011")},c012:function(t,e,r){"use strict";r("e03e")},d005:function(t,e,r){},e03e:function(t,e,r){},e6a7:function(t,e,r){"use strict";r("51ed")},ea07:function(t,e,r){"use strict";r("d005")}});
//# sourceMappingURL=app.9c7c5876.js.map
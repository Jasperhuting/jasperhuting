(function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],u=0,m=[];u<r.length;u++)o=r[u],s[o]&&m.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/jasperhuting/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b1e":function(e,t,n){},"0dc0":function(e,t,n){"use strict";var a=n("ed81"),s=n.n(a);s.a},"15e0":function(e,t,n){"use strict";var a=n("f099"),s=n.n(a);s.a},1842:function(e,t,n){},"2e0a":function(e,t,n){},4214:function(e,t,n){},"463e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=n("ecee"),i=n("c074"),o=n("ad3d");s["c"].add(i["a"]),a["default"].component("font-awesome-icon",o["a"]);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("navigation"),e.userId?n("UserInformation"):e._e(),n("router-view")],1)},l=[],c=n("cebc"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[n("div",{staticClass:"link-list"},[n("router-link",{staticClass:"link-list__item",attrs:{to:"/home"}},[n("font-awesome-icon",{attrs:{icon:"birthday-cake"}}),e._v(" Home "),e.userId?n("span",{staticClass:"counter"},[e._v(e._s(e.names.length))]):e._e()],1)],1),n("div",{staticClass:"link-list"},[n("router-link",{staticClass:"link-list__item",attrs:{to:"/list"}},[n("font-awesome-icon",{attrs:{icon:"list-alt"}}),e._v(" "+e._s(e.$t("nav.myList"))+" "),e.userId?n("span",{staticClass:"counter"},[e._v(e._s(Object.keys(e.listed).length))]):e._e()],1)],1),n("div",{staticClass:"link-list"},[n("router-link",{staticClass:"link-list__item",attrs:{to:"/information"}},[n("font-awesome-icon",{attrs:{icon:"info-circle"}}),e._v(" "+e._s(e.$t("nav.information"))+"\n    ")],1)],1),n("div",{staticClass:"link-list"},[n("router-link",{staticClass:"link-list__item",attrs:{to:"/groups"}},[n("font-awesome-icon",{attrs:{icon:"users"}}),e._v(" "+e._s(e.$t("nav.groups"))+" "),e.userId?n("span",{staticClass:"counter"},[e._v(e._s(e.groups.length))]):e._e()],1)],1),n("div",{staticClass:"link-list"},[n("ChangeLang")],1),n("div",{staticClass:"link-list"},[e.userId?n("a",{staticClass:"link-list__item",on:{click:e.logout}},[n("font-awesome-icon",{attrs:{icon:"user"}}),e._v(" "+e._s(e.$t("nav.logout"))+"\n    ")],1):n("router-link",{staticClass:"link-list__item",attrs:{to:"/login"}},[n("font-awesome-icon",{attrs:{icon:"user"}}),e._v(" "+e._s(e.$t("nav.login"))+"\n    ")],1)],1)])},u=[],m=(n("a481"),n("c23d")),p=(n("e89a"),n("b7aa"),m["firebase"].initializeApp({apiKey:"AIzaSyCwZFZvT11os7H7DNId7QgJdL-agAXbPa4",authDomain:"happybirdday-d977c.firebaseapp.com",databaseURL:"https://happybirdday-d977c.firebaseio.com",projectId:"happybirdday-d977c",storageBucket:"happybirdday-d977c.appspot.com",messagingSenderId:"167023685930"})),f=p.firestore(),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"locale-changer link-list__item"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],staticClass:"locale-changer-select",attrs:{hidden:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.$i18n,"locale",t.target.multiple?n:n[0])}}},e._l(e.langs,function(t,a){return n("option",{key:"Lang"+a,domProps:{value:t}},[e._v("\n      "+e._s(t)+"\n    ")])}),0),n("div",{staticClass:"lang-changer"},[n("div",{staticClass:"lang-changer__option",class:{active:"nl"===e.selectedLang},on:{click:function(t){return e.langChanger("nl")}}},[e._v("\n      NL\n    ")]),n("div",{staticClass:"lang-changer__devider"},[e._v("\n      /\n    ")]),n("div",{staticClass:"lang-changer__option",class:{active:"en"===e.selectedLang},on:{click:function(t){return e.langChanger("en")}}},[e._v("\n      EN\n    ")])])])},h=[],v=n("795b"),_=n.n(v),y=n("2f62");a["default"].use(y["a"]);var b=new y["a"].Store({state:{showManOnly:!1,showWomanOnly:!1,names:[],selected:[],userId:"",preferredLanguage:"nl",userDisplayName:""},mutations:{setNames:function(e){var t=f.collection("names");e.names=t},listed:function(e,t){e.selected=t},removeListed:function(e,t){e.selected.splice(t,1)},addListed:function(e,t){e.selected.push(t)},LOGOUT:function(e,t){e.userId="",e.userDisplayName=""},SET_USER_ID:function(e,t){e.userId=t},SET_USER_DISPLAY_NAME:function(e,t){e.userDisplayName=t},SET_USER_PREFERRED_LANGUAGE:function(e,t){e.preferredLanguage=t}},actions:{setNames:function(e){e.commit("setNames")},setListed:function(e){e.commit("listed")},removeListed:function(e){e.commit("removeListed")},addListed:function(e){e.commit("addListed")},login:function(e,t){e.commit,e.state;var n=t.email,a=t.password;return new _.a(function(e,t){m["firebase"].auth().signInWithEmailAndPassword(n,a).then(function(t){e(t)}).catch(function(e){t(e)})})},logout:function(e){var t=e.commit;e.state;return new _.a(function(e,n){m["firebase"].auth().signOut().then(function(){t("LOGOUT"),e()}).catch(function(e){n(e)})})},checkUserStatus:function(e){var t=e.commit;e.state;return new _.a(function(e,n){m["firebase"].auth().onAuthStateChanged(function(a){a?(t("SET_USER_ID",a.uid),e(a.uid)):n(new Error("User is not logged in."))})})}},getters:{getListed:function(e){return e.selected}}}),w={name:"ChangeLang",data:function(){return{langs:["nl","en"],selectedLang:b.state.preferredLanguage}},methods:{langChanger:function(e){document.querySelector(".locale-changer-select").value=e,this.$i18n.locale=e,this.selectedLang=e,document.documentElement.setAttribute("lang",e)}}},x=w,k=(n("9deb"),n("2877")),C=Object(k["a"])(x,g,h,!1,null,null,null),L=C.exports,O={components:{ChangeLang:L},data:function(){return{names:[],groups:[],listed:[]}},firestore:function(){return{listed:f.collection("listed").doc(this.userId),groups:f.collection("groups"),names:f.collection("names")}},methods:{logout:function(){var e=this;m["firebase"].auth().signOut().then(function(){b.commit("LOGOUT"),e.$router.replace("login")})}},computed:Object(c["a"])({},Object(y["b"])({userId:function(e){return e.userId}}))},N=O,S=(n("a4e1"),Object(k["a"])(N,d,u,!1,null,null,null)),E=S.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-information"},[n("span",{staticClass:"user-information__action"},[n("router-link",{staticClass:"link-list__item",attrs:{to:"/user"}},[n("font-awesome-icon",{attrs:{icon:"user-edit"}}),e._v("\n      "+e._s(e.userDisplayName)+"\n    ")],1)],1)])},D=[],I={computed:Object(c["a"])({},Object(y["b"])({userDisplayName:function(e){return e.userDisplayName}}))},$=I,A=(n("71b3"),Object(k["a"])($,j,D,!1,null,null,null)),F=A.exports,P={components:{navigation:E,UserInformation:F},data:function(){return{}},computed:Object(c["a"])({},Object(y["b"])({userId:function(e){return e.userId}}),{preferredLanguage:function(){return b.state.preferredLanguage}})},M=P,B=(n("5c0b"),Object(k["a"])(M,r,l,!1,null,null,null)),T=B.exports,R=n("8c4f"),W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"topOptions"},[n("FilterComponent"),n("BulkActions")],1),n("AddNames"),n("listNames",{attrs:{names:e.names,listed:!1,"enable-delete":!0,"enable-draggable":!1}})],1)},G=[],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"addNames"},[n("div",{staticClass:"add-birdday-form"},[n("span",{staticClass:"add-birdday-form__sex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newSex,expression:"newSex"}],attrs:{id:"male",type:"radio",value:"M",name:"sex",hidden:""},domProps:{checked:e._q(e.newSex,"M")},on:{change:function(t){e.newSex="M"}}}),n("label",{staticClass:"male",attrs:{for:"male"}},[n("div",{staticClass:"rounded-button"},[n("font-awesome-icon",{attrs:{icon:"male"}})],1)]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newSex,expression:"newSex"}],attrs:{id:"female",type:"radio",value:"F",name:"sex",hidden:""},domProps:{checked:e._q(e.newSex,"F")},on:{change:function(t){e.newSex="F"}}}),n("label",{staticClass:"female",attrs:{for:"female"}},[n("div",{staticClass:"rounded-button"},[n("font-awesome-icon",{attrs:{icon:"female"}})],1)])]),n("span",{staticClass:"add-birdday-form__name"},[n("label",{attrs:{for:"surname"}},[n("font-awesome-icon",{style:{color:"#dcdcdc"},attrs:{size:"xs",icon:"edit"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{id:"surname",placeholder:e.$t("form.surname")},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}})]),n("span",{staticClass:"add-birdday-form__lastname"},[n("label",{attrs:{for:"lastname"}},[n("font-awesome-icon",{style:{color:"#dcdcdc"},attrs:{size:"xs",icon:"edit"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newLastname,expression:"newLastname"}],attrs:{id:"lastname",placeholder:e.$t("form.lastname")},domProps:{value:e.newLastname},on:{input:function(t){t.target.composing||(e.newLastname=t.target.value)}}})]),n("span",{staticClass:"add-birdday-form__address"},[n("label",{attrs:{for:"address"}},[n("font-awesome-icon",{style:{color:"#dcdcdc"},attrs:{size:"xs",icon:"edit"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newAddress,expression:"newAddress"}],attrs:{id:"address",placeholder:e.$t("form.address")},domProps:{value:e.newAddress},on:{input:function(t){t.target.composing||(e.newAddress=t.target.value)}}})]),n("span",{staticClass:"add-birdday-form__date"},[n("label",{attrs:{for:"date"}},[n("font-awesome-icon",{style:{color:"#dcdcdc"},attrs:{size:"xs",icon:"edit"}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newBirthday,expression:"newBirthday"}],attrs:{type:"date",id:"date",placeholder:e.$t("form.date_of_birth")},domProps:{value:e.newBirthday},on:{input:function(t){t.target.composing||(e.newBirthday=t.target.value)}}})]),n("span",{staticClass:"add-birdday-form__add"},[n("div",{on:{click:e.addName}},[n("font-awesome-icon",{attrs:{icon:"user-plus",size:"xs"}})],1)])])])},q=[],z=(n("ac6a"),n("28a5"),n("7f7f"),{name:"AddNames",components:{},data:function(){return{names:[],newName:null,newLastname:null,newSex:"M",newBirthday:null,newAddress:null}},firestore:function(){return{names:f.collection("names")}},computed:{},methods:{addName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(e.name&&e.lastname&&e.sex&&e.birthday&&e.address?f.collection("names").add({name:e.name,lastname:e.lastname,sex:e.sex,birthday:e.birthday,month:e.birthday.split("-")[1],address:e.address,timestamp:new Date}):this.newName&&this.newLastname&&this.newSex&&this.newBirthday&&this.newAddress?(f.collection("names").add({name:this.newName,lastname:this.newLastname,sex:this.newSex,birthday:this.newBirthday,month:this.newBirthday.split("-")[1],address:this.newAddress,timestamp:new Date}),this.newName="",this.newLastname="",this.newSex="M",this.newBirthday="",this.newAddress=""):console.error("Fill in all the fields dummy"))},deleteName:function(e){f.collection("names").doc(e[".key"]).delete()},saveData:function(){var e=this;this.csv.forEach(function(t){console.log("element",t),e.addName(t)})}}}),Y=z,V=(n("15e0"),Object(k["a"])(Y,U,q,!1,null,"399265eb",null)),Z=V.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"nameList columnView"},e._l(e.sortOnCurrentMonth,function(t){return n("li",{key:t.id,class:e.$d(new Date(t.birthday),"short","en")},[n("span",{staticClass:"nameList__days"},[e._v("\n      "+e._s(e.$tc("days_till",e.daysToBirthday(t)))+"\n    ")]),n("span",{staticClass:"nameList__sex"},[n("RoundedButtonComponent",{attrs:{sex:t.sex,icon:"male",oppo:"F","sex-key":t[".key"]}}),n("RoundedButtonComponent",{attrs:{sex:t.sex,icon:"female",oppo:"M","sex-key":t[".key"]}})],1),n("span",{staticClass:"nameList__name"},[n("span",{on:{click:function(t){return e.editField(t.target)}}},[e._v(e._s(t.name||"-")+" ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"birthday.name"},{name:"autowidth",rawName:"v-autowidth",value:{maxWidth:"960px",minWidth:"20px"},expression:"{maxWidth: '960px', minWidth: '20px'}"}],staticStyle:{display:"none"},domProps:{value:t.name},on:{keydown:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.saveField(t[".key"],n.target,"name")},blur:function(n){return e.saveField(t[".key"],n.target,"name")},input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}),n("span",{on:{click:function(t){return e.editField(t.target)}}},[e._v(e._s(t.lastname||"-"))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"birthday.lastname"},{name:"autowidth",rawName:"v-autowidth",value:{maxWidth:"960px",minWidth:"0px"},expression:"{maxWidth: '960px', minWidth: '0px'}"}],staticStyle:{display:"none"},domProps:{value:t.lastname},on:{keydown:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.saveField(t[".key"],n.target,"lastname")},blur:function(n){return e.saveField(t[".key"],n.target,"lastname")},input:function(n){n.target.composing||e.$set(t,"lastname",n.target.value)}}})]),n("span",{staticClass:"nameList__address"},[n("span",{on:{click:function(t){return e.editField(t.target)}}},[e._v("\n        "+e._s(t.address||"-")+"\n      ")]),n("input",{directives:[{name:"autowidth",rawName:"v-autowidth",value:{maxWidth:"960px",minWidth:"20px"},expression:"{maxWidth: '960px', minWidth: '20px'}"}],staticStyle:{display:"none"},domProps:{value:t.address},on:{keydown:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.saveField(t[".key"],n.target,"address")},blur:function(n){return e.saveField(t[".key"],n.target,"address")}}})]),n("span",{staticClass:"nameList__birthday",class:e.$d(new Date(t.birthday),"monthOnly","en")},[n("span",{on:{click:function(t){return e.editField(t.target)}}},[e._v("\n        "+e._s(e.$d(new Date(t.birthday),"short"))+"\n      ")]),n("input",{directives:[{name:"autowidth",rawName:"v-autowidth",value:{maxWidth:"960px",minWidth:"140px"},expression:"{maxWidth: '960px', minWidth: '140px'}"}],staticStyle:{display:"none"},attrs:{type:"date"},domProps:{value:t.birthday},on:{keydown:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.saveField(t[".key"],n.target,"birthday")},blur:function(n){return e.saveField(t[".key"],n.target,"birthday")}}})]),n("span",{staticClass:"nameList__age alignCenter"},[n("span",{class:e._f("specialDate")(t.birthday)},[e._v(e._s(e._f("getAge")(t.birthday)))])]),n("span",{staticClass:"nameList__delete alignRight buttons-container"},[n("div",{staticClass:"rounded-button",on:{click:function(n){e.changeListed(e.userId,t[".key"],e.checkIfIsListed(e.userId,t[".key"]))}}},[e.checkIfIsListed(e.userId,t[".key"])?e._e():n("font-awesome-icon",{attrs:{icon:"plus"}}),e.checkIfIsListed(e.userId,t[".key"])?n("font-awesome-icon",{attrs:{icon:"minus"}}):e._e()],1),e.enableDelete?n("div",{staticClass:"rounded-button",on:{click:function(n){return e.deleteField(t)}}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1):e._e(),n("div",{staticClass:"rounded-button",class:{active:e.listedStore.indexOf(t[".key"])>=0},on:{click:function(n){return e.selectBirthday(t[".key"])}}})])])}),0)},J=[],K=n("bd86"),Q=(n("55dd"),n("e814")),X=n.n(Q),ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rounded-button",class:e.sex,on:{click:function(t){return e.changeSex(e.sexKey,e.oppo)}}},[n("font-awesome-icon",{class:e.icon,attrs:{icon:e.icon}})],1)},te=[],ne={name:"RoundedButtonComponent",props:{sex:{type:String,required:!0},icon:{type:String,required:!0},sexKey:{type:String,required:!0},oppo:{type:String,required:!0}},data:function(){return{}},methods:{changeSex:function(e,t){return t="F"===t?"M":"F",f.collection("names").doc(e).update({sex:t})}}},ae=ne,se=(n("bc74"),Object(k["a"])(ae,ee,te,!1,null,null,null)),ie=se.exports,oe={name:"ListNames",components:{RoundedButtonComponent:ie},filters:{specialDate:function(e){if(!e)return"";var t=e.split("-")[0],n=X()(e.split("-")[1]),a=X()(e.split("-")[2]),s=(new Date).getMonth()+1,i=(new Date).getDate(),o=(new Date).getFullYear(),r=o-t;return n<s?r+=1:n===s&&a<i&&(r+=1),r%5===0||1===r?"special":void 0},getAge:function(e){if(e){var t=e.split("-")[0],n=X()(e.split("-")[1]),a=X()(e.split("-")[2]),s=(new Date).getMonth()+1,i=(new Date).getDate(),o=(new Date).getFullYear(),r=o-t;return n<s?r+=1:n===s&&a<i&&(r+=1),r}}},data:function(){return{selected:[]}},props:{listed:{type:Boolean,required:!0},names:{type:Array,required:!0},enableDelete:{type:Boolean,required:!0},enableDraggable:{type:Boolean}},computed:Object(c["a"])({sortOnCurrentMonth:function(){var e=this,t=function(t,n){return e.daysToBirthday(t)<e.daysToBirthday(n)?-1:e.daysToBirthday(t)>e.daysToBirthday(n)?1:0},n=this.names.slice(0).sort(t);return n},listedStore:function(){return b.state.selected}},Object(y["b"])({userId:function(e){return e.userId}})),firestore:function(){return{listedList:f.collection("listed").doc(this.userId)}},methods:{deleteField:function(e){f.collection("names").doc(e[".key"]).delete()},editField:function(e){e.style.display="none",e.nextSibling.style.display="inline",e.nextSibling.focus()},saveField:function(e,t,n){var a=f.collection("names").doc(e);return a.update(n,t.value).then(function(){t.style.display="none",t.previousSibling.style.display="inline"})},changeSex:function(e,t){return t="F"===t?"M":"F",f.collection("names").doc(e).update({sex:t})},changeListed:function(e,t,n){if(n){var a=Object(K["a"])({},t,!1);f.collection("listed").doc(e).set(a,{merge:!0})}else{var s=Object(K["a"])({},t,!0);f.collection("listed").doc(e).set(s,{merge:!0})}},checkIfIsListed:function(e,t){return!!this.listedList[t]},daysToBirthday:function(e){var t=X()(e.birthday.split("-")[1]),n=X()(e.birthday.split("-")[2]),a=(new Date).getMonth()+1,s=(new Date).getDate(),i=(new Date).getFullYear();t<a?i+=1:t===a&&n<s&&(i+=1);var o=new Date(i,t-1,n),r=new Date((new Date).getFullYear(),a-1,(new Date).getDate()),l=Math.abs(r.getTime()-o.getTime())/1e3,c=Math.floor(l/86400);return c},selectBirthday:function(e){return console.log(e),-1===b.getters.getListed.indexOf(e)?b.commit("addListed",e):b.commit("removeListed",b.getters.getListed.indexOf(e)),b.commit("listed",b.getters.getListed),b.getters.getListed.indexOf(e)}}},re=oe,le=(n("0dc0"),Object(k["a"])(re,H,J,!1,null,null,null)),ce=le.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bulk-actions"},[n("div",{staticClass:"bulk-actions__set-listed bulk-actions__action",class:{disabled:0==e.listed.length},on:{click:function(t){return e.setListed(e.listed,e.userId)}}},[n("font-awesome-icon",{attrs:{icon:"plus-square"}}),e._v(" "+e._s(e.$tc("set_listed",e.listed.length))+"\n  ")],1),n("div",{staticClass:"bulk-actions__delete-all bulk-actions__action",class:{disabled:0==e.listed.length},on:{click:function(t){return e.deleteAll(e.listed)}}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}}),e._v(" "+e._s(e.$tc("delete_selected",e.listed.length))+"\n  ")],1)])},ue=[],me={name:"BulkActions",components:{},data:function(){return{}},computed:Object(c["a"])({listed:function(){return b.state.selected}},Object(y["b"])({userId:function(e){return e.userId}})),methods:{setListed:function(e,t){0!==e.length&&e.forEach(function(e){var n=Object(K["a"])({},e,!0);console.log("element",e),console.log("listedValue",n),f.collection("listed").doc(t).set(n,{merge:!0}).then(function(){b.commit("listed",[])})})},deleteAll:function(e){0!==e.length&&e.forEach(function(e){f.collection("names").doc(e).delete().then(function(){console.log("succes"),b.commit("listed",[])}).catch(function(e){console.error("Error updating document: ",e)})})}}},pe=me,fe=(n("8fe5"),Object(k["a"])(pe,de,ue,!1,null,"2e80eec3",null)),ge=fe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"filter__container"},[n("div",{staticClass:"buttons-container",on:{click:function(t){return e.toggleFilter()}}},[n("div",{staticClass:"rounded-button",class:{isActive:this.filter}},[n("font-awesome-icon",{attrs:{icon:"filter"}})],1)]),this.filter?n("div",{staticClass:"filters"},[n("div",{staticClass:"filter"},[n("span",{staticClass:"man",on:{click:function(t){return e.getMansOnly()}}},[e._v("\n        man\n      ")]),e._v("\n      / female\n    ")]),n("div",{staticClass:"filter"},[e._v("\n      family / not family\n    ")]),n("div",{staticClass:"filter"},[e._v("\n      special date / not special date\n    ")])]):e._e()])},ve=[],_e={name:"FilterComponent",data:function(){return{filter:!1}},methods:{toggleFilter:function(){this.filter=!this.filter},getMansOnly:function(){console.log("toggle"),b.commit("toggleShowMan")}}},ye=_e,be=(n("d7fc"),Object(k["a"])(ye,he,ve,!1,null,null,null)),we=be.exports,xe={name:"Home",components:{AddNames:Z,BulkActions:ge,ListNames:ce,FilterComponent:we},data:function(){return{names:[]}},computed:{showManOnly:function(){return this.$store.getters.showManOnly},showFemaleOnly:function(){return this.$store.getters.showFemaleOnly}},firestore:function(){return{names:f.collection("names")}}},ke=xe,Ce=(n("e146"),Object(k["a"])(ke,W,G,!1,null,null,null)),Le=Ce.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("listNames",{attrs:{names:e.names,listed:!0,"only-man":!1,"only-female":!1,"enable-delete":!1,"enable-draggable":!1}})],1)},Ne=[],Se={name:"List",components:{ListNames:ce},data:function(){return{names:[]}},firestore:function(){return{names:f.collection("names")}},computed:Object(c["a"])({},Object(y["b"])({userId:function(e){return e.userId}}))},Ee=Se,je=Object(k["a"])(Ee,Oe,Ne,!1,null,null,null),De=je.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"group"},[n("AddGroups"),n("Groups")],1)},$e=[],Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"group__add-group"},[n("button",{attrs:{hidden:"true"},on:{click:function(t){return t.preventDefault(),e.saveData(t)}}},[e._v("\n    send!\n  ")]),n("div",{staticClass:"add-group-form"},[n("span",{staticClass:"add-group-form__name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{placeholder:"groupname"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}})]),n("span",{staticClass:"add-group-form__add"},[n("button",{on:{click:e.addName}},[n("font-awesome-icon",{attrs:{icon:"user-plus"}})],1)])])])},Fe=[],Pe={name:"AddGroups",components:{},data:function(){return{names:[],newName:null}},firestore:function(){return{names:f.collection("groups")}},computed:{},methods:{addName:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.newName?(f.collection("groups").add({name:this.newName,names:[],timestamp:new Date}),this.newName=""):console.error("Fill in all the fields dummy")}}},Me=Pe,Be=(n("a638"),Object(k["a"])(Me,Ae,Fe,!1,null,"bedeba10",null)),Te=Be.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"group__container"},e._l(e.groups,function(t){return n("div",{key:t[".key"],staticClass:"group__list-item"},[n("div",{staticClass:"group__name"},[n("span",{on:{click:function(t){return e.editGroup(t.target)}}},[e._v(e._s(t.name||"-")+" ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"group.name"},{name:"autowidth",rawName:"v-autowidth",value:{maxWidth:"960px",minWidth:"20px"},expression:"{maxWidth: '960px', minWidth: '20px'}"}],staticStyle:{display:"none"},domProps:{value:t.name},on:{keydown:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.saveGroup(t[".key"],n.target,"name")},blur:function(n){return e.saveGroup(t[".key"],n.target,"name")},input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}})]),n("div",{staticClass:"group__delete"},[n("div",{staticClass:"rounded-button",on:{click:function(n){return e.deleteGroup(t)}}},[n("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])}),0)},We=[],Ge={name:"Groups",components:{},filters:{},methods:{deleteGroup:function(e){f.collection("groups").doc(e[".key"]).delete()},editGroup:function(e){e.style.display="none",e.nextSibling.style.display="inline",e.nextSibling.focus()},saveGroup:function(e,t,n){var a=f.collection("groups").doc(e);return a.update(n,t.value).then(function(){t.style.display="none",t.previousSibling.style.display="inline"})}},computed:{},firestore:function(){return{groups:f.collection("groups")}},data:function(){return{groups:[]}}},Ue=Ge,qe=(n("807b"),Object(k["a"])(Ue,Re,We,!1,null,"4a371b52",null)),ze=qe.exports,Ye={name:"GroupPage",components:{Groups:ze,AddGroups:Te}},Ve=Ye,Ze=Object(k["a"])(Ve,Ie,$e,!1,null,null,null),He=Ze.exports,Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"information"},[n("h1",[e._v("\n    "+e._s(e.$t("information.information"))+"\n  ")]),n("p",[e._v("\n    "+e._s(e.$t("information.informationText"))+"\n  ")])])},Ke=[],Qe={name:"Information",components:{},data:function(){return{}},firestore:function(){return{}}},Xe=Qe,et=Object(k["a"])(Xe,Je,Ke,!1,null,null,null),tt=et.exports,nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"userPage"},[e._v("\n  user page\n")])},at=[],st={},it=st,ot=Object(k["a"])(it,nt,at,!1,null,null,null),rt=ot.exports,lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("span",{on:{click:function(t){return e.register()}}},[e._v("\n    Register\n  ")]),n("br"),n("span",[e._v("Or go back to "),n("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e._v(".")],1)])},ct=[],dt={name:"Register",components:{},data:function(){return{email:"",password:""}},firestore:function(){return{}},methods:{register:function(){var e=this;m["firebase"].auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){f.collection("people").doc(t.user.uid).set({preferredLanguage:"nl",timestamp:new Date}).then(function(){e.$router.replace("home")})}).catch(function(e){var t=e.code,n=e.message;console.log("errorCode",t),console.log("errorMessage",n)})}}},ut=dt,mt=Object(k["a"])(ut,lt,ct,!1,null,null,null),pt=mt.exports,ft=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:e.handleLogin}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("\n    Login\n  ")]),n("span",[e._v("Or go back to "),n("router-link",{attrs:{to:"/register"}},[e._v("Register")]),e._v(".")],1)])},gt=[],ht={name:"Login",data:function(){return{email:"",password:""}},methods:{handleLogin:function(){var e=this,t=this.email,n=this.password;this.$store.dispatch("login",{email:t,password:n}).then(function(t){e.$router.replace("home")}).catch(function(e){console.log(e)})}}},vt=ht,_t=Object(k["a"])(vt,ft,gt,!1,null,null,null),yt=_t.exports;a["default"].use(R["a"]);var bt=new R["a"]({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/list",name:"list",component:De,meta:{requiresAuth:!0}},{path:"/groups",name:"groups",component:He,meta:{requiresAuth:!0}},{path:"/information",name:"information",component:tt},{path:"/user",name:"user",component:rt,meta:{requiresAuth:!0}},{path:"/register",name:"register",component:pt},{path:"/login",name:"login",component:yt},{path:"/home",name:"home",component:Le,meta:{requiresAuth:!0}}]});bt.beforeEach(function(e,t,n){var a=m["firebase"].auth().currentUser,s=e.matched.some(function(e){return e.meta.requiresAuth});s&&!a?n("login"):n()});var wt=bt,xt=n("73c3"),kt=n.n(xt),Ct=n("b702"),Lt=n("f2d1"),Ot=n("3652"),Nt=n.n(Ot),St=n("2955"),Et=n.n(St),jt=n("05f6"),Dt=n.n(jt),It=n("a925"),$t={en:{car:"car | cars",days_till:"today | {n} day | {n} days",delete_selected:"Delete selected | Delete {n} selected item | Delete {n} selected items",set_listed:"Set listed | set {n} item listed | set {n} items listed",nav:{myList:"My list",information:"information",groups:"groups",login:"login",logout:"logout"},information:{information:"Information",informationText:"Working on groups (edit) and logging-in module"},common:{days:"days",yet:"",today:"today"},form:{surname:"name",lastname:"lastname",address:"address",date_of_birth:"date of birth"}},nl:{car:"car | cars",days_till:"vandaag | {n} dag | {n} dagen",delete_selected:"Verwijder geselecteerde | Verwijder {n} geselecteerd item | Verwijder de {n} geselecteerde items",set_listed:"Zet op mijn lijst | Zet {n} item op je lijst | zet {n} items op je lijst",nav:{myList:"Mijn lijst",information:"info",groups:"groepen",login:"inloggen",logout:"uitloggen"},information:{information:"Informatie",informationText:"Momenteel bezig met groepen (aanpassen) en inlog mogelijkheid"},common:{days:"dagen",yet:"nog",today:"vandaag"},form:{surname:"voornaam",lastname:"achternaam",address:"woonplaats",date_of_birth:"geboortedatum"}}},At={en:{short:{month:"long",day:"numeric",weekday:"short"},monthOnly:{month:"long"}},nl:{short:{month:"long",day:"numeric",weekday:"short"},monthOnly:{month:"long"}}},Ft=n("7d8b");n("ea7b");Nt.a.config("https://3e0de6be5bf342df97422eaa8dfb4395@sentry.io/1446817").addPlugin(Et.a,a["default"]).install(),s["c"].add(i["a"],Ct["a"],Lt["a"]),a["default"].use(It["a"]),a["default"].use(kt.a),a["default"].use(Dt.a),a["default"].use(Ft["VueCsvImport"]),a["default"].config.productionTip=!1;var Pt=new It["a"]({locale:b.state.preferredLanguage,fallbackLocale:"nl",messages:$t,dateTimeFormats:At});console.log(b.state.preferredLanguage),Pt.locale=b.state.preferredLanguage;var Mt="";m["firebase"].auth().onAuthStateChanged(function(e){if(e){b.commit("SET_USER_ID",e.uid),b.commit("SET_USER_DISPLAY_NAME",e.email);var t=f.collection("people").doc(e.uid);console.log(t),t.get().then(function(e){console.log(e.data().preferredLanguage),b.commit("SET_USER_PREFERRED_LANGUAGE",e.data().preferredLanguage)}).catch(function(e){console.log("Error getting document",e)})}else b.commit("SET_USER_ID",""),b.commit("SET_USER_DISPLAY_NAME","");Mt||(Mt=new a["default"]({router:wt,store:b,i18n:Pt,render:function(e){return e(T)}}).$mount("#app"))})},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(e,t,n){},"71b3":function(e,t,n){"use strict";var a=n("e27a"),s=n.n(a);s.a},"807b":function(e,t,n){"use strict";var a=n("0b1e"),s=n.n(a);s.a},"8de3":function(e,t,n){},"8fe5":function(e,t,n){"use strict";var a=n("4214"),s=n.n(a);s.a},"92b2":function(e,t,n){},"9deb":function(e,t,n){"use strict";var a=n("2e0a"),s=n.n(a);s.a},a4e1:function(e,t,n){"use strict";var a=n("8de3"),s=n.n(a);s.a},a638:function(e,t,n){"use strict";var a=n("1842"),s=n.n(a);s.a},bc74:function(e,t,n){"use strict";var a=n("463e"),s=n.n(a);s.a},d7fc:function(e,t,n){"use strict";var a=n("fa6c"),s=n.n(a);s.a},e146:function(e,t,n){"use strict";var a=n("92b2"),s=n.n(a);s.a},e27a:function(e,t,n){},ed81:function(e,t,n){},f099:function(e,t,n){},fa6c:function(e,t,n){}});
//# sourceMappingURL=app.16b587d1.js.map
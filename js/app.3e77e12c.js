(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)o=r[u],a[o]&&h.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/songedit-live/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1263:function(t,e,s){"use strict";var n=s("656e"),a=s.n(n);a.a},"296d":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"is-flex",attrs:{id:"app"}},[s("MainNav"),s("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("nav",{directives:[{name:"show",rawName:"v-show",value:t.showNav,expression:"showNav"}],staticClass:"navbar",attrs:{id:"main-nav",role:"navigation"}},[s("div",{staticClass:"navbar-brand"},[s("Logo"),s("a",{staticClass:"navbar-burger burger",class:{"is-active":t.showMenu},attrs:{role:"button"},on:{click:function(e){t.showMenu=!t.showMenu}}},[s("span"),s("span"),s("span")])],1),s("div",{staticClass:"navbar-menu",class:{"is-active":t.showMenu}},[s("div",{staticClass:"navbar-end"},[s("a",{staticClass:"navbar-item",on:{click:t.exportToFile}},[t._v("\n                    Export\n                ")])])])])])},r=[],c=(s("a481"),s("ac4d"),s("8a81"),s("ac6a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"navbar-item logo-wrapper",attrs:{to:"/"}},[s("svg",{staticClass:"logo is-inline-block",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"32pt",height:"18pt",viewBox:"0 0 46 26",version:"1.1"}},[s("g",{attrs:{id:"logo"}},[s("path",{attrs:{d:"M 12.820312 1.992188 L 4 3.960938 L 4 16.074219 L 3.734375 16.128906 C 3.597656 16.160156 3.191406 16.320312 2.839844 16.488281 C 1.742188 17.019531 1.007812 17.753906 0.480469 18.851562 C 0.113281 19.621094 0 20.125 0 21.011719 C 0 21.902344 0.113281 22.40625 0.480469 23.175781 C 1.007812 24.269531 1.742188 25.007812 2.839844 25.535156 C 3.605469 25.902344 4.109375 26.015625 5 26.015625 C 5.886719 26.015625 6.390625 25.902344 7.15625 25.535156 C 8.429688 24.917969 9.285156 23.949219 9.804688 22.535156 C 9.949219 22.15625 9.957031 21.703125 9.996094 15.417969 L 10.035156 8.703125 L 12.804688 8.085938 C 14.324219 7.75 15.667969 7.445312 15.777344 7.414062 C 15.988281 7.363281 15.996094 7.371094 15.996094 7.707031 L 15.996094 8.054688 L 15.457031 8.230469 C 13.851562 8.75 12.539062 10.148438 12.117188 11.808594 C 11.964844 12.414062 11.964844 13.601562 12.117188 14.207031 C 12.5625 15.976562 14.027344 17.441406 15.792969 17.890625 C 16.402344 18.042969 17.585938 18.042969 18.195312 17.890625 C 19.960938 17.441406 21.425781 15.976562 21.871094 14.207031 C 21.976562 13.800781 21.992188 12.734375 21.992188 6.867188 L 21.992188 0 L 21.816406 0.0078125 C 21.710938 0.015625 17.664062 0.90625 12.820312 1.992188 Z M 12.820312 1.992188 "}}),s("path",{attrs:{d:"M 23.992188 3 L 23.992188 6.003906 L 45.984375 6.003906 L 45.984375 0 L 23.992188 0 Z M 23.992188 3 "}}),s("path",{attrs:{d:"M 23.992188 13.007812 L 23.992188 16.011719 L 45.984375 16.011719 L 45.984375 10.007812 L 23.992188 10.007812 Z M 23.992188 13.007812 "}}),s("path",{attrs:{d:"M 11.996094 23.015625 L 11.996094 26.015625 L 45.984375 26.015625 L 45.984375 20.011719 L 11.996094 20.011719 Z M 11.996094 23.015625 "}})])]),s("h1",{staticClass:"title is-size-3 is-inline-block"},[t._v("Song"),s("small",{staticClass:"logo-space"},[t._v(" ")]),t._v("Edit")]),s("h1",{staticClass:"title is-size-4 is-inline-block logo-dot"},[t._v(".")])])}),l=[],d=s("2877"),u={},h=Object(d["a"])(u,c,l,!1,null,null,null);h.options.__file="Logo.vue";var g=h.exports,p=s("bc3a"),f=s.n(p),m={name:"mainNav",components:{Logo:g},data:function(){return{showNav:!0,showMenu:!1,lastPosition:0,timer:void 0}},methods:{showLoginRegister:function(t){var e=this;this.$store.commit("change",!0),this.$dialog.confirm({message:"There's still text in this part. Delete anyway?",cancelText:"Cancel",confirmText:"Delete",onConfirm:function(){return e.textareas.splice(index,1)}})},handleScroll:function(){var t=window.pageYOffset;t<this.lastPosition&&(this.showNav=!0),t>this.lastPosition&&(this.showNav=!1),this.timeoutNavHide(),this.lastPosition=t},handleMouseMove:function(t){t.clientY<52&&(this.showNav=!0,this.timeoutNavHide())},timeoutNavHide:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){t.showNav=!1},5e3)},exportToFile:function(){var t=document.querySelector("input[name=song-title]").value,e=document.getElementsByTagName("textarea"),s='<!DOCTYPE html>\n                <html lang="en">\n                <head>\n                <meta charset="utf-8">\n                <title>'.concat(t,"</title>\n                </head>\n                <body>\n                    <h1>").concat(t,"</h1>"),n=!0,a=!1,i=void 0;try{for(var o,r=e[Symbol.iterator]();!(n=(o=r.next()).done);n=!0){var c=o.value;s+="<br><p>".concat(c.value.replace(/\n/g,"<br>"),"</p>")}}catch(u){a=!0,i=u}finally{try{n||null==r.return||r.return()}finally{if(a)throw i}}s+="</body></html>";var l="".concat((new Date).getFullYear(),"-").concat((new Date).getMonth(),"-").concat((new Date).getDate(),"_").concat((new Date).getHours(),"-").concat((new Date).getMinutes()),d=new jsPDF;d.fromHTML(s,15,20,{width:170}),d.save("".concat(t,"_").concat(l,".pdf"))}},mounted:function(){var t=this;addEventListener("scroll",this.handleScroll),addEventListener("mousemove",function(e){t.handleMouseMove(e)}),this.$root.$on("showNav",function(e){t.showNav=e}),this.timeoutNavHide()},destroyed:function(){removeEventListener("scroll",this.handleScroll),removeEventListener("mousemove",this.handleMouseMove),clearTimeout(this.timer)}},v=m,y=(s("a7da"),Object(d["a"])(v,o,r,!1,null,null,null));y.options.__file="MainNav.vue";var b=y.exports,w={name:"app",components:{MainNav:b}},C=w,S=(s("5c0b"),Object(d["a"])(C,a,i,!1,null,null,null));S.options.__file="App.vue";var _=S.exports,x=s("8c4f"),T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section main has-text-centered"},[s("input",{staticClass:"input is-size-4",attrs:{name:"song-title",type:"text",placeholder:"Song Title",id:"song-title"}}),s("br"),s("br"),s("textarea",{staticClass:"textarea has-fixed-size is-size-5",attrs:{name:"song-lyrics",placeholder:"Start your lyrics here",id:"lyrics-area",rows:"1"},on:{click:function(e){e.preventDefault(),t.checkSelection(e),t.showNav()},keyup:function(e){e.preventDefault(),t.checkSelection(e),t.checkContent(e),t.showNav()}}}),s("br"),t._l(t.textareas,function(e,n){return[s("div",{key:n,staticClass:"textarea-wrapper"},[s("textarea",{staticClass:"textarea has-fixed-size is-size-5",attrs:{name:"song-lyrics",placeholder:"",id:"textarea"+n,rows:"1"},on:{click:function(e){e.preventDefault(),t.checkSelection(e),t.showNav()},keyup:function(e){e.preventDefault(),t.checkSelection(e),t.checkContent(e),t.showNav()}}}),s("a",{staticClass:"delete is-small",attrs:{href:"javascript:;"},on:{click:function(e){t.checkTextarea(n)}}}),s("br")])]}),s("div",{staticClass:"has-pointer change-margin",class:{"add-margin-bottom":t.showSuggestions},on:{click:t.addTextarea}},[s("a",{staticClass:"delete is-small plus",attrs:{href:"javascript:;"}})]),s("br"),s("br"),s("transition",{attrs:{name:"slide-suggestions"}},[s("Suggestions",{directives:[{name:"show",rawName:"v-show",value:t.showSuggestions,expression:"showSuggestions"}],attrs:{suggestions:t.suggestions,loading:t.loading}})],1),t._m(0)],2)},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-content"}),s("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"}})])}],D=s("be94"),L=(s("f559"),s("5df3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-tabs",{staticClass:"suggestions",attrs:{position:"is-centered"}},[s("b-tab-item",{attrs:{label:"Rhymes",position:"is-centered"}},[s("template",{on:{click:this.scrollToTop},slot:"header"},[t._v("\n            Rhymes\n            "),t.suggestions.rhymes&&t.suggestions.rhymes.length?s("b-tag",{attrs:{rounded:""}},[t._v("\n                "+t._s(t.suggestions.rhymes.length)+"\n            ")]):s("b-tag",{attrs:{rounded:""}},[t._v("\n                0\n            ")])],1),s("SuggestionsContent",{attrs:{category:"rhymes",data:t.suggestions.rhymes,loading:t.loading.rhymes}})],2),s("b-tab-item",{attrs:{label:"Synonyms",position:"is-centered"}},[s("template",{slot:"header"},[t._v("\n            Synonyms\n            "),t.suggestions.synonyms&&t.suggestions.synonyms.length?s("b-tag",{attrs:{rounded:""}},[t._v("\n                "+t._s(t.suggestions.synonyms.length)+"\n            ")]):s("b-tag",{attrs:{rounded:""}},[t._v("\n                0\n            ")])],1),s("SuggestionsContent",{attrs:{category:"synonyms",data:t.suggestions.synonyms,loading:t.loading.synonyms}})],2),s("b-tab-item",{attrs:{label:"Related",position:"is-centered"}},[s("template",{slot:"header"},[t._v("\n            Related\n            "),t.suggestions.related&&t.suggestions.related.length?s("b-tag",{attrs:{rounded:""}},[t._v("\n                "+t._s(t.suggestions.related.length)+"\n            ")]):s("b-tag",{attrs:{rounded:""}},[t._v("\n                0\n            ")])],1),s("SuggestionsContent",{attrs:{category:"related",data:t.suggestions.related,loading:t.loading.related}})],2),s("b-tab-item",{attrs:{label:"Definitions",position:"is-centered"}},[s("template",{slot:"header"},[t._v("\n            Definitions\n            "),t.suggestions.definitions&&t.suggestions.definitions.length?s("b-tag",{attrs:{rounded:""}},[t._v("\n                "+t._s(t.suggestions.definitions.length)+"\n            ")]):s("b-tag",{attrs:{rounded:""}},[t._v("\n                0\n            ")])],1),s("SuggestionsDefinitions",{attrs:{category:"definitions",data:t.suggestions.definitions,loading:t.loading.definitions}})],2)],1)}),k=[],j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"b-table",attrs:{"data-v-0b9f3ffb":""}},[s("b-loading",{attrs:{active:this.loading}}),s("div",{staticClass:"table-wrapper"},[s("table",{staticClass:"table is-narrow is-hoverable"},[s("thead",[s("tr",[s("th",{staticClass:"has-pointer",class:[{"is-current-sort":"word"==t.currentSort},"th-word-"+this.category],on:{click:function(e){t.sort(e,"word")}}},[s("div",{staticClass:"th-wrap"},[t._v("\n                            Word "),s("span",{staticClass:"icon is-small",class:"is-"+t.currentSortDir,staticStyle:{display:"none"}},[s("i",{staticClass:"mdi mdi-arrow-down"})])])]),s("th",{staticClass:"has-pointer",class:[{"is-current-sort":"score"==t.currentSort},"th-score-"+this.category],on:{click:function(e){t.sort(e,"score")}}},[s("div",{staticClass:"th-wrap"},[t._v("\n                            Score "),s("span",{staticClass:"icon is-small",class:"is-"+t.currentSortDir},[s("i",{staticClass:"mdi mdi-arrow-down"})])])]),s("th",{staticClass:"has-pointer",class:[{"is-current-sort":"numSyllables"==t.currentSort},"th-numSyllables-"+this.category],on:{click:function(e){t.sort(e,"numSyllables")}}},[s("div",{staticClass:"th-wrap"},[t._v("\n                            Length "),s("span",{staticClass:"icon is-small",class:"is-"+t.currentSortDir,staticStyle:{display:"none"}},[s("i",{staticClass:"mdi mdi-arrow-down"})])])]),s("th",{staticClass:"has-pointer",class:[{"is-current-sort":"tags"==t.currentSort},"th-tags-"+this.category],on:{click:function(e){t.sort(e,"tags")}}},[s("div",{staticClass:"th-wrap"},[t._v("\n                            Sort "),s("span",{staticClass:"icon is-small",class:"is-"+t.currentSortDir,staticStyle:{display:"none"}},[s("i",{staticClass:"mdi mdi-arrow-down"})])])]),s("th",{staticClass:"has-pointer",class:[{"is-current-sort":"pop"==t.currentSort},"th-pop-"+this.category],on:{click:function(e){t.sort(e,"pop")}}},[s("div",{staticClass:"th-wrap"},[t._v("\n                            Usage "),s("span",{staticClass:"icon is-small",class:"is-"+t.currentSortDir,staticStyle:{display:"none"}},[s("i",{staticClass:"mdi mdi-arrow-down"})])])]),s("th",{staticClass:"has-pointer",class:[{"is-current-sort":"defs"==t.currentSort},"th-defs-"+this.category],on:{click:function(e){t.sort(e,"defs")}}},[s("div",{staticClass:"th-wrap"},[t._v("\n                            Definition "),s("span",{staticClass:"icon is-small",class:"is-"+t.currentSortDir,staticStyle:{display:"none"}},[s("i",{staticClass:"mdi mdi-arrow-down"})])])])])]),s("tbody",[t.sortedResults.length||this.loading?t._e():s("tr",[t._m(0)]),s("v-infinite-scroll",{staticStyle:{display:"contents"},attrs:{loading:this.loading,offset:20},on:{top:t.prevPage,bottom:t.nextPage}},t._l(t.sortedResults,function(e){return s("tr",{attrs:{else:""},on:{click:t.copyWord}},[s("td",[s("span",{staticClass:"word has-pointer"},[t._v(t._s(e.word))])]),s("td",[t.isMobile?s("span",{staticClass:"has-pointer"},[t._v(t._s(t._f("convertToPercentage")(e.score))+"%")]):s("progress",{staticClass:"progress is-small show-value has-pointer",attrs:{max:"100"},domProps:{value:t._f("convertToPercentage")(e.score)}})]),s("td",[s("span",{staticClass:"has-pointer"},[t._v(t._s(e.numSyllables))])]),s("td",[s("div",{staticClass:"tags"},[t._l(e.tags,function(e){return s("span",{staticClass:"tag has-pointer"},[t._v(t._s(e))])}),0==e.tags.length?s("span",{staticClass:"tag has-pointer"},[t._v("?")]):t._e()],2)]),s("td",[t.isMobile?s("span",{staticClass:"has-pointer"},[t._v(t._s(t._f("convertToPercentage")(e.pop))+"%")]):s("progress",{staticClass:"progress is-small show-value has-pointer",attrs:{max:"100"},domProps:{value:t._f("convertToPercentage")(e.pop)}})]),s("td",[s("b-tooltip",{staticClass:"has-pointer",attrs:{label:e.defs||"No definition found",type:"is-light",position:"is-left",size:"is-large",multilined:"",animated:""}},[t._v("\n                                See\n                            ")])],1)])}))],1)])])],1)},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"has-text-centered",attrs:{colspan:"6"}},[s("span",[t._v("\n                            No results\n                            "),s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"mdi mdi-emoticon-sad"})])])])}],E=(s("55dd"),{name:"suggestionscontent",props:{category:{type:String,required:!0},data:{type:Array,required:!1},loading:{type:Boolean,required:!1}},data:function(){return{isMobile:!1,currentSort:"score",currentSortDir:"desc"}},filters:{convertToPercentage:function(t){return t>=100?100:t}},methods:{handleWindowSizeChange:function(){window.innerWidth<768?this.isMobile=!0:this.isMobile=!1},copyWord:function(t){var e=document.createElement("textarea");e.value=t.target.closest("tr").querySelector("span.word").innerHTML,e.style={position:"absolute",left:"-9999px"},document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$toast.open({message:'"'.concat(e.value,'" copied to clipboard'),position:"is-bottom",duration:1e3,type:"is-white"})},sort:function(t,e){this.loadingChangeTo(!0),e===this.currentSort?this.currentSortDir="asc"===this.currentSortDir?"desc":"asc":(document.querySelector(".th-".concat(this.currentSort,"-").concat(this.category)).firstElementChild.firstElementChild.style.display="none",t.target.closest("th").querySelector("span.icon").style.display="inherit",this.currentSort=e),this.loadingChangeTo(!1)},loadingChangeTo:function(t){var e={};e[this.category]=t,this.$root.$emit("loading",e)},prevPage:function(){if(1==this.page)return--this.page;this.api()},nextPage:function(){++this.page,this.api()},api:function(){var t=this;this.loading=!0,myApi.get({page:this.page}).then(function(e){t.items=e,t.loading=!1})}},computed:{sortedResults:function(){var t=this;return this.data.sort(function(e,s){var n=1;return"desc"===t.currentSortDir&&(n=-1),e[t.currentSort]<s[t.currentSort]?-1*n:e[t.currentSort]>s[t.currentSort]?1*n:0})}},mounted:function(){addEventListener("resize",this.handleWindowSizeChange),window.innerWidth<767?this.isMobile=!0:this.isMobile=!1},destroyed:function(){removeEventListener("resize",this.handleWindowSizeChange)}}),P=E,W=(s("1263"),Object(d["a"])(P,j,N,!1,null,"5e2e7f4d",null));W.options.__file="SuggestionsContent.vue";var $=W.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"b-table",attrs:{"data-v-0b9f3ffb":""}},[s("b-loading",{attrs:{active:this.loading},on:{"update:active":function(e){t.$set(this,"loading",e)}}}),s("div",{staticClass:"table-wrapper"},[s("table",{staticClass:"table is-narrow is-hoverable"},[s("thead",[s("tr",[s("th",{staticClass:"has-pointer",class:[{"is-current-sort":"sort"==t.currentSort},"th-sort-"+this.category],on:{click:function(e){t.sort(e,"sort")}}},[s("div",{staticClass:"th-wrap"},[t._v("\n                            Sort "),s("span",{staticClass:"icon is-small",class:"is-"+t.currentSortDir},[s("i",{staticClass:"mdi mdi-arrow-down"})])])]),s("th",{staticClass:"has-pointer",class:[{"is-current-sort":"def"==t.currentSort},"th-def-"+this.category],on:{click:function(e){t.sort(e,"def")}}},[s("div",{staticClass:"th-wrap"},[t._v("\n                            Definition "),s("span",{staticClass:"icon is-small",class:"is-"+t.currentSortDir,staticStyle:{display:"none"}},[s("i",{staticClass:"mdi mdi-arrow-down"})])])])])]),s("tbody",[t.sortedResults.length||this.loading?t._e():s("tr",[t._m(0)]),t._l(t.sortedResults,function(e){return s("tr",{attrs:{else:""}},[s("td",[s("span",{staticClass:"tag"},[t._v(t._s(e.sort||"?"))])]),s("td",[s("span",[t._v(t._s(e.def))])])])})],2)])])],1)},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"has-text-centered",attrs:{colspan:"2"}},[s("span",[t._v("\n                            No results\n                            "),s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"mdi mdi-emoticon-sad"})])])])}],z={name:"suggestionsdefinitions",props:{category:{type:String,required:!0},data:{type:Array,required:!1},loading:{type:Boolean,required:!1}},data:function(){return{isMobile:!1,currentSort:"sort",currentSortDir:"desc"}},methods:{handleWindowSizeChange:function(){window.innerWidth<768?this.isMobile=!0:this.isMobile=!1},sort:function(t,e){this.loadingChangeTo(!0),e===this.currentSort?this.currentSortDir="asc"===this.currentSortDir?"desc":"asc":(document.querySelector(".th-".concat(this.currentSort,"-").concat(this.category)).querySelector("span.icon").style.display="none",t.target.closest("th").querySelector("span.icon").style.display="inherit",this.currentSort=e),this.loadingChangeTo(!1)},loadingChangeTo:function(t){var e={};e[this.category]=t,this.$root.$emit("loading",e)}},computed:{sortedResults:function(){var t=this;return this.data.sort(function(e,s){var n=1;return"desc"===t.currentSortDir&&(n=-1),e[t.currentSort]<s[t.currentSort]?-1*n:e[t.currentSort]>s[t.currentSort]?1*n:0})}},mounted:function(){addEventListener("resize",this.handleWindowSizeChange),window.innerWidth<767?this.isMobile=!0:this.isMobile=!1},destroyed:function(){removeEventListener("resize",this.handleWindowSizeChange)}},q=z,A=Object(d["a"])(q,O,R,!1,null,null,null);A.options.__file="SuggestionsDefinitions.vue";var U=A.exports,H={name:"suggestions",components:{SuggestionsContent:$,SuggestionsDefinitions:U},props:{suggestions:{type:Object,required:!1},loading:{type:Object,required:!1}},updated:function(){this.scrollToTop()},methods:{scrollToTop:function(){var t=!0,e=!1,s=void 0;try{for(var n,a=document.getElementsByClassName("tab-content")[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var i=n.value;i.scrollTop=0}}catch(o){e=!0,s=o}finally{try{t||null==a.return||a.return()}finally{if(e)throw s}}}}},B=H,F=(s("d3f6"),Object(d["a"])(B,L,k,!1,null,null,null));F.options.__file="Suggestions.vue";var Y=F.exports,Z={name:"home",components:{Suggestions:Y},data:function(){return{textareas:[],showSuggestions:!1,loading:{rhymes:!1,synonyms:!1,related:!1,definitions:!1},suggestions:{rhymes:[],synonyms:[],related:[],definitions:[]},lastScrollPosition:0}},methods:{addTextarea:function(){this.textareas.push({})},checkTextarea:function(t){var e=this;document.getElementsByTagName("textarea")[t+1].value.length?this.confirm(t):e.textareas.splice(t,1)},confirm:function(t){var e=this;this.textareas.splice(t,1),this.$dialog.confirm({message:"There's still text in this part. Delete anyway?",cancelText:"Cancel",confirmText:"Delete",onConfirm:function(){return e.textareas.splice(t,1)}})},checkContent:function(t){this.showSuggestions=!1,t.target.rows=(t.target.scrollHeight-25)/30,t.target.style.height=t.target.scrollHeight-30+"px",t.target.style.height=t.target.scrollHeight+"px"},checkSelection:function(t){this.lastTextareaPosition=t.target.scrollTop;var e=this;if(t.target.oncontextmenu=function(){return!1},t.target.selectionStart!=t.target.selectionEnd){var s=encodeURIComponent(t.target.value.substring(t.target.selectionStart,t.target.selectionEnd));e.getRhymes(s),e.showSuggestions=!0}},getRhymes:function(t){var e=this;this.loading.rhymes=!0,this.loading.synonyms=!0,this.loading.related=!0,this.loading.definitions=!0,Promise.all([f.a.get("https://api.datamuse.com/words?rel_rhy=".concat(t,"&md=dpsf&max=1000")),f.a.get("https://api.datamuse.com/words?rel_nry=".concat(t,"&md=dpsf&max=1000"))]).then(function(t){e.suggestions.rhymes=e.cleanUpResult(t[1].data.concat(t[0].data)),e.loading.rhymes=!1,console.log("success in rhymes!")}).catch(function(t){console.log("error in rhymes: ",t),e.loading.rhymes=!1}),Promise.all([f.a.get("https://api.datamuse.com/words?rel_syn=".concat(t,"&md=dpsf&max=1000")),f.a.get("https://api.datamuse.com/words?rel_spc=".concat(t,"&md=dpsf&max=1000"))]).then(function(t){e.suggestions.synonyms=e.cleanUpResult(t[1].data.concat(t[0].data)),e.loading.synonyms=!1,console.log("success in synonyms!")}).catch(function(t){console.log("error in synonyms: ",t),e.loading.synonyms=!1}),Promise.all([f.a.get("https://api.datamuse.com/words?rel_jja=".concat(t,"&md=dpsf&max=1000")),f.a.get("https://api.datamuse.com/words?rel_jjb=".concat(t,"&md=dpsf&max=1000")),f.a.get("https://api.datamuse.com/words?rel_trg=".concat(t,"&md=dpsf&max=1000"))]).then(function(t){e.suggestions.related=e.cleanUpResult(t[2].data.concat(t[1].data.concat(t[0].data))),e.loading.related=!1,console.log("success in related!")}).catch(function(t){console.log("error in related: ",t),e.loading.related=!1}),f.a.get("https://api.datamuse.com/words?sp=".concat(t,"&md=dpsf&max=1000")).then(function(s){e.suggestions.definitions=e.cleanUpDefs(s.data,t),e.loading.definitions=!1,console.log("success in definitons!")}).catch(function(t){console.log("error in definitions: ",t),e.loading.definitions=!1})},cleanUpDefs:function(t,e){return t.length&&t[0].defs?t.filter(function(t){return t.word==e})[0].defs.map(function(t){var e={sort:"",def:""};return t.startsWith("v")&&(e.sort="Verb",e.def=t.substring(2).charAt(0).toUpperCase()+t.slice(3)),t.startsWith("n")&&(e.sort="Noun",e.def=t.substring(2).charAt(0).toUpperCase()+t.slice(3)),t.startsWith("adj")&&(e.sort="Adj.",e.def=t.substring(2).charAt(0).toUpperCase()+t.slice(3)),t.startsWith("adv")&&(e.sort="Adv.",e.def=t.substring(2).charAt(0).toUpperCase()+t.slice(3)),e}):[]},cleanUpResult:function(t){return t.map(function(t){var e,s,n="";return t.defs&&(e=t.defs.map(function(t){return t.startsWith("v")&&(t="Verb: ".concat(t.substring(2))),t.startsWith("n")&&(t="Noun: ".concat(t.substring(2))),t.startsWith("adj")&&(t="Adj.: ".concat(t.substring(4))),t.startsWith("adv")&&(t="Adv.: ".concat(t.substring(4))),t}).join(" | ")),t.tags&&(s=t.tags.map(function(t){return t.startsWith("adj")?"Adj.":t.startsWith("adv")?"Adv.":t.startsWith("n")?"Noun":t.startsWith("v")?"Verb":void 0}).filter(function(t){return t}),n=Math.round(parseFloat(t.tags.filter(function(t){if(t.startsWith("f"))return t})[0].substring(2))/5)),t.score||(t=Object(D["a"])({},t,{score:"0"})),Object(D["a"])({},t,{defs:e,tags:s,pop:n})})},showNav:function(){this.$root.$emit("showNav",!1)}},mounted:function(){var t=this;this.$root.$on("loading",function(e){t.loading=Object(D["a"])({},t.loading,e)})}},V=Z,J=(s("cccb"),Object(d["a"])(V,T,M,!1,null,null,null));J.options.__file="Home.vue";var I=J.exports;n["default"].use(x["a"]);var G=new x["a"]({routes:[{path:"/",name:"home",component:I}]}),K=s("2f62");n["default"].use(K["a"]);var Q=new K["a"].Store({state:{showLoginRegister:!1},mutations:{change:function(t,e){t.showLoginRegister=e}},getters:{showLoginRegister:function(t){return t.showLoginRegister}}}),X=s("a7fe"),tt=s.n(X),et=s("8a03"),st=s.n(et),nt=s("92a6"),at=s.n(nt);n["default"].config.productionTip=!1,n["default"].use(tt.a,f.a),n["default"].use(st.a),n["default"].use(at.a),new n["default"]({router:G,store:Q,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("5e27"),a=s.n(n);a.a},"5e27":function(t,e,s){},"656e":function(t,e,s){},a6fc:function(t,e,s){},a7da:function(t,e,s){"use strict";var n=s("a6fc"),a=s.n(n);a.a},cccb:function(t,e,s){"use strict";var n=s("d563"),a=s.n(n);a.a},d3f6:function(t,e,s){"use strict";var n=s("296d"),a=s.n(n);a.a},d563:function(t,e,s){}});
//# sourceMappingURL=app.3e77e12c.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{259:function(t,n,o){var e=o(3);n.f=e},260:function(t,n,o){"use strict";var e=o(2),r=o(4),c=o(30),l=o(26),f=o(16),d=o(110),v=o(171),m=o(6),y=o(15),h=o(74),w=o(11),S=o(7),_=o(24),O=o(28),C=o(71),k=o(42),P=o(75),j=o(54),x=o(106),E=o(261),I=o(109),N=o(41),M=o(22),L=o(70),z=o(23),A=o(19),F=o(107),J=o(72),$=o(73),B=o(108),H=o(3),T=o(259),D=o(262),G=o(43),Q=o(29),W=o(33).forEach,K=J("hidden"),R=H("toPrimitive"),U=Q.set,V=Q.getterFor("Symbol"),X=Object.prototype,Y=r.Symbol,Z=c("JSON","stringify"),tt=N.f,nt=M.f,ot=E.f,et=L.f,it=F("symbols"),at=F("op-symbols"),st=F("string-to-symbol-registry"),ct=F("symbol-to-string-registry"),lt=F("wks"),ut=r.QObject,ft=!ut||!ut.prototype||!ut.prototype.findChild,pt=f&&m((function(){return 7!=P(nt({},"a",{get:function(){return nt(this,"a",{value:7}).a}})).a}))?function(t,n,o){var e=tt(X,n);e&&delete X[n],nt(t,n,o),e&&t!==X&&nt(X,n,e)}:nt,vt=function(t,n){var symbol=it[t]=P(Y.prototype);return U(symbol,{type:"Symbol",tag:t,description:n}),f||(symbol.description=n),symbol},mt=v?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},yt=function(t,n,o){t===X&&yt(at,n,o),S(t);var e=C(n,!0);return S(o),y(it,e)?(o.enumerable?(y(t,K)&&t[K][e]&&(t[K][e]=!1),o=P(o,{enumerable:k(0,!1)})):(y(t,K)||nt(t,K,k(1,{})),t[K][e]=!0),pt(t,e,o)):nt(t,e,o)},gt=function(t,n){S(t);var o=O(n),e=j(o).concat(St(o));return W(e,(function(n){f&&!bt.call(o,n)||yt(t,n,o[n])})),t},bt=function(t){var n=C(t,!0),o=et.call(this,n);return!(this===X&&y(it,n)&&!y(at,n))&&(!(o||!y(this,n)||!y(it,n)||y(this,K)&&this[K][n])||o)},ht=function(t,n){var o=O(t),e=C(n,!0);if(o!==X||!y(it,e)||y(at,e)){var r=tt(o,e);return!r||!y(it,e)||y(o,K)&&o[K][e]||(r.enumerable=!0),r}},wt=function(t){var n=ot(O(t)),o=[];return W(n,(function(t){y(it,t)||y($,t)||o.push(t)})),o},St=function(t){var n=t===X,o=ot(n?at:O(t)),e=[];return W(o,(function(t){!y(it,t)||n&&!y(X,t)||e.push(it[t])})),e};(d||(A((Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=B(t),o=function(t){this===X&&o.call(at,t),y(this,K)&&y(this[K],n)&&(this[K][n]=!1),pt(this,n,k(1,t))};return f&&ft&&pt(X,n,{configurable:!0,set:o}),vt(n,t)}).prototype,"toString",(function(){return V(this).tag})),A(Y,"withoutSetter",(function(t){return vt(B(t),t)})),L.f=bt,M.f=yt,N.f=ht,x.f=E.f=wt,I.f=St,T.f=function(t){return vt(H(t),t)},f&&(nt(Y.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),l||A(X,"propertyIsEnumerable",bt,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Y}),W(j(lt),(function(t){D(t)})),e({target:"Symbol",stat:!0,forced:!d},{for:function(t){var n=String(t);if(y(st,n))return st[n];var symbol=Y(n);return st[n]=symbol,ct[symbol]=n,symbol},keyFor:function(t){if(!mt(t))throw TypeError(t+" is not a symbol");if(y(ct,t))return ct[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),e({target:"Object",stat:!0,forced:!d,sham:!f},{create:function(t,n){return void 0===n?P(t):gt(P(t),n)},defineProperty:yt,defineProperties:gt,getOwnPropertyDescriptor:ht}),e({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:wt,getOwnPropertySymbols:St}),e({target:"Object",stat:!0,forced:m((function(){I.f(1)}))},{getOwnPropertySymbols:function(t){return I.f(_(t))}}),Z)&&e({target:"JSON",stat:!0,forced:!d||m((function(){var symbol=Y();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,n,o){for(var e,r=[t],c=1;arguments.length>c;)r.push(arguments[c++]);if(e=n,(w(n)||void 0!==t)&&!mt(t))return h(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!mt(n))return n}),r[1]=n,Z.apply(null,r)}});Y.prototype[R]||z(Y.prototype,R,Y.prototype.valueOf),G(Y,"Symbol"),$[K]=!0},261:function(t,n,o){var e=o(28),r=o(106).f,c={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return l&&"[object Window]"==c.call(t)?function(t){try{return r(t)}catch(t){return l.slice()}}(t):r(e(t))}},262:function(t,n,o){var path=o(170),e=o(15),r=o(259),c=o(22).f;t.exports=function(t){var n=path.Symbol||(path.Symbol={});e(n,t)||c(n,t,{value:r.f(t)})}},263:function(t,n,o){"use strict";var e=o(2),r=o(16),c=o(4),l=o(15),f=o(11),d=o(22).f,v=o(169),m=c.Symbol;if(r&&"function"==typeof m&&(!("description"in m.prototype)||void 0!==m().description)){var y={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof h?new m(t):void 0===t?m():m(t);return""===t&&(y[n]=!0),n};v(h,m);var w=h.prototype=m.prototype;w.constructor=h;var S=w.toString,_="Symbol(test)"==String(m("test")),O=/^Symbol\((.*)\)[^)]+$/;d(w,"description",{configurable:!0,get:function(){var symbol=f(this)?this.valueOf():this,t=S.call(symbol);if(l(y,symbol))return"";var desc=_?t.slice(7,-1):t.replace(O,"$1");return""===desc?void 0:desc}}),e({global:!0,forced:!0},{Symbol:h})}},267:function(t,n,o){var content=o(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("0d2ee063",content,!0,{sourceMap:!1})},280:function(t,n,o){"use strict";o(267)},281:function(t,n,o){(n=o(9)(!1)).push([t.i,".close-button[data-v-afdd778e]{width:45px}.description[data-v-afdd778e]{white-space:pre-line;text-align:left}.amazon-btn[data-v-afdd778e]{background-color:#f67c1b;color:#fff}img[data-v-afdd778e]{max-width:100%}.new-tab-img[data-v-afdd778e]{width:16px}",""]),t.exports=n},306:function(t,n,o){"use strict";o.r(n);o(260),o(263);var e={data:function(){return{meta:{title:"Book",description:"著書",type:"article",url:"https://shinbunbun.info/book/",image:"https://shinbunbun.info/images/ogp.png"},modal:!1,cards:[{src:"/images/LINE-API.jpeg",title:"LINE API実践ガイド",amazon:"https://www.amazon.co.jp/dp/B08L4FPGNF",modal:!0,description:"2020年11月出版。\n        LINE API ExpertをはじめとしたLINE APIの有識者たちが各LINE APIについての解説をハンズオン形式で執筆した本。\n        私はLINEログイン章を担当した。\n        "}],data:{}}},methods:{openLink:function(t){window.open(t,"_blank")},openModal:function(data){this.data=data,this.modal=!0},closeModal:function(){this.modal=!1}},head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:type",property:"og:type",content:this.meta.type},{hid:"og:title",property:"og:title",content:this.meta.title},{hid:"og:description",property:"og:description",content:this.meta.description},{hid:"og:url",property:"og:url",content:this.meta.url},{hid:"og:image",property:"og:image",content:this.meta.image}]}}},r=(o(280),o(8)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{staticClass:"container"},[o("div",{staticClass:"py-4"}),t._v(" "),o("h1",[t._v("著書")]),t._v(" "),o("div",{staticClass:"py-4"}),t._v(" "),o("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4"},t._l(t.cards,(function(n){return o("div",{key:n.title},[o("HomeCard",{attrs:{data:n},on:{openModal:function(o){return t.openModal(n)}}})],1)})),0),t._v(" "),t.modal?o("MyModal",{on:{close:t.closeModal}},[o("img",{staticClass:"close-button",attrs:{src:"/images/close-black-18dp.svg",alt:""},on:{click:t.closeModal}}),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"container modal-container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 align-items-center",staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:t.data.src,alt:""}})]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"py-2"}),t._v(" "),o("h2",[t._v(t._s(t.data.title))]),t._v(" "),o("div",{staticClass:"py-2"}),t._v(" "),o("div",{staticClass:"btn-wrapper"},[o("button",{staticClass:"btn amazon-btn",attrs:{type:"button"},on:{click:function(n){return t.openLink(t.data.amazon)}}},[o("b",[t._v("Amazonで購入")]),t._v(" "),o("img",{staticClass:"new-tab-img",attrs:{src:"/images/open_in_new-black-18dp.svg",alt:""}})])]),t._v(" "),o("p",{staticClass:"description"},[t._v("\n              "+t._s(t.data.description)+"\n            ")])])])])]):t._e()],1)])}),[],!1,null,"afdd778e",null);n.default=component.exports;installComponents(component,{HomeCard:o(172).default,MyModal:o(173).default})}}]);
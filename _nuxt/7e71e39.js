(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{262:function(t,e,o){var n=o(3);e.f=n},263:function(t,e,o){"use strict";var n=o(2),r=o(4),c=o(30),l=o(26),d=o(16),f=o(110),m=o(172),v=o(6),h=o(15),w=o(74),y=o(11),E=o(7),_=o(24),A=o(28),C=o(71),k=o(42),x=o(75),B=o(54),S=o(106),j=o(264),L=o(109),M=o(41),I=o(22),T=o(70),N=o(23),P=o(19),W=o(107),O=o(72),D=o(73),F=o(108),G=o(3),U=o(262),R=o(265),Q=o(43),V=o(29),$=o(33).forEach,z=O("hidden"),H=G("toPrimitive"),J=V.set,K=V.getterFor("Symbol"),Y=Object.prototype,Z=r.Symbol,X=c("JSON","stringify"),tt=M.f,et=I.f,at=j.f,ot=T.f,nt=W("symbols"),it=W("op-symbols"),st=W("string-to-symbol-registry"),ct=W("symbol-to-string-registry"),lt=W("wks"),ut=r.QObject,pt=!ut||!ut.prototype||!ut.prototype.findChild,ft=d&&v((function(){return 7!=x(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,o){var n=tt(Y,e);n&&delete Y[e],et(t,e,o),n&&t!==Y&&et(Y,e,n)}:et,bt=function(t,e){var symbol=nt[t]=x(Z.prototype);return J(symbol,{type:"Symbol",tag:t,description:e}),d||(symbol.description=e),symbol},gt=m?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Z},mt=function(t,e,o){t===Y&&mt(it,e,o),E(t);var n=C(e,!0);return E(o),h(nt,n)?(o.enumerable?(h(t,z)&&t[z][n]&&(t[z][n]=!1),o=x(o,{enumerable:k(0,!1)})):(h(t,z)||et(t,z,k(1,{})),t[z][n]=!0),ft(t,n,o)):et(t,n,o)},vt=function(t,e){E(t);var o=A(e),n=B(o).concat(Et(o));return $(n,(function(e){d&&!ht.call(o,e)||mt(t,e,o[e])})),t},ht=function(t){var e=C(t,!0),o=ot.call(this,e);return!(this===Y&&h(nt,e)&&!h(it,e))&&(!(o||!h(this,e)||!h(nt,e)||h(this,z)&&this[z][e])||o)},wt=function(t,e){var o=A(t),n=C(e,!0);if(o!==Y||!h(nt,n)||h(it,n)){var r=tt(o,n);return!r||!h(nt,n)||h(o,z)&&o[z][n]||(r.enumerable=!0),r}},yt=function(t){var e=at(A(t)),o=[];return $(e,(function(t){h(nt,t)||h(D,t)||o.push(t)})),o},Et=function(t){var e=t===Y,o=at(e?it:A(t)),n=[];return $(o,(function(t){!h(nt,t)||e&&!h(Y,t)||n.push(nt[t])})),n};(f||(P((Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=F(t),o=function(t){this===Y&&o.call(it,t),h(this,z)&&h(this[z],e)&&(this[z][e]=!1),ft(this,e,k(1,t))};return d&&pt&&ft(Y,e,{configurable:!0,set:o}),bt(e,t)}).prototype,"toString",(function(){return K(this).tag})),P(Z,"withoutSetter",(function(t){return bt(F(t),t)})),T.f=ht,I.f=mt,M.f=wt,S.f=j.f=yt,L.f=Et,U.f=function(t){return bt(G(t),t)},d&&(et(Z.prototype,"description",{configurable:!0,get:function(){return K(this).description}}),l||P(Y,"propertyIsEnumerable",ht,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Z}),$(B(lt),(function(t){R(t)})),n({target:"Symbol",stat:!0,forced:!f},{for:function(t){var e=String(t);if(h(st,e))return st[e];var symbol=Z(e);return st[e]=symbol,ct[symbol]=e,symbol},keyFor:function(t){if(!gt(t))throw TypeError(t+" is not a symbol");if(h(ct,t))return ct[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!d},{create:function(t,e){return void 0===e?x(t):vt(x(t),e)},defineProperty:mt,defineProperties:vt,getOwnPropertyDescriptor:wt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:yt,getOwnPropertySymbols:Et}),n({target:"Object",stat:!0,forced:v((function(){L.f(1)}))},{getOwnPropertySymbols:function(t){return L.f(_(t))}}),X)&&n({target:"JSON",stat:!0,forced:!f||v((function(){var symbol=Z();return"[null]"!=X([symbol])||"{}"!=X({a:symbol})||"{}"!=X(Object(symbol))}))},{stringify:function(t,e,o){for(var n,r=[t],c=1;arguments.length>c;)r.push(arguments[c++]);if(n=e,(y(e)||void 0!==t)&&!gt(t))return w(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!gt(e))return e}),r[1]=e,X.apply(null,r)}});Z.prototype[H]||N(Z.prototype,H,Z.prototype.valueOf),Q(Z,"Symbol"),D[z]=!0},264:function(t,e,o){var n=o(28),r=o(106).f,c={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return l&&"[object Window]"==c.call(t)?function(t){try{return r(t)}catch(t){return l.slice()}}(t):r(n(t))}},265:function(t,e,o){var path=o(171),n=o(15),r=o(262),c=o(22).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});n(e,t)||c(e,t,{value:r.f(t)})}},266:function(t,e,o){"use strict";var n=o(2),r=o(16),c=o(4),l=o(15),d=o(11),f=o(22).f,m=o(170),v=c.Symbol;if(r&&"function"==typeof v&&(!("description"in v.prototype)||void 0!==v().description)){var h={},w=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof w?new v(t):void 0===t?v():v(t);return""===t&&(h[e]=!0),e};m(w,v);var y=w.prototype=v.prototype;y.constructor=w;var E=y.toString,_="Symbol(test)"==String(v("test")),A=/^Symbol\((.*)\)[^)]+$/;f(y,"description",{configurable:!0,get:function(){var symbol=d(this)?this.valueOf():this,t=E.call(symbol);if(l(h,symbol))return"";var desc=_?t.slice(7,-1):t.replace(A,"$1");return""===desc?void 0:desc}}),n({global:!0,forced:!0},{Symbol:w})}},267:function(t,e,o){"use strict";var n=0;function r(t){if(!n){var s=document.createElement("script");s.setAttribute("src",t),document.body.appendChild(s),n=new Promise((function(t){s.onload=function(){t(window.twttr)}}))}return n}var c={id:{type:String,required:!0},sourceType:{type:String},slug:{type:String},options:Object};t.exports={addPlatformScript:r,twitterEmbedComponent:function(t){return{data:function(){return{isLoaded:!1,isAvailable:!1}},props:Object.assign({},c,t.props),mounted:function(){var e,o=this;e="profile"===this.sourceType?{sourceType:this.sourceType,screenName:this.id}:"list"===this.sourceType?{sourceType:this.sourceType,ownerScreenName:this.id,slug:this.slug}:this.id,Promise.resolve(window.twttr?window.twttr:r("//platform.twitter.com/widgets.js")).then((function(n){return t.embedComponent(n,e,o.$el,o.options)})).then((function(data){o.isAvailable=void 0!==data,o.isLoaded=!0}))},render:function(t){if(this.isLoaded&&this.isAvailable)return t("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){var e=t("div",{class:this.$props.errorMessageClass,domProps:{innerHTML:this.$props.errorMessage}});return t("div",[e])}return t("div",{class:this.$props.widgetClass},this.$slots.default)}}}}},273:function(t,e,o){var content=o(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("59651a89",content,!0,{sourceMap:!1})},274:function(t,e,o){var content=o(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("0c292792",content,!0,{sourceMap:!1})},275:function(t,e,o){var content=o(294);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("3de5149f",content,!0,{sourceMap:!1})},276:function(t,e,o){var content=o(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("757c5ec0",content,!0,{sourceMap:!1})},277:function(t,e,o){var content=o(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("5b56d0d6",content,!0,{sourceMap:!1})},289:function(t,e,o){"use strict";o(273)},290:function(t,e,o){(e=o(9)(!1)).push([t.i,".profile_img[data-v-e693ad1e]{width:200px}.img_container[data-v-e693ad1e],.title_container[data-v-e693ad1e]{text-align:center}label[data-v-e693ad1e]{white-space:nowrap;margin:3px;padding:3px}.form-check-input[data-v-e693ad1e]{margin-left:3px}.label-AWS[data-v-e693ad1e]{background-color:#f67c1b;color:#fff}.label-LINE.Bot[data-v-e693ad1e]{background-color:#03ba1e;color:#fff}.label-WebApp[data-v-e693ad1e]{background-color:#cd5c5c;color:#fff}.label-Clova[data-v-e693ad1e]{background-color:#05d686;color:#fff}.label-Nuxt\\.js[data-v-e693ad1e],.label-Vue\\.js[data-v-e693ad1e]{background-color:#2f495e;color:#fff}.label-productCard[data-v-e693ad1e]{padding-bottom:20px}.label-Alexa[data-v-e693ad1e]{background-color:#31c4f3;color:#fff}.label-GAS[data-v-e693ad1e]{background-color:#1a73e8;color:#fff}.label-IoT[data-v-e693ad1e]{background-color:#d4ba11;color:#fff}.label-Network[data-v-e693ad1e]{background-color:#000;color:#fff}.label-Others[data-v-e693ad1e]{background-color:#ca59f5;color:#fff}.tags-card[data-v-e693ad1e]{display:inline-block}",""]),t.exports=e},291:function(t,e,o){"use strict";o(274)},292:function(t,e,o){(e=o(9)(!1)).push([t.i,".tags-card[data-v-e693ad1e]{transition-duration:none!important;transition-property:none!important}.tags-card[data-v-e693ad1e]:hover{transform:none!important}",""]),t.exports=e},293:function(t,e,o){"use strict";o(275)},294:function(t,e,o){(e=o(9)(!1)).push([t.i,".card-title[data-v-6f03603f],.my-card[data-v-6f03603f]{text-align:left}.my-card[data-v-6f03603f]{background-color:var(--card-color);border-radius:5px;box-shadow:0 2px 5px var(--card-shadow-color);cursor:pointer}img[data-v-6f03603f]{width:100%;min-height:170px;max-height:170px;-o-object-fit:cover;object-fit:cover;height:auto}a[data-v-6f03603f]{color:#000;text-decoration:none}.tag[data-v-6f03603f]{padding-right:10px;padding-bottom:5px;display:inline-block;margin:0}.tag_text[data-v-6f03603f]{padding:3px}.AWS[data-v-6f03603f]{background-color:#f67c1b;color:#fff}.LINE.Bot[data-v-6f03603f]{background-color:#03ba1e;color:#fff}.WebApp[data-v-6f03603f]{background-color:#cd5c5c;color:#fff}.Clova[data-v-6f03603f]{background-color:#05d686;color:#fff}.Nuxt\\.js[data-v-6f03603f],.Vue\\.js[data-v-6f03603f]{background-color:#2f495e;color:#fff}.productCard[data-v-6f03603f]{padding-bottom:20px}.Alexa[data-v-6f03603f]{background-color:#31c4f3;color:#fff}.GAS[data-v-6f03603f]{background-color:#1a73e8}.GAS[data-v-6f03603f],.IoT[data-v-6f03603f]{color:#fff}.IoT[data-v-6f03603f]{background-color:#d4ba11}.Network[data-v-6f03603f]{background-color:#000;color:#fff}.Others[data-v-6f03603f]{background-color:#ca59f5;color:#fff}@media screen and (max-width:576px){.card-img-top[data-v-6f03603f]{display:none}.card-body[data-v-6f03603f]{border-top:none!important}}.fade-enter-active[data-v-6f03603f],.fade-leave-active[data-v-6f03603f]{transition:opacity .5s}.fade-enter[data-v-6f03603f],.fade-leave-to[data-v-6f03603f]{opacity:0}",""]),t.exports=e},295:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Tweet",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"Moment",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"Timeline",{enumerable:!0,get:function(){return c.default}});var n=l(o(296)),r=l(o(297)),c=l(o(298));function l(t){return t&&t.__esModule?t:{default:t}}},296:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,o(267).twitterEmbedComponent)({embedComponent:function(t){for(var e,o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];return(e=t.widgets).createTweetEmbed.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Tweet."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});e.default=n},297:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,o(267).twitterEmbedComponent)({embedComponent:function(t){for(var e,o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];return(e=t.widgets).createMoment.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Moment."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});e.default=n},298:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,o(267).twitterEmbedComponent)({embedComponent:function(t){for(var e,o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];return(e=t.widgets).createTimeline.apply(e,n)},props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});e.default=n},299:function(t,e,o){"use strict";o(276)},300:function(t,e,o){(e=o(9)(!1)).push([t.i,'.youtube-wrapper{position:relative;width:100%}.youtube-wrapper:before{content:"";display:block;padding-top:56.25%}.youtube-wrapper iframe{position:absolute;top:0;left:0;width:100%;height:100%}',""]),t.exports=e},301:function(t,e,o){"use strict";o(277)},302:function(t,e,o){(e=o(9)(!1)).push([t.i,".close-button[data-v-1ebe934f]{width:45px}.qiita-btn[data-v-1ebe934f]{background-color:#55c500;color:#fff}.line-btn[data-v-1ebe934f]{background-color:#03ba1e;color:#fff}.webapp-btn[data-v-1ebe934f]{background-color:#cd5c5c;color:#fff}.clova-btn[data-v-1ebe934f]{background-color:#05d686;color:#fff}.github-btn[data-v-1ebe934f]{background-color:#000;color:#fff}.alexa-btn[data-v-1ebe934f]{background-color:#31c4f3;color:#fff}.slide-btn[data-v-1ebe934f]{background-color:#fcbc04;color:#fff}.scrapbox-btn[data-v-1ebe934f]{background-color:#02ec40;color:#fff}.btn-wrapper[data-v-1ebe934f]{display:inline-block;padding-bottom:5px}.description[data-v-1ebe934f]{white-space:pre-line;text-align:left}.twitter[data-v-1ebe934f]{width:100%}img[data-v-1ebe934f]{max-width:100%}.new-tab-img[data-v-1ebe934f]{width:16px}",""]),t.exports=e},305:function(t,e,o){"use strict";o.r(e);var n={components:{Tweet:o(295).Tweet},props:{data:{type:Object,required:!0}},data:function(){return{modal:!1,message:""}},methods:{openLink:function(t){window.open(t,"_blank")},openModal:function(){this.modal=!0},closeModal:function(){this.modal=!1},doSend:function(){this.message.length>0?(alert(this.message),this.message="",this.closeModal()):alert("メッセージを入力してください")}}},r=(o(299),o(301),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"example-modal-window"},[t.modal?o("MyModal",{on:{close:t.closeModal}},[o("img",{staticClass:"close-button",attrs:{src:"/images/close-black-18dp.svg",alt:""},on:{click:t.closeModal}}),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"container modal-container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 d-flex align-items-center"},[t.data.youtube?o("div",{staticClass:"youtube-wrapper"},[o("iframe",{staticClass:"embed-responsive-item",attrs:{src:t.data.youtube,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):t.data.twitterId?o("div",{staticClass:"twitter"},[o("Tweet",{attrs:{id:t.data.twitterId}})],1):o("div",{attrs:{"d-flex":"","align-items-center":""}},[o("img",{attrs:{src:t.data.src,alt:""}})]),t._v(" "),o("div",{staticClass:"py-3"})]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"py-2"}),t._v(" "),o("h2",[t._v(t._s(t.data.title))]),t._v(" "),o("div",{staticClass:"py-2"}),t._v(" "),t.data.github?o("div",{staticClass:"btn-wrapper"},[o("button",{staticClass:"btn github-btn d-flex align-items-center d-flex align-items-center",attrs:{type:"button"},on:{click:function(e){return t.openLink(t.data.github)}}},[o("b",[t._v("GitHub")]),t._v(" "),o("img",{staticClass:"new-tab-img",attrs:{src:"/images/open_in_new-black-18dp.svg",alt:""}})])]):t._e(),t._v(" "),t.data.qiita?o("div",{staticClass:"btn-wrapper"},[o("button",{staticClass:"btn qiita-btn d-flex align-items-center",attrs:{type:"button"},on:{click:function(e){return t.openLink(t.data.qiita)}}},[o("b",[t._v("Qiita記事")]),t._v(" "),o("img",{staticClass:"new-tab-img",attrs:{src:"/images/open_in_new-black-18dp.svg",alt:""}})])]):t._e(),t._v(" "),t.data.webapp?o("div",{staticClass:"btn-wrapper"},[o("button",{staticClass:"btn webapp-btn d-flex align-items-center",attrs:{type:"button"},on:{click:function(e){return t.openLink(t.data.webapp)}}},[o("b",[t._v("Webアプリ")]),t._v(" "),o("img",{staticClass:"new-tab-img",attrs:{src:"/images/open_in_new-black-18dp.svg",alt:""}})])]):t._e(),t._v(" "),t.data.linebot?o("div",{staticClass:"btn-wrapper"},[o("button",{staticClass:"btn line-btn d-flex align-items-center",attrs:{type:"button"},on:{click:function(e){return t.openLink(t.data.linebot)}}},[o("b",[t._v("LINE友達追加")]),t._v(" "),o("img",{staticClass:"new-tab-img",attrs:{src:"/images/open_in_new-black-18dp.svg",alt:""}})])]):t._e(),t._v(" "),t.data.clova?o("div",{staticClass:"btn-wrapper"},[o("button",{staticClass:"btn clova-btn d-flex align-items-center",attrs:{type:"button"},on:{click:function(e){return t.openLink(t.data.clova)}}},[o("b",[t._v("Clovaスキル")]),t._v(" "),o("img",{staticClass:"new-tab-img",attrs:{src:"/images/open_in_new-black-18dp.svg",alt:""}})])]):t._e(),t._v(" "),t.data.alexa?o("div",{staticClass:"btn-wrapper"},[o("button",{staticClass:"btn alexa-btn d-flex align-items-center",attrs:{type:"button"},on:{click:function(e){return t.openLink(t.data.alexa)}}},[o("b",[t._v("Alexaスキル")]),t._v(" "),o("img",{staticClass:"new-tab-img",attrs:{src:"/images/open_in_new-black-18dp.svg",alt:""}})])]):t._e(),t._v(" "),t.data.slide?o("div",{staticClass:"btn-wrapper"},[o("button",{staticClass:"btn slide-btn d-flex align-items-center",attrs:{type:"button"},on:{click:function(e){return t.openLink(t.data.slide)}}},[o("b",[t._v("スライド")]),t._v(" "),o("img",{staticClass:"new-tab-img",attrs:{src:"/images/open_in_new-black-18dp.svg",alt:""}})])]):t._e(),t._v(" "),t.data.scrapbox?o("div",{staticClass:"btn-wrapper"},[o("button",{staticClass:"btn scrapbox-btn d-flex align-items-center",attrs:{type:"button"},on:{click:function(e){return t.openLink(t.data.scrapbox)}}},[o("b",[t._v("Scrapbox")]),t._v(" "),o("img",{staticClass:"new-tab-img",attrs:{src:"/images/open_in_new-black-18dp.svg",alt:""}})])]):t._e(),t._v(" "),o("br"),o("br"),t._v(" "),o("p",{staticClass:"description"},[t._v("\n            "+t._s(t.data.description)+"\n          ")])])])])]):t._e()],1)}),[],!1,null,"1ebe934f",null);e.default=component.exports;installComponents(component,{MyModal:o(174).default})},306:function(t,e,o){"use strict";o.r(e);o(76),o(55),o(56);var n={props:{data:{type:Object,required:!0},narrowDownTags:{type:Array,required:!0}},methods:{narrowTags:function(t,e){return t.filter((function(t){return e.includes(t)}))}}},r=(o(293),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade"}},[t.narrowTags(t.data.tags,t.narrowDownTags)[0]?o("div",{staticClass:"productCard",on:{click:function(e){return t.$emit("openModal",t.data)}}},[o("div",{staticClass:"card my-card h-100"},[o("img",{staticClass:"card-img-top",attrs:{src:t.data.src,alt:""}}),t._v(" "),o("div",{staticClass:"card-body border-top"},[o("h5",{staticClass:"card-title"},[t._v("\n          "+t._s(t.data.title)+"\n        ")]),t._v(" "),t._l(t.data.tags,(function(e){return o("div",{key:e,staticClass:"tag col"},[o("div",{staticClass:"rounded tag_text",class:e},[t._v("\n            #"+t._s(e)+"\n          ")])])})),t._v(" "),o("p",{staticClass:"card-text"},[t._v("\n          制作日: "+t._s(t.data.date)+"\n        ")])],2)])]):t._e()])}),[],!1,null,"6f03603f",null);e.default=component.exports},312:function(t,e,o){"use strict";o.r(e);o(263),o(266),o(76),o(55),o(56);var n={data:function(){return{meta:{title:"Products",description:"制作物一覧",type:"article",url:"https://shinbunbun.info/products/",image:"https://shinbunbun.info/images/ogp.png"},modal:!1,choseProduct:{},tags:["WebApp","Nuxt.js","Vue.js","LINE Bot","AWS","GAS","Clova","Alexa","IoT","Network","Others"],narrowDownTags:["WebApp","Nuxt.js","Vue.js","LINE Bot","AWS","GAS","Clova","Alexa","IoT","Network","Others"],products:[{src:"/images/ubic-raspi.jpg",title:"UBICネットワークプロジェクト",tags:["Network"],date:"2021年5月",scrapbox:"https://scrapbox.io/shinbunbun/UBIC%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88",slide:"https://speakerdeck.com/shinbunbun_/ubicnetutowakupuroziekutonituite",description:"2021年5月〜製作中。\n          会津大学にあるUBICという施設にラズパイを7台設置してネットワークの実験をするプロジェクト。\n          先輩方の力を借りながらコアメンバー3人ほどで進行中。\n          現在は全機にGentoo Linuxをインストールし、ホスト2台からnode5台をネットブートするという構成で運用している。\n          試験的にdistccの分散コンパイルも実装しており、将来的にはk3sのクラスタなどを構築する予定。\n          "},{src:"/images/vpn.png",title:"ご自宅VPN関連システム",tags:["Network"],date:"2021年5月",slide:"https://docs.google.com/presentation/d/1WyGyQrJ1eFJu3ZrbJx6lbRwu3UfohVCFO9bdVaIfckI/edit?usp=sharing",description:"2021年3月〜2021年5月にかけて制作。\n          VPNを用いたリモート開発システムを構築した。\n          NAT越えなど色々ハードルはあったものの、現在はIntel NUCを使って快適なリモート開発を行っている。\n          "},{src:"/images/portfolio.png",title:"ポートフォリオサイト",tags:["AWS","WebApp","Nuxt.js"],date:"2021年1月",github:"https://github.com/shinbunbun/portfolio",webapp:"https://shinbunbun.info",description:"2020年12月〜2021年1月にかけて制作。\n          高校一年生の頃から使っていたポートフォリオサイトが一つあったのだが、EC2のパーミッションをミスってSSHもFTPも入れなくなってしまい、1年ほど放置していた。\n          が、さすがにそのままはよくないなーと思い、Nuxt.jsとBootstrap5を使って新しいポートフォリオサイト（これ）を制作した。\n          GitHub Pagesにホスティングしている。\n          "},{src:"/images/jikanwai-bot.png",title:"時間割bot",tags:["AWS","LINE Bot","WebApp","Clova","Nuxt.js"],date:"2018年8月(LINE Bot版)",youtube:"https://www.youtube.com/embed/8OPSW_0tWmU",github:"https://github.com/shinbunbun/jikanwari-bot",qiita:"https://qiita.com/shinbunbun_/items/00c4064c8133a34cf7c3",webapp:"https://jikanwari-bot.shinbunbun.info",linebot:"https://line.me/R/ti/p/%40ywg0561x",clova:"https://clova.line.me/clova-ai/skillstore/skill/com.takamuneyuto.skill.second",description:"2018年夏に制作。\n          友達追加数2739人（2021/01/01現在）で、私が作った作品の中で一番の人気作。\n          LINEで時間割を確認できるLINE Bot。\n          「今日の時間割」、「明日の時間割」などを確認できるほか、毎日指定した時間に時間割を通知してくれる機能もある。\n          「時間割共有機能」もあり、同じクラスの友達内で時間割の共有ができる。\n          グループでの使用も可能。\n          Clovaスキル版、LIFFアプリ版もある。"},{src:"/images/2019graduate.png",title:"2019年度卒業生お祝いページ",tags:["AWS","WebApp","Vue.js"],date:"2020年3月",github:"https://github.com/shinbunbun/2019_graduate",description:"2020年3月に制作。\n          卒業する文化祭執行部の先輩に向けて、今までの文化祭の写真が見れるサイトを作った。\n          フロントエンドはVue.jsとBootstrap4で作成し、S3&CloudFrontへホスティング。\n          バックエンドはLambdaを使用し、認証はCognitoとAmplifyを使用した。\n          また、PWAも実装した。\n          "},{src:"/images/2019votesystem.png",title:"2019年文化祭投票システム",tags:["AWS","WebApp","Vue.js"],date:"2019年9月",twitterId:"1179361752951250944",github:"https://github.com/shinbunbun/vote-system-2019",qiita:"https://qiita.com/shinbunbun_/items/b6f69cf931eb17eed69b",webapp:"https://vote-test.shinbunbun.info/",description:"2019年夏に制作。\n          文化祭の出展投票をWebからできるシステム。\n          2018年はLINEBotを使ったが、2019年はVue.jsを使用してWebアプリを作った。\n          フロント側はVue.jsとBootstrap4で作り、S3&CloudFrontにホスティング。\n          バックエンドはLambdaを使用し、DBはDynamoDBを使用した。"},{src:"/images/huro.jpg",title:"風呂のボタン押すやつ",tags:["IoT","AWS","LINE Bot"],date:"2019年5月",twitterId:"1125212225914818560",qiita:"https://qiita.com/shinbunbun_/items/d4dcf2e3ce96c041e9d5",github:"https://github.com/shinbunbun/huro",description:"2019年5月制作。\n          LINE Botから風呂のボタンを押せる装置。\n          帰宅前にボタンを押しておくと、帰宅する頃には風呂がわいている。\n          最高。\n          ちなみにLightsailの維持コストの関係で現在は停止中。\n          "},{src:"/images/tmp.jpg",title:"気温チェッカー",tags:["IoT"],date:"2019年6月",twitterId:"1138749064810356736",qiita:"https://qiita.com/shinbunbun_/items/86cdd013a4abdf5ff49a",description:"2019年6月製作。\n          祖母の熱中症対策で、気温が30度を超えたらLEDがチカチカする装置を作った。\n          IoTのタグがついているが、Internetにつながってないので厳密にはIoTではない。\n          "},{src:"/images/pushtool.png",title:"Push Message送信ツール",tags:["WebApp"],date:"2019年3月",github:"https://github.com/shinbunbun/Sending-Push-Message",qiita:"https://qiita.com/shinbunbun_/items/62b824a1205d31d56427",description:"2019年3月製作。\n          GUIでLINE Botのプッシュメッセージを送信できるツール。\n          PUSH APIは一度に送れる上限が150人だが、このツールを使えばそれ以上の人数でも一度に送ることができる。\n          "},{src:"http://img.youtube.com/vi/TQUemTeiCKM/hqdefault.jpg",title:"宿題終わってる？",tags:["AWS","Clova"],date:"2019年3月",youtube:"https://www.youtube.com/embed/TQUemTeiCKM",clova:"https://clova.line.me/clova-ai/skillstore/skill/info.shinbunbun.syukudai",description:"2019年3月に制作。\n          みんなで宿題の進捗状況を共有することが出来る。\n\n          Lambda&DynamoDBを使用している\n          "},{src:"http://img.youtube.com/vi/e3FB_Cc9RrQ/hqdefault.jpg",title:"ひな祭りの豆知識",tags:["AWS","Clova","Alexa"],date:"2019年12月",youtube:"https://www.youtube.com/embed/e3FB_Cc9RrQ",alexa:"https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E3%81%B2%E3%81%AA%E7%A5%AD%E3%82%8A%E3%81%AE%E8%B1%86%E7%9F%A5%E8%AD%98/dp/B07P6QGDTP",clova:"https://clova.line.me/clova-ai/skillstore/skill/com.takamuneyuto.skill.hinamaturi",description:"2019年2月製作。\n          ひな祭りに関する豆知識を教えてくれる。\n          Lambdaを使用している。\n          "},{src:"http://img.youtube.com/vi/3UH8_1woBak/hqdefault.jpg",title:"今日の太陽",tags:["AWS","Alexa"],date:"2019年1月",youtube:"https://www.youtube.com/embed/3UH8_1woBak",alexa:"https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E4%BB%8A%E6%97%A5%E3%81%AE%E5%A4%AA%E9%99%BD/dp/B07N6JJD46",description:"2019年1月製作。\n          日の出時刻、日の入り時刻を教えてくれる。\n          Lambdaを使用している。\n          "},{src:"http://img.youtube.com/vi/fG9QNzsgg_Q/hqdefault.jpg",title:"トイレの音消し",tags:["AWS","Clova","Alexa"],date:"2018年12月",youtube:"https://www.youtube.com/embed/fG9QNzsgg_Q",qiita:"https://qiita.com/shinbunbun_/items/21129544134f8f725c83#1%E3%81%A4%E7%9B%AE%E3%83%88%E3%82%A4%E3%83%AC%E3%81%AE%E9%9F%B3%E6%B6%88%E3%81%97",alexa:"https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E3%83%88%E3%82%A4%E3%83%AC%E3%81%AE%E9%9F%B3%E6%B6%88%E3%81%97/dp/B07LFRHLL4",clova:"https://clova.line.me/clova-ai/skillstore/skill/com.takamuneyuto.skill.first",description:"2018年12月製作。\n          「音を流して」と言うとトイレの音を掻き消す水音を流してくれる。\n\n          Lambdaを使用している。\n          "},{src:"http://img.youtube.com/vi/uzbAfId6HkI/hqdefault.jpg",title:"ぶんぶんの電車運行情報",tags:["AWS","Clova","Alexa"],date:"2018年12月",youtube:"https://www.youtube.com/embed/uzbAfId6HkI",qiita:"https://qiita.com/shinbunbun_/items/21129544134f8f725c83#2%E3%81%A4%E7%9B%AE%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93%E3%81%AE%E9%9B%BB%E8%BB%8A%E9%81%8B%E8%A1%8C%E6%83%85%E5%A0%B1",alexa:"https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93%E3%81%AE%E9%9B%BB%E8%BB%8A%E9%81%8B%E8%A1%8C%E6%83%85%E5%A0%B1/dp/B07LGMNQNR",description:"2018年12月製作。\n          路線名を言うとその路線の運行情報を教えてくれる。\n\n          Lambdaを使用しており、電車運行情報は鉄道遅延情報のjsonから取得している。"},{src:"http://img.youtube.com/vi/tqTjjA9f_4M/hqdefault.jpg",title:"ぶんぶんのルーレット",tags:["AWS","Alexa"],date:"2018年12月",youtube:"https://www.youtube.com/embed/tqTjjA9f_4M",qiita:"https://qiita.com/shinbunbun_/items/21129544134f8f725c83#4%E3%81%A4%E7%9B%AE%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88",alexa:"https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AC%E3%83%83%E3%83%88/dp/B07LGMKZ1V",description:"2018年12月製作。\n          好きな数字を言うと、1からその数字までのルーレットを回してくれる。\n\n          Lambdaを使用している。\n          "},{src:"http://img.youtube.com/vi/9uzIM6ICO-U/hqdefault.jpg",title:"大晦日カウントダウン",tags:["AWS","Alexa"],date:"2018年12月",youtube:"https://www.youtube.com/embed/9uzIM6ICO-U",qiita:"https://qiita.com/shinbunbun_/items/21129544134f8f725c83#3%E3%81%A4%E7%9B%AE%E5%A4%A7%E6%99%A6%E6%97%A5%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%83%80%E3%82%A6%E3%83%B3",alexa:"https://www.amazon.co.jp/%E3%81%B6%E3%82%93%E3%81%B6%E3%82%93-%E5%A4%A7%E6%99%A6%E6%97%A5%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%83%80%E3%82%A6%E3%83%B3/dp/B07LF22NQR",description:"2018年12月製作。\n          大晦日まであと何日か教えてくれる。\n\n          Lambdaを使用している。\n          "},{src:"/images/maruken.jpg",title:"部活出席管理ソフト",tags:["Others"],date:"2018年11月",youtube:"https://www.youtube.com/embed/2ag9Z2FxYYg",description:"2018年11月製作。\n          唯一のC#作品。\n          何もわからないままとりあえず動くものを作ってみた。\n          2018年11月〜2019年11月までの1年間、私が所属していた部活で使用された。\n          "},{src:"/images/weatherbot.jpg",title:"お天気bot",tags:["AWS","GAS"],date:"2018年10月",youtube:"https://www.youtube.com/embed/YOY9ii2-aRI",qiita:"https://qiita.com/shinbunbun_/items/23e2100abbe0fcd0274c",github:"https://github.com/shinbunbun/Weather-bot",linebot:"https://line.me/R/ti/p/%40unq9376d",description:"2018年10月製作。\n          郵便番号を送信すると、その地域の3時間毎の天気予報をFlexMessageで返信してくれる。\n\n          GASで動いており、OpenWeatherMapのAPIを使用している。\n          OpenWeatherMapのサイトで閲覧する天気予報とAPIで取得する天気予報が違うなどの不可解な点は少しあるが、無料枠でもそこそこ使えるので結構便利。\n          "},{src:"/images/trainbot.jpg",title:"ぶんぶんの運行情報bot",tags:["AWS","LINE Bot"],date:"2018年9月",youtube:"https://www.youtube.com/embed/j_ET-VkRlNo",linebot:"https://line.me/R/ti/p/%40buo7278w",description:"2018年9月製作。友達追加数162人(2021/1/1現在)\n          運行情報を検索したい路線名を送信するとその路線の運行情報を返信する。\n          Clovaスキルとも紐づいており、Clovaスキルで路線を検索した際にその路線が遅延・運休していたら、botがその路線の詳細な運行情報へのリンクを送信してくれる。\n\n          GASで動いており、電車運行情報は鉄道遅延情報のjson（https://rti-giken.jp/fhc/api/train_tetsudo/）から取得している。\n          "},{src:"/images/urlshoter.jpg",title:"URL短縮bot",tags:["GAS","LINE Bot"],date:"2018年9月",youtube:"https://www.youtube.com/embed/BZ8KkrT5sHU",linebot:"https://line.me/R/ti/p/%40shr5133j",description:"2018年9月製作。\n          URLを送信するとそのURLの短縮URLを作成する。\n\n          GASで動いており、bitlyのAPIを叩いて短縮URLを作成している。\n          "},{src:"/images/2018votesystem.jpg",title:"2018年文化祭大賞投票bot",tags:["AWS","LINE Bot"],date:"2018年9月",youtube:"https://www.youtube.com/embed/urwlANazl-s",qiita:"https://qiita.com/shinbunbun_/items/af55e35888c441a5b878",description:"2018年夏に制作。\n          文化祭の出展投票をLINE Botからできるシステム。\n          1000人以上の方に追加して頂いた。\n          投票番号を入力するとFlexMessageで該当する出展の詳細が表示される。\n          投票ボタンを押すと確認のボタンが送られてくるので、「はい」を押すと投票が完了する。\n\n          最初はGAS&スプレッドシートを使用して作っていたが、本番1週間前に行った負荷テストで高トラフィックに耐えられないことがわかり、3日かけて死に物狂いでLambda&DynamoDBに移行した。\n          当日はDynamoDBのキャパシティユニットを40に設定するなどして高負荷対策を行ったが、蓋を開けてみると3で十分な程度の負荷しかかからなかった。\n          "},{src:"/images/2018tgc.jpg",title:"2018年ミスコン投票bot",tags:["AWS","LINE Bot"],date:"2018年9月",youtube:"https://www.youtube.com/embed/mQTMMxiH_y8",linebot:"https://line.me/R/ti/p/%40awj3413y",description:"2018年夏製作。僕が通っている高校は男子校だが文化祭でミスコンがある。その投票システムを制作した。\n          リッチメニューの「投票」ボタンを押すと立候補者一覧のFlexMessageが表示される。\n          投票したい候補者を選択すると確認のボタンが送られてくるので、「はい」を押すと投票が完了する。\n\n          こちらも文化祭大賞投票botと同様に最初はGAS&スプレッドシートを使用して作っていたが、本番1週間前に行った負荷テストで高トラフィックに耐えられないことがわかり、3日かけて死に物狂いでLambda&DynamoDBに移行した。\n          当日はDynamoDBのキャパシティユニットを40に設定するなどして高負荷対策を行ったが、蓋を開けてみると5で十分な程度の負荷しかかからなかった。\n\n          上記の友達追加ボタンは、テスト用に作成した航空会社の投票botの追加リンク。これはGAS&スプレッドシートで動いている。\n          "}]}},methods:{openModal:function(data){this.choseProduct=data,this.$refs.ProductModal.openModal()},changeCheckBox:function(t){this.narrowDownTags.includes(t)?this.narrowDownTags=this.narrowDownTags.filter((function(e){return e!==t})):this.narrowDownTags.push(t)},allCheck:function(t){this.narrowDownTags="on"===t?this.tags:[]}},head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:type",property:"og:type",content:this.meta.type},{hid:"og:title",property:"og:title",content:this.meta.title},{hid:"og:description",property:"og:description",content:this.meta.description},{hid:"og:url",property:"og:url",content:this.meta.url},{hid:"og:image",property:"og:image",content:this.meta.image}]}}},r=(o(289),o(291),o(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container"},[o("div",{staticClass:"py-4"}),t._v(" "),o("h1",[t._v("Products")]),t._v(" "),o("div",{staticClass:"py-4"}),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"collapse",attrs:{id:"collapseExample"}},[o("div",{staticClass:"card card-body tags-card"},[t._l(t.tags,(function(e){return o("span",{key:e},[o("label",{staticClass:"form-check-label rounded",class:"label-"+e,attrs:{for:"check-"+e}},[o("input",{staticClass:"form-check-input",attrs:{id:"check-"+e,type:"checkbox",value:""},domProps:{checked:t.narrowDownTags.includes(e)},on:{change:function(o){return t.changeCheckBox(e)}}}),t._v("\n            "+t._s(e)+"\n          ")])])})),t._v(" "),o("div",[o("br"),t._v(" "),o("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.allCheck("on")}}},[t._v("\n            全選択\n          ")]),t._v(" "),o("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.allCheck("off")}}},[t._v("\n            選択解除\n          ")])]),t._v(" "),o("div",{staticClass:"py-1"}),t._v(" "),o("p",[t._v("※チェックを入れたタグが1つでも含まれている作品が表示されます")])],2)]),t._v(" "),o("div",{staticClass:"py-2"}),t._v(" "),o("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4"},t._l(t.products,(function(e){return o("ProductCard",{key:e.title,staticClass:"col",attrs:{data:e,"narrow-down-tags":t.narrowDownTags},on:{openModal:t.openModal}})})),1)]),t._v(" "),o("ProductModal",{ref:"ProductModal",attrs:{data:t.choseProduct}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"}},[this._v("\n        ▽絞り込み\n      ")])])}],!1,null,"e693ad1e",null);e.default=component.exports;installComponents(component,{ProductCard:o(306).default,ProductModal:o(305).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{262:function(t,e,r){var n=r(3);e.f=n},263:function(t,e,r){"use strict";var n=r(2),o=r(4),c=r(30),l=r(26),v=r(16),m=r(110),d=r(172),f=r(6),h=r(15),_=r(74),y=r(11),w=r(7),k=r(24),C=r(28),S=r(71),j=r(42),x=r(75),O=r(54),z=r(106),A=r(264),N=r(109),E=r(41),I=r(22),D=r(70),L=r(23),P=r(19),H=r(107),F=r(72),B=r(73),G=r(108),T=r(3),W=r(262),M=r(265),V=r(43),$=r(29),J=r(33).forEach,R=F("hidden"),Q=T("toPrimitive"),K=$.set,U=$.getterFor("Symbol"),X=Object.prototype,Y=o.Symbol,Z=c("JSON","stringify"),tt=E.f,et=I.f,at=A.f,it=D.f,nt=H("symbols"),ot=H("op-symbols"),st=H("string-to-symbol-registry"),ct=H("symbol-to-string-registry"),lt=H("wks"),pt=o.QObject,ut=!pt||!pt.prototype||!pt.prototype.findChild,vt=v&&f((function(){return 7!=x(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=tt(X,e);n&&delete X[e],et(t,e,r),n&&t!==X&&et(X,e,n)}:et,mt=function(t,e){var symbol=nt[t]=x(Y.prototype);return K(symbol,{type:"Symbol",tag:t,description:e}),v||(symbol.description=e),symbol},gt=d?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},ft=function(t,e,r){t===X&&ft(ot,e,r),w(t);var n=S(e,!0);return w(r),h(nt,n)?(r.enumerable?(h(t,R)&&t[R][n]&&(t[R][n]=!1),r=x(r,{enumerable:j(0,!1)})):(h(t,R)||et(t,R,j(1,{})),t[R][n]=!0),vt(t,n,r)):et(t,n,r)},ht=function(t,e){w(t);var r=C(e),n=O(r).concat(wt(r));return J(n,(function(e){v&&!_t.call(r,e)||ft(t,e,r[e])})),t},_t=function(t){var e=S(t,!0),r=it.call(this,e);return!(this===X&&h(nt,e)&&!h(ot,e))&&(!(r||!h(this,e)||!h(nt,e)||h(this,R)&&this[R][e])||r)},bt=function(t,e){var r=C(t),n=S(e,!0);if(r!==X||!h(nt,n)||h(ot,n)){var o=tt(r,n);return!o||!h(nt,n)||h(r,R)&&r[R][n]||(o.enumerable=!0),o}},yt=function(t){var e=at(C(t)),r=[];return J(e,(function(t){h(nt,t)||h(B,t)||r.push(t)})),r},wt=function(t){var e=t===X,r=at(e?ot:C(t)),n=[];return J(r,(function(t){!h(nt,t)||e&&!h(X,t)||n.push(nt[t])})),n};(m||(P((Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=G(t),r=function(t){this===X&&r.call(ot,t),h(this,R)&&h(this[R],e)&&(this[R][e]=!1),vt(this,e,j(1,t))};return v&&ut&&vt(X,e,{configurable:!0,set:r}),mt(e,t)}).prototype,"toString",(function(){return U(this).tag})),P(Y,"withoutSetter",(function(t){return mt(G(t),t)})),D.f=_t,I.f=ft,E.f=bt,z.f=A.f=yt,N.f=wt,W.f=function(t){return mt(T(t),t)},v&&(et(Y.prototype,"description",{configurable:!0,get:function(){return U(this).description}}),l||P(X,"propertyIsEnumerable",_t,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!m,sham:!m},{Symbol:Y}),J(O(lt),(function(t){M(t)})),n({target:"Symbol",stat:!0,forced:!m},{for:function(t){var e=String(t);if(h(st,e))return st[e];var symbol=Y(e);return st[e]=symbol,ct[symbol]=e,symbol},keyFor:function(t){if(!gt(t))throw TypeError(t+" is not a symbol");if(h(ct,t))return ct[t]},useSetter:function(){ut=!0},useSimple:function(){ut=!1}}),n({target:"Object",stat:!0,forced:!m,sham:!v},{create:function(t,e){return void 0===e?x(t):ht(x(t),e)},defineProperty:ft,defineProperties:ht,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!m},{getOwnPropertyNames:yt,getOwnPropertySymbols:wt}),n({target:"Object",stat:!0,forced:f((function(){N.f(1)}))},{getOwnPropertySymbols:function(t){return N.f(k(t))}}),Z)&&n({target:"JSON",stat:!0,forced:!m||f((function(){var symbol=Y();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,e,r){for(var n,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(n=e,(y(e)||void 0!==t)&&!gt(t))return _(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!gt(e))return e}),o[1]=e,Z.apply(null,o)}});Y.prototype[Q]||L(Y.prototype,Q,Y.prototype.valueOf),V(Y,"Symbol"),B[R]=!0},264:function(t,e,r){var n=r(28),o=r(106).f,c={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return l&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return l.slice()}}(t):o(n(t))}},265:function(t,e,r){var path=r(171),n=r(15),o=r(262),c=r(22).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});n(e,t)||c(e,t,{value:o.f(t)})}},266:function(t,e,r){"use strict";var n=r(2),o=r(16),c=r(4),l=r(15),v=r(11),m=r(22).f,d=r(170),f=c.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var h={},_=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof _?new f(t):void 0===t?f():f(t);return""===t&&(h[e]=!0),e};d(_,f);var y=_.prototype=f.prototype;y.constructor=_;var w=y.toString,k="Symbol(test)"==String(f("test")),C=/^Symbol\((.*)\)[^)]+$/;m(y,"description",{configurable:!0,get:function(){var symbol=v(this)?this.valueOf():this,t=w.call(symbol);if(l(h,symbol))return"";var desc=k?t.slice(7,-1):t.replace(C,"$1");return""===desc?void 0:desc}}),n({global:!0,forced:!0},{Symbol:_})}},268:function(t,e,r){var content=r(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("7ac61cb0",content,!0,{sourceMap:!1})},269:function(t,e,r){var content=r(283);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("09cf697b",content,!0,{sourceMap:!1})},280:function(t,e,r){"use strict";r(268)},281:function(t,e,r){(e=r(9)(!1)).push([t.i,".profile_img[data-v-7d93182a]{width:200px}.img_container[data-v-7d93182a],.title_container[data-v-7d93182a]{text-align:center}.sns-image-container a[data-v-7d93182a]{margin:0 10px}.sns-image-container a>img[data-v-7d93182a]{width:40px;transition:.1s}.border[data-v-7d93182a]{padding:20px}.sns-icons img[data-v-7d93182a]{width:50px}@media screen and (min-width:768px){.sns-image-container a>img[data-v-7d93182a]:hover{transform:scale(1.1);transition:.1s}}",""]),t.exports=e},282:function(t,e,r){"use strict";r(269)},283:function(t,e,r){(e=r(9)(!1)).push([t.i,"",""]),t.exports=e},311:function(t,e,r){"use strict";r.r(e);r(263),r(266);var n={data:function(){return{meta:{title:"About me",description:"しんぶんぶんとは",type:"article",url:"https://shinbunbun.info/about/",image:"https://shinbunbun.info/images/ogp.png"},languages:[{src:"/images/nodejs-new-pantone-black.png",title:"Node.js",to:"https://nodejs.org/"},{src:"/images/ts.png",title:"TypeScript",to:"https://www.typescriptlang.org/"}],frameworks:[{src:"/images/vue.png",title:"Vue.js",to:"https://vuejs.org/"},{src:"/images/nuxt-icon.png",title:"Nuxt.js",to:"https://nuxtjs.org/"},{src:"/images/bootstrap-solid.svg",title:"Bootstrap4, 5",to:"https://getbootstrap.com/"},{src:"/images/vuetify.png",title:"Vuetify",to:"https://vuetifyjs.com/"}],clouds:[{src:"/images/api-gateway.png",title:"API Gateway",to:"https://aws.amazon.com/jp/api-gateway/"},{src:"/images/Arch_AWS-Lambda_64@5x.png",title:"Lambda",to:"https://aws.amazon.com/jp/lambda/"},{src:"/images/Arch_Amazon-DynamoDB_64@5x.png",title:"DynamoDB",to:"https://aws.amazon.com/jp/dynamodb/"},{src:"/images/Arch_Amazon-S3-On-Outposts_Storage_64@5x.png",title:"S3",to:"https://aws.amazon.com/jp/s3/"},{src:"/images/Arch_Amazon-CloudFront_64@5x.png",title:"CloudFront",to:"https://aws.amazon.com/jp/cloudfront/"},{src:"/images/Arch_Amazon-Cognito_64@5x.png",title:"Cognito",to:"https://aws.amazon.com/jp/cognito/"},{src:"/images/Arch_Amazon-EC2_64@5x.png",title:"EC2",to:"https://aws.amazon.com/jp/ec2/"},{src:"/images/13742415.png",title:"serverless",to:"https://www.serverless.com/"}],others:[{src:"/images/GitHub-Mark-120px-plus.png",title:"GitHub Actions",to:"https://github.co.jp/features/actions"},{src:"/images/oidc.png",title:"OpenID Connect",to:"https://openid.net/connect/"}]}},created:function(){},methods:{openLink:function(t){window.open(t,"_blank")}},head:function(){return{title:this.meta.title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:type",property:"og:type",content:this.meta.type},{hid:"og:title",property:"og:title",content:this.meta.title},{hid:"og:description",property:"og:description",content:this.meta.description},{hid:"og:url",property:"og:url",content:this.meta.url},{hid:"og:image",property:"og:image",content:this.meta.image}]}}},o=(r(280),r(282),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"py-4"}),t._v(" "),r("h1",[t._v("About me")]),t._v(" "),r("div",{staticClass:"py-4"}),t._v(" "),r("div",{staticClass:"border rounded"},[t._m(0),t._v(" "),r("div",{staticClass:"py-2"}),t._v(" "),r("div",{staticClass:"sns-icons row text-center"},[r("div",{staticClass:"col sns-image-container"},[r("a",{attrs:{href:"https://twitter.com/shinbunbun_",target:"blank",rel:"noopener"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/twitter.png",expression:"`/images/twitter.png`"}],attrs:{alt:"twitter"}})]),t._v(" "),r("a",{attrs:{href:"https://www.facebook.com/yuto.takamune.77/",target:"blank",rel:"noopener"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/facebook.png",expression:"`/images/facebook.png`"}],attrs:{alt:"facebook"}})]),t._v(" "),r("a",{attrs:{href:"https://github.com/shinbunbun",target:"blank",rel:"noopener"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/GitHub-Mark-120px-plus.png",expression:"`/images/GitHub-Mark-120px-plus.png`"}],attrs:{alt:"github"}})]),t._v(" "),r("a",{attrs:{href:"https://qiita.com/shinbunbun_",target:"blank",rel:"noopener"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/favicon.png",expression:"`/images/favicon.png`"}],attrs:{alt:"qiita"}})]),t._v(" "),r("a",{attrs:{href:"https://speakerdeck.com/shinbunbun_",target:"blank",rel:"noopener"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"/images/speakerdeck.png",expression:"`/images/speakerdeck.png`"}],attrs:{alt:"speaker deck"}})])])]),t._v(" "),r("div",{staticClass:"py-2"}),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"py-2"}),t._v(" "),r("div",{staticClass:"skils"},[r("h3",[t._v("Skils")]),t._v(" "),r("br"),t._v(" "),r("h4",[t._v("言語")]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"row row-cols-md-4 row-cols-sm-2 row-cols-1"},t._l(t.languages,(function(t){return r("HomeCard",{key:t.title,attrs:{data:t}})})),1),t._v(" "),r("br"),t._v(" "),r("h4",[t._v("フロントエンドフレームワーク")]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"row row-cols-md-4 row-cols-sm-2 row-cols-1"},t._l(t.frameworks,(function(t){return r("HomeCard",{key:t.title,attrs:{data:t}})})),1)]),t._v(" "),r("br"),t._v(" "),r("h4",[t._v("AWS")]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"row row-cols-md-4 row-cols-sm-2 row-cols-1"},t._l(t.clouds,(function(t){return r("HomeCard",{key:t.title,attrs:{data:t}})})),1),t._v(" "),r("br"),t._v(" "),r("h4",[t._v("その他")]),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"row row-cols-md-4 row-cols-sm-2 row-cols-1"},t._l(t.others,(function(t){return r("HomeCard",{key:t.title,attrs:{data:t}})})),1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row title"},[e("div",{staticClass:"col-12 img_container"},[e("img",{staticClass:"rounded-circle profile_img",attrs:{src:"/images/VjftF494_400x400.jpg",alt:""}})]),this._v(" "),e("div",{staticClass:"col-12 title_container"},[e("div",{staticClass:"py-3"}),this._v(" "),e("h1",[this._v("しんぶんぶん")]),this._v(" "),e("h2",{staticClass:"h2title"},[this._v("\n            （高棟 雄斗）\n          ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row self_introduce"},[r("div",{staticClass:"col"},[r("h3",[t._v("自己紹介")]),t._v(" "),r("br"),t._v(" "),r("p",[t._v("\n            ただのB1。会津大学1年生。中三の11月頃からプログラミングを始め、主にLINE Botを開発。中でも時間割botは友達追加数2700人超えの人気サービスとなった。"),r("br"),t._v("\n            高二の夏頃からはVue.jsを使ったWebアプリの開発をはじめ、文化祭の出展投票システムや時間割botのLIFFアプリなどを開発した。"),r("br"),t._v("\n            フリーランスとして案件の受注もしており、ホームページ制作、LINE APIを使ったアプリケーションの開発などを行っている。"),r("br"),t._v("\n            AWSが好きで、ほとんどのアプリケーションをLambda & DynamoDB & S3 & CloudFrontのサーバレスアーキテクチャで構築している。"),r("br"),t._v("\n            コミュニティ活動も高一から行っており、主にLINE Developer Communityを中心に活動している。"),r("br"),t._v("\n            すごくなりたいがくせいぐるーぷ運営メンバー。\n          ")]),t._v(" "),r("div",{staticClass:"py-2"}),t._v(" "),r("div",{staticClass:"row"},[r("h3",[t._v("受賞歴")]),t._v(" "),r("br"),t._v(" "),r("p",[r("ul",[r("li",[r("a",{attrs:{href:"https://gsacademy.jp/hack-trek-2021/",target:"_blank"}},[t._v("Hack Trek 2021")]),t._v(" 優勝")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://hmcn.connpass.com/event/173233/",target:"_blank"}},[t._v("レッドハッカソン オンライン 2020")]),t._v(" 奨励賞")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://linedev.connpass.com/event/96834/",target:"_blank"}},[t._v("LINE BOOT AWARDS×サイボウズ ビジネス/ワーク部門賞狙いのハッカソン")]),t._v(" LINE賞・サイボウズ賞")])])])]),t._v(" "),r("div",{staticClass:"py-2"}),t._v(" "),r("div",{staticClass:"row"},[r("h3",[t._v("保有資格")]),t._v(" "),r("br"),t._v(" "),r("p",[r("ul",[r("li",[t._v("情報セキュリティマネジメント試験（2018年春合格）")]),t._v(" "),r("li",[t._v("応用情報技術者試験（2019年春合格）")])])])]),t._v(" "),r("div",{staticClass:"py-2"}),t._v(" "),r("div",{staticClass:"row"},[r("h3",[t._v("研究分野")]),t._v(" "),r("br"),t._v(" "),r("p",[r("ul",[r("li",[t._v("Self-Sovereign Identity")]),t._v(" "),r("li",[t._v("Decentralized Identity")]),t._v(" "),r("li",[t._v("Verifiable Credentials")])])])]),t._v(" "),r("div",{staticClass:"row"},[r("h3",[t._v("仕事")]),t._v(" "),r("br"),t._v(" "),r("p",[r("ul",[r("li",[r("a",{attrs:{href:"https://www.i-kasa.com/",target:"blank_"}},[t._v("株式会社 Nature Innovation Group（アイカサ）")]),t._v(" バックエンド開発（2018年12月~2019年12月）")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://yakan-hiko.co.jp/",target:"blank_"}},[t._v("株式会社夜間飛行")]),t._v(" ホームページ制作（2019年12月〜現在）")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://lastrust.io/",target:"blank_"}},[t._v("LasTrust株式会社")]),t._v(" インターンシップ（R&D） （2021年1月〜現在）")])])])])])])}],!1,null,"7d93182a",null);e.default=component.exports;installComponents(component,{HomeCard:r(173).default})}}]);
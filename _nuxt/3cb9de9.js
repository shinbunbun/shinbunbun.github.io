(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(t,o,e){"use strict";var n=e(1),r=e(165),l=e(166),c=e.n(l);e(253),n.a.use(r.a,{error:"/images/NotFound.jpg",loading:"/images/NowLoading.jpg",observer:!0}),n.a.component("light-box",c.a)},142:function(t,o,e){var content=e(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("4e8213bc",content,!0,{sourceMap:!1})},143:function(t,o,e){var content=e(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("2f61aa80",content,!0,{sourceMap:!1})},144:function(t,o,e){var content=e(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("af073bf6",content,!0,{sourceMap:!1})},145:function(t,o,e){var content=e(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("40ff003e",content,!0,{sourceMap:!1})},146:function(t,o,e){var content=e(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("303318b2",content,!0,{sourceMap:!1})},147:function(t,o,e){var content=e(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("b2169ee0",content,!0,{sourceMap:!1})},148:function(t,o,e){var content=e(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("bb81e984",content,!0,{sourceMap:!1})},149:function(t,o,e){var content=e(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("0a3ffe54",content,!0,{sourceMap:!1})},150:function(t,o,e){var content=e(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("59c7825e",content,!0,{sourceMap:!1})},151:function(t,o,e){var content=e(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("9629e9c0",content,!0,{sourceMap:!1})},168:function(t,o,e){"use strict";e(216),e(218);var n=e(8),component=Object(n.a)({},(function(){var t=this.$createElement,o=this._self._c||t;return o("div",[o("MyHeader"),this._v(" "),o("Nuxt"),this._v(" "),o("MyFooter")],1)}),[],!1,null,null,null);o.a=component.exports;installComponents(component,{MyHeader:e(256).default,MyFooter:e(257).default})},169:function(t,o,e){"use strict";e.r(o);var n={props:{data:{type:Object,required:!0}}},r=(e(226),e(228),e(8)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.data.modal?e("div",{staticClass:"homeCard"},[e("div",{staticClass:"card rounded h-100",class:t.data.title,style:{"border-color":t.data.color}},[e("div",{on:{click:function(o){return t.$emit("openModal",t.data)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-3"},[e("img",{attrs:{src:t.data.src,alt:""}})]),t._v(" "),e("div",{staticClass:"card-body col-md-12 col-9"},[e("p",{staticClass:"card_title"},[t._v("\n            "+t._s(t.data.title)+"\n          ")])])])])])]):e("div",{staticClass:"homeCard"},[t.data.internal?e("div",{staticClass:"card rounded h-100",class:t.data.title,style:{"border-color":t.data.color}},[e("NuxtLink",{attrs:{to:t.data.to}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-3"},[e("img",{attrs:{src:t.data.src,alt:""}})]),t._v(" "),e("div",{staticClass:"card-body col-md-12 col-9"},[e("p",{staticClass:"card_title"},[t._v("\n            "+t._s(t.data.title)+"\n          ")])])])])],1):t.data.disable?e("div",{staticClass:"card-disable-wrapper rounded"},[e("div",{staticClass:"card card-disable rounded h-100",class:t.data.title,style:{"border-color":t.data.color}},[e("a",{attrs:{href:t.data.to,target:"_blank"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-3"},[e("img",{attrs:{src:t.data.src,alt:""}})]),t._v(" "),e("div",{staticClass:"card-body col-md-12 col-9"},[e("p",{staticClass:"card_title"},[t._v("\n              "+t._s(t.data.title)+"\n            ")])])])])])]):e("div",{staticClass:"card rounded h-100",class:t.data.title,style:{"border-color":t.data.color}},[e("a",{attrs:{href:t.data.to,target:"_blank"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-3"},[e("img",{attrs:{src:t.data.src,alt:""}})]),t._v(" "),e("div",{staticClass:"card-body col-md-12 col-9"},[e("p",{staticClass:"card_title"},[t._v("\n            "+t._s(t.data.title)+"\n          ")])])])])])])}),[],!1,null,"0e022428",null);o.default=component.exports},170:function(t,o,e){"use strict";e.r(o);e(230),e(232);var n=e(8),component=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("transition",{attrs:{name:"modal",appear:""}},[e("div",{staticClass:"modal modal-overlay",on:{click:function(o){return o.target!==o.currentTarget?null:t.$emit("close")}}},[e("div",{staticClass:"modal-window"},[e("div",{staticClass:"modal-content"},[t._t("default")],2)])])])}),[],!1,null,"295af86b",null);o.default=component.exports},171:function(t,o,e){"use strict";e.r(o);var n={data:function(){return{modal:!1,links:[{src:"/images/twitter.png",title:"Twitter",to:"https://twitter.com/shinbunbun_"},{src:"/images/facebook.png",title:"Facebook",to:"https://www.facebook.com/yuto.takamune.77"},{src:"/images/favicon.png",title:"Qiita",to:"https://qiita.com/shinbunbun_"},{src:"/images/GitHub-Mark-120px-plus.png",title:"GitHub",to:"https://github.com/shinbunbun"},{src:"/images/lapras.png",title:"Lapras",to:"https://lapras.com/public/HNWZIHB"},{src:"/images/connpass_logo_3.png",title:"connpass",to:"https://connpass.com/user/unix_yuto/"}]}},methods:{openLink:function(t){window.open(t,"_blank")},openModal:function(){this.modal=!0},closeModal:function(){this.modal=!1}}},r=(e(224),e(8)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.modal?e("MyModal",{on:{close:t.closeModal}},[e("span",{staticClass:"material-icons colse-button",on:{click:t.closeModal}},[t._v("\n    close\n  ")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"container modal-container"},[e("div",{staticClass:"row row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center"},t._l(t.links,(function(o){return e("div",{key:o.title},[e("HomeCard",{attrs:{data:o},on:{openModal:t.openModal}})],1)})),0)])]):t._e()}),[],!1,null,"68e799c0",null);o.default=component.exports;installComponents(component,{HomeCard:e(169).default,MyModal:e(170).default})},172:function(t,o,e){e(173),t.exports=e(174)},216:function(t,o,e){"use strict";e(142)},217:function(t,o,e){(o=e(9)(!1)).push([t.i,"@media screen and (min-width:768px){.card{transition-duration:.3s;transition-property:transform}.card:hover{transform:scale(1.1)}}",""]),t.exports=o},218:function(t,o,e){"use strict";e(143)},219:function(t,o,e){(o=e(9)(!1)).push([t.i,"html{font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}:root{--nuxt-green:#00c58e;--background-color:#f0f5f5;--fot-color:#4d4d4d;--card-color:#fafcfc;--card-shadow-color:#babfbf}body{background-color:#f0f5f5;background-color:var(--background-color);color:#4d4d4d!important}.colse-button{cursor:pointer}",""]),t.exports=o},220:function(t,o,e){"use strict";e(144)},221:function(t,o,e){(o=e(9)(!1)).push([t.i,".navbar[data-v-659da3a9]{font-size:130%;background-color:var(--background-color)}.nav-item[data-v-659da3a9]{padding-left:20px!important}img[data-v-659da3a9]{max-width:200px;max-height:65px}",""]),t.exports=o},222:function(t,o,e){"use strict";e(145)},223:function(t,o,e){(o=e(9)(!1)).push([t.i,"",""]),t.exports=o},224:function(t,o,e){"use strict";e(146)},225:function(t,o,e){(o=e(9)(!1)).push([t.i,".colse-button[data-v-68e799c0]{font-size:45px}",""]),t.exports=o},226:function(t,o,e){"use strict";e(147)},227:function(t,o,e){(o=e(9)(!1)).push([t.i,"@media screen and (min-width:768px){.icon[data-v-0e022428]{font-size:120px}img[data-v-0e022428]{height:120px;padding-top:15px;max-width:100%}}@media screen and (max-width:768px){.icon[data-v-0e022428]{font-size:80px;padding-left:5px}img[data-v-0e022428]{height:80px;padding:10px}.card[data-v-0e022428]{height:88px}}.card_title[data-v-0e022428]{font-size:25px}.card[data-v-0e022428]{text-align:center;border-radius:5px;box-shadow:0 2px 5px var(--card-shadow-color);background-color:var(--card-color)}a[data-v-0e022428]{color:var(--font-color);text-decoration:none}.Lapras img[data-v-0e022428]{width:110%;height:110%;max-height:120px;-o-object-fit:cover;object-fit:cover}.homeCard[data-v-0e022428]{padding-bottom:20px}.card-disable-wrapper[data-v-0e022428]{background-color:#000}.card-disable[data-v-0e022428]{opacity:.6;display:block}@media screen and (max-width:768px){.card-disable[data-v-0e022428],.card-disable-wrapper[data-v-0e022428]{display:none}}",""]),t.exports=o},228:function(t,o,e){"use strict";e(148)},229:function(t,o,e){(o=e(9)(!1)).push([t.i,".card-disable[data-v-0e022428]:hover{transform:none}",""]),t.exports=o},230:function(t,o,e){"use strict";e(149)},231:function(t,o,e){(o=e(9)(!1)).push([t.i,".modal.modal-overlay[data-v-295af86b]{display:flex;align-items:center;justify-content:center;position:fixed;z-index:30;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5)}.modal-window[data-v-295af86b]{background:#fff;border-radius:4px;overflow:hidden}.modal-content[data-v-295af86b]{padding:10px 20px}.modal-footer[data-v-295af86b]{background:#ccc;padding:10px;text-align:right}.modal-enter-active[data-v-295af86b],.modal-leave-active[data-v-295af86b]{transition:opacity .3s}.modal-enter-active .modal-window[data-v-295af86b],.modal-leave-active .modal-window[data-v-295af86b]{transition:opacity .3s,transform .3s}.modal-leave-active[data-v-295af86b]{transition:opacity .4s ease .2s}.modal-enter[data-v-295af86b],.modal-leave-to[data-v-295af86b]{opacity:0}.modal-enter .modal-window[data-v-295af86b],.modal-leave-to .modal-window[data-v-295af86b]{opacity:0;transform:translateY(-20px)}.modal-window[data-v-295af86b]{max-width:90%;margin-top:70px;margin-bottom:30px;max-height:calc(100% - 100px);overflow:scroll}@media screen and (min-width:1111px){.modal-window[data-v-295af86b]{min-width:1000px}}@media screen and (min-width:768px) and (max-width:1111px){.modal-window[data-v-295af86b]{width:90%}}",""]),t.exports=o},232:function(t,o,e){"use strict";e(150)},233:function(t,o,e){(o=e(9)(!1)).push([t.i,".modal-content[data-v-295af86b]{background-color:var(--background-color)}",""]),t.exports=o},234:function(t,o,e){"use strict";e(151)},235:function(t,o,e){(o=e(9)(!1)).push([t.i,"body{min-height:100vh;position:relative;padding-bottom:60px;box-sizing:border-box}footer{position:absolute;bottom:0;text-align:center;width:100%}",""]),t.exports=o},256:function(t,o,e){"use strict";e.r(o);var n={data:function(){return{path:""}},methods:{openModal:function(){this.$refs.LinksModal.openModal()}}},r=(e(220),e(222),e(8)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"py-4"}),t._v(" "),e("nav",{staticClass:"navbar fixed-top navbar-expand-lg navbar-light"},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/portfolio-logo.png",alt:""}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[e("div",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"}),t._v(" "),e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("\n              Home\n            ")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("\n              About Me\n            ")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/products"}},[t._v("\n              Products\n            ")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},on:{click:t.openModal}},[t._v("\n              Links\n            ")])]),t._v(" "),e("LinksModal",{ref:"LinksModal"})],1)])],1)])])}),[function(){var t=this.$createElement,o=this._self._c||t;return o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[o("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,"659da3a9",null);o.default=component.exports;installComponents(component,{LinksModal:e(171).default})},257:function(t,o,e){"use strict";e.r(o);e(234);var n=e(8),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"footerFixed"},[o("div",{staticClass:"py-4"}),this._v(" "),o("footer",[o("p",[this._v("©︎2020 しんぶんぶん")])])])}],!1,null,null,null);o.default=component.exports}},[[172,8,1,9]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{258:function(t,n,o){var content=o(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("381ff706",content,!0,{sourceMap:!1})},271:function(t,n,o){"use strict";o(258)},272:function(t,n,o){(n=o(13)(!1)).push([t.i,".colse-button[data-v-63b3a391]{font-size:45px}.description[data-v-63b3a391]{white-space:pre-line;text-align:left}.amazon-btn[data-v-63b3a391]{background-color:#f67c1b;color:#fff}",""]),t.exports=n},298:function(t,n,o){"use strict";o.r(n);var l={data:function(){return{modal:!1,cards:[{src:"/images/LINE-API.jpeg",title:"LINE API実践ガイド",amazon:"https://www.amazon.co.jp/dp/B08L4FPGNF",modal:!0,description:"2020年11月出版。\n        LINE API ExpertをはじめとしたLINE APIの有識者たちが各LINE APIについての解説をハンズオン形式で執筆した本。\n        私はLINEログイン章を担当した。\n        "}],data:{}}},methods:{openLink:function(t){window.open(t,"_blank")},openModal:function(data){this.data=data,this.modal=!0},closeModal:function(){this.modal=!1}}},c=(o(271),o(8)),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{staticClass:"container"},[o("div",{staticClass:"py-4"}),t._v(" "),o("h1",[t._v("著書")]),t._v(" "),o("div",{staticClass:"py-4"}),t._v(" "),o("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4"},t._l(t.cards,(function(n){return o("div",{key:n.title},[o("HomeCard",{attrs:{data:n},on:{openModal:function(o){return t.openModal(n)}}})],1)})),0),t._v(" "),t.modal?o("MyModal",{on:{close:t.closeModal}},[o("span",{staticClass:"material-icons colse-button",on:{click:t.closeModal}},[t._v("\n        close\n      ")]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"container modal-container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 align-items-center",staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:t.data.src,alt:""}})]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"py-2"}),t._v(" "),o("h2",[t._v(t._s(t.data.title))]),t._v(" "),o("div",{staticClass:"py-2"}),t._v(" "),o("div",{staticClass:"btn-wrapper"},[o("button",{staticClass:"btn amazon-btn",attrs:{type:"button"},on:{click:function(n){return t.openLink(t.data.amazon)}}},[o("b",[t._v("Amazonで購入")]),t._v(" "),o("span",{staticStyle:{"font-family":"Material Icons"}},[t._v("\n                  open_in_new\n                ")])])]),t._v(" "),o("p",{staticClass:"description"},[t._v("\n              "+t._s(t.data.description)+"\n            ")])])])])]):t._e()],1)])}),[],!1,null,"63b3a391",null);n.default=component.exports;installComponents(component,{HomeCard:o(168).default,MyModal:o(169).default})}}]);
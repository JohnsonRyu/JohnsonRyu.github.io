webpackJsonp([0],{"4+hh":function(t,n){},AnE8:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},o,!1,function(t){e("RzzX")},null,null).exports,s=e("/ocq"),r={props:{title:String,content:String}},c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"flex-end"},[n("p",{staticClass:"text-bold"},[this._v(this._s(this.title))]),this._v(" "),n("p",{staticClass:"text-bold content-text"},[this._v(this._s(this.content))])])},staticRenderFns:[]};var l=e("VU/8")(r,c,!1,function(t){e("wARH")},"data-v-b4ad7446",null).exports,d={props:{title:String,content:String},data:function(){return{showDialog:!1}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("md-dialog",{attrs:{"md-accent":"","md-active":t.showDialog},on:{"update:mdActive":function(n){t.showDialog=n},"update:md-active":function(n){t.showDialog=n}}},[e("md-dialog-title",[t._v("OnePiece Bitcoin")]),t._v(" "),e("md-tabs",{attrs:{"md-dynamic-height":""}},[e("md-tab",{attrs:{"md-label":"Intro"}},[e("ul",[e("li",[t._v("해당 서비스는 유실 된 비트코인 지갑을 찾는 프로젝트입니다.")]),t._v(" "),e("li",[t._v("유실 지갑이 발생 하는 대표적인 이유로는 오송금과 개인키 분실이 있습니다.")]),t._v(" "),e("li",[t._v("현재 10년이상 움직임이 없는 지갑의 BTC 총합은 약 300만개가 되고, 이는 전체 2,100만개의 발행량 중 약 14%를 차지합니다.")])])]),t._v(" "),e("md-tab",{attrs:{"md-label":"How"}},[e("ul",[e("li",[t._v("해당 웹페이지를 켜놓고 있다면, 특정 구역이 할당 됩니다.")]),t._v(" "),e("li",[t._v("아래의 조건에 부합되는 지갑을 찾습니다.")]),t._v(" "),e("ol",[e("li",[t._v("지갑의 마지막 트랜잭션이 10년 이상 되었다.")]),t._v(" "),e("li",[t._v("채굴로 얻은 입금 트랜잭션을 제외한 트랜잭션이 없다.")]),t._v(" "),e("li",[t._v("잔고가 5 BTC 이상 있다.")])]),t._v(" "),e("li",[t._v("지갑을 찾는다면, 이메일을 입력하는 팝업이 나타나고 개발자와 연락을 합니다.")]),t._v(" "),e("li",[t._v("비트코인 커뮤니티에 해당 지갑의 주인을 1년 동안 찾습니다.")]),t._v(" "),e("ul",[e("li",[t._v('주인은 "onepiece bitcoin"을 자신의 지갑 주소로 서명하여 증명합니다.')])]),t._v(" "),e("li",[t._v("주인이 있다면, 해당 BTC는 주인에게 반환 되고, 주인이 없다면 수수료 10%를 제외한 모든 BTC를 찾은 이에게 지급 합니다.")])])])],1),t._v(" "),e("md-dialog-actions",[e("md-button",{staticClass:"md-primary",on:{click:function(n){t.showDialog=!1}}},[t._v("OK")])],1)],1),t._v(" "),e("md-speed-dial",{staticClass:"md-top-right",attrs:{"md-event":"click","md-direction":"bottom"}},[e("md-speed-dial-target",{on:{click:function(n){t.showDialog=!0}}},[e("md-icon",[t._v("contact_support")])],1)],1)],1)},staticRenderFns:[]};var v={components:{"double-text":l,"desc-dialog":e("VU/8")(d,u,!1,function(t){e("jMY6")},"data-v-536fff04",null).exports},data:function(){return{worker:23,count:214144131}},computed:{WorketCount:function(){return this.worker.toLocaleString()},ProcessingCount:function(){return this.count.toLocaleString()}}},_={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"animated-gif-container"},[n("div",{staticClass:"grey-background flex-center"},[n("desc-dialog"),this._v(" "),n("div",[n("double-text",{attrs:{title:"Worker",content:this.WorketCount}}),this._v(" "),n("double-text",{attrs:{title:"Count",content:this.ProcessingCount}})],1)],1)])},staticRenderFns:[]};var p=e("VU/8")(v,_,!1,function(t){e("dDwL")},"data-v-b04e9468",null).exports;i.default.use(s.a);var f=new s.a({routes:[{path:"/",name:"Main",component:p}]}),m=e("Lgyv"),h=e.n(m);e("4+hh"),e("AnE8");i.default.config.productionTip=!1,i.default.use(h.a),new i.default({el:"#app",router:f,components:{App:a},template:"<App/>"})},RzzX:function(t,n){},dDwL:function(t,n){},jMY6:function(t,n){},wARH:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.3bea13a327508a39e6d4.js.map
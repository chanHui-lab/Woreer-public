(window.webpackJsonp=window.webpackJsonp||[]).push([[19,9],{422:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return h})),o.d(e,"c",(function(){return v}));var c=o(425),r=o(4),n=Object(r.f)("v-card__actions"),l=Object(r.f)("v-card__subtitle"),h=Object(r.f)("v-card__text"),v=Object(r.f)("v-card__title");c.a},424:function(t,e,o){"use strict";o.r(e);var c=o(414),r=o(425),n=o(422),l=o(420),h=o(419),v=(o(68),{name:"WCard",props:{label:{type:String,default:null},label2:{type:String,default:null},label3:{type:String,default:null},height:{type:Number,default:95},color:{type:String,default:null},cornerIcon:{type:String,default:null},disabled:{type:Boolean,default:!1}},data:function(){return{isIconClicked:!1,cornerIconName:this.cornerIcon+"-outline",cornerIconColor:"#918679"}},computed:{},methods:{emitClick:function(){this.$emit("click")},emitIconClick:function(){this.isIconClicked?(this.cornerIconColor="".concat(this.$vuetify.theme.themes.light.brown),this.cornerIconName=this.cornerIcon+"-outline",this.isIconClicked=!1):(this.cornerIconColor="".concat(this.$vuetify.theme.themes.light.primary),this.cornerIconName=this.cornerIcon,this.isIconClicked=!0)}}}),d=o(18),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return!1===t.disabled?e(r.a,{staticClass:"rounded-xl d-flex flex-column justify-start",attrs:{"min-height":t.height,color:t.color,outlined:""},on:{click:function(e){return t.emitClick()}}},[e("div",{staticClass:"px-4 pt-4 mb-auto"},[e(h.a,[e(l.a,{attrs:{cols:10}},[e("p",{staticClass:"mb-0 font-weight-medium text-h6",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label))])]),t.cornerIcon?e(l.a,{staticClass:"text-right",attrs:{cols:2}},[e(c.a,{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.emitIconClick.apply(null,arguments)}}},[e("client-only",[e("eva-icon",{attrs:{name:t.cornerIconName,fill:t.cornerIconColor,width:"32",height:"32"}})],1)],1)],1):t._e()],1),e("p",{staticClass:"mb-0 caption font-weight-regular",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label2))]),e("p",{staticClass:"mb-0 caption font-weight-light",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label3))]),t._t("content")],2),e(n.a,{staticClass:"px-4 pb-4"},[t._t("action")],2)],1):e(r.a,{staticClass:"rounded-xl d-flex flex-column justify-start",attrs:{"min-height":t.height,color:t.color,outlined:""}},[e("div",{staticClass:"px-4 pt-4 mb-auto"},[e(h.a,[e(l.a,{attrs:{cols:10}},[e("p",{staticClass:"mb-0 font-weight-medium text-h6",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label))])]),t.cornerIcon?e(l.a,{staticClass:"text-right",attrs:{cols:2}},[e(c.a,{attrs:{icon:""}},[e("client-only",[e("eva-icon",{attrs:{name:t.cornerIconName,fill:t.cornerIconColor,width:"32",height:"32"}})],1)],1)],1):t._e()],1),e("p",{staticClass:"mb-0 caption font-weight-regular",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label2))]),e("p",{staticClass:"mb-0 caption font-weight-light",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label3))]),t._t("content")],2),e(n.a,{staticClass:"px-4 pb-4"},[t._t("action")],2)],1)}),[],!1,null,"1ebab06a",null);e.default=component.exports},428:function(t,e,o){"use strict";var c=o(423);e.a=c.a},434:function(t,e,o){var content=o(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("197fcea4",content,!0,{sourceMap:!1})},435:function(t,e,o){var c=o(38)(!1);c.push([t.i,'.text-h6{letter-spacing:-.014em!important}.full-width{width:100%}.upper-row{min-height:92px}.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=c},451:function(t,e,o){"use strict";o(16),o(14),o(24),o(17),o(25);var c=o(15),r=o(2),n=(o(5),o(13),o(434),o(81)),l=o(437),h=o(428),v=o(119),d=o(190),f=o(118),m=o(188),x=o(144),y=o(186),w=o(21);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(v.a,y.a,x.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return _(_(_(_({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var o=Object(c.a)(e,2),r=o[0],n=o[1];t.$attrs.hasOwnProperty(r)&&Object(w.a)(r,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],o=this.generateRouteLink(),c=o.tag,data=o.data;data.attrs=_(_({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(c,this.setTextColor(r,data),e)}})},475:function(t,e,o){var content=o(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("73b89fbd",content,!0,{sourceMap:!1})},503:function(t,e,o){"use strict";o(475)},504:function(t,e,o){var c=o(38)(!1);c.push([t.i,".text-h6[data-v-10df56f4]{letter-spacing:-.014em!important}.full-width[data-v-10df56f4]{width:100%}.upper-row[data-v-10df56f4]{min-height:92px}[data-v-10df56f4] .scroll-x{overflow-x:auto!important;overflow-y:hidden}[data-v-10df56f4] .vhl-item{padding-top:4px!important}",""]),t.exports=c},535:function(t,e,o){"use strict";o.r(e);var c=o(451),r=o(420),n=o(419),l=(o(26),o(16),o(14),o(13),o(5),o(24),o(17),o(25),o(2)),h=o(43),v=o(454),d=o(424),f=o(187);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"CategoryList",components:{WCard:d.default,WIcon:f.default,VueHorizontalList:v.a},props:{},data:function(){return{options:{responsive:[{end:500,size:1.75}],list:{padding:8}}}},computed:x({},Object(h.c)({categories:"job/getCategories",scrollSize:"screen/getScrollXClass"})),methods:x(x({},Object(h.b)({changeSelectedCategory:"job/changeSelectedCategory"})),{},{cardColor:function(t){return t%3==1?"#404348":t%3==2?"#918679":"#FEB81E"},getName:function(t){return"IT"===t?"information technology":t.toLowerCase()},viewAllCategories:function(){this.$router.push("/categories")},goToJobsPage:function(t){this.changeSelectedCategory(t),this.$router.push("/jobs")}})},w=(o(503),o(18)),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"category-list"},[e(n.a,{staticClass:"pa-0 ma-0 px-4"},[e(r.a,{staticClass:"pa-0 ma-0"},[e("p",{staticClass:"text-h6 font-weight-bold pt-4 mb-0"},[t._v("Category")])]),e(r.a,{staticClass:"pa-0 ma-0 d-flex"},[e(n.a,{staticClass:"pt-4 mb-1 pr-4 align-end justify-end",on:{click:function(e){return t.viewAllCategories()}}},[e("p",{staticClass:"mb-0"},[t._v("View all")]),e("w-icon",{staticClass:"ml-3",attrs:{height:20,width:20,"icon-name":"arrow-forward-outline","icon-fill":this.$vuetify.theme.themes.light.brown},on:{click:function(t){}}})],1)],1)],1),e(n.a,{staticClass:"pl-4 mx-0 scroll-x",style:t.scrollSize},[e("vue-horizontal-list",{attrs:{items:t.categories,options:t.options},scopedSlots:t._u([{key:"default",fn:function(o){var l=o.item;return[e("w-card",{staticClass:"d-flex flex-column",attrs:{height:150,label:l.name,label2:"View the job related to "+t.getName(l.name)+" job",color:t.cardColor(l.id)},on:{click:function(e){return t.goToJobsPage(l)}},scopedSlots:t._u([{key:"action",fn:function(){return[e(n.a,{staticClass:"mt-4"},[e(r.a,{staticClass:"py-0"},[e(c.a,{attrs:{outlined:"",color:"white"}},[e("span",[t._v(t._s(l.new_job)+" New")])])],1),e(r.a,{staticClass:"py-0 justify-end text-right"},[e("eva-icon",{attrs:{name:"arrow-circle-right",fill:"white",height:"32",width:"32"}})],1)],1)]},proxy:!0}],null,!0)})]}}])})],1)],1)}),[],!1,null,"10df56f4",null);e.default=component.exports}}]);
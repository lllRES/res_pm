(self.webpackChunkname=self.webpackChunkname||[]).push([[920],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var a=r(7228);e.exports=function(e){if(Array.isArray(e))return a(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var a=r(9489),n=r(7067);function l(t,r,o){return n()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,r){var n=[null];n.push.apply(n,t);var l=new(Function.bind.apply(e,n));return r&&a(l,r.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var a=r(3646),n=r(6860),l=r(379),o=r(8206);e.exports=function(e){return a(e)||n(e)||l(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var a=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},4618:function(e,t,r){"use strict";var a=r(7294);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=(0,a.forwardRef)((function(e,t){var r=e.color,o=e.size,c=l(e,["color","size"]);return a.createElement("svg",n({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:o,height:o,fill:r},c),a.createElement("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}))}));o.defaultProps={color:"currentColor",size:"1em"},t.Z=o},6725:function(e,t,r){var a=r(3395);e.exports={MDXRenderer:a}},3395:function(e,t,r){var a=r(9100),n=r(319),l=r(9713),o=r(7316);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=r(7294),i=r(4983).mdx,p=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=o(e,["scope","children"]),c=p(t),u=m.useMemo((function(){if(!r)return null;var e=s({React:m,mdx:i},c),t=Object.keys(e),l=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(l)))}),[r,t]);return m.createElement(u,s({},l))}},5901:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(7294),n=r(9).ZP.div.withConfig({displayName:"styles__Modal",componentId:"sc-1xgw7pg-0"})(["header{box-shadow:inset 0px -1px 0px ",";}footer{display:flex;width:100%;box-shadow:inset 0px 1px 0px ",";& button{width:100%;height:100%;color:",";border-radius:0px;}}"],(function(e){return e.theme.separator_non_opaque}),(function(e){return e.theme.separator_non_opaque}),(function(e){return e.theme.tint_blue}));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=(0,a.forwardRef)((function(e,t){var r=e.color,n=e.size,c=o(e,["color","size"]);return a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:r},c),a.createElement("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"}))}));c.defaultProps={color:"currentColor",size:"1em"};var s=c;var m=r(3420),i=r(1773);function p(e){var t=e.data,r={clientEmail:"",productAmount:1,productDiscount:0};function l(e){if(e.preventDefault(),-1!==r.clientEmail.indexOf("@")){var a={amount:(l=t.frontmatter.extra.price,o=r.productDiscount,c=r.productAmount,(l-l/100*o)*c),email:r.clientEmail,comment:""};location.href=(n=a,"https://oplata.qiwi.com/create?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPyXiqJauFTVWrkPBA4D8ecfvczN2yVDoBS5dUJFK1qpZv6hpDnJKhBv8o7yAFyWpWAx13gS9szyjHosJYiyWj8s7Ub4ea59TdwTBVTq3wr&billId="+Date.now()+"&amount="+n.amount+"&email="+encodeURI(n.email)+"&comment="+encodeURI(n.comment)+"&successUrl="+encodeURI("https://vk.com"))}var n,l,o,c}return a.createElement(n,{className:"modal fade",id:t.id.replace(/[!-\?\[-\^\{-\}]/g,""),tabIndex:"-1","aria-labelledby":t.id.replace(/[!-\?\[-\^\{-\}]/g,""),"aria-hidden":"true"},a.createElement("div",{className:"modal-dialog modal-dialog-centered modal-small"},a.createElement("div",{className:"modal-content"},a.createElement("header",null,a.createElement(m.Z,{className:"element-large"},a.createElement("div",{className:"center-part"},a.createElement("span",null,"Оформить заказ")))),a.createElement("form",{onSubmit:function(e){l(e)}},a.createElement("div",{className:"mt-24 mx-16"},a.createElement(m.Z,{className:"element-medium mb-8"},a.createElement("input",{type:"email",placeholder:"Ваш email",required:!0,onChange:function(e){r.clientEmail=e.target.value},className:"left-part element-medium px-16"})),t.frontmatter.extra.amount>1&&a.createElement(m.Z,{className:"element-medium mb-8"},a.createElement("input",{type:"text",placeholder:"Количество товара (макс. "+t.frontmatter.extra.amount+")",required:!0,onChange:function(e){r.productAmount=e.target.value},className:"left-part element-medium px-16"})),a.createElement(m.Z,{className:"element-medium mb-8"},a.createElement("input",{type:"text",placeholder:"Промокод на скидку (не обязательно)",onChange:function(e){"NEWYEAR"!==e.target.value.toUpperCase()&&"WOTACC"!==e.target.value.toUpperCase()&&"KORBEN"!==e.target.value.toUpperCase()&&"JOVE"!==e.target.value.toUpperCase()&&"STRAIK"!==e.target.value.toUpperCase()&&"INSPIRER"!==e.target.value.toUpperCase()&&"BEOWULF"!==e.target.value.toUpperCase()&&"PROTANKI"!==e.target.value.toUpperCase()&&"AMWAY"!==e.target.value.toUpperCase()&&"VSPISHKA"!==e.target.value.toUpperCase()||(r.productDiscount=10)},className:"left-part element-medium px-16"}))),a.createElement(i.Z,{title:"Способ оплаты",description:a.createElement("span",null,'Нажимая на кнопку "Оплатить" вы соглашаетесь с'," ",a.createElement("a",{href:"/rules",target:"blank"},"правилами магазина")),sectionClassName:"mb-24",listClassName:"theme-shadow-border-inset-y"},a.createElement(m.Z,{className:"element-medium mb-8"},a.createElement("div",{className:"left-part px-16"},a.createElement("i",{className:"primary me-8"},a.createElement(s,{size:18})),a.createElement("span",null,"Банковская карта или Qiwi")))),a.createElement("footer",null,a.createElement(m.Z,{className:"element-large"},a.createElement("button",{type:"button","data-bs-dismiss":"modal","aria-label":"Close",className:"element-button theme-shadow-border-inset-right"},"Отмена"),a.createElement("button",{type:"submit",className:"element-button fw-bold"},"Оплатить")))))))}},8102:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var a=r(3331),n=r(7294),l=r(154),o=r(2492),c=r(6725),s=r(5844),m=r(4618),i=r(3420),p=r(1773),u=r(5901),d=r(7047),f=r(9).ZP.div.withConfig({displayName:"shop-single-page__PageStyle",componentId:"sc-15vqdzj-0"})(["display:grid;.product-photo{display:flex;justify-content:center;}.product-about{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:32px;margin-bottom:64px;@media (max-width:992px){grid-template-columns:repeat(1,1fr);}}.product-price_block{display:flex;align-items:center;margin-bottom:24px;background-color:",";}"],(function(e){return e.theme.background_primary}));function x(e){var t,r=e.data.mdx,x=e.data.mdx.frontmatter,h=e.data.mdx.frontmatter.extra;return n.createElement(n.Fragment,null,n.createElement(o.GatsbySeo,{title:"Купить "+x.title+" | Магазин World of Tanks",description:r.excerpt,canonical:e.location.href,openGraph:{url:e.location.href,title:"Купить "+x.title+" | Магазин World of Tanks",description:r.excerpt}}),n.createElement(s.Z,null,n.createElement(f,{as:"article",className:"container-fluid mt-48",style:{maxWidth:"1200px"}},n.createElement("div",{className:"product-tab-main"},n.createElement("div",{className:"product-about"},n.createElement("div",{className:"left-part"},n.createElement("div",{className:"product-photo"},n.createElement(l.G,{alt:x.title,title:x.title,image:(0,l.e)(x.cover),style:{maxWidth:"600px",width:"100%"}}))),n.createElement("div",{className:"right-part"},n.createElement("h1",{className:"px-16 px-sm-0"},x.title),n.createElement("div",{className:"product-main-info"},n.createElement("div",{className:"product-price_block p-16"},n.createElement("span",{className:"large-h1 me-24"},h.price+" ₽"),n.createElement("button",{"aria-label":"product-buy-button","data-bs-toggle":"modal","data-bs-target":"#"+r.id.replace(/[!-\?\[-\^\{-\}]/g,""),className:"element-large element-button green product-buy-button"},n.createElement("i",null,n.createElement(m.Z,{size:20})),"Купить"),n.createElement(u.Z,{data:r})),n.createElement(p.Z,{title:"Доставка",listClassName:"large-subhead theme-shadow-border-inset-top p-16"},"После оплаты товар будет отправлен на почту, указанную при оформлении заказа"),n.createElement(p.Z,{title:"Оплата",listClassName:"large-subhead theme-shadow-border-inset-top p-16"},"Банковская карта или Qiwi"),n.createElement(p.Z,{title:"Гарантия",listClassName:"large-subhead theme-shadow-border-inset-top p-16"},void 0!==(t=d.nN(x.categories[0]))&&t.warrantyText?n.createElement("span",null,t.warrantyText):n.createElement("span",null,a.Ri.defaultProductWarrantyText))))),n.createElement("div",{className:"product-about"},n.createElement("div",{className:"left-part"},n.createElement("h2",{className:"mb-16 px-16 px-sm-0"},"Описание",n.createElement("span",{className:"theme-text-secondary"}," "+x.title)),n.createElement("div",{className:"theme-text-tertiary px-16 px-sm-0"},function(){if(null!==r.excerpt)return n.createElement(c.MDXRenderer,null,r.body)}())),n.createElement("div",{className:"right-part"},n.createElement("h2",{className:"mb-16 px-16 px-sm-0"},"Характеристики",n.createElement("span",{className:"theme-text-secondary"}," "+x.title)),n.createElement("div",{className:"theme-text-tertiary"},n.createElement(p.Z,null,n.createElement(n.Fragment,null,null!==h.server&&n.createElement(i.Z,{className:"element-medium"},n.createElement("span",{className:"left-part px-16"},"Сервер"),n.createElement("span",{className:"right-part px-16"},h.server)),null!==h.phone&&n.createElement(i.Z,{className:"element-medium"},n.createElement("span",{className:"left-part px-16"},"Привязка аккаунта и почты к телефону"),n.createElement("span",{className:"right-part px-16"},h.phone?"Есть":"Нет")),null!==h.mail&&n.createElement(i.Z,{className:"element-medium"},n.createElement("span",{className:"left-part px-16"},"Привязка аккаунта к почте"),n.createElement("span",{className:"right-part px-16"},h.mail?"Есть":"Нет")),null!==h.vehicles.x&&n.createElement(i.Z,{className:"element-medium"},n.createElement("span",{className:"left-part px-16"},"ТОПы"),h.vehicles.x.map((function(e){return n.createElement("span",{key:e},n.createElement("a",{target:"blank",href:"https://wiki.wargaming.net/ru/index.php?search="+e},e))}))),null!==h.vehicles.premium&&n.createElement(i.Z,{className:"element-medium"},n.createElement("span",{className:"left-part px-16"},"Премиум техника"),n.createElement("span",{className:"right-part px-16"},h.vehicles.premium.map((function(e){return n.createElement("a",{key:e,target:"blank",href:"https://wiki.wargaming.net/ru/index.php?search="+e,className:"theme-text-tint-blue"},e)})))))))))))))}}}]);
//# sourceMappingURL=component---src-projects-res-pm-components-templates-shop-single-page-js-6e12d6206625ee884163.js.map
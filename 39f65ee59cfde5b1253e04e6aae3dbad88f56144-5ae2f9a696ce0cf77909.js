(self.webpackChunkname=self.webpackChunkname||[]).push([[94],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!o(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},2837:function(e,t,n){"use strict";var r=n(8580);t.__esModule=!0,t.default=void 0;var a=r(n(5666)),o=r(n(3793)),i=r(n(4176)),c=r(n(7294)),l=r(n(5697)),s=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,(0,i.default)((0,a.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);s.propTypes={children:l.default.func.isRequired};var u=s;t.default=u},7441:function(e,t,n){"use strict";var r=n(8580)(n(2837));t.L=r.default},5221:function(e,t,n){"use strict";n.d(t,{Z:function(){return ve}});var r,a,o,i,c=n(6141),l=n(7294),s=n(5697),u=n.n(s),f=n(4839),p=n.n(f),m=n(2993),d=n.n(m),h=n(6494),y=n.n(h),g="bodyAttributes",v="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",T="href",C="http-equiv",S="innerHTML",A="itemprop",O="name",N="property",k="rel",L="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",I="defer",M="encodeSpecialCharacters",R="onChangeClientState",q="titleTemplate",F=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),B=[w.NOSCRIPT,w.SCRIPT,w.STYLE],D="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},$=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,w.TITLE),n=Q(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,_);return t||r||void 0},V=function(e){return Q(e,R)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===k&&"canonical"===e[n].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==S&&c!==E&&c!==A||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;se(w.BODY,r),se(w.HTML,a),le(f,p);var m={baseTag:ue(w.BASE,n),linkTags:ue(w.LINK,o),metaTags:ue(w.META,i),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,s),styleTags:ue(w.STYLE,u)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,d,h)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),se(w.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(D):n.getAttribute(D)!==i.join(",")&&n.setAttribute(D,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(D,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[D]=!0,a=pe(n,r),[l.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=fe(n),o=ce(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case v:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===S||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),l.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:me(w.BASE,t,r),bodyAttributes:me(g,n,r),htmlAttributes:me(v,a,r),link:me(w.LINK,o,r),meta:me(w.META,i,r),noscript:me(w.NOSCRIPT,c,r),script:me(w.SCRIPT,l,r),style:me(w.STYLE,s,r),title:me(w.TITLE,{title:f,titleAttributes:p},r)}},he=p()((function(e){return{baseTag:G([T,j],e),bodyAttributes:X(g,e),defer:Q(e,I),encode:Q(e,M),htmlAttributes:X(v,e),linkTags:J(w.LINK,[k,T],e),metaTags:J(w.META,[O,x,C,N,A],e),noscriptTags:J(w.NOSCRIPT,[S],e),onChangeClientState:V(e),scriptTags:J(w.SCRIPT,[L,S],e),styleTags:J(w.STYLE,[E],e),title:W(e),titleAttributes:X(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=ne((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ye=(a=he,i=o=function(e){function t(){return K(this,t),$(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Z({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return Z({},a,((t={})[r.type]=i,t.titleAttributes=Z({},o),t));case w.BODY:return Z({},a,{bodyAttributes:Z({},o)});case w.HTML:return Z({},a,{htmlAttributes:Z({},o)})}return Z({},a,((n={})[r.type]=Z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Z({},t);return Object.keys(e).forEach((function(t){var r;n=Z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=Z({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(l.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind;var ge=n.p+"static/default-7819d6314590513416854b479856fb1e.jpg";var ve=function(e){var t=e.pageData,n=(t.title,t.seoTitle),r=t.description,a=t.canonicalUrl,o=(t.body,t.excerpt,t.frontmatter,t.headings,t.id,t.slug,t.tableOfContents,t.words,t.sentences,t.paragraphs,e.ogType||"website");return l.createElement(l.Fragment,null,l.createElement(ye,null,l.createElement("html",{lang:"en"}),l.createElement("title",null,n),l.createElement("meta",{name:"description",content:r}),l.createElement("meta",{name:"robots",content:"index,follow"}),l.createElement("meta",{name:"googlebot",content:"index,follow"}),l.createElement("link",{rel:"canonical",href:a}),l.createElement("meta",{property:"og:title",content:n}),l.createElement("meta",{property:"og:type",content:o}),l.createElement("meta",{property:"og:image",content:ge}),l.createElement("meta",{property:"og:url",content:a}),l.createElement("meta",{property:"og:description",content:r}),l.createElement("meta",{property:"og:image:alt",content:c.$K.siteSeoPrefix}),l.createElement("meta",{property:"og:image:width",content:"1200"}),l.createElement("meta",{property:"og:image:height",content:"630"}),l.createElement("meta",{name:"twitter:title",content:n}),l.createElement("meta",{name:"twitter:description",content:r}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:image",content:ge})))}},6151:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(1660),o=n(7441);function i(e){return r.createElement(o.L,null,(function(t){var n=t.theme,o=t.toggleTheme;return r.createElement(a.Z,{className:e.className,icon:"invert_colors",onClick:function(e){return o("light"===n?"dark":"light")}})}))}function c(e){return r.createElement("div",{className:"flex justify-center h-12 relative select-none"},r.createElement("div",{className:"flex justify-center text-hight-contrast w-full fixed z-20 bg-hight-contrast-reverse",style:{boxShadow:"inset 0px -1px 0px var(--separator-non-opaque)",backdropFilter:"saturate(180%) blur(16px)",backgroundColor:"rgb(var(--background-primary-rgb-inner)/90%)"}},r.createElement("nav",{className:"container flex items-center max-w-screen-lg h-12 "+e.className},r.createElement("div",{className:"flex justify-center md:justify-between h-12 items-center w-full large-subhead"},r.createElement("a",{href:"/",className:"flex h-full items-center whitespace-nowrap transition text-hight-contrast opacity-80 hover:opacity-100 hover:text-hight-contrast"},r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"fill-current text-hight-contrast"},r.createElement("path",{d:"M13.3603 2L20.7919 14.8719L16.939 22L13.6065 16.2281L15.4747 12.7715L11.7748 13.0555L9.50735 9.12808L13.3603 2ZM11.9624 19.2519L7.98122 11.953L4 19.2519H11.9624Z"})),r.createElement("span",{className:"ml-3"},"Artem Attvud")),r.createElement("a",{href:"/resume",className:"hidden md:flex h-full flex items-center transition text-hight-contrast opacity-80 hover:opacity-100 hover:text-hight-contrast"},"Resume"),r.createElement("a",{href:"https://www.linkedin.com/in/attvud",target:"blank",className:"hidden md:flex h-full flex items-center transition text-hight-contrast opacity-80 hover:opacity-100 hover:text-hight-contrast"},"Recommendations"),r.createElement("a",{href:"/portfolio",className:"hidden md:flex h-full flex items-center transition text-hight-contrast opacity-80 hover:opacity-100 hover:text-hight-contrast"},"Portfolio"),r.createElement("a",{href:"/contacts",className:"hidden md:flex h-full items-center transition text-hight-contrast opacity-80 hover:opacity-100 hover:text-hight-contrast"},"Contacts"),r.createElement("div",{className:"hidden md:flex transition opacity-80 hover:opacity-100"},r.createElement(i,{className:"fill-current text-hight-contrast"}))))))}},2366:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7294),a=n(6141),o=n(9),i=o.ZP.div.withConfig({displayName:"styles__Row",componentId:"glgff0-0"})(["position:relative;display:flex;align-items:center;justify-content:center;user-select:none;overflow:hidden;width:100%;color:var(--text-primary);& i{display:flex;align-items:center;justify-content:center;&.primary{color:var(--tint-foreground-blue);}& div{position:absolute;cursor:pointer;}}& .left-part{position:absolute;left:0;display:flex;align-items:center;height:100%;}& a.left-part{width:100%;text-decoration:none;color:var(--text-primary);}& input.left-part{width:100%;color:var(--text-primary);background-color:var(--fill-primary);background-clip:padding-box;border:none;border-radius:",";transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;&::placeholder{color:var(--text-tertiary);}&:invalid{box-shadow:none;}}& .center-part{position:absolute;display:flex;align-items:center;height:100%;color:var(--text-primary);font-weight:bold;text-align:center;text-decoration:none;&:hover{color:var(--text-primary);text-decoration:none;}}& .right-part{position:absolute;right:0;display:flex;align-items:center;height:100%;}"],a.XX.borderRadius.primary);function c(e){return r.createElement(i,{id:e.id,className:e.className,as:e.as},e.children)}function l(){return r.createElement(c,{className:"element-large"},r.createElement("a",{href:"/",className:"center-part"},"Меню"))}function s(){return r.createElement(c,{className:"element-large"},r.createElement("span",{className:"center-part"},"Menu"))}o.ZP.div.withConfig({displayName:"styles__ElementSection",componentId:"sc-9ff0pf-0"})(["margin-top:24px;& .section-title{color:var(--gray-01);text-transform:uppercase;}& .section-caption{color:var(--gray-01);}"]);var u=o.ZP.div.withConfig({displayName:"styles__ElementList",componentId:"sc-9ff0pf-1"})(['background-color:var(--background-primary);& a{color:var(--text-primary);&:hover{color:var(--text-primary);}}div:not(:last-child):after{position:absolute;content:"";display:flex;width:100%;height:1px;background-color:var(--separator-non-opaque);bottom:0;margin-left:32px;cursor:pointer;}']);function f(e){var t=e.children;e.title,e.description;return r.createElement("div",{className:"mt-6"},r.createElement(u,{className:e.listClassName,style:{boxShadow:"inset 0 1px 0 var(--separator-non-opaque),inset 0 -1px 0 var(--separator-non-opaque)"}},t))}function p(e){return r.createElement(r.Fragment,null,r.createElement(f,null,r.createElement(c,{className:"element-medium"},r.createElement("a",{href:"/",className:"left-part px-16"},"..."))))}function m(){return r.createElement(f,null,r.createElement(c,{className:"element-medium"},r.createElement("a",{href:"/",className:"left-part px-4"},"My way")),r.createElement(c,{className:"element-medium"},r.createElement("a",{href:"/resume",className:"left-part px-4"},"Resume")),r.createElement(c,{className:"element-medium"},r.createElement("a",{href:"https://www.linkedin.com/in/attvud",target:"blank",className:"left-part px-4"},"Recommendations")),r.createElement(c,{className:"element-medium"},r.createElement("a",{href:"/portfolio",className:"left-part px-4"},"Portfolio")))}var d=n(1660);function h(){var e,t=(0,r.useState)("default"),n=t[0],a=t[1],o=(0,r.useState)("default"),i=o[0],c=o[1],u=(0,r.useState)("default"),f=(u[0],u[1]);return(0,r.useEffect)((function(){e=document.getElementById("main-sidebar-content")})),r.createElement("aside",{className:"flex md:hidden fixed flex-col z-30",style:{maxWidth:"360px"}},r.createElement("div",{className:"fixed bg-background-secondary w-full h-screen invisible",style:{boxShadow:"1px 0px 0px var(--separator-non-opaque)",maxWidth:"360px"},id:"main-sidebar-content"},r.createElement("header",{className:"bg-background-primary",style:{boxShadow:"inset 0px -1px 0px var(--separator-non-opaque)"}},function(e){switch(e){case"menu":return r.createElement(s,null);default:return r.createElement(l,null)}}(n)),function(e){switch(e){case"menu":return r.createElement(m,null);default:return r.createElement(p,null)}}(i)),r.createElement("footer",{className:"grid grid-flow-col grid-cols-3 h-14 w-full fixed bottom-0 bg-background-primary",style:{boxShadow:"inset 0px 1px 0px var(--separator-non-opaque)"}},r.createElement(r.Fragment,null,r.createElement("a",{className:"flex flex-col justify-center items-center",href:"/"},r.createElement(d.Z,{icon:"home",className:"fill-current text-hight-contrast"}),r.createElement("span",{className:"large-caption text-hight-contrast"},"Home")),r.createElement("a",{href:"/contacts",className:"flex flex-col justify-center items-center"},r.createElement(d.Z,{icon:"contact_support",className:"fill-current text-hight-contrast"}),r.createElement("span",{className:"large-caption text-hight-contrast"},"Contacts")),r.createElement("button",{className:"flex flex-col justify-center items-center focus:outline-none",onClick:function(t){!function(t){i!==t&&(a(t),c(t),f(t)),(i===t||e.classList.contains("invisible")||e.classList.contains("visible"))&&(e.classList.toggle("invisible"),e.classList.toggle("visible"))}("menu")}},r.createElement(d.Z,{icon:"more_horiz",className:"fill-current text-hight-contrast"}),r.createElement("span",{className:"large-caption text-hight-contrast"},"Menu")))))}},9124:function(e,t,n){"use strict";var r=n(6141);t.Z=function(e){var t,n=null!==(t=e.data)&&void 0!==t&&t.mdx?e.data.mdx:null,a=null!=e&&e.location?e.location:null,o=null==n?void 0:n.body,i=null==n?void 0:n.excerpt,c=null==n?void 0:n.frontmatter,l=null==n?void 0:n.headings,s=null==n?void 0:n.id,u=null==n?void 0:n.slug,f=null==n?void 0:n.tableOfContents,p=null==n?void 0:n.words,m=null==n?void 0:n.sentences,d=null==n?void 0:n.paragraphs,h=null==e?void 0:e.path,y=void 0===(null==n?void 0:n.frontmatter)?"static":"dynamic",g=function(){var e=a.pathname.replace(/\//gi,"");""===e&&(e="home");return e}(),v=E().pageTitle,b=E().pageSeoTitle,w=function(){var e;for(var t in r.L1)g===t&&"static"===y&&(e=r.L1[g].description);"dynamic"===y&&(e=n.frontmatter.description);void 0===e&&(e=r.L1.notFound.description=r.L1.notFound.description+" - "+r.$K.siteSeoPrefix);i&&(e=i);return e}(),x=function(){var e="";switch(h){case"/":e=r.$K.siteUrl+"/";break;default:e=""+r.$K.siteUrl+h}return e}();function E(){var e,t;for(var a in r.L1)g===a&&"static"===y&&(e=r.L1[g].title,t=r.L1[g].title+" - "+r.$K.siteSeoPrefix,"home"===g&&(t=""+r.$K.siteSeoPrefix));return"dynamic"===y&&(e=n.frontmatter.title,t=n.frontmatter.title+" - "+r.$K.siteSeoPrefix),void 0===e&&(e=r.L1.notFound.title,t=r.L1.notFound.title+" - "+r.$K.siteSeoPrefix),{pageTitle:e,pageSeoTitle:t}}return{body:o,excerpt:i,frontmatter:c,headings:l,id:s,slug:u,tableOfContents:f,words:p,sentences:m,paragraphs:d,title:v,seoTitle:b,description:w,canonicalUrl:x,path:h}}},4176:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=39f65ee59cfde5b1253e04e6aae3dbad88f56144-5ae2f9a696ce0cf77909.js.map
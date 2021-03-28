(self.webpackChunkname=self.webpackChunkname||[]).push([[335],{6867:function(e,t,r){"use strict";var n=r(7225),o=n.Nothing,i=n.isNothing;"undefined"!=typeof window&&window,"undefined"!=typeof document&&document},7225:function(e,t,r){"use strict";r.r(t),r.d(t,{Nothing:function(){return o},toBool:function(){return i},isNothing:function(){return a},isSomething:function(){return c},serialize:function(){return l},deserialize:function(){return s}});var n,o=((n=function(){return o}).toString=n.toLocaleString=n[Symbol.toPrimitive]=function(){return""},n.valueOf=function(){return!1},new Proxy(Object.freeze(n),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:o}})),i=function(e){return!(!e||!e.valueOf())},a=function(e){return e===o},c=function(e){return!(e===o||null==e)},l=function(e){return JSON.stringify(e,(function(e,t){return t===o?null:t}))},s=function(e){return JSON.parse(e,(function(e,t){return null===t?o:t}))}},2492:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1008);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(6855);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r(5453);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}))},4288:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.NewsArticleJsonLd=t.BlogPostJsonLd=t.ArticleJsonLd=void 0;var o=n(r(7154)),i=n(r(6479)),a=n(r(9713)),c=n(r(7294)),l=r(7829);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,i=void 0===o?[]:o,a=e.datePublished,s=e.dateCreated,d=e.dateModified,f=void 0===d?a:d,p=e.authorType,m=void 0===p?"Person":p,h=e.authorName,y=e.description,b=e.publisherName,g=e.publisherLogo,v=e.body,O=e.overrides,j=e.keywords,w=e.speakable,x=e.defer,P=void 0!==x&&x,E=u({"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":t},headline:null!=r?r:n,image:i,datePublished:a,dateModified:f,dateCreated:s,author:{"@type":m,name:h},publisher:{"@type":"Organization",name:b,logo:{"@type":"ImageObject",url:g}},description:y,articleBody:v,speakable:w?w.map((function(e){return u({"@type":"SpeakableSpecification"},e)})):void 0,keywords:Array.isArray(j)?j.join(", "):j},O);return c.default.createElement(l.JsonLd,{defer:P,json:E})};t.ArticleJsonLd=d;t.BlogPostJsonLd=function(e){var t=e.overrides,r=e.defer,n=void 0!==r&&r,a=e.publisherLogo,l=void 0===a?"":a,s=e.publisherName,f=void 0===s?"":s,p=(0,i.default)(e,["overrides","defer","publisherLogo","publisherName"]);return c.default.createElement(d,(0,o.default)({defer:n,publisherName:f,publisherLogo:l},p,{overrides:u(u({},t),{},{"@type":"BlogPosting"})}))};t.NewsArticleJsonLd=function(e){var t=e.overrides,r=e.section,n=e.defer,a=void 0!==n&&n,l=(0,i.default)(e,["overrides","section","defer"]);return c.default.createElement(d,(0,o.default)({defer:a},l,{overrides:u(u({articleSection:r},t),{},{"@type":"NewsArticle"})}))}},6239:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BlogJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(7829);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BlogJsonLd=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,c=void 0===o?[]:o,s=e.datePublished,u=e.dateModified,d=void 0===u?null:u,f=e.authorName,p=e.authorType,m=void 0===p?"Person":p,h=e.keywords,y=e.description,b=e.publisherName,g=e.publisherLogo,v=e.posts,O=void 0===v?[]:v,j=e.issn,w=e.overrides,x=void 0===w?{}:w,P=e.defer,E=void 0!==P&&P,_=l({"@context":"https://schema.org","@type":"Blog",mainEntityOfPage:{"@type":"Blog","@id":t},headline:null!=r?r:n,keywords:h,issn:j,image:c,datePublished:s,dateModified:null!=d?d:s,description:y,author:f?{"@type":m,name:f}:void 0,publisher:b?{"@type":"Organization",name:b,logo:g?{"@type":"ImageObject",url:g}:void 0}:void 0,blogPost:O.map((function(e){return l({"@type":"BlogPosting"},e)}))},x);return i.default.createElement(a.JsonLd,{defer:E,json:_})}},7527:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BookJsonLd=void 0;var o=n(r(6479)),i=n(r(9713)),a=n(r(7294)),c=r(7829);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BookJsonLd=function(e){var t=e.name,r=e.author,n=e.url,i=e.workExample,l=void 0===i?[]:i,u=e.id,d=e.sameAs,f=e.overrides,p=void 0===f?{}:f,m=e.defer,h=void 0!==m&&m,y=s({"@context":"https://schema.org","@type":"Book",name:t,url:n,"@id":u,sameAs:d,author:s({"@type":"Person"},r),workExample:l.map((function(e){var t,r=e.bookFormat,n=e.potentialAction,i=e.author,a=(0,o.default)(e,["bookFormat","potentialAction","author"]);return s(s({"@type":"Book",bookFormat:(t=r,t?"https://schema.org/".concat(t):void 0)},a),{},{person:s({"@type":"Person"},i),potentialAction:s({"@type":"ReadAction"},n)})}))},p);return a.default.createElement(c.JsonLd,{defer:h,json:y})}},9839:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(7829);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.BreadcrumbJsonLd=function(e){var t=e.itemListElements,r=void 0===t?[]:t,n=e.overrides,l=void 0===n?{}:n,s=e.defer,u=void 0!==s&&s,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:r.map((function(e){return{"@type":"ListItem",position:e.position,item:{"@id":e.item,name:e.name,"@type":"Thing"}}}))},l);return i.default.createElement(a.JsonLd,{defer:u,json:d})}},4210:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.CorporateContactJsonLd=void 0;var o=n(r(7294)),i=r(2055),a=function(e){return Array.isArray(e)?"[".concat(e.map((function(e){return'"'.concat(e,'"')})).toString(),"]"):'"'.concat(e,'"')};t.CorporateContactJsonLd=function(e){var t=e.url,r=e.logo,n=e.contactPoint,c=e.defer,l=void 0!==c&&c,s='{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "'.concat(t,'",\n    ').concat(r?'"logo": "'.concat(r,'",'):"",'\n    "contactPoint": [').concat(function(e){return e.map((function(e){return'{\n    "@type": "ContactPoint",\n    "telephone": "'.concat(e.telephone,'",\n    "contactType": "').concat(e.contactType,'"').concat(e.areaServed?',\n    "areaServed": '.concat(a(e.areaServed)):"").concat(e.availableLanguage?',\n    "availableLanguage": '.concat(a(e.availableLanguage)):"").concat(e.contactOption?',\n    "contactOption": "'.concat(e.contactOption.toString(),'"'):"","\n    }")}))}(n).toString(),"]\n  }");return o.default.createElement(i.Helmet,{defer:l},o.default.createElement("script",{type:"application/ld+json"},s))}},6279:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.CourseJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(7829);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.CourseJsonLd=function(e){var t=e.name,r=e.courseName,n=e.description,l=e.providerName,s=e.providerUrl,u=e.overrides,d=void 0===u?{}:u,f=e.defer,p=void 0!==f&&f,m=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Course",name:null!=t?t:r,description:n,provider:l?{"@type":"Organization",name:l,sameAs:s}:void 0},d);return i.default.createElement(a.JsonLd,{defer:p,json:m})}},2745:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.FAQJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(7829);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.FAQJsonLd=function(e){var t,r=e.questions,n=e.overrides,l=void 0===n?{}:n,s=e.defer,u=void 0!==s&&s,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"FAQPage",mainEntity:(t=r,t.map((function(e){var t=e.question;return{"@type":"Question",acceptedAnswer:{"@type":"Answer",text:e.answer},name:t}})))},l);return i.default.createElement(a.JsonLd,{defer:u,json:d})}},6855:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4288);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(6239);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r(7527);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}));var a=r(9839);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var c=r(4210);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})}));var l=r(6279);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})}));var s=r(2745);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}));var u=r(7829);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}));var d=r(1290);Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})}));var f=r(330);Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})}));var p=r(8061);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})}));var m=r(3168);Object.keys(m).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return m[e]}})}));var h=r(627);Object.keys(h).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return h[e]}})}))},7829:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.JsonLd=void 0;var o=n(r(7294)),i=r(2055);t.JsonLd=function(e){var t=e.defer,r=e.json;return o.default.createElement(i.Helmet,{defer:t},o.default.createElement("script",{type:"application/ld+json"},JSON.stringify(r,null,2)))}},1290:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.LocalBusinessJsonLd=void 0;var o=n(r(9713)),i=n(r(6479)),a=n(r(7294)),c=r(7829);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={Mon:"Monday",Tues:"Tuesday",Wed:"Wednesday",Thurs:"Thursday",Fri:"Friday",Sat:"Saturday",Sun:"Sunday"},d=function(e){var t;return"http://schema.org/".concat(null!==(t=u[e])&&void 0!==t?t:e)},f=function(e){return e?Array.isArray(e)?e.map(d):d(e):void 0},p=function(e){if(e)return Array.isArray(e)?e.map((function(e){var t=e.dayOfWeek,r=(0,i.default)(e,["dayOfWeek"]);return s({"@type":"OpeningHoursSpecification",dayOfWeek:f(t)},r)})):s(s({"@type":"OpeningHoursSpecification"},e),{},{dayOfWeek:f(e.dayOfWeek)})};t.LocalBusinessJsonLd=function(e){var t=e.type,r=e.id,n=e.name,o=e.description,i=e.url,l=e.telephone,u=e.address,d=e.geo,f=e.images,m=e.openingHours,h=e.rating,y=e.priceRange,b=e.overrides,g=void 0===b?{}:b,v=e.defer,O=void 0!==v&&v,j=s({"@context":"https://schema.org","@type":t,"@id":r,name:n,description:o,url:i,telephone:l,priceRange:y,image:f,geo:s({"@type":"GeoCoordinates"},d),address:s({"@type":"PostalAddress"},u),aggregateRating:h?s({"@type":"AggregateRating"},h):void 0,openingHoursSpecification:p(m)},g);return a.default.createElement(c.JsonLd,{defer:O,json:j})}},330:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.LogoJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(7829);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.LogoJsonLd=function(e){var t=e.url,r=e.logo,n=e.overrides,l=void 0===n?{}:n,s=e.defer,u=void 0!==s&&s,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Organization",url:t,logo:r},l);return i.default.createElement(a.JsonLd,{defer:u,json:d})}},8061:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.ProductJsonLd=void 0;var o=n(r(6479)),i=n(r(9713)),a=n(r(7294)),c=r(7829);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={Discontinued:"http://schema.org/Discontinued",InStock:"http://schema.org/InStock",InStoreOnly:"http://schema.org/InStoreOnly",LimitedAvailability:"http://schema.org/LimitedAvailability",OnlineOnly:"http://schema.org/OnlineOnly",OutOfStock:"http://schema.org/OutOfStock",PreOrder:"http://schema.org/PreOrder",PreSale:"http://schema.org/PreSale",SoldOut:"http://schema.org/SoldOut"},d={DamagedCondition:"http://schema.org/DamagedCondition",NewCondition:"http://schema.org/NewCondition",RefurbishedCondition:"http://schema.org/RefurbishedCondition",UsedCondition:"http://schema.org/UsedCondition"};t.ProductJsonLd=function(e){var t,r,n,i=e.name,l=e.productName,f=e.images,p=void 0===f?[]:f,m=e.description,h=e.sku,y=e.gtin12,b=e.gtin,g=e.gtin8,v=e.gtin13,O=e.gtin14,j=e.mpn,w=e.brand,x=e.reviews,P=void 0===x?[]:x,E=e.aggregateRating,_=e.offers,k=e.offersType,S=void 0===k?"Offer":k,L=e.overrides,N=void 0===L?{}:L,M=e.defer,z=void 0!==M&&M,C=s({"@context":"https://schema.org","@type":"Product",name:null!=i?i:l,image:p,sku:h,gtin:b,gtin8:g,gtin12:y,gtin13:v,gtin14:O,mpn:j,brand:w?{"@type":"Brand",name:w}:void 0,description:m,review:P.map((function(e){var t=e.reviewRating;return s(s({"@type":"Review"},(0,o.default)(e,["reviewRating"])),{},{reviewRating:s({"@type":"Rating"},t)})})),aggregateRating:E?s({"@type":"AggregateRating"},E):void 0,offers:_?s(s({"@type":S},_),{},{availability:(n=_.availability,n?u[n]:void 0),itemCondition:(r=_.itemCondition,r?d[r]:void 0),seller:_.seller?{"@type":null!==(t=_.seller.type)&&void 0!==t?t:"Organization",name:_.seller.name}:void 0}):void 0},N);return a.default.createElement(c.JsonLd,{defer:z,json:C})}},3168:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.SocialProfileJsonLd=void 0;var o=n(r(7294)),i=r(2055);t.SocialProfileJsonLd=function(e){var t=e.type,r=e.name,n=e.url,a=e.sameAs,c=void 0===a?[]:a,l=e.defer,s=void 0!==l&&l,u='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "name": "').concat(r,'",\n    "url": "').concat(n,'",\n    "sameAs": [\n      ').concat(c.map((function(e){return'"'.concat(e,'"')})).toString(),"\n     ]\n  }");return o.default.createElement(i.Helmet,{defer:s},o.default.createElement("script",{type:"application/ld+json"},u))}},627:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.SpeakableJsonLd=void 0;var o=n(r(9713)),i=n(r(7294)),a=r(7829);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.SpeakableJsonLd=function(e){var t=e.xpath,r=e.cssSelector,n=e.overrides,l=void 0===n?{}:n,s=e.defer,u=void 0!==s&&s;if(t&&r)throw new Error("Speakable should use either xpath or the cssSelector, not both.");var d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"SpeakableSpecification",cssSelector:r,xpath:t},l);return i.default.createElement(a.JsonLd,{defer:u,json:d})}},8464:function(e,t,r){"use strict";var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.GatsbySeo=void 0;var o=n(r(7294)),i=r(9777);t.GatsbySeo=function(e){var t=e.metaTags,r=e.linkTags,n=e.canonical,a=e.description,c=e.facebook,l=e.htmlAttributes,s=e.language,u=e.languageAlternates,d=e.mobileAlternate,f=e.nofollow,p=e.noindex,m=e.openGraph,h=e.title,y=e.titleTemplate,b=e.twitter;return o.default.createElement(i.BaseSeo,{metaTags:t,linkTags:r,canonical:n,description:a,facebook:c,htmlAttributes:l,language:s,languageAlternates:u,mobileAlternate:d,nofollow:f,noindex:p,openGraph:m,title:h,titleTemplate:y,twitter:b})}},1008:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9777);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(8464);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}))},5453:function(){},1779:function(e,t,r){"use strict";r.d(t,{Z:function(){return I}});var n=r(6141),o=r(7294),i=r(9),a=i.ZP.div.withConfig({displayName:"styles__Layout",componentId:"te85d6-0"})(["display:flex;justify-content:center;flex-direction:column;width:100%;.main-content{position:relative;width:100%;min-height:100vh;@media print{margin-top:0 !important;}}"]);r(2251),r(7458);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=(0,o.forwardRef)((function(e,t){var r=e.color,n=e.size,i=l(e,["color","size"]);return o.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:r},i),o.createElement("path",{fillRule:"evenodd",d:"M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}),o.createElement("path",{fillRule:"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"}))}));s.defaultProps={color:"currentColor",size:"1em"};var u=s;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=(0,o.forwardRef)((function(e,t){var r=e.color,n=e.size,i=f(e,["color","size"]);return o.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:r},i),o.createElement("path",{d:"M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"}))}));p.defaultProps={color:"currentColor",size:"1em"};var m=p;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=(0,o.forwardRef)((function(e,t){var r=e.color,n=e.size,i=y(e,["color","size"]);return o.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:r},i),o.createElement("path",{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}))}));b.defaultProps={color:"currentColor",size:"1em"};var g=b,v=i.ZP.div.withConfig({displayName:"styles__Row",componentId:"glgff0-0"})(["position:relative;display:flex;align-items:center;justify-content:center;user-select:none;overflow:hidden;width:100%;color:",";& i{display:flex;align-items:center;justify-content:center;&.primary{color:",";}& div{position:absolute;cursor:pointer;}}& .left-part{position:absolute;left:0;display:flex;align-items:center;height:100%;}& a.left-part{width:100%;text-decoration:none;color:",";}& input.left-part{width:100%;color:",";background-color:",";background-clip:padding-box;border:none;border-radius:",";transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;&::placeholder{color:",";}&:invalid{box-shadow:none;}}& .center-part{position:absolute;display:flex;align-items:center;height:100%;color:",";font-weight:bold;text-align:center;text-decoration:none;&:hover{color:",";text-decoration:none;}}& .right-part{position:absolute;right:0;display:flex;align-items:center;height:100%;}"],(function(e){return e.theme.text_primary}),(function(e){return e.theme.tint_blue}),(function(e){return e.theme.text_primary}),(function(e){return e.theme.text_primary}),(function(e){return e.theme.fill_primary}),n.XX.root.primaryBorderRadius,(function(e){return e.theme.text_tertiary}),(function(e){return e.theme.text_primary}),(function(e){return e.theme.text_primary}));function O(e){return o.createElement(o.Fragment,null,o.createElement(v,{className:e.className},e.children))}function j(){return o.createElement(O,{className:"element-large"},o.createElement("a",{href:"/",className:"center-part"},"Меню"))}function w(){return o.createElement(O,{className:"element-large"},o.createElement("span",{className:"center-part"},"Menu"))}var x=i.ZP.div.withConfig({displayName:"styles__ElementSection",componentId:"sc-9ff0pf-0"})(["margin-top:24px;& .section-title{color:",";text-transform:uppercase;}& .section-caption{color:",";}"],(function(e){return e.theme.gray_01}),(function(e){return e.theme.gray_01})),P=i.ZP.div.withConfig({displayName:"styles__ElementList",componentId:"sc-9ff0pf-1"})(["background-color:",";& a{color:",";&:hover{color:",';}}div:not(:last-child):after{position:absolute;content:"";display:flex;width:100%;height:1px;background-color:',";bottom:0;margin-left:32px;cursor:pointer;}"],(function(e){return e.theme.background_primary}),(function(e){return e.theme.text_primary}),(function(e){return e.theme.text_primary}),(function(e){return e.theme.separator_non_opaque}));function E(e){var t=e.children,r=e.title,n=e.description;return o.createElement(o.Fragment,null,o.createElement(x,{className:e.sectionClassName},void 0!==e.title&&o.createElement(O,{className:"element-small section-title"},o.createElement("span",{className:"left-part px-16"},r)),o.createElement(P,{className:e.listClassName},t),void 0!==e.description&&o.createElement(O,{className:"element-small section-caption justify-content-start"},o.createElement("div",{className:"left-part position-relative py-8 px-16"},n))))}function _(e){return o.createElement(o.Fragment,null,o.createElement(E,{listClassName:"theme-shadow-border-inset-y"},o.createElement(O,{className:"element-medium"},o.createElement("a",{href:"/",className:"left-part px-16"},"..."))))}function k(){return o.createElement(o.Fragment,null,o.createElement(E,{listClassName:"theme-shadow-border-inset-y"},o.createElement(O,{className:"element-medium"},o.createElement("a",{href:"/",className:"left-part px-16"},"My way")),o.createElement(O,{className:"element-medium"},o.createElement("a",{href:"/resume",className:"left-part px-16"},"Resume")),o.createElement(O,{className:"element-medium"},o.createElement("a",{href:"https://www.linkedin.com/in/attvud",target:"blank",className:"left-part px-16"},"Recommendations")),o.createElement(O,{className:"element-medium"},o.createElement("a",{href:"/portfolio",className:"left-part px-16"},"Portfolio"))))}var S=i.ZP.aside.withConfig({displayName:"styles__SideBar",componentId:"sc-19w5hl3-0"})(["display:none;flex-direction:column;width:100%;max-width:",";z-index:1050;@media (max-width:1200px){display:flex;left:0;position:fixed;}footer{position:fixed;bottom:0;display:flex;width:100%;height:56px;max-width:",";box-shadow:inset 0px 1px 0px ",";visibility:hidden;.footer-button{width:100%;display:flex;flex-direction:column;justify-content:center;color:",";&:hover{color:"," !important;}i{display:flex;width:24px;height:24px;justify-content:center;align-items:center;}}@media (max-width:1200px){max-width:100%;visibility:visible;}}.sidebar-content{position:fixed;width:100%;max-width:",";height:100%;top:0;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;background-color:",";box-shadow:1px 0px 0px ",";&::-webkit-scrollbar{display:none;}header{z-index:1030;position:fixed;display:flex;flex-direction:column;width:100%;max-width:",";box-shadow:inset 0px -1px 0px ",",1px 0px 0px ",";top:0;@media (max-width:576px){max-width:100%;}}@media (max-width:1200px){visibility:hidden;}@media (max-width:576px){max-width:100%;}}"],(function(e){return e.styleProps.maxWidth}),(function(e){return e.styleProps.maxWidth}),(function(e){return e.theme.separator_non_opaque}),(function(e){return e.theme.text_secondary}),(function(e){return e.theme.tint_blue}),(function(e){return e.styleProps.maxWidth}),(function(e){return e.theme.background_secondary}),(function(e){return e.theme.separator_non_opaque}),(function(e){return e.styleProps.maxWidth}),(function(e){return e.theme.separator_non_opaque}),(function(e){return e.theme.separator_non_opaque}));function L(){var e,t,r=(0,o.useState)("default"),n=r[0],i=r[1],a=(0,o.useState)("default"),c=a[0],l=a[1],s=(0,o.useState)("default"),d=(s[0],s[1]);return(0,o.useEffect)((function(){e=document.querySelector(".sidebar-content"),t=e.classList})),o.createElement(S,{styleProps:{maxWidth:"360px"},className:"d-print-none"},o.createElement("div",{className:"sidebar-content mt-48 mb-56"},o.createElement("header",{className:"theme-background-primary sidebar-header"},function(e){switch(e){case"menu":return o.createElement(w,null);default:return o.createElement(j,null)}}(n)),function(e){switch(e){case"menu":return o.createElement(k,null);default:return o.createElement(_,null)}}(c)),o.createElement("footer",{className:"theme-background-primary sidebar-footer"},o.createElement(o.Fragment,null,o.createElement("a",{className:"element-button footer-button",href:"/"},o.createElement("i",null,o.createElement(u,{size:18})),o.createElement("span",{className:"large-caption"},"Home")),o.createElement("a",{href:"/contacts",className:"element-button footer-button"},o.createElement("i",null,o.createElement(m,{size:18})),o.createElement("span",{className:"large-caption"},"Contacts")),o.createElement("button",{className:"element-button footer-button",onClick:function(r){!function(r){c!==r&&-1!==t.toString().indexOf("visible")||e.classList.toggle("visible"),c!==r&&(i(r),l(r),d(r))}("menu")}},o.createElement("i",null,o.createElement(g,{size:18})),o.createElement("span",{className:"large-caption"},"Menu")))))}var N=i.ZP.div.withConfig({displayName:"styles__MainNav",componentId:"fljqfe-0"})(["display:flex;justify-content:center;width:100%;position:fixed;top:0;left:0;z-index:1030;backdrop-filter:saturate(180%) blur(24px);background-color:",";box-shadow:inset 0px -1px 0px ",";@media print{display:none;}nav{font-size:17px;line-height:24px;display:flex;min-height:48px;.main-nav-left{display:flex;height:48px;color:",";align-items:center;text-decoration:none;white-space:nowrap;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:hover{color:",";}:hover svg{fill:",";}svg{fill:",";margin-right:12px;transition:fill 0.15s ease-in-out;}}.main-nav-center{display:flex;justify-content:space-between;align-items:center;width:100%;height:48px;max-width:1200px;margin:0 48px;user-select:none;a{display:flex;align-items:center;height:100%;color:",";text-decoration:none;margin:0 8px;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:hover{color:",";}}@media (max-width:1200px){display:none;}}.main-nav-right{display:flex;height:48px;color:",";align-items:center;cursor:pointer;i{display:flex;width:24px;height:24px;justify-content:center;align-items:center;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:hover{color:",";}:not(:first-child){margin-left:16px;}div{position:absolute;cursor:pointer;width:36px;height:36px;}}@media (max-width:1200px){display:none;}}@media (max-width:1200px){justify-content:center;}}"],(function(e){return e.theme.background_primary_blur}),(function(e){return e.theme.separator_non_opaque}),(function(e){return e.theme.gray_01_reverse}),(function(e){return e.theme.text_primary}),(function(e){return e.theme.text_primary}),(function(e){return e.theme.gray_01_reverse}),(function(e){return e.theme.gray_01_reverse}),(function(e){return e.theme.text_primary}),(function(e){return e.theme.gray_01_reverse}),(function(e){return e.theme.text_primary}));function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var C=(0,o.forwardRef)((function(e,t){var r=e.color,n=e.size,i=z(e,["color","size"]);return o.createElement("svg",M({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:r},i),o.createElement("path",{fillRule:"evenodd",d:"M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"}),o.createElement("path",{fillRule:"evenodd",d:"M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"}))}));C.defaultProps={color:"currentColor",size:"1em"};var D=C;function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var R=(0,o.forwardRef)((function(e,t){var r=e.color,n=e.size,i=J(e,["color","size"]);return o.createElement("svg",A({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:r},i),o.createElement("path",{d:"M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"}),o.createElement("path",{d:"M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"}))}));R.defaultProps={color:"currentColor",size:"1em"};var B=R;function H(){return o.createElement(N,null,o.createElement("nav",{className:"container-fluid",style:{maxWidth:"992px"}},o.createElement("a",{href:"/",className:"main-nav-left"},o.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.3603 2L20.7919 14.8719L16.939 22L13.6065 16.2281L15.4747 12.7715L11.7748 13.0555L9.50735 9.12808L13.3603 2ZM11.9624 19.2519L7.98122 11.953L4 19.2519H11.9624Z"})),o.createElement("span",null,"Artem Attvud")),o.createElement("div",{className:"main-nav-center large-subhead"},o.createElement("a",{href:"/resume"},"Resume"),o.createElement("a",{href:"https://www.linkedin.com/in/attvud",target:"blank"},"Recommendations"),o.createElement("a",{href:"/portfolio"},"Portfolio"),o.createElement("a",{href:"/contacts"},"Contacts")),o.createElement("div",{className:"main-nav-right"},o.createElement("i",null,o.createElement("div",{id:"theme-toggler"}),o.createElement(D,{size:"20"})),o.createElement("i",null,o.createElement("div",{onClick:function(){return window.print()}}),o.createElement(B,{size:"20"})))))}r(6256),r(6867);function I(e){return o.createElement(a,{as:"main",className:e.className,id:e.id},o.createElement(L,null),o.createElement(H,null),o.createElement("div",{className:"main-content mt-48 mb-56"},e.children))}},6256:function(e,t,r){"use strict";r.d(t,{Hy:function(){return n}});r(6141),r(7294),r(6867);function n(){return(new Date).getFullYear()-1992-16}}}]);
//# sourceMappingURL=0713c727f5b0e8716554ec15f68c3ff12d02f28b-1fbc95857d3da67ea5cb.js.map
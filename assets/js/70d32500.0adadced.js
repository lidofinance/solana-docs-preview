"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||r;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={title:"specification",description:"Overview of the intent of specification of the Lido on Solana repo",keywords:["development","developers","lido","specification","intent","solana"],sidebar_position:1},a="Specification Overview",c={unversionedId:"development/specification/specification",id:"development/specification/specification",title:"specification",description:"Overview of the intent of specification of the Lido on Solana repo",source:"@site/docs/development/specification/specification.md",sourceDirName:"development/specification",slug:"/development/specification/",permalink:"/solana-docs-preview/development/specification/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"specification",description:"Overview of the intent of specification of the Lido on Solana repo",keywords:["development","developers","lido","specification","intent","solana"],sidebar_position:1},sidebar:"solidoSidebar",previous:{title:"development",permalink:"/solana-docs-preview/development/"},next:{title:"solido",permalink:"/solana-docs-preview/development/specification/solido/"}},l={},p=[],s={toc:p};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"specification-overview"},"Specification Overview"),(0,i.kt)("p",null,"The Solido repo can be generally split into three logical components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Solido/solido"},"solido")," (the on-chain program)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"multisig")," (the on-chain multisig governance program)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"cli")," (the command line interface into the solido and multisig programs)")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Caveat: The initial iterations of Solido used the Solana program library stake-pool program, whilst this is no longer used as a main component, there exists references to data structures within the stake pool program.")),(0,i.kt)("p",null,"There is also an dependency on the spl_token program from the Solana program library but this is used as is with no changes."))}f.isMDXComponent=!0}}]);
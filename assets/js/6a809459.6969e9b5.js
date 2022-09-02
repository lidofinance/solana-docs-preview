"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={},r="Commission",l={unversionedId:"internals/commission",id:"internals/commission",title:"Commission",description:"This page explains how Lido for Solana (\u201cSolido\u201d) handles validation rewards.",source:"@site/docs/internals/commission.md",sourceDirName:"internals",slug:"/internals/commission",permalink:"/solana-docs-preview/internals/commission",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Staking on Solana",permalink:"/solana-docs-preview/internals/solana-staking"},next:{title:"Withdrawals",permalink:"/solana-docs-preview/internals/withdrawals"}},s={},c=[{value:"Challenge",id:"challenge",level:2},{value:"Solido vote accounts",id:"solido-vote-accounts",level:2},{value:"Validation fee credit",id:"validation-fee-credit",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"commission"},"Commission"),(0,o.kt)("p",null,"This page explains how Lido for Solana (\u201cSolido\u201d) handles validation rewards.\nIf you haven\u2019t done so yet, now is a good time to review ",(0,o.kt)("a",{parentName:"p",href:"/solana-docs-preview/internals/solana-staking#vote-accounts"},"how vote accounts\nwork on Solana"),"."),(0,o.kt)("h2",{id:"challenge"},"Challenge"),(0,o.kt)("p",null,"Lido for Solana faced the following challenge:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We want many validators to be able to join."),(0,o.kt)("li",{parentName:"ul"},"These validators may have different validation fees (commissions) for their\npublic vote accounts."),(0,o.kt)("li",{parentName:"ul"},"We (Lido) want to decide the validation fee percentage, and it should be the\nsame for all validators.")),(0,o.kt)("p",null,"If we would allow validators to join with their public vote account, those would\nhave different commissions, and either some validators would take more\ncommission than the percentage set by Lido, or these validators would not be\nable to join."),(0,o.kt)("h2",{id:"solido-vote-accounts"},"Solido vote accounts"),(0,o.kt)("p",null,"To level the playing field for validators, we ask them to create a new vote\naccount for use with Solido. We could ask validators to set the commission of\nthose vote accounts to the percentage decided by Lido, but this creates new\nproblems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If we set a lower validation fee percentage than the commissions of existing\npublic vote accounts, users might flock away from the existing vote accounts,\nand delegate to the Solido vote accounts directly. Users who do this would\nnot benefit from Solido\u2019s advantages (a liquid token, and spreading risk),\nbut it would still undermine the validator\u2019s public vote accounts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Changing the validation fee percentage requires action from all validators."))),(0,o.kt)("p",null,"To address this, we require validators to set the commission to 100%, but set\nthe ",(0,o.kt)("em",{parentName:"p"},"withdraw authority")," of the vote account to an address controlled by Solido.\nThis has the following consequences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It is no longer interesting for users to delegate directly to this vote\naccount, because they would not gain any rewards.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Only the Solido program has access to validation rewards. This means that\nSoldio can distribute the validation fees, and should the percentage need to\nchange, it can be done in a single place."))),(0,o.kt)("p",null,"An additional advantage of Solido distributing validation fees, is that it can\ndistribute them in the form of stSOL. This means that validators automatically\nget compounding rewards, and it aligns the interests of validators with those of\nstSOL holders."),(0,o.kt)("h2",{id:"validation-fee-credit"},"Validation fee credit"),(0,o.kt)("p",null,"When Solido observes a reward in a vote account, it splits it into a fee part,\nand a part that goes to stSOL appreciation. The fee part is further split into\nthe treasury fee, the developer fee, and the validation fee. The treasury and\ndeveloper fee get paid directly into their stSOL accounts, but for technical\nreasons, the validation fee involves a separate step. Solido stores the\namount in the validator list in the Solido instance, and when a validator claims\nit, Solido mints the stSOL into the validator\u2019s fee account, and resets the\nunclaimed amount stored in the Solido instance back to zero."),(0,o.kt)("p",null,"The reason for the separate claiming step, is that Solana transactions have a\nfairly low upper bound on the number of accounts they can reference. With many\nvalidators, we couldn\u2019t possibly pay all of them in a single transaction; the\n\u201cpush-based\u201d approach no longer works. To work around this, we instead store the\nstSOL credit of each validator in the Solido instance (which is only one\naccount), and we have an instruction to pay out this credit for a single\nvalidator. With this \u201cpull-based\u201d approach, the number of validators is no\nlonger limited by the Solana account limit."),(0,o.kt)("p",null,"The maintenance bot ",(0,o.kt)("a",{parentName:"p",href:"/solana-docs-preview/operation/maintenance#claiming-validation-fees"},"will perform this claiming\nstep")," for all validators."))}u.isMDXComponent=!0}}]);
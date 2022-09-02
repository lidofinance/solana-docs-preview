"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4980],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var d=a.createContext({}),l=function(n){var e=a.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},c=function(n){var e=l(n.components);return a.createElement(d.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,d=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return t?a.createElement(g,r(r({ref:e},c),{},{components:t})):a.createElement(g,r({ref:e},c))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var d in e)hasOwnProperty.call(e,d)&&(s[d]=e[d]);s.originalType=n,s.mdxType="string"==typeof n?n:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6744:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const i={},r="Multisig guide",s={unversionedId:"operation/multisig-guide",id:"operation/multisig-guide",title:"Multisig guide",description:"This page is aimed at members of the [administration",source:"@site/docs/operation/multisig-guide.md",sourceDirName:"operation",slug:"/operation/multisig-guide",permalink:"/operation/multisig-guide",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Maintenance",permalink:"/operation/maintenance"},next:{title:"development",permalink:"/development/"}},d={},l=[{value:"Adding a validator",id:"adding-a-validator",level:2},{value:"Approving and executing validator onboarding",id:"approving-and-executing-validator-onboarding",level:2}],c={toc:l};function u(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multisig-guide"},"Multisig guide"),(0,o.kt)("p",null,"This page is aimed at members of the ",(0,o.kt)("a",{parentName:"p",href:"/administration"},"administration\nmultisig"),"."),(0,o.kt)("h2",{id:"adding-a-validator"},"Adding a validator"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This step needs to be executed by one of the multisig owners.")),(0,o.kt)("p",null,"The validator should have provided a vote account, stSOL SPL token account, and\noptionally a maintainer account. In this example, we have"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vote account: ",(0,o.kt)("inlineCode",{parentName:"li"},"EAsHKTdxL9GELqQatEFFe3mbSBcbxyEiA8yoPihGhoM6")),(0,o.kt)("li",{parentName:"ul"},"stSOL account: ",(0,o.kt)("inlineCode",{parentName:"li"},"3gD74tkT4NAnzUT5SsiYTV5HPgML4wnjjxrxfpjaFXHk")),(0,o.kt)("li",{parentName:"ul"},"Maintainer account: ",(0,o.kt)("inlineCode",{parentName:"li"},"F5HwubK4v7VKazPXzRhdvHqA3MmJR5yXDoC8mXeMpdDw"))),(0,o.kt)("p",null,"To be sure, we can confirm that the vote account is set up correctly with\n",(0,o.kt)("inlineCode",{parentName:"p"},"solana vote-account")," as shown in ",(0,o.kt)("a",{parentName:"p",href:"/validator-onboarding#setting-up-a-vote-account"},"the validator onboarding\ndocs"),", but a transaction that\nadds a vote account will fail anyway if the vote account is not set up\ncorrectly."),(0,o.kt)("p",null,"Ensure ",(0,o.kt)("a",{parentName:"p",href:"/operation/the-solido-utility#configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"solido")," is configured"),", then create\nthe multisig transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ solido --config testnet.json add-validator \\\n  --validator-vote-account EAsHKTdxL9GELqQatEFFe3mbSBcbxyEiA8yoPihGhoM6 \\\n  --validator-fee-account 3gD74tkT4NAnzUT5SsiYTV5HPgML4wnjjxrxfpjaFXHk\nTransaction address: BaVYNfiC8DkteXfJy58YcC5pz2qfYDBcNsAuEt7PBZ6h\n")),(0,o.kt)("p",null,"Check that the transaction was created as expected with ",(0,o.kt)("inlineCode",{parentName:"p"},"multisig\nshow-transaction"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ solido --config testnet.json multisig show-transaction \\\n  --transaction-address BaVYNfiC8DkteXfJy58YcC5pz2qfYDBcNsAuEt7PBZ6h\n\nMultisig: 7Yh1UgKE1KQoLYohynqdo84aNBwQ3GwU4XrCNY153PQ5\nDid execute: false\n\nSigners:\n  [ ] ENH1xvwjinUWkwEgw1hKduyAg7CrJMiKvr9nAS7wLHrp\n  [ ] DBd1yUhptC7yRq79sM4cAH1Zhe5rdTpJizxXJQGxRTyn\n  [ ] J4RLjzbJUrm4vRk5ZpPpk6CHzrmAiZGDByuyJ8f9jXR7\n  [x] 6S21QCmpAadEhHj3pY2RMbPMGwgYNvS4Pd7zUXoRDMdK\n  [ ] CeuSTdUx4XnPET4K4o3Zxx3zjh1yrR4f8fyWycGjs7wj\n  [ ] 6DzkRQ3CJXMdnwm9aS2ww7KNeKxw3YLANzpUeTFoRCtC\n  [ ] F4VFp4tFTyrQWo9YVjCbPE5eQP27ice2zyGDp2tN2Rkm\n\nInstruction:\n  Program to call: 7k3rzqoNQxgTLTooAvXriGBKYsd16bV3JMvatvXcBfNo\n  Accounts:\n\n    (some output omitted)\n\n  This is a Solido instruction. It adds a validator to Solido\n    Solido instance:        7yoacaUf7yu5wqxpcHaXtwCaMciR7kFqps8FwnX4cjeK\n    Manager:                F6xN9xSNduk84x6JxKwd3VuENL46TqmTyQiY36mCvwHr\n    Validator vote account: EAsHKTdxL9GELqQatEFFe3mbSBcbxyEiA8yoPihGhoM6\n    Validator fee account:  3gD74tkT4NAnzUT5SsiYTV5HPgML4wnjjxrxfpjaFXHk\n    Validator weight:       1000\n")),(0,o.kt)("p",null,"If the validator will run the maintenance daemon, we also need to propose a\nmultisig transaction to add the maintainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ solido --config testnet.json add-maintainer \\\n  --maintainer-address F5HwubK4v7VKazPXzRhdvHqA3MmJR5yXDoC8mXeMpdDw\nTransaction address: Cq8MtYCYwep7s475yEaLWQbJr8wgnuSnW2Y5doaw6wf4\n")),(0,o.kt)("p",null,"Verify the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ solido --config testnet.json multisig show-transaction \\\n  --transaction-address Cq8MtYCYwep7s475yEaLWQbJr8wgnuSnW2Y5doaw6wf4\n\nMultisig: 7Yh1UgKE1KQoLYohynqdo84aNBwQ3GwU4XrCNY153PQ5\nDid execute: false\n\nSigners:\n  [ ] ENH1xvwjinUWkwEgw1hKduyAg7CrJMiKvr9nAS7wLHrp\n  [ ] DBd1yUhptC7yRq79sM4cAH1Zhe5rdTpJizxXJQGxRTyn\n  [ ] J4RLjzbJUrm4vRk5ZpPpk6CHzrmAiZGDByuyJ8f9jXR7\n  [x] 6S21QCmpAadEhHj3pY2RMbPMGwgYNvS4Pd7zUXoRDMdK\n  [ ] CeuSTdUx4XnPET4K4o3Zxx3zjh1yrR4f8fyWycGjs7wj\n  [ ] 6DzkRQ3CJXMdnwm9aS2ww7KNeKxw3YLANzpUeTFoRCtC\n  [ ] F4VFp4tFTyrQWo9YVjCbPE5eQP27ice2zyGDp2tN2Rkm\n\nInstruction:\n  Program to call: 7k3rzqoNQxgTLTooAvXriGBKYsd16bV3JMvatvXcBfNo\n  Accounts:\n\n    * 7yoacaUf7yu5wqxpcHaXtwCaMciR7kFqps8FwnX4cjeK\n      signer: false, writable: true\n\n    * F6xN9xSNduk84x6JxKwd3VuENL46TqmTyQiY36mCvwHr\n      signer: true, writable: false\n\n    * F5HwubK4v7VKazPXzRhdvHqA3MmJR5yXDoC8mXeMpdDw\n      signer: false, writable: false\n\n  This is a Solido instruction. It adds a maintainer\n    Solido instance: 7yoacaUf7yu5wqxpcHaXtwCaMciR7kFqps8FwnX4cjeK\n    Manager:         F6xN9xSNduk84x6JxKwd3VuENL46TqmTyQiY36mCvwHr\n    Maintainer:      F5HwubK4v7VKazPXzRhdvHqA3MmJR5yXDoC8mXeMpdDw\n")),(0,o.kt)("p",null,"Please share the transaction addresses with the remaining multisig members."),(0,o.kt)("h2",{id:"approving-and-executing-validator-onboarding"},"Approving and executing validator onboarding"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This step needs to be executed by the remaining multisig owners.")),(0,o.kt)("p",null,"To approve the addition of a new validator, we need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To know that the validator was admitted by the LNOSG."),(0,o.kt)("li",{parentName:"ul"},"The vote account, stSOL account, and maintainer account, provided by the\nvalidator."),(0,o.kt)("li",{parentName:"ul"},"The multisig transaction that adds the vote account."),(0,o.kt)("li",{parentName:"ul"},"Optionally, the multisig transaction that adds the maintainer.")),(0,o.kt)("p",null,"Ensure ",(0,o.kt)("a",{parentName:"p",href:"/operation/the-solido-utility#configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"solido")," is configured"),", and\nconfirm that the transactions are adding the right vote account and maintainer,\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"solido multisig show-transaction"),", as shown in the previous section. Then\napprove the transactions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ solido --config testnet.json multisig approve \\\n  --transaction-address BaVYNfiC8DkteXfJy58YcC5pz2qfYDBcNsAuEt7PBZ6h\n\nTransaction approved.\nSolana transaction id of approval: 2NKbP8LHYEy1DvZyq7gH2pHEDJk9E2f6Btv6sEeihzVpEi3qmBqbvs5SUKn3MaJCy6kEYQtyvCxSbkJea2LWawbj\nMultisig transaction now has 2 out of 4 required approvals.\n\n$ solido --config testnet.json multisig approve \\\n  --transaction-address Cq8MtYCYwep7s475yEaLWQbJr8wgnuSnW2Y5doaw6wf4\n\nTransaction approved.\nSolana transaction id of approval: 2RvvNVmqQnd4Fhf6jmac8xDiDADCXU1jVgaBvbrytiFPs2pvNq6LXgrGeeQbXCQqCbACaD5zqK8uCbsECrFiUwKD\nMultisig transaction now has 2 out of 4 required approvals.\n")),(0,o.kt)("p",null,"If the transaction is approved by a majority, you can also go ahead and execute\nit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ solido --config testnet.json multisig execute-transaction \\\n  --transaction-address BaVYNfiC8DkteXfJy58YcC5pz2qfYDBcNsAuEt7PBZ6h\n\nTransaction executed.\nSolana transaction id of execution: 3qawwqtnb684gV9AgqoTqdx8pgZfGQ2dvmMxtfsYWXJgszDMKLP5BBbB4nZfmFwGK5dmFSoFGfSU5M7XSdmXavej\n\n$ solido --config testnet.json multisig execute-transaction \\\n  --transaction-address Cq8MtYCYwep7s475yEaLWQbJr8wgnuSnW2Y5doaw6wf4\n\nTransaction executed.\nSolana transaction id of execution: 5N9vgWmBec6BFmgnJqFe7zvB5TrS22vDcmPxSw2PoZj7WWHa4LDw4j14qfxywDXYTsUAeUUQCqSbGSh5tp2WqEJn\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The multisig\u2019s program derived address (PDA) needs to have sufficient\nfunds to execute transactions. Chorus One should have funded it during setup.")),(0,o.kt)("p",null,"You can confirm that the transaction was executed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ solido --config testnet.json multisig show-transaction \\\n  --transaction-address Cq8MtYCYwep7s475yEaLWQbJr8wgnuSnW2Y5doaw6wf4\n\nMultisig: 7Yh1UgKE1KQoLYohynqdo84aNBwQ3GwU4XrCNY153PQ5\nDid execute: true\n\nSigners:\n  [x] ENH1xvwjinUWkwEgw1hKduyAg7CrJMiKvr9nAS7wLHrp\n  [x] DBd1yUhptC7yRq79sM4cAH1Zhe5rdTpJizxXJQGxRTyn\n  [x] J4RLjzbJUrm4vRk5ZpPpk6CHzrmAiZGDByuyJ8f9jXR7\n  [x] 6S21QCmpAadEhHj3pY2RMbPMGwgYNvS4Pd7zUXoRDMdK\n  [ ] CeuSTdUx4XnPET4K4o3Zxx3zjh1yrR4f8fyWycGjs7wj\n  [ ] 6DzkRQ3CJXMdnwm9aS2ww7KNeKxw3YLANzpUeTFoRCtC\n  [ ] F4VFp4tFTyrQWo9YVjCbPE5eQP27ice2zyGDp2tN2Rkm\n\n(remaining output omitted)\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,d=u["".concat(i,".").concat(c)]||u[c]||k[c]||l;return n?a.createElement(d,s(s({ref:t},m),{},{components:n})):a.createElement(d,s({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},s="All methods",o={unversionedId:"frontend-integration/sdk/sdk-methods",id:"frontend-integration/sdk/sdk-methods",title:"All methods",description:"Staking",source:"@site/docs/frontend-integration/sdk/sdk-methods.mdx",sourceDirName:"frontend-integration/sdk",slug:"/frontend-integration/sdk/sdk-methods",permalink:"/solana-docs-preview/frontend-integration/sdk/sdk-methods",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"solidoSidebar",previous:{title:"SDK",permalink:"/solana-docs-preview/frontend-integration/sdk/"},next:{title:"Staking & UnStaking",permalink:"/solana-docs-preview/frontend-integration/sdk/stake"}},i={},p=[{value:"Staking",id:"staking",level:2},{value:"stake()",id:"stake",level:3},{value:"getStakeTransaction()",id:"getstaketransaction",level:3},{value:"calculateMaxStakeAmount()",id:"calculatemaxstakeamount",level:3},{value:"signAndConfirmTransaction()",id:"signandconfirmtransaction",level:3},{value:"UnStaking",id:"unstaking",level:2},{value:"unStake()",id:"unstake",level:3},{value:"getUnStakeTransaction()",id:"getunstaketransaction",level:3},{value:"calculateMaxUnStakeAmount()",id:"calculatemaxunstakeamount",level:3},{value:"Transaction info",id:"transaction-info",level:2},{value:"getExchangeRate()",id:"getexchangerate",level:3},{value:"getTransactionCost()",id:"gettransactioncost",level:3},{value:"getStakingRewardsFee()",id:"getstakingrewardsfee",level:3},{value:"getTransactionInfo()",id:"gettransactioninfo",level:3},{value:"Lido statistics",id:"lido-statistics",level:2},{value:"getTotalStaked()",id:"gettotalstaked",level:3},{value:"getStakersCount()",id:"getstakerscount",level:3},{value:"getMarketCap()",id:"getmarketcap",level:3},{value:"getLidoStatistics()",id:"getlidostatistics",level:3}],m={toc:p};function k(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"all-methods"},"All methods"),(0,r.kt)("h2",{id:"staking"},"Staking"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stake"},"stake()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"First prepares stake transaction, then signs and confirm it")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type SetTxStageCallback = (props: {\n  txStage: TX_STAGE;\n  transactionHash?: TransactionSignature; // for TX_STAGE.AWAITING_BLOCK stage\n  stSolAccountAddress?: PublicKey; // for TX_STAGE.AWAITING_SIGNING stage\n}) => void;\n\n\n// With txStage\nconst { transactionHash, stSolAccountAddress } = await solidoSDK.stake({\n    amount: 20,\n    wallet: walletInstance,\n    setTxStage: setTxStageCallback,\n});\n\n// Without txStage\nconst { transactionHash, stSolAccountAddress } = await solidoSDK.stake({\n    amount: 20,\n    wallet: walletInstance,\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"amount"))," - The amount of SOL-s which need to stake"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"wallet"))," - Wallet instance from ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@solana/wallet-adapter-base"},"@solana/wallet-adapter-base")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"setTxStage?"))," - Optional callback for getting information about transaction stage")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<{ transactionHash: string; stSolAccountAddress: PublicKey }>")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"value definition:")," hash of transaction got from ",(0,r.kt)("inlineCode",{parentName:"p"},"connection.sendRawTransaction"),"\n",(0,r.kt)("em",{parentName:"p"},"value definition:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey")," class from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")),(0,r.kt)("h3",{id:"getstaketransaction"},"getStakeTransaction()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Prepares & returns stake transaction")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { transaction, stSolAccountAddress } = await solidoSDK.getStakeTransaction({\n    amount: 20,\n    payerAddress: new PublicKey(wallet.publicKey),\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"amount"))," - The amount of SOL-s which need to stake"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"payerAddress"))," - address of user who is trying to make the transaction (",(0,r.kt)("inlineCode",{parentName:"li"},"wallet.publicKey"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<{ transaction: Transaction; stSolAccountAddress: PublicKey }>")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"value definition:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction")," class from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js"),"\n",(0,r.kt)("em",{parentName:"p"},"value definition:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey")," class from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")),(0,r.kt)("h3",{id:"calculatemaxstakeamount"},"calculateMaxStakeAmount()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns maximum available SOL-s to stake for given address")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const maxStakeAmountInLamports = await solidoSDK.calculateMaxStakeAmount(new PublicKey(wallet.publicKey));\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"address"))," - address of user (",(0,r.kt)("inlineCode",{parentName:"li"},"wallet.publicKey"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"value definition:")," Value measurement is in lamports"),(0,r.kt)("h3",{id:"signandconfirmtransaction"},"signAndConfirmTransaction()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Signs and confirm given transaction")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const transactionHash = await solidoSDK.signAndConfirmTransaction({\n    transaction: stakeTransaction,\n    wallet: walletInstance,\n    setTxStage: setTxStageCallback,\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"transaction"))," - (un)stake transaction, got from ",(0,r.kt)("inlineCode",{parentName:"li"},"getStakeTransaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"wallet"))," - Wallet instance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"setTxStage?"))," - Optional callback for getting information about transaction stage")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<string>")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionHash")," for generating links to solana explorers. For example to ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.solana.com"},"https://explorer.solana.com"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"unstaking"},"UnStaking"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unstake"},"unStake()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"First prepares unStake transaction, then signs and confirm it")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type SetTxStageCallback = (props: {\n  txStage: TX_STAGE;\n  transactionHash?: TransactionSignature; // for TX_STAGE.AWAITING_BLOCK stage\n  deactivatingSolAccountAddress?: PublicKey; // for TX_STAGE.AWAITING_SIGNING stage\n}) => void;\n\n\n// With txStage\nconst { transactionHash, deactivatingSolAccountAddress } = await solidoSDK.unStake({\n    amount: 20,\n    wallet: walletInstance,\n    setTxStage: setTxStageCallback,\n});\n\n// Without txStage\nconst { transactionHash, deactivatingSolAccountAddress } = await solidoSDK.unStake({\n    amount: 20,\n    wallet: walletInstance,\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"amount"))," - The amount of stSOL-s which need to unStake"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"wallet"))," - Wallet instance from ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@solana/wallet-adapter-base"},"@solana/wallet-adapter-base")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"setTxStage?"))," - Optional callback for getting information about transaction stage")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<{ transactionHash: string; deactivatingSolAccountAddress: PublicKey }>")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"value definition:")," hash of transaction got from ",(0,r.kt)("inlineCode",{parentName:"p"},"connection.sendRawTransaction"),"\n",(0,r.kt)("em",{parentName:"p"},"value definition:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey")," class from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")),(0,r.kt)("h3",{id:"getunstaketransaction"},"getUnStakeTransaction()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Prepares & returns unStake transaction")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\nconst { transaction, deactivatingSolAccountAddress } = await solidoSDK.getUnStakeTransaction({\n    amount: 20,\n    payerAddress: new PublicKey(wallet.publicKey),\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"amount"))," - The amount of stSOL which need to unStake"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"payerAddress"))," - address of user who is trying to make the transaction (",(0,r.kt)("inlineCode",{parentName:"li"},"wallet.publicKey"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<{ transaction: Transaction, deactivatingSolAccountAddress: Publickey }>")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"value definition:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction")," class from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js"),"\n",(0,r.kt)("em",{parentName:"p"},"value definition:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey")," class from ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")),(0,r.kt)("h3",{id:"calculatemaxunstakeamount"},"calculateMaxUnStakeAmount()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns maximum available stSOL-s to unStake for given address")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const maxUnStakeAmountInLamports = await solidoSDK.calculateMaxUnStakeAmount(new PublicKey(wallet.publicKey));\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"address"))," - address of user (",(0,r.kt)("inlineCode",{parentName:"li"},"wallet.publicKey"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"value definition:")," Value measurement is in lamports"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"transaction-info"},"Transaction info"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getexchangerate"},"getExchangeRate()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns exchange rate for stSOL-SOL")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { SOLToStSOL, stSOLToSOL } = await solidoSDK.getExchangeRate();\n\nconsole.log(`1 stSOL = ~${stSOLToSOL} SOL`); // 1 stSOL = ~1.0485 SOL\nconsole.log(`1 SOL = ~${SOLToStSOL} stSOL`); // 1 SOL = ~0.9537 stSOL\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"precision?"))," - the number of digits to appear after the decimal point (",(0,r.kt)("inlineCode",{parentName:"li"},"default = 4"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<{\n    SOLToStSOL: number,\n    stSOLToSOL: number,\n    description: string\n}>")),(0,r.kt)("h3",{id:"gettransactioncost"},"getTransactionCost()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns transaction cost for given instruction")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { costInUsd, costInSol } = await solidoSDK.getTransactionCost(INSTRUCTION.STAKE);\n\nconsole.log(`~ ${costInSol} SOL (${costInUsd})`); // ~ 0.000005 SOL ($0.00021)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"instruction"))," - INSTRUCTION code")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<{\n    costInUsd: number,\n    costInSol: number,\n    costInLamports: number\n}>")),(0,r.kt)("h3",{id:"getstakingrewardsfee"},"getStakingRewardsFee()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns staking rewards fee percent with it description")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { fee } = await solidoSDK.getStakingRewardsFee();\n\nconsole.log(`Staking rewards fee: (${fee})`);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<{\n    fee: string,\n    description: string\n}>")),(0,r.kt)("h3",{id:"gettransactioninfo"},"getTransactionInfo()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns the united response of the previous functions (",(0,r.kt)("inlineCode",{parentName:"em"},"exchangeRate"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"transactionCost"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"stakingRewardsFee"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { exchangeRate, transactionCost, stakingRewardsFee } = await solidoSDK.getTransactionInfo(INSTRUCTION.STAKE);\n\nconsole.log(`Exchange rate: ${exchangeRate.value}`);\nconsole.log(`Transaction cost: $${transactionCost.costInUsd}`);\nconsole.log(`Staking rewards fee: (${stakingRewardsFee.fee})`);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"instruction"))," - INSTRUCTION code")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<{\n    exchangeRate: {\n        value: number,\n        description: string\n    },\n    transactionCost: {\n        costInUsd: number,\n        costInSol: number,\n        costInLamports: number\n    },\n    stakingRewardsFee: {\n        fee: string,\n        description: string\n    }\n}>")),(0,r.kt)("br",null),(0,r.kt)("img",{src:n(3728).Z,alt:"Transaction Info"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"lido-statistics"},"Lido statistics"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettotalstaked"},"getTotalStaked()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns total staked SOL-s")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const totalStaked = await solidoSDK.getTotalStaked();\n\nconsole.log(`${totalStaked} SOL`); // 2620337.84 SOL\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"precision?"))," - the number of digits to appear after the decimal point (",(0,r.kt)("inlineCode",{parentName:"li"},"default = 2"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,r.kt)("h3",{id:"getstakerscount"},"getStakersCount()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns the number of non-empty stSOL accounts")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const stakersCount = await solidoSDK.getStakersCount();\n\nconsole.log(`Stakers: ${stakersCount}`); // 14965\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,r.kt)("h3",{id:"getmarketcap"},"getMarketCap()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns stSOL market cap in $")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const marketCap = await solidoSDK.getMarketCap();\n\nconsole.log(`stSOL market cap $${marketCap}`); // $113174513\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"totalStakedInSol?"))," - total staked SOL-s")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<number>")),(0,r.kt)("h3",{id:"getlidostatistics"},"getLidoStatistics()"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns the united response of the previous functions (",(0,r.kt)("inlineCode",{parentName:"em"},"totalStaked"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"stakersCount"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"marketCap"),", also ",(0,r.kt)("inlineCode",{parentName:"em"},"apy"),")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syntax:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { apy, totalStaked, stakers, marketCap } = await solidoSDK.getLidoStatistics();\n\nconsole.log(`Annual percentage yield: ${apy}%`);\nconsole.log(`Total staked with Lido: ${totalStaked.formatted}`);\nconsole.log(`Stakers: ${stakers.formatted}`);\nconsole.log(`stSOL market cap: $${marketCap}`);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return value:")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<{\n    apy: number,\n    totalStaked: {\n        value: number,\n        formatted: number,\n    },\n    stakers: {\n        value: string,\n        description: string,\n        formatted: fstring,\n    },\n    marketCap: number\n}>")),(0,r.kt)("img",{src:n(1656).Z,alt:"Lido Statistics"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"enum INSTRUCTION {\n  STAKE = 1,\n  UNSTAKE = 2,\n}\n")))}k.isMDXComponent=!0},1656:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lidostatistics-2211580c6e4a8b437c8d39f23a6c6d45.png"},3728:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transactionInfo-00fc9b0ceadd4c4b225e90ecd1e011c1.png"}}]);
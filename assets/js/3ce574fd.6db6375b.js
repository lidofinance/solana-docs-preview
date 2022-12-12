"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5139],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var o=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,o,n=function(t,e){if(null==t)return{};var a,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var r=o.createContext({}),c=function(t){var e=o.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=c(t.components);return o.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,r=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),h=c(a),u=n,g=h["".concat(r,".").concat(u)]||h[u]||p[u]||i;return a?o.createElement(g,l(l({ref:e},d),{},{components:a})):o.createElement(g,l({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=h;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4273:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var o=a(7462),n=(a(7294),a(3905));const i=a.p+"assets/images/wallet_list_sollet-6ab7f7fbc9f8ab7965df037917eefabe.png",l=a.p+"assets/images/connect_dialog-3af3c4b835d9cffaa8dacfe48b134bd8.png",s=a.p+"assets/images/staking-b26dcdc28ef9860543eed578722b39eb.png",r=a.p+"assets/images/update-f565dd4d0d5fb034e93a40c6365e0d28.png";var c=a(3902);a(1599);const d={id:"Sollet",title:"Sollet",description:"Overview of user staking in LIDO for Solana with Sollet",keywords:["staking","end-user","lido","solana","sollet"],sidebar_label:"Sollet",sidebar_position:5},p="How to Stake Solana on Lido",h={unversionedId:"staking/Sollet",id:"staking/Sollet",title:"Sollet",description:"Overview of user staking in LIDO for Solana with Sollet",source:"@site/docs/staking/sollet.md",sourceDirName:"staking",slug:"/staking/Sollet",permalink:"/solana-docs-preview/staking/Sollet",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"Sollet",title:"Sollet",description:"Overview of user staking in LIDO for Solana with Sollet",keywords:["staking","end-user","lido","solana","sollet"],sidebar_label:"Sollet",sidebar_position:5},sidebar:"solidoSidebar",previous:{title:"Ledger",permalink:"/solana-docs-preview/staking/ledger"},next:{title:"Solong",permalink:"/solana-docs-preview/staking/solong"}},u={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Lido for Solana staking guide",id:"lido-for-solana-staking-guide",level:2},{value:"Step 1: Create or Restore Sollet Wallet",id:"step-1-create-or-restore-sollet-wallet",level:2},{value:"Creating the wallet",id:"creating-the-wallet",level:3},{value:"Restoring the wallet",id:"restoring-the-wallet",level:3},{value:"Step 2: Connect Lido to Sollet",id:"step-2-connect-lido-to-sollet",level:2},{value:"Step 3: Explore the interface",id:"step-3-explore-the-interface",level:2},{value:"Account info",id:"account-info",level:3},{value:"Transaction Parameters",id:"transaction-parameters",level:3},{value:"Lido Statistics",id:"lido-statistics",level:3},{value:"FAQs",id:"faqs",level:3},{value:"Step 4: Stake your SOL",id:"step-4-stake-your-sol",level:2},{value:"Step 5: View the transaction on Blockexplorer",id:"step-5-view-the-transaction-on-blockexplorer",level:2},{value:"Step 6: Unstaking and utlizing stSOL",id:"step-6-unstaking-and-utlizing-stsol",level:2},{value:"Migrating from Sollet to Solflare",id:"migrating-from-sollet-to-solflare",level:3},{value:"Utilizing and exchanging stSOL",id:"utilizing-and-exchanging-stsol",level:3}],k={toc:g};function m(t){let{components:e,...d}=t;return(0,n.kt)("wrapper",(0,o.Z)({},k,d,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-stake-solana-on-lido"},"How to Stake Solana on Lido"),(0,n.kt)("p",null,"A quick guide on staking your Solana on the Lido widget"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"\u2018Lido for Solana\u2019 is a Lido-DAO governed liquid staking protocol for the Solana blockchain. Anyone who stakes their SOL tokens with Lido will be issued an on-chain representation of SOL staking position with Lido validators, called stSOL. This will allow Solana token holders to get liquidity on their staked assets which can then be traded, or further utilized as collateral in DeFi products."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Widget",src:a(840).Z,width:"2698",height:"1428"})),(0,n.kt)("h2",{id:"lido-for-solana-staking-guide"},"Lido for Solana staking guide"),(0,n.kt)("p",null,"In this step-by-step guide, we will learn how to stake your Solana via the Lido staking widget. This guide shows the testnet for demonstration purposes. However, the process remains the same for mainnet. You can use one of the following wallets to connect to Lido. The facility to use the hardware wallet Ledger is also provided. This guarantees an extra layer of security for the user."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Phantom"),(0,n.kt)("li",{parentName:"ol"},"Solflare"),(0,n.kt)("li",{parentName:"ol"},"Ledger"),(0,n.kt)("li",{parentName:"ol"},"Sollet"),(0,n.kt)("li",{parentName:"ol"},"Solong")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"step-1-create-or-restore-sollet-wallet"},"Step 1: Create or Restore Sollet Wallet"),(0,n.kt)("p",null,"Navigate to ",(0,n.kt)("a",{parentName:"p",href:"http://sollet.io/"},"http://sollet.io/")," to create/restore your solana wallet."),(0,n.kt)("h3",{id:"creating-the-wallet"},"Creating the wallet"),(0,n.kt)("p",null,"If you do not have a wallet you yet, you should create a new wallet and note down the seed phrase and store it in a safe place. Follow the onscreen instructions and make sure to fund your wallet with some SOL tokens before interacting with Lido"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create Wallet",src:a(1555).Z,width:"2880",height:"1564"})),(0,n.kt)("h3",{id:"restoring-the-wallet"},"Restoring the wallet"),(0,n.kt)("p",null,"If you already have a wallet, you can restore it on sollet using the associated seed phrase. Follow the online instructions to restore your SOL account."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Restore Existing Sollet",src:a(3663).Z,width:"2872",height:"1434"}),"\n",(0,n.kt)("img",{alt:"Restore Sollet Account",src:a(1828).Z,width:"2864",height:"612"})),(0,n.kt)("h2",{id:"step-2-connect-lido-to-sollet"},"Step 2: Connect Lido to Sollet"),(0,n.kt)("p",null,"Once your wallet is setup visit ",(0,n.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"https://solana.lido.fi")," to stake your SOL tokens. Now connect your Sollet account to the Lido interface."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Connect",src:a(9436).Z,width:"2872",height:"528"})),(0,n.kt)("p",null,"Pressing the connect wallet button, on the top right hand corner of the screen, pops up the wallet screen."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:i,alt:"Wallets",width:"350"})),(0,n.kt)("p",null,"Selecting your wallet and pressing the connect button takes you to another window with the wallet\u2019s browser extension. On this window you will have to ",(0,n.kt)("strong",{parentName:"p"},"approve the connection"),". Make sure to verify the details listed on the approval screen by Sollet."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sollet Approve",src:a(5677).Z,width:"2880",height:"954"})),(0,n.kt)("p",null,"If you have set a password to open the wallet, you might get prompted to unlock your wallet. You will, then, have to allow Lido to connect to your wallet and fetch its balance. Once connected you would be able to see your balance on the Lido widget."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Connected Widget",src:a(6134).Z,width:"2694",height:"1358"})),(0,n.kt)("p",null,"Before you interact with the widget further it is important to explore the widget and understand its functionality."),(0,n.kt)("h2",{id:"step-3-explore-the-interface"},"Step 3: Explore the interface"),(0,n.kt)("p",null,"At the top you can see your account\u2019s information\u200a\u2014\u200ayour current stSOL balance and the number of SOL tokens available for staking. For new account holders, the staked amount (stSOL) will be 0 in the beginning. You can also see the returns you will get by staking with Lido under Lido APR. Below that you can enter the number of SOL you want to stake."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Interface",src:a(7471).Z,width:"2042",height:"922"})),(0,n.kt)("h3",{id:"account-info"},"Account info"),(0,n.kt)("p",null,"You can go to the top-right corner of the screen and click on your connected account. This lets you take a look at your address and disconnect at any point during the process.\nThe address for the demo account is"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"CHoeCfX43Hh8ivXR8wiChcNcpDgVmNm5uLhMgGA37ioY"))),(0,n.kt)("p",null,"Its transaction history can be viewed on the blockexplorer ",(0,n.kt)("a",{parentName:"p",href:"https://solana.fm/address/CHoeCfX43Hh8ivXR8wiChcNcpDgVmNm5uLhMgGA37ioY?cluster=testnet-qn1"},"here"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Account Info",src:a(3169).Z,width:"2874",height:"580"})),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:l,alt:"Connect Dialog",width:"350"})),(0,n.kt)("h3",{id:"transaction-parameters"},"Transaction Parameters"),(0,n.kt)("p",null,"When you enter the amount of SOL you want to stake, the values below the submit button change automatically. These values give you specific information about the transaction you are about to perform. It tells you the"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Exchange rate of SOL v/s stSOL at the moment"),(0,n.kt)("li",{parentName:"ul"},"Amount of stSOL you will receive"),(0,n.kt)("li",{parentName:"ul"},"Transaction cost"),(0,n.kt)("li",{parentName:"ul"},"Fee that will be deducted for this transaction")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Transaction Parameters",src:a(6654).Z,width:"2522",height:"1272"})),(0,n.kt)("h3",{id:"lido-statistics"},"Lido Statistics"),(0,n.kt)("p",null,"Just below the transaction parameters you also see global Lido statistics. This gives you a clear idea of how much SOL is being staked worldwide and other information regarding the liquid staking ecosystem."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lido Parameters",src:a(97).Z,width:"2370",height:"420"})),(0,n.kt)("h3",{id:"faqs"},"FAQs"),(0,n.kt)("p",null,"You can see the FAQ section right below the Lido statistics. It is prudent to familiarize yourself with some of the basic features of liquid staking and the risks involved. The FAQ section also gives more information about the stSOL and its value. In case, you have even more questions you can always reach out to the Lido team for any clarifications. The contact information is given at the end of this article."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Faqs",src:a(2614).Z,width:"2178",height:"1224"})),(0,n.kt)("h2",{id:"step-4-stake-your-sol"},"Step 4: Stake your SOL"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stake",src:a(7793).Z,width:"2854",height:"882"})),(0,n.kt)("p",null,"To stake your SOL with lido enter the amount you wanter to stake. Once you submit you might get redirected to your wallet. On the lido widget will see a pop-up showing the state of your transaction. The Lido widget waits for you to approve this transaction through your wallet."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note ",(0,n.kt)("strong",{parentName:"p"},"This transaction will only go through if you go back to your wallet and approve it."))),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:s,alt:"Staking",width:"450"})),(0,n.kt)("p",null,"You get additional information about the transaction details while approving the transaction. Go ahead and approve the transaction."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sollet Approve 1",src:a(3925).Z,width:"2874",height:"1558"})),(0,n.kt)("p",null,"After verifying the information you can approve now."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sollet Approve 2",src:a(3225).Z,width:"2878",height:"262"})),(0,n.kt)("h2",{id:"step-5-view-the-transaction-on-blockexplorer"},"Step 5: View the transaction on Blockexplorer"),(0,n.kt)("p",null,"Once you hit approve on your wallet, you can come back to the lido widget and click on ",(0,n.kt)("strong",{parentName:"p"},"View on Solana Blockexplorer.")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:c.Z,alt:"View Tx",width:"500"})),(0,n.kt)("p",null,"This is useful as it tells you the ",(0,n.kt)("a",{parentName:"p",href:"https://solana.fm/tx/3nwJJRgQgujJUamvmDAq4KiFmn9CAgXEMc2eHUu7NBX9bWzYAbgA2UZS3LUhUXYmeu8NBEkuyjWdpSz6AgCNJ4oS?cluster=testnet-qn1"},"current status")," of your transaction."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Link for the above transaction - ",(0,n.kt)("a",{parentName:"p",href:"https://solana.fm/tx/3nwJJRgQgujJUamvmDAq4KiFmn9CAgXEMc2eHUu7NBX9bWzYAbgA2UZS3LUhUXYmeu8NBEkuyjWdpSz6AgCNJ4oS?cluster=testnet-qn1"},"https://solana.fm/tx/3nwJJRgQgujJUamvmDAq4KiFmn9CAgXEMc2eHUu7NBX9bWzYAbgA2UZS3LUhUXYmeu8NBEkuyjWdpSz6AgCNJ4oS?cluster=testnet-qn1"))),(0,n.kt)("p",null,"If you look at the Confirmations field you can slowly see it increasing from 0 to 32. Once it reaches the MAX number of confirmations your transaction gets added to the blockchain"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Conf1",src:a(1516).Z,width:"2676",height:"1310"}),"\n",(0,n.kt)("img",{alt:"Conf2",src:a(7373).Z,width:"2408",height:"332"}),"\n",(0,n.kt)("img",{alt:"Conf3",src:a(9154).Z,width:"2364",height:"246"})),(0,n.kt)("p",null,"You can now go back to the Lido widget and look at your updated stSOL balance. Just below the stSOL balance, you will also be able to see the amount of SOL you can get back for it a.k.a the exchange rate."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:r,alt:"Update",width:"450"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Updated",src:a(7412).Z,width:"2062",height:"352"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note 1: We had 9 SOL in the beginning and we staked 1 SOL. We should be left with 8 SOL but we had to pay an additional 0.0021 SOL as the rent for the new stSOL account that got created for us.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note 2: This rent is a one-time fee that won\u2019t reccur on the next staking transaction.")),(0,n.kt)("h2",{id:"step-6-unstaking-and-utlizing-stsol"},"Step 6: Unstaking and utlizing stSOL"),(0,n.kt)("p",null,"To withdraw click on the ",(0,n.kt)("strong",{parentName:"p"},"Unstake")," tab and enter the amount of stSOL that you would like to unstake in the field provided below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"unstake-amount",src:a(2951).Z,width:"2532",height:"1328"})),(0,n.kt)("p",null,"Then click unstake and head over to your wallet to approve the transaction."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to note down the transaction hash or the link provided on the screen. This allows for an easier debugging in case of a failed transaction.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"unstake-transaction",src:a(9270).Z,width:"2526",height:"1308"})),(0,n.kt)("p",null,"The Solana blockchain waits for 32 confirmations (called MAX Confirmations) before making a transaction 'final'. Once the transaction gets the ",(0,n.kt)("inlineCode",{parentName:"p"},"MAX Confirmations")," the Lido program splits off a stake account with the redeemed SOL amount and transfers it to you. "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to note down the stake account address by clicking on the blockexplorer link provided on the screen.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"unstake-successful",src:a(257).Z,width:"2572",height:"1262"})),(0,n.kt)("p",null,"If you issue the unstake instruction when epoch ",(0,n.kt)("inlineCode",{parentName:"p"},"N")," is going on, the deactivation will start immediately and your stake will completely deactivate at epoch ",(0,n.kt)("inlineCode",{parentName:"p"},"N+1"),"."),(0,n.kt)("p",null,"For example, for the stake account shown in the example above the ",(0,n.kt)("inlineCode",{parentName:"p"},"Unstake")," was done at epoch ",(0,n.kt)("inlineCode",{parentName:"p"},"225"),", the stake started deactivating within the same epoch and the SOL became available for withdrawing at epoch ",(0,n.kt)("inlineCode",{parentName:"p"},"226")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"epochN+2",src:a(8559).Z,width:"1972",height:"462"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Note that the option to view deactivating stake accounts is visible only in Phantom and Solflare wallets. On Sollet or Solong you will not be able to see these stake accounts. This is not a cause for concern as you can always migrate from Sollet/Solong to either Phantom or Solflare for free")),(0,n.kt)("p",null,"After your stake fully deactivates you can withdraw it using Phantom or Solflare. For users who desire instant liquidity, the preferred option is to exchange stSOL on the open market, e.g. on the supported AMM pools on Saber and Raydium."),(0,n.kt)("h3",{id:"migrating-from-sollet-to-solflare"},"Migrating from Sollet to Solflare"),(0,n.kt)("p",null,"Right now the facility to see your deactivating stake accounts is available in Solflare and Phantom only. Even Sollet webpage shows a disclaimer where they urge users to use Solflare or Phantom. It is very easy and free of charge to migrate from Sollet to Solflare. Below are the steps to do that.\n",(0,n.kt)("img",{alt:"sollet-disclaimer",src:a(4041).Z,width:"2820",height:"510"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Sollet.io, click on the dropdown and select ",(0,n.kt)("inlineCode",{parentName:"li"},"Account")," button in the top-right corner."),(0,n.kt)("li",{parentName:"ol"},"In the Accounts dropdown, click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Export Mnemonic")," "),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Reveal")," to display the mnemonic words. Copy the words or jot them down securely on a piece of paper."),(0,n.kt)("li",{parentName:"ol"},"Visit the ",(0,n.kt)("a",{parentName:"li",href:"https://solflare.com/"},"https://solflare.com/")," and click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Access")," button"),(0,n.kt)("li",{parentName:"ol"},"Enter the mnemonic words in the field that says ",(0,n.kt)("inlineCode",{parentName:"li"},"Mnemonic phrase")),(0,n.kt)("li",{parentName:"ol"},"It is optional to set the wallet password. You may skip it and click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Next Step")),(0,n.kt)("li",{parentName:"ol"},"Solflare shows you the default ",(0,n.kt)("inlineCode",{parentName:"li"},"Derivation Path"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on the dropdown to select the second option ",(0,n.kt)("inlineCode",{parentName:"li"},"m/44'/501'/0'/0' (sollet, phantom)")),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Access")," button."),(0,n.kt)("li",{parentName:"ol"},"You've successfully migrated to Solflare wallet now. You may follow the instructions ",(0,n.kt)("a",{parentName:"li",href:"https://docs.solana.lido.fi/staking/solflare"},"mentioned here")," to unstake/view your deactivating stake accounts.")),(0,n.kt)("p",null,"The above steps are captured in images below.\n",(0,n.kt)("img",{alt:"Step1",src:a(8247).Z,width:"2858",height:"628"}),"\n",(0,n.kt)("img",{alt:"Step2",src:a(1353).Z,width:"2348",height:"768"}),"\n",(0,n.kt)("img",{alt:"Step3-Step6",src:a(2041).Z,width:"2862",height:"1396"}),"\n",(0,n.kt)("img",{alt:"Step7",src:a(2421).Z,width:"2860",height:"1386"}),"\n",(0,n.kt)("img",{alt:"Step8",src:a(7925).Z,width:"2854",height:"1402"}),"\n",(0,n.kt)("img",{alt:"Step9",src:a(400).Z,width:"2852",height:"1428"}),"\n",(0,n.kt)("img",{alt:"Step10",src:a(4610).Z,width:"2858",height:"1410"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Once you have migrated to Solflare you may visit the unstaking guide for Solflare to withdraw your SOL. The guide is present at ",(0,n.kt)("a",{parentName:"p",href:"https://docs.solana.lido.fi/staking/solflare"},"https://docs.solana.lido.fi/staking/solflare"))),(0,n.kt)("h3",{id:"utilizing-and-exchanging-stsol"},"Utilizing and exchanging stSOL"),(0,n.kt)("p",null,"The following AMM pools and markets exist for exchanging stSOL or adding liquidity to pools."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Provider"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Saber"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Swap stSOL for SOL"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://app.saber.so/#/swap"},"https://app.saber.so/#/swap"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Saber"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add Liquidity to Pool"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://app.saber.so/#/pools/stsol/deposit"},"https://app.saber.so/#/pools/stsol/deposit"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Saber"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Farming"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://app.saber.so/#/quarries/stsol/stake"},"https://app.saber.so/#/quarries/stsol/stake"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Raydium"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Swap stSOL for USDC"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://raydium.io/swap/?ammId=6a1CsrpeZubDjEJE9s1CMVheB6HWM5d7m1cj2jkhyXhj"},"Raydium Pool"))))))}m.isMDXComponent=!0},1599:(t,e,a)=>{a.p},3902:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/view_tx-dfd323a7dd1a452a2dc4876e8ac1b760.png"},4610:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/Step10-aaeb7ff44d6991afc50c056d3b2520ea.png"},2421:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/Step7-d92cb9b7d6d9b697772c6ff64a336e8c.png"},7925:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/Step8-90294adf0c3de7ac3f96d07f3fc38ea2.png"},400:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/Step9-20ec6f8bd85f37022e2f521cecee4af6.png"},3169:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/account_info-ec38fbec312fc9993c3a10544c4d6c35.png"},1516:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/confirmations1-41c4daf7129264bb379542a755a7d30b.png"},7373:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/confirmations2-6669d984bbcfbff503c9c6c1cd2619ca.png"},9154:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/confirmations3-ae704fd92aeb27ba40fe297dfc91ea59.png"},9436:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/connect-3dc119fcf29f83cab7aff88398f35670.png"},6134:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/connected_widget-759b105b89933a918cefef76379bf2d0.png"},8559:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/epochNplus2-ea6a9cac48f1249350d06807421a7be6.png"},2614:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/faqs-671274d0d5fdd0090752e3091275d9bf.png"},7471:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/interface-49238591196cf9e54fd5ad68297ec267.png"},97:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/lido_params-537175b3683c562d73893a34ab7a7614.png"},7793:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/stake-f2349237ab1661f08b0cb0e988f5e5de.png"},6654:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/tx_params-60880b417672bb75f9d19d1ab994a215.png"},2951:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/unstake-amount-7bb01c1db556314bc6797382c9af577c.png"},257:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/unstake-successful-a1fd6fb114c97e369a3d224daf523da4.png"},9270:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/unstake-transaction-5117356faee669f6fb7de9bfed28de17.png"},7412:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/updated-b1088392adafdf88b2dd112481d8bd95.png"},840:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/widget-e2704ae984009eee59cfd911dc01736a.png"},5677:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/Sollet_approve-c096d282c36cf5d2b47b91400e1ab00a.png"},8247:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/Step1-54f2d3f831e0087ec0a72e4b07c64e4a.png"},1353:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/Step2-530723fc48d8756f887f33d25c01466a.png"},2041:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/Step3-01d00d9fd7a655ab1e67355d4ecd6f0c.png"},1555:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/create_sollet_wallet-4c9f64f8e5baa899153cbffa5ac2d3f7.png"},3663:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/restore_existing_sollet-c1b3bdacee1dfb76d12bddc8130155da.png"},1828:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/restore_sollet_account-3af97c876a9e5c17a778545e766f3bae.png"},4041:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/sollet-disclaimer-f4e20661dae0972a47301c9660e4ed65.png"},3925:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/sollet_approve1-09ba809bdaee993ebba47b973b94ec1d.png"},3225:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/sollet_approve2-a69734033f52268da7f6ec689381aebf.png"}}]);
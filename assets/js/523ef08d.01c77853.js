"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7054],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"with CLI"},l="Manual withdraw with CLI",i={unversionedId:"manual-withdrawal/cli",id:"manual-withdrawal/cli",title:"with CLI",description:"1. Environment Setup",source:"@site/docs/manual-withdrawal/cli.md",sourceDirName:"manual-withdrawal",slug:"/manual-withdrawal/cli",permalink:"/solana-docs-preview/manual-withdrawal/cli",draft:!1,tags:[],version:"current",frontMatter:{title:"with CLI"},sidebar:"solidoSidebar",previous:{title:"Lido on Solana has been sunset",permalink:"/solana-docs-preview/"},next:{title:"with self-hosted widget",permalink:"/solana-docs-preview/manual-withdrawal/self-hosted-widget"}},s={},p=[{value:"1. Environment Setup",id:"1-environment-setup",level:2},{value:"2. Transfer stSOL to Local Account",id:"2-transfer-stsol-to-local-account",level:2},{value:"3. Withdraw stSOL",id:"3-withdraw-stsol",level:2},{value:"4. Transfer SOL to Main Account",id:"4-transfer-sol-to-main-account",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manual-withdraw-with-cli"},"Manual withdraw with CLI"),(0,r.kt)("h2",{id:"1-environment-setup"},"1. Environment Setup"),(0,r.kt)("p",null,"We've prepared a CLI in Solido to simplify your workflow. You'll need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Install Rust"),":\nFollow the instructions at ",(0,r.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust Installation"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh source \"$HOME/.cargo/env\"rustup override set 1.60.0\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Install Solana CLI v1.13.4"),":\nVisit ",(0,r.kt)("a",{parentName:"li",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"Solana CLI Installation"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(curl -sSfL https://release.solana.com/v1.13.4/install)"\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Install Solido CLI v2.0.0")," from the official GitHub repository:\nSee ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/solido/releases/tag/v2.1.0"},"Solido Releases"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recurse-submodules -b V2.1 https://github.com/lidofinance/solido solido_v2\ncd solido_v2\ncargo build --release\n")),(0,r.kt)("h2",{id:"2-transfer-stsol-to-local-account"},"2. Transfer stSOL to Local Account"),(0,r.kt)("p",null,"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Note"),": Our CLI can only work with local keys. Consider using a new account for withdrawals to keep your main wallet secure. The withdrawal operation will utilize the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SOL_ACCOUNT_PUBKEY")),": Public key of the local Solana account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"STSOL_ACCOUNT_PUBKEY")),": Public key of the child stSOL account from ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SOL_ACCOUNT_PUBKEY")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"KEYPAIR_FILE")),": Local file containing the keypair from ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SOL_ACCOUNT_PUBKEY")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"STAKE_ACCOUNT_PUBKEY")),": Public key of the child stake account from ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"SOL_ACCOUNT_PUBKEY")),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Create a new local account"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana-keygen new --outfile ./local-keypair.json\n")),(0,r.kt)("p",null,"Remember the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"KEYPAIR_FILE"))," path and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"SOL_ACCOUNT_PUBKEY"))," from the output."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Verify the new account with ",(0,r.kt)("inlineCode",{parentName:"strong"},"SOL_ACCOUNT_PUBKEY")),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana balance SOL_ACCOUNT_PUBKEY\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Transfer stSOL to the local account using ",(0,r.kt)("inlineCode",{parentName:"strong"},"SOL_ACCOUNT_PUBKEY"))," and ",(0,r.kt)("strong",{parentName:"p"},"note the transaction signature"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Identify ",(0,r.kt)("inlineCode",{parentName:"strong"},"STSOL_ACCOUNT_PUBKEY")),":"))),(0,r.kt)("p",null,"\u26a0\ufe0f After transferring stSOL, a child account for stSOL is created under your local account. To proceed, locate this address by searching your ",(0,r.kt)("strong",{parentName:"p"},"transaction signature")," on ",(0,r.kt)("a",{parentName:"p",href:"https://solscan.io/"},"Solscan")," and saving the ",(0,r.kt)("strong",{parentName:"p"},"Destination")," pubkey found under ",(0,r.kt)("strong",{parentName:"p"},"Instruction Details \u2192#3 - Token Transfer"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"STSOL_ACCOUNT_PUBKEY",src:a(6972).Z,width:"3003",height:"1735"})),(0,r.kt)("h2",{id:"3-withdraw-stsol"},"3. Withdraw stSOL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Execute the withdrawal")," to your stake account:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./target/release/solido --config ./solido_config.json --keypair-path KEYPAIR_FILE withdraw --amount-st-sol STSOL_AMOUNT\n")),(0,r.kt)("p",null,"Record the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"STAKE_ACCOUNT_PUBKEY"))," for further steps."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Deactivate the stake account"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana deactivate-stake STAKE_ACCOUNT_PUBKEY --fee-payer KEYPAIR_FILE\n")),(0,r.kt)("p",null,"\u26a0\ufe0f Wait for the epoch to end (~1-2 days) for the stake account to become inactive. Check the epoch status on ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.solana.com/"},"Solana Explorer"),"."),(0,r.kt)("h2",{id:"4-transfer-sol-to-main-account"},"4. Transfer SOL to Main Account"),(0,r.kt)("p",null,"After the epoch ends, withdraw SOL from ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"STAKE_ACCOUNT_PUBKEY"))," to your main account, referred to as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MAIN_ACCOUNT_PUBKEY")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana withdraw-stake **STAKE_ACCOUNT_PUBKEY** \\\n**MAIN_ACCOUNT_PUBKEY** SOL_AMOUNT \\\n--fee-payer **KEYPAIR_FILE**\n")))}u.isMDXComponent=!0},6972:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stsol_account_pubkey-7ad941b94e88d551ce2ce7d949d4335d.png"}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},o="Deployments",l={unversionedId:"deployments",id:"deployments",title:"Deployments",description:"This page lists official addresses at which Lido on Solana is deployed, in the",source:"@site/docs/deployments.md",sourceDirName:".",slug:"/deployments",permalink:"/solana-docs-preview/deployments",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Incentives",permalink:"/solana-docs-preview/incentives"},next:{title:"Security",permalink:"/solana-docs-preview/security"}},s={},d=[{value:"Mainnet-beta",id:"mainnet-beta",level:2},{value:"Configuration for v2:",id:"configuration-for-v2",level:4},{value:"Configuration for v1:",id:"configuration-for-v1",level:4},{value:"Related addresses:",id:"related-addresses",level:4},{value:"Multisig owners (including past owners):",id:"multisig-owners-including-past-owners",level:4},{value:"Maintainers:",id:"maintainers",level:4},{value:"Testnet",id:"testnet",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployments"},"Deployments"),(0,r.kt)("p",null,"This page lists official addresses at which Lido on Solana is deployed, in the\nform of ",(0,r.kt)("a",{parentName:"p",href:"/solana-docs-preview/operation/the-solido-utility#configuration"},"a ",(0,r.kt)("inlineCode",{parentName:"a"},"solido")," config file"),"."),(0,r.kt)("p",null,"Aside from the config keys, we list a few additional addresses that do not need\nto be part of the config file, and that can be obtained through ",(0,r.kt)("a",{parentName:"p",href:"/solana-docs-preview/operation/the-solido-utility"},(0,r.kt)("inlineCode",{parentName:"a"},"solido\nshow-solido"))," and ",(0,r.kt)("a",{parentName:"p",href:"/solana-docs-preview/operation/the-solido-utility"},(0,r.kt)("inlineCode",{parentName:"a"},"solido anker show")),", but which are useful to\nknow anyway."),(0,r.kt)("h2",{id:"mainnet-beta"},"Mainnet-beta"),(0,r.kt)("h4",{id:"configuration-for-v2"},"Configuration for v2:"),(0,r.kt)("p",null,"Solido version: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/solido/releases/tag/v2.0.0"},"v2.0.0"),"(coming soon)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster": "https://api.mainnet-beta.solana.com",\n\n  "multisig_program_id": "AAHT26ecV3FEeFmL2gDZW6FfEqjPkghHbAkNZGqwT8Ww",\n  "multisig_address": "3cXyJbjoAUNLpQsFrFJTTTp8GD3uPeabYbsCVobkQpD1",\n\n  "solido_program_id": "CrX7kMhLC3cSsXJdT7JDgqrRVWGnUpX3gfEfxxU2NVLi",\n  "solido_address": "49Yi1TKkNyYjPAFdR9LBvoHcUjuPX4Df5T5yv39w2XTn",\n  "st_sol_mint": "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj",\n\n  "validator_list_address": "GL9kqRNUTUosW3RsDoXHCuXUZn73SgQQmBvtp1ng2co4",\n  "maintainer_list_address": "5dvtr16i34hwXuCtTNHXXJ5ojeidVPXbceN9pXxrE8bn",\n  "developer_fee_address": "5Y5LVTXbtMYsibjp9uQMmCyZbtSru8zktuxGPV9eHu3m",\n}\n')),(0,r.kt)("h4",{id:"configuration-for-v1"},"Configuration for v1:"),(0,r.kt)("p",null,"Solido version: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/solido/releases/tag/v1.0.1"},"v1.0.1"),".\nAnker version: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/solido/releases/tag/v1.3.0"},"v1.3.0"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster": "https://api.mainnet-beta.solana.com",\n\n  "multisig_program_id": "AAHT26ecV3FEeFmL2gDZW6FfEqjPkghHbAkNZGqwT8Ww",\n  "multisig_address": "3cXyJbjoAUNLpQsFrFJTTTp8GD3uPeabYbsCVobkQpD1",\n\n  "solido_program_id": "CrX7kMhLC3cSsXJdT7JDgqrRVWGnUpX3gfEfxxU2NVLi",\n  "solido_address": "49Yi1TKkNyYjPAFdR9LBvoHcUjuPX4Df5T5yv39w2XTn",\n\n  "anker_program_id": "BNVB8pd4coHpY7MVcrtiHLCLst7fyDGzMtPmfJqFAhwj",\n  "anker_address": "2kDSwqbzm2zJ2GzeS1uRXpRZFR8H9A9XhNFVcnG9sEUY"\n}\n')),(0,r.kt)("h4",{id:"related-addresses"},"Related addresses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multisig PDA"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GQ3QPrB1RHPRr4Reen772WrMZkHcFM4DL5q44x1BBTFm")),(0,r.kt)("td",{parentName:"tr",align:null},"Address that the multisig can sign on behalf of, used as the manager of the Solido instance, and upgrade authority of the Solido and Anker programs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stSOL Mint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj")),(0,r.kt)("td",{parentName:"tr",align:null},"SPL token mint for stSOL, managed by Solido.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bSOL Mint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EbMg3VYAE9Krhndw7FuogpHNcEPkXVhtXr7mGisdeaur")),(0,r.kt)("td",{parentName:"tr",align:null},"SPL token mint for bSOL, managed by Anker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stake Authority"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"W1ZQRwUfSkDKy2oefRBUWph82Vr2zg9txWMA8RQazN5")),(0,r.kt)("td",{parentName:"tr",align:null},"Stake and withdraw authority of stake accounts managed by Solido.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Withdraw Authority"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GgrQiJ8s2pfHsfMbEFtNcejnzLegzZ16c9XtJ2X2FpuF")),(0,r.kt)("td",{parentName:"tr",align:null},"Withdraw authority of vote accounts of Lido validators.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Solido Reserve"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3Kwv3pEAuoe4WevPB4rgMBTZndGDb53XT7qwQKnvHPfX")),(0,r.kt)("td",{parentName:"tr",align:null},"Solido\u2019s reserve that holds deposited SOL until it is staked near the epoch boundary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Anker stSOL Reserve"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"6emGaZGVvehtMNTr1mxhw9RNPptX6BVZVypTgbuq55GN")),(0,r.kt)("td",{parentName:"tr",align:null},"Holds stSOL deposited into Anker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Anker UST Reserve"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BBuh4WDeS6GJTGdZvi2SYzZnmVJ1kZXRcudEcyuAXfUE")),(0,r.kt)("td",{parentName:"tr",align:null},"Holds Anker's proceeds until they are sent to Terra.")))),(0,r.kt)("h4",{id:"multisig-owners-including-past-owners"},"Multisig owners (including past owners):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Cv6GM219kzMrdUUdgDGVJUPW6fGosvrhsFrvmEhz3Mc6": "P2P",\n  "ENH1xvwjinUWkwEgw1hKduyAg7CrJMiKvr9nAS7wLHrp": "Staking Facilities",\n  "6CawqfAJDviZGfUpHFJgeauq6H9vhKuivMMZULZeGnPw": "Figment",\n  "AnoVUukL1fMAwEp4y2rrZV45BNHLes8ZwWsCRgEwhGH4": "ChainLayer",\n  "6S21QCmpAadEhHj3pY2RMbPMGwgYNvS4Pd7zUXoRDMdK": "Chorus One",\n  "DHLXnJdACTY83yKwnUkeoDjqi4QBbsYGa1v8tJL76ViX": "Mercurial",\n  "8Lep9addZWUWqBNj3igx4QoHe43GBfvLhGJy18jJgWQa": "Solana Foundation"\n}\n')),(0,r.kt)("h4",{id:"maintainers"},"Maintainers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "p2pokvNcNc1SFCMoUrp1UBQ6SBET7H5EdLqahz4g55k":  "P2P",\n  "2rqLzNZCBWykEs8bFMbmgqCz4eosaEfU3aRL4RJWdZgQ": "Figment",\n  "DqCZaFR6cTMvFMuz43HS77Zcz1quR93n11kT1yY6aVf4": "Staking Facilities",\n  "AR7FaVeVvUQwnLtojZNUc42H987KiHqfc4AN1qEwPUJw": "Chorus One"\n}\n')),(0,r.kt)("h2",{id:"testnet"},"Testnet"),(0,r.kt)("p",null,"There is no official testnet or devnet deployment of a recent version of the\nSolido program. For testing, you can create your own instance instead."))}u.isMDXComponent=!0}}]);
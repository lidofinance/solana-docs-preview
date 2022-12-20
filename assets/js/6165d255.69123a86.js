"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8908],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>k});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=a.createContext({}),u=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},d=function(n){var e=u(n.components);return a.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,d=o(n,["components","mdxType","originalType","parentName"]),p=u(t),k=r,m=p["".concat(l,".").concat(k)]||p[k]||c[k]||i;return t?a.createElement(m,s(s({ref:e},d),{},{components:t})):a.createElement(m,s({ref:e},d))}));function k(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:r,s[1]=o;for(var u=2;u<i;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8334:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={},s="Migration Guide (v1 \u2192 v2)",o={unversionedId:"frontend-integration/manual-instructions/index",id:"frontend-integration/manual-instructions/index",title:"Migration Guide (v1 \u2192 v2)",description:"Our smart-contract (solido) upgrade is coming soon. It will bring breaking changes to frontend integration, that's why it's critical",source:"@site/docs/frontend-integration/manual-instructions/index.md",sourceDirName:"frontend-integration/manual-instructions",slug:"/frontend-integration/manual-instructions/",permalink:"/frontend-integration/manual-instructions/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Smart-contract upgrade",permalink:"/frontend-integration/sdk/solido-v2"},next:{title:"Stake",permalink:"/frontend-integration/manual-instructions/v1/stake"}},l={},u=[{value:"Solido Changes:",id:"solido-changes",level:2},{value:"1. Validators list now is stored in a separate account",id:"1-validators-list-now-is-stored-in-a-separate-account",level:3},{value:"2. Withdraw Instruction",id:"2-withdraw-instruction",level:3}],d={toc:u};function c(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migration-guide-v1--v2"},"Migration Guide (v1 \u2192 v2)"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Our smart-contract (solido) upgrade is coming soon. It will bring ",(0,r.kt)("strong",{parentName:"p"},"breaking changes")," to frontend integration, that's why it's critical\nimportant to be ready for this upgrade, v1 instructions ",(0,r.kt)("strong",{parentName:"p"},"will stop work"),". We recommend follow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/solido-sdk/blob/b1ab2a4f5e58e7f08e1d0965d9d83f867f9ce958/src/unstake/getAccountInfo.ts#L469-L516"},"our example"),",\nsupport both version by using ",(0,r.kt)("inlineCode",{parentName:"p"},"try/catch"),". But the best is to start using ",(0,r.kt)("a",{parentName:"p",href:"/frontend-integration/sdk"},"SDK"),".")),(0,r.kt)("h2",{id:"solido-changes"},"Solido Changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Validators and Maintainers list now is stored in a separate account, you need to fetch them separately, in first version they were stored inside protocol state."),(0,r.kt)("li",{parentName:"ul"},"Validator structure was changed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pubkey")," now is stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"vote_account_address")),(0,r.kt)("li",{parentName:"ul"},"was removed ",(0,r.kt)("inlineCode",{parentName:"li"},"fee_credit"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"fee_address")," fields"))),(0,r.kt)("li",{parentName:"ul"},"Withdraw instruction fields:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changed buffer layout, had been added ",(0,r.kt)("inlineCode",{parentName:"li"},"validator_index")),(0,r.kt)("li",{parentName:"ul"},"Instruction code was ",(0,r.kt)("strong",{parentName:"li"},"2"),", now is ",(0,r.kt)("strong",{parentName:"li"},"23")," due to technical peculiarity"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validator_list")," had been added to instructions keys")))),(0,r.kt)("h3",{id:"1-validators-list-now-is-stored-in-a-separate-account"},"1. Validators list now is stored in a separate account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- ['validators', Validators] // Validator scheme\n+ ['validator_list', [32]] // PublicKey\n")),(0,r.kt)("p",null,"That's why, in order to get validator list you need to fetch additionally them after fetching solido state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const deserializedAccountInfo = deserializeUnchecked(\n  accountInfoschema,\n  Lido,\n  accountInfo.data,\n);\n\nconst validatorsList = new PublicKey(deserializedAccountInfo.validators_list);\nconst validators = await connection.getAccountInfo(validatorsList);\n\nconst deserializedValidators = deserializeUnchecked(\n    validatorsSchema,\n    AccountList,\n    validators.data,\n);\n\n// here is parsed validator list array\nconsole.log('validators', deserializedValidators.entries);\n")),(0,r.kt)("p",null,"Also changed structure of validator. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"V1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// accountInfoScheme\n[\n  // ... other fields\n  [\n    SeedRange,\n    {\n      kind: 'struct',\n      fields: [\n        ['begin', 'u64'],\n        ['end', 'u64'],\n      ],\n    },\n  ],\n  [\n    ValidatorClass,\n    {\n      kind: 'struct',\n      fields: [\n        ['fee_credit', 'u64'],\n        ['fee_address', [32]],\n        ['stake_seeds', SeedRange],\n        ['unstake_seeds', SeedRange],\n        ['stake_accounts_balance', 'u64'],\n        ['unstake_accounts_balance', 'u64'],\n        ['active', 'u8'],\n      ],\n    },\n  ],\n  [\n    PubKeyAndEntry,\n    {\n      kind: 'struct',\n      fields: [\n        ['pubkey', [32]],\n        ['entry', ValidatorClass],\n      ],\n    },\n  ],\n  [\n    Validators,\n    {\n      kind: 'struct',\n      fields: [\n        ['entries', [PubKeyAndEntry]],\n        ['maximum_entries', 'u32'],\n      ],\n    },\n  ]\n]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"V2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const validatorsSchema = new Map([\n  [\n    ListHeader,\n    {\n      kind: 'struct',\n      fields: [\n        ['account_type', 'u8'],\n        ['lido_version', 'u8'],\n        ['max_entries', 'u32'],\n      ],\n    },\n  ],\n  [\n    SeedRange,\n    {\n      kind: 'struct',\n      fields: [\n        ['begin', 'u64'],\n        ['end', 'u64'],\n      ],\n    },\n  ],\n  [\n    ValidatorClass,\n    {\n      kind: 'struct',\n      fields: [\n        ['vote_account_address', [32]],\n        ['stake_seeds', SeedRange],\n        ['unstake_seeds', SeedRange],\n        ['stake_accounts_balance', 'u64'],\n        ['unstake_accounts_balance', 'u64'],\n        ['effective_stake_balance', 'u64'],\n        ['active', 'u8'],\n      ],\n    },\n  ],\n  [\n    AccountList,\n    {\n      kind: 'struct',\n      fields: [\n        ['header', ListHeader],\n        ['entries', [ValidatorClass]],\n      ],\n    },\n  ],\n]);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Typings:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"V1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Validator = {\n  entry: {\n    vote_account_address: PublicKey;\n    stake_seeds: SeedRange;\n    unstake_seeds: SeedRange;\n    stake_accounts_balance: BN;\n    unstake_accounts_balance: BN;\n    effective_stake_balance: BN;\n    active: boolean;\n  };\n  pubkey: PublicKey;\n};\n\ntype AccountInfo = {\n // other fields\n  validators: {\n    entries: Validator[];\n  };\n};\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"V2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Validator = {\n  vote_account_address: PublicKey;\n  stake_seeds: SeedRange;\n  unstake_seeds: SeedRange;\n  stake_accounts_balance: BN;\n  unstake_accounts_balance: BN;\n  effective_stake_balance: BN;\n  active: boolean;\n};\n\ntype ValidatorsList = {\n  header: ListHeader;\n  entries: Validator[];\n};\n"))),(0,r.kt)("h3",{id:"2-withdraw-instruction"},"2. Withdraw Instruction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed buffer layout, had been added ",(0,r.kt)("inlineCode",{parentName:"li"},"validator_index"),":")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"V1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { nu64, struct, u8 } from 'buffer-layout';\n\nconst dataLayout = struct([u8('instruction'), nu64('amount')]);\n\nconst data = Buffer.alloc(dataLayout.span);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"V2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { nu64, struct, u32, u8 } from 'buffer-layout';\n\nconst dataLayout = struct([u8('instruction'), nu64('amount'), u32('validator_index')]);\n\nconst data = Buffer.alloc(dataLayout.span);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instruction code:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"V1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"dataLayout.encode(\n  {\n    instruction: 2, // old code of withdraw instruction\n    amount: new BN(amount),\n  },\n  data,\n);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"V2"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"dataLayout.encode(\n  {\n    instruction: 23, // new code of withdraw instruction\n    amount: new BN(amount),\n    validator_index: validatorIndex,\n  },\n  data,\n);\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For ",(0,r.kt)("inlineCode",{parentName:"em"},"validatorIndex")," see ",(0,r.kt)("a",{parentName:"em",href:"/frontend-integration/manual-instructions/unstake#step-4-create-withdraw-instruction"},"unstake page"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validator_list")," had been added to instructions keys:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"  const keys = [\n    { pubkey: solidoInstanceId, isSigner: false, isWritable: true },\n    { pubkey: payerAddress, isSigner: true, isWritable: false },\n    { pubkey: senderStSolAccountAddress, isSigner: false, isWritable: true },\n    { pubkey: stSolMintAddress, isSigner: false, isWritable: true },\n    { pubkey: new PublicKey(validator.pubkey.toArray('le')), isSigner: false, isWritable: false },\n    { pubkey: validatorStakeAccount, isSigner: false, isWritable: true },\n    { pubkey: stakeAccount, isSigner: true, isWritable: true },\n    { pubkey: stakeAuthority, isSigner: false, isWritable: false },\n+   { pubkey: new PublicKey(accountInfo.validators_list), isSigner: false, isWritable: true },\n    { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },\n    { pubkey: SYSVAR_CLOCK_PUBKEY, isSigner: false, isWritable: false },\n    { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },\n    { pubkey: StakeProgram.programId, isSigner: false, isWritable: false },\n  ];\n")),(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Full change of account schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"  const schema = new Map([\n    [\n      ExchangeRate,\n      {\n        kind: 'struct',\n        fields: [\n          ['computed_in_epoch', 'u64'],\n          ['st_sol_supply', 'u64'],\n          ['sol_balance', 'u64'],\n        ],\n      },\n    ],\n    [\n      LamportsHistogram,\n      {\n        kind: 'struct',\n        fields: [\n          ['counts1', 'u64'],\n          ['counts2', 'u64'],\n          ['counts3', 'u64'],\n          ['counts4', 'u64'],\n          ['counts5', 'u64'],\n          ['counts6', 'u64'],\n          ['counts7', 'u64'],\n          ['counts8', 'u64'],\n          ['counts9', 'u64'],\n          ['counts10', 'u64'],\n          ['counts11', 'u64'],\n          ['counts12', 'u64'],\n          ['total', 'u64'],\n        ],\n      },\n    ],\n    [\n      WithdrawMetric,\n      {\n        kind: 'struct',\n        fields: [\n          ['total_st_sol_amount', 'u64'],\n          ['total_sol_amount', 'u64'],\n          ['count', 'u64'],\n        ],\n      },\n    ],\n    [\n      Metrics,\n      {\n        kind: 'struct',\n        fields: [\n          ['fee_treasury_sol_total', 'u64'],\n          ['fee_validation_sol_total', 'u64'],\n          ['fee_developer_sol_total', 'u64'],\n          ['st_sol_appreciation_sol_total', 'u64'],\n          ['fee_treasury_st_sol_total', 'u64'],\n          ['fee_validation_st_sol_total', 'u64'],\n          ['fee_developer_st_sol_total', 'u64'],\n          ['deposit_amount', LamportsHistogram],\n          ['withdraw_amount', WithdrawMetric],\n        ],\n      },\n    ],\n-    [\n-      SeedRange,\n-      {\n-        kind: 'struct',\n-        fields: [\n-          ['begin', 'u64'],\n-          ['end', 'u64'],\n-        ],\n-      },\n-    ],\n-    [\n-      Validator,\n-      {\n-        kind: 'struct',\n-        fields: [\n-          ['fee_credit', 'u64'],\n-          ['fee_address', 'u256'],\n-          ['stake_seeds', SeedRange],\n-          ['unstake_seeds', SeedRange],\n-          ['stake_accounts_balance', 'u64'],\n-          ['unstake_accounts_balance', 'u64'],\n-          ['active', 'u8'],\n-        ],\n-      },\n-    ],\n-    [\n-      PubKeyAndEntry,\n-      {\n-        kind: 'struct',\n-        fields: [\n-          ['pubkey', 'u256'],\n-          ['entry', Validator],\n-        ],\n-      },\n-    ],\n-    [\n-      PubKeyAndEntryMaintainer,\n-      {\n-        kind: 'struct',\n-        fields: [\n-          ['pubkey', 'u256'],\n-          ['entry', [0]],\n-        ],\n-      },\n-    ],\n    [\n      RewardDistribution,\n      {\n        kind: 'struct',\n        fields: [\n          ['treasury_fee', 'u32'],\n-          ['validation_fee', 'u32'],\n          ['developer_fee', 'u32'],\n          ['st_sol_appreciation', 'u32'],\n        ],\n      },\n    ],\n    [\n      FeeRecipients,\n      {\n        kind: 'struct',\n        fields: [\n-          ['treasury_account', 'u256'],\n+          ['treasury_account', [32]],\n-          ['developer_account', 'u256'],\n+          ['developer_account', [32]],\n        ],\n      },\n    ],\n-    [\n-      Validators,\n-      {\n-        kind: 'struct',\n-        fields: [\n-          ['entries', [PubKeyAndEntry]],\n-          ['maximum_entries', 'u32'],\n-        ],\n-      },\n-    ],\n-    [\n-      Maintainers,\n-      {\n-        kind: 'struct',\n-        fields: [\n-          ['entries', [PubKeyAndEntryMaintainer]],\n-          ['maximum_entries', 'u32'],\n-        ],\n-      },\n-    ],\n    [\n      Lido,\n      {\n        kind: 'struct',\n        fields: [\n+          ['account_type', 'u8'],\n\n          ['lido_version', 'u8'],\n\n-          ['manager', 'u256'],\n+          ['manager', [32]],\n\n-          ['st_sol_mint', 'u256'],\n+          ['st_sol_mint', [32]],\n\n          ['exchange_rate', ExchangeRate],\n\n          ['sol_reserve_authority_bump_seed', 'u8'],\n          ['stake_authority_bump_seed', 'u8'],\n          ['mint_authority_bump_seed', 'u8'],\n          ['rewards_withdraw_authority_bump_seed', 'u8'],\n\n          ['reward_distribution', RewardDistribution],\n\n          ['fee_recipients', FeeRecipients],\n\n          ['metrics', Metrics],\n\n-          ['validators', Validators],\n+          ['validator_list', [32]],\n\n-          ['maintainers', Maintainers],\n+          ['maintainer_list', [32]],\n\n+          ['max_commission_percentage', 'u8'],\n        ],\n      },\n    ],\n  ]);\n  \n+ const validatorsSchema = new Map([\n+   [\n+     ListHeader,\n+     {\n+       kind: 'struct',\n+       fields: [\n+         ['account_type', 'u8'],\n+         ['lido_version', 'u8'],\n+         ['max_entries', 'u32'],\n+       ],\n+     },\n+   ],\n+   [\n+     SeedRange,\n+     {\n+       kind: 'struct',\n+       fields: [\n+         ['begin', 'u64'],\n+         ['end', 'u64'],\n+       ],\n+     },\n+   ],\n+   [\n+     ValidatorClass,\n+     {\n+       kind: 'struct',\n+       fields: [\n+         ['vote_account_address', [32]],\n+         ['stake_seeds', SeedRange],\n+         ['unstake_seeds', SeedRange],\n+         ['stake_accounts_balance', 'u64'],\n+         ['unstake_accounts_balance', 'u64'],\n+         ['effective_stake_balance', 'u64'],\n+         ['active', 'u8'],\n+       ],\n+     },\n+   ],\n+   [\n+     AccountList,\n+     {\n+       kind: 'struct',\n+       fields: [\n+         ['header', ListHeader],\n+         ['entries', [ValidatorClass]],\n+       ],\n+     },\n+   ],\n+ ]);\n"))))}c.isMDXComponent=!0}}]);
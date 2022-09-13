"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},s="Stake",i={unversionedId:"frontend-integration/manual-instructions/v1/stake",id:"frontend-integration/manual-instructions/v1/stake",title:"Stake",description:"We are migrating to second version of procotol (solido), so this instructions will stop work, please see migration guide for being ready to version 2.",source:"@site/docs/frontend-integration/manual-instructions/v1/stake.md",sourceDirName:"frontend-integration/manual-instructions/v1",slug:"/frontend-integration/manual-instructions/v1/stake",permalink:"/solana-docs-preview/frontend-integration/manual-instructions/v1/stake",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidoSidebar",previous:{title:"Migration Guide (v1 \u2192 v2)",permalink:"/solana-docs-preview/frontend-integration/manual-instructions/migration-guide-2x"},next:{title:"UnStake",permalink:"/solana-docs-preview/frontend-integration/manual-instructions/v1/unstake"}},c={},l=[{value:"Step 1 : Connecting to a Solana wallet",id:"step-1--connecting-to-a-solana-wallet",level:2},{value:"Step 2 : Fetching Lido program state to retrieve relevant data",id:"step-2--fetching-lido-program-state-to-retrieve-relevant-data",level:2},{value:"Step 3 : Ensure an stSOL recipient account exists",id:"step-3--ensure-an-stsol-recipient-account-exists",level:2},{value:"Fetch all accounts for the stSOL mint of the staker",id:"fetch-all-accounts-for-the-stsol-mint-of-the-staker",level:3},{value:"If no account exists",id:"if-no-account-exists",level:3},{value:"Step 4 : Create Deposit Instruction",id:"step-4--create-deposit-instruction",level:2},{value:"Step 5 : Sign and send Transaction",id:"step-5--sign-and-send-transaction",level:2},{value:"Useful Nuggets",id:"useful-nuggets",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stake"},"Stake"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"We are migrating to second version of procotol (solido), so this instructions will stop work, please see ",(0,r.kt)("a",{parentName:"p",href:"/frontend-integration/manual-instructions//migration-guide-2x"},"migration guide")," for being ready to version 2.\nOr see ",(0,r.kt)("a",{parentName:"p",href:"/frontend-integration/manual-instructions/unstake"},"new version")," if you are new.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We highly recommend use our ",(0,r.kt)("a",{parentName:"p",href:"/frontend-integration/sdk"},"SDK"),", so we could support you better in case of some problems.\nAlso, integration with SDK is much easier & more simple than manually.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Live integration on Mainnet")," - ",(0,r.kt)("a",{parentName:"p",href:"https://solana.lido.fi"},"http://solana.lido.fi/")),(0,r.kt)("p",null,"In this document, we walk through the steps to integrate a web application with the Lido deposit function."),(0,r.kt)("p",null,"This guide assumes the web application is written in JavaScript / Typescript and has ready access to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library"},"@solana/spl-token"),"  library."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The code snippets present in this doc might not be up-to-date with the current codebase. Please verify once before using.")),(0,r.kt)("h2",{id:"step-1--connecting-to-a-solana-wallet"},"Step 1 : Connecting to a Solana wallet"),(0,r.kt)("p",null,"Solana wallets that are known to work well with the Lido program are Phantom, Solflare, Ledger, Sollet and Solong."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The wallet should expose the following spec",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connect")," function that triggers a connection request to the wallet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"publicKey")," to retrieve the public key of the connected account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signTransaction")," function to send the transaction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disconnect")," function to trigger a disconnection request"),(0,r.kt)("li",{parentName:"ul"},'Optional -  throws "connect" & "disconnect" events')))),(0,r.kt)("p",null,"The next step assumes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a wallet is loaded in the interface"),(0,r.kt)("li",{parentName:"ul"},"and you have access to the variable ",(0,r.kt)("inlineCode",{parentName:"li"},"LIDO_ADDRESS")," which is the address of the account that stores the state of the deployed Lido Program.")),(0,r.kt)("h2",{id:"step-2--fetching-lido-program-state-to-retrieve-relevant-data"},"Step 2 : Fetching Lido program state to retrieve relevant data"),(0,r.kt)("p",null,"Install and require ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@solana/web3.js"},"@solana/web3.js")," library in your program"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @solana/web3.js\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"getAccountInfo(LIDO_ADDRESS)")," ",(0,r.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getAccountInfo"},"function")," from this library to fetch the Lido program data (in the form of a buffer)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const accountInfo = await connection.getAccountInfo(LIDO_ADDRESS);\n")),(0,r.kt)("p",null,"The data structure storing the Lido ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ChorusOne/solido/blob/v1.0.0/program/src/state.rs#L188"},"state(v1.0.0)")," has the form"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub struct Lido {\n    /// Version number for the Lido\n    pub lido_version: u8,\n    /// Manager of the Lido program, able to execute administrative functions\n    #[serde(serialize_with = "serialize_b58")]\n    pub manager: Pubkey,\n    /// The SPL Token mint address for stSOL.\n    #[serde(serialize_with = "serialize_b58")]\n    pub st_sol_mint: Pubkey,\n    /// Exchange rate to use when depositing.\n    pub exchange_rate: ExchangeRate,\n    /// Bump seeds for signing messages on behalf of the authority\n    pub sol_reserve_account_bump_seed: u8,\n    pub stake_authority_bump_seed: u8,\n    pub mint_authority_bump_seed: u8,\n    pub rewards_withdraw_authority_bump_seed: u8,\n    /// How rewards are distributed.\n    pub reward_distribution: RewardDistribution,\n    /// Accounts of the fee recipients.\n    pub fee_recipients: FeeRecipients,\n    /// Metrics for informational purposes.\n    ///\n    /// Metrics are only written to, no program logic should depend on these values.\n    /// An off-chain program can load a snapshot of the `Lido` struct, and expose\n    /// these metrics.\n    pub metrics: Metrics,\n    /// Map of enrolled validators, maps their vote account to `Validator` details.\n    pub validators: Validators,\n    /// The set of maintainers.\n    ///\n    /// Maintainers are granted low security risk privileges. Maintainers are\n    /// expected to run the maintenance daemon, that invokes the maintenance\n    /// operations. These are gated on the signer being present in this set.\n    /// In the future we plan to make maintenance operations callable by anybody.\n    pub maintainers: Maintainers,\n}\n')),(0,r.kt)("p",null,"Create a borsh schema to deserialize the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Lido {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass SeedRange {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass Validator {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass PubKeyAndEntry {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass PubKeyAndEntryMaintainer {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass RewardDistribution {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass FeeRecipients {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass Validators {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass Maintainers {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass ExchangeRate {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass Metrics {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass LamportsHistogram {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nclass WithdrawMetric {\n  constructor(data) {\n    Object.assign(this, data);\n  }\n}\nconst schema = new Map([\n  [\n    ExchangeRate,\n    {\n      kind: 'struct',\n      fields: [\n        ['computed_in_epoch', 'u64'],\n        ['st_sol_supply', 'u64'],\n        ['sol_balance', 'u64'],\n      ],\n    },\n  ],\n  [\n    LamportsHistogram,\n    {\n      kind: 'struct',\n      fields: [\n        ['counts1', 'u64'],\n        ['counts2', 'u64'],\n        ['counts3', 'u64'],\n        ['counts4', 'u64'],\n        ['counts5', 'u64'],\n        ['counts6', 'u64'],\n        ['counts7', 'u64'],\n        ['counts8', 'u64'],\n        ['counts9', 'u64'],\n        ['counts10', 'u64'],\n        ['counts11', 'u64'],\n        ['counts12', 'u64'],\n        ['total', 'u64'],\n      ],\n    },\n  ],\n  [\n    WithdrawMetric,\n    {\n      kind: 'struct',\n      fields: [\n        ['total_st_sol_amount', 'u64'],\n        ['total_sol_amount', 'u64'],\n        ['count', 'u64'],\n      ],\n    },\n  ],\n  [\n    Metrics,\n    {\n      kind: 'struct',\n      fields: [\n        ['fee_treasury_sol_total', 'u64'],\n        ['fee_validation_sol_total', 'u64'],\n        ['fee_developer_sol_total', 'u64'],\n        ['st_sol_appreciation_sol_total', 'u64'],\n        ['fee_treasury_st_sol_total', 'u64'],\n        ['fee_validation_st_sol_total', 'u64'],\n        ['fee_developer_st_sol_total', 'u64'],\n        ['deposit_amount', LamportsHistogram],\n        ['withdraw_amount', WithdrawMetric],\n      ],\n    },\n  ],\n  [\n    SeedRange,\n    {\n      kind: 'struct',\n      fields: [\n        ['begin', 'u64'],\n        ['end', 'u64'],\n      ],\n    },\n  ],\n  [\n    Validator,\n    {\n      kind: 'struct',\n      fields: [\n        ['fee_credit', 'u64'],\n        ['fee_address', 'u256'],\n        ['stake_seeds', SeedRange],\n        ['unstake_seeds', SeedRange],\n        ['stake_accounts_balance', 'u64'],\n        ['unstake_accounts_balance', 'u64'],\n        ['active', 'u8'],\n      ],\n    },\n  ],\n  [\n    PubKeyAndEntry,\n    {\n      kind: 'struct',\n      fields: [\n        ['pubkey', 'u256'],\n        ['entry', Validator],\n      ],\n    },\n  ],\n  [\n    PubKeyAndEntryMaintainer,\n    {\n      kind: 'struct',\n      fields: [\n        ['pubkey', 'u256'],\n        ['entry', [0]],\n      ],\n    },\n  ],\n  [\n    RewardDistribution,\n    {\n      kind: 'struct',\n      fields: [\n        ['treasury_fee', 'u32'],\n        ['validation_fee', 'u32'],\n        ['developer_fee', 'u32'],\n        ['st_sol_appreciation', 'u32'],\n      ],\n    },\n  ],\n  [\n    FeeRecipients,\n    {\n      kind: 'struct',\n      fields: [\n        ['treasury_account', 'u256'],\n        ['developer_account', 'u256'],\n      ],\n    },\n  ],\n  [\n    Validators,\n    {\n      kind: 'struct',\n      fields: [\n        ['entries', [PubKeyAndEntry]],\n        ['maximum_entries', 'u32'],\n      ],\n    },\n  ],\n  [\n    Maintainers,\n    {\n      kind: 'struct',\n      fields: [\n        ['entries', [PubKeyAndEntryMaintainer]],\n        ['maximum_entries', 'u32'],\n      ],\n    },\n  ],\n  [\n    Lido,\n    {\n      kind: 'struct',\n      fields: [\n        ['lido_version', 'u8'],\n        ['manager', 'u256'],\n        ['st_sol_mint', 'u256'],\n        ['exchange_rate', ExchangeRate],\n        ['sol_reserve_authority_bump_seed', 'u8'],\n        ['stake_authority_bump_seed', 'u8'],\n        ['mint_authority_bump_seed', 'u8'],\n        ['rewards_withdraw_authority_bump_seed', 'u8'],\n        ['reward_distribution', RewardDistribution],\n        ['fee_recipients', FeeRecipients],\n        ['metrics', Metrics],\n        ['validators', Validators],\n        ['maintainers', Maintainers],\n      ],\n    },\n  ],\n]);\n")),(0,r.kt)("p",null,"Deserialize the data using the above schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { deserializeUnchecked } from 'borsh';\n// We use deserializeUnchecked because Validators and Maintainers entries' length varies with time\n// It deserializes object from bytes using schema, without checking the length read\nconst deserializedAccountInfo = deserializeUnchecked(\n  schema,\n  Lido,\n  accountInfo.data,\n);\n")),(0,r.kt)("p",null,"Calculate the reserve authority and mint authority address by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"LIDO_ADDRESS")," buffer and ",(0,r.kt)("inlineCode",{parentName:"p"},"reserve_account")," for reserve authority and ",(0,r.kt)("inlineCode",{parentName:"p"},"mint_authority")," for mint authority buffer as seeds to ",(0,r.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/classes/PublicKey.html#findProgramAddress"},"findProgramAddress()")," along with the ",(0,r.kt)("inlineCode",{parentName:"p"},"PROGRAM_ID")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { PublicKey } from '@solana/web3.js';\n// Reserve authority\nconst bufferArray = [\n  LIDO_ADDRESS.toBuffer(),\n  Buffer.from('reserve_account'),\n];\nconst [reserveAccount] = await PublicKey.findProgramAddress(bufferArray, PROGRAM_ID);\n// Mint authority\nconst bufferArray = [\n  LIDO_ADDRESS.toBuffer(),\n  Buffer.from('mint_authority'),\n];\nconst [mintAuthority] = await PublicKey.findProgramAddress(bufferArray, PROGRAM_ID);\n")),(0,r.kt)("h2",{id:"step-3--ensure-an-stsol-recipient-account-exists"},"Step 3 : Ensure an stSOL recipient account exists"),(0,r.kt)("p",null,"The Deposit instruction requires a recipient address - that will receive stSOL as liquid representation of the deposited SOL.\nBefore we make a deposit from a user's wallet, we need to make sure such a recipient account exists - for the depositor to receive stSOL."),(0,r.kt)("h3",{id:"fetch-all-accounts-for-the-stsol-mint-of-the-staker"},"Fetch all accounts for the stSOL mint of the staker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If at least one such account exists, select the first one and proceed to the next step"),(0,r.kt)("li",{parentName:"ul"},"If no such account exists, continue with this section.")),(0,r.kt)("h3",{id:"if-no-account-exists"},"If no account exists"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetch the associated token account for the payer account"),(0,r.kt)("li",{parentName:"ul"},"Add the instruction to create the new associated token account"),(0,r.kt)("li",{parentName:"ul"},"Return the associated token account's public key")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { AccountLayout, Token, ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from '@solana/spl-token';\nconst { value: accounts } = await connection.getTokenAccountsByOwner(payer, {\n  mint: stSolMint,\n});\nconst recipient = accounts[0];\nif (recipient) {\n  return recipient.pubkey;\n}\n// Creating the associated token account if not already exist\nconst associatedStSolAccount = await Token.getAssociatedTokenAddress(\n  ASSOCIATED_TOKEN_PROGRAM_ID,\n  TOKEN_PROGRAM_ID,\n  stSolMint,\n  payer,\n);\ntransaction.add(\n  Token.createAssociatedTokenAccountInstruction(\n    ASSOCIATED_TOKEN_PROGRAM_ID,\n    TOKEN_PROGRAM_ID,\n    stSolMint,\n    associatedStSolAccount,\n    payer,\n    payer,\n  ),\n);\nreturn associatedStSolAccount;\n")),(0,r.kt)("h2",{id:"step-4--create-deposit-instruction"},"Step 4 : Create Deposit Instruction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create the buffer layout in the format of ",(0,r.kt)("inlineCode",{parentName:"li"},"{ instruction_code: 1 byte, amount: 8 bytes}")),(0,r.kt)("li",{parentName:"ul"},"Encode the deposit data using the buffer layout",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import * as BufferLayout from 'buffer-layout';\nimport BN from 'bn.js';\nconst dataLayout = BufferLayout.struct([\n  BufferLayout.u8('instruction'),\n  BufferLayout.nu64('amount'), // little endian\n]);\nconst data = Buffer.alloc(dataLayout.span);\ndataLayout.encode(\n  {\n    instruction: 1, // 1 for deposit instruction\n    amount: new BN(amount),\n  },\n  data,\n);\n"))),(0,r.kt)("li",{parentName:"ul"},"Set all ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChorusOne/solido/blob/v1.0.0/program/src/instruction.rs#L167"},"keys")," for the deposit instruction using the program data we fetch earlier",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const keys = [\n  {\n    pubkey: lidoAddress,\n    isSigner: false,\n    isWritable: true,\n  },\n  { pubkey: payer, isSigner: true, isWritable: true },\n  {\n    pubkey: recipient,\n    isSigner: false,\n    isWritable: true,\n  },\n  {\n    pubkey: stSolMint,\n    isSigner: false,\n    isWritable: true,\n  },\n  { pubkey: reserveAccount, isSigner: false, isWritable: true },\n  { pubkey: mintAuthority, isSigner: false, isWritable: false },\n  { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },\n  { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },\n];\n"))),(0,r.kt)("li",{parentName:"ul"},"Add the instruction to the transaction",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transaction.add(\n  new TransactionInstruction({\n    keys,\n    programId: PROGRAM_ID,\n    data,\n  }),\n);\n")))),(0,r.kt)("h2",{id:"step-5--sign-and-send-transaction"},"Step 5 : Sign and send Transaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new transaction with the fee payer as the staker"),(0,r.kt)("li",{parentName:"ul"},"Add all the above instructions in the sequence"),(0,r.kt)("li",{parentName:"ul"},"If we have created a new stSOL, partially sign the transaction using the ",(0,r.kt)("inlineCode",{parentName:"li"},"newAccount's keypair")),(0,r.kt)("li",{parentName:"ul"},"Sign the transaction"),(0,r.kt)("li",{parentName:"ul"},"Send the transaction")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Create new transaction\nconst transaction = new Transaction({ feePayer: payer });\n// Set recent blockhash\nconst { blockhash } = await connection.getRecentBlockhash();\ntransaction.recentBlockhash = blockhash;\n// Add all the above instructions\nconst recipient = await ensureTokenAccount(\n  connection,\n  transaction,\n  payer,\n  stSolMint\n);\nawait depositInstruction(payer, amount, recipient, transaction, config);\n// Sign the transaction using the wallet\nconst signed = wallet.signTransaction(transaction);\n// Send the serialized signed transaction to the network\nconnection.sendRawTransaction(\n  signed.serialize(),\n);\n")),(0,r.kt)("h2",{id:"useful-nuggets"},"Useful Nuggets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How to get the total number of ",(0,r.kt)("inlineCode",{parentName:"strong"},"stSOL")," holders?"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Filter out stSOL token addresses\nconst memcmpFilter = { memcmp: { bytes: ST_SOL_MINT.toString(), offset: 0 } };\nconst config = {\n  filters: [{ dataSize: 165 }, memcmpFilter],\n  encoding: 'jsonParsed',\n};\n// Get program accounts using the above filters\nconst accounts = await connection.getParsedProgramAccounts(\n  TOKEN_PROGRAM_ID,\n  config,\n);\nconst totalStSolHolders = accounts.length;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How to get the stSOL/SOL exchange rate for the current epoch?"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  const accountInfo = await getAccountInfo(connection, lidoAddress);\n  // Fetch SOL and stSOL balance\n  const totalSolInLamports = accountInfo.exchange_rate.sol_balance.toNumber();\n  const stSolSupplyInLamports =\n    accountInfo.exchange_rate.st_sol_supply.toNumber();\n// Calculate the stSOL/SOL exchange rate\nconst exchangeRate = totalStSolSupplyInLamports/totalSolInLamports;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"How to get the current amount of SOL staked with Lido?"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  const accountInfo = await getAccountInfo(connection, lidoAddress);\n  // Find reserve account pubkey\n  const bufferArray = [\n    lidoAddress.toBuffer(),\n    Buffer.from('reserve_account'),\n  ];\n  const [reserveAccount] = await PublicKey.findProgramAddress(bufferArray, programId);\n  // Fetch balance and rent for reserve account\n  const reserveAccountInfo = await connection.getAccountInfo(reserveAccount);\n  const reserveAccountRent = await connection.getMinimumBalanceForRentExemption(\n    reserveAccountInfo.data.byteLength,\n  );\n  const reserveAccountBalanceInLamports =\n    reserveAccountInfo.lamports - reserveAccountRent;\n  const validatorsStakeAccountsBalanceInLamports = accountInfo.validators.entries\n    .map((pubKeyAndEntry) => pubKeyAndEntry.entry)\n    .map((validator) => validator.stake_accounts_balance.toNumber())\n    .reduce((acc, current) => acc + current, 0);\n  const totalStakedInLamports = reserveAccountBalanceInLamports + validatorsStakeAccountsBalanceInLamports;\n")))))}d.isMDXComponent=!0}}]);
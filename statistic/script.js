// import {MarketplaceFactory} from "../core/factory/MarketplaceFactory";
// import Web3ServiceWrapper from "../core/services/Web3/Web3ServiceWrapper.ts";
// import HttpServiceWrapper from "../core/services/Http/HttpServiceWrapper.ts";

// import { MarketplaceFactory } from "../core/factory/MarketplaceFactory.ts";


// // const MarketplaceFactory = require("../core/factory/MarketplaceFactory.ts");
// // const Web3ServiceWrapper = require("../core/services/Web3/Web3ServiceWrapper/Web3ServiceWrapper.ts");
// // const HttpServiceWrapper = require( "../core/services/Http/HttpServiceWrapper/HttpServiceWrapper.ts");

// const nftUrl = new URL("https://opensea.io/assets/ethereum/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258/54165");

// const market = MarketplaceFactory(
//     Web3ServiceWrapper,
//     HttpServiceWrapper,
//     nftUrl
// );

// var m = market.create();

// marketplace.getMetadata(nftUrl).then(x => console.log(x));

import ether from "ethers";
import provider from "@metamask/providers";

// import pkg from "../src/core/factory/Market.js";
import {MarketplaceFactory} from "./build/MarketplaceFactory.js";
const {Market} = pkg;

// const ether = require("ethers");
// const provider = require("@metamask/providers");
const { StreamProvider, initializeProvider  } = provider;

import LocalMessageDuplexStream from "post-message-stream";

// const LocalMessageDuplexStream = require('post-message-stream');


// import { MarketplaceFactory } from "../src/core/factory/MarketplaceFactory";
// import pkg from "../src/core/factory/Bla.js";
const {bla } = pkg;

// const bla = require("../src/core/factory/MarketplaceFactory.ts");


const metamaskStream = new LocalMessageDuplexStream({
    name: 'inpage',
    target: 'contentscript',
  });

initializeProvider(
    {
        connectionStream: metamaskStream,
    }
)

console.log(MarketplaceFactory);
// const { ethereum } = window;

// const { StreamProvider, initializeProvider  } = provider;
// const { Duplex } = require('stream');

// console.log(firefox);

// firefox.runtime.id = "1111";

// const p = provider.createExternalExtensionProvider();


// console.log(p.isConnected);

// // const duplex = new Duplex();

// const duplex = new Duplex({
//     write: (chunk, encoding, next) => {
//       next();
//     },
//     read: ( size ) =>{
//     }
//   });

  
// // console.log(duplex);
// const streamProvider = new StreamProvider(duplex,{
//     jsonRpcStreamName: 'stream',
// });

// const init = async () =>{
//     await streamProvider.initialize();
// }

// init();

// console.log(streamProvider.isConnected());
// console.log(streamProvider);


// const { StreamProvider, initializeProvider  } = provider;

// const stream = StreamProvider({name: 'inpage', target: 'contentscript'});

// // provider.createExternalExtensionProvider()
// initializeProvider({
//     connectionStream:  stream,
// })

// console.log(window);
// console.log("hello world");
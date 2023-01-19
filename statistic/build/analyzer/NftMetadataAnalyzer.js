"use strict";
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// ../src/core/analyzer/NftMetadataAnalyzer.ts
var NftMetadataAnalyzer_exports = {};
__export(NftMetadataAnalyzer_exports, {
    NftMetadataAnalyzer: function() {
        return NftMetadataAnalyzer;
    }
});
module.exports = __toCommonJS(NftMetadataAnalyzer_exports);
// ../src/core/enums/DescentralizedStorageEnum.ts
var DescentralizedStorageEnum = /* @__PURE__ */ function(DescentralizedStorageEnum2) {
    DescentralizedStorageEnum2["Ipfs"] = "ipfs.io";
    DescentralizedStorageEnum2["Arweave"] = "arweave.net";
    DescentralizedStorageEnum2["Storj"] = "storj.io";
    DescentralizedStorageEnum2["Pinata"] = "pinata.cloud";
    DescentralizedStorageEnum2["MyPinata"] = "ikzttp.mypinata.cloud";
    DescentralizedStorageEnum2["Filecoin"] = "filecoin.io";
    DescentralizedStorageEnum2["Skynet"] = "siasky.net";
    DescentralizedStorageEnum2["Zerochain"] = "0chain.net";
    DescentralizedStorageEnum2["CrustNetwork"] = "crust.network";
    DescentralizedStorageEnum2["Swarm"] = "gateway.ethswarm";
    return DescentralizedStorageEnum2;
}(DescentralizedStorageEnum || {});
// ../src/core/analyzer/NftMetadataAnalyzer.ts
var NftMetadataAnalyzer = /*#__PURE__*/ function() {
    function NftMetadataAnalyzer() {
        _classCallCheck(this, NftMetadataAnalyzer);
    }
    _createClass(NftMetadataAnalyzer, null, [
        {
            key: "checkIfUrlIsDecentralized",
            value: function checkIfUrlIsDecentralized(jsonMetadataUrl, imageUrl) {
                var descentralizedStorageUrls = Object.values(DescentralizedStorageEnum);
                var isDecentralized = descentralizedStorageUrls.includes(jsonMetadataUrl.hostname) || jsonMetadataUrl.protocol === "ipfs:";
                var analyzedNftContract = {
                    isDecentralized: isDecentralized
                };
                return analyzedNftContract;
            }
        }
    ]);
    return NftMetadataAnalyzer;
}();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    NftMetadataAnalyzer: NftMetadataAnalyzer
});

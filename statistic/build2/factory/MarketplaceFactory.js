"use strict";
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
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
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
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
// ../src/core/factory/MarketplaceFactory.ts
var MarketplaceFactory_exports = {};
__export(MarketplaceFactory_exports, {
    MarketplaceFactory: function() {
        return MarketplaceFactory;
    }
});
module.exports = __toCommonJS(MarketplaceFactory_exports);
// ../src/core/marketplaces/OpenSea.ts
var OpenSea = /*#__PURE__*/ function() {
    function OpenSea(web3Services, httpServices) {
        _classCallCheck(this, OpenSea);
        this.web3ServiceWrapper = web3Services;
        this.httpServiceWrapper = httpServices;
    }
    _createClass(OpenSea, [
        {
            key: "getMetadata",
            value: function getMetadata(nftUrl) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var _this_getContractAddressAndTokenIdFromUrl, contractAddress, tokenId, nftMetadata, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_getContractAddressAndTokenIdFromUrl = _slicedToArray(_this.getContractAddressAndTokenIdFromUrl(nftUrl), 2), contractAddress = _this_getContractAddressAndTokenIdFromUrl[0], tokenId = _this_getContractAddressAndTokenIdFromUrl[1];
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this.web3ServiceWrapper.nftMetadataService.getNftMetadata(contractAddress, tokenId)
                                ];
                            case 2:
                                nftMetadata = _state.sent();
                                return [
                                    2,
                                    nftMetadata
                                ];
                            case 3:
                                error = _state.sent();
                                console.log(error);
                                throw new Error("Unexpected error when requesting token metadata");
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getContractAddressAndTokenIdFromUrl",
            value: function getContractAddressAndTokenIdFromUrl(nftUrl) {
                try {
                    var pathname = nftUrl.pathname;
                    var routeParams = pathname.split("/");
                    var contractAddress = routeParams[3];
                    var tokenId = routeParams[4];
                    return [
                        contractAddress,
                        tokenId
                    ];
                } catch (error) {
                    throw new Error("Error when trying to parse URL");
                }
            }
        }
    ]);
    return OpenSea;
}();
// ../src/core/marketplaces/Rarible.ts
var Rarible = /*#__PURE__*/ function() {
    function Rarible(web3Services, httpServices) {
        _classCallCheck(this, Rarible);
        this.web3ServiceWrapper = web3Services;
        this.httpServiceWrapper = httpServices;
    }
    _createClass(Rarible, [
        {
            key: "getMetadata",
            value: function getMetadata(nftUrl) {
                var _this = this;
                return _asyncToGenerator(function() {
                    var _this_getContractAddressAndTokenIdFromUrl, contractAddress, tokenId, nftMetadata, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this_getContractAddressAndTokenIdFromUrl = _slicedToArray(_this.getContractAddressAndTokenIdFromUrl(nftUrl), 2), contractAddress = _this_getContractAddressAndTokenIdFromUrl[0], tokenId = _this_getContractAddressAndTokenIdFromUrl[1];
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    4
                                ]);
                                return [
                                    4,
                                    _this.web3ServiceWrapper.nftMetadataService.getNftMetadata(contractAddress, tokenId)
                                ];
                            case 2:
                                nftMetadata = _state.sent();
                                return [
                                    2,
                                    nftMetadata
                                ];
                            case 3:
                                error = _state.sent();
                                console.log(error);
                                throw new Error("Unexpected error when trying to interact with smart contract. ");
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getContractAddressAndTokenIdFromUrl",
            value: function getContractAddressAndTokenIdFromUrl(nftUrl) {
                try {
                    var pathname = nftUrl.pathname;
                    var routeParams = pathname.split("/");
                    var tokenParams = routeParams[2].split(":");
                    var contractAddress = tokenParams[0];
                    var tokenId = tokenParams[1];
                    return [
                        contractAddress,
                        tokenId
                    ];
                } catch (error) {
                    throw new Error("Error when trying to parse URL");
                }
            }
        }
    ]);
    return Rarible;
}();
// ../src/core/factory/MarketplaceFactory.ts
var MarketplaceFactory = /*#__PURE__*/ function() {
    function MarketplaceFactory(web3Services, httpServices, nftUrl) {
        _classCallCheck(this, MarketplaceFactory);
        this.web3Services = web3Services;
        this.httpServiceWrapper = httpServices;
        this.nftUrl = nftUrl;
    }
    _createClass(MarketplaceFactory, [
        {
            key: "create",
            value: function create() {
                switch(this.nftUrl.hostname){
                    case "opensea.io" /* OpenSea */ :
                        return new OpenSea(this.web3Services, this.httpServiceWrapper);
                    case "rarible.com" /* Rarible */ :
                        return new Rarible(this.web3Services, this.httpServiceWrapper);
                    default:
                        throw Error("Marketplace not supported");
                }
            }
        }
    ]);
    return MarketplaceFactory;
}();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    MarketplaceFactory: MarketplaceFactory
});

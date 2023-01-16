"use strict";
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
// ../src/core/enums/MarketplaceHostnameEnum.ts
var MarketplaceHostnameEnum_exports = {};
__export(MarketplaceHostnameEnum_exports, {
    MarketplaceHostnameEnum: function() {
        return MarketplaceHostnameEnum;
    }
});
module.exports = __toCommonJS(MarketplaceHostnameEnum_exports);
var MarketplaceHostnameEnum = /* @__PURE__ */ function(MarketplaceHostnameEnum2) {
    MarketplaceHostnameEnum2["OpenSea"] = "opensea.io";
    MarketplaceHostnameEnum2["Rarible"] = "rarible.com";
    return MarketplaceHostnameEnum2;
}(MarketplaceHostnameEnum || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    MarketplaceHostnameEnum: MarketplaceHostnameEnum
});

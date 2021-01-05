"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function concatStrings() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    if (!strings)
        return '';
    return strings.reduce(function (s, currentString) {
        if (s === void 0) { s = ""; }
        return (s + currentString);
    });
}
exports.default = concatStrings;
//# sourceMappingURL=concatStrings.js.map
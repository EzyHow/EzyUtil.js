"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatStrings = void 0;
function multiplyNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    if (!numbers)
        return 0;
    return numbers.reduce(function (product, currentNumber) {
        if (product === void 0) { product = 1; }
        return (product * currentNumber);
    });
}
exports.default = multiplyNumbers;
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
exports.concatStrings = concatStrings;
//# sourceMappingURL=index.js.map
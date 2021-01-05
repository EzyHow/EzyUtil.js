"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=mutiplyNumbers.js.map
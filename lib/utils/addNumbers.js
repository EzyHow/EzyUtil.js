"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    if (!numbers)
        return 0;
    return numbers.reduce(function (sum, currentNumber) {
        if (sum === void 0) { sum = 0; }
        return (sum + currentNumber);
    });
}
exports.default = addNumbers;
//# sourceMappingURL=addNumbers.js.map
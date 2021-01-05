"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param inputArray Input array
 * @returns array
 */
function reverse(inputArray) {
    var result = [];
    for (var index = inputArray.length; index >= 0; --index) {
        result.push(inputArray[index]);
    }
    return result;
}
exports.default = reverse;
//# sourceMappingURL=reverse.js.map
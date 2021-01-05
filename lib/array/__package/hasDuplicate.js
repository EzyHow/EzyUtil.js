"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param inputArray Input array
 * @returns boolean
 */
function hasDuplicate(inputArray) {
    var duplicateFound = false;
    var visited = [];
    for (var index = 0; index < inputArray.length; index++) {
        if (visited.indexOf(inputArray[index]) !== -1) {
            duplicateFound = true;
            break;
        }
        visited.push(inputArray[index]);
    }
    return duplicateFound;
}
exports.default = hasDuplicate;
//# sourceMappingURL=hasDuplicate.js.map
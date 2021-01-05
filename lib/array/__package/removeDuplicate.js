"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param inputArray Input array
 * @returns Array
 */
function removeDuplicate(inputArray) {
    var result = [];
    var visited = [];
    for (var index = 0; index < inputArray.length; index++) {
        if (visited.indexOf(inputArray[index]) === -1) {
            result.push(inputArray[index]);
        }
        visited.push(inputArray[index]);
    }
    return visited;
}
exports.default = removeDuplicate;
//# sourceMappingURL=removeDuplicate.js.map
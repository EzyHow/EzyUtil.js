"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hasDuplicate_1 = tslib_1.__importDefault(require("./hasDuplicate"));
/**
 *
 * @param inputArray Input array
 * @returns boolean
 */
function isUnique(inputArray) {
    return !hasDuplicate_1.default(inputArray);
}
exports.default = isUnique;
//# sourceMappingURL=isUnique.js.map
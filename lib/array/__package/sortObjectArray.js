"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param inputArray Input array of objects
 * @param fieldName Fieldname on basis of which sorting will be done. If field is object it will not be sorted.
 * @param order Default value `asc`. Possible values: `asc`, `desc`
 * @private
 */
function sortObjectArray(inputArray, fieldName, order) {
    if (!order) {
        order = 'asc';
    }
    if (!fieldName || !(typeof fieldName === 'string' || fieldName instanceof String)) {
        return inputArray;
    }
    inputArray.sort(function (a, b) {
        // if field is undefined or null or equal, do nothing
        if (!a[fieldName] ||
            !b[fieldName] ||
            a[fieldName] === b[fieldName] ||
            typeof a[fieldName] === 'object' ||
            typeof b[fieldName] === 'object') {
            return 0;
        }
        var aFieldValue = a[fieldName];
        var bFieldValue = b[fieldName];
        if (typeof aFieldValue === 'string' || aFieldValue instanceof String) {
            return ((order === 'asc' ? 1 : -1) * (aFieldValue.localeCompare(bFieldValue + '')));
        }
        if (typeof bFieldValue === 'string' || bFieldValue instanceof String) {
            return ((order === 'asc' ? 1 : -1) * (bFieldValue.localeCompare(a[fieldName] + '')));
        }
        // if a.fieldName is less than b.fieldName
        if (a[fieldName] < b[fieldName])
            return order === "asc" ? -1 : 1;
        // if a.fieldName is greater than b.fieldName
        if (a[fieldName] > b[fieldName])
            return order === "asc" ? 1 : -1;
        return 0;
    });
    return inputArray;
}
exports.default = sortObjectArray;
//# sourceMappingURL=sortObjectArray.js.map
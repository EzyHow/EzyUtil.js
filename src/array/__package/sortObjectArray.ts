/**
 * 
 * @param inputArray Input array of objects
 * @param fieldName Fieldname on basis of which sorting will be done. If field is object it will not be sorted.
 * @param order Default value `asc`. Possible values: `asc`, `desc`
 * @private
 */
export default function sortObjectArray<T extends Object>(inputArray: Array<T>, fieldName: keyof T, order?: 'asc' | 'desc'): Array<T> | string {
    if (!order) {
        order = 'asc';
    }

    if (!fieldName || !(typeof fieldName === 'string' || (fieldName as any) instanceof String)) {
        return inputArray;
    }


    inputArray.sort((a: T, b: T) => {

        // if field is undefined or null or equal, do nothing
        if (
            !a[fieldName] ||
            !b[fieldName] ||
            a[fieldName] === b[fieldName] ||
            typeof a[fieldName] === 'object' ||
            typeof b[fieldName] === 'object') {
            return 0;
        }

        const aFieldValue = a[fieldName];
        const bFieldValue = b[fieldName];

        if (typeof aFieldValue === 'string' || aFieldValue instanceof String) {
            return ((order === 'asc' ? 1 : -1) * (aFieldValue.localeCompare(bFieldValue + '')));
        }

        if (typeof bFieldValue === 'string' || bFieldValue instanceof String) {
            return ((order === 'asc' ? 1 : -1) * (bFieldValue.localeCompare(a[fieldName] + '')));
        }


        // if a.fieldName is less than b.fieldName
        if (a[fieldName] < b[fieldName]) return order === "asc" ? -1 : 1;

        // if a.fieldName is greater than b.fieldName
        if (a[fieldName] > b[fieldName]) return order === "asc" ? 1 : -1;

        return 0;
    });

    return inputArray;
}
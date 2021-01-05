/**
 *
 * @param inputArray Input array of objects
 * @param fieldName Fieldname on basis of which sorting will be done. If field is object it will not be sorted.
 * @param order Default value `asc`. Possible values: `asc`, `desc`
 * @private
 */
export default function sortObjectArray<T extends Object>(inputArray: Array<T>, fieldName: keyof T, order?: 'asc' | 'desc'): Array<T> | string;
//# sourceMappingURL=sortObjectArray.d.ts.map
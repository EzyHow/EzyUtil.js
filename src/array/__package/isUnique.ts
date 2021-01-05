import hasDuplicate from './hasDuplicate';

/**
 * 
 * @param inputArray Input array
 * @returns boolean
 */
export default function isUnique<T extends any>(inputArray: Array<T>): boolean {
    return !hasDuplicate(inputArray);
}
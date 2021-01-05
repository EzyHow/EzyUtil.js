/**
 * 
 * @param inputArray Input array
 * @returns array
 */
export default function reverse<T extends any>(inputArray: Array<T>): Array<T> {

    let result: T[] = [];


    for (let index = inputArray.length; index >= 0; --index) {
        result.push(inputArray[index]);
    }

    return result;
}
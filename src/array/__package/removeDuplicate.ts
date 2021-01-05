/**
 * 
 * @param inputArray Input array
 * @returns Array
 */
export default function removeDuplicate<T extends any>(inputArray: Array<T>): Array<T> {

    let result: T[] = [];
    let visited: T[] = [];


    for (let index = 0; index < inputArray.length; index++) {
        if (visited.indexOf(inputArray[index]) === -1) {
            result.push(inputArray[index]);
        }
        visited.push(inputArray[index]);
    }

    return visited;
}
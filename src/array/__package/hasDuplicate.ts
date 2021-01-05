/**
 * 
 * @param inputArray Input array
 * @returns boolean
 */
export default function hasDuplicate<T extends any>(inputArray: Array<T>): boolean {

    let duplicateFound: boolean = false;
    let visited: T[] = [];


    for (let index = 0; index < inputArray.length; index++) {
        if (visited.indexOf(inputArray[index]) !== -1) {
            duplicateFound = true;
            break;
        }
        visited.push(inputArray[index]);
    }

    return duplicateFound;
}
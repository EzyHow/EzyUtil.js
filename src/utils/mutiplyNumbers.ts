export default function multiplyNumbers(...numbers: number[]): number {
    if (!numbers) return 0;
    return numbers.reduce((product = 1, currentNumber) => (product * currentNumber));
}
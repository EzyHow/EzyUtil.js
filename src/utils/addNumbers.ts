export default function addNumbers(...numbers: number[]): number {
    if (!numbers) return 0;
    return numbers.reduce((sum = 0, currentNumber) => (sum + currentNumber));
}
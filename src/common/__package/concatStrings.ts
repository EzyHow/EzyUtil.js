export default function concatStrings(...strings: string[]): string {
    if (!strings) return '';
    return strings.reduce((s = "", currentString) => (s + currentString));
}
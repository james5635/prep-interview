//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

export function isUniqueChar(str: string): boolean {
    let checker = 0
    for (let i: number = 0; i < str.length; i++) {
        let val: number = str[i]!.charCodeAt(0) - 'a'.charCodeAt(0)
        if ((checker & (1 << val)) > 0) {
            return false;
        }
        checker |= 1 << val;

    }
    return true
}

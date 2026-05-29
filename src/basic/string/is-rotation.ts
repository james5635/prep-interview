// Assume you have a method isSubstring which checks if one word is a isSubstring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only
// one call to isSubstring(e.g., "waterbottle" is a rotation of "erbottlewat").

function isRotation(s1: string, s2: string): boolean {
    let len: number = s1.length
    if (len === s2.length && len > 0) {
        let s1s1: string = s1 + s1
        return s1s1.includes(s2)
    }
    return false
}

export {isRotation}
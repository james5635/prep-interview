// Given two strings, write a method to decide if one is a permutation of the other

export function permutation(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    let letters: number[] = new Array(256).fill(0)
    for (const c of s) {
        letters[c.charCodeAt(0)]!++
    }
    for (const c of t) {
        let idx: number = c.charCodeAt(0)
        if (--letters[idx]! < 0) return false
    }
    return true
}
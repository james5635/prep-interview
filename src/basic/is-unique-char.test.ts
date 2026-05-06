import { test, expect } from 'bun:test'
import { isUniqueChar } from './is-unique-char'

test("should pass", () => {
    expect(isUniqueChar('abc')).toBe(true)
    expect(isUniqueChar('RUPQ')).toBe(true)
    expect(isUniqueChar('MYDOG')).toBe(true)
    expect(isUniqueChar('APPLE')).toBe(false)
    expect(isUniqueChar('BANANA')).toBe(false)
})
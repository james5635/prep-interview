import { test, expect } from 'bun:test'
import { isRotation } from './is-rotation'
test("should pass", () => {
    expect(isRotation('apple', 'leapp')).toBe(true)
    expect(isRotation('iamacat', 'acatiam')).toBe(true)
    expect(isRotation('iamacat', 'acatiama')).toBe(false)
})
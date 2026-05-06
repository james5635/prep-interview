import { test, expect } from 'bun:test'
import { permutation } from './is-permutation'

test("should pass", () => {
    expect(permutation('abc', 'bac')).toBe(true)
    expect(permutation('apple', 'eaplp')).toBe(true)
    expect(permutation('mydog', 'dmyago')).toBe(false)

})
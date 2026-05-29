import { test, expect, describe } from 'bun:test'
import { sumNested } from '../../../basic/array/sum-nested'

describe("nested sum", () => {

    test("sum should be 45", () => {
        let sum = sumNested([1, [2, 3], 4, [5, [6, 7, [8, [9]]]]])
        expect(sum).toBe(45)
    })
    test("sum should be 6", () => {
        let sum = sumNested([1, 2, 3])
        expect(sum).toBe(6)
    })
})
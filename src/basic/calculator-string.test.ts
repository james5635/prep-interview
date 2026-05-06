import { test, describe, expect } from 'bun:test'
import { Calculator } from './calculator-string'

test('will equal 20', () => {
  let calc = new Calculator()
  let result = calc.evaluate("(1 + 2) * 3 + 2 / 2 * 4 - 1 + ( ( 1 * 3 + 1) * 2 + 2 ) - 2")
  expect(result).toBe(20)
})
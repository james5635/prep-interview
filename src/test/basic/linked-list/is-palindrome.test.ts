import { isPalindrome } from "../../../basic/linked-list/is-palindrome";
import { test, expect } from 'bun:test'
import { createLinkedList } from "./create-linked-list";
test("should be pass", () => {
    let head = createLinkedList([1, 5, 2, 10, 20, 4, 7, 3])
    expect(isPalindrome(head!)).toBe(false)

    let head2 = createLinkedList([1, 2, 3, 3, 2, 1])
    expect(isPalindrome(head2!)).toBe(true)

    let head3 = createLinkedList([1, 2, 3, 8, 3, 2, 1])
    expect(isPalindrome(head3!)).toBe(true)
})

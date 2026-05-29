import { Node } from "./node";
function isPalindrome(head: Node): boolean {
    let fast = head
    let slow = head

    let stack = []

    while (fast !== null && fast.next !== null) {
        stack.push(slow.elem)
        slow = slow.next!
        fast = fast.next.next!
    }

    if (fast != null) {
        slow = slow.next!
    }
    while (slow != null) {
        let top = stack.pop()
        if (top !== slow.elem) return false
        slow = slow.next!
    }
    return true
}

export {isPalindrome}
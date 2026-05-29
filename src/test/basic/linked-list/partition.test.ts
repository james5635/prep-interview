import { Node } from "../../../basic/linked-list/node";
import { partition } from "../../../basic/linked-list/partition";
import { test, describe, expect } from "bun:test"
import { createLinkedList } from "./create-linked-list";
test('should bne', () => {
    let head: Node | null = createLinkedList([1, 5, 2, 10, 20, 4, 7, 3])
    head = partition(head, 5)

    expect(toArray(head)).toEqual([3, 4, 2, 1, 5, 10, 20, 7])
    expect(toArray(head)).not.toEqual([3, 4, 2, 1, 5, 10, 20, 7, 8])
})

function toArray(head: Node | null) {
    let result: number[] = []
    let cur = head
    while (cur !== null) {
        result.push(cur.elem)
        cur = cur.next
    }
    return result
}

// let n = new Node(1);
// n.next = new Node(5)
// n.next.next = new Node(2)
// n.next.next.next = new Node(7)
// n.next.next.next.next = new Node(3)

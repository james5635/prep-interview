import { Node } from "../../../basic/linked-list/node";
import { test, expect } from 'bun:test'
import { deleteDups } from "../../../basic/linked-list/delete-dup";
test("should be passed", () => {
    let head = new Node(1, new Node(2, new Node(1, new Node(2, new Node(5, new Node(6))))))
    deleteDups(head)
    expect(head.elem).toBe(1)
    expect(head!.next!.elem).toBe(2)
    expect(head!.next!.next!.elem).toBe(5)
    expect(head!.next!.next!.next!.elem).toBe(6)

    head = new Node(9, new Node(5, new Node(9, new Node(2, new Node(5)))))
    deleteDups(head)
    expect(head.elem).toBe(9)
    expect(head!.next!.elem).toBe(5)
    expect(head!.next!.next!.elem).not.toBe(9)
    expect(head!.next!.next!.elem).not.toBe(5)

})
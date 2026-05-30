import { Node } from "../../../basic/linked-list/node";
import {test, expect} from 'bun:test'
import { deleteNode } from "../../../basic/linked-list/delete-node";
test("should be passed", () => {
    let head = new Node(1,new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
    
    expect(deleteNode(head.next!.next)).toBe(true)
    expect(deleteNode(head.next!.next!.next!.next!.next)).toBe(false)
})
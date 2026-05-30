import { test, expect } from 'bun:test'
import { findBeginning } from '../../../basic/linked-list/find-beginning'
import { Node } from '../../../basic/linked-list/node'


test("should be passed", () => {
    let head = new Node(1)
    let startLoop = new Node(5)
    head.next = new Node(2, new Node(3, new Node(4, startLoop)))
    startLoop.next = new Node(6, new Node(7, new Node(8, new Node(9, startLoop))))
    expect(findBeginning(head)).toEqual(startLoop)
    expect(findBeginning(head)).not.toEqual(head.next.next)
    expect(findBeginning(head)).not.toEqual(startLoop.next)

})
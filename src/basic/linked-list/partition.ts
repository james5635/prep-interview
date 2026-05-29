//Write code to partition a linked list around a value x, such that
//all nodes less than x come before all nodes greater than or equal to x.

import { Node } from "./node";

function partition(node: Node | null, x: number): Node | null {

    let head = node;
    let tail = node;
    while (node != null) {
        let next = node.next
        if (node.elem < x) {
            node.next = head
            head = node
        }
        else {
            tail!.next = node
            tail = node
        }
        node = next
    }
    tail!.next = null
    return head
}

export { partition }


import { Node } from "../../../basic/linked-list/node";


function createLinkedList(arr: number[]) {
    let head: Node | null = null;
    for (const e of arr) {
        if (head == null)
            head = new Node(e)
        else {
            let cur = head
            while (cur.next !== null) cur = cur.next
            cur.next = new Node(e)
        }
    }
    return head
}

export { createLinkedList }
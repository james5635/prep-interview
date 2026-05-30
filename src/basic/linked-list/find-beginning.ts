//Given a circular linked list, implement an algorithm which returns
//the node at the beginning of the loop

import { Node } from "./node";
function findBeginning(head: Node | null): Node | null{
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null){
        slow = slow!.next
        fast = fast.next.next!
        if(fast == slow){
            break
        }
    }
    // && => F
	// || => T
    if(fast === null || fast.next === null) return null
    slow = head
    while(slow !== fast){
        slow = slow!.next
        fast = fast.next!
    }
    return fast
}

export {findBeginning}
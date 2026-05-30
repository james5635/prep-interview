//Implement an algorithm to delete a node in the middle of a singly linked list, give only access to that node
import { Node } from "./node";
function deleteNode(node: Node | null): boolean {
    if (node === null || node.next === null) {
        return false;
    }

    let next = node.next;
    node.elem = next.elem;
    node.next = next.next;
    return true;
}
export {deleteNode}
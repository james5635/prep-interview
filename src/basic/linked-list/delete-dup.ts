//Write code to remove duplicates from an unsorted linked list
import { Node } from "./node";

/**
 * python:
 *  - unordered (set)
 * typescript:
 *  - insertion order (Set)
 * java:
 *  - unordered (HashSet)
 *  - insertion order (LinkedHashSet)
 *  - sorted order (TreeSet)
 * c++:
 *  - sorted order (std::set)
 *  - unordered (std::unordered_set)
 * rust:
 *  - unordered (HashSet)
 * go:
 *  - unordered (map[string]struct{})
 */
function deleteDups(node: Node): void {
    let set = new Set<number>();
    let previous = null;
    while (node !== null) {
        if (set.has(node.elem)) {
            previous!.next = node.next;
        }
        else {
            set.add(node.elem);
            previous = node;
        }
        node = node.next!;
    }
}

export{deleteDups}
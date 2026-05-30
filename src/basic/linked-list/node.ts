class Node {
    elem: number;
    next: Node | null;
    constructor(elem: number, next: Node | null = null) {
        this.elem = elem
        this.next = next
    }
}

export { Node }
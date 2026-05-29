class Node {
    elem: number;
    next: Node | null;
    constructor(elem: number) {
        this.elem = elem
        this.next = null
    }
}

export {Node}
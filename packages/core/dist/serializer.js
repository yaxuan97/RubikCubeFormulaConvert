function serializeNode(node) {
    switch (node.type) {
        case 'move':
            return serializeMove(node);
        case 'rotation':
            return serializeRotation(node);
        case 'group':
            return serializeGroup(node);
    }
}
function serializeMove(node) {
    return node.face + node.modifier;
}
function serializeRotation(node) {
    return node.face + node.modifier;
}
function serializeGroup(node) {
    const inner = serialize(node.moves);
    if (node.repeat > 1) {
        return `(${inner})${node.repeat}`;
    }
    return `(${inner})`;
}
export function serialize(nodes) {
    return nodes.map(serializeNode).join(' ');
}
//# sourceMappingURL=serializer.js.map
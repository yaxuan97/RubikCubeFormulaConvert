import { AstNode, MoveNode, GroupNode, RotationNode } from './types.js';

function serializeNode(node: AstNode): string {
  switch (node.type) {
    case 'move':
      return serializeMove(node);
    case 'rotation':
      return serializeRotation(node);
    case 'group':
      return serializeGroup(node);
  }
}

function serializeMove(node: MoveNode): string {
  return node.face + node.modifier;
}

function serializeRotation(node: RotationNode): string {
  return node.face + node.modifier;
}

function serializeGroup(node: GroupNode): string {
  const inner = serialize(node.moves);
  if (node.repeat > 1) {
    return `(${inner})${node.repeat}`;
  }
  return `(${inner})`;
}

export function serialize(nodes: AstNode[]): string {
  return nodes.map(serializeNode).join(' ');
}

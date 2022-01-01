import VNode from "./types/vNode";

function diff(oldObj: VNode, newObj: VNode) {
  let patchArray = [];
  diffNode(oldObj, newObj, patchArray);
  return patchArray;
}

function diffNode(oldNode:VNode, newNode:VNode, patchArray) {
  if (oldNode.tagName != newNode.tagName) {
    patchArray.push({
      id: oldNode.attributes.id,
      type: "tagName",
      value: newNode,
    });
  }
  if (oldNode.children && newNode.children) {
    // contentの更新対象は親ノードのidとなるため、先読みする
    for (let i = 0; i < oldNode.children.length; i++) {
      if (oldNode.children[i].attributes.content != newNode.children[i].attributes.content) {
        patchArray.push({
          id: oldNode.attributes.id,
          type: "content",
          value: newNode.children[i].attributes.content,
        });
      }
      diffNode(oldNode.children[i], newNode.children[i], patchArray);
    }
  }
  return;
}

export default diff;

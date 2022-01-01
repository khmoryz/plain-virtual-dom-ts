import VNode from "./types/vNode";
import PatchTaget from "./types/patchTarget";

function diff(oldObj: VNode, newObj: VNode) {
  let patchTarget: PatchTaget[] = [];
  diffNode(oldObj, newObj, patchTarget);
  return patchTarget;
}

function diffNode(oldNode: VNode, newNode: VNode, patchTarget: PatchTaget[]) {
  if (oldNode.children && newNode.children) {
    // contentの更新対象は親ノードのidとなるため、先読みする
    for (let i = 0; i < oldNode.children.length; i++) {
      if (oldNode.children[i].attributes.content != newNode.children[i].attributes.content) {
        patchTarget.push({
          id: oldNode.attributes.id,
          type: "content",
          value: newNode.children[i].attributes.content,
        });
      }
      diffNode(oldNode.children[i], newNode.children[i], patchTarget);
    }
  }
  return;
}

export default diff;

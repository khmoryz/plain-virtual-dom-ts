import diff from "./diff.js";
import renderNode from "./renderNode.js";
import patch from "./patch.js";
import VNode from "./types/vnode";

// ブラウザ表示中のオブジェクト
let currentVDOM: VNode = null;

function render(vDOM: VNode) {
  if (currentVDOM === null) {
    currentVDOM = JSON.parse(JSON.stringify(vDOM));
    const realElement = renderNode(vDOM);
    document.body.appendChild(realElement);
  }

  const patchTagets = diff(currentVDOM, vDOM);
  if (typeof patchTagets !== "undefined") {
    patchTagets.forEach((patchTaget) => {
      patch(patchTaget);
    });
  }
  currentVDOM = JSON.parse(JSON.stringify(vDOM));
}

export default { render };

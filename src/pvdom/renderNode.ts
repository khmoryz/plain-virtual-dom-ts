import VNode from "./types/vNode";

function renderNode(node: VNode) {
  const nodeElement = document.createElement(node.tagName);
  for (const key in node.attributes) {
    nodeElement.setAttribute(key, node.attributes[key]);
  }

  if (node.children) {
    node.children.forEach((child: VNode) => {
      if (child.tagName == "text") {
        nodeElement.innerText = child.attributes.content;
        return;
      }
      nodeElement.appendChild(renderNode(child));
    });
  }

  return nodeElement;
}

export default renderNode;

"use strict";
exports.__esModule = true;
function renderNode(node) {
    var nodeElement = document.createElement(node.tagName);
    for (var key in node.attributes) {
        nodeElement.setAttribute(key, node.attributes[key]);
    }
    node.children.forEach(function (child) {
        if (child.tagName == "text") {
            nodeElement.innerText = child.attributes.content;
            return;
        }
        nodeElement.appendChild(renderNode(child));
    });
    return nodeElement;
}
exports["default"] = renderNode;

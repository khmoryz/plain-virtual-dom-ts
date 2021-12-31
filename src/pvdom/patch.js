"use strict";
exports.__esModule = true;
function patch(target) {
    var targetElement;
    var newElement;
    switch (target.type) {
        case "tagName":
            targetElement = window.document.getElementById(target.id);
            newElement = document.createElement(target.value);
            targetElement.replaceWith(newElement);
            break;
        case "content":
            targetElement = window.document.getElementById(target.id);
            targetElement.innerText = target.value;
            break;
        default:
            console.error("invalid patch type");
            break;
    }
}
exports["default"] = patch;

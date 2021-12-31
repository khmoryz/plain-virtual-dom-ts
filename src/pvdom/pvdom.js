"use strict";
exports.__esModule = true;
var diff_js_1 = require("./diff.js");
var renderNode_js_1 = require("./renderNode.js");
var patch_js_1 = require("./patch.js");
// ブラウザ表示中のオブジェクト
var currentVDOM = null;
function render(vDOM) {
    if (currentVDOM === null) {
        currentVDOM = JSON.parse(JSON.stringify(vDOM));
        var realElement = (0, renderNode_js_1["default"])(vDOM);
        document.body.appendChild(realElement);
    }
    var patchTagets = (0, diff_js_1["default"])(currentVDOM, vDOM);
    if (typeof patchTagets !== "undefined") {
        patchTagets.forEach(function (patchTaget) {
            (0, patch_js_1["default"])(patchTaget);
        });
    }
    currentVDOM = JSON.parse(JSON.stringify(vDOM));
}
exports["default"] = { render: render };

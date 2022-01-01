import PVDOM from "./pvdom/pvdom.js";
import VNode from "./pvdom/types/vNode.js";

const vDOM: VNode = {
  tagName: "div",
  attributes: { id: "div-id", content: "" },
  children: [
    {
      tagName: "h3",
      attributes: { id: "p-id", content: "" },
      children: [
        {
          tagName: "text",
          attributes: { id: "text-id", content: "入力内容: " },
        },
      ],
    },
    {
      tagName: "input",
      attributes: {
        id: "input-id",
        type: "text",
        content: "",
      },
    },
  ],
};

PVDOM.render(vDOM);

setInterval(() => {
  PVDOM.render(vDOM);
}, 30);

const input = document.getElementById("input-id");
input.oninput = handleInput;
function handleInput(e: Event) {
  const { target } = e;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }
  if (target.value) {
    vDOM.children[0].children[0].attributes.content = "入力内容: " + target.value;
  }
}

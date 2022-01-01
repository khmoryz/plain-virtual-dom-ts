import PatchTaget from "./types/patchTarget";

function patch(patchTarget: PatchTaget) {
  let patchTargetElement;
  let newElement;
  switch (patchTarget.type) {
    case "tagName":
      patchTargetElement = window.document.getElementById(patchTarget.id);
      newElement = document.createElement(patchTarget.value);
      patchTargetElement.replaceWith(newElement);
      break;
    case "content":
      patchTargetElement = window.document.getElementById(patchTarget.id);
      patchTargetElement.innerText = patchTarget.value;
      break;
    default:
      console.error("invalid patch type");
      break;
  }
}

export default patch;

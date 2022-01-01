import PatchTaget from "./types/patchTarget";

function patch(patchTarget: PatchTaget) {
  let patchTargetElement;
  let newElement;
  // if(patchTarget){
  //   return;
  // }
  switch (patchTarget.type) {
    case "tagName":
      patchTargetElement = window.document.getElementById(patchTarget.id);
      newElement = document.createElement(patchTarget.value);
      if (patchTargetElement) {
        patchTargetElement.replaceWith(newElement);
      }
      break;
    case "content":
      patchTargetElement = window.document.getElementById(patchTarget.id);
      if (patchTargetElement) {
        patchTargetElement.innerText = patchTarget.value;
      }
      break;
    default:
      console.error("invalid patch type");
      break;
  }
}

export default patch;

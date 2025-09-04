// src/index.ts
function copyrightFooter() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return `\xA9 ${year} Your Company. All rights reserved.`;
}
export {
  copyrightFooter
};

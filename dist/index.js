//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
const react_jsx_runtime = __toESM(require("react/jsx-runtime"));

//#region src/index.tsx
function copyrightFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: "footer-badges",
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
				src: "/img/uploads/2024/07/aws-advanced.png",
				alt: "AWS Advanced Tier"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
				src: "/img/uploads/2024/07/AWS-devops-competency.png",
				alt: "AWS DevOps Competency"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
				src: "/img/uploads/2024/07/AWS-eks.png",
				alt: "AWS EKS Delivery"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
				src: "/img/uploads/2024/07/AWS-public-sector.png",
				alt: "AWS Public Sector"
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
				src: "/img/uploads/2024/03/15.webp",
				alt: "Cyber AB CMMC"
			})
		]
	}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: "footer-bottom",
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "row",
				style: "align-items: center; text-align: center;",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "col col--4",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
							src: "/img/uploads/2024/03/opsZero-Logo-Large.webp",
							alt: "opsZero Logo",
							style: "max-width: 200px; height: auto;"
						})
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "col col--4",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", { children: [
							"©2016–",
							year,
							" opsZero, LLC "
						] })
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "col col--4",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							style: "display: flex; justify-content: center; gap: 1rem;",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								href: "https://www.linkedin.com/company/opszero/",
								target: "_blank",
								rel: "noopener",
								title: "LinkedIn",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
									src: "/img/uploads/LinkedIn.svg",
									alt: "LinkedIn",
									style: "height: 28px;"
								})
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
								href: "https://github.com/opszero",
								target: "_blank",
								rel: "noopener",
								title: "GitHub",
								children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
									src: "/img/uploads/GitHub.svg",
									alt: "GitHub",
									style: "height: 28px;"
								})
							})]
						})
					})
				]
			})
		})
	})] });
}

//#endregion
exports.copyrightFooter = copyrightFooter;
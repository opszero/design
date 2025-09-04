import ReactDOMServer from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

//#region src/index.tsx
function copyrightFooter() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return ReactDOMServer.renderToStaticMarkup(/* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "footer-badges",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: "/img/uploads/2024/07/aws-advanced.png",
				alt: "AWS Advanced Tier"
			}),
			/* @__PURE__ */ jsx("img", {
				src: "/img/uploads/2024/07/AWS-devops-competency.png",
				alt: "AWS DevOps Competency"
			}),
			/* @__PURE__ */ jsx("img", {
				src: "/img/uploads/2024/07/AWS-eks.png",
				alt: "AWS EKS Delivery"
			}),
			/* @__PURE__ */ jsx("img", {
				src: "/img/uploads/2024/07/AWS-public-sector.png",
				alt: "AWS Public Sector"
			}),
			/* @__PURE__ */ jsx("img", {
				src: "/img/uploads/2024/03/15.webp",
				alt: "Cyber AB CMMC"
			})
		]
	}), /* @__PURE__ */ jsx("div", {
		className: "footer-bottom",
		children: /* @__PURE__ */ jsx("div", {
			className: "container",
			children: /* @__PURE__ */ jsxs("div", {
				className: "row",
				style: {
					alignItems: "center",
					textAlign: "center"
				},
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "col col--4",
						children: /* @__PURE__ */ jsx("img", {
							src: "/img/uploads/2024/03/opsZero-Logo-Large.webp",
							alt: "opsZero Logo",
							style: "max-width: 200px; height: auto;"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "col col--4",
						children: /* @__PURE__ */ jsxs("p", { children: [
							"©2016–",
							year,
							" opsZero, LLC "
						] })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "col col--4",
						children: /* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								justifyContent: "center",
								gap: "1rem"
							},
							children: [/* @__PURE__ */ jsx("a", {
								href: "https://www.linkedin.com/company/opszero/",
								target: "_blank",
								rel: "noopener",
								title: "LinkedIn",
								children: /* @__PURE__ */ jsx("img", {
									src: "/img/uploads/LinkedIn.svg",
									alt: "LinkedIn",
									style: { height: "28px" }
								})
							}), /* @__PURE__ */ jsx("a", {
								href: "https://github.com/opszero",
								target: "_blank",
								rel: "noopener",
								title: "GitHub",
								children: /* @__PURE__ */ jsx("img", {
									src: "/img/uploads/GitHub.svg",
									alt: "GitHub",
									style: { height: "28px" }
								})
							})]
						})
					})
				]
			})
		})
	})] }));
}

//#endregion
export { copyrightFooter };
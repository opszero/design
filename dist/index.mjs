import { jsx, jsxs } from "react/jsx-runtime";

//#region src/ContactPage.tsx
function ContactPage() {
	return /* @__PURE__ */ jsxs("main", { children: [/* @__PURE__ */ jsx("section", {
		className: "container padding-vert--xl",
		children: /* @__PURE__ */ jsxs("div", {
			className: "row",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "col col--6",
				children: [
					/* @__PURE__ */ jsx("h1", {
						style: {
							fontSize: 50,
							lineHeight: 1.5
						},
						children: "How can we help?"
					}),
					/* @__PURE__ */ jsxs("p", {
						style: {
							fontSize: 20,
							lineHeight: 1.5,
							marginBottom: 30
						},
						children: [
							"We are committed to building long-lasting  ",
							/* @__PURE__ */ jsx("br", {}),
							"partnerships that  drive innovation and look forward  ",
							/* @__PURE__ */ jsx("br", {}),
							"to learning more about the vision of your",
							/* @__PURE__ */ jsx("br", {}),
							"organization."
						]
					}),
					/* @__PURE__ */ jsx("a", {
						className: "button button--primary",
						href: "https://calendly.com/opszero-llc/discovery",
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Schedule a call"
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "col col--6",
				style: { textAlign: "center" },
				children: /* @__PURE__ */ jsx("img", {
					src: "https://i0.wp.com/opszero.com/wp-content/uploads/2024/03/OpsZero-Contact.webp?resize=1080%2C592&ssl=1",
					alt: "Contact",
					style: {
						maxWidth: "100%",
						height: "auto"
					}
				})
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "container padding-vert--xl",
		children: /* @__PURE__ */ jsxs("div", {
			className: "row",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "col col--9",
				children: [
					/* @__PURE__ */ jsx("h3", { children: "Book a time with us:" }),
					/* @__PURE__ */ jsx("div", {
						className: "calendly-inline-widget",
						"data-url": "https://calendly.com/opszero-llc/discovery",
						style: {
							minWidth: "320px",
							height: "700px"
						}
					}),
					/* @__PURE__ */ jsx("script", {
						type: "text/javascript",
						src: "https://assets.calendly.com/assets/external/widget.js",
						async: true
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "col col--3",
				children: [
					/* @__PURE__ */ jsx("h3", {
						style: { color: "#1d4ed8" },
						children: "Contact"
					}),
					/* @__PURE__ */ jsxs("p", { children: [
						/* @__PURE__ */ jsx("a", {
							href: "tel:+15102882791",
							children: "(510) 288-2791"
						}),
						/* @__PURE__ */ jsx("br", {}),
						"hi (at) opszero (dot) com"
					] }),
					/* @__PURE__ */ jsx("h3", {
						style: { color: "#1d4ed8" },
						children: "Our Office"
					}),
					/* @__PURE__ */ jsxs("p", { children: [
						"422 Benton St",
						/* @__PURE__ */ jsx("br", {}),
						"Santa Rosa, CA 95401"
					] })
				]
			})]
		})
	})] });
}

//#endregion
//#region src/index.tsx
const cloudAIItems = [
	{
		label: "Kubespot - Compliance and AI Ready Kubernetes",
		href: "https://kubespot.com"
	},
	{
		label: "DBAZero - Database Performance Tuning",
		href: "https://dbazero.com"
	},
	{
		label: "PolicyCop - SOC2/HIPAA/FedRamp Compliance Remediation",
		href: "https://policycop.com"
	},
	{
		label: "DiscountCloud.io - Up to 5% Off Cloud Bills",
		href: "https://discountcloud.io/"
	},
	{
		label: "OMYAC - Cloud Waste Finder",
		href: "https://omyac.cloud"
	},
	{
		label: "deepfacts.ai - Healthcare AI",
		href: "https://deepfacts.ai/"
	}
];
const footerLinks = [
	{
		title: "Cloud + AI",
		items: cloudAIItems
	},
	{
		title: "Marketplaces",
		items: [{
			label: "AWS Marketplace",
			href: "https://aws.amazon.com/marketplace/seller-profile?id=1cfa0be5-3fcc-417a-83a8-eac1274450c3"
		}, {
			label: "Terraform Registry",
			href: "https://registry.terraform.io/namespaces/opszero"
		}]
	},
	{
		title: "Resources",
		items: [
			{
				label: "Docs",
				to: "/docs"
			},
			{
				label: "Blog",
				to: "/blog"
			},
			{
				label: "GitHub",
				href: "https://github.com/opszero"
			},
			{
				label: "Status",
				href: "https://status.opszero.com/"
			},
			{
				label: "Privacy Policy",
				to: "/privacy"
			},
			{
				label: "Terms of Service",
				to: "/terms-of-service"
			},
			{
				label: "Compliance",
				to: "/compliance"
			},
			{
				label: "Contact",
				to: "/contact"
			}
		]
	}
];
function copyrightFooter() {
	return `
<style>
.footer--light {
  background-color: #fff !important;
  color: #000 !important;
}

.footer-badges {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-badges img {
  max-height: 120px;
  object-fit: contain;
}

.footer-bottom {
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.footer-logo {
  height: 40px;
  object-fit: contain;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links img {
  height: 24px;
}
    </style>

<div class="footer-badges">
                <img src="img/aws-advanced.png" alt="AWS Advanced Tier" />
                <img src="img/aws-devops-competency.png" alt="AWS DevOps Competency" />
                <img src="img/aws-eks.png" alt="AWS EKS Delivery" />
                <img src="img/aws-public-sector.png" alt="AWS Public Sector" />
                <img src="img/cmmc-cyberab.webp" alt="Cyber AB CMMC" />
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row" style="align-items: center; text-align: center;">
                        <div class="col col--4">
                            <img src="img/opsZero-Logo-Large.webp" alt="opsZero" style="max-width: 200px; height: auto;" />
                        </div>
                        <div class="col col--4">
                            <p>©2016–${(/* @__PURE__ */ new Date()).getFullYear()} opsZero, LLC </p>
                        </div>
                        <div class="col col--4">
                            <div style="display: flex; justify-content: center; gap: 1rem;">
                                <a
                                    href="https://www.linkedin.com/company/opszero/"
                                    target="_blank"
                                    rel="noopener"
                                    title="LinkedIn"
                                >
                                    <img
                                        src="img/LinkedIn.svg"
                                        alt="LinkedIn"
                                        style="height: 28px;"
                                    />
                                </a>
                                <a
                                    href="https://github.com/opszero"
                                    target="_blank"
                                    rel="noopener"
                                    title="GitHub"
                                >
                                    <img
                                        src="img/GitHub.svg"
                                        alt="GitHub"
                                        style="height: 28px;"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}

//#endregion
export { ContactPage, cloudAIItems, copyrightFooter, footerLinks };
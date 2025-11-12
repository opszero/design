import "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";

//#region src/ContactPage.tsx
function ContactPage({ calendlyLink = "https://calendly.com/opszero-llc/discovery" }) {
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
							"We are committed to building long-lasting ",
							/* @__PURE__ */ jsx("br", {}),
							"partnerships that drive innovation and look forward ",
							/* @__PURE__ */ jsx("br", {}),
							"to learning more about the vision of your ",
							/* @__PURE__ */ jsx("br", {}),
							"organization."
						]
					}),
					/* @__PURE__ */ jsx("a", {
						className: "button button--primary",
						href: calendlyLink,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Schedule a call"
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "col col--6",
				style: { textAlign: "center" },
				children: /* @__PURE__ */ jsx("img", {
					src: "https://opszero.com/img/common/opszero-contact.png",
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
				children: [/* @__PURE__ */ jsx("div", {
					className: "calendly-inline-widget",
					"data-url": calendlyLink,
					style: {
						minWidth: "320px",
						height: "1200px"
					}
				}), /* @__PURE__ */ jsx("script", {
					type: "text/javascript",
					src: "https://assets.calendly.com/assets/external/widget.js",
					async: true
				})]
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
//#region src/Privacy.tsx
function Privacy() {
	return /* @__PURE__ */ jsxs("main", {
		className: "container padding-vert--xl",
		children: [
			/* @__PURE__ */ jsx("h1", { children: "Privacy Policy" }),
			/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "Last updated: February 17, 2023" }) }),
			/* @__PURE__ */ jsx("h2", { children: "Privacy" }),
			/* @__PURE__ */ jsxs("p", { children: [
				"At ",
				/* @__PURE__ */ jsx("strong", { children: "opsZero, LLC" }),
				", one of our main priorities is the privacy of our visitors and customers. This Privacy Policy document contains types of information that are collected and recorded by opsZero, LLC, and how we use it."
			] }),
			/* @__PURE__ */ jsx("p", { children: "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us." }),
			/* @__PURE__ */ jsxs("p", { children: [
				"This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected on ",
				/* @__PURE__ */ jsx("strong", { children: "opszero.com" }),
				". This policy is not applicable to any information collected offline or via channels other than this website. This policy is also not applicable to any information collected by businesses who are using opsZero, LLC’s services. If you have a business relationship with one of our customers, please refer to their business website’s privacy policy to see how they collect and process your data."
			] }),
			/* @__PURE__ */ jsx("h2", { children: "Consent" }),
			/* @__PURE__ */ jsx("p", { children: "By using our website, you hereby consent to our Privacy Policy and agree to its terms." }),
			/* @__PURE__ */ jsx("h2", { children: "Information we collect" }),
			/* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsx("li", { children: "The personal information that you are asked to provide, and the reasons why, will be made clear at the point we ask." }),
				/* @__PURE__ */ jsxs("li", { children: ["If you contact us directly, we may receive additional information about you such as:", /* @__PURE__ */ jsxs("ul", { children: [
					/* @__PURE__ */ jsx("li", { children: "Name" }),
					/* @__PURE__ */ jsx("li", { children: "Email address" }),
					/* @__PURE__ */ jsx("li", { children: "IP address" }),
					/* @__PURE__ */ jsx("li", { children: "Phone number" }),
					/* @__PURE__ */ jsx("li", { children: "Message contents and/or attachments" })
				] })] }),
				/* @__PURE__ */ jsxs("li", { children: [
					"When you register for an Account on ",
					/* @__PURE__ */ jsx("strong", { children: "opszero.com" }),
					", we may ask for:",
					/* @__PURE__ */ jsxs("ul", { children: [
						/* @__PURE__ */ jsx("li", { children: "Name" }),
						/* @__PURE__ */ jsx("li", { children: "Company name" }),
						/* @__PURE__ */ jsx("li", { children: "Address" }),
						/* @__PURE__ */ jsx("li", { children: "Email address" }),
						/* @__PURE__ */ jsx("li", { children: "Telephone number" })
					] })
				] })
			] }),
			/* @__PURE__ */ jsx("h2", { children: "How we use your information" }),
			/* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsxs("li", { children: ["Provide, operate, and maintain ", /* @__PURE__ */ jsx("strong", { children: "opszero.com" })] }),
				/* @__PURE__ */ jsxs("li", { children: ["Improve, personalize, and expand ", /* @__PURE__ */ jsx("strong", { children: "opszero.com" })] }),
				/* @__PURE__ */ jsxs("li", { children: ["Understand and analyze how you use ", /* @__PURE__ */ jsx("strong", { children: "opszero.com" })] }),
				/* @__PURE__ */ jsx("li", { children: "Develop new products, services, features, and functionality" }),
				/* @__PURE__ */ jsx("li", { children: "Communicate with you for customer service and account management" }),
				/* @__PURE__ */ jsx("li", { children: "Send you emails for account management purposes" }),
				/* @__PURE__ */ jsx("li", { children: "Investigate SPAM complaints and prevent fraud" })
			] }),
			/* @__PURE__ */ jsx("h2", { children: "Messaging Privacy & SMS Terms" }),
			/* @__PURE__ */ jsx("p", { children: "This Privacy Policy governs the manner in which we collect, use, maintain, and disclose information collected from users of our messaging services." }),
			/* @__PURE__ */ jsx("p", { children: "We do not share end-user data with third parties. Your mobile opt-in will not be shared with other companies." }),
			/* @__PURE__ */ jsx("h3", { children: "Consent" }),
			/* @__PURE__ */ jsx("p", { children: "By opting in to our messaging services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy." }),
			/* @__PURE__ */ jsxs("p", { children: [
				"We send messages once per week. “Message and data rates may apply.” Should you require assistance, message ",
				/* @__PURE__ */ jsx("strong", { children: "HELP" }),
				" and our support team will respond immediately."
			] }),
			/* @__PURE__ */ jsx("h3", { children: "Messaging Terms & Conditions" }),
			/* @__PURE__ */ jsx("p", { children: "You agree to receive informational and promotional messages (appointment reminders, account notifications, marketing, etc.) from our company." }),
			/* @__PURE__ */ jsxs("p", { children: [
				"Message frequency varies. Message and data rates may apply. For help, reply ",
				/* @__PURE__ */ jsx("strong", { children: "HELP" }),
				"."
			] }),
			/* @__PURE__ */ jsx("h3", { children: "Opt-out Instructions" }),
			/* @__PURE__ */ jsxs("p", { children: [
				"We respect your right to opt out of receiving future communications from us. If you wish to be removed from our messaging list, text the keyword: ",
				/* @__PURE__ */ jsx("strong", { children: "STOP" }),
				"."
			] }),
			/* @__PURE__ */ jsx("h2", { children: "Log Files" }),
			/* @__PURE__ */ jsx("p", { children: "opsZero, LLC follows a standard procedure of using log files. These files log visitors when they visit websites—something all hosting companies do as part of hosting services’ analytics." }),
			/* @__PURE__ */ jsx("p", { children: "The information collected may include:" }),
			/* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsx("li", { children: "IP addresses" }),
				/* @__PURE__ */ jsx("li", { children: "Browser type" }),
				/* @__PURE__ */ jsx("li", { children: "Internet Service Provider (ISP)" }),
				/* @__PURE__ */ jsx("li", { children: "Date and time stamp" }),
				/* @__PURE__ */ jsx("li", { children: "Referring/exit pages" }),
				/* @__PURE__ */ jsx("li", { children: "Number of clicks" })
			] }),
			/* @__PURE__ */ jsx("p", { children: "This information is not linked to anything personally identifiable." }),
			"`",
			/* @__PURE__ */ jsx("p", { children: "It is used to analyze trends, administer the site, track user movement, and gather demographic information." }),
			"`",
			/* @__PURE__ */ jsx("h2", { children: "Cookies and Web Beacons" }),
			/* @__PURE__ */ jsxs("p", { children: [
				"opsZero, LLC uses ",
				/* @__PURE__ */ jsx("strong", { children: "cookies" }),
				".  These cookies store information including visitor preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize the user experience by customizing opszero.com content based on browser type and/or other information."
			] }),
			/* @__PURE__ */ jsxs("p", { children: [
				" For more general information on cookies, please read",
				" ",
				/* @__PURE__ */ jsx("a", {
					href: "https://www.cookieconsent.com/what-are-cookies/",
					target: "_blank",
					rel: "noopener noreferrer",
					children: "What Are Cookies"
				}),
				"."
			] }),
			/* @__PURE__ */ jsx("h2", { children: "Advertising Partners Privacy Policies" }),
			/* @__PURE__ */ jsx("p", { children: "You may consult this list to find the Privacy Policy for each of the advertising partners of opsZero, LLC." }),
			/* @__PURE__ */ jsx("p", { children: "Currently we do not have any third-party advertising partners." }),
			/* @__PURE__ */ jsx("p", { children: "Third-party ad servers or ad networks may use cookies, JavaScript, or Web Beacons in their advertisements and links that appear on opsZero, LLC. They automatically receive your IP address when this occurs." }),
			/* @__PURE__ */ jsx("p", { children: "These technologies measure advertising effectiveness and personalize advertising content you see on websites you visit. Currently, opsZero, LLC does not display any kind of third-party advertising on our website or platform." }),
			/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "Note – opsZero, LLC has no access to or control over these cookies that are used by third-party advertisers." }) }),
			/* @__PURE__ */ jsx("h2", { children: "Third Party Privacy Policies" }),
			/* @__PURE__ */ jsx("p", { children: "opsZero, LLC’s Privacy Policy does not apply to other advertisers or websites. Please consult the respective Privacy Policies of these third-party servers for more details, including instructions on how to opt out." }),
			/* @__PURE__ */ jsx("p", { children: "You can disable cookies in your browser settings. More information about cookie management can be found on your browser’s website." }),
			/* @__PURE__ */ jsx("h2", { children: "CCPA Privacy Rights (Do Not Sell My Personal Information)" }),
			/* @__PURE__ */ jsxs("p", { children: [
				"Under the ",
				/* @__PURE__ */ jsx("strong", { children: "CCPA" }),
				", California consumers have the right to:"
			] }),
			/* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsx("li", { children: "Request that a business disclose the categories and specific pieces of personal data collected." }),
				/* @__PURE__ */ jsx("li", { children: "Request that a business delete any personal data collected." }),
				/* @__PURE__ */ jsx("li", { children: "Request that a business that sells personal data not sell the consumer’s personal data." })
			] }),
			/* @__PURE__ */ jsxs("p", { children: [
				"If you make a request, we have one month to respond. To exercise these rights, please contact us via our ",
				/* @__PURE__ */ jsx("strong", { children: "Contact" }),
				" page or email ",
				/* @__PURE__ */ jsx("strong", { children: "privacy [at] opszero [dot] com" }),
				"."
			] }),
			/* @__PURE__ */ jsx("h2", { children: "GDPR Data Protection Rights" }),
			/* @__PURE__ */ jsx("p", { children: "We want you to be fully aware of all your data protection rights. Every user is entitled to the following:" }),
			/* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Right to access" }), " – You can request copies of your personal data. A small fee may apply."] }),
				/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Right to rectification" }), " – You can request correction of inaccurate information and completion of incomplete information."] }),
				/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Right to erasure" }), " – You can request that we erase your personal data, under certain conditions."] }),
				/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Right to restrict processing" }), " – You can request restriction of processing, under certain conditions."] }),
				/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Right to object to processing" }), " – You can object to our processing of your data, under certain conditions."] }),
				/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("strong", { children: "Right to data portability" }), " – You can request transfer of your data to another organization, or directly to you, under certain conditions."] })
			] }),
			/* @__PURE__ */ jsxs("p", { children: [
				"If you make a request, we have one month to respond. To exercise these rights, please contact us via our ",
				/* @__PURE__ */ jsx("strong", { children: "Contact" }),
				" page or email ",
				/* @__PURE__ */ jsx("strong", { children: "privacy [at] opszero [dot] com" }),
				"."
			] }),
			/* @__PURE__ */ jsx("h2", { children: "Children’s Information" }),
			/* @__PURE__ */ jsx("p", { children: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity." }),
			/* @__PURE__ */ jsx("p", { children: "opsZero, LLC does not knowingly collect any Personal Identifiable Information from children under the age of 16. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will promptly remove such information from our records." }),
			/* @__PURE__ */ jsxs("p", { children: [
				"You can contact us via our ",
				/* @__PURE__ */ jsx("strong", { children: "Contact" }),
				" page or email",
				" ",
				/* @__PURE__ */ jsx("strong", { children: "privacy [at] opszero [dot] com" }),
				"."
			] }),
			/* @__PURE__ */ jsx("hr", {}),
			/* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("em", { children: "Last updated: February 17, 2023" }) }),
			"   "
		]
	});
}

//#endregion
//#region src/TermsOfService.tsx
function TermsOfService() {
	return /* @__PURE__ */ jsxs("main", {
		className: "container margin-vert--xl",
		children: [
			/* @__PURE__ */ jsx("h1", { children: "Terms of Service" }),
			/* @__PURE__ */ jsx("p", { children: "Please read these terms of service (\"terms\", \"terms of service\") carefully before using the opszero.com website (the \"service\") operated by opsZero LLC (\"us\", \"we\", \"our\")." }),
			/* @__PURE__ */ jsx("h2", { children: "Conditions of Use" }),
			/* @__PURE__ */ jsx("p", { children: "Our services are provided to you with the conditions stated below in this document. Every time you visit this website you accept the following conditions. This is why we urge you to read them carefully." }),
			/* @__PURE__ */ jsx("h2", { children: "Privacy Policy" }),
			/* @__PURE__ */ jsxs("p", { children: [
				"Before you continue using our website we advise you to read our",
				" ",
				/* @__PURE__ */ jsx("a", {
					href: "https://api.opszero.com/privacy",
					children: "privacy policy"
				}),
				" regarding our user data collection. It will help you better understand our practices. Alternatively, see our",
				" ",
				/* @__PURE__ */ jsx("a", {
					href: "/privacy",
					children: "privacy policy"
				}),
				"."
			] }),
			/* @__PURE__ */ jsx("h2", { children: "Copyright" }),
			/* @__PURE__ */ jsx("p", { children: "Content published on this website (digital downloads, images, texts, graphics, logos) is the property of opsZero, LLC and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of opsZero, LLC, with copyright authorship for this compilation by opsZero, LLC." }),
			/* @__PURE__ */ jsx("h2", { children: "Communications" }),
			/* @__PURE__ */ jsx("p", { children: "The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us." }),
			/* @__PURE__ */ jsx("p", { children: "If you subscribe to the news on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails." }),
			/* @__PURE__ */ jsx("p", { children: "You also agree that all notices, disclosures, agreements, and other communications we provide to you electronically meet the legal requirements that such communications be in writing." }),
			/* @__PURE__ */ jsx("h2", { children: "Applicable Law" }),
			/* @__PURE__ */ jsx("p", { children: "By visiting this website, you agree that the laws of the United States of America, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between opsZero, LLC and you, or its business partners and associates." }),
			/* @__PURE__ */ jsx("h2", { children: "Disputes" }),
			/* @__PURE__ */ jsx("p", { children: "Any dispute related in any way to your visit to this website or to services or products you purchase from us shall be arbitrated by state or federal court in Alameda, California, USA and you consent to exclusive jurisdiction and venue of such courts." }),
			/* @__PURE__ */ jsx("h2", { children: "License and Site Access" }),
			/* @__PURE__ */ jsx("p", { children: "We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us." })
		]
	});
}

//#endregion
//#region src/Compliance.tsx
function Compliance() {
	return /* @__PURE__ */ jsxs("main", {
		className: "container margin-vert--xl",
		children: [
			/* @__PURE__ */ jsx("h1", { children: "Compliance" }),
			/* @__PURE__ */ jsxs("p", { children: [
				"opsZero is committed to compliance with ",
				/* @__PURE__ */ jsx("strong", { children: "HIPAA" }),
				",",
				" ",
				/* @__PURE__ */ jsx("strong", { children: "PCI" }),
				", and ",
				/* @__PURE__ */ jsx("strong", { children: "SOC2" }),
				" through the enforcement of stringent privacy and security policies and procedures. opsZero meets or exceeds the HIPAA, PCI, and SOC2 standards in the following ways:"
			] }),
			/* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsx("li", { children: "opsZero has leading technical security standards in place to encrypt and protect data at every point in flight and at rest." }),
				/* @__PURE__ */ jsx("li", { children: "opsZero undertakes a risk assessment on a regular basis and updates its processes for best practices." }),
				/* @__PURE__ */ jsx("li", { children: "opsZero has a process for information system monitoring and information security policy and procedure management." }),
				/* @__PURE__ */ jsx("li", { children: "opsZero has implemented and trains all employees and contractors on a complete set of Policies and Procedures which dictate acceptable work practices for a compliance environment." }),
				/* @__PURE__ */ jsx("li", { children: "opsZero requires all employees and contractors working with PHI to complete training before accessing sensitive data." }),
				/* @__PURE__ */ jsx("li", { children: "opsZero takes the appropriate measures and continuously reassesses all policies and procedures to ensure that regulatory requirements are met, and that data privacy and security is stringently maintained." })
			] }),
			/* @__PURE__ */ jsxs("p", { children: [
				"Contact opsZero at",
				" ",
				/* @__PURE__ */ jsx("a", {
					href: "mailto:privacy@opszero.com",
					children: "privacy@opszero.com"
				}),
				" for any follow-up questions."
			] })
		]
	});
}

//#endregion
//#region src/SectionCTA.tsx
function SectionCTA() {
	return /* @__PURE__ */ jsxs("section", {
		style: {
			background: "linear-gradient(135deg, #92CFFF 0%, #071db0d0 100%)",
			color: "#fff",
			padding: "4rem 2rem",
			textAlign: "center"
		},
		children: [
			/* @__PURE__ */ jsx("h1", {
				style: {
					fontSize: "2.5rem",
					fontWeight: "700",
					marginBottom: "1.5rem"
				},
				children: "Ready to Transform Your Infrastructure?"
			}),
			/* @__PURE__ */ jsx("p", {
				style: {
					fontSize: "1.25rem",
					maxWidth: "800px",
					margin: "0 auto 2rem auto",
					lineHeight: "1.6"
				},
				children: "opsZero Terraform modules help you build secure, scalable, and compliant cloud environments with ease."
			}),
			/* @__PURE__ */ jsx("a", {
				className: "button button--primary",
				style: {
					backgroundColor: "#fff",
					color: "#2D5EFF",
					fontWeight: "600",
					fontSize: "1rem",
					padding: "0.75rem 1.5rem",
					borderRadius: "8px",
					textDecoration: "none",
					display: "inline-block"
				},
				href: "https://calendly.com/opszero-llc/discovery?month=2024-08",
				children: "Schedule Your Demo Now"
			})
		]
	});
}

//#endregion
//#region src/about.tsx
function About({ headContent }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		headContent,
		/* @__PURE__ */ jsx("section", {
			className: "container padding-vert--xl",
			children: /* @__PURE__ */ jsxs("div", {
				className: "row",
				children: [/* @__PURE__ */ jsx("div", {
					className: "col col--5",
					children: /* @__PURE__ */ jsxs("h1", {
						className: "padding-bottom--sm",
						style: {
							fontSize: "2.25rem",
							lineHeight: "1.6"
						},
						children: [
							"Trusted ",
							/* @__PURE__ */ jsx("br", {}),
							" Kubernetes ",
							/* @__PURE__ */ jsx("br", {}),
							" Infrastructure"
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "col col--7",
					children: /* @__PURE__ */ jsxs("p", {
						className: "margin-top--xs",
						style: {
							fontSize: "1.25rem",
							lineHeight: "1.6"
						},
						children: [
							"Our services are designed to enhance the productivity,",
							/* @__PURE__ */ jsx("br", {}),
							"security, compliance, reliability, and scalability of your ",
							/* @__PURE__ */ jsx("br", {}),
							"organization’s public cloud operations."
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container padding-vert--xl",
			children: /* @__PURE__ */ jsxs("div", {
				className: "row",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "col col--4",
						children: /* @__PURE__ */ jsx("div", {
							className: "card",
							style: { height: "100%" },
							children: /* @__PURE__ */ jsxs("div", {
								className: "card__body text--center",
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 36,
										lineHeight: 1,
										marginBottom: 8
									},
									children: "🛠️"
								}), /* @__PURE__ */ jsx("h3", {
									className: "margin-bottom--none",
									children: "Productivity"
								})]
							})
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "col col--4",
						children: /* @__PURE__ */ jsx("div", {
							className: "card",
							style: { height: "100%" },
							children: /* @__PURE__ */ jsxs("div", {
								className: "card__body text--center",
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 36,
										lineHeight: 1,
										marginBottom: 8
									},
									children: "🔐"
								}), /* @__PURE__ */ jsx("h3", {
									className: "margin-bottom--none",
									children: "Security & Compliance"
								})]
							})
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "col col--4",
						children: /* @__PURE__ */ jsx("div", {
							className: "card",
							style: { height: "100%" },
							children: /* @__PURE__ */ jsxs("div", {
								className: "card__body text--center",
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: 36,
										lineHeight: 1,
										marginBottom: 8
									},
									children: "📈"
								}), /* @__PURE__ */ jsx("h3", {
									className: "margin-bottom--none",
									children: "Scalability"
								})]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			style: {
				backgroundColor: "#88a4b1ff",
				padding: "4rem 0"
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: "container",
				children: [/* @__PURE__ */ jsx("div", {
					className: "row",
					children: /* @__PURE__ */ jsx("div", {
						className: "col col--12",
						children: /* @__PURE__ */ jsx("h1", {
							className: "text--center margin-bottom--lg",
							children: "Why is opsZero the trustworthy choice for leveraging the power of Kubernetes?"
						})
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "row",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "col col--4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "card__header",
								children: /* @__PURE__ */ jsx("h4", {
									className: "text--center",
									children: "People-First"
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "card__body",
								children: /* @__PURE__ */ jsx("p", {
									className: "text--center",
									children: "Whether you’re a CTO, CEO, or Engineer, opsZero ensures your unique requirements are understood and addressed. We work closely with your team over Slack so your cloud infrastructure goals align with both technical and business objectives."
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col col--4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "card__header",
								children: /* @__PURE__ */ jsx("h4", {
									className: "text--center",
									children: "Partner-Focused"
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "card__body",
								children: /* @__PURE__ */ jsx("p", {
									className: "text--center",
									children: "We build win-win partnerships that deliver value. Our network of partners helps reduce costs, unlock needed technology, and drive your business objectives forward."
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col col--4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "card__header",
								children: /* @__PURE__ */ jsx("h4", {
									className: "text--center",
									children: "Think Long-Term"
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "card__body",
								children: /* @__PURE__ */ jsx("p", {
									className: "text--center",
									children: "We think you every stage of your growth and seek to anticipate what you need whether it is access to technology, infrastructure scalability, or security and compliance needs. We have your back."
								})
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container padding-vert--xl",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text--center margin-bottom--lg",
				children: "Our Team"
			}), /* @__PURE__ */ jsxs("div", {
				className: "row",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "col col--4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "card",
							style: { height: "100%" },
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "card__image",
									style: { padding: 24 },
									children: /* @__PURE__ */ jsx("img", {
										src: "https://i0.wp.com/opszero.com/wp-content/uploads/2024/03/Abhi-Yerra.png?resize=300%2C300&ssl=1",
										alt: "Abhi Yerra",
										width: 200,
										height: 200,
										style: {
											display: "block",
											margin: "0 auto",
											borderRadius: "50%"
										},
										loading: "eager"
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "card__header text--center",
									children: [/* @__PURE__ */ jsx("p", {
										className: "margin-bottom--xs",
										style: { fontSize: "1.4rem" },
										children: "Abhi Yerra"
									}), /* @__PURE__ */ jsx("h5", {
										className: "margin--none",
										children: "CEO / Technical Lead"
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "card__footer text--center",
									children: /* @__PURE__ */ jsx("a", {
										className: "button button--secondary button--sm",
										href: "https://www.linkedin.com/in/abhiyerra/",
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "Abhi Yerra on LinkedIn",
										children: "LinkedIn"
									})
								})
							]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "col col--4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "card",
							style: { height: "100%" },
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "card__image",
									style: { padding: 24 },
									children: /* @__PURE__ */ jsx("img", {
										src: "https://i0.wp.com/opszero.com/wp-content/uploads/2024/03/Michael-Doherty-.png?resize=300%2C300&ssl=1",
										alt: "Michael Doherty",
										width: 200,
										height: 200,
										style: {
											display: "block",
											margin: "0 auto",
											borderRadius: "50%"
										},
										loading: "lazy"
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "card__header text--center",
									children: [/* @__PURE__ */ jsx("p", {
										className: "margin-bottom--xs",
										style: { fontSize: "1.4rem" },
										children: "Michael Doherty"
									}), /* @__PURE__ */ jsx("h5", {
										className: "margin--none",
										children: "VP of Operations and Partnerships"
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "card__footer text--center",
									children: /* @__PURE__ */ jsx("a", {
										className: "button button--secondary button--sm",
										href: "https://www.linkedin.com/in/mzdoherty/",
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "Michael Doherty on LinkedIn",
										children: "LinkedIn"
									})
								})
							]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "col col--4",
						children: /* @__PURE__ */ jsxs("div", {
							className: "card",
							style: { height: "100%" },
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "card__image",
									style: { padding: 24 },
									children: /* @__PURE__ */ jsx("img", {
										src: "https://i0.wp.com/opszero.com/wp-content/uploads/2024/03/Mark-Beasley.png?resize=300%2C300&ssl=1",
										alt: "Mark Beasley",
										width: 200,
										height: 200,
										style: {
											display: "block",
											margin: "0 auto",
											borderRadius: "50%"
										},
										loading: "lazy"
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "card__header text--center",
									children: [/* @__PURE__ */ jsx("p", {
										className: "margin-bottom--xs",
										style: { fontSize: "1.4rem" },
										children: "Mark Beasley"
									}), /* @__PURE__ */ jsx("h5", {
										className: "margin--none",
										children: "Senior Sales Executive"
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "card__footer text--center",
									children: /* @__PURE__ */ jsx("a", {
										className: "button button--secondary button--sm",
										href: "https://www.linkedin.com/in/markbeasley2000/",
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "Mark Beasley on LinkedIn",
										children: "LinkedIn"
									})
								})
							]
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ jsx(SectionCTA, {})
	] });
}

//#endregion
//#region src/index.tsx
const cloudAIItems = [
	{
		label: "Kubespot - Your Kubernetes Team",
		href: "https://kubespot.com"
	},
	{
		label: "Deepfacts - Your AI Team",
		href: "https://deepfacts.ai/"
	},
	{
		label: "PolicyCop - Your Compliance Team",
		href: "https://policycop.com"
	},
	{
		label: "DBAZero - Database Performance Tuning",
		href: "https://dbazero.com"
	},
	{
		label: "DiscountCloud - Up to 5% off your Cloud Bill",
		href: "https://discountcloud.io/"
	}
];
const footerLinks = [
	{
		title: "Your Cloud + AI Team",
		items: cloudAIItems
	},
	{
		title: "Marketplaces",
		items: [
			{
				label: "AWS Marketplace",
				href: "https://aws.amazon.com/marketplace/seller-profile?id=1cfa0be5-3fcc-417a-83a8-eac1274450c3"
			},
			{
				label: "Terraform Registry",
				href: "https://registry.terraform.io/namespaces/opszero"
			},
			{
				label: "AI Platform Alliance",
				href: "https://platformalliance.ai/company/opszero/"
			}
		]
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
                <img src="https://opszero.com/img/common/aws-advanced.png" alt="AWS Advanced Tier" />
                <img src="https://opszero.com/img/common/aws-devops-competency.png" alt="AWS DevOps Competency" />
                <img src="https://opszero.com/img/common/aws-eks.png" alt="AWS EKS Delivery" />
                <img src="https://opszero.com/img/common/aws-public-sector.png" alt="AWS Public Sector" />
                <img src="https://opszero.com/img/common/cmmc-cyberab.webp" alt="Cyber AB CMMC" />
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row" style="align-items: center; text-align: center;">
                        <div class="col col--4">
                            <a href="https://opszero.com"><img src="https://opszero.com/img/common/opsZero-Logo-Large.webp" alt="opsZero" style="max-width: 200px; height: auto;" /></a>
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
                                        src="https://opszero.com/img/common/linkedin.svg"
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
                                        src="https://opszero.com/img/common/github.svg"
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
export { About, Compliance, ContactPage, Privacy, TermsOfService, cloudAIItems, copyrightFooter, footerLinks };
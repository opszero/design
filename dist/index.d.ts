import * as react_jsx_runtime2 from "react/jsx-runtime";

//#region src/ContactPage.d.ts
declare function ContactPage(): react_jsx_runtime2.JSX.Element;
//#endregion
//#region src/Privacy.d.ts
declare function Privacy(): react_jsx_runtime2.JSX.Element;
//#endregion
//#region src/TermsOfService.d.ts
declare function TermsOfService(): react_jsx_runtime2.JSX.Element;
//#endregion
//#region src/Compliance.d.ts
declare function Compliance(): react_jsx_runtime2.JSX.Element;
//#endregion
//#region src/index.d.ts
declare const cloudAIItems: {
  label: string;
  href: string;
}[];
declare const footerLinks: {
  title: string;
  items: ({
    label: string;
    to: string;
    href?: undefined;
  } | {
    label: string;
    href: string;
    to?: undefined;
  })[];
}[];
declare function copyrightFooter(): string;
//#endregion
export { Compliance, ContactPage, Privacy, TermsOfService, cloudAIItems, copyrightFooter, footerLinks };
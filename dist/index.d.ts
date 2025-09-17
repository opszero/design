//#region src/ContactPage.d.ts
declare function ContactPage(): any;
//#endregion
//#region src/Privacy.d.ts
declare function Privacy(): any;
//#endregion
//#region src/TermsOfService.d.ts
declare function TermsOfService(): any;
//#endregion
//#region src/Compliance.d.ts
declare function Compliance(): any;
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
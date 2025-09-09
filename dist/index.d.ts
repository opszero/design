//#region src/ContactPage.d.ts
declare function ContactPage(): any;
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
export { ContactPage, cloudAIItems, copyrightFooter, footerLinks };
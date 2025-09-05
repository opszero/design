import React from 'react';
import Link from '@docusaurus/Link';

type FooterSectionProps = {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
};

export default function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div className="col col--3">
      <h4>{title}</h4>
      {links.map((link, idx) => (
        <p key={idx}>
          <Link to={link.href} {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}>
            {link.label}
          </Link>
        </p>
      ))}
    </div>
  );
}

import React from 'react';
import FooterSection from './FooterSection';
import Link from '@docusaurus/Link';
import FooterLogoCarousel from './FooterLogoCarousel';
import { FaLinkedin, FaGithub } from 'react-icons/fa';  // ✅ import icons

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Grid Sections */}
        <div className="row">
          <FooterSection
            title="Solutions"
            links={[
              { label: 'Startup Launch', href: '/startup-launch/' },
              { label: 'Modernization & AI', href: '/solutions/modernization/' },
              { label: 'Managed DevOps', href: '/solutions/devops/' },
              { label: 'Managed Datacenters', href: '/solutions/datacenters' },
              { label: 'Compliance Remediation', href: '/solutions/compliance-remediation/' },
            ]}
          />
          <FooterSection
            title="Marketplaces"
            links={[
              { label: 'AWS Marketplace', href: 'https://aws.amazon.com/marketplace/', external: true },
              { label: 'Terraform Registry', href: 'https://registry.terraform.io/', external: true },
              { label: 'GitHub', href: 'https://github.com/opszero', external: true },
              { label: 'Privacy Policy', href: '/about/privacy/' },
              { label: 'Terms of Service', href: '/about/terms-of-service/' },
              { label: 'Compliance', href: '/compliance/' },
            ]}
          />
          <FooterSection
            title="About"
            links={[
              { label: 'Blog', href: '/blog/' },
              { label: 'Partner with Us', href: '/partners/' },
              { label: 'Testimonials', href: '/testimonials/' },
              { label: 'Changelog', href: '/changelog/' },
              { label: 'Status', href: 'https://status.opszero.com/', external: true },
            ]}
          />
          <FooterSection
            title="Public Sector"
            links={[
              { label: 'Capabilities Statement', href: '/wp-content/uploads/2024/01/capabilities.pdf' },
              { label: 'CAGE: 9HYJ2', href: 'https://cage.dla.mil/Home/UsageAgree', external: true },
              { label: 'DUNS: 080876128', href: 'https://www.dnb.com/', external: true },
              { label: 'UEI: ZT4AR949B5T3', href: '#' },
            ]}
          />
        </div>

        {/* Divider */}
        <hr style={{ margin: '2rem 0', border: 'none', height: '2px', backgroundColor: 'var(--ifm-color-emphasis-800)' }} />

        <FooterLogoCarousel />

        {/* Divider */}
        <hr style={{ margin: '2rem 0', border: 'none', height: '2px', backgroundColor: 'var(--ifm-color-emphasis-800)' }} />

        {/* Bottom Footer Row */}
        <div className="row">
          <div className="col col--4" style={{ textAlign: 'center' }}>
            <img
              src="/img/uploads/2024/03/opsZero-Logo-Large.webp"
              alt="opsZero Logo"
              style={{ maxWidth: '200px', height: 'auto' }}
            />
          </div>
          <div className="col col--4" style={{ textAlign: 'center' }}>
            <p>©2016–2025 opsZero, LLC</p>
          </div>
          <div className="col col--4" style={{ textAlign: 'center' }}>
            <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Link
                to="https://www.linkedin.com/company/opszero/"
                target="_blank"
                rel="noopener"
                title="LinkedIn"
              >
                <FaLinkedin size={28} color="#0A66C2" />   {/* ✅ LinkedIn icon */}
              </Link>
              <Link
                to="https://github.com/opszero"
                target="_blank"
                rel="noopener"
                title="GitHub"
              >
                <FaGithub size={28} color="#181717" />     {/* ✅ GitHub icon */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

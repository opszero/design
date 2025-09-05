import React from 'react';
import styles from './Footer.module.css';
import Link from '@docusaurus/Link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">

          {/* Logo + Description */}
          <div className="col col--4">
            <img
              src="/img/logo.svg"
              alt="OpsZero Logo"
              className={styles.logo}
            />
            <p className={styles.tagline}>
              Helping you build and scale with confidence.
            </p>
          </div>

          {/* Navigation */}
          <div className="col col--4">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Legal + Social */}
          <div className="col col--4">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/opszero">GitHub</a></li>
              <li><a href="https://twitter.com/opszero">Twitter</a></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} OpsZero LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


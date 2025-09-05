import React from 'react';
import styles from './FooterLogoCarousel.module.css'; // optional for additional styling

const logos = [
  { src: '/img/uploads/2024/07/aws-advanced.png', alt: 'AWS Advanced Tier' },
  { src: '/img/uploads/2024/07/AWS-public-sector.png', alt: 'AWS Public Sector' },
  { src: '/img/uploads/2024/07/AWS-eks.png', alt: 'AWS EKS Delivery' },
  { src: '/img/uploads/2024/03/15.webp', alt: 'Cyber AB CMMC' },
];

export default function FooterLogoCarousel() {
  return (
    <div className={`container margin-top--lg ${styles.carousel}`}>
      <div className="row">
        {logos.map((logo, idx) => (
          <div className="col col--3" key={idx}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                maxHeight: '120px',     // ✅ reduces image height
                objectFit: 'contain',   // ✅ keeps full image within container
                width: '100%',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


const cloudItems = [
    { label: 'Kubespot - Compliance and AI Ready Kubernetes', href: 'https://kubespot.com' },
    { label: 'DBAZero - Database Performance Tuning', href: 'https://dbazero.com' },
    { label: 'PolicyCop - SOC2/HIPAA/FedRamp Compliance Remediation', href: 'https://policycop.com' },
    { label: 'DiscountCloud.io - Up to 5% Off Cloud Bills', href: 'https://discountcloud.io/' },
    { label: 'OMYAC - Cloud Waste Finder', href: 'https://omyac.cloud' },
    { label: 'deepfacts.ai - Healthcare AI', href: 'https://deepfacts.ai/' },
]

export const footerLinks = [
    {
        title: 'Cloud + AI',
        items: cloudItems,
    },
    {
        title: 'Marketplaces',
        items: [
            { label: 'AWS Marketplace', href: 'https://aws.amazon.com/marketplace/seller-profile?id=1cfa0be5-3fcc-417a-83a8-eac1274450c3' },
            { label: 'Terraform Registry', href: 'https://registry.terraform.io/namespaces/opszero' },
        ]
    },
    {
        title: 'Resources',
        items: [
            { label: 'Docs', to: '/docs' },
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/opszero' },
            { label: 'Status', href: 'https://status.opszero.com/' },
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms of Service', to: '/terms-of-service' },
            { label: 'Compliance', to: '/compliance' },
            { label: 'Contact', to: '/contact' },
            // { label: 'Capabilities Statement', to: '/capabilities' },
        ],
    },
    // {
    //   title: 'Public Sector',
    //   items: [
    //     { label: 'CAGE: 9HYJ2', href: '#' },
    //     { label: 'DUNS: 080876128', href: '#' },
    //     { label: 'UEI: ZT4AR949B5T3', href: '#' },

    //   ],
    // },
];

export function copyrightFooter(): string {
    const year = new Date().getFullYear();
    const style = `
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
    `


    return `
<style>${style}</style>

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
                            <img src="https://opszero.com/img/common/opsZero-Logo-Large.webp" alt="opsZero" style="max-width: 200px; height: auto;" />
                        </div>
                        <div class="col col--4">
                            <p>©2016–${year} opsZero, LLC </p>
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

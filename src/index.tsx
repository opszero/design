

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
<style>{style}</style>

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
                            <img src="/img/common/opsZero-Logo-Large.webp" alt="opsZero Logo" style="max-width: 200px; height: auto;" />
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

export function copyrightFooter(): string {
    const year = new Date().getFullYear();
    return `<div class="footer-badges">
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
                            <img src="/img/uploads/2024/03/opsZero-Logo-Large.webp" alt="opsZero Logo" style="max-width: 200px; height: auto;" />
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
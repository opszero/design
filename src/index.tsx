
import ReactDOMServer from 'react-dom/server';

export function copyrightFooter(): string {
    const year = new Date().getFullYear();
    return ReactDOMServer.renderToStaticMarkup(
        <>
            <div className="footer-badges" >
                <img src="/img/uploads/2024/07/aws-advanced.png" alt="AWS Advanced Tier" />
                <img src="/img/uploads/2024/07/AWS-devops-competency.png" alt="AWS DevOps Competency" />
                <img src="/img/uploads/2024/07/AWS-eks.png" alt="AWS EKS Delivery" />
                <img src="/img/uploads/2024/07/AWS-public-sector.png" alt="AWS Public Sector" />
                <img src="/img/uploads/2024/03/15.webp" alt="Cyber AB CMMC" />
            </div>
            < div className="footer-bottom" >
                <div className="container" >
                    <div className="row" style={{ alignItems: "center", textAlign: "center" }} >
                        <div className="col col--4" >
                            <img src="/img/uploads/2024/03/opsZero-Logo-Large.webp" alt="opsZero Logo" style="max-width: 200px; height: auto;" />
                        </div>
                        < div className="col col--4" >
                            <p>©2016–{year} opsZero, LLC </p>
                        </div>
                        < div className="col col--4" >
                            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                                <a
                                    href="https://www.linkedin.com/company/opszero/"
                                    target="_blank"
                                    rel="noopener"
                                    title="LinkedIn"
                                >
                                    <img
                                        src="/img/uploads/LinkedIn.svg"
                                        alt="LinkedIn"
                                        style={{ height: "28px" }}
                                    />
                                </a>
                                <a
                                    href="https://github.com/opszero"
                                    target="_blank"
                                    rel="noopener"
                                    title="GitHub"
                                >
                                    <img
                                        src="/img/uploads/GitHub.svg"
                                        alt="GitHub"
                                        style={{ height: "28px" }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React, { ReactNode } from "react";
import { SectionCTA } from "./SectionCTA";

type Props = {
  headContent?: ReactNode;
};

export function About({ headContent }: Props) {
  return (
    <>
      {headContent}
 <section className="container padding-vert--xl">
        <div className="row">
          <div className="col col--5">
            <h1 className="padding-bottom--sm"  style={{ fontSize: "2.25rem", lineHeight: "1.6" }}>Trusted <br/> Kubernetes <br/> Infrastructure</h1>
          </div>
<div className="col col--7">
  <p className="margin-top--xs" style={{ fontSize: "1.25rem", lineHeight: "1.6" }}>
    Our services are designed to enhance the productivity,<br />
    security, compliance, reliability, and scalability of your <br />
    organization’s public cloud operations.
  </p>
</div>

        </div>
      </section>

      <section className="container padding-vert--xl">
        <div className="row">
          <div className="col col--4">
            <div className="card" style={{ height: "100%" }}>
              <div className="card__body text--center">
                <div style={{ fontSize: 36, lineHeight: 1, marginBottom: 8 }}>🛠️</div>
                <h3 className="margin-bottom--none">Productivity</h3>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card" style={{ height: "100%" }}>
              <div className="card__body text--center">
                <div style={{ fontSize: 36, lineHeight: 1, marginBottom: 8 }}>🔐</div>
                <h3 className="margin-bottom--none">Security &amp; Compliance</h3>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card" style={{ height: "100%" }}>
              <div className="card__body text--center">
                <div style={{ fontSize: 36, lineHeight: 1, marginBottom: 8 }}>📈</div>
                <h3 className="margin-bottom--none">Scalability</h3>
              </div>
            </div>
          </div>
        </div>
      </section>


  <section style={{ backgroundColor: '#88a4b1ff', padding: '4rem 0' }}>
  <div className="container">
    <div className="row">
      <div className="col col--12">
        <h1 className="text--center margin-bottom--lg">
          Why is opsZero the trustworthy choice for leveraging the power of Kubernetes?
        </h1>
      </div>
    </div>
    <div className="row">
      <div className="col col--4">
    
          <div className="card__header">
            <h4 className="text--center">People-First</h4>
          </div>
          <div className="card__body">
            <p className="text--center">
              Whether you’re a CTO, CEO, or Engineer, opsZero ensures your unique
              requirements are understood and addressed. We work closely with your team
              over Slack so your cloud infrastructure goals align with both technical
              and business objectives.
            </p>
          
        </div>
      </div>

      <div className="col col--4">
      
          <div className="card__header">
            <h4 className="text--center">Partner-Focused</h4>
          </div>
          <div className="card__body">
            <p className="text--center">
              We build win-win partnerships that deliver value. Our network of partners
              helps reduce costs, unlock needed technology, and drive your business
              objectives forward.
            </p>
      
        </div>
      </div>

      <div className="col col--4">

          <div className="card__header">
            <h4 className="text--center">Think Long-Term</h4>
          </div>
          <div className="card__body">
            <p className="text--center">
              We think you every stage of your growth and seek to anticipate what you need whether it is access to technology, infrastructure scalability, or security and compliance needs. We have your back.
            </p>
          </div>
   
      </div>
    </div>
  </div>
</section>



      <section className="container padding-vert--xl">
        <h1 className="text--center margin-bottom--lg">Our Team</h1>

        <div className="row">

          <div className="col col--4">
            <div className="card" style={{ height: "100%" }}>
              <div className="card__image" style={{ padding: 24 }}>
                <img
                  src="https://i0.wp.com/opszero.com/wp-content/uploads/2024/03/Abhi-Yerra.png?resize=300%2C300&ssl=1"
                  alt="Abhi Yerra"
                  width={200}
                  height={200}
                  style={{ display: "block", margin: "0 auto", borderRadius: "50%" }}
                  loading="eager"
                />
              </div>
              <div className="card__header text--center">
                <p className="margin-bottom--xs" style={{ fontSize: "1.4rem" }}>
                  Abhi Yerra
                </p>
                <h5 className="margin--none">CEO / Technical Lead</h5>
              </div>
              <div className="card__footer text--center">
                <a
                  className="button button--secondary button--sm"
                  href="https://www.linkedin.com/in/abhiyerra/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abhi Yerra on LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="col col--4">
            <div className="card" style={{ height: "100%" }}>
              <div className="card__image" style={{ padding: 24 }}>
                <img
                  src="https://i0.wp.com/opszero.com/wp-content/uploads/2024/03/Michael-Doherty-.png?resize=300%2C300&ssl=1"
                  alt="Michael Doherty"
                  width={200}
                  height={200}
                  style={{ display: "block", margin: "0 auto", borderRadius: "50%" }}
                  loading="lazy"
                />
              </div>
              <div className="card__header text--center">
                <p className="margin-bottom--xs" style={{ fontSize: "1.4rem" }}>
                  Michael Doherty
                </p>
                <h5 className="margin--none">VP of Operations and Partnerships</h5>
              </div>
              <div className="card__footer text--center">
                <a
                  className="button button--secondary button--sm"
                  href="https://www.linkedin.com/in/mzdoherty/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Michael Doherty on LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="col col--4">
            <div className="card" style={{ height: "100%" }}>
              <div className="card__image" style={{ padding: 24 }}>
                <img
                  src="https://i0.wp.com/opszero.com/wp-content/uploads/2024/03/Mark-Beasley.png?resize=300%2C300&ssl=1"
                  alt="Mark Beasley"
                  width={200}
                  height={200}
                  style={{ display: "block", margin: "0 auto", borderRadius: "50%" }}
                  loading="lazy"
                />
              </div>
              <div className="card__header text--center">
                <p className="margin-bottom--xs" style={{ fontSize: "1.4rem" }}>
                  Mark Beasley
                </p>
                <h5 className="margin--none">Senior Sales Executive</h5>
              </div>
              <div className="card__footer text--center">
                <a
                  className="button button--secondary button--sm"
                  href="https://www.linkedin.com/in/markbeasley2000/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Mark Beasley on LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionCTA />
    </>
  );
}

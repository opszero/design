

export function ContactPage() {
  return (
    <main>
      {/* Top Section */}
      <section className="container padding-vert--xl">
        <div className="row">
          {/* Left Column - Text */}
          <div className="col col--6">
            <h1 style={{ fontSize: 50, lineHeight: 1.5 }}>How can we help?</h1>
            <p style={{ fontSize: 20, lineHeight: 1.5, marginBottom: 30 }}>
              We are committed to building long-lasting  <br />
              partnerships that  drive innovation and look forward  <br />
              to learning more about the vision of your<br />
              organization.
            </p>
            <a
              className="button button--primary"
              href="https://calendly.com/opszero-llc/discovery"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a call
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="col col--6" style={{ textAlign: "center" }}>
            <img
              src="https://opszero.com/img/OpsZero-Contact.png"
              alt="Contact"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Calendly + Contact Info Section */}
      <section className="container padding-vert--xl">
        <div className="row">
          {/* Calendly Embed Column */}
          <div className="col col--9">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/opszero-llc/discovery"
              style={{ minWidth: "320px", height: "1200px" }}
            ></div>
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            ></script>
          </div>
          {/* Contact Info Column */}
          <div className="col col--3">
            <h3 style={{ color: "#1d4ed8" }}>Contact</h3>
            <p>
              <a href="tel:+15102882791">(510) 288-2791</a>
              <br />
              hi (at) opszero (dot) com
            </p>
            <h3 style={{ color: "#1d4ed8" }}>Our Office</h3>
            <p>
              422 Benton St
              <br />
              Santa Rosa, CA 95401
            </p>
          </div>
        </div>
      </section>
    </main>

  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

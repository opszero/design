
export function SectionCTA() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #92CFFF 0%, #071db0d0 100%)',
        color: '#fff',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
        Ready to Transform Your Infrastructure?
      </h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
        opsZero Terraform modules help you build secure, scalable, and compliant cloud environments with ease.
      </p>
      <a
        className="button button--primary"
        style={{
          backgroundColor: '#fff',
          color: '#2D5EFF',
          fontWeight: '600',
          fontSize: '1rem',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          display: 'inline-block',
        }}
        href="https://calendly.com/opszero-llc/discovery?month=2024-08"
      >
        Schedule Your Demo Now
      </a>
    </section>
  );
}

export function FaqsPage({ faqs }) {
  return (
    <main>
  
      <section className="container padding-vert--xl">
   
        <h2 className="text--center">Frequently Asked Questions</h2>
        <p className="text--center margin-bottom--lg">
          If you can’t find what you’re looking for, email our support team and
          if you’re lucky someone will get back to you.
        </p>

       
        <div className="row">
          {faqs.map((faq, idx) => (
            <div className="col col--6 col--12 margin-bottom--lg" key={idx}>
              <h3 className="margin-bottom--sm">{faq.question}</h3>
              <div >{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

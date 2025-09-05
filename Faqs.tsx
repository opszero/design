import React from 'react';
import styles from './faqs.module.css';

const faqs = [
  {
    question: 'What is DiscountCloud?',
    answer: (
      <>
        DiscountCloud is a service provided by <a href="https://opszero.com">opsZero</a> that helps you save money on your AWS and Azure bills. By partnering with AWS, Ingram Micro, Pax8 and other distributors we are able to return the discounts that we receive directly back to you.
      </>
    ),
  },
  {
    question: 'How does it work?',
    answer: (
      <>
        DiscountCloud works by moving your payments to one our distributors Ingram Micro and Pax8 who manage the billing. You pay us directly and we pay the distributor. We do not need anything else from you.
      </>
    ),
  },
  {
    question: 'Do you purchase Reserved Instances, Savings Plans, etc.?',
    answer: (
      <>
        No, we only touch billing and do not touch anything within your accounts. For reserved instances and savings plans purchases talk to our friends at <a href="https://opszero.com">opsZero</a>.
      </>
    ),
  },
  {
    question: 'How are refunds applied?',
    answer: (
      <>
        For AWS we bill the MSRP every month on the 5th and send the payments. We receive the refunds on the 19th from AWS which we apply to your account.
      </>
    ),
  },
  {
    question: 'Why haven\'t I received a full 5% refund?',
    answer: (
      <>
        Certain services like AWS Marketplace are not available for discounts. If you are using these services you will not receive a discount for those services.
      </>
    ),
  },
  {
    question: 'What payment method do you take?',
    answer: (
      <>
        We bill through Stripe and take ACH payments in USD.
      </>
    ),
  },
  {
    question: 'Who is behind DiscountCloud?',
    answer: (
      <>
        opsZero is a bootstrapped DevOps agency that has been around since 2016 that started DiscountCloud. As we developed our relationships with AWS and other distributors we realized we could return the discounts we receive directly back to you.
      </>
    ),
  },
  {
    question: 'Is there a referral program?',
    answer: (
      <>
        Yes, send us a referral and if they convert to being a customer we will send you 50% of their monthly fee as long as they are a customer.
      </>
    ),
  },
];

export default function Faqs() {
  return (
    <section className={styles.faqSection}>
      <div className="container">
        <h2 className="text--center">Frequently Asked Questions</h2>
        <p className="text--center margin-bottom--lg">
          If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.
        </p>
        <div className="row">
          {faqs.map((faq, idx) => (
            <div className="col col--4 margin-bottom--lg" key={idx}>
              <h3 className={styles.faqTitle}>{faq.question}</h3>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

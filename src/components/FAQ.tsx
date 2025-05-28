
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: 'How quickly will I see results?',
      answer: 'Most customers see 20-40% improvement in deliverability within the first week, with full optimization typically achieved within 2-3 weeks.'
    },
    {
      question: 'Do I need technical knowledge to set this up?',
      answer: 'No! Our platform automatically configures all technical settings. You just need to verify domain ownership and we handle the rest.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We\'re SOC2 compliant, use enterprise-grade encryption, and never store your email content - only metadata for optimization.'
    },
    {
      question: 'Can I integrate with my existing tools?',
      answer: 'Yes, we integrate with Gmail, Outlook, Zoho, HubSpot, Salesforce, and 50+ other platforms via API and Zapier.'
    },
    {
      question: 'What if I\'m not satisfied?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not seeing improved deliverability, we\'ll refund your first month.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

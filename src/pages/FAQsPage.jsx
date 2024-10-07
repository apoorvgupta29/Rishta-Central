import React from 'react';

const faqs = [
  {
    question: 'How do I create a profile?',
    answer: 'To create a profile, click on the "Create Profile" button on the homepage and follow the guided prompts to fill in your information.',
  },
  {
    question: 'Is my information secure?',
    answer: 'Yes, we take your privacy seriously. Your information is encrypted and stored securely. We never share your personal data with third parties without your consent.',
  },

];

function FAQsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl text-gray-500 font-semibold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQsPage;
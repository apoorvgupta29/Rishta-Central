import React from 'react';

function PaymentsAndSupportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Payments and Support</h1>
      <div className="bg-white rounded-lg text-black shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>
        <p className="mb-4">We accept the following payment methods:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Credit/Debit Cards</li>
          <li>PayPal</li>
          <li>Bank Transfer</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="mb-4">If you need assistance with billing or have any other questions, please don't hesitate to contact our support team:</p>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200 inline-block"
        >
          Contact Support via WhatsApp
        </a>
      </div>
    </div>
  );
}

export default PaymentsAndSupportPage;
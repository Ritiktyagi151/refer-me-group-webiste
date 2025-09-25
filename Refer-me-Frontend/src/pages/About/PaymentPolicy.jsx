import React from "react";

const PaymentPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-indigo-700 px-6 py-8 sm:px-10 sm:py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Payment, Refund & Returns Policy
          </h1>
          <p className="text-indigo-100 max-w-2xl mx-auto">
            Clear guidelines for your transactions with us
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-8 sm:px-10 sm:py-12 space-y-12">
          {/* Overview */}
          <section className="group">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-lg">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Overview</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Our refund and returns policy lasts 1 or 2 days. If  2 days have passed since your purchase, we can't offer you a full refund or exchange.</p>
                  <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Non-Returnable Items */}
          <section className="group">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 p-2 rounded-lg">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Non-Returnable Items</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Several types of goods are exempt from being returned:</p>
                  <ul className="list-disc pl-5 space-y-2 marker:text-indigo-400">
                   
                   
                    <li>Hazardous materials or flammable liquids/gases</li>
                    <li>Gift cards</li>
                    <li>Downloadable software products</li>
              
                  </ul>
                  <p>To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the manufacturer.</p>
                </div>
              </div>
            </div>
          </section>

 
          {/* Refund Process */}
          <section className="group">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Refunds</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Once your return is received and inspected, we will email you about receipt of your returned item and notify you of the approval or rejection of your refund.</p>
                  <p>If approved, your refund will be processed and credited to your original payment method within a certain number of days.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Late/Missing Refunds */}
          <section className="group">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Late or Missing Refunds</h2>
                <div className="space-y-4 text-gray-600">
                  <p>If you haven't received a refund:</p>
                  <ol className="list-decimal pl-5 space-y-2 marker:font-medium marker:text-indigo-500">
                    <li>Check your bank account again</li>
                    <li>Contact your credit card company (processing time may be required)</li>
                    <li>Contact your bank (processing time may be required)</li>
                    <li>If still unresolved, contact us at <a href="mailto:contact@refermegroup.com" className="text-indigo-600 hover:underline">contact@refermegroup.com</a></li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Sale Items */}
          <section className="group">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-purple-100 p-2 rounded-lg">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Sale Items</h2>
                <p className="text-gray-600">Only regular priced items may be refunded. Sale items cannot be refunded.</p>
              </div>
            </div>
          </section>

          {/* Exchanges */}
          <section className="group">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-cyan-100 p-2 rounded-lg">
                <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Exchanges</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We only replace items if they are defective or damaged. If you need to exchange for the same item, email us at <a href="mailto:contact@refermegroup.com" className="text-indigo-600 hover:underline">contact@refermegroup.com</a>.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Gifts */}
          <section className="group">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-pink-100 p-2 rounded-lg">
                <svg className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m8-8v8m-16-8v8M4 12l8-8 8 8" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Gifts</h2>
                <div className="space-y-4 text-gray-600">
                  <p>If the item was marked as a gift when purchased and shipped directly to you, you'll receive a gift credit for the value of your return. Once received, a gift certificate will be mailed to you.</p>
                  <p>If not marked as a gift or shipped to the gift giver first, we will refund the gift giver who will be notified of your return.</p>
                </div>
              </div>
            </div>
          </section>

        

          {/* Need Help? */}
          <section className="group">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gray-100 p-2 rounded-lg">
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
                <p className="text-gray-600">Contact us at <a href="mailto:contact@refermegroup.com" className="text-indigo-600 hover:underline">contact@refermegroup.com</a> for questions about refunds and returns.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PaymentPolicy;
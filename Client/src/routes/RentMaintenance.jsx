import React, { useState } from 'react';

const RentMaintenance = () => {
  const [payments, setPayments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    apartmentNumber: '',
    amount: '',
    paymentMethod: 'Cash'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paymentIcons = {
    Cash: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3v2c0 1.657 1.343 3 3 3s3-1.343 3-3v-2c0-1.657-1.343-3-3-3zm0 0v2m-9-2h18M3 12h18" />
      </svg>
    ),
    Online: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Card: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    Bank: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
      </svg>
    )
  };

  const gradients = [
    'bg-gradient-to-br from-teal-500 to-blue-600',
    'bg-gradient-to-br from-rose-500 to-pink-600',
    'bg-gradient-to-br from-lime-500 to-emerald-600',
    'bg-gradient-to-br from-fuchsia-500 to-purple-600'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayments([
      ...payments,
      {
        id: payments.length + 1,
        ...formData,
        date: '2025-05-02' // Today's date
      }
    ]);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full md:w-4/5 p-6 md:p-8 relative animate-gradientFade">
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes gradientFade {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-slideIn {
            animation: slideIn 0.3s ease-out;
          }
          .animate-gradientFade {
            background: linear-gradient(135deg, #e2e8f0, #f1f5f9, #e2e8f0);
            background-size: 200% 200%;
            animation: gradientFade 15s ease infinite;
          }
        `}
      </style>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
          Rent & Maintenance Payment
        </h2>
        <p className="text-sm text-gray-500 mt-2">Submit your rent or maintenance payments easily.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="apartmentNumber" className="block text-sm font-medium text-gray-700">
                Apartment Number
              </label>
              <input
                type="text"
                id="apartmentNumber"
                name="apartmentNumber"
                value={formData.apartmentNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                placeholder="e.g., A-101"
                required
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount ($)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                placeholder="e.g., 500"
                required
                min="1"
              />
            </div>
            <div>
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                Payment Method
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
              >
                <option value="Cash">Cash</option>
                <option value="Online">Online</option>
                <option value="Card">Card</option>
                <option value="Bank">Bank</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-200"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
      {payments.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Payment History</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {payments.map((payment, index) => (
              <div
                key={payment.id}
                className={`${gradients[index % gradients.length]} h-48 text-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-4 left-4">{paymentIcons[payment.paymentMethod]}</div>
                <h4 className="text-lg font-semibold mt-8">{payment.name}</h4>
                <p className="text-sm mt-2">Apartment: {payment.apartmentNumber}</p>
                <p className="text-sm mt-1">Amount: ${payment.amount}</p>
                <p className="text-sm mt-1">Method: {payment.paymentMethod}</p>
                <p className="text-sm mt-1">Date: {payment.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="border-2 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 p-1 rounded-lg animate-slideIn">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-gray-900">Payment Submitted</h3>
              <p className="text-sm text-gray-700 mt-4">
                Payment of ${formData.amount} for Apartment {formData.apartmentNumber} via {formData.paymentMethod} has been submitted.
              </p>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setFormData({ name: '', apartmentNumber: '', amount: '', paymentMethod: 'Cash' });
                }}
                className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentMaintenance;
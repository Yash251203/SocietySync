import React, { useState } from 'react';

const ComplaintPage = () => {
  const isAdmin = true; // Set to false to test user mode
  const [selectedComplaintId, setSelectedComplaintId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    houseNumber: '',
    category: '',
    message: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const complaints = [
    {
      id: 1,
      name: 'John Doe',
      houseNumber: 'A101',
      category: 'Maintenance',
      message: 'The air conditioner is broken in my flat.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      houseNumber: 'B202',
      category: 'Security',
      message: 'The security guard did not check the visitors properly yesterday.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      houseNumber: 'C303',
      category: 'Noise',
      message: 'There is loud noise coming from the flat next to mine.',
    },
  ];

  const gradients = [
    'bg-gradient-to-br from-indigo-500 to-blue-600',
    'bg-gradient-to-br from-rose-500 to-pink-600',
    'bg-gradient-to-br from-teal-500 to-cyan-600',
  ];

  const categoryIcons = {
    Maintenance: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.79m0 0L21 21" />
      </svg>
    ),
    Security: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 3c-2.616 0-5.13.815-7.147 2.32m0 0A11.955 11.955 0 013 12c0 5.256 3.255 9.66 7.786 11.42m.426-.426A11.955 11.955 0 0121 12c0-1.797-.484-3.516-1.382-4.984z" />
      </svg>
    ),
    Noise: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H22a1 1 0 01.707 1.707l-1.414 1.414a1 1 0 01-1.414 0L5.586 3.707A1 1 0 014.879 3H2a1 1 0 00-.707 1.707l3.293 3.293zm4.828-4.828L15 14.758V15a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1.242l-1.586-1.586z" />
      </svg>
    ),
    Billing: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3v2c0 1.657 1.343 3 3 3s3-1.343 3-3v-2c0-1.657-1.343-3-3-3zm0 0v2m-9-2h18M3 12h18" />
      </svg>
    ),
  };

  const handleCreateComplaint = () => {
    setIsModalVisible(true);
    setIsSubmitted(false);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Complaint Submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      alert('Complaint submitted successfully!');
      setFormData({ name: '', houseNumber: '', category: '', message: '' });
      setIsModalVisible(false);
      setIsSubmitted(false);
    }, 1000);
  };

  const selectedComplaint = complaints.find((complaint) => complaint.id === selectedComplaintId);

  const closeModal = () => {
    setSelectedComplaintId(null);
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
          @keyframes pulseText {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes pulseButton {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes floatLabel {
            0% { transform: translateY(0); font-size: 0.875rem; }
            100% { transform: translateY(-1.5rem); font-size: 0.75rem; }
          }
          @keyframes checkmark {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-slideIn {
            animation: slideIn 0.3s ease-out;
          }
          .animate-gradientFade {
            background: linear-gradient(135deg, #e2e8f0, #f1f5f9, #e2e8f0);
            background-size: 200% 200%;
            animation: gradientFade 15s ease infinite;
          }
          .animate-pulseText:hover {
            animation: pulseText 1s infinite;
          }
          .animate-pulseButton:hover {
            animation: pulseButton 0.8s infinite;
          }
          .animate-floatLabel {
            animation: floatLabel 0.2s forwards;
          }
          .animate-checkmark {
            animation: checkmark 0.3s ease-out;
          }
          .input-filled + label, .input-focused + label {
            transform: translateY(-1.5rem);
            font-size: 0.75rem;
            color: #06B6D4;
          }
        `}
      </style>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent animate-pulseText">
            Submit and View Complaints
          </h2>
          <p className="text-sm bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mt-2 animate-slideIn">
            View, manage, and submit your complaints.
          </p>
        </div>
        <button
          onClick={handleCreateComplaint}
          disabled={!isAdmin}
          className={`mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium animate-pulseButton transition-all duration-200 ${
            isAdmin ? 'hover:ring-2 hover:ring-cyan-300' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          Create Complaint
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {complaints.map((complaint, index) => (
          <div
            key={complaint.id}
            onClick={() => setSelectedComplaintId(complaint.id)}
            className={`${gradients[index % gradients.length]} h-36 text-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-300 cursor-pointer relative overflow-hidden flex justify-between animate-slideIn`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute top-4 left-4 opacity-30">{categoryIcons[complaint.category]}</div>
            <div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {complaint.name}
              </h3>
              <p className="text-sm mt-2">House: {complaint.houseNumber}</p>
            </div>
            <p className="text-sm mt-1">{complaint.category}</p>
          </div>
        ))}
      </div>

      {selectedComplaint && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="border-2 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 p-1 rounded-lg animate-slideIn">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4 text-center">
              <div className="flex items-center justify-center mb-4">
                {categoryIcons[selectedComplaint.category]}
                <h3 className="text-xl font-bold text-gray-900 ml-2">{selectedComplaint.name}</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">House: {selectedComplaint.houseNumber}</p>
              <p className="text-sm text-gray-600 mt-1">Category: {selectedComplaint.category}</p>
              <p className="text-sm text-gray-700 mt-4">{selectedComplaint.message}</p>
              <button
                onClick={closeModal}
                className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-200 animate-pulseButton"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalVisible && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="border-2 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 p-1 rounded-lg animate-slideIn">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4 hover:shadow-lg hover:border-2 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
              {isSubmitted ? (
                <div className="text-center">
                  <svg
                    className="w-12 h-12 text-emerald-500 mx-auto animate-checkmark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 mt-4">Complaint Submitted</h3>
                  <p className="text-sm text-gray-700 mt-2">Your complaint is being processed.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-gray-800 text-center">Submit a Complaint</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-5 mt-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-2 top-2 text-sm text-gray-500 transition-all duration-200 peer-focus:animate-floatLabel peer-placeholder-shown:animate-none"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="houseNumber"
                        value={formData.houseNumber}
                        onChange={handleFormChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="houseNumber"
                        className="absolute left-2 top-2 text-sm text-gray-500 transition-all duration-200 peer-focus:animate-floatLabel peer-placeholder-shown:animate-none"
                      >
                        House Number
                      </label>
                    </div>
                    <div className="relative">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleFormChange}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 appearance-none"
                      >
                        <option value="">Select Category</option>
                        {Object.keys(categoryIcons).map((category) => (
                          <option key={category} value={category} className="flex items-center">
                            {category}
                          </option>
                        ))}
                      </select>
                      <label
                        htmlFor="category"
                        className="absolute left-2 top-2 text-sm text-gray-500 transition-all duration-200"
                      >
                        Category
                      </label>
                      <div className="absolute right-3 top-3 text-gray-500 pointer-events-none">
                        {formData.category && categoryIcons[formData.category]}
                      </div>
                    </div>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                        rows="4"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200 peer"
                        placeholder=" "
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-2 top-2 text-sm text-gray-500 transition-all duration-200 peer-focus:animate-floatLabel peer-placeholder-shown:animate-none"
                      >
                        Message
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold animate-pulseButton hover:ring-2 hover:ring-cyan-300 transition-all duration-200"
                    >
                      Submit Complaint
                    </button>
                  </form>
                  <button
                    onClick={() => setIsModalVisible(false)}
                    className="mt-4 w-full bg-gradient-to-r from-red-600 to-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-200 animate-pulseButton"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintPage;
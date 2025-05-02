import React, { useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      category: 'Plumbing',
      description: 'Fix leaky faucet in kitchen',
      date: '2025-05-01',
      status: 'Pending'
    },
    {
      id: 2,
      category: 'Electrical',
      description: 'Replace broken light switch in hallway',
      date: '2025-04-30',
      status: 'Approved'
    },
    {
      id: 3,
      category: 'Cleaning',
      description: 'Deep clean community hall after event',
      date: '2025-04-29',
      status: 'Pending'
    },
    {
      id: 4,
      category: 'Other',
      description: 'Repair broken bench in garden',
      date: '2025-04-28',
      status: 'Approved'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newService, setNewService] = useState({
    category: 'Plumbing',
    description: ''
  });

  const gradients = [
    'bg-gradient-to-br from-cyan-500 to-blue-600',
    'bg-gradient-to-br from-amber-500 to-purple-600',
    'bg-gradient-to-br from-lime-500 to-green-600',
    'bg-gradient-to-br from-amber-500 to-orange-600'
  ];

  const categoryIcons = {
    Plumbing: (
      <svg className="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    Electrical: (
      <svg className="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    Cleaning: (
      <svg className="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v3m0 12v3m9-9h-3M3 12H0m15.364-6.364l-2.121 2.121M6.757 17.243l-2.121 2.121m12.728 0l2.121-2.121M8.636 6.757l2.121-2.121" />
      </svg>
    ),
    Other: (
      <svg className="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  const handleRequestService = () => {
    setIsModalOpen(true);
  };

  const handleSubmitService = (e) => {
    e.preventDefault();
    const newId = services.length + 1;
    setServices([
      ...services,
      {
        id: newId,
        category: newService.category,
        description: newService.description,
        date: '2025-05-02', // Today's date
        status: 'Pending'
      }
    ]);
    setNewService({ category: 'Plumbing', description: '' });
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full md:w-4/5 p-6 md:p-8 relative animate-gradientFade">
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes pulseStatus {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          @keyframes gradientFade {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-slideIn {
            animation: slideIn 0.3s ease-out;
          }
          .animate-pulseStatus:hover {
            animation: pulseStatus 0.8s infinite;
          }
          .animate-gradientFade {
            background: linear-gradient(135deg, #e2e8f0, #f1f5f9, #e2e8f0);
            background-size: 200% 200%;
            animation: gradientFade 15s ease infinite;
          }
        `}
      </style>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            Service Requests
          </h2>
          <p className="text-sm text-gray-500 mt-2">Request or view maintenance services with ease.</p>
        </div>
        <button
          onClick={handleRequestService}
          className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-200"
        >
          Request Service
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`${gradients[index % gradients.length]} h-48 text-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-300 relative overflow-hidden`}
          >
            <div className="absolute top-4 left-4">{categoryIcons[service.category]}</div>
            <h3 className="text-lg font-semibold mt-8">{service.category}</h3>
            <p className="text-sm mt-2 line-clamp-2">{service.description}</p>
            <p className="text-sm mt-1">Date: {service.date}</p>
            <button
              className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white ${
                service.status === 'Pending' ? 'bg-amber-500 hover:bg-amber-600' : 'bg-emerald-500 hover:bg-emerald-600'
              } animate-pulseStatus`}
            >
              {service.status}
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="border-2 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 p-1 rounded-lg animate-slideIn">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-gray-900">Request a Service</h3>
              <form onSubmit={handleSubmitService} className="mt-4">
                <div className="mb-4">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={newService.category}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                  >
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={newService.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                    placeholder="Describe the issue or service needed"
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:scale-105 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-medium hover:scale-105 hover:ring-2 hover:ring-cyan-300 transition-all duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
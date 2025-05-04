import React, { useState } from 'react';

const Events = () => {
  const isAdmin = true; // Set to false to test user mode
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    venue: '',
  });

  const events = [
    {
      id: 1,
      title: 'Community Picnic',
      venue: 'Central Park',
      date: '2025-05-10',
      description: 'Join us for a fun-filled picnic with games, food, and music. Bring your family and friends for a day of community bonding!'
    },
    {
      id: 2,
      title: 'Yoga Workshop',
      venue: 'Community Hall',
      date: '2025-05-15',
      description: 'A relaxing yoga session led by a certified instructor. All skill levels welcome. Mats provided.'
    },
    {
      id: 3,
      title: 'Book Club Meeting',
      venue: 'Library Room',
      date: '2025-05-20',
      description: 'Discuss this month’s book, "The Great Gatsby." Share your thoughts and enjoy light refreshments.'
    },
    {
      id: 4,
      title: 'Gardening Day',
      venue: 'Society Garden',
      date: '2025-05-25',
      description: 'Help beautify our community garden. Tools and plants provided. A great way to connect with neighbors!'
    }
  ];

  const gradients = [
    'bg-gradient-to-br from-indigo-500 to-teal-600',
    'bg-gradient-to-br from-pink-500 to-rose-600',
    'bg-gradient-to-br from-emerald-500 to-cyan-600',
    'bg-gradient-to-br from-violet-500 to-fuchsia-600'
  ];

  const eventIcons = {
    'Community Picnic': (
      <svg className="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    'Yoga Workshop': (
      <svg className="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    'Book Club Meeting': (
      <svg className="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    'Gardening Day': (
      <svg className="w-8 h-8 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  };

  const handleCreateEvent = () => {
    setIsModalVisible(true);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Event Submitted:', formData);
    setFormData({ title: '', description: '', date: '', venue: '' });
    setTimeout(() => {
      setIsModalVisible(false);
    }, 1000);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setFormData({ title: '', description: '', date: '', venue: '' });
  };

  const selectedEvent = events.find((event) => event.id === selectedEventId);

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
          .animate-slideIn { animation: slideIn 0.3s ease-out; }
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
            Society Events
          </h2>
          <p className="text-sm bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mt-2 animate-slideIn">
            View and manage upcoming community events with excitement.
          </p>
        </div>
        <button
          onClick={handleCreateEvent}
          disabled={!isAdmin}
          className={`mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 transition-colors duration-200 ${
            isAdmin ? '' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Create Event</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={event.id}
            onClick={() => setSelectedEventId(event.id)}
            className={`${gradients[index % gradients.length]} h-48 text-white p-6 rounded-xl transition-colors duration-300 cursor-pointer relative overflow-hidden animate-slideIn`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute top-4 left-4">{eventIcons[event.title]}</div>
            <h3 className="text-lg font-semibold mt-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{event.title}</h3>
            <p className="text-sm mt-2">Venue: {event.venue}</p>
            <p className="text-sm mt-1">Date: {event.date}</p>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="border-2 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 p-1 rounded-lg animate-slideIn">
            <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
              <div className="flex items-center mb-4">
                {eventIcons[selectedEvent.title]}
                <h3 className="text-xl font-bold text-gray-900 ml-2">{selectedEvent.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">Venue: {selectedEvent.venue}</p>
              <p className="text-sm text-gray-600 mt-1">Date: {selectedEvent.date}</p>
              <p className="text-sm text-gray-700 mt-4">{selectedEvent.description}</p>
              <button
                onClick={() => setSelectedEventId(null)}
                className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
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
            <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
              <h3 className="text-2xl font-semibold text-gray-800 text-center">Create an Event</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Event Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    required
                    rows="4"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleFormChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="venue" className="block text-sm font-medium text-gray-700">
                    Venue
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={formData.venue}
                    onChange={handleFormChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Create Event
                </button>
              </form>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {formData.title && formData.description && formData.date && formData.venue
                  ? 'Event will be submitted.'
                  : 'Please fill all fields.'}
              </p>
              <button
                onClick={closeModal}
                className="mt-4 w-full bg-gradient-to-r from-red-600 to-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
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

export default Events;                       
import React, { useState } from 'react';

const Events = () => {
  const isAdmin = true; // Set to false to test user mode
  const [selectedEventId, setSelectedEventId] = useState(null);

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
    'bg-gradient-to-br from-blue-500 to-blue-600',
    'bg-gradient-to-br from-green-500 to-green-600',
    'bg-gradient-to-br from-purple-500 to-purple-600',
    'bg-gradient-to-br from-orange-500 to-orange-600'
  ];

  const handleCreateEvent = () => {
    console.log('Create Event clicked');
    // Future: Open a form/modal for event creation
  };

  const selectedEvent = events.find((event) => event.id === selectedEventId);

  return (
    <div className="w-full md:w-4/5 p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900">Society Events</h2>
          <p className="text-md text-gray-500 mt-2">View and manage upcoming community events.</p>
        </div>
        <button
          onClick={handleCreateEvent}
          disabled={!isAdmin}
          className={`mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            isAdmin ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          Create Event
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={event.id}
            onClick={() => setSelectedEventId(event.id)}
            className={`${gradients[index % gradients.length]} h-30 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex justify-between`}
          >
            <div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-md mt-2">Venue: {event.venue}</p>
            </div>
            <p className="text-sm mt-1">{event.date}</p>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4 text-center">
            <h3 className="text-xl font-bold text-gray-900">{selectedEvent.title}</h3>
            <p className="text-sm text-gray-600 mt-2">Venue: {selectedEvent.venue}</p>
            <p className="text-sm text-gray-600 mt-1">Date: {selectedEvent.date}</p>
            <p className="text-sm text-gray-700 mt-4">{selectedEvent.description}</p>
            <button
              onClick={() => setSelectedEventId(null)}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
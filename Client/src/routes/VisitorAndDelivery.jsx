import React, { useState } from 'react';

const visitorsAndDeliveries = [
  {
    id: 1,
    name: "Ramesh Kumar",
    type: "Visitor",
    purpose: "Guest visit - Flat 402",
    time: "Today, 3:15 PM",
    status: "entered",
    photo: "https://images.unsplash.com/photo-1590361818521-0e01eae3df06?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Zomato Delivery",
    type: "Delivery",
    purpose: "Food Delivery - Flat 210",
    time: "Today, 1:00 PM",
    status: "delivered",
    photo: "https://images.unsplash.com/photo-1653389527532-884074ac1c65?q=80&w=2924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Sneha Shah",
    type: "Visitor",
    purpose: "Friend visit - Flat 103",
    time: "Yesterday, 5:30 PM",
    status: "left",
    photo: "https://images.unsplash.com/photo-1696315289691-5ba9a97cb975?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Amazon Delivery",
    type: "Delivery",
    purpose: "Package - Flat 507",
    time: "Yesterday, 12:20 PM",
    status: "delivered",
    photo: "https://images.unsplash.com/photo-1602359337719-a8bcbd1f7b51?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const VisitorsAndDelivery = () => {
  const [selectedType, setSelectedType] = useState('Visitor');

  const filteredList = visitorsAndDeliveries.filter(
    (entry) => entry.type === selectedType
  );

  return (
    <div className="p-6 min-h-screen bg-white text-gray-800">
      <div className="flex justify-center gap-8 mb-6">
        <button
          onClick={() => setSelectedType('Visitor')}
          className={`text-xl font-semibold px-4 py-2 rounded-full transition ${
            selectedType === 'Visitor' ? 'bg-black text-white' : 'bg-gray-200 text-black'
          }`}
        >
          Visitors
        </button>
        <button
          onClick={() => setSelectedType('Delivery')}
          className={`text-xl font-semibold px-4 py-2 rounded-full transition ${
            selectedType === 'Delivery' ? 'bg-black text-white' : 'bg-gray-200 text-black'
          }`}
        >
          Deliveries
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredList.map((entry) => (
          <div
            key={entry.id}
            className="relative bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105"
          >
            <h2
              className={`absolute right-[3%] top-[3%] z-10 text-xs md:text-sm uppercase bg-black py-1 px-2 rounded-xl ${
                entry.status === 'entered'
                  ? 'text-green-300'
                  : entry.status === 'delivered'
                  ? 'text-blue-300'
                  : 'text-yellow-300'
              }`}
            >
              · {entry.status}
            </h2>
            <img
              src={entry.photo}
              alt={`${entry.name}`}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{entry.name}</h3>
              <p className="text-sm text-gray-600">{entry.type}</p>
              <p className="text-sm mt-1">{entry.purpose}</p>
              <p className="text-sm text-gray-500 mt-1">{entry.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorsAndDelivery;

import React from 'react';

const cameraFeeds = [
  {
    id: 1,
    name: 'Entrance Camera',
    location: 'Main Gate',
    feed: 'https://images.unsplash.com/photo-1624381805840-a88d1510240d?q=80&w=3038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: "Live feed from main entrance security camera",
    status: "active",
  },
  {
    id: 2,
    name: 'Parking Lot',
    location: 'Basement Level 1',
    feed: 'https://images.unsplash.com/photo-1572094943263-a746cbf1d05f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: "Live surveillance from basement parking lot camera",
    status: "Inactive",
  },
  {
    id: 3,
    name: 'Lobby',
    location: 'Ground Floor',
    feed: 'https://images.unsplash.com/photo-1691388205881-72176912c563?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: "Live video from ground floor lobby security camera",
    status: "active",
  },
  {
    id: 4,
    name: 'Rooftop',
    location: 'Terrace View',
    feed: 'https://images.unsplash.com/photo-1624228653103-0f6c379fb1b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: "Live rooftop view from terrace security camera",
    status: "Inactive",
  },
];

const SecurityCams = () => {
  return (
    <div className="min-h-screen px-6 py-8 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Live Security Cameras</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cameraFeeds.map((cam) => (
          <div
            key={cam.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105"
          >
            <h2 className={`absolute right-[1%] top-[2%] text-md md:text-sm capitalize bg-black py-1 px-2 rounded-xl ${cam.status === "active" ? "text-green-300" : "text-yellow-300"}`}>· {cam.status === "active" ? "Active" : "InActive!"}</h2>
            <img
              src={cam.feed}
              alt={`${cam.alt} feed`}
              className="w-full h-48 object-cover"
            />
            <div className="py-3 px-4">
              <h2 className="text-[22px] font-semibold">{cam.name}</h2>
              <p className="text-md text-gray-600">{cam.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityCams;

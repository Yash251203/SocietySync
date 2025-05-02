import React from 'react';

const DashboardContent = () => {
  const cards = [
    { title: 'Events', description: 'View upcoming events', bg: 'bg-gradient-to-br from-purple-500 to-purple-600', href: '#events' , image: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg' },
    { title: 'Complaints', description: 'Submit or track complaints', bg: 'bg-gradient-to-br from-teal-500 to-teal-600', href: '#complaints' , image: 'https://cdn.pixabay.com/photo/2019/08/13/08/15/adult-4402808_1280.jpg' },
    { title: 'Ordering', description: 'Online grocery ordering', bg: 'bg-gradient-to-br from-orange-500 to-orange-600', href: '#ordering' , image: 'https://cdn.pixabay.com/photo/2022/01/28/12/17/delivery-6974508_1280.jpg' },
    { title: 'Emergency', description: 'Press for urgent help', bg: 'bg-gradient-to-br from-red-500 to-red-600', href: '#emergency', onClick: () => alert('Emergency triggered!') , image: 'https://cdn.pixabay.com/photo/2020/03/31/14/04/covid-19-4987797_1280.jpg' },
    { title: 'Services', description: 'Request maintenance', bg: 'bg-gradient-to-br from-green-500 to-green-600', href: '#services' , image: 'https://cdn.pixabay.com/photo/2021/02/02/12/41/iron-5973861_1280.jpg' },
  ];

  return (
    <div className="w-full md:w-4/5 p-6 md:p-8  ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Hello, Sara</h2>
          <p className="text-sm text-gray-500">Today is Wednesday, May 01, 2025</p>
        </div>
        {/* <div className="flex items-center space-x-3 mt-4 md:mt-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border bg-white border-gray-300 rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
            Add New
          </button>
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className={`${card.bg} h-64 text-white p-6 rounded-xl hover:text-white hover:text-3xl  shadow-lg hover:shadow-xl hover: transform hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-cover bg-center`}
            onClick={card.onClick}
            style={ {backgroundImage : `url(${card.image})` }}
          >
            {/* Blur layer — visible only on hover */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-none hover:backdrop-blur-sm transition-all duration-300"></div>

            {/* Content stays above blur */}
            <div className="relative z-10">
            <h3
                className="text-2xl font-semibold"
                style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}
            >
                {card.title}
            </h3>
            <p
                className="text-sm mt-1"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}
            >
                {card.description}
            </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
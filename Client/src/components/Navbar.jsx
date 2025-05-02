import React from 'react';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className={` bg-white shadow-md w-screen md:py-5 flex items-center justify-between sticky top-0 z-30 ${isSidebarOpen ? 'hidden' : 'block'}`}
    >
      <button
        onClick={toggleSidebar}
        className={`md:hidden bg-white p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 ${isSidebarOpen ? 'hidden' : 'block'}`}
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <img className='h-14' src="https://i.pinimg.com/736x/1a/92/2e/1a922e75f358dbf9a6e033888a45591b.jpg" alt="" />
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 absolute left-1/2 transform -translate-x-1/2">SocietySync</h1>
      {/* <div className="md:hidden w-10"></div>  */}

      {/* <div className='flex items-center justify-center gap-20'>
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
      </div> */}
    </nav>
  );
};

export default Navbar;
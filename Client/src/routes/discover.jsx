import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';

export default function Discover() {
  let navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center bg-neutral-950 relative">
        <div className='absolute left-[50%] translate-x-[-50%] top-[7%] text-white text-[3rem] text-center hover:text-gray-300 underline'>SocietySync</div>
        <div onClick={() => navigate('/login')} className='absolute left-[5%] top-[2%] cursor-pointer text-white text-[2rem] text-center hover:text-gray-300'>←</div>
        <div className='absolute left-[50%] translate-x-[-50%] top-[85%] text-xl text-white text-center hover:text-blue-400'>Contact us Here - <br />contact@SocietySync.com</div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        navigation
        initialSlide={1}
        speed={600}
        className="w-[90%] md:w-[40%] h-[60vh]"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-gray-200 rounded-xl shadow-xl p-8 text-center pt-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Basic Plan - ₹899/month</h1>
            <hr className='border-black w-full my-3'/>
            <p className="text-gray-600 text-lg">Ideal for small or budget-conscious societies</p>
            <ul className="list-disc list-inside text-start space-y-2 text-lg text-gray-800 mt-4 font-semibold">
                <li>Suitable for - </li>
                <li>Societies with upto 50 flats</li>
                <li>Complaint Management</li>
                <li>Service Management</li>
                <li>Events and Notice Board</li>
                <li>Resident Directory</li>
                <li>Worker Dashboard</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-gray-200 rounded-xl shadow-xl p-8 text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Standard Plan - ₹1499/month</h1>
            <hr className='border-black w-full my-3'/>
            <p className="text-gray-600 text-lg">Best for medium-sized societies needing extra features</p>
            <ul className="list-disc list-inside text-start space-y-2 text-lg text-gray-800 mt-4 font-semibold">
                <li>Suitable for - </li>
                <li>Societies with upto <br />150 flats</li>
                <li>Event Announcements</li>
                <li>Service Management</li>
                <li>Visiter & Delivery Logs</li>
                <li>Security Cams</li>
                <li>Worker Dashboard</li>
            </ul>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-gray-200 rounded-xl shadow-xl p-8 text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Premium Plan - ₹2499/month</h1>
            <hr className='border-black w-full my-3'/>
            <p className="text-gray-600 text-lg">Tailored for Gated communities with full access to features</p>
            <ul className="list-disc list-inside text-start space-y-2 text-lg text-gray-800 mt-4 font-semibold">
                <li>Suitable for - </li>
                <li>Societies with upto <br />150+ flats</li>
                <li>Facillity Booking System</li>
                <li>Polls & Surveys</li>
                <li>Visiter & Delivery Logs</li>
                <li>Security Cams</li>
                <li>AI chatbots for residents</li>
                <li>24x7 Support</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-gray-200 rounded-xl shadow-xl p-8 text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Custom Plan - ₹xxxx/month</h1>
            <hr className='border-black w-full my-3'/>
            <p className="text-gray-600 text-lg">Flexible Pricing - <br />Pay only for what you need!</p>
            <h1 className='mt-16 text-2xl font-semibold tracking-wide underline '>Coming Soon😉</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

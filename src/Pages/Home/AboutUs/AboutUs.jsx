import React from 'react';
import aboutImage from './image/about.jpg'; 
import { BiPhoneCall } from "react-icons/bi";


const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-white">
      {/* Left Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={aboutImage}
          alt="About Us"
          className="rounded-3xl shadow-xl w-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full md:pl-12 mt-10 md:mt-0">
        <p className="text-amber-600 font-semibold mb-3">About Us</p>
        <hr className="border-t-2 border-amber-600 w-1/2" />
        <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-6 text-gray-900 pt-3">
          We Can Work Together<br />For Create A Better Future..
        </h2>
        <p className="text-gray-700 mb-6">
          Assalamu Alaikum (Peace be upon you) and welcome to a place of spiritual enrichment, community connection,
          and the pursuit of knowledge—welcome to Isteqbal Islamic Center.
          Isteqbal Islamic Center is dedicated to fostering a strong and vibrant Muslim community.
        </p>
        <p className="text-gray-700 mb-8">
          At Isteqbal, we strive to create an inclusive and nurturing environment for Muslims from all walks of life.
          Our center is a sanctuary for those seeking a deeper connection with their faith, a sense of community.
        </p>

        {/* Button and Contact */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold shadow-md transition">
            More About Us
          </button>

          <div className="flex items-center gap-2 text-gray-800">
            
            <div>
                <BiPhoneCall className="text-amber-500 text-4xl" />
            </div>
            <div className='pl-3'>
              <p className="text-sm">Call Us:</p>
              <p className="font-semibold text-lg">+880 1234567899</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

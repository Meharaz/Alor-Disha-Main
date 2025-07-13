import React from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import contactImage from './image/contact.jpg';
import servicehero from './image/servicehero.jpg';
import services1 from './image/services1.jpg';
import services2 from './image/services2.jpg';
const Services = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
            <section
                className="relative bg-center bg-cover bg-no-repeat mt-16 py-16 text-white text-center font-serif leading-loose"
                style={{ backgroundImage: `url(${contactImage})` }}
            >
                <div className="absolute inset-0 bg-[#0B0B39] opacity-80 z-0"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-semibold">Services</h2>
                </div>
            </section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 py-12 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="lg:col-span-2">
          {/* Featured Image and Text */}
          <img
            src={servicehero}
            alt="Quran Memorization"
            className="rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">Memorize Quran the Easy Way</h2>
          <p className="text-gray-700 mb-6">
            Our memorization teachers are highly reputable and traditionally educated.
            They have been rigorously evaluated and certified by major scholars.
            Millions of people across the globe have memorized the Quran using this process...
          </p>

          {/* Gallery/Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <img src={services1} alt="Quran Scene" className="rounded-lg" />
            <img src={services2} alt="Prayer Area" className="rounded-lg" />
          </div>

          {/* Icon Services */}
          <h3 className="text-xl font-semibold mb-4">ADD YOUR HEADING TEXT HERE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-100 p-4 rounded shadow">
              <h4 className="font-semibold">SPECIAL CHILD CARE</h4>
              <p className="text-sm text-gray-600">Courses specially designed for children and beginners.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h4 className="font-semibold">CHARITY & DONATION</h4>
              <p className="text-sm text-gray-600">Support Quran education with your donations.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h4 className="font-semibold">EDUCATION FOR PURE</h4>
              <p className="text-sm text-gray-600">Islamic guidance and memorization for the devoted.</p>
            </div>
          </div>

          {/* FAQ Section */}
          <h3 className="text-xl font-semibold mb-4">FREQUENTLY ASKED QUESTIONS</h3>
          <div className="space-y-4">
            <div className="bg-white border rounded p-4 shadow">
              <button className="flex justify-between w-full font-medium text-left">
                <span>MY CHILD SAYS QURAN VERSES WITHOUT HELPING HAND</span>
                <FaChevronDown />
              </button>
              <p className="text-sm text-gray-600 mt-2">
                Independent dedication to memorization is a key factor and often brings out the best in students.
              </p>
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <button className="flex justify-between w-full font-medium text-left">
                <span>PLANNING CHARITY AND ISLAMIC WORKS? WE ACCEPT DONATION</span>
                <FaChevronDown />
              </button>
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <button className="flex justify-between w-full font-medium text-left">
                <span>THOSE WHO EXPERIENCED THE ART, ALL TALKED ABOUT THE BEST</span>
                <FaChevronDown />
              </button>
            </div>
            <div className="bg-white border rounded p-4 shadow">
              <button className="flex justify-between w-full font-medium text-left">
                <span>I UNDERSTAND YOUR POINT, LET'S UNDERSTAND THE REST</span>
                <FaChevronDown />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-6">
          {/* Search */}
          <div className="flex border rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 p-2 outline-none"
            />
            <button className="bg-yellow-500 text-white px-3">
              <FaSearch />
            </button>
          </div>

          {/* All Services */}
          <div className="bg-gray-100 p-4 rounded shadow">
            <h4 className="font-semibold mb-2">ALL SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li>Charity & Donation</li>
              <li>Mosque Development</li>
              <li>Muslim Memorial</li>
              <li className="font-bold text-yellow-600">Quran Memorization</li>
            </ul>
          </div>

          {/* Contact Box */}
          <div className="bg-yellow-500 text-white p-6 rounded shadow text-center font-serif">
            <h4 className="text-lg font-semibold mb-2">CONTACT US TODAY FOR YOUR SERVICE.</h4>
            <p className="mb-4">Call: +880 1630-080140</p>
            <button className="bg-white text-yellow-600 px-4 py-2 rounded font-semibold">Get in Touch</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Services;

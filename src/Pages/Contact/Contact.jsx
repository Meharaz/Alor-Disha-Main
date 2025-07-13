import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import contactImage from './image/contact.jpg';

const Contact = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                className="relative bg-center bg-cover bg-no-repeat mt-16 py-16 text-white text-center font-serif leading-loose"
                style={{ backgroundImage: `url(${contactImage})` }}
            >
                <div className="absolute inset-0 bg-[#0B0B39] opacity-80 z-0"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-semibold">CONTACT</h2>
                </div>
            </section>



            {/* Contact Info Boxes */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white font-serif leading-loose text-center px-6 py-12 max-w-6xl mx-auto">
                <div className="bg-[#18252F] rounded-lg p-6 shadow-xl py-24">
                    <FaMapMarkerAlt className="text-3xl mx-auto mb-3" />
                    <p>Chowdhury Tower <br /> Alkaran, Kotwali, chattogram,  Banglasesh</p>
                    <h4 className="mt-4 font-semibold text-yellow-400">ADDRESS</h4>
                </div>

                <div className="bg-[#DB9E30] text-black  rounded-lg p-6 shadow-xl py-24 ">
                    <FaEnvelope className="text-3xl mx-auto mb-3" />
                    <p>info@xyzmail.com<br />contact@siteinfo.com</p>
                    <h4 className="mt-4 font-semibold">EMAIL US</h4>
                </div>

                <div className="bg-[#18252F]  rounded-lg p-6 shadow-xl py-24">
                    <FaPhoneAlt className="text-3xl mx-auto mb-3" />
                    <p> +880 1630-080140 <br /> +880 1841-006642</p>
                    <h4 className="mt-4 font-semibold text-yellow-400">CALL NOW</h4>
                </div>
            </section>

            {/* Contact Form */}
            <section className="max-w-4xl mx-auto px-6 mb-12 font-serif leading-loose ">
                <h2 className="text-2xl font-semibold text-center mb-4">HAVE ANY QUESTION?</h2>
                <p className="text-center text-gray-600 mb-6">
                    Customer Success agents have the sole goal of Making You Successful! <br /> That is why our dedicated support team works 24/7/365 to help you.
                </p>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="border p-3 rounded" />
                    <input type="email" placeholder="Your Email" className="border p-3 rounded" />
                    <input type="text" placeholder="Your Phone" className="border p-3 rounded md:col-span-1" />
                    <input type="text" placeholder="Subject" className="border p-3 rounded md:col-span-1" />
                    <textarea placeholder="Message" rows="5" className="border p-3 rounded md:col-span-2"></textarea>
                    <button type="submit" className="bg-yellow-500 text-white py-2 px-6 rounded hover:bg-yellow-600 md:col-span-2 w-fit mx-auto">
                        Submit Now
                    </button>
                </form>
            </section>

            {/* Google Map Embed */}
            <section className="px-6 pb-12">
                <iframe
                    title="Chowdhury Tower Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.6069606434985!2d91.83255307270959!3d22.33317146592113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2757a7f59657%3A0xe2cc0c8c88e4af3!2sChowdhury%20Tower%2C%20Strand%20Road%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1752082605759!5m2!1sen!2sbd"
                    width="100%"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full rounded-lg border"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;

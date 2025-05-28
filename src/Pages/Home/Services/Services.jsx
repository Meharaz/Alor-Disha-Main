import React from 'react';
import '../../../App.css';
import { FaBookOpen, FaChild, FaMosque } from "react-icons/fa";
import { LiaDonateSolid } from "react-icons/lia";
import { GiDiamondRing } from "react-icons/gi";
import { PiMosqueFill } from "react-icons/pi";

const Services = () => {
    const services = [
        {
            id: 1,
            icon: <FaBookOpen size={40} className="text-yellow-500" />,
            title: "Quran Memorization",
            description:
                "Memorizing the Quran is a noble endeavor, fostering spiritual growth and connection with Allah. It requires",
        },
        {
            id: 2,
            icon: <FaChild size={40} className="text-yellow-500" />,
            title: "Special Child Care",
            description:
                "Special child care offers tailored support for children with unique needs, inclusion, and well-being in a",
        },
        {
            id: 3,
            icon: <FaMosque size={40} className="text-yellow-500" />,
            title: "Mosque Development",
            description:
                "Enhancing community ties, mosque development ensures sacred spaces for prayer, reflection, and communal.",
        },
        {
            id: 4,
            icon: <LiaDonateSolid size={40} className='text-yellow-500' />,
            title: 'CHARITY & DONATION',
            description: 'Charity and donation providing essential resources, hope, and support to those in need, fostering.',
        },
        {
            id: 5,
            icon: <GiDiamondRing size={40} className='text-yellow-500'  />,
            title: 'MATRIMONIAL',
            description: 'Matrimonial services foster meaningful connections by bringing together who share common values and life.',
        },
        {
            id: 6,
            icon: <PiMosqueFill size={40} className='text-yellow-500'   />,
            title: 'FUNERALS',
            description: 'Funerals honor lives, provide solace, and offer a space for communal support during times of grief.',
        },


    ];

    return (
        <div className="py-16 bg-white text-center">

            <h3 className="text-yellow-600 text-lg font-semibold">Our Services</h3>
            <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight tracking-wide mt-2">
                OUR SERVICES FOR HUMANITY
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 max-w-[1200px] m-auto">
                {services.map(({ id, icon, title, description }) => (
                    <div
                        key={id}
                        className="bg-white rounded-3xl shadow-md p-8 text-left hover:shadow-lg transition"
                    >
                        <div className="flex justify-between mb-6">
                            <div className="bg-yellow-100 rounded-full p-4">{icon}</div>
                             <div className="service-number">{id.toString().padStart(2, '0')}</div>
                        </div>
                       


                        <h3 className="text-xl font-bold font-serif leading-tight mb-4 text-left">{title}</h3>
                        <p className="text-gray-600 mb-4 text-left">{description}</p>
                        <p className="text-yellow-600 font-semibold text-left cursor-pointer hover:text-black">
                            Read More
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Services;
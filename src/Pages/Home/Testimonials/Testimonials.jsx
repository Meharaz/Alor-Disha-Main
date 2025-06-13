import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        color: "bg-green-400",
        name: "Client Name",
        designation: "Client Designation",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat.",
    },
    {
        color: "bg-blue-400",
        name: "Client Name",
        designation: "Client Designation",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat.",
    },
    {
        color: "bg-yellow-400",
        name: "Client Name",
        designation: "Client Designation",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit diam nonummy nibh euismod tincidunt laoreet dolore magna aliquam erat volutpat.",
    },
];

export default function Testimonials() {
    return (
        <div className="py-10 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
                Client Feedback <span className="text-yellow-500">& Testimonial</span>
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit diam nonum
                euismod tincidunt laoreet dolore magna aliquam erat volutpat.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                    >
                        <div className="rounded-2xl shadow-md p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white text-xl`}>
                                    "
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.designation}</p>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-sm text-left text-gray-600">{testimonial.feedback}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center mt-6 gap-2">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${i === 1 ? "bg-yellow-500" : "bg-gray-300"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

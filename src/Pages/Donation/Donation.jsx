import React, { useState } from 'react';

const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}, for donating $${formData.amount}!`);
    // You can send data to a backend or payment gateway here
    setFormData({ name: '', amount: '', message: '' });
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-4 py-24">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#0B0B39] mb-6">Make a Donation</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded"
          />

          <input
            type="number"
            name="amount"
            placeholder="Donation Amount ($)"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded"
          />

          <textarea
            name="message"
            placeholder="Leave a message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#DB9E30] text-white font-semibold py-3 rounded hover:bg-yellow-600 transition duration-300"
          >
            Donate Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Donation;

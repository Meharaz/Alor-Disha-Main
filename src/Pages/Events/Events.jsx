import React from 'react';

const events = [
  {
    date: '14',
    month: 'Dec',
    day: 'Sunday',
    title: 'Nightly Commentary',
    time: '14 Dec @ 9 pm - 10 pm',
    location: 'ICA Prayer Hall, 1122 Potter Rd Antelope, CA 32802 United States',
  },
  {
    date: '01',
    month: 'May',
    day: 'Wednesday',
    title: 'Message of the Quran Class',
    time: '01 May @ 6 pm - 7 pm',
    location: 'ICA Room, 1122 Potter Rd Antelope, CA 32802 United States',
  },
  {
    date: '01',
    month: 'May',
    day: 'Wednesday',
    title: 'Nightly Commentary',
    time: '01 May @ 9 pm - 10 pm',
    location: 'ICA Prayer Hall, 1122 Potter Rd Antelope, CA 32802 United States',
  },
];

const Events = () => {
  return (
    <div className="max-w-5xl mt-6 mx-auto py-10 px-4 font-serif">
      <h1 className="text-4xl font-bold mb-8 text-brown-800">Upcoming Events</h1>
      {events.map((event, id) => (
        <div key={id} className="flex flex-col md:flex-row  items-start md:items-center border-t pt-6 pb-6 space-y-4 md:space-y-0 md:space-x-6">

          {/* Date Block */}
          <div className="text-center w-16 text-gray-400 font-bold">
            <div className="text-3xl">{event.date}</div>
            <div className="uppercase text-sm">{event.month}</div>
            <div className="text-xs">{event.day}</div>
          </div>

          {/* Event Info */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-brown-900 mb-1">{event.title}</h2>
            <p className="text-gray-600">{event.time}</p>
            <p className="text-orange-600 font-medium">{event.location}</p>
          </div>

          {/* Button */}
          <div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition">
              Event Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;

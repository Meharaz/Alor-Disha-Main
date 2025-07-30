import React, { useEffect, useState } from 'react';

const BloodDoner = () => {
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        fetch('/bloodDoner.json')
            .then(res => res.json())
            .then(data => setDonors(data))
            .catch(err => console.error('Failed to load donor data', err));
    }, []);

    return (
        <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {donors.map(donor => (
                <div key={donor.id} className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={donor.pic} alt={donor.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {donor.name}
                            <div className="badge badge-secondary">{donor.mobile}</div>
                        </h2>
                        <p>Blood Group: {donor.blood_group}</p>
                        <p>Location: {donor.location}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{donor.blood_group}</div>
                            <div className="badge badge-outline">{donor.location}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BloodDoner;

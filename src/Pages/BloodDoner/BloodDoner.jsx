import React from 'react';
import './bloodDoner.json'

function bloodDonerList() {
    fetch('./bloodDoner.json')
        .then(res => res.json())
        .then(data => console.log(data))
}

const BloodDoner = () => {

    return (
        <div className='p-56'>
            <button onClick={bloodDonerList}>click me</button>
        </div>
    );
};

export default BloodDoner;
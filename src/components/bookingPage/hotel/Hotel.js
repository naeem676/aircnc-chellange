import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HotelDetails from '../hotelDetails/HotelDetails';

const Hotel = () => {
    const [hotel, setHotel] = useState([])
    useEffect(()=>{
        fetch('https://safe-anchorage-48836.herokuapp.com/findHotel')
        .then(res => res.json())
        .then(data => setHotel(data))
    },[hotel])
    return (
        <div>
           {
               hotel.map(hot => <HotelDetails key={hot.__id} hotel={hot}></HotelDetails>)
           }
        </div>
    );
};

export default Hotel;
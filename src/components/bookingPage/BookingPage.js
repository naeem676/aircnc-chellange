import React from 'react';
import GoogleMap from './googleMap/GoogleMap';
import Hotel from './hotel/Hotel';

const BookingPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <Hotel></Hotel>
                </div>
                <div className="col-md-5">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
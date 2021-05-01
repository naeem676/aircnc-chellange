import React, { useState } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { useContext } from 'react';
import { BookingContext } from '../../../App';

const mapStyles = {
  width: '100%',
  height: '100%'
};


const GoogleMap = (props) => {

  const [booking, setBooking] = useContext(BookingContext);
  const [location, setLocation] = useState({current:{lat:0, lng:0}})
  navigator?.geolocation.getCurrentPosition(({coords:{latitude:lat, longitude: lng}})=>{
    const pos = {lat, lng}
    setLocation({current:pos})
  })
  
    return (
        <div>
          
              <Map
                google={props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
                />
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: ''
  })(GoogleMap);
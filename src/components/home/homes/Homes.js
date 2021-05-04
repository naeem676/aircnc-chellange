import React, { useEffect, useState } from 'react';
import HomesDetails from './homeDetails/HomesDetails';

const Homes = () => {
    const [homes, setHomes] = useState([]);
    useEffect(()=>{
        fetch('https://safe-anchorage-48836.herokuapp.com/findHomes')
        .then(res => res.json())
        .then(data => setHomes(data))
    },[homes])
    return (
        <div className="container mt-5">
            <h4>Homes</h4>
            <div className="row">
                {
                    homes.map(hom => <HomesDetails key={hom._id} homes={hom}></HomesDetails>)
                }
              
            </div>
            
        </div>
    );
};

export default Homes;
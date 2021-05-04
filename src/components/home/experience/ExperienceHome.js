import React, { useEffect, useState } from 'react';
import ExperienceDetails from './experienceDetails/ExperienceDetails';

const ExperienceHome = () => {
    const [experience, setExperience] = useState([]);
    useEffect(()=>{
        fetch('https://safe-anchorage-48836.herokuapp.com/findExperience')
        .then(res => res.json())
        .then(data => {
            setExperience(data)
            
        })
    },[experience])
    return (
        <div className="container">
            <h4>Experience</h4>
            <div className="row">
                {
                    experience.map(exp => <ExperienceDetails key={exp._id} experience={exp}></ExperienceDetails>)
                }
            </div>
            
        </div>
    );
};

export default ExperienceHome;
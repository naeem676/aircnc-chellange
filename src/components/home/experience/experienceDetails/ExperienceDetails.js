import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const ExperienceDetails = ({experience}) => {
    const {title, details, cost, star, image} = experience
    return (
        <div className="col-md-3">
           {
               experience.image ?  <img className="h-50 w-100" src={`data:image/jpeg;base64,${image.img}`} alt="experience" /> : ''
           }
            <p>{title}</p>
            <h6>{details}</h6>
            <h6>$ {cost} per person</h6>
            <div className="d-flex">
                <div><h5 className="text-warning"> <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
                </h5></div>
                <div className="ml-1">
                    <h4>{star}</h4>
                </div>
            </div>
            
        </div>
    );
};

export default ExperienceDetails;
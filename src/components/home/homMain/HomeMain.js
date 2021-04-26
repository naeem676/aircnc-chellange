import React from 'react';
import ExperienceHome from '../experience/ExperienceHome';
import FormArea from '../formArea/FormArea';

const HomeMain = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <FormArea></FormArea>
                    </div>
                    <div className="col-md-8">
                          <ExperienceHome></ExperienceHome>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;
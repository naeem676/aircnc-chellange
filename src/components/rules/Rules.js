import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useContext } from 'react';
import { BookingContext, HotelContext } from '../../App';
import event from "../image/forbidden.png";
import  children from '../image/ic_child_friendly_48px.png';
import pets from '../image/ic_pets_48px.png';
import Smoking from '../image/ic_smoking_rooms_48px.png';
import { Link, useHistory } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MainCart from '../mainCart/MainCart';

const useButtonStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #0baf20d3 30%, #53ff70 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      width:250,
      height: 48,
      padding: '0 30px',
    },
  });

const Rules = () => {
    const [booking, setBooking] = useContext(BookingContext);
    const [rooms, setRooms] = useContext(HotelContext);

  
    const checkin = new Date(booking.checkInDate)
    const checkout = new Date(booking.checkOutDate)
    const different = checkout.getDate() || 0 - checkin.getDate() || 0;
    const buttonClasses = useButtonStyles();
     
    const history = useHistory()
    const handleAgree = () =>{
       history.push('/traveling')
    }
    
    return (
        <section>
            
            <div className="container">
            <div className="d-flex">
                <div className="ml-2"><p class="font-weight-bold">1.Review House Rules <ArrowForwardIosIcon fontSize="small"/></p></div>
                <div className="ml-2"><p>2.Who's coming? <ArrowForwardIosIcon fontSize="small"/></p></div>
                <div className="ml-2"><p>3.Confirm and pay <ArrowForwardIosIcon fontSize="small"/></p></div>
            </div>
                <div className="row">
                    <div className="col-md-6">
                        <h2>Review house rules</h2>
                        <h6>{different} night in {booking.location}</h6>
                        <div className="border-bottom pb-2">
                            <div className="d-flex justify-content-between">
                            <div>
                                <small>Check in</small>
                                <h5>{booking.checkInDate}</h5>
                                <h6>After 12:00pm</h6>
                            </div>
                            <div>
                                <small>Check out</small>
                                <h5>{booking.checkOutDate}</h5>
                                <h6>Before 11:00am</h6>
                            </div>
                            </div>
                            <small>Self check-in with building staff</small>
                        </div>
                        
                        <div className="mt-2">
                        <h4>Things to keep in mind</h4>
                            <div className="container mt-3">
                                <div className="row">
                                <div className="col-sm-2">
                                    <img className="w-50" src={children} alt="" srcset=""/>
                                </div>
                                <div className="col-sm-10">
                                    <h5>Suitable for children and infants</h5>
                                </div>
                                </div>
                            </div>
                            <div className="container mt-3">
                                <div className="row">
                                <div className="col-sm-2">
                                    <img className="w-50" src={pets} alt="" srcset=""/>
                                </div>
                                <div className="col-sm-10">
                                    <h5>Pets allowed</h5>
                                </div>
                                </div>
                            </div>
                            <div className="container mt-3">
                                <div className="row">
                                <div className="col-sm-2">
                                    <img className="w-50" src={event} alt="" srcset=""/>
                                </div>
                                <div className="col-sm-10">
                                    <h5>No parties or events</h5>
                                </div>
                                </div>
                            </div>
                            <div className="container mt-3">
                               <div className="row">
                               <div className="col-sm-2">
                                    <img className="w-50" src={Smoking} alt="" srcset=""/>
                                </div>
                                <div className="col-sm-10">
                                    <h5>Smoking allowed</h5>
                                </div>
                               </div>
                            </div>
                            <div className="mt-3">
                            <h6><Link>Read more  <ExpandMoreIcon/> </Link> </h6>
                            </div>
                            <Button onClick={handleAgree}  className={buttonClasses.root} >Agree and continue</Button>

                        </div>
                          
                    </div>
                    <div className="col-md-6">
                          <MainCart></MainCart>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Rules;
import React, { useContext } from 'react';
import { BookingContext, HotelContext } from '../../App';
import building from "../image/photo-1560347876-aeef00ee58a1.jpeg";
import manager from "../image/men.jpg";
import check from "../image/checkmark-square-2.png";
import spark from "../image/solid.png";
import single from "../image/single-01.png";
import home from '../image/home.png'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import './Details.css';
import { Link, useHistory } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';



const useAvatarStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const useButtonStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #0baf20d3 30%, #53ff70 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    width:350,
    height: 48,
    padding: '0 30px',
  },
});


const Details = () => {
    const [rooms, setRooms] = useContext(HotelContext);
    const [booking, setBooking] = useContext(BookingContext);
    const avatarClasses = useAvatarStyles();
    const buttonClasses = useButtonStyles();
    const guest = booking.adultsGuest + booking.childsGuest + booking.babesGuest;
   const checkin = new Date(booking.checkInDate)
   const checkout = new Date(booking.checkOutDate)
   const different = checkout.getDate() || 0 - checkin.getDate() || 0;
   const roomsRent = different * rooms.cost || 0;
   const cleaningFee = 10;
   const servingFee = 21;
   const total = cleaningFee + servingFee + roomsRent || 0

   const history = useHistory();

   const handleReserve = () => {
     history.push('/rules')
   }

   
   
    return (
        <div>
            <div className="d-flex">
            <div className="">
                      <img className="h-75 w-100" src={building} />
                    </div>
                    <div className="">
                    {
                        rooms.image ? <img className="h-75 w-100" src={`data:image/jpeg;base64,${rooms.image.img}`} />  : ''
                     }
                    </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-9">
                                    <h1>{rooms.title}</h1>
                                </div>
                                <div className="col-sm-3">
                                <Avatar alt="Remy Sharp" src={manager} className={avatarClasses.large} />
                                <h6>Rowdra</h6>
                                </div>
                            </div>
                            <div className="border-bottom">
                            <p>{booking.location}</p>
                            <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                            </div>
                            <div className="mt-3 border-bottom">
                              <div className="container">
                                <div className="row">
                                  <div className="col-sm-2">
                                    <p><img className="icon"src={home} alt="" srcset=""/></p>
                                    </div>
                                  <div className="col-sm-10">
                                    <h5> Entire home</h5>
                                    <p>You'll have the condominium to yourself.</p>
                                    </div>
                                </div>
                               
                              </div>
                              <div className="container">
                              <div className="row">
                                  <div className="col-sm-2">
                                    <p><img className="icon"src={check} alt="" srcset=""/></p>
                                    </div>
                                  <div className="col-sm-10">
                                    <h5> Self check-in</h5>
                                    <p>You can check in with the doorman</p>
                                    </div>
                                </div>
                              </div>
                              <div className="container">
                              <div className="row">
                                  <div className="col-sm-2">
                                    <p><img className="icon"src={spark} alt="" srcset=""/></p>
                                    </div>
                                  <div className="col-sm-10">
                                    <h5> Sparkling clean</h5>
                                    <p>10 recent gurests said this place was sparking clean</p>
                                    </div>
                                </div>
                              </div>
                              <div className="container">
                              <div className="row">
                                  <div className="col-sm-2">
                                    <p><img className="icon"src={single} alt="" srcset=""/></p>
                                    </div>
                                  <div className="col-sm-10">
                                    <h5>Rowdra is  a Superhost</h5>
                                    <p>Superhosts are experienced, highly rated host who are committed to providing great stays for guests.</p>
                                    </div>
                                </div>
                              </div>
                            

                            </div>
                            <div className="container">
                              <div className="row">
                                <div className="col-sm-6">
                                  <div>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum ipsa reiciendis perspiciatis veritatis, dolorem eius molestiae tempore accusantium, obcaecati hic ratione necessitatibus corporis? Ab non harum aut et exercitationem?</p>
                                  <Link>Read more about the space</Link>
                                  </div>
                                  <div className="mt-3">
                                   <div> <h6>Reviews</h6></div>
                                   <div className="d-flex">
                                     <div><p className="text-success"><StarIcon/></p></div>
                                     <div className="ml-2">{rooms.star}</div>
                                   </div>
                                    
                                  </div>
                                </div>
                                <div className="col-sm-6"></div>
                              </div>
                            </div>
                        </div>
                        
                    </div>
                   
                    <div className="col-md-5 ">
                            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                            <div>
                            <h4><span className="font-weight-bold">$ {rooms.cost || 0}/</span>night</h4>
                            </div>
                            <div className="d-flex">
                                     <div><p className="text-success"><StarIcon/></p></div>
                                     <div className="ml-2">{rooms.star}</div>
                             </div>
                             <p>Dates</p>
                             <div className="d-flex justify-content-around border border-dark">
                               <div>{booking.checkInDate}</div>
                               <div> <ArrowForwardIcon/></div>
                               <div>{booking.checkOutDate}</div>
                             </div>
                             <p>Guest</p>
                             <div className="d-flex justify-content-around border border-dark">
                               <div>{guest} guests</div>
                               <div> <ExpandMoreIcon/></div>
                             </div>
                            <div className="ml-5">
                            <div className="container">
                             <div className="row justify-content-center mt-2">
                               <div className="col-sm-5">${rooms.cost || 0} x {different}night</div>
                               <div className="col-sm-5">${roomsRent}</div>
                             </div>
                             </div>
                             <div className="container">
                             <div className="row justify-content-center mt-2">
                               <div className="col-sm-5">Cleaning fee</div>
                               <div className="col-sm-5">${cleaningFee}</div>
                             </div>
                             </div>
                             <div className="container">
                             <div className="row justify-content-center mt-2">
                               <div className="col-sm-5">Serving fee</div>
                               <div className="col-sm-5">${servingFee}</div>
                             </div>
                             </div>
                             <div className="container">
                             <div className="row justify-content-center mt-2">
                               <div className="col-sm-5">Total</div>
                               <div className="col-sm-5">${total}</div>
                             </div>
                             </div>
                            </div>
                            <div className="text-center mt-2">
                            <Button onClick={handleReserve} className={buttonClasses.root} >Reserve</Button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
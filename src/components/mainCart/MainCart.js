import React, { useContext } from 'react';
import { BookingContext, HotelContext } from '../../App';
import StarIcon from '@material-ui/icons/Star';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MainCart = () => {
   const [rooms, setRooms] = useContext(HotelContext);
   const [booking, setBooking] = useContext(BookingContext);
   const guest = booking.adultsGuest + booking.childsGuest + booking.babesGuest;
   const checkin = new Date(booking.checkInDate)
   const checkout = new Date(booking.checkOutDate)
   const different = checkout.getDate() - checkin.getDate();
   const roomsRent = different * rooms.cost;
   const cleaningFee = 10;
   const servingFee = 21;
   const total = cleaningFee + servingFee + roomsRent
    return (
        <div className="ml-5 mr-5">
            <div className="shadow p-3 mb-5 bg-body rounded">
                            <div className="container">
                            <div className="row">
                            <div className="col-sm-6" >
                            <div>
                            <h4><span className="font-weight-bold">$ {rooms.cost}/</span>night</h4>
                            </div>
                            <div className="d-flex">
                                     <div><p className="text-success"><StarIcon/></p></div>
                                     <div className="ml-2">{rooms.star}</div>
                             </div>
                               
                            </div>
                            <div className="col-sm-6  bg-body rounded">
                                {
                                    rooms.image ? <img className="h-75 w-100" src={`data:image/jpeg;base64,${rooms.image.img}`} />  : ''
                                 }
                                </div>
                            </div>
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
                            <div className="container border-bottom">
                             <div className="row justify-content-center mt-2">
                               <div className="col-sm-5">${rooms.cost} x {different}night</div>
                               <div className="col-sm-5">${roomsRent}</div>
                             </div>
                             </div>
                             <div className="container border-bottom">
                             <div className="row justify-content-center mt-2">
                               <div className="col-sm-5">Cleaning fee</div>
                               <div className="col-sm-5">${cleaningFee}</div>
                             </div>
                             </div>
                             <div className="container border-bottom">
                             <div className="row justify-content-center mt-2">
                               <div className="col-sm-5">Serving fee</div>
                               <div className="col-sm-5">${servingFee}</div>
                             </div>
                             </div>
                             <div className="container border-bottom">
                             <div className="row justify-content-center mt-2">
                               <div className="col-sm-5">Total</div>
                               <div className="col-sm-5">${total}</div>
                             </div>
                             </div>
                            </div>
                            
                            </div>
        </div>
    );
};

export default MainCart;
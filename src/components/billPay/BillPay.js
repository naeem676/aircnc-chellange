import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MainCart from '../mainCart/MainCart';
import CardApp from '../cardForm/CardApp';
import Paypal from '../paypal/Paypal';
import Radio from '@material-ui/core/Radio';
import paypal from './paypal.png';
import successfully from './success-image.gif';
import visa from './visa-mastercard-amex-2-1.gif';
import { useState } from 'react';
import Link from '@material-ui/core/Link';
import { useContext } from 'react';
import { BookingContext, HotelContext, UserContext } from '../../App';
import { useHistory } from 'react-router-dom';

const BillPay = () => {
    const [rooms, setRooms] = useContext(HotelContext);
    const [booking, setBooking] = useContext(BookingContext);
    const [loggedUser, setLoggedUser] = useContext(UserContext)

    const [selectedValue, setSelectedValue] = useState('a');
    const [success, setSuccess] = useState(false);



  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSuccess = () => {
      setSuccess(true)
  }
  const history = useHistory()
  const handleGoBack = () => {
        setRooms({})
        setBooking({})
        setLoggedUser({})
        history.push('/home')

  }
    return (
       <section>
           <div className="container">
           <div className="d-flex">
                <div className="ml-2"><p class="font-weight-bold">1.Review House Rules <ArrowForwardIosIcon fontSize="small"/></p></div>
                <div className="ml-2"><p class="font-weight-bold">2.Who's coming? <ArrowForwardIosIcon fontSize="small"/></p></div>
                <div className="ml-2"><p class="font-weight-bold">3.Confirm and pay <ArrowForwardIosIcon fontSize="small"/></p></div>
            </div>
               <div className="row">
                   <div className="col-md-6">
                       <h4>Payment Section</h4>
                       <div className="border border-secondary p-2">
                           <div className="container">
                           <div className="row">
                           <div className="col-sm-9">
                           <h6>
                           <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    value="a"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                Credit Card
                           </h6>
                           <p>Safe money transfer using your bank account Visa, Maestro, American Express</p>
                           </div>
                           <div className="col-sm-3">
                               <img className="w-100" src={visa} alt="" srcset=""/>
                           </div>
                           </div>
                           </div>
                           { selectedValue === 'a' ? <div>
                           <CardApp handleSuccess={handleSuccess}></CardApp>
                           </div> : ''}
                       </div>
                       <div className="border border-secondary p-2 mt-2">
                           <div className="container">
                           <div className="row">
                               <div className="col-sm-9">
                               <h6>
                               <Radio
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value="b"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'B' }}
                                />
                                PayPal
                               </h6>
                               <p>You will redirected to PayPal website to complete your purchase securely</p>
                               </div>
                               <div className="col-sm-3">
                                   <img className="w-100" src={paypal} alt="" srcset=""/>
                               </div>
                           </div>
                           </div>
                           { selectedValue === 'b' ? <div>
                           <Paypal></Paypal>
                           </div> : ''}
                       </div>
                   </div>
                   <div className="col-md-6">
                       {success ? <div>
                           <img className="w-100" src={successfully} alt="" srcset=""/>
                           <Link
                                component="button"
                                variant="body2"
                                onClick={handleGoBack}
                                >
                                Back to home
                                </Link>
                       </div>
                       : <div><MainCart></MainCart></div>}
                   </div>
               </div>
           </div>
       </section>
    );
};

export default BillPay;
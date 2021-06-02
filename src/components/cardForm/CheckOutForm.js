import React, { useState, useEffect, useContext } from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { BookingContext, HotelContext } from '../../App';
import { useHistory } from "react-router-dom";

  const  CheckOutForm = ({handleSuccess}) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  ///copy from main card

  const [rooms, setRooms] = useContext(HotelContext);
  const [booking, setBooking] = useContext(BookingContext);
  
  const checkin = new Date(booking.checkInDate)
  const checkout = new Date(booking.checkOutDate)
  const different = checkout.getDate() - checkin.getDate();
  const roomsRent = different * rooms.cost;
  const cleaningFee = 10;
  const servingFee = 21;
  const total = cleaningFee + servingFee + roomsRent;
  

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("https://safe-anchorage-48836.herokuapp.com/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({total})
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data.clientSecret);
        
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  const history = useHistory();

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
   

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      alert('Your payment successfully done')
      handleSuccess();
      history.replace('/')
      
    }
  };

 const buttonStyle = {
   root : {
    background: '#5469d4',
    font_family: 'Arial, sans-serif',
    color: '#ffffff',
    border_radius: '0 0 4px 4px',
    border: 0,
    padding: '12px 16px',
    font_size: '16px',
    font_weight: 600,
    cursor: 'pointer',
    display: 'block',
    transition: 'all 0.2s ease',
    box_shadow: '0px 4px 5.5px 0px rgba(0, 0, 0, 0.07)',
    width: '100%',
    '&:hover':{
      filter: 'contrast(115%)'
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'default'
    }
   }
 };
 const formStyle = {
    root : {
  //     width: '30vw',
  // // align_self: 'center',
  box_shadow:[ '0px 0px 0px 0.5px rgba(50, 50, 93, 0.1)',
    '0px 2px 5px 0px rgba(50, 50, 93, 0.1)', '0px 1px 1.5px 0px rgba(0, 0, 0, 0.07)'],
  border_radius: '7px',
  // // padding: '40px',

    }
 }

  return (
    <form style={formStyle.root} id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button style={buttonStyle.root}
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    </form>
  );
}

export default CheckOutForm;
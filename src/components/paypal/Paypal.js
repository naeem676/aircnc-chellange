import React, { useEffect, useRef, useState, useContext } from 'react';
import { BookingContext, HotelContext } from '../../App';

const Paypal = () => {
    const [paid, setPaid] = useState(false);
    const [error, setError] = useState(null);

    const paypalRef = useRef();
    const [rooms, setRooms] = useContext(HotelContext);
    const [booking, setBooking] = useContext(BookingContext);
  
    const checkin = new Date(booking.checkInDate)
    const checkout = new Date(booking.checkOutDate)
    const different = checkout.getDate() - checkin.getDate();
    const roomsRent = different * rooms.cost;
    const cleaningFee = 10;
    const servingFee = 21;
    const total = cleaningFee + servingFee + roomsRent

    useEffect(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    description: "Your description",
                    amount: {
                      currency_code: "EUR",
                      value: total,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              setPaid(true);
              console.log(order);
            },
            onError: (err) => {
            //   setError(err),
              console.error(err);
            },
          })
          .render(paypalRef.current);
      }, []);

      if (paid) {
        return <div>Payment successful.!</div>;
      }
    
      // If any error occurs
      if (error) {
        return <div>Error Occurred in processing payment.! Please try again.</div>;
      }
    return (
        <div>
      <h4>Total Amount in EUR. : {total} /-</h4>
      <div ref={paypalRef} />
    </div>
    );
};

export default Paypal;
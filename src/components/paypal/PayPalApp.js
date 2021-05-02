import React from 'react';
import { useState } from 'react';
import Paypal from './Paypal';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalApp = () => {
    const [checkout, setCheckout] = useState(false);
    // const initialOptions = {
    //   "client-id": "AQEYfsfF4u5vexRY83pGYt3M8rv9R0WDw_cLrf4x1_bRqQopHyNTCejMM-lQgUoPecKTuRFvv6mZf2qb",
    //   currency: "EUR",
    //   intent: "capture",
      
  // };
    return (
      // <PayPalScriptProvider options={initialOptions}>
      //       <PayPalButtons />
      //   </PayPalScriptProvider>
        <div>
            {(checkout === true) 
          ? <div className="payment-div">
            <Paypal/>
          </div> 

          :<div>
      
            <button onClick={() => {setCheckout(true)}} className="checkout-button">Checkout</button>
          </div>
        }
        </div>
    );
};

export default PayPalApp;
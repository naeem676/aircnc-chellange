import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from './CheckOutForm';



// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51IeuuaFz4lVH0Yok4Awy7G59ZWevm8XQfiTnsBowOO2awPbjSCfHKAE5ffu9mwDVK7del34ryFAn75mBH4KYkBBq00ZsdUabGx");

const CardApp =({handleSuccess})=> {
  return (
    <div className="App">
      <Elements stripe={promise}>
       <CheckOutForm handleSuccess={handleSuccess} />
      </Elements>
    </div>
  );
}
export default CardApp;

// import React from "react";
// import "./App.css";
// import StripeCheckout from "react-stripe-checkout";

// const App = ({ price }) => {
//   const priceForStripe = price * 100;
//   const publishableKey =
//     "pk_test_51KxuDmGsSePDuTaGHAqYFu2AA7C8flmxQn6MopIbiiRR6O3AT9qIWaWjNRylyrswqr0APWNO8B0f1ftcIP0ohFK400MAamiTC9";

//   const onToken = (token) => {
//     console.log("token ", token);
//     alert("payment successfull");
//   };

//   return (
//     <StripeCheckout
//       label="Pay with Stripe"
//       name="E-store.co"
//       stripeKey={publishableKey}
//       shippingAddress
//       billingAddress={false}
//       image="https://stripe.com/img/documentation/checkout/marketplace.png"
//       description={`Your Total is $${price}`}
//       amount={priceForStripe}
//       panelLabel="Give Money"
//       token={onToken}
//     />
//   );
// };

// export default App;
import React from 'react'
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import  Navbar  from './Components/Navbar';
import Skills from './Components/Skills';
import Work from './Components/Work';
 const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
<Contact/>

    </div>
  )
}
 export default App;

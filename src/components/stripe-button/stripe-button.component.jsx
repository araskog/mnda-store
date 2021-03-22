import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publichableKey =
    "pk_test_51IXjgDIUUgz0AaCHq84uX2BX6glCFYZyxuuKBpht7k8WzORXnTqsERIkzu9D8PkSwfbnszCTajTAcuYS6jAMdiPc00hhIxPVoF";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="MNDA Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price} €`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      currency="EUR"
      stripeKey={publichableKey}
    />
  );
};

export default StripeCheckoutButton;

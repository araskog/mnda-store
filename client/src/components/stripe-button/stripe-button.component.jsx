import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IXjgDIUUgz0AaCHq84uX2BX6glCFYZyxuuKBpht7k8WzORXnTqsERIkzu9D8PkSwfbnszCTajTAcuYS6jAMdiPc00hhIxPVoF";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
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
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

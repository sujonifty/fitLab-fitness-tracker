import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const totalPrice = 20;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axiosSecure.post('/create-payment-intent', { price: totalPrice })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [axiosSecure, totalPrice]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('Payment Method', paymentMethod);
      setError('');
    }
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      },
    );
    if (confirmError) {
      console.log('confirm error', confirmError);
      setError(error.message);
    } else {
      console.log('payment intent', paymentIntent);
      setError('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn bg-cyan-600" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckoutForm;
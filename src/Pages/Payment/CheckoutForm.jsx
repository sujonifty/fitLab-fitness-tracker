import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import './CheckoutForm.css';
import Swal from "sweetalert2";

const CheckoutForm = ({ price, trainerDetails }) => {
  // console.log('details',trainerDetails)
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const totalPrice = parseInt(price);
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
            name: user?.displayName || 'Anonymous',
            email: user?.email || 'Anonymous',
            
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
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          trainerInfo: trainerDetails,
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to 
          status: 'pending'
        }
console.log(payment)
        const res = await axiosSecure.post('/payments', payment);
        console.log('payment saved', res.data);
        // refetch();
        if (res.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you",
            showConfirmButton: false,
            timer: 1500
          });
          // navigate('/dashboard/paymentHistory')
        }

      }

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
        Pay ${totalPrice}
      </button>
      {/* <button
            onClick={closeModal}
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
          >
            Cancel
          </button> */}
      <p className="text-red-600">{error}</p>
      {
        transactionId ? <div>
          <p className="">Amount: ${totalPrice}</p>
          <p className="">Transaction Id: {transactionId}</p>
        </div>
          :
          ''
      }
    </form>
  );
};

export default CheckoutForm;
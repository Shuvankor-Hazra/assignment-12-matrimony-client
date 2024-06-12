/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
// import { useQuery } from "@tanstack/react-query";

const CheckOutForm = ({ data }) => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const feePrice = 5;
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: feePrice })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('Payment Error', error);
            setError(error.message);
        } else {
            console.log('Payment Method', paymentMethod);
            setError('');
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })
        if (confirmError) {
            console.log('confirm error');
        } else {
            console.log("payment intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('Transaction id:', paymentIntent.id);
                setTransactionId(paymentIntent.id)
                const contactRequestInfo = {
                    name: user.displayName,
                    email: user.email,
                    mobileNumber: data.mobileNumber,
                    bioDataId: data.bioDataId,
                    status: 'pending'
                }
                axiosSecure.post('/contactRequest', contactRequestInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: "Your request has been send",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    }).catch(error => {
                        console.log(error, 'Already exists.......');
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: "Already exists",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            }
        }
    }
    console.log(data);
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-between mb-10 text-xl">
                <h2>Biodata Id: <span className="font-poppins font-medium">{data.bioDataId}</span></h2>
                <h2>Email: {user.email}</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
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
                <div className="mt-10 text-center">
                    <button className="btn bg-gray-500 border border-b-4 border-[#F99417] text-white uppercase w-full" type="submit" disabled={!stripe || !clientSecret}>
                        Submit
                    </button>
                    <p className="text-red-400 pt-5">{error}</p>
                    {transactionId && <p className="text-green-400 pt-5">Your Transaction Id: {transactionId}</p>}
                </div>
            </form>
        </>
    );
};

export default CheckOutForm;
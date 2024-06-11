import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="max-w-screen-xl mx-auto pt-40">
            <SectionTitle heading={'Checkout'} subHeading={'Use for Contact info'} />
            <div className="lg:w-2/3 mx-auto border-2 p-12 rounded-xl">
                <Elements stripe={stripePromise}>
                    <CheckOutForm data={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
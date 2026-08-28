import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccessful = () => {

    const [searchParams] = useSearchParams();

    const [paymentInfo, setPaymentInfo] = useState({});

    const sessionId = searchParams.get('session_id');
    const instanceAxios = useAxiosSecure();
    console.log(sessionId);

    useEffect(() => {
        if (sessionId) {
            instanceAxios.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data)

                    setPaymentInfo({
                        transactionId: res.data.transactionId,
                        trackingId: res.data.trackingId
                    })
                })
        }
    }, [sessionId, instanceAxios])

    return (
        <div>

            <div className="text-2xl font-extrabold">
                Thank you for your payment. Your delivery order is now confirmed and being processed.
            </div>

            <div>
                Tracking ID: {paymentInfo.trackingId}
            </div>

            <div>
                Transaction ID: {paymentInfo.transactionId}
            </div>

        </div>
    );
};

export default PaymentSuccessful;
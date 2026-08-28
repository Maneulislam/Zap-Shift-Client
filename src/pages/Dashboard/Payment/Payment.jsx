import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Payment = () => {

    const { parcelId } = useParams();
    const instanceAxios = useAxiosSecure();


    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await instanceAxios.get(`/parcels/${parcelId}`)
            return res.data;
        }
    })
    console.log(parcel);


    const handlePayment = async () => {

        const paymentInfo = {
            cost: parcel.cost,
            parcelName: parcel.parcelName,
            senderEmail: parcel.senderEmail,
            parcelId: parcel._id
        }

        const res = await instanceAxios.post('/create-checkout-session', paymentInfo);

        console.log(res.data);

        window.location.href = res.data.url;
    }



    if (isLoading) {
        return <span className="loading loading-bars loading-xl"></span>;
    }


    return (
        <div>
            <h2>
                Please Pay: {parcel.parcelName}
            </h2>

            <button onClick={handlePayment} className="btn btn-sm bg-primary">
                Pay
            </button>
        </div>
    );
};

export default Payment;
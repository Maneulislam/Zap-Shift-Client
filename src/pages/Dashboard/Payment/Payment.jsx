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

    if (isLoading) {
        return <span className="loading loading-bars loading-xl"></span>;
    }


    return (
        <div>
            Please Pay: {parcel.parcelName}
        </div>
    );
};

export default Payment;
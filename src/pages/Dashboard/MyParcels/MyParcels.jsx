import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyParcels = () => {

    const { user } = useAuth();
    const instanceAxios = useAxiosSecure();

    const { data: parcels = [] } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await instanceAxios.get(`parcels?email=${user?.email}`)
            console.log(res);
            return res.data;
        },

    })


    return (
        <div>


            {/* Total */}

            <div className="card card-side bg-base-300 shadow-sm w-52 px-5 m-6">
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-land-plot-icon lucide-land-plot"><path d="m12 8 6-3-6-3v10" /><path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" /><path d="m6.49 12.85 11.02 6.3" /><path d="M17.51 12.85 6.5 19.15" /></svg>
                </figure>
                <div className="card-body flex-1 items-center">
                    <h2 className="text-sm">Total Parcels</h2>
                    <p className="text-2xl font-bold">{parcels.length}</p>

                </div>
            </div>




            {/* Table */}
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parcel Name</th>
                            <th>Document Type</th>

                            <th>Parcel Weight</th>
                            <th>Receiver Name</th>
                            <th>Receiver Email</th>
                            <th>Cost</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            parcels.map((parcel, index) => (
                                <tr key={parcel._id}>
                                    <th>{index + 1}</th>
                                    <td>{parcel.parcelName}</td>
                                    <td>{parcel.docType}</td>

                                    <td>{parcel.parcelWeight}</td>
                                    <td>{parcel.receiverName}</td>
                                    <td>{parcel.receiverEmail}</td>
                                    <td>{parcel.cost}</td>
                                    <td>
                                        {new Date(parcel.createdAt).toLocaleString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                                    </td>

                                </tr>
                            ))
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;
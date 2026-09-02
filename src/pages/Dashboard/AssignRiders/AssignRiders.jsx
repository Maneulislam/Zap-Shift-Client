import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useRef } from 'react';

const AssignRiders = () => {

    const instanceAxios = useAxiosSecure();
    const riderModalRef = useRef();

    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await instanceAxios.get('parcels?deliveryStatus=pending-pickup');
            return res.data;
        }
    })



    const openRiderModal = parcel => {
        riderModalRef.current.showModal();
    }


    return (
        <div>

            {/* Total */}
            <div className="card card-side bg-base-300 shadow-sm w-52 px-5 m-6">
                <figure>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-land-plot-icon lucide-land-plot"
                    >
                        <path d="m12 8 6-3-6-3v10" />
                        <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
                        <path d="m6.49 12.85 11.02 6.3" />
                        <path d="M17.51 12.85 6.5 19.15" />
                    </svg>
                </figure>
                <div className="card-body flex-1 items-center">
                    <h2 className="text-sm font-bold">Assign Riders</h2>
                    <p className="text-3xl font-bold">{parcels.length}</p>
                </div>
            </div>




            {/* Table */}
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra w-full border-collapse border border-base-300">
                    <thead>
                        <tr className="bg-base-200 text-center align-middle border-b border-base-300">
                            <th className="align-middle text-center border-r border-base-300">#</th>
                            <th className="align-middle text-center border-r border-base-300">Parcel Name</th>
                            <th className="align-middle text-center border-r border-base-300">Amount</th>
                            <th className="align-middle text-center border-r border-base-300">Pickup District</th>
                            <th className="align-middle text-center border-r border-base-300">Time</th>
                            <th className="align-middle text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            parcels.map((parcel, index) => (
                                <tr key={parcel._id} className="text-center align-middle border-b border-base-300">
                                    <th className="align-middle text-center border-r border-base-300">{index + 1}</th>
                                    <td className="align-middle border-r border-base-300">{parcel.parcelName}</td>


                                    <td className="align-middle border-r border-base-300">
                                        ${parcel.cost}
                                    </td>

                                    <td className="align-middle border-r border-base-300">{parcel.receiverDistrict}</td>

                                    <td className="align-middle border-r border-base-300">
                                        {new Date(parcel.createdAt).toLocaleString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                                    </td>

                                    <td className="align-middle space-x-4">

                                        <button onClick={() => openRiderModal(parcel._id)} className="btn  bg-primary">
                                            Assign Rider
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>





            {/* Modal */}



            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog ref={riderModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>




        </div>
    );
};

export default AssignRiders;
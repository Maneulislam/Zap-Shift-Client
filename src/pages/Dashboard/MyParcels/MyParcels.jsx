import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FiEdit, FiSearch } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";

const MyParcels = () => {
    const { user } = useAuth();
    const instanceAxios = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await instanceAxios.get(`parcels?email=${user?.email}`);
            return res.data;
        },
    });



    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                instanceAxios.delete(`parcels/${id}`)
                    .then(res => {
                        console.log(res.data);


                        if (res.data.deletedCount) {

                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel has been deleted.",
                                icon: "success"
                            });

                        }
                    })


            }
        });
    };



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
                    <h2 className="text-sm">Total Parcels</h2>
                    <p className="text-2xl font-bold">{parcels.length}</p>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-10">
                <table className="table w-full border-collapse border border-base-300">
                    <thead>
                        <tr className="bg-base-200 text-center align-middle border-b border-base-300">
                            <th className="align-middle text-center border-r border-base-300">#</th>
                            <th className="align-middle text-center border-r border-base-300">Parcel Name</th>
                            <th className="align-middle text-center border-r border-base-300">Weight</th>
                            <th className="align-middle text-center border-r border-base-300">Receiver Name</th>
                            <th className="align-middle text-center border-r border-base-300">Receiver Email</th>
                            <th className="align-middle text-center border-r border-base-300">Cost</th>
                            <th className="align-middle text-center border-r border-base-300">Date & Time</th>
                            <th className="align-middle text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {parcels.map((parcel, index) => (
                            <tr key={parcel._id} className="text-center align-middle border-b border-base-300">
                                <th className="align-middle text-center border-r border-base-300">{index + 1}</th>
                                <td className="align-middle border-r border-base-300">{parcel.parcelName}</td>
                                <td className="align-middle border-r border-base-300">{parcel.parcelWeight}</td>
                                <td className="align-middle border-r border-base-300">{parcel.receiverName}</td>
                                <td className="align-middle border-r border-base-300">{parcel.receiverEmail}</td>
                                <td className="align-middle border-r border-base-300">{parcel.cost}</td>
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

                                <td className="align-middle">
                                    <button onClick={() => handleDelete(parcel._id)} className="btn btn-square hover:bg-primary">
                                        <FiSearch />
                                    </button>

                                    <button className="btn btn-square hover:bg-primary mx-2">
                                        <FiEdit />
                                    </button>

                                    <button onClick={() => handleDelete(parcel._id)} className="btn btn-square hover:bg-primary">
                                        <RiDeleteBin5Line />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserCheck } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { IoPersonRemoveSharp } from 'react-icons/io5';
import { RiDeleteBin5Line } from 'react-icons/ri';

const ApproveRiders = () => {

    const instanceAxios = useAxiosSecure();

    const { data: riders = [], refetch } = useQuery({
        queryKey: ('/riders', 'pending'),
        queryFn: async () => {
            const res = await instanceAxios.get('/riders');
            return res.data;
        }
    })
    console.log(riders);


    const updateRiderStatus = (id, status) => {

        const updateInfo = { status: status };

        instanceAxios.patch(`/riders/${id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {

                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Rider status is set to ${status}`,
                        showConfirmButton: false,
                        timer: 2500
                    });

                }
            })

    }


    const handleApproval = (id) => {
        updateRiderStatus(id, 'approved');

    }


    const handleRejection = id => {
        updateRiderStatus(id, 'rejected');
    }


    const handleRiderDelete = (id) => {

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
                instanceAxios.delete(`riders/${id}`)
                    .then(res => {
                        console.log(res.data);


                        if (res.data.deletedCount) {

                            refetch();

                            Swal.fire({
                                title: "Deleted!",
                                text: "Rider has been deleted.",
                                icon: "success"
                            });

                        }
                    })


            }
        });
    };




    return (
        <div>

            <h2 className='text-2xl font-bold'>Riders Pending Approval: {riders.length}</h2>


            {/* Table */}
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra w-full border-collapse border border-base-300">
                    <thead>
                        <tr className="bg-base-200 text-center align-middle border-b border-base-300">
                            <th className="align-middle text-center border-r border-base-300">#</th>
                            <th className="align-middle text-center border-r border-base-300">Name</th>
                            <th className="align-middle text-center border-r border-base-300">Email</th>
                            <th className="align-middle text-center border-r border-base-300">District</th>
                            <th className="align-middle text-center border-r border-base-300">Status</th>
                            {/* <th className="align-middle text-center border-r border-base-300">Amount</th>*/}
                            <th className="align-middle text-center border-r border-base-300">Time</th>
                            <th className="align-middle text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            riders.map((rider, index) => (
                                <tr key={rider._id} className="text-center align-middle border-b border-base-300">
                                    <th className="align-middle text-center border-r border-base-300">{index + 1}</th>
                                    <td className="align-middle border-r border-base-300">{rider.name}</td>
                                    <td className="align-middle border-r border-base-300">{rider.email}</td>

                                    <td className="align-middle border-r border-base-300">{rider.district}</td>

                                    <td
                                        className={`align-middle border-r border-base-300 ${rider.status === 'approved'
                                            ? 'text-green-400'
                                            : rider.status === 'pending'
                                                ? 'text-black'
                                                : 'text-red-500'
                                            }`}
                                    >
                                        {rider.status}
                                    </td>

                                    <td className="align-middle border-r border-base-300">
                                        {new Date(rider.createdAt).toLocaleString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                                    </td>

                                    <td className="align-middle">
                                        <button onClick={() => handleApproval(rider._id)} className="btn btn-square hover:bg-primary">
                                            <FaUserCheck size={20} />

                                        </button>

                                        <button onClick={() => { handleRejection(rider._id) }} className="btn btn-square hover:bg-primary mx-2">
                                            <IoPersonRemoveSharp size={20} />
                                        </button>

                                        <button onClick={() => handleRiderDelete(rider._id)} className="btn btn-square hover:bg-primary">
                                            <RiDeleteBin5Line size={20} />
                                        </button>
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

export default ApproveRiders;
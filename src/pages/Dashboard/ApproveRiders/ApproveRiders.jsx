import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserCheck } from 'react-icons/fa6';

const ApproveRiders = () => {

    const instanceAxios = useAxiosSecure();

    const { data: riders = [] } = useQuery({
        queryKey: ('/riders', 'pending'),
        queryFn: async () => {
            const res = await instanceAxios.get('/riders');
            return res.data;
        }
    })
    console.log(riders);


    const handleApproval = id => {
        console.log("Approval");
    }

    return (
        <div>

            <h2 className='text-2xl font-bold'>Riders Pending Approval:{riders.length}</h2>


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

                                    <td className="align-middle border-r border-base-300">{rider.status}</td>
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

                                        <button className="btn btn-square hover:bg-primary mx-2">

                                        </button>
                                        {/* 
                                        <button onClick={() => handleDelete(parcel._id)} className="btn btn-square hover:bg-primary">

                                        </button> */}
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
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {

    const { user } = useAuth();
    const instanceAxios = useAxiosSecure();


    const { data: payments = [] } = useQuery({
        queryKey: ['/payments', user.email],
        queryFn: async () => {
            const res = await instanceAxios.get(`/payments?email=${user.email}`);
            return res.data;
        }
    })





    return (
        <div>
            <h2>Payment History: {payments.length} </h2>



            {/* Table */}
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra w-full border-collapse border border-base-300">
                    <thead>
                        <tr className="bg-base-200 text-center align-middle border-b border-base-300">
                            <th className="align-middle text-center border-r border-base-300">#</th>
                            <th className="align-middle text-center border-r border-base-300">Amount</th>
                            <th className="align-middle text-center border-r border-base-300">Paid Time</th>
                            <th className="align-middle text-center border-r border-base-300">Transaction</th>
                            <th className="align-middle text-center border-r border-base-300">Tracking Number</th>

                            {/* <th className="align-middle text-center">Actions</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        {
                            payments.map((payment, index) => (
                                <tr key={payment._id} className="text-center align-middle border-b border-base-300">
                                    <th className="align-middle text-center border-r border-base-300">{index + 1}</th>
                                    <td className="align-middle border-r border-base-300">${payment.amount}</td>


                                    <td className="align-middle border-r border-base-300">
                                        {new Date(payment.paidAt).toLocaleString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                                    </td>




                                    <td className="align-middle border-r border-base-300">{payment.transactionId}</td>

                                    <td className="align-middle border-r border-base-300">{payment.trackingId}</td>







                                    {/* <td className="align-middle">
                                        <button onClick={() => handleView(payment._id)} className="btn btn-square hover:bg-primary">
                                            <FiSearch />
                                        </button>

                                        <button className="btn btn-square hover:bg-primary mx-2">
                                            <FiEdit />
                                        </button>

                                        <button onClick={() => handleDelete(parcel._id)} className="btn btn-square hover:bg-primary">
                                            <RiDeleteBin5Line />
                                        </button>
                                    </td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
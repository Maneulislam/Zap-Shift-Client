import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UsersManagement = () => {

    const instanceAxios = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['/users'],
        queryFn: async () => {
            const res = await instanceAxios.get('/users');
            return res.data;
        }
    })
    console.log(users);

    return (
        <div>
            <h2>Manage users: {users.length}</h2>



            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra w-full border-collapse border border-base-300">
                    <thead>
                        <tr className="bg-base-200 text-center align-middle border-b border-base-300">
                            <th className="align-middle text-center border-r border-base-300">#</th>
                            <th className="align-middle text-center border-r border-base-300">Photo</th>
                            <th className="align-middle text-center border-r border-base-300">Name</th>
                            <th className="align-middle text-center border-r border-base-300">Email</th>
                            <th className="align-middle text-center border-r border-base-300">Role</th>
                            <th className="align-middle text-center border-r border-base-300">Time</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={user._id} className="text-center align-middle border-b border-base-300">
                                    <th className="align-middle text-center border-r border-base-300">{index + 1}</th>
                                    <td className="align-middle border-r border-base-300">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photoURL}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle border-r border-base-300">{user.displayName}</td>
                                    <td className="align-middle border-r border-base-300">{user.email}</td>

                                    <td className="align-middle border-r border-base-300">{user.role}</td>

                                    <td className="align-middle border-r border-base-300">
                                        {new Date(user.createdAt).toLocaleString("en-GB", {
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

export default UsersManagement;
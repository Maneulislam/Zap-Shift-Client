import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";

const ResetPassword = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();



    const handleResetPassword = data => {
        console.log(data);



        navigate(location.state || '/enter-code')

    };



    return (
        <div className="">



            <div className="w-full max-w-[350px] mx-auto">


                <div className="mb-6">
                    <h2 className="text-2xl sm:text-[34px] font-extrabold text-black leading-tight">
                        Reset Password
                    </h2>

                    <p className="text-sm  mt-1">
                        Reset your password
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleResetPassword)} className="space-y-3">

                    <div>
                        <label className="label p-0 mb-1">
                            <span className="label-text text-xs font-bold text-gray-700">
                                New Password
                            </span>
                        </label>

                        <input
                            type="password"
                            placeholder="New Password"
                            className="input input-bordered w-full h-9 min-h-9 rounded-md text-sm border-gray-300 focus:border-primary focus:border-2 focus:outline-none"

                            {...register("newPassword", { required: true })}
                        />

                        {errors.email?.type === 'required' && <span className="text-red-500">New Password is required</span>}


                    </div>


                    <div>
                        <label className="label p-0 mb-1">
                            <span className="label-text text-xs font-bold text-gray-700">
                                Confirm New Password
                            </span>
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            className="input input-bordered w-full h-9 min-h-9 rounded-md text-sm border-gray-300 focus:border-primary focus:border-2 focus:outline-none"

                            {...register("confirmNewPassword", { required: true })}
                        />

                        {errors.email?.type === 'required' && <span className="text-red-500">Confirm New Password is required</span>}


                    </div>






                    <button
                        state={location.state}
                        type="submit"
                        className="btn w-full min-h-8 h-8 border-none rounded-md bg-primary hover:bg-[#a8d82f] text-black text-xs font-bold shadow-none"
                    >
                        Reset Password
                    </button>
                </form>


            </div>



        </div>

    );
};

export default ResetPassword;
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const ForgetPassword = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const { forgetPassword } = useAuth();


    const handleForgetPassword = data => {
        console.log(data);

        forgetPassword(data.email)
            .then(() => {
                console.log("Reset password sent");
            })
            .catch(error => {
                console.log(error);
            })

        navigate(location.state || '/enter-code')

    };



    return (
        <div className="">



            <div className="w-full max-w-[350px] mx-auto">


                <div className="mb-6">
                    <h2 className="text-2xl sm:text-[34px] font-extrabold text-black leading-tight">
                        Forgot Password
                    </h2>

                    <p className="text-sm  mt-1">
                        Enter your email address and we’ll send <br /> you a reset link.
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleForgetPassword)} className="space-y-3">

                    <div>
                        <label className="label p-0 mb-1">
                            <span className="label-text text-xs font-bold text-gray-700">
                                Email
                            </span>
                        </label>

                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full h-9 min-h-9 rounded-md text-sm border-gray-300 focus:border-primary focus:border-2 focus:outline-none"

                            {...register("email", { required: true })}
                        />

                        {errors.email?.type === 'required' && <span className="text-red-500">Email is required</span>}


                    </div>





                    <button
                        state={location.state}
                        type="submit"
                        className="btn w-full min-h-8 h-8 border-none rounded-md bg-primary hover:bg-[#a8d82f] text-black text-xs font-bold shadow-none"
                    >
                        Send
                    </button>
                </form>

                <div className="mt-3 text-xs text-gray-500">
                    Remember your password?{" "}
                    <Link
                        state={location.state}
                        to="/login"
                        className="text-primary font-bold hover:underline "
                    >
                        Login
                    </Link>
                </div>



            </div>



        </div>

    );
};

export default ForgetPassword;
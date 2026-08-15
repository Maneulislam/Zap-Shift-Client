import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const handleLogin = data => {
        console.log(data);

    };

    const handleGoogleLogin = () => {
        console.log("Google login");
    };

    return (
        <div className="">



            <div className="w-full max-w-[350px] mx-auto">


                <div className="mb-6">
                    <h2 className="text-2xl sm:text-[34px] font-extrabold text-black leading-tight">
                        Create an Account
                    </h2>

                    <p className="text-sm  mt-1">
                        Register with ZapShift
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">

                    <div>
                        <label className="label p-0 mb-1">
                            <span className="label-text text-xs font-medium text-gray-700">
                                Name
                            </span>
                        </label>

                        <input
                            type="text"
                            name="email"
                            placeholder="Name"
                            className="input input-bordered w-full h-9 min-h-9 rounded-md text-sm border-gray-300 focus:border-[#B8E93F] focus:outline-none"

                            {...register("name", { required: true })}
                        />

                        {errors.name?.type === 'required' && <span className="text-red-500">Name is required</span>}


                    </div>



                    <div>
                        <label className="label p-0 mb-1">
                            <span className="label-text text-xs font-medium text-gray-700">
                                Email
                            </span>
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full h-9 min-h-9 rounded-md text-sm border-gray-300 focus:border-[#B8E93F] focus:outline-none"

                            {...register("email", { required: true })}
                        />

                        {errors.email?.type === 'required' && <span className="text-red-500">Email is required</span>}


                    </div>

                    <div>
                        <label className="label p-0 mb-1">
                            <span className="label-text text-xs font-medium text-gray-700">
                                Password
                            </span>
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full h-9 min-h-9 rounded-md text-sm border-gray-300 focus:border-[#B8E93F] focus:outline-none"

                            {...register("password", { required: true })}
                        />

                        {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}


                    </div>



                    <button
                        type="submit"
                        className="btn w-full min-h-8 h-8 border-none rounded-md bg-primary hover:bg-[#a8d82f] text-black text-xs font-bold shadow-none"
                    >
                        Register
                    </button>
                </form>

                <div className="mt-3 text-xs text-gray-500">
                    Already have an account?{" "}
                    <a
                        href="/register"
                        className="text-primary font-bold hover:underline "
                    >
                        Login
                    </a>
                </div>

                <div className="flex items-center gap-3 my-3">
                    <div className="flex-1 h-px bg-gray-200"></div>

                    <span className="text-xs text-gray-400">
                        Or
                    </span>

                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="btn w-full min-h-8 h-8 rounded-md bg-[#e9edf3] hover:bg-[#dfe4eb] border-none text-black shadow-none text-xs font-bold"
                >
                    <FcGoogle className="text-base" />
                    Register with google
                </button>

            </div>



        </div>

    );
};

export default Register;
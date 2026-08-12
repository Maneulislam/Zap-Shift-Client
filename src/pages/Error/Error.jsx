import React from 'react';
import { Link } from 'react-router';
import error from '../../assets/error.webp'

const Error = () => {
    return (
        <div className="flex items-center justify-center mb-16 px-40">
            <div className="card w-full  bg-base-100 shadow-sm rounded-3xl p-8 sm:p-16 flex flex-col items-center text-center">

                <div className="w-60 sm:w-96 mb-6">
                    <img
                        src={error}
                        alt="Page Not Found Illustration"
                        className="w-full h-auto object-contain mx-auto"
                    />
                </div>


                <Link
                    to="/"
                    className="btn border-none bg-primary hover:bg-[#b3dc52] text-slate-900 font-semibold px-8 rounded-xl capitalize shadow-none min-h-[2.5rem] h-10 text-sm"
                >
                    Go Home
                </Link>

            </div>
        </div>
    );
};

export default Error;
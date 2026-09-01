import { FiLock } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

const Forbidden = () => {
    return (
        <div className="max-w-screen bg-white flex flex-col items-center justify-center p-4 mt-28">
            <div className="text-center max-w-md w-full flex flex-col items-center">
                <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-pink-50/80 rounded-full" />

                    <span className="absolute top-4 left-3 text-pink-300 text-xs font-bold font-mono">×</span>
                    <span className="absolute top-10 right-4 text-pink-300 text-xs font-bold font-mono">+</span>
                    <span className="absolute bottom-6 left-5 text-pink-300 text-xs font-bold font-mono">+</span>
                    <span className="absolute bottom-10 right-3 text-pink-300 text-xs font-bold font-mono">×</span>
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-pink-300 text-xs font-bold font-mono">+</span>
                    <span className="absolute top-2 left-1/2 -translate-x-1/2 text-pink-300 text-xs font-bold font-mono">+</span>
                    <span className="absolute top-1/2 left-2 -translate-y-1/2 text-pink-300 text-xs font-bold">⚡</span>
                    <span className="absolute top-1/2 right-2 -translate-y-1/2 text-pink-300 text-xs font-bold">⚡</span>

                    <div className="relative text-pink-600 flex items-center justify-center">
                        <FiLock className="w-20 h-20 stroke-[2.2]" />
                        <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-50 p-0.5 rounded-full">
                            <RxCross2 className="w-5 h-5 stroke-[2.5]" />
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-rose-600 mb-3 tracking-wide">
                    You Are Forbidden to Access This Page
                </h1>
                <p className="text-gray-500 text-sm sm:text-base mb-8 font-normal">
                    Please contact the administrator if you believe this is an error.
                </p>

                <div className="flex flex-row items-center justify-center gap-4 w-full">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="btn border-none bg-[#c5e86c] hover:bg-[#b4dc54] text-gray-800 normal-case font-medium px-6 h-11 min-h-0 rounded-lg shadow-none"
                    >
                        Go to Home
                    </button>

                    <button
                        onClick={() => window.location.href = '/dashboard'}
                        className="btn border-none bg-[#143d3d] hover:bg-[#0f2e2e] text-white normal-case font-medium px-6 h-11 min-h-0 rounded-lg shadow-none"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Forbidden;
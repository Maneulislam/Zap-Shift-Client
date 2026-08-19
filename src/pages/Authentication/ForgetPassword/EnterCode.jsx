import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const EnterCode = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const location = useLocation();

    const { verifyCode } = useAuth();

    const handleVerifyCode = data => {
        const code = `${data.digit1}${data.digit2}${data.digit3}${data.digit4}${data.digit5}${data.digit6}`;

        if (verifyCode) {
            verifyCode(code)
                .then(() => {
                    navigate(location.state || '/reset-pass');
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            navigate(location.state || '/reset-pass');
        }
    };

    const handleInputChange = (e, nextInputId) => {
        const val = e.target.value;
        if (val && nextInputId) {
            const nextInput = document.getElementById(nextInputId);
            if (nextInput) nextInput.focus();
        }
    };

    const handleKeyDown = (e, prevInputId) => {
        if (e.key === "Backspace" && !e.target.value && prevInputId) {
            const prevInput = document.getElementById(prevInputId);
            if (prevInput) prevInput.focus();
        }
    };

    return (
        <div className="">
            <div className="w-full max-w-[350px] mx-auto">
                <div className="mb-6">
                    <h2 className="text-2xl sm:text-[34px] font-extrabold text-black leading-tight">
                        Enter Code
                    </h2>

                    <p className="text-sm mt-1 text-gray-700">
                        Enter 6 digit code that we sent in your email <br /> address
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleVerifyCode)} className="space-y-6">
                    <div>
                        <div className="flex justify-between gap-2">
                            {[1, 2, 3, 4, 5, 6].map((num) => {
                                const currentId = `digit${num}`;
                                const nextId = num < 6 ? `digit${num + 1}` : null;
                                const prevId = num > 1 ? `digit${num - 1}` : null;

                                return (
                                    <input
                                        key={num}
                                        id={currentId}
                                        type="text"
                                        maxLength={1}
                                        className="w-10 h-11 text-center input input-bordered rounded-lg text-sm border-gray-300 focus:border-primary focus:border-2 focus:outline-none p-0"
                                        {...register(currentId, { required: true })}
                                        onChange={(e) => {
                                            register(currentId).onChange(e);
                                            handleInputChange(e, nextId);
                                        }}
                                        onKeyDown={(e) => handleKeyDown(e, prevId)}
                                    />
                                );
                            })}
                        </div>

                        {Object.keys(errors).length > 0 && (
                            <span className="text-red-500 text-xs mt-2 block">
                                Please fill in all digits.
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="btn w-full min-h-10 h-10 border-none rounded-lg bg-primary hover:bg-[#a8d82f] text-black text-xs font-bold shadow-none"
                    >
                        Verify Code
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnterCode;
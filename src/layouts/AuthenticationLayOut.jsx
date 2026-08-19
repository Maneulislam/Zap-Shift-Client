import Logo from '../components/Logo/Logo';
import authImage from '../assets/authImage.png';
import { Outlet } from 'react-router';

const AuthenticationLayOut = () => {
    return (
        <div className=" w-full flex items-center justify-center">
            <div className="flex flex-col lg:flex-row md:flex-row w-full max-w-8xl bg-white rounded-xl overflow-hidden shadow-sm min-h-screen">

                <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 md:p-12 bg-white">
                    <div className="mb-6 lg:mb-10">
                        <Logo />
                    </div>
                    <div className="w-full max-w-md mx-auto my-auto">
                        <Outlet />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 bg-[#FAFDF0] flex items-center justify-center p-8 sm:p-12 lg:p-16">
                    <img
                        className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain"
                        src={authImage}
                        alt=""
                    />
                </div>

            </div>
        </div>
    );
};

export default AuthenticationLayOut;
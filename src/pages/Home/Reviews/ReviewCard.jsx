import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ singleReview }) => {

    const { userName, review, user_photoURL, skill } = singleReview;

    return (
        <div className="w-full flex justify-center">
            <div className="card w-full max-w-sm sm:max-w-md md:max-w-lg bg-base-100 shadow-sm border border-base-200 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 font-sans">
                <div className="card-body p-0 space-y-4 sm:space-y-6">
                    <div className="text-teal-200">
                        <FaQuoteLeft className="text-3xl sm:text-4xl md:text-5xl" />
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm md:text-base  leading-tight ">
                        {review}
                    </p>

                    <div className="border-b-2 border-dashed border-teal-200/60 my-0 sm:my-0" />

                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="avatar placeholder flex-shrink-0">
                            <div className="text-neutral-content rounded-full w-10 h-10 sm:w-12 sm:h-12 overflow-hidden">
                                <img src={user_photoURL} alt={userName} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-[#0e484e] text-sm sm:text-base leading-relaxed truncate">
                                {userName}
                            </h4>
                            <p className="text-gray-400 text-xs mt-0.5 sm:mt-1 truncate">
                                {skill}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
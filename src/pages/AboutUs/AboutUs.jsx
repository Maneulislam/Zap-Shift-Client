import { useState } from "react";


const AboutUs = () => {

    const [activeTab, setActiveTab] = useState('Story');

    const content = {
        "Story": [
            "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
            "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
            "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time."
        ],
        "Mission": [
            "Our mission is to revolutionize parcel logistics by leveraging cutting-edge tracking technology and sustainable delivery practices across global networks.",
            "We are committed to building transparent, customer-first supply chains that optimize routes, reduce carbon footprints, and empower businesses to scale effortlessly.",
            "By continuously expanding our infrastructure and integrating smart automation, we guarantee seamless end-to-end delivery for every package we handle."
        ],
        "Success": [
            "Over the past decade, we have completed over 1 million seamless deliveries while maintaining an industry-leading 99.8% on-time accuracy rate.",
            "Through continuous technological innovation and dedication, we transformed local fulfillment operations into an internationally recognized logistics hub.",
            "Our rapid growth and high client retention reflect our relentless focus on operational excellence, speed, and uncompromising service reliability."
        ],
        "Team & Others": [
            "Our global team consists of dedicated logistics strategists, field operations managers, and 24/7 support staff committed to your satisfaction.",
            "By combining deep domain expertise with round-the-clock service, we handle complex routing challenges and keep every shipment moving smoothly.",
            "We foster a collaborative culture that prioritizes safety, continuous learning, and client success at every single step of the supply chain."
        ]
    };

    const tabs = ['Story', 'Mission', 'Success', 'Team & Others']

    return (
        <div className='card rounded-3xl bg-white card-border p-16 mb-16' >

            <div className='space-y-5'>
                <h2 className='text-5xl font-extrabold'>About Us</h2>

                <p className='text-gray-500'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. <br /> From personal packages to business shipments — we deliver on time, every time.</p>

            </div>


            <div className="border-t border border-gray-200 w-full my-6 md:my-10"></div>



            <div className="flex flex-wrap gap-6 sm:gap-10 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-2xl transition-colors duration-200 ${activeTab === tab
                            ? 'text-black font-extrabold'
                            : 'text-gray-700 hover:text-gray-400'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="space-y-6 text-gray-500 text-sm sm:text-base leading-relaxed">
                {content[activeTab]?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>


        </div>
    );
};

export default AboutUs;
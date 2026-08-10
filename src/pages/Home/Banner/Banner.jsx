import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Banner = () => {
    return (
        <Carousel className="mb-14"
            autoPlay={true}
            infiniteLoop={true}
        >
            <div className="relative">
                <img src={bannerImg1} />

                <div className="absolute bottom-32 left-24 ">
                    <p className="text-black max-w-xl">
                        Enjoy fast, reliable parcel delivery with real-time tracking
                        and zero hassle. From personal packages to business shipments —
                        we deliver on time, every time.
                    </p>

                </div>


                <div className="flex items-center absolute bottom-16 left-24">
                    <button className="btn bg-primary rounded-4xl">Track Your Parcel</button>
                    <button className="text-4xl"><BsArrowUpRightCircleFill /> </button>
                    <button className="btn ml-4">Be A Rider</button>

                </div>

            </div>


            <div className="relative">
                <img src={bannerImg2} />
                <div className="absolute bottom-32 left-24 ">
                    <p className="text-black max-w-xl">
                        Enjoy fast, reliable parcel delivery with real-time tracking
                        and zero hassle. From personal packages to business shipments —
                        we deliver on time, every time.
                    </p>

                </div>


                <div className="flex items-center absolute bottom-16 left-24">
                    <button className="btn bg-primary rounded-4xl">Track Your Parcel</button>
                    <button className="text-4xl"><BsArrowUpRightCircleFill /> </button>
                    <button className="btn ml-4">Be A Rider</button>

                </div>

            </div>


            <div className="relative">
                <img src={bannerImg3} />
                <div className="absolute bottom-32 left-24 ">
                    <p className="text-black max-w-xl">
                        Enjoy fast, reliable parcel delivery with real-time tracking
                        and zero hassle. From personal packages to business shipments —
                        we deliver on time, every time.
                    </p>

                </div>


                <div className="flex items-center absolute bottom-16 left-24">
                    <button className="btn bg-primary rounded-4xl">Track Your Parcel</button>
                    <button className="text-4xl"><BsArrowUpRightCircleFill /> </button>
                    <button className="btn ml-4">Be A Rider</button>

                </div>

            </div>
        </Carousel>
    );
};

export default Banner;
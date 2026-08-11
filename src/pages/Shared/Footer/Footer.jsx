import { NavLink } from "react-router";
import Logo from "../../../components/Logo/Logo";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal bg-black footer-center bg text-primary-content p-10">
            <aside>

                <Logo></Logo>

                <p className="text-gray-300 max-w-xl">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>

            </aside>


            <div className="w-full max-w-6xl border-t-2 border-dashed border-gray-600 "></div>


            <div >
                <ul className="flex items-center gap-10">
                    <li><NavLink>Services</NavLink></li>
                    <li><NavLink>Coverage</NavLink></li>
                    <li><NavLink>About Us</NavLink></li>
                    <li><NavLink>Pricing</NavLink></li>
                    <li><NavLink>Blog</NavLink></li>
                    <li><NavLink>Contact</NavLink></li>
                </ul>

            </div>


            <div className="w-full max-w-6xl border-t-2 border-dashed border-gray-600 "></div>




            <nav><div className="border-t border-dashed border-gray-100 max-w-full ">
            </div>
                <div className="grid grid-flow-col gap-8">
                    <a>
                        <BsLinkedin className="w-6 h-6" />


                    </a>
                    <a>
                        <FaXTwitter className="w-6 h-6 bg-white text-black" />

                    </a>
                    <a>
                        <FaFacebook className="w-6 h-6 text-white" />

                    </a>

                    <a>
                        <GrYoutube className="w-6 h-6 text-white" />

                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
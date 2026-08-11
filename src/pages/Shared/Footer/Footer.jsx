import { NavLink } from "react-router";
import Logo from "../../../components/Logo/Logo";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal bg-black footer-center text-primary-content p-6 sm:p-8 lg:p-16">
            <aside className="flex flex-col items-center px-4">
                <Logo />
                <p className="text-gray-300 max-w-xl mt-3 text-sm sm:text-base text-center">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </aside>

            <div className="w-full max-w-6xl border-t-2 border-dashed border-gray-700 my-4"></div>

            <div className="w-full px-4">
                <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-sm sm:text-base">
                    <li><NavLink to="/services" className="hover:text-gray-400 transition-colors">Services</NavLink></li>
                    <li><NavLink to="/coverage" className="hover:text-gray-400 transition-colors">Coverage</NavLink></li>
                    <li><NavLink to="/about" className="hover:text-gray-400 transition-colors">About Us</NavLink></li>
                    <li><NavLink to="/pricing" className="hover:text-gray-400 transition-colors">Pricing</NavLink></li>
                    <li><NavLink to="/blog" className="hover:text-gray-400 transition-colors">Blog</NavLink></li>
                    <li><NavLink to="/contact" className="hover:text-gray-400 transition-colors">Contact</NavLink></li>
                </ul>
            </div>

            <div className="w-full max-w-6xl border-t-2 border-dashed border-gray-700 my-4"></div>

            <nav className="flex flex-col items-center">
                <div className="grid grid-flow-col gap-6 sm:gap-8">
                    <a href="#linkedin" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                        <BsLinkedin className="w-6 h-6" />
                    </a>
                    <a href="#twitter" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
                        <FaXTwitter className="w-6 h-6 bg-white text-black rounded p-0.5" />
                    </a>
                    <a href="#facebook" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                        <FaFacebook className="w-6 h-6 text-white" />
                    </a>
                    <a href="#youtube" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
                        <GrYoutube className="w-6 h-6 text-white" />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
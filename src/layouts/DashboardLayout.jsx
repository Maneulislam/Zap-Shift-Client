import { useRef } from "react";
import { NavLink, Outlet } from "react-router";
import Logo from "../components/Logo/Logo";

const DashboardLayout = () => {

    const drawerInputRef = useRef(null);

    const closeDrawer = () => {
        if (drawerInputRef.current) {
            drawerInputRef.current.checked = false;
        }
    };

    const toggleDrawer = () => {
        if (drawerInputRef.current) {
            drawerInputRef.current.checked = !drawerInputRef.current.checked;
        }
    };


    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-5    ${isActive ? "bg-primary text-black font-bold rounded-md" : "text-gray-300 hover:bg-gray-700 hover:text-white  "
        }`;



    return (
        <div className="drawer lg:drawer-open min-h-screen ">
            <input
                ref={drawerInputRef}
                type="checkbox"
                className="drawer-toggle"
            />

            <div className="drawer-content flex flex-col">
                <nav className="navbar w-full shadow-sm bg-white px-4 flex items-center gap-2">
                    <button
                        onClick={toggleDrawer}
                        aria-label="open sidebar"
                        className="btn btn-square btn-ghost drawer-button lg:hidden"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-8"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </button>

                    <div className="flex-1 pl-2 text-2xl font-bold">
                        ZapShift Dashboard
                    </div>
                </nav>

                <main className="p-4 flex-1">
                    <Outlet />
                </main>
            </div>

            <div className="drawer-side z-40 shadow-sm">
                <div
                    onClick={closeDrawer}
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></div>

                <div className="flex min-h-full flex-col shadow-sm bg-secondary  w-64 text-base-content">
                    <div className="flex items-center border-b border-gray-600 h-16 px-5 text-white justify-between mb-6 pb-2  ">
                        <Logo />

                        {/* Drawer close button */}
                        <button
                            onClick={closeDrawer}
                            aria-label="close sidebar"
                            className="btn btn-sm btn-circle pt-3 text-gray-500 hover:text-white btn-ghost lg:hidden"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>


                    <ul className="menu w-full grow gap-5 p-5 mx-auto">
                        <li>
                            <NavLink
                                to="/"
                                end
                                onClick={closeDrawer}
                                className={navLinkClass}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="size-7">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                </svg>
                                <span className="text-lg">Homepage</span>
                            </NavLink>
                        </li>



                        <li>
                            <NavLink
                                to="/dashboard"
                                end
                                onClick={closeDrawer}
                                className={navLinkClass}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="lucide lucide-layout-dashboard-icon lucide-layout-dashboard size-7">
                                    <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
                                </svg>
                                <span className="text-lg">Dashboard</span>
                            </NavLink>
                        </li>



                        <li>
                            <NavLink
                                to="/dashboard/my-parcels"
                                onClick={closeDrawer}
                                className={navLinkClass}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="size-7">
                                    <path d="M10 22v-8" />
                                    <path d="M2.336 8.89 10 14l11.715-7.029" />
                                    <path d="M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z" />
                                </svg>
                                <span className="text-lg">My Parcels</span>
                            </NavLink>
                        </li>



                        <li>
                            <NavLink
                                to="/dashboard/settings"
                                onClick={closeDrawer}
                                className={navLinkClass}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="size-7">
                                    <path d="M20 7h-9" />
                                    <path d="M14 17H5" />
                                    <circle cx="17" cy="17" r="3" />
                                    <circle cx="7" cy="7" r="3" />
                                </svg>
                                <span className="text-lg">Settings</span>
                            </NavLink>
                        </li>





                    </ul>



                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
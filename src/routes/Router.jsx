import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Error from "../pages/Error/Error";
import AuthenticationLayOut from "../layouts/AuthenticationLayOut";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import ForgetPassword from "../pages/Authentication/ForgetPassword/ForgetPassword";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },

            {
                path: 'coverage',
                Component: Coverage,
                loader: () => fetch('/servicePoints.json').then(res => res.json())
            },

            {
                path: 'rider',
                element: <PrivateRoute><Rider></Rider></PrivateRoute>
            },

            {
                path: 'send-parcel',
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>
            },



            {
                path: 'about-us',
                Component: AboutUs,
            },

            {
                path: 'error',
                Component: Error,
            },

        ],
    },



    // Authentication Layout

    {
        path: '/',
        Component: AuthenticationLayOut,
        children: [
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            },
            {
                path: 'forget-password',
                Component: ForgetPassword,
            },
        ]
    },




]);
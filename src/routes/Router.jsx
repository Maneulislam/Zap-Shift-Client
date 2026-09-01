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
import EnterCode from "../pages/Authentication/ForgetPassword/EnterCode";
import ResetPassword from "../pages/Authentication/ForgetPassword/ResetPassword";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccessful from "../pages/Dashboard/Payment/PaymentSuccessful";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute";


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
                element: <PrivateRoute><Rider></Rider></PrivateRoute>,
                loader: () => fetch('/servicePoints.json').then(res => res.json())
            },

            {
                path: 'send-parcel',
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
                loader: () => fetch('/servicePoints.json').then(res => res.json())

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
            {
                path: 'enter-code',
                Component: EnterCode,
            },

            {
                path: 'reset-pass',
                Component: ResetPassword
            },
        ]
    },





    // Dashboard Layout

    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: 'my-parcels',
                Component: MyParcels,
            },

            {
                path: 'payment/:parcelId',
                Component: Payment,
            },
            {
                path: 'payment-success',
                Component: PaymentSuccessful,
            },
            {
                path: 'payment-cancelled',
                Component: PaymentCancelled,
            },

            {
                path: 'payment-history',
                Component: PaymentHistory,
            },
            {
                path: 'approve-riders',
                element: <AdminRoute><ApproveRiders></ApproveRiders></AdminRoute>
            },
            {
                path: 'users-management',
                element: <AdminRoute><UsersManagement></UsersManagement></AdminRoute>
            },
        ]
    },



]);
import Loader from '../components/Loading/Loader';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useAuth();


    if (loading) {
        return <Loader></Loader>;
    }

    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>;
    }

    return children;
};

export default PrivateRoute;


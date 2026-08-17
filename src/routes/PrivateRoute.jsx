import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const location = useLocation();

    const { user, loading } = useAuth();


    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>;
    }

    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>;
    }

    return children;
};

export default PrivateRoute;


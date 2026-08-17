import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();


    if (loading) {
        <span className="loading loading-bars loading-xl"></span>
    }

    if (!user) {
        <Navigate to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRoute;
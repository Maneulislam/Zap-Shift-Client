import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loader from '../components/Loading/Loader';
import Forbidden from '../components/Forbidden/Forbidden';

const RiderRoute = ({ children }) => {

    const { loading } = useAuth();
    const { role, RoleLoading } = useRole();


    if (loading || RoleLoading) {
        return <Loader></Loader>;
    }

    if (role !== 'rider') {
        return <Forbidden></Forbidden>;
    }


    return children;


};

export default RiderRoute;
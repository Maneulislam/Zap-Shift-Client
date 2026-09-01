import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Forbidden from '../components/Forbidden/Forbidden';
import Loader from '../components/Loading/Loader';

const AdminRoute = ({ children }) => {

    const { loading } = useAuth();
    const { role, RoleLoading } = useRole();

    if (loading || RoleLoading) {
        return <Loader></Loader>;
    }

    if (role !== 'admin') {
        return <Forbidden></Forbidden>;
    }


    return children;
};

export default AdminRoute;
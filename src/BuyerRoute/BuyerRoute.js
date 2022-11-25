import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Component/Loader';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';

const BuyerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller]=useSeller(user?.email)
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (!isAdmin && !isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
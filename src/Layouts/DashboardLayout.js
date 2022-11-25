import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            {/* responsive */}
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side border-r-2">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allSellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/allBuyers">All Buyers</Link></li>
                            </>

                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                            </>
                        }

                        {
                            (!isAdmin && !isSeller) && <>
                                <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
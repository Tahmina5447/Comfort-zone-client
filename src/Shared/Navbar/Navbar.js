import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import logo from '../../images/icon.jpg'

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const [isAdmin]=useAdmin(user?.email)
    const [isSeller]=useSeller(user?.email)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.error(error));
    }

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        
    
        {
            user?.email ?
            <>
                { isAdmin && <li><Link to='/dashboard/allSellers'>Dashboard</Link></li>}
                { isSeller && <li><Link to='/dashboard/addproduct'>Dashboard</Link></li>}
                { (!isSeller && !isAdmin) && <li><Link to='/dashboard/myOrders'>Dashboard</Link></li>}
                <li onClick={handleLogOut}><Link>Logout</Link></li>
            </>
            :
            <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }
        
        </React.Fragment>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="bg-white menu menu-compact dropdown-content mt-3 p-2 shadow text-primary rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div >
                    <img className='w-8 h-8' src={logo} alt="logo" />
                </div>
                <Link to='/' className="ml-2 text-primary text-2xl font-semibold">Comfort Zone</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold text-primary">
                    {menuItems}
                </ul>
            </div>
           {/* {
            user?.email && <>
                 <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            </>
           } */}

        </div>
    );
};

export default Navbar;
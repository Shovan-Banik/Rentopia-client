import { FaBoxOpen, FaFirstOrder, FaSearch, FaHome, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useUserRoleDB from '../hooks/useUserRoleDB';

const Dashboard = () => {
    const [userRole] = useUserRoleDB();
    const role = userRole.role;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <h2 className='text-5xl font-bold'>Welcome To Dashboard</h2> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-teal-500 text-white">
                    {
                        role === 'admin' ? <>
                            <h3 className='text-3xl font-bold text-white py-4'>Admin Dashboard</h3>
                            <li><NavLink to='/dashboard/allUser'><FaBoxOpen></FaBoxOpen> All User</NavLink></li>
                            <li><NavLink to='/dashboard/allBookedHouse'><FaWallet></FaWallet>All Booking</NavLink></li>
                        </> :
                            role === 'client' ? <>
                                <h3 className='text-3xl font-bold text-white py-4'>Client Dashboard</h3>
                                <li><NavLink to='/dashboard/myWishList'><FaBoxOpen></FaBoxOpen> My WishList</NavLink></li>
                                <li><NavLink to='/dashboard/bookedHouse'><FaWallet></FaWallet>Booked Properties</NavLink></li>
                            </> :
                                <>
                                    <h3 className='text-3xl font-bold text-white py-4'>Owner Dashboard</h3>
                                    <li><NavLink to='/dashboard/addedProperty'><FaBoxOpen></FaBoxOpen> My added Properties</NavLink></li>
                                    {/* <li><NavLink to='/dashboard/MyAddedHouse'><FaWallet></FaWallet>Booked House</NavLink></li> */}
                                </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>

                    <li><NavLink to='/findProperty'><FaSearch></FaSearch>Find Property</NavLink></li>

                    <li><NavLink to='/blog'><FaFirstOrder></FaFirstOrder>Blog</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
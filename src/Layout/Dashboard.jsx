import React from 'react';
import { FaBoxOpen, FaFirstOrder, FaSearch, FaHome, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-teal-500 text-white">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/wishList'><FaBoxOpen></FaBoxOpen> My WishList</NavLink></li>
                    <li><NavLink to='/dashboard/bookedHouse'><FaWallet></FaWallet>Booked House</NavLink></li>
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
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const navOption = <>
        <li className='hover:bg-yellow-400'><Link to='/'>Home</Link></li>
        <li className='hover:bg-yellow-400'><Link to='/signUp'>SignUp</Link></li>
        <li className='hover:bg-yellow-400'><Link to='/signIn'>SignIn</Link></li>

    </>
    return (
        <>
            <div className="navbar md:fixed z-10 bg-black bg-opacity-10 text-white max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown z-10 md:z-0 text-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='text-red-700 text-2xl font-bold mr-0'>Rentopia</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="w-10 tooltip tooltip-left" data-tip={user?.displayName}>
                        <img className='rounded-full ' src={user?.photoURL} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
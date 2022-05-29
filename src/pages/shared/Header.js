import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/resource'>Resource</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/blog'>FAQ</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out<FontAwesomeIcon className='text-xl' icon={faArrowRightFromBracket} /></button> : <Link to="/login">Login<FontAwesomeIcon className='text-xl' icon={faArrowRightToBracket} /> </Link>}</li>
    </>
    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost upper-case text-xl ">Cars Parts</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
                
            </div>
            <div className="navbar-end">
                {
                user?.photoURL && <img className='w-10 h-10 mask mask-squircle' src={user?.photoURL} alt=" " /> 
                }
            
                <label htmlFor="dashboard-sidebar"  tabIndex="1" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;
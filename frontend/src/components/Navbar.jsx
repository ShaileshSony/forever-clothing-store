import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [visible, setVisible] = useState(false)

  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="logo" />

      {/* Link list */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* cta section */}
      <div className="flex items-center gap-6 ">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search-icon"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="profile_icon"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black ">My Profile</p>
              <p className="cursor-pointer hover:text-black ">Orders</p>
              <p className="cursor-pointer hover:text-black ">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart_icon" />
          <p className="absolute right-[-5px] bottom-[-4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            10
          </p>
        </Link>
        <img src={assets.menu_icon} onClick={()=>setVisible(true)} className="w-5 cursor-pointer sm:hidden"  alt="menu_icon" />
      </div>

      {/* show menu link in small device */}
      <div className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all ${visible ?'w-full h-full' : 'w-0'}`} >
        <div className="flex flex-col text-gray-600">
            <div onClick={()=>setVisible(false)} className=" flex items-center gap-4 p-3 cursor-pointer ">
                <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="dropdown_icon" />
                <p className="text-gray-500 text-md">Back</p>
            </div>
            {/* <div className="flex flex-col gap-4 "> */}
                <NavLink to='/' onClick={()=>setVisible(false)} className='py-2 pl-2 border border-gray-200 border-t-0 ' >Home</NavLink>
                <NavLink to='/collection' onClick={()=>setVisible(false)} className='py-2 pl-2 border border-gray-200 border-t-0' >Collection</NavLink>
                <NavLink to='/about' onClick={()=>setVisible(false)} className='py-2 pl-2 border border-gray-200 border-t-0' >About</NavLink>
                <NavLink to='/contact' onClick={()=>setVisible(false)} className='py-2 pl-2 border border-gray-200 border-t-0' >Contact</NavLink>
            {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

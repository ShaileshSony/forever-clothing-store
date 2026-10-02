import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-14 pb-4 text-sm ">
        <div>
          <img src={assets.logo} className="w-32 mb-5" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            aspernatur reiciendis tenetur autem inventore deleniti.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-500 ">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 ">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-500 ">
            <li>+91 1234567890</li>
            <li>shailesh.achiever@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="w-full h-0.5 bg-gray-200 border-none" />
        <p className="py-5 text-xs sm:text-sm text-center text-gray-700">
          Copyright 2026@ forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

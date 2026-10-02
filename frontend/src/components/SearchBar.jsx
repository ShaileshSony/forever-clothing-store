import React, { useState, useContext, useEffect } from "react";
import {assets} from "../assets/assets.js";
import { ShopContext } from "../context/ShopContext.jsx";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
//   const [visible, setVisible] = useState(false)
  const { products } = useContext(ShopContext);

  const location = useLocation();   

  const visible = location.pathname === "/collection" ? true : false;
  
// useEffect(()=> {
//    if (location.pathname === "/collection") {
//     setVisible(true);
//   } else {
//     setVisible(false);
//   }
// },[location.pathname])

// Search products based on the search query

  return showSearch && visible ? (
    <div className="flex items-center justify-center border-t  border-gray-50 bg-gray-50 text-center transition">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search..."
        />
        <img src={assets.search_icon} className="w-4" alt="icon" />
      </div>
      <img src={assets.cross_icon} onClick={()=> setShowSearch(false)} className="w-4 cursor-pointer" alt="icon" />
    </div>
  ) : null;
};

export default SearchBar;

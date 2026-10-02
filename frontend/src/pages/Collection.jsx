import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/productItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  useEffect(() => {
    setFilterProducts(() => {
      let productsFiltered = products.slice();

      // Filter products based on search query
      if (search.trim() !== "" && showSearch) {
         productsFiltered = productsFiltered.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        );
      }

      if (category.length > 0 && subCategory.length === 0) {
         productsFiltered = productsFiltered.filter((item) =>
          category.includes(item.category),
        );
      } else if (category.length === 0 && subCategory.length > 0) {
         productsFiltered = productsFiltered.filter((item) =>
          subCategory.includes(item.subCategory),
        );
      } else if (category.length > 0 && subCategory.length > 0) {
         productsFiltered = productsFiltered.filter(
          (item) =>
            category.includes(item.category) &&
            subCategory.includes(item.subCategory),
        );
      }

      // Sort products based on sortType
      if (sortType === "low-high") {
         productsFiltered.sort((a, b) => a.price - b.price);
      } else if (sortType === "high-low") {
         productsFiltered.sort((a, b) => b.price - a.price);
      }

      

      return productsFiltered;
    });
  }, [products, category, subCategory, sortType, search, showSearch]);

  const toggleCategoryHandler = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  const toggleSubCategoryHandler = (e) => {
    const value = e.target.value;

    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  // sort products
  const sortProductsHandler = (e) => {
    const value = e.target.value;
    setSortType(value);
    console.log(sortType);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300">
      {/* filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 uppercase"
        >
          Filters
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt="icon"
          />
        </p>

        {/* category filter */}
        <div
          className={`border border-gray-300 rounded-lg pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block `}
        >
          <p className="mb-3 text-sm font-medium uppercase ">categories</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700 ">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategoryHandler}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategoryHandler}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategoryHandler}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        {/* Sub category */}
        <div
          className={`border border-gray-300 rounded-lg pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block `}
        >
          <p className="mb-3 text-sm font-medium uppercase ">type</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700 ">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategoryHandler}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategoryHandler}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategoryHandler}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text_1={"ALL"} text_2={"COLLECTIONS"} />
          {/* Products Sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2 outline-none"
            onChange={sortProductsHandler}
            value={sortType}
          >
            <option value="relavent">Sortby: Relavent</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 ">
          {filterProducts &&
            filterProducts.map((item, index) => {
              return (
                <ProductItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Collection;

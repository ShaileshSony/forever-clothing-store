import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./productItem.jsx";

const LatestCollection = () => {

  const { products } = useContext(ShopContext);

  const [laestProduct, setLatestProduct] = useState([])

  useEffect(()=> {
    setLatestProduct(products.slice(0,10))
  },[])

  console.log("laestProduct:", laestProduct);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl ">
        <Title text_1={"LATEST"} text_2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          laboriosam omnis nisi quis velit nobis illo soluta veniam sit quam Autem
          laboriosam omnis nisi quis velit nobis illo soluta veniam sit quam.
        </p>
      </div>
      {/* rendering product Items */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {laestProduct && laestProduct.map((item, index)=> {
            const {_id, name, price, image} = item
            return (
                <ProductItem key={index} id={_id} name={name} price={price} image={image} />
            )
        })}
      </div>

    </div>
  );
};

export default LatestCollection;

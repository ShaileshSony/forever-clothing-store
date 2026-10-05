import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/assets.js";
import RelatedProducts from "../components/RelatedProducts.jsx";

const Product = () => {
  const { productId } = useParams();
  console.log(typeof productId);

  const { products } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [productImage, setProductImage] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');

  const { currency } = useContext(ShopContext)

  const fetchSelectedProduct = ()=> {
    const selectedProduct = products.find((item) => item._id === productId)

    if (selectedProduct) {
      setProductData(selectedProduct);
      setProductImage(selectedProduct.image[0])
    }
    // console.log(productData);
    // console.log(productImage);
  }

  useEffect(() => {
    fetchSelectedProduct();
    // console.log(productData);
  }, [productId, products]);

  // useEffect(() => {
  //   console.log(productData);
  // }, [productData]);

  // useEffect(() => {
  //   console.log(productImage);
  // }, [productImage]);

  return productData ? (
    <div className="border-t border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100">

      {/* Product Data */}
     <div className="flex gap-10 sm:gap-12 flex-col sm:flex-row">

      {/* Products Image left side */}
      <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
          {
            productData.image.map((item, index)=>{
              return <img onClick={()=>setProductImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer " alt="" />;
            })
          }
        </div>
        <div className="w-full sm:w-[80%] ">
          <img src={productImage} className="w-full h-auto" alt="" />
        </div>
      </div>

      {/* Product Details right side */}
      <div className="flex-1 flex flex-col gap-1">
        <h1 className="text-2xl sm:text-3xl font-bold ">{productData.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <img src={assets.star_icon} className="w-3 " alt="" />
          <img src={assets.star_icon} className="w-3 " alt="" />
          <img src={assets.star_icon} className="w-3 " alt="" />
          <img src={assets.star_icon} className="w-3 " alt="" />
          <img src={assets.star_dull_icon} className="w-3 " alt="" />
          <p className="pl-2">(150)</p>
        </div>
        <p className="text-2xl font-medium mt-4">{currency}{productData.price}</p>
        <p className=" text-gray-600 mt-5 md:w-4/5 "> {productData.description} </p>

        {/* size button */}
        <div className="flex flex-col gap-4 my-4">
          <p>Select Size</p>
          <div className="flex gap-2">
            {
              productData.sizes.map((item, index) => {
               return <button onClick={()=> setSelectedSize(item)} className={`py-2 px-4 rounded bg-gray-200 text-sm cursor-pointer ${selectedSize === item ? ' border border-orange-500' : ""}`} key={index}>{item}</button>
              })
            }
          </div>
        </div>

        {/* add to cart button */}

        <button className="w-[170px] text-sm bg-black text-white py-3 px-8 rounded cursor-pointer active:bg-gray-700 uppercase">Add to Cart</button>
        <hr className="mt-4 " />
        <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
          <p>100% Original product.</p>
          <p>Cash on delivery available on this products</p>
          <p>Easy return and exchange policy within 7 days</p>
        </div>

        {/* <p className="text-xl font-semibold">${productData.price.toFixed(2)}</p>
        <p className="text-gray-600">{productData.description}</p> */}
      </div>

     </div>

     {/* **********************description section**************** */}
     <div className="mt-20">
      <div className="flex">
        <b className="border border-b-0 border-r-0 py-3 px-5 text-sm">Description</b>
        <p className="border border-b-0 py-3 px-5 text-sm">Review (122)</p>
      </div>
      <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
        <p>Discover the perfect blend of style, comfort, and quality with this versatile product. Designed for everyday wear, it offers a modern look, comfortable fit, and premium feel for any occasion.</p>
        <p>A stylish and comfortable product designed for everyday use. Made with quality materials, it offers a modern look, comfortable fit, and durable performance, making it a great choice for any occasion.</p>
      </div>
     </div>

     {/* ************************Display related products***************** */}
     <div className="mt-20">
       <h2 className="text-xl font-semibold mb-4">Related Products</h2>
       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
     </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;

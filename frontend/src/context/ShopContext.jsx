import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 99;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});


  const addToCart = async (itemId, productSize) => {

    if (!productSize) {
      toast.error("Please select a size before adding to cart.", {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
      });
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][productSize]) {
        cartData[itemId][productSize] += 1
      }
      else {
        cartData[itemId][productSize] = 1;
      }
    }
    else {
      cartData[itemId] = {};
      cartData[itemId][productSize] = 1;
    }

    setCartItems(cartData);
    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 1000,
      theme: "dark",
    });

  }

  // Remove item from cart 
  const removeItemFromCart = (itemId, productSize) => {

    let cartData = structuredClone(cartItems);
    
    if (cartData[itemId]) {
      if (cartData[itemId][productSize] > 0) {
        cartData[itemId][productSize] -= 1;

        if (cartData[itemId][productSize] === 0) {
          delete cartData[itemId][productSize];

          if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId]
          }
        }
      }
    }
    setCartItems(cartData);

  }

  // get cart cout
  const getTotalCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      for (const itemSize in cartItems[itemId]) {
        try  {
          totalCount += cartItems[itemId][itemSize];
        }  catch (error) {
          console.error(`Error accessing cartItems[${itemId}][${itemSize}]:`, error);
        }   
      }
    }
    return totalCount;
  }

  // Get Total Products Amount
  const getTotalProductAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {

      const product = products.find((item) => item._id === itemId);

      if(product) {
        for (const productSize in cartItems[itemId]) {

          const quantity = cartItems[itemId][productSize];

          totalAmount += product.price * quantity

        }
      }

    }

    return totalAmount
  }


  // useEffect(() => {
  //   console.log("cartItems: ", cartItems)
  //   console.log("Total: ", getTotalCartCount())
  // },[cartItems])


  const contextValue = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    removeItemFromCart,
    getTotalCartCount,
    getTotalProductAmount
  };

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
};

export default ShopContextProvider;
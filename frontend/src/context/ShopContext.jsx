import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (itemId, productSize)=> {

    const itemInCart = cartItems.find((item) => item.id === itemId && item.size === productSize);

    if (itemInCart) {
      setCartItems(cartItems.map((item) => item.id === itemId && item.size === productSize ? { ...itemInCart, quantity: itemInCart.quantity + 1 } : item));
    }

    else {
      const itemToAdd = products.find((product) => product._id === itemId);
      setCartItems([...cartItems, { ...itemToAdd, quantity: 1, size: productSize }]);
    }

    

  }

  const contextValue = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch
  };

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
};

export default ShopContextProvider;
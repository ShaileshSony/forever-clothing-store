import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";
import CartProductList from "../components/CartProductList.jsx";
import CartTotal from "../components/CartTotal.jsx";

const Cart = () => {
  const {
    products,
    cartItems,
    currency,
    addToCart,
    removeItemFromCart,
    getTotalProductAmount,
    delivery_fee,
    navigate
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const [delivery, setDelivery] = useState(0);

  useEffect(() => {
    let data = [];

    for (const itemId in cartItems) {
      const product = products.find((item) => item._id === itemId);

      if (product) {
        for (const itemSize in cartItems[itemId]) {
          const quantity = cartItems[itemId][itemSize];
          data.push({
            ...product,
            size: itemSize,
            quantity: quantity,
            totalPrice: product.price * quantity,
          });
        }
      }
    }
    setCartData(data);

    // get total Amount
    // let totalAmount = data.reduce((sum, item) => sum + item.totalPrice, 0);

    // setTotal(totalAmount);
  }, [cartItems, products]);

  console.log("cart: ", cartData);
  // console.log("total price: ", total);

  useEffect(() => {
    const getTotalAmount = getTotalProductAmount();

    if (getTotalAmount > 400) {
      setDelivery(0);
    } else if (getTotalAmount > 0) {
      setDelivery(delivery_fee);
    } else {
      setDelivery(0);
    }

    setTotal(getTotalAmount);
  }, [cartItems, products, delivery_fee, getTotalProductAmount]);

  return (
    <div className="border-t border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="text-2xl mb-3">
        <Title text_1={"YOUR"} text_2={"CART"} />
      </div>

      {/* DISPLAY CART ITEMS */}

      <div className="flex flex-col gap-5">
        {cartData.map((item, index) => {
          return (
            <CartProductList
              key={index}
              item={item}
              removeItemFromCart={removeItemFromCart}
              addToCart={addToCart}
              currency={currency}
            />
          );
        })}
      </div>

      {/* Total cart item prices */}
      <div>
        {Object.keys(cartItems).length > 0 ? (
        <CartTotal total={total} currency={currency} delivery={delivery} />
      ) : (
        <p className="text-center font-bold text-3xl text-gray-400">
          Cart is empty. Add product and buy
        </p>
      )}

      {/* Proceed to Pay Button */}

      <div className="w-full">
        <button onClick={()=> navigate("/place-order")} className="bg-black text-white uppercase font-medium text-sm px-4 py-3 cursor-pointer ">Proceed to checkout</button>
      </div>

      </div>
    </div>
  );
};

export default Cart;

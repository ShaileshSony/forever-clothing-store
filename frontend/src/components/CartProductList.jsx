import React from "react";

const CartProductList = ({item, addToCart, removeItemFromCart, currency}) => {
  return (
    <div
      className="flex justify-between gap-5 border-b border-gray-300 pb-5"
    >
      <div className="w-20 h-20 bg-gray-200">
        <img
          src={item.image[0]}
          className="w-full h-full object-cover"
          alt="prd-image"
        />
      </div>
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-md">
          {currency}
          {item.price.toFixed(2)}
        </p>
        <p className="text-gray-500">Size: {item.size}</p>
        <p className="text-gray-500">Quantity: {item.quantity}</p>
      </div>

      {/* total product price */}
      <div>
        <p className="text-gray-500">Product Price</p>
        <p className="text-md font-bold">
          {currency}
          {item.totalPrice.toFixed(2)}
        </p>
      </div>

      {/* product count increase and decrease buttons */}

      <div>
        <button
          onClick={() => removeItemFromCart(item._id, item.size)}
          className="px-2 py-1 bg-gray-200 rounded-l cursor-pointer"
        >
          -
        </button>
        <span className="px-2 py-1 bg-gray-100">{item.quantity}</span>
        <button
          onClick={() => addToCart(item._id, item.size)}
          className="px-2 py-1 bg-gray-200 rounded-r cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartProductList;

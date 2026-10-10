import React from "react";
import Title from "./Title";

const CartTotal = ({total, currency, delivery}) => {
  return (
    <div className="mt-10 mb-5">
      <div className="text-2xl mb-3">
        <Title text_1={"TOTAL"} text_2={"AMONUT"} />
      </div>

      <div className="flex flex-col w-full sm:w-1/2 gap-0">
        <div className="flex gap-5 items-center justify-between border-b border-gray-300 py-2 ">
          <h5 className="font-medium w-1/2 text-gray-700">
            Total Product Amount
          </h5>
          <p className="text-sm text-gray-600">
            {" "}
            {currency}
            {total}{" "}
          </p>
        </div>

        <div className="flex gap-5 items-center justify-between border-b border-gray-300 py-2 ">
          <h5 className="font-medium w-1/2 text-gray-700">Delivery Fees</h5>
          <div className="flex items-center justify-end gap-2 w-1/2">
            {" "}
            {total <= 400 && total >= 0 && (
              <span className="text-red-700 text-xs text-left">
                {" "}
                Add more products above $400 to get free delivery
              </span>
            )}{" "}
            <p
              className={`text-sm whitespace-nowrap ${total > 400 ? "text-green-700" : "text-gray-600"}`}
            >
              {" "}
              {total > 400 ? "Free Delivery" : `${currency}${delivery}`}{" "}
            </p>{" "}
          </div>
        </div>

        <div className="flex gap-5 items-center justify-between border-b border-gray-300 py-2 ">
          <h5 className="font-medium w-1/2 text-gray-700">Total Amount</h5>
          <p className="text-sm text-gray-600">
            {" "}
            {currency}
            {total + delivery}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

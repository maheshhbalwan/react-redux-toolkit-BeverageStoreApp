import React from "react";
import { useSelector } from "react-redux";
import {getItemsSelector} from "../redux/slice/cartSlice"

const Cart = () => {
  const items = useSelector(getItemsSelector);
  const total = items.reduce((a, b) => a + b.price, 0);
  // console.log("Items", items);
  return (
    <div className="text-center bg-red-400 w-full p-5">
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
        Total Items: {items.length} (Rs. {total})/-
      </h1>
    </div>
  );
};

export default Cart;

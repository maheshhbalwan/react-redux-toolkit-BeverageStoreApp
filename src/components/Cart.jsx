import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slice/cartSlice";

const Cart = () => {
  const items = useSelector(getItemsSelector);
  const total = items.reduce((a, b) => a + b.price, 0);
  // console.log("Items", items);
  return (
    <div class="w-full text-center  p-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... rounded ">
      <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-white md:text-4xl lg:text-5xl ">
        Total Items in Cart: {items.length}
      </h1>
      <h1 className="mb-4 text-3xl font-bold leading-none tracking-tight text-white md:text-4xl lg:text-5xl ">
        Total value of Cart: ₹ {total}/-
      </h1>
    </div>
  );
};

export default Cart;

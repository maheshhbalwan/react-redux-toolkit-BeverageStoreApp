import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
          <img
            className="h-auto max-w-full rounded-lg"
            src={props.image}
            alt={props.productName}
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="mt-2.5 mb-5 text-xl font-semibold tracking-tight text-gray-900 ">
              {props.productName}
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold tracking-tight text-gray-900 ">
            ₹ {props.price}/-
            </span>
            <button
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              onClick={(e) =>
                dispatch(
                  addItem({ name: props.productName, price: props.price })
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

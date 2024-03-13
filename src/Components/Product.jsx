import React from "react";
// import { ImCross } from "react-icons/im";
import {ImCross} from "react-icons/im";
import { removePageItems } from "../Redux/slices/PageItems";

// import { removePageItems } from "../Redux/slices/PageItem";
import { useDispatch } from "react-redux";

const Product = ({ post }) => {
  const dispatch = useDispatch();
  const imgUrl =
    "https://th.bing.com/th/id/OIP.4NgnkuzMjnEV9t1Nj6ImNQHaEo?rs=1&pid=ImgDetMain";

  return (
    <div className="flex flex-col items-center justify-between relative  gap-2 p-1 mt-5 ml-5 rounded border ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate  w-56 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-56 text-gray-400 font-normal text-[10px] text-left ">
          {post.body}{" "}
        </p>
      </div>

      <div className="h-[180px]">
        <img src={imgUrl} className="h-full w-full" alt="" />
      </div>

      <button
        className="text-red-500 absolute top-3 left-80"
        onClick={() => dispatch(removePageItems(post.id))}
      >
        <ImCross />
      </button>
    </div>
  );
};

export default Product;
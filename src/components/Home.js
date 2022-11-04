import React, { useState, useEffect } from "react";
import img1 from "../Images/phone.jpg";

function Home(props) {
  const [model, setModel] = useState(false);
  const swap = () => {
    if (props.data.length > 0) {
      setModel(true);
    } else {
      setModel(false);
    }
  };
  window.addEventListener("click", swap);
  return (
    <div className="flex">
      {/* this is the product 1 */}

      <div className="flex flex-col w-fit mt-10 gap-2 border-2 border-gray-400 p-10 rounded-xl m-8 shadow-2xl">
        <div>
          <img src={img1} />
        </div>
        <span className="font-bold text-xl text-blue-600">Price - 10000</span>
        <span className="font-bold text-xl text-blue-600">Rating - 3.5</span>
        <button
          className="bg-slate-700 text-indigo-50 rounded-lg p-2 hover:bg-slate-400"
          onClick={() => {
            props.addToCartHandler({ pice: 10000, name: "vivo 9x" });
          }}
        >
          Add To Kart
        </button>
        {model && (
          <>
            <button
              className="bg-yellow-600 text-indigo-50 rounded-lg p-2 hover:bg-yellow-400"
              onClick={() => {
                props.removeToCartHandler();
              }}
            >
              Remove To Kart
            </button>
          </>
        )}
      </div>
      {/* this is the product 1 */}

      <div className="flex flex-col w-fit mt-10 gap-2 border-2 border-gray-400 p-10 rounded-xl m-8 shadow-2xl">
        <div>
          <img src={img1} />
        </div>
        <span className="font-bold text-xl text-blue-600">Price - 12000</span>
        <span className="font-bold text-xl text-blue-600">Rating - 3.9</span>
        <button
          className="bg-slate-700 text-indigo-50 rounded-lg p-2 hover:bg-slate-400"
          onClick={() => {
            props.addToCartHandler({ pice: 12000, name: "vivo 10T" });
          }}
        >
          Add To Kart
        </button>
        {model && (
          <>
            <button
              className="bg-yellow-600 text-indigo-50 rounded-lg p-2 hover:bg-yellow-400"
              onClick={() => {
                props.removeToCartHandler();
              }}
            >
              Remove To Kart
            </button>
          </>
        )}
      </div>
      {/* this is the product 1 */}

      <div className="flex flex-col w-fit mt-10 gap-2 border-2 border-gray-400 p-10 rounded-xl m-8 shadow-2xl">
        <div>
          <img src={img1} />
        </div>
        <span className="font-bold text-xl text-blue-600">Price - 14000</span>
        <span className="font-bold text-xl text-blue-600">Rating - 4.0</span>
        <button
          className="bg-slate-700 text-indigo-50 rounded-lg p-2 hover:bg-slate-400"
          onClick={() => {
            props.addToCartHandler({ pice: 14000, name: "vivo 9n" });
          }}
        >
          Add To Kart
        </button>
        {model && (
          <>
            <button
              className="bg-yellow-600 text-indigo-50 rounded-lg p-2 hover:bg-yellow-400"
              onClick={() => {
                props.removeToCartHandler();
              }}
            >
              Remove To Kart
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;

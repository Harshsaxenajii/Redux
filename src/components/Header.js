import React from "react";
import img2 from "../Images/shopping-cart.png";
function Header(props) {
  console.warn(props.data);
 
  return (
    <div>
      <div className="flex items-center w-full justify-between py-2 px-12 bg-cyan-100">
        <h1 className="text-3xl">Redux Site</h1>
        <div className="flex items-center">
          <img className="w-16" src={img2} />
          <span className="text-2xl">{props.data.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

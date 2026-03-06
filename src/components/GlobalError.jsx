import React from "react";
import img from "../assets/Global.svg";

const GlobalError = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-400">
      <img
        src={img}
        alt="Global Error"
        className="w-full max-w-md mx-auto"
      />
    </div>
  );
};

export default GlobalError;
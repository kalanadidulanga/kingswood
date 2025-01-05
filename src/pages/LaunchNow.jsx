import { ArrowRight, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LaunchNow = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLaunch = async () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/");
      setIsLoading(false);
    }, 7500);
  };
  return (
    <div className=" bg-slate-50 w-dvw h-dvh flex flex-col flex-1 justify-center items-center">
      {/* <img src="/gifs/1.gif" alt="roket" /> */}
      <img
        src="/gifs/2.gif"
        alt="count"
        className={`absolute transform w-full h-full z-50 ${
          isLoading ? "block" : "hidden"
        }`}
      />

      <img
        src="/img/bg.png"
        alt="count"
        className={`absolute transform w-full h-full`}
      />

      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="">
          <img src="/logo.png" alt="logo" />
        </div>

        {!isLoading && (
          <button
            className="px-5 py-2 rounded-lg transition-all bg-primary text-white flex items-center gap-2 text-xl font-semibold hover:bg-primary/80 mt-8 tr duration-300 hover:scale-105 hover:shadow-lg hover:gap-8"
            onClick={() => {
              handleLaunch();
            }}
          >
            {/* {isLoading && <Loader2 className="animate-spin" />} */}
            {/* <Loader2 className="animate-spin" /> */}
            {isLoading ? "Launching..." : "Launch Now"}
            <ArrowRight className=" " />
          </button>
        )}
      </div>
    </div>
  );
};

export default LaunchNow;

import { Loader2 } from "lucide-react";
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
    }, 3000);
  };
  return (
    <div className=" bg-slate-500 w-dvw h-dvh flex flex-col flex-1 justify-center items-center">
      <img src="/gifs/1.gif" alt="roket" />
      <button
        className="px-4 py-2 rounded-lg transition-colors bg-red-500 text-white flex items-center gap-2"
        onClick={() => {
          handleLaunch();
        }}
      >
        {isLoading && <Loader2 className="animate-spin" />}
        {/* <Loader2 className="animate-spin" /> */}
        {isLoading ? "Launching..." : "Launch Now"}
      </button>
    </div>
  );
};

export default LaunchNow;

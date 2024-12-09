import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full relative">
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loading;

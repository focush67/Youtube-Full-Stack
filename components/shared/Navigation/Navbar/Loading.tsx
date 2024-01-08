"use client";
import ReactLoading from "react-loading";

export const LoadingBar = () => {
  return (
    <div className="flex flex-col items-center justify-center m-[10%]">
      <ReactLoading
        type="spinningBubbles"
        color="red"
        height="50px"
        width="200px"
      />
    </div>
  );
};

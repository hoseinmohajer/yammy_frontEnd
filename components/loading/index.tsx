import React from "react";
import Image from "next/image";

export const FullScreenLoading = () => {
  return (
    <div className="loader_bg">
      <div className="loader">
        <Image width={500} height={500} layout='intrinsic' src="/images/loading.gif" alt="loading" />
      </div>
    </div>
  );
};

export const Loading = () => {
  return <div>Loading ...</div>
};
